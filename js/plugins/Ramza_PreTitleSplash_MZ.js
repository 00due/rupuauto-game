//=============================================================================
// Ramza Plugins - Pre-Title Splsh Events
// Ramza_PreTitleSplash_MZ.js
// v1.02
//=============================================================================

var Ramza = Ramza || {};
var Imported = Imported || {}
Ramza.PTS = Ramza.PTS || {};
Ramza.PTS.version = 1.02
Imported['Ramza_PreTitleSplash_MZ'] = true

//=============================================================================
//=============================================================================
/*:
 * @target MZ
 * @plugindesc v1.02 Enables a configurable splash screen which shows images, or plays videos in sequence prior to the title screen. 
 * @author Ramza
 *
 * @param SkipMode
 * @text Skip Mode
 * @type select
 * @option Current
 * @option All
 * @option Ignore
 * @desc When the player presses an input, what screen will be skipped?
 * @default Current
 *
 * @param Screens
 * @text Splash Screens
 * @type struct<splashscreens>[]
 * @desc List of splash screens that are shown in order.
 * @default []
 * 
 * @param WaitFrames
 * @text Wait Frames
 * @desc How many frames to wait between splash screens?
 * @type number
 * @default 120
 *
 * @param FadeInFrames
 * @text Fade In Frames
 * @desc How many frames it takes an image splash to fade in.
 * @type number
 * @default 90
 * 
 * @param FadeOutFrames
 * @text Fade Out Frames
 * @desc How many frames it takes an image splash to fade out.
 * @type number
 * @default 90
 *
 * @param HoldFrames
 * @text Static Image Frames
 * @desc How many frames a static splash screen stays on screen for before fading out.
 * @type number
 * @default 360
 *
 *
 * @help
 * ============================================================================
 * Description:
 * ============================================================================
 *
 * This plugin allows you to show one or more splash screen before the title
 * screen loads. A screen can be a static image, or a video.
 *
 * If an image is used, the image is always loaded in the exact center of the 
 * screen. The image fades in for a configurable number of frames, then pauses
 * for another configurable number of frames, then fades out for a third
 * configurable number of frames. An individual image can have its hold time 
 * longer or shorter than the default, meaning you can specify on an individual
 * basis how long each image stays on the screen.
 *
 * A video will simply play in fullscreen mode until complete. It will maintain
 * aspect ratio automatically, so you may see black bars on the sides or top
 * and bottom of the video if the aspect ratio isn't the same as your project.
 * 
 * After a splash (image or video) plays, a configurable amount of time is 
 * waited before the next one. When there are no more, the titlescreen will 
 * load as normal.
 *
 * You can configure what happens if a player presses ok or cancel, or clicks 
 * the mouse during these splash screens. Either the current splash is skipped,
 * all remaining screens are skipped, and the title screen is shown, or nothing
 * happens at all.
 *
 * ============================================================================
 * Terms of Use:
 * ============================================================================
 * 
 * -Free for commercial and non-commercial use, with credit to me, Ramza.
 * -Do not edit the header of this plugin, or claim sole ownership of it.
 * -Editing the plugin to add new features, or fix compatibility problems is 
 *  allowed.
 * -Redistributing this plugin is also allowed.
 *
 * ============================================================================
 * Changelog:
 * ============================================================================
 *
 * Version 1.02:
 * -Corrected an issue where I incorrectly declared a variable as a constant,
 *  which caused a crash error together with other plugins that did the same 
 *  thing in the same place which happened to have the same name. (like my 
 *  screen idle video plugin)
 *
 * Version 1.01:
 * -Corrected a Crash bug where left clicking anywhere other than the splash 
 *  screen could cause the engine to crash.
 *
 * Version 1.00:
 * -Initial release
 * 
 * **end of help file**
*/
/*~struct~splashscreens:
 * @param Type
 * @type select
 * @option Image
 * @option Video
 * @desc Is this an image or a video splash?
 * @param File
 * @desc The filename of the splash to show, include the folder
 * Eg: /movies/splash1.webm /img/pictures/splash2.png
 * @param CustomHold
 * @type number
 * @desc If this is an Image, how long will it stay on the screen for?
*/

