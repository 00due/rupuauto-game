//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.74;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.74] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 * 
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
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
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 * 
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 * 
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 * 
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
 * 
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 *
 * ---
 *
 * Window Defaults
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
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
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 *
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @max 100
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"false","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Misc":"","AntiZoomPictures:eval":"true","AutoStretch:str":"stretch","FontShadows:eval":"false","FontSmoothing:eval":"true","KeyItemProtect:eval":"true","ModernControls:eval":"true","NoTileShadows:eval":"true","PixelateImageRendering:eval":"false","RequireFocus:eval":"true","SmartEventCollisionPriority:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadeCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 * 
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No backgrounds.
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
 * 
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x391453=_0x35a1;(function(_0x143ef1,_0x3ceeeb){const _0x3325fa=_0x35a1,_0x417dc1=_0x143ef1();while(!![]){try{const _0x3cd117=-parseInt(_0x3325fa(0x7a0))/0x1*(-parseInt(_0x3325fa(0x811))/0x2)+-parseInt(_0x3325fa(0x574))/0x3*(parseInt(_0x3325fa(0x502))/0x4)+-parseInt(_0x3325fa(0x59e))/0x5*(parseInt(_0x3325fa(0x627))/0x6)+-parseInt(_0x3325fa(0x68f))/0x7+-parseInt(_0x3325fa(0x2bf))/0x8+parseInt(_0x3325fa(0x6a6))/0x9+-parseInt(_0x3325fa(0x796))/0xa*(-parseInt(_0x3325fa(0x73b))/0xb);if(_0x3cd117===_0x3ceeeb)break;else _0x417dc1['push'](_0x417dc1['shift']());}catch(_0x586470){_0x417dc1['push'](_0x417dc1['shift']());}}}(_0x5dfb,0x8b3e5));var label=_0x391453(0x1f6),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x391453(0x487)](function(_0xd923f2){const _0x1329be=_0x391453;return _0xd923f2[_0x1329be(0x2a6)]&&_0xd923f2[_0x1329be(0x80b)][_0x1329be(0x3fe)]('['+label+']');})[0x0];VisuMZ[label][_0x391453(0x63e)]=VisuMZ[label][_0x391453(0x63e)]||{},VisuMZ[_0x391453(0x84c)]=function(_0x3dab1c,_0x5117eb){const _0x19d4b7=_0x391453;for(const _0x27a79a in _0x5117eb){if(_0x27a79a['match'](/(.*):(.*)/i)){if(_0x19d4b7(0x1e6)!=='cOAmc')this['backOpacity']=_0xef39d6[_0x19d4b7(0x1f6)]['Settings'][_0x19d4b7(0x5f3)][_0x19d4b7(0x315)];else{const _0x4c0658=String(RegExp['$1']),_0xd12fef=String(RegExp['$2'])[_0x19d4b7(0x448)]()[_0x19d4b7(0x780)]();let _0x3e196f,_0x420139,_0x410356;switch(_0xd12fef){case _0x19d4b7(0x7e8):_0x3e196f=_0x5117eb[_0x27a79a]!==''?Number(_0x5117eb[_0x27a79a]):0x0;break;case _0x19d4b7(0x73f):_0x420139=_0x5117eb[_0x27a79a]!==''?JSON[_0x19d4b7(0x1d9)](_0x5117eb[_0x27a79a]):[],_0x3e196f=_0x420139[_0x19d4b7(0x48c)](_0x23dd86=>Number(_0x23dd86));break;case _0x19d4b7(0x26d):_0x3e196f=_0x5117eb[_0x27a79a]!==''?eval(_0x5117eb[_0x27a79a]):null;break;case _0x19d4b7(0x1ae):_0x420139=_0x5117eb[_0x27a79a]!==''?JSON[_0x19d4b7(0x1d9)](_0x5117eb[_0x27a79a]):[],_0x3e196f=_0x420139[_0x19d4b7(0x48c)](_0x5014c1=>eval(_0x5014c1));break;case _0x19d4b7(0x612):_0x3e196f=_0x5117eb[_0x27a79a]!==''?JSON[_0x19d4b7(0x1d9)](_0x5117eb[_0x27a79a]):'';break;case _0x19d4b7(0x4fc):_0x420139=_0x5117eb[_0x27a79a]!==''?JSON['parse'](_0x5117eb[_0x27a79a]):[],_0x3e196f=_0x420139[_0x19d4b7(0x48c)](_0x1914a0=>JSON[_0x19d4b7(0x1d9)](_0x1914a0));break;case _0x19d4b7(0x541):_0x3e196f=_0x5117eb[_0x27a79a]!==''?new Function(JSON['parse'](_0x5117eb[_0x27a79a])):new Function(_0x19d4b7(0x5a0));break;case _0x19d4b7(0x20a):_0x420139=_0x5117eb[_0x27a79a]!==''?JSON[_0x19d4b7(0x1d9)](_0x5117eb[_0x27a79a]):[],_0x3e196f=_0x420139[_0x19d4b7(0x48c)](_0x2f698e=>new Function(JSON[_0x19d4b7(0x1d9)](_0x2f698e)));break;case _0x19d4b7(0x4eb):_0x3e196f=_0x5117eb[_0x27a79a]!==''?String(_0x5117eb[_0x27a79a]):'';break;case _0x19d4b7(0x815):_0x420139=_0x5117eb[_0x27a79a]!==''?JSON['parse'](_0x5117eb[_0x27a79a]):[],_0x3e196f=_0x420139[_0x19d4b7(0x48c)](_0x3a5b56=>String(_0x3a5b56));break;case'STRUCT':_0x410356=_0x5117eb[_0x27a79a]!==''?JSON[_0x19d4b7(0x1d9)](_0x5117eb[_0x27a79a]):{},_0x3dab1c[_0x4c0658]={},VisuMZ[_0x19d4b7(0x84c)](_0x3dab1c[_0x4c0658],_0x410356);continue;case'ARRAYSTRUCT':_0x420139=_0x5117eb[_0x27a79a]!==''?JSON['parse'](_0x5117eb[_0x27a79a]):[],_0x3e196f=_0x420139[_0x19d4b7(0x48c)](_0x4feea4=>VisuMZ[_0x19d4b7(0x84c)]({},JSON[_0x19d4b7(0x1d9)](_0x4feea4)));break;default:continue;}_0x3dab1c[_0x4c0658]=_0x3e196f;}}}return _0x3dab1c;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x10b)]=SceneManager['exit'],SceneManager[_0x391453(0x4f6)]=function(){const _0x49f98a=_0x391453;VisuMZ[_0x49f98a(0x1f6)][_0x49f98a(0x10b)][_0x49f98a(0xd0)](this);if(Utils['RPGMAKER_VERSION']>=_0x49f98a(0x95f)){if(typeof nw===_0x49f98a(0x58d))nw[_0x49f98a(0x2d2)][_0x49f98a(0x530)]();}},(_0xa198c5=>{const _0x5b1733=_0x391453,_0x4fba2c=_0xa198c5[_0x5b1733(0x32f)];for(const _0x4bf9cb of dependencies){if(_0x5b1733(0x29b)!==_0x5b1733(0x6c4)){if(!Imported[_0x4bf9cb]){alert(_0x5b1733(0x56d)[_0x5b1733(0x5ae)](_0x4fba2c,_0x4bf9cb)),SceneManager[_0x5b1733(0x4f6)]();break;}}else{const _0x1f30f4=_0x1e9d64[_0x5b1733(0x135)](_0x19a60e);_0x68b269[_0x5b1733(0x4ec)](_0x37f9db,!_0x1f30f4);}}const _0x4512ae=_0xa198c5[_0x5b1733(0x80b)];if(_0x4512ae[_0x5b1733(0x13d)](/\[Version[ ](.*?)\]/i)){const _0x1b1e05=Number(RegExp['$1']);_0x1b1e05!==VisuMZ[label][_0x5b1733(0x732)]&&(_0x5b1733(0x1e4)===_0x5b1733(0x56f)?this['_categoryWindow'][_0x5b1733(0x39a)](_0x3c9d10[_0x5b1733(0x959)]['CategoryBgType']):(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x4fba2c,_0x1b1e05)),SceneManager[_0x5b1733(0x4f6)]()));}if(_0x4512ae[_0x5b1733(0x13d)](/\[Tier[ ](\d+)\]/i)){const _0x46d32a=Number(RegExp['$1']);_0x46d32a<tier?(alert(_0x5b1733(0x130)['format'](_0x4fba2c,_0x46d32a,tier)),SceneManager[_0x5b1733(0x4f6)]()):tier=Math[_0x5b1733(0x933)](_0x46d32a,tier);}VisuMZ[_0x5b1733(0x84c)](VisuMZ[label]['Settings'],_0xa198c5[_0x5b1733(0x17d)]);})(pluginData),((()=>{const _0x2fbcc2=_0x391453;if(VisuMZ[_0x2fbcc2(0x1f6)][_0x2fbcc2(0x63e)]['QoL'][_0x2fbcc2(0x3da)]??!![])for(const _0x48011c in $plugins){if('kjmSG'===_0x2fbcc2(0x758)){const _0xb0ff8d=_0x5ed21f[_0x2fbcc2(0x30e)](_0x16df09)+0x1;let _0x26cfb5=_0x3e244c+_0x2fbcc2(0x439),_0x8acdbb=_0x191f99[_0x2fbcc2(0x1f6)]['ExtractStrFromList'](_0x137238[_0x2fbcc2(0x67c)]);if(_0x8acdbb['length']>0x0){if(_0x267b1b['length']>0x0)_0x836d7e+=_0x2ed4b6+'\x0a\x0a\x0a\x0a\x0a';else{const _0x1470d9=_0x414c2a[_0x485ccd][_0x2fbcc2(0x32f)];_0x34a792+=_0x4fa2be+_0x2fbcc2(0x838)[_0x2fbcc2(0x5ae)](_0x1935b6,_0x1470d9||_0x2fbcc2(0x392))+_0x5f25bb;}_0x48a85d+=_0x26cfb5[_0x2fbcc2(0x5ae)](_0x49365e,_0x277006,_0xb0ff8d,_0x8acdbb);}}else{const _0x39d04e=$plugins[_0x48011c];_0x39d04e[_0x2fbcc2(0x32f)]['match'](/(.*)\/(.*)/i)&&(_0x39d04e[_0x2fbcc2(0x32f)]=String(RegExp['$2'][_0x2fbcc2(0x780)]()));}}})()),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x2ec),_0x240507=>{const _0x42d3a5=_0x391453;if(!SceneManager['_scene'])return;if(!SceneManager[_0x42d3a5(0x254)][_0x42d3a5(0xde)])return;VisuMZ[_0x42d3a5(0x84c)](_0x240507,_0x240507);const _0x7f09bf=Math['round'](_0x240507[_0x42d3a5(0x733)]),_0x55d2ba=Math[_0x42d3a5(0x213)](_0x240507[_0x42d3a5(0x11a)]);$gameTemp[_0x42d3a5(0x553)](_0x7f09bf,_0x55d2ba,_0x240507[_0x42d3a5(0x790)],_0x240507[_0x42d3a5(0x95a)],_0x240507[_0x42d3a5(0x36a)]);}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x4b3),_0x262637=>{const _0x546902=_0x391453;VisuMZ['ConvertParams'](_0x262637,_0x262637);const _0x4c15ba=Math[_0x546902(0x213)](_0x262637[_0x546902(0x6d3)])[_0x546902(0x5d3)](0x0,0x64),_0x20fa4c=AudioManager[_0x546902(0x21f)];_0x20fa4c&&(_0x20fa4c['volume']=_0x4c15ba,_0x20fa4c['pos']=AudioManager[_0x546902(0x477)][_0x546902(0x5f5)](),AudioManager[_0x546902(0x4c8)](_0x20fa4c),AudioManager['playBgm'](_0x20fa4c,_0x20fa4c[_0x546902(0x55c)]),AudioManager[_0x546902(0x477)][_0x546902(0x58f)](_0x20fa4c['pos']));}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x7fc),_0x35b3c9=>{const _0x3a8b85=_0x391453;VisuMZ[_0x3a8b85(0x84c)](_0x35b3c9,_0x35b3c9);const _0xa20281=Math['round'](_0x35b3c9[_0x3a8b85(0x665)])['clamp'](0x32,0x96),_0x1f56bb=AudioManager['_currentBgm'];_0x1f56bb&&(_0x1f56bb[_0x3a8b85(0x665)]=_0xa20281,_0x1f56bb[_0x3a8b85(0x55c)]=AudioManager[_0x3a8b85(0x477)][_0x3a8b85(0x5f5)](),AudioManager[_0x3a8b85(0x4c8)](_0x1f56bb),AudioManager[_0x3a8b85(0x319)](_0x1f56bb,_0x1f56bb[_0x3a8b85(0x55c)]),AudioManager[_0x3a8b85(0x477)][_0x3a8b85(0x58f)](_0x1f56bb['pos']));}),PluginManager['registerCommand'](pluginData[_0x391453(0x32f)],_0x391453(0x755),_0x5d7cee=>{const _0x42ed6d=_0x391453;VisuMZ[_0x42ed6d(0x84c)](_0x5d7cee,_0x5d7cee);const _0x4c85e0=Math[_0x42ed6d(0x213)](_0x5d7cee[_0x42ed6d(0x8f8)])['clamp'](-0x64,0x64),_0x5b9319=AudioManager[_0x42ed6d(0x21f)];_0x5b9319&&(_0x5b9319[_0x42ed6d(0x8f8)]=_0x4c85e0,_0x5b9319[_0x42ed6d(0x55c)]=AudioManager[_0x42ed6d(0x477)][_0x42ed6d(0x5f5)](),AudioManager[_0x42ed6d(0x4c8)](_0x5b9319),AudioManager[_0x42ed6d(0x319)](_0x5b9319,_0x5b9319[_0x42ed6d(0x55c)]),AudioManager[_0x42ed6d(0x477)][_0x42ed6d(0x58f)](_0x5b9319[_0x42ed6d(0x55c)]));}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],'AudioChangeBgsVolume',_0x5154f5=>{const _0x2dee60=_0x391453;VisuMZ['ConvertParams'](_0x5154f5,_0x5154f5);const _0x347674=Math[_0x2dee60(0x213)](_0x5154f5[_0x2dee60(0x6d3)])[_0x2dee60(0x5d3)](0x0,0x64),_0x188421=AudioManager[_0x2dee60(0x281)];_0x188421&&(_0x188421[_0x2dee60(0x6d3)]=_0x347674,_0x188421[_0x2dee60(0x55c)]=AudioManager['_bgsBuffer'][_0x2dee60(0x5f5)](),AudioManager[_0x2dee60(0x4c8)](_0x188421),AudioManager[_0x2dee60(0x319)](_0x188421,_0x188421['pos']),AudioManager[_0x2dee60(0x477)][_0x2dee60(0x58f)](_0x188421[_0x2dee60(0x55c)]));}),PluginManager[_0x391453(0x7e4)](pluginData['name'],'AudioChangeBgsPitch',_0x45a6d0=>{const _0x701efb=_0x391453;VisuMZ['ConvertParams'](_0x45a6d0,_0x45a6d0);const _0x114d6f=Math[_0x701efb(0x213)](_0x45a6d0['pitch'])[_0x701efb(0x5d3)](0x32,0x96),_0x10d669=AudioManager[_0x701efb(0x281)];_0x10d669&&(_0x10d669[_0x701efb(0x665)]=_0x114d6f,_0x10d669['pos']=AudioManager[_0x701efb(0x4f2)]['seek'](),AudioManager[_0x701efb(0x4c8)](_0x10d669),AudioManager[_0x701efb(0x319)](_0x10d669,_0x10d669[_0x701efb(0x55c)]),AudioManager[_0x701efb(0x477)][_0x701efb(0x58f)](_0x10d669[_0x701efb(0x55c)]));}),PluginManager['registerCommand'](pluginData[_0x391453(0x32f)],_0x391453(0x89d),_0x28d7da=>{const _0x2ba07e=_0x391453;VisuMZ[_0x2ba07e(0x84c)](_0x28d7da,_0x28d7da);const _0x33d516=Math[_0x2ba07e(0x213)](_0x28d7da[_0x2ba07e(0x8f8)])['clamp'](-0x64,0x64),_0x55c25c=AudioManager[_0x2ba07e(0x281)];_0x55c25c&&(_0x2ba07e(0x1f1)==='JjqSN'?(_0x55c25c[_0x2ba07e(0x8f8)]=_0x33d516,_0x55c25c[_0x2ba07e(0x55c)]=AudioManager[_0x2ba07e(0x4f2)][_0x2ba07e(0x5f5)](),AudioManager[_0x2ba07e(0x4c8)](_0x55c25c),AudioManager[_0x2ba07e(0x319)](_0x55c25c,_0x55c25c['pos']),AudioManager[_0x2ba07e(0x477)]['_startPlaying'](_0x55c25c[_0x2ba07e(0x55c)])):(_0x43c22d[_0x2ba07e(0x86e)]=![],_0x2920fe[_0x2ba07e(0x77b)]=!![]));}),PluginManager[_0x391453(0x7e4)](pluginData['name'],_0x391453(0x534),_0x51a2f8=>{const _0x2708a8=_0x391453;if(!$gameTemp[_0x2708a8(0x4a5)]())return;const _0x2a1ab9=Input[_0x2708a8(0x8c7)]();navigator[_0x2708a8(0x60b)]&&navigator[_0x2708a8(0x60b)]['writeText'](_0x2a1ab9);}),PluginManager['registerCommand'](pluginData['name'],_0x391453(0x41f),_0x40aa17=>{const _0x51f929=_0x391453;if(!$gameTemp['isPlaytest']())return;if(!Utils[_0x51f929(0x6d5)]())return;SceneManager[_0x51f929(0x254)][_0x51f929(0x1f5)]=![],VisuMZ['CoreEngine'][_0x51f929(0x1c0)]();}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],'ExportAllTroopText',_0x99a507=>{const _0x42ffc3=_0x391453;if(!$gameTemp[_0x42ffc3(0x4a5)]())return;if(!Utils[_0x42ffc3(0x6d5)]())return;SceneManager[_0x42ffc3(0x254)][_0x42ffc3(0x1f5)]=![],VisuMZ[_0x42ffc3(0x1f6)][_0x42ffc3(0x554)]();}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],'ExportCurMapText',_0x13694b=>{const _0x5c89e6=_0x391453;if(!$gameTemp[_0x5c89e6(0x4a5)]())return;if(!Utils[_0x5c89e6(0x6d5)]())return;if(!$gameMap)return;if($gameMap[_0x5c89e6(0x5ba)]()<=0x0)return;VisuMZ[_0x5c89e6(0x84c)](_0x13694b,_0x13694b);const _0x47b07e=_0x5c89e6(0x68b)[_0x5c89e6(0x5ae)]($gameMap['mapId']()['padZero'](0x3)),_0x2703c6=VisuMZ[_0x5c89e6(0x1f6)][_0x5c89e6(0x911)]($gameMap[_0x5c89e6(0x5ba)]());VisuMZ[_0x5c89e6(0x1f6)][_0x5c89e6(0x688)](_0x2703c6,_0x47b07e,!![]);}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x12d),_0x220876=>{const _0x511036=_0x391453;if(!$gameTemp['isPlaytest']())return;if(!Utils['isNwjs']())return;if(!$gameParty['inBattle']())return;VisuMZ[_0x511036(0x84c)](_0x220876,_0x220876);const _0x86db88=_0x511036(0x402)[_0x511036(0x5ae)]($gameTroop['_troopId']['padZero'](0x4)),_0x3a030f=VisuMZ[_0x511036(0x1f6)]['ExtractStrFromTroop']($gameTroop[_0x511036(0x6cc)]);VisuMZ[_0x511036(0x1f6)][_0x511036(0x688)](_0x3a030f,_0x86db88,!![]);}),VisuMZ['CoreEngine']['ExportString']=function(_0x471f10,_0x54ab5e,_0x936b18){const _0x4527ab=_0x391453,_0x147541=require('fs');let _0x208e60=_0x4527ab(0x803)['format'](_0x54ab5e||'0');_0x147541[_0x4527ab(0x472)](_0x208e60,_0x471f10,_0x14228f=>{const _0x34b6dc=_0x4527ab;if(_0x14228f)throw err;else _0x936b18&&(_0x34b6dc(0x38a)==='OKsMG'?alert('Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.'[_0x34b6dc(0x5ae)](_0x208e60)):this[_0x34b6dc(0x61c)]());});},VisuMZ['CoreEngine'][_0x391453(0x1c0)]=function(){const _0x20e449=_0x391453,_0x1ea1ac=[];for(const _0x5dfb56 of $dataMapInfos){if(!_0x5dfb56)continue;_0x1ea1ac[_0x20e449(0x268)](_0x5dfb56['id']);}const _0x591203=_0x1ea1ac['length']*0x64+Math['randomInt'](0x64);alert(_0x20e449(0x956)[_0x20e449(0x5ae)](_0x591203)),this[_0x20e449(0x372)]=[],this[_0x20e449(0x661)]=$dataMap;for(const _0x24cac6 of _0x1ea1ac){VisuMZ[_0x20e449(0x1f6)][_0x20e449(0x71d)](_0x24cac6);}setTimeout(VisuMZ[_0x20e449(0x1f6)][_0x20e449(0x131)][_0x20e449(0x922)](this),_0x591203);},VisuMZ['CoreEngine'][_0x391453(0x71d)]=function(_0x174968){const _0x485c52=_0x391453,_0x1dad4c=_0x485c52(0x2c0)[_0x485c52(0x5ae)](_0x174968['padZero'](0x3)),_0xb13e6=new XMLHttpRequest(),_0x2f8f54=_0x485c52(0x62d)+_0x1dad4c;_0xb13e6[_0x485c52(0x7d4)](_0x485c52(0x4ba),_0x2f8f54),_0xb13e6[_0x485c52(0x622)]('application/json'),_0xb13e6['onload']=()=>this[_0x485c52(0x146)](_0xb13e6,_0x174968,_0x1dad4c,_0x2f8f54),_0xb13e6['onerror']=()=>DataManager['onXhrError'](_0x485c52(0x41b),_0x1dad4c,_0x2f8f54),_0xb13e6['send']();},VisuMZ[_0x391453(0x1f6)]['storeMapData']=function(_0x5a3b8d,_0xe9885d,_0x4e5980,_0x3c36e0){const _0x591c08=_0x391453;$dataMap=JSON[_0x591c08(0x1d9)](_0x5a3b8d[_0x591c08(0x8b6)]),DataManager[_0x591c08(0x180)]($dataMap),this[_0x591c08(0x372)][_0xe9885d]=VisuMZ[_0x591c08(0x1f6)][_0x591c08(0x911)](_0xe9885d),$dataMap=this['_currentMap'];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x131)]=function(){const _0x26e77e=_0x391453,_0x120f66=_0x26e77e(0x6ab);this[_0x26e77e(0x372)][_0x26e77e(0x7db)](undefined)['remove']('')[_0x26e77e(0x7db)](null);const _0x7c18a6=this[_0x26e77e(0x372)]['join'](_0x26e77e(0x817))[_0x26e77e(0x780)]();VisuMZ[_0x26e77e(0x1f6)][_0x26e77e(0x688)](_0x7c18a6,_0x120f66,!![]),SceneManager[_0x26e77e(0x254)]['_active']=!![];},VisuMZ[_0x391453(0x1f6)]['ExtractStrFromMap']=function(_0x33b588){const _0x299805=_0x391453;if(!$dataMap)return'';let _0x1a2603='█'[_0x299805(0x3ef)](0x46)+'\x0a\x0a',_0x30a5e9='═'[_0x299805(0x3ef)](0x46)+'\x0a\x0a',_0x50782f='';this[_0x299805(0x182)]=0x0;for(const _0x28f612 of $dataMap[_0x299805(0x4f7)]){if(_0x299805(0x132)!==_0x299805(0x132))return _0x205367['CoreEngine'][_0x299805(0x263)][_0x299805(0xd0)](this,_0x4cd60f);else{if(!_0x28f612)continue;let _0x406e5c=_0x28f612['id'],_0x287440=_0x28f612['name'],_0x1196b5=_0x28f612[_0x299805(0x516)];for(const _0x3d3e8b of _0x1196b5){const _0x4afe39=_0x1196b5['indexOf'](_0x3d3e8b)+0x1;let _0x283fda=_0x30a5e9+'《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a',_0x139198=VisuMZ[_0x299805(0x1f6)][_0x299805(0x335)](_0x3d3e8b['list']);if(_0x139198[_0x299805(0x4b1)]>0x0){if(_0x50782f[_0x299805(0x4b1)]>0x0){if(_0x299805(0x495)!==_0x299805(0x495))return 0x0;else _0x50782f+=_0x30a5e9+_0x299805(0x817);}else{const _0x23b1d6=$dataMapInfos[_0x33b588][_0x299805(0x32f)];_0x50782f+=_0x1a2603+_0x299805(0x838)[_0x299805(0x5ae)](_0x33b588,_0x23b1d6||'Unnamed')+_0x1a2603;}_0x50782f+=_0x283fda[_0x299805(0x5ae)](_0x406e5c,_0x287440,_0x4afe39,_0x139198);}}}}return _0x50782f['length']>0x0&&(_0x50782f+=_0x30a5e9),_0x50782f;},VisuMZ[_0x391453(0x1f6)]['ExportStrFromAllTroops']=function(){const _0x55eefd=_0x391453,_0x1ba1f5=$dataTroops['length']*0xa+Math[_0x55eefd(0x35c)](0xa);alert(_0x55eefd(0x601)[_0x55eefd(0x5ae)](_0x1ba1f5));const _0x1a6251=[];for(const _0x444a75 of $dataTroops){if(!_0x444a75)continue;const _0x553d70=_0x444a75['id'];_0x1a6251[_0x553d70]=VisuMZ[_0x55eefd(0x1f6)]['ExtractStrFromTroop'](_0x553d70);}setTimeout(VisuMZ[_0x55eefd(0x1f6)][_0x55eefd(0x7d5)]['bind'](this,_0x1a6251),_0x1ba1f5);},VisuMZ['CoreEngine'][_0x391453(0x12c)]=function(_0x7500c6){const _0x1e07cb=_0x391453;if(!$dataTroops[_0x7500c6])return'';let _0x163c1a='█'[_0x1e07cb(0x3ef)](0x46)+'\x0a\x0a',_0x3ddf50='═'[_0x1e07cb(0x3ef)](0x46)+'\x0a\x0a',_0x39129f='';this[_0x1e07cb(0x182)]=0x0;const _0x5422fb=$dataTroops[_0x7500c6];let _0x4c63c9=_0x5422fb[_0x1e07cb(0x516)];for(const _0x3dfdaa of _0x4c63c9){if(_0x1e07cb(0xce)===_0x1e07cb(0x483))_0x14e958(_0x1bf910),_0x1ab835[_0x1e07cb(0x4f6)]();else{const _0x5eab6a=_0x4c63c9[_0x1e07cb(0x30e)](_0x3dfdaa)+0x1;let _0x31ad4d=_0x3ddf50+_0x1e07cb(0x212),_0xdd2f3f=VisuMZ[_0x1e07cb(0x1f6)][_0x1e07cb(0x335)](_0x3dfdaa[_0x1e07cb(0x67c)]);if(_0xdd2f3f[_0x1e07cb(0x4b1)]>0x0){if(_0x39129f['length']>0x0){if(_0x1e07cb(0x58a)==='pszqB')_0x39129f+=_0x3ddf50+_0x1e07cb(0x817);else{this[_0x1e07cb(0x607)]['remove'](_0xa0f8f0),this['removeAnimationFromContainer'](_0x6d3c4e);for(const _0x4fb159 of _0x3864b5[_0x1e07cb(0x56b)]){_0x4fb159[_0x1e07cb(0x515)]&&_0x4fb159['endAnimation']();}_0x20c057['destroy']();}}else _0x1e07cb(0x563)!==_0x1e07cb(0x563)?this['_actorWindow']['setBackgroundType'](_0x1304f6['layoutSettings']['ActorBgType']):_0x39129f+=_0x163c1a+_0x1e07cb(0x87b)[_0x1e07cb(0x5ae)](_0x7500c6,_0x5422fb[_0x1e07cb(0x32f)]||_0x1e07cb(0x392))+_0x163c1a;_0x39129f+=_0x31ad4d['format'](_0x5eab6a,_0xdd2f3f);}}}return _0x39129f[_0x1e07cb(0x4b1)]>0x0&&(_0x39129f+=_0x3ddf50),_0x39129f;},VisuMZ['CoreEngine'][_0x391453(0x7d5)]=function(_0x49e020){const _0x726d91=_0x391453,_0x3cdfc2=_0x726d91(0x8ae);_0x49e020[_0x726d91(0x7db)](undefined)[_0x726d91(0x7db)]('')['remove'](null);const _0xdf1c4=_0x49e020['join']('\x0a\x0a\x0a\x0a\x0a')['trim']();VisuMZ[_0x726d91(0x1f6)][_0x726d91(0x688)](_0xdf1c4,_0x3cdfc2,!![]),SceneManager[_0x726d91(0x254)][_0x726d91(0x1f5)]=!![];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x335)]=function(_0x2fe9bb){const _0x202a44=_0x391453;let _0x111d90='\x0a'+'─'[_0x202a44(0x3ef)](0x46)+'\x0a',_0x3ba7ae='\x0a'+'┄'[_0x202a44(0x3ef)](0x46)+'\x0a',_0x1cf6a4='';for(const _0x276abe of _0x2fe9bb){if(!_0x276abe)continue;if(_0x276abe[_0x202a44(0x3cf)]===0x65){if(_0x202a44(0x79d)===_0x202a44(0x65b)){const _0xb8bb37=_0x374630[_0x202a44(0x133)](_0x35d892,_0x577f6f)[_0x202a44(0x487)](_0x56998f=>_0x56998f[_0x202a44(0x6be)]());return _0xb8bb37['length']>0x0;}else _0x1cf6a4+=_0x111d90+'\x0a',_0x1cf6a4+=_0x202a44(0xe6),_0x276abe[_0x202a44(0x17d)][0x4]!==''&&_0x276abe['parameters'][0x4]!==undefined&&(_0x1cf6a4+=_0x202a44(0x1df)['format'](_0x276abe['parameters'][0x4]));}else{if(_0x276abe[_0x202a44(0x3cf)]===0x191)_0x1cf6a4+=_0x202a44(0x1bd)[_0x202a44(0x5ae)](_0x276abe[_0x202a44(0x17d)][0x0]);else{if(_0x276abe[_0x202a44(0x3cf)]===0x192)_0x202a44(0x2a1)!=='QEqIh'?(_0x4c6542[_0x202a44(0xff)](),_0xfa5618[_0x202a44(0x193)](_0x312046[_0x202a44(0x456)]),_0x9ff5f3[_0x202a44(0x456)]=_0x24d908):(_0x1cf6a4+=_0x111d90,_0x1cf6a4+=_0x202a44(0x928)[_0x202a44(0x5ae)](_0x3ba7ae,_0x276abe[_0x202a44(0x17d)][0x0]+0x1,_0x276abe[_0x202a44(0x17d)][0x1]));else{if(_0x276abe['code']===0x193)_0x1cf6a4+=_0x111d90,_0x1cf6a4+=_0x202a44(0x4dc)[_0x202a44(0x5ae)](_0x3ba7ae);else{if(_0x276abe[_0x202a44(0x3cf)]===0x194)_0x1cf6a4+=_0x111d90,_0x1cf6a4+='%1〘End\x20Choice\x20Selection〙%1'[_0x202a44(0x5ae)](_0x3ba7ae);else{if(_0x276abe[_0x202a44(0x3cf)]===0x69)_0x1cf6a4+=_0x111d90+'\x0a',_0x1cf6a4+=_0x202a44(0x799);else{if(_0x276abe[_0x202a44(0x3cf)]===0x6c)_0x1cf6a4+=_0x111d90+'\x0a',_0x1cf6a4+=_0x202a44(0x8c8)[_0x202a44(0x5ae)](_0x276abe[_0x202a44(0x17d)][0x0]);else{if(_0x276abe[_0x202a44(0x3cf)]===0x198)_0x1cf6a4+=_0x202a44(0x1bd)['format'](_0x276abe[_0x202a44(0x17d)][0x0]);else{if(_0x276abe[_0x202a44(0x3cf)]===0x75){const _0x5e000a=$dataCommonEvents[_0x276abe[_0x202a44(0x17d)][0x0]];if(_0x5e000a&&this[_0x202a44(0x182)]<=0xa){this[_0x202a44(0x182)]++;let _0xd73cf7=VisuMZ['CoreEngine'][_0x202a44(0x335)](_0x5e000a[_0x202a44(0x67c)]);_0xd73cf7['length']>0x0&&(_0x1cf6a4+=_0x111d90,_0x1cf6a4+=_0x3ba7ae,_0x1cf6a4+=_0x202a44(0x2c1)[_0x202a44(0x5ae)](_0x5e000a['id'],_0x5e000a['name']),_0x1cf6a4+=_0x3ba7ae,_0x1cf6a4+=_0xd73cf7,_0x1cf6a4+=_0x3ba7ae,_0x1cf6a4+=_0x202a44(0x745)['format'](_0x5e000a['id'],_0x5e000a['name']),_0x1cf6a4+=_0x3ba7ae),this[_0x202a44(0x182)]--;}}}}}}}}}}}return _0x1cf6a4[_0x202a44(0x4b1)]>0x0&&(_0x1cf6a4+=_0x111d90),_0x1cf6a4;},PluginManager['registerCommand'](pluginData[_0x391453(0x32f)],_0x391453(0x13b),_0x38eaa1=>{const _0x444cdc=_0x391453;VisuMZ[_0x444cdc(0x84c)](_0x38eaa1,_0x38eaa1);const _0xa3644b=_0x38eaa1[_0x444cdc(0x7c8)];VisuMZ[_0x444cdc(0x3bf)](_0xa3644b);}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],'GoldChange',_0x71215d=>{const _0x1331a6=_0x391453;VisuMZ[_0x1331a6(0x84c)](_0x71215d,_0x71215d);const _0x4abb8a=_0x71215d[_0x1331a6(0x135)]||0x0;$gameParty['gainGold'](_0x4abb8a);}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],'MapOnceParallel',_0x195878=>{const _0x2e72fe=_0x391453;if(!SceneManager[_0x2e72fe(0x90c)]())return;VisuMZ[_0x2e72fe(0x84c)](_0x195878,_0x195878);const _0x24e497=_0x195878[_0x2e72fe(0x512)];SceneManager[_0x2e72fe(0x254)]['playOnceParallelInterpreter'](_0x24e497);}),PluginManager['registerCommand'](pluginData[_0x391453(0x32f)],_0x391453(0x798),_0x13e19e=>{const _0x22d1f6=_0x391453;if(!$gameTemp['isPlaytest']())return;if(!Utils[_0x22d1f6(0x6d5)]())return;VisuMZ[_0x22d1f6(0x84c)](_0x13e19e,_0x13e19e);const _0x41bd70=_0x13e19e['PictureID']||0x1;$gameTemp['_pictureCoordinatesMode']=_0x41bd70;}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],'PictureEasingType',_0x4b66db=>{const _0x553017=_0x391453;VisuMZ[_0x553017(0x84c)](_0x4b66db,_0x4b66db);const _0x1bdc13=_0x4b66db[_0x553017(0x202)]||0x1,_0x49a056=_0x4b66db['easingType']||_0x553017(0x35f),_0x556457=$gameScreen[_0x553017(0x7ad)](_0x1bdc13);if(_0x556457){if(_0x553017(0x313)!==_0x553017(0x1fe))_0x556457[_0x553017(0x2bb)](_0x49a056);else return-0.5*(_0x66cbdc[_0x553017(0x2de)](0x2,0xa*_0x3b1dbe)*_0x5d50a3[_0x553017(0x72b)]((_0x3aee6c-_0x52cc76)*(0x2*_0x19cc94['PI'])/_0x1402b7));}}),PluginManager[_0x391453(0x7e4)](pluginData['name'],'PictureEraseAll',_0xbb39ab=>{const _0x4921cc=_0x391453;for(let _0x337ec0=0x1;_0x337ec0<=0x64;_0x337ec0++){if(_0x4921cc(0x326)!==_0x4921cc(0x326)){const _0xcc5c36=_0x21ae9b[_0x4921cc(0x1f6)][_0x4921cc(0x63e)][_0x4921cc(0x107)];for(const _0x4cfbab of _0xcc5c36){const _0x4e4292=(_0x4cfbab[_0x4921cc(0x83a)]||'')[_0x4921cc(0x28a)]()['trim'](),_0x330b7a=(_0x4cfbab['Match']||'')[_0x4921cc(0x28a)]()[_0x4921cc(0x780)]();_0x4f8da9['CoreEngine']['ControllerButtons'][_0x4e4292]=_0x4cfbab,_0xbf7c24[_0x4921cc(0x1f6)][_0x4921cc(0x452)][_0x330b7a]=_0x4e4292;}}else $gameScreen[_0x4921cc(0x850)](_0x337ec0);}}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x6c2),_0x56f969=>{const _0x3b2c39=_0x391453;VisuMZ[_0x3b2c39(0x84c)](_0x56f969,_0x56f969);const _0x25c120=Math[_0x3b2c39(0x1a5)](_0x56f969['StartID'],_0x56f969[_0x3b2c39(0x94d)]),_0x4f20f1=Math[_0x3b2c39(0x933)](_0x56f969[_0x3b2c39(0x726)],_0x56f969['EndingID']);for(let _0x2321ae=_0x25c120;_0x2321ae<=_0x4f20f1;_0x2321ae++){_0x3b2c39(0x3fd)===_0x3b2c39(0x3fd)?$gameScreen[_0x3b2c39(0x850)](_0x2321ae):_0x3949c3=_0x30aba8[_0x3b2c39(0x10f)](_0x3f957b);}}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],'PictureShowIcon',_0xf0953f=>{const _0x2fbfd5=_0x391453;VisuMZ[_0x2fbfd5(0x84c)](_0xf0953f,_0xf0953f);const _0x896d1d=Math['round'](_0xf0953f[_0x2fbfd5(0x37e)])['clamp'](0x1,0x64),_0x414015=_0xf0953f[_0x2fbfd5(0x63e)],_0x58c379=_0x414015[_0x2fbfd5(0x411)][_0x2fbfd5(0x5d3)](0x0,0x1),_0x26aa7=Math[_0x2fbfd5(0x213)](_0x414015[_0x2fbfd5(0x651)]||0x0),_0x498eae=Math[_0x2fbfd5(0x213)](_0x414015[_0x2fbfd5(0x2fb)]||0x0),_0x19f487=Math[_0x2fbfd5(0x213)](_0x414015[_0x2fbfd5(0x7b7)]||0x0),_0x4ba593=Math[_0x2fbfd5(0x213)](_0x414015['ScaleY']||0x0),_0x41ea5f=Math[_0x2fbfd5(0x213)](_0x414015[_0x2fbfd5(0x954)])[_0x2fbfd5(0x5d3)](0x0,0xff),_0x5b44c1=_0x414015[_0x2fbfd5(0x75f)],_0x448193=_0x2fbfd5(0x91f),_0x2601a8=_0xf0953f['Smooth']?_0x2fbfd5(0x7c6):_0x2fbfd5(0x6b2),_0x563c47=_0x448193[_0x2fbfd5(0x5ae)](_0xf0953f[_0x2fbfd5(0x2ad)],_0x2601a8);$gameScreen['showPicture'](_0x896d1d,_0x563c47,_0x58c379,_0x26aa7,_0x498eae,_0x19f487,_0x4ba593,_0x41ea5f,_0x5b44c1);}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x641),_0x52f5e6=>{const _0x1f8d35=_0x391453;VisuMZ[_0x1f8d35(0x84c)](_0x52f5e6,_0x52f5e6);const _0x121fae=_0x52f5e6['Type']||_0x1f8d35(0x23a),_0x244b40=_0x52f5e6[_0x1f8d35(0x4f5)]['clamp'](0x1,0x9),_0x31b009=_0x52f5e6[_0x1f8d35(0x90d)]['clamp'](0x1,0x9),_0x485431=_0x52f5e6['Duration']||0x1,_0x1252fb=_0x52f5e6[_0x1f8d35(0x929)];$gameScreen[_0x1f8d35(0x176)](_0x121fae),$gameScreen[_0x1f8d35(0x15a)](_0x244b40,_0x31b009,_0x485431);if(_0x1252fb){if(_0x1f8d35(0x69a)!==_0x1f8d35(0x69a))return _0x4839da[_0x1f8d35(0x1f6)][_0x1f8d35(0x63e)]['UI'][_0x1f8d35(0xef)];else{const _0x2f106b=$gameTemp[_0x1f8d35(0x698)]();if(_0x2f106b)_0x2f106b[_0x1f8d35(0x4c6)](_0x485431);}}}),PluginManager['registerCommand'](pluginData[_0x391453(0x32f)],_0x391453(0x3bd),_0x1f0d3b=>{const _0x795550=_0x391453;if($gameParty[_0x795550(0x17a)]())return;VisuMZ[_0x795550(0x84c)](_0x1f0d3b,_0x1f0d3b);const _0x5c7fa0=_0x1f0d3b[_0x795550(0x478)],_0x3f1f2b=(_0x1f0d3b[_0x795550(0x668)]||0x0)/0x64;for(const _0x111bb3 of _0x5c7fa0){if(_0x795550(0x52d)===_0x795550(0x52d)){const _0x150a21=Math[_0x795550(0x23a)]()<=_0x3f1f2b;$gameSwitches[_0x795550(0x4ec)](_0x111bb3,_0x150a21);}else return![];}}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],'SwitchRandomizeRange',_0xc52ff6=>{const _0x2967c6=_0x391453;if($gameParty[_0x2967c6(0x17a)]())return;VisuMZ[_0x2967c6(0x84c)](_0xc52ff6,_0xc52ff6);const _0x58179a=Math[_0x2967c6(0x1a5)](_0xc52ff6[_0x2967c6(0x726)],_0xc52ff6[_0x2967c6(0x94d)]),_0x1a48fa=Math['max'](_0xc52ff6[_0x2967c6(0x726)],_0xc52ff6[_0x2967c6(0x94d)]),_0x2cec0e=(_0xc52ff6[_0x2967c6(0x668)]||0x0)/0x64;for(let _0x3c07db=_0x58179a;_0x3c07db<=_0x1a48fa;_0x3c07db++){if('ZmqJy'===_0x2967c6(0x8cd)){const _0x36fd31=Math[_0x2967c6(0x23a)]()<=_0x2cec0e;$gameSwitches['setValue'](_0x3c07db,_0x36fd31);}else{if(_0x514a4f)_0x7ea34e[_0x2967c6(0x171)](_0x3ee0d0);}}}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x924),_0x3089ca=>{const _0xaec6b4=_0x391453;if($gameParty[_0xaec6b4(0x17a)]())return;VisuMZ[_0xaec6b4(0x84c)](_0x3089ca,_0x3089ca);const _0x2b03b5=_0x3089ca['IDs'];for(const _0x188c52 of _0x2b03b5){const _0x419698=$gameSwitches[_0xaec6b4(0x135)](_0x188c52);$gameSwitches[_0xaec6b4(0x4ec)](_0x188c52,!_0x419698);}}),PluginManager[_0x391453(0x7e4)](pluginData['name'],_0x391453(0x6e9),_0x4f0af0=>{const _0x11a85e=_0x391453;if($gameParty[_0x11a85e(0x17a)]())return;VisuMZ[_0x11a85e(0x84c)](_0x4f0af0,_0x4f0af0);const _0x459a61=Math[_0x11a85e(0x1a5)](_0x4f0af0[_0x11a85e(0x726)],_0x4f0af0[_0x11a85e(0x94d)]),_0x41dd4b=Math[_0x11a85e(0x933)](_0x4f0af0[_0x11a85e(0x726)],_0x4f0af0[_0x11a85e(0x94d)]);for(let _0x310aa5=_0x459a61;_0x310aa5<=_0x41dd4b;_0x310aa5++){if('NoBnD'!==_0x11a85e(0xd3)){const _0x5e5817=_0x35896e[_0x11a85e(0x698)]();if(_0x5e5817)_0x5e5817[_0x11a85e(0x4c6)](_0x2e7cb3);}else{const _0x5829f8=$gameSwitches[_0x11a85e(0x135)](_0x310aa5);$gameSwitches[_0x11a85e(0x4ec)](_0x310aa5,!_0x5829f8);}}}),PluginManager[_0x391453(0x7e4)](pluginData['name'],'SystemSetFontSize',_0x5c753b=>{const _0x1fface=_0x391453;VisuMZ[_0x1fface(0x84c)](_0x5c753b,_0x5c753b);const _0x4d753f=_0x5c753b[_0x1fface(0x8a1)]||0x1;$gameSystem[_0x1fface(0x460)](_0x4d753f);}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x92f),_0x5c9f1c=>{const _0x4e4854=_0x391453;if($gameParty[_0x4e4854(0x17a)]())return;VisuMZ['ConvertParams'](_0x5c9f1c,_0x5c9f1c);const _0x47c89d=_0x5c9f1c[_0x4e4854(0x8a1)];if(_0x47c89d[_0x4e4854(0x13d)](/Front/i))$gameSystem[_0x4e4854(0x6a0)](![]);else _0x47c89d[_0x4e4854(0x13d)](/Side/i)?_0x4e4854(0x737)!==_0x4e4854(0x566)?$gameSystem['setSideView'](!![]):_0x491960+=_0x4e4854(0x134):_0x4e4854(0x484)===_0x4e4854(0x513)?(_0x5114ad[_0x4e4854(0x8f8)]=_0x2de659,_0x234859[_0x4e4854(0x55c)]=_0x299b35[_0x4e4854(0x4f2)]['seek'](),_0x4b7d50[_0x4e4854(0x4c8)](_0x7e7836),_0x4f7853[_0x4e4854(0x319)](_0x4dbd8b,_0x2c4389[_0x4e4854(0x55c)]),_0x4a2ac8[_0x4e4854(0x477)]['_startPlaying'](_0x514361['pos'])):$gameSystem[_0x4e4854(0x6a0)](!$gameSystem[_0x4e4854(0x783)]());}),PluginManager['registerCommand'](pluginData[_0x391453(0x32f)],'SystemLoadAudio',_0x16069c=>{const _0x188358=_0x391453;if($gameParty[_0x188358(0x17a)]())return;VisuMZ[_0x188358(0x84c)](_0x16069c,_0x16069c);const _0x34f5ca=['bgm',_0x188358(0x438),'me','se'];for(const _0x2bb981 of _0x34f5ca){if(_0x188358(0x8dc)===_0x188358(0x8dc)){const _0x2acafd=_0x16069c[_0x2bb981],_0x5bbea4=_0x188358(0x5d6)[_0x188358(0x5ae)](_0x2bb981);for(const _0x168cc9 of _0x2acafd){if('UCRmw'!==_0x188358(0x761)){const _0xb43c4f=_0x1093c8['ButtonAssist'];_0xb43c4f['KeySHIFT']=_0xb43c4f[_0x188358(0x8c6)]||_0x188358(0x2c4),_0xb43c4f[_0x188358(0x3c7)]=_0xb43c4f['KeyTAB']||'\x5c}❪TAB❫\x5c{';}else AudioManager['createBuffer'](_0x5bbea4,_0x168cc9);}}else _0x4833b0+=_0x2f309e+'\x0a',_0x405de7+='〘Show\x20Text〙\x0a',_0x76a3c8[_0x188358(0x17d)][0x4]!==''&&_0x35d689['parameters'][0x4]!==_0x15ab0b&&(_0x26d054+=_0x188358(0x1df)[_0x188358(0x5ae)](_0x3f2753[_0x188358(0x17d)][0x4]));}}),PluginManager[_0x391453(0x7e4)](pluginData['name'],_0x391453(0x1a7),_0x8c3b5b=>{const _0x5ff565=_0x391453;if($gameParty[_0x5ff565(0x17a)]())return;VisuMZ[_0x5ff565(0x84c)](_0x8c3b5b,_0x8c3b5b);const _0x37ddc1=[_0x5ff565(0x936),_0x5ff565(0x7b3),_0x5ff565(0x78d),'characters',_0x5ff565(0x60a),_0x5ff565(0x721),'parallaxes',_0x5ff565(0x58c),_0x5ff565(0x503),_0x5ff565(0x1dd),_0x5ff565(0x83e),_0x5ff565(0x4d8),_0x5ff565(0x4ea),_0x5ff565(0x898)];for(const _0x18d5bf of _0x37ddc1){if(_0x5ff565(0x40e)!==_0x5ff565(0x40e))return _0x5b4ee7['CoreEngine']['SceneManager_isGameActive'][_0x5ff565(0xd0)](this);else{const _0x46f538=_0x8c3b5b[_0x18d5bf],_0x3250cd='img/%1/'[_0x5ff565(0x5ae)](_0x18d5bf);for(const _0x2e6212 of _0x46f538){_0x5ff565(0x138)==='Nssjq'?ImageManager[_0x5ff565(0x2c8)](_0x3250cd,_0x2e6212):this['processAlwaysEscape']();}}}}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x35a),_0x37e813=>{const _0x419480=_0x391453;if($gameParty[_0x419480(0x17a)]())return;VisuMZ[_0x419480(0x84c)](_0x37e813,_0x37e813);const _0x380070=_0x37e813['option'][_0x419480(0x448)]()[_0x419480(0x780)](),_0x2d2fe7=VisuMZ[_0x419480(0x1f6)][_0x419480(0x5f9)](_0x380070);$gameSystem['setBattleSystem'](_0x2d2fe7);}),VisuMZ[_0x391453(0x1f6)][_0x391453(0x5f9)]=function(_0x318b3a){const _0x25cfbf=_0x391453;_0x318b3a=_0x318b3a||_0x25cfbf(0x312),_0x318b3a=String(_0x318b3a)[_0x25cfbf(0x448)]()[_0x25cfbf(0x780)]();switch(_0x318b3a){case _0x25cfbf(0x68e):return 0x0;case'TPB\x20ACTIVE':if(Imported[_0x25cfbf(0x760)]){if('PPOmn'===_0x25cfbf(0x5f6))return _0x397117['CoreEngine'][_0x25cfbf(0x63e)][_0x25cfbf(0x839)][_0x25cfbf(0x706)];else ConfigManager[_0x25cfbf(0x578)]=!![];}return 0x1;case'TPB\x20WAIT':Imported[_0x25cfbf(0x760)]&&(ConfigManager[_0x25cfbf(0x578)]=![]);return 0x2;case'CTB':if(Imported[_0x25cfbf(0x5d2)])return _0x25cfbf(0x767);break;case _0x25cfbf(0x5ed):if(Imported['VisuMZ_2_BattleSystemSTB'])return _0x25cfbf(0x74a)===_0x25cfbf(0x74a)?_0x25cfbf(0x5ed):![];break;case'BTB':if(Imported[_0x25cfbf(0x57c)])return'BTB';break;case'FTB':if(Imported['VisuMZ_2_BattleSystemFTB']){if(_0x25cfbf(0x2db)!==_0x25cfbf(0x547))return _0x25cfbf(0x488);else{var _0x12ab22=_0x609d1(_0x54a8b8['$1']);try{_0x58aa24*=_0x1fde64(_0x12ab22);}catch(_0x103a36){if(_0x1bf4f0[_0x25cfbf(0x4a5)]())_0x2402c0[_0x25cfbf(0x4fd)](_0x103a36);}}}break;case _0x25cfbf(0x7ce):if(Imported[_0x25cfbf(0x426)])return'OTB';break;case'ETB':if(Imported[_0x25cfbf(0x3b4)])return _0x25cfbf(0x3e5);break;case _0x25cfbf(0x6f5):if(Imported[_0x25cfbf(0x20f)])return _0x25cfbf(0x6f5);break;}return $dataSystem[_0x25cfbf(0x256)];},PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x581),_0x67ea11=>{const _0x4a7b51=_0x391453;VisuMZ[_0x4a7b51(0x84c)](_0x67ea11,_0x67ea11);const _0x2e1029=_0x67ea11[_0x4a7b51(0x8a1)]||0x1;$gameSystem[_0x4a7b51(0x6e7)](_0x2e1029);}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x40a),_0x984538=>{const _0x358b22=_0x391453;VisuMZ[_0x358b22(0x84c)](_0x984538,_0x984538);const _0x3f901e=_0x984538['id']||0x1,_0x557e64=_0x984538[_0x358b22(0x200)],_0x1f3c22=_0x984538['operand']||0x0;let _0x16e9b3=$gameVariables['value'](_0x3f901e)||0x0;switch(_0x557e64){case'=':_0x16e9b3=_0x1f3c22;break;case'+':_0x16e9b3+=_0x1f3c22;break;case'-':_0x16e9b3-=_0x1f3c22;break;case'*':_0x16e9b3*=_0x1f3c22;break;case'/':_0x16e9b3/=_0x1f3c22;break;case'%':_0x16e9b3%=_0x1f3c22;break;}_0x16e9b3=_0x16e9b3||0x0,$gameVariables[_0x358b22(0x4ec)](_0x3f901e,_0x16e9b3);}),PluginManager[_0x391453(0x7e4)](pluginData[_0x391453(0x32f)],_0x391453(0x5b2),_0x4bc5c5=>{const _0x2b7f19=_0x391453;VisuMZ[_0x2b7f19(0x84c)](_0x4bc5c5,_0x4bc5c5);const _0x51a4f6=_0x4bc5c5['id']()||0x1,_0x5d9931=_0x4bc5c5['operation'],_0x4e2b0e=_0x4bc5c5[_0x2b7f19(0x835)]()||0x0;let _0x46142d=$gameVariables['value'](_0x51a4f6)||0x0;switch(_0x5d9931){case'=':_0x46142d=_0x4e2b0e;break;case'+':_0x46142d+=_0x4e2b0e;break;case'-':_0x46142d-=_0x4e2b0e;break;case'*':_0x46142d*=_0x4e2b0e;break;case'/':_0x46142d/=_0x4e2b0e;break;case'%':_0x46142d%=_0x4e2b0e;break;}_0x46142d=_0x46142d||0x0,$gameVariables['setValue'](_0x51a4f6,_0x46142d);}),VisuMZ['CoreEngine'][_0x391453(0x8ed)]=Scene_Boot[_0x391453(0x307)][_0x391453(0x6a4)],Scene_Boot[_0x391453(0x307)]['onDatabaseLoaded']=function(){const _0x244a13=_0x391453;VisuMZ[_0x244a13(0x1f6)]['Scene_Boot_onDatabaseLoaded'][_0x244a13(0xd0)](this),this[_0x244a13(0x857)](),this[_0x244a13(0x1d8)](),this['process_VisuMZ_CoreEngine_Settings'](),this[_0x244a13(0x3be)](),this['process_VisuMZ_CoreEngine_CustomParameters'](),this[_0x244a13(0x4a6)](),VisuMZ[_0x244a13(0x22f)]();},VisuMZ[_0x391453(0x1f6)]['RegExp']={},Scene_Boot[_0x391453(0x307)][_0x391453(0x857)]=function(){const _0x3b6193=_0x391453,_0x1c04e3=[_0x3b6193(0x78c),_0x3b6193(0x2ed),_0x3b6193(0x958),_0x3b6193(0x71b),_0x3b6193(0xd4),_0x3b6193(0x591),_0x3b6193(0x4be),'LUK'],_0x31887b=['HIT',_0x3b6193(0x64e),_0x3b6193(0x83d),'CEV',_0x3b6193(0x321),'MRF',_0x3b6193(0x1e0),_0x3b6193(0x7e3),_0x3b6193(0x390),_0x3b6193(0x762)],_0x5a188c=['TGR',_0x3b6193(0x2a4),_0x3b6193(0x1f7),_0x3b6193(0x39d),_0x3b6193(0x5b3),_0x3b6193(0x79f),'PDR','MDR',_0x3b6193(0x5c8),_0x3b6193(0x18d)],_0x5e01a6=[_0x1c04e3,_0x31887b,_0x5a188c],_0x23dc2a=[_0x3b6193(0x5c6),_0x3b6193(0x37d),_0x3b6193(0x4d9),_0x3b6193(0x462),_0x3b6193(0x7d7),_0x3b6193(0x201),'Rate2',_0x3b6193(0x844),'Flat1',_0x3b6193(0x229)];for(const _0x178606 of _0x5e01a6){let _0x12c63a='';if(_0x178606===_0x1c04e3)_0x12c63a=_0x3b6193(0x50a);if(_0x178606===_0x31887b)_0x12c63a=_0x3b6193(0x5ca);if(_0x178606===_0x5a188c)_0x12c63a=_0x3b6193(0x2b2);for(const _0x446941 of _0x23dc2a){if('uVKRv'!=='ozpoc'){let _0x43e547='%1%2'[_0x3b6193(0x5ae)](_0x12c63a,_0x446941);VisuMZ['CoreEngine'][_0x3b6193(0x264)][_0x43e547]=[],VisuMZ[_0x3b6193(0x1f6)][_0x3b6193(0x264)][_0x43e547+'JS']=[];let _0x401dac=_0x3b6193(0x6d1);if(['Plus',_0x3b6193(0x844)][_0x3b6193(0x3fe)](_0x446941))_0x401dac+=_0x3b6193(0x274);else{if([_0x3b6193(0x37d),'Flat1'][_0x3b6193(0x3fe)](_0x446941))'zxpEd'!==_0x3b6193(0x8fe)?_0x401dac+=_0x3b6193(0x5aa):(_0x183100[_0x3b6193(0x1f6)]['Scene_Battle_createSpriteset'][_0x3b6193(0xd0)](this),_0x12e51f=this[_0x3b6193(0xde)]);else{if([_0x3b6193(0x4d9),_0x3b6193(0x229)]['includes'](_0x446941))_0x401dac+=_0x3b6193(0x134);else{if(_0x446941===_0x3b6193(0x462))_0x401dac+=_0x3b6193(0x303);else{if(_0x446941===_0x3b6193(0x201)){if(_0x3b6193(0x654)===_0x3b6193(0x654))_0x401dac+=_0x3b6193(0x41e);else{const _0x45d25c=this[_0x3b6193(0x754)](),_0x4424ec=this['_tempActor'][_0x3b6193(0x569)](_0x253968),_0x50ba2=_0x4424ec-this[_0x3b6193(0x194)][_0x3b6193(0x569)](_0x349a3a);this[_0x3b6193(0x4a1)](_0x4ca897[_0x3b6193(0x458)](_0x50ba2)),this[_0x3b6193(0x809)](this['_tempActor'][_0x3b6193(0x569)](_0x42c477,!![]),_0x4652c7,_0x10bf5e,_0x45d25c,'right');}}else _0x446941===_0x3b6193(0x5f8)&&(_0x401dac+='(\x5cd+\x5c.?\x5cd+)>');}}}}for(const _0x4c507a of _0x178606){if(_0x3b6193(0x3de)===_0x3b6193(0x529)){_0x369ee1=_0x414919||0xa8,this[_0x3b6193(0x1ee)]();if(_0x1a7381['CoreEngine']['Settings']['UI'][_0x3b6193(0x79e)])this[_0x3b6193(0x294)](_0x147ed5[_0x3b6193(0x145)]()[_0x3b6193(0x32f)],_0x868348,_0x292e23,_0x4f983a);else{const _0x11db12=_0x1ab3ee[_0x3b6193(0x145)]()[_0x3b6193(0x32f)]['replace'](/\\I\[(\d+)\]/gi,'');this[_0x3b6193(0x809)](_0x11db12,_0x5eac34,_0x433129,_0x8a8039);}}else{let _0x7dbf23=_0x446941[_0x3b6193(0xea)](/[\d+]/g,'')[_0x3b6193(0x448)]();const _0x355853=_0x401dac['format'](_0x4c507a,_0x7dbf23);VisuMZ[_0x3b6193(0x1f6)]['RegExp'][_0x43e547][_0x3b6193(0x268)](new RegExp(_0x355853,'i'));const _0x4341fc='<JS\x20%1\x20%2:[\x20](.*)>'[_0x3b6193(0x5ae)](_0x4c507a,_0x7dbf23);VisuMZ[_0x3b6193(0x1f6)][_0x3b6193(0x264)][_0x43e547+'JS'][_0x3b6193(0x268)](new RegExp(_0x4341fc,'i'));}}}else this[_0x3b6193(0x6a8)][_0x3b6193(0x39a)](_0x57e23a[_0x3b6193(0x959)][_0x3b6193(0x3eb)]);}}},Scene_Boot['prototype']['process_VisuMZ_CoreEngine_Notetags']=function(){const _0x41dbde=_0x391453;if(VisuMZ[_0x41dbde(0x22f)])return;},Scene_Boot[_0x391453(0x307)][_0x391453(0x7b0)]=function(){const _0x4662c5=_0x391453,_0x272b4b=VisuMZ[_0x4662c5(0x1f6)]['Settings'];if(_0x272b4b[_0x4662c5(0x7e5)][_0x4662c5(0x348)]){if(_0x4662c5(0x8a4)!=='KljjT')VisuMZ[_0x4662c5(0x39b)](!![]);else return _0x2f5b72[_0x4662c5(0x1f6)][_0x4662c5(0x2e6)][_0x4662c5(0xd0)](this);}if(_0x272b4b[_0x4662c5(0x7e5)]['ModernControls']){if('GQFnL'==='GQFnL')Input[_0x4662c5(0x1f9)][0x23]=_0x4662c5(0x68d),Input['keyMapper'][0x24]='home';else{if(_0x4d80f1['_pictureCoordinatesMode']!==_0x261b06)return _0x1fa1d8['CoreEngine'][_0x4662c5(0x17b)]();return _0x1bdc10[_0x4662c5(0x1f6)][_0x4662c5(0x768)][_0x4662c5(0xd0)](this);}}if(_0x272b4b[_0x4662c5(0x708)]){if('ZKaUT'===_0x4662c5(0x7ee)){const _0x219fca=_0x272b4b['ButtonAssist'];_0x219fca[_0x4662c5(0x8c6)]=_0x219fca[_0x4662c5(0x8c6)]||'\x5c}❪SHIFT❫\x5c{',_0x219fca[_0x4662c5(0x3c7)]=_0x219fca[_0x4662c5(0x3c7)]||'\x5c}❪TAB❫\x5c{';}else _0x2af870=_0x4271a6,this[_0x4662c5(0x94e)](_0x2bd0ff,_0x19070e);}_0x272b4b[_0x4662c5(0x83c)][_0x4662c5(0x510)]&&(Input[_0x4662c5(0x1f9)][0x57]='up',Input['keyMapper'][0x41]=_0x4662c5(0x832),Input[_0x4662c5(0x1f9)][0x53]=_0x4662c5(0x169),Input['keyMapper'][0x44]='right',Input[_0x4662c5(0x1f9)][0x45]='pagedown'),_0x272b4b[_0x4662c5(0x83c)][_0x4662c5(0x191)]&&(Input[_0x4662c5(0x1f9)][0x52]=_0x4662c5(0x5e0)),_0x272b4b[_0x4662c5(0x217)][_0x4662c5(0x7ed)]=_0x272b4b[_0x4662c5(0x217)][_0x4662c5(0x7ed)][_0x4662c5(0x48c)](_0x1ecc9b=>_0x1ecc9b[_0x4662c5(0x448)]()[_0x4662c5(0x780)]()),_0x272b4b[_0x4662c5(0x217)][_0x4662c5(0x275)]=_0x272b4b[_0x4662c5(0x217)]['ExtDisplayedParams'][_0x4662c5(0x48c)](_0x4e316a=>_0x4e316a[_0x4662c5(0x448)]()['trim']());},Scene_Boot[_0x391453(0x307)][_0x391453(0x3be)]=function(){const _0x24bb60=_0x391453;this[_0x24bb60(0x12e)]();},Scene_Boot[_0x391453(0x307)]['process_VisuMZ_CoreEngine_jsQuickFunctions']=function(){const _0x1881c1=_0x391453,_0x294796=VisuMZ['CoreEngine']['Settings'][_0x1881c1(0x92c)];for(const _0xfacb16 of _0x294796){const _0x468afe=_0xfacb16[_0x1881c1(0x611)][_0x1881c1(0xea)](/[ ]/g,''),_0x11e6b1=_0xfacb16[_0x1881c1(0x356)];VisuMZ['CoreEngine']['createJsQuickFunction'](_0x468afe,_0x11e6b1);}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x157)]=function(_0x1a261e,_0x28e80b){const _0x2fc843=_0x391453;if(!!window[_0x1a261e]){if($gameTemp[_0x2fc843(0x4a5)]())console[_0x2fc843(0x4fd)]('WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function'[_0x2fc843(0x5ae)](_0x1a261e));}const _0x45697a=_0x2fc843(0x449)[_0x2fc843(0x5ae)](_0x1a261e,_0x28e80b);window[_0x1a261e]=new Function(_0x45697a);},Scene_Boot[_0x391453(0x307)][_0x391453(0x4ac)]=function(){const _0x367b4d=_0x391453,_0x2a5ee7=VisuMZ[_0x367b4d(0x1f6)][_0x367b4d(0x63e)][_0x367b4d(0x23e)];if(!_0x2a5ee7)return;for(const _0x43baba of _0x2a5ee7){if(!_0x43baba)continue;VisuMZ[_0x367b4d(0x1f6)][_0x367b4d(0x8f6)](_0x43baba);}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x14c)]={},VisuMZ['CoreEngine'][_0x391453(0x7e7)]={},VisuMZ[_0x391453(0x1f6)][_0x391453(0x267)]={},VisuMZ[_0x391453(0x1f6)][_0x391453(0x92e)]={},VisuMZ['CoreEngine'][_0x391453(0x8f6)]=function(_0x16719e){const _0x1b7044=_0x391453,_0x14dbe2=_0x16719e[_0x1b7044(0x35b)],_0x5a4a26=_0x16719e[_0x1b7044(0x85d)],_0x313c6c=_0x16719e[_0x1b7044(0x52f)],_0x3f9161=_0x16719e[_0x1b7044(0x155)],_0x2c15ad=new Function(_0x16719e[_0x1b7044(0x6f7)]);VisuMZ[_0x1b7044(0x1f6)][_0x1b7044(0x14c)][_0x14dbe2['toUpperCase']()[_0x1b7044(0x780)]()]=_0x5a4a26,VisuMZ[_0x1b7044(0x1f6)][_0x1b7044(0x7e7)][_0x14dbe2[_0x1b7044(0x448)]()[_0x1b7044(0x780)]()]=_0x313c6c,VisuMZ[_0x1b7044(0x1f6)]['CustomParamType'][_0x14dbe2[_0x1b7044(0x448)]()[_0x1b7044(0x780)]()]=_0x3f9161,VisuMZ[_0x1b7044(0x1f6)][_0x1b7044(0x92e)][_0x14dbe2[_0x1b7044(0x448)]()['trim']()]=_0x14dbe2,Object[_0x1b7044(0x298)](Game_BattlerBase[_0x1b7044(0x307)],_0x14dbe2,{'get'(){const _0x36cb8e=_0x1b7044,_0x14717f=_0x2c15ad[_0x36cb8e(0xd0)](this);return _0x3f9161===_0x36cb8e(0x43a)?Math[_0x36cb8e(0x213)](_0x14717f):_0x14717f;}});},VisuMZ['CoreEngine'][_0x391453(0x107)]={},VisuMZ[_0x391453(0x1f6)]['ControllerMatches']={},Scene_Boot[_0x391453(0x307)]['process_VisuMZ_CoreEngine_ControllerButtons']=function(){const _0x369ff1=_0x391453,_0x583440=VisuMZ[_0x369ff1(0x1f6)][_0x369ff1(0x63e)][_0x369ff1(0x107)];for(const _0x18a76d of _0x583440){const _0x7ee653=(_0x18a76d[_0x369ff1(0x83a)]||'')[_0x369ff1(0x28a)]()[_0x369ff1(0x780)](),_0x168fe3=(_0x18a76d[_0x369ff1(0x8e9)]||'')[_0x369ff1(0x28a)]()['trim']();VisuMZ[_0x369ff1(0x1f6)][_0x369ff1(0x107)][_0x7ee653]=_0x18a76d,VisuMZ[_0x369ff1(0x1f6)][_0x369ff1(0x452)][_0x168fe3]=_0x7ee653;}},VisuMZ['ParseAllNotetags']=function(){const _0x4ea7c4=_0x391453;for(const _0x14fd22 of $dataActors){if(_0x4ea7c4(0x7f2)!==_0x4ea7c4(0x196)){if(_0x14fd22)VisuMZ[_0x4ea7c4(0x703)](_0x14fd22);}else this[_0x4ea7c4(0x1de)]['fontSize']<=0x60&&(this[_0x4ea7c4(0x1de)][_0x4ea7c4(0x875)]+=0x6);}for(const _0x3f8204 of $dataClasses){if(_0x3f8204)VisuMZ[_0x4ea7c4(0x618)](_0x3f8204);}for(const _0x41c8ae of $dataSkills){if(_0x41c8ae)VisuMZ[_0x4ea7c4(0x19d)](_0x41c8ae);}for(const _0x46e623 of $dataItems){if(_0x46e623)VisuMZ['ParseItemNotetags'](_0x46e623);}for(const _0x43893d of $dataWeapons){if(_0x43893d)VisuMZ[_0x4ea7c4(0x781)](_0x43893d);}for(const _0x57fe3f of $dataArmors){if(_0x57fe3f)VisuMZ[_0x4ea7c4(0x46b)](_0x57fe3f);}for(const _0x14eb8b of $dataEnemies){if(_0x4ea7c4(0x606)!==_0x4ea7c4(0x606)){for(const _0x32428b of this['_pointAnimationSprites']){!_0x32428b[_0x4ea7c4(0x894)]()&&this[_0x4ea7c4(0x6de)](_0x32428b);}this[_0x4ea7c4(0x789)]();}else{if(_0x14eb8b)VisuMZ[_0x4ea7c4(0x542)](_0x14eb8b);}}for(const _0x3d5401 of $dataStates){if(_0x4ea7c4(0x1fa)===_0x4ea7c4(0xe4)){const _0x5c0d93=_0x4ea7c4(0x8a0);this['_colorCache']=this[_0x4ea7c4(0x471)]||{};if(this[_0x4ea7c4(0x471)][_0x5c0d93])return this['_colorCache'][_0x5c0d93];const _0x226d52=_0x2e3ebc['CoreEngine'][_0x4ea7c4(0x63e)][_0x4ea7c4(0x839)]['ColorMaxLvGauge1'];return this['getColorDataFromPluginParameters'](_0x5c0d93,_0x226d52);}else{if(_0x3d5401)VisuMZ[_0x4ea7c4(0x171)](_0x3d5401);}}for(const _0x115d5f of $dataTilesets){if(_0x115d5f)VisuMZ['ParseTilesetNotetags'](_0x115d5f);}},VisuMZ[_0x391453(0x703)]=function(_0x2af2a5){},VisuMZ[_0x391453(0x618)]=function(_0x596736){},VisuMZ[_0x391453(0x19d)]=function(_0x1ba70b){},VisuMZ[_0x391453(0x41a)]=function(_0x4d1260){},VisuMZ[_0x391453(0x781)]=function(_0x176e12){},VisuMZ[_0x391453(0x46b)]=function(_0x423961){},VisuMZ[_0x391453(0x542)]=function(_0x55fc5d){},VisuMZ[_0x391453(0x171)]=function(_0x37874a){},VisuMZ[_0x391453(0x347)]=function(_0x212ab3){},VisuMZ['CoreEngine']['ParseActorNotetags']=VisuMZ[_0x391453(0x703)],VisuMZ[_0x391453(0x703)]=function(_0x4e071b){const _0x2b631c=_0x391453;VisuMZ[_0x2b631c(0x1f6)][_0x2b631c(0x703)]['call'](this,_0x4e071b);const _0x427b04=_0x4e071b[_0x2b631c(0x185)];if(_0x427b04['match'](/<MAX LEVEL:[ ](\d+)>/i)){_0x4e071b['maxLevel']=Number(RegExp['$1']);if(_0x4e071b[_0x2b631c(0x533)]===0x0)_0x4e071b[_0x2b631c(0x533)]=Number['MAX_SAFE_INTEGER'];}_0x427b04['match'](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x2b631c(0x901)!=='OKYna'?_0x4e071b[_0x2b631c(0x2d9)]=Math[_0x2b631c(0x1a5)](Number(RegExp['$1']),_0x4e071b[_0x2b631c(0x533)]):this[_0x2b631c(0x4e5)](0x0));},VisuMZ['CoreEngine'][_0x391453(0x618)]=VisuMZ['ParseClassNotetags'],VisuMZ[_0x391453(0x618)]=function(_0x2d6316){const _0x26405c=_0x391453;VisuMZ['CoreEngine'][_0x26405c(0x618)][_0x26405c(0xd0)](this,_0x2d6316);if(_0x2d6316[_0x26405c(0x47b)]){if(_0x26405c(0x409)===_0x26405c(0x409))for(const _0x816299 of _0x2d6316[_0x26405c(0x47b)]){if(_0x26405c(0x2f7)!==_0x26405c(0x942))_0x816299[_0x26405c(0x185)][_0x26405c(0x13d)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x816299['level']=Math[_0x26405c(0x933)](Number(RegExp['$1']),0x1));else{if(!this[_0x26405c(0x3e4)])return;if(!this['bitmap'][_0x26405c(0x7af)])return;this[_0x26405c(0x3e4)][_0x26405c(0x66d)]&&!this[_0x26405c(0x794)]['_baseTexture'][_0x26405c(0x818)]&&this[_0x26405c(0x3e4)]['destroy']();}}else _0x1cdb56+=_0x960299+_0x26405c(0x817);}},VisuMZ['CoreEngine'][_0x391453(0x542)]=VisuMZ[_0x391453(0x542)],VisuMZ[_0x391453(0x542)]=function(_0x42179e){const _0x47df5f=_0x391453;VisuMZ[_0x47df5f(0x1f6)]['ParseEnemyNotetags'][_0x47df5f(0xd0)](this,_0x42179e),_0x42179e[_0x47df5f(0x468)]=0x1;const _0x301f48=_0x42179e[_0x47df5f(0x185)];if(_0x301f48[_0x47df5f(0x13d)](/<LEVEL:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x468)]=Number(RegExp['$1']);if(_0x301f48['match'](/<MAXHP:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x8a9)][0x0]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<MAXMP:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x8a9)][0x1]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<ATK:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x8a9)][0x2]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<DEF:[ ](\d+)>/i))_0x42179e['params'][0x3]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<MAT:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x8a9)][0x4]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<MDF:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x8a9)][0x5]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<AGI:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x8a9)][0x6]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<LUK:[ ](\d+)>/i))_0x42179e['params'][0x7]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<EXP:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x265)]=Number(RegExp['$1']);if(_0x301f48[_0x47df5f(0x13d)](/<GOLD:[ ](\d+)>/i))_0x42179e[_0x47df5f(0x15d)]=Number(RegExp['$1']);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x384)]=Graphics['_defaultStretchMode'],Graphics[_0x391453(0x522)]=function(){const _0x59d06b=_0x391453;switch(VisuMZ[_0x59d06b(0x1f6)][_0x59d06b(0x63e)][_0x59d06b(0x7e5)]['AutoStretch']){case'stretch':return!![];case _0x59d06b(0x421):return![];default:return VisuMZ[_0x59d06b(0x1f6)]['Graphics_defaultStretchMode'][_0x59d06b(0xd0)](this);}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x3e8)]=Graphics[_0x391453(0x1d4)],Graphics[_0x391453(0x1d4)]=function(_0x480085,_0x316295,_0x1d1536=null){const _0x4c5619=_0x391453;VisuMZ['CoreEngine']['Graphics_printError']['call'](this,_0x480085,_0x316295,_0x1d1536),VisuMZ[_0x4c5619(0x39b)](![]);},VisuMZ[_0x391453(0x1f6)]['Graphics_centerElement']=Graphics[_0x391453(0x82d)],Graphics['_centerElement']=function(_0x2f1ab1){const _0x16d879=_0x391453;VisuMZ[_0x16d879(0x1f6)][_0x16d879(0x27c)][_0x16d879(0xd0)](this,_0x2f1ab1),this[_0x16d879(0x106)](_0x2f1ab1);},Graphics[_0x391453(0x106)]=function(_0x42f706){const _0x3970eb=_0x391453;if(VisuMZ[_0x3970eb(0x1f6)][_0x3970eb(0x63e)][_0x3970eb(0x7e5)][_0x3970eb(0x8ad)]){if(_0x3970eb(0x683)==='AVXOh')_0x42f706[_0x3970eb(0x53c)][_0x3970eb(0x3e2)]='none';else{if(this[_0x3970eb(0x3a9)]===_0x5f5116)this['initCoreEngine']();if(this['_CoreEngineSettings'][_0x3970eb(0x860)]===_0x32f7d0)this[_0x3970eb(0x442)]();this[_0x3970eb(0x3a9)][_0x3970eb(0x860)]=_0x379baa;}}VisuMZ[_0x3970eb(0x1f6)][_0x3970eb(0x63e)][_0x3970eb(0x7e5)][_0x3970eb(0x1aa)]&&(_0x42f706[_0x3970eb(0x53c)][_0x3970eb(0x1ac)]=_0x3970eb(0x5bb));const _0x94ec08=Math[_0x3970eb(0x933)](0x0,Math[_0x3970eb(0x4ff)](_0x42f706[_0x3970eb(0x786)]*this[_0x3970eb(0x475)])),_0x2f75ab=Math['max'](0x0,Math[_0x3970eb(0x4ff)](_0x42f706[_0x3970eb(0x8e8)]*this[_0x3970eb(0x475)]));_0x42f706[_0x3970eb(0x53c)][_0x3970eb(0x786)]=_0x94ec08+'px',_0x42f706[_0x3970eb(0x53c)]['height']=_0x2f75ab+'px';},VisuMZ[_0x391453(0x1f6)][_0x391453(0x603)]=Bitmap[_0x391453(0x307)][_0x391453(0x4f3)],Bitmap[_0x391453(0x307)]['initialize']=function(_0x278167,_0x1e9467){const _0xbe957e=_0x391453;VisuMZ['CoreEngine']['Bitmap_initialize'][_0xbe957e(0xd0)](this,_0x278167,_0x1e9467),this[_0xbe957e(0x749)]=!(VisuMZ[_0xbe957e(0x1f6)][_0xbe957e(0x63e)][_0xbe957e(0x7e5)]['PixelateImageRendering']??!![]);},Bitmap[_0x391453(0x307)][_0x391453(0x437)]=function(){const _0x4badaa=_0x391453;this[_0x4badaa(0x7af)]=!![];},VisuMZ[_0x391453(0x1f6)]['Sprite_destroy']=Sprite[_0x391453(0x307)]['destroy'],Sprite['prototype'][_0x391453(0x53a)]=function(){const _0x2bd664=_0x391453;if(this[_0x2bd664(0x1a2)])VisuMZ[_0x2bd664(0x1f6)]['Sprite_destroy'][_0x2bd664(0xd0)](this);this[_0x2bd664(0x3cd)]();},Sprite[_0x391453(0x307)][_0x391453(0x3cd)]=function(){const _0x271c3d=_0x391453;if(!this[_0x271c3d(0x3e4)])return;if(!this['bitmap']['_customModified'])return;this[_0x271c3d(0x3e4)][_0x271c3d(0x66d)]&&!this['_bitmap'][_0x271c3d(0x66d)][_0x271c3d(0x818)]&&this['bitmap'][_0x271c3d(0x53a)]();},VisuMZ['CoreEngine'][_0x391453(0x89f)]=Bitmap[_0x391453(0x307)][_0x391453(0x52c)],Bitmap['prototype'][_0x391453(0x52c)]=function(_0x513037,_0x5e3436){const _0xaae1a6=_0x391453;VisuMZ['CoreEngine'][_0xaae1a6(0x89f)][_0xaae1a6(0xd0)](this,_0x513037,_0x5e3436),this[_0xaae1a6(0x437)]();},VisuMZ['CoreEngine'][_0x391453(0x160)]=Bitmap['prototype'][_0x391453(0x25b)],Bitmap['prototype'][_0x391453(0x25b)]=function(_0x3c2cb4,_0x56d413,_0x5b1a89,_0x41e811,_0x107532,_0x4ee179,_0x193ba4,_0x1e98e5,_0x46ac06){const _0x1078d8=_0x391453;_0x56d413=Math['round'](_0x56d413),_0x5b1a89=Math[_0x1078d8(0x213)](_0x5b1a89),_0x41e811=Math['round'](_0x41e811),_0x107532=Math[_0x1078d8(0x213)](_0x107532),_0x4ee179=Math['round'](_0x4ee179),_0x193ba4=Math[_0x1078d8(0x213)](_0x193ba4),VisuMZ[_0x1078d8(0x1f6)][_0x1078d8(0x160)][_0x1078d8(0xd0)](this,_0x3c2cb4,_0x56d413,_0x5b1a89,_0x41e811,_0x107532,_0x4ee179,_0x193ba4,_0x1e98e5,_0x46ac06),this[_0x1078d8(0x437)]();},VisuMZ[_0x391453(0x1f6)]['Bitmap_clearRect']=Bitmap[_0x391453(0x307)]['clearRect'],Bitmap[_0x391453(0x307)][_0x391453(0x7f1)]=function(_0xd60620,_0x5f2e34,_0x4bdfd5,_0x47a1d4){const _0xf3e8f=_0x391453;VisuMZ[_0xf3e8f(0x1f6)][_0xf3e8f(0x7be)][_0xf3e8f(0xd0)](this,_0xd60620,_0x5f2e34,_0x4bdfd5,_0x47a1d4),this[_0xf3e8f(0x437)]();},VisuMZ[_0x391453(0x1f6)]['Bitmap_fillRect']=Bitmap[_0x391453(0x307)][_0x391453(0x327)],Bitmap[_0x391453(0x307)][_0x391453(0x327)]=function(_0x963562,_0x545350,_0x47f597,_0x2178f5,_0x5c0ac6){const _0x14a174=_0x391453;VisuMZ['CoreEngine']['Bitmap_fillRect'][_0x14a174(0xd0)](this,_0x963562,_0x545350,_0x47f597,_0x2178f5,_0x5c0ac6),this[_0x14a174(0x437)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x4e7)]=Bitmap[_0x391453(0x307)][_0x391453(0x93c)],Bitmap['prototype']['strokeRect']=function(_0x226a9d,_0xa74548,_0x38c48c,_0x375bed,_0x2bc8c){const _0x211d82=_0x391453;VisuMZ[_0x211d82(0x1f6)]['Bitmap_strokeRect']['call'](this,_0x226a9d,_0xa74548,_0x38c48c,_0x375bed,_0x2bc8c),this[_0x211d82(0x437)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x27f)]=Bitmap[_0x391453(0x307)][_0x391453(0x49c)],Bitmap[_0x391453(0x307)][_0x391453(0x49c)]=function(_0x38d6fc,_0x439911,_0xf5137b,_0x342965,_0x4db018,_0x421c60,_0x5a05b5){const _0x3b9051=_0x391453;VisuMZ[_0x3b9051(0x1f6)]['Bitmap_gradientFillRect'][_0x3b9051(0xd0)](this,_0x38d6fc,_0x439911,_0xf5137b,_0x342965,_0x4db018,_0x421c60,_0x5a05b5),this[_0x3b9051(0x437)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x8da)]=Bitmap[_0x391453(0x307)][_0x391453(0x494)],Bitmap[_0x391453(0x307)][_0x391453(0x494)]=function(_0x4b4715,_0x11533a,_0x87204,_0x48c8ba){const _0x5c430d=_0x391453;_0x4b4715=Math['round'](_0x4b4715),_0x11533a=Math['round'](_0x11533a),_0x87204=Math['round'](_0x87204),VisuMZ[_0x5c430d(0x1f6)][_0x5c430d(0x8da)][_0x5c430d(0xd0)](this,_0x4b4715,_0x11533a,_0x87204,_0x48c8ba),this['markCoreEngineModified']();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x3bc)]=Bitmap[_0x391453(0x307)][_0x391453(0x820)],Bitmap[_0x391453(0x307)]['measureTextWidth']=function(_0x918ec2){const _0x3fa46d=_0x391453;return Math[_0x3fa46d(0x127)](VisuMZ[_0x3fa46d(0x1f6)][_0x3fa46d(0x3bc)][_0x3fa46d(0xd0)](this,_0x918ec2));},VisuMZ[_0x391453(0x1f6)]['Bitmap_drawText']=Bitmap[_0x391453(0x307)]['drawText'],Bitmap[_0x391453(0x307)][_0x391453(0x809)]=function(_0x46d31f,_0x378dfc,_0x8b91a,_0x4ec675,_0x2f0048,_0x4fbc8f){const _0x26fd2c=_0x391453;_0x378dfc=Math[_0x26fd2c(0x213)](_0x378dfc),_0x8b91a=Math[_0x26fd2c(0x213)](_0x8b91a),_0x4ec675=Math[_0x26fd2c(0x213)](_0x4ec675),_0x2f0048=Math[_0x26fd2c(0x213)](_0x2f0048),VisuMZ[_0x26fd2c(0x1f6)][_0x26fd2c(0x6bb)][_0x26fd2c(0xd0)](this,_0x46d31f,_0x378dfc,_0x8b91a,_0x4ec675,_0x2f0048,_0x4fbc8f),this['markCoreEngineModified']();},VisuMZ['CoreEngine']['Bitmap_drawTextOutline']=Bitmap['prototype']['_drawTextOutline'],Bitmap[_0x391453(0x307)][_0x391453(0x37b)]=function(_0x3ddc29,_0x55683d,_0x4f24e9,_0x8e1db0){const _0x367397=_0x391453;if(VisuMZ[_0x367397(0x1f6)][_0x367397(0x63e)][_0x367397(0x7e5)][_0x367397(0x3b0)]){if(_0x367397(0x8b9)!==_0x367397(0x8b9)){const _0x3a0544=_0xbae12b[_0x367397(0x7b1)],_0xdf7d=0.5;if(_0x3a0544[0x0]<-_0xdf7d)return!![];if(_0x3a0544[0x0]>_0xdf7d)return!![];if(_0x3a0544[0x1]<-_0xdf7d)return!![];if(_0x3a0544[0x1]>_0xdf7d)return!![];return![];}else this[_0x367397(0xee)](_0x3ddc29,_0x55683d,_0x4f24e9,_0x8e1db0);}else'WDBUn'!==_0x367397(0x299)?(_0x1f34cf['CoreEngine']['Scene_Base_create']['call'](this),_0x43a60b=this):VisuMZ[_0x367397(0x1f6)]['Bitmap_drawTextOutline'][_0x367397(0xd0)](this,_0x3ddc29,_0x55683d,_0x4f24e9,_0x8e1db0);},Bitmap[_0x391453(0x307)][_0x391453(0xee)]=function(_0x303a1c,_0x4ec7c0,_0x2b8cb9,_0x349933){const _0x385a13=_0x391453,_0x37d1e4=this['context'];_0x37d1e4['fillStyle']=this[_0x385a13(0x3e9)],_0x37d1e4[_0x385a13(0x38f)](_0x303a1c,_0x4ec7c0+0x2,_0x2b8cb9+0x2,_0x349933);},VisuMZ['CoreEngine'][_0x391453(0x70c)]=Input[_0x391453(0x893)],Input[_0x391453(0x893)]=function(){const _0x57e168=_0x391453;VisuMZ[_0x57e168(0x1f6)][_0x57e168(0x70c)][_0x57e168(0xd0)](this),this[_0x57e168(0x8ee)]=undefined,this['_inputSpecialKeyCode']=undefined,this[_0x57e168(0x2e8)]=Input[_0x57e168(0x25f)];},VisuMZ[_0x391453(0x1f6)]['Input_update']=Input['update'],Input[_0x391453(0x8cf)]=function(){const _0x144978=_0x391453;VisuMZ[_0x144978(0x1f6)][_0x144978(0x1c8)][_0x144978(0xd0)](this);if(this[_0x144978(0x2e8)])this[_0x144978(0x2e8)]--;},VisuMZ[_0x391453(0x1f6)]['Input_pollGamepads']=Input[_0x391453(0x4b7)],Input[_0x391453(0x4b7)]=function(){const _0x1bfbb9=_0x391453;if(this[_0x1bfbb9(0x2e8)])return;VisuMZ[_0x1bfbb9(0x1f6)]['Input_pollGamepads'][_0x1bfbb9(0xd0)](this);},VisuMZ['CoreEngine'][_0x391453(0x318)]=Input[_0x391453(0x342)],Input[_0x391453(0x342)]=function(){const _0x5ef255=_0x391453;VisuMZ[_0x5ef255(0x1f6)][_0x5ef255(0x318)][_0x5ef255(0xd0)](this),document['addEventListener'](_0x5ef255(0x73e),this[_0x5ef255(0x207)]['bind'](this));},VisuMZ[_0x391453(0x1f6)]['Input_onKeyDown']=Input['_onKeyDown'],Input[_0x391453(0x5a2)]=function(_0x4b150b){const _0x55504f=_0x391453;this['_inputSpecialKeyCode']=_0x4b150b[_0x55504f(0x867)],VisuMZ[_0x55504f(0x1f6)][_0x55504f(0x186)][_0x55504f(0xd0)](this,_0x4b150b),this[_0x55504f(0x80f)](null);},Input[_0x391453(0x207)]=function(_0x2a5e71){const _0x4c7c99=_0x391453;this[_0x4c7c99(0x4f1)](_0x2a5e71);},Input[_0x391453(0x4f1)]=function(_0x5ac30c){const _0x46ac5f=_0x391453;this[_0x46ac5f(0x2b1)]=_0x5ac30c[_0x46ac5f(0x867)];let _0x19523f=String[_0x46ac5f(0x302)](_0x5ac30c[_0x46ac5f(0x252)]);if(this[_0x46ac5f(0x8ee)]===undefined)'zugdG'!==_0x46ac5f(0x3aa)?this[_0x46ac5f(0x3d2)]=_0x46ac5f(0x5ed):this[_0x46ac5f(0x8ee)]=_0x19523f;else{if(_0x46ac5f(0x876)!==_0x46ac5f(0x876))return![];else this[_0x46ac5f(0x8ee)]+=_0x19523f;}},VisuMZ[_0x391453(0x1f6)]['Input_shouldPreventDefault']=Input[_0x391453(0x5e2)],Input['_shouldPreventDefault']=function(_0x502229){const _0x1143c6=_0x391453;if(_0x502229===0x8)return![];return VisuMZ[_0x1143c6(0x1f6)][_0x1143c6(0x4c4)][_0x1143c6(0xd0)](this,_0x502229);},Input[_0x391453(0x8a3)]=function(_0x1e02fa){const _0x45c423=_0x391453;if(_0x1e02fa['match'](/backspace/i))return this['_inputSpecialKeyCode']===0x8;if(_0x1e02fa['match'](/enter/i))return this[_0x45c423(0x2b1)]===0xd;if(_0x1e02fa[_0x45c423(0x13d)](/escape/i))return this['_inputSpecialKeyCode']===0x1b;},Input[_0x391453(0x27e)]=function(){const _0x5935a8=_0x391453;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39]['contains'](this[_0x5935a8(0x2b1)]);},Input[_0x391453(0x7f9)]=function(){const _0x122281=_0x391453;return[0x25,0x26,0x27,0x28][_0x122281(0x914)](this[_0x122281(0x2b1)]);},Input[_0x391453(0x594)]=function(){const _0x65cf71=_0x391453;if(navigator[_0x65cf71(0x1c1)]){const _0x16946e=navigator[_0x65cf71(0x1c1)]();if(_0x16946e)for(const _0x2a5e2a of _0x16946e){if(_0x2a5e2a&&_0x2a5e2a[_0x65cf71(0x116)]){if(_0x65cf71(0x101)===_0x65cf71(0x3dc))this[_0x65cf71(0x4a8)](_0x4ac52d,_0x4b3860,_0x14bdb2,_0x5cb8e2,_0x82f68e);else return!![];}}}return![];},Input[_0x391453(0x773)]=function(){const _0x3d08db=_0x391453;if(navigator[_0x3d08db(0x1c1)]){const _0x5e7091=navigator[_0x3d08db(0x1c1)]();if(_0x5e7091)for(const _0x152be3 of _0x5e7091){if(_0x3d08db(0x4a3)===_0x3d08db(0x4a3)){if(_0x152be3&&_0x152be3['connected']){if(_0x3d08db(0x63d)!==_0x3d08db(0x5f7)){if(this['isGamepadButtonPressed'](_0x152be3))return!![];if(this[_0x3d08db(0x1d1)](_0x152be3))return!![];}else{if(this[_0x3d08db(0x2dd)]()[_0x3d08db(0x2a7)]&&_0x5a6455[_0x3d08db(0x6fa)]()===0x1){this[_0x3d08db(0x92b)]=this[_0x3d08db(0x2dd)]()[_0x3d08db(0x831)];return;}_0x1ac4c0['CoreEngine'][_0x3d08db(0x498)][_0x3d08db(0xd0)](this,_0x4a2093);}}}else this[_0x3d08db(0x3a9)]={'SideView':_0xd6820b[_0x3d08db(0x806)],'BattleSystem':this['initialBattleSystem'](),'FontSize':_0x29dd24[_0x3d08db(0x314)][_0x3d08db(0x875)],'Padding':0xc};}}return![];},Input[_0x391453(0x1e1)]=function(_0x45376c){const _0x4ff16d=_0x391453,_0xd9c9db=_0x45376c['buttons'];for(let _0x33a4a7=0x0;_0x33a4a7<_0xd9c9db[_0x4ff16d(0x4b1)];_0x33a4a7++){if('JizLg'==='QEvhU'){var _0x29b7b6=_0x1bbf01(_0x431d0e['$1']);_0x475e7d+=_0x29b7b6;}else{if(_0xd9c9db[_0x33a4a7]['pressed'])return!![];}}return![];},Input['isGamepadAxisMoved']=function(_0xe04e59){const _0x2f6b14=_0x391453,_0xf761f0=_0xe04e59[_0x2f6b14(0x7b1)],_0x4778e4=0.5;if(_0xf761f0[0x0]<-_0x4778e4)return!![];if(_0xf761f0[0x0]>_0x4778e4)return!![];if(_0xf761f0[0x1]<-_0x4778e4)return!![];if(_0xf761f0[0x1]>_0x4778e4)return!![];return![];},Input[_0x391453(0x8a8)]=function(){const _0x4c0e62=_0x391453;return this[_0x4c0e62(0x579)]||null;},Input[_0x391453(0x80f)]=function(_0x342742){const _0x47a1f5=_0x391453;this[_0x47a1f5(0x579)]=_0x342742;},VisuMZ[_0x391453(0x1f6)]['Input_updateGamepadState']=Input[_0x391453(0x6e6)],Input['_updateGamepadState']=function(_0xc5a338){const _0x276bcb=_0x391453;VisuMZ['CoreEngine']['Input_updateGamepadState'][_0x276bcb(0xd0)](this,_0xc5a338),(this[_0x276bcb(0x1e1)](_0xc5a338)||this[_0x276bcb(0x1d1)](_0xc5a338))&&this[_0x276bcb(0x80f)](_0xc5a338);},Input[_0x391453(0x8c7)]=function(){const _0x43fc39=_0x391453;return this[_0x43fc39(0x579)]?this[_0x43fc39(0x579)]['id']:_0x43fc39(0x2f1);},VisuMZ['CoreEngine']['Tilemap_addShadow']=Tilemap[_0x391453(0x307)][_0x391453(0x6ce)],Tilemap[_0x391453(0x307)][_0x391453(0x6ce)]=function(_0x4ed194,_0x51f090,_0x35ed32,_0x4c7f5f){const _0x3f4f8f=_0x391453;if($gameMap&&$gameMap['areTileShadowsHidden']())return;VisuMZ[_0x3f4f8f(0x1f6)]['Tilemap_addShadow'][_0x3f4f8f(0xd0)](this,_0x4ed194,_0x51f090,_0x35ed32,_0x4c7f5f);},Tilemap[_0x391453(0x18e)][_0x391453(0x307)][_0x391453(0x862)]=function(){const _0x4f19b2=_0x391453;this[_0x4f19b2(0x242)]();for(let _0x57b91f=0x0;_0x57b91f<Tilemap[_0x4f19b2(0x709)][_0x4f19b2(0x34e)];_0x57b91f++){const _0x2c83c3=new PIXI[(_0x4f19b2(0x3e1))]();_0x2c83c3[_0x4f19b2(0x903)](0x800,0x800);if(VisuMZ[_0x4f19b2(0x1f6)][_0x4f19b2(0x63e)][_0x4f19b2(0x7e5)][_0x4f19b2(0x1aa)]){if('UplfJ'!==_0x4f19b2(0x947))return!![];else _0x2c83c3[_0x4f19b2(0x7bc)]=PIXI[_0x4f19b2(0x625)][_0x4f19b2(0x940)];}this['_internalTextures']['push'](_0x2c83c3);}},WindowLayer['prototype'][_0x391453(0x53f)]=function(){const _0x375945=_0x391453;if(SceneManager&&SceneManager[_0x375945(0x254)]){if('vwktZ'===_0x375945(0x29e)){const _0x3e02fa=_0xcf4d22[_0x375945(0x1f6)][_0x375945(0x63e)][_0x375945(0x7e5)][_0x375945(0x525)]||0x0;if(_0x3e02fa>0x0)_0x23c2de[_0x375945(0x497)](_0x3e02fa);}else return SceneManager[_0x375945(0x254)][_0x375945(0x77a)]();}else return!![];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x1fd)]=WindowLayer[_0x391453(0x307)][_0x391453(0x165)],WindowLayer['prototype'][_0x391453(0x165)]=function render(_0x4bc7ad){const _0x17dcd6=_0x391453;if(this['isMaskingEnabled']())VisuMZ[_0x17dcd6(0x1f6)]['WindowLayer_render'][_0x17dcd6(0xd0)](this,_0x4bc7ad);else{if(_0x17dcd6(0x63b)===_0x17dcd6(0x63b))this[_0x17dcd6(0x59d)](_0x4bc7ad);else return _0x5108ce[_0x17dcd6(0x1f6)][_0x17dcd6(0x63e)][_0x17dcd6(0x839)][_0x17dcd6(0xe8)]['call'](this,_0x3a5134);}},WindowLayer[_0x391453(0x307)][_0x391453(0x59d)]=function render(_0x187c29){const _0x5e53ff=_0x391453;if(!this[_0x5e53ff(0x89e)])return;const _0x5efa83=new PIXI[(_0x5e53ff(0x3d3))](),_0x48ab73=_0x187c29['gl'],_0x59d0f5=this[_0x5e53ff(0x40b)]['clone']();_0x187c29['framebuffer'][_0x5e53ff(0x8ef)](),_0x5efa83[_0x5e53ff(0x55a)]=this[_0x5e53ff(0x55a)],_0x187c29[_0x5e53ff(0x50d)][_0x5e53ff(0x2ae)](),_0x48ab73[_0x5e53ff(0x224)](_0x48ab73['STENCIL_TEST']);while(_0x59d0f5[_0x5e53ff(0x4b1)]>0x0){const _0x185316=_0x59d0f5[_0x5e53ff(0x561)]();_0x185316[_0x5e53ff(0x454)]&&_0x185316[_0x5e53ff(0x89e)]&&_0x185316[_0x5e53ff(0x8fb)]>0x0&&(_0x5e53ff(0x26a)!==_0x5e53ff(0x26a)?this[_0x5e53ff(0x3d2)]=0x0:(_0x48ab73[_0x5e53ff(0x4d4)](_0x48ab73[_0x5e53ff(0x8d7)],0x0,~0x0),_0x48ab73['stencilOp'](_0x48ab73['KEEP'],_0x48ab73[_0x5e53ff(0x198)],_0x48ab73[_0x5e53ff(0x198)]),_0x185316[_0x5e53ff(0x165)](_0x187c29),_0x187c29[_0x5e53ff(0x50d)][_0x5e53ff(0x2ae)](),_0x5efa83[_0x5e53ff(0x893)](),_0x48ab73[_0x5e53ff(0x4d4)](_0x48ab73[_0x5e53ff(0x73a)],0x1,~0x0),_0x48ab73[_0x5e53ff(0x6c6)](_0x48ab73[_0x5e53ff(0x4b4)],_0x48ab73[_0x5e53ff(0x4b4)],_0x48ab73[_0x5e53ff(0x4b4)]),_0x48ab73[_0x5e53ff(0x735)](_0x48ab73['ZERO'],_0x48ab73[_0x5e53ff(0x523)]),_0x5efa83['render'](_0x187c29),_0x187c29[_0x5e53ff(0x50d)]['flush'](),_0x48ab73[_0x5e53ff(0x735)](_0x48ab73[_0x5e53ff(0x523)],_0x48ab73[_0x5e53ff(0x715)])));}_0x48ab73[_0x5e53ff(0x805)](_0x48ab73[_0x5e53ff(0x3df)]),_0x48ab73['clear'](_0x48ab73['STENCIL_BUFFER_BIT']),_0x48ab73['clearStencil'](0x0),_0x187c29[_0x5e53ff(0x50d)]['flush']();for(const _0x2d8eed of this['children']){_0x5e53ff(0x8f7)!==_0x5e53ff(0x68c)?!_0x2d8eed[_0x5e53ff(0x454)]&&_0x2d8eed[_0x5e53ff(0x89e)]&&_0x2d8eed['render'](_0x187c29):(this[_0x5e53ff(0x23b)]={},_0x551ff[_0x5e53ff(0x1f6)][_0x5e53ff(0x4b8)][_0x5e53ff(0xd0)](this));}_0x187c29[_0x5e53ff(0x50d)][_0x5e53ff(0x2ae)]();},DataManager['isKeyItem']=function(_0xa0469f){const _0x4c0d36=_0x391453;return this[_0x4c0d36(0x527)](_0xa0469f)&&_0xa0469f[_0x4c0d36(0x8bf)]===0x2;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x896)]=DataManager[_0x391453(0x71e)],DataManager['setupNewGame']=function(){const _0x2d6805=_0x391453;VisuMZ['CoreEngine'][_0x2d6805(0x896)]['call'](this),this['reservePlayTestNewGameCommonEvent'](),this['reserveNewGameCommonEvent']();},DataManager[_0x391453(0x422)]=function(){const _0x36574f=_0x391453;if($gameTemp[_0x36574f(0x4a5)]()){if('QfRXb'===_0x36574f(0x61f)){const _0xf55cf7=VisuMZ[_0x36574f(0x1f6)][_0x36574f(0x63e)][_0x36574f(0x7e5)][_0x36574f(0x350)];if(_0xf55cf7>0x0)$gameTemp[_0x36574f(0x497)](_0xf55cf7);}else _0x434b9e=_0x128beb[_0x36574f(0x213)](_0xd632bf),_0x590209=_0xa5f5b9[_0x36574f(0x213)](_0x4e1d47),_0x1bc831[_0x36574f(0x1f6)][_0x36574f(0x528)]['call'](this,_0x442d8c,_0x459b2b,_0x36c37d);}},DataManager['reserveNewGameCommonEvent']=function(){const _0x322bff=_0x391453,_0x4d07f5=VisuMZ[_0x322bff(0x1f6)][_0x322bff(0x63e)][_0x322bff(0x7e5)][_0x322bff(0x525)]||0x0;if(_0x4d07f5>0x0)$gameTemp[_0x322bff(0x497)](_0x4d07f5);},DataManager[_0x391453(0x8c2)]=function(_0x4d5283){const _0xf37040=_0x391453,_0x177c56=$dataTroops[_0x4d5283];if(!_0x177c56)return'';let _0x22263b='';_0x22263b+=_0x177c56[_0xf37040(0x32f)];for(const _0x2e40f3 of _0x177c56[_0xf37040(0x516)]){for(const _0x3aa72e of _0x2e40f3[_0xf37040(0x67c)]){if(_0xf37040(0x45d)!==_0xf37040(0x10c))[0x6c,0x198][_0xf37040(0x3fe)](_0x3aa72e['code'])&&(_0x22263b+='\x0a',_0x22263b+=_0x3aa72e[_0xf37040(0x17d)][0x0]);else{if(_0x3beedf[_0xf37040(0x4a0)](_0xf37040(0x624))){var _0x259440=_0x2c2069(_0xf37040(0x369))[_0xf37040(0x5f3)][_0xf37040(0x872)]();_0x8adff2[_0xf37040(0x4b0)]();if(_0x6e037f)_0x32c5fb(_0x259440[_0xf37040(0x2c2)]['bind'](_0x259440),0x190);}}}}return _0x22263b;};(VisuMZ[_0x391453(0x1f6)][_0x391453(0x63e)][_0x391453(0x7e5)][_0x391453(0x74d)]??!![])&&($scene=null,VisuMZ[_0x391453(0x1f6)][_0x391453(0x75a)]=Scene_Base[_0x391453(0x307)][_0x391453(0x190)],Scene_Base[_0x391453(0x307)][_0x391453(0x190)]=function(){const _0x4a77e0=_0x391453;VisuMZ[_0x4a77e0(0x1f6)][_0x4a77e0(0x75a)]['call'](this),$scene=this;},$spriteset=null,VisuMZ[_0x391453(0x1f6)]['Scene_Map_createSpriteset']=Scene_Map[_0x391453(0x307)][_0x391453(0x713)],Scene_Map[_0x391453(0x307)][_0x391453(0x713)]=function(){const _0x5ceb50=_0x391453;VisuMZ['CoreEngine'][_0x5ceb50(0x7ca)]['call'](this),$spriteset=this[_0x5ceb50(0xde)];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x78b)]=Scene_Battle[_0x391453(0x307)][_0x391453(0x713)],Scene_Battle[_0x391453(0x307)][_0x391453(0x713)]=function(){const _0x4a0b58=_0x391453;VisuMZ[_0x4a0b58(0x1f6)][_0x4a0b58(0x78b)][_0x4a0b58(0xd0)](this),$spriteset=this[_0x4a0b58(0xde)];},VisuMZ[_0x391453(0x1f6)]['Scene_Base_terminate']=Scene_Base[_0x391453(0x307)][_0x391453(0x61c)],Scene_Base[_0x391453(0x307)][_0x391453(0x61c)]=function(){const _0x542c08=_0x391453;VisuMZ['CoreEngine'][_0x542c08(0x2cb)]['call'](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ[_0x391453(0x1f6)][_0x391453(0x616)]=BattleManager[_0x391453(0x8cf)],BattleManager['update']=function(_0x48ce9f){const _0x5c3c7f=_0x391453;VisuMZ['CoreEngine']['BattleManager_update'][_0x5c3c7f(0xd0)](this,_0x48ce9f),$subject=this[_0x5c3c7f(0x370)],$targets=this['_targets'],$target=this['_target']||this[_0x5c3c7f(0x47e)][0x0];},$event=null,VisuMZ['CoreEngine'][_0x391453(0x181)]=Game_Event[_0x391453(0x307)][_0x391453(0x440)],Game_Event[_0x391453(0x307)][_0x391453(0x440)]=function(){const _0x246819=_0x391453;VisuMZ[_0x246819(0x1f6)]['Game_Event_start'][_0x246819(0xd0)](this),$event=this;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x59b)]=Scene_Map[_0x391453(0x307)][_0x391453(0x8cf)],Scene_Map['prototype'][_0x391453(0x8cf)]=function(){const _0x28103a=_0x391453;VisuMZ[_0x28103a(0x1f6)][_0x28103a(0x59b)][_0x28103a(0xd0)](this),$gameMap[_0x28103a(0x1b3)]();},Game_Map[_0x391453(0x307)][_0x391453(0x1b3)]=function(){const _0x448126=_0x391453;if(!this[_0x448126(0x3b3)]()&&$event!==null){if(_0x448126(0x730)!==_0x448126(0x730)){_0x4debf6=_0x1c03bc(_0x1a613d||'')[_0x448126(0x448)]();const _0x1077ed=_0x1854aa['CoreEngine'][_0x448126(0x63e)][_0x448126(0x217)];if(_0xdd19b8===_0x448126(0x78c))return _0x505ecf[_0x448126(0x33d)][_0x448126(0x8a9)][0x0];if(_0xa1a8a6===_0x448126(0x2ed))return _0xaae026[_0x448126(0x33d)]['params'][0x1];if(_0x1641e8===_0x448126(0x958))return _0x41843a[_0x448126(0x33d)]['params'][0x2];if(_0x4f9caa==='DEF')return _0x57f0ba[_0x448126(0x33d)][_0x448126(0x8a9)][0x3];if(_0x4a6db9===_0x448126(0xd4))return _0x2ceab5['terms']['params'][0x4];if(_0x2213e7===_0x448126(0x591))return _0x1021b0[_0x448126(0x33d)][_0x448126(0x8a9)][0x5];if(_0x4f64f9===_0x448126(0x4be))return _0x5b25a1[_0x448126(0x33d)][_0x448126(0x8a9)][0x6];if(_0x451647===_0x448126(0x1b5))return _0x612392[_0x448126(0x33d)][_0x448126(0x8a9)][0x7];if(_0xbd9efd===_0x448126(0x420))return _0x1077ed[_0x448126(0x4d0)];if(_0x161540===_0x448126(0x64e))return _0x1077ed[_0x448126(0x81d)];if(_0x285d8f===_0x448126(0x83d))return _0x1077ed[_0x448126(0x88e)];if(_0x22b9ed===_0x448126(0x316))return _0x1077ed[_0x448126(0x888)];if(_0x55fd93===_0x448126(0x321))return _0x1077ed[_0x448126(0x605)];if(_0x1a3820===_0x448126(0x7d3))return _0x1077ed['XParamVocab5'];if(_0x5e1bf8===_0x448126(0x1e0))return _0x1077ed[_0x448126(0x1b4)];if(_0x1480f4===_0x448126(0x7e3))return _0x1077ed[_0x448126(0x1e8)];if(_0x24e6dd==='MRG')return _0x1077ed[_0x448126(0x153)];if(_0x6fe22===_0x448126(0x762))return _0x1077ed[_0x448126(0x1e2)];if(_0x4517a7===_0x448126(0x396))return _0x1077ed[_0x448126(0x5f0)];if(_0xb78b84==='GRD')return _0x1077ed[_0x448126(0x865)];if(_0x365d57==='REC')return _0x1077ed[_0x448126(0x20b)];if(_0x5253fb==='PHA')return _0x1077ed[_0x448126(0x72a)];if(_0xd69d55===_0x448126(0x5b3))return _0x1077ed[_0x448126(0x6b8)];if(_0x36675f===_0x448126(0x79f))return _0x1077ed[_0x448126(0x636)];if(_0x4a2101==='PDR')return _0x1077ed[_0x448126(0x771)];if(_0x34aa52===_0x448126(0x889))return _0x1077ed[_0x448126(0x830)];if(_0x302346==='FDR')return _0x1077ed[_0x448126(0x86f)];if(_0x133a08===_0x448126(0x18d))return _0x1077ed['SParamVocab9'];if(_0x49b356[_0x448126(0x1f6)][_0x448126(0x14c)][_0x16bcd1])return _0x5bf408[_0x448126(0x1f6)][_0x448126(0x14c)][_0x4dfb16];return'';}else $event=null;}},$commonEvent=function(_0x58dd2d){const _0x3ab64e=_0x391453;if($gameTemp)$gameTemp[_0x3ab64e(0x497)](_0x58dd2d);},$onceParallel=function(_0x4290f9){const _0x3fcbfc=_0x391453;if(SceneManager[_0x3fcbfc(0x90c)]())_0x3fcbfc(0x403)===_0x3fcbfc(0x3ec)?this[_0x3fcbfc(0x1fc)][_0x3fcbfc(0x39a)](_0x3f990e['layoutSettings']['StatusBgType']):$scene[_0x3fcbfc(0x816)](_0x4290f9);else{if(SceneManager[_0x3fcbfc(0x416)]()){if(Imported[_0x3fcbfc(0x78f)]){if(_0x3fcbfc(0x413)===_0x3fcbfc(0x6d8))return _0x3fec39&&_0x16e182[_0x3fcbfc(0x185)]&&_0x1e227b['note']['match'](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)?_0x7945d5(_0xec95f8['$1']):_0x3b0679[_0x3fcbfc(0x1f6)][_0x3fcbfc(0x63e)][_0x3fcbfc(0x7e5)][_0x3fcbfc(0x667)];else $scene[_0x3fcbfc(0x816)](_0x4290f9);}else{if($gameTemp&&$gameTemp['isPlaytest']()){if(_0x3fcbfc(0x3f2)!==_0x3fcbfc(0x4dd))alert(_0x3fcbfc(0x6bd));else{if(this[_0x3fcbfc(0x66e)]===_0x3fcbfc(0x64d)&&!_0x520602[_0x3fcbfc(0x7f9)]())return;if(_0x1e4a12[_0x3fcbfc(0x27e)]())return;_0x2cf9fa['CoreEngine'][_0x3fcbfc(0x689)][_0x3fcbfc(0xd0)](this,_0x3476a1),this[_0x3fcbfc(0x28d)](_0x3fcbfc(0x75d));}}}}else $gameTemp&&$gameTemp[_0x3fcbfc(0x4a5)]()&&alert(_0x3fcbfc(0x203));}});function _0x5dfb(){const _0x103deb=['scaleY','isInputting','commandWindowRect','itypeId','F22','\x20Origin:\x20%1','createTroopNote','uiAreaHeight','tileHeight','contentsOpacity','KeySHIFT','getLastUsedGamepadType','》Comment《\x0a%1\x0a','BasicParameterFormula','mukAA','processFauxAnimationRequests','drawBackground','ZmqJy','startAnimation','update','checkCacheKey','loadTitle2','RgkvB','Scene_Battle_createSpriteset_detach','nah','adjustBoxSize','button','EQUAL','Y:\x20%1','wSDoU','Bitmap_drawCircle','_shakeSpeed','hIugl','xScrollLinkedOffset','repositionEnemiesByResolution','State-%1-%2','aAzXF','drawCharacter','needsUpdate','Game_Troop_setup','textWidth','refresh','animationId','Padding','height','Match','PGUP','prayR','ShowButtons','Scene_Boot_onDatabaseLoaded','_inputString','forceStencil','createCustomBackgroundImages','outbounce','SnapshotOpacity','makeTargetSprites','RequireFocus','Window_Base_drawIcon','createCustomParameter','wcLwu','pan','addChild','_battlerName','openness','USBXK','LaBvN','wsjzr','OUTCIRC','goto','XDGJA','_lastCommandSymbol','setSize','updatePlayTestF7','buttonAssistKey2','Skill-%1-%2','arePageButtonsEnabled','itemEva','_scaleY','isEventTest','Sprite_Button_updateOpacity','isSceneMap','Speed','AjZGN','_buyWindow','xparamFlat2','ExtractStrFromMap','drawIcon','_offsetX','contains','QmpsB','rWqrN','INELASTIC','TAB','_lastX','setHandler','evade','helpAreaHeight','INOUTBACK','Game_Action_setAttack','VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2','measureTextWidthNoRounding','_buttonAssistWindow','bind','isNextScene','SwitchToggleOne','adjustPictureAntiZoom','sparamFlat1','buttonAssistText3','%1〘Choice\x20%2〙\x20%3%1','Wait','StatusParamsRect','_displayY','jsQuickFunc','buttonAssistKey3','CustomParamAbb','SystemSetSideView','_storedStack','pagedownShowButton','IconSParam4','max','gjWMt','Control\x20Variables\x20Script\x20Error','animations','GtOVU','DimColor1','OptionsBgType','isSmartEventCollisionOn','EXSEL','strokeRect','EISU','_loadingState','ColorDeath','NEAREST','xparamRateJS','cJGql','drawFace','INSINE','createCancelButton','AccuracyBoost','UplfJ','createBackground','_stored_powerUpColor','imageSmoothingEnabled','createButtonAssistWindow','movePageButtonSideButtonLayout','EndingID','setAction','createCommandWindow','F19','Weapon-%1-%2','dKSNQ','hhSnW','Opacity','startNormalGame','Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','setupFont','ATK','layoutSettings','Mirror','hpGaugeColor1','targetContentsOpacity','TkMax','traitsPi','1.4.4','_pageupButton','xparamPlus2','CLOSE_CURLY_BRACKET','NJQsG','playTestF7','call','touchUI','maxCols','NoBnD','MAT','Game_Picture_scaleY','GoldRect','VisuMZ_2_BattleSystemFTB','xkuHI','isActor','charAt','initCoreEngineScreenShake','getColorDataFromPluginParameters','getInputMultiButtonStrings','_spriteset','Window_NameInput_processTouch','RMXvj','setupValueFont','ZWXPD','wDqXH','QhoMQ','SceneManager_initialize','〘Show\x20Text〙\x0a','bDsnw','ActorTPColor','KeyItemProtect','replace','checkSubstitute','_coreEasing','ListRect','_drawTextShadow','ButtonHeight','XBkVn','Game_Picture_calcEasing','TranslucentOpacity','yWSdw','bgsVolume','Sprite_Button_initialize','isUseModernControls','_screenX','atypeId','innerWidth','setClickHandler','PreserveNumbers','skipBranch','dimColor1','htonu','playCancel','parallaxes','wtTsb','BattleSystem','_lastY','Upper\x20Left','NUMPAD3','_centerElementCoreEngine','ControllerButtons','DummyBgType','processDigitChange','CategoryRect','SceneManager_exit','IvbXb','ItemBackColor2','usPqS','RevertPreserveNumbers','setViewport','Scene_Title_drawGameTitle','BannedWords','WIN_OEM_FJ_JISHO','catchException','anchorCoreEasing','connected','duration','buttonAssistOffset5','nickname','pointY','Window_Base_drawFace','saveViewport','dRPGT','mpCostColor','Duration','ColorSystem','Window_Base_initialize','PwhRL','updateBackOpacity','EditBgType','pXEcN','INOUTBOUNCE','ceil','Game_Map_scrollLeft','origin','_startLoading','NUMPAD5','ExtractStrFromTroop','ExportCurTroopText','process_VisuMZ_CoreEngine_jsQuickFunctions','processMoveCommand','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','exportAllMapStrings','MtEQz','eventsXyNt','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>','value','maxGold','Scene_Base_terminateAnimationClearBugFix','Nssjq','_slotWindow','DGSBZ','OpenURL','INSERT','match','ScreenResolution','updatePositionCoreEngineShakeVert','ColorGaugeBack','_list','oNFOY','_tempActor','_isButtonHidden','currentClass','storeMapData','setActionState','NumberBgType','QLdPN','opacity','uiAreaWidth','CustomParamNames','paramMaxJS','anchor','_refreshPauseSign','darwin','command122','NoTileShadows','XParamVocab8','updateOnceParallelInterpreters','Type','_stored_normalColor','createJsQuickFunction','isExpGaugeDrawn','valueOutlineWidth','startShake','maxTurns','updatePositionCoreEngineShakeHorz','gold','Game_Interpreter_command355','lCOZi','Bitmap_blt','_logWindow','KANA','loadGameImagesCoreEngine','bCMDq','render','updatePictureCoordinates','KeyUnlisted','equips','down','IconParam2','DFgsT','createMenuButton','drawTextTopAligned','DefaultMode','cursorUp','processCursorMoveModernControls','ParseStateNotetags','mainAreaBottom','OutlineColor','eRHAR','F23','setCoreEngineScreenShakeStyle','restore','iconWidth','sparamPlus1','inBattle','UpdatePictureCoordinates','isTouchedInsideFrame','parameters','onKeyDown','ylQDe','onLoad','Game_Event_start','_commonEventLayers','rHeol','mSaHv','note','Input_onKeyDown','jZqvy','buttonAssistCancel','ALTGR','Scene_Shop_create','paramBaseAboveLevel99','_pictureCoordinatesMode','EXR','Renderer','_windowskin','create','DashToggleR','yScrollLinkedOffset','removeChild','_actor','scrollUp','NSNaY','xGJyb','KEEP','useDigitGrouping','playOk','getButtonAssistLocation','jKFmx','ParseSkillNotetags','fHSnF','abs','GoldBgType','levelUp','_texture','adjustSprite','initCoreEasing','min','setSkill','SystemLoadImages','buttonAssistKey%1','vertical','PixelateImageRendering','blockWidth','image-rendering','OPEN_PAREN','ARRAYEVAL','_stored_mpGaugeColor1','_digitGroupingEx','Game_Interpreter_PluginCommand','_showDevTools','updateCurrentEvent','XParamVocab6','LUK','home','substring','startMove','filters','bitmapHeight','powerDownColor','buttonAssistText1','%1\x0a','ColorMaxLvGauge1','NumberRect','ExportStrFromAllMaps','getGamepads','moveMenuButtonSideButtonLayout','mhp','subtitle','_changingClass','TextCodeNicknames','ConvertNumberToString','Input_update','hpTFF','Script\x20Call\x20Error','PThcC','animationShouldMirror','_editWindow','setActorHome','concat','_sideButtonLayout','isGamepadAxisMoved','numberShowButton','DDzqe','printError','playLoad','getColor','PDR','process_VisuMZ_CoreEngine_Notetags','parse','isAlive','outlineColorGauge','resetFontSettings','sv_enemies','contents','【%1】\x0a','CNT','isGamepadButtonPressed','XParamVocab9','createFauxAnimation','HkHGD','mpXgO','cOAmc','Window_Selectable_cursorDown','XParamVocab7','MenuLayout','useDigitGroupingEx','easingType','WIN_OEM_ENLW','scrollRight','resetTextColor','clearForcedGameTroopSettingsCoreEngine','eva','JjqSN','removeOnceParallelInterpreter','_goldWindow','updateWaitMode','_active','CoreEngine','REC','isInstanceOfSceneMap','keyMapper','SyGqg','ColorPowerDown','_statusWindow','WindowLayer_render','QoyoD','zIxXD','operation','Rate1','pictureId','This\x20scene\x20cannot\x20utilize\x20a\x20Once\x20Parallel!','COLON','windowRect','yGEfm','_onKeyPress','_sellWindow','scrollDown','ARRAYFUNC','SParamVocab2','repositionCancelButtonSideButtonLayout','_clientArea','createKeyJS','VisuMZ_2_BattleSystemPTB','_playTestFastMode','_timerSprite','《《《\x20Page\x20%1\x20》》》\x0a%2\x0a','round','Game_Picture_move','Scene_Menu_create','getKeyboardInputButtonString','Param','OkText','xdg-open','dummyWindowRect','MenuBg','_commandWindow','GetParamIcon','calcCoreEasing','_currentBgm','Sprite_AnimationMV_updatePosition','_scaleX','_stored_tpGaugeColor1','Window_Gold_refresh','enable','orYGT','QUOTE','FIwPe','profileWindowRect','Flat2','gKfAo','JLcMN','kqTno','ColSpacing','Class-%1-%2','ParseAllNotetags','font','textBaseline','processHandling','drawActorClass','processCursorHomeEndTrigger','qquHR','_context','ColorCTGauge1','IconParam0','_skillTypeWindow','random','_cache','deactivate','DOUBLE_QUOTE','CustomParam','_originalViewport','hit','expGaugeColor1','_destroyInternalTextures','kfZTs','mainAreaTop','_duration','changeClass','cos','MrZlz','DetachMapPictureContainer','EREOF','getBattleSystem','buttonY','CommandList','DefaultStyle','JUNJA','item','playBuzzer','charCode','mainAreaHeightSideButtonLayout','_scene','F24','battleSystem','updateClose','processSoundTimings','_movementWholeDuration','mmp','blt','KOzbI','BgType','getControllerInputButtonMatch','keyRepeatWait','SParamVocab9','pop','Window_NameInput_cursorRight','Game_Action_itemEva','RegExp','exp','makeDocumentTitle','CustomParamType','push','drawParamName','tlWGJ','setupCoreEasing','onActorChange','EVAL','Sprite_Picture_updateOrigin','_targetOpacity','_maxDigits','CommandWidth','OUTSINE','isTpb','([\x5c+\x5c-]\x5cd+)>','ExtDisplayedParams','_movementDuration','targetY','autoRemovalTiming','BwrhD','luxiv','IconSParam1','Graphics_centerElement','isDying','isNumpadPressed','Bitmap_gradientFillRect','Scene_Map_updateScene','_currentBgs','WIN_OEM_CUSEL','cFoWy','displayName','sparamPlusJS','Sprite_Gauge_gaugeRate','Game_Picture_scaleX','itemHeight','QUESTION_MARK','toLowerCase','Title','getInputButtonString','switchModes','isPointAnimationPlaying','mrbPm','kUilR','_backSprite1','vWFoJ','CrisisRate','drawTextEx','YCQTZ','IconParam1','makeEncounterCount','defineProperty','WDBUn','EIlrI','RCdxd','_mirror','itemPadding','JrBZQ','sceneTerminationClearEffects','allTiles','QEqIh','_isPlaytest','turn','GRD','hideButtonFromView','status','centerY','innerHeight','worldTransform','currentValue','TRAIT_PARAM','scale','IconIndex','flush','OutlineColorDmg','WIN_OEM_FJ_LOYA','_inputSpecialKeyCode','sparam','_displayX','up2','Location','SUBTRACT','gQphZ','updateCoreEasing','Item-%1-%2','MWdtZ','setEasingType','BottomHelp','getBackgroundOpacity','gainSilentTp','3808304tcgeNF','Map%1.json','〘Common\x20Event\x20%1:\x20%2〙\x20Start','focus','cursorPageup','\x5c}❪SHIFT❫\x5c{','applyEasing','actorWindowRect','statusEquipWindowRect','loadBitmap','mainAreaTopSideButtonLayout','Window_Base_createTextState','Scene_Base_terminate','Game_Interpreter_command111','BACKSPACE','getPointAnimationLayer','cursorPagedown','ctrl','Game_Interpreter_command122','App','_stored_pendingColor','_statusEquipWindow','initBasic','Scene_Equip_create','Aynwc','XqxIU','initialLevel','moveCancelButtonSideButtonLayout','bRrDC','clearOnceParallelInterpreters','centerCameraCheckData','pow','updatePositionCoreEngineShakeOriginal','Game_Actor_paramBase','GroupDigits','_hp','paramPlus','initVisuMZCoreEngine','OPEN_CURLY_BRACKET','Game_Picture_y','removeAnimation','_gamepadWait','WIN_OEM_FJ_TOUROKU','xparamPlus1','NUMPAD8','AnimationPoint','MAXMP','BAjnH','processKeyboardHandling','setAnchor','Keyboard','_data','areButtonsHidden','kNFGB','_statusParamsWindow','RPGMAKER_VERSION','JpmgN','_colorTone','XParameterFormula','HelpRect','PositionY','mobKd','ColorTPGauge2','commandWindowRows','drawGoldItemStyle','CommandRect','rxgPl','fromCharCode','(\x5cd+)>','LEFT','_backSprite2','InputBgType','prototype','isAnimationOffsetXMirrored','isMaxLevel','NUMPAD2','kiMdR','playCursorSound','BgFilename1','indexOf','AanFU','efqwU','_cacheScaleX','DATABASE','mMJfO','advanced','BackOpacity','CEV','offsetX','Input_setupEventHandlers','playBgm','BTestWeapons','Window_MapName_refresh','WsbdE','JvOVI','powerUpColor','context','aAwut','MEV','SParameterFormula','tvemA','OUTQUAD','updateFauxAnimations','aIoFI','fillRect','BlurStrength','qDGxz','MVvgk','Scene_Name_create','itemSuccessRate','aFYtf','ColorHPGauge1','name','_phase','cancel','_encounterCount','en-US','LINEAR','ExtractStrFromList','animationBaseDelay','_onceParallelInterpreters','ShDjV','mev','redraw','Sprite_Actor_setActorHome','oPwEt','terms','right','PnuqT','VOLUME_MUTE','Scene_Battle_createSpritesetFix','_setupEventHandlers','processKeyboardDelete','itemHit','applyCoreEasing','createPointAnimationSprite','ParseTilesetNotetags','OpenConsole','constructor','cbxeP','OUTQUART','type','reduce','MAX_GL_TEXTURES','isItemStyle','NewGameCommonEvent','XParamVocab5','win32','ShopMenu','drawActorExpGauge','isMVAnimation','CodeJS','IconXParam8','removeAnimationFromContainer','GoldOverlap','SystemSetBattleSystem','Abbreviation','randomInt','showFauxAnimations','updateMove','Linear','sqrt','oJxyq','ParamArrow','areButtonsOutsideMainUI','setupButtonImage','isSideButtonLayout','TitleCommandList','Scene_Skill_create','MINUS','nw.gui','Mute','removeFauxAnimation','pTlpo','twRaU','numRepeats','_targetY','_subject','updateMainMultiply','_storedMapText','setHome','processTouchModernControls','alphabetic','MODECHANGE','drawParamText','deflate','Scene_Boot_startNormalGame','RdCxn','_drawTextOutline','playTestF6','Plus1','PictureID','LOjQf','position','ZDbdx','isRepeated','OUTELASTIC','Graphics_defaultStretchMode','FadeSpeed','updatePosition','ShowActorLevel','SwitchActorText','EqfoC','OKsMG','processAlwaysEscape','setViewportCoreEngineFix','asin','CategoryBgType','fillText','MRG','Total','Unnamed','rfsDx','move','isRightInputMode','TGR','ButtonFadeSpeed','ColorMPGauge2','Sprite_Animation_setViewport','setBackgroundType','ShowDevTools','applyForcedGameTroopSettingsCoreEngine','PHA','UAPgX','AgoTt','maxLvGaugeColor1','_commandList','startAutoNewGame','isMagical','_menuButton','_stored_maxLvGaugeColor2','Spriteset_Base_update','buttonAssistOffset1','PIPE','_CoreEngineSettings','zugdG','ProfileBgType','initMembers','eruzM','TntiL','_paramPlus','FontShadows','activate','gpxQQ','isEventRunning','VisuMZ_2_BattleSystemETB','doesNameContainBannedWords','setBattleSystem','helpWindowRect','popScene','scaleSprite','stringKeyMap','_targetAnchor','Bitmap_measureTextWidth','SwitchRandomizeOne','process_VisuMZ_CoreEngine_Functions','openURL','initDigitGrouping','buttonAssistWindowButtonRect','randomJS','gtFxk','PrdEB','CANCEL','TextFmt','KeyTAB','LhRqk','Center','windowOpacity','and\x20add\x20it\x20onto\x20this\x20one.','targetOpacity','destroyCoreEngineMarkedBitmaps','tjgqq','code','VBSHi','buttonAssistText5','_forcedBattleSys','Graphics','itemBackColor2','oKKMI','buttonAssistOk','gameTitle','listWindowRect','Scene_Battle_update','SubfolderParse','eONaR','VvCVO','isAnimationForEach','DQJFf','STENCIL_TEST','WczWQ','BaseTexture','font-smooth','ctGaugeColor1','bitmap','ETB','loadSystem','forceOutOfPlaytest','Graphics_printError','outlineColor','gaugeHeight','HelpBgType','HFbBQ','Window_EquipItem_isEnabled','Scene_Map_createSpriteset_detach','repeat','eOHrs','Game_Map_scrollRight','pERji','RowSpacing','CLEAR','XmMZB','FTsgY','buttonAssistKey1','setBackgroundOpacity','itemRect','NUMPAD4','index','WfUrF','iwyCM','includes','_itemWindow','processTimingData','TextStr','Troop%1','TwxRw','0.00','Game_Actor_changeClass','createPointAnimationQueue','uHYSO','Window_NameInput_refresh','zxDMA','VariableEvalReference','children','ELYwW','xparamRate1','iZVAM','_makeFontNameText','mTLLs','Origin','Sprite_Battler_startMove','mLlmp','Game_Action_itemHit','show','isSceneBattle','kLhZG','Game_Action_numRepeats','getParameter','ParseItemNotetags','$dataMap','fprKj','isClosed','(\x5cd+)([%％])>','ExportAllMapText','HIT','normal','reservePlayTestNewGameCommonEvent','sellWindowRect','gFPQd','_digitGrouping','VisuMZ_2_BattleSystemOTB','_coreEngineShakeStyle','DigitGroupingStandardText','textSizeEx','_updateFilterArea','mpColor','hcIQs','dimColor2','VsQUw','menu','ShowItemBackground','pictureButtons','itemLineRect','_optionsWindow','hasEncryptedImages','Scene_Map_createSpritesetFix','suYJP','markCoreEngineModified','bgs','《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a','integer','LclXN','ESC','ImprovedAccuracySystem','drawActorSimpleStatus','addWindow','start','%1:\x20Exit\x20','initCoreEngine','_moveEasingType','command105','X:\x20%1','makeActionList','F18','toUpperCase','\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','SkillMenu','setupCustomRateCoreEngine','_actorWindow','isOpen','targetPosition','statusParamsWindowRect','EXHTm','DocumentTitleFmt','ControllerMatches','LoadError','_isWindow','OApTw','_pictureCoordinatesWindow','IconSParam5','paramchangeTextColor','enemy','BTestItems','PA1','sparamPlus','MOuTw','TgToP','TILDE','setMainFontSize','SideButtons','Max','cursorLeft','processBack','tezCm','nrPZN','updateTransform','level','HjJqn','xparamFlatBonus','ParseArmorNotetags','paramRateJS','translucentOpacity','WIN_ICO_00','Game_Picture_show','updateLastTarget','_colorCache','writeFile','itemWindowRect','DigitGroupingGaugeSprites','_realScale','ulZuT','_bgmBuffer','IDs','EnableMasking','gaugeRate','learnings','areTileShadowsHidden','IconXParam5','_targets','KukIt','GoldIcon','FLsKa','_coreEasingType','qAtOQ','bmgNB','1.3.0','alpha','filter','FTB','IcrGf','_rate','sparamPlus2','map','globalAlpha','skillTypes','HASH','endBattlerActions','scrollLeft','mainFontSize','etypeId','drawCircle','UPiDO','IconSParam0','reserveCommonEvent','Game_Map_scrollDown','initialBattleSystem','playMiss','CONTEXT_MENU','gradientFillRect','Scene_MenuBase_createPageButtons','HqHdB','string','isOptionValid','changeTextColor','updateShadow','MBfJX','OUTCUBIC','isPlaytest','process_VisuMZ_CoreEngine_ControllerButtons','xparamFlat1','createFauxAnimationSprite','RVENQ','IconSParam9','numberWindowRect','process_VisuMZ_CoreEngine_CustomParameters','EditRect','BattleManager_processEscape','performEscape','showDevTools','length','IconXParam7','AudioChangeBgmVolume','REPLACE','Window_Selectable_cursorUp','SPBCb','_pollGamepads','Game_BattlerBase_initMembers','F21','GET','RepositionEnemies','FINAL','_hideButtons','AGI','resetBattleSystem','DigitGroupingExText','QGXHg','VOLUME_UP','INQUINT','Input_shouldPreventDefault','defaultInputMode','wait','targetScaleY','updateBgmParameters','enter','ljwgO','ColorExpGauge1','getLevel','uqRaO','NDAHC','orAsT','XParamVocab0','yHzGU','isPressed','sparamRate','stencilFunc','_profileWindow','DyDPG','_baseSprite','tilesets','Plus2','drawItem','calcEasing','%1〘Choice\x20Cancel〙%1','ljIbs','_categoryWindow','isMenuButtonAssistEnabled','tileWidth','JnUAn','setMoveEasingType','INEXPO','checkPassage','select','xparamPlus','Bitmap_strokeRect','kgVPh','DamageColor','titles1','STR','setValue','jboxN','cursorRight','createEnemies','_pictureContainer','_registerKeyInput','_bgsBuffer','initialize','INQUAD','Power','exit','events','tab','ENTER','SellBgType','Scene_Map_createMenuButton','ARRAYJSON','log','NZWHL','floor','number','Window_NameInput_cursorPagedown','28wFpHrx','sv_actors','addOnceParallelInterpreter','RcsPg','isKeyItem','buttonAssistWindowSideRect','OptionsMenu','ASTERISK','param','lastAnimationSprite','VOLUME_DOWN','batch','setupCoreEngine','DisplayLockX','WASD','makeDeepCopy','CommonEventID','dFyfo','targetScaleX','endAnimation','pages','F14','moveRelativeToResolutionChange','targetBackOpacity','_viewportSize','refreshActor','ItemPadding','_clickHandler','INOUTQUART','alwaysDash','_stored_crisisColor','ColorManager_loadWindowskin','_defaultStretchMode','ONE','helpAreaTop','NewGameCommonEventAll','createPageButtons','isItem','Window_StatusBase_drawActorSimpleStatus','RqPeF','drawAllParams','updateKeyText','resize','YEdJL','platform','Icon','quit','wholeDuration','Game_Character_processMoveCommand','maxLevel','DebugConsoleLastControllerID','isBusy','loadIconBitmap','PqboD','slice','buttonAssistWindowRect','destroy','isEnabled','style','getCustomBackgroundSettings','_inputWindow','isMaskingEnabled','Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages','FUNC','ParseEnemyNotetags','vkEyp','_image','BuyRect','setActorHomeRepositioned','JLCkP','onButtonImageLoad','Sprite_Animation_processSoundTimings','_stored_deathColor','_refreshArrows','TimeProgress','encounterStepsMinimum','Sprite_Gauge_currentValue','_pressed','gaugeLineHeight','iconHeight','title','requestPointAnimation','ExportStrFromAllTroops','Sprite_Picture_loadBitmap','processKeyboardDigitChange','uOmSt','subjectHitRate','rYNVv','transform','_number','pos','Game_BattlerBase_refresh','_pagedownButton','Manual','PLAY','shift','CyJkK','aHJTe','successRate','categoryWindowRect','bcnKb','isEnemy','F16','paramValueByName','_targetScaleX','targetObjects','_blank','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','isMapScrollLinked','GrjPH','makeCoreEngineCommandList','PositionJS','gNfpB','command355','39441quNOfT','openingSpeed','evaluate','setAttack','atbActive','_lastGamepad','SLEEP','isPhysical','VisuMZ_2_BattleSystemBTB','aspkJ','Symbol','_stored_mpGaugeColor2','retreat','SystemSetWindowPadding','Scene_Status_create','text%1','createTextState','Game_System_initialize','boxHeight','qxRfh','findSymbol','Cumlo','pszqB','ItemMenu','pictures','object','setGuard','_startPlaying','updateOrigin','MDF','paramMax','Scene_Options_create','isGamepadConnected','onload','viewport','goldWindowRect','escape','Game_Screen_initialize','Game_Picture_updateMove','Scene_Map_update','_upArrowSprite','renderNoMask','445PanXcl','#%1','return\x200','drawCurrencyValue','_onKeyDown','_tilemap','tpGaugeColor1','iECSk','FontWidthFix','SHIFT','Sriom','xgiqF','([\x5c+\x5c-]\x5cd+)([%％])>','_pointAnimationQueue','MGQiA','_downArrowSprite','format','createPointAnimationTargets','OnLoadJS','IsRHq','VariableJsBlock','MCR','animationNextDelay','_lastOrigin','INOUTEXPO','Scene_MenuBase_mainAreaTop','_numberWindow','_drawTextBody','mapId','pixelated','Scene_MenuBase_createCancelButton','FMTbC','F20','Window_NameInput_cursorUp','BattleManager_checkSubstitute','efWjB','Scene_Map_initialize','uSNwi','qqPYz','itemBackColor1','Plus','VisuMZ_2_BattleSystemSTB','FDR','TjvFA','xparam','updateAnchor','checkCoreEngineDisplayCenter','MultiKeyFmt','neBHy','buttonAssistText%1','createDigits','LESS_THAN','VisuMZ_2_BattleSystemCTB','clamp','Scene_Battle_createCancelButton','Window_NameInput_cursorPageup','%1/','mute','GREATER_THAN','fcQZu','GoldMax','_origin','GAXes','centerX','Game_Party_consumeItem','seVolume','dashToggle','OfLFD','_shouldPreventDefault','_onError','runCombinedScrollingTextAsCode','YlcAw','Scene_Item_create','_lastPluginCommandInterpreter','hiuZI','_centerCameraCheck','BTestArmors','bgmVolume','Window_Selectable_processTouch','STB','encounterStep','KxpnQ','SParamVocab0','characters','Game_Action_updateLastTarget','Window','WBrxz','seek','SLpyn','Hgdpl','Rate2','CreateBattleSystemID','WIN_OEM_JUMP','buttonAssistOffset2','xparamRate2','Window_NameInput_cursorLeft','jEaha','knBlc','menuShowButton','Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','refreshWithTextCodeSupport','Bitmap_initialize','paramRate2','XParamVocab4','foXOL','_fauxAnimationSprites','nJWsh','onXhrError','enemies','clipboard','CallHandlerJS','_scrollDuration','save','WIN_OEM_AUTO','mainAreaHeight','FunctionName','JSON','_stored_tpGaugeColor2','createChildSprite','gainItem','BattleManager_update','isCollidedWithEvents','ParseClassNotetags','yPkxr','loadSystemImages','Window_Base_update','terminate','subject','updateOpacity','QfRXb','sparamFlat2','active','overrideMimeType','ImgLoad','test','SCALE_MODES','Scene_MenuBase_createBackground','38982itEDWr','onerror','_offsetY','createWindowLayer','rgba(0,\x200,\x200,\x200.7)','buttonAssistKey4','data/','fJwJr','VIEWPORT','targetX','IconXParam4','isCursorMovable','Scene_MenuBase_helpAreaTop','EscapeAlways','Enable','SParamVocab5','BTB','createPointAnimation','OsFtC','updatePictureAntiZoom','pofup','OzuRl','UBjfk','Settings','gaugeBackColor','_url','ScreenShake','Scene_Map_updateMain','updateData','HAEYD','oEZYb','currencyUnit','ZjTQe','isForFriend','cursorDown','textColor','oxLnW','ALT','keyboard','EVA','canUse','_startDecrypting','PositionX','selectLast','GoldFontSize','sDHHK','sparamRate1','displayX','nextLevelExp','_animation','updateMain','StatusMenu','ZlLnb','CommandBgType','Wndfq','Window_NumberInput_start','IconXParam0','NnNjk','_currentMap','_action','setFrame','Basic','pitch','GJYvv','EncounterRateMinimum','Chance','MainMenu','Game_Map_scrollUp','SkillTypeBgType','itemHitImprovedAccuracy','_baseTexture','_mode','_stored_mpCostColor','Spriteset_Battle_createEnemies','SEPARATOR','FWThu','Sprite_AnimationMV_processTimingData','requestMotion','center','deNif','FHnps','SaveMenu','currentLevelExp','drawGameVersion','LineHeight','list','F7key','ShowJS','MvAnimationRate','drawBackgroundRect','EnableNameInput','ApplyEasing','AVXOh','Scene_Name_onInputOk','IconXParam1','WIN_OEM_BACKTAB','sMYbL','ExportString','Window_NameInput_cursorDown','_cancelButton','Map%1','Gmynd','end','DTB','362985YURqdB','Scene_MenuBase_mainAreaHeight','IconSet','IconSParam6','fadeSpeed','deselect','IconXParam2','createAnimationSprite','updateDashToggle','getLastPluginCommandInterpreter','rowSpacing','WpqlS','_hideTileShadows','IconParam7','down2','toFixed','ColorNormal','setSideView','getCoreEngineScreenShakeStyle','Scene_Unlisted','pageup','onDatabaseLoaded','onInputBannedWords','7080390DNmGWh','maxLvGaugeColor2','_helpWindow','AMPERSAND','loading','AllMaps','ActorRect','textAlign','INOUTQUINT','Window_Base_drawText','catchUnknownError','getControllerInputButtonString','Pixelated','command111','_mp','initButtonHidden','smoothSelect','UNDERSCORE','SParamVocab4','Window_StatusBase_drawActorLevel','ZERO','Bitmap_drawText','_opacity','Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!','isNormalPriority','OUTEXPO','QgMOW','setTargetAnchor','PictureEraseRange','Game_Map_setup','kLyxK','PRINT','stencilOp','HOME','UKvYX','StatusRect','_screenY','Spriteset_Base_updatePosition','_troopId','bDqnX','_addShadow','eqPqS','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','<%1\x20%2:[\x20]','_stored_gaugeBackColor','volume','_opening','isNwjs','NONCONVERT','Window_NameInput_processHandling','nXQFt','ItemStyle','_dimmerSprite','vQIkm','maxBattleMembers','setLastPluginCommandInterpreter','removePointAnimation','members','stypeId','WIN_OEM_FINISH','Window_NameInput_initialize','RBDva','VkSXu','ZOOM','_updateGamepadState','setWindowPadding','setup','SwitchToggleRange','Gold','performMiss','toLocaleString','createFauxAnimationQueue','ColorMPCost','DsxhM','coreEngineRepositionEnemies','paramY','setupRate','TextJS','actor','PTB','MlyNm','ValueJS','cEhmB','setMute','zoomScale','Game_Temp_initialize','onEscapeSuccess','makeInputButtonString','rightArrowWidth','vKlJm','_pictureName','IconSParam7','_width','ParseActorNotetags','_shakeDuration','pagedown','DimColor2','_listWindow','ButtonAssist','Layer','showPointAnimations','_stored_powerDownColor','Input_clear','removeAllPointAnimations','_stored_ctGaugeColor1','xparamFlatJS','PGDN','rcggi','IconXParam6','createSpriteset','vagEG','ONE_MINUS_SRC_ALPHA','_backgroundSprite','top','drawIconBySize','catchNormalError','dZXRb','DEF','Game_Picture_initBasic','loadMapData','setupNewGame','LOruD','_dummyWindow','faces','drawGameSubtitle','_playtestF7Looping','_targetX','PLUS','StartID','RyQON','Game_Event_isCollidedWithEvents','INOUTCIRC','SParamVocab3','sin','ItemRect','pendingColor','BlurFilter','updateOpen','WLUcd','VodFT','version','pointX','isAnimationPlaying','blendFunc','ColorCrisis','IoFzC','SceneManager_isGameActive','cancelShowButton','ALWAYS','231iFuOSM','valueOutlineColor','_stored_hpGaugeColor1','keypress','ARRAYNUM','INOUTQUAD','_effectsContainer','Scene_Boot_loadSystemImages','kxfhe','parseForcedGameTroopSettingsCoreEngine','〘Common\x20Event\x20%1:\x20%2〙\x20End','DisplayLockY','mirror','useFontWidthFix','_smooth','Mtoat','endAction','bitmapWidth','ShortcutScripts','UMxwi','maxTp','DOWN','setTopRow','ColorExpGauge2','drawNewParam','paramWidth','AudioChangeBgmPan','backOpacity','MIN_SAFE_INTEGER','bvkMF','hpColor','Scene_Base_create','F12','pxFEB','default','F17','BlendMode','VisuMZ_1_OptionsCore','UCRmw','TRG','_repositioned','cJGhV','isFauxAnimationPlaying','slsBd','CTB','Game_Interpreter_updateWaitMode','RepositionEnemies130','Window_Selectable_itemRect','Spriteset_Base_isAnimationPlaying','_pointAnimationSprites','drawGameTitle','setSideButtonLayout','processTouch','guardSkillId','SParamVocab6','loadWindowskin','isGamepadTriggered','OPEN_BRACKET','_destroyCanvas','SkillTypeRect','CONVERT','_muteSound','SceneManager_onKeyDown','isWindowMaskingEnabled','evaded','Scene_Boot_updateDocumentTitle','buttonAssistOffset4','oYZhf','noykt','trim','ParseWeaponNotetags','lineHeight','isSideView','setupBattleTestItems','setCoreEngineUpdateWindowBg','width','padding','SEMICOLON','processPointAnimationRequests','MCZqx','Scene_Battle_createSpriteset','MAXHP','battlebacks2','img/%1/','VisuMZ_1_BattleCore','AnimationID','buttonAssistOffset%1','paramRate1','WIN_OEM_CLEAR','_bitmap','CIRCUMFLEX','177430DpJyRX','WIN_OEM_RESET','PictureCoordinatesMode','〘Scrolling\x20Text〙\x0a','ColorTPCost','targetEvaRate','PdHFP','oAikJ','TextCodeClassNames','TCR','3pAzZNQ','paramX','Show\x20Scrolling\x20Text\x20Script\x20Error','addCommand','numActions','exec','POpsi','updateEffekseer','helpAreaTopSideButtonLayout','paramFlatBonus','paramPlusJS','expGaugeColor2','Game_Picture_x','picture','fIJRj','_customModified','process_VisuMZ_CoreEngine_Settings','axes','INQUART','battlebacks1','UDJwf','padZero','DrawItemBackgroundJS','ScaleX','BKZQA','fyckI','ATTN','IFXti','scaleMode','createTitleButtons','Bitmap_clearRect','wtypeId','TextManager_param','requiredWtypeId1','backgroundBitmap','ActorMPColor','deathColor','processCursorMove','Smooth','textHeight','URL','_targetScaleY','Scene_Map_createSpriteset','hpGaugeColor2','F13','addAnimationSpriteToContainer','OTB','ZeOAD','gYeuT','traitObjects','UQYyH','MRF','open','exportAllTroopStrings','INOUTCUBIC','Rate','_forcedTroopView','%1〘End\x20Choice\x20Selection〙%1','_height','remove','onInputOk','isTriggered','updatePointAnimations','usableSkills','CAPSLOCK','contentsBack','drawValue','HRG','registerCommand','QoL','helpAreaBottom','CustomParamIcons','NUM','BACK_SLASH','requestFauxAnimation','sVvws','_backgroundFilter','DisplayedParams','ZKaUT','SPACE','StatusEquipRect','clearRect','LSTpP','Spriteset_Base_initialize','isOpenAndActive','RWogw','buttonAreaHeight','TitlePicButtons','KMFUP','isArrowPressed','key%1','updateDocumentTitle','AudioChangeBgmPitch','_targetOffsetX','maxItems','retrieveFauxAnimation','LevelUpFullHp','END','VOzrb','Exported_Script_%1.txt','Window_Selectable_processCursorMove','disable','optSideView','playCursor','_pauseSignSprite','drawText','_windowLayer','description','WIN_ICO_HELP','DigitGroupingDamageSprites','playTestCtrlT','setLastGamepadUsed','_fauxAnimationQueue','406122vnRVwz','lFhnR','ItemBgType','ListBgType','ARRAYSTR','playOnceParallelInterpreter','\x0a\x0a\x0a\x0a\x0a','destroyed','_stored_systemColor','RightMenus','BGLtT','initMembersCoreEngine','XParamVocab1','application/json','_stored_hpGaugeColor2','measureTextWidth','Spriteset_Base_destroy','baseId','allowShiftScrolling','addLoadListener','Window_NumberInput_processDigitChange','EnableJS','loadPicture','qJMsC','levelUpRecovery','updatePadding','StatusBgType','pnqby','_centerElement','faceHeight','processKeyboardEnd','SParamVocab7','displayY','left','ExtJS','statusWindowRect','operand','ocbiZ','Conditional\x20Branch\x20Script\x20Error','〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','Color','Name','targetSpritePosition','KeyboardInput','CRI','system','NameInputMessage','Krtco','BottomButtons','_animationSprites','_targetOffsetY','Flat','AutoScrollLockY','BTestAddedQuantity','PTWzr','systemColor','text','DZvcx','boxWidth','ConvertParams','StatusParamsBgType','drawGauge','EQUALS','erasePicture','isHandled','vslUj','mpGaugeColor2','makeAutoBattleActions','kbCMD','measureText','process_VisuMZ_CoreEngine_RegExp','outlineColorDmg','retrievePointAnimation','stop','QXxLa','updatePositionCoreEngine','ParamName','setCommonEvent','SmartEventCollisionPriority','SideView','Window_ShopSell_isEnabled','_createInternalTextures','refreshDimmerBitmap','DigitGroupingLocale','SParamVocab1','BoxMargin','keyCode','zbMbP','createContents','DYlfe','WIN_ICO_CLEAR','Version','SlotRect','missed','SParamVocab8','drawActorLevel','DETACH_PICTURE_CONTAINER','get','Window_Selectable_drawBackgroundRect','EXECUTE','fontSize','NveOm','NUMPAD1','MAX_SAFE_INTEGER','Page','qNlCx','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','WIN_OEM_PA3','meVolume','_shakePower','BGdZG','CRSEL','_hovered','EtuoF','setEnemyAction','Subtitle','FontSize','clearCachedKeys','drawRightArrow','XParamVocab3','MDR','consumeItem','Game_Actor_levelUp','horzJS','_cacheScaleY','XParamVocab2','_anchor','CQEJN','command357','Window_TitleCommand_selectLast','clear','isPlaying','processEscape','DataManager_setupNewGame','NqqxC','titles2','toString','expRate','ParamChange','OptionsRect','AudioChangeBgsPan','visible','Bitmap_resize','_stored_maxLvGaugeColor1','option','hide','isSpecialCode','PMbrk','SellRect','colSpacing','_margin','getLastGamepadUsed','params','tpColor','paramFlatJS','CdXyc','FontSmoothing','AllTroops','drawSegment','HYPHEN_MINUS','split','pqMbY','buttonAssistSwitch','isBottomHelpMode','checkSmartEventCollision','responseText','vertJS','rgba(0,\x200,\x200,\x201.0)','bpuTb','CffMj','isBottomButtonMode'];_0x5dfb=function(){return _0x103deb;};return _0x5dfb();};StorageManager['jsonToZip']=function(_0x150061){return new Promise((_0x2cd4e2,_0x6da579)=>{const _0x3dce58=_0x35a1;try{const _0x52fe7a=pako[_0x3dce58(0x378)](_0x150061,{'to':_0x3dce58(0x49f),'level':0x1});if(_0x52fe7a['length']>=0xc350){}_0x2cd4e2(_0x52fe7a);}catch(_0x1c94f4){_0x6da579(_0x1c94f4);}});},TextManager[_0x391453(0x3ba)]=['','','',_0x391453(0x3c5),'','','HELP','',_0x391453(0x2cd),_0x391453(0x918),'','',_0x391453(0x3f4),_0x391453(0x4f9),'ENTER_SPECIAL','',_0x391453(0x5a7),'CTRL',_0x391453(0x64c),'PAUSE',_0x391453(0x7e0),_0x391453(0x162),_0x391453(0x93d),_0x391453(0x24f),_0x391453(0x4bc),'HANJA','',_0x391453(0x43c),_0x391453(0x777),_0x391453(0x6d6),'ACCEPT',_0x391453(0x376),_0x391453(0x7ef),_0x391453(0x8ea),_0x391453(0x710),_0x391453(0x801),_0x391453(0x6c7),_0x391453(0x304),'UP','RIGHT',_0x391453(0x750),'SELECT',_0x391453(0x6c5),_0x391453(0x874),'PRINTSCREEN',_0x391453(0x13c),'DELETE','','0','1','2','3','4','5','6','7','8','9',_0x391453(0x204),_0x391453(0x788),_0x391453(0x5d1),_0x391453(0x84f),_0x391453(0x5d8),_0x391453(0x289),'AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','OS_KEY','',_0x391453(0x49b),'',_0x391453(0x57a),'NUMPAD0',_0x391453(0x877),_0x391453(0x30a),_0x391453(0x105),_0x391453(0x3fa),_0x391453(0x12b),'NUMPAD6','NUMPAD7',_0x391453(0x2eb),'NUMPAD9','MULTIPLY','ADD',_0x391453(0x671),_0x391453(0x2b6),'DECIMAL','DIVIDE','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11',_0x391453(0x75b),_0x391453(0x7cc),_0x391453(0x517),'F15',_0x391453(0x568),_0x391453(0x75e),_0x391453(0x447),_0x391453(0x950),_0x391453(0x5be),_0x391453(0x4b9),_0x391453(0x8c0),_0x391453(0x175),_0x391453(0x255),'','','','','','','','','NUM_LOCK','SCROLL_LOCK',_0x391453(0x113),'WIN_OEM_FJ_MASSHOU',_0x391453(0x2e9),_0x391453(0x2b0),'WIN_OEM_FJ_ROYA','','','','','','','','','',_0x391453(0x795),'EXCLAMATION',_0x391453(0x23d),_0x391453(0x48f),'DOLLAR','PERCENT',_0x391453(0x6a9),_0x391453(0x6b7),_0x391453(0x1ad),'CLOSE_PAREN',_0x391453(0x509),_0x391453(0x725),_0x391453(0x3a8),_0x391453(0x8b0),_0x391453(0x2e5),_0x391453(0xcd),_0x391453(0x45f),'','','','',_0x391453(0x340),_0x391453(0x50c),_0x391453(0x4c2),'','',_0x391453(0x788),_0x391453(0x84f),'COMMA',_0x391453(0x368),'PERIOD','SLASH','BACK_QUOTE','','','','','','','','','','','','','','','','','','','','','','','','','','',_0x391453(0x774),_0x391453(0x7e9),'CLOSE_BRACKET',_0x391453(0x226),'','META',_0x391453(0x189),'',_0x391453(0x80c),_0x391453(0x46e),'',_0x391453(0x86b),'','',_0x391453(0x797),_0x391453(0x5fa),'WIN_OEM_PA1','WIN_OEM_PA2',_0x391453(0x87c),'WIN_OEM_WSCTRL',_0x391453(0x282),'WIN_OEM_ATTN',_0x391453(0x6e1),'WIN_OEM_COPY',_0x391453(0x60f),_0x391453(0x1ec),_0x391453(0x686),_0x391453(0x7ba),_0x391453(0x880),_0x391453(0x93b),_0x391453(0x24a),_0x391453(0x560),_0x391453(0x6e5),'',_0x391453(0x45b),_0x391453(0x793),''],TextManager[_0x391453(0x3d6)]=VisuMZ['CoreEngine'][_0x391453(0x63e)][_0x391453(0x708)][_0x391453(0x218)],TextManager[_0x391453(0x188)]=VisuMZ['CoreEngine'][_0x391453(0x63e)][_0x391453(0x708)]['CancelText'],TextManager['buttonAssistSwitch']=VisuMZ['CoreEngine'][_0x391453(0x63e)]['ButtonAssist'][_0x391453(0x388)],VisuMZ['CoreEngine'][_0x391453(0x7c0)]=TextManager[_0x391453(0x50a)],TextManager['param']=function(_0x53d839){const _0x2c651d=_0x391453;if(typeof _0x53d839===_0x2c651d(0x500)){if('hiuZI'===_0x2c651d(0x5e8))return VisuMZ['CoreEngine'][_0x2c651d(0x7c0)][_0x2c651d(0xd0)](this,_0x53d839);else _0x5a9974['CoreEngine'][_0x2c651d(0x91e)]['call'](this);}else return this['paramName'](_0x53d839);},TextManager['paramName']=function(_0x22cc17){const _0x43284d=_0x391453;_0x22cc17=String(_0x22cc17||'')[_0x43284d(0x448)]();const _0x44ec16=VisuMZ[_0x43284d(0x1f6)]['Settings'][_0x43284d(0x217)];if(_0x22cc17===_0x43284d(0x78c))return $dataSystem[_0x43284d(0x33d)][_0x43284d(0x8a9)][0x0];if(_0x22cc17==='MAXMP')return $dataSystem[_0x43284d(0x33d)][_0x43284d(0x8a9)][0x1];if(_0x22cc17===_0x43284d(0x958))return $dataSystem['terms']['params'][0x2];if(_0x22cc17===_0x43284d(0x71b))return $dataSystem['terms'][_0x43284d(0x8a9)][0x3];if(_0x22cc17===_0x43284d(0xd4))return $dataSystem[_0x43284d(0x33d)][_0x43284d(0x8a9)][0x4];if(_0x22cc17===_0x43284d(0x591))return $dataSystem['terms'][_0x43284d(0x8a9)][0x5];if(_0x22cc17===_0x43284d(0x4be))return $dataSystem[_0x43284d(0x33d)][_0x43284d(0x8a9)][0x6];if(_0x22cc17===_0x43284d(0x1b5))return $dataSystem[_0x43284d(0x33d)][_0x43284d(0x8a9)][0x7];if(_0x22cc17===_0x43284d(0x420))return _0x44ec16[_0x43284d(0x4d0)];if(_0x22cc17===_0x43284d(0x64e))return _0x44ec16[_0x43284d(0x81d)];if(_0x22cc17===_0x43284d(0x83d))return _0x44ec16['XParamVocab2'];if(_0x22cc17==='CEV')return _0x44ec16[_0x43284d(0x888)];if(_0x22cc17===_0x43284d(0x321))return _0x44ec16['XParamVocab4'];if(_0x22cc17==='MRF')return _0x44ec16[_0x43284d(0x351)];if(_0x22cc17===_0x43284d(0x1e0))return _0x44ec16[_0x43284d(0x1b4)];if(_0x22cc17===_0x43284d(0x7e3))return _0x44ec16[_0x43284d(0x1e8)];if(_0x22cc17==='MRG')return _0x44ec16['XParamVocab8'];if(_0x22cc17==='TRG')return _0x44ec16[_0x43284d(0x1e2)];if(_0x22cc17==='TGR')return _0x44ec16[_0x43284d(0x5f0)];if(_0x22cc17===_0x43284d(0x2a4))return _0x44ec16[_0x43284d(0x865)];if(_0x22cc17===_0x43284d(0x1f7))return _0x44ec16[_0x43284d(0x20b)];if(_0x22cc17===_0x43284d(0x39d))return _0x44ec16[_0x43284d(0x72a)];if(_0x22cc17===_0x43284d(0x5b3))return _0x44ec16[_0x43284d(0x6b8)];if(_0x22cc17==='TCR')return _0x44ec16[_0x43284d(0x636)];if(_0x22cc17===_0x43284d(0x1d7))return _0x44ec16[_0x43284d(0x771)];if(_0x22cc17===_0x43284d(0x889))return _0x44ec16[_0x43284d(0x830)];if(_0x22cc17===_0x43284d(0x5c8))return _0x44ec16['SParamVocab8'];if(_0x22cc17===_0x43284d(0x18d))return _0x44ec16[_0x43284d(0x260)];if(VisuMZ[_0x43284d(0x1f6)][_0x43284d(0x14c)][_0x22cc17]){if(_0x43284d(0x6db)!==_0x43284d(0x28f))return VisuMZ[_0x43284d(0x1f6)][_0x43284d(0x14c)][_0x22cc17];else this[_0x43284d(0x4e2)]('Linear'),this[_0x43284d(0x259)]=_0x3cda3;}return'';},TextManager[_0x391453(0x28c)]=function(_0x178ef5){const _0x5ed2a3=_0x391453,_0x302348=Input[_0x5ed2a3(0x8c7)]();if(_0x302348===_0x5ed2a3(0x2f1))return this['getKeyboardInputButtonString'](_0x178ef5);else{if(_0x5ed2a3(0x4d6)===_0x5ed2a3(0x19c)){const _0x23e6c2='Map%1.json'[_0x5ed2a3(0x5ae)](_0x4f97b2[_0x5ed2a3(0x7b5)](0x3)),_0x52d83c=new _0x490045(),_0x19459f=_0x5ed2a3(0x62d)+_0x23e6c2;_0x52d83c[_0x5ed2a3(0x7d4)]('GET',_0x19459f),_0x52d83c[_0x5ed2a3(0x622)](_0x5ed2a3(0x81e)),_0x52d83c['onload']=()=>this['storeMapData'](_0x52d83c,_0x24ad94,_0x23e6c2,_0x19459f),_0x52d83c[_0x5ed2a3(0x628)]=()=>_0x4adbe4[_0x5ed2a3(0x609)](_0x5ed2a3(0x41b),_0x23e6c2,_0x19459f),_0x52d83c['send']();}else return this[_0x5ed2a3(0x6b1)](_0x302348,_0x178ef5);}},TextManager[_0x391453(0x216)]=function(_0x166d90){const _0x25f853=_0x391453;if(_0x166d90===_0x25f853(0x331))_0x166d90='escape';if(_0x166d90===_0x25f853(0x42f))_0x166d90=_0x25f853(0x598);let _0x425ab3=[];for(let _0x4cbfc1 in Input[_0x25f853(0x1f9)]){_0x4cbfc1=Number(_0x4cbfc1);if(_0x4cbfc1>=0x60&&_0x4cbfc1<=0x69)continue;if([0x12,0x20][_0x25f853(0x3fe)](_0x4cbfc1))continue;_0x166d90===Input[_0x25f853(0x1f9)][_0x4cbfc1]&&_0x425ab3['push'](_0x4cbfc1);}for(let _0x204fab=0x0;_0x204fab<_0x425ab3[_0x25f853(0x4b1)];_0x204fab++){_0x25f853(0x410)!==_0x25f853(0x184)?_0x425ab3[_0x204fab]=TextManager[_0x25f853(0x3ba)][_0x425ab3[_0x204fab]]:_0x3282ce=_0xe9176c['concat'](_0x10c73e);}return this[_0x25f853(0x6fd)](_0x425ab3);},TextManager[_0x391453(0x6fd)]=function(_0x1137af){const _0x394a42=_0x391453,_0x3a97f3=VisuMZ[_0x394a42(0x1f6)][_0x394a42(0x63e)][_0x394a42(0x708)],_0x1db46d=_0x3a97f3[_0x394a42(0x167)],_0x4f13c7=_0x1137af[_0x394a42(0x261)](),_0x2b69e8='Key%1'[_0x394a42(0x5ae)](_0x4f13c7);return _0x3a97f3[_0x2b69e8]?_0x3a97f3[_0x2b69e8]:_0x1db46d[_0x394a42(0x5ae)](_0x4f13c7);},TextManager[_0x391453(0xdd)]=function(_0x5e0f3a,_0x3b3db4){const _0x14dfed=_0x391453,_0x1828f2=VisuMZ[_0x14dfed(0x1f6)][_0x14dfed(0x63e)]['ButtonAssist'],_0xae13f7=_0x1828f2[_0x14dfed(0x5cd)],_0x1bd56d=this[_0x14dfed(0x28c)](_0x5e0f3a),_0x502555=this[_0x14dfed(0x28c)](_0x3b3db4);return _0xae13f7['format'](_0x1bd56d,_0x502555);},TextManager[_0x391453(0x6b1)]=function(_0xa34a74,_0x1cc8eb){const _0x1aad8c=_0x391453,_0x7e3a44=_0xa34a74[_0x1aad8c(0x28a)]()[_0x1aad8c(0x780)](),_0x310f45=VisuMZ[_0x1aad8c(0x1f6)][_0x1aad8c(0x107)][_0x7e3a44];if(!_0x310f45)return this[_0x1aad8c(0x25e)](_0xa34a74,_0x1cc8eb);return _0x310f45[_0x1cc8eb]||this['getKeyboardInputButtonString'](_0xa34a74,_0x1cc8eb);},TextManager[_0x391453(0x25e)]=function(_0x2608a2,_0x27d02e){const _0x59e2ff=_0x391453,_0xdf27df=_0x2608a2['toLowerCase']()[_0x59e2ff(0x780)]();for(const _0x29a981 in VisuMZ['CoreEngine'][_0x59e2ff(0x452)]){if(_0xdf27df['includes'](_0x29a981)){const _0x41f935=VisuMZ[_0x59e2ff(0x1f6)]['ControllerMatches'][_0x29a981],_0x24b5ea=VisuMZ[_0x59e2ff(0x1f6)]['ControllerButtons'][_0x41f935];return _0x24b5ea[_0x27d02e]||this[_0x59e2ff(0x216)](_0x27d02e);}}return this['getKeyboardInputButtonString'](_0x27d02e);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x521)]=ColorManager['loadWindowskin'],ColorManager[_0x391453(0x772)]=function(){const _0x2cfb41=_0x391453;VisuMZ[_0x2cfb41(0x1f6)]['ColorManager_loadWindowskin'][_0x2cfb41(0xd0)](this),this[_0x2cfb41(0x471)]=this[_0x2cfb41(0x471)]||{};},ColorManager[_0x391453(0xdc)]=function(_0x186c0d,_0x4ef593){const _0x24c89f=_0x391453;return _0x4ef593=String(_0x4ef593),this[_0x24c89f(0x471)]=this['_colorCache']||{},_0x4ef593['match'](/#(.*)/i)?this[_0x24c89f(0x471)][_0x186c0d]=_0x24c89f(0x59f)[_0x24c89f(0x5ae)](String(RegExp['$1'])):this['_colorCache'][_0x186c0d]=this[_0x24c89f(0x64a)](Number(_0x4ef593)),this['_colorCache'][_0x186c0d];},ColorManager[_0x391453(0x1d6)]=function(_0x17048f){const _0x4e4322=_0x391453;return _0x17048f=String(_0x17048f),_0x17048f[_0x4e4322(0x13d)](/#(.*)/i)?_0x4e4322(0x59f)['format'](String(RegExp['$1'])):this[_0x4e4322(0x64a)](Number(_0x17048f));},ColorManager[_0x391453(0x886)]=function(){this['_colorCache']={};},ColorManager['normalColor']=function(){const _0x272ee1=_0x391453,_0x2bb694=_0x272ee1(0x156);this['_colorCache']=this['_colorCache']||{};if(this[_0x272ee1(0x471)][_0x2bb694])return this[_0x272ee1(0x471)][_0x2bb694];const _0x376800=VisuMZ['CoreEngine']['Settings'][_0x272ee1(0x839)][_0x272ee1(0x69f)];return this[_0x272ee1(0xdc)](_0x2bb694,_0x376800);},ColorManager[_0x391453(0x848)]=function(){const _0xe37b18=_0x391453,_0x27e0d4=_0xe37b18(0x819);this['_colorCache']=this['_colorCache']||{};if(this[_0xe37b18(0x471)][_0x27e0d4])return this['_colorCache'][_0x27e0d4];const _0x2f650f=VisuMZ[_0xe37b18(0x1f6)][_0xe37b18(0x63e)][_0xe37b18(0x839)][_0xe37b18(0x120)];return this[_0xe37b18(0xdc)](_0x27e0d4,_0x2f650f);},ColorManager['crisisColor']=function(){const _0x1a557f=_0x391453,_0x3972dc=_0x1a557f(0x520);this[_0x1a557f(0x471)]=this[_0x1a557f(0x471)]||{};if(this[_0x1a557f(0x471)][_0x3972dc])return this['_colorCache'][_0x3972dc];const _0x21571d=VisuMZ[_0x1a557f(0x1f6)][_0x1a557f(0x63e)]['Color'][_0x1a557f(0x736)];return this['getColorDataFromPluginParameters'](_0x3972dc,_0x21571d);},ColorManager[_0x391453(0x7c4)]=function(){const _0x101a60=_0x391453,_0x47dd08=_0x101a60(0x54a);this[_0x101a60(0x471)]=this[_0x101a60(0x471)]||{};if(this[_0x101a60(0x471)][_0x47dd08])return this['_colorCache'][_0x47dd08];const _0x44c70d=VisuMZ[_0x101a60(0x1f6)]['Settings'][_0x101a60(0x839)][_0x101a60(0x93f)];return this[_0x101a60(0xdc)](_0x47dd08,_0x44c70d);},ColorManager[_0x391453(0x63f)]=function(){const _0x151759=_0x391453,_0x2c3a9d=_0x151759(0x6d2);this[_0x151759(0x471)]=this[_0x151759(0x471)]||{};if(this[_0x151759(0x471)][_0x2c3a9d])return this[_0x151759(0x471)][_0x2c3a9d];const _0x1aed59=VisuMZ[_0x151759(0x1f6)]['Settings'][_0x151759(0x839)][_0x151759(0x140)];return this[_0x151759(0xdc)](_0x2c3a9d,_0x1aed59);},ColorManager[_0x391453(0x95b)]=function(){const _0x4efd3e=_0x391453,_0x5e92f5='_stored_hpGaugeColor1';this[_0x4efd3e(0x471)]=this['_colorCache']||{};if(this[_0x4efd3e(0x471)][_0x5e92f5])return this[_0x4efd3e(0x471)][_0x5e92f5];const _0x1204f1=VisuMZ['CoreEngine'][_0x4efd3e(0x63e)][_0x4efd3e(0x839)][_0x4efd3e(0x32e)];return this[_0x4efd3e(0xdc)](_0x5e92f5,_0x1204f1);},ColorManager[_0x391453(0x7cb)]=function(){const _0x14c57=_0x391453,_0x588f71=_0x14c57(0x81f);this['_colorCache']=this[_0x14c57(0x471)]||{};if(this[_0x14c57(0x471)][_0x588f71])return this['_colorCache'][_0x588f71];const _0x420627=VisuMZ['CoreEngine'][_0x14c57(0x63e)][_0x14c57(0x839)]['ColorHPGauge2'];return this[_0x14c57(0xdc)](_0x588f71,_0x420627);},ColorManager['mpGaugeColor1']=function(){const _0x49fc8f=_0x391453,_0x125f98=_0x49fc8f(0x1af);this['_colorCache']=this['_colorCache']||{};if(this[_0x49fc8f(0x471)][_0x125f98])return this[_0x49fc8f(0x471)][_0x125f98];const _0x55e55c=VisuMZ[_0x49fc8f(0x1f6)]['Settings']['Color']['ColorMPGauge1'];return this['getColorDataFromPluginParameters'](_0x125f98,_0x55e55c);},ColorManager[_0x391453(0x853)]=function(){const _0x15bee5=_0x391453,_0xc23252=_0x15bee5(0x57f);this[_0x15bee5(0x471)]=this[_0x15bee5(0x471)]||{};if(this[_0x15bee5(0x471)][_0xc23252])return this[_0x15bee5(0x471)][_0xc23252];const _0x5d3c3e=VisuMZ[_0x15bee5(0x1f6)][_0x15bee5(0x63e)][_0x15bee5(0x839)][_0x15bee5(0x398)];return this['getColorDataFromPluginParameters'](_0xc23252,_0x5d3c3e);},ColorManager[_0x391453(0x11e)]=function(){const _0x4539ce=_0x391453,_0xb50822=_0x4539ce(0x66f);this[_0x4539ce(0x471)]=this[_0x4539ce(0x471)]||{};if(this[_0x4539ce(0x471)][_0xb50822])return this[_0x4539ce(0x471)][_0xb50822];const _0xe32c88=VisuMZ[_0x4539ce(0x1f6)][_0x4539ce(0x63e)][_0x4539ce(0x839)][_0x4539ce(0x6ee)];return this[_0x4539ce(0xdc)](_0xb50822,_0xe32c88);},ColorManager[_0x391453(0x31e)]=function(){const _0x2f0a45=_0x391453,_0x49f3dc=_0x2f0a45(0x949);this[_0x2f0a45(0x471)]=this['_colorCache']||{};if(this[_0x2f0a45(0x471)][_0x49f3dc])return this[_0x2f0a45(0x471)][_0x49f3dc];const _0x376a05=VisuMZ[_0x2f0a45(0x1f6)][_0x2f0a45(0x63e)][_0x2f0a45(0x839)]['ColorPowerUp'];return this[_0x2f0a45(0xdc)](_0x49f3dc,_0x376a05);},ColorManager[_0x391453(0x1bb)]=function(){const _0x443bb7=_0x391453,_0x1e2eb6=_0x443bb7(0x70b);this[_0x443bb7(0x471)]=this['_colorCache']||{};if(this[_0x443bb7(0x471)][_0x1e2eb6])return this[_0x443bb7(0x471)][_0x1e2eb6];const _0x26e06d=VisuMZ[_0x443bb7(0x1f6)]['Settings'][_0x443bb7(0x839)][_0x443bb7(0x1fb)];return this[_0x443bb7(0xdc)](_0x1e2eb6,_0x26e06d);},ColorManager[_0x391453(0x3e3)]=function(){const _0x517943=_0x391453,_0x157b21=_0x517943(0x70e);this[_0x517943(0x471)]=this[_0x517943(0x471)]||{};if(this['_colorCache'][_0x157b21])return this[_0x517943(0x471)][_0x157b21];const _0xed92b4=VisuMZ['CoreEngine'][_0x517943(0x63e)][_0x517943(0x839)][_0x517943(0x237)];return this[_0x517943(0xdc)](_0x157b21,_0xed92b4);},ColorManager['ctGaugeColor2']=function(){const _0x5bf1e9=_0x391453,_0x583b5d='_stored_ctGaugeColor2';this[_0x5bf1e9(0x471)]=this[_0x5bf1e9(0x471)]||{};if(this['_colorCache'][_0x583b5d])return this[_0x5bf1e9(0x471)][_0x583b5d];const _0x212ddf=VisuMZ[_0x5bf1e9(0x1f6)]['Settings']['Color']['ColorCTGauge2'];return this['getColorDataFromPluginParameters'](_0x583b5d,_0x212ddf);},ColorManager[_0x391453(0x5a4)]=function(){const _0x3cf838=_0x391453,_0x5b41c5=_0x3cf838(0x222);this[_0x3cf838(0x471)]=this[_0x3cf838(0x471)]||{};if(this[_0x3cf838(0x471)][_0x5b41c5])return this[_0x3cf838(0x471)][_0x5b41c5];const _0x5c79e7=VisuMZ['CoreEngine']['Settings']['Color']['ColorTPGauge1'];return this[_0x3cf838(0xdc)](_0x5b41c5,_0x5c79e7);},ColorManager['tpGaugeColor2']=function(){const _0x32d373=_0x391453,_0x45f173=_0x32d373(0x613);this[_0x32d373(0x471)]=this[_0x32d373(0x471)]||{};if(this[_0x32d373(0x471)][_0x45f173])return this[_0x32d373(0x471)][_0x45f173];const _0x4ee755=VisuMZ[_0x32d373(0x1f6)][_0x32d373(0x63e)][_0x32d373(0x839)][_0x32d373(0x2fd)];return this[_0x32d373(0xdc)](_0x45f173,_0x4ee755);},ColorManager['tpCostColor']=function(){const _0x2d4024=_0x391453,_0x1d7c9f='_stored_tpCostColor';this[_0x2d4024(0x471)]=this[_0x2d4024(0x471)]||{};if(this[_0x2d4024(0x471)][_0x1d7c9f])return this['_colorCache'][_0x1d7c9f];const _0x17353a=VisuMZ['CoreEngine'][_0x2d4024(0x63e)][_0x2d4024(0x839)][_0x2d4024(0x79a)];return this[_0x2d4024(0xdc)](_0x1d7c9f,_0x17353a);},ColorManager[_0x391453(0x72d)]=function(){const _0x24a2b4=_0x391453,_0x1e0ea2=_0x24a2b4(0x2d3);this[_0x24a2b4(0x471)]=this[_0x24a2b4(0x471)]||{};if(this[_0x24a2b4(0x471)][_0x1e0ea2])return this['_colorCache'][_0x1e0ea2];const _0x4ef731=VisuMZ[_0x24a2b4(0x1f6)]['Settings'][_0x24a2b4(0x839)][_0x24a2b4(0x79a)];return this[_0x24a2b4(0xdc)](_0x1e0ea2,_0x4ef731);},ColorManager[_0x391453(0x241)]=function(){const _0xd6f88=_0x391453,_0x23b765='_stored_expGaugeColor1';this['_colorCache']=this['_colorCache']||{};if(this[_0xd6f88(0x471)][_0x23b765])return this[_0xd6f88(0x471)][_0x23b765];const _0x58bbc7=VisuMZ['CoreEngine'][_0xd6f88(0x63e)][_0xd6f88(0x839)][_0xd6f88(0x4cb)];return this[_0xd6f88(0xdc)](_0x23b765,_0x58bbc7);},ColorManager[_0x391453(0x7ab)]=function(){const _0x4ee4b4=_0x391453,_0x4511f7='_stored_expGaugeColor2';this[_0x4ee4b4(0x471)]=this['_colorCache']||{};if(this[_0x4ee4b4(0x471)][_0x4511f7])return this[_0x4ee4b4(0x471)][_0x4511f7];const _0x118beb=VisuMZ[_0x4ee4b4(0x1f6)][_0x4ee4b4(0x63e)][_0x4ee4b4(0x839)][_0x4ee4b4(0x752)];return this['getColorDataFromPluginParameters'](_0x4511f7,_0x118beb);},ColorManager[_0x391453(0x3a0)]=function(){const _0x4cf143=_0x391453,_0xda3d5a=_0x4cf143(0x8a0);this['_colorCache']=this[_0x4cf143(0x471)]||{};if(this[_0x4cf143(0x471)][_0xda3d5a])return this[_0x4cf143(0x471)][_0xda3d5a];const _0x4c3605=VisuMZ[_0x4cf143(0x1f6)]['Settings'][_0x4cf143(0x839)][_0x4cf143(0x1be)];return this[_0x4cf143(0xdc)](_0xda3d5a,_0x4c3605);},ColorManager[_0x391453(0x6a7)]=function(){const _0x216ba1=_0x391453,_0x5c77e7=_0x216ba1(0x3a5);this[_0x216ba1(0x471)]=this[_0x216ba1(0x471)]||{};if(this[_0x216ba1(0x471)][_0x5c77e7])return this[_0x216ba1(0x471)][_0x5c77e7];const _0x34d9b3=VisuMZ['CoreEngine']['Settings'][_0x216ba1(0x839)]['ColorMaxLvGauge2'];return this[_0x216ba1(0xdc)](_0x5c77e7,_0x34d9b3);},ColorManager[_0x391453(0x759)]=function(_0x1572b6){const _0x15688b=_0x391453;return VisuMZ[_0x15688b(0x1f6)]['Settings'][_0x15688b(0x839)]['ActorHPColor'][_0x15688b(0xd0)](this,_0x1572b6);},ColorManager[_0x391453(0x42b)]=function(_0x58e385){const _0x57f09e=_0x391453;return VisuMZ[_0x57f09e(0x1f6)][_0x57f09e(0x63e)][_0x57f09e(0x839)][_0x57f09e(0x7c3)][_0x57f09e(0xd0)](this,_0x58e385);},ColorManager[_0x391453(0x8aa)]=function(_0x2e24c0){const _0x4b27e4=_0x391453;return VisuMZ[_0x4b27e4(0x1f6)][_0x4b27e4(0x63e)]['Color']['ActorTPColor'][_0x4b27e4(0xd0)](this,_0x2e24c0);},ColorManager['paramchangeTextColor']=function(_0x2a738a){const _0xa63aa8=_0x391453;return VisuMZ[_0xa63aa8(0x1f6)][_0xa63aa8(0x63e)][_0xa63aa8(0x839)][_0xa63aa8(0x89b)][_0xa63aa8(0xd0)](this,_0x2a738a);},ColorManager['damageColor']=function(_0xf052b9){const _0xf30ab1=_0x391453;return VisuMZ['CoreEngine'][_0xf30ab1(0x63e)][_0xf30ab1(0x839)][_0xf30ab1(0x4e9)][_0xf30ab1(0xd0)](this,_0xf052b9);},ColorManager[_0x391453(0x3e9)]=function(){const _0x20f253=_0x391453;return VisuMZ[_0x20f253(0x1f6)]['Settings'][_0x20f253(0x839)][_0x20f253(0x173)];},ColorManager[_0x391453(0x858)]=function(){const _0x2dfee6=_0x391453;return VisuMZ[_0x2dfee6(0x1f6)][_0x2dfee6(0x63e)][_0x2dfee6(0x839)][_0x2dfee6(0x2af)]||_0x2dfee6(0x62b);},ColorManager[_0x391453(0x1db)]=function(){const _0x28f826=_0x391453;return VisuMZ[_0x28f826(0x1f6)][_0x28f826(0x63e)]['Color']['OutlineColorGauge']||_0x28f826(0x8b8);},ColorManager[_0x391453(0xfd)]=function(){const _0x5d917d=_0x391453;return VisuMZ['CoreEngine'][_0x5d917d(0x63e)]['Color'][_0x5d917d(0x938)];},ColorManager[_0x391453(0x42d)]=function(){const _0x40aaba=_0x391453;return VisuMZ[_0x40aaba(0x1f6)]['Settings'][_0x40aaba(0x839)][_0x40aaba(0x706)];},ColorManager['itemBackColor1']=function(){const _0x4c8aa9=_0x391453;return VisuMZ[_0x4c8aa9(0x1f6)][_0x4c8aa9(0x63e)][_0x4c8aa9(0x839)]['ItemBackColor1'];},ColorManager[_0x391453(0x3d4)]=function(){const _0x5de787=_0x391453;return VisuMZ[_0x5de787(0x1f6)][_0x5de787(0x63e)][_0x5de787(0x839)][_0x5de787(0x10d)];},SceneManager[_0x391453(0x930)]=[],SceneManager[_0x391453(0x416)]=function(){const _0x4f8a80=_0x391453;return this[_0x4f8a80(0x254)]&&this[_0x4f8a80(0x254)]['constructor']===Scene_Battle;},SceneManager[_0x391453(0x90c)]=function(){const _0x5a41bb=_0x391453;return this[_0x5a41bb(0x254)]&&this[_0x5a41bb(0x254)][_0x5a41bb(0x349)]===Scene_Map;},SceneManager[_0x391453(0x1f8)]=function(){const _0x39d166=_0x391453;return this[_0x39d166(0x254)]&&this[_0x39d166(0x254)]instanceof Scene_Map;},VisuMZ[_0x391453(0x1f6)][_0x391453(0xe5)]=SceneManager[_0x391453(0x4f3)],SceneManager[_0x391453(0x4f3)]=function(){const _0x11fc6f=_0x391453;VisuMZ[_0x11fc6f(0x1f6)]['SceneManager_initialize'][_0x11fc6f(0xd0)](this),this[_0x11fc6f(0x2e4)]();},VisuMZ['CoreEngine'][_0x391453(0x779)]=SceneManager[_0x391453(0x17e)],SceneManager[_0x391453(0x17e)]=function(_0xbfa11d){const _0x4a8691=_0x391453;if($gameTemp)this['onKeyDownKeysF6F7'](_0xbfa11d);VisuMZ[_0x4a8691(0x1f6)][_0x4a8691(0x779)]['call'](this,_0xbfa11d);},SceneManager['onKeyDownKeysF6F7']=function(_0x4ea487){const _0x4c2cfb=_0x391453;if(!_0x4ea487['ctrlKey']&&!_0x4ea487['altKey'])switch(_0x4ea487[_0x4c2cfb(0x867)]){case 0x54:this[_0x4c2cfb(0x80e)]();break;case 0x75:this[_0x4c2cfb(0x37c)]();break;case 0x76:if(Input['isPressed']('shift')||Input[_0x4c2cfb(0x4d2)](_0x4c2cfb(0x2d0)))return;this['playTestF7']();break;}},SceneManager[_0x391453(0x37c)]=function(){const _0x28c284=_0x391453;if($gameTemp['isPlaytest']()&&VisuMZ[_0x28c284(0x1f6)][_0x28c284(0x63e)][_0x28c284(0x7e5)]['F6key']){if('xETsg'!==_0x28c284(0xe0)){if(ConfigManager['seVolume']!==0x0){if(_0x28c284(0x248)!==_0x28c284(0x248)){const _0x597f97=_0x498fcc+(this[_0x28c284(0x782)]()-_0x3a54fb[_0x28c284(0x551)])/0x2;this['drawIcon'](_0x5ac55b,_0x378c5d+(_0x458f0d-_0x17b05a[_0x28c284(0x178)]),_0x597f97),_0x4a4d1a-=_0x347cde['iconWidth']+0x4;}else ConfigManager[_0x28c284(0x5eb)]=0x0,ConfigManager['bgsVolume']=0x0,ConfigManager[_0x28c284(0x87d)]=0x0,ConfigManager[_0x28c284(0x5df)]=0x0;}else{if(_0x28c284(0x8ac)==='IFxuJ')return _0x31858d[_0x28c284(0x1f6)][_0x28c284(0x76b)]['call'](this)||this[_0x28c284(0x28e)]();else ConfigManager[_0x28c284(0x5eb)]=0x64,ConfigManager['bgsVolume']=0x64,ConfigManager['meVolume']=0x64,ConfigManager[_0x28c284(0x5df)]=0x64;}ConfigManager['save']();if(this[_0x28c284(0x254)][_0x28c284(0x349)]===Scene_Options){if(this[_0x28c284(0x254)]['_optionsWindow'])this[_0x28c284(0x254)][_0x28c284(0x433)][_0x28c284(0x8e5)]();if(this['_scene'][_0x28c284(0x707)])this[_0x28c284(0x254)][_0x28c284(0x707)][_0x28c284(0x8e5)]();}}else this[_0x28c284(0x2da)]();}},SceneManager[_0x391453(0xcf)]=function(){const _0x4f939a=_0x391453;$gameTemp[_0x4f939a(0x4a5)]()&&VisuMZ[_0x4f939a(0x1f6)]['Settings'][_0x4f939a(0x7e5)]['F7key']&&($gameTemp[_0x4f939a(0x210)]=!$gameTemp[_0x4f939a(0x210)]);},SceneManager[_0x391453(0x80e)]=function(){const _0x446346=_0x391453;if(!$gameTemp[_0x446346(0x4a5)]())return;if(!SceneManager['isSceneBattle']())return;for(const _0x46906d of $gameParty[_0x446346(0x6df)]()){if(!_0x46906d)continue;_0x46906d[_0x446346(0x2be)](_0x46906d[_0x446346(0x74f)]());}},SceneManager[_0x391453(0x2e4)]=function(){const _0x4e2913=_0x391453;this[_0x4e2913(0x1d0)]=![],this[_0x4e2913(0x4bd)]=!VisuMZ[_0x4e2913(0x1f6)]['Settings']['UI'][_0x4e2913(0x8ec)];},SceneManager[_0x391453(0x76e)]=function(_0x14e48a){const _0x556489=_0x391453;if(VisuMZ[_0x556489(0x1f6)][_0x556489(0x63e)]['UI']['SideButtons']){if('fHSnF'===_0x556489(0x19e))this['_sideButtonLayout']=_0x14e48a;else{const _0x5e643f=_0x72077c['CoreEngine'][_0x556489(0x63e)][_0x556489(0x641)];this[_0x556489(0x427)]=_0x5e643f?.[_0x556489(0x24e)]||_0x556489(0x23a);}}},SceneManager['isSideButtonLayout']=function(){const _0x494b1d=_0x391453;return this[_0x494b1d(0x1d0)];},SceneManager['areButtonsHidden']=function(){const _0x4393e9=_0x391453;return this[_0x4393e9(0x4bd)];},SceneManager['areButtonsOutsideMainUI']=function(){const _0x27d281=_0x391453;return this[_0x27d281(0x2f3)]()||this[_0x27d281(0x365)]();},VisuMZ['CoreEngine'][_0x391453(0x738)]=SceneManager['isGameActive'],SceneManager['isGameActive']=function(){const _0x25a693=_0x391453;if(VisuMZ[_0x25a693(0x1f6)]['Settings']['QoL'][_0x25a693(0x8f4)]){if(_0x25a693(0x8b2)==='pqMbY')return VisuMZ[_0x25a693(0x1f6)][_0x25a693(0x738)][_0x25a693(0xd0)](this);else{_0x1b362c[_0x25a693(0x1f6)][_0x25a693(0x1c8)][_0x25a693(0xd0)](this);if(this[_0x25a693(0x2e8)])this[_0x25a693(0x2e8)]--;}}else return!![];},SceneManager[_0x391453(0x114)]=function(_0x2b9b4e){const _0x291d82=_0x391453;if(_0x2b9b4e instanceof Error)this[_0x291d82(0x719)](_0x2b9b4e);else _0x2b9b4e instanceof Array&&_0x2b9b4e[0x0]===_0x291d82(0x453)?this['catchLoadError'](_0x2b9b4e):this[_0x291d82(0x6b0)](_0x2b9b4e);this[_0x291d82(0x85a)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x4ae)]=BattleManager[_0x391453(0x895)],BattleManager['processEscape']=function(){const _0x20b034=_0x391453;if(VisuMZ[_0x20b034(0x1f6)][_0x20b034(0x63e)][_0x20b034(0x7e5)][_0x20b034(0x634)])'ZDbdx'!==_0x20b034(0x381)?(_0x244458+=_0x537a79,_0xd0b929+=_0x20b034(0x7d9)[_0x20b034(0x5ae)](_0x244218)):this[_0x20b034(0x38b)]();else return VisuMZ[_0x20b034(0x1f6)]['BattleManager_processEscape'][_0x20b034(0xd0)](this);},BattleManager[_0x391453(0x38b)]=function(){const _0xa5a78c=_0x391453;return $gameParty[_0xa5a78c(0x4af)](),SoundManager['playEscape'](),this[_0xa5a78c(0x6fc)](),!![];},BattleManager[_0x391453(0x273)]=function(){const _0x58e5d0=_0x391453;return $gameSystem[_0x58e5d0(0x24b)]()>=0x1;},BattleManager['isActiveTpb']=function(){const _0x4d39dc=_0x391453;return $gameSystem[_0x4d39dc(0x24b)]()===0x1;},VisuMZ[_0x391453(0x1f6)]['Game_Temp_initialize']=Game_Temp['prototype'][_0x391453(0x4f3)],Game_Temp[_0x391453(0x307)]['initialize']=function(){const _0x526c5a=_0x391453;VisuMZ[_0x526c5a(0x1f6)][_0x526c5a(0x6fb)][_0x526c5a(0xd0)](this),this[_0x526c5a(0x3e7)](),this[_0x526c5a(0x6ed)](),this[_0x526c5a(0x406)]();},Game_Temp['prototype']['forceOutOfPlaytest']=function(){const _0x3832f1=_0x391453;VisuMZ['CoreEngine'][_0x3832f1(0x63e)]['QoL']['ForceNoPlayTest']&&(this[_0x3832f1(0x2a2)]=![]);},Game_Temp['prototype'][_0x391453(0x6dd)]=function(_0xce31c5){const _0x446e17=_0x391453;this[_0x446e17(0x5e7)]=_0xce31c5;},Game_Temp[_0x391453(0x307)][_0x391453(0x698)]=function(){const _0x442700=_0x391453;return this[_0x442700(0x5e7)];},Game_Temp['prototype'][_0x391453(0x1ef)]=function(){const _0x10bf0e=_0x391453;this['_forcedTroopView']=undefined,this[_0x10bf0e(0x3d2)]=undefined;},Game_Temp[_0x391453(0x307)][_0x391453(0x39c)]=function(_0x5162d0){const _0x2dde1c=_0x391453;$gameMap&&$dataMap&&$dataMap[_0x2dde1c(0x185)]&&('UYTsj'!=='hpbME'?this[_0x2dde1c(0x744)]($dataMap['note']):this['smoothSelect']((_0x833f27-_0xf40824+_0x3c6dd7)%_0x491f5a));const _0x2d30b0=$dataTroops[_0x5162d0];if(_0x2d30b0){let _0x1cf165=DataManager[_0x2dde1c(0x8c2)](_0x2d30b0['id']);this[_0x2dde1c(0x744)](_0x1cf165);}},Game_Temp['prototype'][_0x391453(0x744)]=function(_0x216f4e){const _0x353363=_0x391453;if(!_0x216f4e)return;if(_0x216f4e[_0x353363(0x13d)](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))this['_forcedTroopView']='FV';else{if(_0x216f4e[_0x353363(0x13d)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i)){if(_0x353363(0x7d0)==='gYeuT')this['_forcedTroopView']='SV';else{if(!_0x5582bd)return;if(!_0x9c4e19[_0x353363(0xd9)]())return;const _0x11302b=0x80,_0x4576d2=_0x47b9a2[_0x353363(0x89a)]();let _0x8be499=_0x1a0fac['expGaugeColor1'](),_0x30712f=_0x475951[_0x353363(0x7ab)]();_0x4576d2>=0x1&&(_0x8be499=_0x47f4e0[_0x353363(0x3a0)](),_0x30712f=_0x2e9c7e[_0x353363(0x6a7)]()),this['drawGauge'](_0x2cdd1d,_0x4a9c76,_0x11302b,_0x4576d2,_0x8be499,_0x30712f);}}else{if(_0x216f4e['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x271f5e=String(RegExp['$1']);if(_0x271f5e[_0x353363(0x13d)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this[_0x353363(0x7d8)]='FV';else _0x271f5e[_0x353363(0x13d)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this['_forcedTroopView']='SV');}}}if(_0x216f4e[_0x353363(0x13d)](/<(?:DTB)>/i))_0x353363(0x916)==='dhZtZ'?this[_0x353363(0x1a6)](_0x2f7d0e):this[_0x353363(0x3d2)]=0x0;else{if(_0x216f4e[_0x353363(0x13d)](/<(?:TPB|ATB)[ ]ACTIVE>/i))this[_0x353363(0x3d2)]=0x1;else{if(_0x216f4e[_0x353363(0x13d)](/<(?:TPB|ATB)[ ]WAIT>/i))this[_0x353363(0x3d2)]=0x2;else{if(_0x216f4e['match'](/<(?:CTB)>/i))Imported[_0x353363(0x5d2)]&&(this['_forcedBattleSys']='CTB');else{if(_0x216f4e[_0x353363(0x13d)](/<(?:STB)>/i)){if(Imported[_0x353363(0x5c7)]){if(_0x353363(0x338)!=='VniNN')this[_0x353363(0x3d2)]='STB';else{const _0x345661=_0x572dbf[_0x5ada89],_0x58a3be=_0x353363(0x78e)[_0x353363(0x5ae)](_0x4eb10c);for(const _0xe1206d of _0x345661){_0x55b0cb[_0x353363(0x2c8)](_0x58a3be,_0xe1206d);}}}}else{if(_0x216f4e[_0x353363(0x13d)](/<(?:BTB)>/i))Imported[_0x353363(0x57c)]&&(_0x353363(0x8d9)===_0x353363(0x87f)?this[_0x353363(0xf7)]-=_0x5bcac2[_0x353363(0x4ff)]((_0x51fa48[_0x353363(0x786)]-_0x5f52df['boxWidth'])/0x2):this['_forcedBattleSys']=_0x353363(0x637));else{if(_0x216f4e[_0x353363(0x13d)](/<(?:FTB)>/i))Imported['VisuMZ_2_BattleSystemFTB']&&(this[_0x353363(0x3d2)]=_0x353363(0x488));else{if(_0x216f4e[_0x353363(0x13d)](/<(?:OTB)>/i))Imported[_0x353363(0x426)]&&(_0x353363(0x62e)!==_0x353363(0x62e)?_0x2692f9[_0x353363(0x2c8)](_0x12f000,_0x478f20):this[_0x353363(0x3d2)]='OTB');else{if(_0x216f4e[_0x353363(0x13d)](/<(?:ETB)>/i)){if(_0x353363(0x8ba)!==_0x353363(0x8ba)){const _0x4a6d32=_0x353363(0x156);this[_0x353363(0x471)]=this[_0x353363(0x471)]||{};if(this['_colorCache'][_0x4a6d32])return this['_colorCache'][_0x4a6d32];const _0x147f08=_0x4447a0[_0x353363(0x1f6)]['Settings'][_0x353363(0x839)][_0x353363(0x69f)];return this[_0x353363(0xdc)](_0x4a6d32,_0x147f08);}else Imported['VisuMZ_2_BattleSystemETB']&&(_0x353363(0x4e8)!==_0x353363(0x4e8)?_0x562756[_0x353363(0xd7)]&&(this[_0x353363(0x3d2)]=_0x353363(0x488)):this['_forcedBattleSys']=_0x353363(0x3e5));}else{if(_0x216f4e[_0x353363(0x13d)](/<(?:PTB)>/i)){if(_0x353363(0x687)===_0x353363(0x687))Imported[_0x353363(0x20f)]&&(this[_0x353363(0x3d2)]='PTB');else{if(this[_0x353363(0x3a9)]===_0x42fb11)this[_0x353363(0x442)]();if(this[_0x353363(0x3a9)][_0x353363(0x54c)]===_0x494711)this['initCoreEngine']();this[_0x353363(0x3a9)][_0x353363(0x8e7)]=_0xab204;}}else{if(_0x216f4e[_0x353363(0x13d)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x253461=String(RegExp['$1']);if(_0x253461[_0x353363(0x13d)](/DTB/i))'SPBCb'===_0x353363(0x4b6)?this['_forcedBattleSys']=0x0:(_0x13373e[_0x353363(0x6d3)]=_0xc336ca,_0x567b3e[_0x353363(0x55c)]=_0x40c736[_0x353363(0x4f2)][_0x353363(0x5f5)](),_0x1a7ca3[_0x353363(0x4c8)](_0x330f61),_0x4a9c01[_0x353363(0x319)](_0x31f13e,_0x45d6e6[_0x353363(0x55c)]),_0x4e3b39[_0x353363(0x477)][_0x353363(0x58f)](_0x56d4dc[_0x353363(0x55c)]));else{if(_0x253461['match'](/(?:TPB|ATB)[ ]ACTIVE/i))this['_forcedBattleSys']=0x1;else{if(_0x253461[_0x353363(0x13d)](/(?:TPB|ATB)[ ]WAIT/i))this[_0x353363(0x3d2)]=0x2;else{if(_0x253461[_0x353363(0x13d)](/CTB/i))Imported[_0x353363(0x5d2)]&&(this[_0x353363(0x3d2)]='CTB');else{if(_0x253461[_0x353363(0x13d)](/STB/i))Imported[_0x353363(0x5c7)]&&(this['_forcedBattleSys']='STB');else{if(_0x253461['match'](/BTB/i))Imported[_0x353363(0x57c)]&&(_0x353363(0x164)===_0x353363(0x39f)?(this[_0x353363(0x337)]=this[_0x353363(0x337)]||[],this[_0x353363(0x337)][_0x353363(0x7db)](_0x378ce7)):this['_forcedBattleSys']='BTB');else{if(_0x253461['match'](/FTB/i))_0x353363(0x465)===_0x353363(0x465)?Imported[_0x353363(0xd7)]&&(this['_forcedBattleSys']=_0x353363(0x488)):(_0x5c6d53[_0x353363(0x1f6)][_0x353363(0x742)][_0x353363(0xd0)](this),this[_0x353363(0x163)]());else{if(_0x253461[_0x353363(0x13d)](/OTB/i))_0x353363(0x227)!==_0x353363(0x7f5)?Imported[_0x353363(0x426)]&&(this[_0x353363(0x3d2)]='OTB'):(_0x181944[_0x353363(0x1f6)][_0x353363(0x7f3)][_0x353363(0xd0)](this),this[_0x353363(0x81c)]());else{if(_0x253461[_0x353363(0x13d)](/ETB/i))Imported['VisuMZ_2_BattleSystemETB']&&(this[_0x353363(0x3d2)]=_0x353363(0x3e5));else _0x253461[_0x353363(0x13d)](/PTB/i)&&(Imported[_0x353363(0x20f)]&&(this[_0x353363(0x3d2)]=_0x353363(0x6f5)));}}}}}}}}}}}}}}}}}}}},Game_Temp[_0x391453(0x307)][_0x391453(0x6ed)]=function(){this['_fauxAnimationQueue']=[];},Game_Temp[_0x391453(0x307)][_0x391453(0x7ea)]=function(_0x2b28fe,_0x235488,_0x3668c3,_0x319598){const _0x71187e=_0x391453;if(!this[_0x71187e(0x35d)]())return;_0x3668c3=_0x3668c3||![],_0x319598=_0x319598||![];if($dataAnimations[_0x235488]){const _0x27ea17={'targets':_0x2b28fe,'animationId':_0x235488,'mirror':_0x3668c3,'mute':_0x319598};this[_0x71187e(0x810)][_0x71187e(0x268)](_0x27ea17);for(const _0x187e32 of _0x2b28fe){_0x187e32[_0x71187e(0x8ce)]&&_0x187e32['startAnimation']();}}},Game_Temp[_0x391453(0x307)][_0x391453(0x35d)]=function(){return!![];},Game_Temp[_0x391453(0x307)][_0x391453(0x7ff)]=function(){const _0x153780=_0x391453;return this[_0x153780(0x810)][_0x153780(0x561)]();},Game_Temp['prototype'][_0x391453(0x406)]=function(){const _0x5d4980=_0x391453;this[_0x5d4980(0x5ab)]=[];},Game_Temp[_0x391453(0x307)][_0x391453(0x553)]=function(_0x51c1e4,_0x49da67,_0x2cf342,_0x7e4c62,_0x5a202a){const _0x2f5913=_0x391453;if(!this[_0x2f5913(0x70a)]())return;_0x7e4c62=_0x7e4c62||![],_0x5a202a=_0x5a202a||![];if($dataAnimations[_0x2cf342]){if('qZvIU'!=='qZvIU'){let _0x41339e=_0x5cae5['abs'](_0x4df78e)[_0x2f5913(0x899)]();this[_0x2f5913(0x199)]()&&(_0x41339e=_0x465c24[_0x2f5913(0x2e1)](_0x41339e));const _0x1a1044=this[_0x2f5913(0x875)](),_0x19a075=_0xde92d0['floor'](_0x1a1044*0.75);for(let _0x4df89b=0x0;_0x4df89b<_0x41339e[_0x2f5913(0x4b1)];_0x4df89b++){const _0x488266=this[_0x2f5913(0x614)](_0x19a075,_0x1a1044);_0x488266[_0x2f5913(0x3e4)][_0x2f5913(0x809)](_0x41339e[_0x4df89b],0x0,0x0,_0x19a075,_0x1a1044,_0x2f5913(0x675)),_0x488266['x']=(_0x4df89b-(_0x41339e[_0x2f5913(0x4b1)]-0x1)/0x2)*_0x19a075,_0x488266['dy']=-_0x4df89b;}}else{const _0x2245aa={'x':_0x51c1e4,'y':_0x49da67,'animationId':_0x2cf342,'mirror':_0x7e4c62,'mute':_0x5a202a};this[_0x2f5913(0x5ab)][_0x2f5913(0x268)](_0x2245aa);}}},Game_Temp['prototype'][_0x391453(0x70a)]=function(){return!![];},Game_Temp[_0x391453(0x307)]['retrievePointAnimation']=function(){const _0x3c9ee4=_0x391453;return this[_0x3c9ee4(0x5ab)][_0x3c9ee4(0x561)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x585)]=Game_System[_0x391453(0x307)][_0x391453(0x4f3)],Game_System[_0x391453(0x307)][_0x391453(0x4f3)]=function(){const _0x340b8f=_0x391453;VisuMZ['CoreEngine'][_0x340b8f(0x585)][_0x340b8f(0xd0)](this),this[_0x340b8f(0x442)]();},Game_System['prototype'][_0x391453(0x442)]=function(){const _0x480993=_0x391453;this[_0x480993(0x3a9)]={'SideView':$dataSystem[_0x480993(0x806)],'BattleSystem':this[_0x480993(0x499)](),'FontSize':$dataSystem[_0x480993(0x314)]['fontSize'],'Padding':0xc};},Game_System['prototype'][_0x391453(0x783)]=function(){const _0x19f46f=_0x391453;if($gameTemp['_forcedTroopView']==='SV')return!![];else{if($gameTemp[_0x19f46f(0x7d8)]==='FV'){if('iBURW'===_0x19f46f(0x897)){const _0x47699b=_0xaf3e81[_0x19f46f(0x1f6)]['CustomParamAbb'][_0x21e9f1],_0x4c352f=this[_0x47699b];return _0x40f159[_0x19f46f(0x1f6)]['CustomParamType'][_0x2ac11c]==='integer'?_0x4c352f:_0x4fa960?_0x3188a6(_0x27ac15[_0x19f46f(0x213)](_0x4c352f*0x64))+'%':_0x4c352f;}else return![];}}if(this[_0x19f46f(0x3a9)]===undefined)this['initCoreEngine']();if(this['_CoreEngineSettings']['SideView']===undefined)this['initCoreEngine']();return this['_CoreEngineSettings']['SideView'];},Game_System[_0x391453(0x307)][_0x391453(0x6a0)]=function(_0x373468){const _0x5e7a1=_0x391453;if(this['_CoreEngineSettings']===undefined)this['initCoreEngine']();if(this[_0x5e7a1(0x3a9)][_0x5e7a1(0x860)]===undefined)this[_0x5e7a1(0x442)]();this['_CoreEngineSettings'][_0x5e7a1(0x860)]=_0x373468;},Game_System[_0x391453(0x307)][_0x391453(0x4bf)]=function(){const _0x303125=_0x391453;if(this[_0x303125(0x3a9)]===undefined)this[_0x303125(0x442)]();this[_0x303125(0x3a9)][_0x303125(0x102)]=this['initialBattleSystem']();},Game_System['prototype'][_0x391453(0x499)]=function(){const _0x10dadb=_0x391453,_0x442a04=(VisuMZ['CoreEngine'][_0x10dadb(0x63e)][_0x10dadb(0x102)]||_0x10dadb(0x312))[_0x10dadb(0x448)]()['trim']();return VisuMZ[_0x10dadb(0x1f6)]['CreateBattleSystemID'](_0x442a04);},Game_System['prototype'][_0x391453(0x24b)]=function(){const _0x1c3ea5=_0x391453;if($gameTemp[_0x1c3ea5(0x3d2)]!==undefined)return $gameTemp[_0x1c3ea5(0x3d2)];if(this[_0x1c3ea5(0x3a9)]===undefined)this['initCoreEngine']();if(this[_0x1c3ea5(0x3a9)][_0x1c3ea5(0x102)]===undefined)this['resetBattleSystem']();return this['_CoreEngineSettings']['BattleSystem'];},Game_System[_0x391453(0x307)][_0x391453(0x3b6)]=function(_0x592a57){const _0x2c2772=_0x391453;if(this['_CoreEngineSettings']===undefined)this[_0x2c2772(0x442)]();if(this[_0x2c2772(0x3a9)][_0x2c2772(0x102)]===undefined)this[_0x2c2772(0x4bf)]();this[_0x2c2772(0x3a9)][_0x2c2772(0x102)]=_0x592a57;},Game_System[_0x391453(0x307)][_0x391453(0x492)]=function(){const _0x17b057=_0x391453;if(this[_0x17b057(0x3a9)]===undefined)this[_0x17b057(0x442)]();if(this['_CoreEngineSettings'][_0x17b057(0x885)]===undefined)this[_0x17b057(0x442)]();return this[_0x17b057(0x3a9)][_0x17b057(0x885)];},Game_System[_0x391453(0x307)][_0x391453(0x460)]=function(_0x42d92b){const _0x88da5c=_0x391453;if(this[_0x88da5c(0x3a9)]===undefined)this[_0x88da5c(0x442)]();if(this[_0x88da5c(0x3a9)][_0x88da5c(0x54c)]===undefined)this[_0x88da5c(0x442)]();this[_0x88da5c(0x3a9)][_0x88da5c(0x885)]=_0x42d92b;},Game_System[_0x391453(0x307)]['windowPadding']=function(){const _0x35a679=_0x391453;if(this[_0x35a679(0x3a9)]===undefined)this[_0x35a679(0x442)]();if(this[_0x35a679(0x3a9)][_0x35a679(0x8e7)]===undefined)this[_0x35a679(0x442)]();return this[_0x35a679(0x3a9)][_0x35a679(0x8e7)];},Game_System[_0x391453(0x307)]['setWindowPadding']=function(_0x44f5fc){const _0x987c5d=_0x391453;if(this['_CoreEngineSettings']===undefined)this[_0x987c5d(0x442)]();if(this['_CoreEngineSettings']['TimeProgress']===undefined)this['initCoreEngine']();this[_0x987c5d(0x3a9)]['Padding']=_0x44f5fc;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x599)]=Game_Screen[_0x391453(0x307)][_0x391453(0x4f3)],Game_Screen['prototype']['initialize']=function(){const _0x192438=_0x391453;VisuMZ[_0x192438(0x1f6)][_0x192438(0x599)][_0x192438(0xd0)](this),this[_0x192438(0xdb)]();},Game_Screen['prototype'][_0x391453(0xdb)]=function(){const _0xdb1984=_0x391453,_0xff4409=VisuMZ[_0xdb1984(0x1f6)][_0xdb1984(0x63e)][_0xdb1984(0x641)];this['_coreEngineShakeStyle']=_0xff4409?.['DefaultStyle']||_0xdb1984(0x23a);},Game_Screen[_0x391453(0x307)][_0x391453(0x6a1)]=function(){if(this['_coreEngineShakeStyle']===undefined)this['initCoreEngineScreenShake']();return this['_coreEngineShakeStyle'];},Game_Screen[_0x391453(0x307)][_0x391453(0x176)]=function(_0x407690){const _0xe1add3=_0x391453;if(this['_coreEngineShakeStyle']===undefined)this[_0xe1add3(0xdb)]();this[_0xe1add3(0x427)]=_0x407690[_0xe1add3(0x28a)]()[_0xe1add3(0x780)]();},Game_Picture[_0x391453(0x307)][_0x391453(0x56e)]=function(){const _0x3a6dc3=_0x391453;if($gameParty[_0x3a6dc3(0x17a)]())return![];return this[_0x3a6dc3(0x32f)]()&&this[_0x3a6dc3(0x32f)]()[_0x3a6dc3(0xda)](0x0)==='!';},VisuMZ[_0x391453(0x1f6)][_0x391453(0x7ac)]=Game_Picture[_0x391453(0x307)]['x'],Game_Picture[_0x391453(0x307)]['x']=function(){const _0xb0634d=_0x391453;return this[_0xb0634d(0x56e)]()?this[_0xb0634d(0x8dd)]():VisuMZ[_0xb0634d(0x1f6)][_0xb0634d(0x7ac)][_0xb0634d(0xd0)](this);},Game_Picture[_0x391453(0x307)][_0x391453(0x8dd)]=function(){const _0x1208e4=_0x391453,_0x29c5b1=$gameMap[_0x1208e4(0x656)]()*$gameMap['tileWidth']();return(this['_x']-_0x29c5b1)*$gameScreen[_0x1208e4(0x6fa)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x2e6)]=Game_Picture[_0x391453(0x307)]['y'],Game_Picture['prototype']['y']=function(){const _0x58ad71=_0x391453;if(this[_0x58ad71(0x56e)]())return this[_0x58ad71(0x192)]();else{if(_0x58ad71(0x731)!==_0x58ad71(0x389))return VisuMZ['CoreEngine'][_0x58ad71(0x2e6)][_0x58ad71(0xd0)](this);else{var _0x2712b6=_0x2c7a55(_0x58ad71(0x369))[_0x58ad71(0x5f3)]['get']();_0x1d2f16[_0x58ad71(0x4b0)]();if(_0x189b9f)_0x20ecc4(_0x2712b6[_0x58ad71(0x2c2)][_0x58ad71(0x922)](_0x2712b6),0x190);}}},Game_Picture[_0x391453(0x307)][_0x391453(0x192)]=function(){const _0x4e825e=_0x391453,_0x1ea4cc=$gameMap[_0x4e825e(0x831)]()*$gameMap[_0x4e825e(0x8c4)]();return(this['_y']-_0x1ea4cc)*$gameScreen[_0x4e825e(0x6fa)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x287)]=Game_Picture[_0x391453(0x307)]['scaleX'],Game_Picture[_0x391453(0x307)]['scaleX']=function(){const _0x27aa10=_0x391453;let _0x5c9904=VisuMZ[_0x27aa10(0x1f6)][_0x27aa10(0x287)][_0x27aa10(0xd0)](this);return this[_0x27aa10(0x56e)]()&&('MXqVL'!==_0x27aa10(0x766)?_0x5c9904*=$gameScreen[_0x27aa10(0x6fa)]():this['_effectsContainer'][_0x27aa10(0x193)](_0x5e0def)),_0x5c9904;},VisuMZ['CoreEngine']['Game_Picture_scaleY']=Game_Picture[_0x391453(0x307)][_0x391453(0x8bc)],Game_Picture['prototype'][_0x391453(0x8bc)]=function(){const _0x5f4400=_0x391453;let _0x30f25c=VisuMZ[_0x5f4400(0x1f6)][_0x5f4400(0xd5)][_0x5f4400(0xd0)](this);return this[_0x5f4400(0x56e)]()&&(_0x5f4400(0x3fc)!==_0x5f4400(0x31c)?_0x30f25c*=$gameScreen[_0x5f4400(0x6fa)]():(_0x24485d[_0x5f4400(0x893)](),this[_0x5f4400(0x66e)]===_0x5f4400(0x64d)?this['switchModes'](_0x5f4400(0x75d)):this[_0x5f4400(0x28d)](_0x5f4400(0x64d)))),_0x30f25c;},Game_Picture[_0x391453(0x307)]['setEasingType']=function(_0x3782c9){const _0x367411=_0x391453;this[_0x367411(0x482)]=_0x3782c9;},VisuMZ[_0x391453(0x1f6)][_0x391453(0xf1)]=Game_Picture[_0x391453(0x307)][_0x391453(0x4db)],Game_Picture[_0x391453(0x307)][_0x391453(0x4db)]=function(_0x50c71f){const _0x301404=_0x391453;return this[_0x301404(0x482)]=this[_0x301404(0x482)]||0x0,[0x0,0x1,0x2,0x3][_0x301404(0x3fe)](this[_0x301404(0x482)])?VisuMZ['CoreEngine'][_0x301404(0xf1)]['call'](this,_0x50c71f):VisuMZ[_0x301404(0x682)](_0x50c71f,this[_0x301404(0x482)]);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x414)]=Game_Action[_0x391453(0x307)][_0x391453(0x344)],Game_Action[_0x391453(0x307)][_0x391453(0x344)]=function(_0xace9f3){const _0x5da274=_0x391453;return VisuMZ[_0x5da274(0x1f6)][_0x5da274(0x63e)][_0x5da274(0x7e5)]['ImprovedAccuracySystem']?this['itemHitImprovedAccuracy'](_0xace9f3):'PPScq'!=='PPScq'?_0x162e93[_0x5da274(0x339)]:VisuMZ[_0x5da274(0x1f6)][_0x5da274(0x414)]['call'](this,_0xace9f3);},Game_Action['prototype'][_0x391453(0x66c)]=function(_0x4663ec){const _0x43e8c5=_0x391453,_0x1c47c6=this[_0x43e8c5(0x32c)](_0x4663ec),_0x4e5770=this[_0x43e8c5(0x558)](_0x4663ec),_0x22a830=this[_0x43e8c5(0x79b)](_0x4663ec);return _0x1c47c6*(_0x4e5770-_0x22a830);},VisuMZ[_0x391453(0x1f6)]['Game_Action_itemEva']=Game_Action[_0x391453(0x307)]['itemEva'],Game_Action[_0x391453(0x307)][_0x391453(0x908)]=function(_0x35a204){const _0x492d07=_0x391453;return VisuMZ[_0x492d07(0x1f6)][_0x492d07(0x63e)][_0x492d07(0x7e5)][_0x492d07(0x43d)]?0x0:VisuMZ[_0x492d07(0x1f6)]['Game_Action_itemEva'][_0x492d07(0xd0)](this,_0x35a204);},Game_Action['prototype']['itemSuccessRate']=function(_0x139989){const _0x58278c=_0x391453;return this[_0x58278c(0x250)]()[_0x58278c(0x564)]*0.01;},Game_Action['prototype']['subjectHitRate']=function(_0xe85e97){const _0x2a78bb=_0x391453;if(VisuMZ[_0x2a78bb(0x1f6)]['Settings']['QoL'][_0x2a78bb(0x946)]&&this['isItem']())return 0x1;if(this[_0x2a78bb(0x57b)]()){if('enlgh'===_0x2a78bb(0xd8))this[_0x2a78bb(0x3d2)]=_0x2a78bb(0x3e5);else return VisuMZ[_0x2a78bb(0x1f6)][_0x2a78bb(0x63e)]['QoL'][_0x2a78bb(0x946)]&&this['subject']()[_0x2a78bb(0xd9)]()?this['subject']()[_0x2a78bb(0x240)]+0.05:this[_0x2a78bb(0x61d)]()['hit'];}else return 0x1;},Game_Action[_0x391453(0x307)][_0x391453(0x79b)]=function(_0x445fe7){const _0xb99ca6=_0x391453;if(this[_0xb99ca6(0x61d)]()['isActor']()===_0x445fe7[_0xb99ca6(0xd9)]())return 0x0;if(this[_0xb99ca6(0x57b)]()){if('gQphZ'!==_0xb99ca6(0x2b7))this['_inputString']+=_0x37cf20;else{if(VisuMZ[_0xb99ca6(0x1f6)]['Settings'][_0xb99ca6(0x7e5)][_0xb99ca6(0x946)]&&_0x445fe7[_0xb99ca6(0x567)]())return _0x445fe7[_0xb99ca6(0x1f0)]-0.05;else{if(_0xb99ca6(0x589)!==_0xb99ca6(0x562))return _0x445fe7[_0xb99ca6(0x1f0)];else{_0x36d388[_0xb99ca6(0x1f6)][_0xb99ca6(0x703)][_0xb99ca6(0xd0)](this,_0x2b6cac);const _0x22b192=_0x27bd8e['note'];if(_0x22b192[_0xb99ca6(0x13d)](/<MAX LEVEL:[ ](\d+)>/i)){_0x58d89d[_0xb99ca6(0x533)]=_0x36aa2a(_0x217ca3['$1']);if(_0xdf26eb[_0xb99ca6(0x533)]===0x0)_0x3be44e[_0xb99ca6(0x533)]=_0x5278dd[_0xb99ca6(0x878)];}_0x22b192[_0xb99ca6(0x13d)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x200765[_0xb99ca6(0x2d9)]=_0x3a197f['min'](_0xb49b10(_0x283947['$1']),_0x250e47[_0xb99ca6(0x533)]));}}}}else{if(this[_0xb99ca6(0x3a3)]()){if(_0xb99ca6(0x5ef)==='MsHXK'){const _0x28769c=_0xb99ca6(0x73d);this['_colorCache']=this[_0xb99ca6(0x471)]||{};if(this[_0xb99ca6(0x471)][_0x28769c])return this[_0xb99ca6(0x471)][_0x28769c];const _0x4a87b4=_0x373af0[_0xb99ca6(0x1f6)]['Settings'][_0xb99ca6(0x839)][_0xb99ca6(0x32e)];return this[_0xb99ca6(0xdc)](_0x28769c,_0x4a87b4);}else return _0x445fe7[_0xb99ca6(0x339)];}else return 0x0;}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x5f2)]=Game_Action[_0x391453(0x307)][_0x391453(0x470)],Game_Action['prototype'][_0x391453(0x470)]=function(_0x4cb892){const _0x293ef1=_0x391453;VisuMZ[_0x293ef1(0x1f6)][_0x293ef1(0x5f2)][_0x293ef1(0xd0)](this,_0x4cb892);if(VisuMZ[_0x293ef1(0x1f6)]['Settings'][_0x293ef1(0x7e5)]['ImprovedAccuracySystem'])return;const _0x3f1b53=_0x4cb892['result']();if(_0x3f1b53[_0x293ef1(0x86e)]){if(0x1-this[_0x293ef1(0x908)](_0x4cb892)>this[_0x293ef1(0x344)](_0x4cb892)){if(_0x293ef1(0x77e)!==_0x293ef1(0x77e))return _0x11bfdb[_0x293ef1(0x1f6)][_0x293ef1(0x414)][_0x293ef1(0xd0)](this,_0x3dc90f);else _0x3f1b53[_0x293ef1(0x86e)]=![],_0x3f1b53['evaded']=!![];}}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x4b8)]=Game_BattlerBase[_0x391453(0x307)][_0x391453(0x3ac)],Game_BattlerBase[_0x391453(0x307)][_0x391453(0x3ac)]=function(){const _0x531605=_0x391453;this[_0x531605(0x23b)]={},VisuMZ['CoreEngine'][_0x531605(0x4b8)][_0x531605(0xd0)](this);},VisuMZ['CoreEngine'][_0x391453(0x55d)]=Game_BattlerBase[_0x391453(0x307)]['refresh'],Game_BattlerBase[_0x391453(0x307)][_0x391453(0x8e5)]=function(){const _0x4b919f=_0x391453;this[_0x4b919f(0x23b)]={},VisuMZ['CoreEngine'][_0x4b919f(0x55d)][_0x4b919f(0xd0)](this);},Game_BattlerBase[_0x391453(0x307)][_0x391453(0x8d0)]=function(_0x4ca1ff){const _0x49fe63=_0x391453;return this[_0x49fe63(0x23b)]=this['_cache']||{},this[_0x49fe63(0x23b)][_0x4ca1ff]!==undefined;},Game_BattlerBase[_0x391453(0x307)][_0x391453(0x2e3)]=function(_0x2fdbef){const _0x535ebd=_0x391453,_0x5c7759=(_0x5d0cc1,_0xdfb6f5)=>{const _0x70e65f=_0x35a1;if(!_0xdfb6f5)return _0x5d0cc1;if(_0xdfb6f5[_0x70e65f(0x185)]['match'](VisuMZ['CoreEngine'][_0x70e65f(0x264)][_0x70e65f(0x2e3)][_0x2fdbef])){var _0x4dac4d=Number(RegExp['$1']);_0x5d0cc1+=_0x4dac4d;}if(_0xdfb6f5[_0x70e65f(0x185)][_0x70e65f(0x13d)](VisuMZ['CoreEngine']['RegExp'][_0x70e65f(0x7aa)][_0x2fdbef])){var _0x13e77b=String(RegExp['$1']);try{_0x5d0cc1+=eval(_0x13e77b);}catch(_0x4e8a31){if($gameTemp[_0x70e65f(0x4a5)]())console['log'](_0x4e8a31);}}return _0x5d0cc1;};return this[_0x535ebd(0x7d1)]()[_0x535ebd(0x34d)](_0x5c7759,this[_0x535ebd(0x3af)][_0x2fdbef]);},Game_BattlerBase[_0x391453(0x307)][_0x391453(0x592)]=function(_0x15f300){const _0x156777=_0x391453;var _0x41f56d=_0x156777(0x664)+(this[_0x156777(0xd9)]()?'Actor':'Enemy')+'ParamMax'+_0x15f300;if(this[_0x156777(0x8d0)](_0x41f56d))return this['_cache'][_0x41f56d];this[_0x156777(0x23b)][_0x41f56d]=eval(VisuMZ[_0x156777(0x1f6)][_0x156777(0x63e)][_0x156777(0x217)][_0x41f56d]);const _0x25e602=(_0x380bd1,_0x425a62)=>{const _0x5f5be5=_0x156777;if(!_0x425a62)return _0x380bd1;if(_0x425a62['note']['match'](VisuMZ[_0x5f5be5(0x1f6)][_0x5f5be5(0x264)][_0x5f5be5(0x592)][_0x15f300])){if('uHYSO'!==_0x5f5be5(0x407))_0x48c17b[_0x5f5be5(0x4a0)](_0x5f5be5(0x624))&&_0x54139f[_0x5f5be5(0x1f6)][_0x5f5be5(0x63e)]['QoL']['NewGameBoot']?this[_0x5f5be5(0x3a2)]():_0x49e078[_0x5f5be5(0x1f6)][_0x5f5be5(0x379)]['call'](this);else{var _0x485379=Number(RegExp['$1']);if(_0x485379===0x0)_0x485379=Number[_0x5f5be5(0x878)];_0x380bd1=Math['max'](_0x380bd1,_0x485379);}}if(_0x425a62['note']['match'](VisuMZ[_0x5f5be5(0x1f6)]['RegExp'][_0x5f5be5(0x14d)][_0x15f300])){var _0x2513ab=String(RegExp['$1']);try{if(_0x5f5be5(0x3b2)==='gpxQQ')_0x380bd1=Math[_0x5f5be5(0x933)](_0x380bd1,Number(eval(_0x2513ab)));else{this[_0x5f5be5(0x1de)]['clear']();const _0x565a67=_0x1e1e62[_0x5f5be5(0x18c)],_0x36fe96=_0x2d4f00[_0x5f5be5(0x7ad)](_0x565a67);if(!_0x36fe96)return;this[_0x5f5be5(0x5b5)]=_0x36fe96[_0x5f5be5(0x5db)],this[_0x5f5be5(0x919)]=_0x36fe96['_x'],this[_0x5f5be5(0x103)]=_0x36fe96['_y'];const _0x8c8fcb=_0x1044d0[_0x5f5be5(0x5c5)]();this[_0x5f5be5(0x1de)][_0x5f5be5(0x327)](0x0,0x0,this['innerWidth'],this['innerHeight'],_0x8c8fcb);const _0x344766=_0x5f5be5(0x8c1)[_0x5f5be5(0x5ae)](_0x36fe96['_origin']===0x0?_0x5f5be5(0x104):'Center'),_0x23872f='X:\x20%1'[_0x5f5be5(0x5ae)](_0x36fe96['_x']),_0x3dc249='Y:\x20%1'[_0x5f5be5(0x5ae)](_0x36fe96['_y']),_0x5db032=_0x5f5be5(0x441)[_0x5f5be5(0x5ae)](_0x468363[_0x5f5be5(0x28c)](_0x5f5be5(0x331)));let _0x3b5e2f=_0x3d9cd8[_0x5f5be5(0x4ff)](this['innerWidth']/0x4);this[_0x5f5be5(0x809)](_0x344766,_0x3b5e2f*0x0,0x0,_0x3b5e2f),this[_0x5f5be5(0x809)](_0x23872f,_0x3b5e2f*0x1,0x0,_0x3b5e2f,_0x5f5be5(0x675)),this[_0x5f5be5(0x809)](_0x3dc249,_0x3b5e2f*0x2,0x0,_0x3b5e2f,_0x5f5be5(0x675));const _0x4790a8=this['textSizeEx'](_0x5db032)[_0x5f5be5(0x786)],_0x4f5c03=this[_0x5f5be5(0xf9)]-_0x4790a8;this[_0x5f5be5(0x294)](_0x5db032,_0x4f5c03,0x0,_0x4790a8);}}catch(_0xf937dd){if(_0x5f5be5(0x36d)!==_0x5f5be5(0x32d)){if($gameTemp[_0x5f5be5(0x4a5)]())console['log'](_0xf937dd);}else{const _0x5104e8=_0x5c7df1[_0x5f5be5(0x3d7)],_0x4463dc=_0x431f62[_0x5f5be5(0x1c4)]||'',_0x1426f4=_0x2a494e['version']||'',_0x12df66=_0x97823d['CoreEngine'][_0x5f5be5(0x63e)][_0x5f5be5(0x1e9)][_0x5f5be5(0x28b)][_0x5f5be5(0x451)],_0x137e14=_0x12df66[_0x5f5be5(0x5ae)](_0x5104e8,_0x4463dc,_0x1426f4);_0x276efd[_0x5f5be5(0x552)]=_0x137e14;}}}return _0x380bd1;};if(this[_0x156777(0x23b)][_0x41f56d]===0x0)this[_0x156777(0x23b)][_0x41f56d]=Number['MAX_SAFE_INTEGER'];return this[_0x156777(0x23b)][_0x41f56d]=this[_0x156777(0x7d1)]()[_0x156777(0x34d)](_0x25e602,this['_cache'][_0x41f56d]),this[_0x156777(0x23b)][_0x41f56d];},Game_BattlerBase[_0x391453(0x307)]['paramRate']=function(_0x2483e4){const _0x51edbe=_0x391453,_0x2dbb7e=this[_0x51edbe(0x95e)](Game_BattlerBase[_0x51edbe(0x2ab)],_0x2483e4),_0x59960f=(_0x16f28d,_0x240cea)=>{const _0x130bea=_0x51edbe;if(!_0x240cea)return _0x16f28d;if(_0x240cea['note'][_0x130bea(0x13d)](VisuMZ['CoreEngine'][_0x130bea(0x264)][_0x130bea(0x792)][_0x2483e4])){var _0x5c09bc=Number(RegExp['$1'])/0x64;_0x16f28d*=_0x5c09bc;}if(_0x240cea['note']['match'](VisuMZ[_0x130bea(0x1f6)][_0x130bea(0x264)][_0x130bea(0x604)][_0x2483e4])){var _0x5c09bc=Number(RegExp['$1']);_0x16f28d*=_0x5c09bc;}if(_0x240cea['note'][_0x130bea(0x13d)](VisuMZ[_0x130bea(0x1f6)]['RegExp'][_0x130bea(0x46c)][_0x2483e4])){var _0x493fe5=String(RegExp['$1']);try{_0x130bea(0x5dc)!==_0x130bea(0x310)?_0x16f28d*=eval(_0x493fe5):_0x29b621&&_0x568a41[_0x130bea(0x268)](_0x1efcf5);}catch(_0x2a6fd9){if('Zuymf'===_0x130bea(0x3ae))this[_0x130bea(0x1de)]['fontSize']+=0x6;else{if($gameTemp[_0x130bea(0x4a5)]())console[_0x130bea(0x4fd)](_0x2a6fd9);}}}return _0x16f28d;};return this[_0x51edbe(0x7d1)]()['reduce'](_0x59960f,_0x2dbb7e);},Game_BattlerBase[_0x391453(0x307)][_0x391453(0x7a9)]=function(_0x126fce){const _0x37a446=_0x391453,_0x56bf6e=(_0x129db2,_0x227e67)=>{const _0x550ef9=_0x35a1;if('xjyMv'==='oPnxM')this[_0x550ef9(0x809)](_0x56ea97[_0x550ef9(0x1f6)][_0x550ef9(0x63e)][_0x550ef9(0x6ea)][_0x550ef9(0x359)],_0x477a37['x'],_0x5577c4['y'],_0x3afd23[_0x550ef9(0x786)],_0x550ef9(0x33e));else{if(!_0x227e67)return _0x129db2;if(_0x227e67[_0x550ef9(0x185)][_0x550ef9(0x13d)](VisuMZ[_0x550ef9(0x1f6)][_0x550ef9(0x264)]['paramFlat'][_0x126fce])){var _0x347971=Number(RegExp['$1']);_0x129db2+=_0x347971;}if(_0x227e67[_0x550ef9(0x185)][_0x550ef9(0x13d)](VisuMZ[_0x550ef9(0x1f6)]['RegExp'][_0x550ef9(0x8ab)][_0x126fce])){if(_0x550ef9(0x33c)===_0x550ef9(0x660))_0x5ea00f(_0x550ef9(0x130)[_0x550ef9(0x5ae)](_0x1103c0,_0x996f19,_0x403f99)),_0x4c114a[_0x550ef9(0x4f6)]();else{var _0x1f95c2=String(RegExp['$1']);try{if(_0x550ef9(0x11d)!==_0x550ef9(0x11d))return _0x11c363[_0x550ef9(0x1f6)][_0x550ef9(0x63e)][_0x550ef9(0x1e9)][_0x550ef9(0x28b)][_0x550ef9(0x397)];else _0x129db2+=eval(_0x1f95c2);}catch(_0x4ba239){if($gameTemp[_0x550ef9(0x4a5)]())console[_0x550ef9(0x4fd)](_0x4ba239);}}}return _0x129db2;}};return this[_0x37a446(0x7d1)]()[_0x37a446(0x34d)](_0x56bf6e,0x0);},Game_BattlerBase['prototype'][_0x391453(0x50a)]=function(_0xa602d8){const _0x3fc669=_0x391453;let _0x1a2f10='param'+_0xa602d8+_0x3fc669(0x391);if(this[_0x3fc669(0x8d0)](_0x1a2f10))return this[_0x3fc669(0x23b)][_0x1a2f10];return this[_0x3fc669(0x23b)][_0x1a2f10]=Math[_0x3fc669(0x213)](VisuMZ[_0x3fc669(0x1f6)][_0x3fc669(0x63e)][_0x3fc669(0x217)][_0x3fc669(0x8c9)]['call'](this,_0xa602d8)),this[_0x3fc669(0x23b)][_0x1a2f10];},Game_BattlerBase['prototype'][_0x391453(0x4e6)]=function(_0x29437a){const _0x25aecb=_0x391453,_0x21366f=(_0x33f61d,_0x181d03)=>{const _0x582d77=_0x35a1;if(!_0x181d03)return _0x33f61d;if(_0x181d03[_0x582d77(0x185)][_0x582d77(0x13d)](VisuMZ[_0x582d77(0x1f6)][_0x582d77(0x264)][_0x582d77(0x2ea)][_0x29437a])){var _0x256f02=Number(RegExp['$1'])/0x64;_0x33f61d+=_0x256f02;}if(_0x181d03[_0x582d77(0x185)][_0x582d77(0x13d)](VisuMZ[_0x582d77(0x1f6)][_0x582d77(0x264)][_0x582d77(0xcc)][_0x29437a])){if('BJgDd'===_0x582d77(0x64b))_0x2d366f+=_0x29870b+'\x0a',_0x5555fc+=_0x582d77(0x8c8)[_0x582d77(0x5ae)](_0xcab5dd['parameters'][0x0]);else{var _0x256f02=Number(RegExp['$1']);_0x33f61d+=_0x256f02;}}if(_0x181d03[_0x582d77(0x185)][_0x582d77(0x13d)](VisuMZ[_0x582d77(0x1f6)][_0x582d77(0x264)]['xparamPlusJS'][_0x29437a])){if(_0x582d77(0x36c)!=='mqMBF'){var _0x522b90=String(RegExp['$1']);try{_0x582d77(0x65d)!==_0x582d77(0x65d)?(this['centerCameraCheckData']()['centerY']=!![],this[_0x582d77(0x2dd)]()['displayY']=_0xdc010a['DisplayLockY']):_0x33f61d+=eval(_0x522b90);}catch(_0x250d9e){if(_0x582d77(0x1c9)!==_0x582d77(0x1c9)){const _0x26082f=_0x5a7906[_0x582d77(0x145)]()[_0x582d77(0x32f)]['replace'](/\\I\[(\d+)\]/gi,'');this['drawText'](_0x26082f,_0x3cd1c5,_0x4fc568,_0x63317e);}else{if($gameTemp['isPlaytest']())console[_0x582d77(0x4fd)](_0x250d9e);}}}else{if(!_0x23d419[_0x582d77(0x4a5)]())return;if(!_0xd754a7[_0x582d77(0x6d5)]())return;if(!_0x2d1524[_0x582d77(0x17a)]())return;_0x40ea33[_0x582d77(0x84c)](_0x54208a,_0x25c6c8);const _0x7fb152=_0x582d77(0x402)[_0x582d77(0x5ae)](_0x64d56[_0x582d77(0x6cc)]['padZero'](0x4)),_0x2f954e=_0x3d12e3[_0x582d77(0x1f6)][_0x582d77(0x12c)](_0x527f29['_troopId']);_0x2e0c35[_0x582d77(0x1f6)][_0x582d77(0x688)](_0x2f954e,_0x7fb152,!![]);}}return _0x33f61d;};return this[_0x25aecb(0x7d1)]()['reduce'](_0x21366f,0x0);},Game_BattlerBase[_0x391453(0x307)]['xparamRate']=function(_0x339a63){const _0x37592d=_0x391453,_0x38d69d=(_0x522563,_0x4aebe5)=>{const _0x1b8ded=_0x35a1;if(!_0x4aebe5)return _0x522563;if(_0x4aebe5[_0x1b8ded(0x185)][_0x1b8ded(0x13d)](VisuMZ[_0x1b8ded(0x1f6)][_0x1b8ded(0x264)][_0x1b8ded(0x40d)][_0x339a63])){if(_0x1b8ded(0x78a)!=='ThRxc'){var _0x10b81e=Number(RegExp['$1'])/0x64;_0x522563*=_0x10b81e;}else this['_inputSpecialKeyCode']=_0x29c36b[_0x1b8ded(0x867)],_0x2ba192[_0x1b8ded(0x1f6)]['Input_onKeyDown'][_0x1b8ded(0xd0)](this,_0x4cbba0),this['setLastGamepadUsed'](null);}if(_0x4aebe5[_0x1b8ded(0x185)][_0x1b8ded(0x13d)](VisuMZ[_0x1b8ded(0x1f6)][_0x1b8ded(0x264)][_0x1b8ded(0x5fc)][_0x339a63])){var _0x10b81e=Number(RegExp['$1']);_0x522563*=_0x10b81e;}if(_0x4aebe5[_0x1b8ded(0x185)][_0x1b8ded(0x13d)](VisuMZ[_0x1b8ded(0x1f6)][_0x1b8ded(0x264)][_0x1b8ded(0x941)][_0x339a63])){var _0x799e7a=String(RegExp['$1']);try{if('pxFEB'===_0x1b8ded(0x75c))_0x522563*=eval(_0x799e7a);else{_0x386a88['ConvertParams'](_0x200214,_0x26da6c);const _0x5452c6=_0xd3ecb6[_0x1b8ded(0x8a1)]||0x1;_0x1a7193[_0x1b8ded(0x6e7)](_0x5452c6);}}catch(_0x4c004c){if($gameTemp['isPlaytest']())console[_0x1b8ded(0x4fd)](_0x4c004c);}}return _0x522563;};return this['traitObjects']()[_0x37592d(0x34d)](_0x38d69d,0x1);},Game_BattlerBase[_0x391453(0x307)][_0x391453(0x46a)]=function(_0x2befd1){const _0xa62114=_0x391453,_0x54aea6=(_0x40ed4c,_0x29bb60)=>{const _0x47e14a=_0x35a1;if(!_0x29bb60)return _0x40ed4c;if(_0x29bb60[_0x47e14a(0x185)][_0x47e14a(0x13d)](VisuMZ[_0x47e14a(0x1f6)][_0x47e14a(0x264)][_0x47e14a(0x4a7)][_0x2befd1])){if('PrdEB'!==_0x47e14a(0x3c4))return[0x25,0x26,0x27,0x28][_0x47e14a(0x914)](this['_inputSpecialKeyCode']);else{var _0x624384=Number(RegExp['$1'])/0x64;_0x40ed4c+=_0x624384;}}if(_0x29bb60[_0x47e14a(0x185)][_0x47e14a(0x13d)](VisuMZ[_0x47e14a(0x1f6)][_0x47e14a(0x264)][_0x47e14a(0x910)][_0x2befd1])){var _0x624384=Number(RegExp['$1']);_0x40ed4c+=_0x624384;}if(_0x29bb60[_0x47e14a(0x185)][_0x47e14a(0x13d)](VisuMZ[_0x47e14a(0x1f6)][_0x47e14a(0x264)][_0x47e14a(0x70f)][_0x2befd1])){if('dytaZ'!==_0x47e14a(0x466)){var _0x5743c5=String(RegExp['$1']);try{_0x40ed4c+=eval(_0x5743c5);}catch(_0x5686bb){if($gameTemp['isPlaytest']())console[_0x47e14a(0x4fd)](_0x5686bb);}}else return this[_0x47e14a(0x579)]||null;}return _0x40ed4c;};return this[_0xa62114(0x7d1)]()[_0xa62114(0x34d)](_0x54aea6,0x0);},Game_BattlerBase['prototype'][_0x391453(0x5ca)]=function(_0x57fde5){const _0xefe6e2=_0x391453;let _0x5371f5=_0xefe6e2(0x5ca)+_0x57fde5+_0xefe6e2(0x391);if(this['checkCacheKey'](_0x5371f5))return this['_cache'][_0x5371f5];return this[_0xefe6e2(0x23b)][_0x5371f5]=VisuMZ[_0xefe6e2(0x1f6)][_0xefe6e2(0x63e)][_0xefe6e2(0x217)][_0xefe6e2(0x2f9)]['call'](this,_0x57fde5),this[_0xefe6e2(0x23b)][_0x5371f5];},Game_BattlerBase[_0x391453(0x307)][_0x391453(0x45c)]=function(_0x2b4aa5){const _0x2ac508=_0x391453,_0x1f4ab8=(_0x14c469,_0x4ae7f0)=>{const _0x2f26cd=_0x35a1;if(!_0x4ae7f0)return _0x14c469;if(_0x4ae7f0['note'][_0x2f26cd(0x13d)](VisuMZ['CoreEngine'][_0x2f26cd(0x264)][_0x2f26cd(0x179)][_0x2b4aa5])){if(_0x2f26cd(0x436)===_0x2f26cd(0x436)){var _0x251696=Number(RegExp['$1'])/0x64;_0x14c469+=_0x251696;}else{if(_0x30854d[_0x2f26cd(0x1c4)]==='')return![];if(_0x26f28e['subtitle']==='Subtitle')return![];if(_0x23e58d[_0x2f26cd(0x732)]==='')return![];if(_0x380b78[_0x2f26cd(0x732)]===_0x2f26cd(0x404))return![];return!![];}}if(_0x4ae7f0[_0x2f26cd(0x185)][_0x2f26cd(0x13d)](VisuMZ['CoreEngine'][_0x2f26cd(0x264)][_0x2f26cd(0x48b)][_0x2b4aa5])){var _0x251696=Number(RegExp['$1']);_0x14c469+=_0x251696;}if(_0x4ae7f0[_0x2f26cd(0x185)][_0x2f26cd(0x13d)](VisuMZ[_0x2f26cd(0x1f6)]['RegExp'][_0x2f26cd(0x285)][_0x2b4aa5])){var _0x2f3ff=String(RegExp['$1']);try{_0x14c469+=eval(_0x2f3ff);}catch(_0x3872ce){if(_0x2f26cd(0x33f)===_0x2f26cd(0x33f)){if($gameTemp[_0x2f26cd(0x4a5)]())console[_0x2f26cd(0x4fd)](_0x3872ce);}else{const _0x62254b={'x':_0x5d6cd3,'y':_0x50de29,'animationId':_0x512ec1,'mirror':_0x3a779d,'mute':_0x4abbd5};this[_0x2f26cd(0x5ab)]['push'](_0x62254b);}}}return _0x14c469;};return this[_0x2ac508(0x7d1)]()[_0x2ac508(0x34d)](_0x1f4ab8,0x0);},Game_BattlerBase[_0x391453(0x307)][_0x391453(0x4d3)]=function(_0x56e7fb){const _0x1f6c60=_0x391453,_0x27ac4c=(_0x3823ed,_0x2dfd44)=>{const _0x2bb499=_0x35a1;if(!_0x2dfd44)return _0x3823ed;if(_0x2dfd44['note'][_0x2bb499(0x13d)](VisuMZ[_0x2bb499(0x1f6)][_0x2bb499(0x264)][_0x2bb499(0x655)][_0x56e7fb])){var _0x3c847f=Number(RegExp['$1'])/0x64;_0x3823ed*=_0x3c847f;}if(_0x2dfd44[_0x2bb499(0x185)]['match'](VisuMZ[_0x2bb499(0x1f6)][_0x2bb499(0x264)]['sparamRate2'][_0x56e7fb])){var _0x3c847f=Number(RegExp['$1']);_0x3823ed*=_0x3c847f;}if(_0x2dfd44['note'][_0x2bb499(0x13d)](VisuMZ[_0x2bb499(0x1f6)][_0x2bb499(0x264)]['sparamRateJS'][_0x56e7fb])){var _0xb87625=String(RegExp['$1']);try{_0x3823ed*=eval(_0xb87625);}catch(_0x1ea1ae){if($gameTemp[_0x2bb499(0x4a5)]())console[_0x2bb499(0x4fd)](_0x1ea1ae);}}return _0x3823ed;};return this[_0x1f6c60(0x7d1)]()[_0x1f6c60(0x34d)](_0x27ac4c,0x1);},Game_BattlerBase['prototype']['sparamFlatBonus']=function(_0x45cfbf){const _0x57e78d=_0x391453,_0x16b399=(_0x3ee00b,_0xb89c60)=>{const _0x575ca2=_0x35a1;if(!_0xb89c60)return _0x3ee00b;if(_0xb89c60[_0x575ca2(0x185)][_0x575ca2(0x13d)](VisuMZ[_0x575ca2(0x1f6)]['RegExp'][_0x575ca2(0x926)][_0x45cfbf])){var _0x54e0d4=Number(RegExp['$1'])/0x64;_0x3ee00b+=_0x54e0d4;}if(_0xb89c60[_0x575ca2(0x185)][_0x575ca2(0x13d)](VisuMZ[_0x575ca2(0x1f6)][_0x575ca2(0x264)][_0x575ca2(0x620)][_0x45cfbf])){var _0x54e0d4=Number(RegExp['$1']);_0x3ee00b+=_0x54e0d4;}if(_0xb89c60[_0x575ca2(0x185)][_0x575ca2(0x13d)](VisuMZ[_0x575ca2(0x1f6)][_0x575ca2(0x264)]['sparamFlatJS'][_0x45cfbf])){var _0x5280a2=String(RegExp['$1']);try{_0x3ee00b+=eval(_0x5280a2);}catch(_0x79a71b){if($gameTemp[_0x575ca2(0x4a5)]())console['log'](_0x79a71b);}}return _0x3ee00b;};return this[_0x57e78d(0x7d1)]()['reduce'](_0x16b399,0x0);},Game_BattlerBase['prototype'][_0x391453(0x2b2)]=function(_0x40d79d){const _0x5a515d=_0x391453;let _0xc0da1f='sparam'+_0x40d79d+_0x5a515d(0x391);if(this[_0x5a515d(0x8d0)](_0xc0da1f))return this[_0x5a515d(0x23b)][_0xc0da1f];return this[_0x5a515d(0x23b)][_0xc0da1f]=VisuMZ[_0x5a515d(0x1f6)]['Settings'][_0x5a515d(0x217)][_0x5a515d(0x322)][_0x5a515d(0xd0)](this,_0x40d79d),this[_0x5a515d(0x23b)][_0xc0da1f];},Game_BattlerBase[_0x391453(0x307)]['paramValueByName']=function(_0x14ff6f,_0xda42b1){const _0x3e4caa=_0x391453;if(typeof paramId===_0x3e4caa(0x500))return this[_0x3e4caa(0x50a)](_0x14ff6f);_0x14ff6f=String(_0x14ff6f||'')[_0x3e4caa(0x448)]();if(_0x14ff6f===_0x3e4caa(0x78c))return this[_0x3e4caa(0x50a)](0x0);if(_0x14ff6f===_0x3e4caa(0x2ed))return this['param'](0x1);if(_0x14ff6f==='ATK')return this[_0x3e4caa(0x50a)](0x2);if(_0x14ff6f==='DEF')return this[_0x3e4caa(0x50a)](0x3);if(_0x14ff6f===_0x3e4caa(0xd4))return this['param'](0x4);if(_0x14ff6f===_0x3e4caa(0x591))return this['param'](0x5);if(_0x14ff6f===_0x3e4caa(0x4be))return this['param'](0x6);if(_0x14ff6f==='LUK')return this['param'](0x7);if(_0x14ff6f==='HIT')return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x5ca)](0x0)*0x64))+'%':this[_0x3e4caa(0x5ca)](0x0);if(_0x14ff6f===_0x3e4caa(0x64e))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this['xparam'](0x1)*0x64))+'%':this[_0x3e4caa(0x5ca)](0x1);if(_0x14ff6f===_0x3e4caa(0x83d))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x5ca)](0x2)*0x64))+'%':this['xparam'](0x2);if(_0x14ff6f===_0x3e4caa(0x316))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x5ca)](0x3)*0x64))+'%':this[_0x3e4caa(0x5ca)](0x3);if(_0x14ff6f===_0x3e4caa(0x321))return _0xda42b1?String(Math['round'](this[_0x3e4caa(0x5ca)](0x4)*0x64))+'%':this['xparam'](0x4);if(_0x14ff6f===_0x3e4caa(0x7d3))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x5ca)](0x5)*0x64))+'%':this[_0x3e4caa(0x5ca)](0x5);if(_0x14ff6f===_0x3e4caa(0x1e0))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this['xparam'](0x6)*0x64))+'%':this['xparam'](0x6);if(_0x14ff6f===_0x3e4caa(0x7e3))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x5ca)](0x7)*0x64))+'%':this[_0x3e4caa(0x5ca)](0x7);if(_0x14ff6f==='MRG')return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x5ca)](0x8)*0x64))+'%':this[_0x3e4caa(0x5ca)](0x8);if(_0x14ff6f===_0x3e4caa(0x762))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x5ca)](0x9)*0x64))+'%':this['xparam'](0x9);if(_0x14ff6f===_0x3e4caa(0x396))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x2b2)](0x0)*0x64))+'%':this['sparam'](0x0);if(_0x14ff6f==='GRD')return _0xda42b1?String(Math[_0x3e4caa(0x213)](this['sparam'](0x1)*0x64))+'%':this[_0x3e4caa(0x2b2)](0x1);if(_0x14ff6f===_0x3e4caa(0x1f7))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this['sparam'](0x2)*0x64))+'%':this[_0x3e4caa(0x2b2)](0x2);if(_0x14ff6f===_0x3e4caa(0x39d))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x2b2)](0x3)*0x64))+'%':this[_0x3e4caa(0x2b2)](0x3);if(_0x14ff6f===_0x3e4caa(0x5b3))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x2b2)](0x4)*0x64))+'%':this[_0x3e4caa(0x2b2)](0x4);if(_0x14ff6f===_0x3e4caa(0x79f))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x2b2)](0x5)*0x64))+'%':this[_0x3e4caa(0x2b2)](0x5);if(_0x14ff6f===_0x3e4caa(0x1d7))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this['sparam'](0x6)*0x64))+'%':this['sparam'](0x6);if(_0x14ff6f===_0x3e4caa(0x889))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this['sparam'](0x7)*0x64))+'%':this[_0x3e4caa(0x2b2)](0x7);if(_0x14ff6f===_0x3e4caa(0x5c8))return _0xda42b1?String(Math[_0x3e4caa(0x213)](this[_0x3e4caa(0x2b2)](0x8)*0x64))+'%':this[_0x3e4caa(0x2b2)](0x8);if(_0x14ff6f===_0x3e4caa(0x18d))return _0xda42b1?String(Math['round'](this[_0x3e4caa(0x2b2)](0x9)*0x64))+'%':this[_0x3e4caa(0x2b2)](0x9);if(VisuMZ[_0x3e4caa(0x1f6)]['CustomParamAbb'][_0x14ff6f]){if(_0x3e4caa(0x361)==='oJxyq'){const _0x200fd3=VisuMZ[_0x3e4caa(0x1f6)][_0x3e4caa(0x92e)][_0x14ff6f],_0x2b9fcb=this[_0x200fd3];return VisuMZ[_0x3e4caa(0x1f6)][_0x3e4caa(0x267)][_0x14ff6f]===_0x3e4caa(0x43a)?_0x2b9fcb:_0xda42b1?String(Math[_0x3e4caa(0x213)](_0x2b9fcb*0x64))+'%':_0x2b9fcb;}else this['drawIconBySize'](_0x1d71c6,_0xc6c4c7,_0x55b5ad,this[_0x3e4caa(0x550)]()),_0x510794-=this[_0x3e4caa(0x550)]()+0x2,_0x38d1c0+=this[_0x3e4caa(0x550)]()+0x2;}return'';},Game_BattlerBase[_0x391453(0x307)][_0x391453(0x27d)]=function(){const _0x6e8f93=_0x391453;return this['isAlive']()&&this[_0x6e8f93(0x2e2)]<this['mhp']*VisuMZ[_0x6e8f93(0x1f6)][_0x6e8f93(0x63e)][_0x6e8f93(0x217)][_0x6e8f93(0x293)];},Game_Battler['prototype'][_0x391453(0x6eb)]=function(){const _0x4fd10c=_0x391453;SoundManager[_0x4fd10c(0x49a)](),this[_0x4fd10c(0x674)](_0x4fd10c(0x91b));},VisuMZ[_0x391453(0x1f6)]['Game_Actor_paramBase']=Game_Actor[_0x391453(0x307)]['paramBase'],Game_Actor[_0x391453(0x307)]['paramBase']=function(_0x21123a){const _0x459c33=_0x391453;if(this[_0x459c33(0x468)]>0x63)return this[_0x459c33(0x18b)](_0x21123a);return VisuMZ[_0x459c33(0x1f6)][_0x459c33(0x2e0)][_0x459c33(0xd0)](this,_0x21123a);},Game_Actor[_0x391453(0x307)][_0x391453(0x18b)]=function(_0x59b9fa){const _0x45a504=_0x391453,_0x2c0e32=this[_0x45a504(0x145)]()[_0x45a504(0x8a9)][_0x59b9fa][0x63],_0x2d6c1c=this[_0x45a504(0x145)]()['params'][_0x59b9fa][0x62];return _0x2c0e32+(_0x2c0e32-_0x2d6c1c)*(this[_0x45a504(0x468)]-0x63);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x405)]=Game_Actor[_0x391453(0x307)][_0x391453(0x246)],Game_Actor[_0x391453(0x307)][_0x391453(0x246)]=function(_0x44d839,_0x4844a0){const _0x5cf79b=_0x391453;$gameTemp[_0x5cf79b(0x1c5)]=!![],VisuMZ[_0x5cf79b(0x1f6)][_0x5cf79b(0x405)][_0x5cf79b(0xd0)](this,_0x44d839,_0x4844a0),$gameTemp[_0x5cf79b(0x1c5)]=undefined;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x88b)]=Game_Actor[_0x391453(0x307)]['levelUp'],Game_Actor[_0x391453(0x307)][_0x391453(0x1a1)]=function(){const _0x18ffc7=_0x391453;VisuMZ[_0x18ffc7(0x1f6)][_0x18ffc7(0x88b)][_0x18ffc7(0xd0)](this);if(!$gameTemp[_0x18ffc7(0x1c5)])this[_0x18ffc7(0x829)]();},Game_Actor[_0x391453(0x307)][_0x391453(0x829)]=function(){const _0x256706=_0x391453;this['_cache']={};if(VisuMZ['CoreEngine']['Settings'][_0x256706(0x7e5)][_0x256706(0x800)])this[_0x256706(0x2e2)]=this[_0x256706(0x1c3)];if(VisuMZ[_0x256706(0x1f6)]['Settings'][_0x256706(0x7e5)]['LevelUpFullMp'])this[_0x256706(0x6b4)]=this[_0x256706(0x25a)];},Game_Actor[_0x391453(0x307)][_0x391453(0x89a)]=function(){const _0x3643de=_0x391453;if(this[_0x3643de(0x309)]())return 0x1;const _0x2d5d3e=this[_0x3643de(0x657)]()-this[_0x3643de(0x679)](),_0xabba75=this['currentExp']()-this['currentLevelExp']();return(_0xabba75/_0x2d5d3e)[_0x3643de(0x5d3)](0x0,0x1);},Game_Actor[_0x391453(0x307)][_0x391453(0x7d1)]=function(){const _0x59b929=_0x391453,_0x32ea77=Game_Battler[_0x59b929(0x307)][_0x59b929(0x7d1)][_0x59b929(0xd0)](this);for(const _0x3f93c3 of this[_0x59b929(0x168)]()){_0x3f93c3&&_0x32ea77[_0x59b929(0x268)](_0x3f93c3);}return _0x32ea77[_0x59b929(0x268)](this[_0x59b929(0x145)](),this[_0x59b929(0x6f4)]()),_0x32ea77;},Object['defineProperty'](Game_Enemy['prototype'],'level',{'get':function(){const _0x4904dc=_0x391453;return this[_0x4904dc(0x4cc)]();},'configurable':!![]}),Game_Enemy[_0x391453(0x307)]['getLevel']=function(){const _0x2f4f3c=_0x391453;return this['enemy']()[_0x2f4f3c(0x468)];},Game_Enemy['prototype'][_0x391453(0x518)]=function(){const _0xfca38a=_0x391453;if(!this[_0xfca38a(0x763)]){this[_0xfca38a(0x6ca)]+=Math['round']((Graphics[_0xfca38a(0x8e8)]-0x270)/0x2),this[_0xfca38a(0x6ca)]-=Math[_0xfca38a(0x4ff)]((Graphics[_0xfca38a(0x8e8)]-Graphics['boxHeight'])/0x2);if($gameSystem['isSideView']())this[_0xfca38a(0xf7)]-=Math[_0xfca38a(0x4ff)]((Graphics[_0xfca38a(0x786)]-Graphics[_0xfca38a(0x84b)])/0x2);else{if(_0xfca38a(0x81b)!==_0xfca38a(0x81b)){for(let _0x225c03=0x0;_0x225c03<this[_0xfca38a(0x7a4)]();_0x225c03++){const _0x35d69a=this[_0xfca38a(0x446)]();let _0x1b8654=_0x183cad[_0xfca38a(0x757)];this[_0xfca38a(0x94e)](_0x225c03,_0x35d69a[0x0]);for(const _0x17d653 of _0x35d69a){const _0x335faa=_0x17d653[_0xfca38a(0x576)]();_0x335faa>_0x1b8654&&(_0x1b8654=_0x335faa,this[_0xfca38a(0x94e)](_0x225c03,_0x17d653));}}this['setActionState']('waiting');}else this[_0xfca38a(0xf7)]+=Math[_0xfca38a(0x213)]((Graphics['boxWidth']-0x330)/0x2);}}this[_0xfca38a(0x763)]=!![];},Game_Party[_0x391453(0x307)][_0x391453(0x136)]=function(){const _0x43517a=_0x391453;return VisuMZ[_0x43517a(0x1f6)][_0x43517a(0x63e)]['Gold'][_0x43517a(0x5da)];},VisuMZ[_0x391453(0x1f6)]['Game_Party_consumeItem']=Game_Party[_0x391453(0x307)][_0x391453(0x88a)],Game_Party[_0x391453(0x307)][_0x391453(0x88a)]=function(_0x56e08f){const _0x48da0f=_0x391453;if(VisuMZ['CoreEngine']['Settings'][_0x48da0f(0x7e5)][_0x48da0f(0xe9)]&&DataManager['isKeyItem'](_0x56e08f))return;VisuMZ[_0x48da0f(0x1f6)][_0x48da0f(0x5de)][_0x48da0f(0xd0)](this,_0x56e08f);},Game_Party[_0x391453(0x307)][_0x391453(0x784)]=function(){const _0x19bf54=_0x391453,_0x32b213=VisuMZ['CoreEngine']['Settings'][_0x19bf54(0x7e5)],_0x3cd641=_0x32b213[_0x19bf54(0x846)]??0x63;let _0x2758ec=[];(_0x32b213[_0x19bf54(0x45a)]??!![])&&(_0x2758ec=_0x2758ec[_0x19bf54(0x1cf)]($dataItems));(_0x32b213[_0x19bf54(0x31a)]??!![])&&(_0x2758ec=_0x2758ec[_0x19bf54(0x1cf)]($dataWeapons));(_0x32b213[_0x19bf54(0x5ea)]??!![])&&(_0x2758ec=_0x2758ec[_0x19bf54(0x1cf)]($dataArmors));for(const _0x3026f9 of _0x2758ec){if('icHdV'==='icHdV'){if(!_0x3026f9)continue;if(_0x3026f9[_0x19bf54(0x32f)][_0x19bf54(0x780)]()<=0x0)continue;if(_0x3026f9[_0x19bf54(0x32f)]['match'](/-----/i))continue;this[_0x19bf54(0x615)](_0x3026f9,_0x3cd641);}else this[_0x19bf54(0x6a8)]&&this[_0x19bf54(0x6a8)][_0x19bf54(0x39a)](_0xffddcd[_0x19bf54(0x959)][_0x19bf54(0x3eb)]),this['_listWindow']&&this[_0x19bf54(0x707)][_0x19bf54(0x39a)](_0x1f51e5[_0x19bf54(0x959)][_0x19bf54(0x814)]);}},VisuMZ[_0x391453(0x1f6)]['Game_Troop_setup']=Game_Troop['prototype'][_0x391453(0x6e8)],Game_Troop[_0x391453(0x307)][_0x391453(0x6e8)]=function(_0x28791e){const _0x525254=_0x391453;$gameTemp['clearForcedGameTroopSettingsCoreEngine'](),$gameTemp['applyForcedGameTroopSettingsCoreEngine'](_0x28791e),VisuMZ[_0x525254(0x1f6)][_0x525254(0x8e3)][_0x525254(0xd0)](this,_0x28791e);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x6c3)]=Game_Map['prototype']['setup'],Game_Map['prototype'][_0x391453(0x6e8)]=function(_0x4bd9d6){const _0x170abb=_0x391453;VisuMZ[_0x170abb(0x1f6)]['Game_Map_setup']['call'](this,_0x4bd9d6),this[_0x170abb(0x5cc)](),this[_0x170abb(0x50e)](_0x4bd9d6);},Game_Map[_0x391453(0x307)][_0x391453(0x50e)]=function(){const _0x2a7d0c=_0x391453;this['_hideTileShadows']=VisuMZ['CoreEngine'][_0x2a7d0c(0x63e)][_0x2a7d0c(0x7e5)][_0x2a7d0c(0x152)]||![];const _0x4f2b3b=VisuMZ[_0x2a7d0c(0x1f6)][_0x2a7d0c(0x63e)][_0x2a7d0c(0x13e)],_0x246e33=$dataMap?$dataMap[_0x2a7d0c(0x185)]||'':'';if(_0x246e33['match'](/<SHOW TILE SHADOWS>/i))this['_hideTileShadows']=![];else{if(_0x246e33[_0x2a7d0c(0x13d)](/<HIDE TILE SHADOWS>/i)){if(_0x2a7d0c(0x5e5)!==_0x2a7d0c(0x22a))this[_0x2a7d0c(0x69b)]=!![];else return _0x180a7b['CoreEngine'][_0x2a7d0c(0x63e)][_0x2a7d0c(0x5f3)][_0x2a7d0c(0x51c)];}}if(_0x246e33[_0x2a7d0c(0x13d)](/<SCROLL LOCK X>/i))this['centerCameraCheckData']()[_0x2a7d0c(0x5dd)]=!![],this['centerCameraCheckData']()[_0x2a7d0c(0x656)]=_0x4f2b3b[_0x2a7d0c(0x50f)];else _0x246e33['match'](/<SCROLL LOCK X: (.*?)>/i)&&(this[_0x2a7d0c(0x2dd)]()[_0x2a7d0c(0x5dd)]=!![],this[_0x2a7d0c(0x2dd)]()['displayX']=Number(RegExp['$1']));if(_0x246e33[_0x2a7d0c(0x13d)](/<SCROLL LOCK Y>/i))_0x2a7d0c(0x4fe)!==_0x2a7d0c(0x4fe)?(_0x4384b9[_0x2a7d0c(0x307)][_0x2a7d0c(0x8cf)]['call'](this),this[_0x2a7d0c(0x643)]()):(this[_0x2a7d0c(0x2dd)]()[_0x2a7d0c(0x2a7)]=!![],this[_0x2a7d0c(0x2dd)]()[_0x2a7d0c(0x831)]=_0x4f2b3b['DisplayLockY']);else _0x246e33[_0x2a7d0c(0x13d)](/<SCROLL LOCK Y: (.*?)>/i)&&(this['centerCameraCheckData']()[_0x2a7d0c(0x2a7)]=!![],this[_0x2a7d0c(0x2dd)]()[_0x2a7d0c(0x831)]=Number(RegExp['$1']));},Game_Map[_0x391453(0x307)][_0x391453(0x47c)]=function(){const _0x4165a1=_0x391453;if(this[_0x4165a1(0x69b)]===undefined)this[_0x4165a1(0x50e)]();return this[_0x4165a1(0x69b)];},Game_Map[_0x391453(0x307)][_0x391453(0x5cc)]=function(){const _0x18f795=_0x391453,_0x1c3556=VisuMZ[_0x18f795(0x1f6)][_0x18f795(0x63e)][_0x18f795(0x13e)];this['_centerCameraCheck']={'centerX':![],'centerY':![],'displayX':0x0,'displayY':0x0};if(_0x1c3556['AutoScrollLockX']){const _0xcaacb4=Graphics[_0x18f795(0x786)]/this['tileWidth']();_0xcaacb4%0x1!==0x0&&Math[_0x18f795(0x127)](_0xcaacb4)===this['width']()&&!this['isLoopHorizontal']()&&(this['_centerCameraCheck']['centerX']=!![],this[_0x18f795(0x5e9)][_0x18f795(0x656)]=_0x1c3556[_0x18f795(0x50f)]||0x0);}if(_0x1c3556[_0x18f795(0x845)]){const _0x22f73f=Graphics[_0x18f795(0x8e8)]/this[_0x18f795(0x8c4)]();_0x22f73f%0x1!==0x0&&Math[_0x18f795(0x127)](_0x22f73f)===this[_0x18f795(0x8e8)]()&&!this['isLoopVertical']()&&(_0x18f795(0x537)!==_0x18f795(0x537)?_0x4fa3ec[_0x18f795(0x518)]():(this[_0x18f795(0x5e9)]['centerY']=!![],this[_0x18f795(0x5e9)][_0x18f795(0x831)]=_0x1c3556['DisplayLockY']||0x0));}},Game_Map[_0x391453(0x307)][_0x391453(0x2dd)]=function(){const _0x294306=_0x391453;if(this['_centerCameraCheck']===undefined)this[_0x294306(0x5cc)]();return this[_0x294306(0x5e9)];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x498)]=Game_Map[_0x391453(0x307)][_0x391453(0x209)],Game_Map[_0x391453(0x307)][_0x391453(0x209)]=function(_0x47a896){const _0x1e0032=_0x391453;if(this[_0x1e0032(0x2dd)]()[_0x1e0032(0x2a7)]&&$gameScreen[_0x1e0032(0x6fa)]()===0x1){if(_0x1e0032(0x1e5)!=='HRbxf'){this[_0x1e0032(0x92b)]=this[_0x1e0032(0x2dd)]()[_0x1e0032(0x831)];return;}else return this[_0x1e0032(0x250)]()[_0x1e0032(0x564)]*0.01;}VisuMZ[_0x1e0032(0x1f6)][_0x1e0032(0x498)][_0x1e0032(0xd0)](this,_0x47a896);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x128)]=Game_Map[_0x391453(0x307)][_0x391453(0x491)],Game_Map[_0x391453(0x307)][_0x391453(0x491)]=function(_0x5cab1b){const _0x5162d3=_0x391453;if(this['centerCameraCheckData']()[_0x5162d3(0x5dd)]&&$gameScreen['zoomScale']()===0x1){this[_0x5162d3(0x2b3)]=this[_0x5162d3(0x2dd)]()[_0x5162d3(0x656)];return;}VisuMZ['CoreEngine'][_0x5162d3(0x128)][_0x5162d3(0xd0)](this,_0x5cab1b);},VisuMZ[_0x391453(0x1f6)]['Game_Map_scrollRight']=Game_Map[_0x391453(0x307)][_0x391453(0x1ed)],Game_Map[_0x391453(0x307)]['scrollRight']=function(_0x55ba4d){const _0x4c557e=_0x391453;if(this['centerCameraCheckData']()['centerX']&&$gameScreen['zoomScale']()===0x1){this[_0x4c557e(0x2b3)]=this[_0x4c557e(0x2dd)]()[_0x4c557e(0x656)];return;}VisuMZ[_0x4c557e(0x1f6)][_0x4c557e(0x3f1)][_0x4c557e(0xd0)](this,_0x55ba4d);},VisuMZ[_0x391453(0x1f6)]['Game_Map_scrollUp']=Game_Map[_0x391453(0x307)][_0x391453(0x195)],Game_Map['prototype'][_0x391453(0x195)]=function(_0xb1b52a){const _0x552c67=_0x391453;if(this[_0x552c67(0x2dd)]()[_0x552c67(0x2a7)]&&$gameScreen[_0x552c67(0x6fa)]()===0x1){this[_0x552c67(0x92b)]=this[_0x552c67(0x2dd)]()[_0x552c67(0x831)];return;}VisuMZ[_0x552c67(0x1f6)][_0x552c67(0x66a)]['call'](this,_0xb1b52a);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x532)]=Game_Character[_0x391453(0x307)][_0x391453(0x12f)],Game_Character[_0x391453(0x307)][_0x391453(0x12f)]=function(_0x5b1c09){const _0x4bd16e=_0x391453;try{if(_0x4bd16e(0x243)!=='kfZTs')return _0x1a5b21[_0x4bd16e(0x959)][_0x4bd16e(0x6c9)]['call'](this);else VisuMZ[_0x4bd16e(0x1f6)][_0x4bd16e(0x532)][_0x4bd16e(0xd0)](this,_0x5b1c09);}catch(_0x2dd205){if($gameTemp['isPlaytest']())console[_0x4bd16e(0x4fd)](_0x2dd205);}},Game_Player['prototype'][_0x391453(0x297)]=function(){const _0x5c545d=_0x391453,_0x3c6464=$gameMap[_0x5c545d(0x5ee)]();this[_0x5c545d(0x332)]=Math['randomInt'](_0x3c6464)+Math[_0x5c545d(0x35c)](_0x3c6464)+this['encounterStepsMinimum']();},Game_Player['prototype'][_0x391453(0x54d)]=function(){const _0x48005d=_0x391453;if($dataMap&&$dataMap[_0x48005d(0x185)]&&$dataMap[_0x48005d(0x185)]['match'](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i))return Number(RegExp['$1']);else{if(_0x48005d(0x4c1)===_0x48005d(0x16b))this[_0x48005d(0x556)]();else return VisuMZ[_0x48005d(0x1f6)][_0x48005d(0x63e)]['QoL']['EncounterRateMinimum'];}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x728)]=Game_Event[_0x391453(0x307)][_0x391453(0x617)],Game_Event['prototype'][_0x391453(0x617)]=function(_0x2244f8,_0x4116e2){const _0x339bcf=_0x391453;if(this[_0x339bcf(0x93a)]()){if('oNFOY'===_0x339bcf(0x142))return this['checkSmartEventCollision'](_0x2244f8,_0x4116e2);else _0x5143e0[_0x339bcf(0x1f6)][_0x339bcf(0x49d)]['call'](this),_0x1239c6[_0x339bcf(0x365)]()&&this['movePageButtonSideButtonLayout']();}else return VisuMZ['CoreEngine'][_0x339bcf(0x728)][_0x339bcf(0xd0)](this,_0x2244f8,_0x4116e2);},Game_Event['prototype'][_0x391453(0x93a)]=function(){const _0x3438c3=_0x391453;return VisuMZ[_0x3438c3(0x1f6)][_0x3438c3(0x63e)]['QoL'][_0x3438c3(0x85f)];},Game_Event[_0x391453(0x307)][_0x391453(0x8b5)]=function(_0x510278,_0x380985){const _0x25fe09=_0x391453;if(!this['isNormalPriority']()){if(_0x25fe09(0x5a8)!==_0x25fe09(0x647))return![];else this['_editWindow']['add'](_0x4c7583[_0x1fc7b4])?_0x25fbf2[_0x25fe09(0x19a)]():_0xbc61f3['playBuzzer']();}else{const _0xf36d0f=$gameMap[_0x25fe09(0x133)](_0x510278,_0x380985)['filter'](_0x1e9ff7=>_0x1e9ff7[_0x25fe09(0x6be)]());return _0xf36d0f[_0x25fe09(0x4b1)]>0x0;}},VisuMZ['CoreEngine']['Game_Interpreter_command105']=Game_Interpreter[_0x391453(0x307)][_0x391453(0x444)],Game_Interpreter[_0x391453(0x307)]['command105']=function(_0x456e11){const _0xeb90fe=_0x391453,_0x78da0f=this['getCombinedScrollingText']();return _0x78da0f['match'](/\/\/[ ]SCRIPT[ ]CALL/i)?this[_0xeb90fe(0x5e4)](_0x78da0f):VisuMZ[_0xeb90fe(0x1f6)]['Game_Interpreter_command105'][_0xeb90fe(0xd0)](this,_0x456e11);},Game_Interpreter['prototype']['getCombinedScrollingText']=function(){const _0x242801=_0x391453;let _0x45fbc3='',_0x3f6bf1=this['_index']+0x1;while(this[_0x242801(0x141)][_0x3f6bf1]&&this[_0x242801(0x141)][_0x3f6bf1][_0x242801(0x3cf)]===0x195){_0x45fbc3+=this[_0x242801(0x141)][_0x3f6bf1][_0x242801(0x17d)][0x0]+'\x0a',_0x3f6bf1++;}return _0x45fbc3;},Game_Interpreter[_0x391453(0x307)][_0x391453(0x5e4)]=function(_0x631052){const _0xe13fb8=_0x391453;try{eval(_0x631052);}catch(_0xd56dfc){$gameTemp[_0xe13fb8(0x4a5)]()&&(console['log'](_0xe13fb8(0x7a2)),console[_0xe13fb8(0x4fd)](_0xd56dfc));}return!![];},VisuMZ[_0x391453(0x1f6)]['Game_Interpreter_command111']=Game_Interpreter[_0x391453(0x307)][_0x391453(0x6b3)],Game_Interpreter[_0x391453(0x307)]['command111']=function(_0x48ad48){const _0x2e5355=_0x391453;try{if(_0x2e5355(0x5d9)===_0x2e5355(0x5d9))VisuMZ[_0x2e5355(0x1f6)][_0x2e5355(0x2cc)]['call'](this,_0x48ad48);else return _0x52ffc7['prototype']['buttonAssistText1'][_0x2e5355(0xd0)](this);}catch(_0x2ac045){$gameTemp[_0x2e5355(0x4a5)]()&&(console[_0x2e5355(0x4fd)](_0x2e5355(0x837)),console['log'](_0x2ac045)),this[_0x2e5355(0xfc)]();}return!![];},VisuMZ[_0x391453(0x1f6)]['Game_Interpreter_command122']=Game_Interpreter[_0x391453(0x307)][_0x391453(0x151)],Game_Interpreter[_0x391453(0x307)][_0x391453(0x151)]=function(_0x7d18c1){const _0x1464b5=_0x391453;try{VisuMZ[_0x1464b5(0x1f6)][_0x1464b5(0x2d1)]['call'](this,_0x7d18c1);}catch(_0x4d9d9e){'YdPCA'===_0x1464b5(0x639)?this[_0x1464b5(0x577)]():$gameTemp[_0x1464b5(0x4a5)]()&&(console[_0x1464b5(0x4fd)](_0x1464b5(0x935)),console[_0x1464b5(0x4fd)](_0x4d9d9e));}return!![];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x15e)]=Game_Interpreter[_0x391453(0x307)][_0x391453(0x573)],Game_Interpreter['prototype'][_0x391453(0x573)]=function(){const _0x11e16d=_0x391453;try{VisuMZ['CoreEngine'][_0x11e16d(0x15e)][_0x11e16d(0xd0)](this);}catch(_0x24ac39){$gameTemp['isPlaytest']()&&(_0x11e16d(0x840)===_0x11e16d(0x7b8)?_0x55c30e['CoreEngine']['Scene_Name_onInputOk'][_0x11e16d(0xd0)](this):(console['log'](_0x11e16d(0x1ca)),console[_0x11e16d(0x4fd)](_0x24ac39)));}return!![];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x1b1)]=Game_Interpreter[_0x391453(0x307)][_0x391453(0x891)],Game_Interpreter[_0x391453(0x307)][_0x391453(0x891)]=function(_0x57bb34){const _0x4c7575=_0x391453;return $gameTemp[_0x4c7575(0x6dd)](this),VisuMZ['CoreEngine'][_0x4c7575(0x1b1)][_0x4c7575(0xd0)](this,_0x57bb34);},Scene_Base[_0x391453(0x307)][_0x391453(0x693)]=function(){const _0x25a001=_0x391453;return VisuMZ['CoreEngine']['Settings']['UI'][_0x25a001(0x385)];},Scene_Base[_0x391453(0x307)][_0x391453(0x8b4)]=function(){const _0x24c4f9=_0x391453;return VisuMZ['CoreEngine']['Settings']['UI'][_0x24c4f9(0x2bc)];},Scene_Base[_0x391453(0x307)][_0x391453(0x8bb)]=function(){const _0x2c055b=_0x391453;return VisuMZ[_0x2c055b(0x1f6)][_0x2c055b(0x63e)]['UI'][_0x2c055b(0x841)];},Scene_Base[_0x391453(0x307)][_0x391453(0x395)]=function(){const _0x764dee=_0x391453;return VisuMZ[_0x764dee(0x1f6)][_0x764dee(0x63e)]['UI'][_0x764dee(0x81a)];},Scene_Base['prototype']['mainCommandWidth']=function(){const _0x389386=_0x391453;return VisuMZ[_0x389386(0x1f6)][_0x389386(0x63e)]['UI'][_0x389386(0x271)];},Scene_Base[_0x391453(0x307)]['buttonAreaHeight']=function(){const _0x30e99c=_0x391453;return VisuMZ[_0x30e99c(0x1f6)]['Settings']['UI'][_0x30e99c(0xef)];},Scene_Base['prototype']['isWindowMaskingEnabled']=function(){const _0x57e23e=_0x391453;return VisuMZ[_0x57e23e(0x1f6)][_0x57e23e(0x63e)][_0x57e23e(0x5f3)][_0x57e23e(0x479)];},VisuMZ[_0x391453(0x1f6)]['Scene_Base_createWindowLayer']=Scene_Base['prototype'][_0x391453(0x62a)],Scene_Base[_0x391453(0x307)]['createWindowLayer']=function(){const _0xdefa9f=_0x391453;VisuMZ['CoreEngine']['Scene_Base_createWindowLayer'][_0xdefa9f(0xd0)](this),this['createButtonAssistWindow'](),this[_0xdefa9f(0x80a)]['x']=Math[_0xdefa9f(0x213)](this[_0xdefa9f(0x80a)]['x']),this[_0xdefa9f(0x80a)]['y']=Math[_0xdefa9f(0x213)](this['_windowLayer']['y']);},Scene_Base[_0x391453(0x307)][_0x391453(0x94b)]=function(){},Scene_Base[_0x391453(0x307)]['buttonAssistKey1']=function(){const _0x1a0aa6=_0x391453;return TextManager[_0x1a0aa6(0xdd)](_0x1a0aa6(0x6a3),'pagedown');},Scene_Base[_0x391453(0x307)][_0x391453(0x905)]=function(){const _0x507624=_0x391453;return TextManager[_0x507624(0x28c)](_0x507624(0x4f8));},Scene_Base[_0x391453(0x307)][_0x391453(0x92d)]=function(){const _0x2e17c8=_0x391453;return TextManager[_0x2e17c8(0x28c)](_0x2e17c8(0x561));},Scene_Base[_0x391453(0x307)][_0x391453(0x62c)]=function(){const _0x22552d=_0x391453;return TextManager[_0x22552d(0x28c)]('ok');},Scene_Base[_0x391453(0x307)]['buttonAssistKey5']=function(){const _0x42e994=_0x391453;return TextManager['getInputButtonString'](_0x42e994(0x331));},Scene_Base[_0x391453(0x307)][_0x391453(0x1bc)]=function(){const _0x65f909=_0x391453;return this[_0x65f909(0x960)]&&this[_0x65f909(0x960)]['visible']?_0x65f909(0x32a)!==_0x65f909(0x8ca)?TextManager[_0x65f909(0x8b3)]:_0x4c4085[_0x65f909(0x1f6)][_0x65f909(0x63e)][_0x65f909(0x7e5)][_0x65f909(0x474)]:'';},Scene_Base[_0x391453(0x307)]['buttonAssistText2']=function(){return'';},Scene_Base[_0x391453(0x307)][_0x391453(0x927)]=function(){return'';},Scene_Base[_0x391453(0x307)]['buttonAssistText4']=function(){const _0x161c37=_0x391453;return TextManager[_0x161c37(0x3d6)];},Scene_Base[_0x391453(0x307)][_0x391453(0x3d1)]=function(){const _0x475fe1=_0x391453;return TextManager[_0x475fe1(0x188)];},Scene_Base['prototype'][_0x391453(0x3a7)]=function(){return 0x0;},Scene_Base[_0x391453(0x307)][_0x391453(0x5fb)]=function(){return 0x0;},Scene_Base[_0x391453(0x307)]['buttonAssistOffset3']=function(){return 0x0;},Scene_Base[_0x391453(0x307)][_0x391453(0x77d)]=function(){return 0x0;},Scene_Base['prototype'][_0x391453(0x118)]=function(){return 0x0;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x742)]=Scene_Boot[_0x391453(0x307)][_0x391453(0x61a)],Scene_Boot[_0x391453(0x307)][_0x391453(0x61a)]=function(){const _0xd27eef=_0x391453;VisuMZ[_0xd27eef(0x1f6)][_0xd27eef(0x742)]['call'](this),this[_0xd27eef(0x163)]();},Scene_Boot[_0x391453(0x307)][_0x391453(0x163)]=function(){const _0x5a43ae=_0x391453,_0x327629=[_0x5a43ae(0x936),_0x5a43ae(0x7b3),_0x5a43ae(0x78d),_0x5a43ae(0x5f1),_0x5a43ae(0x60a),'faces',_0x5a43ae(0x100),_0x5a43ae(0x58c),_0x5a43ae(0x503),_0x5a43ae(0x1dd),_0x5a43ae(0x83e),_0x5a43ae(0x4d8),'titles1','titles2'];for(const _0x52c4bd of _0x327629){const _0x56f59a=VisuMZ[_0x5a43ae(0x1f6)][_0x5a43ae(0x63e)][_0x5a43ae(0x623)][_0x52c4bd],_0x55addf=_0x5a43ae(0x78e)['format'](_0x52c4bd);for(const _0x174f2f of _0x56f59a){ImageManager[_0x5a43ae(0x2c8)](_0x55addf,_0x174f2f);}}},VisuMZ['CoreEngine'][_0x391453(0x379)]=Scene_Boot['prototype']['startNormalGame'],Scene_Boot['prototype'][_0x391453(0x955)]=function(){const _0xf45efb=_0x391453;if(Utils['isOptionValid'](_0xf45efb(0x624))&&VisuMZ[_0xf45efb(0x1f6)][_0xf45efb(0x63e)]['QoL']['NewGameBoot'])this['startAutoNewGame']();else{if(_0xf45efb(0x320)!==_0xf45efb(0x320)){if(_0x341aab)_0x239e9e['ParseClassNotetags'](_0xdf3892);}else VisuMZ[_0xf45efb(0x1f6)][_0xf45efb(0x379)][_0xf45efb(0xd0)](this);}},Scene_Boot[_0x391453(0x307)][_0x391453(0x3a2)]=function(){const _0x301a39=_0x391453;DataManager[_0x301a39(0x71e)](),SceneManager[_0x301a39(0x900)](Scene_Map);},Scene_Boot[_0x391453(0x307)][_0x391453(0x8d5)]=function(){const _0xda9ae4=_0x391453,_0x157db5=$dataSystem[_0xda9ae4(0x314)][_0xda9ae4(0x14b)],_0x1d60cd=$dataSystem[_0xda9ae4(0x314)][_0xda9ae4(0x8c3)],_0x3913e4=VisuMZ[_0xda9ae4(0x1f6)][_0xda9ae4(0x63e)]['UI'][_0xda9ae4(0x866)];Graphics[_0xda9ae4(0x84b)]=_0x157db5-_0x3913e4*0x2,Graphics[_0xda9ae4(0x586)]=_0x1d60cd-_0x3913e4*0x2,this['determineSideButtonLayoutValid']();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x77c)]=Scene_Boot[_0x391453(0x307)][_0x391453(0x7fb)],Scene_Boot[_0x391453(0x307)][_0x391453(0x7fb)]=function(){const _0x393648=_0x391453;if(this['isFullDocumentTitle']()){if(_0x393648(0x6cf)!==_0x393648(0x559))this[_0x393648(0x266)]();else return 0x0;}else{if(_0x393648(0x301)==='rxgPl')VisuMZ['CoreEngine']['Scene_Boot_updateDocumentTitle'][_0x393648(0xd0)](this);else{if(!_0x5baa32[_0x393648(0x4a5)]())return;const _0x1f5854=_0x4600fe[_0x393648(0x8c7)]();_0x14fe26[_0x393648(0x60b)]&&_0xaa986b[_0x393648(0x60b)]['writeText'](_0x1f5854);}}},Scene_Boot[_0x391453(0x307)]['isFullDocumentTitle']=function(){const _0x34a504=_0x391453;if(Scene_Title[_0x34a504(0x1c4)]==='')return![];if(Scene_Title[_0x34a504(0x1c4)]===_0x34a504(0x884))return![];if(Scene_Title[_0x34a504(0x732)]==='')return![];if(Scene_Title[_0x34a504(0x732)]===_0x34a504(0x404))return![];return!![];},Scene_Boot[_0x391453(0x307)][_0x391453(0x266)]=function(){const _0x558638=_0x391453,_0x52ae12=$dataSystem[_0x558638(0x3d7)],_0x2955c8=Scene_Title['subtitle']||'',_0x523b1b=Scene_Title[_0x558638(0x732)]||'',_0x246175=VisuMZ[_0x558638(0x1f6)][_0x558638(0x63e)][_0x558638(0x1e9)]['Title'][_0x558638(0x451)],_0x37e4c3=_0x246175[_0x558638(0x5ae)](_0x52ae12,_0x2955c8,_0x523b1b);document[_0x558638(0x552)]=_0x37e4c3;},Scene_Boot[_0x391453(0x307)]['determineSideButtonLayoutValid']=function(){const _0x3b861c=_0x391453;if(VisuMZ[_0x3b861c(0x1f6)]['Settings']['UI'][_0x3b861c(0x461)]){const _0x12a6ce=Graphics[_0x3b861c(0x786)]-Graphics[_0x3b861c(0x84b)]-VisuMZ['CoreEngine'][_0x3b861c(0x63e)]['UI']['BoxMargin']*0x2,_0x18afa7=Sprite_Button['prototype'][_0x3b861c(0x1ab)][_0x3b861c(0xd0)](this)*0x4;if(_0x12a6ce>=_0x18afa7)SceneManager[_0x3b861c(0x76e)](!![]);}},Scene_Title['subtitle']=VisuMZ[_0x391453(0x1f6)][_0x391453(0x63e)][_0x391453(0x1e9)]['Title'][_0x391453(0x884)],Scene_Title[_0x391453(0x732)]=VisuMZ[_0x391453(0x1f6)][_0x391453(0x63e)][_0x391453(0x1e9)][_0x391453(0x28b)][_0x391453(0x86c)],Scene_Title[_0x391453(0x431)]=VisuMZ[_0x391453(0x1f6)][_0x391453(0x63e)][_0x391453(0x7f7)],VisuMZ[_0x391453(0x1f6)][_0x391453(0x111)]=Scene_Title[_0x391453(0x307)][_0x391453(0x76d)],Scene_Title[_0x391453(0x307)][_0x391453(0x76d)]=function(){const _0x4ccfde=_0x391453;VisuMZ[_0x4ccfde(0x1f6)][_0x4ccfde(0x63e)][_0x4ccfde(0x1e9)]['Title'][_0x4ccfde(0x76d)][_0x4ccfde(0xd0)](this);if(Scene_Title[_0x4ccfde(0x1c4)]!==''&&Scene_Title[_0x4ccfde(0x1c4)]!==_0x4ccfde(0x884))this[_0x4ccfde(0x722)]();if(Scene_Title[_0x4ccfde(0x732)]!==''&&Scene_Title[_0x4ccfde(0x732)]!==_0x4ccfde(0x404))this['drawGameVersion']();},Scene_Title[_0x391453(0x307)][_0x391453(0x722)]=function(){const _0x1ea48f=_0x391453;VisuMZ[_0x1ea48f(0x1f6)][_0x1ea48f(0x63e)][_0x1ea48f(0x1e9)][_0x1ea48f(0x28b)][_0x1ea48f(0x722)][_0x1ea48f(0xd0)](this);},Scene_Title[_0x391453(0x307)]['drawGameVersion']=function(){const _0x11f2d4=_0x391453;VisuMZ['CoreEngine'][_0x11f2d4(0x63e)][_0x11f2d4(0x1e9)][_0x11f2d4(0x28b)][_0x11f2d4(0x67a)][_0x11f2d4(0xd0)](this);},Scene_Title[_0x391453(0x307)][_0x391453(0x94f)]=function(){const _0x5d95ae=_0x391453;this['createTitleButtons']();const _0x5ec798=$dataSystem['titleCommandWindow']['background'],_0xd5955d=this[_0x5d95ae(0x8be)]();this[_0x5d95ae(0x21c)]=new Window_TitleCommand(_0xd5955d),this[_0x5d95ae(0x21c)][_0x5d95ae(0x39a)](_0x5ec798);const _0x3e1efc=this[_0x5d95ae(0x8be)]();this[_0x5d95ae(0x21c)][_0x5d95ae(0x394)](_0x3e1efc['x'],_0x3e1efc['y'],_0x3e1efc[_0x5d95ae(0x786)],_0x3e1efc[_0x5d95ae(0x8e8)]),this[_0x5d95ae(0x21c)][_0x5d95ae(0x869)](),this[_0x5d95ae(0x21c)][_0x5d95ae(0x8e5)](),this[_0x5d95ae(0x21c)][_0x5d95ae(0x652)](),this[_0x5d95ae(0x43f)](this['_commandWindow']);},Scene_Title[_0x391453(0x307)][_0x391453(0x2fe)]=function(){const _0xe6553c=_0x391453;if(this[_0xe6553c(0x21c)])return this[_0xe6553c(0x21c)][_0xe6553c(0x7fe)]();else{if('uSNwi'===_0xe6553c(0x5c3))return VisuMZ[_0xe6553c(0x1f6)][_0xe6553c(0x63e)][_0xe6553c(0x366)][_0xe6553c(0x4b1)];else this[_0xe6553c(0x912)](_0x7d9261,_0x1d84e2+0x2,_0xbea34b+0x2),_0x489a33-=_0x194a3b['iconWidth']+0x4,_0x172071+=_0x4ada95[_0xe6553c(0x178)]+0x4;}},Scene_Title[_0x391453(0x307)][_0x391453(0x8be)]=function(){const _0x1b1528=_0x391453;return VisuMZ[_0x1b1528(0x1f6)][_0x1b1528(0x63e)]['MenuLayout'][_0x1b1528(0x28b)][_0x1b1528(0x300)][_0x1b1528(0xd0)](this);},Scene_Title['prototype'][_0x391453(0x7bd)]=function(){const _0x3f0275=_0x391453;for(const _0x1710e5 of Scene_Title['pictureButtons']){const _0x41c99c=new Sprite_TitlePictureButton(_0x1710e5);this[_0x3f0275(0x8f9)](_0x41c99c);}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x5c2)]=Scene_Map[_0x391453(0x307)][_0x391453(0x4f3)],Scene_Map['prototype']['initialize']=function(){const _0x1a6715=_0x391453;VisuMZ['CoreEngine']['Scene_Map_initialize']['call'](this),$gameTemp['clearForcedGameTroopSettingsCoreEngine'](),this[_0x1a6715(0x2dc)]();},VisuMZ['CoreEngine']['Scene_Map_updateMainMultiply']=Scene_Map[_0x391453(0x307)]['updateMainMultiply'],Scene_Map[_0x391453(0x307)][_0x391453(0x371)]=function(){const _0x412421=_0x391453;VisuMZ['CoreEngine']['Scene_Map_updateMainMultiply'][_0x412421(0xd0)](this),$gameTemp['_playTestFastMode']&&!$gameMessage[_0x412421(0x535)]()&&(this['updateMain'](),SceneManager[_0x412421(0x7a7)]());},Scene_Map[_0x391453(0x307)][_0x391453(0x61c)]=function(){const _0x36a035=_0x391453;Scene_Message[_0x36a035(0x307)][_0x36a035(0x61c)][_0x36a035(0xd0)](this),!SceneManager[_0x36a035(0x923)](Scene_Battle)&&(this[_0x36a035(0xde)][_0x36a035(0x8cf)](),this['_mapNameWindow'][_0x36a035(0x8a2)](),this[_0x36a035(0x80a)][_0x36a035(0x89e)]=![],SceneManager['snapForBackground']()),$gameScreen['clearZoom'](),this[_0x36a035(0x2dc)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x4fb)]=Scene_Map[_0x391453(0x307)][_0x391453(0x16c)],Scene_Map[_0x391453(0x307)][_0x391453(0x16c)]=function(){const _0x30954f=_0x391453;VisuMZ[_0x30954f(0x1f6)]['Scene_Map_createMenuButton'][_0x30954f(0xd0)](this),SceneManager[_0x30954f(0x365)]()&&this[_0x30954f(0x1c2)]();},Scene_Map[_0x391453(0x307)][_0x391453(0x1c2)]=function(){const _0xa3ff10=_0x391453;this[_0xa3ff10(0x3a4)]['x']=Graphics[_0xa3ff10(0x84b)]+0x4;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x280)]=Scene_Map[_0x391453(0x307)]['updateScene'],Scene_Map[_0x391453(0x307)]['updateScene']=function(){const _0x44a9a1=_0x391453;VisuMZ['CoreEngine']['Scene_Map_updateScene']['call'](this),this[_0x44a9a1(0x697)]();},Scene_Map[_0x391453(0x307)][_0x391453(0x697)]=function(){const _0x3eaa01=_0x391453;Input[_0x3eaa01(0x7dd)](_0x3eaa01(0x5e0))&&(_0x3eaa01(0x86a)!==_0x3eaa01(0x86a)?this[_0x3eaa01(0x809)](_0x52687d,_0x452992,_0xffe43f,_0x1e3367):(ConfigManager[_0x3eaa01(0x51f)]=!ConfigManager[_0x3eaa01(0x51f)],ConfigManager[_0x3eaa01(0x60e)]()));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x642)]=Scene_Map[_0x391453(0x307)]['updateMain'],Scene_Map[_0x391453(0x307)][_0x391453(0x659)]=function(){const _0x4fcece=_0x391453;VisuMZ['CoreEngine'][_0x4fcece(0x642)][_0x4fcece(0xd0)](this),this[_0x4fcece(0x154)]();},Scene_Map[_0x391453(0x307)][_0x391453(0x2dc)]=function(){const _0x32f99d=_0x391453;this[_0x32f99d(0x337)]=[];},Scene_Map['prototype'][_0x391453(0x154)]=function(){const _0x38e608=_0x391453;if(!this[_0x38e608(0x337)])return;for(const _0x1f860d of this[_0x38e608(0x337)]){if(_0x38e608(0x4ca)!=='ljwgO'){const _0x49216b=_0x5b3fd1[_0x38e608(0x786)]/this[_0x38e608(0x4e0)]();_0x49216b%0x1!==0x0&&_0x36fb5a['ceil'](_0x49216b)===this[_0x38e608(0x786)]()&&!this['isLoopHorizontal']()&&(this[_0x38e608(0x5e9)][_0x38e608(0x5dd)]=!![],this[_0x38e608(0x5e9)][_0x38e608(0x656)]=_0xf8f248[_0x38e608(0x50f)]||0x0);}else{if(_0x1f860d){if(_0x38e608(0x2fc)!=='mobKd'){_0x50620d=_0x45b88e||0x10e,this[_0x38e608(0x1ee)]();if(_0x182364[_0x38e608(0x1f6)][_0x38e608(0x63e)]['UI'][_0x38e608(0x1c6)])this['drawTextEx'](_0x4044c8['nickname'](),_0x26ab72,_0x4cd83b,_0x242fc6);else{const _0xf3553a=_0x1c06f6[_0x38e608(0x119)]()['replace'](/\\I\[(\d+)\]/gi,'');this[_0x38e608(0x809)](_0x37578c[_0x38e608(0x119)](),_0x27be87,_0x444372,_0x69ddb8);}}else _0x1f860d[_0x38e608(0x8cf)]();}}}},Scene_Map[_0x391453(0x307)][_0x391453(0x816)]=function(_0x35757b){const _0x5a434b=_0x391453,_0x3dfdea=$dataCommonEvents[_0x35757b];if(!_0x3dfdea)return;const _0x4f8684=new Game_OnceParallelInterpreter();this['addOnceParallelInterpreter'](_0x4f8684),_0x4f8684[_0x5a434b(0x85e)](_0x35757b);},Scene_Map[_0x391453(0x307)][_0x391453(0x504)]=function(_0x8a04b4){const _0x19e98c=_0x391453;this[_0x19e98c(0x337)]=this[_0x19e98c(0x337)]||[],this[_0x19e98c(0x337)][_0x19e98c(0x268)](_0x8a04b4);},Scene_Map[_0x391453(0x307)][_0x391453(0x1f2)]=function(_0x398eb7){const _0x43551f=_0x391453;this[_0x43551f(0x337)]=this[_0x43551f(0x337)]||[],this['_onceParallelInterpreters'][_0x43551f(0x7db)](_0x398eb7);};function Game_OnceParallelInterpreter(){const _0x4a4a07=_0x391453;this[_0x4a4a07(0x4f3)](...arguments);}Game_OnceParallelInterpreter[_0x391453(0x307)]=Object[_0x391453(0x190)](Game_Interpreter['prototype']),Game_OnceParallelInterpreter[_0x391453(0x307)][_0x391453(0x349)]=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter[_0x391453(0x307)][_0x391453(0x85e)]=function(_0x24267a){const _0x5b24f7=_0x391453,_0x1039c1=$dataCommonEvents[_0x24267a];_0x1039c1?this['setup'](_0x1039c1[_0x5b24f7(0x67c)],0x0):this[_0x5b24f7(0x61c)]();},Game_OnceParallelInterpreter[_0x391453(0x307)]['terminate']=function(){const _0x3ccc2=_0x391453;if(!SceneManager[_0x3ccc2(0x90c)]())return;SceneManager[_0x3ccc2(0x254)][_0x3ccc2(0x1f2)](this),Game_Interpreter[_0x3ccc2(0x307)][_0x3ccc2(0x61c)][_0x3ccc2(0xd0)](this);},VisuMZ[_0x391453(0x1f6)]['Scene_MenuBase_helpAreaTop']=Scene_MenuBase[_0x391453(0x307)][_0x391453(0x524)],Scene_MenuBase[_0x391453(0x307)][_0x391453(0x524)]=function(){const _0xc35161=_0x391453;let _0x2cb26d=0x0;return SceneManager[_0xc35161(0x363)]()?_0x2cb26d=this[_0xc35161(0x7a8)]():_0x2cb26d=VisuMZ[_0xc35161(0x1f6)][_0xc35161(0x633)]['call'](this),_0x2cb26d;},Scene_MenuBase[_0x391453(0x307)][_0x391453(0x7a8)]=function(){const _0x55d28d=_0x391453;if(this[_0x55d28d(0x8b4)]()){if(_0x55d28d(0x3ad)!==_0x55d28d(0x3ad))_0x5b7ca0['update']();else return this[_0x55d28d(0x172)]();}else{if(_0x55d28d(0x2d7)!==_0x55d28d(0x5ce))return 0x0;else _0x1b635d['clear'](),this[_0x55d28d(0x464)]();}},VisuMZ[_0x391453(0x1f6)]['Scene_MenuBase_mainAreaTop']=Scene_MenuBase[_0x391453(0x307)][_0x391453(0x244)],Scene_MenuBase[_0x391453(0x307)][_0x391453(0x244)]=function(){const _0x15fcee=_0x391453;if(SceneManager[_0x15fcee(0x363)]())return this[_0x15fcee(0x2c9)]();else{if(_0x15fcee(0x42e)===_0x15fcee(0x2f4))_0x4b2587*=_0x5138ca(_0x50a977);else return VisuMZ[_0x15fcee(0x1f6)]['Scene_MenuBase_mainAreaTop'][_0x15fcee(0xd0)](this);}},Scene_MenuBase['prototype'][_0x391453(0x2c9)]=function(){const _0x457db7=_0x391453;if(!this['isBottomHelpMode']())return this['helpAreaBottom']();else return this[_0x457db7(0x4df)]()&&this[_0x457db7(0x19b)]()===_0x457db7(0x717)?_0x457db7(0x183)!==_0x457db7(0x183)?_0x10326d[_0x457db7(0x959)][_0x457db7(0x72c)]['call'](this):Window_ButtonAssist['prototype']['lineHeight']():0x0;},VisuMZ['CoreEngine']['Scene_MenuBase_mainAreaHeight']=Scene_MenuBase[_0x391453(0x307)][_0x391453(0x610)],Scene_MenuBase[_0x391453(0x307)]['mainAreaHeight']=function(){const _0x12a725=_0x391453;let _0x490b7c=0x0;if(SceneManager['areButtonsOutsideMainUI']())_0x490b7c=this[_0x12a725(0x253)]();else{if(_0x12a725(0x481)==='dHvGl'){for(const _0x5ce37c of this[_0x12a725(0x607)]){!_0x5ce37c[_0x12a725(0x894)]()&&this[_0x12a725(0x36b)](_0x5ce37c);}this[_0x12a725(0x8cb)]();}else _0x490b7c=VisuMZ[_0x12a725(0x1f6)][_0x12a725(0x690)][_0x12a725(0xd0)](this);}return this['isMenuButtonAssistEnabled']()&&this[_0x12a725(0x19b)]()!==_0x12a725(0x8d6)&&(_0x490b7c-=Window_ButtonAssist[_0x12a725(0x307)]['lineHeight']()),_0x490b7c;},Scene_MenuBase[_0x391453(0x307)]['mainAreaHeightSideButtonLayout']=function(){const _0x4987f7=_0x391453;return Graphics['boxHeight']-this[_0x4987f7(0x91c)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x626)]=Scene_MenuBase[_0x391453(0x307)][_0x391453(0x948)],Scene_MenuBase[_0x391453(0x307)][_0x391453(0x948)]=function(){const _0x22c31d=_0x391453,_0x33fd6a=VisuMZ[_0x22c31d(0x1f6)][_0x22c31d(0x63e)][_0x22c31d(0x21b)][_0x22c31d(0x328)]??0x8;this[_0x22c31d(0x7ec)]=new PIXI[(_0x22c31d(0x1b9))][(_0x22c31d(0x72e))](_0x33fd6a),this['_backgroundSprite']=new Sprite(),this[_0x22c31d(0x716)][_0x22c31d(0x3e4)]=SceneManager[_0x22c31d(0x7c2)](),this['_backgroundSprite']['filters']=[this[_0x22c31d(0x7ec)]],this[_0x22c31d(0x8f9)](this[_0x22c31d(0x716)]),this[_0x22c31d(0x3f8)](0xc0),this[_0x22c31d(0x3f8)](this[_0x22c31d(0x2bd)]()),this[_0x22c31d(0x8f0)]();},Scene_MenuBase[_0x391453(0x307)][_0x391453(0x2bd)]=function(){const _0x453fae=_0x391453,_0x305a8b=String(this[_0x453fae(0x349)][_0x453fae(0x32f)]),_0x3ac521=this[_0x453fae(0x53d)](_0x305a8b);return _0x3ac521?_0x453fae(0x29a)!==_0x453fae(0x952)?_0x3ac521[_0x453fae(0x8f2)]:_0x200662[_0x453fae(0x1f6)][_0x453fae(0x5b7)][_0x453fae(0xd0)](this):0xc0;},Scene_MenuBase[_0x391453(0x307)]['createCustomBackgroundImages']=function(){const _0x165e7e=_0x391453,_0x2b3bb3=String(this[_0x165e7e(0x349)]['name']),_0x482d99=this[_0x165e7e(0x53d)](_0x2b3bb3);if(_0x482d99&&(_0x482d99[_0x165e7e(0x30d)]!==''||_0x482d99['BgFilename2']!=='')){if(_0x165e7e(0x450)!=='EXHTm'){const _0x10b926=_0x165e7e(0x54a);this['_colorCache']=this[_0x165e7e(0x471)]||{};if(this[_0x165e7e(0x471)][_0x10b926])return this[_0x165e7e(0x471)][_0x10b926];const _0x31907c=_0x49ff0b[_0x165e7e(0x1f6)]['Settings'][_0x165e7e(0x839)][_0x165e7e(0x93f)];return this[_0x165e7e(0xdc)](_0x10b926,_0x31907c);}else this[_0x165e7e(0x291)]=new Sprite(ImageManager['loadTitle1'](_0x482d99[_0x165e7e(0x30d)])),this[_0x165e7e(0x305)]=new Sprite(ImageManager[_0x165e7e(0x8d1)](_0x482d99['BgFilename2'])),this['addChild'](this[_0x165e7e(0x291)]),this[_0x165e7e(0x8f9)](this[_0x165e7e(0x305)]),this[_0x165e7e(0x291)][_0x165e7e(0x3e4)][_0x165e7e(0x824)](this[_0x165e7e(0x1a3)][_0x165e7e(0x922)](this,this[_0x165e7e(0x291)])),this[_0x165e7e(0x305)][_0x165e7e(0x3e4)][_0x165e7e(0x824)](this[_0x165e7e(0x1a3)][_0x165e7e(0x922)](this,this[_0x165e7e(0x305)]));}},Scene_MenuBase[_0x391453(0x307)]['getCustomBackgroundSettings']=function(_0x233637){const _0xa2d2a7=_0x391453;return VisuMZ['CoreEngine'][_0xa2d2a7(0x63e)][_0xa2d2a7(0x21b)][_0x233637]||VisuMZ[_0xa2d2a7(0x1f6)]['Settings'][_0xa2d2a7(0x21b)][_0xa2d2a7(0x6a2)];},Scene_MenuBase[_0x391453(0x307)][_0x391453(0x1a3)]=function(_0x58a7d1){const _0x37a655=_0x391453;this[_0x37a655(0x3b9)](_0x58a7d1),this['centerSprite'](_0x58a7d1);},VisuMZ['CoreEngine'][_0x391453(0x5bc)]=Scene_MenuBase[_0x391453(0x307)][_0x391453(0x945)],Scene_MenuBase[_0x391453(0x307)][_0x391453(0x945)]=function(){const _0x26c45f=_0x391453;VisuMZ[_0x26c45f(0x1f6)][_0x26c45f(0x5bc)][_0x26c45f(0xd0)](this),SceneManager[_0x26c45f(0x365)]()&&this[_0x26c45f(0x2da)]();},Scene_MenuBase[_0x391453(0x307)][_0x391453(0x2da)]=function(){const _0xc1e08f=_0x391453;this['_cancelButton']['x']=Graphics[_0xc1e08f(0x84b)]+0x4;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x49d)]=Scene_MenuBase['prototype'][_0x391453(0x526)],Scene_MenuBase[_0x391453(0x307)][_0x391453(0x526)]=function(){const _0xa67b37=_0x391453;VisuMZ[_0xa67b37(0x1f6)][_0xa67b37(0x49d)]['call'](this),SceneManager[_0xa67b37(0x365)]()&&this[_0xa67b37(0x94c)]();},Scene_MenuBase[_0x391453(0x307)][_0x391453(0x94c)]=function(){const _0x3131eb=_0x391453;this[_0x3131eb(0x960)]['x']=-0x1*(this[_0x3131eb(0x960)][_0x3131eb(0x786)]+this[_0x3131eb(0x55e)]['width']+0x8),this[_0x3131eb(0x55e)]['x']=-0x1*(this['_pagedownButton'][_0x3131eb(0x786)]+0x4);},Scene_MenuBase[_0x391453(0x307)][_0x391453(0x4df)]=function(){const _0x40e7ce=_0x391453;return VisuMZ[_0x40e7ce(0x1f6)][_0x40e7ce(0x63e)][_0x40e7ce(0x708)][_0x40e7ce(0x635)];},Scene_MenuBase['prototype'][_0x391453(0x19b)]=function(){const _0x6cee78=_0x391453;if(SceneManager['isSideButtonLayout']()||SceneManager[_0x6cee78(0x2f3)]())return'eKhgJ'!=='wpiTn'?VisuMZ[_0x6cee78(0x1f6)][_0x6cee78(0x63e)]['ButtonAssist'][_0x6cee78(0x2b5)]:_0x140dbf[_0x6cee78(0x959)][_0x6cee78(0xd6)][_0x6cee78(0xd0)](this);else{if(_0x6cee78(0x329)!==_0x6cee78(0x3f6))return _0x6cee78(0x8d6);else{const _0x404efd=_0x1471fb[_0x247d32];if(!_0x404efd)return'';let _0x1ea602='';_0x1ea602+=_0x404efd[_0x6cee78(0x32f)];for(const _0x1c9735 of _0x404efd[_0x6cee78(0x516)]){for(const _0x26aeb3 of _0x1c9735[_0x6cee78(0x67c)]){[0x6c,0x198][_0x6cee78(0x3fe)](_0x26aeb3[_0x6cee78(0x3cf)])&&(_0x1ea602+='\x0a',_0x1ea602+=_0x26aeb3[_0x6cee78(0x17d)][0x0]);}}return _0x1ea602;}}},Scene_MenuBase[_0x391453(0x307)][_0x391453(0x94b)]=function(){const _0xca02df=_0x391453;if(!this[_0xca02df(0x4df)]())return;const _0x16f033=this[_0xca02df(0x539)]();this[_0xca02df(0x921)]=new Window_ButtonAssist(_0x16f033),this[_0xca02df(0x43f)](this[_0xca02df(0x921)]);},Scene_MenuBase[_0x391453(0x307)]['buttonAssistWindowRect']=function(){const _0x133557=_0x391453;return this[_0x133557(0x19b)]()==='button'?this[_0x133557(0x3c1)]():_0x133557(0x4e1)!=='oNwev'?this[_0x133557(0x507)]():_0x5f364b['layoutSettings'][_0x133557(0x89c)][_0x133557(0xd0)](this);},Scene_MenuBase['prototype'][_0x391453(0x3c1)]=function(){const _0xde533c=_0x391453,_0x39e405=ConfigManager[_0xde533c(0xd1)]?(Sprite_Button[_0xde533c(0x307)][_0xde533c(0x1ab)]()+0x6)*0x2:0x0,_0x2d76a0=this[_0xde533c(0x24c)](),_0x1309c8=Graphics['boxWidth']-_0x39e405*0x2,_0xd7c870=this['buttonAreaHeight']();return new Rectangle(_0x39e405,_0x2d76a0,_0x1309c8,_0xd7c870);},Scene_MenuBase[_0x391453(0x307)]['buttonAssistWindowSideRect']=function(){const _0x1d4238=_0x391453,_0x9d7986=Graphics['boxWidth'],_0x220442=Window_ButtonAssist['prototype']['lineHeight'](),_0x383e16=0x0;let _0x1fa681=0x0;if(this[_0x1d4238(0x19b)]()===_0x1d4238(0x717)){if('KOzbI'!==_0x1d4238(0x25c)){const _0x2aa59e=_0x10c616[_0x1d4238(0x1c1)]();if(_0x2aa59e)for(const _0x51da0e of _0x2aa59e){if(_0x51da0e&&_0x51da0e[_0x1d4238(0x116)]){if(this[_0x1d4238(0x1e1)](_0x51da0e))return!![];if(this[_0x1d4238(0x1d1)](_0x51da0e))return!![];}}}else _0x1fa681=0x0;}else _0x1fa681=Graphics[_0x1d4238(0x586)]-_0x220442;return new Rectangle(_0x383e16,_0x1fa681,_0x9d7986,_0x220442);},Scene_Menu[_0x391453(0x959)]=VisuMZ[_0x391453(0x1f6)]['Settings']['MenuLayout'][_0x391453(0x669)],VisuMZ[_0x391453(0x1f6)][_0x391453(0x215)]=Scene_Menu[_0x391453(0x307)][_0x391453(0x190)],Scene_Menu['prototype'][_0x391453(0x190)]=function(){const _0x14a481=_0x391453;VisuMZ[_0x14a481(0x1f6)]['Scene_Menu_create']['call'](this),this[_0x14a481(0x785)]();},Scene_Menu['prototype'][_0x391453(0x785)]=function(){const _0x4b6985=_0x391453;this[_0x4b6985(0x21c)]&&this[_0x4b6985(0x21c)][_0x4b6985(0x39a)](Scene_Menu[_0x4b6985(0x959)][_0x4b6985(0x65c)]),this[_0x4b6985(0x1f3)]&&this[_0x4b6985(0x1f3)][_0x4b6985(0x39a)](Scene_Menu[_0x4b6985(0x959)][_0x4b6985(0x1a0)]),this[_0x4b6985(0x1fc)]&&this[_0x4b6985(0x1fc)][_0x4b6985(0x39a)](Scene_Menu[_0x4b6985(0x959)][_0x4b6985(0x82b)]);},Scene_Menu[_0x391453(0x307)][_0x391453(0x8be)]=function(){const _0x55b23a=_0x391453;return Scene_Menu[_0x55b23a(0x959)][_0x55b23a(0x300)][_0x55b23a(0xd0)](this);},Scene_Menu[_0x391453(0x307)]['goldWindowRect']=function(){const _0x32b9a0=_0x391453;return Scene_Menu[_0x32b9a0(0x959)][_0x32b9a0(0xd6)][_0x32b9a0(0xd0)](this);},Scene_Menu[_0x391453(0x307)]['statusWindowRect']=function(){const _0x27d208=_0x391453;return Scene_Menu['layoutSettings'][_0x27d208(0x6c9)][_0x27d208(0xd0)](this);},Scene_Item[_0x391453(0x959)]=VisuMZ['CoreEngine']['Settings'][_0x391453(0x1e9)][_0x391453(0x58b)],VisuMZ[_0x391453(0x1f6)][_0x391453(0x5e6)]=Scene_Item['prototype'][_0x391453(0x190)],Scene_Item[_0x391453(0x307)]['create']=function(){const _0x2c1528=_0x391453;VisuMZ[_0x2c1528(0x1f6)][_0x2c1528(0x5e6)][_0x2c1528(0xd0)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Item[_0x391453(0x307)]['setCoreEngineUpdateWindowBg']=function(){const _0x25204c=_0x391453;if(this[_0x25204c(0x6a8)]){if('LDFUk'!==_0x25204c(0x27a))this[_0x25204c(0x6a8)][_0x25204c(0x39a)](Scene_Item['layoutSettings'][_0x25204c(0x3eb)]);else return _0xb0d4d4[_0x25204c(0x1f6)][_0x25204c(0x63e)]['Window'][_0x25204c(0x3f3)];}if(this[_0x25204c(0x4de)]){if(_0x25204c(0x6c0)==='QgMOW')this[_0x25204c(0x4de)]['setBackgroundType'](Scene_Item['layoutSettings'][_0x25204c(0x38e)]);else{this[_0x25204c(0x1de)]['clear'](),this[_0x25204c(0x7e1)]['clear'](),this['resetTextColor']();let _0x48854e=_0x25586f[_0x25204c(0x1f6)]['Settings'][_0x25204c(0x83c)][_0x25204c(0x83f)][_0x25204c(0x8b1)]('\x0a'),_0x20a54d=_0x48854e['length'],_0x23576d=(this[_0x25204c(0x2a8)]-_0x20a54d*this[_0x25204c(0x782)]())/0x2;for(let _0x9422fa=0x0;_0x9422fa<_0x20a54d;++_0x9422fa){let _0x591ecf=_0x48854e[_0x9422fa],_0x2745c2=this[_0x25204c(0x429)](_0x591ecf)[_0x25204c(0x786)],_0x504c5b=_0xf8350a[_0x25204c(0x4ff)]((this[_0x25204c(0x1de)][_0x25204c(0x786)]-_0x2745c2)/0x2);this[_0x25204c(0x294)](_0x591ecf,_0x504c5b,_0x23576d),_0x23576d+=this[_0x25204c(0x782)]();}}}this['_itemWindow']&&this[_0x25204c(0x3ff)]['setBackgroundType'](Scene_Item[_0x25204c(0x959)][_0x25204c(0x813)]),this['_actorWindow']&&this[_0x25204c(0x44c)][_0x25204c(0x39a)](Scene_Item[_0x25204c(0x959)]['ActorBgType']);},Scene_Item[_0x391453(0x307)]['helpWindowRect']=function(){const _0x3e6644=_0x391453;return Scene_Item['layoutSettings']['HelpRect'][_0x3e6644(0xd0)](this);},Scene_Item[_0x391453(0x307)][_0x391453(0x565)]=function(){const _0x142ffc=_0x391453;return Scene_Item[_0x142ffc(0x959)][_0x142ffc(0x10a)][_0x142ffc(0xd0)](this);},Scene_Item[_0x391453(0x307)][_0x391453(0x473)]=function(){const _0x59545f=_0x391453;return Scene_Item[_0x59545f(0x959)][_0x59545f(0x72c)][_0x59545f(0xd0)](this);},Scene_Item[_0x391453(0x307)][_0x391453(0x2c6)]=function(){const _0xf75ad6=_0x391453;return Scene_Item[_0xf75ad6(0x959)]['ActorRect']['call'](this);},Scene_Skill[_0x391453(0x959)]=VisuMZ[_0x391453(0x1f6)][_0x391453(0x63e)]['MenuLayout'][_0x391453(0x44a)],VisuMZ[_0x391453(0x1f6)][_0x391453(0x367)]=Scene_Skill[_0x391453(0x307)][_0x391453(0x190)],Scene_Skill['prototype']['create']=function(){const _0x81a2e7=_0x391453;VisuMZ[_0x81a2e7(0x1f6)]['Scene_Skill_create'][_0x81a2e7(0xd0)](this),this[_0x81a2e7(0x785)]();},Scene_Skill['prototype'][_0x391453(0x785)]=function(){const _0x780332=_0x391453;this[_0x780332(0x6a8)]&&this[_0x780332(0x6a8)][_0x780332(0x39a)](Scene_Skill[_0x780332(0x959)][_0x780332(0x3eb)]);this[_0x780332(0x239)]&&('lCOZi'!==_0x780332(0x15f)?this[_0x780332(0x4ee)](_0x3e0e86[_0x780332(0x7dd)](_0x780332(0x33e))):this[_0x780332(0x239)][_0x780332(0x39a)](Scene_Skill['layoutSettings'][_0x780332(0x66b)]));this[_0x780332(0x1fc)]&&this[_0x780332(0x1fc)][_0x780332(0x39a)](Scene_Skill[_0x780332(0x959)][_0x780332(0x82b)]);if(this['_itemWindow']){if(_0x780332(0x34a)!==_0x780332(0x677))this[_0x780332(0x3ff)]['setBackgroundType'](Scene_Skill[_0x780332(0x959)][_0x780332(0x813)]);else return this[_0x780332(0x1d0)];}this[_0x780332(0x44c)]&&this[_0x780332(0x44c)][_0x780332(0x39a)](Scene_Skill['layoutSettings']['ActorBgType']);},Scene_Skill[_0x391453(0x307)][_0x391453(0x3b7)]=function(){const _0x36b941=_0x391453;return Scene_Skill['layoutSettings'][_0x36b941(0x2fa)]['call'](this);},Scene_Skill['prototype']['skillTypeWindowRect']=function(){const _0x3851a0=_0x391453;return Scene_Skill[_0x3851a0(0x959)][_0x3851a0(0x776)][_0x3851a0(0xd0)](this);},Scene_Skill[_0x391453(0x307)][_0x391453(0x834)]=function(){const _0x26a2fc=_0x391453;return Scene_Skill[_0x26a2fc(0x959)][_0x26a2fc(0x6c9)][_0x26a2fc(0xd0)](this);},Scene_Skill[_0x391453(0x307)][_0x391453(0x473)]=function(){const _0xd64a1f=_0x391453;return Scene_Skill['layoutSettings'][_0xd64a1f(0x72c)]['call'](this);},Scene_Skill[_0x391453(0x307)]['actorWindowRect']=function(){const _0x3d87ea=_0x391453;return Scene_Skill[_0x3d87ea(0x959)][_0x3d87ea(0x6ac)][_0x3d87ea(0xd0)](this);},Scene_Equip[_0x391453(0x959)]=VisuMZ[_0x391453(0x1f6)]['Settings'][_0x391453(0x1e9)]['EquipMenu'],VisuMZ[_0x391453(0x1f6)][_0x391453(0x2d6)]=Scene_Equip['prototype'][_0x391453(0x190)],Scene_Equip[_0x391453(0x307)][_0x391453(0x190)]=function(){const _0x3bc28d=_0x391453;VisuMZ[_0x3bc28d(0x1f6)][_0x3bc28d(0x2d6)][_0x3bc28d(0xd0)](this),this[_0x3bc28d(0x785)]();},Scene_Equip[_0x391453(0x307)]['setCoreEngineUpdateWindowBg']=function(){const _0x2945f6=_0x391453;if(this[_0x2945f6(0x6a8)]){if(_0x2945f6(0x608)!==_0x2945f6(0x727))this[_0x2945f6(0x6a8)][_0x2945f6(0x39a)](Scene_Equip[_0x2945f6(0x959)][_0x2945f6(0x3eb)]);else{const _0x3187ba=_0x2945f6(0x57f);this['_colorCache']=this[_0x2945f6(0x471)]||{};if(this[_0x2945f6(0x471)][_0x3187ba])return this[_0x2945f6(0x471)][_0x3187ba];const _0x39dc6d=_0x546e18[_0x2945f6(0x1f6)][_0x2945f6(0x63e)][_0x2945f6(0x839)][_0x2945f6(0x398)];return this[_0x2945f6(0xdc)](_0x3187ba,_0x39dc6d);}}this['_statusWindow']&&this[_0x2945f6(0x1fc)]['setBackgroundType'](Scene_Equip[_0x2945f6(0x959)][_0x2945f6(0x82b)]),this[_0x2945f6(0x21c)]&&(_0x2945f6(0x283)===_0x2945f6(0x953)?_0x2f4df4['se'][_0x2945f6(0x6d3)]=0x0:this['_commandWindow'][_0x2945f6(0x39a)](Scene_Equip['layoutSettings']['CommandBgType'])),this[_0x2945f6(0x139)]&&this[_0x2945f6(0x139)][_0x2945f6(0x39a)](Scene_Equip[_0x2945f6(0x959)]['SlotBgType']),this[_0x2945f6(0x3ff)]&&(_0x2945f6(0x3e0)!==_0x2945f6(0x49e)?this[_0x2945f6(0x3ff)][_0x2945f6(0x39a)](Scene_Equip[_0x2945f6(0x959)][_0x2945f6(0x813)]):_0x5784a1['CoreEngine'][_0x2945f6(0x63e)]['UI']['SideButtons']&&(this['_sideButtonLayout']=_0x51b0c0));},Scene_Equip[_0x391453(0x307)][_0x391453(0x3b7)]=function(){const _0x2aa4a3=_0x391453;return Scene_Equip[_0x2aa4a3(0x959)][_0x2aa4a3(0x2fa)][_0x2aa4a3(0xd0)](this);},Scene_Equip[_0x391453(0x307)][_0x391453(0x834)]=function(){const _0x2fff27=_0x391453;return Scene_Equip[_0x2fff27(0x959)][_0x2fff27(0x6c9)][_0x2fff27(0xd0)](this);},Scene_Equip[_0x391453(0x307)][_0x391453(0x8be)]=function(){const _0x24f5a8=_0x391453;return Scene_Equip[_0x24f5a8(0x959)][_0x24f5a8(0x300)][_0x24f5a8(0xd0)](this);},Scene_Equip[_0x391453(0x307)]['slotWindowRect']=function(){const _0x4a7274=_0x391453;return Scene_Equip[_0x4a7274(0x959)][_0x4a7274(0x86d)][_0x4a7274(0xd0)](this);},Scene_Equip[_0x391453(0x307)][_0x391453(0x473)]=function(){const _0x436a38=_0x391453;return Scene_Equip['layoutSettings'][_0x436a38(0x72c)][_0x436a38(0xd0)](this);},Scene_Status[_0x391453(0x959)]=VisuMZ[_0x391453(0x1f6)]['Settings'][_0x391453(0x1e9)][_0x391453(0x65a)],VisuMZ[_0x391453(0x1f6)][_0x391453(0x582)]=Scene_Status[_0x391453(0x307)][_0x391453(0x190)],Scene_Status['prototype'][_0x391453(0x190)]=function(){const _0x502ba4=_0x391453;VisuMZ[_0x502ba4(0x1f6)][_0x502ba4(0x582)][_0x502ba4(0xd0)](this),this[_0x502ba4(0x785)]();},Scene_Status['prototype'][_0x391453(0x785)]=function(){const _0x17e4e7=_0x391453;this[_0x17e4e7(0x4d5)]&&this[_0x17e4e7(0x4d5)][_0x17e4e7(0x39a)](Scene_Status[_0x17e4e7(0x959)][_0x17e4e7(0x3ab)]),this['_statusWindow']&&(_0x17e4e7(0x85b)!==_0x17e4e7(0x323)?this[_0x17e4e7(0x1fc)][_0x17e4e7(0x39a)](Scene_Status[_0x17e4e7(0x959)][_0x17e4e7(0x82b)]):this['_listWindow'][_0x17e4e7(0x39a)](_0x2691ae[_0x17e4e7(0x959)][_0x17e4e7(0x814)])),this['_statusParamsWindow']&&this[_0x17e4e7(0x2f5)][_0x17e4e7(0x39a)](Scene_Status['layoutSettings'][_0x17e4e7(0x84d)]),this[_0x17e4e7(0x2d4)]&&this[_0x17e4e7(0x2d4)][_0x17e4e7(0x39a)](Scene_Status[_0x17e4e7(0x959)]['StatusEquipBgType']);},Scene_Status[_0x391453(0x307)][_0x391453(0x228)]=function(){const _0x9c0df4=_0x391453;return Scene_Status[_0x9c0df4(0x959)]['ProfileRect']['call'](this);},Scene_Status['prototype'][_0x391453(0x834)]=function(){const _0x2ed4c7=_0x391453;return Scene_Status[_0x2ed4c7(0x959)][_0x2ed4c7(0x6c9)][_0x2ed4c7(0xd0)](this);},Scene_Status[_0x391453(0x307)][_0x391453(0x44f)]=function(){const _0x169454=_0x391453;return Scene_Status['layoutSettings'][_0x169454(0x92a)]['call'](this);},Scene_Status[_0x391453(0x307)][_0x391453(0x2c7)]=function(){const _0x38fb25=_0x391453;return Scene_Status['layoutSettings'][_0x38fb25(0x7f0)][_0x38fb25(0xd0)](this);},Scene_Options[_0x391453(0x959)]=VisuMZ['CoreEngine']['Settings'][_0x391453(0x1e9)][_0x391453(0x508)],VisuMZ[_0x391453(0x1f6)][_0x391453(0x593)]=Scene_Options[_0x391453(0x307)]['create'],Scene_Options['prototype']['create']=function(){const _0x1355bb=_0x391453;VisuMZ[_0x1355bb(0x1f6)]['Scene_Options_create']['call'](this),this[_0x1355bb(0x785)]();},Scene_Options[_0x391453(0x307)]['setCoreEngineUpdateWindowBg']=function(){const _0x23a52b=_0x391453;this[_0x23a52b(0x433)]&&this[_0x23a52b(0x433)][_0x23a52b(0x39a)](Scene_Options['layoutSettings'][_0x23a52b(0x939)]);},Scene_Options[_0x391453(0x307)]['optionsWindowRect']=function(){const _0x38fac7=_0x391453;return Scene_Options[_0x38fac7(0x959)][_0x38fac7(0x89c)]['call'](this);},Scene_Save[_0x391453(0x959)]=VisuMZ[_0x391453(0x1f6)]['Settings'][_0x391453(0x1e9)][_0x391453(0x678)],Scene_Save[_0x391453(0x307)][_0x391453(0x190)]=function(){const _0x35f4d4=_0x391453;Scene_File[_0x35f4d4(0x307)][_0x35f4d4(0x190)][_0x35f4d4(0xd0)](this),this[_0x35f4d4(0x785)]();},Scene_Save[_0x391453(0x307)][_0x391453(0x785)]=function(){const _0x1814ab=_0x391453;this[_0x1814ab(0x6a8)]&&this['_helpWindow']['setBackgroundType'](Scene_Save[_0x1814ab(0x959)][_0x1814ab(0x3eb)]),this['_listWindow']&&this[_0x1814ab(0x707)]['setBackgroundType'](Scene_Save[_0x1814ab(0x959)][_0x1814ab(0x814)]);},Scene_Save['prototype'][_0x391453(0x3b7)]=function(){const _0x4b280a=_0x391453;return Scene_Save[_0x4b280a(0x959)][_0x4b280a(0x2fa)]['call'](this);},Scene_Save[_0x391453(0x307)][_0x391453(0x3d8)]=function(){const _0x144ea3=_0x391453;return Scene_Save[_0x144ea3(0x959)][_0x144ea3(0xed)][_0x144ea3(0xd0)](this);},Scene_Load['layoutSettings']=VisuMZ[_0x391453(0x1f6)]['Settings'][_0x391453(0x1e9)]['LoadMenu'],Scene_Load[_0x391453(0x307)][_0x391453(0x190)]=function(){const _0xd5aec7=_0x391453;Scene_File['prototype'][_0xd5aec7(0x190)][_0xd5aec7(0xd0)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Load[_0x391453(0x307)][_0x391453(0x785)]=function(){const _0x27c273=_0x391453;if(this[_0x27c273(0x6a8)]){if(_0x27c273(0x2ee)===_0x27c273(0x2ee))this['_helpWindow']['setBackgroundType'](Scene_Load[_0x27c273(0x959)][_0x27c273(0x3eb)]);else return _0x58e71e['layoutSettings'][_0x27c273(0x2fa)][_0x27c273(0xd0)](this);}this[_0x27c273(0x707)]&&this[_0x27c273(0x707)]['setBackgroundType'](Scene_Load[_0x27c273(0x959)][_0x27c273(0x814)]);},Scene_Load[_0x391453(0x307)][_0x391453(0x3b7)]=function(){const _0x414105=_0x391453;return Scene_Load[_0x414105(0x959)][_0x414105(0x2fa)]['call'](this);},Scene_Load[_0x391453(0x307)][_0x391453(0x3d8)]=function(){const _0x412109=_0x391453;return Scene_Load[_0x412109(0x959)][_0x412109(0xed)][_0x412109(0xd0)](this);},Scene_GameEnd[_0x391453(0x959)]=VisuMZ[_0x391453(0x1f6)]['Settings'][_0x391453(0x1e9)]['GameEnd'],VisuMZ[_0x391453(0x1f6)]['Scene_GameEnd_createBackground']=Scene_GameEnd[_0x391453(0x307)][_0x391453(0x948)],Scene_GameEnd['prototype'][_0x391453(0x948)]=function(){const _0x144397=_0x391453;Scene_MenuBase[_0x144397(0x307)][_0x144397(0x948)][_0x144397(0xd0)](this);},Scene_GameEnd[_0x391453(0x307)]['createCommandWindow']=function(){const _0x3416f5=_0x391453,_0x4a8241=this['commandWindowRect']();this[_0x3416f5(0x21c)]=new Window_GameEnd(_0x4a8241),this[_0x3416f5(0x21c)][_0x3416f5(0x91a)](_0x3416f5(0x331),this[_0x3416f5(0x3b8)][_0x3416f5(0x922)](this)),this[_0x3416f5(0x43f)](this[_0x3416f5(0x21c)]),this['_commandWindow']['setBackgroundType'](Scene_GameEnd[_0x3416f5(0x959)][_0x3416f5(0x65c)]);},Scene_GameEnd['prototype'][_0x391453(0x8be)]=function(){const _0x174186=_0x391453;return Scene_GameEnd[_0x174186(0x959)][_0x174186(0x300)][_0x174186(0xd0)](this);},Scene_Shop[_0x391453(0x959)]=VisuMZ['CoreEngine'][_0x391453(0x63e)][_0x391453(0x1e9)][_0x391453(0x353)],VisuMZ[_0x391453(0x1f6)][_0x391453(0x18a)]=Scene_Shop[_0x391453(0x307)][_0x391453(0x190)],Scene_Shop['prototype']['create']=function(){const _0x5651bc=_0x391453;VisuMZ['CoreEngine'][_0x5651bc(0x18a)][_0x5651bc(0xd0)](this),this[_0x5651bc(0x785)]();},Scene_Shop[_0x391453(0x307)]['setCoreEngineUpdateWindowBg']=function(){const _0x43b549=_0x391453;this[_0x43b549(0x6a8)]&&(_0x43b549(0x7b9)!=='fyckI'?this[_0x43b549(0x53e)][_0x43b549(0x39a)](_0x322724[_0x43b549(0x959)][_0x43b549(0x306)]):this[_0x43b549(0x6a8)][_0x43b549(0x39a)](Scene_Shop['layoutSettings'][_0x43b549(0x3eb)]));this[_0x43b549(0x1f3)]&&this[_0x43b549(0x1f3)][_0x43b549(0x39a)](Scene_Shop['layoutSettings'][_0x43b549(0x1a0)]);this[_0x43b549(0x21c)]&&this[_0x43b549(0x21c)][_0x43b549(0x39a)](Scene_Shop[_0x43b549(0x959)][_0x43b549(0x65c)]);if(this[_0x43b549(0x720)]){if(_0x43b549(0x47f)==='KukIt')this['_dummyWindow']['setBackgroundType'](Scene_Shop[_0x43b549(0x959)][_0x43b549(0x108)]);else return![];}if(this[_0x43b549(0x5b8)]){if(_0x43b549(0x41c)!==_0x43b549(0x714))this[_0x43b549(0x5b8)][_0x43b549(0x39a)](Scene_Shop[_0x43b549(0x959)][_0x43b549(0x148)]);else{const _0x44e248=this[_0x43b549(0x8be)]();this[_0x43b549(0x21c)]=new _0xd9ee21(_0x44e248),this['_commandWindow'][_0x43b549(0x91a)](_0x43b549(0x331),this[_0x43b549(0x3b8)][_0x43b549(0x922)](this)),this['addWindow'](this[_0x43b549(0x21c)]),this['_commandWindow'][_0x43b549(0x39a)](_0x458511[_0x43b549(0x959)][_0x43b549(0x65c)]);}}this[_0x43b549(0x1fc)]&&this[_0x43b549(0x1fc)][_0x43b549(0x39a)](Scene_Shop[_0x43b549(0x959)][_0x43b549(0x82b)]),this[_0x43b549(0x90f)]&&this[_0x43b549(0x90f)]['setBackgroundType'](Scene_Shop[_0x43b549(0x959)]['BuyBgType']),this[_0x43b549(0x4de)]&&(_0x43b549(0x187)==='BGEzo'?_0x15edae['ShowDevTools'](!![]):this[_0x43b549(0x4de)][_0x43b549(0x39a)](Scene_Shop['layoutSettings'][_0x43b549(0x38e)])),this[_0x43b549(0x208)]&&this['_sellWindow'][_0x43b549(0x39a)](Scene_Shop[_0x43b549(0x959)][_0x43b549(0x4fa)]);},Scene_Shop[_0x391453(0x307)][_0x391453(0x3b7)]=function(){const _0x745cf4=_0x391453;return Scene_Shop['layoutSettings'][_0x745cf4(0x2fa)][_0x745cf4(0xd0)](this);},Scene_Shop[_0x391453(0x307)][_0x391453(0x597)]=function(){const _0x1bfd45=_0x391453;return Scene_Shop[_0x1bfd45(0x959)][_0x1bfd45(0xd6)]['call'](this);},Scene_Shop[_0x391453(0x307)]['commandWindowRect']=function(){const _0x5eb7c2=_0x391453;return Scene_Shop[_0x5eb7c2(0x959)][_0x5eb7c2(0x300)][_0x5eb7c2(0xd0)](this);},Scene_Shop['prototype'][_0x391453(0x21a)]=function(){const _0x6bbed1=_0x391453;return Scene_Shop[_0x6bbed1(0x959)]['DummyRect'][_0x6bbed1(0xd0)](this);},Scene_Shop['prototype'][_0x391453(0x4ab)]=function(){const _0x5a96fe=_0x391453;return Scene_Shop[_0x5a96fe(0x959)][_0x5a96fe(0x1bf)][_0x5a96fe(0xd0)](this);},Scene_Shop['prototype'][_0x391453(0x834)]=function(){const _0x4e382a=_0x391453;return Scene_Shop['layoutSettings'][_0x4e382a(0x6c9)][_0x4e382a(0xd0)](this);},Scene_Shop['prototype']['buyWindowRect']=function(){const _0x16f2c1=_0x391453;return Scene_Shop[_0x16f2c1(0x959)][_0x16f2c1(0x545)][_0x16f2c1(0xd0)](this);},Scene_Shop[_0x391453(0x307)]['categoryWindowRect']=function(){const _0x197400=_0x391453;return Scene_Shop[_0x197400(0x959)][_0x197400(0x10a)][_0x197400(0xd0)](this);},Scene_Shop[_0x391453(0x307)][_0x391453(0x423)]=function(){const _0xd8ca6e=_0x391453;return Scene_Shop[_0xd8ca6e(0x959)][_0xd8ca6e(0x8a5)]['call'](this);},Scene_Name['layoutSettings']=VisuMZ[_0x391453(0x1f6)][_0x391453(0x63e)]['MenuLayout']['NameMenu'],VisuMZ[_0x391453(0x1f6)]['Scene_Name_create']=Scene_Name[_0x391453(0x307)]['create'],Scene_Name['prototype']['create']=function(){const _0x5cf858=_0x391453;VisuMZ['CoreEngine'][_0x5cf858(0x32b)][_0x5cf858(0xd0)](this),this[_0x5cf858(0x785)]();},Scene_Name[_0x391453(0x307)][_0x391453(0x785)]=function(){const _0xdb0c61=_0x391453;this[_0xdb0c61(0x1cd)]&&this[_0xdb0c61(0x1cd)][_0xdb0c61(0x39a)](Scene_Name['layoutSettings'][_0xdb0c61(0x124)]),this[_0xdb0c61(0x53e)]&&('IcrGf'===_0xdb0c61(0x489)?this['_inputWindow'][_0xdb0c61(0x39a)](Scene_Name['layoutSettings'][_0xdb0c61(0x306)]):_0x34807c*=_0x23b8db(_0x31ac24));},Scene_Name[_0x391453(0x307)][_0x391453(0x91c)]=function(){return 0x0;},Scene_Name[_0x391453(0x307)]['editWindowRect']=function(){const _0x15753d=_0x391453;return Scene_Name[_0x15753d(0x959)][_0x15753d(0x4ad)][_0x15753d(0xd0)](this);},Scene_Name['prototype']['inputWindowRect']=function(){const _0x3706bd=_0x391453;return Scene_Name[_0x3706bd(0x959)]['InputRect']['call'](this);},Scene_Name[_0x391453(0x307)][_0x391453(0x681)]=function(){const _0x66a496=_0x391453;if(!this[_0x66a496(0x53e)])return![];return VisuMZ[_0x66a496(0x1f6)][_0x66a496(0x63e)][_0x66a496(0x83c)]['EnableNameInput'];},Scene_Name[_0x391453(0x307)][_0x391453(0x3f7)]=function(){const _0x1edd94=_0x391453;if(this['EnableNameInput']())return TextManager[_0x1edd94(0x28c)](_0x1edd94(0x4f8));else{if(_0x1edd94(0x22c)!==_0x1edd94(0x5e1))return Scene_MenuBase['prototype'][_0x1edd94(0x3f7)]['call'](this);else _0x40476f[_0x1edd94(0x4a5)]()&&_0x3e0150[_0x1edd94(0x1f6)][_0x1edd94(0x63e)][_0x1edd94(0x7e5)][_0x1edd94(0x67d)]&&(_0x46a180[_0x1edd94(0x210)]=!_0x44341c['_playTestFastMode']);}},Scene_Name['prototype'][_0x391453(0x1bc)]=function(){const _0x41cdf9=_0x391453;if(this[_0x41cdf9(0x681)]()){if(_0x41cdf9(0x149)!==_0x41cdf9(0x672)){const _0x228a5c=VisuMZ[_0x41cdf9(0x1f6)]['Settings'][_0x41cdf9(0x83c)];if(this[_0x41cdf9(0x53e)]['_mode']===_0x41cdf9(0x64d))return _0x228a5c[_0x41cdf9(0x2f1)]||_0x41cdf9(0x2f1);else{if(_0x41cdf9(0x5bd)===_0x41cdf9(0x5bd))return _0x228a5c['Manual']||_0x41cdf9(0x55f);else this[_0x41cdf9(0xf6)]()?(this[_0x41cdf9(0x170)](),this[_0x41cdf9(0x234)]()):_0x1b16c8[_0x41cdf9(0x1f6)][_0x41cdf9(0x804)][_0x41cdf9(0xd0)](this);}}else return this[_0x41cdf9(0x425)];}else{if(_0x41cdf9(0x7eb)===_0x41cdf9(0x74e)){let _0x24209f=_0x522055[_0x41cdf9(0x933)](0x0,this['index']());const _0x396ce7=this[_0x41cdf9(0x7fe)](),_0x322c02=this[_0x41cdf9(0xd2)]();if(this[_0x41cdf9(0xf6)]()&&_0x24209f>0x0||_0x30847b&&_0x322c02===0x1){_0x24209f-=_0x322c02;if(_0x24209f<=0x0)_0x24209f=0x0;this[_0x41cdf9(0x6b6)](_0x24209f);}else!this[_0x41cdf9(0xf6)]()&&((_0x24209f>=_0x322c02||_0x5c31fd&&_0x322c02===0x1)&&this[_0x41cdf9(0x6b6)]((_0x24209f-_0x322c02+_0x396ce7)%_0x396ce7));}else return Scene_MenuBase['prototype'][_0x41cdf9(0x1bc)]['call'](this);}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x684)]=Scene_Name['prototype'][_0x391453(0x7dc)],Scene_Name['prototype'][_0x391453(0x7dc)]=function(){const _0x41a665=_0x391453;if(this[_0x41a665(0x3b5)]()){if('FloWp'==='FloWp')this[_0x41a665(0x6a5)]();else return _0x5e2d5b(_0x3b8017)[_0x41a665(0x6ec)](_0x19e47a,_0x452409);}else{if(_0x41a665(0x424)!=='gFPQd')return!![];else VisuMZ[_0x41a665(0x1f6)]['Scene_Name_onInputOk'][_0x41a665(0xd0)](this);}},Scene_Name[_0x391453(0x307)][_0x391453(0x3b5)]=function(){const _0x15de03=_0x391453,_0x7a1e17=VisuMZ['CoreEngine'][_0x15de03(0x63e)][_0x15de03(0x83c)];if(!_0x7a1e17)return![];const _0x33968b=_0x7a1e17[_0x15de03(0x112)];if(!_0x33968b)return![];const _0x1a5b31=this[_0x15de03(0x1cd)]['name']()[_0x15de03(0x28a)]();for(const _0x29b877 of _0x33968b){if(_0x1a5b31[_0x15de03(0x3fe)](_0x29b877[_0x15de03(0x28a)]()))return!![];}return![];},Scene_Name['prototype'][_0x391453(0x6a5)]=function(){const _0x3b2161=_0x391453;SoundManager[_0x3b2161(0x251)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x3d9)]=Scene_Battle[_0x391453(0x307)][_0x391453(0x8cf)],Scene_Battle[_0x391453(0x307)][_0x391453(0x8cf)]=function(){const _0x44423e=_0x391453;VisuMZ[_0x44423e(0x1f6)][_0x44423e(0x3d9)][_0x44423e(0xd0)](this);if($gameTemp[_0x44423e(0x210)])this[_0x44423e(0x904)]();},Scene_Battle['prototype'][_0x391453(0x904)]=function(){const _0x350da6=_0x391453;!BattleManager[_0x350da6(0x8bd)]()&&!this[_0x350da6(0x723)]&&!$gameMessage[_0x350da6(0x535)]()&&(_0x350da6(0x8fd)!==_0x350da6(0x8fd)?_0x38a826['CoreEngine'][_0x350da6(0xdf)][_0x350da6(0xd0)](this):(this[_0x350da6(0x723)]=!![],this[_0x350da6(0x8cf)](),SceneManager['updateEffekseer'](),this['_playtestF7Looping']=![]));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x5d4)]=Scene_Battle[_0x391453(0x307)][_0x391453(0x945)],Scene_Battle['prototype'][_0x391453(0x945)]=function(){const _0x181e07=_0x391453;VisuMZ[_0x181e07(0x1f6)][_0x181e07(0x5d4)][_0x181e07(0xd0)](this),SceneManager[_0x181e07(0x365)]()&&this[_0x181e07(0x20c)]();},Scene_Battle[_0x391453(0x307)][_0x391453(0x20c)]=function(){const _0x439ed4=_0x391453;this[_0x439ed4(0x68a)]['x']=Graphics['boxWidth']+0x4,this['isBottomButtonMode']()?this[_0x439ed4(0x68a)]['y']=Graphics[_0x439ed4(0x586)]-this[_0x439ed4(0x7f6)]():this['_cancelButton']['y']=0x0;},VisuMZ['CoreEngine']['Sprite_Button_initialize']=Sprite_Button['prototype'][_0x391453(0x4f3)],Sprite_Button[_0x391453(0x307)][_0x391453(0x4f3)]=function(_0x555b43){const _0x2f7f99=_0x391453;VisuMZ[_0x2f7f99(0x1f6)][_0x2f7f99(0xf5)][_0x2f7f99(0xd0)](this,_0x555b43),this['initButtonHidden']();},Sprite_Button['prototype'][_0x391453(0x6b5)]=function(){const _0x3d4583=_0x391453,_0x5255b6=VisuMZ['CoreEngine'][_0x3d4583(0x63e)]['UI'];this[_0x3d4583(0x144)]=![];switch(this['_buttonType']){case _0x3d4583(0x331):this[_0x3d4583(0x144)]=!_0x5255b6[_0x3d4583(0x739)];break;case _0x3d4583(0x6a3):case _0x3d4583(0x705):this['_isButtonHidden']=!_0x5255b6[_0x3d4583(0x931)];break;case _0x3d4583(0x169):case'up':case _0x3d4583(0x69d):case _0x3d4583(0x2b4):case'ok':this[_0x3d4583(0x144)]=!_0x5255b6[_0x3d4583(0x1d2)];break;case _0x3d4583(0x42f):this[_0x3d4583(0x144)]=!_0x5255b6[_0x3d4583(0x600)];break;}},VisuMZ['CoreEngine']['Sprite_Button_updateOpacity']=Sprite_Button['prototype'][_0x391453(0x61e)],Sprite_Button[_0x391453(0x307)]['updateOpacity']=function(){const _0x294ef6=_0x391453;if(SceneManager[_0x294ef6(0x2f3)]()||this[_0x294ef6(0x144)]){if(_0x294ef6(0x5b1)===_0x294ef6(0xf3))return _0x4a73a6[_0x294ef6(0x1f6)][_0x294ef6(0x861)]['call'](this,_0xbd0f23);else this['hideButtonFromView']();}else VisuMZ['CoreEngine'][_0x294ef6(0x90b)][_0x294ef6(0xd0)](this);},Sprite_Button[_0x391453(0x307)][_0x391453(0x2a5)]=function(){const _0x351ebb=_0x391453;this['visible']=![],this[_0x351ebb(0x14a)]=0x0,this['x']=Graphics[_0x351ebb(0x786)]*0xa,this['y']=Graphics['height']*0xa;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x412)]=Sprite_Battler[_0x391453(0x307)][_0x391453(0x1b8)],Sprite_Battler[_0x391453(0x307)][_0x391453(0x1b8)]=function(_0x314757,_0x3da8cb,_0xf69eec){const _0x3137c1=_0x391453;(this[_0x3137c1(0x7fd)]!==_0x314757||this['_targetOffsetY']!==_0x3da8cb)&&(_0x3137c1(0x3db)===_0x3137c1(0x3db)?(this[_0x3137c1(0x4e2)](_0x3137c1(0x35f)),this[_0x3137c1(0x259)]=_0xf69eec):(_0x1f09bf[_0x3137c1(0x1f9)][0x57]='up',_0x3a6375[_0x3137c1(0x1f9)][0x41]=_0x3137c1(0x832),_0x4ff81f['keyMapper'][0x53]=_0x3137c1(0x169),_0x134f04[_0x3137c1(0x1f9)][0x44]='right',_0xdbb59b[_0x3137c1(0x1f9)][0x45]='pagedown')),VisuMZ[_0x3137c1(0x1f6)][_0x3137c1(0x412)][_0x3137c1(0xd0)](this,_0x314757,_0x3da8cb,_0xf69eec);},Sprite_Battler['prototype'][_0x391453(0x4e2)]=function(_0x7ac912){const _0x105c94=_0x391453;this[_0x105c94(0x443)]=_0x7ac912;},Sprite_Battler[_0x391453(0x307)][_0x391453(0x35e)]=function(){const _0x12e81c=_0x391453;if(this[_0x12e81c(0x276)]<=0x0)return;const _0x38b5c5=this[_0x12e81c(0x276)],_0x27e1e9=this['_movementWholeDuration'],_0x5323ad=this[_0x12e81c(0x443)];this[_0x12e81c(0x913)]=this[_0x12e81c(0x2c5)](this[_0x12e81c(0x913)],this[_0x12e81c(0x7fd)],_0x38b5c5,_0x27e1e9,_0x5323ad),this[_0x12e81c(0x629)]=this[_0x12e81c(0x2c5)](this[_0x12e81c(0x629)],this[_0x12e81c(0x843)],_0x38b5c5,_0x27e1e9,_0x5323ad),this['_movementDuration']--;if(this[_0x12e81c(0x276)]<=0x0)this['onMoveEnd']();},Sprite_Battler[_0x391453(0x307)][_0x391453(0x2c5)]=function(_0x15230a,_0x4dbe80,_0x3f8bbf,_0x2fc8ad,_0x756ea0){const _0x191a4d=_0x391453,_0x50375c=VisuMZ[_0x191a4d(0x682)]((_0x2fc8ad-_0x3f8bbf)/_0x2fc8ad,_0x756ea0||_0x191a4d(0x35f)),_0x46f5c2=VisuMZ[_0x191a4d(0x682)]((_0x2fc8ad-_0x3f8bbf+0x1)/_0x2fc8ad,_0x756ea0||_0x191a4d(0x35f)),_0x4470e6=(_0x15230a-_0x4dbe80*_0x50375c)/(0x1-_0x50375c);return _0x4470e6+(_0x4dbe80-_0x4470e6)*_0x46f5c2;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x33b)]=Sprite_Actor[_0x391453(0x307)]['setActorHome'],Sprite_Actor[_0x391453(0x307)][_0x391453(0x1ce)]=function(_0x56a3a1){const _0x3e892a=_0x391453;if(VisuMZ['CoreEngine']['Settings']['UI']['RepositionActors']){if(_0x3e892a(0x8e0)===_0x3e892a(0x8e0))this[_0x3e892a(0x546)](_0x56a3a1);else{var _0x1a59d1=_0x1fa2fb(_0x1368d3['$1']);_0x32a8cd*=_0x1a59d1;}}else VisuMZ['CoreEngine'][_0x3e892a(0x33b)][_0x3e892a(0xd0)](this,_0x56a3a1);},Sprite_Actor[_0x391453(0x307)][_0x391453(0x546)]=function(_0x3dce6c){const _0x1ae620=_0x391453;let _0x2f0105=Math[_0x1ae620(0x213)](Graphics[_0x1ae620(0x786)]/0x2+0xc0);_0x2f0105-=Math[_0x1ae620(0x4ff)]((Graphics[_0x1ae620(0x786)]-Graphics[_0x1ae620(0x84b)])/0x2),_0x2f0105+=_0x3dce6c*0x20;let _0x4087d0=Graphics[_0x1ae620(0x8e8)]-0xc8-$gameParty[_0x1ae620(0x6dc)]()*0x30;_0x4087d0-=Math[_0x1ae620(0x4ff)]((Graphics[_0x1ae620(0x8e8)]-Graphics[_0x1ae620(0x586)])/0x2),_0x4087d0+=_0x3dce6c*0x30,this[_0x1ae620(0x373)](_0x2f0105,_0x4087d0);},Sprite_Actor[_0x391453(0x307)][_0x391453(0x580)]=function(){const _0x309b10=_0x391453;this[_0x309b10(0x1b8)](0x4b0,0x0,0x78);},Sprite_Animation[_0x391453(0x307)][_0x391453(0x6f9)]=function(_0x230360){const _0x166639=_0x391453;this[_0x166639(0x778)]=_0x230360;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x549)]=Sprite_Animation[_0x391453(0x307)]['processSoundTimings'],Sprite_Animation[_0x391453(0x307)][_0x391453(0x258)]=function(){const _0x123449=_0x391453;if(this[_0x123449(0x778)])return;VisuMZ[_0x123449(0x1f6)]['Sprite_Animation_processSoundTimings'][_0x123449(0xd0)](this);},VisuMZ['CoreEngine'][_0x391453(0x399)]=Sprite_Animation[_0x391453(0x307)][_0x391453(0x110)],Sprite_Animation['prototype'][_0x391453(0x110)]=function(_0x390d1e){const _0x59b9bf=_0x391453;if(this[_0x59b9bf(0x308)]()){if(_0x59b9bf(0x197)!=='xGJyb')return _0x1070a2[_0x59b9bf(0x6dd)](this),_0x9fb0d9['CoreEngine'][_0x59b9bf(0x1b1)][_0x59b9bf(0xd0)](this,_0x1e2ff0);else this[_0x59b9bf(0x38c)](_0x390d1e);}else _0x59b9bf(0x31d)!==_0x59b9bf(0x31d)?_0x3e19d2=_0x343a30[_0x59b9bf(0x933)](_0x69f0d9,_0x1c3dbb(_0x38ed07(_0x55f80f))):VisuMZ[_0x59b9bf(0x1f6)]['Sprite_Animation_setViewport'][_0x59b9bf(0xd0)](this,_0x390d1e);},Sprite_Animation[_0x391453(0x307)]['isAnimationOffsetXMirrored']=function(){const _0x615c07=_0x391453;if(!this['_animation'])return![];const _0x103593=this[_0x615c07(0x658)][_0x615c07(0x32f)]||'';if(_0x103593[_0x615c07(0x13d)](/<MIRROR OFFSET X>/i))return!![];if(_0x103593[_0x615c07(0x13d)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0x615c07(0x1f6)][_0x615c07(0x63e)]['QoL']['AnimationMirrorOffset'];},Sprite_Animation[_0x391453(0x307)]['setViewportCoreEngineFix']=function(_0x3d359e){const _0x6e3ffb=_0x391453,_0x3a71c2=this['_viewportSize'],_0x2ceedc=this[_0x6e3ffb(0x51a)],_0x596667=this['_animation'][_0x6e3ffb(0x317)]*(this[_0x6e3ffb(0x29c)]?-0x1:0x1)-_0x3a71c2/0x2,_0x5bad8a=this['_animation']['offsetY']-_0x2ceedc/0x2,_0x233bec=this[_0x6e3ffb(0x44e)](_0x3d359e);_0x3d359e['gl'][_0x6e3ffb(0x596)](_0x596667+_0x233bec['x'],_0x5bad8a+_0x233bec['y'],_0x3a71c2,_0x2ceedc);},Sprite_Animation['prototype'][_0x391453(0x83b)]=function(_0x3808fd){const _0x4d7d2b=_0x391453;if(_0x3808fd['_mainSprite']){}const _0x2641e7=this['_animation']['name'];let _0x3760ad=_0x3808fd['height']*_0x3808fd['scale']['y'],_0x5a470d=0x0,_0x45d764=-_0x3760ad/0x2;if(_0x2641e7['match'](/<(?:HEAD|HEADER|TOP)>/i))_0x45d764=-_0x3760ad;if(_0x2641e7[_0x4d7d2b(0x13d)](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x45d764=0x0;if(this[_0x4d7d2b(0x658)]['alignBottom'])_0x45d764=0x0;if(_0x2641e7[_0x4d7d2b(0x13d)](/<(?:LEFT)>/i))_0x5a470d=-_0x3808fd['width']/0x2;if(_0x2641e7['match'](/<(?:RIGHT)>/i))_0x5a470d=_0x3808fd[_0x4d7d2b(0x786)]/0x2;_0x2641e7[_0x4d7d2b(0x13d)](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x5a470d=Number(RegExp['$1'])*_0x3808fd[_0x4d7d2b(0x786)]);_0x2641e7[_0x4d7d2b(0x13d)](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x45d764=(0x1-Number(RegExp['$1']))*-_0x3760ad);_0x2641e7[_0x4d7d2b(0x13d)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x5a470d=Number(RegExp['$1'])*_0x3808fd['width'],_0x45d764=(0x1-Number(RegExp['$2']))*-_0x3760ad);if(_0x2641e7['match'](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x5a470d+=Number(RegExp['$1']);if(_0x2641e7[_0x4d7d2b(0x13d)](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x45d764+=Number(RegExp['$1']);_0x2641e7[_0x4d7d2b(0x13d)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x4d7d2b(0x5c9)!==_0x4d7d2b(0x235)?(_0x5a470d+=Number(RegExp['$1']),_0x45d764+=Number(RegExp['$2'])):_0x20e74a+=_0x1a97cf+_0x4d7d2b(0x87b)['format'](_0x1a072a,_0x32bc36[_0x4d7d2b(0x32f)]||_0x4d7d2b(0x392))+_0x202522);const _0x59e37b=new Point(_0x5a470d,_0x45d764);return _0x3808fd[_0x4d7d2b(0x467)](),_0x3808fd[_0x4d7d2b(0x2a9)]['apply'](_0x59e37b);},Sprite_AnimationMV[_0x391453(0x307)][_0x391453(0x6f2)]=function(){const _0x4c10c6=_0x391453;this['_rate']=VisuMZ[_0x4c10c6(0x1f6)][_0x4c10c6(0x63e)][_0x4c10c6(0x7e5)][_0x4c10c6(0x67f)]??0x4,this[_0x4c10c6(0x44b)](),this['_rate']=this['_rate'][_0x4c10c6(0x5d3)](0x1,0xa);},Sprite_AnimationMV['prototype'][_0x391453(0x44b)]=function(){const _0x58d6ed=_0x391453;if(!this[_0x58d6ed(0x658)]);const _0x28d4c1=this[_0x58d6ed(0x658)]['name']||'';if(_0x28d4c1[_0x58d6ed(0x13d)](/<RATE:[ ](\d+)>/i)){if(_0x58d6ed(0x3ce)!==_0x58d6ed(0x6cd))this[_0x58d6ed(0x48a)]=(Number(RegExp['$1'])||0x1)[_0x58d6ed(0x5d3)](0x1,0xa);else return _0x3b75c5[_0x58d6ed(0x1f6)][_0x58d6ed(0x63e)][_0x58d6ed(0x839)]['DimColor1'];}},Sprite_AnimationMV[_0x391453(0x307)][_0x391453(0x6f9)]=function(_0x361e53){const _0x3cb387=_0x391453;this[_0x3cb387(0x778)]=_0x361e53;},VisuMZ[_0x391453(0x1f6)]['Sprite_AnimationMV_processTimingData']=Sprite_AnimationMV[_0x391453(0x307)][_0x391453(0x400)],Sprite_AnimationMV[_0x391453(0x307)]['processTimingData']=function(_0x325ede){const _0x271c10=_0x391453;this['_muteSound']&&(_0x271c10(0xe7)!==_0x271c10(0xe7)?(this['_helpWindow']&&this[_0x271c10(0x6a8)][_0x271c10(0x39a)](_0x2d3e4e[_0x271c10(0x959)][_0x271c10(0x3eb)]),this[_0x271c10(0x707)]&&this[_0x271c10(0x707)]['setBackgroundType'](_0x286d2e['layoutSettings'][_0x271c10(0x814)])):(_0x325ede=JsonEx[_0x271c10(0x511)](_0x325ede),_0x325ede['se']&&(_0x325ede['se'][_0x271c10(0x6d3)]=0x0))),VisuMZ[_0x271c10(0x1f6)][_0x271c10(0x673)][_0x271c10(0xd0)](this,_0x325ede);},VisuMZ['CoreEngine'][_0x391453(0x220)]=Sprite_AnimationMV[_0x391453(0x307)][_0x391453(0x386)],Sprite_AnimationMV[_0x391453(0x307)][_0x391453(0x386)]=function(){const _0x15c33c=_0x391453;VisuMZ[_0x15c33c(0x1f6)][_0x15c33c(0x220)]['call'](this);if(this['_animation'][_0x15c33c(0x380)]===0x3){if(this['x']===0x0)this['x']=Math['round'](Graphics[_0x15c33c(0x786)]/0x2);if(this['y']===0x0)this['y']=Math[_0x15c33c(0x213)](Graphics[_0x15c33c(0x8e8)]/0x2);}},Sprite_Damage['prototype'][_0x391453(0x5d0)]=function(_0x38719b){const _0x2d10bc=_0x391453;let _0x3e019e=Math[_0x2d10bc(0x19f)](_0x38719b)['toString']();this[_0x2d10bc(0x199)]()&&(_0x3e019e=VisuMZ[_0x2d10bc(0x2e1)](_0x3e019e));const _0x33665a=this[_0x2d10bc(0x875)](),_0x5ec4f5=Math[_0x2d10bc(0x4ff)](_0x33665a*0.75);for(let _0x256619=0x0;_0x256619<_0x3e019e[_0x2d10bc(0x4b1)];_0x256619++){const _0x2624d5=this[_0x2d10bc(0x614)](_0x5ec4f5,_0x33665a);_0x2624d5[_0x2d10bc(0x3e4)]['drawText'](_0x3e019e[_0x256619],0x0,0x0,_0x5ec4f5,_0x33665a,'center'),_0x2624d5['x']=(_0x256619-(_0x3e019e[_0x2d10bc(0x4b1)]-0x1)/0x2)*_0x5ec4f5,_0x2624d5['dy']=-_0x256619;}},Sprite_Damage[_0x391453(0x307)][_0x391453(0x199)]=function(){const _0x12eac5=_0x391453;return VisuMZ[_0x12eac5(0x1f6)][_0x12eac5(0x63e)][_0x12eac5(0x7e5)][_0x12eac5(0x80d)];},Sprite_Damage['prototype'][_0x391453(0x73c)]=function(){const _0x6354fa=_0x391453;return ColorManager[_0x6354fa(0x858)]();},VisuMZ[_0x391453(0x1f6)]['Sprite_Gauge_gaugeRate']=Sprite_Gauge[_0x391453(0x307)][_0x391453(0x47a)],Sprite_Gauge[_0x391453(0x307)][_0x391453(0x47a)]=function(){const _0x4f5049=_0x391453;return VisuMZ[_0x4f5049(0x1f6)][_0x4f5049(0x286)]['call'](this)['clamp'](0x0,0x1);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x54e)]=Sprite_Gauge[_0x391453(0x307)][_0x391453(0x2aa)],Sprite_Gauge[_0x391453(0x307)][_0x391453(0x2aa)]=function(){const _0x4e7d4b=_0x391453;let _0x38c2c5=VisuMZ[_0x4e7d4b(0x1f6)][_0x4e7d4b(0x54e)][_0x4e7d4b(0xd0)](this);return _0x38c2c5;},Sprite_Gauge[_0x391453(0x307)][_0x391453(0x7e2)]=function(){const _0x17920d=_0x391453;let _0x37f35d=this['currentValue']();this['useDigitGrouping']()&&(_0x37f35d=VisuMZ['GroupDigits'](_0x37f35d));const _0x1d8080=this[_0x17920d(0x74c)]()-0x1,_0x211ce8=this[_0x17920d(0x7c7)]?this[_0x17920d(0x7c7)]():this['bitmapHeight']();this[_0x17920d(0xe1)](),this[_0x17920d(0x3e4)][_0x17920d(0x809)](_0x37f35d,0x0,0x0,_0x1d8080,_0x211ce8,_0x17920d(0x33e));},Sprite_Gauge[_0x391453(0x307)][_0x391453(0x159)]=function(){return 0x3;},Sprite_Gauge[_0x391453(0x307)][_0x391453(0x199)]=function(){const _0x4a2761=_0x391453;return VisuMZ[_0x4a2761(0x1f6)][_0x4a2761(0x63e)]['QoL'][_0x4a2761(0x474)];},Sprite_Gauge['prototype']['valueOutlineColor']=function(){const _0x1548af=_0x391453;return ColorManager[_0x1548af(0x1db)]();},VisuMZ[_0x391453(0x1f6)]['Sprite_Picture_loadBitmap']=Sprite_Picture['prototype'][_0x391453(0x2c8)],Sprite_Picture['prototype'][_0x391453(0x2c8)]=function(){const _0x35c885=_0x391453;this['_pictureName']&&this[_0x35c885(0x700)][_0x35c885(0x13d)](/VisuMZ CoreEngine PictureIcon (\d+)/i)?'rIAPF'!==_0x35c885(0x847)?this[_0x35c885(0x536)](Number(RegExp['$1'])):(_0x1e112b[_0x35c885(0x4d4)](_0x475532[_0x35c885(0x8d7)],0x0,~0x0),_0x5719df[_0x35c885(0x6c6)](_0x7198a8[_0x35c885(0x198)],_0x5aff04[_0x35c885(0x198)],_0x3dfa2f[_0x35c885(0x198)]),_0x385547['render'](_0x80e57c),_0x172969[_0x35c885(0x50d)][_0x35c885(0x2ae)](),_0x4f2c3f[_0x35c885(0x893)](),_0x446538[_0x35c885(0x4d4)](_0x306b42[_0x35c885(0x73a)],0x1,~0x0),_0xdd27f[_0x35c885(0x6c6)](_0x36900f['REPLACE'],_0x34730d[_0x35c885(0x4b4)],_0x39f8ab[_0x35c885(0x4b4)]),_0x3fe81f[_0x35c885(0x735)](_0x515573[_0x35c885(0x6ba)],_0x4e0a93['ONE']),_0x301d0d['render'](_0x41d4b1),_0x4eaf7a[_0x35c885(0x50d)][_0x35c885(0x2ae)](),_0x58403f[_0x35c885(0x735)](_0x109406['ONE'],_0x33f58a[_0x35c885(0x715)])):VisuMZ[_0x35c885(0x1f6)][_0x35c885(0x555)]['call'](this);},Sprite_Picture[_0x391453(0x307)][_0x391453(0x536)]=function(_0x516bf8){const _0x35baa0=_0x391453,_0x436d6f=ImageManager['iconWidth'],_0x3e2184=ImageManager[_0x35baa0(0x551)],_0x42578d=this[_0x35baa0(0x700)]['match'](/SMOOTH/i);this[_0x35baa0(0x3e4)]=new Bitmap(_0x436d6f,_0x3e2184);const _0x1c7261=ImageManager[_0x35baa0(0x3e6)](_0x35baa0(0x691)),_0x21c3e4=_0x516bf8%0x10*_0x436d6f,_0x2065ec=Math[_0x35baa0(0x4ff)](_0x516bf8/0x10)*_0x3e2184;this[_0x35baa0(0x3e4)]['smooth']=_0x42578d,this[_0x35baa0(0x3e4)][_0x35baa0(0x25b)](_0x1c7261,_0x21c3e4,_0x2065ec,_0x436d6f,_0x3e2184,0x0,0x0,_0x436d6f,_0x3e2184);};function Sprite_TitlePictureButton(){const _0x47defd=_0x391453;this[_0x47defd(0x4f3)](...arguments);}Sprite_TitlePictureButton[_0x391453(0x307)]=Object[_0x391453(0x190)](Sprite_Clickable[_0x391453(0x307)]),Sprite_TitlePictureButton[_0x391453(0x307)][_0x391453(0x349)]=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x391453(0x307)]['initialize']=function(_0x39ff66){const _0x75caa3=_0x391453;Sprite_Clickable['prototype']['initialize'][_0x75caa3(0xd0)](this),this[_0x75caa3(0x2f2)]=_0x39ff66,this[_0x75caa3(0x51d)]=null,this[_0x75caa3(0x6e8)]();},Sprite_TitlePictureButton[_0x391453(0x307)]['setup']=function(){const _0x1b3ce7=_0x391453;this['x']=Graphics[_0x1b3ce7(0x786)],this['y']=Graphics['height'],this['visible']=![],this[_0x1b3ce7(0x364)]();},Sprite_TitlePictureButton[_0x391453(0x307)]['setupButtonImage']=function(){const _0x4e236d=_0x391453;this[_0x4e236d(0x3e4)]=ImageManager[_0x4e236d(0x827)](this[_0x4e236d(0x2f2)]['PictureFilename']),this[_0x4e236d(0x3e4)][_0x4e236d(0x824)](this[_0x4e236d(0x548)][_0x4e236d(0x922)](this));},Sprite_TitlePictureButton[_0x391453(0x307)][_0x391453(0x548)]=function(){const _0x5641a2=_0x391453;this[_0x5641a2(0x2f2)][_0x5641a2(0x5b0)]['call'](this),this[_0x5641a2(0x2f2)]['PositionJS'][_0x5641a2(0xd0)](this),this[_0x5641a2(0xfa)](this['_data'][_0x5641a2(0x60c)][_0x5641a2(0x922)](this));},Sprite_TitlePictureButton[_0x391453(0x307)][_0x391453(0x8cf)]=function(){const _0x3f166a=_0x391453;Sprite_Clickable[_0x3f166a(0x307)]['update']['call'](this),this[_0x3f166a(0x61e)](),this[_0x3f166a(0x76f)]();},Sprite_TitlePictureButton[_0x391453(0x307)][_0x391453(0x693)]=function(){const _0x250dad=_0x391453;return VisuMZ[_0x250dad(0x1f6)]['Settings'][_0x250dad(0x1e9)]['Title'][_0x250dad(0x397)];},Sprite_TitlePictureButton[_0x391453(0x307)][_0x391453(0x61e)]=function(){const _0x2f4e3a=_0x391453;if(this[_0x2f4e3a(0x54f)]||this[_0x2f4e3a(0x881)]){if(_0x2f4e3a(0x417)!=='kLhZG')return this[_0x2f4e3a(0x459)]()[_0x2f4e3a(0x468)];else this[_0x2f4e3a(0x14a)]=0xff;}else this['opacity']+=this[_0x2f4e3a(0x89e)]?this[_0x2f4e3a(0x693)]():-0x1*this[_0x2f4e3a(0x693)](),this['opacity']=Math[_0x2f4e3a(0x1a5)](0xc0,this[_0x2f4e3a(0x14a)]);},Sprite_TitlePictureButton[_0x391453(0x307)][_0x391453(0xfa)]=function(_0x405448){this['_clickHandler']=_0x405448;},Sprite_TitlePictureButton['prototype']['onClick']=function(){const _0x3792fe=_0x391453;this[_0x3792fe(0x51d)]&&this[_0x3792fe(0x51d)]();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x7f3)]=Spriteset_Base[_0x391453(0x307)]['initialize'],Spriteset_Base[_0x391453(0x307)][_0x391453(0x4f3)]=function(){const _0x40f13f=_0x391453;VisuMZ[_0x40f13f(0x1f6)]['Spriteset_Base_initialize'][_0x40f13f(0xd0)](this),this[_0x40f13f(0x81c)]();},Spriteset_Base[_0x391453(0x307)]['initMembersCoreEngine']=function(){const _0x4265f7=_0x391453;this[_0x4265f7(0x607)]=[],this['_pointAnimationSprites']=[],this[_0x4265f7(0x311)]=this[_0x4265f7(0x2ac)]['x'],this[_0x4265f7(0x88d)]=this['scale']['y'];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x821)]=Spriteset_Base['prototype'][_0x391453(0x53a)],Spriteset_Base[_0x391453(0x307)][_0x391453(0x53a)]=function(_0x1ec014){const _0x89e03c=_0x391453;this['removeAllFauxAnimations'](),this[_0x89e03c(0x70d)](),VisuMZ[_0x89e03c(0x1f6)][_0x89e03c(0x821)]['call'](this,_0x1ec014);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x3a6)]=Spriteset_Base['prototype'][_0x391453(0x8cf)],Spriteset_Base[_0x391453(0x307)][_0x391453(0x8cf)]=function(){const _0x5e5206=_0x391453;VisuMZ[_0x5e5206(0x1f6)][_0x5e5206(0x3a6)][_0x5e5206(0xd0)](this),this['updatePictureAntiZoom'](),this['updateFauxAnimations'](),this['updatePointAnimations']();},Spriteset_Base[_0x391453(0x307)][_0x391453(0x63a)]=function(){const _0x269250=_0x391453;if(!VisuMZ['CoreEngine'][_0x269250(0x63e)][_0x269250(0x7e5)]['AntiZoomPictures'])return;if(this['_cacheScaleX']===this[_0x269250(0x2ac)]['x']&&this[_0x269250(0x88d)]===this[_0x269250(0x2ac)]['y'])return;this[_0x269250(0x925)](),this[_0x269250(0x311)]=this[_0x269250(0x2ac)]['x'],this[_0x269250(0x88d)]=this['scale']['y'];},Spriteset_Base['prototype'][_0x391453(0x925)]=function(){const _0x5eb439=_0x391453;if(SceneManager[_0x5eb439(0x90c)]()&&Spriteset_Map['DETACH_PICTURE_CONTAINER'])return;else{if(SceneManager['isSceneBattle']()&&Spriteset_Battle['DETACH_PICTURE_CONTAINER'])return;}this[_0x5eb439(0x2ac)]['x']!==0x0&&(this['_pictureContainer'][_0x5eb439(0x2ac)]['x']=0x1/this[_0x5eb439(0x2ac)]['x'],this[_0x5eb439(0x4f0)]['x']=-(this['x']/this[_0x5eb439(0x2ac)]['x'])),this[_0x5eb439(0x2ac)]['y']!==0x0&&(this[_0x5eb439(0x4f0)][_0x5eb439(0x2ac)]['y']=0x1/this['scale']['y'],this['_pictureContainer']['y']=-(this['y']/this[_0x5eb439(0x2ac)]['y']));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x6cb)]=Spriteset_Base['prototype']['updatePosition'],Spriteset_Base[_0x391453(0x307)][_0x391453(0x386)]=function(){const _0x5b3ed5=_0x391453;VisuMZ['CoreEngine'][_0x5b3ed5(0x6cb)][_0x5b3ed5(0xd0)](this),this['updatePositionCoreEngine']();},Spriteset_Base['prototype'][_0x391453(0x85c)]=function(){const _0x35f35d=_0x391453;if(!$gameScreen)return;if($gameScreen[_0x35f35d(0x704)]<=0x0)return;this['x']-=Math[_0x35f35d(0x213)]($gameScreen['shake']());const _0x1ed6c7=$gameScreen[_0x35f35d(0x6a1)]();switch($gameScreen['getCoreEngineScreenShakeStyle']()){case'original':this[_0x35f35d(0x2df)]();break;case'horizontal':this[_0x35f35d(0x15c)]();break;case _0x35f35d(0x1a9):this[_0x35f35d(0x13f)]();break;default:this['updatePositionCoreEngineShakeRand']();break;}},Spriteset_Base['prototype'][_0x391453(0x2df)]=function(){const _0x11c598=_0x391453,_0x2e38ff=VisuMZ['CoreEngine'][_0x11c598(0x63e)][_0x11c598(0x641)];if(_0x2e38ff&&_0x2e38ff['originalJS'])return _0x2e38ff['originalJS'][_0x11c598(0xd0)](this);this['x']+=Math['round']($gameScreen['shake']());},Spriteset_Base[_0x391453(0x307)]['updatePositionCoreEngineShakeRand']=function(){const _0x4b16ed=_0x391453,_0x3bde2d=VisuMZ[_0x4b16ed(0x1f6)][_0x4b16ed(0x63e)][_0x4b16ed(0x641)];if(_0x3bde2d&&_0x3bde2d['randomJS'])return _0x4b16ed(0x6f6)===_0x4b16ed(0x6f6)?_0x3bde2d[_0x4b16ed(0x3c2)][_0x4b16ed(0xd0)](this):_0xb31eeb[_0x4b16ed(0x28c)](_0x4b16ed(0x561));const _0x51bc2e=$gameScreen[_0x4b16ed(0x87e)]*0.75,_0x528f78=$gameScreen[_0x4b16ed(0x8db)]*0.6,_0x30a7af=$gameScreen['_shakeDuration'];this['x']+=Math['round'](Math[_0x4b16ed(0x35c)](_0x51bc2e)-Math['randomInt'](_0x528f78))*(Math[_0x4b16ed(0x1a5)](_0x30a7af,0x1e)*0.5),this['y']+=Math[_0x4b16ed(0x213)](Math[_0x4b16ed(0x35c)](_0x51bc2e)-Math[_0x4b16ed(0x35c)](_0x528f78))*(Math[_0x4b16ed(0x1a5)](_0x30a7af,0x1e)*0.5);},Spriteset_Base['prototype']['updatePositionCoreEngineShakeHorz']=function(){const _0x1391e5=_0x391453,_0x6224d4=VisuMZ[_0x1391e5(0x1f6)][_0x1391e5(0x63e)]['ScreenShake'];if(_0x6224d4&&_0x6224d4[_0x1391e5(0x88c)])return _0x6224d4[_0x1391e5(0x88c)]['call'](this);const _0x40da9c=$gameScreen[_0x1391e5(0x87e)]*0.75,_0x353aee=$gameScreen['_shakeSpeed']*0.6,_0x4d5341=$gameScreen[_0x1391e5(0x704)];this['x']+=Math[_0x1391e5(0x213)](Math[_0x1391e5(0x35c)](_0x40da9c)-Math[_0x1391e5(0x35c)](_0x353aee))*(Math[_0x1391e5(0x1a5)](_0x4d5341,0x1e)*0.5);},Spriteset_Base[_0x391453(0x307)][_0x391453(0x13f)]=function(){const _0xf181c=_0x391453,_0x223cb5=VisuMZ[_0xf181c(0x1f6)][_0xf181c(0x63e)][_0xf181c(0x641)];if(_0x223cb5&&_0x223cb5['vertJS'])return _0x223cb5[_0xf181c(0x8b7)][_0xf181c(0xd0)](this);const _0x23acbc=$gameScreen['_shakePower']*0.75,_0x4dc109=$gameScreen[_0xf181c(0x8db)]*0.6,_0x1e1c8f=$gameScreen['_shakeDuration'];this['y']+=Math['round'](Math[_0xf181c(0x35c)](_0x23acbc)-Math[_0xf181c(0x35c)](_0x4dc109))*(Math['min'](_0x1e1c8f,0x1e)*0.5);},Spriteset_Base[_0x391453(0x307)][_0x391453(0x325)]=function(){const _0x47e70f=_0x391453;for(const _0x20ee29 of this[_0x47e70f(0x607)]){if(!_0x20ee29[_0x47e70f(0x894)]()){if('cEhmB'!==_0x47e70f(0x6f8)){const _0x1a131d=this['isMVAnimation'](_0x4c7b92),_0x4796fa=new(_0x1a131d?_0x34a110:_0x1c1b0f)();_0x4796fa[_0x47e70f(0x56b)]=_0xd08b7d,_0x4796fa[_0x47e70f(0x6e8)](_0x42b096,_0x130ae2,_0x41909f,_0x4ec421),_0x4796fa['setMute'](_0x314c3e),this[_0x47e70f(0x7cd)](_0x4796fa),this[_0x47e70f(0x76c)]['push'](_0x4796fa);}else this['removeFauxAnimation'](_0x20ee29);}}this[_0x47e70f(0x8cb)]();},Spriteset_Base['prototype'][_0x391453(0x8cb)]=function(){const _0x554464=_0x391453;for(;;){if(_0x554464(0x279)===_0x554464(0x279)){const _0x2729cf=$gameTemp[_0x554464(0x7ff)]();if(_0x2729cf)this[_0x554464(0x1e3)](_0x2729cf);else break;}else return 0x0;}},Spriteset_Base[_0x391453(0x307)]['createFauxAnimation']=function(_0x5c9cb5){const _0x57384c=_0x391453,_0x457354=$dataAnimations[_0x5c9cb5['animationId']],_0x3f5d32=_0x5c9cb5['targets'],_0x5ea7ff=_0x5c9cb5[_0x57384c(0x747)],_0x366371=_0x5c9cb5[_0x57384c(0x5d7)];let _0x185b4b=this[_0x57384c(0x336)]();const _0x26df61=this[_0x57384c(0x5b4)]();if(this[_0x57384c(0x3dd)](_0x457354)){if(_0x57384c(0x4ce)!==_0x57384c(0x4ce)){if(this[_0x57384c(0x3fb)]()===0x0)return;_0x3fbd3c[_0x57384c(0x893)](),this['refresh'](),_0x4d2be0[_0x57384c(0x807)](),this[_0x57384c(0x4e5)](0x0);}else for(const _0x155f83 of _0x3f5d32){this[_0x57384c(0x4a8)]([_0x155f83],_0x457354,_0x5ea7ff,_0x185b4b,_0x366371),_0x185b4b+=_0x26df61;}}else this[_0x57384c(0x4a8)](_0x3f5d32,_0x457354,_0x5ea7ff,_0x185b4b,_0x366371);},Spriteset_Base['prototype'][_0x391453(0x696)]=function(_0x557811,_0x3e9948,_0x2261e8,_0x431c29){const _0x473776=_0x391453,_0x40711c=this[_0x473776(0x355)](_0x3e9948),_0x5f2be1=new(_0x40711c?Sprite_AnimationMV:Sprite_Animation)(),_0x589f39=this[_0x473776(0x8f3)](_0x557811),_0xdbbd2c=this['animationBaseDelay'](),_0x53dc41=_0x431c29>_0xdbbd2c?this[_0x473776(0x50b)]():null;this[_0x473776(0x1cc)](_0x557811[0x0])&&(_0x473776(0x22b)==='gJDGf'?this[_0x473776(0x787)]=_0x2656a3[_0x473776(0x254)][_0x473776(0x19b)]()!==_0x473776(0x8d6)?0x0:0x8:_0x2261e8=!_0x2261e8),_0x5f2be1[_0x473776(0x56b)]=_0x557811,_0x5f2be1[_0x473776(0x6e8)](_0x589f39,_0x3e9948,_0x2261e8,_0x431c29,_0x53dc41),this[_0x473776(0x7cd)](_0x5f2be1),this[_0x473776(0x842)]['push'](_0x5f2be1);},Spriteset_Base[_0x391453(0x307)][_0x391453(0x4a8)]=function(_0xdece2b,_0x365a5c,_0x29cb30,_0x58c93d,_0x1795d6){const _0x468b3c=_0x391453,_0x3c365=this[_0x468b3c(0x355)](_0x365a5c),_0x4925ac=new(_0x3c365?Sprite_AnimationMV:Sprite_Animation)(),_0x28aeb4=this['makeTargetSprites'](_0xdece2b);this[_0x468b3c(0x1cc)](_0xdece2b[0x0])&&(_0x29cb30=!_0x29cb30);_0x4925ac['targetObjects']=_0xdece2b,_0x4925ac[_0x468b3c(0x6e8)](_0x28aeb4,_0x365a5c,_0x29cb30,_0x58c93d),_0x4925ac['setMute'](_0x1795d6),this[_0x468b3c(0x7cd)](_0x4925ac);if(this['_animationSprites'])this[_0x468b3c(0x842)][_0x468b3c(0x7db)](_0x4925ac);this[_0x468b3c(0x607)][_0x468b3c(0x268)](_0x4925ac);},Spriteset_Base[_0x391453(0x307)][_0x391453(0x7cd)]=function(_0x1ad320){const _0x14e45c=_0x391453;this[_0x14e45c(0x741)][_0x14e45c(0x8f9)](_0x1ad320);},Spriteset_Base[_0x391453(0x307)][_0x391453(0x2e7)]=function(_0x531d20){const _0xf43d8c=_0x391453;this['_animationSprites']['remove'](_0x531d20),this[_0xf43d8c(0x358)](_0x531d20);for(const _0x3f7e07 of _0x531d20[_0xf43d8c(0x56b)]){if(_0x3f7e07[_0xf43d8c(0x515)]){if('JqHlS'===_0xf43d8c(0x77f)){const _0x239ed5=_0x398ec1[_0xf43d8c(0x656)]()*_0x232a48['tileWidth']();return(this['_x']-_0x239ed5)*_0x336578[_0xf43d8c(0x6fa)]();}else _0x3f7e07['endAnimation']();}}_0x531d20[_0xf43d8c(0x53a)]();},Spriteset_Base['prototype'][_0x391453(0x36b)]=function(_0xffc7ae){const _0x28d5a7=_0x391453;this[_0x28d5a7(0x607)][_0x28d5a7(0x7db)](_0xffc7ae),this[_0x28d5a7(0x358)](_0xffc7ae);for(const _0x459d09 of _0xffc7ae[_0x28d5a7(0x56b)]){_0x459d09[_0x28d5a7(0x515)]&&_0x459d09[_0x28d5a7(0x515)]();}_0xffc7ae[_0x28d5a7(0x53a)]();},Spriteset_Base[_0x391453(0x307)]['removeAnimationFromContainer']=function(_0x153adb){const _0x2e3130=_0x391453;this['_effectsContainer'][_0x2e3130(0x193)](_0x153adb);},Spriteset_Base[_0x391453(0x307)]['removeAllFauxAnimations']=function(){const _0x126642=_0x391453;for(const _0x3931f1 of this[_0x126642(0x607)]){if(_0x126642(0x40c)==='ELYwW')this[_0x126642(0x36b)](_0x3931f1);else{const _0x59fb5e=this[_0x126642(0x32c)](_0x311038),_0x3698c2=this['subjectHitRate'](_0x3105e1),_0x53b5bb=this[_0x126642(0x79b)](_0x175520);return _0x59fb5e*(_0x3698c2-_0x53b5bb);}}},Spriteset_Base[_0x391453(0x307)][_0x391453(0x765)]=function(){const _0x32e3fe=_0x391453;return this[_0x32e3fe(0x607)][_0x32e3fe(0x4b1)]>0x0;},Spriteset_Base[_0x391453(0x307)][_0x391453(0x7de)]=function(){const _0x547f2c=_0x391453;for(const _0x5b6b9a of this[_0x547f2c(0x76c)]){!_0x5b6b9a['isPlaying']()&&this[_0x547f2c(0x6de)](_0x5b6b9a);}this[_0x547f2c(0x789)]();},Spriteset_Base[_0x391453(0x307)]['processPointAnimationRequests']=function(){const _0x108d5f=_0x391453;for(;;){const _0xfc281b=$gameTemp[_0x108d5f(0x859)]();if(_0xfc281b)this[_0x108d5f(0x638)](_0xfc281b);else break;}},Spriteset_Base['prototype'][_0x391453(0x638)]=function(_0xa09f26){const _0x3cef00=_0x391453,_0x44aed3=$dataAnimations[_0xa09f26[_0x3cef00(0x8e6)]],_0x5a0cb9=this[_0x3cef00(0x5af)](_0xa09f26),_0xabfc8c=_0xa09f26['mirror'],_0x3dd498=_0xa09f26[_0x3cef00(0x5d7)];let _0x85b93=this[_0x3cef00(0x336)]();const _0x116eb3=this['animationNextDelay']();if(this[_0x3cef00(0x3dd)](_0x44aed3))for(const _0x56e07c of _0x5a0cb9){_0x3cef00(0xe2)==='MMPyC'?this[_0x3cef00(0x719)](_0x51b29b):(this[_0x3cef00(0x346)]([_0x56e07c],_0x44aed3,_0xabfc8c,_0x85b93,_0x3dd498),_0x85b93+=_0x116eb3);}else this[_0x3cef00(0x346)](_0x5a0cb9,_0x44aed3,_0xabfc8c,_0x85b93,_0x3dd498);},Spriteset_Base[_0x391453(0x307)][_0x391453(0x5af)]=function(_0x1eb0cb){const _0x1840b1=_0x391453,_0x2e6189=new Sprite_Clickable(),_0x59c5ad=this[_0x1840b1(0x2ce)]();_0x2e6189['x']=_0x1eb0cb['x']-_0x59c5ad['x'],_0x2e6189['y']=_0x1eb0cb['y']-_0x59c5ad['y'],_0x2e6189['z']=0x64;const _0x33f7f3=this[_0x1840b1(0x2ce)]();return _0x33f7f3[_0x1840b1(0x8f9)](_0x2e6189),[_0x2e6189];},Spriteset_Base[_0x391453(0x307)]['getPointAnimationLayer']=function(){return this;},Spriteset_Map[_0x391453(0x307)][_0x391453(0x2ce)]=function(){const _0x3847b3=_0x391453;return this[_0x3847b3(0x5a3)]||this;},Spriteset_Battle['prototype'][_0x391453(0x2ce)]=function(){return this['_battleField']||this;},Spriteset_Base['prototype'][_0x391453(0x346)]=function(_0x4c73ab,_0x2d7563,_0x2ad20f,_0x546d6b,_0x3c2f96){const _0x5127fb=_0x391453,_0x55f8ae=this[_0x5127fb(0x355)](_0x2d7563),_0x592b47=new(_0x55f8ae?Sprite_AnimationMV:Sprite_Animation)();_0x592b47[_0x5127fb(0x56b)]=_0x4c73ab,_0x592b47[_0x5127fb(0x6e8)](_0x4c73ab,_0x2d7563,_0x2ad20f,_0x546d6b),_0x592b47[_0x5127fb(0x6f9)](_0x3c2f96),this[_0x5127fb(0x7cd)](_0x592b47),this[_0x5127fb(0x76c)][_0x5127fb(0x268)](_0x592b47);},Spriteset_Base[_0x391453(0x307)][_0x391453(0x6de)]=function(_0x42a517){const _0xad054b=_0x391453;this[_0xad054b(0x76c)][_0xad054b(0x7db)](_0x42a517),this[_0xad054b(0x741)]['removeChild'](_0x42a517);for(const _0x3b03ad of _0x42a517['targetObjects']){if(_0x3b03ad['endAnimation']){if(_0xad054b(0x17f)!==_0xad054b(0x17f)){var _0x2d670c=_0x5514a5(_0x14d4b3['$1']);_0x165035*=_0x2d670c;}else _0x3b03ad[_0xad054b(0x515)]();}const _0x261573=this[_0xad054b(0x2ce)]();if(_0x261573)_0x261573[_0xad054b(0x193)](_0x3b03ad);}_0x42a517[_0xad054b(0x53a)]();},Spriteset_Base['prototype'][_0x391453(0x70d)]=function(){const _0x1b92ac=_0x391453;for(const _0x10cef2 of this[_0x1b92ac(0x76c)]){this[_0x1b92ac(0x6de)](_0x10cef2);}},Spriteset_Base[_0x391453(0x307)][_0x391453(0x28e)]=function(){const _0x2114cc=_0x391453;return this[_0x2114cc(0x76c)][_0x2114cc(0x4b1)]>0x0;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x76b)]=Spriteset_Base[_0x391453(0x307)][_0x391453(0x734)],Spriteset_Base[_0x391453(0x307)][_0x391453(0x734)]=function(){const _0x17800e=_0x391453;return VisuMZ[_0x17800e(0x1f6)][_0x17800e(0x76b)]['call'](this)||this[_0x17800e(0x28e)]();},Spriteset_Map[_0x391453(0x871)]=VisuMZ[_0x391453(0x1f6)][_0x391453(0x63e)]['QoL'][_0x391453(0x249)]||![],VisuMZ[_0x391453(0x1f6)][_0x391453(0x3ee)]=Scene_Map[_0x391453(0x307)]['createSpriteset'],Scene_Map['prototype'][_0x391453(0x713)]=function(){const _0x3002d2=_0x391453;VisuMZ[_0x3002d2(0x1f6)][_0x3002d2(0x3ee)][_0x3002d2(0xd0)](this);if(!Spriteset_Map[_0x3002d2(0x871)])return;const _0x3e2f77=this[_0x3002d2(0xde)];if(!_0x3e2f77)return;this[_0x3002d2(0x4f0)]=_0x3e2f77[_0x3002d2(0x4f0)];if(!this['_pictureContainer'])return;this['addChild'](this[_0x3002d2(0x4f0)]);},Spriteset_Battle[_0x391453(0x871)]=VisuMZ['CoreEngine'][_0x391453(0x63e)][_0x391453(0x7e5)]['DetachBattlePictureContainer']||![],VisuMZ[_0x391453(0x1f6)][_0x391453(0x8d3)]=Scene_Battle[_0x391453(0x307)][_0x391453(0x713)],Scene_Battle['prototype'][_0x391453(0x713)]=function(){const _0x289d53=_0x391453;VisuMZ[_0x289d53(0x1f6)][_0x289d53(0x8d3)]['call'](this);if(!Spriteset_Battle[_0x289d53(0x871)])return;const _0x201e0b=this[_0x289d53(0xde)];if(!_0x201e0b)return;this['_pictureContainer']=_0x201e0b[_0x289d53(0x4f0)];if(!this[_0x289d53(0x4f0)])return;this[_0x289d53(0x8f9)](this['_pictureContainer']);},Spriteset_Battle[_0x391453(0x307)]['createBackground']=function(){const _0x18de39=_0x391453;this['_backgroundFilter']=new PIXI[(_0x18de39(0x1b9))][(_0x18de39(0x72e))](clamp=!![]),this['_backgroundSprite']=new Sprite(),this[_0x18de39(0x716)][_0x18de39(0x3e4)]=SceneManager[_0x18de39(0x7c2)](),this['_backgroundSprite'][_0x18de39(0x1b9)]=[this[_0x18de39(0x7ec)]],this[_0x18de39(0x4d7)]['addChild'](this[_0x18de39(0x716)]);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x670)]=Spriteset_Battle[_0x391453(0x307)][_0x391453(0x4ef)],Spriteset_Battle[_0x391453(0x307)][_0x391453(0x4ef)]=function(){const _0x32af05=_0x391453;this[_0x32af05(0x6f0)]()&&this[_0x32af05(0x8de)](),VisuMZ[_0x32af05(0x1f6)][_0x32af05(0x670)][_0x32af05(0xd0)](this);},Spriteset_Battle[_0x391453(0x307)]['coreEngineRepositionEnemies']=function(){const _0xc08920=_0x391453,_0x50ddf1=VisuMZ[_0xc08920(0x1f6)][_0xc08920(0x63e)][_0xc08920(0x13e)];if(!_0x50ddf1)return![];if(Utils[_0xc08920(0x2f6)]>=_0xc08920(0x485)&&!_0x50ddf1[_0xc08920(0x769)]){if(_0xc08920(0x666)===_0xc08920(0xe3))this[_0xc08920(0x2f2)]={},_0x5bc5b6['prototype'][_0xc08920(0x4f3)][_0xc08920(0xd0)](this,_0x45bdae),this[_0xc08920(0x39a)](_0x2a2e2a[_0xc08920(0x1f6)][_0xc08920(0x63e)]['ButtonAssist'][_0xc08920(0x25d)]||0x0),this['refresh']();else return![];}return _0x50ddf1[_0xc08920(0x4bb)];},Spriteset_Battle[_0x391453(0x307)][_0x391453(0x8de)]=function(){const _0x50e446=_0x391453;for(member of $gameTroop[_0x50e446(0x6df)]()){member[_0x50e446(0x518)]();}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x121)]=Window_Base['prototype']['initialize'],Window_Base[_0x391453(0x307)][_0x391453(0x4f3)]=function(_0x396b9e){const _0x3c7a9f=_0x391453;_0x396b9e['x']=Math[_0x3c7a9f(0x213)](_0x396b9e['x']),_0x396b9e['y']=Math[_0x3c7a9f(0x213)](_0x396b9e['y']),_0x396b9e[_0x3c7a9f(0x786)]=Math[_0x3c7a9f(0x213)](_0x396b9e[_0x3c7a9f(0x786)]),_0x396b9e[_0x3c7a9f(0x8e8)]=Math[_0x3c7a9f(0x213)](_0x396b9e[_0x3c7a9f(0x8e8)]),this[_0x3c7a9f(0x3c0)](),VisuMZ[_0x3c7a9f(0x1f6)][_0x3c7a9f(0x121)][_0x3c7a9f(0xd0)](this,_0x396b9e),this[_0x3c7a9f(0x1a4)]();},Window_Base[_0x391453(0x307)][_0x391453(0x3c0)]=function(){const _0x22a650=_0x391453;this[_0x22a650(0x425)]=VisuMZ[_0x22a650(0x1f6)][_0x22a650(0x63e)][_0x22a650(0x7e5)][_0x22a650(0x428)],this[_0x22a650(0x1b0)]=VisuMZ['CoreEngine'][_0x22a650(0x63e)]['QoL'][_0x22a650(0x4c0)];},Window_Base[_0x391453(0x307)][_0x391453(0x782)]=function(){const _0x43e166=_0x391453;return VisuMZ[_0x43e166(0x1f6)][_0x43e166(0x63e)]['Window'][_0x43e166(0x67b)];},Window_Base[_0x391453(0x307)][_0x391453(0x29d)]=function(){const _0x1257f8=_0x391453;return VisuMZ[_0x1257f8(0x1f6)][_0x1257f8(0x63e)][_0x1257f8(0x5f3)][_0x1257f8(0x51c)];},Window_Base[_0x391453(0x307)][_0x391453(0x123)]=function(){const _0x4b7928=_0x391453;$gameSystem['windowOpacity']?this['backOpacity']=$gameSystem[_0x4b7928(0x3ca)]():this[_0x4b7928(0x756)]=VisuMZ[_0x4b7928(0x1f6)][_0x4b7928(0x63e)][_0x4b7928(0x5f3)][_0x4b7928(0x315)];},Window_Base['prototype'][_0x391453(0x46d)]=function(){const _0x238de0=_0x391453;return VisuMZ[_0x238de0(0x1f6)][_0x238de0(0x63e)]['Window'][_0x238de0(0xf2)];},Window_Base[_0x391453(0x307)][_0x391453(0x575)]=function(){const _0x27d06d=_0x391453;return VisuMZ[_0x27d06d(0x1f6)][_0x27d06d(0x63e)][_0x27d06d(0x5f3)]['OpenSpeed'];},VisuMZ['CoreEngine'][_0x391453(0x61b)]=Window_Base[_0x391453(0x307)][_0x391453(0x8cf)],Window_Base[_0x391453(0x307)][_0x391453(0x8cf)]=function(){const _0x6d626c=_0x391453;VisuMZ[_0x6d626c(0x1f6)][_0x6d626c(0x61b)][_0x6d626c(0xd0)](this),this['updateCoreEasing']();},Window_Base[_0x391453(0x307)][_0x391453(0x72f)]=function(){const _0x5d3899=_0x391453;if(this[_0x5d3899(0x6d4)]){if('Kuiwt'!==_0x5d3899(0x174)){this[_0x5d3899(0x8fb)]+=this[_0x5d3899(0x575)]();if(this[_0x5d3899(0x44d)]()){if(_0x5d3899(0x37a)===_0x5d3899(0x37a))this[_0x5d3899(0x6d4)]=![];else return this[_0x5d3899(0x5a3)]||this;}}else{var _0x300253=_0x15f7d9(_0x1b4ae7['$1'])/0x64;_0x5eab31*=_0x300253;}}},Window_Base['prototype'][_0x391453(0x257)]=function(){const _0x3a247a=_0x391453;if(this['_closing']){if(_0x3a247a(0x852)!==_0x3a247a(0x852)){var _0x4ca294=_0xacb35b(_0x28a6f1['$1']);try{_0x84ef51=_0x4ddc90[_0x3a247a(0x933)](_0x3b31cc,_0x55ca3d(_0x253c1b(_0x4ca294)));}catch(_0x214237){if(_0x54c832[_0x3a247a(0x4a5)]())_0x541982[_0x3a247a(0x4fd)](_0x214237);}}else this[_0x3a247a(0x8fb)]-=this[_0x3a247a(0x575)](),this[_0x3a247a(0x41d)]()&&(this['_closing']=![]);}},VisuMZ['CoreEngine'][_0x391453(0x6af)]=Window_Base[_0x391453(0x307)]['drawText'],Window_Base['prototype'][_0x391453(0x809)]=function(_0x47794b,_0x3da25f,_0x51b076,_0x5cd507,_0x2e87df){const _0x183dca=_0x391453;if(this[_0x183dca(0x199)]())_0x47794b=VisuMZ[_0x183dca(0x2e1)](_0x47794b);VisuMZ['CoreEngine'][_0x183dca(0x6af)][_0x183dca(0xd0)](this,_0x47794b,_0x3da25f,_0x51b076,_0x5cd507,_0x2e87df);},Window_Base[_0x391453(0x307)][_0x391453(0x199)]=function(){const _0x5a1c84=_0x391453;return this[_0x5a1c84(0x425)];},VisuMZ[_0x391453(0x1f6)]['Window_Base_createTextState']=Window_Base[_0x391453(0x307)][_0x391453(0x584)],Window_Base[_0x391453(0x307)][_0x391453(0x584)]=function(_0x2b2e1e,_0x178bfc,_0x5a0915,_0x584fff){const _0x5bf228=_0x391453;var _0x2e3d05=VisuMZ[_0x5bf228(0x1f6)][_0x5bf228(0x2ca)][_0x5bf228(0xd0)](this,_0x2b2e1e,_0x178bfc,_0x5a0915,_0x584fff);if(this[_0x5bf228(0x1ea)]())_0x2e3d05['text']=VisuMZ[_0x5bf228(0x2e1)](_0x2e3d05[_0x5bf228(0x849)]);return _0x2e3d05;},Window_Base[_0x391453(0x307)][_0x391453(0x1ea)]=function(){const _0x4cfbaf=_0x391453;return this[_0x4cfbaf(0x1b0)];},Window_Base[_0x391453(0x307)]['enableDigitGrouping']=function(_0x13f011){this['_digitGrouping']=_0x13f011;},Window_Base['prototype']['enableDigitGroupingEx']=function(_0x493cd1){const _0x85dbcf=_0x391453;this[_0x85dbcf(0x1b0)]=_0x493cd1;},VisuMZ['CoreEngine'][_0x391453(0x8f5)]=Window_Base[_0x391453(0x307)]['drawIcon'],Window_Base[_0x391453(0x307)]['drawIcon']=function(_0x918094,_0xe93fe7,_0x3c4451){const _0x3fc216=_0x391453;_0xe93fe7=Math[_0x3fc216(0x213)](_0xe93fe7),_0x3c4451=Math[_0x3fc216(0x213)](_0x3c4451),VisuMZ[_0x3fc216(0x1f6)][_0x3fc216(0x8f5)]['call'](this,_0x918094,_0xe93fe7,_0x3c4451);},VisuMZ['CoreEngine'][_0x391453(0x11b)]=Window_Base[_0x391453(0x307)][_0x391453(0x943)],Window_Base[_0x391453(0x307)][_0x391453(0x943)]=function(_0x1db938,_0x3284b0,_0xd3e454,_0x5af460,_0xfd8c,_0xc54376){const _0x21dca6=_0x391453;_0xfd8c=_0xfd8c||ImageManager['faceWidth'],_0xc54376=_0xc54376||ImageManager[_0x21dca6(0x82e)],_0xd3e454=Math[_0x21dca6(0x213)](_0xd3e454),_0x5af460=Math[_0x21dca6(0x213)](_0x5af460),_0xfd8c=Math[_0x21dca6(0x213)](_0xfd8c),_0xc54376=Math[_0x21dca6(0x213)](_0xc54376),VisuMZ['CoreEngine'][_0x21dca6(0x11b)][_0x21dca6(0xd0)](this,_0x1db938,_0x3284b0,_0xd3e454,_0x5af460,_0xfd8c,_0xc54376);},VisuMZ[_0x391453(0x1f6)]['Window_Base_drawCharacter']=Window_Base[_0x391453(0x307)][_0x391453(0x8e1)],Window_Base['prototype'][_0x391453(0x8e1)]=function(_0x19a82d,_0x5cc752,_0x58d56c,_0x1acf5e){const _0x23cbc0=_0x391453;_0x58d56c=Math[_0x23cbc0(0x213)](_0x58d56c),_0x1acf5e=Math[_0x23cbc0(0x213)](_0x1acf5e),VisuMZ['CoreEngine']['Window_Base_drawCharacter'][_0x23cbc0(0xd0)](this,_0x19a82d,_0x5cc752,_0x58d56c,_0x1acf5e);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x76a)]=Window_Selectable[_0x391453(0x307)][_0x391453(0x3f9)],Window_Selectable[_0x391453(0x307)][_0x391453(0x3f9)]=function(_0x151fa0){const _0x581ee3=_0x391453;let _0x590478=VisuMZ[_0x581ee3(0x1f6)]['Window_Selectable_itemRect'][_0x581ee3(0xd0)](this,_0x151fa0);return _0x590478['x']=Math[_0x581ee3(0x213)](_0x590478['x']),_0x590478['y']=Math[_0x581ee3(0x213)](_0x590478['y']),_0x590478[_0x581ee3(0x786)]=Math['round'](_0x590478[_0x581ee3(0x786)]),_0x590478['height']=Math[_0x581ee3(0x213)](_0x590478['height']),_0x590478;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x528)]=Window_StatusBase['prototype'][_0x391453(0x43e)],Window_StatusBase['prototype']['drawActorSimpleStatus']=function(_0x201e13,_0x13be8d,_0x4fba2e){const _0x4b0fb5=_0x391453;_0x13be8d=Math[_0x4b0fb5(0x213)](_0x13be8d),_0x4fba2e=Math[_0x4b0fb5(0x213)](_0x4fba2e),VisuMZ[_0x4b0fb5(0x1f6)][_0x4b0fb5(0x528)][_0x4b0fb5(0xd0)](this,_0x201e13,_0x13be8d,_0x4fba2e);},Window_Base['prototype'][_0x391453(0x1a4)]=function(){const _0x25954b=_0x391453;this[_0x25954b(0xec)]={'duration':0x0,'wholeDuration':0x0,'type':_0x25954b(0x334),'targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0x25954b(0x2ac)]['x'],'targetScaleY':this['scale']['y'],'targetOpacity':this[_0x25954b(0x14a)],'targetBackOpacity':this[_0x25954b(0x756)],'targetContentsOpacity':this[_0x25954b(0x8c5)]};},Window_Base['prototype'][_0x391453(0x2b8)]=function(){const _0x356941=_0x391453;if(!this[_0x356941(0xec)])return;if(this[_0x356941(0xec)][_0x356941(0x117)]<=0x0)return;this['x']=this[_0x356941(0x345)](this['x'],this[_0x356941(0xec)][_0x356941(0x630)]),this['y']=this['applyCoreEasing'](this['y'],this[_0x356941(0xec)][_0x356941(0x277)]),this['scale']['x']=this[_0x356941(0x345)](this['scale']['x'],this['_coreEasing'][_0x356941(0x514)]),this[_0x356941(0x2ac)]['y']=this[_0x356941(0x345)](this[_0x356941(0x2ac)]['y'],this[_0x356941(0xec)][_0x356941(0x4c7)]),this[_0x356941(0x14a)]=this[_0x356941(0x345)](this[_0x356941(0x14a)],this[_0x356941(0xec)][_0x356941(0x3cc)]),this[_0x356941(0x756)]=this[_0x356941(0x345)](this[_0x356941(0x756)],this['_coreEasing'][_0x356941(0x519)]),this[_0x356941(0x8c5)]=this[_0x356941(0x345)](this[_0x356941(0x8c5)],this[_0x356941(0xec)][_0x356941(0x95c)]),this[_0x356941(0xec)]['duration']--;},Window_Base['prototype'][_0x391453(0x345)]=function(_0x19626d,_0x58d9f0){const _0x4cf230=_0x391453;if(!this[_0x4cf230(0xec)])return _0x58d9f0;const _0xb3fefa=this[_0x4cf230(0xec)]['duration'],_0x17e9c0=this['_coreEasing'][_0x4cf230(0x531)],_0xfb390a=this[_0x4cf230(0x21e)]((_0x17e9c0-_0xb3fefa)/_0x17e9c0),_0x15a4c2=this[_0x4cf230(0x21e)]((_0x17e9c0-_0xb3fefa+0x1)/_0x17e9c0),_0x20d6f4=(_0x19626d-_0x58d9f0*_0xfb390a)/(0x1-_0xfb390a);return _0x20d6f4+(_0x58d9f0-_0x20d6f4)*_0x15a4c2;},Window_Base[_0x391453(0x307)][_0x391453(0x21e)]=function(_0x428181){const _0x2590cd=_0x391453;if(!this[_0x2590cd(0xec)])return _0x428181;return VisuMZ[_0x2590cd(0x682)](_0x428181,this[_0x2590cd(0xec)][_0x2590cd(0x34c)]||_0x2590cd(0x334));},Window_Base[_0x391453(0x307)][_0x391453(0x115)]=function(_0x694796,_0x407511){const _0x59575f=_0x391453;if(!this[_0x59575f(0xec)])return;this['x']=this['_coreEasing']['targetX'],this['y']=this[_0x59575f(0xec)][_0x59575f(0x277)],this[_0x59575f(0x2ac)]['x']=this[_0x59575f(0xec)]['targetScaleX'],this[_0x59575f(0x2ac)]['y']=this[_0x59575f(0xec)]['targetScaleY'],this['opacity']=this[_0x59575f(0xec)]['targetOpacity'],this['backOpacity']=this[_0x59575f(0xec)][_0x59575f(0x519)],this[_0x59575f(0x8c5)]=this[_0x59575f(0xec)][_0x59575f(0x95c)],this[_0x59575f(0x26b)](_0x694796,_0x407511,this['x'],this['y'],this[_0x59575f(0x2ac)]['x'],this[_0x59575f(0x2ac)]['y'],this['opacity'],this[_0x59575f(0x756)],this['contentsOpacity']);},Window_Base[_0x391453(0x307)][_0x391453(0x26b)]=function(_0x33a3dd,_0x104ccb,_0x3f26ac,_0x5b7782,_0x3358e3,_0x213259,_0x31fb59,_0x307db9,_0x3a7057){const _0x4f04a5=_0x391453;this[_0x4f04a5(0xec)]={'duration':_0x33a3dd,'wholeDuration':_0x33a3dd,'type':_0x104ccb,'targetX':_0x3f26ac,'targetY':_0x5b7782,'targetScaleX':_0x3358e3,'targetScaleY':_0x213259,'targetOpacity':_0x31fb59,'targetBackOpacity':_0x307db9,'targetContentsOpacity':_0x3a7057};},Window_Base['prototype'][_0x391453(0x5a1)]=function(_0x20f527,_0x84ff20,_0x13107a,_0x1fca77,_0x524034){const _0xd7ca11=_0x391453;this[_0xd7ca11(0x1dc)](),this['contents'][_0xd7ca11(0x875)]=VisuMZ[_0xd7ca11(0x1f6)][_0xd7ca11(0x63e)][_0xd7ca11(0x6ea)]['GoldFontSize'];const _0x30ed0b=VisuMZ[_0xd7ca11(0x1f6)][_0xd7ca11(0x63e)][_0xd7ca11(0x6ea)][_0xd7ca11(0x480)];if(_0x30ed0b>0x0&&_0x84ff20===TextManager['currencyUnit']){const _0x21c55c=_0x1fca77+(this[_0xd7ca11(0x782)]()-ImageManager['iconHeight'])/0x2;this[_0xd7ca11(0x912)](_0x30ed0b,_0x13107a+(_0x524034-ImageManager['iconWidth']),_0x21c55c),_0x524034-=ImageManager[_0xd7ca11(0x178)]+0x4;}else this[_0xd7ca11(0x4a1)](ColorManager['systemColor']()),this[_0xd7ca11(0x809)](_0x84ff20,_0x13107a,_0x1fca77,_0x524034,'right'),_0x524034-=this['textWidth'](_0x84ff20)+0x6;this[_0xd7ca11(0x1ee)]();const _0x287445=this[_0xd7ca11(0x8e4)](this['_digitGrouping']?VisuMZ[_0xd7ca11(0x2e1)](_0x20f527):_0x20f527);_0x287445>_0x524034?this[_0xd7ca11(0x809)](VisuMZ['CoreEngine']['Settings']['Gold'][_0xd7ca11(0x359)],_0x13107a,_0x1fca77,_0x524034,_0xd7ca11(0x33e)):_0xd7ca11(0x30b)!==_0xd7ca11(0x5c4)?this['drawText'](_0x20f527,_0x13107a,_0x1fca77,_0x524034,_0xd7ca11(0x33e)):(_0x1d12fa[_0xd7ca11(0x5eb)]=0x0,_0x4c0101[_0xd7ca11(0xf4)]=0x0,_0x3c78a2[_0xd7ca11(0x87d)]=0x0,_0x1d7977[_0xd7ca11(0x5df)]=0x0),this[_0xd7ca11(0x1dc)]();},Window_Base['prototype']['drawIconBySize']=function(_0x1a17d5,_0x37e460,_0x183632,_0x2a0873,_0x355943){const _0x299f6f=_0x391453,_0x295563=ImageManager[_0x299f6f(0x3e6)](_0x299f6f(0x691)),_0x59e33d=ImageManager['iconWidth'],_0x153aa9=ImageManager['iconHeight'],_0x564f6b=_0x1a17d5%0x10*_0x59e33d,_0x43dce7=Math[_0x299f6f(0x4ff)](_0x1a17d5/0x10)*_0x153aa9,_0x2a5c29=_0x2a0873,_0x51dd71=_0x2a0873;this[_0x299f6f(0x1de)]['_context'][_0x299f6f(0x94a)]=_0x355943,this[_0x299f6f(0x1de)][_0x299f6f(0x25b)](_0x295563,_0x564f6b,_0x43dce7,_0x59e33d,_0x153aa9,_0x37e460,_0x183632,_0x2a5c29,_0x51dd71),this[_0x299f6f(0x1de)][_0x299f6f(0x236)][_0x299f6f(0x94a)]=!![];},Window_Base[_0x391453(0x307)][_0x391453(0x84e)]=function(_0x384a9e,_0x47fa36,_0x9bd2cd,_0x3593eb,_0x1d3ffd,_0x348a6a){const _0xe58644=_0x391453,_0x17c0a9=Math['floor']((_0x9bd2cd-0x2)*_0x3593eb),_0x1c9427=Sprite_Gauge['prototype'][_0xe58644(0x3ea)][_0xe58644(0xd0)](this),_0x1b6f26=_0x47fa36+this[_0xe58644(0x782)]()-_0x1c9427-0x2;this[_0xe58644(0x1de)][_0xe58644(0x327)](_0x384a9e,_0x1b6f26,_0x9bd2cd,_0x1c9427,ColorManager[_0xe58644(0x63f)]()),this[_0xe58644(0x1de)][_0xe58644(0x49c)](_0x384a9e+0x1,_0x1b6f26+0x1,_0x17c0a9,_0x1c9427-0x2,_0x1d3ffd,_0x348a6a);},Window_Selectable[_0x391453(0x307)][_0x391453(0x649)]=function(_0x461232){const _0x45195b=_0x391453;let _0x5952b7=this[_0x45195b(0x3fb)]();const _0x3938f6=this['maxItems'](),_0x4c453e=this['maxCols']();if(this[_0x45195b(0xf6)]()&&(_0x5952b7<_0x3938f6||_0x461232&&_0x4c453e===0x1)){_0x5952b7+=_0x4c453e;if(_0x5952b7>=_0x3938f6)_0x5952b7=_0x3938f6-0x1;this[_0x45195b(0x6b6)](_0x5952b7);}else{if(!this['isUseModernControls']()){if(_0x45195b(0x4ed)===_0x45195b(0x42c))return this['isMapScrollLinked']()?this[_0x45195b(0x192)]():_0x1cd83d[_0x45195b(0x1f6)][_0x45195b(0x2e6)][_0x45195b(0xd0)](this);else(_0x5952b7<_0x3938f6-_0x4c453e||_0x461232&&_0x4c453e===0x1)&&this[_0x45195b(0x6b6)]((_0x5952b7+_0x4c453e)%_0x3938f6);}}},VisuMZ[_0x391453(0x1f6)]['Window_Selectable_cursorDown']=Window_Selectable['prototype'][_0x391453(0x649)],Window_Selectable[_0x391453(0x307)]['cursorDown']=function(_0x15f1fa){const _0x5f53a2=_0x391453;this[_0x5f53a2(0xf6)]()&&_0x15f1fa&&this['maxCols']()===0x1&&this[_0x5f53a2(0x3fb)]()===this['maxItems']()-0x1?this[_0x5f53a2(0x6b6)](0x0):_0x5f53a2(0x855)!==_0x5f53a2(0x855)?_0xf4d8fb=_0x9494cb['CoreEngine']['Scene_MenuBase_helpAreaTop'][_0x5f53a2(0xd0)](this):VisuMZ[_0x5f53a2(0x1f6)][_0x5f53a2(0x1e7)][_0x5f53a2(0xd0)](this,_0x15f1fa);},Window_Selectable['prototype'][_0x391453(0x16f)]=function(_0x591279){const _0x432285=_0x391453;let _0x244038=Math[_0x432285(0x933)](0x0,this['index']());const _0x4f800d=this['maxItems'](),_0x35ed20=this[_0x432285(0xd2)]();if(this[_0x432285(0xf6)]()&&_0x244038>0x0||_0x591279&&_0x35ed20===0x1){_0x244038-=_0x35ed20;if(_0x244038<=0x0)_0x244038=0x0;this[_0x432285(0x6b6)](_0x244038);}else!this[_0x432285(0xf6)]()&&((_0x244038>=_0x35ed20||_0x591279&&_0x35ed20===0x1)&&('rpNaW'!==_0x432285(0x915)?this[_0x432285(0x6b6)]((_0x244038-_0x35ed20+_0x4f800d)%_0x4f800d):_0x35e4ff[_0x432285(0x1f6)][_0x432285(0x408)][_0x432285(0xd0)](this)));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x4b5)]=Window_Selectable[_0x391453(0x307)][_0x391453(0x16f)],Window_Selectable['prototype'][_0x391453(0x16f)]=function(_0x2baeb4){const _0x2e3f85=_0x391453;if(this[_0x2e3f85(0xf6)]()&&_0x2baeb4&&this['maxCols']()===0x1&&this[_0x2e3f85(0x3fb)]()===0x0){if('CWRnM'!=='lFWRQ')this[_0x2e3f85(0x6b6)](this[_0x2e3f85(0x7fe)]()-0x1);else return this[_0x2e3f85(0x8b5)](_0x989d89,_0x2b97e0);}else VisuMZ[_0x2e3f85(0x1f6)]['Window_Selectable_cursorUp']['call'](this,_0x2baeb4);},Window_Selectable[_0x391453(0x307)][_0x391453(0xf6)]=function(){const _0x5cb6b1=_0x391453;return VisuMZ['CoreEngine'][_0x5cb6b1(0x63e)][_0x5cb6b1(0x7e5)]['ModernControls'];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x804)]=Window_Selectable[_0x391453(0x307)]['processCursorMove'],Window_Selectable[_0x391453(0x307)][_0x391453(0x7c5)]=function(){const _0x5ea688=_0x391453;this['isUseModernControls']()?(this[_0x5ea688(0x170)](),this['processCursorHomeEndTrigger']()):VisuMZ[_0x5ea688(0x1f6)][_0x5ea688(0x804)]['call'](this);},Window_Selectable['prototype']['allowShiftScrolling']=function(){return!![];},Window_Selectable[_0x391453(0x307)][_0x391453(0x170)]=function(){const _0x540f07=_0x391453;if(this['isCursorMovable']()){const _0x5101e0=this[_0x540f07(0x3fb)]();if(Input['isRepeated'](_0x540f07(0x169))){if('XmXBA'!=='uuCsR')Input['isPressed']('shift')&&this[_0x540f07(0x823)]()?this['cursorPagedown']():this[_0x540f07(0x649)](Input[_0x540f07(0x7dd)](_0x540f07(0x169)));else{if(_0x3ad873&&_0x3218f2[_0x540f07(0x116)]){if(this[_0x540f07(0x1e1)](_0x52651f))return!![];if(this[_0x540f07(0x1d1)](_0x49b036))return!![];}}}Input[_0x540f07(0x382)]('up')&&(Input[_0x540f07(0x4d2)]('shift')&&this[_0x540f07(0x823)]()?this[_0x540f07(0x2c3)]():this['cursorUp'](Input[_0x540f07(0x7dd)]('up')));Input['isRepeated'](_0x540f07(0x33e))&&this[_0x540f07(0x4ee)](Input['isTriggered']('right'));Input[_0x540f07(0x382)](_0x540f07(0x832))&&this[_0x540f07(0x463)](Input[_0x540f07(0x7dd)](_0x540f07(0x832)));!this[_0x540f07(0x851)](_0x540f07(0x705))&&Input['isRepeated']('pagedown')&&(_0x540f07(0x84a)!=='DZvcx'?(_0x4c834a['_x']=_0x2c3f27['_x'],_0x3a96f9['_y']=_0x3dfc54['_y']):this['cursorPagedown']());!this[_0x540f07(0x851)](_0x540f07(0x6a3))&&Input[_0x540f07(0x382)](_0x540f07(0x6a3))&&this[_0x540f07(0x2c3)]();if(this['index']()!==_0x5101e0){if(_0x540f07(0x7bb)!=='yjjAy')this[_0x540f07(0x30c)]();else{var _0x5c8346=_0x310cb7(_0x2ffb32['$1'])/0x64;_0x2fad67*=_0x5c8346;}}}},Window_Selectable['prototype'][_0x391453(0x234)]=function(){const _0x5c78dd=_0x391453;if(this[_0x5c78dd(0x632)]()){const _0x43db5c=this['index']();Input[_0x5c78dd(0x7dd)](_0x5c78dd(0x1b6))&&(_0x5c78dd(0x37f)!==_0x5c78dd(0x37f)?(_0x4553cc[_0x5c78dd(0x1f6)][_0x5c78dd(0x3a6)]['call'](this),this[_0x5c78dd(0x63a)](),this['updateFauxAnimations'](),this[_0x5c78dd(0x7de)]()):this['smoothSelect'](Math[_0x5c78dd(0x1a5)](this[_0x5c78dd(0x3fb)](),0x0)));Input[_0x5c78dd(0x7dd)]('end')&&(_0x5c78dd(0x5fe)!==_0x5c78dd(0x5fe)?this[_0x5c78dd(0x6a8)]['setBackgroundType'](_0x159b40[_0x5c78dd(0x959)]['HelpBgType']):this[_0x5c78dd(0x6b6)](Math[_0x5c78dd(0x933)](this[_0x5c78dd(0x3fb)](),this['maxItems']()-0x1)));if(this['index']()!==_0x43db5c){if('vKzYu'!==_0x5c78dd(0x676))this['playCursorSound']();else return _0x544f6d['getBattleSystem']()>=0x1;}}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x5ec)]=Window_Selectable[_0x391453(0x307)][_0x391453(0x76f)],Window_Selectable[_0x391453(0x307)][_0x391453(0x76f)]=function(){const _0x2115bf=_0x391453;if(this[_0x2115bf(0xf6)]())this[_0x2115bf(0x374)]();else{if('EMCZa'===_0x2115bf(0x5a5)){if(_0x2d732d&&_0x24d3bf[_0x2115bf(0x116)])return!![];}else VisuMZ['CoreEngine'][_0x2115bf(0x5ec)][_0x2115bf(0xd0)](this);}},Window_Selectable[_0x391453(0x307)]['processTouchModernControls']=function(){const _0x3915b8=_0x391453;VisuMZ['CoreEngine']['Window_Selectable_processTouch'][_0x3915b8(0xd0)](this);},Window_Selectable[_0x391453(0x307)][_0x391453(0x8a6)]=function(){const _0x2b26c7=_0x391453;return VisuMZ[_0x2b26c7(0x1f6)][_0x2b26c7(0x63e)][_0x2b26c7(0x5f3)][_0x2b26c7(0x22d)];},Window_Selectable[_0x391453(0x307)][_0x391453(0x699)]=function(){const _0x436f78=_0x391453;return VisuMZ[_0x436f78(0x1f6)]['Settings'][_0x436f78(0x5f3)][_0x436f78(0x3f3)];},Window_Selectable['prototype']['itemHeight']=function(){const _0x55e01a=_0x391453;return Window_Scrollable[_0x55e01a(0x307)][_0x55e01a(0x288)][_0x55e01a(0xd0)](this)+VisuMZ[_0x55e01a(0x1f6)][_0x55e01a(0x63e)]['Window']['ItemHeight'];;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x873)]=Window_Selectable[_0x391453(0x307)]['drawBackgroundRect'],Window_Selectable[_0x391453(0x307)][_0x391453(0x680)]=function(_0x52da0b){const _0x43ada3=_0x391453,_0x2a2ff9=VisuMZ[_0x43ada3(0x1f6)][_0x43ada3(0x63e)][_0x43ada3(0x5f3)];if(_0x2a2ff9[_0x43ada3(0x430)]===![])return;if(_0x2a2ff9[_0x43ada3(0x7b6)]){if(_0x43ada3(0x587)===_0x43ada3(0x587))_0x2a2ff9[_0x43ada3(0x7b6)]['call'](this,_0x52da0b);else{_0x18ae2b[_0x43ada3(0x84c)](_0x231508,_0x3a5bbf);const _0x2a033a=_0x2ec234[_0x43ada3(0x155)]||_0x43ada3(0x23a),_0x27c910=_0x2a4983['Power']['clamp'](0x1,0x9),_0x311d55=_0xc2a1d[_0x43ada3(0x90d)][_0x43ada3(0x5d3)](0x1,0x9),_0x1bd974=_0x220982[_0x43ada3(0x11f)]||0x1,_0x2edb98=_0x1bbfe8[_0x43ada3(0x929)];_0x49d520[_0x43ada3(0x176)](_0x2a033a),_0x10dac7[_0x43ada3(0x15a)](_0x27c910,_0x311d55,_0x1bd974);if(_0x2edb98){const _0x5bdf17=_0x277486[_0x43ada3(0x698)]();if(_0x5bdf17)_0x5bdf17[_0x43ada3(0x4c6)](_0x1bd974);}}}else{if(_0x43ada3(0x572)===_0x43ada3(0x572))VisuMZ[_0x43ada3(0x1f6)][_0x43ada3(0x873)][_0x43ada3(0xd0)](this,_0x52da0b);else return this[_0x43ada3(0x93a)]()?this['checkSmartEventCollision'](_0xed4f88,_0x512bba):_0x2ed9b8[_0x43ada3(0x1f6)]['Game_Event_isCollidedWithEvents'][_0x43ada3(0xd0)](this,_0x3dc745,_0x258ae1);}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x223)]=Window_Gold['prototype'][_0x391453(0x8e5)],Window_Gold['prototype'][_0x391453(0x8e5)]=function(){const _0x9b70e3=_0x391453;this[_0x9b70e3(0x34f)]()?this[_0x9b70e3(0x2ff)]():_0x9b70e3(0x5c1)!=='efWjB'?(this[_0x9b70e3(0x14a)]+=this[_0x9b70e3(0x89e)]?this['fadeSpeed']():-0x1*this[_0x9b70e3(0x693)](),this[_0x9b70e3(0x14a)]=_0x5ba048[_0x9b70e3(0x1a5)](0xc0,this['opacity'])):VisuMZ[_0x9b70e3(0x1f6)][_0x9b70e3(0x223)][_0x9b70e3(0xd0)](this);},Window_Gold[_0x391453(0x307)][_0x391453(0x34f)]=function(){const _0x4d92f7=_0x391453;if(TextManager[_0x4d92f7(0x646)]!==this[_0x4d92f7(0x646)]())return![];return VisuMZ['CoreEngine'][_0x4d92f7(0x63e)][_0x4d92f7(0x6ea)][_0x4d92f7(0x6d9)];},Window_Gold['prototype'][_0x391453(0x2ff)]=function(){const _0x2ee4bf=_0x391453;this['resetFontSettings'](),this[_0x2ee4bf(0x1de)][_0x2ee4bf(0x893)](),this['contents'][_0x2ee4bf(0x875)]=VisuMZ[_0x2ee4bf(0x1f6)]['Settings']['Gold'][_0x2ee4bf(0x653)];const _0x4dd008=VisuMZ[_0x2ee4bf(0x1f6)][_0x2ee4bf(0x63e)][_0x2ee4bf(0x6ea)][_0x2ee4bf(0x480)],_0x3f372a=this[_0x2ee4bf(0x432)](0x0);if(_0x4dd008>0x0){const _0x5d8ac5=_0x3f372a['y']+(this[_0x2ee4bf(0x782)]()-ImageManager[_0x2ee4bf(0x551)])/0x2;this[_0x2ee4bf(0x912)](_0x4dd008,_0x3f372a['x'],_0x5d8ac5);const _0x283f7d=ImageManager[_0x2ee4bf(0x178)]+0x4;_0x3f372a['x']+=_0x283f7d,_0x3f372a['width']-=_0x283f7d;}this['changeTextColor'](ColorManager[_0x2ee4bf(0x848)]()),this[_0x2ee4bf(0x809)](this[_0x2ee4bf(0x646)](),_0x3f372a['x'],_0x3f372a['y'],_0x3f372a['width'],_0x2ee4bf(0x832));const _0x3f2a9d=this['textWidth'](this[_0x2ee4bf(0x646)]())+0x6;;_0x3f372a['x']+=_0x3f2a9d,_0x3f372a[_0x2ee4bf(0x786)]-=_0x3f2a9d,this[_0x2ee4bf(0x1ee)]();const _0x2ae9a1=this[_0x2ee4bf(0x135)](),_0x4b3a4e=this[_0x2ee4bf(0x8e4)](this[_0x2ee4bf(0x425)]?VisuMZ[_0x2ee4bf(0x2e1)](this[_0x2ee4bf(0x135)]()):this[_0x2ee4bf(0x135)]());if(_0x4b3a4e>_0x3f372a[_0x2ee4bf(0x786)])this[_0x2ee4bf(0x809)](VisuMZ[_0x2ee4bf(0x1f6)][_0x2ee4bf(0x63e)][_0x2ee4bf(0x6ea)][_0x2ee4bf(0x359)],_0x3f372a['x'],_0x3f372a['y'],_0x3f372a[_0x2ee4bf(0x786)],'right');else{if('dZXRb'===_0x2ee4bf(0x71a))this[_0x2ee4bf(0x809)](this['value'](),_0x3f372a['x'],_0x3f372a['y'],_0x3f372a['width'],_0x2ee4bf(0x33e));else return this[_0x2ee4bf(0x6b1)](_0x1e3183,_0x555836);}this['resetFontSettings']();},Window_StatusBase[_0x391453(0x307)]['drawParamText']=function(_0x14e510,_0x313f17,_0x580cbb,_0x42d668,_0x7130f1){const _0x5f2920=_0x391453;_0x42d668=String(_0x42d668||'')[_0x5f2920(0x448)]();if(VisuMZ[_0x5f2920(0x1f6)][_0x5f2920(0x63e)]['Param']['DrawIcons']){if(_0x5f2920(0x3f0)==='eOHrs'){const _0x300dd9=VisuMZ['GetParamIcon'](_0x42d668);if(_0x7130f1)this[_0x5f2920(0x718)](_0x300dd9,_0x14e510,_0x313f17,this[_0x5f2920(0x550)]()),_0x580cbb-=this[_0x5f2920(0x550)]()+0x2,_0x14e510+=this[_0x5f2920(0x550)]()+0x2;else{if(_0x5f2920(0x3d5)===_0x5f2920(0x7ae))for(const _0x35d817 of _0x2c6235[_0x5f2920(0x67c)]){[0x6c,0x198]['includes'](_0x35d817['code'])&&(_0xcac189+='\x0a',_0x24174e+=_0x35d817['parameters'][0x0]);}else this[_0x5f2920(0x912)](_0x300dd9,_0x14e510+0x2,_0x313f17+0x2),_0x580cbb-=ImageManager['iconWidth']+0x4,_0x14e510+=ImageManager[_0x5f2920(0x178)]+0x4;}}else return _0x242fad[_0x5f2920(0xdd)](_0x5f2920(0x6a3),_0x5f2920(0x705));}const _0x196c0d=TextManager[_0x5f2920(0x50a)](_0x42d668);this['resetFontSettings'](),this[_0x5f2920(0x4a1)](ColorManager[_0x5f2920(0x848)]()),_0x7130f1?(this[_0x5f2920(0x1de)]['fontSize']=this['smallParamFontSize'](),this[_0x5f2920(0x1de)][_0x5f2920(0x809)](_0x196c0d,_0x14e510,_0x313f17,_0x580cbb,this[_0x5f2920(0x550)](),_0x5f2920(0x832))):this['drawText'](_0x196c0d,_0x14e510,_0x313f17,_0x580cbb),this[_0x5f2920(0x1dc)]();},Window_StatusBase[_0x391453(0x307)]['smallParamFontSize']=function(){return $gameSystem['mainFontSize']()-0x8;},Window_StatusBase['prototype'][_0x391453(0x233)]=function(_0x1e6b37,_0x5a01eb,_0x2f2be4,_0x619746){const _0x342f89=_0x391453;_0x619746=_0x619746||0xa8,this[_0x342f89(0x1ee)]();if(VisuMZ['CoreEngine'][_0x342f89(0x63e)]['UI'][_0x342f89(0x79e)])this['drawTextEx'](_0x1e6b37[_0x342f89(0x145)]()[_0x342f89(0x32f)],_0x5a01eb,_0x2f2be4,_0x619746);else{if('yGEfm'!==_0x342f89(0x206))return this[_0x342f89(0x2c9)]();else{const _0x18b9c3=_0x1e6b37[_0x342f89(0x145)]()['name'][_0x342f89(0xea)](/\\I\[(\d+)\]/gi,'');this[_0x342f89(0x809)](_0x18b9c3,_0x5a01eb,_0x2f2be4,_0x619746);}}},Window_StatusBase[_0x391453(0x307)]['drawActorNickname']=function(_0x5ecedb,_0x54dd25,_0x4e00d6,_0x2c9b48){const _0x57a640=_0x391453;_0x2c9b48=_0x2c9b48||0x10e,this[_0x57a640(0x1ee)]();if(VisuMZ[_0x57a640(0x1f6)][_0x57a640(0x63e)]['UI'][_0x57a640(0x1c6)])this['drawTextEx'](_0x5ecedb[_0x57a640(0x119)](),_0x54dd25,_0x4e00d6,_0x2c9b48);else{const _0x2483ff=_0x5ecedb['nickname']()['replace'](/\\I\[(\d+)\]/gi,'');this['drawText'](_0x5ecedb[_0x57a640(0x119)](),_0x54dd25,_0x4e00d6,_0x2c9b48);}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x6b9)]=Window_StatusBase[_0x391453(0x307)][_0x391453(0x870)],Window_StatusBase[_0x391453(0x307)][_0x391453(0x870)]=function(_0x25ae26,_0x3e4b76,_0x273112){const _0x4c791c=_0x391453;if(VisuMZ[_0x4c791c(0x1f6)]['Settings'][_0x4c791c(0x217)][_0x4c791c(0x387)]===![])return;if(this[_0x4c791c(0x158)]())this[_0x4c791c(0x354)](_0x25ae26,_0x3e4b76,_0x273112);VisuMZ['CoreEngine'][_0x4c791c(0x6b9)]['call'](this,_0x25ae26,_0x3e4b76,_0x273112);},Window_StatusBase['prototype'][_0x391453(0x158)]=function(){const _0x410732=_0x391453;return VisuMZ[_0x410732(0x1f6)][_0x410732(0x63e)]['UI']['LvExpGauge'];},Window_StatusBase[_0x391453(0x307)][_0x391453(0x354)]=function(_0x40b8f1,_0x45f80f,_0x29cd82){const _0x3f2129=_0x391453;if(!_0x40b8f1)return;if(!_0x40b8f1['isActor']())return;const _0x19fe31=0x80,_0x1a9b7b=_0x40b8f1[_0x3f2129(0x89a)]();let _0x3a5470=ColorManager[_0x3f2129(0x241)](),_0x499087=ColorManager[_0x3f2129(0x7ab)]();_0x1a9b7b>=0x1&&(_0x3a5470=ColorManager[_0x3f2129(0x3a0)](),_0x499087=ColorManager[_0x3f2129(0x6a7)]()),this['drawGauge'](_0x45f80f,_0x29cd82,_0x19fe31,_0x1a9b7b,_0x3a5470,_0x499087);},Window_EquipStatus[_0x391453(0x307)][_0x391453(0x52a)]=function(){const _0x5ab990=_0x391453;let _0x38a6ea=0x0;for(const _0x492722 of VisuMZ[_0x5ab990(0x1f6)][_0x5ab990(0x63e)][_0x5ab990(0x217)]['DisplayedParams']){const _0x195ca0=this['itemPadding'](),_0x50a222=this[_0x5ab990(0x6f1)](_0x38a6ea);this[_0x5ab990(0x4da)](_0x195ca0,_0x50a222,_0x492722),_0x38a6ea++;}},Window_EquipStatus[_0x391453(0x307)][_0x391453(0x269)]=function(_0x1c5e24,_0x5c0086,_0x57d6e2){const _0x1db129=_0x391453,_0x523644=this[_0x1db129(0x7a1)]()-this[_0x1db129(0x29d)]()*0x2;this['drawParamText'](_0x1c5e24,_0x5c0086,_0x523644,_0x57d6e2,![]);},Window_EquipStatus[_0x391453(0x307)]['drawCurrentParam']=function(_0x3176f1,_0x394bd2,_0x18ff2b){const _0x3ebad5=_0x391453,_0x324e9e=this[_0x3ebad5(0x754)]();this[_0x3ebad5(0x1ee)](),this[_0x3ebad5(0x809)](this[_0x3ebad5(0x194)]['paramValueByName'](_0x18ff2b,!![]),_0x3176f1,_0x394bd2,_0x324e9e,_0x3ebad5(0x33e));},Window_EquipStatus[_0x391453(0x307)][_0x391453(0x887)]=function(_0x3506e4,_0xd21eb1){const _0x4a65a4=_0x391453,_0x1401dc=this[_0x4a65a4(0x6fe)]();this[_0x4a65a4(0x4a1)](ColorManager['systemColor']());const _0x37d665=VisuMZ[_0x4a65a4(0x1f6)][_0x4a65a4(0x63e)]['UI'][_0x4a65a4(0x362)];this[_0x4a65a4(0x809)](_0x37d665,_0x3506e4,_0xd21eb1,_0x1401dc,'center');},Window_EquipStatus[_0x391453(0x307)][_0x391453(0x753)]=function(_0x64f5c8,_0x1ec42f,_0x11d18d){const _0xdc5e82=_0x391453,_0xc0d8c2=this['paramWidth'](),_0x5a3ed7=this[_0xdc5e82(0x143)]['paramValueByName'](_0x11d18d),_0x22516b=_0x5a3ed7-this[_0xdc5e82(0x194)][_0xdc5e82(0x569)](_0x11d18d);this['changeTextColor'](ColorManager[_0xdc5e82(0x458)](_0x22516b)),this[_0xdc5e82(0x809)](this[_0xdc5e82(0x143)]['paramValueByName'](_0x11d18d,!![]),_0x64f5c8,_0x1ec42f,_0xc0d8c2,_0xdc5e82(0x33e));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x3ed)]=Window_EquipItem['prototype']['isEnabled'],Window_EquipItem[_0x391453(0x307)][_0x391453(0x53b)]=function(_0x2c0119){const _0x25478d=_0x391453;return _0x2c0119&&this[_0x25478d(0x194)]?this[_0x25478d(0x194)]['canEquip'](_0x2c0119):VisuMZ[_0x25478d(0x1f6)][_0x25478d(0x3ed)]['call'](this,_0x2c0119);},Window_StatusParams[_0x391453(0x307)][_0x391453(0x7fe)]=function(){const _0x28919e=_0x391453;return VisuMZ[_0x28919e(0x1f6)]['Settings'][_0x28919e(0x217)][_0x28919e(0x7ed)][_0x28919e(0x4b1)];},Window_StatusParams[_0x391453(0x307)][_0x391453(0x4da)]=function(_0x3feee5){const _0x2fefe5=_0x391453,_0x1092eb=this['itemLineRect'](_0x3feee5),_0x40f4bb=VisuMZ[_0x2fefe5(0x1f6)][_0x2fefe5(0x63e)][_0x2fefe5(0x217)][_0x2fefe5(0x7ed)][_0x3feee5],_0x5cc92a=TextManager['param'](_0x40f4bb),_0x3d2147=this['_actor'][_0x2fefe5(0x569)](_0x40f4bb,!![]);this[_0x2fefe5(0x377)](_0x1092eb['x'],_0x1092eb['y'],0xa0,_0x40f4bb,![]),this['resetTextColor'](),this['drawText'](_0x3d2147,_0x1092eb['x']+0xa0,_0x1092eb['y'],0x3c,_0x2fefe5(0x33e));};if(VisuMZ['CoreEngine']['Settings'][_0x391453(0x83c)][_0x391453(0x681)]){VisuMZ['CoreEngine'][_0x391453(0x63e)][_0x391453(0x83c)]['QwertyLayout']&&(Window_NameInput['LATIN1']=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x391453(0x879),'OK']);;VisuMZ[_0x391453(0x1f6)]['Window_NameInput_initialize']=Window_NameInput[_0x391453(0x307)][_0x391453(0x4f3)],Window_NameInput[_0x391453(0x307)][_0x391453(0x4f3)]=function(_0x528256){const _0x5c1821=_0x391453;this[_0x5c1821(0x66e)]=this[_0x5c1821(0x4c5)](),VisuMZ['CoreEngine'][_0x5c1821(0x6e2)][_0x5c1821(0xd0)](this,_0x528256);if(this[_0x5c1821(0x66e)]==='default'){if(_0x5c1821(0x57d)===_0x5c1821(0x57d))this[_0x5c1821(0x4e5)](0x0);else{_0x150758['ConvertParams'](_0xdbc78e,_0x5e62c9);const _0x4fd20b=_0x21fe87[_0x5c1821(0x202)]||0x1,_0x40ca16=_0x1be8d3[_0x5c1821(0x1eb)]||_0x5c1821(0x35f),_0x109a56=_0x6409a5[_0x5c1821(0x7ad)](_0x4fd20b);_0x109a56&&_0x109a56[_0x5c1821(0x2bb)](_0x40ca16);}}else Input[_0x5c1821(0x893)](),this[_0x5c1821(0x694)]();},Window_NameInput['prototype'][_0x391453(0x4c5)]=function(){const _0x1a55b4=_0x391453;if(Input[_0x1a55b4(0x594)]())return _0x1a55b4(0x75d);return VisuMZ[_0x1a55b4(0x1f6)][_0x1a55b4(0x63e)][_0x1a55b4(0x83c)][_0x1a55b4(0x16e)]||_0x1a55b4(0x64d);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x6d7)]=Window_NameInput[_0x391453(0x307)][_0x391453(0x232)],Window_NameInput['prototype'][_0x391453(0x232)]=function(){const _0x19ad3b=_0x391453;if(!this[_0x19ad3b(0x44d)]())return;if(!this[_0x19ad3b(0x621)])return;if(this[_0x19ad3b(0x66e)]==='keyboard'&&Input[_0x19ad3b(0x773)]())_0x19ad3b(0x3c3)===_0x19ad3b(0x3c3)?this[_0x19ad3b(0x28d)](_0x19ad3b(0x75d)):(_0x56427a[_0x19ad3b(0x1f6)][_0x19ad3b(0x6c3)][_0x19ad3b(0xd0)](this,_0x4ebe28),this[_0x19ad3b(0x5cc)](),this[_0x19ad3b(0x50e)](_0x112d10));else{if(Input['isSpecialCode']('backspace'))Input[_0x19ad3b(0x893)](),this[_0x19ad3b(0x464)]();else{if(Input[_0x19ad3b(0x7dd)](_0x19ad3b(0x4f8)))Input[_0x19ad3b(0x893)](),this[_0x19ad3b(0x66e)]==='keyboard'?_0x19ad3b(0x6ff)!==_0x19ad3b(0x645)?this['switchModes'](_0x19ad3b(0x75d)):_0x3320c3+=_0x4d23c6+_0x19ad3b(0x817):this[_0x19ad3b(0x28d)](_0x19ad3b(0x64d));else{if(this[_0x19ad3b(0x66e)]===_0x19ad3b(0x64d))_0x19ad3b(0xfe)!==_0x19ad3b(0xfe)?(_0x3b2d1f['pitch']=_0x78faff,_0x3bc63f[_0x19ad3b(0x55c)]=_0x3cf4b5[_0x19ad3b(0x4f2)][_0x19ad3b(0x5f5)](),_0xcae3e0[_0x19ad3b(0x4c8)](_0x127dc3),_0x152937[_0x19ad3b(0x319)](_0x36c7e5,_0x4d4b32[_0x19ad3b(0x55c)]),_0xe360d0[_0x19ad3b(0x477)][_0x19ad3b(0x58f)](_0x279860['pos'])):this[_0x19ad3b(0x2ef)]();else Input[_0x19ad3b(0x8a3)](_0x19ad3b(0x598))?(Input[_0x19ad3b(0x893)](),this['switchModes'](_0x19ad3b(0x64d))):VisuMZ[_0x19ad3b(0x1f6)][_0x19ad3b(0x6d7)][_0x19ad3b(0xd0)](this);}}}},VisuMZ['CoreEngine'][_0x391453(0xdf)]=Window_NameInput[_0x391453(0x307)][_0x391453(0x76f)],Window_NameInput[_0x391453(0x307)][_0x391453(0x76f)]=function(){const _0x13dc0a=_0x391453;if(!this[_0x13dc0a(0x7f4)]())return;if(this[_0x13dc0a(0x66e)]===_0x13dc0a(0x64d)){if(_0x13dc0a(0x71f)===_0x13dc0a(0x122))_0x42d15b['CoreEngine']['Game_Temp_initialize'][_0x13dc0a(0xd0)](this),this[_0x13dc0a(0x3e7)](),this['createFauxAnimationQueue'](),this[_0x13dc0a(0x406)]();else{if(TouchInput['isTriggered']()&&this[_0x13dc0a(0x17c)]())this[_0x13dc0a(0x28d)](_0x13dc0a(0x75d));else TouchInput['isCancelled']()&&this[_0x13dc0a(0x28d)](_0x13dc0a(0x75d));}}else VisuMZ[_0x13dc0a(0x1f6)][_0x13dc0a(0xdf)][_0x13dc0a(0xd0)](this);},Window_NameInput[_0x391453(0x307)]['processKeyboardHandling']=function(){const _0x5340a3=_0x391453;if(Input[_0x5340a3(0x8a3)](_0x5340a3(0x4c9)))_0x5340a3(0x90e)===_0x5340a3(0x125)?(this[_0x5340a3(0x88f)]=_0x52d82b,this[_0x5340a3(0x3bb)]=_0x481dfe['makeDeepCopy'](this[_0x5340a3(0x88f)])):(Input['clear'](),this['onNameOk']());else{if(Input[_0x5340a3(0x8ee)]!==undefined){if(_0x5340a3(0x6ef)!==_0x5340a3(0x82c)){let _0x7672f=Input[_0x5340a3(0x8ee)],_0x2adab4=_0x7672f[_0x5340a3(0x4b1)];for(let _0x238564=0x0;_0x238564<_0x2adab4;++_0x238564){this['_editWindow']['add'](_0x7672f[_0x238564])?SoundManager[_0x5340a3(0x19a)]():SoundManager['playBuzzer']();}Input[_0x5340a3(0x893)]();}else return _0x235cd1['CoreEngine']['Settings']['MenuLayout'][_0x5340a3(0x28b)][_0x5340a3(0x300)][_0x5340a3(0xd0)](this);}}},Window_NameInput['prototype'][_0x391453(0x28d)]=function(_0x4e6ad4){const _0x2aab5c=_0x391453;let _0x5b8be5=this[_0x2aab5c(0x66e)];this[_0x2aab5c(0x66e)]=_0x4e6ad4,_0x5b8be5!==this[_0x2aab5c(0x66e)]&&(this[_0x2aab5c(0x8e5)](),SoundManager[_0x2aab5c(0x19a)](),this['_mode']===_0x2aab5c(0x75d)?_0x2aab5c(0x2ba)===_0x2aab5c(0x292)?(_0x450bd4=_0x5ee250[_0x2aab5c(0x213)](_0x35ac93),_0x55d6de=_0x129800[_0x2aab5c(0x213)](_0x336170),_0x56a8ca[_0x2aab5c(0x1f6)]['Window_Base_drawCharacter']['call'](this,_0x36b2ad,_0x3e1fda,_0x208794,_0x39c8ae)):this[_0x2aab5c(0x4e5)](0x0):'wFMXR'===_0x2aab5c(0x290)?(this[_0x2aab5c(0x5e9)]['centerX']=!![],this[_0x2aab5c(0x5e9)][_0x2aab5c(0x656)]=_0x2a68ab[_0x2aab5c(0x50f)]||0x0):this['select'](-0x1));},VisuMZ[_0x391453(0x1f6)]['Window_NameInput_cursorDown']=Window_NameInput[_0x391453(0x307)]['cursorDown'],Window_NameInput[_0x391453(0x307)][_0x391453(0x649)]=function(_0x302351){const _0x40bcf9=_0x391453;if(this['_mode']===_0x40bcf9(0x64d)&&!Input[_0x40bcf9(0x7f9)]())return;if(Input[_0x40bcf9(0x27e)]())return;VisuMZ[_0x40bcf9(0x1f6)]['Window_NameInput_cursorDown'][_0x40bcf9(0xd0)](this,_0x302351),this[_0x40bcf9(0x28d)]('default');},VisuMZ['CoreEngine'][_0x391453(0x5bf)]=Window_NameInput['prototype'][_0x391453(0x16f)],Window_NameInput[_0x391453(0x307)][_0x391453(0x16f)]=function(_0x40c29c){const _0x4954d6=_0x391453;if(this[_0x4954d6(0x66e)]===_0x4954d6(0x64d)&&!Input[_0x4954d6(0x7f9)]())return;if(Input[_0x4954d6(0x27e)]())return;VisuMZ[_0x4954d6(0x1f6)][_0x4954d6(0x5bf)]['call'](this,_0x40c29c),this[_0x4954d6(0x28d)](_0x4954d6(0x75d));},VisuMZ[_0x391453(0x1f6)]['Window_NameInput_cursorRight']=Window_NameInput['prototype'][_0x391453(0x4ee)],Window_NameInput[_0x391453(0x307)][_0x391453(0x4ee)]=function(_0x395f32){const _0x38ccf1=_0x391453;if(this[_0x38ccf1(0x66e)]===_0x38ccf1(0x64d)&&!Input['isArrowPressed']())return;if(Input[_0x38ccf1(0x27e)]())return;VisuMZ['CoreEngine'][_0x38ccf1(0x262)]['call'](this,_0x395f32),this[_0x38ccf1(0x28d)](_0x38ccf1(0x75d));},VisuMZ[_0x391453(0x1f6)]['Window_NameInput_cursorLeft']=Window_NameInput[_0x391453(0x307)]['cursorLeft'],Window_NameInput[_0x391453(0x307)][_0x391453(0x463)]=function(_0x3abc42){const _0x4783b5=_0x391453;if(this[_0x4783b5(0x66e)]===_0x4783b5(0x64d)&&!Input['isArrowPressed']())return;if(Input[_0x4783b5(0x27e)]())return;VisuMZ[_0x4783b5(0x1f6)][_0x4783b5(0x5fd)][_0x4783b5(0xd0)](this,_0x3abc42),this['switchModes'](_0x4783b5(0x75d));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x501)]=Window_NameInput[_0x391453(0x307)]['cursorPagedown'],Window_NameInput[_0x391453(0x307)][_0x391453(0x2cf)]=function(){const _0x32392b=_0x391453;if(this[_0x32392b(0x66e)]===_0x32392b(0x64d))return;if(Input[_0x32392b(0x27e)]())return;VisuMZ[_0x32392b(0x1f6)][_0x32392b(0x501)]['call'](this),this[_0x32392b(0x28d)](_0x32392b(0x75d));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x5d5)]=Window_NameInput['prototype']['cursorPageup'],Window_NameInput[_0x391453(0x307)][_0x391453(0x2c3)]=function(){const _0xdff77e=_0x391453;if(this['_mode']===_0xdff77e(0x64d))return;if(Input[_0xdff77e(0x27e)]())return;VisuMZ[_0xdff77e(0x1f6)][_0xdff77e(0x5d5)][_0xdff77e(0xd0)](this),this['switchModes'](_0xdff77e(0x75d));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x408)]=Window_NameInput[_0x391453(0x307)][_0x391453(0x8e5)],Window_NameInput[_0x391453(0x307)][_0x391453(0x8e5)]=function(){const _0x338c0e=_0x391453;if(this[_0x338c0e(0x66e)]==='keyboard'){this[_0x338c0e(0x1de)][_0x338c0e(0x893)](),this[_0x338c0e(0x7e1)][_0x338c0e(0x893)](),this[_0x338c0e(0x1ee)]();let _0x342387=VisuMZ['CoreEngine'][_0x338c0e(0x63e)][_0x338c0e(0x83c)][_0x338c0e(0x83f)][_0x338c0e(0x8b1)]('\x0a'),_0x37c4d7=_0x342387[_0x338c0e(0x4b1)],_0x4a7415=(this['innerHeight']-_0x37c4d7*this['lineHeight']())/0x2;for(let _0x57ddd5=0x0;_0x57ddd5<_0x37c4d7;++_0x57ddd5){if(_0x338c0e(0x711)!==_0x338c0e(0x5f4)){let _0x4de9bb=_0x342387[_0x57ddd5],_0x1b41d0=this['textSizeEx'](_0x4de9bb)[_0x338c0e(0x786)],_0x39ab68=Math['floor']((this['contents'][_0x338c0e(0x786)]-_0x1b41d0)/0x2);this[_0x338c0e(0x294)](_0x4de9bb,_0x39ab68,_0x4a7415),_0x4a7415+=this[_0x338c0e(0x782)]();}else{let _0x18af7e=this['index']();const _0x1dfe02=this[_0x338c0e(0x7fe)](),_0x1c3436=this['maxCols']();if(this[_0x338c0e(0xf6)]()&&(_0x18af7e<_0x1dfe02||_0xd6f589&&_0x1c3436===0x1)){_0x18af7e+=_0x1c3436;if(_0x18af7e>=_0x1dfe02)_0x18af7e=_0x1dfe02-0x1;this[_0x338c0e(0x6b6)](_0x18af7e);}else!this[_0x338c0e(0xf6)]()&&((_0x18af7e<_0x1dfe02-_0x1c3436||_0x4dc6fe&&_0x1c3436===0x1)&&this[_0x338c0e(0x6b6)]((_0x18af7e+_0x1c3436)%_0x1dfe02));}}}else{if('xgiqF'!==_0x338c0e(0x5a9)){_0x1d321d[_0x338c0e(0x84c)](_0x391c65,_0x203fdd);const _0xc81968=_0x117a11['min'](_0x3d4509[_0x338c0e(0x726)],_0x541caa[_0x338c0e(0x94d)]),_0x443865=_0x3f2be5[_0x338c0e(0x933)](_0x3aeebe[_0x338c0e(0x726)],_0xdf4eeb[_0x338c0e(0x94d)]);for(let _0x5f576c=_0xc81968;_0x5f576c<=_0x443865;_0x5f576c++){_0x3808fc[_0x338c0e(0x850)](_0x5f576c);}}else VisuMZ['CoreEngine'][_0x338c0e(0x408)][_0x338c0e(0xd0)](this);}};};VisuMZ['CoreEngine'][_0x391453(0x861)]=Window_ShopSell[_0x391453(0x307)][_0x391453(0x53b)],Window_ShopSell['prototype']['isEnabled']=function(_0x549f0e){const _0x222220=_0x391453;if(VisuMZ[_0x222220(0x1f6)][_0x222220(0x63e)]['QoL'][_0x222220(0xe9)]&&DataManager[_0x222220(0x506)](_0x549f0e))return![];else{if(_0x222220(0x4cf)!==_0x222220(0x4cf))this['_data'][_0x222220(0x5b0)][_0x222220(0xd0)](this),this[_0x222220(0x2f2)][_0x222220(0x571)][_0x222220(0xd0)](this),this[_0x222220(0xfa)](this[_0x222220(0x2f2)][_0x222220(0x60c)][_0x222220(0x922)](this));else return VisuMZ[_0x222220(0x1f6)][_0x222220(0x861)][_0x222220(0xd0)](this,_0x549f0e);}},Window_NumberInput[_0x391453(0x307)][_0x391453(0xf6)]=function(){return![];};VisuMZ['CoreEngine']['Settings'][_0x391453(0x83c)]['EnableNumberInput']&&(VisuMZ['CoreEngine'][_0x391453(0x65e)]=Window_NumberInput[_0x391453(0x307)]['start'],Window_NumberInput[_0x391453(0x307)][_0x391453(0x440)]=function(){const _0x326cea=_0x391453;VisuMZ[_0x326cea(0x1f6)][_0x326cea(0x65e)][_0x326cea(0xd0)](this),this[_0x326cea(0x4e5)](this[_0x326cea(0x270)]-0x1),Input['clear']();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x825)]=Window_NumberInput['prototype'][_0x391453(0x109)],Window_NumberInput['prototype']['processDigitChange']=function(){const _0x5e5acb=_0x391453;if(!this['isOpenAndActive']())return;if(Input[_0x5e5acb(0x27e)]()){if(_0x5e5acb(0x836)!=='ocbiZ'){if(!this[_0x5e5acb(0x8b4)]())return this[_0x5e5acb(0x7e6)]();else return this[_0x5e5acb(0x4df)]()&&this[_0x5e5acb(0x19b)]()===_0x5e5acb(0x717)?_0x3646ed[_0x5e5acb(0x307)][_0x5e5acb(0x782)]():0x0;}else this[_0x5e5acb(0x556)]();}else{if(Input[_0x5e5acb(0x8a3)]('backspace'))this['processKeyboardBackspace']();else{if(Input[_0x5e5acb(0x2b1)]===0x2e){if(_0x5e5acb(0x934)!==_0x5e5acb(0x934))return this[_0x5e5acb(0x1da)]()&&this[_0x5e5acb(0x2e2)]<this['mhp']*_0x422d8a[_0x5e5acb(0x1f6)]['Settings'][_0x5e5acb(0x217)][_0x5e5acb(0x293)];else this[_0x5e5acb(0x343)]();}else{if(Input[_0x5e5acb(0x2b1)]===0x24){if(_0x5e5acb(0x743)===_0x5e5acb(0x743))this['processKeyboardHome']();else{const _0x593e48=0x90,_0x5e20ba=0x60,_0x314371=0x18;this[_0x5e5acb(0x808)][_0x5e5acb(0x3e4)]=this[_0x5e5acb(0x18f)],this[_0x5e5acb(0x808)][_0x5e5acb(0x14e)]['x']=0.5,this[_0x5e5acb(0x808)][_0x5e5acb(0x14e)]['y']=0x1,this['_pauseSignSprite']['move'](_0x5b247a[_0x5e5acb(0x213)](this[_0x5e5acb(0x702)]/0x2),this[_0x5e5acb(0x7da)]),this['_pauseSignSprite'][_0x5e5acb(0x663)](_0x593e48,_0x5e20ba,_0x314371,_0x314371),this['_pauseSignSprite'][_0x5e5acb(0x486)]=0xff;}}else{if(Input[_0x5e5acb(0x2b1)]===0x23)this[_0x5e5acb(0x82f)]();else{if(_0x5e5acb(0x812)!==_0x5e5acb(0x43b))VisuMZ[_0x5e5acb(0x1f6)]['Window_NumberInput_processDigitChange']['call'](this);else{if(this['_dimmerSprite']){const _0x5b811f=this[_0x5e5acb(0x6da)][_0x5e5acb(0x3e4)],_0x46fb43=this['width'],_0x20ca64=this[_0x5e5acb(0x8e8)],_0x5b79c2=this[_0x5e5acb(0x787)],_0xbd67b8=_0x50d90e[_0x5e5acb(0xfd)](),_0x23dd5b=_0x3e6f6c[_0x5e5acb(0x42d)]();_0x5b811f[_0x5e5acb(0x52c)](_0x46fb43,_0x20ca64),_0x5b811f[_0x5e5acb(0x49c)](0x0,0x0,_0x46fb43,_0x5b79c2,_0x23dd5b,_0xbd67b8,!![]),_0x5b811f[_0x5e5acb(0x327)](0x0,_0x5b79c2,_0x46fb43,_0x20ca64-_0x5b79c2*0x2,_0xbd67b8),_0x5b811f[_0x5e5acb(0x49c)](0x0,_0x20ca64-_0x5b79c2,_0x46fb43,_0x5b79c2,_0xbd67b8,_0x23dd5b,!![]),this[_0x5e5acb(0x6da)]['setFrame'](0x0,0x0,_0x46fb43,_0x20ca64);}}}}}}}},Window_NumberInput[_0x391453(0x307)]['processCursorMove']=function(){const _0x21215a=_0x391453;if(!this[_0x21215a(0x632)]())return;Input[_0x21215a(0x27e)]()?this[_0x21215a(0x556)]():Window_Selectable[_0x21215a(0x307)]['processCursorMove']['call'](this);},Window_NumberInput[_0x391453(0x307)][_0x391453(0x234)]=function(){},Window_NumberInput[_0x391453(0x307)][_0x391453(0x556)]=function(){const _0x47716c=_0x391453;if(String(this['_number'])['length']>=this[_0x47716c(0x270)])return;const _0x394c04=Number(String(this[_0x47716c(0x55b)])+Input['_inputString']);if(isNaN(_0x394c04))return;this[_0x47716c(0x55b)]=_0x394c04;const _0x8fe001='9'[_0x47716c(0x3ef)](this[_0x47716c(0x270)]);this['_number']=this[_0x47716c(0x55b)][_0x47716c(0x5d3)](0x0,_0x8fe001),Input['clear'](),this[_0x47716c(0x8e5)](),SoundManager[_0x47716c(0x807)](),this[_0x47716c(0x4e5)](this[_0x47716c(0x270)]-0x1);},Window_NumberInput[_0x391453(0x307)]['processKeyboardBackspace']=function(){const _0x4db5ff=_0x391453;this[_0x4db5ff(0x55b)]=Number(String(this[_0x4db5ff(0x55b)])[_0x4db5ff(0x538)](0x0,-0x1)),this[_0x4db5ff(0x55b)]=Math[_0x4db5ff(0x933)](0x0,this['_number']),Input[_0x4db5ff(0x893)](),this[_0x4db5ff(0x8e5)](),SoundManager[_0x4db5ff(0x807)](),this[_0x4db5ff(0x4e5)](this[_0x4db5ff(0x270)]-0x1);},Window_NumberInput[_0x391453(0x307)]['processKeyboardDelete']=function(){const _0x3bf57b=_0x391453;this[_0x3bf57b(0x55b)]=Number(String(this[_0x3bf57b(0x55b)])[_0x3bf57b(0x1b7)](0x1)),this[_0x3bf57b(0x55b)]=Math[_0x3bf57b(0x933)](0x0,this[_0x3bf57b(0x55b)]),Input[_0x3bf57b(0x893)](),this[_0x3bf57b(0x8e5)](),SoundManager['playCursor'](),this['select'](this[_0x3bf57b(0x270)]-0x1);},Window_NumberInput[_0x391453(0x307)]['processKeyboardHome']=function(){const _0x3e3d98=_0x391453;if(this[_0x3e3d98(0x3fb)]()===0x0)return;Input[_0x3e3d98(0x893)](),this[_0x3e3d98(0x8e5)](),SoundManager['playCursor'](),this[_0x3e3d98(0x4e5)](0x0);},Window_NumberInput['prototype'][_0x391453(0x82f)]=function(){const _0x3686d1=_0x391453;if(this['index']()===this[_0x3686d1(0x270)]-0x1)return;Input[_0x3686d1(0x893)](),this[_0x3686d1(0x8e5)](),SoundManager['playCursor'](),this[_0x3686d1(0x4e5)](this['_maxDigits']-0x1);});function _0x35a1(_0x3f1704,_0x4e19e3){const _0x5dfb9e=_0x5dfb();return _0x35a1=function(_0x35a10f,_0x4a90ad){_0x35a10f=_0x35a10f-0xcc;let _0x3e98d9=_0x5dfb9e[_0x35a10f];return _0x3e98d9;},_0x35a1(_0x3f1704,_0x4e19e3);};VisuMZ[_0x391453(0x1f6)]['Window_MapName_refresh']=Window_MapName['prototype'][_0x391453(0x8e5)],Window_MapName['prototype'][_0x391453(0x8e5)]=function(){const _0x27d4ff=_0x391453;VisuMZ[_0x27d4ff(0x1f6)][_0x27d4ff(0x63e)][_0x27d4ff(0x7e5)]['MapNameTextCode']?this[_0x27d4ff(0x602)]():VisuMZ[_0x27d4ff(0x1f6)][_0x27d4ff(0x31b)][_0x27d4ff(0xd0)](this);},Window_MapName[_0x391453(0x307)][_0x391453(0x602)]=function(){const _0x40ded2=_0x391453;this[_0x40ded2(0x1de)]['clear']();if($gameMap[_0x40ded2(0x284)]()){const _0xe9fd8e=this[_0x40ded2(0xf9)];this[_0x40ded2(0x8cc)](0x0,0x0,_0xe9fd8e,this[_0x40ded2(0x782)]());const _0x26b261=this[_0x40ded2(0x429)]($gameMap['displayName']())['width'];this[_0x40ded2(0x294)]($gameMap[_0x40ded2(0x284)](),Math['floor']((_0xe9fd8e-_0x26b261)/0x2),0x0);}},Window_TitleCommand[_0x391453(0x3a1)]=VisuMZ[_0x391453(0x1f6)][_0x391453(0x63e)][_0x391453(0x366)],Window_TitleCommand['prototype']['makeCommandList']=function(){const _0x1cf18b=_0x391453;this[_0x1cf18b(0x570)]();},Window_TitleCommand[_0x391453(0x307)][_0x391453(0x570)]=function(){const _0x188b8d=_0x391453;for(const _0x26768a of Window_TitleCommand[_0x188b8d(0x3a1)]){if(_0x188b8d(0x3d0)!==_0x188b8d(0x3d0))this[_0x188b8d(0x6a8)][_0x188b8d(0x39a)](_0x1f1585[_0x188b8d(0x959)][_0x188b8d(0x3eb)]);else{if(_0x26768a[_0x188b8d(0x67e)]['call'](this)){if(_0x188b8d(0x619)===_0x188b8d(0x937))_0x289294=this[_0x188b8d(0x7a8)]();else{const _0x553c83=_0x26768a['Symbol'];let _0x99e30d=_0x26768a['TextStr'];if(['','Untitled'][_0x188b8d(0x3fe)](_0x99e30d))_0x99e30d=_0x26768a[_0x188b8d(0x6f3)][_0x188b8d(0xd0)](this);const _0x3f63de=_0x26768a[_0x188b8d(0x826)][_0x188b8d(0xd0)](this),_0xab9fb3=_0x26768a[_0x188b8d(0x833)][_0x188b8d(0xd0)](this);this['addCommand'](_0x99e30d,_0x553c83,_0x3f63de,_0xab9fb3),this['setHandler'](_0x553c83,_0x26768a[_0x188b8d(0x60c)]['bind'](this,_0xab9fb3));}}}}},VisuMZ[_0x391453(0x1f6)][_0x391453(0x892)]=Window_TitleCommand[_0x391453(0x307)][_0x391453(0x652)],Window_TitleCommand[_0x391453(0x307)]['selectLast']=function(){const _0x413e22=_0x391453;VisuMZ[_0x413e22(0x1f6)][_0x413e22(0x892)]['call'](this);if(!Window_TitleCommand[_0x413e22(0x902)])return;const _0x412016=this[_0x413e22(0x588)](Window_TitleCommand['_lastCommandSymbol']),_0x2074ce=Math[_0x413e22(0x4ff)](this['maxVisibleItems']()/0x2)-0x1;this['smoothSelect'](_0x412016),this[_0x413e22(0x60d)]>0x1&&(this['_scrollDuration']=0x1,this['updateSmoothScroll']()),this[_0x413e22(0x751)](_0x412016-_0x2074ce);},Window_GameEnd[_0x391453(0x3a1)]=VisuMZ['CoreEngine']['Settings'][_0x391453(0x1e9)]['GameEnd'][_0x391453(0x24d)],Window_GameEnd[_0x391453(0x307)]['makeCommandList']=function(){this['makeCoreEngineCommandList']();},Window_GameEnd[_0x391453(0x307)]['makeCoreEngineCommandList']=function(){const _0x274c6c=_0x391453;for(const _0x3833fe of Window_GameEnd[_0x274c6c(0x3a1)]){if('FUlwh'!=='FUlwh'){if(this[_0x274c6c(0x2dd)]()[_0x274c6c(0x2a7)]&&_0x3d0f6d[_0x274c6c(0x6fa)]()===0x1){this['_displayY']=this['centerCameraCheckData']()[_0x274c6c(0x831)];return;}_0x268800['CoreEngine']['Game_Map_scrollUp'][_0x274c6c(0xd0)](this,_0x1bcaf7);}else{if(_0x3833fe[_0x274c6c(0x67e)][_0x274c6c(0xd0)](this)){if(_0x274c6c(0x868)!=='furcw'){const _0x1c620f=_0x3833fe[_0x274c6c(0x57e)];let _0xe74052=_0x3833fe[_0x274c6c(0x401)];if(['','Untitled'][_0x274c6c(0x3fe)](_0xe74052))_0xe74052=_0x3833fe[_0x274c6c(0x6f3)][_0x274c6c(0xd0)](this);const _0x453bc9=_0x3833fe[_0x274c6c(0x826)]['call'](this),_0x3346cf=_0x3833fe[_0x274c6c(0x833)][_0x274c6c(0xd0)](this);this[_0x274c6c(0x7a3)](_0xe74052,_0x1c620f,_0x453bc9,_0x3346cf),this[_0x274c6c(0x91a)](_0x1c620f,_0x3833fe[_0x274c6c(0x60c)][_0x274c6c(0x922)](this,_0x3346cf));}else return this[_0x274c6c(0x3c1)]();}}}};function Window_ButtonAssist(){const _0x507f11=_0x391453;this[_0x507f11(0x4f3)](...arguments);}Window_ButtonAssist[_0x391453(0x307)]=Object[_0x391453(0x190)](Window_Base['prototype']),Window_ButtonAssist[_0x391453(0x307)][_0x391453(0x349)]=Window_ButtonAssist,Window_ButtonAssist[_0x391453(0x307)]['initialize']=function(_0x268a77){const _0x5a77e7=_0x391453;this[_0x5a77e7(0x2f2)]={},Window_Base[_0x5a77e7(0x307)][_0x5a77e7(0x4f3)]['call'](this,_0x268a77),this[_0x5a77e7(0x39a)](VisuMZ['CoreEngine'][_0x5a77e7(0x63e)][_0x5a77e7(0x708)][_0x5a77e7(0x25d)]||0x0),this['refresh']();},Window_ButtonAssist[_0x391453(0x307)]['makeFontBigger']=function(){const _0x407d6d=_0x391453;if(this[_0x407d6d(0x1de)]['fontSize']<=0x60){if(_0x407d6d(0x6e3)===_0x407d6d(0x8d2)){if(_0x56f20b['inBattle']())return;_0x18c5ff[_0x407d6d(0x84c)](_0x231307,_0x4e5fbd);const _0x100766=_0x294d12[_0x407d6d(0x1a5)](_0x546174[_0x407d6d(0x726)],_0x44fb8d['EndingID']),_0x324076=_0x4e4378[_0x407d6d(0x933)](_0xbcb752['StartID'],_0x8e5784[_0x407d6d(0x94d)]),_0x146293=(_0x15f786['Chance']||0x0)/0x64;for(let _0x279dac=_0x100766;_0x279dac<=_0x324076;_0x279dac++){const _0x46b0e8=_0x179c11[_0x407d6d(0x23a)]()<=_0x146293;_0x1a584b[_0x407d6d(0x4ec)](_0x279dac,_0x46b0e8);}}else this[_0x407d6d(0x1de)][_0x407d6d(0x875)]+=0x6;}},Window_ButtonAssist[_0x391453(0x307)]['makeFontSmaller']=function(){const _0x814cd4=_0x391453;this[_0x814cd4(0x1de)][_0x814cd4(0x875)]>=0x18&&(this[_0x814cd4(0x1de)][_0x814cd4(0x875)]-=0x6);},Window_ButtonAssist[_0x391453(0x307)][_0x391453(0x8cf)]=function(){const _0x412ef4=_0x391453;Window_Base['prototype'][_0x412ef4(0x8cf)][_0x412ef4(0xd0)](this),this['updateKeyText']();},Window_ButtonAssist[_0x391453(0x307)]['updatePadding']=function(){const _0x382757=_0x391453;this[_0x382757(0x787)]=SceneManager[_0x382757(0x254)][_0x382757(0x19b)]()!==_0x382757(0x8d6)?0x0:0x8;},Window_ButtonAssist['prototype'][_0x391453(0x52b)]=function(){const _0x58622c=_0x391453,_0x4206a3=SceneManager[_0x58622c(0x254)];for(let _0x2799f6=0x1;_0x2799f6<=0x5;_0x2799f6++){if('gGdLX'==='gGdLX'){if(this[_0x58622c(0x2f2)][_0x58622c(0x7fa)[_0x58622c(0x5ae)](_0x2799f6)]!==_0x4206a3[_0x58622c(0x1a8)[_0x58622c(0x5ae)](_0x2799f6)]()){if(_0x58622c(0x39e)==='UAPgX')return this[_0x58622c(0x8e5)]();else _0x4b3236[_0x58622c(0x1f6)]['Scene_Name_create'][_0x58622c(0xd0)](this),this[_0x58622c(0x785)]();}if(this[_0x58622c(0x2f2)][_0x58622c(0x583)[_0x58622c(0x5ae)](_0x2799f6)]!==_0x4206a3[_0x58622c(0x5cf)[_0x58622c(0x5ae)](_0x2799f6)]())return this[_0x58622c(0x8e5)]();}else _0x6b2a37['name']=_0x239907(_0x4f5989['$2'][_0x58622c(0x780)]());}},Window_ButtonAssist['prototype'][_0x391453(0x8e5)]=function(){const _0x1dae90=_0x391453;this[_0x1dae90(0x1de)][_0x1dae90(0x893)]();for(let _0x495da9=0x1;_0x495da9<=0x5;_0x495da9++){_0x1dae90(0x4a9)===_0x1dae90(0x4a9)?this[_0x1dae90(0x8af)](_0x495da9):(_0x3f5eaa[_0x1dae90(0x4a5)]()&&(_0x9f05a4[_0x1dae90(0x4fd)](_0x1dae90(0x837)),_0x473b76[_0x1dae90(0x4fd)](_0x5649f8)),this['skipBranch']());}},Window_ButtonAssist[_0x391453(0x307)][_0x391453(0x8af)]=function(_0x45ca2b){const _0x223482=_0x391453,_0x56350d=this[_0x223482(0xf9)]/0x5,_0x4a9ec7=SceneManager[_0x223482(0x254)],_0x442d91=_0x4a9ec7[_0x223482(0x1a8)[_0x223482(0x5ae)](_0x45ca2b)](),_0x142e7e=_0x4a9ec7['buttonAssistText%1'[_0x223482(0x5ae)](_0x45ca2b)]();this[_0x223482(0x2f2)]['key%1'[_0x223482(0x5ae)](_0x45ca2b)]=_0x442d91,this[_0x223482(0x2f2)][_0x223482(0x583)[_0x223482(0x5ae)](_0x45ca2b)]=_0x142e7e;if(_0x442d91==='')return;if(_0x142e7e==='')return;const _0x1fc5f1=_0x4a9ec7[_0x223482(0x791)[_0x223482(0x5ae)](_0x45ca2b)](),_0x3963d0=this['itemPadding'](),_0x2bd7f0=_0x56350d*(_0x45ca2b-0x1)+_0x3963d0+_0x1fc5f1,_0x44b59c=VisuMZ['CoreEngine']['Settings']['ButtonAssist'][_0x223482(0x3c6)];this[_0x223482(0x294)](_0x44b59c['format'](_0x442d91,_0x142e7e),_0x2bd7f0,0x0,_0x56350d-_0x3963d0*0x2);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x768)]=Game_Interpreter[_0x391453(0x307)][_0x391453(0x1f4)],Game_Interpreter[_0x391453(0x307)]['updateWaitMode']=function(){const _0x503a26=_0x391453;if($gameTemp[_0x503a26(0x18c)]!==undefined)return VisuMZ[_0x503a26(0x1f6)][_0x503a26(0x17b)]();return VisuMZ[_0x503a26(0x1f6)][_0x503a26(0x768)][_0x503a26(0xd0)](this);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x17b)]=function(){const _0x171a03=_0x391453,_0x29a0fa=$gameTemp[_0x171a03(0x18c)]||0x0;(_0x29a0fa<0x0||_0x29a0fa>0x64||TouchInput['isCancelled']()||Input[_0x171a03(0x7dd)]('cancel'))&&($gameTemp[_0x171a03(0x18c)]=undefined,Input[_0x171a03(0x893)](),TouchInput['clear']());const _0x24f6cc=$gameScreen[_0x171a03(0x7ad)](_0x29a0fa);return _0x24f6cc&&(_0x24f6cc['_x']=TouchInput['_x'],_0x24f6cc['_y']=TouchInput['_y']),VisuMZ[_0x171a03(0x1f6)]['updatePictureCoordinates'](),$gameTemp['_pictureCoordinatesMode']!==undefined;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x166)]=function(){const _0x325942=_0x391453,_0x9c87ec=SceneManager[_0x325942(0x254)];if(!_0x9c87ec)return;!_0x9c87ec['_pictureCoordinatesWindow']&&(SoundManager[_0x325942(0x1d5)](),_0x9c87ec[_0x325942(0x456)]=new Window_PictureCoordinates(),_0x9c87ec[_0x325942(0x8f9)](_0x9c87ec['_pictureCoordinatesWindow']));if($gameTemp[_0x325942(0x18c)]===undefined){if(_0x325942(0x882)===_0x325942(0x828)){const _0x2ae11b=this['context'];_0x2ae11b[_0x325942(0x60e)](),_0x2ae11b[_0x325942(0x230)]=this[_0x325942(0x40f)]();const _0x3b0842=_0x2ae11b[_0x325942(0x856)](_0x37e3ce)[_0x325942(0x786)];return _0x2ae11b[_0x325942(0x177)](),_0x3b0842;}else SoundManager['playCancel'](),_0x9c87ec[_0x325942(0x193)](_0x9c87ec[_0x325942(0x456)]),_0x9c87ec[_0x325942(0x456)]=undefined;}};function Window_PictureCoordinates(){this['initialize'](...arguments);}Window_PictureCoordinates[_0x391453(0x307)]=Object['create'](Window_Base[_0x391453(0x307)]),Window_PictureCoordinates[_0x391453(0x307)][_0x391453(0x349)]=Window_PictureCoordinates,Window_PictureCoordinates[_0x391453(0x307)][_0x391453(0x4f3)]=function(){const _0x333589=_0x391453;this['_lastOrigin']=_0x333589(0x8d4),this[_0x333589(0x919)]='nah',this['_lastY']=_0x333589(0x8d4);const _0x1a3e7c=this[_0x333589(0x205)]();Window_Base[_0x333589(0x307)][_0x333589(0x4f3)][_0x333589(0xd0)](this,_0x1a3e7c),this[_0x333589(0x39a)](0x2);},Window_PictureCoordinates[_0x391453(0x307)][_0x391453(0x205)]=function(){const _0x1281f2=_0x391453;let _0x46fa2a=0x0,_0x7879bc=Graphics[_0x1281f2(0x8e8)]-this[_0x1281f2(0x782)](),_0x1cda35=Graphics['width'],_0x2e36c7=this[_0x1281f2(0x782)]();return new Rectangle(_0x46fa2a,_0x7879bc,_0x1cda35,_0x2e36c7);},Window_PictureCoordinates[_0x391453(0x307)][_0x391453(0x82a)]=function(){const _0x2e5d81=_0x391453;this[_0x2e5d81(0x787)]=0x0;},Window_PictureCoordinates[_0x391453(0x307)][_0x391453(0x8cf)]=function(){const _0x33e63b=_0x391453;Window_Base[_0x33e63b(0x307)][_0x33e63b(0x8cf)]['call'](this),this[_0x33e63b(0x643)]();},Window_PictureCoordinates[_0x391453(0x307)]['updateData']=function(){const _0x3424dc=_0x391453;if(!this[_0x3424dc(0x8e2)]())return;this[_0x3424dc(0x8e5)]();},Window_PictureCoordinates[_0x391453(0x307)][_0x391453(0x8e2)]=function(){const _0x34ea1a=_0x391453,_0xaf3ae6=$gameTemp[_0x34ea1a(0x18c)],_0x4e73c0=$gameScreen[_0x34ea1a(0x7ad)](_0xaf3ae6);if(_0x4e73c0){if(_0x34ea1a(0x295)===_0x34ea1a(0x802)){if(!this[_0x34ea1a(0xec)])return _0x87031;return _0x2035b8['ApplyEasing'](_0x394e45,this[_0x34ea1a(0xec)][_0x34ea1a(0x34c)]||_0x34ea1a(0x334));}else return this[_0x34ea1a(0x5b5)]!==_0x4e73c0[_0x34ea1a(0x5db)]||this[_0x34ea1a(0x919)]!==_0x4e73c0['_x']||this['_lastY']!==_0x4e73c0['_y'];}else{if(_0x34ea1a(0x6e4)!==_0x34ea1a(0x6e4))this['_forcedBattleSys']=0x2;else return![];}},Window_PictureCoordinates['prototype']['refresh']=function(){const _0x405a24=_0x391453;this[_0x405a24(0x1de)][_0x405a24(0x893)]();const _0x545219=$gameTemp[_0x405a24(0x18c)],_0x30b96b=$gameScreen[_0x405a24(0x7ad)](_0x545219);if(!_0x30b96b)return;this[_0x405a24(0x5b5)]=_0x30b96b[_0x405a24(0x5db)],this['_lastX']=_0x30b96b['_x'],this[_0x405a24(0x103)]=_0x30b96b['_y'];const _0x2425be=ColorManager['itemBackColor1']();this[_0x405a24(0x1de)][_0x405a24(0x327)](0x0,0x0,this[_0x405a24(0xf9)],this[_0x405a24(0x2a8)],_0x2425be);const _0x5922ef=_0x405a24(0x8c1)[_0x405a24(0x5ae)](_0x30b96b['_origin']===0x0?_0x405a24(0x104):_0x405a24(0x3c9)),_0x225d63=_0x405a24(0x445)['format'](_0x30b96b['_x']),_0x7fb0a9=_0x405a24(0x8d8)[_0x405a24(0x5ae)](_0x30b96b['_y']),_0x490ec2='%1:\x20Exit\x20'['format'](TextManager['getInputButtonString']('cancel'));let _0x1a6f46=Math[_0x405a24(0x4ff)](this[_0x405a24(0xf9)]/0x4);this[_0x405a24(0x809)](_0x5922ef,_0x1a6f46*0x0,0x0,_0x1a6f46),this[_0x405a24(0x809)](_0x225d63,_0x1a6f46*0x1,0x0,_0x1a6f46,_0x405a24(0x675)),this[_0x405a24(0x809)](_0x7fb0a9,_0x1a6f46*0x2,0x0,_0x1a6f46,_0x405a24(0x675));const _0x14b4b4=this[_0x405a24(0x429)](_0x490ec2)[_0x405a24(0x786)],_0x2405e7=this[_0x405a24(0xf9)]-_0x14b4b4;this[_0x405a24(0x294)](_0x490ec2,_0x2405e7,0x0,_0x14b4b4);},VisuMZ['ShowDevTools']=function(_0x20d92e){const _0x563ecf=_0x391453;if(Utils[_0x563ecf(0x4a0)](_0x563ecf(0x624))){var _0x23eae9=require(_0x563ecf(0x369))[_0x563ecf(0x5f3)]['get']();SceneManager[_0x563ecf(0x4b0)]();if(_0x20d92e)setTimeout(_0x23eae9['focus']['bind'](_0x23eae9),0x190);}},VisuMZ[_0x391453(0x682)]=function(_0x567ce6,_0x40d7c6){const _0x157101=_0x391453;_0x40d7c6=_0x40d7c6[_0x157101(0x448)]();var _0x32393b=1.70158,_0x3f9d8e=0.7;switch(_0x40d7c6){case _0x157101(0x334):return _0x567ce6;case _0x157101(0x944):return-0x1*Math[_0x157101(0x247)](_0x567ce6*(Math['PI']/0x2))+0x1;case _0x157101(0x272):return Math[_0x157101(0x72b)](_0x567ce6*(Math['PI']/0x2));case'INOUTSINE':return-0.5*(Math[_0x157101(0x247)](Math['PI']*_0x567ce6)-0x1);case _0x157101(0x4f4):return _0x567ce6*_0x567ce6;case _0x157101(0x324):return _0x567ce6*(0x2-_0x567ce6);case _0x157101(0x740):return _0x567ce6<0.5?0x2*_0x567ce6*_0x567ce6:-0x1+(0x4-0x2*_0x567ce6)*_0x567ce6;case'INCUBIC':return _0x567ce6*_0x567ce6*_0x567ce6;case _0x157101(0x4a4):var _0x5f4843=_0x567ce6-0x1;return _0x5f4843*_0x5f4843*_0x5f4843+0x1;case _0x157101(0x7d6):return _0x567ce6<0.5?0x4*_0x567ce6*_0x567ce6*_0x567ce6:(_0x567ce6-0x1)*(0x2*_0x567ce6-0x2)*(0x2*_0x567ce6-0x2)+0x1;case _0x157101(0x7b2):return _0x567ce6*_0x567ce6*_0x567ce6*_0x567ce6;case _0x157101(0x34b):var _0x5f4843=_0x567ce6-0x1;return 0x1-_0x5f4843*_0x5f4843*_0x5f4843*_0x5f4843;case _0x157101(0x51e):var _0x5f4843=_0x567ce6-0x1;return _0x567ce6<0.5?0x8*_0x567ce6*_0x567ce6*_0x567ce6*_0x567ce6:0x1-0x8*_0x5f4843*_0x5f4843*_0x5f4843*_0x5f4843;case _0x157101(0x4c3):return _0x567ce6*_0x567ce6*_0x567ce6*_0x567ce6*_0x567ce6;case'OUTQUINT':var _0x5f4843=_0x567ce6-0x1;return 0x1+_0x5f4843*_0x5f4843*_0x5f4843*_0x5f4843*_0x5f4843;case _0x157101(0x6ae):var _0x5f4843=_0x567ce6-0x1;return _0x567ce6<0.5?0x10*_0x567ce6*_0x567ce6*_0x567ce6*_0x567ce6*_0x567ce6:0x1+0x10*_0x5f4843*_0x5f4843*_0x5f4843*_0x5f4843*_0x5f4843;case _0x157101(0x4e3):if(_0x567ce6===0x0)return 0x0;return Math[_0x157101(0x2de)](0x2,0xa*(_0x567ce6-0x1));case _0x157101(0x6bf):if(_0x567ce6===0x1){if('RcsPg'!==_0x157101(0x505)){const _0x29a5ff=_0x42ade4[_0x157101(0x7d4)](_0x3bce8b,'_blank');}else return 0x1;}return-Math[_0x157101(0x2de)](0x2,-0xa*_0x567ce6)+0x1;case _0x157101(0x5b6):if(_0x567ce6===0x0||_0x567ce6===0x1)return _0x567ce6;var _0x5c47c5=_0x567ce6*0x2,_0x2cc383=_0x5c47c5-0x1;if(_0x5c47c5<0x1){if(_0x157101(0x5ac)===_0x157101(0x7cf)){let _0x345b20=0x0;for(const _0x322aab of _0x33d542[_0x157101(0x1f6)][_0x157101(0x63e)][_0x157101(0x217)][_0x157101(0x7ed)]){const _0x37f1e4=this[_0x157101(0x29d)](),_0x1e7307=this['paramY'](_0x345b20);this[_0x157101(0x4da)](_0x37f1e4,_0x1e7307,_0x322aab),_0x345b20++;}}else return 0.5*Math[_0x157101(0x2de)](0x2,0xa*_0x2cc383);}return 0.5*(-Math[_0x157101(0x2de)](0x2,-0xa*_0x2cc383)+0x2);case'INCIRC':var _0x5c47c5=_0x567ce6/0x1;return-0x1*(Math[_0x157101(0x360)](0x1-_0x5c47c5*_0x567ce6)-0x1);case _0x157101(0x8ff):var _0x5f4843=_0x567ce6-0x1;return Math[_0x157101(0x360)](0x1-_0x5f4843*_0x5f4843);case _0x157101(0x729):var _0x5c47c5=_0x567ce6*0x2,_0x2cc383=_0x5c47c5-0x2;if(_0x5c47c5<0x1){if(_0x157101(0x4cd)===_0x157101(0x4cd))return-0.5*(Math[_0x157101(0x360)](0x1-_0x5c47c5*_0x5c47c5)-0x1);else this[_0x157101(0x68a)]['y']=0x0;}return 0.5*(Math[_0x157101(0x360)](0x1-_0x2cc383*_0x2cc383)+0x1);case'INBACK':return _0x567ce6*_0x567ce6*((_0x32393b+0x1)*_0x567ce6-_0x32393b);case'OUTBACK':var _0x5c47c5=_0x567ce6/0x1-0x1;return _0x5c47c5*_0x5c47c5*((_0x32393b+0x1)*_0x5c47c5+_0x32393b)+0x1;break;case _0x157101(0x91d):var _0x5c47c5=_0x567ce6*0x2,_0x296a5d=_0x5c47c5-0x2,_0xc732c5=_0x32393b*1.525;if(_0x5c47c5<0x1){if(_0x157101(0x95d)===_0x157101(0x95d))return 0.5*_0x5c47c5*_0x5c47c5*((_0xc732c5+0x1)*_0x5c47c5-_0xc732c5);else this['_forcedBattleSys']=_0x157101(0x488);}return 0.5*(_0x296a5d*_0x296a5d*((_0xc732c5+0x1)*_0x296a5d+_0xc732c5)+0x2);case _0x157101(0x917):if(_0x567ce6===0x0||_0x567ce6===0x1)return _0x567ce6;var _0x5c47c5=_0x567ce6/0x1,_0x2cc383=_0x5c47c5-0x1,_0x1437c4=0x1-_0x3f9d8e,_0xc732c5=_0x1437c4/(0x2*Math['PI'])*Math[_0x157101(0x38d)](0x1);return-(Math[_0x157101(0x2de)](0x2,0xa*_0x2cc383)*Math[_0x157101(0x72b)]((_0x2cc383-_0xc732c5)*(0x2*Math['PI'])/_0x1437c4));case _0x157101(0x383):var _0x1437c4=0x1-_0x3f9d8e,_0x5c47c5=_0x567ce6*0x2;if(_0x567ce6===0x0||_0x567ce6===0x1)return _0x567ce6;var _0xc732c5=_0x1437c4/(0x2*Math['PI'])*Math[_0x157101(0x38d)](0x1);return Math[_0x157101(0x2de)](0x2,-0xa*_0x5c47c5)*Math['sin']((_0x5c47c5-_0xc732c5)*(0x2*Math['PI'])/_0x1437c4)+0x1;case'INOUTELASTIC':var _0x1437c4=0x1-_0x3f9d8e;if(_0x567ce6===0x0||_0x567ce6===0x1){if(_0x157101(0x6c8)===_0x157101(0x6c8))return _0x567ce6;else this[_0x157101(0xee)](_0xeb7b83,_0x5019c4,_0x560939,_0x38b363);}var _0x5c47c5=_0x567ce6*0x2,_0x2cc383=_0x5c47c5-0x1,_0xc732c5=_0x1437c4/(0x2*Math['PI'])*Math[_0x157101(0x38d)](0x1);if(_0x5c47c5<0x1)return _0x157101(0x543)!==_0x157101(0x543)?_0xe571c4['layoutSettings'][_0x157101(0x8a5)][_0x157101(0xd0)](this):-0.5*(Math[_0x157101(0x2de)](0x2,0xa*_0x2cc383)*Math[_0x157101(0x72b)]((_0x2cc383-_0xc732c5)*(0x2*Math['PI'])/_0x1437c4));return Math[_0x157101(0x2de)](0x2,-0xa*_0x2cc383)*Math['sin']((_0x2cc383-_0xc732c5)*(0x2*Math['PI'])/_0x1437c4)*0.5+0x1;case'OUTBOUNCE':var _0x5c47c5=_0x567ce6/0x1;if(_0x5c47c5<0x1/2.75){if(_0x157101(0x1cb)===_0x157101(0x1cb))return 7.5625*_0x5c47c5*_0x5c47c5;else{const _0x53d0be=new _0x421152(),_0x1d6c9a=this[_0x157101(0x2ce)]();_0x53d0be['x']=_0x55e69['x']-_0x1d6c9a['x'],_0x53d0be['y']=_0x463fbc['y']-_0x1d6c9a['y'],_0x53d0be['z']=0x64;const _0x1d5bde=this[_0x157101(0x2ce)]();return _0x1d5bde['addChild'](_0x53d0be),[_0x53d0be];}}else{if(_0x5c47c5<0x2/2.75){if(_0x157101(0x4d1)!==_0x157101(0x4d1))return this[_0x157101(0x216)](_0xcae905);else{var _0x296a5d=_0x5c47c5-1.5/2.75;return 7.5625*_0x296a5d*_0x296a5d+0.75;}}else{if(_0x5c47c5<2.5/2.75){if('ulZuT'!==_0x157101(0x476))return _0x17fc1f[_0x157101(0x307)][_0x157101(0x782)]();else{var _0x296a5d=_0x5c47c5-2.25/2.75;return 7.5625*_0x296a5d*_0x296a5d+0.9375;}}else{var _0x296a5d=_0x5c47c5-2.625/2.75;return 7.5625*_0x296a5d*_0x296a5d+0.984375;}}}case'INBOUNCE':var _0x429614=0x1-VisuMZ[_0x157101(0x682)](0x1-_0x567ce6,_0x157101(0x8f1));return _0x429614;case _0x157101(0x126):if(_0x567ce6<0.5){if(_0x157101(0x7d2)===_0x157101(0x8fc))_0x1ae5fe['VisuMZ_2_BattleSystemETB']&&(this[_0x157101(0x3d2)]=_0x157101(0x3e5));else var _0x429614=VisuMZ[_0x157101(0x682)](_0x567ce6*0x2,'inbounce')*0.5;}else var _0x429614=VisuMZ['ApplyEasing'](_0x567ce6*0x2-0x1,_0x157101(0x8f1))*0.5+0.5;return _0x429614;default:return _0x567ce6;}},VisuMZ[_0x391453(0x21d)]=function(_0x4af075){const _0x31ccd9=_0x391453;_0x4af075=String(_0x4af075)['toUpperCase']();const _0x314cc3=VisuMZ['CoreEngine'][_0x31ccd9(0x63e)][_0x31ccd9(0x217)];if(_0x4af075==='MAXHP')return _0x314cc3[_0x31ccd9(0x238)];if(_0x4af075===_0x31ccd9(0x2ed))return _0x314cc3[_0x31ccd9(0x296)];if(_0x4af075===_0x31ccd9(0x958))return _0x314cc3[_0x31ccd9(0x16a)];if(_0x4af075===_0x31ccd9(0x71b))return _0x314cc3['IconParam3'];if(_0x4af075==='MAT')return _0x314cc3['IconParam4'];if(_0x4af075===_0x31ccd9(0x591))return _0x314cc3['IconParam5'];if(_0x4af075===_0x31ccd9(0x4be))return _0x314cc3['IconParam6'];if(_0x4af075===_0x31ccd9(0x1b5))return _0x314cc3[_0x31ccd9(0x69c)];if(_0x4af075===_0x31ccd9(0x420))return _0x314cc3[_0x31ccd9(0x65f)];if(_0x4af075===_0x31ccd9(0x64e))return _0x314cc3[_0x31ccd9(0x685)];if(_0x4af075===_0x31ccd9(0x83d))return _0x314cc3[_0x31ccd9(0x695)];if(_0x4af075===_0x31ccd9(0x316))return _0x314cc3['IconXParam3'];if(_0x4af075==='MEV')return _0x314cc3[_0x31ccd9(0x631)];if(_0x4af075===_0x31ccd9(0x7d3))return _0x314cc3[_0x31ccd9(0x47d)];if(_0x4af075==='CNT')return _0x314cc3[_0x31ccd9(0x712)];if(_0x4af075===_0x31ccd9(0x7e3))return _0x314cc3[_0x31ccd9(0x4b2)];if(_0x4af075==='MRG')return _0x314cc3[_0x31ccd9(0x357)];if(_0x4af075===_0x31ccd9(0x762))return _0x314cc3['IconXParam9'];if(_0x4af075==='TGR')return _0x314cc3[_0x31ccd9(0x496)];if(_0x4af075==='GRD')return _0x314cc3[_0x31ccd9(0x27b)];if(_0x4af075===_0x31ccd9(0x1f7))return _0x314cc3['IconSParam2'];if(_0x4af075==='PHA')return _0x314cc3['IconSParam3'];if(_0x4af075===_0x31ccd9(0x5b3))return _0x314cc3[_0x31ccd9(0x932)];if(_0x4af075==='TCR')return _0x314cc3[_0x31ccd9(0x457)];if(_0x4af075===_0x31ccd9(0x1d7))return _0x314cc3[_0x31ccd9(0x692)];if(_0x4af075===_0x31ccd9(0x889))return _0x314cc3[_0x31ccd9(0x701)];if(_0x4af075==='FDR')return _0x314cc3['IconSParam8'];if(_0x4af075==='EXR')return _0x314cc3[_0x31ccd9(0x4aa)];if(VisuMZ[_0x31ccd9(0x1f6)][_0x31ccd9(0x7e7)][_0x4af075])return VisuMZ['CoreEngine'][_0x31ccd9(0x7e7)][_0x4af075]||0x0;return 0x0;},VisuMZ[_0x391453(0x1c7)]=function(_0x16ede1,_0x1910b1,_0x21e43b){const _0x4838a6=_0x391453;if(_0x21e43b===undefined&&_0x16ede1%0x1===0x0)return _0x16ede1;if(_0x21e43b!==undefined&&[_0x4838a6(0x78c),_0x4838a6(0x2ed),'ATK',_0x4838a6(0x71b),'MAT',_0x4838a6(0x591),'AGI',_0x4838a6(0x1b5)]['includes'](String(_0x21e43b)['toUpperCase']()[_0x4838a6(0x780)]()))return _0x16ede1;_0x1910b1=_0x1910b1||0x0;if(VisuMZ[_0x4838a6(0x1f6)][_0x4838a6(0x92e)][_0x21e43b]){if(VisuMZ['CoreEngine'][_0x4838a6(0x267)][_0x21e43b]===_0x4838a6(0x43a)){if('OzuRl'===_0x4838a6(0x63c))return _0x16ede1;else _0x420f1b+=_0x4838a6(0x1bd)[_0x4838a6(0x5ae)](_0x2c70b8['parameters'][0x0]);}else return String((_0x16ede1*0x64)[_0x4838a6(0x69e)](_0x1910b1))+'%';}return String((_0x16ede1*0x64)['toFixed'](_0x1910b1))+'%';},VisuMZ[_0x391453(0x2e1)]=function(_0x1f36c8){const _0x29ee64=_0x391453;_0x1f36c8=String(_0x1f36c8);if(!_0x1f36c8)return _0x1f36c8;if(typeof _0x1f36c8!==_0x29ee64(0x49f))return _0x1f36c8;const _0x45ee32=VisuMZ[_0x29ee64(0x1f6)][_0x29ee64(0x63e)][_0x29ee64(0x7e5)][_0x29ee64(0x864)]||_0x29ee64(0x333),_0x1676e8={'maximumFractionDigits':0x6};_0x1f36c8=_0x1f36c8['replace'](/\[(.*?)\]/g,(_0x39a570,_0x4f26c6)=>{const _0x16cc97=_0x29ee64;if(_0x16cc97(0x455)===_0x16cc97(0x455))return VisuMZ[_0x16cc97(0xfb)](_0x4f26c6,'[',']');else this[_0x16cc97(0x21c)]&&this[_0x16cc97(0x21c)]['setBackgroundType'](_0x42fa4f[_0x16cc97(0x959)][_0x16cc97(0x65c)]),this['_goldWindow']&&this[_0x16cc97(0x1f3)][_0x16cc97(0x39a)](_0x1658d8[_0x16cc97(0x959)][_0x16cc97(0x1a0)]),this[_0x16cc97(0x1fc)]&&this['_statusWindow'][_0x16cc97(0x39a)](_0x1bcdd6[_0x16cc97(0x959)][_0x16cc97(0x82b)]);}),_0x1f36c8=_0x1f36c8[_0x29ee64(0xea)](/<(.*?)>/g,(_0x3b4793,_0x1c03c2)=>{const _0x21ee34=_0x29ee64;return VisuMZ[_0x21ee34(0xfb)](_0x1c03c2,'<','>');}),_0x1f36c8=_0x1f36c8[_0x29ee64(0xea)](/\{\{(.*?)\}\}/g,(_0x344678,_0x266ae4)=>{const _0x2cf690=_0x29ee64;return VisuMZ[_0x2cf690(0xfb)](_0x266ae4,'','');}),_0x1f36c8=_0x1f36c8[_0x29ee64(0xea)](/(\d+\.?\d*)/g,(_0x1f4f68,_0x287302)=>{const _0x8626db=_0x29ee64;if(_0x8626db(0x2d8)===_0x8626db(0x2d8)){let _0xc22343=_0x287302;if(_0xc22343[0x0]==='0')return _0xc22343;if(_0xc22343[_0xc22343[_0x8626db(0x4b1)]-0x1]==='.')return Number(_0xc22343)[_0x8626db(0x6ec)](_0x45ee32,_0x1676e8)+'.';else{if(_0xc22343[_0xc22343[_0x8626db(0x4b1)]-0x1]===','){if('zIxXD'!==_0x8626db(0x1ff))_0x195668[_0x8626db(0x5c7)]&&(this['_forcedBattleSys']=_0x8626db(0x5ed));else return Number(_0xc22343)[_0x8626db(0x6ec)](_0x45ee32,_0x1676e8)+',';}else return Number(_0xc22343)[_0x8626db(0x6ec)](_0x45ee32,_0x1676e8);}}else return this[_0x8626db(0x607)][_0x8626db(0x4b1)]>0x0;});let _0x405253=0x3;while(_0x405253--){_0x1f36c8=VisuMZ[_0x29ee64(0x10f)](_0x1f36c8);}return _0x1f36c8;},VisuMZ['PreserveNumbers']=function(_0x1d51a3,_0x335a7f,_0x2e5512){const _0x3951f4=_0x391453;return _0x1d51a3=_0x1d51a3[_0x3951f4(0xea)](/(\d)/gi,(_0x1b4f8b,_0x30d84b)=>'PRESERVCONVERSION(%1)'['format'](Number(_0x30d84b))),'%2%1%3'[_0x3951f4(0x5ae)](_0x1d51a3,_0x335a7f,_0x2e5512);},VisuMZ[_0x391453(0x10f)]=function(_0x4fd354){return _0x4fd354=_0x4fd354['replace'](/PRESERVCONVERSION\((\d+)\)/gi,(_0x3dc80,_0x4bbfe1)=>Number(parseInt(_0x4bbfe1))),_0x4fd354;},VisuMZ[_0x391453(0x3bf)]=function(_0x19f72a){const _0xe958d8=_0x391453;SoundManager[_0xe958d8(0x19a)]();if(!Utils['isNwjs']()){const _0x48cf2c=window[_0xe958d8(0x7d4)](_0x19f72a,_0xe958d8(0x56c));}else{if('SWePg'===_0xe958d8(0x890))return this[_0xe958d8(0x748)]()?this[_0xe958d8(0x1de)]['measureTextWidthNoRounding'](_0x34ae02):_0x9619dd[_0xe958d8(0x307)]['textWidth'][_0xe958d8(0xd0)](this,_0x4c4b09);else{const _0x715e3e=process[_0xe958d8(0x52e)]==_0xe958d8(0x150)?_0xe958d8(0x7d4):process[_0xe958d8(0x52e)]==_0xe958d8(0x352)?_0xe958d8(0x440):_0xe958d8(0x219);require('child_process')[_0xe958d8(0x7a5)](_0x715e3e+'\x20'+_0x19f72a);}}},VisuMZ[_0x391453(0x20e)]=function(_0x41fc3f,_0x427272){const _0x4e1c80=_0x391453;if(!_0x41fc3f)return'';const _0x589436=_0x41fc3f[_0x4e1c80(0x822)]||_0x41fc3f['id'];let _0x103374='';if(_0x41fc3f[_0x4e1c80(0x2d9)]!==undefined&&_0x41fc3f[_0x4e1c80(0x119)]!==undefined){if('IyYMM'===_0x4e1c80(0x225))return _0x567452[_0x4e1c80(0x959)][_0x4e1c80(0x6c9)][_0x4e1c80(0xd0)](this);else _0x103374='Actor-%1-%2'[_0x4e1c80(0x5ae)](_0x589436,_0x427272);}_0x41fc3f['expParams']!==undefined&&_0x41fc3f['learnings']!==undefined&&(_0x4e1c80(0x45e)===_0x4e1c80(0x79c)?(_0x11c2eb[_0x4e1c80(0x1f6)]['Game_System_initialize'][_0x4e1c80(0xd0)](this),this[_0x4e1c80(0x442)]()):_0x103374=_0x4e1c80(0x22e)[_0x4e1c80(0x5ae)](_0x589436,_0x427272));if(_0x41fc3f[_0x4e1c80(0x6e0)]!==undefined&&_0x41fc3f[_0x4e1c80(0x7c1)]!==undefined){if(_0x4e1c80(0x393)==='oyrQI'){if(this['_scene']['_optionsWindow'])this[_0x4e1c80(0x254)][_0x4e1c80(0x433)][_0x4e1c80(0x8e5)]();if(this[_0x4e1c80(0x254)][_0x4e1c80(0x707)])this[_0x4e1c80(0x254)]['_listWindow'][_0x4e1c80(0x8e5)]();}else _0x103374=_0x4e1c80(0x906)[_0x4e1c80(0x5ae)](_0x589436,_0x427272);}return _0x41fc3f[_0x4e1c80(0x8bf)]!==undefined&&_0x41fc3f['consumable']!==undefined&&(_0x103374=_0x4e1c80(0x2b9)['format'](_0x589436,_0x427272)),_0x41fc3f[_0x4e1c80(0x7bf)]!==undefined&&_0x41fc3f[_0x4e1c80(0x493)]===0x1&&(_0x103374=_0x4e1c80(0x951)[_0x4e1c80(0x5ae)](_0x589436,_0x427272)),_0x41fc3f[_0x4e1c80(0xf8)]!==undefined&&_0x41fc3f['etypeId']>0x1&&(_0x103374='Armor-%1-%2'[_0x4e1c80(0x5ae)](_0x589436,_0x427272)),_0x41fc3f['dropItems']!==undefined&&_0x41fc3f['battlerHue']!==undefined&&(_0x103374='Enemy-%1-%2'[_0x4e1c80(0x5ae)](_0x589436,_0x427272)),_0x41fc3f[_0x4e1c80(0x278)]!==undefined&&_0x41fc3f[_0x4e1c80(0x15b)]!==undefined&&(_0x103374=_0x4e1c80(0x8df)[_0x4e1c80(0x5ae)](_0x589436,_0x427272)),_0x103374;},Game_Picture['prototype'][_0x391453(0x14e)]=function(){return this['_anchor'];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x71c)]=Game_Picture[_0x391453(0x307)][_0x391453(0x2d5)],Game_Picture[_0x391453(0x307)][_0x391453(0x2d5)]=function(){const _0x5bfb90=_0x391453;VisuMZ['CoreEngine'][_0x5bfb90(0x71c)][_0x5bfb90(0xd0)](this),this['_anchor']={'x':0x0,'y':0x0},this[_0x5bfb90(0x3bb)]={'x':0x0,'y':0x0};},VisuMZ[_0x391453(0x1f6)][_0x391453(0x59a)]=Game_Picture['prototype'][_0x391453(0x35e)],Game_Picture[_0x391453(0x307)][_0x391453(0x35e)]=function(){const _0x4061d8=_0x391453;this['updateAnchor']();const _0x6ca0c6=this[_0x4061d8(0x245)];VisuMZ[_0x4061d8(0x1f6)][_0x4061d8(0x59a)]['call'](this),_0x6ca0c6>0x0&&this[_0x4061d8(0x245)]<=0x0&&(this['_x']=this[_0x4061d8(0x724)],this['_y']=this[_0x4061d8(0x36f)],this[_0x4061d8(0x221)]=this[_0x4061d8(0x56a)],this[_0x4061d8(0x909)]=this['_targetScaleY'],this[_0x4061d8(0x6bc)]=this['_targetOpacity'],this[_0x4061d8(0x88f)]&&(_0x4061d8(0xf0)!==_0x4061d8(0xf0)?this[_0x4061d8(0x23f)]=_0x37123e['gl'][_0x4061d8(0x419)](_0x29faee['gl']['VIEWPORT']):(this[_0x4061d8(0x88f)]['x']=this['_targetAnchor']['x'],this[_0x4061d8(0x88f)]['y']=this[_0x4061d8(0x3bb)]['y'])));},VisuMZ[_0x391453(0x1f6)][_0x391453(0x46f)]=Game_Picture[_0x391453(0x307)][_0x391453(0x415)],Game_Picture[_0x391453(0x307)]['show']=function(_0x542e16,_0x507ff2,_0x1fcdb3,_0x47af5b,_0xdf0422,_0x335d6f,_0x59021c,_0x32969f){const _0x457e35=_0x391453;VisuMZ['CoreEngine'][_0x457e35(0x46f)]['call'](this,_0x542e16,_0x507ff2,_0x1fcdb3,_0x47af5b,_0xdf0422,_0x335d6f,_0x59021c,_0x32969f),this['setAnchor']([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x507ff2]||{'x':0x0,'y':0x0});},VisuMZ[_0x391453(0x1f6)][_0x391453(0x214)]=Game_Picture[_0x391453(0x307)][_0x391453(0x394)],Game_Picture[_0x391453(0x307)][_0x391453(0x394)]=function(_0x4e3161,_0x43ed1a,_0xa4ffb0,_0x392471,_0x417b51,_0x3d6157,_0x174b00,_0x41fd4b,_0x30b8d8){const _0x308939=_0x391453;VisuMZ[_0x308939(0x1f6)]['Game_Picture_move'][_0x308939(0xd0)](this,_0x4e3161,_0x43ed1a,_0xa4ffb0,_0x392471,_0x417b51,_0x3d6157,_0x174b00,_0x41fd4b,_0x30b8d8),this[_0x308939(0x6c1)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x4e3161]||{'x':0x0,'y':0x0});},Game_Picture[_0x391453(0x307)][_0x391453(0x5cb)]=function(){const _0x3748eb=_0x391453;this[_0x3748eb(0x245)]>0x0&&(this[_0x3748eb(0x88f)]['x']=this[_0x3748eb(0x2c5)](this[_0x3748eb(0x88f)]['x'],this[_0x3748eb(0x3bb)]['x']),this[_0x3748eb(0x88f)]['y']=this[_0x3748eb(0x2c5)](this[_0x3748eb(0x88f)]['y'],this[_0x3748eb(0x3bb)]['y']));},Game_Picture[_0x391453(0x307)][_0x391453(0x2f0)]=function(_0xbd9c0b){const _0x159ea0=_0x391453;this['_anchor']=_0xbd9c0b,this[_0x159ea0(0x3bb)]=JsonEx[_0x159ea0(0x511)](this['_anchor']);},Game_Picture['prototype'][_0x391453(0x6c1)]=function(_0x435483){const _0x5ae7ce=_0x391453;this[_0x5ae7ce(0x3bb)]=_0x435483;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x26e)]=Sprite_Picture[_0x391453(0x307)][_0x391453(0x590)],Sprite_Picture['prototype'][_0x391453(0x590)]=function(){const _0x5d811d=_0x391453,_0x5532d7=this[_0x5d811d(0x7ad)]();!_0x5532d7[_0x5d811d(0x14e)]()?'RMGXS'!=='PoTaB'?VisuMZ[_0x5d811d(0x1f6)][_0x5d811d(0x26e)][_0x5d811d(0xd0)](this):(this[_0x5d811d(0x490)](this[_0x5d811d(0x370)]),this[_0x5d811d(0x370)]=null):(this['anchor']['x']=_0x5532d7['anchor']()['x'],this[_0x5d811d(0x14e)]['y']=_0x5532d7[_0x5d811d(0x14e)]()['y']);},Game_Action['prototype'][_0x391453(0x883)]=function(_0xc91eec){const _0x3b0db1=_0x391453;if(_0xc91eec){const _0x13c6c2=_0xc91eec['skillId'];if(_0x13c6c2===0x1&&this[_0x3b0db1(0x61d)]()['attackSkillId']()!==0x1)this[_0x3b0db1(0x577)]();else{if(_0x13c6c2===0x2&&this['subject']()[_0x3b0db1(0x770)]()!==0x2){if('XmMZB'===_0x3b0db1(0x3f5))this[_0x3b0db1(0x58e)]();else return _0x34fb30[_0x3b0db1(0x1db)]();}else this[_0x3b0db1(0x1a6)](_0x13c6c2);}}else _0x3b0db1(0x644)!==_0x3b0db1(0x7a6)?this[_0x3b0db1(0x893)]():!_0x5f5c81[_0x3b0db1(0x8bd)]()&&!this[_0x3b0db1(0x723)]&&!_0x546b13['isBusy']()&&(this[_0x3b0db1(0x723)]=!![],this[_0x3b0db1(0x8cf)](),_0x51005f[_0x3b0db1(0x7a7)](),this[_0x3b0db1(0x723)]=![]);},Game_Actor['prototype'][_0x391453(0x7df)]=function(){const _0x3f9b37=_0x391453;return this['skills']()[_0x3f9b37(0x487)](_0x16d668=>this[_0x3f9b37(0x64f)](_0x16d668)&&this[_0x3f9b37(0x48e)]()[_0x3f9b37(0x3fe)](_0x16d668[_0x3f9b37(0x6e0)]));},Window_Base['prototype']['createDimmerSprite']=function(){const _0x2ee883=_0x391453;this[_0x2ee883(0x6da)]=new Sprite(),this[_0x2ee883(0x6da)][_0x2ee883(0x3e4)]=new Bitmap(0x0,0x0),this[_0x2ee883(0x6da)]['x']=0x0,this['addChildToBack'](this['_dimmerSprite']);},Window_Base[_0x391453(0x307)][_0x391453(0x863)]=function(){const _0x365450=_0x391453;if(this[_0x365450(0x6da)]){const _0x17c5ab=this[_0x365450(0x6da)][_0x365450(0x3e4)],_0x17dcc8=this[_0x365450(0x786)],_0x2186b0=this[_0x365450(0x8e8)],_0x128e3a=this['padding'],_0x591698=ColorManager[_0x365450(0xfd)](),_0x3a74d5=ColorManager[_0x365450(0x42d)]();_0x17c5ab[_0x365450(0x52c)](_0x17dcc8,_0x2186b0),_0x17c5ab['gradientFillRect'](0x0,0x0,_0x17dcc8,_0x128e3a,_0x3a74d5,_0x591698,!![]),_0x17c5ab[_0x365450(0x327)](0x0,_0x128e3a,_0x17dcc8,_0x2186b0-_0x128e3a*0x2,_0x591698),_0x17c5ab['gradientFillRect'](0x0,_0x2186b0-_0x128e3a,_0x17dcc8,_0x128e3a,_0x591698,_0x3a74d5,!![]),this[_0x365450(0x6da)]['setFrame'](0x0,0x0,_0x17dcc8,_0x2186b0);}},Game_Actor['prototype'][_0x391453(0x854)]=function(){const _0x21b576=_0x391453;for(let _0x51f1bd=0x0;_0x51f1bd<this[_0x21b576(0x7a4)]();_0x51f1bd++){const _0x30a30a=this[_0x21b576(0x446)]();let _0x1c3b41=Number[_0x21b576(0x757)];this['setAction'](_0x51f1bd,_0x30a30a[0x0]);for(const _0x5ba8cd of _0x30a30a){if(_0x21b576(0x557)!=='uOmSt')return _0x2c91c8[_0x21b576(0x1f6)][_0x21b576(0x63e)][_0x21b576(0x7e5)][_0x21b576(0x5a6)]??!![];else{const _0x43a79c=_0x5ba8cd[_0x21b576(0x576)]();_0x43a79c>_0x1c3b41&&(_0x21b576(0x8eb)!==_0x21b576(0x1d3)?(_0x1c3b41=_0x43a79c,this[_0x21b576(0x94e)](_0x51f1bd,_0x5ba8cd)):(this[_0x21b576(0x88f)]['x']=this['_targetAnchor']['x'],this['_anchor']['y']=this['_targetAnchor']['y']));}}}this[_0x21b576(0x147)]('waiting');},Window_BattleItem[_0x391453(0x307)][_0x391453(0x53b)]=function(_0x2a54ee){const _0x324430=_0x391453;return BattleManager[_0x324430(0x6f4)]()?BattleManager[_0x324430(0x6f4)]()[_0x324430(0x64f)](_0x2a54ee):Window_ItemList[_0x324430(0x307)][_0x324430(0x53b)][_0x324430(0xd0)](this,_0x2a54ee);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x435)]=Scene_Map['prototype'][_0x391453(0x713)],Scene_Map[_0x391453(0x307)][_0x391453(0x713)]=function(){const _0x391b76=_0x391453;VisuMZ['CoreEngine'][_0x391b76(0x435)]['call'](this);const _0x546f25=this[_0x391b76(0xde)][_0x391b76(0x211)];if(_0x546f25)this[_0x391b76(0x8f9)](_0x546f25);},VisuMZ[_0x391453(0x1f6)][_0x391453(0x341)]=Scene_Battle[_0x391453(0x307)][_0x391453(0x713)],Scene_Battle[_0x391453(0x307)][_0x391453(0x713)]=function(){const _0xa00ed8=_0x391453;VisuMZ[_0xa00ed8(0x1f6)]['Scene_Battle_createSpritesetFix'][_0xa00ed8(0xd0)](this);const _0x1b2512=this[_0xa00ed8(0xde)][_0xa00ed8(0x211)];if(_0x1b2512)this[_0xa00ed8(0x8f9)](_0x1b2512);},Sprite_Actor['prototype'][_0x391453(0x8cf)]=function(){const _0x483004=_0x391453;Sprite_Battler[_0x483004(0x307)][_0x483004(0x8cf)][_0x483004(0xd0)](this),this[_0x483004(0x4a2)]();if(this[_0x483004(0x194)])this['updateMotion']();else this['_battlerName']!==''&&(this[_0x483004(0x8fa)]='');},Window[_0x391453(0x307)][_0x391453(0x54b)]=function(){const _0x385b34=_0x391453,_0x8e9226=this[_0x385b34(0x702)],_0x14de39=this[_0x385b34(0x7da)],_0x485722=0x18,_0xc1b178=_0x485722/0x2,_0x58cbf7=0x60+_0x485722,_0xa594e3=0x0+_0x485722;this[_0x385b34(0x5ad)][_0x385b34(0x3e4)]=this[_0x385b34(0x18f)],this[_0x385b34(0x5ad)][_0x385b34(0x14e)]['x']=0.5,this[_0x385b34(0x5ad)][_0x385b34(0x14e)]['y']=0.5,this[_0x385b34(0x5ad)]['setFrame'](_0x58cbf7+_0xc1b178,_0xa594e3+_0xc1b178+_0x485722,_0x485722,_0xc1b178),this[_0x385b34(0x5ad)][_0x385b34(0x394)](Math[_0x385b34(0x213)](_0x8e9226/0x2),Math['round'](_0x14de39-_0xc1b178)),this[_0x385b34(0x59c)][_0x385b34(0x3e4)]=this[_0x385b34(0x18f)],this[_0x385b34(0x59c)][_0x385b34(0x14e)]['x']=0.5,this[_0x385b34(0x59c)][_0x385b34(0x14e)]['y']=0.5,this['_upArrowSprite'][_0x385b34(0x663)](_0x58cbf7+_0xc1b178,_0xa594e3,_0x485722,_0xc1b178),this['_upArrowSprite'][_0x385b34(0x394)](Math[_0x385b34(0x213)](_0x8e9226/0x2),Math['round'](_0xc1b178));},Window[_0x391453(0x307)][_0x391453(0x14f)]=function(){const _0x30f51e=_0x391453,_0x272903=0x90,_0x4f8b96=0x60,_0xc4657f=0x18;this[_0x30f51e(0x808)]['bitmap']=this[_0x30f51e(0x18f)],this[_0x30f51e(0x808)]['anchor']['x']=0.5,this[_0x30f51e(0x808)][_0x30f51e(0x14e)]['y']=0x1,this[_0x30f51e(0x808)]['move'](Math[_0x30f51e(0x213)](this[_0x30f51e(0x702)]/0x2),this[_0x30f51e(0x7da)]),this[_0x30f51e(0x808)][_0x30f51e(0x663)](_0x272903,_0x4f8b96,_0xc4657f,_0xc4657f),this[_0x30f51e(0x808)][_0x30f51e(0x486)]=0xff;},Window[_0x391453(0x307)][_0x391453(0x42a)]=function(){const _0x5d0c74=_0x391453,_0x4794b1=this[_0x5d0c74(0x20d)][_0x5d0c74(0x2a9)]['apply'](new Point(0x0,0x0)),_0x496573=this[_0x5d0c74(0x20d)]['filterArea'];_0x496573['x']=_0x4794b1['x']+this['origin']['x'],_0x496573['y']=_0x4794b1['y']+this[_0x5d0c74(0x129)]['y'],_0x496573[_0x5d0c74(0x786)]=Math[_0x5d0c74(0x127)](this[_0x5d0c74(0xf9)]*this[_0x5d0c74(0x2ac)]['x']),_0x496573[_0x5d0c74(0x8e8)]=Math[_0x5d0c74(0x127)](this[_0x5d0c74(0x2a8)]*this['scale']['y']);},Window[_0x391453(0x307)]['_refreshBack']=function(){const _0x443b6f=_0x391453,_0x3ba0aa=this[_0x443b6f(0x8a7)],_0x142d65=Math['max'](0x0,this[_0x443b6f(0x702)]-_0x3ba0aa*0x2),_0x2df340=Math['max'](0x0,this[_0x443b6f(0x7da)]-_0x3ba0aa*0x2),_0x64a3ab=this['_backSprite'],_0x5dc872=_0x64a3ab['children'][0x0];_0x64a3ab[_0x443b6f(0x3e4)]=this[_0x443b6f(0x18f)],_0x64a3ab[_0x443b6f(0x663)](0x0,0x0,0x60,0x60),_0x64a3ab['move'](_0x3ba0aa,_0x3ba0aa),_0x64a3ab[_0x443b6f(0x2ac)]['x']=_0x142d65/0x60,_0x64a3ab[_0x443b6f(0x2ac)]['y']=_0x2df340/0x60,_0x5dc872[_0x443b6f(0x3e4)]=this[_0x443b6f(0x18f)],_0x5dc872['setFrame'](0x0,0x60,0x60,0x60),_0x5dc872[_0x443b6f(0x394)](0x0,0x0,_0x142d65,_0x2df340),_0x5dc872['scale']['x']=0x1/_0x64a3ab[_0x443b6f(0x2ac)]['x'],_0x5dc872[_0x443b6f(0x2ac)]['y']=0x1/_0x64a3ab[_0x443b6f(0x2ac)]['y'],_0x64a3ab['setColorTone'](this[_0x443b6f(0x2f8)]);},Game_Temp[_0x391453(0x307)][_0x391453(0x29f)]=function(){const _0x95d025=_0x391453;this['_animationQueue']=[],this['_fauxAnimationQueue']=[],this[_0x95d025(0x5ab)]=[],this['_balloonQueue']=[];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x137)]=Scene_Base[_0x391453(0x307)][_0x391453(0x61c)],Scene_Base[_0x391453(0x307)]['terminate']=function(){const _0x2be9fb=_0x391453;if($gameTemp)$gameTemp[_0x2be9fb(0x29f)]();VisuMZ[_0x2be9fb(0x1f6)]['Scene_Base_terminateAnimationClearBugFix'][_0x2be9fb(0xd0)](this);},Bitmap[_0x391453(0x307)][_0x391453(0x920)]=function(_0x2cecc6){const _0x2645b8=_0x391453,_0x74e403=this[_0x2645b8(0x31f)];_0x74e403[_0x2645b8(0x60e)](),_0x74e403[_0x2645b8(0x230)]=this[_0x2645b8(0x40f)]();const _0x2ee978=_0x74e403[_0x2645b8(0x856)](_0x2cecc6)[_0x2645b8(0x786)];return _0x74e403[_0x2645b8(0x177)](),_0x2ee978;},Window_Message[_0x391453(0x307)][_0x391453(0x8e4)]=function(_0x33c935){const _0x3315e4=_0x391453;return this[_0x3315e4(0x748)]()?this[_0x3315e4(0x1de)][_0x3315e4(0x920)](_0x33c935):Window_Base[_0x3315e4(0x307)][_0x3315e4(0x8e4)][_0x3315e4(0xd0)](this,_0x33c935);},Window_Message[_0x391453(0x307)][_0x391453(0x748)]=function(){const _0x2dbadd=_0x391453;return VisuMZ[_0x2dbadd(0x1f6)][_0x2dbadd(0x63e)][_0x2dbadd(0x7e5)]['FontWidthFix']??!![];},VisuMZ[_0x391453(0x1f6)][_0x391453(0x418)]=Game_Action[_0x391453(0x307)][_0x391453(0x36e)],Game_Action['prototype'][_0x391453(0x36e)]=function(){const _0x15de6c=_0x391453;return this['item']()?VisuMZ[_0x15de6c(0x1f6)][_0x15de6c(0x418)]['call'](this):0x0;},VisuMZ[_0x391453(0x1f6)][_0x391453(0x91e)]=Game_Action['prototype'][_0x391453(0x577)],Game_Action['prototype']['setAttack']=function(){const _0x1a29b0=_0x391453;this['subject']()&&this[_0x1a29b0(0x61d)]()['canAttack']()?VisuMZ[_0x1a29b0(0x1f6)][_0x1a29b0(0x91e)][_0x1a29b0(0xd0)](this):this[_0x1a29b0(0x893)]();},Sprite_Name[_0x391453(0x307)][_0x391453(0x1ba)]=function(){return 0x24;},Sprite_Name[_0x391453(0x307)][_0x391453(0x33a)]=function(){const _0x1b102c=_0x391453,_0x287b61=this[_0x1b102c(0x32f)](),_0x5d0a14=this['bitmapWidth'](),_0x38bafa=this[_0x1b102c(0x1ba)]();this[_0x1b102c(0x957)](),this[_0x1b102c(0x3e4)]['clear'](),this[_0x1b102c(0x3e4)][_0x1b102c(0x16d)](_0x287b61,0x4,0x0,_0x5d0a14,_0x38bafa,_0x1b102c(0x832));},Bitmap[_0x391453(0x307)][_0x391453(0x16d)]=function(_0x34720a,_0x4d6689,_0x5b5aa1,_0x4a66fd,_0x398f80,_0x5cc9d7){const _0xc6d14c=_0x391453,_0x536072=this['context'],_0x492dfa=_0x536072[_0xc6d14c(0x48d)];_0x4a66fd=_0x4a66fd||0xffffffff;let _0x149b5b=_0x4d6689,_0x2cfeda=Math[_0xc6d14c(0x213)](_0x5b5aa1+0x18/0x2+this[_0xc6d14c(0x875)]*0.35);_0x5cc9d7===_0xc6d14c(0x675)&&(_0xc6d14c(0x30f)!=='XJeJu'?_0x149b5b+=_0x4a66fd/0x2:this[_0xc6d14c(0xec)]={'duration':_0x3272ed,'wholeDuration':_0x450085,'type':_0x2597f5,'targetX':_0x13b02a,'targetY':_0x36735f,'targetScaleX':_0x41ab14,'targetScaleY':_0x4b4d05,'targetOpacity':_0x3a80ec,'targetBackOpacity':_0x4e642b,'targetContentsOpacity':_0x50bd1c}),_0x5cc9d7==='right'&&(_0x149b5b+=_0x4a66fd),_0x536072['save'](),_0x536072[_0xc6d14c(0x230)]=this['_makeFontNameText'](),_0x536072[_0xc6d14c(0x6ad)]=_0x5cc9d7,_0x536072[_0xc6d14c(0x231)]=_0xc6d14c(0x375),_0x536072[_0xc6d14c(0x48d)]=0x1,this[_0xc6d14c(0x37b)](_0x34720a,_0x149b5b,_0x2cfeda,_0x4a66fd),_0x536072[_0xc6d14c(0x48d)]=_0x492dfa,this[_0xc6d14c(0x5b9)](_0x34720a,_0x149b5b,_0x2cfeda,_0x4a66fd),_0x536072[_0xc6d14c(0x177)](),this[_0xc6d14c(0x66d)]['update']();},VisuMZ[_0x391453(0x1f6)][_0x391453(0x5c0)]=BattleManager[_0x391453(0xeb)],BattleManager[_0x391453(0xeb)]=function(_0x37424f){const _0x373a6=_0x391453;if(this[_0x373a6(0x662)][_0x373a6(0x648)]())return![];return VisuMZ['CoreEngine'][_0x373a6(0x5c0)][_0x373a6(0xd0)](this,_0x37424f);},BattleManager['endAction']=function(){const _0x5d1be2=_0x391453;if(this[_0x5d1be2(0x370)])this[_0x5d1be2(0x161)][_0x5d1be2(0x74b)](this[_0x5d1be2(0x370)]);this[_0x5d1be2(0x330)]=_0x5d1be2(0x2a3),this['_subject']&&this[_0x5d1be2(0x370)]['numActions']()===0x0&&(this['endBattlerActions'](this[_0x5d1be2(0x370)]),this[_0x5d1be2(0x370)]=null);},Bitmap[_0x391453(0x307)][_0x391453(0x12a)]=function(){const _0x390c50=_0x391453;this[_0x390c50(0x544)]=new Image(),this[_0x390c50(0x544)][_0x390c50(0x595)]=this['_onLoad'][_0x390c50(0x922)](this),this[_0x390c50(0x544)][_0x390c50(0x628)]=this[_0x390c50(0x5e3)]['bind'](this),this[_0x390c50(0x775)](),this[_0x390c50(0x93e)]=_0x390c50(0x6aa),Utils[_0x390c50(0x434)]()?_0x390c50(0x13a)==='DGSBZ'?this[_0x390c50(0x650)]():(_0x2db861[_0x390c50(0x4fd)](_0x390c50(0x935)),_0x286395[_0x390c50(0x4fd)](_0x49f8cc)):(this[_0x390c50(0x544)]['src']=this[_0x390c50(0x640)],![]&&this[_0x390c50(0x544)]['width']>0x0&&(_0x390c50(0x469)!==_0x390c50(0x469)?_0x32cd05[_0x390c50(0x251)]():(this['_image'][_0x390c50(0x595)]=null,this['_onLoad']())));},Scene_Skill[_0x391453(0x307)][_0x391453(0x26c)]=function(){const _0x44df8d=_0x391453;Scene_MenuBase[_0x44df8d(0x307)]['onActorChange'][_0x44df8d(0xd0)](this),this[_0x44df8d(0x51b)](),this[_0x44df8d(0x3ff)][_0x44df8d(0x23c)](),this[_0x44df8d(0x3ff)][_0x44df8d(0x694)](),this[_0x44df8d(0x239)][_0x44df8d(0x3b1)]();},Scene_Skill['prototype'][_0x391453(0x907)]=function(){const _0x510c82=_0x391453;return this['_skillTypeWindow']&&this['_skillTypeWindow'][_0x510c82(0x621)];},Game_Map[_0x391453(0x307)][_0x391453(0x4e4)]=function(_0x2eed36,_0x46b2e3,_0x5cac6d){const _0x2743ce=_0x391453,_0x393f43=this['tilesetFlags'](),_0x24db56=this[_0x2743ce(0x2a0)](_0x2eed36,_0x46b2e3);for(const _0x5100c9 of _0x24db56){if(_0x2743ce(0x87a)===_0x2743ce(0x7b4))return _0x2743ce(0x637);else{const _0x49dc26=_0x393f43[_0x5100c9];if(_0x49dc26===undefined||_0x49dc26===null){if('maPrH'===_0x2743ce(0x10e))this[_0x2743ce(0x5e9)][_0x2743ce(0x2a7)]=!![],this[_0x2743ce(0x5e9)][_0x2743ce(0x831)]=_0x20af9d[_0x2743ce(0x746)]||0x0;else{if($gameTemp[_0x2743ce(0x4a5)]()&&!DataManager[_0x2743ce(0x90a)]()){if(_0x2743ce(0x3c8)!==_0x2743ce(0x5ff)){let _0x5b1778=_0x2743ce(0x6d0)+'\x0a';_0x5b1778+=_0x2743ce(0x540)+'\x0a',_0x5b1778+=_0x2743ce(0x3cb);if(Imported['VisuMZ_3_EventChainReact']||Imported['VisuMZ_4_UniqueTileEffects'])alert(_0x5b1778),SceneManager[_0x2743ce(0x4f6)]();else{console[_0x2743ce(0x4fd)](_0x5b1778);if(!$gameTemp[_0x2743ce(0x1b2)]){if('KMFUP'===_0x2743ce(0x7f8))$gameTemp[_0x2743ce(0x1b2)]=!![],SceneManager[_0x2743ce(0x4b0)]();else{if(this['_CoreEngineSettings']===_0x30428b)this[_0x2743ce(0x442)]();if(this['_CoreEngineSettings']['FontSize']===_0x33fa7e)this[_0x2743ce(0x442)]();return this[_0x2743ce(0x3a9)][_0x2743ce(0x885)];}}}}else{this[_0x2743ce(0x5cb)]();const _0x1ef865=this['_duration'];_0x145e40[_0x2743ce(0x1f6)]['Game_Picture_updateMove']['call'](this),_0x1ef865>0x0&&this[_0x2743ce(0x245)]<=0x0&&(this['_x']=this[_0x2743ce(0x724)],this['_y']=this[_0x2743ce(0x36f)],this[_0x2743ce(0x221)]=this['_targetScaleX'],this[_0x2743ce(0x909)]=this[_0x2743ce(0x7c9)],this[_0x2743ce(0x6bc)]=this[_0x2743ce(0x26f)],this['_anchor']&&(this[_0x2743ce(0x88f)]['x']=this['_targetAnchor']['x'],this[_0x2743ce(0x88f)]['y']=this['_targetAnchor']['y']));}}}}if((_0x49dc26&0x10)!==0x0){if('cJGhV'===_0x2743ce(0x764))continue;else{if(this[_0x2743ce(0x66e)]===_0x2743ce(0x64d)&&!_0x565a21[_0x2743ce(0x7f9)]())return;if(_0x50dbc8[_0x2743ce(0x27e)]())return;_0x55964e[_0x2743ce(0x1f6)][_0x2743ce(0x262)][_0x2743ce(0xd0)](this,_0x303824),this[_0x2743ce(0x28d)]('default');}}if((_0x49dc26&_0x5cac6d)===0x0)return!![];if((_0x49dc26&_0x5cac6d)===_0x5cac6d)return![];}}return![];},Sprite_Animation[_0x391453(0x307)][_0x391453(0x11c)]=function(_0x5223c7){const _0x46f045=_0x391453;!this[_0x46f045(0x23f)]&&(this[_0x46f045(0x23f)]=_0x5223c7['gl'][_0x46f045(0x419)](_0x5223c7['gl'][_0x46f045(0x62f)]));};