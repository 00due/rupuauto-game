/*:
@plugindesc Changing enemy image when below certain %mhp
<EST ENEMY IMAGE CONTROL MZ>
@author Estriole
@target MZ

@param suffixList
@text Suffix List
@type struct<suffix>[]
@default ["{\"suffix\":\"weak_50\",\"stateAffected\":\"[]\",\"percentHP\":\"50\",\"percentMP\":\"100\",\"priority\":\"1\"}","{\"suffix\":\"weak_30\",\"stateAffected\":\"[]\",\"percentHP\":\"30\",\"percentMP\":\"100\",\"priority\":\"1\"}","{\"suffix\":\"weak_10\",\"stateAffected\":\"[]\",\"percentHP\":\"10\",\"percentMP\":\"100\",\"priority\":\"1\"}","{\"suffix\":\"weak_poisoned_blinded\",\"stateAffected\":\"[\\\"4\\\",\\\"5\\\"]\",\"percentHP\":\"50\",\"percentMP\":\"100\",\"priority\":\"2\"}"]

*/
/*~struct~suffix:
@param suffix
@text Suffix
@desc The suffix of the filename... name the weak image file: originalname[yoursuffixhere]
@type string
@default weak

@param stateAffected
@text State Affected
@desc Battler use this suffix only if affected by ALL this state
@type Number[]
@min 0
@default []

@param percentHP
@text %HP
@desc Battler use this suffix after hp below this % max hp (WITHOUT % just use the number)
@type Number
@min 0
@max 100
@default 100

@param percentMP
@text %MP
@desc Battler use this suffix after mp below this % max mp (WITHOUT % just use the number)
@type Number
@min 0
@max 100
@default 100

@param priority
@text Priority
@desc Priority Level of this suffix. lower -> will be used first
@type Number
@default 1


*/
/*
@help
 ■ Information      ╒══════════════════════════╛
 EST - ENEMY IMAGE CONTROL MZ
 Version: 1.0
 By Estriole
 File name: EST_ENEMY_IMAGE_CONTROL.js

 ■ Introduction     ╒══════════════════════════╛
 This plugin is for changing the enemy battler graphic
 when the certain condition are met...

 ■ Features         ╒══════════════════════════╛
 - change enemy graphic when certain condition are met
 - you define your own notetags & suffix
 - priority order on specific condition

  ■ Changelog       ╒══════════════════════════╛
 v1.0 2020.10.26           Finish the plugin
 v1.1 2020.10.27           - Change the name to EST - IMAGE CONTROL MZ
                           - ability to have state , hp, mp check for the battler image.

 ■ Plugin Download ╒══════════════════════════╛
 https://www.dropbox.com/s/cu52wa7m12132vs/EST_ENEMY_IMAGE_CONTROL_MZ.js?dl=0

 ■ Screenshots ╒══════════════════════════╛
 Coming Soon
  
 ■ Demo ╒══════════════════════════╛
 https://www.dropbox.com/sh/vhf1jhpydfr3vne/AACXtmj85frlI81AAmAcK50Ha?dl=0
 click download to download the entire folder.

 ■ How to use       ╒══════════════════════════╛
 1> install the plugin
 2> open plugin parameter. add your suffix entry there
 		suffix -> your suffix name
    State Affected -> the suffix will active if enemy affected by all this state
 		%hp    -> percentage maxhp when hp below that the suffix will take effect 
    %mp    -> percentage maxmp when mp below that the suffix will take effect
    priority -> lower priority will be used. 
                if same priority. the bottom one in the plugin parameter will be used.

    the suffix will be used to the enemy ONLY if all the condition are met.
    if there's one condition not met then the suffix will not be used.
    if you don't want to have state... just don't fill the State Affected list.
    if you don't want hp and mp check... just fill 100.
 
 3> in the enemy Database notetags add [yoursuffixname]
 4> in your img/sv_enemies/ folder... add the weak form and add [yoursuffixname] after
 the original name:
 ex:
 Original: Gnome.png
 first suffix is weak_30
 create a file named Gnome[weak_30].png

 second suffix is weak_10
 create a file named Gnome[weak_10].png

 WARNING!!! if you put the suffix notetags in the enemy notetags... 
 you must remember to add the battler image with suffix too !!! 
 or it will throw error AFTER battle when it cannot find the file.

 ■ Dependencies     ╒══════════════════════════╛
 none

 ■ Compatibility    ╒══════════════════════════╛
 MZ is new engine... so i cannot say for sure. 
 but it should be compatible with most things.

 This might not "fully compatible" with plugins that
 modify battler name... it could work if that plugin put above my plugin...
 but you must have every combination variation of the filename required.

 ■ Parameters       ╒══════════════════════════╛
  >> Suffix List
	 + Suffix -> The suffix of the filename... name the "weak form" image file: 
	 			 originalname[yoursuffixhere] 
	 			 ex: 
	 			 Suffix: weak_30
	 			 Original Enemy Filename: Gnome.png
	 			 weak form filename: Gnome[weak_30].png
   + State Affected -> Battler use this suffix only if affected by ALL this state
                       this is a list of number of state id.          
	 + %HP -> Battler use this suffix after hp below this % max hp 
	 		  ex: 30 => will change graphic when hp below 30 percent max hp
	 		  (WITHOUT %... just use the number so 30% will throw error. use 30)
   + %MP -> Battler use this suffix after hp below this % max hp 
        ex: 30 => will change graphic when hp below 30 percent max hp
        (WITHOUT %... just use the number so 30% will throw error. use 30)
   + Priority -> Priority Level of this suffix. lower -> will be used first 

 ■ License          ╒══════════════════════════╛
 Free to use in all project (except the one containing pornography)
 as long as i credited (ESTRIOLE). 

 ■ Extra Credit ╒══════════════════════════╛
 None

 ■ Support          ╒══════════════════════════╛
 While I'm flattered and I'm glad that people have been sharing and 
 asking support for scripts in other RPG Maker communities, I would 
 like to ask that you please avoid posting my scripts outside of where 
 I frequent because it would make finding support and fixing bugs 
 difficult for both of you and me.
   
 If you're ever looking for support, I can be reached at the following:
 [ http://forums.rpgmakerweb.com/ ]
 pm me : estriole

 also support to compatibility with VisuStella is not possible.
 because their code is obfuscated thus cannot be read by human.
 if there's incompatibility... please ask VisuStella Team.

 ■ Donate  ╒══════════════════════════╛
 If you want to support my work you can donate here
 https://paypal.me/Estriole

 ■ Author's Notes   ╒══════════════════════════╛
 None

*/
var EST = EST || {};
EST.EnemyImageControl = EST.NewPlugin || {};
EST.EnemyImageControl.pluginName="EST_ENEMY_IMAGE_CONTROL_MZ";