//Initialize plugin params
var params = PluginManager.parameters('Ramza_PreTitleSplash_MZ')
Ramza.PTS.params = {}
Ramza.PTS.params.skipMode = String(params['SkipMode'])
Ramza.PTS.params.waitFrames = Number(params['WaitFrames'])
Ramza.PTS.params.fadeInFrames = Number(params['FadeInFrames'])
Ramza.PTS.params.holdFrames = Number(params['HoldFrames'])
Ramza.PTS.params.fadeOutFrames = Number(params['FadeOutFrames'])
Ramza.PTS.params.splashList = JSON.parse(params['Screens'])
Ramza.PTS.params.splashList.forEach(function(ele, index){
	this[index] = JSON.parse(this[index])
if (this[index].Type == "Image"){
	this[index].File = this[index].File.split("/")
	var file = this[index].File.pop()
	var folder = this[index].File.join('/') + "/"
	this[index].File = ImageManager.loadBitmap(folder, file)
	}
}, Ramza.PTS.params.splashList)


Ramza.PTS._go_to_scene = SceneManager.goto
SceneManager.goto = function(sceneClass) {
	if (this._scene && this._scene.constructor.name == "Scene_Boot" && sceneClass.name == "Scene_Map") {
		sceneClass = Scene_PretitleSplash
	}
	Ramza.PTS._go_to_scene.call(this, sceneClass)
};

Ramza.PTS.createSplashList = function(){
	var list = []
	for (let i = 0; i < Ramza.PTS.params.splashList.length; i++){
		list.push(Ramza.PTS.params.splashList[i])
	}
	return list
};

Ramza.PTS._video_on_end = Video._onEnd
Video._onEnd = function (){
	if (SceneManager._scene.constructor.name === "Scene_PretitleSplash"){
		SceneManager._scene._dummyWindow._waiting = false
		Ramza.PTS._video_on_end.call(this)
	} else {
		Ramza.PTS._video_on_end.call(this)
	}
}

Ramza.PTS._on_left_button = TouchInput._onLeftButtonDown
TouchInput._onLeftButtonDown = function(event) {
	if (SceneManager._scene && SceneManager._scene.constructor && SceneManager._scene.constructor.name === "Scene_PretitleSplash"){
		SceneManager._scene._dummyWindow._mouseButtonPushed = true
	} else {
		Ramza.PTS._on_left_button.call(this, event)
	}
};

Ramza.PTS._on_right_button = TouchInput._onRightButtonDown
TouchInput._onRightButtonDown = function(event) {
	if (SceneManager._scene && SceneManager._scene.constructor && SceneManager._scene.constructor.name === "Scene_PretitleSplash"){
		SceneManager._scene._dummyWindow._mouseButtonPushed = true
	} else {
		Ramza.PTS._on_right_button.call(this, event)
	}
};

//================================
// Scene_PretitleSplash
//================================
// The scene shown on boot prior to moving to the title scene


function Scene_PretitleSplash() {
    this.initialize.apply(this, arguments);
}

Scene_PretitleSplash.prototype = Object.create(Scene_Base.prototype);
Scene_PretitleSplash.prototype.constructor = Scene_PretitleSplash;

Scene_PretitleSplash.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

Scene_PretitleSplash.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
	this.createWindowLayer();
	this.createDummyWindow();
	this.createSprite()
	this.centerSprite(this._splashSprite)
};

Scene_PretitleSplash.prototype.centerSprite = function(sprite) {
        sprite.x = Graphics.width / 2;
        sprite.y = Graphics.height / 2;
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
};

