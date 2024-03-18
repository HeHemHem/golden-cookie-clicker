// ==/UserScript==

/* global Game:false, GM_info:false */
function executeAutoActions() {
  if (Game.T % (Game.fps * 0.5) !== 0) {
    // Game logic ticks very fast, only trigger every 0.5s
    return;
  }

  // Click all golden cookies
  Game.shimmers.forEach(obj => obj.pop());

  // Harvest sugar lumps
  if ((new Date() - Game.lumpT) > Game.lumpRipeAge) {
    Game.harvestLumps(1);
  }
  
function installHelper() {
  // Startup notification
  let version = GM_info.script.version;
  note(`Version ${version} loaded.`);

  // Do not click toggle upgrades
  blockingUpgrades = blockingUpgrades.concat(Game.UpgradesByPool['toggle'].map(obj => obj.id));

  Game.customLogic.push(executeAutoActions);
}

function note(msg, quick = true) {
  // Icon: img/icons.png 0-based indices
  Game.Notify('Auto-CookieClicker', msg, [12, 0], quick, true);
}

(() => window.setTimeout(installHelper, 1000))();
