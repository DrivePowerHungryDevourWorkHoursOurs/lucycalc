// ability-cycle.js - an ability button next to each Item bag button (#p1 and #p2).
// It shows which ability slot the loaded Pokemon is using: 1 (first), 2 (second) or H (hidden).
// Clicking it moves to the next ability the Pokemon actually has, wrapping back to the start.
// Missing slots are skipped, and a Pokemon with only one ability is left unchanged (button dims).
// If the ability is something custom that isn't one of the Pokemon's own, the button shows "?"
// and the next click puts it on the first ability.
//
// Load AFTER jQuery, shared_controls.js and item-bag.js. All CSS is injected from here.

$(function () {
	// [label shown on the button, key in the calc's pokedex abilities object]
	var SLOTS = [["1", "0"], ["2", "1"], ["H", "H"]];

	// Same species lookup the calc itself uses when it builds a Pokemon (set name, or Forme dropdown)
	function speciesName($info) {
		var setName = $info.find("input.set-selector").first().val() || "";
		if (setName.indexOf("(") === -1) return setName;
		var base = setName.substring(0, setName.indexOf(" ("));
		var sp = (typeof pokedex !== "undefined") ? pokedex[base] : null;
		if (sp && (sp.otherFormes || (sp.baseSpecies && sp.baseSpecies !== base))) {
			var forme = $info.find(".forme").val();
			if (forme) return forme;
		}
		return base;
	}

	function toId(n) { return String(n).toLowerCase().replace(/[^a-z0-9]+/g, ""); }

	// The calc's own species data only keeps ability 1 (plus whatever rc_overrides adds), so no hidden ability
	// there. The dex data that rc_overrides.js loads (RC_LIVE) has all three slots, so prefer that.
	function abilitiesFor(name) {
		if (typeof RC_LIVE !== "undefined" && RC_LIVE && typeof gen !== "undefined" && gen === 9) {
			var live = RC_LIVE[toId(name)];
			if (live && live.abilities) return live.abilities;
		}
		var sp = (typeof pokedex !== "undefined") ? pokedex[name] : null;
		return sp && sp.abilities;
	}

	// The Pokemon's real abilities, in slot order: [{label: "1", name: "Overgrow"}, ...]
	function slotsFor($info) {
		var ab = abilitiesFor(speciesName($info));
		if (!ab) return [];
		return SLOTS.filter(function (s) { return ab[s[1]]; })
			.map(function (s) { return { label: s[0], name: ab[s[1]] }; });
	}

	function indexOfCurrent(slots, current) {
		for (var i = 0; i < slots.length; i++) if (slots[i].name === current) return i;
		return -1;
	}

	// The next slot whose ability differs from the current one (skips missing slots and duplicates)
	function nextSlot(slots, current) {
		var start = indexOfCurrent(slots, current);
		for (var i = 1; i <= slots.length; i++) {
			var cand = slots[(start + i) % slots.length];
			if (cand.name !== current) return cand;
		}
		return null;
	}

	$("<style>").text([
		".ac-btn{display:inline-block;vertical-align:middle;margin-left:6px;width:40px;height:40px;padding:0;",
		"  background:#333;border:2px solid #555;border-radius:4px;cursor:pointer;box-shadow:none;",
		"  color:#fff;font:bold 18px Verdana,sans-serif;line-height:1;text-shadow:none}",
		".ac-btn:hover{background:#444;border-color:#999}",
		".ac-btn.ac-off{opacity:.45;cursor:default}",
		".ac-btn.ac-off:hover{background:#333;border-color:#555}"
	].join("\n")).appendTo("head");

	$(".poke-info").each(function () {
		var $info = $(this);
		var $sel = $info.find("select.item").first();
		var $ability = $info.find("select.ability").first();
		if (!$sel.length || !$ability.length || $info.find(".ac-btn").length) return;

		var $btn = $('<button type="button" class="ac-btn">1</button>');

		function refresh() {
			var slots = slotsFor($info);
			var current = $ability.val();
			var idx = indexOfCurrent(slots, current);
			var canCycle = !!nextSlot(slots, current);
			$btn.toggle(slots.length > 0);   // no abilities in the older gens
			$btn.text(idx >= 0 ? slots[idx].label : "?");
			$btn.toggleClass("ac-off", !canCycle);
			$btn.attr("title", slots.length
				? "Ability " + (idx >= 0 ? slots[idx].label + ": " : "(custom): ") + (current || "(other)") +
					(canCycle ? " - click to switch" : " - this Pok\u00e9mon has no other ability")
				: "");
		}

		$btn.on("click", function (e) {
			e.preventDefault();
			var slots = slotsFor($info);
			var next = nextSlot(slots, $ability.val());
			if (!next) return;                       // only one ability: nothing to change
			$ability.val(next.name);
			if ($ability.val() !== next.name) return; // not in this gen's ability list
			$ability.change();                       // lets the calc react (weather/terrain abilities, recalculation)
			refresh();
		});

		// Sit right after the item bag button (or after the item dropdown if the bag isn't there)
		function place() {
			var $bag = $sel.nextAll(".ib-btn").first();
			var target = $bag.length ? $bag[0] : $sel[0];
			if ($btn.prev()[0] !== target) $(target).after($btn);
		}

		place();
		refresh();
		$ability.on("change keyup", refresh);
		$info.find("input.set-selector").on("change", refresh);
		$info.find(".forme").on("change", refresh);
		setInterval(function () { place(); refresh(); }, 300); // also catches sets loaded by code (trainer party, box)
	});
});
