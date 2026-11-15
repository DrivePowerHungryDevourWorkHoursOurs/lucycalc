// keep-set.js - "Keep set when swapping Pokemon" toggle for each side (#p1, #p2).
//
// With the toggle ON, picking a different Pokemon in the set dropdown changes ONLY the species
// (base stats, types, forme, default ability). These are carried over from the loaded set:
//   Level, EVs, IVs (and DVs / SPs), Nature, Item, the 4 moves (plus each move's crit / Z /
//   custom BP, type, category and hit-count settings).
// Picking another set of the SAME Pokemon still loads that set normally, and anything that loads a
// Pokemon in code (trainer party, imports, default sets) is unaffected - only a manual pick keeps.
//
// Load AFTER jQuery and shared_controls.js. All CSS is injected from here.

$(function () {
	var STORE_KEY = "keepSetOnSwap:";
	var pending = {}; // side id -> snapshot taken just before a manual species pick

	function store(side, val) {
		try {
			if (val === undefined) return localStorage.getItem(STORE_KEY + side) === "1";
			localStorage.setItem(STORE_KEY + side, val ? "1" : "0");
		} catch (e) {}
		return !!val;
	}

	function speciesOf(fullSetName) {
		fullSetName = fullSetName || "";
		var i = fullSetName.indexOf(" (");
		return i < 0 ? fullSetName : fullSetName.substring(0, i);
	}

	function stats() {
		return (typeof LEGACY_STATS !== "undefined" && LEGACY_STATS[gen]) ? LEGACY_STATS[gen] : ["hp", "at", "df", "sa", "sd", "sp"];
	}

	function snapshot($info) {
		var snap = { level: $info.find(".level").val(), nature: $info.find(".nature").val(),
			item: $info.find(".item").val(), stats: {}, moves: [] };
		stats().forEach(function (s) {
			snap.stats[s] = {
				evs: $info.find("." + s + " .evs").val(), ivs: $info.find("." + s + " .ivs").val(),
				dvs: $info.find("." + s + " .dvs").val(), sps: $info.find("." + s + " .sps").val()
			};
		});
		for (var i = 1; i <= 4; i++) {
			var $m = $info.find(".move" + i);
			snap.moves.push({
				name: $m.find("select.move-selector").val(),
				bp: $m.find(".move-bp").val(), type: $m.find(".move-type").val(), cat: $m.find(".move-cat").val(),
				hits: $m.find(".move-hits").val(), times: $m.find(".move-times").val(),
				crit: $m.find(".move-crit").prop("checked"), z: $m.find(".move-z").prop("checked")
			});
		}
		return snap;
	}

	function setIfValid($sel, value, fallback) {
		if (value === undefined || value === null) return;
		$sel.val(value);
		if ($sel.val() !== value) $sel.val(fallback);
	}

	function restore($info, snap) {
		var i;
		$info.find(".level").val(snap.level);
		stats().forEach(function (s) {
			var v = snap.stats[s];
			if (v.evs !== undefined) $info.find("." + s + " .evs").val(v.evs);
			if (v.ivs !== undefined) $info.find("." + s + " .ivs").val(v.ivs);
			if (v.dvs !== undefined) $info.find("." + s + " .dvs").val(v.dvs);
			if (v.sps !== undefined) $info.find("." + s + " .sps").val(v.sps);
		});
		setIfValid($info.find(".nature"), snap.nature, "Hardy");
		setIfValid($info.find(".item"), snap.item, "");

		// Moves: let the calc's own move handler refill BP/type/category, then put back any manual edits.
		for (i = 0; i < 4; i++) {
			var m = snap.moves[i];
			var $m = $info.find(".move" + (i + 1));
			var $sel = $m.find("select.move-selector");
			$sel.attr("data-prev", $sel.val());
			setIfValid($sel, m.name, "(No Move)");
			$sel.change();
			if ($sel.val() === m.name) {
				if (m.bp !== undefined) $m.find(".move-bp").val(m.bp);
				if (m.type !== undefined) $m.find(".move-type").val(m.type);
				if (m.cat !== undefined) $m.find(".move-cat").val(m.cat);
				if (m.hits !== undefined) $m.find(".move-hits").val(m.hits);
				if (m.times !== undefined) $m.find(".move-times").val(m.times);
				$m.find(".move-crit").prop("checked", m.crit);
				$m.find(".move-z").prop("checked", m.z);
			}
		}

		// Same tail the calc runs after loading a set, so stats / HP match the restored EVs and IVs.
		if (typeof totalEVs === "function") totalEVs($info);
		calcStats($info);
		var total = $info.find(".hp").find(".total").text();
		$info.find(".max-hp").text(total).attr("data-prev", total);
		$info.find(".current-hp").val(total).attr("data-set", true);
		calcHP($info);
		$info.find(".item").change();
	}

	// ---- UI ---------------------------------------------------------------------------------
	$("<style>").text([
		// main.css forces ".poke-info span" to 2.5em wide and ".poke-info label" to 6em wide, so override both.
		".poke-info .keep-set-wrap{display:block;width:auto;margin:4px 0 4px 2px;font-size:12px;white-space:nowrap}",
		".poke-info .keep-set-wrap input{vertical-align:middle;margin:0 3px 0 0}",
		".poke-info .keep-set-wrap label{display:inline;width:auto;cursor:pointer}"
	].join("\n")).appendTo("head");

	$(".poke-info").each(function () {
		var $info = $(this);
		var side = $info.attr("id");
		var $sel = $info.find("input.set-selector").first();
		if (!side || !$sel.length || $info.find(".keep-set-wrap").length) return;

		var id = "keepSet-" + side;
		var $wrap = $('<div class="keep-set-wrap" title="When on, picking a different Pok\u00e9mon keeps this set\u2019s level, EVs, IVs, nature, item and moves"></div>');
		var $box = $('<input type="checkbox">').attr("id", id).prop("checked", store(side)).appendTo($wrap);
		$("<label></label>").attr("for", id).text("Keep set when swapping Pok\u00e9mon").appendTo($wrap);
		$box.on("change", function () { store(side, this.checked); });

		// Layout: [Only show imported sets] / [Keep set toggle] / [Clear Imported Sets].
		// The imported-sets block is hidden until sets are imported, so the toggle sits just under the
		// dropdown while it is hidden and moves inside the block (above its button) once it shows.
		var $imp = $sel.next("span");
		function place() {
			var showInside = $imp.length && $imp.css("display") !== "none" && $imp.children("button").length;
			var wantParent = showInside ? $imp[0] : $sel.parent()[0];
			if ($wrap[0].parentNode === wantParent) return;
			if (showInside) $imp.children("button").first().before($wrap);
			else if ($imp.length) $imp.before($wrap);
			else $sel.after($wrap);
		}
		place();
		setInterval(place, 400);
	});

	// ---- behaviour ------------------------------------------------------------------------------
	// select2 fires this on a manual pick, BEFORE the value changes and before the calc overwrites the form.
	$(".set-selector").on("select2-selecting", function (e) {
		var $info = $(this).closest(".poke-info");
		var side = $info.attr("id");
		if (!side || !$info.find(".keep-set-wrap input").prop("checked")) return;
		var oldSpecies = speciesOf($(this).val());
		var newSpecies = speciesOf(e.val);
		if (!oldSpecies || oldSpecies === newSpecies) return;   // same Pokemon: load the chosen set normally
		pending[side] = snapshot($info);
		setTimeout(function () { delete pending[side]; }, 0);   // the change event fires synchronously after this
	});

	// Bound after shared_controls.js, so this runs once the calc has loaded the new species' set.
	$(".set-selector").on("change.keepset", function () {
		var $info = $(this).closest(".poke-info");
		var side = $info.attr("id");
		var snap = pending[side];
		if (!snap) return;
		delete pending[side];
		restore($info, snap);
	});
});
