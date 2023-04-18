//=============================================================================
// VisuStella MZ - Enemy Encounter Effects
// VisuMZ_4_EncounterEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_EncounterEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EncounterEffects = VisuMZ.EncounterEffects || {};
VisuMZ.EncounterEffects.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.08] [EncounterEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Encounter_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Both random encounters and on-screen encounters are pretty limited in what
 * they're able to do in RPG Maker MZ. This plugin expands their functionality
 * with some unique effects added through this plugin.
 * 
 * Both types of encounters can benefit from having more control over the
 * occurrence of Preemptive and Surprise Attacks. These can be enforced through
 * Plugin Commands and set up in a queue.
 * 
 * On-screen encounters can utilize alert functions that will cause events to
 * chase the player (or flee from them) once the player steps within their
 * visible detection range.
 * 
 * On-screen encounters can also utilize new functions added for use with the
 * Conditional Branch to determine which direction the player has approached
 * the on-screen encounter event from.
 * 
 * Random encounters can utilize repel and lure effects to nullify any random
 * encounters for a certain amount of steps or to increase their rate of
 * occurrence.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Take control of battle advantage. Enforce preemptive attacks, surprise
 *   attacks, neither, or chance it.
 * * Battle advantages can be set up in a queue for more interesting gameplay.
 * * Events can be given alert functionality to chase the player if the player
 *   steps within their vision range.
 * * Use Terrain Tags and Regions to set up tiles that will block detection
 *   range through line of sight usage.
 * * Events can trigger themselves upon touching followers instead of just
 *   players.
 * * Events can lock themselves in the direction they're facing when interacted
 *   with to make it easier to apply side attack and back attack effects.
 * * Random encounters can be bypassed through repel effects.
 * * Increase the rate of random encounters with lure effects.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Battle Advantage
 * 
 * Upon starting a battle with forced advantages, any calculations made by
 * other means will be overwritten in favor of the declared forced advantage.
 *
 * ---
 * 
 * Game_Player.encounterProgressValue
 * 
 * This function has been overwritten to allow for more flexibility over the
 * multipliers and effects applied through various effects and to allow for
 * the repel and lure effects to work as best as they can.
 * 
 * ---
 * 
 * Game_Event.updateSelfMovement
 * 
 * This function's original code will be ignored when the event is set to chase
 * or flee from the player after being alerted. After the alert and return
 * periods are over, self movement will resume as normal.
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
 * ---
 * 
 * === Battle Advantage-Related Tags ===
 * 
 * ---
 *
 * <Preemptive>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   the preemptive advantage (in favor of the player party).
 *
 * ---
 *
 * <Surprise>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   the surprise advantage (in favor of the enemy party).
 *
 * ---
 *
 * <No Advantage>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   no advantage at all.
 *
 * ---
 *
 * <Chance>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   a chance for preemptive, surprise, or no advantages (calculated normally).
 *
 * ---
 * 
 * === Event Encounter-Related Notetags ===
 * 
 * ---
 *
 * <Follower Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - This event can trigger by touching a follower instead of only the player.
 *
 * ---
 *
 * <Encounter Direction Lock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Normally when an event triggers without Direction Fix, it will face the
 *   player character. This tag prevents the event from facing the player, but
 *   still allows the event to freely turn directions.
 * - This is best used in conjunction with the Conditional Branch scripts.
 *
 * ---
 * 
 * === Alert-Related Notetags ===
 * 
 * ---
 *
 * <Alert>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This will use the default settings unless changed by other tags.
 *
 * ---
 *
 * <Alert Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Changes the event's alert detection range to 'x' tiles.
 * - Replace 'x' with a number value representing the number of tiles to use
 *   for its detection range.
 *
 * ---
 *
 * <Alert Dash>
 * <Alert Walk>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - If alerted, the event will dash/walk instead of whatever is set as a
 *   default setting within the Plugin Parameters.
 *
 * ---
 *
 * <Alert Time: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This determines the amount of time in frames for the event to chase the
 *   player continuously while the player is outside of the detection range.
 * - Replace 'x' with a number value representing the number of frames for the
 *   event to keep chasing the player with.
 * - If the player steps back into the alert detection range, the timer will be
 *   reset.
 *
 * ---
 * 
 * <Alert FoV Angle: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the Field of View angle to 'x' for the event.
 * - Replace 'x' with a number value representing the degrees of for the field
 *   of view angle used by the event to detect players.
 * - The angle will always be centered to the event's line of sight.
 * 
 * ---
 * 
 * <Alert Show FoV>
 * <Alert Hide FoV>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Shows/hides the field of view for the event.
 * - If an event's field of view is hidden, it can still chase players when
 *   entering the event's range.
 * 
 * ---
 *
 * <Alert Response: chase>
 * <Alert Response: rush>
 * <Alert Response: flee>
 * <Alert Response: random>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This determines how an alerted event will react.
 * - Chase: Use path finding to find a route to the player
 * - Rush: Rush directly at the player
 * - Flee: Run away from the player
 * - Random: Move in random directions
 *
 * ---
 *
 * <Response Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when initially alerted and responding.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 *
 * <Alert React Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - When initially alerted, there is a small window of waiting before starting
 *   the chase.
 * - Replace 'x' with a number representing the number of frames for the
 *   initial reaction delay.
 *
 * ---
 *
 * <Alert Common Event: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Runs a Common Event when initially alerted.
 * - Replace 'x' with a number representing the ID of the Common Event to run.
 * - Use 0 to run no Common Events.
 *
 * ---
 *
 * <Alert Sound Name: name>
 * <Alert Sound Volume: x>
 * <Alert Sound Pitch: y>
 * <Alert Sound Pan: z>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Play this sound effect when the event is initially alerted.
 * - Replace 'name' with the filename of the sound effect found in /audio/se/
 *   to play. Do NOT include the file extension.
 * - Replace 'x' with a number representing the volume of the sound effect.
 * - Replace 'y' with a number representing the pitch of the sound effect.
 * - Replace 'z' with a number representing the pan of the sound effect.
 *
 * ---
 *
 * <Return Position>
 * <Stay Position>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Decide if the event will return back to its initial position after an
 *   alert chase is over.
 * - Or if it will stay where it currently is.
 *
 * ---
 *
 * <Return Time: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This is the amount of time spent (in frames) after an alert chase is over
 *   but returning back to the event's original position.
 * - Replace 'x' with a number representing the number of frames for the
 *   duration between idling and returning.
 *
 * ---
 *
 * <Idle Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when beginning the idle phase after an
 *   alert chase is over but before returning back to the original position.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 *
 * <Returning Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when the event starts returning back to
 *   the event's original position.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 * 
 * === Alert Vision Blocking-Related Notetags ===
 * 
 * ---
 *
 * <Block Vision Tag: x>
 * <Block Vision Tags: x, x, x>
 *
 * - Used for: Tileset and Map Notetags
 * - When using a specific tileset or on a specific map, tiles marked with the
 *   terrain tag 'x' will obscure the line of sight from the event to the
 *   player character.
 * - Replace 'x' with a number value representing the terrain tag used.
 * - This does NOT change the Field of View Alert Detection Range graphic.
 *
 * ---
 *
 * <Block Vision Region: x>
 * <Block Vision Regions: x, x, x>
 *
 * - Used for: Tileset and Map Notetags
 * - When using a specific tileset or on a specific map, tiles marked with the
 *   region ID 'x' will obscure the line of sight from the event to the
 *   player character.
 * - Replace 'x' with a number value representing the region ID used.
 * - This does NOT change the Field of View Alert Detection Range graphic.
 *
 * ---
 *
 * ============================================================================
 * Conditional Branch Usage
 * ============================================================================
 * 
 * For those wanting to use Conditional Branch event commands with this plugin
 * the following functions into the "Script" input fields of the respective
 * event commands.
 * 
 * === Conditional Branch Script Functions ===
 * 
 * These are newly added JavaScript functions that return a true/false value.
 * The functions are best used with the Conditional Branch script input field.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerFront()
 * 
 * - Returns true if the event is facing the player's front.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerBack()
 * 
 * - Returns true if the event is facing the player's back.
 * - Best used with a Surprise attack.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerSide()
 * 
 * - Returns true if the event is facing the player's side.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventFront()
 * 
 * - Returns true if the player is facing the event's front.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventBack()
 * 
 * - Returns true if the player is facing the event's back.
 * - Best used with a Preemptive attack.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventSide()
 * 
 * - Returns true if the player is facing the event's side.
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
 * === Advantage Plugin Commands ===
 * 
 * ---
 *
 * Advantage: Add to Queue
 * - Add (at the end) to the existing advantage queue the following encounter
 *  advantages for the upcoming battles.
 *
 *   Queue:
 *   - Add to the queue the following advantage options for the
 *     upcoming battles.
 *     - Preemptive (Player gains turn advantage)
 *     - Surprise (Enemies gain turn advantage)
 *     - No Advantage (Neither party has advantage)
 *     - Chance (Random encounter advantage chance)
 *
 * ---
 *
 * Advantage: Set Queue
 * - Declare the exact advantage queue for the upcoming battles.
 *
 *   Queue:
 *   - Add to the queue the following advantage options for the
 *     upcoming battles.
 *     - Preemptive (Player gains turn advantage)
 *     - Surprise (Enemies gain turn advantage)
 *     - No Advantage (Neither party has advantage)
 *     - Chance (Random encounter advantage chance)
 *
 * ---
 *
 * Advantage: Reset Queue
 * - Resets the advantage queue for battles.
 *
 * ---
 * 
 * === Alert Plugin Commands ===
 * 
 * ---
 *
 * Alert: Stealth Mode
 * - Changes the stealth mode setting for the player.
 *
 *   Stealth Mode:
 *   - If Stealth Mode is on, bypass unnoticed alerts.
 *   - Already alerted events will stay alert.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Advantage Settings
 * ============================================================================
 *
 * Advantage common event settings related to enemy encounters.
 *
 * ---
 *
 * Settings
 * 
 *   Preemptive Event:
 *   - Run this Common Event upon a preemptive advantage.
 *   - Use 0 to run no Common Events.
 * 
 *   Surprise Event:
 *   - Run this Common Event upon a surprise advantage.
 *   - Use 0 to run no Common Events.
 * 
 *   No Advantage Event:
 *   - Run this Common Event when no advantage is given.
 *   - Use 0 to run no Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Alert Settings
 * ============================================================================
 *
 * These are settings for alerting events. Used mainly for events chasing the
 * player.
 * 
 * How alert detection works is when the player steps with an event (who has
 * an alert notetag or comment tag), the event will enter alert mode. At the
 * very start, a response balloon will play along with an initialy delay. If
 * there is a common event set, the common event will play immediately.
 * 
 * After the initial delay is over, the event will begin its chasing phase.
 * Although it's called the chasing phase, it can react differently by using
 * path finding to find a way to the player, rushing directly in a straight
 * line at the player, running away from the player, or moving about randomly.
 * 
 * If the player stays out of the event's alert detection range for a specific
 * amount of time, the event will enter its idle phase. An idle balloon will
 * play and the event will wait a short duration.
 * 
 * After this short duration is over, the event will return back to its
 * original position (if desired). Upon starting its return to its original
 * position, it will play the returning balloon.
 * 
 * During the idle and return phases, if the player steps in range of the
 * event's alert range, it will begin the chase all over again.
 *
 * ---
 *
 * Alert
 * 
 *   Detection Range:
 *   - Default tile range for event to detect the player in.
 * 
 *   Alert Dash:
 *   - Alerted events use dashing speed.
 * 
 *   Alert Time:
 *   - Number of frames the alerted event will attempt to chase the player.
 *
 * ---
 *
 * Field of View
 * 
 *   Angle Range:
 *   - The angle range used to determine the event's field of view.
 * 
 *   Show Range:
 *   - Show the field of view of events?
 * 
 *   Color 1:
 *   Color 2:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Response
 * 
 *   Response Type:
 *   - What kind of default response behavior do you want?
 *     - Chase: Use path finding to find a route to the player
 *     - Rush: Rush directly at the player
 *     - Flee: Run away from the player
 *     - Random: Move in random directions
 * 
 *   Response Balloon:
 *   - What kind of balloon should the event play when detecting the player?
 * 
 *   Common Event:
 *   - Run this Common Event when the player is detected.
 *   - Use 0 for no Common Event.
 * 
 *   Reaction Delay:
 *   - Number of frames for the event to stand still before beginning
 *     the chase.
 *
 * ---
 *
 * Sound
 * 
 *   Filename:
 *   - Filename of the sound effect played when alerted.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Return
 * 
 *   Return Home:
 *   - After finishing a chase, return back to the home position?
 * 
 *   Idle Wait:
 *   - Number of frames to wait before returning home.
 * 
 *   Idle Balloon:
 *   - Play this balloon when an event is about to return.
 * 
 *   Returning Balloon:
 *   - Play this balloon when an event begins returning.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Encounter Multipliers
 * ============================================================================
 *
 * Encounter multiplier settings regarding enemy encounters.
 *
 * ---
 *
 * Bush Multiplier
 * 
 *   Parameter:
 *   - Multiplier for how fast encounters occur by when the player is walking
 *     through bushes.
 * 
 *   Boat Multiplier:
 *   - Multiplier for how fast encounters occur by when the player is
 *     traveling via boat.
 * 
 *   Ship Multiplier:
 *   - Multiplier for how fast encounters occur by when the player is
 *     traveling via ship.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Repel/Lure Settings
 * ============================================================================
 *
 * Repel/Lure settings regarding enemy encounters.
 *
 * ---
 *
 * Settings
 * 
 *   Repel Variable:
 *   - Select a variable where if the value is above 0, it will
 *     repel encounters.
 *   - Each step reduces variable value by 1.
 * 
 *   Wear Off Common Event:
 *   - Run this Common Event when Repel reaches 0.
 *   - Use 0 to run no Common Events.
 *
 * ---
 *
 * Settings
 * 
 *   Lure Variable:
 *   - Select a variable where if the value is above 0, it will
 *     lure encounters.
 *   - Each step reduces variable value by 1.
 * 
 *   Wear Off Common Event:
 *   - Run this Common Event when Lure reaches 0.
 *   - Use 0 to run no Common Events.
 * 
 *   Lure Multiplier:
 *   - Multiplier for how fast encounters occur by when the lure
 *     effect is active.
 * 
 *   Lure Increase:
 *   - Flat increase for how fast encounters occur by when the lure
 *     effect is active.
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.08: February 17, 2022
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.07: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: August 20, 2021
 * * Compatibility Update!
 * ** Better compatibility with Event and Movement Core's spawn functions.
 *    Update made by Arisu.
 * 
 * Version 1.05: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for features that were left out by accident.
 * *** Notetag/Comment Tag: <Alert FoV Angle: x>
 * *** Notetag/Comment Tag: <Alert Hide FoV>
 * *** Notetag/Comment Tag: <Alert Show FoV>
 * 
 * Version 1.04: December 11, 2020
 * * Bug Fixes!
 * ** Without the Events and Movement Core, events returning home after a
 *    failed alert chase will no longer crash the game.
 *    Fix by Yanfly and Shiro.
 * 
 * Version 1.03: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: November 29, 2020
 * * Feature Update!
 * ** Initialization of the encounter effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu and Shaz.
 * 
 * Version 1.01: November 22, 2020
 * * Bug Fixes!
 * ** Certain notetags will no longer cause crashes. Fix made by Yanfly.
 * ** Erased events will have their alert sprite removed, too. Fix made by
 *    Yanfly.
 *
 * Version 1.00: December 11, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageAddQueue
 * @text Advantage: Add to Queue
 * @desc Add (at the end) to the existing advantage queue the following
 * encounter advantages for the upcoming battles.
 *
 * @arg Queue:arraystr
 * @text Queue
 * @type select[]
 * @option Preemptive (Player gains turn advantage)
 * @value preemptive
 * @option Surprise (Enemies gain turn advantage)
 * @value surprise
 * @option No Advantage (Neither party has advantage)
 * @value no advantage
 * @option Chance (Random encounter advantage chance)
 * @value chance
 * @desc Add to the queue the following advantage options for
 * the upcoming battles.
 * @default ["preemptive"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageSetQueue
 * @text Advantage: Set Queue
 * @desc Declare the exact advantage queue for the upcoming battles.
 *
 * @arg Queue:arraystr
 * @text Queue
 * @type select[]
 * @option Preemptive (Player gains turn advantage)
 * @value preemptive
 * @option Surprise (Enemies gain turn advantage)
 * @value surprise
 * @option No Advantage (Neither party has advantage)
 * @value no advantage
 * @option Chance (Random encounter advantage chance)
 * @value chance
 * @desc Change the queue to the following advantage options for
 * the upcoming battles.
 * @default ["preemptive"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageResetQueue
 * @text Advantage: Reset Queue
 * @desc Resets the advantage queue for battles.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AlertStealthMode
 * @text Alert: Stealth Mode
 * @desc Changes the stealth mode setting for the player.
 *
 * @arg StealthMode:eval
 * @text Stealth Mode
 * @type boolean
 * @on Stealth On
 * @off No Steath
 * @desc If Stealth Mode is on, bypass unnoticed alerts.
 * Already alerted events will stay alert.
 * @default true
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
 * @param EncounterEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Advantage:struct
 * @text Advantage Settings
 * @type struct<Advantage>
 * @desc Advantage common event settings related to enemy encounters.
 * @default {"Preemptive:num":"0","Surprise:num":"0","Normal:num":"0"}
 *
 * @param Alert:struct
 * @text Alert Settings
 * @type struct<Alert>
 * @desc Settings alerting events. Used mainly for events chasing the player.
 * @default {"Alert":"","AlertRange:num":"4","AlertDash:eval":"true","AlertLock:num":"600","FoV":"","FovAngle:num":"120","ShowFoV:eval":"true","FovColor1:str":"rgba(255, 0, 0, 0)","FovColor2:str":"rgba(255, 0, 0, 0.5)","Response":"","ResponseType:str":"chase","ResponseBalloon:str":"Exclamation","CommonEvent:num":"0","ReactDelay:num":"80","Sound":"","SoundName:str":"Attack1","SoundVolume:num":"90","SoundPitch:num":"120","SoundPan:num":"0","Return":"","ReturnHome:eval":"true","ReturnWait:num":"180","ReturnStartBalloon:str":"Silence","ReturnEndBalloon:str":"Frustration"}
 *
 * @param EncounterMultiplier:struct
 * @text Encounter Multipliers
 * @type struct<EncounterMultiplier>
 * @desc Encounter multiplier settings regarding enemy encounters.
 * @default {"BushMultiplier:num":"2.00","BoatMultiplier:num":"1.00","ShipMultiplier:num":"0.50"}
 *
 * @param RepelLure:struct
 * @text Repel/Lure Settings
 * @type struct<RepelLure>
 * @desc Repel/Lure settings regarding enemy encounters.
 * @default {"RepelVariable:num":"31","RepelEvent:num":"6","LureVariable:num":"32","LureEvent:num":"8","LureRate:num":"4.0","LureFlat:num":"1"}
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
 * Advantage Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Advantage:
 *
 * @param Preemptive:num
 * @text Preemptive Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event upon a preemptive advantage.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param Surprise:num
 * @text Surprise Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event upon a surprise advantage.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param Normal:num
 * @text No Advantage Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event when no advantage is given.
 * Use 0 to run no Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Alert Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Alert:
 *
 * @param Alert
 * 
 * @param AlertRange:num
 * @text Detection Range
 * @parent Alert
 * @type number
 * @min 1
 * @desc Default tile range for event to detect the player in.
 * @default 4
 *
 * @param AlertDash:eval
 * @text Alert Dash
 * @parent Alert
 * @type boolean
 * @on Dash
 * @off Walk
 * @desc Alerted events use dashing speed.
 * @default true
 * 
 * @param AlertLock:num
 * @text Alert Time
 * @parent Alert
 * @type number
 * @min 1
 * @desc Number of frames the alerted event will attempt to chase the player.
 * @default 600
 *
 * @param FoV
 * @text Field of View
 * 
 * @param FovAngle:num
 * @text Angle Range
 * @parent FoV
 * @type number
 * @min 1
 * @max 360
 * @desc The angle range used to determine the event's field of view.
 * @default 120
 *
 * @param ShowFoV:eval
 * @text Show Range
 * @parent FoV
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the field of view of events?
 * @default true
 *
 * @param FovColor1:str
 * @text Color 1
 * @parent FoV
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(255, 0, 0, 0)
 *
 * @param FovColor2:str
 * @text Color 2
 * @parent FoV
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(255, 0, 0, 0.5)
 *
 * @param Response
 *
 * @param ResponseType:str
 * @text Response Type
 * @parent Response
 * @type select
 * @option Chase: Use path finding to find a route to the player
 * @value chase
 * @option Rush: Rush directly at the player
 * @value rush
 * @option Flee: Run away from the player
 * @value flee
 * @option Random: Move in random directions
 * @value random
 * @desc What kind of default response behavior do you want?
 * @default chase
 *
 * @param ResponseBalloon:str
 * @text Response Balloon
 * @parent Response
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc What kind of balloon should the event play when detecting the player?
 * @default Exclamation
 *
 * @param CommonEvent:num
 * @text Common Event
 * @parent Response
 * @type common_event
 * @desc Run this Common Event when the player is detected.
 * Use 0 for no Common Event.
 * @default 0
 * 
 * @param ReactDelay:num
 * @text Reaction Delay
 * @parent Response
 * @type number
 * @min 1
 * @desc Number of frames for the event to stand still before beginning the chase.
 * @default 80
 *
 * @param Sound
 *
 * @param SoundName:str
 * @text Filename
 * @type file
 * @parent Sound
 * @dir audio/se/
 * @desc Filename of the sound effect played when alerted.
 * @default Attack1
 *
 * @param SoundVolume:num
 * @text Volume
 * @type number
 * @parent Sound
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param SoundPitch:num
 * @text Pitch
 * @type number
 * @parent Sound
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param SoundPan:num
 * @text Pan
 * @parent Sound
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Return
 *
 * @param ReturnHome:eval
 * @text Return Home
 * @parent Return
 * @type boolean
 * @on Return
 * @off Stay
 * @desc After finishing a chase, return back to the home position?
 * @default true
 * 
 * @param ReturnWait:num
 * @text Idle Wait
 * @parent Return
 * @type number
 * @min 1
 * @desc Number of frames to wait before returning home.
 * @default 180
 *
 * @param ReturnStartBalloon:str
 * @text Idle Balloon
 * @parent Return
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc Play this balloon when an event is about to return.
 * @default Silence
 *
 * @param ReturnEndBalloon:str
 * @text Returning Balloon
 * @parent Return
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc Play this balloon when an event begins returning.
 * @default Frustration
 *
 */
/* ----------------------------------------------------------------------------
 * Encounter Multipliers Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EncounterMultiplier:
 *
 * @param BushMultiplier:num
 * @text Bush Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is walking through bushes.
 * @default 2.00
 *
 * @param BoatMultiplier:num
 * @text Boat Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is traveling via boat.
 * @default 1.00
 *
 * @param ShipMultiplier:num
 * @text Ship Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is traveling via ship.
 * @default 0.50
 *
 */
/* ----------------------------------------------------------------------------
 * Repel/Lure Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~RepelLure:
 *
 * @param RepelVariable:num
 * @text Repel Variable
 * @parent Repel/Lure
 * @type variable
 * @desc Select a variable where if the value is above 0, it will
 * repel encounters. Each step reduces variable value by 1.
 * @default 0
 *
 * @param RepelEvent:num
 * @text Wear Off Common Event
 * @parent RepelVariable:num
 * @type common_event
 * @desc Run this Common Event when Repel reaches 0.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param LureVariable:num
 * @text Lure Variable
 * @parent Repel/Lure
 * @type variable
 * @desc Select a variable where if the value is above 0, it will
 * lure encounters. Each step reduces variable value by 1.
 * @default 0
 *
 * @param LureEvent:num
 * @text Wear Off Common Event
 * @parent LureVariable:num
 * @type common_event
 * @desc Run this Common Event when Lure reaches 0.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param LureRate:num
 * @text Lure Multiplier
 * @parent LureVariable:num
 * @desc Multiplier for how fast encounters occur by when the
 * lure effect is active.
 * @default 4.0
 *
 * @param LureFlat:num
 * @text Lure Increase
 * @parent LureVariable:num
 * @desc Flat increase for how fast encounters occur by when the
 * lure effect is active.
 * @default 1
 *
 */
//=============================================================================

const _0x49b25e=_0x9816;(function(_0x40c938,_0x2b2237){const _0x3d876f=_0x9816,_0x36a3e3=_0x40c938();while(!![]){try{const _0x1d8dcb=-parseInt(_0x3d876f(0xe5))/0x1+parseInt(_0x3d876f(0xa0))/0x2+-parseInt(_0x3d876f(0xe9))/0x3+-parseInt(_0x3d876f(0x15a))/0x4+-parseInt(_0x3d876f(0x202))/0x5*(-parseInt(_0x3d876f(0x12d))/0x6)+-parseInt(_0x3d876f(0x21c))/0x7+-parseInt(_0x3d876f(0x11c))/0x8*(-parseInt(_0x3d876f(0xb5))/0x9);if(_0x1d8dcb===_0x2b2237)break;else _0x36a3e3['push'](_0x36a3e3['shift']());}catch(_0x2a283a){_0x36a3e3['push'](_0x36a3e3['shift']());}}}(_0x5d1b,0xaf91e));var label=_0x49b25e(0xb0),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x49b25e(0x1c0)](function(_0xfea9e3){const _0x25f0e9=_0x49b25e;return _0xfea9e3[_0x25f0e9(0xff)]&&_0xfea9e3[_0x25f0e9(0x204)]['includes']('['+label+']');})[0x0];function _0x9816(_0x4f024e,_0x865f8b){const _0x5d1bb2=_0x5d1b();return _0x9816=function(_0x981633,_0x239016){_0x981633=_0x981633-0x9a;let _0x4084fc=_0x5d1bb2[_0x981633];return _0x4084fc;},_0x9816(_0x4f024e,_0x865f8b);}VisuMZ[label]['Settings']=VisuMZ[label][_0x49b25e(0xe0)]||{},VisuMZ[_0x49b25e(0x21a)]=function(_0x2d6725,_0x28beee){const _0x4d83dd=_0x49b25e;for(const _0x43e14d in _0x28beee){if(_0x4d83dd(0x195)!=='ipgoD'){if(_0x43e14d['match'](/(.*):(.*)/i)){if('MbTXI'!==_0x4d83dd(0x145)){const _0x3578b4=String(RegExp['$1']),_0x2c94b1=String(RegExp['$2'])[_0x4d83dd(0x148)]()[_0x4d83dd(0x21f)]();let _0x1c02a9,_0x1147cf,_0x3a9a1a;switch(_0x2c94b1){case _0x4d83dd(0x18b):_0x1c02a9=_0x28beee[_0x43e14d]!==''?Number(_0x28beee[_0x43e14d]):0x0;break;case _0x4d83dd(0xe2):_0x1147cf=_0x28beee[_0x43e14d]!==''?JSON[_0x4d83dd(0x205)](_0x28beee[_0x43e14d]):[],_0x1c02a9=_0x1147cf[_0x4d83dd(0xd5)](_0x5cfe8e=>Number(_0x5cfe8e));break;case'EVAL':_0x1c02a9=_0x28beee[_0x43e14d]!==''?eval(_0x28beee[_0x43e14d]):null;break;case _0x4d83dd(0x170):_0x1147cf=_0x28beee[_0x43e14d]!==''?JSON[_0x4d83dd(0x205)](_0x28beee[_0x43e14d]):[],_0x1c02a9=_0x1147cf[_0x4d83dd(0xd5)](_0xdc12d0=>eval(_0xdc12d0));break;case'JSON':_0x1c02a9=_0x28beee[_0x43e14d]!==''?JSON[_0x4d83dd(0x205)](_0x28beee[_0x43e14d]):'';break;case _0x4d83dd(0x167):_0x1147cf=_0x28beee[_0x43e14d]!==''?JSON[_0x4d83dd(0x205)](_0x28beee[_0x43e14d]):[],_0x1c02a9=_0x1147cf[_0x4d83dd(0xd5)](_0x164fc8=>JSON[_0x4d83dd(0x205)](_0x164fc8));break;case'FUNC':_0x1c02a9=_0x28beee[_0x43e14d]!==''?new Function(JSON[_0x4d83dd(0x205)](_0x28beee[_0x43e14d])):new Function(_0x4d83dd(0x1b6));break;case _0x4d83dd(0x1a9):_0x1147cf=_0x28beee[_0x43e14d]!==''?JSON[_0x4d83dd(0x205)](_0x28beee[_0x43e14d]):[],_0x1c02a9=_0x1147cf[_0x4d83dd(0xd5)](_0x1d5081=>new Function(JSON[_0x4d83dd(0x205)](_0x1d5081)));break;case _0x4d83dd(0xe4):_0x1c02a9=_0x28beee[_0x43e14d]!==''?String(_0x28beee[_0x43e14d]):'';break;case'ARRAYSTR':_0x1147cf=_0x28beee[_0x43e14d]!==''?JSON[_0x4d83dd(0x205)](_0x28beee[_0x43e14d]):[],_0x1c02a9=_0x1147cf[_0x4d83dd(0xd5)](_0x5b18a5=>String(_0x5b18a5));break;case _0x4d83dd(0x146):_0x3a9a1a=_0x28beee[_0x43e14d]!==''?JSON[_0x4d83dd(0x205)](_0x28beee[_0x43e14d]):{},_0x1c02a9=VisuMZ[_0x4d83dd(0x21a)]({},_0x3a9a1a);break;case _0x4d83dd(0xc7):_0x1147cf=_0x28beee[_0x43e14d]!==''?JSON['parse'](_0x28beee[_0x43e14d]):[],_0x1c02a9=_0x1147cf[_0x4d83dd(0xd5)](_0x1f2a27=>VisuMZ[_0x4d83dd(0x21a)]({},JSON[_0x4d83dd(0x205)](_0x1f2a27)));break;default:continue;}_0x2d6725[_0x3578b4]=_0x1c02a9;}else{const _0x566660=_0xb45d88(_0x37a1ac['$1'])[_0x4d83dd(0x1fe)](',')[_0x4d83dd(0xd5)](_0x144977=>_0x5c225d(_0x144977));this[_0x4d83dd(0x107)]=this[_0x4d83dd(0x107)][_0x4d83dd(0xae)](_0x566660);}}}else{_0x306799[_0x4d83dd(0x21a)](_0x4e706d,_0x746b41);const _0x1298d0=_0x5bd243['StealthMode'];_0x2dd85e['setAlertStealthMode'](_0x1298d0);}}return _0x2d6725;},(_0xdccc3c=>{const _0x50c467=_0x49b25e,_0x398978=_0xdccc3c[_0x50c467(0x102)];for(const _0x124984 of dependencies){if(_0x50c467(0x1ba)!==_0x50c467(0x1ba))_0xf3972[_0x50c467(0x149)]=!![],_0x183e33[_0x50c467(0x1b9)]=!![];else{if(!Imported[_0x124984]){if(_0x50c467(0x20a)!==_0x50c467(0x225)){alert(_0x50c467(0xcf)['format'](_0x398978,_0x124984)),SceneManager[_0x50c467(0x161)]();break;}else{if(this['isMoving']())return![];this[_0x50c467(0x226)]=this[_0x50c467(0x226)]||{};if(this[_0x50c467(0x226)][_0x50c467(0x153)]!==_0x157236['x'])return!![];if(this[_0x50c467(0x226)][_0x50c467(0x111)]!==_0x406db8['y'])return!![];if(this[_0x50c467(0x226)][_0x50c467(0x177)]!==this['x'])return!![];if(this[_0x50c467(0x226)][_0x50c467(0x1dc)]!==this['y'])return!![];return![];}}}}const _0x3c73ef=_0xdccc3c[_0x50c467(0x204)];if(_0x3c73ef[_0x50c467(0x184)](/\[Version[ ](.*?)\]/i)){const _0x5363c5=Number(RegExp['$1']);if(_0x5363c5!==VisuMZ[label][_0x50c467(0x1b1)]){if(_0x50c467(0x123)==='CQChP'){const _0x1337af=_0x1c624a[_0x50c467(0x1e5)](this[_0x50c467(0x1d8)]());if(!_0x1337af)return![];const _0x41ca15=_0xddeb13;return _0x1337af[_0x50c467(0x19b)](_0x41ca15)&&_0x41ca15[_0x50c467(0x203)](_0x1337af);}else alert(_0x50c467(0xd3)['format'](_0x398978,_0x5363c5)),SceneManager[_0x50c467(0x161)]();}}if(_0x3c73ef[_0x50c467(0x184)](/\[Tier[ ](\d+)\]/i)){const _0x4c8983=Number(RegExp['$1']);if(_0x4c8983<tier){if(_0x50c467(0x1ff)==='CJIWr'){this[_0x50c467(0x152)]=this['_character'][_0x50c467(0xa6)];if(this[_0x50c467(0x17d)])this[_0x50c467(0x17d)][_0x50c467(0x12b)]();this[_0x50c467(0x17d)]=new _0x9409b3(0x1,0x1);}else alert(_0x50c467(0x1e3)['format'](_0x398978,_0x4c8983,tier)),SceneManager['exit']();}else tier=Math[_0x50c467(0x1cf)](_0x4c8983,tier);}VisuMZ[_0x50c467(0x21a)](VisuMZ[label][_0x50c467(0xe0)],_0xdccc3c[_0x50c467(0x1c7)]);})(pluginData),PluginManager[_0x49b25e(0x14c)](pluginData[_0x49b25e(0x102)],_0x49b25e(0x11b),_0x470f4e=>{const _0x5d8175=_0x49b25e;VisuMZ[_0x5d8175(0x21a)](_0x470f4e,_0x470f4e);const _0x39f3bf=_0x470f4e['Queue'];$gameSystem[_0x5d8175(0x219)](_0x39f3bf);}),PluginManager[_0x49b25e(0x14c)](pluginData[_0x49b25e(0x102)],_0x49b25e(0xbd),_0x57a51e=>{const _0x33fbe6=_0x49b25e;VisuMZ['ConvertParams'](_0x57a51e,_0x57a51e);const _0x4feb25=_0x57a51e[_0x33fbe6(0xde)];$gameSystem[_0x33fbe6(0x9d)](_0x4feb25);}),PluginManager[_0x49b25e(0x14c)](pluginData[_0x49b25e(0x102)],_0x49b25e(0xd0),_0x13e8a7=>{const _0x55a3d2=_0x49b25e;VisuMZ[_0x55a3d2(0x21a)](_0x13e8a7,_0x13e8a7),$gameSystem['setForcedAdvantage']([]);}),PluginManager[_0x49b25e(0x14c)](pluginData[_0x49b25e(0x102)],_0x49b25e(0x1ab),_0x2562b1=>{const _0x396f9c=_0x49b25e;VisuMZ[_0x396f9c(0x21a)](_0x2562b1,_0x2562b1);const _0x3985fb=_0x2562b1[_0x396f9c(0x19d)];$gamePlayer[_0x396f9c(0x16c)](_0x3985fb);}),VisuMZ['EncounterEffects'][_0x49b25e(0x1d0)]={'Preemptive':/<(?:PREEMPTIVE|PRE-EMPTIVE|PRE EMPTIVE)>/i,'Surprise':/<(?:SURPRISE|SURPRISED)>/i,'NoAdvantage':/<NO ADVANTAGE>/i,'Chance':/<CHANCE>/i,'FollowerTrigger':/<(?:FOLLOWER TRIGGER|FOLLOWERTRIGGER)>/i,'TouchDirectionLock':/<(?:ENCOUNTER LOCK|ENCOUNTER DIRECTION LOCK)>/i,'AlertDefault':/<ALERT>/i,'AlertRange':/<ALERT RANGE:[ ](\d+)>/i,'AlertDash':/<ALERT DASH>/i,'AlertWalk':/<ALERT WALK>/i,'AlertLock':/<ALERT TIME:[ ](\d+)>/i,'AlertFovAngle':/<ALERT FOV ANGLE:[ ](\d+)>/i,'AlertShowFov':/<ALERT SHOW FOV>/i,'AlertHideFov':/<ALERT HIDE FOV>/i,'AlertResponse':/<ALERT RESPONSE:[ ](.*)>/i,'AlertBalloon':/<(?:ALERT|RESPONSE) BALLOON:[ ](.*)>/i,'AlertReactDelay':/<ALERT REACT DELAY:[ ](\d+)>/i,'AlertCommonEvent':/<ALERT COMMON EVENT:[ ](\d+)>/i,'AlertSoundName':/<ALERT SOUND NAME:[ ](.*)>/i,'AlertSoundVolume':/<ALERT SOUND VOLUME:[ ](\d+)>/i,'AlertSoundPitch':/<ALERT SOUND PITCH:[ ](\d+)>/i,'AlertSoundPan':/<ALERT SOUND PAN:[ ](.*)>/i,'ReturnPosition':/<RETURN POSITION>/i,'StayPosition':/<STAY POSITION>/i,'ReturnStartBalloon':/<IDLE BALLOON:[ ](.*)>/i,'ReturnEndBalloon':/<RETURNING BALLOON:[ ](.*)>/i,'ReturnWait':/<RETURN TIME:[ ](\d+)>/i,'BlockVisionTag':/<(?:BLOCK|BLOCKED) VISION (?:TAG|TAGS):[ ](.*)>/i,'BlockVisionRegion':/<(?:BLOCK|BLOCKED) VISION (?:REGION|REGIONS):[ ](.*)>/i},VisuMZ[_0x49b25e(0xb0)]['BattleManager_startBattle']=BattleManager[_0x49b25e(0x124)],BattleManager[_0x49b25e(0x124)]=function(){const _0x519913=_0x49b25e;this[_0x519913(0x151)](),VisuMZ['EncounterEffects']['BattleManager_startBattle'][_0x519913(0x16d)](this),this[_0x519913(0x163)]();},BattleManager['checkForcedAdvantage']=function(){const _0x19b6f1=_0x49b25e,_0x1efbee=$gameSystem[_0x19b6f1(0x9e)]();if(!_0x1efbee)return;switch(_0x1efbee[_0x19b6f1(0x1fd)]()['trim']()){case _0x19b6f1(0xa8):this[_0x19b6f1(0x9c)]=!![],this[_0x19b6f1(0x173)]=![];break;case'surprise':this[_0x19b6f1(0x9c)]=![],this['_surprise']=!![];break;case _0x19b6f1(0xbb):this['_preemptive']=![],this[_0x19b6f1(0x173)]=![];break;case'chance':VisuMZ[_0x19b6f1(0xf6)][_0x19b6f1(0x207)]['call'](this);break;}},BattleManager[_0x49b25e(0x163)]=function(){const _0x273b02=_0x49b25e,_0x1d0e19=VisuMZ['EncounterEffects'][_0x273b02(0xe0)][_0x273b02(0x18e)];if(!_0x1d0e19)return;let _0x95f1b2=0x0;if(this['_preemptive'])_0x95f1b2=_0x1d0e19[_0x273b02(0x168)]||0x0;else{if(this[_0x273b02(0x173)])_0x273b02(0xdb)!==_0x273b02(0x112)?_0x95f1b2=_0x1d0e19[_0x273b02(0xd4)]||0x0:_0x4d93c8[_0x273b02(0x1b7)](_0x273b02(0x119),_0x3f2c6c,_0x398a07,_0xf7a573,_0x23fefd);else{if(_0x273b02(0xda)!==_0x273b02(0xc8))_0x95f1b2=_0x1d0e19[_0x273b02(0x1e0)]||0x0;else{if(!this[_0x273b02(0x1e5)]())return;if(!this[_0x273b02(0x18c)]())return;const _0x3573d4=this[_0x273b02(0x1a0)]();let _0x276b79='';for(const _0x3c58b4 of _0x3573d4){if([0x6c,0x198][_0x273b02(0x223)](_0x3c58b4[_0x273b02(0x1f9)])){if(_0x276b79!=='')_0x276b79+='\x0a';_0x276b79+=_0x3c58b4['parameters'][0x0];}}this[_0x273b02(0xd6)](_0x276b79);}}}_0x95f1b2>0x0&&$gameTemp[_0x273b02(0xea)](_0x95f1b2);},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0x165)]=Game_System[_0x49b25e(0x228)]['initialize'],Game_System[_0x49b25e(0x228)]['initialize']=function(){const _0x23fd3e=_0x49b25e;VisuMZ[_0x23fd3e(0xb0)][_0x23fd3e(0x165)][_0x23fd3e(0x16d)](this),this[_0x23fd3e(0xcb)]();},Game_System[_0x49b25e(0x228)][_0x49b25e(0xcb)]=function(){const _0x13b4d1=_0x49b25e;this[_0x13b4d1(0x176)]=[];},Game_System[_0x49b25e(0x228)][_0x49b25e(0xa2)]=function(){const _0x2cfb39=_0x49b25e;if(this['_forcedAdvantage']===undefined){if(_0x2cfb39(0x206)===_0x2cfb39(0x206))this[_0x2cfb39(0xcb)]();else return'no\x20advantage';}return this[_0x2cfb39(0x176)];},Game_System[_0x49b25e(0x228)][_0x49b25e(0x9e)]=function(){const _0x37c91c=_0x49b25e;if($gameTroop&&$gameTroop[_0x37c91c(0xa3)]()){const _0x39b15a=VisuMZ[_0x37c91c(0xb0)]['RegExp'],_0x16bc54=$gameTroop['troop']()[_0x37c91c(0x102)];if(_0x16bc54['match'](_0x39b15a[_0x37c91c(0x168)])){if(_0x37c91c(0x175)!==_0x37c91c(0x175))_0x28c3f5[_0x37c91c(0x149)]=!![],_0x1c6f78[_0x37c91c(0x20e)]=_0x47f9c9(_0x3e41b9['$1'])||0x1;else return _0x37c91c(0xa8);}else{if(_0x16bc54[_0x37c91c(0x184)](_0x39b15a[_0x37c91c(0xd4)])){if(_0x37c91c(0x140)!==_0x37c91c(0x209))return _0x37c91c(0x1f7);else{const _0x383faf=_0x2a02d1[_0x37c91c(0x1e5)](this['eventId']());if(!_0x383faf)return![];const _0x502cb5=_0x10a054;return _0x383faf['isFacingSideways'](_0x502cb5)&&_0x502cb5[_0x37c91c(0x13e)](_0x383faf);}}else{if(_0x16bc54[_0x37c91c(0x184)](_0x39b15a['NoAdvantage'])){if('tvQMO'===_0x37c91c(0x1b2))return _0x37c91c(0xbb);else this[_0x37c91c(0xdf)]();}else{if(_0x16bc54['match'](_0x39b15a[_0x37c91c(0x1ac)]))return _0x37c91c(0x122);}}}}return this[_0x37c91c(0xa2)]()[_0x37c91c(0x9f)]();},Game_System[_0x49b25e(0x228)][_0x49b25e(0x9d)]=function(_0x3ef5cd){const _0x31febe=_0x49b25e;this[_0x31febe(0x176)]===undefined&&this['initEncounterEffects_ForcedAdvantage'](),this[_0x31febe(0x176)]=_0x3ef5cd;},Game_System['prototype']['addForcedAdvantage']=function(_0xaf7d5){const _0x5a722d=_0x49b25e;this[_0x5a722d(0x176)]===undefined&&(_0x5a722d(0x1f8)!==_0x5a722d(0x106)?this[_0x5a722d(0xcb)]():this[_0x5a722d(0x172)]=!![]),this[_0x5a722d(0x176)]=this[_0x5a722d(0x176)][_0x5a722d(0xae)](_0xaf7d5);},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0xf9)]=Game_Map['prototype']['setup'],Game_Map[_0x49b25e(0x228)]['setup']=function(_0x27b16f){const _0x14c239=_0x49b25e;VisuMZ[_0x14c239(0xb0)][_0x14c239(0xf9)][_0x14c239(0x16d)](this,_0x27b16f),this['initEncounterEffectsData'](),this[_0x14c239(0xf2)]();},Game_Map[_0x49b25e(0x228)][_0x49b25e(0xa9)]=function(){const _0x478d21=_0x49b25e;this[_0x478d21(0x193)]=[],this[_0x478d21(0x107)]=[];},Game_Map[_0x49b25e(0x228)][_0x49b25e(0xf2)]=function(){const _0x5a6bf2=_0x49b25e,_0x5c5af0=this[_0x5a6bf2(0x1da)]();if(!_0x5c5af0)return;const _0x19aab5=VisuMZ[_0x5a6bf2(0xb0)][_0x5a6bf2(0x1d0)],_0x45727c=_0x5c5af0[_0x5a6bf2(0x120)],_0x446351=$dataMap?$dataMap['note']:'';if(_0x45727c[_0x5a6bf2(0x184)](_0x19aab5['BlockVisionTag'])){const _0x5b09b9=String(RegExp['$1'])[_0x5a6bf2(0x1fe)](',')[_0x5a6bf2(0xd5)](_0x16d766=>Number(_0x16d766));this[_0x5a6bf2(0x193)]=this[_0x5a6bf2(0x193)][_0x5a6bf2(0xae)](_0x5b09b9);}if(_0x45727c[_0x5a6bf2(0x184)](_0x19aab5[_0x5a6bf2(0x1c6)])){const _0x16f1cd=String(RegExp['$1'])[_0x5a6bf2(0x1fe)](',')['map'](_0x3819a7=>Number(_0x3819a7));this[_0x5a6bf2(0x107)]=this['_alertBlockVisionRegions'][_0x5a6bf2(0xae)](_0x16f1cd);}if(_0x446351[_0x5a6bf2(0x184)](_0x19aab5[_0x5a6bf2(0x1d5)])){if(_0x5a6bf2(0x137)!==_0x5a6bf2(0x181)){const _0x281142=String(RegExp['$1'])[_0x5a6bf2(0x1fe)](',')['map'](_0x4faed2=>Number(_0x4faed2));this['_alertBlockVisionTags']=this[_0x5a6bf2(0x193)][_0x5a6bf2(0xae)](_0x281142);}else _0x27f68a[_0x5a6bf2(0xb0)]['Sprite_Character_update']['call'](this),this['updateEncounterEffects']();}if(_0x446351[_0x5a6bf2(0x184)](_0x19aab5[_0x5a6bf2(0x1c6)])){const _0x5e1d56=String(RegExp['$1'])['split'](',')[_0x5a6bf2(0xd5)](_0x19bc60=>Number(_0x19bc60));this[_0x5a6bf2(0x107)]=this[_0x5a6bf2(0x107)][_0x5a6bf2(0xae)](_0x5e1d56);}},Game_Map[_0x49b25e(0x228)][_0x49b25e(0x101)]=function(_0x47a7c7,_0x14fba7){const _0x48ea9f=_0x49b25e;if(this['_alertBlockVisionTags']===undefined)return![];if(this[_0x48ea9f(0x107)]===undefined)return![];const _0x539f47=this[_0x48ea9f(0x1be)](_0x47a7c7,_0x14fba7);if(this[_0x48ea9f(0x193)][_0x48ea9f(0x223)](_0x539f47))return!![];const _0x2bb32c=this[_0x48ea9f(0xb7)](_0x47a7c7,_0x14fba7);if(this[_0x48ea9f(0x107)][_0x48ea9f(0x223)](_0x2bb32c))return!![];return![];},Game_CharacterBase[_0x49b25e(0x228)][_0x49b25e(0x143)]=function(_0x48c72d){const _0x524d20=_0x49b25e;return;console[_0x524d20(0x1b7)](_0x524d20(0x216)+this['x']+_0x524d20(0x1aa)+this['y']),console['log']('Event\x20X:\x20'+_0x48c72d['x']+_0x524d20(0x1ce)+_0x48c72d['y']);},Game_CharacterBase[_0x49b25e(0x228)][_0x49b25e(0x19b)]=function(_0x237cd7){const _0x13d75a=_0x49b25e;switch(this['direction']()){case 0x1:return[0x8,0x9,0x6]['contains'](_0x237cd7[_0x13d75a(0x1e6)]());case 0x2:return[0x7,0x8,0x9][_0x13d75a(0x15d)](_0x237cd7[_0x13d75a(0x1e6)]());case 0x3:return[0x4,0x7,0x8][_0x13d75a(0x15d)](_0x237cd7[_0x13d75a(0x1e6)]());case 0x4:return[0x9,0x6,0x3][_0x13d75a(0x15d)](_0x237cd7['direction']());case 0x6:return[0x7,0x4,0x1][_0x13d75a(0x15d)](_0x237cd7[_0x13d75a(0x1e6)]());case 0x7:return[0x2,0x3,0x6][_0x13d75a(0x15d)](_0x237cd7[_0x13d75a(0x1e6)]());case 0x8:return[0x1,0x2,0x3][_0x13d75a(0x15d)](_0x237cd7[_0x13d75a(0x1e6)]());case 0x9:return[0x4,0x1,0x2]['contains'](_0x237cd7['direction']());}return![];},Game_CharacterBase[_0x49b25e(0x228)][_0x49b25e(0x190)]=function(_0x389648){const _0x5c9b6c=_0x49b25e;switch(this[_0x5c9b6c(0x1e6)]()){case 0x1:return[0x4,0x1,0x2][_0x5c9b6c(0x15d)](_0x389648[_0x5c9b6c(0x1e6)]());case 0x2:return[0x1,0x2,0x3][_0x5c9b6c(0x15d)](_0x389648[_0x5c9b6c(0x1e6)]());case 0x3:return[0x2,0x3,0x6][_0x5c9b6c(0x15d)](_0x389648[_0x5c9b6c(0x1e6)]());case 0x4:return[0x7,0x4,0x1]['contains'](_0x389648[_0x5c9b6c(0x1e6)]());case 0x6:return[0x9,0x6,0x3]['contains'](_0x389648[_0x5c9b6c(0x1e6)]());case 0x7:return[0x4,0x7,0x8][_0x5c9b6c(0x15d)](_0x389648['direction']());case 0x8:return[0x7,0x8,0x9][_0x5c9b6c(0x15d)](_0x389648[_0x5c9b6c(0x1e6)]());case 0x9:return[0x8,0x9,0x6][_0x5c9b6c(0x15d)](_0x389648[_0x5c9b6c(0x1e6)]());}return![];},Game_CharacterBase[_0x49b25e(0x228)][_0x49b25e(0x10d)]=function(_0x4cc0fd){const _0x480520=_0x49b25e;switch(this[_0x480520(0x1e6)]()){case 0x1:return[0x4,0x7,0x8,0x2,0x3,0x6][_0x480520(0x15d)](_0x4cc0fd[_0x480520(0x1e6)]());case 0x2:return[0x7,0x4,0x1,0x9,0x6,0x3][_0x480520(0x15d)](_0x4cc0fd[_0x480520(0x1e6)]());case 0x3:return[0x4,0x1,0x2,0x8,0x9,0x6]['contains'](_0x4cc0fd[_0x480520(0x1e6)]());case 0x4:return[0x7,0x8,0x9,0x1,0x2,0x3]['contains'](_0x4cc0fd['direction']());case 0x6:return[0x7,0x8,0x9,0x1,0x2,0x3][_0x480520(0x15d)](_0x4cc0fd[_0x480520(0x1e6)]());case 0x7:return[0x4,0x1,0x2,0x8,0x9,0x6]['contains'](_0x4cc0fd[_0x480520(0x1e6)]());case 0x8:return[0x7,0x4,0x1,0x9,0x6,0x3][_0x480520(0x15d)](_0x4cc0fd[_0x480520(0x1e6)]());case 0x9:return[0x4,0x7,0x8,0x2,0x3,0x6][_0x480520(0x15d)](_0x4cc0fd[_0x480520(0x1e6)]());}return![];},Game_CharacterBase[_0x49b25e(0x228)]['isPositionFrontOf']=function(_0x32699f){const _0x3f89a4=_0x49b25e;this['debugShowDirections'](_0x32699f);switch(this[_0x3f89a4(0x1e6)]()){case 0x1:return _0x32699f['y']>this['y'];case 0x2:return _0x32699f['y']>this['y'];case 0x3:return _0x32699f['y']>this['y'];case 0x4:return _0x32699f['x']<this['x'];case 0x6:return _0x32699f['x']>this['x'];case 0x7:return _0x32699f['y']<this['y'];case 0x8:return _0x32699f['y']<this['y'];case 0x9:return _0x32699f['y']<this['y'];}return![];},Game_CharacterBase[_0x49b25e(0x228)][_0x49b25e(0x19a)]=function(_0x1d0144){const _0x5a790e=_0x49b25e;this[_0x5a790e(0x143)](_0x1d0144);switch(this[_0x5a790e(0x1e6)]()){case 0x1:return _0x1d0144['y']<this['y'];case 0x2:return _0x1d0144['y']<this['y'];case 0x3:return _0x1d0144['y']<this['y'];case 0x4:return _0x1d0144['x']>this['x'];case 0x6:return _0x1d0144['x']<this['x'];case 0x7:return _0x1d0144['y']>this['y'];case 0x8:return _0x1d0144['y']>this['y'];case 0x9:return _0x1d0144['y']>this['y'];}return![];},Game_CharacterBase[_0x49b25e(0x228)][_0x49b25e(0x13e)]=function(_0x42abbd){const _0x37d6d2=_0x49b25e;this[_0x37d6d2(0x143)](_0x42abbd);switch(this['direction']()){case 0x1:return this['x']<_0x42abbd['x']&&this['y']>_0x42abbd['y']||this['x']>_0x42abbd['x']&&this['y']<_0x42abbd['y'];case 0x2:return this['x']!==_0x42abbd['x'];case 0x3:return this['x']>_0x42abbd['x']&&this['y']>_0x42abbd['y']||this['x']<_0x42abbd['x']&&this['y']<_0x42abbd['y'];case 0x4:return this['y']!==_0x42abbd['y'];break;case 0x6:return this['y']!==_0x42abbd['y'];break;case 0x7:return this['x']>_0x42abbd['x']&&this['y']>_0x42abbd['y']||this['x']<_0x42abbd['x']&&this['y']<_0x42abbd['y'];case 0x8:return this['x']!==_0x42abbd['x'];case 0x9:return this['x']<_0x42abbd['x']&&this['y']>_0x42abbd['y']||this['x']>_0x42abbd['x']&&this['y']<_0x42abbd['y'];}return![];},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0xa1)]=Game_Player['prototype'][_0x49b25e(0x217)],Game_Player[_0x49b25e(0x228)][_0x49b25e(0x217)]=function(){const _0x587636=_0x49b25e;VisuMZ['EncounterEffects']['Game_Player_initMembers']['call'](this),this[_0x587636(0xc5)]();},Game_Player['prototype'][_0x49b25e(0xc5)]=function(){const _0x26a8ec=_0x49b25e;this[_0x26a8ec(0x10e)]=![];},Game_Player[_0x49b25e(0x228)][_0x49b25e(0x199)]=function(){const _0x31affa=_0x49b25e;return this[_0x31affa(0x10e)]===undefined&&this[_0x31affa(0xc5)](),this[_0x31affa(0x10e)];},Game_Player[_0x49b25e(0x228)]['setAlertStealthMode']=function(_0x34da20){const _0x451205=_0x49b25e;if(this[_0x451205(0x10e)]===undefined){if(_0x451205(0x21d)!=='eihME'){const _0x1ba7b1=this['x'],_0x3626cc=this['y'],_0x533a91=_0x1c9f6a['x'],_0x9c226a=_0x36f37f['y'];let _0x39078c=_0x1cd632[_0x451205(0xbf)](_0x9c226a-_0x3626cc,_0x533a91-_0x1ba7b1)*0xb4/_0x57ddf6['PI'];if(!_0x4c3793){const _0x403a4d=[0x0,0xe1,0x10e,0x13b,0xb4,0x0,0x0,0x87,0x5a,0x2d][this[_0x451205(0x1e6)]()];_0x39078c+=_0x403a4d,_0x39078c+=this['chaseData']()['fovAngle']/0x2;}while(_0x39078c<0x0)_0x39078c+=0x168;while(_0x39078c>=0x168)_0x39078c-=0x168;return _0x39078c;}else this[_0x451205(0xc5)]();}this[_0x451205(0x10e)]=_0x34da20;},Game_Player[_0x49b25e(0x228)]['encounterProgressValue']=function(){const _0x4bd585=_0x49b25e;if(this[_0x4bd585(0x1dd)]())return this['processRepelEncounters'](),0x0;const _0x1858d5=VisuMZ[_0x4bd585(0xb0)][_0x4bd585(0xe0)][_0x4bd585(0x1f5)];if(!_0x1858d5)return 0x1;let _0x403372=0x1;$gameMap['isBush'](this['x'],this['y'])&&(_0x4bd585(0x16e)===_0x4bd585(0x20f)?(_0x13c88e--,_0x1b90a5[_0x4bd585(0xd7)](_0x5319b1[_0x4bd585(0xe7)],_0x28078c),_0x257244<=0x0&&_0x569d21[_0x4bd585(0x15c)]>0x0&&_0x22b8d5[_0x4bd585(0xea)](_0x6f84fd[_0x4bd585(0x15c)])):_0x403372*=_0x1858d5[_0x4bd585(0x1bd)]);$gameParty[_0x4bd585(0xdd)]()&&(_0x403372*=0.5);this[_0x4bd585(0x1c4)]()&&(_0x403372*=_0x1858d5[_0x4bd585(0xc3)]);this[_0x4bd585(0x131)]()&&(_0x403372*=_0x1858d5[_0x4bd585(0xd2)]);if(this[_0x4bd585(0x1e8)]()){if(_0x4bd585(0x1c3)===_0x4bd585(0x14f)){const _0x2cee75=_0x5c8440[_0x4bd585(0xb0)][_0x4bd585(0xe0)][_0x4bd585(0x1c9)];if(!_0x2cee75)return;if(_0x2cee75[_0x4bd585(0x1bf)]<=0x0)return;let _0x2889f1=_0x97bb53[_0x4bd585(0xaa)](_0x2cee75['RepelVariable'])||0x0;const _0x2fa6d6=_0x2889f1>0x0;_0x2fa6d6&&(_0x2889f1--,_0x17606a[_0x4bd585(0xd7)](_0x2cee75[_0x4bd585(0x1bf)],_0x2889f1),_0x2889f1<=0x0&&_0x2cee75['RepelEvent']>0x0&&_0x432862[_0x4bd585(0xea)](_0x2cee75['RepelEvent']));}else _0x403372=this[_0x4bd585(0x130)](_0x403372);}return _0x403372;},Game_Player['prototype'][_0x49b25e(0x1dd)]=function(){const _0x40384a=_0x49b25e,_0x42520f=VisuMZ['EncounterEffects']['Settings'][_0x40384a(0x1c9)];if(!_0x42520f)return![];if(_0x42520f[_0x40384a(0x1bf)]<=0x0)return![];const _0x27d517=$gameVariables[_0x40384a(0xaa)](_0x42520f[_0x40384a(0x1bf)])||0x0;return _0x27d517>0x0;},Game_Player[_0x49b25e(0x228)]['processRepelEncounters']=function(){const _0x40b27d=_0x49b25e,_0x20d8f2=VisuMZ[_0x40b27d(0xb0)][_0x40b27d(0xe0)][_0x40b27d(0x1c9)];if(!_0x20d8f2)return;if(_0x20d8f2[_0x40b27d(0x1bf)]<=0x0)return;let _0x116e3a=$gameVariables[_0x40b27d(0xaa)](_0x20d8f2[_0x40b27d(0x1bf)])||0x0;const _0x255328=_0x116e3a>0x0;_0x255328&&(_0x116e3a--,$gameVariables[_0x40b27d(0xd7)](_0x20d8f2['RepelVariable'],_0x116e3a),_0x116e3a<=0x0&&_0x20d8f2[_0x40b27d(0x220)]>0x0&&(_0x40b27d(0x14e)===_0x40b27d(0x14e)?$gameTemp['reserveCommonEvent'](_0x20d8f2[_0x40b27d(0x220)]):this[_0x40b27d(0xcb)]()));},Game_Player[_0x49b25e(0x228)][_0x49b25e(0x1e8)]=function(){const _0x1540d9=_0x49b25e,_0xd1b982=VisuMZ['EncounterEffects'][_0x1540d9(0xe0)][_0x1540d9(0x1c9)];if(!_0xd1b982)return![];if(_0xd1b982[_0x1540d9(0xe7)]<=0x0)return![];const _0xdce045=$gameVariables[_0x1540d9(0xaa)](_0xd1b982[_0x1540d9(0xe7)])||0x0;return _0xdce045>0x0;},Game_Player[_0x49b25e(0x228)]['processLureEncounters']=function(_0x3a81ff){const _0x2fa9d7=_0x49b25e,_0x505ca3=VisuMZ[_0x2fa9d7(0xb0)][_0x2fa9d7(0xe0)][_0x2fa9d7(0x1c9)];if(!_0x505ca3)return _0x3a81ff;if(_0x505ca3[_0x2fa9d7(0xe7)]<=0x0)return _0x3a81ff;let _0x4323a5=$gameVariables[_0x2fa9d7(0xaa)](_0x505ca3[_0x2fa9d7(0xe7)])||0x0;const _0x335030=_0x4323a5>0x0;if(_0x335030){if('IEFpH'!==_0x2fa9d7(0x210)){const _0x4103ea=this['x'],_0x1adc73=this['y'],_0x5384d9=_0x40d22d['x'],_0x1c071c=_0x588172['y'],_0x527f2b=_0x4f4f4b[_0x2fa9d7(0xc4)](_0x5384d9-_0x4103ea,0x2),_0x1cb31e=_0x575fa5[_0x2fa9d7(0xc4)](_0x1c071c-_0x1adc73,0x2);return _0x4262cc[_0x2fa9d7(0x1f3)](_0x527f2b+_0x1cb31e);}else _0x4323a5--,$gameVariables[_0x2fa9d7(0xd7)](_0x505ca3[_0x2fa9d7(0xe7)],_0x4323a5),_0x4323a5<=0x0&&_0x505ca3[_0x2fa9d7(0x15c)]>0x0&&('uAyyG'===_0x2fa9d7(0xf7)?this[_0x2fa9d7(0x129)]():$gameTemp[_0x2fa9d7(0xea)](_0x505ca3['LureEvent']));}return _0x3a81ff*=_0x505ca3[_0x2fa9d7(0x12c)],_0x3a81ff+=_0x505ca3['LureFlat'],_0x3a81ff;},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0xc9)]=Game_Event[_0x49b25e(0x228)][_0x49b25e(0x1db)],Game_Event[_0x49b25e(0x228)][_0x49b25e(0x1db)]=function(){const _0x372c3c=_0x49b25e;VisuMZ['EncounterEffects'][_0x372c3c(0xc9)][_0x372c3c(0x16d)](this),this[_0x372c3c(0x200)]();},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0x113)]=Game_Event[_0x49b25e(0x228)]['setupPageSettings'],Game_Event[_0x49b25e(0x228)][_0x49b25e(0x158)]=function(){const _0x473eba=_0x49b25e;VisuMZ['EncounterEffects'][_0x473eba(0x113)][_0x473eba(0x16d)](this),this[_0x473eba(0x1b3)]();},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x1b3)]=function(){const _0x4d6139=_0x49b25e;this[_0x4d6139(0x200)](),this[_0x4d6139(0xf5)](),this[_0x4d6139(0xa5)]();},Game_Event[_0x49b25e(0x228)][_0x49b25e(0xf5)]=function(_0xe9d308){const _0x513db6=_0x49b25e;if(!this[_0x513db6(0x1e5)]())return;const _0x404dc7=this['event']()['note'];if(_0x404dc7==='')return;this['checkEncounterEffectsStringTags'](_0x404dc7);},Game_Event[_0x49b25e(0x228)]['setupEncounterEffectsCommentTags']=function(_0x3b1ac9){const _0x10c34=_0x49b25e;if(!this['event']())return;if(!this[_0x10c34(0x18c)]())return;const _0x3a9343=this[_0x10c34(0x1a0)]();let _0x2d271d='';for(const _0x33bf7b of _0x3a9343){if([0x6c,0x198]['includes'](_0x33bf7b[_0x10c34(0x1f9)])){if(_0x10c34(0xb1)!==_0x10c34(0xb3)){if(_0x2d271d!=='')_0x2d271d+='\x0a';_0x2d271d+=_0x33bf7b[_0x10c34(0x1c7)][0x0];}else{_0x371eaa[_0x10c34(0x228)][_0x10c34(0xa4)]['call'](this);if(!this['_character'])return;if(this[_0x10c34(0xef)]['constructor']!==_0x62127a)return;this['updateBitmap']();if(!this['_data'][_0x10c34(0x149)])return;this[_0x10c34(0x156)](),this[_0x10c34(0x169)]();}}}this['checkEncounterEffectsStringTags'](_0x2d271d);},Game_Event['prototype'][_0x49b25e(0x200)]=function(){const _0x16e256=_0x49b25e;this['_EncounterEffectsFollowerTrigger']=![],this[_0x16e256(0x172)]=![],this[_0x16e256(0x11d)]();},Game_Event[_0x49b25e(0x228)][_0x49b25e(0xd6)]=function(_0x4956c4){const _0x317262=_0x49b25e,_0x372002=VisuMZ[_0x317262(0xb0)][_0x317262(0x1d0)];_0x4956c4[_0x317262(0x184)](_0x372002[_0x317262(0x13b)])&&(this[_0x317262(0x1ad)]=!![],this['_trigger']=0x2),_0x4956c4[_0x317262(0x184)](_0x372002['TouchDirectionLock'])&&(_0x317262(0x171)===_0x317262(0x1e7)?(_0x4510dd=this[_0x317262(0x1f2)](_0x12556f,_0x14399f),this[_0x317262(0x17a)](_0x3585ef)):this['_EncounterEffectsTouchDirectionLock']=!![]),this[_0x317262(0x18f)](_0x4956c4);},VisuMZ[_0x49b25e(0xb0)]['Game_Event_checkEventTriggerTouch']=Game_Event['prototype'][_0x49b25e(0x11a)],Game_Event[_0x49b25e(0x228)]['checkEventTriggerTouch']=function(_0x32603c,_0x2dc743){const _0x2281ea=_0x49b25e;VisuMZ['EncounterEffects'][_0x2281ea(0x11f)][_0x2281ea(0x16d)](this,_0x32603c,_0x2dc743),this[_0x2281ea(0x1f6)](_0x32603c,_0x2dc743);},Game_Event['prototype'][_0x49b25e(0x1f6)]=function(_0x4c670e,_0x18c162){const _0x56dba2=_0x49b25e;if(!this[_0x56dba2(0x1ad)])return;if($gameMap[_0x56dba2(0x1a4)]())return;if(this[_0x56dba2(0x150)]!==0x2)return;if(this[_0x56dba2(0xf3)]())return;if(!this[_0x56dba2(0x19c)]())return;const _0xe73b04=$gamePlayer[_0x56dba2(0xfa)]()[_0x56dba2(0x166)]();for(const _0x5b1371 of _0xe73b04){if(!_0x5b1371)continue;if(_0x5b1371[_0x56dba2(0x1fb)](_0x4c670e,_0x18c162)){this[_0x56dba2(0x1ef)]();break;}}},VisuMZ['EncounterEffects'][_0x49b25e(0x1cc)]=Game_Event[_0x49b25e(0x228)][_0x49b25e(0xfe)],Game_Event[_0x49b25e(0x228)][_0x49b25e(0xfe)]=function(){const _0xd7820e=_0x49b25e;this[_0xd7820e(0xac)]=!!this['_EncounterEffectsTouchDirectionLock'],VisuMZ[_0xd7820e(0xb0)][_0xd7820e(0x1cc)][_0xd7820e(0x16d)](this),this[_0xd7820e(0xac)]=undefined;},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0x201)]=Game_Character[_0x49b25e(0x228)]['turnTowardPlayer'],Game_Character[_0x49b25e(0x228)][_0x49b25e(0x1de)]=function(){const _0x30a00c=_0x49b25e;if(this[_0x30a00c(0xac)])return;VisuMZ['EncounterEffects'][_0x30a00c(0x201)][_0x30a00c(0x16d)](this);},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x11d)]=function(){const _0xc58958=_0x49b25e,_0x2829d7=VisuMZ[_0xc58958(0xb0)]['Settings'][_0xc58958(0x196)];this['_EncounterEffects_EventChaseData']={'enabled':![],'alerted':![],'alertRange':_0x2829d7[_0xc58958(0xed)],'alertDash':_0x2829d7[_0xc58958(0xce)],'alertLock':_0x2829d7['AlertLock'],'chaseTime':_0x2829d7[_0xc58958(0x10f)],'fovAngle':_0x2829d7[_0xc58958(0xfb)],'showFov':_0x2829d7[_0xc58958(0x1ed)],'response':_0x2829d7[_0xc58958(0x1fa)],'alertBalloon':VisuMZ[_0xc58958(0xb0)][_0xc58958(0x164)](_0x2829d7[_0xc58958(0x125)]),'commonEvent':_0x2829d7[_0xc58958(0x183)],'reactDelay':_0x2829d7[_0xc58958(0x1bb)],'reactTime':_0x2829d7['ReactDelay'],'alertSoundName':_0x2829d7[_0xc58958(0xc0)],'alertSoundVolume':_0x2829d7[_0xc58958(0x212)],'alertSoundPitch':_0x2829d7[_0xc58958(0xc2)],'alertSoundPan':_0x2829d7[_0xc58958(0x116)],'returnStartBalloon':VisuMZ[_0xc58958(0xb0)][_0xc58958(0x164)](_0x2829d7[_0xc58958(0x21e)]),'returnEndBalloon':VisuMZ[_0xc58958(0xb0)][_0xc58958(0x164)](_0x2829d7['ReturnEndBalloon']),'returnAfter':_0x2829d7[_0xc58958(0x1ea)],'returnWaiting':![],'returnTime':_0x2829d7[_0xc58958(0x13a)],'returnWait':_0x2829d7[_0xc58958(0x13a)],'returning':![],'returnX':this['x'],'returnY':this['y'],'returnDir':this[_0xc58958(0x1e6)]()};},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0x164)]=function(_0x55bc8b){const _0x5e3749=_0x49b25e;let _0x373b76=0x0;switch(_0x55bc8b['toUpperCase']()[_0x5e3749(0x21f)]()){case'!':case _0x5e3749(0x1e9):_0x373b76=0x1;break;case'?':case'QUESTION':_0x373b76=0x2;break;case _0x5e3749(0x22d):case'NOTE':case _0x5e3749(0x1af):case'MUSIC-NOTE':case _0x5e3749(0x22c):_0x373b76=0x3;break;case _0x5e3749(0x1a5):case'LOVE':_0x373b76=0x4;break;case'ANGER':_0x373b76=0x5;break;case _0x5e3749(0x104):_0x373b76=0x6;break;case _0x5e3749(0x128):case _0x5e3749(0xe3):case _0x5e3749(0x229):_0x373b76=0x7;break;case _0x5e3749(0xcc):case _0x5e3749(0x159):_0x373b76=0x8;break;case _0x5e3749(0x18a):case'BULB':case _0x5e3749(0x133):case _0x5e3749(0x147):case _0x5e3749(0x194):_0x373b76=0x9;break;case'Z':case'ZZ':case _0x5e3749(0xf0):case'SLEEP':_0x373b76=0xa;break;case'USER-DEFINED\x201':_0x373b76=0xb;break;case _0x5e3749(0x100):_0x373b76=0xc;break;case _0x5e3749(0x17c):_0x373b76=0xd;break;case _0x5e3749(0x1b0):_0x373b76=0xe;break;case _0x5e3749(0x1d1):_0x373b76=0xf;break;}return _0x373b76;},Game_Event[_0x49b25e(0x228)]['checkEncounterEffectsStringTagsChase']=function(_0x5b092e){const _0x74f5df=_0x49b25e,_0x42995b=VisuMZ[_0x74f5df(0xb0)][_0x74f5df(0x1d0)],_0x3d1ea8=this[_0x74f5df(0x110)];_0x5b092e[_0x74f5df(0x184)](_0x42995b['AlertDefault'])&&(_0x3d1ea8[_0x74f5df(0x149)]=!![]);_0x5b092e[_0x74f5df(0x184)](_0x42995b[_0x74f5df(0xed)])&&(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x20e)]=Number(RegExp['$1'])||0x1);_0x5b092e[_0x74f5df(0x184)](_0x42995b['AlertDash'])&&(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x12a)]=![]);_0x5b092e[_0x74f5df(0x184)](_0x42995b[_0x74f5df(0x179)])&&(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x12a)]=![]);_0x5b092e[_0x74f5df(0x184)](_0x42995b['AlertLock'])&&(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x16f)]=Number(RegExp['$1'])||0x1,_0x3d1ea8[_0x74f5df(0x118)]=Number(RegExp['$1'])||0x1);if(_0x5b092e[_0x74f5df(0x184)](_0x42995b['AlertFovAngle'])){if(_0x74f5df(0x1b4)!==_0x74f5df(0x1b4)){const _0x13f34d=this['context'],_0x238165=_0x1675d5*(_0x47081e['PI']/0xb4),_0xe49465=_0x57c731*0x2,_0x37138b=_0x13f34d[_0x74f5df(0x14b)](_0x196697,_0x31667f,0x18,_0x63f66c,_0x34e353,_0x5acc6d);_0x37138b[_0x74f5df(0x138)](0x0,_0x4514fe),_0x37138b[_0x74f5df(0x138)](0.85,_0x496200),_0x37138b['addColorStop'](0x1,_0x4f1a81),_0x13f34d[_0x74f5df(0xeb)](),_0x13f34d[_0x74f5df(0x15b)]=_0x37138b,_0x13f34d[_0x74f5df(0x182)](),_0x13f34d[_0x74f5df(0xba)](_0x5b6819,_0x38f50d),_0x13f34d['lineTo'](_0xe49465,_0x4f2658),_0x13f34d[_0x74f5df(0xfd)](_0x55946c,_0xe5979d,_0x540738,0x0,_0x238165),_0x13f34d[_0x74f5df(0xf4)](_0xe5fe17,_0x28af18),_0x13f34d[_0x74f5df(0x142)](),_0x13f34d['restore'](),this[_0x74f5df(0x162)][_0x74f5df(0xa4)]();}else _0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x22a)]=Number(RegExp['$1'])||0x1;}_0x5b092e['match'](_0x42995b[_0x74f5df(0xbc)])&&('CGSke'!==_0x74f5df(0x141)?(_0x3d1ea8['enabled']=!![],_0x3d1ea8[_0x74f5df(0x17e)]=!![]):this[_0x74f5df(0xc5)]());if(_0x5b092e['match'](_0x42995b[_0x74f5df(0x185)])){if(_0x74f5df(0x16b)===_0x74f5df(0x16b))_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x17e)]=![];else{if(!this[_0x74f5df(0x13c)]())return;this['isChaseAlerted']()?this[_0x74f5df(0x1a6)]():(this[_0x74f5df(0xd1)](),this[_0x74f5df(0x198)]());}}if(_0x5b092e[_0x74f5df(0x184)](_0x42995b['AlertResponse'])){if(_0x74f5df(0x208)!==_0x74f5df(0x208)){_0x202d00[_0x74f5df(0x149)]=!![];const _0x5f5787=_0x555843['EncounterEffects'][_0x74f5df(0x164)](_0x2a676(_0x246591['$1']));_0x957fff['alertBalloon']=_0x5f5787;}else _0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8['response']=String(RegExp['$1'])['toLowerCase']()[_0x74f5df(0x21f)]();}if(_0x5b092e[_0x74f5df(0x184)](_0x42995b[_0x74f5df(0x1d7)])){_0x3d1ea8[_0x74f5df(0x149)]=!![];const _0x29abc4=VisuMZ[_0x74f5df(0xb0)][_0x74f5df(0x164)](String(RegExp['$1']));_0x3d1ea8[_0x74f5df(0x187)]=_0x29abc4;}_0x5b092e[_0x74f5df(0x184)](_0x42995b[_0x74f5df(0x127)])&&(_0x74f5df(0x132)!=='LxpJI'?(this['x']=this[_0x74f5df(0xe1)]['x'],this['y']=this[_0x74f5df(0xe1)]['y']-this[_0x74f5df(0xe1)][_0x74f5df(0x10c)]/0x2):(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x15f)]=Number(RegExp['$1'])||0x1,_0x3d1ea8['reactTime']=Number(RegExp['$1'])||0x1));_0x5b092e[_0x74f5df(0x184)](_0x42995b[_0x74f5df(0x9a)])&&(_0x74f5df(0x1c5)!=='tEyhe'?_0x45a694=_0x48c9ec[_0x74f5df(0x168)]||0x0:(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x214)]=Number(RegExp['$1'])||0x0));_0x5b092e['match'](_0x42995b[_0x74f5df(0x134)])&&(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x139)]=String(RegExp['$1']));_0x5b092e[_0x74f5df(0x184)](_0x42995b['AlertSoundVolume'])&&(_0x74f5df(0x14a)==='jUjQN'?(_0x35a56f[_0x74f5df(0x149)]=!![],_0x3a05e8[_0x74f5df(0x15f)]=_0x334a84(_0x455f72['$1'])||0x1,_0x790161[_0x74f5df(0x10b)]=_0xba2bf9(_0x14528b['$1'])||0x1):(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x103)]=Number(RegExp['$1'])||0x1));_0x5b092e[_0x74f5df(0x184)](_0x42995b['AlertSoundPitch'])&&(_0x74f5df(0xf1)===_0x74f5df(0x18d)?_0x103d07=_0x60248f['Normal']||0x0:(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x215)]=Number(RegExp['$1'])||0x1));_0x5b092e[_0x74f5df(0x184)](_0x42995b['AlertSoundPan'])&&(_0x74f5df(0x191)!==_0x74f5df(0x191)?_0x13df3f['requestBalloon'](this,_0x5c1077[_0x74f5df(0x1fc)]):(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x1a8)]=Number(RegExp['$1'])||0x1));_0x5b092e['match'](_0x42995b[_0x74f5df(0x1d3)])&&(_0x3d1ea8['enabled']=!![],_0x3d1ea8[_0x74f5df(0x1b9)]=!![]);_0x5b092e[_0x74f5df(0x184)](_0x42995b['StayPosition'])&&(_0x3d1ea8[_0x74f5df(0x149)]=!![],_0x3d1ea8[_0x74f5df(0x1b9)]=![]);if(_0x5b092e[_0x74f5df(0x184)](_0x42995b[_0x74f5df(0x21e)])){_0x3d1ea8[_0x74f5df(0x149)]=!![];const _0x564568=VisuMZ[_0x74f5df(0xb0)][_0x74f5df(0x164)](String(RegExp['$1']));_0x3d1ea8['returnStartBalloon']=_0x564568;}if(_0x5b092e['match'](_0x42995b[_0x74f5df(0x160)])){if('malkq'===_0x74f5df(0x1d6)){_0x3d1ea8[_0x74f5df(0x149)]=!![];const _0x10c5dd=VisuMZ[_0x74f5df(0xb0)][_0x74f5df(0x164)](String(RegExp['$1']));_0x3d1ea8[_0x74f5df(0x1fc)]=_0x10c5dd;}else _0x3ff02f[_0x74f5df(0x149)]=!![],_0x1ffbd1[_0x74f5df(0x12a)]=![];}_0x5b092e['match'](_0x42995b[_0x74f5df(0x13a)])&&(_0x3d1ea8['enabled']=!![],_0x3d1ea8['returnTime']=Number(RegExp['$1'])||0x1,_0x3d1ea8[_0x74f5df(0x109)]=Number(RegExp['$1'])||0x1);},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x1cd)]=function(){const _0x833c2c=_0x49b25e;return this[_0x833c2c(0x110)]===undefined&&this[_0x833c2c(0xdf)](),this['_EncounterEffects_EventChaseData'];},Game_Event[_0x49b25e(0x228)]['isChaseEnabled']=function(){const _0x3888fa=_0x49b25e;if(this[_0x3888fa(0xa6)])return![];return this[_0x3888fa(0x1cd)]()['enabled'];},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x1e2)]=function(){const _0x55a7a1=_0x49b25e;return this[_0x55a7a1(0x1cd)]()[_0x55a7a1(0x155)]||this[_0x55a7a1(0x1cd)]()[_0x55a7a1(0xca)];},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x154)]=function(){const _0x60a14c=_0x49b25e;return this[_0x60a14c(0x1cd)]()[_0x60a14c(0x105)];},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0x1cb)]=Game_Event[_0x49b25e(0x228)][_0x49b25e(0x12e)],Game_Event['prototype'][_0x49b25e(0x12e)]=function(){const _0x1c23a6=_0x49b25e;if(this[_0x1c23a6(0x154)]())this['updateSelfMovementAlerted']();else{if(this[_0x1c23a6(0x1e2)]())this[_0x1c23a6(0xb4)]();else{if(_0x1c23a6(0x13f)==='prJzJ')VisuMZ['EncounterEffects'][_0x1c23a6(0x1cb)]['call'](this);else{const _0x4793b3=_0x586229[_0x1c23a6(0xb0)][_0x1c23a6(0xe0)][_0x1c23a6(0x1c9)];if(!_0x4793b3)return _0x535292;if(_0x4793b3[_0x1c23a6(0xe7)]<=0x0)return _0x341acd;let _0x191d01=_0x2242de[_0x1c23a6(0xaa)](_0x4793b3[_0x1c23a6(0xe7)])||0x0;const _0x525315=_0x191d01>0x0;return _0x525315&&(_0x191d01--,_0x5554ff[_0x1c23a6(0xd7)](_0x4793b3[_0x1c23a6(0xe7)],_0x191d01),_0x191d01<=0x0&&_0x4793b3[_0x1c23a6(0x15c)]>0x0&&_0x5cdf08[_0x1c23a6(0xea)](_0x4793b3[_0x1c23a6(0x15c)])),_0x7aaaf*=_0x4793b3[_0x1c23a6(0x12c)],_0x1fba9d+=_0x4793b3[_0x1c23a6(0xab)],_0x44f3b1;}}}},Game_Event['prototype'][_0x49b25e(0x12f)]=function(){const _0x44de3b=_0x49b25e,_0x3920e0=this[_0x44de3b(0x1cd)]();if(_0x3920e0[_0x44de3b(0x10b)]>0x0){_0x3920e0['reactTime']-=0x1;return;}switch(_0x3920e0[_0x44de3b(0x1bc)]){case _0x44de3b(0x21b):this[_0x44de3b(0xd9)]();break;case _0x44de3b(0x213):this['moveTowardPlayer']();break;case'flee':this[_0x44de3b(0x13d)]();break;case _0x44de3b(0x115):this[_0x44de3b(0x222)]();break;default:VisuMZ['EncounterEffects'][_0x44de3b(0x1cb)][_0x44de3b(0x16d)](this);break;}},Game_Event[_0x49b25e(0x228)][_0x49b25e(0xd9)]=function(){const _0x59636b=_0x49b25e;if(!this[_0x59636b(0x1df)]())return;this[_0x59636b(0x226)]=this[_0x59636b(0x226)]||{},this['_eventAlertChaseCache'][_0x59636b(0x153)]=$gamePlayer['x'],this['_eventAlertChaseCache']['playerY']=$gamePlayer['y'],this[_0x59636b(0x226)][_0x59636b(0x177)]=this['x'],this[_0x59636b(0x226)][_0x59636b(0x1dc)]=this['y'];const _0xbc24de=Imported[_0x59636b(0x9b)]&&$gameMap['isSupportDiagonalMovement']();let _0x27dd0a=$gamePlayer['x'],_0x510deb=$gamePlayer['y'],_0x2d1603=0x0;_0xbc24de?(_0x2d1603=this['findDiagonalDirectionTo'](_0x27dd0a,_0x510deb),this['executeMoveDir8'](_0x2d1603)):(_0x2d1603=this[_0x59636b(0x1f2)](_0x27dd0a,_0x510deb),this[_0x59636b(0x17a)](_0x2d1603));},Game_Event['prototype'][_0x49b25e(0x1df)]=function(){const _0x2a74d0=_0x49b25e;if(this[_0x2a74d0(0x144)]())return![];this[_0x2a74d0(0x226)]=this[_0x2a74d0(0x226)]||{};if(this[_0x2a74d0(0x226)][_0x2a74d0(0x153)]!==$gamePlayer['x'])return!![];if(this[_0x2a74d0(0x226)][_0x2a74d0(0x111)]!==$gamePlayer['y'])return!![];if(this[_0x2a74d0(0x226)][_0x2a74d0(0x177)]!==this['x'])return!![];if(this[_0x2a74d0(0x226)]['eventY']!==this['y'])return!![];return![];},Game_Event[_0x49b25e(0x228)]['updateSelfMovementReturnFromChase']=function(){const _0x55c520=_0x49b25e,_0x1ff02d=this[_0x55c520(0x1cd)]();if(!_0x1ff02d['returning'])return;let _0x39c1b8=_0x1ff02d[_0x55c520(0x17b)],_0x485342=_0x1ff02d['returnY'];this['x']===_0x39c1b8&&this['y']===_0x485342&&(_0x55c520(0x186)!=='Evjdn'?(_0x1ff02d[_0x55c520(0xca)]=![],this[_0x55c520(0x1a2)]=0x0,this['setDirection'](_0x1ff02d[_0x55c520(0xad)])):_0x219d48=this[_0x55c520(0x130)](_0x5dc8ae));const _0x36e398=Imported['VisuMZ_1_EventsMoveCore']&&$gameMap[_0x55c520(0x15e)]();let _0x863861=0x0;_0x36e398?(_0x863861=this['findDiagonalDirectionTo'](_0x39c1b8,_0x485342),this[_0x55c520(0x221)](_0x863861)):(_0x863861=this[_0x55c520(0x1f2)](_0x39c1b8,_0x485342),this[_0x55c520(0x17a)](_0x863861));},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0xc1)]=Game_Event[_0x49b25e(0x228)][_0x49b25e(0xa4)],Game_Event[_0x49b25e(0x228)][_0x49b25e(0xa4)]=function(){const _0x479169=_0x49b25e;VisuMZ[_0x479169(0xb0)][_0x479169(0xc1)][_0x479169(0x16d)](this),this[_0x479169(0x1f0)]();},Game_Event['prototype'][_0x49b25e(0x1f0)]=function(){const _0x52929e=_0x49b25e;if(!this[_0x52929e(0x13c)]())return;this['isChaseAlerted']()?this[_0x52929e(0x1a6)]():(this[_0x52929e(0xd1)](),this[_0x52929e(0x198)]());},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x1a6)]=function(){const _0x59fd31=_0x49b25e,_0x17e231=this[_0x59fd31(0x1cd)](),_0x5bdc0a=this[_0x59fd31(0x20d)]();if(_0x5bdc0a>_0x17e231[_0x59fd31(0x20e)]){_0x17e231[_0x59fd31(0x118)]--;if(_0x17e231[_0x59fd31(0x118)]>0x0)return;_0x17e231[_0x59fd31(0x105)]=![];if(_0x17e231['returnAfter']){if(_0x59fd31(0x192)!==_0x59fd31(0xe6))_0x17e231[_0x59fd31(0x155)]=!![],_0x17e231[_0x59fd31(0xf8)]=_0x17e231[_0x59fd31(0x109)],$gameTemp['requestBalloon'](this,_0x17e231[_0x59fd31(0x227)]);else{_0x2c5b6e[_0x59fd31(0x149)]=!![];const _0x4cc88a=_0x15bf1d[_0x59fd31(0xb0)][_0x59fd31(0x164)](_0x1a7140(_0x2524ac['$1']));_0x4d3726[_0x59fd31(0x227)]=_0x4cc88a;}}else{if(_0x59fd31(0xb9)===_0x59fd31(0x1f1)){if(!_0xc7e5cc[_0x59fd31(0xfa)]()[_0x59fd31(0x1ec)])return 0x3e7;const _0x5eba69=_0x302659[_0x59fd31(0xfa)]()[_0x59fd31(0x1b5)](_0x14165b);if(!_0x5eba69[_0x59fd31(0x11e)]())return 0x3e7;return this[_0x59fd31(0x16a)](_0x5eba69);}else $gameTemp['requestBalloon'](this,_0x17e231[_0x59fd31(0x1fc)]);}}else _0x17e231[_0x59fd31(0x118)]=_0x17e231[_0x59fd31(0x16f)];},Game_Event['prototype'][_0x49b25e(0xd1)]=function(){const _0x27e2ab=_0x49b25e,_0x2e97d0=this[_0x27e2ab(0x1cd)]();if(!_0x2e97d0[_0x27e2ab(0x155)])return;_0x2e97d0['returnTime']-=0x1,_0x2e97d0[_0x27e2ab(0xf8)]<=0x0&&(_0x2e97d0[_0x27e2ab(0x155)]=![],_0x2e97d0[_0x27e2ab(0xca)]=!![],$gameTemp[_0x27e2ab(0xfc)](this,_0x2e97d0[_0x27e2ab(0x1fc)]));},Game_Event['prototype']['updateAlertIdle']=function(){const _0x1f7f53=_0x49b25e;if($gamePlayer[_0x1f7f53(0x199)]())return;const _0xecc15c=this[_0x1f7f53(0x1cd)](),_0x558240=Math[_0x1f7f53(0x1c2)](this[_0x1f7f53(0x20d)]());if(_0x558240>_0xecc15c[_0x1f7f53(0x20e)])return;const _0x2f1367=this[_0x1f7f53(0x1c8)]();if(_0x2f1367>_0xecc15c[_0x1f7f53(0x22a)])return;if(!this[_0x1f7f53(0x1b8)]())return;_0xecc15c[_0x1f7f53(0x105)]=!![],_0xecc15c[_0x1f7f53(0x118)]=_0xecc15c[_0x1f7f53(0x16f)],_0xecc15c[_0x1f7f53(0x155)]=![],_0xecc15c[_0x1f7f53(0xca)]=![],$gameTemp[_0x1f7f53(0xfc)](this,_0xecc15c[_0x1f7f53(0x187)]),_0xecc15c[_0x1f7f53(0x10b)]=_0xecc15c[_0x1f7f53(0x15f)];_0xecc15c[_0x1f7f53(0x214)]>0x0&&$gameTemp[_0x1f7f53(0xea)](_0xecc15c[_0x1f7f53(0x214)]);if(_0xecc15c[_0x1f7f53(0x139)]!==''){if(_0x1f7f53(0x19f)===_0x1f7f53(0x19f)){const _0x3e9cb8={'name':_0xecc15c[_0x1f7f53(0x139)],'volume':_0xecc15c[_0x1f7f53(0x103)],'pitch':_0xecc15c[_0x1f7f53(0x215)],'pan':_0xecc15c['alertSoundPan']};AudioManager['playSe'](_0x3e9cb8);}else _0x1d7607['ConvertParams'](_0x342c2e,_0x30954d),_0x1320f6['setForcedAdvantage']([]);}},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x178)]=function(){const _0x47317d=_0x49b25e,_0x3011b6=[$gamePlayer];if($gamePlayer[_0x47317d(0xfa)]()['_visible'])for(let _0x27fe2d=0x0;_0x27fe2d<$gamePlayer[_0x47317d(0xfa)]()['_data'][_0x47317d(0x1a7)];_0x27fe2d++){if(_0x47317d(0xe8)!==_0x47317d(0xe8)){const _0x3006a9=_0x32d3d7(_0x3e003d['$1']);_0x3006a9<_0x3bd274?(_0x7229b3(_0x47317d(0x1e3)[_0x47317d(0x1ae)](_0x3ad32e,_0x3006a9,_0x141582)),_0x57f382[_0x47317d(0x161)]()):_0x26289e=_0x1255e9[_0x47317d(0x1cf)](_0x3006a9,_0x54dc96);}else{const _0x2f20ab=$gamePlayer['followers']()[_0x47317d(0x1b5)](_0x27fe2d);if(!_0x2f20ab)continue;if(!_0x2f20ab[_0x47317d(0x11e)]())continue;_0x3011b6[_0x47317d(0xdc)](_0x2f20ab);}}return _0x3011b6;},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x20d)]=function(){const _0xcfe091=_0x49b25e,_0x52ebff=[];_0x52ebff['push'](this[_0xcfe091(0x218)]());for(let _0x64c303=0x0;_0x64c303<$gamePlayer['followers']()[_0xcfe091(0x22b)]['length'];_0x64c303++){_0x52ebff[_0xcfe091(0xdc)](this[_0xcfe091(0xb6)](_0x64c303));}return Math[_0xcfe091(0x126)](..._0x52ebff);},Game_Event[_0x49b25e(0x228)]['getAlertDistanceToPlayer']=function(){const _0x59be4d=_0x49b25e;return this[_0x59be4d(0x16a)]($gamePlayer);},Game_Event[_0x49b25e(0x228)][_0x49b25e(0xb6)]=function(_0x35abc4){const _0x306495=_0x49b25e;if(!$gamePlayer[_0x306495(0xfa)]()[_0x306495(0x1ec)])return 0x3e7;const _0x4663b5=$gamePlayer[_0x306495(0xfa)]()[_0x306495(0x1b5)](_0x35abc4);if(!_0x4663b5['actor']())return 0x3e7;return this[_0x306495(0x16a)](_0x4663b5);},Game_Event[_0x49b25e(0x228)][_0x49b25e(0x16a)]=function(_0x479ac3){const _0x170574=_0x49b25e,_0x167009=this['x'],_0x195aa2=this['y'],_0x33106b=_0x479ac3['x'],_0xa48e50=_0x479ac3['y'],_0x59ae3e=Math[_0x170574(0xc4)](_0x33106b-_0x167009,0x2),_0x6da44f=Math[_0x170574(0xc4)](_0xa48e50-_0x195aa2,0x2);return Math[_0x170574(0x1f3)](_0x59ae3e+_0x6da44f);},Game_Event[_0x49b25e(0x228)]['getAlertAngleToPlayer']=function(_0x1bf67c){const _0xce9590=_0x49b25e;return this[_0xce9590(0xb2)]($gamePlayer,_0x1bf67c);},Game_Event['prototype'][_0x49b25e(0x117)]=function(_0x46ef58,_0xbb7de6){const _0x1213bc=_0x49b25e;if(!$gamePlayer[_0x1213bc(0xfa)]()[_0x1213bc(0x1ec)])return 0x3e7;const _0x5196a2=$gamePlayer['followers']()[_0x1213bc(0x1b5)](_0x46ef58);if(!_0x5196a2['actor']())return 0x3e7;return this[_0x1213bc(0xb2)](_0x5196a2,_0xbb7de6);},Game_Event[_0x49b25e(0x228)][_0x49b25e(0xb2)]=function(_0x14a8f1,_0x38b005){const _0x13e7c9=_0x49b25e,_0x1d726b=this['x'],_0x2e7f13=this['y'],_0x15e35e=_0x14a8f1['x'],_0x4f7e5d=_0x14a8f1['y'];let _0x2ab4b9=Math[_0x13e7c9(0xbf)](_0x4f7e5d-_0x2e7f13,_0x15e35e-_0x1d726b)*0xb4/Math['PI'];if(!_0x38b005){if('uKTWs'!==_0x13e7c9(0x1d2)){const _0x3c4ded=[0x0,0xe1,0x10e,0x13b,0xb4,0x0,0x0,0x87,0x5a,0x2d][this[_0x13e7c9(0x1e6)]()];_0x2ab4b9+=_0x3c4ded,_0x2ab4b9+=this[_0x13e7c9(0x1cd)]()[_0x13e7c9(0x22a)]/0x2;}else{_0x440c39[_0x13e7c9(0x21a)](_0x56fe4e,_0x496d49);const _0x3e6c69=_0x236f98[_0x13e7c9(0xde)];_0x336c7b[_0x13e7c9(0x9d)](_0x3e6c69);}}while(_0x2ab4b9<0x0)_0x2ab4b9+=0x168;while(_0x2ab4b9>=0x168)_0x2ab4b9-=0x168;return _0x2ab4b9;},Game_Event[_0x49b25e(0x228)]['isAlertLineOfVisionClear']=function(){const _0x390a50=_0x49b25e;let _0x39e858=![];const _0x1d7fcc=this[_0x390a50(0x20d)]();_0x39e858&&(console[_0x390a50(0x1b7)](_0x390a50(0x211),$gamePlayer['x'],$gamePlayer['y']),console['log'](_0x390a50(0x20b),this['x'],this['y']));const _0x2a15a1=this['getAlertTargets']();for(const _0xb7b3a9 of _0x2a15a1){if(!_0xb7b3a9)continue;let _0x67e164=_0x1d7fcc,_0x7b421a=this[_0x390a50(0xb2)](_0xb7b3a9,!![]),_0x4d0e2b=_0x7b421a*Math['PI']/0xb4;while(_0x67e164>=0x0){const _0xabaa3c=Math[_0x390a50(0x1c2)](this['x']+_0x67e164*Math[_0x390a50(0x20c)](_0x4d0e2b)),_0x455183=Math[_0x390a50(0x1c2)](this['y']+_0x67e164*Math['sin'](_0x4d0e2b));_0x67e164-=0x1;_0x39e858&&(_0x390a50(0xee)===_0x390a50(0x189)?this['updateAlertChase']():console[_0x390a50(0x1b7)](_0x390a50(0x119),_0x7b421a,_0x67e164,_0xabaa3c,_0x455183));if($gameMap[_0x390a50(0x101)](_0xabaa3c,_0x455183))return![];}}return!![];},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0x1d4)]=Game_CharacterBase[_0x49b25e(0x228)][_0x49b25e(0xec)],Game_CharacterBase[_0x49b25e(0x228)][_0x49b25e(0xec)]=function(){const _0x47f0e6=_0x49b25e;if(this['constructor']===Game_Event&&this['isChaseAlerted']()&&this[_0x47f0e6(0x1cd)]()[_0x47f0e6(0x12a)])return this['isMovementSucceeded']();return VisuMZ[_0x47f0e6(0xb0)][_0x47f0e6(0x1d4)][_0x47f0e6(0x16d)](this);},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0x114)]=Game_CharacterBase['prototype'][_0x49b25e(0x19e)],Game_CharacterBase['prototype'][_0x49b25e(0x19e)]=function(_0x54021b,_0x53151b){const _0x8bc5c1=_0x49b25e;if(this[_0x8bc5c1(0x180)]===Game_Event){if(this[_0x8bc5c1(0x1e2)]()||this[_0x8bc5c1(0x154)]())return;}VisuMZ['EncounterEffects'][_0x8bc5c1(0x114)][_0x8bc5c1(0x16d)](this,_0x54021b,_0x53151b);},Game_Interpreter['prototype'][_0x49b25e(0x188)]=function(){const _0x1e3a29=_0x49b25e,_0x363dbb=$gameMap[_0x1e3a29(0x1e5)](this[_0x1e3a29(0x1d8)]());if(!_0x363dbb)return![];const _0x140d32=$gamePlayer;return _0x363dbb[_0x1e3a29(0x19b)](_0x140d32)&&_0x140d32[_0x1e3a29(0x203)](_0x363dbb);},Game_Interpreter[_0x49b25e(0x228)][_0x49b25e(0x121)]=function(){const _0x4ab844=_0x49b25e,_0x2cf2d2=$gameMap[_0x4ab844(0x1e5)](this[_0x4ab844(0x1d8)]());if(!_0x2cf2d2)return![];const _0x569169=$gamePlayer;return _0x2cf2d2[_0x4ab844(0x190)](_0x569169)&&_0x569169['isPositionBackOf'](_0x2cf2d2);},Game_Interpreter[_0x49b25e(0x228)][_0x49b25e(0x136)]=function(){const _0x3066fe=_0x49b25e,_0x41a25e=$gameMap[_0x3066fe(0x1e5)](this[_0x3066fe(0x1d8)]());if(!_0x41a25e)return![];const _0x49a535=$gamePlayer;return _0x41a25e[_0x3066fe(0x10d)](_0x49a535)&&_0x49a535[_0x3066fe(0x13e)](_0x41a25e);},Game_Interpreter['prototype'][_0x49b25e(0x1e4)]=function(){const _0xa591b=_0x49b25e,_0x3403f6=$gameMap[_0xa591b(0x1e5)](this[_0xa591b(0x1d8)]());if(!_0x3403f6)return![];const _0x167021=$gamePlayer;return _0x167021[_0xa591b(0x19b)](_0x3403f6)&&_0x3403f6['isPositionFrontOf'](_0x167021);},Game_Interpreter['prototype']['checkPlayerFacingEventBack']=function(){const _0x47f13a=_0x49b25e,_0x541b63=$gameMap[_0x47f13a(0x1e5)](this['eventId']());if(!_0x541b63)return![];const _0x5585e7=$gamePlayer;return _0x5585e7[_0x47f13a(0x190)](_0x541b63)&&_0x541b63[_0x47f13a(0x19a)](_0x5585e7);},Game_Interpreter['prototype']['checkPlayerFacingEventSide']=function(){const _0xacc28c=_0x49b25e,_0x450db0=$gameMap['event'](this[_0xacc28c(0x1d8)]());if(!_0x450db0)return![];const _0x5c550c=$gamePlayer;return _0x5c550c[_0xacc28c(0x10d)](_0x450db0)&&_0x450db0[_0xacc28c(0x13e)](_0x5c550c);},VisuMZ[_0x49b25e(0xb0)][_0x49b25e(0x108)]=Sprite_Character['prototype']['update'],Sprite_Character[_0x49b25e(0x228)][_0x49b25e(0xa4)]=function(){const _0x400efa=_0x49b25e;VisuMZ[_0x400efa(0xb0)][_0x400efa(0x108)]['call'](this),this['updateEncounterEffects']();},Sprite_Character[_0x49b25e(0x228)][_0x49b25e(0x1ee)]=function(){const _0x376974=_0x49b25e;this[_0x376974(0xaf)]();},Sprite_Character[_0x49b25e(0x228)][_0x49b25e(0xaf)]=function(){const _0x311710=_0x49b25e;if(this[_0x311710(0xcd)])return;if(!this[_0x311710(0x1a1)])return;this[_0x311710(0xcd)]=new Sprite_AlertFovSprite(this),this[_0x311710(0xcd)]['z']=0x6,this[_0x311710(0x1a1)][_0x311710(0x14d)](this[_0x311710(0xcd)]),SceneManager['_scene'][_0x311710(0x10a)]['_lightContainer']&&('keGGE'===_0x311710(0xbe)?(this[_0x311710(0x176)]===_0x488c3e&&this[_0x311710(0xcb)](),this[_0x311710(0x176)]=_0x534822):(this[_0x311710(0x17f)]=new Sprite_AlertFovSprite(this),this[_0x311710(0x17f)]['z']=0x6,SceneManager[_0x311710(0x157)][_0x311710(0x10a)][_0x311710(0x1d9)]['addChild'](this[_0x311710(0x17f)])));};function _0x5d1b(){const _0x4150fa=['toUpperCase','enabled','UOQBD','createRadialGradient','registerCommand','addChild','wNNhB','twmZS','_trigger','checkForcedAdvantage','_characterErased','playerX','isChaseAlerted','returnWaiting','updatePosition','_scene','setupPageSettings','...','324060BWCwFD','fillStyle','LureEvent','contains','isSupportDiagonalMovement','reactDelay','ReturnEndBalloon','exit','_baseTexture','runAdvantageCommonEvents','ConvertBallonTextToID','Game_System_initialize','visibleFollowers','ARRAYJSON','Preemptive','updateAngle','getAlertDistanceToTarget','COZwZ','setAlertStealthMode','call','LUmEO','alertLock','ARRAYEVAL','YWOOb','_EncounterEffectsTouchDirectionLock','_surprise','initialize','WeQHk','_forcedAdvantage','eventX','getAlertTargets','AlertWalk','moveStraight','returnX','USER-DEFINED\x203','bitmap','showFov','_lightContainerAlertFovSprite','constructor','qmAMX','beginPath','CommonEvent','match','AlertHideFov','gqQQf','alertBalloon','checkEventFacingPlayerFront','uuPUj','LIGHT','NUM','page','JZmFw','Advantage','checkEncounterEffectsStringTagsChase','isFacingAway','mAKZG','cPZtw','_alertBlockVisionTags','LIGHTBULB','IpOPz','Alert','restore','updateAlertIdle','getAlertStealthMode','isPositionBackOf','isFacingTowards','isNormalPriority','StealthMode','setBalloonPose','TBKPX','list','parent','_moveRouteIndex','angle','isEventRunning','HEART','updateAlertChase','length','alertSoundPan','ARRAYFUNC',',\x20\x20This\x20Y:\x20','AlertStealthMode','Chance','_EncounterEffectsFollowerTrigger','format','MUSIC\x20NOTE','USER-DEFINED\x204','version','tvQMO','setupEncounterEffectsEffects','UwOwL','follower','return\x200','log','isAlertLineOfVisionClear','returnAfter','rEskY','ReactDelay','response','BushMultiplier','terrainTag','RepelVariable','filter','ceil','round','sseUf','isInBoat','tEyhe','BlockVisionRegion','parameters','getAlertAngleToPlayer','RepelLure','anchor','Game_Event_updateSelfMovement','Game_Event_lock','chaseData',',\x20Event\x20Y:\x20','max','RegExp','USER-DEFINED\x205','uOoeJ','ReturnPosition','Game_CharacterBase_isDashing','BlockVisionTag','malkq','AlertBalloon','eventId','_lightContainer','tileset','clearPageSettings','eventY','isRepelEncounters','turnTowardPlayer','needsSmartChaseUpdate','Normal','ZnXGo','isChaseReturning','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','checkPlayerFacingEventFront','event','direction','Khjoc','isLureEncounters','EXCLAMATION','ReturnHome','_direction','_visible','ShowFoV','updateEncounterEffects','start','updateAlert','JAavu','findDirectionTo','sqrt','create','EncounterMultiplier','checkEventFollowerTriggerTouch','surprise','dngSY','code','ResponseType','pos','returnEndBalloon','toLowerCase','split','sAfks','initEncounterEffectsEffects','Game_Character_turnTowardPlayer','234290psvWHw','isPositionFrontOf','description','parse','JNcMw','BattleManager_onEncounter','kTzes','WlTwD','EaOyI','Event:\x20','cos','getAlertDistanceToClosest','alertRange','tWrAY','IEFpH','Player:\x20','SoundVolume','rush','commonEvent','alertSoundPitch','\x20This\x20X:\x20','initMembers','getAlertDistanceToPlayer','addForcedAdvantage','ConvertParams','chase','1206653MNGHro','eihME','ReturnStartBalloon','trim','RepelEvent','executeMoveDir8','moveTypeRandom','includes','blendMode','fMuAX','_eventAlertChaseCache','returnStartBalloon','prototype','FRUSTRATION','fovAngle','_data','MUSICNOTE','MUSIC','AlertCommonEvent','VisuMZ_1_EventsMoveCore','_preemptive','setForcedAdvantage','shiftForcedAdvantage','shift','852928RMMWvv','Game_Player_initMembers','getForcedAdvantage','troop','update','setupEncounterEffectsCommentTags','_erased','makeDeepCopy','preemptive','initEncounterEffectsData','value','LureFlat','_processEncounterDirectionLock','returnDir','concat','createAlertFovSprite','EncounterEffects','xhijL','getAlertAngleToTarget','BQerp','updateSelfMovementReturnFromChase','1278IIYBCm','getAlertDistanceToFollower','regionId','needsBitmapRedraw','OuulJ','moveTo','no\x20advantage','AlertShowFov','AdvantageSetQueue','zskFq','atan2','SoundName','Game_Event_update','SoundPitch','BoatMultiplier','pow','initEncounterEffects','drawAlertCircle','ARRAYSTRUCT','TwxYw','Game_Event_clearPageSettings','returning','initEncounterEffects_ForcedAdvantage','SILENCE','_alertFovSprite','AlertDash','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','AdvantageResetQueue','updateAlertReturnWait','ShipMultiplier','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Surprise','map','checkEncounterEffectsStringTags','setValue','FovColor1','updateSelfMovementSmartChase','tBsKB','xikGE','push','hasEncounterHalf','Queue','refresh','Settings','_source','ARRAYNUM','ANNOYED','STR','428021EqhINq','DspvJ','LureVariable','xjrny','1863369ftlgKO','reserveCommonEvent','save','isDashing','AlertRange','JmMNZ','_character','ZZZ','OqSMl','setupEncounterEffectsData','isJumping','lineTo','setupEncounterEffectsNotetags','BattleCore','FWAHA','returnTime','Game_Map_setup','followers','FovAngle','requestBalloon','arc','lock','status','USER-DEFINED\x202','isAlertVisionBlocked','name','alertSoundVolume','SWEAT','alerted','aAHsS','_alertBlockVisionRegions','Sprite_Character_update','returnWait','_spriteset','reactTime','height','isFacingSideways','_alertStealthMode','AlertLock','_EncounterEffects_EventChaseData','playerY','oIKJy','Game_Event_setupPageSettings','Game_CharacterBase_setBalloonPose','random','SoundPan','getAlertAngleToFollower','chaseTime','Data:\x20','checkEventTriggerTouch','AdvantageAddQueue','63472utBTHM','initEventChaseData','actor','Game_Event_checkEventTriggerTouch','note','checkEventFacingPlayerBack','chance','cwsrZ','startBattle','ResponseBalloon','min','AlertReactDelay','COBWEB','createFovBitmap','alertDash','destroy','LureRate','60MLvnYc','updateSelfMovement','updateSelfMovementAlerted','processLureEncounters','isInShip','LxpJI','LIGHT\x20BULB','AlertSoundName','tileWidth','checkEventFacingPlayerSide','FRZJi','addColorStop','alertSoundName','ReturnWait','FollowerTrigger','isChaseEnabled','moveAwayFromPlayer','isPositionSideOf','prJzJ','CMxhX','bImwK','fill','debugShowDirections','isMoving','JZfMk','STRUCT','LIGHT-BULB'];_0x5d1b=function(){return _0x4150fa;};return _0x5d1b();}function Sprite_AlertFovSprite(){const _0x55a10a=_0x49b25e;this[_0x55a10a(0x174)](...arguments);}Sprite_AlertFovSprite[_0x49b25e(0x228)]=Object[_0x49b25e(0x1f4)](Sprite['prototype']),Sprite_AlertFovSprite['prototype']['constructor']=Sprite_AlertFovSprite,Sprite_AlertFovSprite[_0x49b25e(0x228)][_0x49b25e(0x174)]=function(_0x117b0d){const _0x17247c=_0x49b25e;this[_0x17247c(0xe1)]=_0x117b0d,this[_0x17247c(0xef)]=_0x117b0d['_character'],Sprite[_0x17247c(0x228)][_0x17247c(0x174)][_0x17247c(0x16d)](this),this[_0x17247c(0x217)](),this[_0x17247c(0xa4)]();},Sprite_AlertFovSprite['prototype'][_0x49b25e(0x217)]=function(){const _0x1e745d=_0x49b25e;this[_0x1e745d(0x1ca)]['x']=0.5,this[_0x1e745d(0x1ca)]['y']=0.5,this['_characterErased']=![];if(!this[_0x1e745d(0xef)])return;if(this['_character'][_0x1e745d(0x180)]!==Game_Event)return;this[_0x1e745d(0x22b)]={};},Sprite_AlertFovSprite[_0x49b25e(0x228)][_0x49b25e(0xa4)]=function(){const _0x3f5d3b=_0x49b25e;Sprite[_0x3f5d3b(0x228)][_0x3f5d3b(0xa4)][_0x3f5d3b(0x16d)](this);if(!this['_character'])return;if(this['_character'][_0x3f5d3b(0x180)]!==Game_Event)return;this['updateBitmap']();if(!this[_0x3f5d3b(0x22b)]['enabled'])return;this[_0x3f5d3b(0x156)](),this['updateAngle']();},Sprite_AlertFovSprite[_0x49b25e(0x228)]['updateBitmap']=function(){const _0x547a95=_0x49b25e;if(!this[_0x547a95(0xb8)]())return;this[_0x547a95(0x22b)]=JsonEx[_0x547a95(0xa7)](this[_0x547a95(0xef)]['chaseData']());if(this['_data']['enabled']&&!this[_0x547a95(0xef)][_0x547a95(0xa6)]){if('ZnXGo'!==_0x547a95(0x1e1)){const _0x5b03db=this[_0x547a95(0x22b)];let _0x4a24df=_0x5b03db[_0x547a95(0x22a)]/-0x2;_0x4a24df+=[0x0,0x87,0x5a,0x2d,0xb4,0x0,0x0,0xe1,0x10e,0x13b][this[_0x547a95(0xef)][_0x547a95(0x1eb)]],this[_0x547a95(0x1a3)]=_0x4a24df;}else this[_0x547a95(0x129)]();}else{this[_0x547a95(0x152)]=this['_character'][_0x547a95(0xa6)];if(this[_0x547a95(0x17d)])this[_0x547a95(0x17d)][_0x547a95(0x12b)]();this[_0x547a95(0x17d)]=new Bitmap(0x1,0x1);}},Sprite_AlertFovSprite[_0x49b25e(0x228)][_0x49b25e(0xb8)]=function(){const _0x5f4866=_0x49b25e,_0xcf45af=this['_character'][_0x5f4866(0x1cd)](),_0x5f25b2=this[_0x5f4866(0x22b)];if(_0xcf45af[_0x5f4866(0x149)]!==_0x5f25b2[_0x5f4866(0x149)])return!![];if(_0xcf45af[_0x5f4866(0x20e)]!==_0x5f25b2[_0x5f4866(0x20e)])return!![];if(_0xcf45af[_0x5f4866(0x22a)]!==_0x5f25b2[_0x5f4866(0x22a)])return!![];if(this[_0x5f4866(0x152)]!==this[_0x5f4866(0xef)]['_erased'])return!![];return![];},Sprite_AlertFovSprite[_0x49b25e(0x228)][_0x49b25e(0x129)]=function(){const _0xd2ddd8=_0x49b25e,_0x134e2c=this[_0xd2ddd8(0x22b)];if(!_0x134e2c[_0xd2ddd8(0x17e)])return;const _0x154ccb=VisuMZ['EncounterEffects'][_0xd2ddd8(0xe0)][_0xd2ddd8(0x196)],_0x1f9e77=_0x134e2c[_0xd2ddd8(0x22a)],_0x52c113=Math[_0xd2ddd8(0x1c1)]((_0x134e2c[_0xd2ddd8(0x20e)]+0.4)*$gameMap[_0xd2ddd8(0x135)]()),_0x5eb193=_0x154ccb[_0xd2ddd8(0xd8)],_0x2d2bf7=_0x154ccb['FovColor2'];this['bitmap']=new Bitmap(_0x52c113*0x2,_0x52c113*0x2),this['bitmap'][_0xd2ddd8(0xc6)](_0x52c113,_0x1f9e77,_0x5eb193,_0x2d2bf7),this[_0xd2ddd8(0x224)]=0x1;},Bitmap['prototype'][_0x49b25e(0xc6)]=function(_0x1ca56f,_0x338fbf,_0x3546cd,_0x42f836){const _0x90c035=_0x49b25e,_0x28bd76=this['context'],_0x286d2e=_0x338fbf*(Math['PI']/0xb4),_0x1923ce=_0x1ca56f*0x2,_0x262035=_0x28bd76[_0x90c035(0x14b)](_0x1ca56f,_0x1ca56f,0x18,_0x1ca56f,_0x1ca56f,_0x1ca56f);_0x262035[_0x90c035(0x138)](0x0,_0x3546cd),_0x262035[_0x90c035(0x138)](0.85,_0x42f836),_0x262035[_0x90c035(0x138)](0x1,_0x3546cd),_0x28bd76[_0x90c035(0xeb)](),_0x28bd76[_0x90c035(0x15b)]=_0x262035,_0x28bd76[_0x90c035(0x182)](),_0x28bd76[_0x90c035(0xba)](_0x1ca56f,_0x1ca56f),_0x28bd76[_0x90c035(0xf4)](_0x1923ce,_0x1ca56f),_0x28bd76[_0x90c035(0xfd)](_0x1ca56f,_0x1ca56f,_0x1ca56f,0x0,_0x286d2e),_0x28bd76[_0x90c035(0xf4)](_0x1ca56f,_0x1ca56f),_0x28bd76[_0x90c035(0x142)](),_0x28bd76[_0x90c035(0x197)](),this[_0x90c035(0x162)][_0x90c035(0xa4)]();},Sprite_AlertFovSprite['prototype'][_0x49b25e(0x156)]=function(){const _0x131d1e=_0x49b25e;this['x']=this['_source']['x'],this['y']=this[_0x131d1e(0xe1)]['y']-this[_0x131d1e(0xe1)]['height']/0x2;},Sprite_AlertFovSprite[_0x49b25e(0x228)]['updateAngle']=function(){const _0x910918=_0x49b25e,_0x203d19=this[_0x910918(0x22b)];let _0x157c9a=_0x203d19[_0x910918(0x22a)]/-0x2;_0x157c9a+=[0x0,0x87,0x5a,0x2d,0xb4,0x0,0x0,0xe1,0x10e,0x13b][this['_character'][_0x910918(0x1eb)]],this[_0x910918(0x1a3)]=_0x157c9a;};