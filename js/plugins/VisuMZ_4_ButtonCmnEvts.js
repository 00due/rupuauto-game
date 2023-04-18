//=============================================================================
// VisuStella MZ - Button Common Events
// VisuMZ_4_ButtonCmnEvts.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_ButtonCmnEvts = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ButtonCommonEvents = VisuMZ.ButtonCommonEvents || {};
VisuMZ.ButtonCommonEvents.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.04] [ButtonCommonEvents]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Button_Common_Events_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, there's only a few keys on your keyboard that perform any kind
 * of action when pressed on the map screen. This plugin allows you to bind
 * Common Events to various other keys to expand the keyboard's functionality.
 * Plugin Commands can be used during the middle of a playthrough to change up
 * which Common Events are bound to each key as well, allowing you, the game
 * dev, to have full control over which keys can be used during the map screen.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Functionality to bind Common Events to the number keys, alphabet keys,
 *   symbols, numpad, and more.
 * * Change which Common Events run during a playthrough.
 * * Clear Common Events from keys to remove any bindings.
 * * Show visible buttons on the screen to indicate which buttons can be
 *   pressed on the keyboard (or with the mouse on the screen).
 * * Apply icons to the visible buttons and change them over time.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Compatibility Issues
 * ============================================================================
 *
 * This plugin will most likely have compatibility issues with anything that
 * alters keystrokes or makes use of them through a different manner. If you
 * are using another plugin that does something with keystrokes on the map
 * screen, the likelihood of clashing can occur if these plugins utilize the
 * same keystrokes and we will not be held accountable for that as it is
 * something within your power to change by simply picking different keys.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the Plugin Parameters, you will see a list of all the keys that you can
 * bind to a Common Event. If that number is something other than 0, then the
 * number associated with it will be the Common Event that will run. If you
 * assign it to a Common Event ID that does not exist, you will get an error so
 * please be wary of that.
 *
 * You may also notice that some of the keys have in parenthesis a word like
 * (OK) or (Cancel) next to them. What this means is that those keys already
 * have a function assigned to them by the game. If you assign a Common Event
 * to these keys and the 'Forbid Default Bound Keys?' Plugin Parameter is set
 * to 'false', then the native function of the key will be removed in favor of
 * the Common Event you've assigned.
 *
 * Here is a list of the keys that already have a command assigned:
 *
 * Key - What they're assigned to
 *   - Q         - Assigned to PageUp
 *   - W         - Assigned to PageDown
 *   - Shift     - Assigned to Dash
 *   - Z         - Assigned to OK
 *   - X         - Assigned to Cancel
 *   - Space     - Assigned to OK
 *   - Left      - Assigned to moving left
 *   - Up        - Assigned to moving up
 *   - Right     - Assigned to moving right
 *   - Down      - Assigned to moving down
 *   - Insert    - Assigned to Cancel
 *   - Page Up   - Assigned to PageUp
 *   - Page Down - Assigned to PageDown
 *   - Numpad 0  - Assigned to Cancel
 *   - Numpad 2  - Assigned to moving down
 *   - Numpad 4  - Assigned to moving left
 *   - Numpad 6  - Assigned to moving right
 *   - Numpad 8  - Assigned to moving up
 *
 * Once again, if you assign Common Events to these keys, the Common Event will
 * removing the binding the key had natively. However, this will only apply
 * while the player is in the field map and if the 'Forbid Default Bound Keys?'
 * Plugin Parameter is set to 'false'. Being inside of a menu or battle system
 * will restore the previously native functions.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Assign Button-Related Notetags ===
 * 
 * ---
 *
 * <Assign Button Common Event: id>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Makes this object selectable in the Item scene or Skill scene and have it
 *   become assignable to a button slot.
 * - If the object is originally usable (ie a Healing Potion or Healing Spell),
 *   the button assignment process will take priority and override it.
 * - Replace 'id' with a number representing the ID of the Common Event you
 *   wish to assign to a button.
 * - This needs to be used together with the <Assign Button Slots: x, x, x>
 *   notetag in order to have any effect.
 *
 * ---
 *
 * <Assign Button Slot: x>
 * <Assign Button Slot: x, x, x>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Lists the keyboard keys that can be assigned a Common Event when pressed.
 * - If the object is originally usable (ie a Healing Potion or Healing Spell),
 *   the button assignment process will take priority and override it.
 * - Replace 'x' with a number or letter representing the button you wish to
 *   assign a Common Event to.
 * - This needs to be used together with the <Assign Button Common Event: id>
 *   notetag in order to have any effect.
 * - The choices that become available will be listed in the order found in
 *   this notetag.
 * - Forbidden, non-existent, and non-valid keys will be filtered out of this
 *   list and cannot be assigned a Common Event.
 * 
 *   Example:
 * 
 *   <Assign Button Slot: A, S, D, F>
 *   <Assign Button Slot: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0>
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Change Button Common Event
 * - Change the Common Event bound to specific key(s).
 *
 *   Keys:
 *   - Select which key(s) to change.
 *
 *   Common Event ID:
 *   - Change the Common Event bound to specific key(s).
 * 
 *   Button Icon:
 *   - What icon do you want to show on this button?
 *
 * ---
 * 
 * System: Change Visibility
 * - Determines whether or not buttons are shown on screen.
 * 
 *   Visible?
 *   - Show or hide the visible Button Common Events on the screen?
 * 
 * ---
 *
 * System: Clear All Button Common Events
 * - Clears Common Events from all keys.
 *
 * ---
 *
 * System: Clear Button Common Event
 * - Clears any Common Events bound to specific key(s).
 *
 *   Keys:
 *   - Select which key(s) to clear.
 *
 * ---
 *
 * System: Clear Common Event ID(s)
 * - Clears any keys with the marked Common Event ID(s).
 * 
 *   Common Event ID(s):
 *   - Clears any keys with the marked Common Event ID(s).
 *
 * ---
 * 
 * System: Run Stored Button Common Event
 * - Run the Common Event stored on a specific key.
 * 
 *   Target Key:
 *   - Run the Common Event stored in this key.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the Plugin Parameters for this plugin. They manage all the key
 * bindings and which Common Events are linked by default to which keys. These
 * links are not permanent as they can be changed/cleared with Plugin Commands.
 *
 * ---
 *
 * Restriction
 * 
 *   Forbid Default Bound Keys?:
 *   - Forbid already bound input keys?
 *   - Allowing them may cause clashes.
 *
 * ---
 *
 * Visible Buttons
 * 
 *   Show On Screen?:
 *   - Show buttons on screen by default?
 * 
 *   Change Tone on Hover?:
 *   - Change the tone of the button on hover?
 * 
 *   Hover Tone:
 *   - Tone settings upon hovering.
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Button Width:
 *   - The width of the visible button on screen.
 * 
 *   Button Height:
 *   - The height of the visible button on screen.
 * 
 *   Picture Filename:
 *   - Picture used as a button background.
 *   - If left empty, ignore drawing a picture.
 * 
 *   Undeclared Icons:
 *   - If a Button Common Event doesn't have an assigned icon,
 *     use one of these instead.
 * 
 *   JS: Draw Data:
 *   - JavaScript code that determines how to draw the visible button.
 *
 * ---
 * 
 * Button Positions
 * 
 *   JS: Bottom Point:
 *   JS: Above Point:
 *   JS: Left Point:
 *   JS: Right Point:
 *   - The X and Y coordinates for where the specific side buttons start.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Assignment Settings
 * ============================================================================
 *
 * The Assignment Settings Plugin Parameters apply to whenever you use the
 * Assign Button-Related Notetags in-game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Instructions:
 *   - The instruction text that appears when assigning a Common Event to
 *     a button.
 *
 * ---
 *
 * Window
 * 
 *   Key Align:
 *   - Text alignment for the button assignment window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the button assignment window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Key Settings
 * ============================================================================
 *
 * The Key Settings allow you to adjust the Common Event you want to bind to
 * each keyboard key along with whether or not you want the said key to appear
 * visibly on the screen.
 *
 * ---
 *
 * Key Settings
 * 
 *   Common Event ID:
 *   - The default common event tied to this key.
 *   - Leave it at 0 for no common event.
 *
 * ---
 *
 * Visible Buttons
 * 
 *   Show Button?:
 *   - Show the button visibly on the screen?
 * 
 *   Requires Bind?:
 *   - If the button is shown, does it require a Common Event to be shown?
 * 
 *   Button Label:
 *   - What text do you want to display as the button label?
 * 
 *   Button Icon:
 *   - What icon do you want to show on this button?
 * 
 *   JS: Position:
 *   - The X and Y coordinates for where this button is positioned.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.04: January 20, 2022
 * * Feature Update!
 * ** Button Common Event key presses on top of below priority touch events
 *    will only be forbidden in the context of a common event assigned to the
 *    usual OK buttons instead. Update made by Arisu.
 * 
 * Version 1.03: February 12, 2021
 * * Bug Fixes!
 * ** Pressing a Button Common Event key while stepping onto a below priority
 *    touch event will no longer give priority to the Button Common Event. Fix
 *    made by Arisu.
 * 
 * Version 1.02: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** When pressing Button Common Events with the keyboard, any visible buttons
 *    on the screen will also flash their color tone briefly to show that they
 *    are being pressed. This is only if the Hover Tone Plugin Parameter is
 *    enabled. Update made by Yanfly.
 * * New Features!
 * ** New Notetags Added by Yanfly!
 * *** <Assign Button Common Event: id>
 * *** <Assign Button Slot: x, x, x>
 * ** New Plugin Command added by Yanfly!
 * *** System: Clear Common Event ID(s)
 * **** Clears any keys with the marked Common Event ID(s).
 * *** System: Run Stored Button Common Event
 * **** Run the Common Event stored on a specific key.
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Assignment Settings
 * 
 * Version 1.01: December 4, 2020
 * * Feature Update!
 * ** Plugin Command "System: Change Button Common Event" can now use code for
 *    icons. You can insert $gameVariables.value(50) in it and it will use
 *    whichever number is stored inside it as an icon. Update made by Irina.
 *
 * Version 1.00: August 28, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeButtonCommonEvent
 * @text System: Change Button Common Event
 * @desc Change the Common Event bound to specific key(s).
 *
 * @arg Keys:arraystr
 * @text Keys
 * @type combo[]
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Select which key(s) to change.
 * @default []
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Change the Common Event bound to specific key(s).
 * @default 0
 *
 * @arg Icon:eval
 * @text Button Icon
 * @desc What icon do you want to show on this button?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ButtonCommonEventsVisibility
 * @text System: Change Visibility
 * @desc Determines whether or not buttons are shown on screen.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show or hide the visible Button Common Events on the screen?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearAllButtonCommonEvents
 * @text System: Clear All Button Common Events
 * @desc Clears Common Events from all keys.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearButtonCommonEvent
 * @text System: Clear Button Common Event
 * @desc Clears any Common Events bound to specific key(s).
 *
 * @arg Keys:arraystr
 * @text Keys
 * @type combo[]
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Select which key(s) to clear.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearButtonCommonEventID
 * @text System: Clear Common Event ID(s)
 * @desc Clears any keys with the marked Common Event ID(s).
 *
 * @arg CommonEventID:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Clears any keys with the marked Common Event ID(s).
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RunButtonCommonEvent
 * @text System: Run Stored Button Common Event
 * @desc Run the Common Event stored on a specific key.
 *
 * @arg Key:str
 * @text Target Key
 * @type combo
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Run the Common Event stored in this key.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ButtonCommonEvents
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc Adjust the general settings for this plugin.
 * @default {"ForbidInputKeys:eval":"true","Buttons":"","ShowButtonsOnScreen:eval":"true","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","ButtonWidth:num":"60","ButtonHeight:num":"60","ButtonFilename:str":"","IconsUsed:arraynum":"[\"160\",\"161\",\"162\",\"163\",\"164\",\"165\"]","DrawJS:func":"\"// Declare Constants\\nconst w = this.width;\\nconst h = this.height;\\n\\n// Draw Background\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nthis.bitmap.gradientFillRect(1, 1, w-2, h-2, c1, c2, true);\\nthis.bitmap.strokeRect(1, 1, w-2, h-2, '#000000');\\n\\n// Draw Picture\\nif (this.pictureBitmap()) {\\n    const picBitmap = this.pictureBitmap();\\n    const pw = picBitmap.width;\\n    const ph = picBitmap.height;\\n    this.bitmap.blt(picBitmap, 0, 0, pw, ph, 0, 0, w, h);\\n}\\n\\n// Draw Icon\\nconst iconIndex = this.buttonIcon();\\nconst iconBitmap = ImageManager.loadSystem(\\\"IconSet\\\");\\nconst iw = ImageManager.iconWidth;\\nconst ih = ImageManager.iconHeight;\\nconst ix = (iconIndex % 16) * iw;\\nconst iy = Math.floor(iconIndex / 16) * ih;\\nconst jw = Math.floor(this.width / iw) * iw;\\nconst jh = Math.floor(this.height / ih) * ih;\\nconst jx = Math.floor((this.width - jw) / 2);\\nconst jy = Math.floor((this.height - jh) / 2);\\nthis.bitmap._context.imageSmoothingEnabled = false;\\nthis.bitmap.blt(iconBitmap, ix, iy, iw, ih, jx, jy, jw, jh);\\nthis.bitmap._context.imageSmoothingEnabled = true;\\n\\n// Draw Button Label\\nconst text = this.buttonLabel();\\nthis.bitmap.fontFace = $gameSystem.numberFontFace();\\nthis.bitmap.fontSize = $gameSystem.mainFontSize();\\nthis.bitmap.drawText(text, 0, 0, w, this.bitmap.fontSize + 4, 'center');\"","Positions":"","BottomPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = Math.floor(container.width / 2) - buttonWidth * 5;\\nlet y = container.height - buttonHeight;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","AbovePointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = Math.floor(container.width / 2) - Math.floor(buttonWidth * 1.5);\\nlet y = container.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","LeftPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = container.x;\\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","RightPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = container.width;\\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param Assign:struct
 * @text Assignment Settings
 * @type struct<Assign>
 * @desc Adjust the assignment settings for this plugin.
 * @default {"Vocab":"","Instruction:str":"Assign to which button slot?","Window":"","AssignWindow_KeyAlign:str":"center","AssignWindow_RectJS:func":"\"// Declare Constants\\nconst slots = arguments[0];\\nconst cellSize = (Window_Base.prototype.lineHeight() * 2) + 8;\\n\\n// Calculate X, Y, W, H\\nlet ww = ($gameSystem.windowPadding() * 2) + (slots.length * cellSize);\\nww = ww.clamp(Graphics.boxWidth / 3, Graphics.boxWidth);\\nlet wh = this.calcWindowHeight(3, true);\\nlet wx = Math.round((Graphics.boxWidth - ww) / 2);\\nlet wy = Math.round((Graphics.boxHeight - wh) / 2);\\n\\n// Create Window Rectangle\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param NumberKeys
 * @text Number Keys
 *
 * @param KeyCode49:struct
 * @text Key: 1
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"1","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 0;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode50:struct
 * @text Key: 2
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"2","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 1;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode51:struct
 * @text Key: 3
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"3","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 2;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode52:struct
 * @text Key: 4
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"4","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 3;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode53:struct
 * @text Key: 5
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"5","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 4;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode54:struct
 * @text Key: 6
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"6","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 5;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode55:struct
 * @text Key: 7
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"7","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 6;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode56:struct
 * @text Key: 8
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"8","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 7;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode57:struct
 * @text Key: 9
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"9","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 8;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode48:struct
 * @text Key: 0
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"0","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 9;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param LetterKeys
 * @text Letter Keys
 *
 * @param KeyCode65:struct
 * @text Key: A
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"A","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode66:struct
 * @text Key: B
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"B","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode67:struct
 * @text Key: C
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"C","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode68:struct
 * @text Key: D
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"D","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode69:struct
 * @text Key: E
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"E","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode70:struct
 * @text Key: F
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"F","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode71:struct
 * @text Key: G
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"G","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode72:struct
 * @text Key: H
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"H","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode73:struct
 * @text Key: I
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"I","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode74:struct
 * @text Key: J
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"J","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode75:struct
 * @text Key: K
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"K","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode76:struct
 * @text Key: L
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"L","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode77:struct
 * @text Key: M
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"M","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode78:struct
 * @text Key: N
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"N","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode79:struct
 * @text Key: O
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"O","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode80:struct
 * @text Key: P
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"P","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode81:struct
 * @text Key: Q (PgUp)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Q","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode82:struct
 * @text Key: R
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"R","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode83:struct
 * @text Key: S
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"S","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode84:struct
 * @text Key: T
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"T","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode85:struct
 * @text Key: U
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"U","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode86:struct
 * @text Key: V
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"V","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode87:struct
 * @text Key: W (PgDn)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"W","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode88:struct
 * @text Key: X (Cancel)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"X","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode89:struct
 * @text Key: Y
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Y","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode90:struct
 * @text Key: Z (OK)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Z","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param SymbolKeys
 * @text Symbol Keys
 *
 * @param KeyCode192:struct
 * @text Key: ` ~
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"~","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x - buttonWidth * 1;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode189:struct
 * @text Key: - _
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"-","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 10;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode187:struct
 * @text Key: = +
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"+","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 11;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode219:struct
 * @text Key: [ {
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"[","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 10;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode221:struct
 * @text Key: ] }
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"]","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 11;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode220:struct
 * @text Key: \ |
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"\\","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 12;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode186:struct
 * @text Key: ; :
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":";","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode222:struct
 * @text Key: ' "
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"\"","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 10;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode188:struct
 * @text Key: , <
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"<","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode190:struct
 * @text Key: . >
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":">","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode191:struct
 * @text Key: / ?
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"?","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param MiscKeys
 * @text Misc Keys
 *
 * @param KeyCode32:struct
 * @text Key: Space (OK)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Space","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.x;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode37:struct
 * @text Key: Left (Left)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"<<","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 3;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode38:struct
 * @text Key: Up (Up)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"^","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 2;\\nlet y = container.height - buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode39:struct
 * @text Key: Right (Right)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":">>","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 1;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode40:struct
 * @text Key: Down (Down)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"v","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 2;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode45:struct
 * @text Key: Insert
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Ins","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 0;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode46:struct
 * @text Key: Delete
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Del","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 0;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode36:struct
 * @text Key: Home
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Home","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 1;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode35:struct
 * @text Key: End
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"End","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 1;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode33:struct
 * @text Key: Page Up (PgUp)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"PgUp","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 2;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode34:struct
 * @text Key: Page Down (PgDn)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"PgDn","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 2;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param NumPadKeys
 * @text NumPad Keys
 *
 * @param KeyCode96:struct
 * @text Key: NumPad 0 (Cancel)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"0","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode97:struct
 * @text Key: NumPad 1
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"1","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode98:struct
 * @text Key: NumPad 2 (Down)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"2","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode99:struct
 * @text Key: NumPad 3
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"3","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode100:struct
 * @text Key: NumPad 4 (Left)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"4","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode101:struct
 * @text Key: NumPad 5
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"5","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode102:struct
 * @text Key: NumPad 6 (Right)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"6","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode103:struct
 * @text Key: NumPad 7
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"7","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode104:struct
 * @text Key: NumPad 8 (Up)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"8","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode105:struct
 * @text Key: NumPad 9
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"9","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode110:struct
 * @text Key: NumPad .
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":".","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode107:struct
 * @text Key: NumPad +
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"+","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode109:struct
 * @text Key: NumPad -
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"-","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode106:struct
 * @text Key: NumPad *
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"*","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode111:struct
 * @text Key: NumPad /
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"/","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param ForbidInputKeys:eval
 * @text Forbid Default Keys?
 * @parent Forbidden
 * @type boolean
 * @on Forbid
 * @off Allow
 * @desc Forbid already bound input keys?
 * Allowing them may cause clashes.
 * @default true
 * 
 * @param Buttons
 * @text Visible Buttons
 *
 * @param ShowButtonsOnScreen:eval
 * @text Show On Screen?
 * @parent Buttons
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show buttons on screen by default?
 * @default true
 *
 * @param ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Buttons
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the button on hover?
 * @default true
 *
 * @param HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @param ButtonWidth:num
 * @text Button Width
 * @parent Buttons
 * @type number
 * @min 1
 * @desc The width of the visible button on screen.
 * @default 80
 *
 * @param ButtonHeight:num
 * @text Button Height
 * @parent Buttons
 * @type number
 * @min 1
 * @desc The height of the visible button on screen.
 * @default 80
 *
 * @param ButtonFilename:str
 * @text Picture Filename
 * @parent Buttons
 * @type file
 * @dir img/pictures/
 * @desc Picture used as a button background.
 * If left empty, ignore drawing a picture.
 * @default 
 *
 * @param IconsUsed:arraynum
 * @text Undeclared Icons
 * @parent Buttons
 * @type string[]
 * @desc If a Button Common Event doesn't have an assigned icon, use one of these instead.
 * @default ["160","161","162","163","164","165"]
 *
 * @param DrawJS:func
 * @text JS: Draw Data
 * @parent Buttons
 * @type note
 * @desc JavaScript code that determines how to draw the visible button.
 * @default "// Declare Constants\nconst w = this.width;\nconst h = this.height;\n\n// Draw Background\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nthis.bitmap.gradientFillRect(1, 1, w-2, h-2, c1, c2, true);\nthis.bitmap.strokeRect(1, 1, w-2, h-2, '#000000');\n\n// Draw Picture\nif (this.pictureBitmap()) {\n    const picBitmap = this.pictureBitmap();\n    const pw = picBitmap.width;\n    const ph = picBitmap.height;\n    this.bitmap.blt(picBitmap, 0, 0, pw, ph, 0, 0, w, h);\n}\n\n// Draw Icon\nconst iconIndex = this.buttonIcon();\nconst iconBitmap = ImageManager.loadSystem(\"IconSet\");\nconst iw = ImageManager.iconWidth;\nconst ih = ImageManager.iconHeight;\nconst ix = (iconIndex % 16) * iw;\nconst iy = Math.floor(iconIndex / 16) * ih;\nconst jw = Math.floor(this.width / iw) * iw;\nconst jh = Math.floor(this.height / ih) * ih;\nconst jx = Math.floor((this.width - jw) / 2);\nconst jy = Math.floor((this.height - jh) / 2);\nthis.bitmap._context.imageSmoothingEnabled = false;\nthis.bitmap.blt(iconBitmap, ix, iy, iw, ih, jx, jy, jw, jh);\nthis.bitmap._context.imageSmoothingEnabled = true;\n\n// Draw Button Label\nconst text = this.buttonLabel();\nthis.bitmap.fontFace = $gameSystem.numberFontFace();\nthis.bitmap.fontSize = $gameSystem.mainFontSize();\nthis.bitmap.drawText(text, 0, 0, w, this.bitmap.fontSize + 4, 'center');"
 * 
 * @param Positions
 * @text Button Positions
 *
 * @param BottomPointJS:func
 * @text JS: Bottom Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the bottom buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = Math.floor(container.width / 2) - buttonWidth * 5;\nlet y = container.height - buttonHeight;\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param AbovePointJS:func
 * @text JS: Above Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the uppoer buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = Math.floor(container.width / 2) - Math.floor(buttonWidth * 1.5);\nlet y = container.y;\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param LeftPointJS:func
 * @text JS: Left Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the left-side buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = container.x;\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param RightPointJS:func
 * @text JS: Right Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the right-side buttons end.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = container.width;\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 */
/* ----------------------------------------------------------------------------
 * Assign Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Assign:
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param Instruction:str
 * @text Instructions
 * @parent Vocab
 * @desc The instruction text that appears when assigning a Common Event to a button.
 * @default Assign to which button slot?
 * 
 * @param Window
 *
 * @param AssignWindow_KeyAlign:str
 * @text Key Align
 * @parent Window
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the button assignment window?
 * @default center
 *
 * @param AssignWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window
 * @type note
 * @desc Code used to determine the dimensions for the button assignment window.
 * @default {"Vocab":"","Instruction:str":"Assign to which button slot?","Window":"","AssignWindow_KeyAlign:str":"center","AssignWindow_RectJS:func":"\"// Declare Constants\\nconst slots = arguments[0];\\nconst cellSize = (Window_Base.prototype.lineHeight() * 2) + 8;\\n\\n// Calculate X, Y, W, H\\nlet ww = ($gameSystem.windowPadding() * 2) + (slots.length * cellSize);\\nww = ww.clamp(Graphics.boxWidth / 3, Graphics.boxWidth);\\nlet wh = this.calcWindowHeight(3, true);\\nlet wx = Math.round((Graphics.boxWidth - ww) / 2);\\nlet wy = Math.round((Graphics.boxHeight - wh) / 2);\\n\\n// Create Window Rectangle\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Key Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeySettings:
 *
 * @param CommonEventID:num
 * @text Common Event ID
 * @parent NeededData
 * @type common_event
 * @desc The default common event tied to this key.
 * Leave it at 0 for no common event.
 * @default 0
 * 
 * @param Buttons
 * @text Visible Buttons
 *
 * @param ShowButton:eval
 * @text Show Button?
 * @parent Buttons
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the button visibly on the screen?
 * @default false
 *
 * @param ShowOnlyIfCePresent:eval
 * @text Requires Bind?
 * @parent ShowButton:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc If the button is shown, does it require a Common Event to be shown?
 * @default true
 *
 * @param ButtonText:str
 * @text Button Label
 * @parent Buttons
 * @desc What text do you want to display as the button label?
 * @default Untitled
 *
 * @param ButtonIcon:num
 * @text Button Icon
 * @parent Buttons
 * @desc What icon do you want to show on this button?
 * @default 0
 *
 * @param PositionJS:func
 * @text JS: Position
 * @parent Buttons
 * @type note
 * @desc The X and Y coordinates for where this button is positioned.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\nconst bottomPoint = this.bottomPoint();\nconst abovePoint = this.abovePoint();\nconst leftPoint = this.leftPoint();\nconst rightPoint = this.rightPoint();\n\n// Calculate Coordinates\nlet x = 0;\nlet y = 0;\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 */
//=============================================================================

const _0x4d91ef=_0x4ea4;(function(_0x3737c5,_0x3136ea){const _0x282283=_0x4ea4,_0x5b1620=_0x3737c5();while(!![]){try{const _0x2b3cd2=-parseInt(_0x282283(0x2ef))/0x1*(-parseInt(_0x282283(0x1fc))/0x2)+parseInt(_0x282283(0x218))/0x3+-parseInt(_0x282283(0x2b6))/0x4*(parseInt(_0x282283(0x2c5))/0x5)+-parseInt(_0x282283(0x22f))/0x6+parseInt(_0x282283(0x240))/0x7*(parseInt(_0x282283(0x254))/0x8)+parseInt(_0x282283(0x2d3))/0x9*(parseInt(_0x282283(0x264))/0xa)+-parseInt(_0x282283(0x2ea))/0xb;if(_0x2b3cd2===_0x3136ea)break;else _0x5b1620['push'](_0x5b1620['shift']());}catch(_0x45cc21){_0x5b1620['push'](_0x5b1620['shift']());}}}(_0x17b0,0xac65b));function _0x17b0(){const _0x2050dd=['ARRAYFUNC','clearButtonCommonEventID','loadButtomCommonEventImage','!!\x20ERROR\x20VisuMZ_4_ButtonCmnEvts\x20ERROR\x20!!\x0aKey\x20%1\x20cannot\x20be\x20bound!\x0aIt\x20is\x20a\x20forbidden\x20keybased\x20on\x0ayour\x20Plugin\x20Parameter\x20settings!','round','CanAssignButtonCommonEvent','BACK_QUOTE','WIN_OEM_PA2','createButtonCommonEventsSpriteContainer','EREOF','GREATER_THAN','_windowLayer','ButtonIcon','map','initialize','process_VisuMZ_ButtonCommonEvents_Parameters','PRINT','isEnabled','HANJA','OPEN_PAREN','General','JUNJA','exit','_commonEventID','isBusy','NUMPAD0','isPlaytest','ShowButton','FUNC','MODECHANGE','replace','PositionJS','fontSize','KeyCode%1','OPEN_BRACKET','addCommand','constructor','filter','setButtonCommonEvent','WIN_OEM_FJ_TOUROKU','HASH','F11','createButtonSprites','F22','FINAL','COLON','WIN_OEM_FJ_JISHO','EXSEL','SEPARATOR','center','drawTitle','prototype','Settings','keyMapper','AssignWindow_RectJS','assign','WIN_OEM_JUMP','KANA','forceSelect','stringKeyMap','SEMICOLON','CONTEXT_MENU','HYPHEN_MINUS','create','JSON','buttonIcon','itemRectWithPadding','SceneManager_onKeyDown','mainFontSize','F14','name','ALT','ASTERISK','ButtonHeight','ButtonCommonEventsVisibility','4pDZsFN','lineHeight','getButtonCommonEventIcon','OS_KEY','CAPSLOCK','RIGHT','isAnyButtonPressed','itemRect','status','DELETE','onClick','_itemWindow','WIN_ICO_CLEAR','targetOpacity','clear','1037045RkxBRT','HELP','keyCode','NUM_LOCK','refresh','registerCommand','VOLUME_DOWN','Key','ButtonCommonEvents','onItemOk','F20','innerWidth','_icon','CIRCUMFLEX','9LeiBSR','settings','loadSystem','OPEN_CURLY_BRACKET','CLEAR','CommonEventID','Scene_Item_onItemOk','clamp','playOkSound','isButtonCommonEventOk','getButtonCommonEvent','processButtonCommonEvent','CRSEL','buttonHeight','initButtonCommonEvents','return\x200','SLASH','onMouseExit','WIN_OEM_BACKTAB','Instruction','isKeyButtonCommonEventValid','addChild','callUpdateHelp','33835329KQnPiq','RegExp','checkEventTriggerTouchInForwardLocation','BACK_SLASH','_context','4553sFcJqf','CTRL','onColorTone','item','gradientFillRect','_buttonCommonEventIcons','max','clearButtonCommonEvent','log','setShowButtonCommonEventButtons','opacity','F16','resetFontSettings','Window_SkillList_isEnabled','_buttomCommonEventImage','createAssignButtonCommonEventsWindow','initMembers','VOLUME_MUTE','BUTTON_LABEL_ALIGN','ARRAYEVAL','isSceneMap','Assign','width','buttonLabel','refreshCursor','reserveCommonEvent','KeysArray','F15','WIN_OEM_ATTN','WIN_OEM_ENLW','NUMPAD6','META','Scene_Boot_onDatabaseLoaded','bind','F13','NUMPAD3','EISU','eventsXy','scrollBaseY','Scene_Skill','WIN_OEM_AUTO','UNDERSCORE','isButtonCommonEventForbidden','windowPadding','ARRAYNUM','AssignButtonSlots','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','ShowOnlyIfCePresent','ChangeButtonCommonEvent','DIVIDE','children','NONCONVERT','assignButtonCommonEventsWindowRect','ADD','STR','RunButtonCommonEvent','calcWindowHeight','F24','rightPoint','Scene_Map_createSpriteset','ENTER_SPECIAL','WIN_OEM_PA3','updateOpacity','Scene_Item','drawItem','imageSmoothingEnabled','colSpacing','ForbidInputKeys','LEFT','callCommonEvent','Scene_Map_isAnyButtonPressed','call','NUMPAD7','blt','EXCLAMATION','isEventRunning','NUMPAD8','IconsUsed','fontFace','length','_list','AssignWindow_KeyAlign','ARRAYSTR','F12','isClickEnabled','Scene_Skill_onItemOk','parameters','removeChild','SCROLL_LOCK','makeDefaultButtonCommonEvents','description','QUESTION_MARK','_scene','onKeyDown','F19','232jQLvJQ','includes','isCommonEventPressed','_assignButtonCommonEventsWindow','floor','PA1','contents','parse','createSpriteset','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','PIPE','indexOf','F17','pictureBitmap','F10','TAB','createBitmap','isShowButtonCommonEventButtons','updateIcon','strokeRect','commonEventID','makeCommandList','flashButtonPress','match','NUMPAD9','numberFontFace','rowSpacing','WIN_OEM_PA1','3462549tziUvs','VOLUME_UP','abovePoint','CLOSE_CURLY_BRACKET','boxWidth','onButtonAssistAssign','itemHeight','clearButtonCommonEventIcon','NUMPAD1','itemBackColor2','assignButtonCommonEventWindowTitle','_key','some','version','push','destroy','note','format','onDatabaseLoaded','Game_System_initialize','ATTN','DrawJS','clearColorTone','170298pNXxPA','isSceneChanging','ConvertParams','drawIcon','bitmap','trim','MINUS','currentExt','_buttonCommonEventKeyCodes','ALTGR','SLEEP','F18','ShowButtonsOnScreen','PERIOD','isCommandEnabled','_buttonCommonEventShowButtons','_buttonCommonEventsSpriteContainer','7763056KXqjLd','LeftPointJS','ButtonFilename','onButtonAssistCancel','PAUSE','NUM','setButtonCommonEventIcon','iconIndex','WIN_OEM_CLEAR','WIN_OEM_CUSEL','END','ARRAYSTRUCT','EXECUTE','WIN_OEM_FJ_LOYA','setColorTone','AssignCommonEvent','WIN_OEM_FJ_ROYA','BACKSPACE','DECIMAL','WIN_ICO_HELP','8jgAQKI','ext','IconSet','loadPicture','ButtonText','flashColorTone','PLUS','setHandler','toUpperCase','Keys','Window_ItemList_isEnabled','COMMA','EQUALS','NUMPAD5','PERCENT','STRUCT','12265310aKVvkt','_slots','height','ZOOM','split','ButtonWidth','onMouseEnter'];_0x17b0=function(){return _0x2050dd;};return _0x17b0();}function _0x4ea4(_0x1d4b8d,_0x4895bc){const _0x17b05d=_0x17b0();return _0x4ea4=function(_0x4ea475,_0x514770){_0x4ea475=_0x4ea475-0x1da;let _0x2552be=_0x17b05d[_0x4ea475];return _0x2552be;},_0x4ea4(_0x1d4b8d,_0x4895bc);}var label='ButtonCommonEvents',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x4d91ef(0x290)](function(_0x204674){const _0x1a32e3=_0x4d91ef;return _0x204674[_0x1a32e3(0x2be)]&&_0x204674[_0x1a32e3(0x1f7)][_0x1a32e3(0x1fd)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x4d91ef(0x29f)]||{},VisuMZ[_0x4d91ef(0x231)]=function(_0x34df24,_0xfb2a57){const _0x4cd117=_0x4d91ef;for(const _0x1235b2 in _0xfb2a57){if(_0x1235b2[_0x4cd117(0x213)](/(.*):(.*)/i)){const _0xecde0=String(RegExp['$1']),_0xd09e7d=String(RegExp['$2'])[_0x4cd117(0x25c)]()[_0x4cd117(0x234)]();let _0x56a679,_0x3b0714,_0x5bb2a9;switch(_0xd09e7d){case _0x4cd117(0x245):_0x56a679=_0xfb2a57[_0x1235b2]!==''?Number(_0xfb2a57[_0x1235b2]):0x0;break;case _0x4cd117(0x31b):_0x3b0714=_0xfb2a57[_0x1235b2]!==''?JSON[_0x4cd117(0x203)](_0xfb2a57[_0x1235b2]):[],_0x56a679=_0x3b0714['map'](_0x3d6b49=>Number(_0x3d6b49));break;case'EVAL':_0x56a679=_0xfb2a57[_0x1235b2]!==''?eval(_0xfb2a57[_0x1235b2]):null;break;case _0x4cd117(0x302):_0x3b0714=_0xfb2a57[_0x1235b2]!==''?JSON[_0x4cd117(0x203)](_0xfb2a57[_0x1235b2]):[],_0x56a679=_0x3b0714[_0x4cd117(0x278)](_0x47e8d6=>eval(_0x47e8d6));break;case _0x4cd117(0x2ab):_0x56a679=_0xfb2a57[_0x1235b2]!==''?JSON[_0x4cd117(0x203)](_0xfb2a57[_0x1235b2]):'';break;case'ARRAYJSON':_0x3b0714=_0xfb2a57[_0x1235b2]!==''?JSON[_0x4cd117(0x203)](_0xfb2a57[_0x1235b2]):[],_0x56a679=_0x3b0714[_0x4cd117(0x278)](_0x18369a=>JSON[_0x4cd117(0x203)](_0x18369a));break;case _0x4cd117(0x287):_0x56a679=_0xfb2a57[_0x1235b2]!==''?new Function(JSON['parse'](_0xfb2a57[_0x1235b2])):new Function(_0x4cd117(0x2e2));break;case _0x4cd117(0x26b):_0x3b0714=_0xfb2a57[_0x1235b2]!==''?JSON['parse'](_0xfb2a57[_0x1235b2]):[],_0x56a679=_0x3b0714[_0x4cd117(0x278)](_0x424076=>new Function(JSON[_0x4cd117(0x203)](_0x424076)));break;case _0x4cd117(0x325):_0x56a679=_0xfb2a57[_0x1235b2]!==''?String(_0xfb2a57[_0x1235b2]):'';break;case _0x4cd117(0x1ef):_0x3b0714=_0xfb2a57[_0x1235b2]!==''?JSON[_0x4cd117(0x203)](_0xfb2a57[_0x1235b2]):[],_0x56a679=_0x3b0714[_0x4cd117(0x278)](_0x5ba1fb=>String(_0x5ba1fb));break;case _0x4cd117(0x263):_0x5bb2a9=_0xfb2a57[_0x1235b2]!==''?JSON[_0x4cd117(0x203)](_0xfb2a57[_0x1235b2]):{},_0x56a679=VisuMZ['ConvertParams']({},_0x5bb2a9);break;case _0x4cd117(0x24b):_0x3b0714=_0xfb2a57[_0x1235b2]!==''?JSON[_0x4cd117(0x203)](_0xfb2a57[_0x1235b2]):[],_0x56a679=_0x3b0714[_0x4cd117(0x278)](_0x1f461f=>VisuMZ[_0x4cd117(0x231)]({},JSON['parse'](_0x1f461f)));break;default:continue;}_0x34df24[_0xecde0]=_0x56a679;}}return _0x34df24;},(_0x5cb95a=>{const _0x100129=_0x4d91ef,_0x1ff564=_0x5cb95a[_0x100129(0x2b1)];for(const _0x2a76f1 of dependencies){if(!Imported[_0x2a76f1]){alert(_0x100129(0x31d)[_0x100129(0x229)](_0x1ff564,_0x2a76f1)),SceneManager[_0x100129(0x281)]();break;}}const _0xe2392c=_0x5cb95a['description'];if(_0xe2392c[_0x100129(0x213)](/\[Version[ ](.*?)\]/i)){const _0x359391=Number(RegExp['$1']);_0x359391!==VisuMZ[label][_0x100129(0x225)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x100129(0x229)](_0x1ff564,_0x359391)),SceneManager[_0x100129(0x281)]());}if(_0xe2392c[_0x100129(0x213)](/\[Tier[ ](\d+)\]/i)){const _0xd87357=Number(RegExp['$1']);_0xd87357<tier?(alert(_0x100129(0x205)[_0x100129(0x229)](_0x1ff564,_0xd87357,tier)),SceneManager[_0x100129(0x281)]()):tier=Math[_0x100129(0x2f5)](_0xd87357,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x100129(0x29f)],_0x5cb95a[_0x100129(0x1f3)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x4d91ef(0x2b1)],_0x4d91ef(0x31f),_0x930154=>{const _0x4a8d94=_0x4d91ef;VisuMZ[_0x4a8d94(0x231)](_0x930154,_0x930154);const _0x3ae60d=_0x930154[_0x4a8d94(0x25d)],_0x34ed61=_0x930154[_0x4a8d94(0x2d8)],_0x1b8b5b=_0x930154['Icon'];for(let _0x3385db of _0x3ae60d){_0x3385db=_0x3385db[_0x4a8d94(0x289)](/\s*\(.*?\)\s*/g,'')['toUpperCase']()['trim']();const _0x318689=TextManager[_0x4a8d94(0x2a6)][_0x4a8d94(0x207)](_0x3385db);_0x318689>0x0&&($gameSystem[_0x4a8d94(0x291)](_0x318689,_0x34ed61),$gameSystem['setButtonCommonEventIcon'](_0x318689,_0x1b8b5b));}}),PluginManager[_0x4d91ef(0x2ca)](pluginData['name'],_0x4d91ef(0x2b5),_0x507bcd=>{const _0x337c25=_0x4d91ef;VisuMZ[_0x337c25(0x231)](_0x507bcd,_0x507bcd);const _0x572c89=_0x507bcd['Visible'];$gameSystem[_0x337c25(0x2f8)](_0x572c89);}),PluginManager[_0x4d91ef(0x2ca)](pluginData[_0x4d91ef(0x2b1)],'ClearButtonCommonEvent',_0x133d27=>{const _0x2b7f8a=_0x4d91ef;VisuMZ['ConvertParams'](_0x133d27,_0x133d27);const _0x15b742=_0x133d27[_0x2b7f8a(0x25d)];for(let _0x1f7746 of _0x15b742){_0x1f7746=_0x1f7746['replace'](/\s*\(.*?\)\s*/g,'')[_0x2b7f8a(0x25c)]()[_0x2b7f8a(0x234)]();const _0x452f4c=TextManager['stringKeyMap'][_0x2b7f8a(0x207)](_0x1f7746);if(_0x452f4c>0x0)$gameSystem['setButtonCommonEvent'](_0x452f4c,0x0);}}),PluginManager['registerCommand'](pluginData['name'],'ClearAllButtonCommonEvents',_0x44942e=>{$gameSystem['_buttonCommonEventKeyCodes']={};}),PluginManager[_0x4d91ef(0x2ca)](pluginData[_0x4d91ef(0x2b1)],'ClearButtonCommonEventID',_0x275259=>{const _0x440025=_0x4d91ef;VisuMZ[_0x440025(0x231)](_0x275259,_0x275259);const _0x1baabd=_0x275259['CommonEventID'];for(const _0x5b703e of _0x1baabd){$gameSystem[_0x440025(0x26c)](_0x5b703e);}}),PluginManager['registerCommand'](pluginData[_0x4d91ef(0x2b1)],_0x4d91ef(0x326),_0x2ddcee=>{const _0xc692ce=_0x4d91ef;VisuMZ['ConvertParams'](_0x2ddcee,_0x2ddcee);let _0xfc23ed=_0x2ddcee[_0xc692ce(0x2cc)][_0xc692ce(0x25c)]()[_0xc692ce(0x234)]();_0xfc23ed=_0xfc23ed['replace'](/\s*\(.*?\)\s*/g,'')['toUpperCase']()[_0xc692ce(0x234)]();const _0x178afd=TextManager[_0xc692ce(0x2a6)][_0xc692ce(0x207)](letter),_0x181800=$gameSystem[_0xc692ce(0x2dd)](_0x178afd);_0x181800>0x0&&$gameTemp[_0xc692ce(0x308)](_0x181800);}),VisuMZ[_0x4d91ef(0x2cd)][_0x4d91ef(0x2eb)]={'AssignCommonEvent':/<ASSIGN BUTTON COMMON EVENT:[ ](.*)>/i,'AssignButtonSlots':/<ASSIGN BUTTON (?:SLOT|SLOTS):[ ](.*)>/i},VisuMZ['ButtonCommonEvents'][_0x4d91ef(0x30f)]=Scene_Boot['prototype'][_0x4d91ef(0x22a)],Scene_Boot[_0x4d91ef(0x29e)][_0x4d91ef(0x22a)]=function(){const _0x4745d3=_0x4d91ef;VisuMZ[_0x4745d3(0x2cd)][_0x4745d3(0x30f)][_0x4745d3(0x1e4)](this),this[_0x4745d3(0x27a)](),ImageManager[_0x4745d3(0x26d)]();},Scene_Boot[_0x4d91ef(0x29e)]['process_VisuMZ_ButtonCommonEvents_Parameters']=function(){const _0x472421=_0x4d91ef,_0x5d1f03=[];for(let _0x4ba5b4=0x30;_0x4ba5b4<=0x39;_0x4ba5b4++){_0x5d1f03['push'](_0x4ba5b4);}for(let _0x3a704e=0x41;_0x3a704e<=0x5a;_0x3a704e++){_0x5d1f03['push'](_0x3a704e);}for(let _0x2b79a2=0xba;_0x2b79a2<=0xc0;_0x2b79a2++){_0x5d1f03[_0x472421(0x226)](_0x2b79a2);}for(let _0x4e1a7c=0xdb;_0x4e1a7c<=0xde;_0x4e1a7c++){_0x5d1f03[_0x472421(0x226)](_0x4e1a7c);}for(let _0x57821d=0x20;_0x57821d<=0x28;_0x57821d++){_0x5d1f03[_0x472421(0x226)](_0x57821d);}for(let _0x20c25a=0x2d;_0x20c25a<=0x2e;_0x20c25a++){_0x5d1f03[_0x472421(0x226)](_0x20c25a);}for(let _0x4883ab=0x60;_0x4883ab<=0x6f;_0x4883ab++){_0x5d1f03[_0x472421(0x226)](_0x4883ab);}VisuMZ[_0x472421(0x2cd)][_0x472421(0x309)]=_0x5d1f03;},Input[_0x4d91ef(0x319)]=function(_0x1ba3e4){const _0x1804e0=_0x4d91ef;if(!VisuMZ[_0x1804e0(0x2cd)][_0x1804e0(0x29f)]['General'][_0x1804e0(0x1e0)])return![];return!!Input[_0x1804e0(0x2a0)][_0x1ba3e4];},ImageManager['loadButtomCommonEventImage']=function(){const _0x4b169d=_0x4d91ef,_0x48762d=VisuMZ[_0x4b169d(0x2cd)][_0x4b169d(0x29f)][_0x4b169d(0x27f)][_0x4b169d(0x242)];this[_0x4b169d(0x2fd)]=_0x48762d?ImageManager[_0x4b169d(0x257)](_0x48762d):new Bitmap(0x1,0x1);},TextManager[_0x4d91ef(0x2a6)]=['','','','CANCEL','','',_0x4d91ef(0x2c6),'',_0x4d91ef(0x251),_0x4d91ef(0x20b),'','',_0x4d91ef(0x2d7),'ENTER',_0x4d91ef(0x32b),'','SHIFT',_0x4d91ef(0x2f0),_0x4d91ef(0x2b2),_0x4d91ef(0x244),_0x4d91ef(0x2ba),_0x4d91ef(0x2a4),_0x4d91ef(0x313),_0x4d91ef(0x280),_0x4d91ef(0x297),_0x4d91ef(0x27d),'','ESC','CONVERT',_0x4d91ef(0x322),'ACCEPT',_0x4d91ef(0x288),'SPACE','PGUP','PGDN',_0x4d91ef(0x24a),'HOME',_0x4d91ef(0x1e1),'UP',_0x4d91ef(0x2bb),'DOWN','SELECT',_0x4d91ef(0x27b),_0x4d91ef(0x24c),'PRINTSCREEN','INSERT',_0x4d91ef(0x2bf),'','0','1','2','3','4','5','6','7','8','9',_0x4d91ef(0x298),_0x4d91ef(0x2a7),'LESS_THAN',_0x4d91ef(0x260),_0x4d91ef(0x275),_0x4d91ef(0x1f8),'AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',_0x4d91ef(0x2b9),'',_0x4d91ef(0x2a8),'',_0x4d91ef(0x239),_0x4d91ef(0x284),_0x4d91ef(0x220),'NUMPAD2',_0x4d91ef(0x312),'NUMPAD4',_0x4d91ef(0x261),_0x4d91ef(0x30d),_0x4d91ef(0x1e5),_0x4d91ef(0x1e9),_0x4d91ef(0x214),'MULTIPLY',_0x4d91ef(0x324),_0x4d91ef(0x29b),'SUBTRACT',_0x4d91ef(0x252),_0x4d91ef(0x320),'F1','F2','F3','F4','F5','F6','F7','F8','F9',_0x4d91ef(0x20a),_0x4d91ef(0x294),_0x4d91ef(0x1f0),_0x4d91ef(0x311),_0x4d91ef(0x2b0),_0x4d91ef(0x30a),_0x4d91ef(0x2fa),_0x4d91ef(0x208),_0x4d91ef(0x23a),_0x4d91ef(0x1fb),_0x4d91ef(0x2cf),'F21',_0x4d91ef(0x296),'F23',_0x4d91ef(0x328),'','','','','','','','',_0x4d91ef(0x2c8),_0x4d91ef(0x1f5),_0x4d91ef(0x299),'WIN_OEM_FJ_MASSHOU',_0x4d91ef(0x292),_0x4d91ef(0x24d),_0x4d91ef(0x250),'','','','','','','','','',_0x4d91ef(0x2d2),_0x4d91ef(0x1e7),'DOUBLE_QUOTE',_0x4d91ef(0x293),'DOLLAR',_0x4d91ef(0x262),'AMPERSAND',_0x4d91ef(0x318),_0x4d91ef(0x27e),'CLOSE_PAREN',_0x4d91ef(0x2b3),_0x4d91ef(0x25a),_0x4d91ef(0x206),_0x4d91ef(0x2a9),_0x4d91ef(0x2d6),_0x4d91ef(0x21b),'TILDE','','','','',_0x4d91ef(0x300),_0x4d91ef(0x2cb),_0x4d91ef(0x219),'','',_0x4d91ef(0x2a7),_0x4d91ef(0x260),_0x4d91ef(0x25f),_0x4d91ef(0x235),_0x4d91ef(0x23c),_0x4d91ef(0x2e3),_0x4d91ef(0x271),'','','','','','','','','','','','','','','','','','','','','','','','','','',_0x4d91ef(0x28d),_0x4d91ef(0x2ed),'CLOSE_BRACKET','QUOTE','',_0x4d91ef(0x30e),_0x4d91ef(0x238),'',_0x4d91ef(0x253),'WIN_ICO_00','',_0x4d91ef(0x2c2),'','','WIN_OEM_RESET',_0x4d91ef(0x2a3),_0x4d91ef(0x217),_0x4d91ef(0x272),_0x4d91ef(0x1da),'WIN_OEM_WSCTRL',_0x4d91ef(0x249),_0x4d91ef(0x30b),'WIN_OEM_FINISH','WIN_OEM_COPY',_0x4d91ef(0x317),_0x4d91ef(0x30c),_0x4d91ef(0x2e5),_0x4d91ef(0x22c),_0x4d91ef(0x2df),_0x4d91ef(0x29a),_0x4d91ef(0x274),'PLAY',_0x4d91ef(0x267),'',_0x4d91ef(0x201),_0x4d91ef(0x248),''],VisuMZ['ButtonCommonEvents'][_0x4d91ef(0x2ae)]=SceneManager[_0x4d91ef(0x1fa)],SceneManager[_0x4d91ef(0x1fa)]=function(_0x1306c9){const _0x384e2a=_0x4d91ef;this[_0x384e2a(0x303)]()&&this[_0x384e2a(0x2e7)](_0x1306c9)&&this[_0x384e2a(0x1f9)][_0x384e2a(0x2de)](_0x1306c9[_0x384e2a(0x2c7)]),VisuMZ['ButtonCommonEvents'][_0x384e2a(0x2ae)]['call'](this,_0x1306c9);},SceneManager['isSceneMap']=function(){const _0x2a9dd8=_0x4d91ef;return this[_0x2a9dd8(0x1f9)]&&this[_0x2a9dd8(0x1f9)][_0x2a9dd8(0x28f)]===Scene_Map;},SceneManager[_0x4d91ef(0x2e7)]=function(_0xd2d12e){const _0x266ebf=_0x4d91ef;return!Input[_0x266ebf(0x319)](_0xd2d12e[_0x266ebf(0x2c7)]);},VisuMZ[_0x4d91ef(0x2cd)]['Game_System_initialize']=Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x279)],Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x279)]=function(){const _0x1d8177=_0x4d91ef;VisuMZ['ButtonCommonEvents'][_0x1d8177(0x22b)][_0x1d8177(0x1e4)](this),this[_0x1d8177(0x2e1)]();},Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x2e1)]=function(){const _0x260a95=_0x4d91ef;this[_0x260a95(0x237)]={},this[_0x260a95(0x2f4)]={},this[_0x260a95(0x23e)]=VisuMZ[_0x260a95(0x2cd)]['Settings'][_0x260a95(0x27f)][_0x260a95(0x23b)],this[_0x260a95(0x1f6)]();},Game_System['prototype'][_0x4d91ef(0x1f6)]=function(){const _0x1004a3=_0x4d91ef,_0x1630cd=VisuMZ['ButtonCommonEvents'][_0x1004a3(0x29f)],_0x53630e=_0x1004a3(0x28c);for(const _0x2cf996 of VisuMZ[_0x1004a3(0x2cd)][_0x1004a3(0x309)]){const _0xabd8f9=_0x53630e[_0x1004a3(0x229)](_0x2cf996);!!_0x1630cd[_0xabd8f9]&&(this[_0x1004a3(0x291)](_0x2cf996,_0x1630cd[_0xabd8f9][_0x1004a3(0x2d8)]),this[_0x1004a3(0x246)](_0x2cf996,_0x1630cd[_0xabd8f9][_0x1004a3(0x277)]));}},Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x2dd)]=function(_0xbcaa77){const _0x113a52=_0x4d91ef;if(this[_0x113a52(0x237)]===undefined)this[_0x113a52(0x2e1)]();return this['_buttonCommonEventKeyCodes'][_0xbcaa77]||0x0;},Game_System['prototype']['setButtonCommonEvent']=function(_0xab7ed4,_0x1a1f14){const _0x2d61a3=_0x4d91ef;if(this[_0x2d61a3(0x237)]===undefined)this[_0x2d61a3(0x2e1)]();if($gameTemp[_0x2d61a3(0x285)]()&&Input[_0x2d61a3(0x319)](_0xab7ed4)&&_0x1a1f14!==0x0){const _0x7ae780=_0x2d61a3(0x26e)[_0x2d61a3(0x229)](TextManager[_0x2d61a3(0x2a6)][_0xab7ed4]);alert(_0x7ae780);return;}this[_0x2d61a3(0x237)][_0xab7ed4]=_0x1a1f14;},Game_System['prototype'][_0x4d91ef(0x2f6)]=function(_0x1be066){const _0x1b52f8=_0x4d91ef;if(this[_0x1b52f8(0x237)]===undefined)this[_0x1b52f8(0x2e1)]();delete this['_buttonCommonEventKeyCodes'][_0x1be066];},Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x2b8)]=function(_0x439f6e){const _0x36548f=_0x4d91ef;if(this['_buttonCommonEventIcons']===undefined)this['initButtonCommonEvents']();return this[_0x36548f(0x2f4)][_0x439f6e]||0x0;},Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x246)]=function(_0x15c6be,_0x355958){const _0xc69d3e=_0x4d91ef;if(this[_0xc69d3e(0x2f4)]===undefined)this[_0xc69d3e(0x2e1)]();this[_0xc69d3e(0x2f4)][_0x15c6be]=_0x355958;},Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x21f)]=function(_0x555507){const _0x333437=_0x4d91ef;if(this['_buttonCommonEventIcons']===undefined)this[_0x333437(0x2e1)]();delete this[_0x333437(0x2f4)][_0x555507];},Game_System[_0x4d91ef(0x29e)]['isShowButtonCommonEventButtons']=function(){const _0xf4952a=_0x4d91ef;if(this[_0xf4952a(0x23e)]===undefined)this[_0xf4952a(0x2e1)]();return this[_0xf4952a(0x23e)];},Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x2f8)]=function(_0x4463cb){const _0x4d39f6=_0x4d91ef;if(this[_0x4d39f6(0x23e)]===undefined)this['initButtonCommonEvents']();this[_0x4d39f6(0x23e)]=_0x4463cb;},Game_System[_0x4d91ef(0x29e)][_0x4d91ef(0x26c)]=function(_0xcb8d66){const _0x2de3a3=_0x4d91ef;for(const _0x284e88 of VisuMZ['ButtonCommonEvents']['KeysArray']){this[_0x2de3a3(0x2dd)](_0x284e88)===_0xcb8d66&&(this['clearButtonCommonEvent'](_0x284e88),this['clearButtonCommonEventIcon'](_0x284e88));}},VisuMZ['ButtonCommonEvents']['Scene_Map_createSpriteset']=Scene_Map[_0x4d91ef(0x29e)][_0x4d91ef(0x204)],Scene_Map[_0x4d91ef(0x29e)]['createSpriteset']=function(){const _0x37083e=_0x4d91ef;VisuMZ['ButtonCommonEvents'][_0x37083e(0x32a)][_0x37083e(0x1e4)](this),this['createButtonCommonEventsSpriteContainer']();},Scene_Map['prototype'][_0x4d91ef(0x273)]=function(){const _0x2db08a=_0x4d91ef;if(this[_0x2db08a(0x28f)]!==Scene_Map)return;this[_0x2db08a(0x23f)]=new Sprite_ButtonCommonEventsContainer(),this[_0x2db08a(0x2e8)](this[_0x2db08a(0x23f)]);},Scene_Map['prototype'][_0x4d91ef(0x2de)]=function(_0x579af3){const _0x482107=_0x4d91ef;if(!this['isButtonCommonEventOk'](_0x579af3))return;if($gameMap&&$gameMap[_0x482107(0x1e8)]())return;const _0x8bbaf3=$gameSystem[_0x482107(0x2dd)](_0x579af3)||0x0;_0x8bbaf3>0x0&&$dataCommonEvents[_0x8bbaf3]&&($gameTemp['reserveCommonEvent'](_0x8bbaf3),this[_0x482107(0x23f)][_0x482107(0x212)](_0x579af3));},Scene_Map['prototype'][_0x4d91ef(0x2dc)]=function(_0x40b4b4){const _0x461055=_0x4d91ef;if(!this['isActive']())return![];if($gameMessage['isBusy']())return![];if(SceneManager[_0x461055(0x230)]())return![];if(Input[_0x461055(0x2a0)][_0x40b4b4]==='ok'){if($gamePlayer[_0x461055(0x2ec)]())return![];}return!![];},VisuMZ[_0x4d91ef(0x2cd)]['Scene_Map_isAnyButtonPressed']=Scene_Map[_0x4d91ef(0x29e)][_0x4d91ef(0x2bc)],Scene_Map[_0x4d91ef(0x29e)][_0x4d91ef(0x2bc)]=function(){const _0x1cfbe4=_0x4d91ef;return VisuMZ[_0x1cfbe4(0x2cd)][_0x1cfbe4(0x1e3)][_0x1cfbe4(0x1e4)](this)||this['_buttonCommonEventsSpriteContainer']?.[_0x1cfbe4(0x2bc)]();},Game_Player['prototype']['checkEventTriggerTouchInForwardLocation']=function(){const _0xd057f5=_0x4d91ef;let _0x5d070c=this['x'],_0x240b8e=this['y'];for(const _0x3ba523 of $gameMap[_0xd057f5(0x314)](_0x5d070c,_0x240b8e)){if(!_0x3ba523)continue;if(_0x3ba523['isTriggerIn']([0x1,0x2]))return!![];}return![];};function Sprite_ButtonCommonEventsContainer(){const _0x2ba422=_0x4d91ef;this[_0x2ba422(0x279)](...arguments);}Sprite_ButtonCommonEventsContainer['prototype']=Object[_0x4d91ef(0x2aa)](Sprite[_0x4d91ef(0x29e)]),Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)][_0x4d91ef(0x28f)]=Sprite_ButtonCommonEventsContainer,Sprite_ButtonCommonEventsContainer['prototype']['initialize']=function(){const _0x16f13a=_0x4d91ef;Sprite['prototype'][_0x16f13a(0x279)][_0x16f13a(0x1e4)](this),this[_0x16f13a(0x2ff)](),this[_0x16f13a(0x295)]();},Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)][_0x4d91ef(0x2ff)]=function(){const _0x1ae372=_0x4d91ef;this['width']=Graphics[_0x1ae372(0x305)],this[_0x1ae372(0x266)]=Graphics[_0x1ae372(0x266)];},Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)]['buttonWidth']=function(){const _0x28b812=_0x4d91ef;return VisuMZ[_0x28b812(0x2cd)]['Settings'][_0x28b812(0x27f)][_0x28b812(0x269)];},Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)][_0x4d91ef(0x2e0)]=function(){const _0x20d8f5=_0x4d91ef;return VisuMZ[_0x20d8f5(0x2cd)]['Settings']['General'][_0x20d8f5(0x2b4)];},Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)]['bottomPoint']=function(){const _0x4d595d=_0x4d91ef;try{return VisuMZ['ButtonCommonEvents']['Settings'][_0x4d595d(0x27f)]['BottomPointJS'][_0x4d595d(0x1e4)](this);}catch(_0x481479){if($gameTemp[_0x4d595d(0x285)]())console[_0x4d595d(0x2f7)](_0x481479);return new Point(0x0,0x0);}},Sprite_ButtonCommonEventsContainer['prototype']['leftPoint']=function(){const _0x37cbf4=_0x4d91ef;try{return VisuMZ[_0x37cbf4(0x2cd)][_0x37cbf4(0x29f)][_0x37cbf4(0x27f)][_0x37cbf4(0x241)][_0x37cbf4(0x1e4)](this);}catch(_0x5da3b7){if($gameTemp[_0x37cbf4(0x285)]())console['log'](_0x5da3b7);return new Point(0x0,0x0);}},Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)][_0x4d91ef(0x329)]=function(){const _0x48807f=_0x4d91ef;try{return VisuMZ['ButtonCommonEvents']['Settings']['General']['RightPointJS'][_0x48807f(0x1e4)](this);}catch(_0x18c3f8){if($gameTemp[_0x48807f(0x285)]())console[_0x48807f(0x2f7)](_0x18c3f8);return new Point(0x0,0x0);}},Sprite_ButtonCommonEventsContainer['prototype'][_0x4d91ef(0x21a)]=function(){const _0x35cf0a=_0x4d91ef;try{return VisuMZ[_0x35cf0a(0x2cd)][_0x35cf0a(0x29f)][_0x35cf0a(0x27f)]['AbovePointJS'][_0x35cf0a(0x1e4)](this);}catch(_0x254816){if($gameTemp['isPlaytest']())console[_0x35cf0a(0x2f7)](_0x254816);return new Point(0x0,0x0);}},Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)][_0x4d91ef(0x295)]=function(){const _0x1f9900=_0x4d91ef,_0x53836a=VisuMZ[_0x1f9900(0x2cd)][_0x1f9900(0x29f)],_0x51001d=_0x1f9900(0x28c);for(const _0x29168d of VisuMZ['ButtonCommonEvents'][_0x1f9900(0x309)]){const _0x49262c=_0x51001d[_0x1f9900(0x229)](_0x29168d);if(!_0x53836a[_0x49262c])continue;if(!_0x53836a[_0x49262c][_0x1f9900(0x286)])continue;const _0x10abf9=new Sprite_ButtonCommonEvent(_0x29168d);this[_0x1f9900(0x2e8)](_0x10abf9);const _0x55aa78=_0x10abf9[_0x1f9900(0x2d4)]()[_0x1f9900(0x28a)][_0x1f9900(0x1e4)](this)||new Point(0x0,0x0);_0x10abf9['x']=_0x55aa78['x'],_0x10abf9['y']=_0x55aa78['y'];}},Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)][_0x4d91ef(0x2bc)]=function(){const _0x4396f4=_0x4d91ef;return this['children'][_0x4396f4(0x224)](_0x4f1725=>_0x4f1725[_0x4396f4(0x1fe)]());},Sprite_ButtonCommonEventsContainer[_0x4d91ef(0x29e)][_0x4d91ef(0x212)]=function(_0x4978d3){const _0x33f711=_0x4d91ef,_0x32e60c=this[_0x33f711(0x321)][_0x33f711(0x290)](_0x36043a=>_0x36043a&&_0x36043a['_key']===_0x4978d3);for(const _0x52f176 of _0x32e60c){if(!_0x52f176)continue;_0x52f176[_0x33f711(0x259)]();}};function Sprite_ButtonCommonEvent(){this['initialize'](...arguments);}Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)]=Object[_0x4d91ef(0x2aa)](Sprite_Clickable[_0x4d91ef(0x29e)]),Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x28f)]=Sprite_ButtonCommonEvent,Sprite_ButtonCommonEvent['prototype']['initialize']=function(_0x482b55){const _0x178d96=_0x4d91ef;this[_0x178d96(0x223)]=_0x482b55,Sprite_Clickable[_0x178d96(0x29e)][_0x178d96(0x279)]['call'](this),this[_0x178d96(0x20c)](),this['opacity']=this['targetOpacity']();},Sprite_ButtonCommonEvent['prototype'][_0x4d91ef(0x2d4)]=function(){const _0x26067d=_0x4d91ef,_0x4a0333=_0x26067d(0x28c)[_0x26067d(0x229)](this['_key']);return VisuMZ[_0x26067d(0x2cd)][_0x26067d(0x29f)][_0x4a0333]||{};},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x20c)]=function(){const _0x35f97b=_0x4d91ef,_0x484956=VisuMZ['ButtonCommonEvents'][_0x35f97b(0x29f)][_0x35f97b(0x27f)];this[_0x35f97b(0x233)]=new Bitmap(_0x484956[_0x35f97b(0x269)],_0x484956[_0x35f97b(0x2b4)]),this['_icon']=this[_0x35f97b(0x2ac)](),this[_0x35f97b(0x2c9)]();},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x209)]=function(){const _0x4bf9ac=_0x4d91ef;return ImageManager[_0x4bf9ac(0x2fd)];},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)]['commonEventID']=function(){const _0x17655f=_0x4d91ef;return $gameSystem[_0x17655f(0x2dd)](this['_key']);},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)]['buttonLabel']=function(){const _0x4296c4=_0x4d91ef;if(!this[_0x4296c4(0x2d4)]())return'';return this[_0x4296c4(0x2d4)]()[_0x4296c4(0x258)];},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2ac)]=function(){const _0x1c3aa0=_0x4d91ef;if(!this[_0x1c3aa0(0x210)]())return 0x0;const _0x2268a2=$gameSystem['getButtonCommonEventIcon'](this['_key']);if(_0x2268a2!==0x0)return _0x2268a2;const _0x2d4e15=VisuMZ[_0x1c3aa0(0x2cd)][_0x1c3aa0(0x29f)]['General'],_0x2c7968=_0x2d4e15[_0x1c3aa0(0x1ea)],_0x45ddef=Math[_0x1c3aa0(0x2f5)](_0x2c7968[_0x1c3aa0(0x1ec)],0x1);let _0x139431=_0x2c7968[this[_0x1c3aa0(0x223)]%_0x45ddef]||0x0;return _0x139431;},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2c9)]=function(){const _0x44d35e=_0x4d91ef;this['bitmap'][_0x44d35e(0x2c4)]();const _0x2d2c56=VisuMZ[_0x44d35e(0x2cd)]['Settings'][_0x44d35e(0x27f)];_0x2d2c56[_0x44d35e(0x22d)][_0x44d35e(0x1e4)](this);},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x1f1)]=function(){const _0x1f435b=_0x4d91ef;if(this[_0x1f435b(0x2f9)]<0xff)return![];return this['commonEventID']()>0x0;},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x26a)]=function(){const _0x3c12ac=_0x4d91ef;Sprite_Clickable[_0x3c12ac(0x29e)][_0x3c12ac(0x26a)][_0x3c12ac(0x1e4)](this),this[_0x3c12ac(0x2f1)]();},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2e4)]=function(){const _0x104fe3=_0x4d91ef;Sprite_Clickable['prototype'][_0x104fe3(0x2e4)][_0x104fe3(0x1e4)](this),this[_0x104fe3(0x22e)]();},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2c0)]=function(){const _0x383062=_0x4d91ef;Sprite_Clickable[_0x383062(0x29e)][_0x383062(0x2c0)][_0x383062(0x1e4)](this),this['callCommonEvent'](),this[_0x383062(0x2e4)]();},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2f1)]=function(){const _0x55dae8=_0x4d91ef,_0x1ece5c=VisuMZ['ButtonCommonEvents'][_0x55dae8(0x29f)][_0x55dae8(0x27f)];_0x1ece5c['ChangeTone']&&this['setColorTone'](_0x1ece5c['HoverTone']);},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x22e)]=function(){const _0x4a40ce=_0x4d91ef;this[_0x4a40ce(0x24e)]([0x0,0x0,0x0,0x0]);},Sprite_ButtonCommonEvent['prototype'][_0x4d91ef(0x259)]=function(){const _0x18506b=_0x4d91ef;this[_0x18506b(0x2f1)](),setTimeout(this[_0x18506b(0x22e)][_0x18506b(0x310)](this),0x64);},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x1e2)]=function(){const _0x3e0701=_0x4d91ef;if(!SceneManager[_0x3e0701(0x1f9)][_0x3e0701(0x2dc)]())return;if($gameMap&&$gameMap[_0x3e0701(0x1e8)]())return;const _0x334a96=this[_0x3e0701(0x210)]();$gameTemp[_0x3e0701(0x308)](_0x334a96),this['onMouseExit'](),this[_0x3e0701(0x259)]();},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x1fe)]=function(){const _0x20e979=_0x4d91ef;if(!this['isPressed']())return![];if(this[_0x20e979(0x1e2)]()<=0x0)return![];return!![];},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)]['update']=function(){const _0x4c2245=_0x4d91ef;Sprite_Clickable[_0x4c2245(0x29e)]['update'][_0x4c2245(0x1e4)](this),this[_0x4c2245(0x1db)](),this[_0x4c2245(0x20e)]();},Sprite_ButtonCommonEvent['prototype']['updateOpacity']=function(){const _0x197315=_0x4d91ef,_0x33f6b2=this['targetOpacity']();if(this[_0x197315(0x2f9)]>_0x33f6b2)this[_0x197315(0x2f9)]-=0x10;else this[_0x197315(0x2f9)]<_0x33f6b2&&(this[_0x197315(0x2f9)]+=0x10);},Sprite_ButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2c3)]=function(){const _0x2b91ba=_0x4d91ef;if($gameMessage&&$gameMessage[_0x2b91ba(0x283)]())return 0x0;if(!$gameSystem[_0x2b91ba(0x20d)]())return 0x0;if(this[_0x2b91ba(0x2d4)]()[_0x2b91ba(0x31e)]){const _0x1b3e6a=this[_0x2b91ba(0x210)]();if(!$dataCommonEvents[_0x1b3e6a])return 0x0;}return 0xff;},Sprite_ButtonCommonEvent['prototype'][_0x4d91ef(0x20e)]=function(){const _0x88106e=_0x4d91ef;if(this[_0x88106e(0x2d1)]===this['buttonIcon']())return;this['_icon']=this[_0x88106e(0x2ac)](),this['refresh']();},VisuMZ['ButtonCommonEvents']['drawData']=function(){const _0x35ac70=_0x4d91ef,_0x2e5dec=this[_0x35ac70(0x305)],_0xe08257=this[_0x35ac70(0x266)],_0xd1e275=ColorManager['itemBackColor1'](),_0x397306=ColorManager[_0x35ac70(0x221)]();this[_0x35ac70(0x233)][_0x35ac70(0x2f3)](0x1,0x1,_0x2e5dec-0x2,_0xe08257-0x2,_0xd1e275,_0x397306,!![]),this[_0x35ac70(0x233)][_0x35ac70(0x20f)](0x1,0x1,_0x2e5dec-0x2,_0xe08257-0x2,_0xd1e275);if(this['pictureBitmap']()){const _0x2f80d2=this[_0x35ac70(0x209)](),_0x4f3b7b=_0x2f80d2[_0x35ac70(0x305)],_0x486b49=_0x2f80d2[_0x35ac70(0x266)];this['bitmap'][_0x35ac70(0x1e6)](_0x2f80d2,0x0,0x0,_0x4f3b7b,_0x486b49,0x0,0x0,_0x2e5dec,_0xe08257);}const _0x2442dc=this[_0x35ac70(0x2ac)](),_0x114837=ImageManager[_0x35ac70(0x2d5)](_0x35ac70(0x256)),_0x10fc54=ImageManager['iconWidth'],_0x5ab6d5=ImageManager['iconHeight'],_0x23d8c8=_0x2442dc%0x10*_0x10fc54,_0x4b8e98=Math['floor'](_0x2442dc/0x10)*_0x5ab6d5,_0x2ccd24=Math[_0x35ac70(0x200)](this['width']/_0x10fc54)*_0x10fc54,_0x12cd9f=Math[_0x35ac70(0x200)](this['height']/_0x5ab6d5)*_0x5ab6d5,_0x362c5b=Math['floor']((this[_0x35ac70(0x305)]-_0x2ccd24)/0x2),_0x4f3f9e=Math[_0x35ac70(0x200)]((this[_0x35ac70(0x266)]-_0x12cd9f)/0x2);this['bitmap'][_0x35ac70(0x2ee)][_0x35ac70(0x1de)]=![],this[_0x35ac70(0x233)][_0x35ac70(0x1e6)](_0x114837,_0x23d8c8,_0x4b8e98,_0x10fc54,_0x5ab6d5,_0x362c5b,_0x4f3f9e,_0x2ccd24,_0x12cd9f),this[_0x35ac70(0x233)][_0x35ac70(0x2ee)][_0x35ac70(0x1de)]=!![];const _0x36084d=this[_0x35ac70(0x306)]();this[_0x35ac70(0x233)][_0x35ac70(0x1eb)]=$gameSystem[_0x35ac70(0x215)](),this[_0x35ac70(0x233)][_0x35ac70(0x28b)]=$gameSystem['mainFontSize'](),this[_0x35ac70(0x233)]['drawText'](_0x36084d,0x0,0x0,_0x2e5dec,this['bitmap'][_0x35ac70(0x28b)]+0x4,_0x35ac70(0x29c));},VisuMZ[_0x4d91ef(0x2cd)][_0x4d91ef(0x270)]=function(_0x5e6eeb){const _0x3c32ff=_0x4d91ef;if(!_0x5e6eeb)return![];if(![_0x3c32ff(0x1dc),_0x3c32ff(0x316)][_0x3c32ff(0x1fd)](SceneManager[_0x3c32ff(0x1f9)][_0x3c32ff(0x28f)]['name']))return![];const _0x13493f=VisuMZ['ButtonCommonEvents']['RegExp'],_0x1c6aef=_0x5e6eeb['note'];return _0x1c6aef[_0x3c32ff(0x213)](_0x13493f[_0x3c32ff(0x24f)])&&_0x1c6aef['match'](_0x13493f[_0x3c32ff(0x31c)]);},TextManager[_0x4d91ef(0x222)]=VisuMZ[_0x4d91ef(0x2cd)][_0x4d91ef(0x29f)][_0x4d91ef(0x304)][_0x4d91ef(0x2e6)],Scene_ItemBase[_0x4d91ef(0x29e)]['createAssignButtonCommonEventsWindow']=function(){const _0x41133b=_0x4d91ef,_0x449090=VisuMZ['ButtonCommonEvents']['RegExp'],_0x41516f=this[_0x41133b(0x2f2)]()[_0x41133b(0x228)];_0x41516f[_0x41133b(0x213)](_0x449090[_0x41133b(0x31c)]);const _0x85465a=String(RegExp['$1'])[_0x41133b(0x268)](',')['map'](_0x316c43=>String(_0x316c43)['toUpperCase']()['trim']())[_0x41133b(0x290)](_0x19a8cf=>TextManager[_0x41133b(0x2a6)]['includes'](_0x19a8cf))[_0x41133b(0x290)](_0x140b3a=>VisuMZ[_0x41133b(0x2cd)][_0x41133b(0x309)]['includes'](TextManager[_0x41133b(0x2a6)][_0x41133b(0x207)](_0x140b3a)))[_0x41133b(0x290)](_0x535d4f=>!Input[_0x41133b(0x319)](TextManager['stringKeyMap']['indexOf'](_0x535d4f)));_0x41516f[_0x41133b(0x213)](_0x449090['AssignCommonEvent']);const _0x5008b3=eval(RegExp['$1']),_0x5e2767=this['assignButtonCommonEventsWindowRect'](_0x85465a),_0x236267=new Window_AssignButtonCommonEvent(_0x5e2767);_0x236267['setData'](_0x5008b3,_0x85465a),this['addChild'](_0x236267),this[_0x41133b(0x1ff)]=_0x236267,_0x236267['setHandler'](_0x41133b(0x2a2),this[_0x41133b(0x21d)][_0x41133b(0x310)](this)),_0x236267[_0x41133b(0x25b)]('cancel',this[_0x41133b(0x243)][_0x41133b(0x310)](this));},Scene_ItemBase['prototype'][_0x4d91ef(0x323)]=function(_0xa19019){const _0xb0042f=_0x4d91ef,_0xffe8c9=VisuMZ[_0xb0042f(0x2cd)][_0xb0042f(0x29f)][_0xb0042f(0x304)];if(_0xffe8c9&&_0xffe8c9[_0xb0042f(0x2a1)])return _0xffe8c9[_0xb0042f(0x2a1)][_0xb0042f(0x1e4)](this,_0xa19019);const _0x159956=Window_Base[_0xb0042f(0x29e)][_0xb0042f(0x2b7)]()*0x2+0x8;let _0xa35a66=$gameSystem[_0xb0042f(0x31a)]()*0x2+_0xa19019[_0xb0042f(0x1ec)]*_0x159956;_0xa35a66=_0xa35a66[_0xb0042f(0x2da)](Graphics[_0xb0042f(0x21c)]/0x3,Graphics[_0xb0042f(0x21c)]);let _0x33adc5=this[_0xb0042f(0x327)](0x3,!![]),_0x22397f=Math[_0xb0042f(0x26f)]((Graphics[_0xb0042f(0x21c)]-_0xa35a66)/0x2),_0x1975ad=Math[_0xb0042f(0x26f)]((Graphics['boxHeight']-_0x33adc5)/0x2);return new Rectangle(_0x22397f,_0x1975ad,_0xa35a66,_0x33adc5);},Scene_ItemBase[_0x4d91ef(0x29e)][_0x4d91ef(0x21d)]=function(){const _0x170580=_0x4d91ef,_0x2131bd=this[_0x170580(0x1ff)][_0x170580(0x236)](),_0x288374=this[_0x170580(0x1ff)][_0x170580(0x282)],_0x43a527=this[_0x170580(0x2f2)]()[_0x170580(0x247)];$gameSystem[_0x170580(0x26c)](_0x288374),$gameSystem[_0x170580(0x291)](_0x2131bd,_0x288374),$gameSystem['setButtonCommonEventIcon'](_0x2131bd,_0x43a527),this['_assignButtonCommonEventsWindow'][_0x170580(0x2c9)](),setTimeout(this[_0x170580(0x243)][_0x170580(0x310)](this),0x1f4);},Scene_ItemBase[_0x4d91ef(0x29e)][_0x4d91ef(0x243)]=function(){const _0x4b44d8=_0x4d91ef;this[_0x4b44d8(0x276)][_0x4b44d8(0x1f4)](this['_assignButtonCommonEventsWindow']),this[_0x4b44d8(0x1ff)][_0x4b44d8(0x227)](),this[_0x4b44d8(0x1ff)]=undefined,this[_0x4b44d8(0x2c1)]['activate'](),this[_0x4b44d8(0x2c1)][_0x4b44d8(0x2e9)]();},VisuMZ[_0x4d91ef(0x2cd)][_0x4d91ef(0x2d9)]=Scene_Item['prototype'][_0x4d91ef(0x2ce)],Scene_Item['prototype']['onItemOk']=function(){const _0x500383=_0x4d91ef;VisuMZ['ButtonCommonEvents'][_0x500383(0x270)](this['item']())?this[_0x500383(0x2fe)]():VisuMZ[_0x500383(0x2cd)][_0x500383(0x2d9)][_0x500383(0x1e4)](this);},VisuMZ['ButtonCommonEvents']['Scene_Skill_onItemOk']=Scene_Skill[_0x4d91ef(0x29e)][_0x4d91ef(0x2ce)],Scene_Skill[_0x4d91ef(0x29e)]['onItemOk']=function(){const _0x5284ea=_0x4d91ef;VisuMZ[_0x5284ea(0x2cd)][_0x5284ea(0x270)](this['item']())?this['createAssignButtonCommonEventsWindow']():VisuMZ[_0x5284ea(0x2cd)][_0x5284ea(0x1f2)][_0x5284ea(0x1e4)](this);},VisuMZ[_0x4d91ef(0x2cd)]['Window_ItemList_isEnabled']=Window_ItemList[_0x4d91ef(0x29e)][_0x4d91ef(0x27c)],Window_ItemList[_0x4d91ef(0x29e)]['isEnabled']=function(_0x543f21){const _0x2fb7c3=_0x4d91ef;return VisuMZ[_0x2fb7c3(0x2cd)][_0x2fb7c3(0x270)](_0x543f21)?!![]:VisuMZ[_0x2fb7c3(0x2cd)][_0x2fb7c3(0x25e)][_0x2fb7c3(0x1e4)](this,_0x543f21);},VisuMZ[_0x4d91ef(0x2cd)][_0x4d91ef(0x2fc)]=Window_SkillList[_0x4d91ef(0x29e)][_0x4d91ef(0x27c)],Window_SkillList[_0x4d91ef(0x29e)]['isEnabled']=function(_0x25a1f7){const _0x2dd671=_0x4d91ef;return VisuMZ[_0x2dd671(0x2cd)][_0x2dd671(0x270)](_0x25a1f7)?!![]:VisuMZ[_0x2dd671(0x2cd)][_0x2dd671(0x2fc)][_0x2dd671(0x1e4)](this,_0x25a1f7);};function Window_AssignButtonCommonEvent(){const _0x24af1b=_0x4d91ef;this[_0x24af1b(0x279)](...arguments);}Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)]=Object[_0x4d91ef(0x2aa)](Window_HorzCommand[_0x4d91ef(0x29e)]),Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x28f)]=Window_AssignButtonCommonEvent,Window_AssignButtonCommonEvent[_0x4d91ef(0x301)]=VisuMZ[_0x4d91ef(0x2cd)][_0x4d91ef(0x29f)][_0x4d91ef(0x304)][_0x4d91ef(0x1ee)],Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x279)]=function(_0x2c4320){const _0x638ef0=_0x4d91ef;this['_commonEventID']=0x0,this[_0x638ef0(0x265)]=[],Window_HorzCommand['prototype'][_0x638ef0(0x279)][_0x638ef0(0x1e4)](this,_0x2c4320);},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)]['maxCols']=function(){const _0x28f5a2=_0x4d91ef;return this[_0x28f5a2(0x265)][_0x28f5a2(0x1ec)]||0x1;},Window_AssignButtonCommonEvent['prototype'][_0x4d91ef(0x1df)]=function(){return 0x0;},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x21e)]=function(){const _0x2818b8=_0x4d91ef;return Window_Scrollable[_0x2818b8(0x29e)]['itemHeight'][_0x2818b8(0x1e4)](this)*0x2+0x8;},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)]['setData']=function(_0x226211,_0x1fc43a){const _0xa03e43=_0x4d91ef;this[_0xa03e43(0x282)]=_0x226211,this['_slots']=_0x1fc43a,this[_0xa03e43(0x2c9)]();let _0x320746=0x0;for(const _0x34609c of this[_0xa03e43(0x265)]){const _0x30fb67=TextManager[_0xa03e43(0x2a6)][_0xa03e43(0x207)](_0x34609c);$gameSystem[_0xa03e43(0x2dd)](_0x30fb67)===this[_0xa03e43(0x282)]&&(_0x320746=this[_0xa03e43(0x265)][_0xa03e43(0x207)](_0x34609c));}this[_0xa03e43(0x2a5)](_0x320746),this[_0xa03e43(0x307)]();},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x211)]=function(){const _0x194bf8=_0x4d91ef;if(!this[_0x194bf8(0x265)])return;for(const _0x4f4c43 of this[_0x194bf8(0x265)]){const _0xd58ba0=TextManager['stringKeyMap'][_0x194bf8(0x207)](_0x4f4c43),_0x262e97=VisuMZ[_0x194bf8(0x2cd)][_0x194bf8(0x29f)][_0x194bf8(0x28c)[_0x194bf8(0x229)](_0xd58ba0)],_0x5ac74b=_0x262e97['ButtonText'];this[_0x194bf8(0x28e)](_0x5ac74b,_0x194bf8(0x2a2),!![],_0xd58ba0);}},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2bd)]=function(_0x4d397d){const _0x3c7698=_0x4d91ef,_0x11f382=Window_HorzCommand[_0x3c7698(0x29e)][_0x3c7698(0x2bd)][_0x3c7698(0x1e4)](this,_0x4d397d);return _0x11f382['y']+=this['lineHeight']()+0x8-this[_0x3c7698(0x216)]()/0x2-this[_0x3c7698(0x315)](),_0x11f382;},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2c9)]=function(){const _0x22de66=_0x4d91ef;Window_HorzCommand[_0x22de66(0x29e)][_0x22de66(0x2c9)][_0x22de66(0x1e4)](this);if(!this[_0x22de66(0x265)])return;this[_0x22de66(0x29d)]();},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)]['drawTitle']=function(){const _0x5ad040=_0x4d91ef;this[_0x5ad040(0x2fb)](),this['changePaintOpacity'](!![]);const _0x582d59=TextManager[_0x5ad040(0x222)];this['drawText'](_0x582d59,0x0,0x0,this[_0x5ad040(0x2d0)],_0x5ad040(0x29c));},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x1dd)]=function(_0x570279){const _0x4a2591=_0x4d91ef,_0x5324fe=this[_0x4a2591(0x2ad)](_0x570279),_0x42a0a9=this[_0x4a2591(0x1ed)][_0x570279][_0x4a2591(0x255)],_0x541548=$gameSystem[_0x4a2591(0x2b8)](_0x42a0a9),_0x43067e=_0x5324fe['x']+Math[_0x4a2591(0x26f)]((_0x5324fe[_0x4a2591(0x305)]-ImageManager['iconWidth'])/0x2),_0x3649d0=_0x5324fe['y']+Math['round']((_0x5324fe[_0x4a2591(0x266)]-ImageManager['iconHeight']/0x2)/0x2);this[_0x4a2591(0x232)](_0x541548,_0x43067e,_0x3649d0),this[_0x4a2591(0x2fb)](),this[_0x4a2591(0x202)][_0x4a2591(0x1eb)]=$gameSystem['numberFontFace'](),this[_0x4a2591(0x202)][_0x4a2591(0x28b)]=$gameSystem[_0x4a2591(0x2af)](),this['changePaintOpacity'](this[_0x4a2591(0x23d)](_0x570279));const _0x313a09=Window_AssignButtonCommonEvent[_0x4a2591(0x301)];this['drawText'](this['commandName'](_0x570279),_0x5324fe['x'],_0x5324fe['y'],_0x5324fe[_0x4a2591(0x305)],_0x313a09);},Window_AssignButtonCommonEvent[_0x4d91ef(0x29e)][_0x4d91ef(0x2db)]=function(){SoundManager['playEquip']();};