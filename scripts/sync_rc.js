// Refreshes the fallback tables in rc_overrides.js from the dex.
// Usage (Node 18+):  node scripts/sync_rc.js   (optionally pass a path to rc_overrides.js)
// Optional: run on a schedule (e.g. GitHub Action) and commit the result.
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const DEX_URL = 'https://dex.pbblegacy.com/data/pokedex.js';
// Defaults to <project>/src/js/rc_overrides.js no matter where it is run from.
const target = process.argv[2] || path.join(__dirname, '..', 'src', 'js', 'rc_overrides.js');
const STAT = { hp: 'hp', atk: 'at', def: 'df', spa: 'sa', spd: 'sd', spe: 'sp' };

(async () => {
	const res = await fetch(DEX_URL);
	if (!res.ok) throw new Error('Dex fetch failed: ' + res.status);
	const sandbox = { exports: {} };
	vm.runInNewContext(await res.text(), sandbox, { timeout: 10000 });
	const dex = sandbox.exports.BattlePokedex;
	if (!dex || !Object.keys(dex).length) throw new Error('BattlePokedex missing or empty');

	const stats = {}, types = {}, abil = {};
	const skipped = [];
	for (const id of Object.keys(dex)) {
		const e = dex[id];
		// Some dex entries (e.g. placeholders) have no stats; skip them.
		if (!e || !e.name || !e.baseStats) { skipped.push(id); continue; }
		stats[e.name] = {};
		for (const k in STAT) if (typeof e.baseStats[k] === 'number') stats[e.name][STAT[k]] = e.baseStats[k];
		if (e.types) types[e.name] = e.types;
		const ab = e.abilities || {};
		abil[e.name] = { 0: ab['0'] || null, 1: ab['1'] || null };
	}
	if (skipped.length) console.log('Skipped ' + skipped.length + ' entries without stats: ' + skipped.slice(0, 10).join(', ') + (skipped.length > 10 ? ', ...' : ''));

	let src = fs.readFileSync(target, 'utf8');
	const replaceVar = (name, value) => {
		const re = new RegExp('^var ' + name + ' = .*;$', 'm');
		if (!re.test(src)) throw new Error('Could not find var ' + name + ' in ' + target);
		src = src.replace(re, () => 'var ' + name + ' = ' + JSON.stringify(value) + ';');
	};
	replaceVar('RC_STAT_OVERRIDES', stats);
	replaceVar('RC_TYPE_OVERRIDES', types);
	replaceVar('RC_ABILITY_OVERRIDES', abil);
	fs.writeFileSync(target, src);
	console.log('Updated ' + target + ' with ' + Object.keys(stats).length + ' species.');
})().catch(e => { console.error(e); process.exit(1); });
