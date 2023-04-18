//=============================================================================
// VisuStella MZ - ActSeqImpact
// VisuMZ_3_ActSeqImpact.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqImpact = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqImpact = VisuMZ.ActSeqImpact || {};
VisuMZ.ActSeqImpact.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [ActSeqImpact]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Action_Sequence_Impact_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * With the aid of Pixi JS Filters, this plugin adds more impact to battle by
 * producing special on screen filter effects to make certain actions like
 * critical hits, guarding, and dodging more visibly different adding to the
 * flavor of the battle.
 * 
 * This plugin also adds new Action Sequences for the Battle Core, allowing
 * impacting effects like color breaks, motion blurs, shockwaves, motion
 * trails, and zoom blurs.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Creating a color break effect when landing critical hits akin to a
 *   chromatic aberration effect.
 * * A battler who dodges an attack will display a motion blur effect.
 * * Guarding damage will cause a shockwave effect.
 * * Adds new Action Sequences available from the Battle Core Plugin Commands.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * Pixi JS Filters*
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * New Effects
 * ============================================================================
 * 
 * The following are new visual effects added through this plugin. These visual
 * effects are added and modified with the sense of adding more impact to
 * visuals in battle.
 *
 * ---
 * 
 * Bizarro Inversion
 * 
 * Swaps the blue/red colors on the battlefield. What was originally blue will
 * become red and what was originally red will become blue.
 * 
 * Anything that is attached to the battlefield will be affected. UI objects,
 * pictures, etc. that aren't attached to the battlefield will not be affected
 * by the effect. Depending on your settings, this may or may not include
 * battle animations, too.
 * 
 * ---
 * 
 * Color Break
 * 
 * When a critical hit occurs, the colors on the screen will break apart into
 * red, green, and blue into random directions and then come back together
 * similar to a chromatic aberration. This creates a sense of weight when
 * delivering a powerful strike.
 * 
 * This is optional and can be disabled.
 * 
 * This effect is also available as an Action Sequence in the Battle Core.
 * 
 * ---
 * 
 * Desaturation
 * 
 * Desaturates all colors on the battlefield. This will result in a black and
 * white greyscale effect.
 * 
 * Anything that is attached to the battlefield will be affected. UI objects,
 * pictures, etc. that aren't attached to the battlefield will not be affected
 * by the effect. Depending on your settings, this may or may not include
 * battle animations, too.
 * 
 * Created by Manu Gaming!
 * 
 * ---
 * 
 * Motion Blur
 * 
 * When a battler dodges an attack (either a miss or evasion proc), then the
 * battler will generate a motion blur effect. Their image splits apart in a
 * blurred manner and then fuses back together to become whole again. This
 * generates the illusion that they're hard to hit.
 * 
 * This is optional and can be disabled.
 * 
 * This effect is also available as an Action Sequence in the Battle Core.
 * There are two versions, one that affects only the battler while another that
 * affects the whole screen.
 * 
 * ---
 * 
 * Motion Trail
 * 
 * If motion trails are enabled on a battler, whenever they move, they leave
 * behind a residual sprite of their motion during that particular frame. The
 * motion blurs aid in visualizing the path the battler moved in case the
 * battler's movement trajectory is normally too fast to portray. Motion trails
 * can have different hue and/or tones.
 * 
 * This is an Action Sequence-only effect.
 * 
 * ---
 * 
 * Negative Inversion
 * 
 * Inverts all colors on the battlefield. They pretty much swap 180 degrees of
 * hue with whatever color is on the opposite side.
 * 
 * Anything that is attached to the battlefield will be affected. UI objects,
 * pictures, etc. that aren't attached to the battlefield will not be affected
 * by the effect. Depending on your settings, this may or may not include
 * battle animations, too.
 * 
 * Created by Manu Gaming!
 * 
 * ---
 * 
 * Oversaturation
 * 
 * Oversaturates all colors on the battlefield. Colors will become extra vivid
 * and look extremely concentrated. Brighter colors become brighter while
 * darker colors become darker.
 * 
 * Anything that is attached to the battlefield will be affected. UI objects,
 * pictures, etc. that aren't attached to the battlefield will not be affected
 * by the effect. Depending on your settings, this may or may not include
 * battle animations, too.
 * 
 * ---
 * 
 * Shockwave
 * 
 * When a guarding battler would receive HP damage (or manages to defend to 0
 * damage), a shockwave effect occurs to display the impact. The shockwave will
 * ripple out from the battler to the edges of the screen before disappearing.
 * 
 * This is optional and can be disabled.
 * 
 * This effect is also available as an Action Sequence in the Battle Core.
 * 
 * ---
 * 
 * Time Scale
 * 
 * This causes time to go slower or faster depending on the settings. All
 * things related to the game client will go slower or faster.
 * 
 * This only affects battle. The effects go away during the input phase or when
 * a message is present.
 * 
 * Created by Manu Gaming!
 * 
 * ---
 * 
 * Time Stop
 * 
 * The game client will pause time for set amount of time, only the music and
 * any sound effects continuing.
 * 
 * Created by Manu Gaming!
 * 
 * ---
 * 
 * Zoom Blur
 * 
 * A zoom blur will direct its focus at a specific point on the screen and
 * create a visual radial distortion towards that point. The intensity of the
 * zoom effect will diminish over the duration of the zoom blur. This helps
 * draw focus towards specific parts of the screen.
 * 
 * This is an Action Sequence-only effect.
 * 
 * ---
 *
 * ============================================================================
 * Action Sequence - Plugin Commands
 * ============================================================================
 *
 * The following are Action Sequence Plugin Commands that have been added with
 * this plugin. These are accessible from the Battle Core plugin (not this one)
 * in order to keep all the Action Sequences in place.
 * 
 * Once again, these plugin commands are only accessible through the Battle
 * Core plugin and not this one! Make sure you have the most update to date
 * version of the Battle Core for them.
 *
 * ---
 * 
 * === Action Sequences - Impact ===
 * 
 * These Action Sequences are related to creating impact.
 * Requires VisuMZ_3_ActSeqImpact!
 * 
 * ---
 *
 * IMPACT: Bizarro Inversion
 * - Swaps blue/red colors on the battlefield.
 * - Requires VisuMZ_3_ActSeqImpact!
 * - Created by Manu Gaming!
 *
 *   Bizarro?:
 *   - Enable Bizarro Inversion effect?
 *
 * ---
 *
 * IMPACT: Color Break
 * - Breaks the colors on the screen before reassembling.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Intensity:
 *   - What is the intensity of the color break effect?
 *
 *   Duration:
 *   - What is the duration of the color break effect?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * IMPACT: Desaturation
 * - Desaturates all colors on the battlefield.
 * - Requires VisuMZ_3_ActSeqImpact!
 * - Created by Manu Gaming!
 *
 *   Desaturate?:
 *   - Enable Desaturation effect?
 *
 * ---
 *
 * IMPACT: Motion Blur Screen
 * - Creates a motion blur on the whole screen.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Angle:
 *   - Determine what angle to make the motion blur at.
 *
 *   Intensity Rate:
 *   - This determines intensity rate of the motion blur.
 *   - Use a number between 0 and 1.
 *
 *   Duration:
 *   - How many frames should the motion blur last?
 *   - What do you want to be its duration?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * IMPACT: Motion Blur Target(s)
 * - Creates a motion blur on selected target(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to create motion blur effects for.
 *
 *   Angle:
 *   - Determine what angle to make the motion blur at.
 *
 *   Intensity Rate:
 *   - This determines intensity rate of the motion blur.
 *   - Use a number between 0 and 1.
 *
 *   Duration:
 *   - How many frames should the motion blur last?
 *   - What do you want to be its duration?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * IMPACT: Motion Trail Create
 * - Creates a motion trail effect for the target(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to create motion trail effects for.
 *
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less motion trails there are.
 *
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 *
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 *
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 *
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 *
 * ---
 *
 * IMPACT: Motion Trail Remove
 * - Removes the motion trail effect from the target(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 * - Created by Manu Gaming!
 *
 *   Targets:
 *   - Select unit(s) to clear motion trail effects for.
 *
 * ---
 *
 * IMPACT: Negative Inversion
 * - Inverts all the colors on the battlefield.
 * - Requires VisuMZ_3_ActSeqImpact!
 * - Created by Manu Gaming!
 *
 *   Negative?:
 *   - Enable Negative Inversion effect?
 *
 * ---
 *
 * IMPACT: Oversaturation
 * - Oversaturates colors on the battlefield.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Oversaturate?:
 *   - Enable Oversaturation effect?
 *
 * ---
 *
 * IMPACT: Shockwave at Point
 * - Creates a shockwave at the designated coordinates.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Point: X:
 *   Point: Y:
 *   - What x/y coordinate do you want to create a shockwave at?
 *   - You can use JavaScript code.
 *
 *   Amplitude:
 *   - What is the aplitude of the shockwave effect?
 *
 *   Wavelength:
 *   - What is the wavelength of the shockwave effect?
 *
 *   Duration:
 *   - What is the duration of the shockwave?
 *
 * ---
 *
 * IMPACT: Shockwave from Each Target(s)
 * - Creates a shockwave at each of the target(s) location(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to start a shockwave from.
 *
 *   Target Location:
 *   - Select which part target group to start a shockwave from.
 * 
 *     Offset X:
 *     Offset Y:
 *     - How much to offset the shockwave X/Y point by.
 *
 *   Amplitude:
 *   - What is the aplitude of the shockwave effect?
 *
 *   Wavelength:
 *   - What is the wavelength of the shockwave effect?
 *
 *   Duration:
 *   - What is the duration of the shockwave?
 *
 * ---
 *
 * IMPACT: Shockwave from Target(s) Center
 * - Creates a shockwave from the center of the target(s).
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to start a shockwave from.
 *
 *   Target Location:
 *   - Select which part target group to start a shockwave from.
 * 
 *     Offset X:
 *     Offset Y:
 *     - How much to offset the shockwave X/Y point by.
 *
 *   Amplitude:
 *   - What is the aplitude of the shockwave effect?
 *
 *   Wavelength:
 *   - What is the wavelength of the shockwave effect?
 *
 *   Duration:
 *   - What is the duration of the shockwave?
 *
 * ---
 *
 * IMPACT: Time Scale
 * - Adjust time to go faster or slower!
 * - Requires VisuMZ_3_ActSeqImpact!
 * - Created by Manu Gaming!
 *
 *   Scale:
 *   - Adjusts how fast/slow time goes.
 *   - 1.00 is normal. Lower is slower. Higher is faster.
 *
 * ---
 *
 * IMPACT: Time Stop
 * - Stops time for a set amount of milliseconds.
 * - Requires VisuMZ_3_ActSeqImpact!
 * - Created by Manu Gaming!
 *
 *   Milliseconds:
 *   - How many milliseconds should time stop for?
 *   - 1000 milliseconds = 1 second.
 *
 * ---
 *
 * IMPACT: Zoom Blur at Point
 * - Creates a zoom blur at the designated coordinates.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Point: X:
 *   Point: Y:
 *   - What x/y coordinate do you want to focus the zoom at?
 *   - You can use JavaScript code.
 *
 *   Zoom Strength:
 *   - What is the strength of the zoom effect?
 *   - Use a number between 0 and 1.
 *
 *   Visible Radius:
 *   - How much of a radius should be visible from the center?
 *
 *   Duration:
 *   - What is the duration of the zoom blur?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * IMPACT: Zoom Blur at Target(s) Center
 * - Creates a zoom blur at the center of targets.
 * - Requires VisuMZ_3_ActSeqImpact!
 *
 *   Targets:
 *   - Select unit(s) to start a zoom blur from.
 *
 *   Target Location:
 *   - Select which part target group to start a zoom blur from.
 * 
 *     Offset X:
 *     Offset Y:
 *     - How much to offset the zoom blur X/Y point by.
 *
 *   Zoom Strength:
 *   - What is the strength of the zoom effect?
 *   - Use a number between 0 and 1.
 *
 *   Visible Radius:
 *   - How much of a radius should be visible from the center?
 *
 *   Duration:
 *   - What is the duration of the zoom blur?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Critical Color Break Settings
 * ============================================================================
 *
 * When critical hits occur, you can cause a Color Break effect to occur.
 *
 * ---
 *
 * Settings
 * 
 *   Enable/Disable?:
 *   - Enables/disables the Color Break effect whenever a critical hit occurs?
 * 
 *   Intensity:
 *   - How intense do you want the Color Break effect to be?
 * 
 *   Duration:
 *   - What is the duration of the Color Break effect?
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Dodge Motion Blur Settings
 * ============================================================================
 *
 * When a battler dodges an attack, you can create a motion blur effect.
 *
 * ---
 *
 * Settings
 * 
 *   Enable/Disable?:
 *   - Enables/disables the Motion Blur effect whenever a battler evades an
 *     attack?
 * 
 *   Intensity Rate:
 *   - This determines intensity rate of the motion blur.
 *   - Use a number between 0 and 1.
 * 
 *   Duration:
 *   - How many frames should the motion blur last?
 *   - What do you want to be its duration?
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Guard Shockwave Settings
 * ============================================================================
 *
 * When a guarding battler receives damage, you can create a shockwave effect.
 *
 * ---
 *
 * Category
 * 
 *   Enable/Disable?:
 *   - Enables/disables the Shockwave effect whenever a battler is attacked
 *     while guarding?
 * 
 *   Amplitude:
 *   - What is the aplitude of the shockwave effect?
 * 
 *   Wavelength:
 *   - What is the wavelength of the shockwave effect?
 * 
 *   Duration:
 *   - What is the duration of the shockwave?
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
 * Manu Gaming Creations
 * URL: https://manugamingcreations.itch.io
 * * Responsible for the following Impact Effects and adapted by VisuStella:
 * ** Desaturation
 * ** Negative Impact
 * ** Time Scale
 * ** Time Stop
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: April 14, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Impact Effects added by Irina and collaborating with Manu Gaming!
 * *** Impact: Bizarro Inversion
 * *** Impact: Desaturation
 * *** Impact: Negative Inversion
 * *** Impact: Oversaturation
 * *** Impact: Time Scale
 * *** Impact: Time Stop
 * 
 * Version 1.04: October 28, 2021
 * * Bug Fixes!
 * ** Guard shockwave now originates from the proper location with front view
 *    sprites enabled under specific battle layouts. Fix made by Irina.
 * 
 * Version 1.03: December 11, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Action Sequence Impact Action Sequences "Shockwave from Each Target(s)",
 *    "Shockwave from Target(s) Center", and "Zoom Blur at Target(s) Center"
 *    now have "Offset X" and "Offset Y" plugin parameters. Added by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.02: December 4, 2020
 * * Bug Fixes!
 * ** Enemies with a SV Battler attached to them will no longer desynch after
 *    using a motion trail effect. Fix made by Irina.
 * 
 * Version 1.01: November 29, 2020
 * * Bug Fixes!
 * ** Motion Trails for Dragonbones armatures are now properly adjusted for
 *    their scale and offset. Fix made by Arisu.
 *
 * Version 1.00: December 2, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActSeqImpact
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CriticalColorBreak:struct
 * @text Critical Color Break
 * @type struct<CriticalColorBreak>
 * @desc When critical hits occur, you can cause a Color Break effect to occur.
 * @default {"Enable:eval":"true","Intensity:num":"30","Duration:num":"30","EasingType:str":"OutBack"}
 *
 * @param DodgeMotionBlur:struct
 * @text Dodge Motion Blur
 * @type struct<DodgeMotionBlur>
 * @desc When a battler dodges an attack, you can create a motion blur effect.
 * @default {"Enable:eval":"true","Rate:eval":"0.5","Duration:num":"30","EasingType:str":"InOutSine"}
 *
 * @param GuardShockWave:struct
 * @text Guard Shockwave
 * @type struct<GuardShockWave>
 * @desc When a guarding battler receives damage, you can create a shockwave effect.
 * @default {"Enable:eval":"true","Amp:num":"30","Wave:num":"160","Duration:num":"30"}
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
 * Critical Color Break Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CriticalColorBreak:
 *
 * @param Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables the Color Break effect whenever a
 * critical hit occurs?
 * @default true
 *
 * @param Intensity:num
 * @text Intensity
 * @type number
 * @min 1
 * @desc How intense do you want the Color Break effect to be?
 * @default 30
 *
 * @param Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc What is the duration of the Color Break effect?
 * @default 30
 *
 * @param EasingType:str
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
 * @default OutBack
 *
 */
/* ----------------------------------------------------------------------------
 * Dodge Motion Blur Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DodgeMotionBlur:
 *
 * @param Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables the Motion Blur effect whenever a
 * battler evades an attack?
 * @default true
 *
 * @param Rate:eval
 * @text Intensity Rate
 * @desc This determines intensity rate of the motion blur.
 * Use a number between 0 and 1.
 * @default 0.5
 *
 * @param Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion blur last?
 * What do you want to be its duration?
 * @default 30
 *
 * @param EasingType:str
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
 * @default InOutSine
 *
 */
/* ----------------------------------------------------------------------------
 * Guard Shock Wave Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GuardShockWave:
 *
 * @param Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables the Shockwave effect whenever a
 * battler is attacked while guarding?
 * @default true
 * 
 * @param Amp:num
 * @text Amplitude
 * @type number
 * @min 1
 * @desc What is the aplitude of the shockwave effect?
 * @default 30
 * 
 * @param Wave:num
 * @text Wavelength
 * @type number
 * @min 1
 * @desc What is the wavelength of the shockwave effect?
 * @default 160
 * 
 * @param Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc What is the duration of the shockwave?
 * @default 30
 *
 */
//=============================================================================

const _0x5c3299=_0x7d3b;(function(_0x2c241d,_0x38f679){const _0x26a71c=_0x7d3b,_0x369174=_0x2c241d();while(!![]){try{const _0xe45004=-parseInt(_0x26a71c(0xab))/0x1*(parseInt(_0x26a71c(0xcb))/0x2)+-parseInt(_0x26a71c(0x150))/0x3+-parseInt(_0x26a71c(0xdb))/0x4*(parseInt(_0x26a71c(0xaf))/0x5)+parseInt(_0x26a71c(0x140))/0x6+parseInt(_0x26a71c(0xee))/0x7*(parseInt(_0x26a71c(0xcd))/0x8)+parseInt(_0x26a71c(0xdd))/0x9+parseInt(_0x26a71c(0x125))/0xa;if(_0xe45004===_0x38f679)break;else _0x369174['push'](_0x369174['shift']());}catch(_0x5aae7){_0x369174['push'](_0x369174['shift']());}}}(_0x3760,0x5dbbb));function _0x7d3b(_0xf59e96,_0x1d80a8){const _0x376083=_0x3760();return _0x7d3b=function(_0x7d3b8e,_0x4b1bab){_0x7d3b8e=_0x7d3b8e-0x9a;let _0x4aa072=_0x376083[_0x7d3b8e];return _0x4aa072;},_0x7d3b(_0xf59e96,_0x1d80a8);}var label=_0x5c3299(0x13e),tier=tier||0x0,dependencies=[_0x5c3299(0x14c),_0x5c3299(0x10e)],pluginData=$plugins['filter'](function(_0x5e83cf){const _0xe0fd0c=_0x5c3299;return _0x5e83cf[_0xe0fd0c(0x141)]&&_0x5e83cf[_0xe0fd0c(0x11a)]['includes']('['+label+']');})[0x0];function _0x3760(){const _0x369af6=['1nDhzdi','isBusy','createArmature','Game_Battler_onDamage','1440DdlFBO','createDefaultBattlerMotionTrailData','Duration','dispose','exit','_spriteset','_desaturateImpactFilter','disposeSprite','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','performEvasion','JSON','_statusWindow','ARRAYEVAL','VisuMZ_2_DragonbonesUnion','height','includes','_blueRedInvertImpactFilter','_scene','createBaseFilters','_rgbSplitImpactWholeDuration','skew','Sprite_Battler_update','anchor','NdHOR','_zoomBlurImpactDuration','trim','setHue','_motionTrailContainer','234392Rpabfx','width','953728AFklRU','RGBSplitFilter','_baseX','updateMotionBlurImpactFilter','isInputting','scale','onDamage','green','_zoomBlurImpactEasing','max','_baseSprite','_battleImpactTimeScale','setupCriticalEffect','_dragonbones','5752bMCqof','version','3401010SdYxwM','Rate','createDragonbonesArmature','battler','timeSpeed','GuardShockWave','Intensity','Spriteset_Base_createBaseFilters','NUM','isGuard','updateMotionTrail','isSceneBattle','Spriteset_Base_updateBaseFilters','GfXof','adjustFlippedBattlefield','_distortionSprite','uUTkW','28RXCOxe','children','DodgeMotionBlur','_duration','FUNC','_projectilesContainer','Wave','Linear','MotionBlurFilter','GXGHE','innerRadius','createZoomBlurImpactFilter','createBlueRedInvertImpactFilter','_battlerMotionTrailData','shzpl','strength','isSideView','STR','matchSpriteProperties','match','diMgY','getBattleImpactTimeScale','_rgbSplitImpactEasing','return\x200','_battler','updateRgbSplitImpactFilter','prototype','Settings','armature','createDistortionSprite','createNegativeImpactFilter','Sprite_Battler_createDistortionSprite','VisuMZ_1_BattleCore','updateActSeqImpactBaseFilters','visible','updateDuration','SceneManager_determineRepeatNumber','setupCriticalEffectActSeqImpact','setupMotionBlurImpactFilter','hsYuI','map','_zoomBlurImpactFilter','currentTime','offsetY','description','updateZoomBlurImpactFilter','createChildren','_motionBlurImpactDuration','_rgbSplitImpactFilter','ColorMatrixFilter','parent','Spriteset_Battle_adjustFlippedBattlefield','animation','constructor','Sprite_Damage_setupCriticalEffect','4672870ICEaiY','ConvertParams','setFrame','scaleY','ZoomBlurFilter','_shockwaveImpactFilters','parse','lHIYA','setupMotionTrailProperties','remove','call','updateBaseFilters','_oversaturateImpactFilter','_zoomBlurImpactWholeDuration','performDodgeActSeqImpact','sortMotionTrailBattlers','ShockwaveFilter','setBattleImpactTimeScale','bind','_sourceData','isActor','tone','Spriteset_Battle_createBattleFieldContainer','LLnQw','setColorTone','ActSeqImpact','offsetX','626316YByrPA','status','pNPwE','CriticalColorBreak','parameters','desaturate','_motionBlurImpactWholeDuration','enabled','updateNextOpacities','nextOpacity','isAlive','update','VisuMZ_0_CoreEngine','_hue','dragonbonesData','setupDesaturateImpactFilter','1533468PvuHjA','_windowLayer','filter','sin','format','create','updateBattlerContainer','EasingType','fnYSl','_rgbSplitImpactDuration','cos','randomInt','createMotionBlurImpactFilter','delay','clearBattlerMotionTrailData','some','applyEasing','length','battlerMotionTrailData','startGameLoop','createDesaturateImpactFilter','removeChild','performMiss','lastAnimationState','blue','center','_waitCount','name','EVAL','alrlS','initialize','addChild','angle','red','filters','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','onDamageActSeqImpact','_isCreatingMotionTrailSprite','push','time','setupZoomBlurImpactFilter','_battlerContainer','setupShockwaveImpactFilter','scaleX','radius','createBattleFieldContainer','opacityStart','ApplyEasing','frameCount','createOversaturateImpactFilter','PrAPv','opacity','Spriteset_Battle_updateBattlerContainer','_motionBlurImpactFilter','ojkbq','iqGxY','Amp','hasMotionTrailSprite','createActSeqImpactBaseFilters','createRgbSplitImpactFilter','_frame','RuecE','Game_Battler_performEvasion','tSNyy','_battleField','setupRgbSplitImpactFilter','determineRepeatNumber','ARRAYJSON','_baseY','mSYuN','_motionBlurImpactEasing','_sourceSprite','gotoAndStopByTime','_negativeImpactFilter','velocity','lastAnimationName','Enable','createActSeqImpactFilters','stopGameLoop'];_0x3760=function(){return _0x369af6;};return _0x3760();}VisuMZ[label]['Settings']=VisuMZ[label][_0x5c3299(0x109)]||{},VisuMZ[_0x5c3299(0x126)]=function(_0x27d1d0,_0x1166d5){const _0x541ad3=_0x5c3299;for(const _0x143da7 in _0x1166d5){if(_0x143da7[_0x541ad3(0x101)](/(.*):(.*)/i)){const _0x219d9d=String(RegExp['$1']),_0x2d48c0=String(RegExp['$2'])['toUpperCase']()[_0x541ad3(0xc8)]();let _0x4760d1,_0x521da6,_0x1194a3;switch(_0x2d48c0){case _0x541ad3(0xe5):_0x4760d1=_0x1166d5[_0x143da7]!==''?Number(_0x1166d5[_0x143da7]):0x0;break;case'ARRAYNUM':_0x521da6=_0x1166d5[_0x143da7]!==''?JSON[_0x541ad3(0x12b)](_0x1166d5[_0x143da7]):[],_0x4760d1=_0x521da6[_0x541ad3(0x116)](_0x12840e=>Number(_0x12840e));break;case _0x541ad3(0x16c):_0x4760d1=_0x1166d5[_0x143da7]!==''?eval(_0x1166d5[_0x143da7]):null;break;case _0x541ad3(0xbb):_0x521da6=_0x1166d5[_0x143da7]!==''?JSON[_0x541ad3(0x12b)](_0x1166d5[_0x143da7]):[],_0x4760d1=_0x521da6[_0x541ad3(0x116)](_0x424200=>eval(_0x424200));break;case _0x541ad3(0xb9):_0x4760d1=_0x1166d5[_0x143da7]!==''?JSON[_0x541ad3(0x12b)](_0x1166d5[_0x143da7]):'';break;case _0x541ad3(0x9f):_0x521da6=_0x1166d5[_0x143da7]!==''?JSON[_0x541ad3(0x12b)](_0x1166d5[_0x143da7]):[],_0x4760d1=_0x521da6[_0x541ad3(0x116)](_0x2b11b0=>JSON[_0x541ad3(0x12b)](_0x2b11b0));break;case _0x541ad3(0xf2):_0x4760d1=_0x1166d5[_0x143da7]!==''?new Function(JSON['parse'](_0x1166d5[_0x143da7])):new Function(_0x541ad3(0x105));break;case'ARRAYFUNC':_0x521da6=_0x1166d5[_0x143da7]!==''?JSON[_0x541ad3(0x12b)](_0x1166d5[_0x143da7]):[],_0x4760d1=_0x521da6[_0x541ad3(0x116)](_0x3988b6=>new Function(JSON[_0x541ad3(0x12b)](_0x3988b6)));break;case _0x541ad3(0xff):_0x4760d1=_0x1166d5[_0x143da7]!==''?String(_0x1166d5[_0x143da7]):'';break;case'ARRAYSTR':_0x521da6=_0x1166d5[_0x143da7]!==''?JSON[_0x541ad3(0x12b)](_0x1166d5[_0x143da7]):[],_0x4760d1=_0x521da6[_0x541ad3(0x116)](_0xcef264=>String(_0xcef264));break;case'STRUCT':_0x1194a3=_0x1166d5[_0x143da7]!==''?JSON[_0x541ad3(0x12b)](_0x1166d5[_0x143da7]):{},_0x4760d1=VisuMZ[_0x541ad3(0x126)]({},_0x1194a3);break;case'ARRAYSTRUCT':_0x521da6=_0x1166d5[_0x143da7]!==''?JSON[_0x541ad3(0x12b)](_0x1166d5[_0x143da7]):[],_0x4760d1=_0x521da6[_0x541ad3(0x116)](_0x59df95=>VisuMZ[_0x541ad3(0x126)]({},JSON[_0x541ad3(0x12b)](_0x59df95)));break;default:continue;}_0x27d1d0[_0x219d9d]=_0x4760d1;}}return _0x27d1d0;},(_0x11351d=>{const _0x5c124=_0x5c3299,_0x34b2f2=_0x11351d[_0x5c124(0x16b)];for(const _0x5f2ccb of dependencies){if(_0x5c124(0x142)!==_0x5c124(0x13c)){if(!Imported[_0x5f2ccb]){if('PFrpH'!==_0x5c124(0x187)){alert(_0x5c124(0x173)[_0x5c124(0x154)](_0x34b2f2,_0x5f2ccb)),SceneManager['exit']();break;}else{if(!this['_motionBlurImpactFilter'])return;if(this[_0x5c124(0x11d)]<=0x0)return;const _0x112a71=this[_0x5c124(0x185)],_0x367605=this[_0x5c124(0x11d)]||0x0,_0xf4bce1=this[_0x5c124(0x146)]||_0x367605,_0x1adec1=0x0,_0x2d81f6=this[_0x5c124(0xa2)];_0x112a71[_0x5c124(0xa6)]['x']=_0x283e16[_0x5c124(0x13e)][_0x5c124(0x160)](_0x112a71[_0x5c124(0xa6)]['x'],_0x1adec1,_0x367605,_0xf4bce1,_0x2d81f6),_0x112a71[_0x5c124(0xa6)]['y']=_0x16e71c[_0x5c124(0x13e)]['applyEasing'](_0x112a71[_0x5c124(0xa6)]['y'],_0x1adec1,_0x367605,_0xf4bce1,_0x2d81f6),this[_0x5c124(0x11d)]--,this['_motionBlurImpactDuration']<=0x0&&(_0x112a71[_0x5c124(0xa6)]['x']=0x0,_0x112a71[_0x5c124(0xa6)]['y']=0x0);}}}else return;}const _0x882e26=_0x11351d[_0x5c124(0x11a)];if(_0x882e26[_0x5c124(0x101)](/\[Version[ ](.*?)\]/i)){if(_0x5c124(0x115)!==_0x5c124(0x115)){const _0x2f6957=this[_0x5c124(0xa3)][_0x5c124(0x106)][_0x5c124(0x14e)]();this[_0x5c124(0xda)]=_0x3c81fa[_0x5c124(0xad)](_0x2f6957[_0x5c124(0xe0)]),_0x173cb8[_0x5c124(0x16f)](this[_0x5c124(0xda)]);const _0x558ce7=_0x794e3e['animation'][_0x5c124(0xa7)],_0xb55b27=_0x208da0[_0x5c124(0x122)][_0x5c124(0x167)][_0x5c124(0x118)];this[_0x5c124(0xda)][_0x5c124(0x122)][_0x5c124(0xa4)](_0x558ce7,_0xb55b27),this[_0x5c124(0xda)]['x']=_0x2f6957[_0x5c124(0x13f)],this[_0x5c124(0xda)]['y']=_0x2f6957[_0x5c124(0x119)],this[_0x5c124(0xda)][_0x5c124(0xd2)]['x']=_0x2f6957[_0x5c124(0x17b)],this['_dragonbones']['scale']['y']=_0x2f6957['scaleY'],_0x11628f[_0x5c124(0x183)]=0x0,_0x37e876[_0x5c124(0x149)]=0x2,_0x5a348b[_0x5c124(0x14b)]();}else{const _0x2a368b=Number(RegExp['$1']);_0x2a368b!==VisuMZ[label][_0x5c124(0xdc)]&&(alert(_0x5c124(0xb7)['format'](_0x34b2f2,_0x2a368b)),SceneManager[_0x5c124(0xb3)]());}}if(_0x882e26[_0x5c124(0x101)](/\[Tier[ ](\d+)\]/i)){const _0x4397bf=Number(RegExp['$1']);_0x4397bf<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x34b2f2,_0x4397bf,tier)),SceneManager[_0x5c124(0xb3)]()):_0x5c124(0x16d)!=='alrlS'?(_0x1665e5['ActSeqImpact']['Spriteset_Battle_createBattleFieldContainer']['call'](this),this[_0x5c124(0xca)]=new _0xb37f1c(),this['_battleField'][_0x5c124(0x16f)](this[_0x5c124(0xca)]),this[_0x5c124(0xf3)]&&this[_0x5c124(0x9c)][_0x5c124(0x16f)](this[_0x5c124(0xf3)])):tier=Math[_0x5c124(0xd6)](_0x4397bf,tier);}VisuMZ[_0x5c124(0x126)](VisuMZ[label][_0x5c124(0x109)],_0x11351d[_0x5c124(0x144)]);})(pluginData),VisuMZ[_0x5c3299(0x13e)][_0x5c3299(0x112)]=SceneManager[_0x5c3299(0x9e)],SceneManager[_0x5c3299(0x9e)]=function(_0x1ea279){const _0x58eced=_0x5c3299;let _0x18465e=0x1;return SceneManager[_0x58eced(0xe8)]()&&(_0x18465e=$gameTemp['getBattleImpactTimeScale'](),_0x18465e=Math[_0x58eced(0xd6)](0.01,_0x18465e)),VisuMZ[_0x58eced(0x13e)]['SceneManager_determineRepeatNumber'][_0x58eced(0x12f)](this,_0x1ea279*_0x18465e);},Game_Temp[_0x5c3299(0x108)][_0x5c3299(0x103)]=function(){const _0x35cb03=_0x5c3299;if(!SceneManager['isSceneBattle']())return 0x1;if(BattleManager[_0x35cb03(0xd1)]())return 0x1;if($gameMessage[_0x35cb03(0xac)]())return 0x1;return this[_0x35cb03(0xd8)]=this[_0x35cb03(0xd8)]??0x1,this[_0x35cb03(0xd8)]<=0x0&&(this[_0x35cb03(0xd8)]=0.01),this['_battleImpactTimeScale'];},Game_Temp['prototype'][_0x5c3299(0x136)]=function(_0x36952f,_0x477e6b){const _0x12dc2e=_0x5c3299;_0x477e6b&&(_0x477e6b[_0x12dc2e(0x16a)]=_0x477e6b[_0x12dc2e(0x16a)]||0x0,_0x477e6b[_0x12dc2e(0x16a)]=Math[_0x12dc2e(0xd6)](_0x477e6b[_0x12dc2e(0x16a)],0x1)),this['_battleImpactTimeScale']=Math[_0x12dc2e(0xd6)](0.01,_0x36952f);},Game_BattlerBase[_0x5c3299(0x108)][_0x5c3299(0x162)]=function(){const _0x43db26=_0x5c3299;if(this[_0x43db26(0xfb)])return this['_battlerMotionTrailData'];return this['_battlerMotionTrailData']=this[_0x43db26(0xb0)](),this[_0x43db26(0xfb)];},Game_BattlerBase[_0x5c3299(0x108)][_0x5c3299(0x15e)]=function(){const _0x59f21b=_0x5c3299;this['_battlerMotionTrailData']=this[_0x59f21b(0xb0)]();},Game_BattlerBase[_0x5c3299(0x108)]['setBattlerMotionTrailData']=function(_0x2b6dca){const _0x26dc86=_0x5c3299;this[_0x26dc86(0xfb)]=_0x2b6dca;},Game_BattlerBase[_0x5c3299(0x108)][_0x5c3299(0xb0)]=function(){return{'delay':0x1,'duration':0x1e,'hue':0x0,'opacityStart':0xc8,'tone':[0x0,0x0,0x0,0x0],'visible':![]};},VisuMZ['ActSeqImpact'][_0x5c3299(0xae)]=Game_Battler['prototype'][_0x5c3299(0xd3)],Game_Battler['prototype'][_0x5c3299(0xd3)]=function(_0x30b41f){const _0x5abcd0=_0x5c3299;VisuMZ[_0x5abcd0(0x13e)]['Game_Battler_onDamage'][_0x5abcd0(0x12f)](this,_0x30b41f),this[_0x5abcd0(0x174)](_0x30b41f);},Game_Battler[_0x5c3299(0x108)][_0x5c3299(0x174)]=function(_0x7dc2f5){const _0x2a1b0b=_0x5c3299;if(_0x7dc2f5<0x0)return;if(!this[_0x2a1b0b(0xe6)]())return;const _0x1b3c1e=VisuMZ[_0x2a1b0b(0x13e)]['Settings'][_0x2a1b0b(0xe2)];if(!_0x1b3c1e)return;if(!_0x1b3c1e['Enable'])return;if(!SceneManager['isSceneBattle']())return;const _0x3d0a82=SceneManager['_scene']['_spriteset'];if(!_0x3d0a82)return;if(!this['battler']())return;let _0x140974=this['battler']()[_0x2a1b0b(0xcf)],_0x4c97d5=this[_0x2a1b0b(0xe0)]()['_baseY']-this[_0x2a1b0b(0xe0)]()['mainSpriteHeight']()/0x2;const _0x483907=_0x1b3c1e[_0x2a1b0b(0x188)]||0x1,_0x51fc89=_0x1b3c1e[_0x2a1b0b(0xf4)]||0x1,_0x426497=_0x1b3c1e[_0x2a1b0b(0xb1)]||0x1;if(this[_0x2a1b0b(0x139)]()&&!$gameSystem[_0x2a1b0b(0xfe)]()){if(_0x2a1b0b(0x102)!=='diMgY')this['_battlerMotionTrailData']=this[_0x2a1b0b(0xb0)]();else{const _0x3f401a=SceneManager['_scene'];_0x140974+=_0x3f401a[_0x2a1b0b(0x151)]['x'],_0x140974+=_0x3f401a[_0x2a1b0b(0xba)]['x'],_0x4c97d5+=_0x3f401a['_windowLayer']['y'],_0x4c97d5+=_0x3f401a[_0x2a1b0b(0xba)]['y'];}}_0x3d0a82['setupShockwaveImpactFilter'](_0x140974,_0x4c97d5,_0x483907,_0x51fc89,_0x426497);},VisuMZ[_0x5c3299(0x13e)]['Game_Battler_performMiss']=Game_Battler[_0x5c3299(0x108)]['performMiss'],Game_Battler[_0x5c3299(0x108)][_0x5c3299(0x166)]=function(){const _0x14fc77=_0x5c3299;VisuMZ[_0x14fc77(0x13e)]['Game_Battler_performMiss'][_0x14fc77(0x12f)](this),this['performDodgeActSeqImpact']();},VisuMZ['ActSeqImpact'][_0x5c3299(0x9a)]=Game_Battler[_0x5c3299(0x108)][_0x5c3299(0xb8)],Game_Battler['prototype'][_0x5c3299(0xb8)]=function(){const _0x2443ec=_0x5c3299;VisuMZ[_0x2443ec(0x13e)][_0x2443ec(0x9a)][_0x2443ec(0x12f)](this),this[_0x2443ec(0x133)]();},Game_Battler[_0x5c3299(0x108)][_0x5c3299(0x133)]=function(){const _0x539bae=_0x5c3299,_0x4b36c3=VisuMZ[_0x539bae(0x13e)]['Settings'][_0x539bae(0xf0)];if(!_0x4b36c3)return;if(!_0x4b36c3['Enable'])return;if(!SceneManager[_0x539bae(0xe8)]())return;const _0x972388=SceneManager['_scene'][_0x539bae(0xb4)];if(!_0x972388)return;if(!this[_0x539bae(0xe0)]())return;if(this[_0x539bae(0xe0)]()[_0x539bae(0x11d)]>0x0)return;const _0x106271=Math[_0x539bae(0x15b)](0x168),_0x3b2dd1=_0x4b36c3[_0x539bae(0xde)]||0.1,_0x4275b4=_0x4b36c3[_0x539bae(0xb1)],_0x120248=_0x4b36c3[_0x539bae(0x157)]||_0x539bae(0xf5);this['battler']()[_0x539bae(0x114)](_0x106271,_0x3b2dd1,_0x4275b4,_0x120248);},VisuMZ['ActSeqImpact'][_0x5c3299(0x10d)]=Sprite_Battler['prototype'][_0x5c3299(0x10b)],Sprite_Battler[_0x5c3299(0x108)][_0x5c3299(0x10b)]=function(){const _0x758eca=_0x5c3299;VisuMZ[_0x758eca(0x13e)]['Sprite_Battler_createDistortionSprite'][_0x758eca(0x12f)](this),this[_0x758eca(0xa9)]();},Sprite_Battler[_0x5c3299(0x108)][_0x5c3299(0xa9)]=function(){const _0x1c58db=_0x5c3299;if(!this[_0x1c58db(0xec)])return;this['_distortionSprite'][_0x1c58db(0x172)]=this[_0x1c58db(0xec)][_0x1c58db(0x172)]||[],this['createMotionBlurImpactFilter']();},VisuMZ[_0x5c3299(0x13e)][_0x5c3299(0xc4)]=Sprite_Battler[_0x5c3299(0x108)][_0x5c3299(0x14b)],Sprite_Battler[_0x5c3299(0x108)][_0x5c3299(0x14b)]=function(){const _0x7af034=_0x5c3299;VisuMZ['ActSeqImpact'][_0x7af034(0xc4)][_0x7af034(0x12f)](this),this[_0x7af034(0xe7)](),this[_0x7af034(0xd0)]();},Sprite_Battler[_0x5c3299(0x108)][_0x5c3299(0xe7)]=function(){const _0x3cdd66=_0x5c3299;if(this[_0x3cdd66(0x123)]===Sprite_SvEnemy)return;if(!this[_0x3cdd66(0x106)])return;if(!this[_0x3cdd66(0x106)][_0x3cdd66(0x14a)]())return;if(!this[_0x3cdd66(0x106)]['isAppeared']())return;if(!this[_0x3cdd66(0x120)])return;if(!this[_0x3cdd66(0xec)])return;if(this[_0x3cdd66(0x175)]){this[_0x3cdd66(0x175)]=![];return;}if(Imported[_0x3cdd66(0xbc)]&&this['_dragonbones']){}const _0x318d02=this[_0x3cdd66(0x106)][_0x3cdd66(0x162)]();if(!_0x318d02[_0x3cdd66(0x110)])return;const _0xe0660d=Math[_0x3cdd66(0xd6)](0x1,_0x318d02[_0x3cdd66(0x15d)]);if(Graphics[_0x3cdd66(0x180)]%_0xe0660d!==0x0){if(_0x3cdd66(0xf7)!==_0x3cdd66(0xf7))this[_0x3cdd66(0xfb)]=_0x22739e;else return;}const _0xcf7001=SceneManager[_0x3cdd66(0xc0)][_0x3cdd66(0xb4)][_0x3cdd66(0xca)];if(!_0xcf7001){if(_0x3cdd66(0xed)!==_0x3cdd66(0xed)){let _0x221d0f=0x1;return _0x27f65e[_0x3cdd66(0xe8)]()&&(_0x221d0f=_0x18e7df[_0x3cdd66(0x103)](),_0x221d0f=_0x10ff05[_0x3cdd66(0xd6)](0.01,_0x221d0f)),_0x473dfe[_0x3cdd66(0x13e)][_0x3cdd66(0x112)]['call'](this,_0x13ba6a*_0x221d0f);}else return;}this[_0x3cdd66(0x175)]=!![];const _0x433176=new Sprite_BattlerMotionTrail(this,_0x318d02);_0xcf7001['addChild'](_0x433176);},Sprite_Battler[_0x5c3299(0x108)][_0x5c3299(0x15c)]=function(){const _0x45d2d9=_0x5c3299;if(!PIXI[_0x45d2d9(0x172)][_0x45d2d9(0xf6)])return;this[_0x45d2d9(0x11d)]=0x0,this['_motionBlurImpactWholeDuration']=0x0,this[_0x45d2d9(0xa2)]='Linear',this[_0x45d2d9(0x185)]=new PIXI['filters'][(_0x45d2d9(0xf6))](),this[_0x45d2d9(0x185)][_0x45d2d9(0xa6)]['x']=0x0,this[_0x45d2d9(0x185)][_0x45d2d9(0xa6)]['y']=0x0,this[_0x45d2d9(0xec)][_0x45d2d9(0x172)][_0x45d2d9(0x176)](this[_0x45d2d9(0x185)]);},Sprite_Battler[_0x5c3299(0x108)][_0x5c3299(0x114)]=function(_0x5acca5,_0x2056f3,_0x5d8af4,_0x382764){const _0x2d5e78=_0x5c3299;if(!this[_0x2d5e78(0x185)])return;const _0x2ea5ea=this['_motionBlurImpactFilter'];this['_motionBlurImpactDuration']=_0x5d8af4,this[_0x2d5e78(0x146)]=_0x5d8af4,this[_0x2d5e78(0xa2)]=_0x382764;const _0x352983=this['mainSpriteWidth']()*_0x2056f3,_0x2392d4=_0x352983*Math['cos'](_0x5acca5*Math['PI']/0xb4),_0xab839=-_0x352983*Math[_0x2d5e78(0x153)](_0x5acca5*Math['PI']/0xb4);_0x2ea5ea[_0x2d5e78(0xa6)]['x']=_0x2392d4,_0x2ea5ea[_0x2d5e78(0xa6)]['y']=_0xab839;},Sprite_Battler['prototype'][_0x5c3299(0xd0)]=function(){const _0xdbc2b2=_0x5c3299;if(!this['_motionBlurImpactFilter'])return;if(this[_0xdbc2b2(0x11d)]<=0x0)return;const _0x58dc6d=this[_0xdbc2b2(0x185)],_0x29b603=this[_0xdbc2b2(0x11d)]||0x0,_0x370278=this[_0xdbc2b2(0x146)]||_0x29b603,_0x4fc342=0x0,_0x206a05=this[_0xdbc2b2(0xa2)];_0x58dc6d[_0xdbc2b2(0xa6)]['x']=VisuMZ[_0xdbc2b2(0x13e)][_0xdbc2b2(0x160)](_0x58dc6d[_0xdbc2b2(0xa6)]['x'],_0x4fc342,_0x29b603,_0x370278,_0x206a05),_0x58dc6d[_0xdbc2b2(0xa6)]['y']=VisuMZ[_0xdbc2b2(0x13e)]['applyEasing'](_0x58dc6d['velocity']['y'],_0x4fc342,_0x29b603,_0x370278,_0x206a05),this['_motionBlurImpactDuration']--,this[_0xdbc2b2(0x11d)]<=0x0&&(_0x58dc6d[_0xdbc2b2(0xa6)]['x']=0x0,_0x58dc6d['velocity']['y']=0x0);},VisuMZ[_0x5c3299(0x13e)]['Sprite_Damage_setupCriticalEffect']=Sprite_Damage[_0x5c3299(0x108)]['setupCriticalEffect'],Sprite_Damage[_0x5c3299(0x108)][_0x5c3299(0xd9)]=function(){const _0xe475b0=_0x5c3299;VisuMZ[_0xe475b0(0x13e)][_0xe475b0(0x124)][_0xe475b0(0x12f)](this),this[_0xe475b0(0x113)]();},Sprite_Damage[_0x5c3299(0x108)]['setupCriticalEffectActSeqImpact']=function(){const _0x297c92=_0x5c3299,_0x374195=VisuMZ[_0x297c92(0x13e)][_0x297c92(0x109)][_0x297c92(0x143)];if(!_0x374195)return;if(!_0x374195[_0x297c92(0xa8)])return;const _0x43e4cf=SceneManager[_0x297c92(0xc0)][_0x297c92(0xb4)];if(!_0x43e4cf)return;if(_0x43e4cf[_0x297c92(0x159)]>0x0)return;const _0x2b8c3e=_0x374195[_0x297c92(0xe3)]||0x1,_0x418002=_0x374195[_0x297c92(0xb1)]||0x1,_0x56c6ad=_0x374195['EasingType']||'OutBack';_0x43e4cf[_0x297c92(0x9d)](_0x2b8c3e,_0x418002,_0x56c6ad);};function Sprite_BattlerMotionTrail(){const _0x49c753=_0x5c3299;this[_0x49c753(0x16e)](...arguments);}Sprite_BattlerMotionTrail['prototype']=Object[_0x5c3299(0x155)](Sprite[_0x5c3299(0x108)]),Sprite_BattlerMotionTrail[_0x5c3299(0x108)][_0x5c3299(0x123)]=Sprite_BattlerMotionTrail,Sprite_BattlerMotionTrail[_0x5c3299(0x108)][_0x5c3299(0x16e)]=function(_0x45d7ce,_0x4aea37){const _0x51ba88=_0x5c3299;this[_0x51ba88(0xa3)]=_0x45d7ce,this[_0x51ba88(0x138)]=_0x4aea37,Sprite[_0x51ba88(0x108)]['initialize']['call'](this),this[_0x51ba88(0x11c)](),this['setupMotionTrailProperties']();},Sprite_BattlerMotionTrail[_0x5c3299(0x108)][_0x5c3299(0x11c)]=function(){const _0xa10c95=_0x5c3299,_0x35af21=this[_0xa10c95(0xa3)][_0xa10c95(0xec)];this[_0xa10c95(0xec)]=new Sprite(),this[_0xa10c95(0x16f)](this[_0xa10c95(0xec)]),this[_0xa10c95(0x100)](this[_0xa10c95(0xec)],_0x35af21,!![]);},Sprite_BattlerMotionTrail[_0x5c3299(0x108)]['matchSpriteProperties']=function(_0x57d47a,_0x54d9e5,_0x394ce2){const _0x426c04=_0x5c3299;_0x57d47a['bitmap']=_0x54d9e5['bitmap'];const _0x473bc9=_0x54d9e5[_0x426c04(0x18c)];_0x473bc9&&_0x57d47a[_0x426c04(0x127)](_0x473bc9['x'],_0x473bc9['y'],_0x473bc9['width'],_0x473bc9[_0x426c04(0xbd)]);_0x57d47a[_0x426c04(0xc5)]['x']=_0x54d9e5[_0x426c04(0xc5)]['x'],_0x57d47a['anchor']['y']=_0x54d9e5[_0x426c04(0xc5)]['y'],_0x57d47a[_0x426c04(0xd2)]['x']=_0x54d9e5[_0x426c04(0xd2)]['x'],_0x57d47a['scale']['y']=_0x54d9e5[_0x426c04(0xd2)]['y'],_0x57d47a[_0x426c04(0x170)]=_0x54d9e5[_0x426c04(0x170)],_0x57d47a[_0x426c04(0xc3)]['x']=_0x54d9e5[_0x426c04(0xc3)]['x'],_0x57d47a[_0x426c04(0xc3)]['y']=_0x54d9e5[_0x426c04(0xc3)]['y'],_0x57d47a['x']=_0x54d9e5['x'],_0x57d47a['y']=_0x54d9e5['y'],_0x57d47a[_0x426c04(0xc9)](_0x54d9e5[_0x426c04(0x14d)]);if(_0x394ce2)for(const _0x40f6ff of _0x54d9e5[_0x426c04(0xef)]){if(!_0x40f6ff)continue;if(_0x40f6ff[_0x426c04(0x10a)])_0x426c04(0xa1)===_0x426c04(0xc6)?(_0x5df46d&&(_0x4d530c['_waitCount']=_0x13be86[_0x426c04(0x16a)]||0x0,_0x3e0103['_waitCount']=_0x4bd838[_0x426c04(0xd6)](_0xfd7b3d[_0x426c04(0x16a)],0x1)),_0x330d7b=_0x17c795||0x1,_0x457095['stopGameLoop'](),_0x1b43d5(_0x48abe4[_0x426c04(0x163)]['bind'](_0x163ca1),_0x397154)):this[_0x426c04(0xdf)](_0x57d47a,_0x40f6ff);else{const _0x194d4f=new Sprite();_0x57d47a[_0x426c04(0x16f)](_0x194d4f),this[_0x426c04(0x100)](_0x194d4f,_0x40f6ff,!![]);}}},Sprite_BattlerMotionTrail[_0x5c3299(0x108)][_0x5c3299(0xdf)]=function(_0x4cbe81,_0xd2c111){const _0x4a04bc=_0x5c3299,_0x22f604=this[_0x4a04bc(0xa3)][_0x4a04bc(0x106)]['dragonbonesData']();this[_0x4a04bc(0xda)]=DragonbonesManager[_0x4a04bc(0xad)](_0x22f604[_0x4a04bc(0xe0)]),_0x4cbe81['addChild'](this[_0x4a04bc(0xda)]);const _0x571b2c=_0xd2c111[_0x4a04bc(0x122)][_0x4a04bc(0xa7)],_0x4b90a0=_0xd2c111[_0x4a04bc(0x122)][_0x4a04bc(0x167)][_0x4a04bc(0x118)];this['_dragonbones'][_0x4a04bc(0x122)]['gotoAndStopByTime'](_0x571b2c,_0x4b90a0),this[_0x4a04bc(0xda)]['x']=_0x22f604[_0x4a04bc(0x13f)],this[_0x4a04bc(0xda)]['y']=_0x22f604[_0x4a04bc(0x119)],this[_0x4a04bc(0xda)][_0x4a04bc(0xd2)]['x']=_0x22f604[_0x4a04bc(0x17b)],this[_0x4a04bc(0xda)]['scale']['y']=_0x22f604[_0x4a04bc(0x128)],_0x4cbe81[_0x4a04bc(0x183)]=0x0,_0x4cbe81[_0x4a04bc(0x149)]=0x2,_0x4cbe81['update']();},Sprite_BattlerMotionTrail[_0x5c3299(0x108)][_0x5c3299(0x12d)]=function(){const _0x2b026e=_0x5c3299,_0x9f78dc=this[_0x2b026e(0xa3)],_0x1072f1=this[_0x2b026e(0x138)];this[_0x2b026e(0xf1)]=_0x1072f1['duration'],this[_0x2b026e(0x183)]=_0x1072f1[_0x2b026e(0x17e)],this[_0x2b026e(0x100)](this,_0x9f78dc),this[_0x2b026e(0xcf)]=_0x9f78dc[_0x2b026e(0xcf)],this[_0x2b026e(0xa0)]=_0x9f78dc['_baseY'],this['setHue'](_0x1072f1['hue']),this[_0x2b026e(0x13d)](_0x1072f1[_0x2b026e(0x13a)]);},Sprite_BattlerMotionTrail[_0x5c3299(0x108)]['update']=function(){const _0x39296f=_0x5c3299;Sprite[_0x39296f(0x108)][_0x39296f(0x14b)][_0x39296f(0x12f)](this),this[_0x39296f(0x148)](this[_0x39296f(0xef)]),this['updateDuration']();},Sprite_BattlerMotionTrail[_0x5c3299(0x108)][_0x5c3299(0x148)]=function(_0x4112af){const _0x51bdf3=_0x5c3299;if(!_0x4112af)return;for(const _0x2d2493 of _0x4112af){if(!_0x2d2493)continue;_0x2d2493[_0x51bdf3(0x149)]&&(_0x2d2493[_0x51bdf3(0x149)]--,_0x2d2493[_0x51bdf3(0x149)]<=0x0&&(_0x2d2493[_0x51bdf3(0x183)]=0xff,_0x2d2493['nextOpacity']=undefined)),this['updateNextOpacities'](_0x2d2493[_0x51bdf3(0xef)]);}},Sprite_BattlerMotionTrail[_0x5c3299(0x108)][_0x5c3299(0x111)]=function(){const _0x28d63d=_0x5c3299;if(this[_0x28d63d(0xf1)]>0x0){if(_0x28d63d(0x9b)!==_0x28d63d(0x158)){const _0x43e314=this[_0x28d63d(0xf1)];this[_0x28d63d(0x183)]=(this[_0x28d63d(0x183)]*(_0x43e314-0x1)+0x0)/_0x43e314,this[_0x28d63d(0xf1)]--,this['_duration']<=0x0&&this[_0x28d63d(0xb6)]();}else _0x39a349[_0x28d63d(0xa6)]['x']=0x0,_0x537dd0[_0x28d63d(0xa6)]['y']=0x0;}},Sprite_BattlerMotionTrail['prototype'][_0x5c3299(0xb6)]=function(){const _0x4e0e42=_0x5c3299;this['parent'][_0x4e0e42(0x165)](this);this[_0x4e0e42(0xda)]&&(_0x4e0e42(0x182)===_0x4e0e42(0x182)?(this['_dragonbones']['dispose'](),this[_0x4e0e42(0xda)]=null):(this[_0x4e0e42(0xda)][_0x4e0e42(0xb2)](),this[_0x4e0e42(0xda)]=null));const _0x33e7f4=SceneManager[_0x4e0e42(0xc0)]['_spriteset'];if(_0x33e7f4&&!_0x33e7f4[_0x4e0e42(0x189)](this[_0x4e0e42(0xa3)])){const _0x4c638d=_0x33e7f4['_battlerContainer'];_0x4c638d['addChild'](this[_0x4e0e42(0xa3)]),_0x33e7f4[_0x4e0e42(0x156)]();}},VisuMZ['ActSeqImpact']['Spriteset_Base_createBaseFilters']=Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0xc1)],Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0xc1)]=function(){const _0x43de57=_0x5c3299;VisuMZ[_0x43de57(0x13e)][_0x43de57(0xe4)][_0x43de57(0x12f)](this),this[_0x43de57(0x18a)]();},VisuMZ[_0x5c3299(0x13e)][_0x5c3299(0xe9)]=Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x130)],Spriteset_Base['prototype']['updateBaseFilters']=function(){const _0x1e98cc=_0x5c3299;VisuMZ[_0x1e98cc(0x13e)][_0x1e98cc(0xe9)][_0x1e98cc(0x12f)](this),this[_0x1e98cc(0x10f)]();},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x18a)]=function(){const _0x2d02e0=_0x5c3299;this[_0x2d02e0(0x18b)](),this['_shockwaveImpactFilters']=[],this[_0x2d02e0(0x15c)](),this[_0x2d02e0(0xf9)](),this[_0x2d02e0(0xfa)](),this['createDesaturateImpactFilter'](),this[_0x2d02e0(0x10c)](),this[_0x2d02e0(0x181)]();},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x10f)]=function(){const _0x464038=_0x5c3299;this[_0x464038(0x107)](),this['updateShockwaveImpactFilters'](),this[_0x464038(0xd0)](),this[_0x464038(0x11b)]();},VisuMZ['ActSeqImpact'][_0x5c3299(0x160)]=function(_0x4dcc9c,_0x39975b,_0x24008a,_0x538c59,_0x3e3d28){const _0x2124c7=_0x5c3299,_0x478356=VisuMZ[_0x2124c7(0x17f)]((_0x538c59-_0x24008a)/_0x538c59,_0x3e3d28||_0x2124c7(0xf5)),_0x41422b=VisuMZ['ApplyEasing']((_0x538c59-_0x24008a+0x1)/_0x538c59,_0x3e3d28||_0x2124c7(0xf5)),_0x471832=(_0x4dcc9c-_0x39975b*_0x478356)/(0x1-_0x478356);return _0x471832+(_0x39975b-_0x471832)*_0x41422b;},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x18b)]=function(){const _0x51dad9=_0x5c3299;if(!PIXI[_0x51dad9(0x172)][_0x51dad9(0xce)])return;if(this[_0x51dad9(0x11e)])return;this[_0x51dad9(0x159)]=0x0,this[_0x51dad9(0xc2)]=0x0,this['_rgbSplitImpactEasing']='Linear',this[_0x51dad9(0x11e)]=new PIXI[(_0x51dad9(0x172))][(_0x51dad9(0xce))](),this[_0x51dad9(0x11e)][_0x51dad9(0x171)]=[0x0,0x0],this[_0x51dad9(0x11e)][_0x51dad9(0xd4)]=[0x0,0x0],this[_0x51dad9(0x11e)][_0x51dad9(0x168)]=[0x0,0x0],this[_0x51dad9(0xd7)][_0x51dad9(0x172)][_0x51dad9(0x176)](this[_0x51dad9(0x11e)]);},Spriteset_Base[_0x5c3299(0x108)]['setupRgbSplitImpactFilter']=function(_0x16c88,_0x2a4585,_0x54f742){const _0x3daa27=_0x5c3299;if(!this[_0x3daa27(0x11e)])return;const _0x44042b=this[_0x3daa27(0x11e)],_0x14ebb2=_0x16c88*0x2;this[_0x3daa27(0x159)]=_0x2a4585,this[_0x3daa27(0xc2)]=_0x2a4585,this[_0x3daa27(0x104)]=_0x54f742||_0x3daa27(0xf5),_0x44042b[_0x3daa27(0x171)]=[Math[_0x3daa27(0x15b)](_0x14ebb2)-_0x16c88,Math['randomInt'](_0x14ebb2)-_0x16c88],_0x44042b['green']=[Math[_0x3daa27(0x15b)](_0x14ebb2)-_0x16c88,Math[_0x3daa27(0x15b)](_0x14ebb2)-_0x16c88],_0x44042b[_0x3daa27(0x168)]=[Math[_0x3daa27(0x15b)](_0x14ebb2)-_0x16c88,Math['randomInt'](_0x14ebb2)-_0x16c88];},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x107)]=function(){const _0x3e5a73=_0x5c3299;if(!this['_rgbSplitImpactFilter'])return;if(this['_rgbSplitImpactDuration']<=0x0)return;const _0x1c2656=this[_0x3e5a73(0x11e)],_0x23f8a2=this['_rgbSplitImpactDuration']||0x0,_0x4f000d=this[_0x3e5a73(0xc2)]||_0x23f8a2,_0x3843c1=0x0,_0x2eded9=this[_0x3e5a73(0x104)];_0x1c2656[_0x3e5a73(0x171)][0x0]=VisuMZ[_0x3e5a73(0x13e)][_0x3e5a73(0x160)](_0x1c2656[_0x3e5a73(0x171)][0x0],_0x3843c1,_0x23f8a2,_0x4f000d,_0x2eded9),_0x1c2656[_0x3e5a73(0x171)][0x1]=VisuMZ['ActSeqImpact']['applyEasing'](_0x1c2656[_0x3e5a73(0x171)][0x1],_0x3843c1,_0x23f8a2,_0x4f000d,_0x2eded9),_0x1c2656[_0x3e5a73(0xd4)][0x0]=VisuMZ['ActSeqImpact'][_0x3e5a73(0x160)](_0x1c2656[_0x3e5a73(0xd4)][0x0],_0x3843c1,_0x23f8a2,_0x4f000d,_0x2eded9),_0x1c2656[_0x3e5a73(0xd4)][0x1]=VisuMZ['ActSeqImpact'][_0x3e5a73(0x160)](_0x1c2656[_0x3e5a73(0xd4)][0x1],_0x3843c1,_0x23f8a2,_0x4f000d,_0x2eded9),_0x1c2656[_0x3e5a73(0x168)][0x0]=VisuMZ[_0x3e5a73(0x13e)][_0x3e5a73(0x160)](_0x1c2656['blue'][0x0],_0x3843c1,_0x23f8a2,_0x4f000d,_0x2eded9),_0x1c2656['blue'][0x1]=VisuMZ[_0x3e5a73(0x13e)][_0x3e5a73(0x160)](_0x1c2656[_0x3e5a73(0x168)][0x1],_0x3843c1,_0x23f8a2,_0x4f000d,_0x2eded9),this['_rgbSplitImpactDuration']--,this['_rgbSplitImpactDuration']<=0x0&&(_0x1c2656[_0x3e5a73(0x171)]=[0x0,0x0],_0x1c2656['green']=[0x0,0x0],_0x1c2656[_0x3e5a73(0x168)]=[0x0,0x0]);},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x17a)]=function(_0x2b76f7,_0x103ee0,_0xfea30b,_0x33fae6,_0x4014d0){const _0x272a16=_0x5c3299;if(!PIXI[_0x272a16(0x172)][_0x272a16(0x135)])return;const _0x3d5e0c=0x2/Math[_0x272a16(0xd6)](0x2,_0x4014d0),_0x31bec4=new PIXI[(_0x272a16(0x172))][(_0x272a16(0x135))]();_0x31bec4['center']=[_0x2b76f7,_0x103ee0],_0x31bec4['amplitude']=_0xfea30b,_0x31bec4['waveLength']=_0x33fae6,_0x31bec4['brightness']=0x1,_0x31bec4[_0x272a16(0x17c)]=-0x1,_0x31bec4[_0x272a16(0xe1)]=_0x3d5e0c,this[_0x272a16(0x12a)][_0x272a16(0x176)](_0x31bec4),this['_baseSprite']['filters'][_0x272a16(0x176)](_0x31bec4);},Spriteset_Base[_0x5c3299(0x108)]['updateShockwaveImpactFilters']=function(){const _0x3fe770=_0x5c3299;if(!this[_0x3fe770(0x12a)])return;if(this['_shockwaveImpactFilters'][_0x3fe770(0x161)]<=0x0)return;for(const _0x11d7ef of this[_0x3fe770(0x12a)]){if(!_0x11d7ef)continue;_0x11d7ef[_0x3fe770(0x177)]+=_0x11d7ef[_0x3fe770(0xe1)];if(_0x11d7ef['time']>=0x2){if(_0x3fe770(0x186)===_0x3fe770(0x186))this[_0x3fe770(0x12a)][_0x3fe770(0x12e)](_0x11d7ef),this[_0x3fe770(0xd7)]['filters'][_0x3fe770(0x12e)](_0x11d7ef);else return _0x5b22e9[_0x3fe770(0x141)]&&_0x28ace2['description'][_0x3fe770(0xbe)]('['+_0x493e3b+']');}}},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x15c)]=function(){const _0x1f5277=_0x5c3299;if(!PIXI[_0x1f5277(0x172)]['MotionBlurFilter'])return;this[_0x1f5277(0x11d)]=0x0,this[_0x1f5277(0x146)]=0x0,this[_0x1f5277(0xa2)]=_0x1f5277(0xf5),this[_0x1f5277(0x185)]=new PIXI[(_0x1f5277(0x172))]['MotionBlurFilter'](),this['_motionBlurImpactFilter'][_0x1f5277(0xa6)]['x']=0x0,this[_0x1f5277(0x185)][_0x1f5277(0xa6)]['y']=0x0,this[_0x1f5277(0xd7)]['filters'][_0x1f5277(0x176)](this['_motionBlurImpactFilter']);},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x114)]=function(_0x5056a7,_0x3ca6e7,_0x3bf153,_0x145cad){const _0x2f4d62=_0x5c3299;if(!this[_0x2f4d62(0x185)])return;const _0x556c2c=this[_0x2f4d62(0x185)];this['_motionBlurImpactDuration']=_0x3bf153,this[_0x2f4d62(0x146)]=_0x3bf153,this[_0x2f4d62(0xa2)]=_0x145cad;const _0x296ba5=Math[_0x2f4d62(0xd6)](this[_0x2f4d62(0xcc)],this[_0x2f4d62(0xbd)])*_0x3ca6e7,_0x29ef73=_0x296ba5*Math[_0x2f4d62(0x15a)](_0x5056a7*Math['PI']/0xb4),_0x531515=-_0x296ba5*Math[_0x2f4d62(0x153)](_0x5056a7*Math['PI']/0xb4);_0x556c2c[_0x2f4d62(0xa6)]['x']=_0x29ef73,_0x556c2c[_0x2f4d62(0xa6)]['y']=_0x531515;},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0xd0)]=function(){const _0x4aad2a=_0x5c3299;if(!this[_0x4aad2a(0x185)])return;if(this[_0x4aad2a(0x11d)]<=0x0)return;const _0x598a94=this[_0x4aad2a(0x185)],_0x5d38ab=this[_0x4aad2a(0x11d)]||0x0,_0xce3988=this[_0x4aad2a(0x146)]||_0x5d38ab,_0x5ef755=0x0,_0x557aa0=this[_0x4aad2a(0xa2)];_0x598a94['velocity']['x']=VisuMZ['ActSeqImpact']['applyEasing'](_0x598a94[_0x4aad2a(0xa6)]['x'],_0x5ef755,_0x5d38ab,_0xce3988,_0x557aa0),_0x598a94[_0x4aad2a(0xa6)]['y']=VisuMZ[_0x4aad2a(0x13e)][_0x4aad2a(0x160)](_0x598a94[_0x4aad2a(0xa6)]['y'],_0x5ef755,_0x5d38ab,_0xce3988,_0x557aa0),this[_0x4aad2a(0x11d)]--,this[_0x4aad2a(0x11d)]<=0x0&&(_0x598a94[_0x4aad2a(0xa6)]['x']=0x0,_0x598a94[_0x4aad2a(0xa6)]['y']=0x0);},Spriteset_Base[_0x5c3299(0x108)]['createZoomBlurImpactFilter']=function(){const _0x1d2cd5=_0x5c3299;if(!PIXI[_0x1d2cd5(0x172)]['ZoomBlurFilter'])return;this[_0x1d2cd5(0xc7)]=0x0,this[_0x1d2cd5(0x132)]=0x0,this[_0x1d2cd5(0xd5)]=_0x1d2cd5(0xf5),this[_0x1d2cd5(0x117)]=new PIXI['filters'][(_0x1d2cd5(0x129))](),this[_0x1d2cd5(0x117)][_0x1d2cd5(0xfd)]=0x0,this[_0x1d2cd5(0x117)][_0x1d2cd5(0x169)]['x']=Graphics[_0x1d2cd5(0xcc)]/0x2,this[_0x1d2cd5(0x117)][_0x1d2cd5(0x169)]['y']=Graphics[_0x1d2cd5(0xbd)]/0x2,this[_0x1d2cd5(0x117)][_0x1d2cd5(0xf8)]=0x60,this[_0x1d2cd5(0xd7)]['filters'][_0x1d2cd5(0x176)](this[_0x1d2cd5(0x117)]);},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x178)]=function(_0x51e76c,_0x592191,_0x252667,_0x2624e7,_0xfeae85,_0x44eb93){const _0x1b5655=_0x5c3299;if(!this[_0x1b5655(0x117)])return;const _0x4e6971=this['_zoomBlurImpactFilter'];this[_0x1b5655(0xc7)]=_0xfeae85,this[_0x1b5655(0x132)]=_0xfeae85,this[_0x1b5655(0xd5)]=_0x44eb93,_0x4e6971['strength']=_0x51e76c,_0x4e6971['center']['x']=_0x592191,_0x4e6971['center']['y']=_0x252667,_0x4e6971[_0x1b5655(0xf8)]=_0x2624e7;},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x11b)]=function(){const _0x4f8e7a=_0x5c3299;if(!this['_zoomBlurImpactFilter'])return;if(this[_0x4f8e7a(0xc7)]<=0x0)return;const _0x533054=this[_0x4f8e7a(0x117)],_0x301cb1=this[_0x4f8e7a(0xc7)]||0x0,_0x3f49c2=this[_0x4f8e7a(0x132)]||_0x301cb1,_0x2aab94=0x0,_0x57e073=this[_0x4f8e7a(0xd5)];_0x533054[_0x4f8e7a(0xfd)]=VisuMZ[_0x4f8e7a(0x13e)][_0x4f8e7a(0x160)](_0x533054['strength'],_0x2aab94,_0x301cb1,_0x3f49c2,_0x57e073),this[_0x4f8e7a(0xc7)]--,this[_0x4f8e7a(0xc7)]<=0x0&&(_0x533054['strength']=0x0);},Spriteset_Base['prototype'][_0x5c3299(0xfa)]=function(){const _0x37c99c=_0x5c3299;if(!PIXI[_0x37c99c(0x172)][_0x37c99c(0x11f)])return;this[_0x37c99c(0xbf)]=new PIXI[(_0x37c99c(0x172))][(_0x37c99c(0x11f))](),this[_0x37c99c(0xbf)]['toBGR'](),this[_0x37c99c(0xbf)][_0x37c99c(0x147)]=![],this[_0x37c99c(0xd7)]['filters']['push'](this[_0x37c99c(0xbf)]);},Spriteset_Base['prototype']['setupBlueRedInvertImpactFilter']=function(_0x14c1b2){const _0x4b2ed4=_0x5c3299;if(!this['_blueRedInvertImpactFilter'])return;this[_0x4b2ed4(0xbf)]['enabled']=_0x14c1b2,this['update']();},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x164)]=function(){const _0x2072a5=_0x5c3299;if(!PIXI[_0x2072a5(0x172)][_0x2072a5(0x11f)])return;this[_0x2072a5(0xb5)]=new PIXI[(_0x2072a5(0x172))]['ColorMatrixFilter'](),this['_desaturateImpactFilter'][_0x2072a5(0x145)](),this[_0x2072a5(0xb5)][_0x2072a5(0x147)]=![],this[_0x2072a5(0xd7)][_0x2072a5(0x172)]['push'](this['_desaturateImpactFilter']);},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x14f)]=function(_0x14c164){const _0x4d7319=_0x5c3299;if(!this[_0x4d7319(0xb5)])return;this['_desaturateImpactFilter'][_0x4d7319(0x147)]=_0x14c164,this[_0x4d7319(0x14b)]();},Spriteset_Base[_0x5c3299(0x108)][_0x5c3299(0x10c)]=function(){const _0x5ddd91=_0x5c3299;if(!PIXI['filters']['ColorMatrixFilter'])return;this[_0x5ddd91(0xa5)]=new PIXI[(_0x5ddd91(0x172))][(_0x5ddd91(0x11f))](),this[_0x5ddd91(0xa5)]['negative'](),this[_0x5ddd91(0xa5)][_0x5ddd91(0x147)]=![],this[_0x5ddd91(0xd7)][_0x5ddd91(0x172)][_0x5ddd91(0x176)](this[_0x5ddd91(0xa5)]);},Spriteset_Base[_0x5c3299(0x108)]['setupNegativeImpactFilter']=function(_0x2022f9){const _0x417789=_0x5c3299;if(!this[_0x417789(0xa5)])return;this[_0x417789(0xa5)][_0x417789(0x147)]=_0x2022f9,this[_0x417789(0x14b)]();},Spriteset_Base[_0x5c3299(0x108)]['createOversaturateImpactFilter']=function(){const _0x3b5e5e=_0x5c3299;if(!PIXI[_0x3b5e5e(0x172)][_0x3b5e5e(0x11f)])return;this[_0x3b5e5e(0x131)]=new PIXI['filters'][(_0x3b5e5e(0x11f))](),this[_0x3b5e5e(0x131)]['lsd'](),this[_0x3b5e5e(0x131)][_0x3b5e5e(0x147)]=![],this[_0x3b5e5e(0xd7)][_0x3b5e5e(0x172)][_0x3b5e5e(0x176)](this['_oversaturateImpactFilter']);},Spriteset_Base[_0x5c3299(0x108)]['setupOversaturateImpactFilter']=function(_0x385c06){const _0x1d2370=_0x5c3299;if(!this['_oversaturateImpactFilter'])return;this[_0x1d2370(0x131)][_0x1d2370(0x147)]=_0x385c06,this[_0x1d2370(0x14b)]();},VisuMZ[_0x5c3299(0x13e)][_0x5c3299(0x13b)]=Spriteset_Battle[_0x5c3299(0x108)][_0x5c3299(0x17d)],Spriteset_Battle[_0x5c3299(0x108)][_0x5c3299(0x17d)]=function(){const _0x2a5782=_0x5c3299;VisuMZ[_0x2a5782(0x13e)]['Spriteset_Battle_createBattleFieldContainer'][_0x2a5782(0x12f)](this),this[_0x2a5782(0xca)]=new Sprite(),this[_0x2a5782(0x9c)]['addChild'](this['_motionTrailContainer']),this['_projectilesContainer']&&this[_0x2a5782(0x9c)][_0x2a5782(0x16f)](this[_0x2a5782(0xf3)]);},VisuMZ[_0x5c3299(0x13e)][_0x5c3299(0x121)]=Spriteset_Battle[_0x5c3299(0x108)][_0x5c3299(0xeb)],Spriteset_Battle[_0x5c3299(0x108)][_0x5c3299(0xeb)]=function(){const _0x181e8e=_0x5c3299;VisuMZ['ActSeqImpact']['Spriteset_Battle_adjustFlippedBattlefield'][_0x181e8e(0x12f)](this),this[_0x181e8e(0xca)]&&this['_battlerContainer']&&(this[_0x181e8e(0xca)][_0x181e8e(0xd2)]['x']=this[_0x181e8e(0x179)]['scale']['x'],this[_0x181e8e(0xca)][_0x181e8e(0xd2)]['y']=this['_battlerContainer']['scale']['y'],this[_0x181e8e(0xca)]['x']=this[_0x181e8e(0x179)]['x'],this[_0x181e8e(0xca)]['y']=this[_0x181e8e(0x179)]['y']);},VisuMZ[_0x5c3299(0x13e)][_0x5c3299(0x184)]=Spriteset_Battle['prototype']['updateBattlerContainer'],Spriteset_Battle['prototype'][_0x5c3299(0x156)]=function(){const _0x1734fa=_0x5c3299;VisuMZ[_0x1734fa(0x13e)][_0x1734fa(0x184)][_0x1734fa(0x12f)](this),this['putMotionTrailBattlersOnTop'](),this['sortMotionTrailBattlers']();},Spriteset_Battle[_0x5c3299(0x108)]['putMotionTrailBattlersOnTop']=function(){const _0x528072=_0x5c3299;for(const _0x350403 of this[_0x528072(0x179)][_0x528072(0xef)]){if(!_0x350403)continue;this['hasMotionTrailSprite'](_0x350403)&&(_0x528072(0x18d)!==_0x528072(0x18d)?(_0xb058db[_0x528072(0x13e)]['Sprite_Damage_setupCriticalEffect'][_0x528072(0x12f)](this),this[_0x528072(0x113)]()):this[_0x528072(0xca)][_0x528072(0x16f)](_0x350403));}},Spriteset_Battle[_0x5c3299(0x108)]['hasMotionTrailSprite']=function(_0x16cf6f){const _0x544d31=_0x5c3299;if(!this[_0x544d31(0xca)])return![];return this[_0x544d31(0xca)][_0x544d31(0xef)][_0x544d31(0x15f)](_0x52726f=>_0x52726f[_0x544d31(0xa3)]===_0x16cf6f);},Spriteset_Battle[_0x5c3299(0x108)][_0x5c3299(0x134)]=function(){const _0x55fe5d=_0x5c3299;if(!this['_motionTrailContainer']){if(_0x55fe5d(0x12c)===_0x55fe5d(0xea))_0x12eed4[_0x55fe5d(0x13e)]['Spriteset_Base_updateBaseFilters']['call'](this),this[_0x55fe5d(0x10f)]();else return![];}const _0x812f6d=this['_motionTrailContainer'][_0x55fe5d(0xef)][_0x55fe5d(0x152)](_0xa3b662=>_0xa3b662['constructor']!==Sprite_BattlerMotionTrail);for(const _0x390ff3 of _0x812f6d){if(_0x55fe5d(0xfc)===_0x55fe5d(0xfc))this[_0x55fe5d(0xca)][_0x55fe5d(0x16f)](_0x390ff3);else{const _0x965efa=_0x36e193[_0x55fe5d(0x179)];_0x965efa['addChild'](this[_0x55fe5d(0xa3)]),_0x714abc[_0x55fe5d(0x156)]();}}},VisuMZ[_0x5c3299(0x13e)]['freezeTime']=function(_0x44410e,_0x5a5de1){const _0x3a00b0=_0x5c3299;_0x5a5de1&&(_0x5a5de1[_0x3a00b0(0x16a)]=_0x5a5de1[_0x3a00b0(0x16a)]||0x0,_0x5a5de1['_waitCount']=Math['max'](_0x5a5de1[_0x3a00b0(0x16a)],0x1)),_0x44410e=_0x44410e||0x1,Graphics[_0x3a00b0(0xaa)](),setTimeout(Graphics[_0x3a00b0(0x163)][_0x3a00b0(0x137)](Graphics),_0x44410e);};