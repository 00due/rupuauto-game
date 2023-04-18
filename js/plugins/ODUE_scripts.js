/*:
 * @plugindesc omat scriptit
 * @author ODUE
 * @target MZ
 * @param OS
 * @desc järjestelmä, jolle tehdään
 * @type select
 * @default win
 * @option Windows
 * @value win
 * @option Linux / Mac
 * @value lin
 */

// Hiiren poistaminen
TouchInput.initialize = function() {
    this.clear();
};
// Näppäimet
Input.keyMapper = {
	9: 'tab',		//tab
    16: 'shift',	// shift
    37: 'left',	// left arrow
    38: 'up',		// up arrow
    39: 'right',	// right arrow
    40: 'down',	// down arrow
    88: 'escape',	// X
    90: 'ok',		 // Z
    //120: 'debug'	// F9

};
// menun poisto
(function() {
	
	var oldDataManager_SetupNewGame = DataManager.setupNewGame
	DataManager.setupNewGame = function() {
		oldDataManager_SetupNewGame.call(this)
		$gameSystem.disableMenu()
	};
})()

// poistaa fast forwardin move routeista
 Scene_Map.prototype.isFastForward = function() {
	return false
};

// poistaa fast forwardin tekstista
// Window_Message.prototype.updateShowFast = function() {
// 	return false
// };

// Battle log vihollisten nimii
btLogD =  Window_BattleLog.prototype.displayAction
Window_BattleLog.prototype.displayAction = function(alph, skill) {
    if (DataManager.isSkill(skill)) {
        this.checkCustomText(alph, skill);
    }
    btLogD.call(this, alph, skill)
};

Window_BattleLog.prototype.checkCustomText = function(alph, skill) {
    var alph = alph.name();
    var tg = BattleManager._targets[0].name();

    // ######################
    // # ALPH ON HYOKKAAJA! #
    // ######################

    if (skill.id === 1) {
        var msg1 = "Alph punches " + tg + "!";
        var msg2 = "";
    }
    if (skill.id === 3) {
        var msg1 = alph + " attacks " + tg + "!";
        var msg2 = "";
    }
    if (skill.id === 2) {
        var msg1 = alph + " bites " + tg + " with its teeth!";
        var msg2 = "";
    }
    if (skill.id === 6) {
        var msg1 = alph + " wants to get back to the sea.";
        var msg2 = "";
    }
    if (skill.id === 8) {
        var msg1 = alph + " started craving donuts.";
        var msg2 = "";
    }
    if (skill.id === 9) {
        var msg1 = alph + " electrocutes " + tg + "!";
        var msg2 = "";
    }
    if (skill.id === 10) {
        var msg1 = alph + " smashes " + tg + "!";
        var msg2 = "";
    }
    if (skill.id === 11) {
        var msg1 = alph + " started meditating!";
        var msg2 = "";
    }

 
    if (msg1) this.push('addText', msg1);
    if (msg2) this.push('addText', msg2);
}

// Critical hit sfx
Game_Action.prototype.makeDamageValue = function(target, critical) {
    var item = this.item();
    var baseValue = this.evalDamageFormula(target);
    var value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
        AudioManager.playSe({name: "ALPH_battLeftaMark", pan: 0, pitch: 100, volume: 100})
    }
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};

/*##############
  #JÄRJESTELMÄ!#
  #############*/
let windows = false;
(function() {
    var parameters = PluginManager.parameters('ODUE_scripts');
    
    switch (parameters['OS']) {
        case "win":
            windows = true;
            return windows;
            break;
        case "lin":
            windows = false;
            break;
    }
})();

//save
if (windows == true) {
    appdatapath = process.env.LOCALAPPDATA || process.env.LOCAL_APPDATA;
    savepath = appdatapath + "/ALPH/"

    var fs = require('fs');
    if (!fs.existsSync(savepath)) {
        fs.mkdirSync(savepath)
    }
    if(StorageManager.fileDirectoryPath){
        StorageManager.fileDirectoryPath = function() {
            return savepath;
        }
    }
}



//JSON asetukset

let gbC = 0;
let volC = 0;
let tiC = 0;
let nosC = 0;

if (windows == true) {
    csettPath = savepath + 'csett.json';
}
else {
    csettPath = 'save/csett.json';
}

var fs = require('fs');
if (fs.existsSync(csettPath)) {

    var fs = require('fs');
    var json = fs.readFileSync(csettPath, 'utf8');
    var data = JSON.parse(json);

    volC = data.volume;
    gbC = data.gbloksSkip;
    tiC = data.oldTitle;
    nosC = data.noOldSave

} else {
    volC = 100;
    gbC = 0;
    tiC = 0;
    nosC = 0

    var data = {
        volume: 100,
        gbloksSkip: 0,
        oldTitle: 0,
        noOldSave: 0
    }
    var json = JSON.stringify(data);
    var fs = require('fs');
    fs.writeFileSync(csettPath, json, 'utf8');
};




// kaynnistaa pelin full screenissa
// Graphics._requestFullScreen();

/*($ => {
    $.start = function () {
        this.resizeScreen();
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);
        this.updateDocumentTitle();
}
})*/


//(Scene_Boot.prototype);