EST.EnemyImageControl.Parameters = PluginManager.parameters(EST.EnemyImageControl.pluginName);
EST.EnemyImageControl.Parameters.suffixList = JSON.parse(EST.EnemyImageControl.Parameters.suffixList);

if(EST.EnemyImageControl.Parameters.suffixList){
  for (const [i,cmd] of EST.EnemyImageControl.Parameters.suffixList.entries()){
    EST.EnemyImageControl.Parameters.suffixList[i] = JSON.parse(cmd);
  };	
};

EST.EnemyImageControl.Parameters.suffixList.sort(function(a,b){
	return b.priority - a.priority;
});

(function($){

$.Game_Enemy_battlerName = Game_Enemy.prototype.battlerName;
Game_Enemy.prototype.battlerName = function() {
    return $.Game_Enemy_battlerName.call(this) + this.battlerSuffix();
};

Game_Enemy.prototype.battlerSuffix = function() {
    this._battlerSuffix = "";
    if (this.getSuffix()) {
	    this._battlerSuffix = "["+this.getSuffix()+"]";    
    };
    return this._battlerSuffix;
};

Game_Enemy.prototype.getSuffix = function() {
    if (!$dataEnemies[this._enemyId]) return false;
    var note = $dataEnemies[this._enemyId].note;
    var suffix = false;
    for (entry of EST.EnemyImageControl.Parameters.suffixList){
      var chkHP = true;
      var chkMP = true;
      var chkStates = true;
      chkHP = this.hp <= this.mhp * Number(entry.percentHP)/100
      chkMP = this.mp <= this.mmp * Number(entry.percentMP)/100
         for (state of JSON.parse(entry.stateAffected)) {
          chkStates = chkStates && this.isStateAffected(Number(state));
         };
      if(note.match(new RegExp(entry.suffix, 'im')) && chkHP && chkMP && chkStates) suffix = entry.suffix;
    };
    return suffix;
};

})(EST.EnemyImageControl);