Scene_PretitleSplash.prototype.createSprite = function(){
	this._splashSprite = new Sprite(new Bitmap(0,0))
	this._splashSprite.opacity = 0
	this.addChild(this._splashSprite)
};

Scene_PretitleSplash.prototype.createDummyWindow = function(){
	var rect = new Rectangle(0,0,0,0)
    this._dummyWindow = new Window_DummyWindow(rect);
    this.addWindow(this._dummyWindow);
};

//=============================================================================
// Window_DummyWindow
//=============================================================================

function Window_DummyWindow() {
    this.initialize.apply(this, arguments);
}

Window_DummyWindow.prototype = Object.create(Window_Base.prototype);
Window_DummyWindow.prototype.constructor = Window_DummyWindow;

Window_DummyWindow.prototype.initialize = function(rect) {
	Window_Base.prototype.initialize.call(this, rect);
	this._frameCount = Ramza.PTS.params.waitFrames - 12
	this._waiting = false
};

Window_DummyWindow.prototype.update = function(){
	if (this._list == undefined){
		this._list = Ramza.PTS.createSplashList()
	}
	var okaypressed = (this._canRepeat) ? Input.isRepeated("ok") : Input.isTriggered("ok");
	var cancelpressed = (this._canRepeat) ? Input.isRepeated("cancel") : Input.isTriggered("cancel");
	if (okaypressed || cancelpressed || this._mouseButtonPushed){
		delete this._mouseButtonPushed
		if (Ramza.PTS.params.skipMode != "Ignore"){
			switch (Ramza.PTS.params.skipMode){
				case "Current":
				if (Video.isPlaying()){
					Video._element.currentTime = Video._element.duration
				} else {
					delete this._fadeIn
					delete this._waitCounter
					delete this._customHold
					this._fadeOut = true
					this._fastFadeOut = true
				}
				break;
				case "All":
				if (Video.isPlaying()){
					Video._element.currentTime = Video._element.duration
				} else {
					delete this._fadeIn
					delete this._waitCounter
					delete this._customHold
					this._fadeOut = true
					this._fastFadeOut = true
				}
				this._list = []
				this._frameCount = Ramza.PTS.params.waitFrames - 12
				break;
				default:
				break;
			}
		}
	}
	if (this._fadeIn){
		SceneManager._scene._splashSprite.opacity += (255/Ramza.PTS.params.fadeInFrames)
		if (SceneManager._scene._splashSprite.opacity >= 255) {
			delete this._fadeIn 
			this._waitCounter = 1
		}
	}
	
	if (this._waitCounter){
		this._waitCounter += 1
		if (this._customHold) {
			if (this._waitCounter >= this._customHold){
				delete this._waitCounter
				delete this._customHold
				this._fadeOut = true
			}
		} else if (this._waitCounter >= Ramza.PTS.params.holdFrames) {
			delete this._waitCounter
			this._fadeOut = true
		}
	}
	if (this._fadeOut){
		var fastFade = (this._fastFadeOut) ? 10 : 1
		SceneManager._scene._splashSprite.opacity -= ((255/Ramza.PTS.params.fadeOutFrames) * fastFade )
		if (SceneManager._scene._splashSprite.opacity <= 0) {
			delete this._fadeOut
			this._waiting = false
		}
	}
	if (!this._waiting) this._frameCount += 1
	if (this._frameCount >= Ramza.PTS.params.waitFrames) {
		this._waiting = true
		if (this._list[0] && this._list[0].Type == "Video"){
			Video.play(this._list[0].File)
		} else if (this._list[0] && this._list[0].Type == "Image") {
			SceneManager._scene._splashSprite.bitmap = this._list[0].File
			this._fadeIn = true
			this._customHold = (this._list[0].CustomHold) ? Number(this._list[0].CustomHold) : 0
		} else {
			SceneManager.push(Scene_Map)
		}
		this._list.shift()
		this._frameCount = 0
	}
	Graphics._requestFullScreen();
	Window_Base.prototype.update.call(this)
};

