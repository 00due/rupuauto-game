//=============================================================================
// VisuStella MZ - Weather Effects
// VisuMZ_2_WeatherEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_WeatherEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeatherEffects = VisuMZ.WeatherEffects || {};
VisuMZ.WeatherEffects.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.03] [WeatherEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weather_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ didn't come with too many weather effects. Only three: rain,
 * storm, and snow. This plugin will ramp that number up a considerable amount
 * and revise the way the original three weathers look, too. These new weather
 * patterns will help breathe life into your game for various scenarios and/or
 * cutscenes. The added control and customization options mean you can alter
 * their behaviors to your liking.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assign multiple weathers up to a max of 20. For maps, there are 10 layers
 *   on top of the map and another 10 layers behind the tilemap (but above the
 *   parallax layer).
 * * Set certain maps to not show any weather through notetags. This allows you
 *   to avoid having to turn on and off your weather settings.
 * * The basic RPG Maker MZ weather patterns (Rain, Storm, and Snow) have been
 *   recreated to look better than before.
 * * Plugin Commands allow for game devs to place the newly added weather types
 *   with intricate levels of customization.
 * * Customization options available for weather patterns include spawn numbers
 *   control, spawn location control, opacity easing, trajectory properties,
 *   coloring options, overlay dimmer control, and more!
 * * There are 10 weather patterns for each of the 8-themed elements, alongside
 *   lots of preset icon-related weather patterns for over 80+ weather pattern
 *   types to choose from.
 * * More basic and easier to use directional flying icon weather patterns of
 *   varying speeds can be used to ease yourself into how weather patterns can
 *   be customized.
 * * Newly added weather patterns come with their own generated sprites.
 *   There's no need to use custom images or such unless you want to. Custom
 *   images can come in the form of icons or pictures. Some generated sprites
 *   include many variances (such as Snowflakes).
 * * Weather layers can now be placed on top of the map or below the map, aka
 *   between the tilemap and parallax layer.
 * * Plugin Commands allow the player to clear multiple weather layers, adjust
 *   the power of multiple weather layers, memorize, and even replay multiple
 *   weather layer patterns in a go.
 * * Up to 20 layers can be used for weather, all of each having different
 *   settings. 10 layers for above the map. 10 layers for below the map. This
 *   can be utilized to create more detailed weather effects than ever before.
 * * Common Events can be linked up with weather patterns, launching parallel
 *   whenever a weather particular respawns, allowing for special effects like
 *   screen flashes and/or playing sounds. This allows devs to match up certain
 *   weather patterns like thunder sounds and flashes with thunder bolts.
 * * A new option "Weather Density" has been added. The amount of weather
 *   sprites on screen can be tuned downward in order to reduce frame drops for
 *   players with weaker computers.
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
 * * VisuMZ_0_CoreEngine
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them. Other things listed here are also worthy of
 * mentioning.
 *
 * ---
 *
 * Weather System Overwrite
 * 
 * As one would expect out of a plugin focused around changing weather effects,
 * the whole RPG Maker MZ weather system has been revamped. This means that a
 * lot of the default functions related to weather have been overwritten in
 * order to fulfill the demands of the plugin. Such demands include having more
 * control over the individual weather particles to the way the sprites are
 * handled and how the data persists for their behaviors.
 *
 * ---
 * 
 * Weather Layers
 * 
 * There are now multiple weather layers, allowing you to have multiple weather
 * patterns on simultaneously. Amongst the layers, there are upper and lower
 * layer types, too.
 * 
 * Upper layers are what RPG Maker MZ has, they exist above the tilemap. The
 * lower layers are new and exist below the tilemap but above the parallax
 * layer.
 * 
 * As such, weather effects below the tilemap won't be visible unless you are
 * using transparent tiles. This can be applied to windows or cliff tiles (for
 * some of these, you'll have to modify the tiles yourself). This effect can be
 * used to give a sense of depth, such as transparent windows observing a large
 * blizzard happening outside.
 * 
 * ---
 * 
 * Generated Weather Sprite Graphics
 * 
 * The default generated weather sprite graphics have been overwritten in favor
 * of better looking ones that we've made. Due to a technique that we've
 * created for this plugin, the generated weather sprites will also appear more
 * plentiful while keeping raw sprite counts low.
 * 
 * For those wondering, the "Rain", "Storm", and "Snow" weather types are the
 * default RPG Maker MZ weathers that we have changed. They can be accessed
 * through the usual event commands, or they can be accessed through Plugin
 * Commands.
 * 
 * Accessing these weather patterns through Plugin Commands gives you, the game
 * dev, more control over how they behave compared to the minimal control that
 * the default RPG Maker MZ event commands have.
 * 
 * ---
 * 
 * Custom Icons and Custom Pictures
 * 
 * If you plan on using custom icons or custom pictures, you might find it odd
 * that there is less volume of the weather sprite on the screen compared to
 * the generated graphics. This is due to a custering replication technique we
 * use for the sprite textures that make them appear more plentiful. To remedy
 * this, adjust the weight values for the icon variations and picture
 * variations to be higher than that of the generated sprites.
 * 
 * When designing custom icons and/or custom pictures for weather sprite
 * purposes, design them facing right at "0 degrees". This way, the angle will
 * align better and you can avoid using the "Visual Angle Offset" if you are
 * unfamiliar or troubled by offsets.
 * 
 * ---
 * 
 * RPG Maker MZ Tints
 * 
 * Weather patterns placed on the below tileset layer will be covered by RPG
 * Maker MZ's default tint layer, thus, affected by it. However, there's
 * nothing we can do about that one unlike the darkness overlay provided by the
 * Lighting Effects plugin where there's a workaround. Either you use the
 * Lighting Effects darkness overlay or you play work around tint usage in
 * regards to below tileset layer.
 * 
 * Weather patterns placed above the tileset layer will NOT be affected by RPG
 * Maker MZ's default tint layer nor will it be affected by the darkness
 * overlay from the Lighting Effects plugin. This is because not all effects
 * should be affected by it. If you do want to apply a tint to you, you can do
 * so via the custom settings and apply the tint manually. It's not applied
 * from the getgo because it's more efficient to make the upper weather sprites
 * unaffected first and applied later than the opposite.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Battle Core
 *
 * Those with the Battle Core can have weather effects show up in battle, too.
 * This does not happen without it. This is because the Battle Core has
 * provided the code infrastructure to support battle weather and this plugin
 * ties in with that code infrastructure better.
 *
 * ---
 *
 * ============================================================================
 * Keeping FPS Stable
 * ============================================================================
 * 
 * As this is a plugin that adds special effects to your game, you do have to
 * be mindful about how you use the various Weather Effects features or else
 * your game will face FPS drops.
 *
 * ---
 * 
 * Here are a few things to keep in mind:
 * 
 * 1. Hues and tones are expensive to process graphically. Using a lot of hue
 *    and/or tone variations on lots of weather sprites at the same time can
 *    eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *    tone variations, keep the sprite count low by either using lower power
 *    settings or less sprites on the screen.
 * 
 * 2. Yes, this plugin provides 20 layers (10 for upper and 10 for lower), but
 *    that doesn't mean you should use all 20 at the same time at max power. Be
 *    moderate in how many weather layers you use at a time. Just because there
 *    is an option for the player to adjust the weather density doesn't mean it
 *    should be okay to go wild with weather layers.
 * 
 * 3. The majority of the default settings should be safe to use on their own,
 *    but that also suggests that they're used by themselves. You can usually
 *    combine three or four default weather patterns together across different
 *    layers, but do exercise restraint when customizing the settings from
 *    their default values and using more layers at a time.
 * 
 * 4. Avoid having too many sprites on the screen at once. Each weather sprite
 *    adds to the number of processes the game has to keep track of and update
 *    each individual frame. Especially weather patterns with sprites that
 *    alter light or affect it. While the plugin is optimized to allow handling
 *    of a decently large number of sprites within the hundreds, do not go
 *    overboard and use them with modesty.
 * 
 * 5. If you choose to not pre-render generated sprites at the start of the
 *    game, some weather patterns may take a bit of processing power to render
 *    generated sprites on the spot especially if there are a lot of sprites to
 *    work with. The pre-render option is the most ideal to use if you plan on
 *    using generated sprites. If you intend to use mostly icons or custom
 *    pictures, pre-rendering at the start of the game can be turned off.
 * 
 * ---
 * 
 * We are NOT responsible for irresponsible usage of this plugin that pushes
 * graphical processing to absolute limitations.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_LightingEffects
 * 
 * Weather patterns placed on the lower layer will be affected by the darkness
 * overlay that the VisuStella MZ Lighting Effects plugin utilizes. This means
 * that even the supposively "brighter" weather patterns will be dimmed out
 * (such as the Flame Wall or Aurora to name a few). To deal with this, use the
 * Lighting Effects plugin's "Auto-Light Regions" and mark the parallax visible
 * tiles with those said regions.
 * 
 * Weather patterns placed on the upper layer will not be affected by the
 * darkness overlay in order to allow the weather have better contrast in
 * addition to following RPG Maker MZ's decision to not have weather affected
 * by tints either. If you want to tint the upper layer weather, you can add
 * the tint manually through the weather pattern's custom Image Settings and
 * apply a hue.
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
 * === Convenience-Related Notetags ===
 * 
 * ---
 *
 * <No Weather>
 *
 * - Used for: Map Notetags
 * - Sets the map to not show any weather effects regardless of what's actually
 *   being set currently. Weather effects will resume once the player leaves
 *   the map and enters one that does not forbid weather effects.
 * - This is useful for indoor maps when you don't want to turn weather effects
 *   on and off constantly.
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
 * === Basic Plugin Commands ===
 * 
 * ---
 * 
 * BASIC: Adjust Weather Power
 * - Adjusts the power of the target weather layer(s).
 * 
 *   Layer(s):
 *   - Which weather layer(s) do you wish to adjust?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Adjust weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Power:
 *   - Adjust power by how much?
 *   - Caps at 1 and 9.
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How many frames to fully adjust the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 * 
 * ---
 *
 * BASIC: Clear Weather
 * - Clears out target weather layer(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to clear?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Clear weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 *
 *   Duration:
 *   - How many frames to fully clear the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 *
 * ---
 * 
 * BASIC: Memorize Weather
 * - Memorizes the settings for target weather pattern(s) so that you can
 *   reuse it later.
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to save?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Save weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 * ---
 * 
 * BASIC: Pre-Render Generated Weather
 * - Selects target weather type to pre-render the generated graphics for it.
 * - This is to help reduce future lag spikes on mobile devices.
 * 
 *   Weather Type:
 *   - Which weather type do you wish to pre-render?
 *   - This is to help reduce lag spikes when calling weathers.
 * 
 * ---
 * 
 * BASIC: Replay Memorized Weather
 * - Replays target memorized weather pattern(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to replay?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Replay weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Duration:
 *   - How many frames to fully replay the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?:
 *   - Wait for weather to completely replay before moving on with the next
 *     event command?
 * 
 * ---
 * 
 * === Weather Pattern-Related Plugin Commands ===
 * 
 * ---
 *
 * Weather Pattern
 * - All weather patterns provided by this plugin use the following format.
 * Yes, all of them. This is to ensure that there is familiarity when modifying
 * one weather pattern and then moving to another and reducing the amount of
 * time needed to fiddle around with each of them. As such, the parameters will
 * affect each weather pattern the same exact way.
 * 
 *   ---
 *
 *   Main Settings:
 *
 *     Power:
 *     - What weather power do you wish to apply?
 *     - Use values between 1 and 9.
 *     - You may use JavaScript code.
 *
 *     Duration:
 *     - How many frames to fully change the weather?
 *     - You may use JavaScript code.
 *
 *     Wait For Completion?:
 *     - Wait for weather to completely change before moving on with the next
 *       event command?
 * 
 *   ---
 * 
 *   Layer Settings
 *
 *     Layer(s):
 *     - Which weather layer(s) do you wish to apply changes?
 *     - Use values between 1 and 10.
 *     - You may use JavaScript code.
 *
 *     Upper/Lower?:
 *     - Play the weather pattern above the tileset or below it?
 *     - You can select "both" to affect both.
 * 
 *   ---
 * 
 *   Customization
 *
 *     Custom Settings:
 *     - Adjust the custom settings involving this weather.
 *     - More information below:
 *
 * ---
 *
 * Custom Settings
 * - Each weather pattern's "Custom Settings" will have each of the following
 * options available to it.
 *
 *   Sprite Settings:
 *   - The general settings involving the weather sprites.
 *
 *   Dimmer Overlay:
 *   - Settings involving the dimmer overlay cast over the screen.
 *
 *   Image Settings:
 *   - Settings for the images used for the weather sprites.
 *   - Weathers with multiple images will be picked at random.
 *
 *   Special Effects:
 *   - Specialized effects that are turned on for specific weather types can
 *     be found here.
 *
 *   Trajectory Settings:
 *   - Settings used to determine the trajectory a weather sprite will take
 *     and how they behave on it.
 *
 * ---
 *
 * Sprite Settings
 * - The general settings involving the weather sprites.
 *
 *   Lifespan:
 *   - Lifespan of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each lifespan value?
 *
 *     Spawn Location X:
 *     - What x location should the weather sprites appear?
 *
 *       Offset X:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: left. Positive: right.
 *
 *     Spawn Location Y:
 *     - What y location should the weather sprites appear?
 *
 *       Offset Y:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: up. Positive: down.
 *
 *     Map Bound?:
 *     - Do the weather sprites move with the map scrolling?
 *
 *   Starting Opacity:
 *   - Starting opacity of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each starting opacity value?
 *
 *     Easing Type:
 *     - Select which easing type you wish to apply for opacity.
 *
 *     Fade In Time:
 *     - How many frames does it take for the sprite to fade in?
 *     - Use 0 to start immediately at full opacity.
 *
 *   Scale:
 *   - What is the scale of the sprite?
 *   - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *     Variance:
 *     - What variance is there to the main scale value?
 *
 *     Ratio X:
 *     Ratio Y:
 *     - What is the ratio of this sprite's scale X/Y?
 *     - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *   Total Sprite Minimum:
 *   - What is the minimum number of sprites on the screen?
 *
 *     Total Per Power:
 *     - Increase the total number of sprites per power by this.
 *     - Lowest power is 1.
 *     - Highest power is 9.
 *
 * ---
 *
 * Dimmer Overlay
 * - Settings involving the dimmer overlay cast over the screen.
 *
 *   Color:
 *   - Dimmer color. This uses #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 *
 *   Opacity Minimum:
 *   - What is the minimum opacity value for the dimmer?
 *
 *     Opacity Per Power:
 *     - What is the total opacity value per power for the dimmer?
 *
 * ---
 *
 * Image Settings
 * - Settings for the images used for the weather sprites.
 * - Weathers with multiple images will be picked at random.
 *
 *   Generated Image?:
 *   - Include the plugin-generated image for this weather type?
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Icon(s):
 *   - Which icons do you wish to include for the images to appear as?
 *   - When using icons, icons are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Picture(s):
 *   - Which pictures do you wish to include for the images to appear as?
 *   - When using pictures, pictures are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the weather sprite?
 *
 *   Hue Variations:
 *   - What hue variations will be randomly selected from?
 *   - Use a value between 0 and 360.
 *
 *   Tone Variations:
 *   - What tone variations will be randomly selected from?
 *   - Format for each: [Red, Green, Blue, Gray]
 * 
 *   *NOTE*
 * 
 *   Hues and tones are expensive to process graphically. Using a lot of hue
 *   and/or tone variations on lots of weather sprites at the same time can
 *   eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *   tone variations, keep the sprite count low by either using lower power
 *   settings or less sprites on the screen.
 *
 * ---
 *
 * Special Effects
 * - Specialized effects that are turned on for specific weather types can
 * be found here.
 *
 *   Allow Visible Player?:
 *   - Make the player more visible by reducing the opacity of nearby weather
 *     sprites?
 *
 *   Flat Fluttering?:
 *   - Is the object flat and flutters in the wind?
 *   - Or does the object have volume and doesn't?
 *
 *   Longevity:
 *   - Weather effects with longevity don't expire until the weather pattern
 *     type is changed.
 *
 *   Hue Sway Range:
 *   - How much should the hue sway back and forth?
 *   - JavaScript code can be used.
 *
 *     Hue Sway Speed:
 *     - What speed does the angle sway?
 *     - Lower is slower.
 *     - Higher is faster.
 *     - JavaScript code can be used.
 *
 *   Respawn Common Event:
 *   - Play a specific Common Event when this event respawns?
 *   - The Common Event will run as a Once Parallel.
 *
 *   Respawn Delay Minimum:
 *   - Is there a delay to the respawn?
 *   - This is how many frames the sprite must wait before respawning.
 *
 *     RNG Delay Per Power:
 *     - How many randomized frames of delay per power must be waited?
 *
 *   Scale In:
 *   - What scale ratio should the sprite spawn in at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale in effect take?
 *     - Scale in will always head towards 1.0.
 *
 *   Scale Out:
 *   - What scale ratio should the sprite despawn out at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale out effect take?
 *     - Scale in will usually head from 1.0.
 *
 *   Custom Finish:
 *
 *     Fireworks Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fireworks explosion?
 *
 *     Sparkle Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fabulous spinning sparkle effect?
 *
 * ---
 *
 * Trajectory Settings
 * - Settings used to determine the trajectory a weather sprite will take
 *   and how they behave on it.
 *
 *   Trajectory Type:
 *   - What trajectory type is used?
 *     - Both Map and Battle
 *       - Straight
 *       - Frozen
 *     - Map Only
 *       - Player-Locked
 *       - Follower-Locked
 *       - Event-Locked
 *     - Battle Only
 *       - Actor-Locked
 *       - Enemy-Locked
 *       - User-Locked
 *       - Target-Locked
 * 
 *     Locked ID/Index:
 *     - For locked trajectories only. Input the follower index.
 *     - Or ID of event, actor, enemy.
 *
 *     Offset X (Locked):
 *     - For locked trajectories only.
 *     - Negative: left. Positive: right.
 *
 *     Offset Y (Locked):
 *     - For locked trajectories only.
 *     - Negative: up. Positive: down.
 *
 *   Speed:
 *   - What speed is the sprite moving at? Lower is slower.
 *   - Higher is faster.
 *   - JavaScript code can be used.
 *
 *     Speed Variance:
 *     - What variance is there to the speed value?
 *
 *   Angle:
 *   - What angle (0 to 360) is the sprite moving toward?
 *   - JavaScript code can be used.
 *
 *     Align Angle?:
 *     - Should the sprite rotate itself according to the angle it is moving at
 *       across the screen?
 *
 *     Angle Variance:
 *     - What variance is there to the base angle?
 *
 *     Visual Angle Offset:
 *     - Offset the visual by this many degrees. Used for images that aren't
 *       made aligned with 0 degrees facing left.
 *
 *     Angle Arc:
 *     - How should the trajectory arc when the sprite moves?
 *     - JavaScript code can be used.
 *
 *     Angle Sway Range:
 *     - How much should the angle sway as the sprite moves?
 *     - JavaScript code can be used.
 *
 *       Angle Sway Speed:
 *       - What speed does the angle sway? Lower is slower.
 *       - Higher is faster.
 *       - JavaScript code can be used.
 *
 *   Spin Speed:
 *   - What speed do the sprites spin?
 *   - JavaScript code can be used.
 *   - Some generated weather pattern sprites use the clustering replication
 *     technique. This allows the weather pattern to appear more full and have
 *     higher volume while keeping sprite counts low. As such, not all weather
 *     patterns will spin the way you expect. This is not a bug.
 *
 *     Spin Speed Variance:
 *     - What variance is there to the spin speed?
 *
 *     Reverse Spin?:
 *     - Can the spin go in the reverse direction?
 *
 *   X Sway Range:
 *   Y Sway Range:
 *   - How much should the X/Y value sway as the sprite moves?
 *   - JavaScript code can be used.
 *
 *     Sway Speed:
 *     - What speed does the sway move? Lower is slower.
 *     - Higher is faster. JavaScript code can be used.
 *
 * ---
 * 
 * === Weather Pattern-Type Plugin Commands ===
 * 
 * Each of the weather patterns below all use the same plugin command structure
 * as listed in the section above. They are separated in various themes to help
 * better organize them and quickly find them. Each weather pattern has their
 * own generated image type that they use.
 * 
 * ---
 * 
 * Fire-Themed
 * 
 *   FIRE: Embers:
 *   - Oh, Ember, you will remember. So warm and tender.
 *   - Embers rise off from the ground upward.
 *
 *   FIRE: Fireflies:
 *   - Take my love, take my land, take me where I cannot stand.
 *   - Fireflies will spawn and float around.
 *
 *   FIRE: Firestorm:
 *   - This is fine.
 *   - Rain fiery bolts of flames from the heavens!
 *
 *   FIRE: Fireworks:
 *   - You just gotta ignite the light and let it shine!
 *   - A shot of fire flies up and blows up into a flower.
 *
 *   FIRE: Flame Haze:
 *   - Flaming Hair Blazing Eyes!
 *   - A fiery smoke clouds the screen!
 *
 *   FIRE: Flame Wall:
 *   - Is it me, or is it hot in here? Oh, it's me.
 *   - A wall of flames appears on the bottom part of the screen.
 *
 *   FIRE: Heat Clouds:
 *   - Fiery conglomerations of clouds.
 *   - Heat clouds scorch the top of the screen.
 *
 *   FIRE: Meteor Shower:
 *   - Clustering wishes will become a new shining star!
 *   - A nonstop swarm of meteors fall in the night sky.
 *
 *   FIRE: Shooting Stars:
 *   - Make a wish! A wholesome one, please.
 *   - Shooting stars appear over the horizon of the night sky.
 *
 *   FIRE: Sunlight Beams:
 *   - Aka crepuscular rays. Makes any day brighter!
 *   - Sun beams shine down from the heavens.
 * 
 * ---
 *
 * Ice-Themed
 *
 *   ICE: Arctic Gleam:
 *   - Oh, erie bluish glow of the arctic.
 *   - Illuminate the frozen land below!
 *
 *   ICE: Aurora Borealis:
 *   - Also known as the Northern Lights.
 *   - Auroras dance across the top of the screen.
 *
 *   ICE: Blizzard:
 *   - Let it go, let it go! Can't hold it back anymore!
 *   - Concentrated snowfall covers the screen.
 *
 *   ICE: Diamond Dust:
 *   - Diamond dust falls from the skies.
 *   - Slightly illuminated ice particles descend from above.
 *
 *   ICE: Glistening Ice:
 *   - Walkin' on thin ice!
 *   - Ice particles sparkle from all around.
 *
 *   ICE: Ice Fog:
 *   - Yo! VIP! Let's Kick it!
 *   - Frozen fog covers the whole screen.
 *
 *   ICE: Sleet:
 *   - Slightly heavier and more solid than snow!
 *   - Frozen ice crystals snow down from above.
 *
 *   ICE: Snow:
 *   - Brace yourselves! Winter is coming!
 *   - Snow falls from the sky and flutters downward.
 *
 *   ICE: Snow Clouds:
 *   - Icy gatherings of clouds ready to deliver snow.
 *   - Snow clouds blanket the top of the screen.
 *
 *   ICE: Snowflakes:
 *   - Snowflake! Snowflake! Little snowflake!
 *   - Generated snowflakes will have random patterns.
 *
 * ---
 *
 * Thunder-Themed
 *
 *   THUNDER: Discharge:
 *   - Danger! Danger! High voltage!
 *   - Electricity discharges from the sides of the screen.
 *
 *   THUNDER: Plasma Bolt:
 *   - A horizontal bolt of electricity! From left to right!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Plasma Surge:
 *   - The windows are becoming stained with a nostalgic color.
 *   - Nonstop plasma bolts flood the screen.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Purple Haze:
 *   - Purple haze all around. Don't know if I'm coming up or down.
 *   - A purple fog blankets the whole screen.
 *
 *   THUNDER: Spider Lightning:
 *   - Nothing to do with spiders.
 *   - Bolts expand outwards from a target.
 *
 *   THUNDER: Static Charge:
 *   - Snap! Crackle! Pop!
 *   - Highly charged target emits static.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Bolt:
 *   - More than just an expensive charging cable. Giant bolt flashes
 *     from above!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Clouds:
 *   - These thunderclouds, oh no, no!
 *   - Thunder-ready clouds fly atop the top of the screen.
 *
 *   THUNDER: Thunder Surge:
 *   - When you walk away, you don't hear me say.
 *   - Nonstop thunder bolts scour the skies.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Ultraviolet Beams:
 *   - Get out some of that SPF 100+!
 *   - (This is NOT real UV Light!)
 *   - Ultraviolet lights are coming from the sky!
 *
 * ---
 *
 * Water-Themed
 *
 *   WATER: Bubbles Rising:
 *   - Let's not burst your bubble!
 *   - Bubbles will rise up towards the top of the screen.
 *
 *   WATER: Cloud Burst:
 *   - A sudden massive deluge of rain!
 *   - A near vertical storm of massive volume.
 *
 *   WATER: Dripping Water:
 *   - Leaky ceilings? It's time to call a plumber.
 *   - Water droplets drip from above.
 *
 *   WATER: Mist:
 *   - Not to be confused with the video game. That has a Y.
 *   - A suspended mist covers the screen.
 *
 *   WATER: Rain:
 *   - Rain, rain, go away! Come again some other day!
 *   - Raindrops will fall from the sky all over the screen.
 *
 *   WATER: Rain Clouds:
 *   - It's raining men! Hallelujah! It's raining men, amen!
 *   - Rain-filled clouds hover menacingly at the top of the screen.
 *
 *   WATER: Rainbow Arch:
 *   - Somewhere over the rainbow~
 *   - A large rainbow arch appears in the corner of the screen.
 *
 *   WATER: Rising Steam:
 *   - Take more photos to train your selfie steam!
 *   - Steam vapor clouds rise from below.
 *
 *   WATER: Soap Bubbles:
 *   - I will try to blow a bubble that will last all day.
 *   - Soap bubbles float and hover around.
 *
 *   WATER: Storm:
 *   - A MIGHTY storm!
 *   - Large and long raindrops fall from the sky creating a storm.
 *
 * ---
 *
 * Earth-Themed
 *
 *   EARTH: Acid Rain:
 *   - Real acid rain doesn't glow in the dark.
 *   - But this one sure does.
 *
 *   EARTH: Crumbling Cave:
 *   - Do NOT grab any suspiciously placed rubies.
 *   - Bits and pieces of the cave ceiling crumble.
 *
 *   EARTH: Dust Clouds:
 *   - Darkened dust covers the surroundings!
 *   - Dust clouds will fill up the screen.
 *
 *   EARTH: Dust Storm:
 *   - Happens in places other than Nashville.
 *   - Darkened dust launches across the screen.
 *
 *   EARTH: House Dust:
 *   - Floating white dust particles with nowhere to go.
 *   - So they'll just make themselves at home.
 *
 *   EARTH: Pollution Clouds:
 *   - Absolutely disgusting colored pollution clouds.
 *   - Pollution clouds cover the top of the screen.
 *
 *   EARTH: Radioactive Beams:
 *   - Alert! Alert! Alert! Nuclear green lights!
 *   - Nuclear green lights irradiate from the clouds.
 *
 *   EARTH: Sand Clouds:
 *   - Straight from the Pyramids of Giza!
 *   - Sand clouds will surround everything!
 *
 *   EARTH: Sandstorm:
 *   - Darude! Sandstorm!
 *   - Sand blasts across the screen from one end to the other.
 *
 *   EARTH: Toxic Gas:
 *   - More toxic than the comments section of social media!
 *   - A foggy green gas blankets the screen.
 *
 * ---
 *
 * Wind-Themed
 *
 *   WIND: Autumn Leaves:
 *   - Red, yellow, orange, brown leaves are falling all around.
 *   - See them dance in the cool, fall air. 
 *
 *   WIND: Balloons:
 *   - You and I in a little toy shop, buy a bag balloons with the money
 *     we've got.
 *
 *   WIND: Cherry Blossoms:
 *   - The emblem of love and good luck.
 *   - Cherry blossom petals flutter down from above.
 *
 *   WIND: Dandelion Seeds:
 *   - Floating on the air. Never seem to care.
 *   - Dandelion seeds will flow up into the air.
 *
 *   WIND: Grassy Gust:
 *   - A gust of wind!
 *   - From right to left, grass flies with it.
 *   - Best when paired with a Tempest.
 *
 *   WIND: Green Leaves:
 *   - Leaf me alone!
 *   - Green leaves fall above, spinning round and round.
 *
 *   WIND: Pollen:
 *   - Bless you! Gesundheit! Salute!
 *   - A cloud of pollen grains travel about the screen.
 *
 *   WIND: Tempest:
 *   - Brought to you by a friendly slime.
 *   - Powerful gusts of wind blast across the screen.
 *
 *   WIND: White Clouds:
 *   - Not the main character from Final Fantasy VII.
 *   - Fluffy white clouds slowly drift across the upper screen.
 *
 *   WIND: Xtreme Speed:
 *   - Gotta go fast! Speedlines whip past!
 *   - Works best below the tileset layer.
 *
 * ---
 *
 * Light-Themed
 *
 *   LIGHT: Confetti:
 *   - Party like it's 1999!
 *   - Confetti of differing shapes drop from the sky.
 *
 *   LIGHT: Lens Flare:
 *   - Relive the amateur days from Photoshop!
 *   - A lens flare descends from the upper corner of the sky!
 *
 *   LIGHT: Light Burst:
 *   - Sometimes also known as Sun Bursts.
 *   - CAUTION: Bright lights!
 *   - Bright white light bursts out from a target.
 *
 *   LIGHT: Light Orbs:
 *   - Show me the light!
 *   - Light orbs fly round and round.
 *
 *   LIGHT: Pastel Brume:
 *   - Cute pastel colors forming a foggy brume.
 *   - Various bright colors cover the screen.
 *
 *   LIGHT: Prism Burst:
 *   - More color than a bag of candy!
 *   - CAUTION: Bright lights!
 *   - Lights of all colors expand out from a target.
 *
 *   LIGHT: Prismatic Gleam:
 *   - Our seven lights spring to the task!
 *   - Colors of all sorts shine from the skies high above.
 *
 *   LIGHT: Rainbow Clouds:
 *   - Colorful clouds dot the heavens.
 *   - Multi-colored clouds slowly drift across the upper screen.
 *
 *   LIGHT: Rainbow Orbs:
 *   - Taste the rainbow!
 *   - Multi-colored rainbow orbs spawn in and float about.
 *
 *   LIGHT: Star Fall:
 *   - You're a star. You're one in a million.
 *   - Stars fall out of the night sky spinning round and round.
 *
 * ---
 *
 * Dark-Themed
 *
 *   DARK: Ash Debris:
 *   - Gotta ketchum all.
 *   - Pieces of ash debris flutter through the air.
 *
 *   DARK: Ashfall:
 *   - But unlike thunder, this didn’t stop. It went on and on.
 *   - Volcanic ash pieces descend from the skies above.
 *
 *   DARK: Blood Rain:
 *   - It's actually a real phenomenon.
 *   - However, it's not really blood.
 *
 *   DARK: Dark Orbs:
 *   - Hello darkness, my old friend.
 *   - Dark orbs circle about the screen.
 *
 *   DARK: Fumes:
 *   - Don't inhale any!
 *   - Dark fume clouds plume from below.
 *
 *   DARK: Moonlight Beams:
 *   - Moonlight is the smuggler's enemy.
 *   - Light the path in the night sky by moonshine.
 *
 *   DARK: Shadow Siphon:
 *   - Drain all of the light! CAUTION: Dark lights!
 *   - Light from around is all drained into one area.
 *
 *   DARK: Smog:
 *   - Smoking is bad, mkay?
 *   - Smokey fog (aka Smog) cover the whole screen.
 *
 *   DARK: Smoke Clouds:
 *   - Accompanied by factories owned by evil corporations.
 *   - Smoke clouds blot out the sun.
 *
 *   DARK: Sootfall:
 *   - Try not to build a snowman out of this.
 *   - Smoke-contaminated snow falls from the sky.
 *
 * ---
 *
 * Icons-Related
 *
 *   SLOW: Flying Icons ↑:
 *   MEDIUM: Flying Icons ↑:
 *   FAST: Flying Icons ↑:
 *   - Icons fly to the top at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↗:
 *   MEDIUM: Flying Icons ↗:
 *   FAST: Flying Icons ↗:
 *   - Icons fly upper right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons →:
 *   MEDIUM: Flying Icons →:
 *   FAST: Flying Icons →:
 *   - Icons fly to the right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↘:
 *   MEDIUM: Flying Icons ↘:
 *   FAST: Flying Icons ↘:
 *   - Icons fly lower right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↓:
 *   MEDIUM: Flying Icons ↓:
 *   FAST: Flying Icons ↓:
 *   - Icons fly to the bottom at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↙:
 *   MEDIUM: Flying Icons ↙:
 *   FAST: Flying Icons ↙:
 *   - Icons fly lower left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ←:
 *   MEDIUM: Flying Icons ←:
 *   FAST: Flying Icons ←:
 *   - Icons fly to the left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↖:
 *   MEDIUM: Flying Icons ↖:
 *   FAST: Flying Icons ↖:
 *   - Icons fly upper left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ●:
 *   MEDIUM: Flying Icons ●:
 *   FAST: Flying Icons ●:
 *   - Icons hover at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Weather Effects plugin. There aren't too many
 * settings to adjust here as the majority of the customization options exist
 * within each weather pattern-related Plugin Command instead. However, the
 * options here allow you to control what the weather patterns do not.
 *
 * ---
 * 
 * General Settings
 * 
 *   Pre-Render Generated?:
 *   - Pre-render generated images for weather patterns?
 *   - This reduces lag for on-demand weather patterns.
 *   - This is automatically turned OFF for mobile devices.
 * 
 *     # of Variations:
 *     - How many variations of each rendered weather pattern do you want?
 * 
 *   Smooth Icons?
 *   - Smooth out the icons used for weather sprites?
 *   - Or keep them pixelated?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * There is only one option added through this plugin and it's an option that
 * allows the player to adjust what % of weather sprites are visible on the
 * screen at a time. This is helpful for those who may have weaker computers or
 * those who may find the weather patterns to be a bit intrusive at times.
 * 
 * The number of minimum weather sprites will always be shown. The number of
 * added sprites based on power will be what the weather density value affects.
 * 
 * If you are using the Options Core, the settings found in the Options Core
 * need to be managed instead of these as these will be overwritten in favor of
 * what the Options Core will offer.
 *
 * ---
 * 
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Weather Density' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 * * Aries
 * 
 * Creazilla Open-Source
 * * Many of the canvas drawings are made by various artists under Creazilla.
 * * These are under the Creazilla Open-Source License.
 * * They are free for personal and commercial use. No attribution required.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.03: December 15, 2022
 * * Documentation Update!
 * ** Added new note for "Pre-Render Generated" in Plugin Parameters.
 * ** Help file updated for new features.
 * *** This is automatically turned OFF for mobile devices.
 * * Feature Update!
 * ** Games running with this plugin on mobile devices will automatically
 *    default to turning off "Pre-Render Generated" in order to conserve memory
 *    usage. This is NOT disabled automatically for MacOS because memory leak
 *    problems do not apply to MacOS. If you feel like it should be disabled,
 *    we recommend that you turn off "Pre-Render Generated" in the
 *    Plugin Parameters. Update made by Arisu.
 * ** "Pre-Render Generated" is also now set to "false" by default.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** BASIC: Pre-Render Generated Weather
 * **** Selects target weather type to pre-render the generated graphics.
 * **** This is to help reduce future lag spikes on mobile devices.
 * 
 * Version 1.02: June 2, 2022
 * * Bug Fixes!
 * ** "ICE: Aurora Borealis" default values are now fixed to properly convey
 *    proper verticality and angle. If you have the "ICE: Aurora Borealis"
 *    Plugin Command already in place, delete it and replace it with a new one
 *    for the newer default values. Fix made by Irina.
 * * Documentation Update!
 * ** Updated descriptions for "Upper/Lower?" parameters to the following:
 * *** In battle, they are above the battlers and behind the battlebacks.
 * * Feature Update!
 * ** In battle, the "lower" layer is now moved to behind the battlebacks.
 *    Update made by Irina.
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused any weather effects on layers 9 and 10 to
 *    cancel each other out. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: April 6, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Basic
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Basic
 * @text Category - Basic
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicAdjustWeatherPower
 * @text BASIC: Adjust Weather Power
 * @desc Adjusts the power of the target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to adjust?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Adjust weather layer(s) from the upper or lower layers?
 * @default upper
 * 
 * @arg Power:eval
 * @text Power
 * @desc Adjust power by how much? Caps at 1 and 9.
 * You may use JavaScript code.
 * @default +1
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully adjust the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely adjust before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicClearWeather
 * @text BASIC: Clear Weather
 * @desc Clears out target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to clear?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Clear weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully clear the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely clear before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicMemorizeWeather
 * @text BASIC: Memorize Weather
 * @desc Memorizes the settings for target weather pattern(s) so
 * that you can reuse it later.
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to save?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc save weather layer(s) from the upper or lower layers?
 * @default both
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicPreRenderGeneratedWeather
 * @text BASIC: Pre-Render Generated Weather
 * @desc Selects target weather type to pre-render the generated
 * graphics for it. This is to help reduce future lag spikes.
 *
 * @arg WeatherType:str
 * @text Weather Type
 * @type select
 * @option -
 * @option Embers
 * @option FireStorm
 * @option Fireflies
 * @option Fireworks
 * @option FlameHaze
 * @option FlameWall
 * @option HeatClouds
 * @option MeteorShower
 * @option ShootingStars
 * @option SunBeams
 * @option -
 * @option ArcticBeam
 * @option Aurora
 * @option Blizzard
 * @option DiamondDust
 * @option Glistening
 * @option IceFog
 * @option Sleet
 * @option Snow
 * @option SnowClouds
 * @option SnowFlakes
 * @option -
 * @option Discharge
 * @option PlasmaBolt
 * @option PlasmaSurge
 * @option SpiderBolt
 * @option StaticCharge
 * @option Thunderbolt
 * @option ThunderClouds
 * @option ThunderSurge
 * @option PurpleHaze
 * @option UltraViolet
 * @option -
 * @option Bubbles
 * @option CloudBurst
 * @option Drip
 * @option Mist
 * @option Rain
 * @option RainbowArch
 * @option RainClouds
 * @option SoapBubbles
 * @option Steam
 * @option Storm
 * @option -
 * @option AcidRain
 * @option CrumblingCave
 * @option DustClouds
 * @option DustStorm
 * @option HouseDust
 * @option PollutionClouds
 * @option RadioactiveBeam
 * @option SandClouds
 * @option SandStorm
 * @option ToxicGas
 * @option -
 * @option AutumnLeaves
 * @option Balloons
 * @option CherryBlossoms
 * @option DandelionSeeds
 * @option GrassyGust
 * @option GreenLeaves
 * @option Pollen
 * @option Tempest
 * @option WhiteClouds
 * @option Xtreme
 * @option -
 * @option Confetti
 * @option LensFlare
 * @option LightBurst
 * @option LightOrbs
 * @option PastelBrume
 * @option PrismBeams
 * @option PrismBurst
 * @option RainbowClouds
 * @option RainbowOrbs
 * @option Stars
 * @option -
 * @option AshDebris
 * @option AshFall
 * @option BloodRain
 * @option DarkOrbs
 * @option Fumes
 * @option MoonBeams
 * @option SmokeFog
 * @option SmokeCloud
 * @option ShadowBurst
 * @option SootFall
 * @option -
 * @desc Which weather type do you wish to pre-render?
 * This is to help reduce lag spikes when calling weathers.
 * @default Embers
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicReplayMemory
 * @text BASIC: Replay Memorized Weather
 * @desc Replays target memorized weather pattern(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to replay?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Replay weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully replay the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely replay before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Fire
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Fire
 * @text Category - Fire-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Embers
 * @text FIRE: Embers
 * @desc Oh, Ember, you will remember. So warm and tender.
 * Embers rise off from the ground upward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireflies
 * @text FIRE: Fireflies
 * @desc Take my love, take my land, take me where I cannot stand.
 * Fireflies will spawn and float around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Firestorm
 * @text FIRE: Firestorm
 * @desc This is fine.
 * Rain fiery bolts of flames from the heavens!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireworks
 * @text FIRE: Fireworks
 * @desc You just gotta ignite the light and let it shine!
 * A shot of fire flies up and blows up into a flower.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower 70%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"245\",\"opacityVariance:num\":\"10\",\"opacityEasingType:str\":\"InCirc\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[\\\"30\\\",\\\"60\\\",\\\"90\\\",\\\"120\\\",\\\"150\\\",\\\"180\\\",\\\"210\\\",\\\"240\\\",\\\"270\\\",\\\"300\\\",\\\"330\\\"]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"true\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameHaze
 * @text FIRE: Flame Haze
 * @desc Flaming Hair Blazing Eyes!
 * A fiery smoke clouds the screen!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#f26c4f\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameWall
 * @text FIRE: Flame Wall
 * @desc Is it me, or is it hot in here? Oh, it's me.
 * A wall of flames appears on the bottom part of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"lower 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"50\",\"totalPerPower:num\":\"25\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"32\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"32\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_HeatClouds
 * @text FIRE: Heat Clouds
 * @desc Fiery conglomerations of clouds.
 * Heat clouds scorch the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_MeteorShower
 * @text FIRE: Meteor Shower
 * @desc Clustering wishes will become a new shining star!
 * A nonstop swarm of meteors fall in the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.6\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"15\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_ShootingStar
 * @text FIRE: Shooting Stars
 * @desc Make a wish! A wholesome one, please.
 * Shooting stars appear over the horizon of the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_SunBeams
 * @text FIRE: Sunlight Beams
 * @desc Aka crepuscular rays. Makes any day brighter!
 * Sun beams shine down from the heavens.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Ice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Ice
 * @text Category - Ice-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_ArcticBeam
 * @text ICE: Arctic Gleam
 * @desc Oh, erie bluish glow of the arctic.
 * Illuminate the frozen land below!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Aurora
 * @text ICE: Aurora Borealis
 * @desc Also known as the Northern Lights.
 * Auroras dance across the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"32\",\"scale:num\":\"0.90\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Blizzard
 * @text ICE: Blizzard
 * @desc Let it go, let it go! Can't hold it back anymore!
 * Concentrated snowfall covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"200\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#cccccc\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"205\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"12\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_DiamondDust
 * @text ICE: Diamond Dust
 * @desc Diamond dust falls from the skies.
 * Slightly illuminated ice particles descend from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_GlisteningIce
 * @text ICE: Glistening Ice
 * @desc Walkin' on thin ice!
 * Ice particles sparkle from all around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"45\",\"lifespanVariance:num\":\"15\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuad\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_IceFog
 * @text ICE: Ice Fog
 * @desc Yo! VIP! Let's Kick it!
 * Frozen fog covers the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"8\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Sleet
 * @text ICE: Sleet
 * @desc Slightly heavier and more solid than snow!
 * Frozen ice crystals snow down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"140\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"8\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snow
 * @text ICE: Snow
 * @desc Brace yourselves! Winter is coming!
 * Snow falls from the sky and flutters downward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_SnowClouds
 * @text ICE: Snow Clouds
 * @desc Icy gatherings of clouds ready to deliver snow.
 * Snow clouds blanket the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snowflakes
 * @text ICE: Snowflakes
 * @desc Snowflake! Snowflake! Little snowflake!
 * Generated snowflakes will have random patterns.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"220\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"230\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Thunder
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Thunder
 * @text Category - Thunder-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Discharge
 * @text THUNDER: Discharge
 * @desc Danger! Danger! High voltage!
 * Electricity discharges from the sides of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaBolt
 * @text THUNDER: Plasma Bolt
 * @desc A horizontal bolt of electricity! From left to right!
 * Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaSurge
 * @text THUNDER: Plasma Surge
 * @desc The windows are becoming stained with a nostalgic color.
 * Nonstop plasma bolts flood the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PurpleHaze
 * @text THUNDER: Purple Haze
 * @desc Purple haze all around. Don't know if I'm coming up or down.
 * A purple fog blankets the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"96\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#8560a8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_SpiderLightning
 * @text THUNDER: Spider Lightning
 * @desc Nothing to do with spiders.
 * Bolts expand outwards from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-8\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_StaticCharge
 * @text THUNDER: Static Charge
 * @desc Snap! Crackle! Pop!
 * Highly charged target emits static.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.25\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-12\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderbolt
 * @text THUNDER: Thunder Bolt
 * @desc More than just an expensive charging cable. Giant bolt
 * flashes from above! Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderclouds
 * @text THUNDER: Thunder Clouds
 * @desc These thunderclouds, oh no, no!
 * Thunder-ready clouds fly atop the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#605ca8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thundersurge
 * @text THUNDER: Thunder Surge
 * @desc When you walk away, you don't hear me say.
 * Nonstop thunder bolts scour the skies.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_UltravioletBeams
 * @text THUNDER: Ultraviolet Beams
 * @desc Get out some of that SPF 100+! (This is NOT real UV Light!)
 * Ultraviolet lights are coming from the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Water
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Water
 * @text Category - Water-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Bubbles
 * @text WATER: Bubbles Rising
 * @desc Let's not burst your bubble!
 * Bubbles will rise up towards the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00aaaa\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_CloudBurst
 * @text WATER: Cloud Burst
 * @desc A sudden massive deluge of rain!
 * A near vertical storm of massive volume.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#303030\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"8\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"18\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_DrippingWater
 * @text WATER: Dripping Water
 * @desc Leaky ceilings? It's time to call a plumber.
 * Water droplets drip from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"60\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Mist
 * @text WATER: Mist
 * @desc Not to be confused with the video game. That has a Y.
 * A suspended mist covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Rain
 * @text WATER: Rain
 * @desc Rain, rain, go away! Come again some other day!
 * Raindrops will fall from the sky all over the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainClouds
 * @text WATER: Rain Clouds
 * @desc It's raining men! Hallelujah! It's raining men, amen!
 * Rain-filled clouds hover menacingly at the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainbowArch
 * @text WATER: Rainbow Arch
 * @desc Somewhere over the rainbow~
 * A large rainbow arch appears in the corner of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"right border\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower border\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.30\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RisingSteam
 * @text WATER: Rising Steam
 * @desc Take more photos to train your selfie steam!
 * Steam vapor clouds rise from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.5\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_SoapBubbles
 * @text WATER: Soap Bubbles
 * @desc I will try to blow a bubble that will last all day.
 * Soap bubbles float and hover around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"0.0\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.005\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Storm
 * @text WATER: Storm
 * @desc A MIGHTY storm!
 * Large and long raindrops fall from the sky creating a storm.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#404040\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Earth
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Earth
 * @text Category - Earth-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_AcidRain
 * @text EARTH: Acid Rain
 * @desc Real acid rain doesn't glow in the dark.
 * But this one sure does.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c4df9b\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_CrumblingCave
 * @text EARTH: Crumbling Cave
 * @desc Do NOT grab any suspiciously placed rubies.
 * Bits and pieces of the cave ceiling crumble.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"OutQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.00\",\"scaleVariance:num\":\"0.00\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.5\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"8\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"8\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustClouds
 * @text EARTH: Dust Clouds
 * @desc Darkened dust covers the surroundings!
 * Dust clouds will fill up the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"72\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustStorm
 * @text EARTH: Dust Storm
 * @desc Happens in places other than Nashville.
 * Darkened dust launches across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_HouseDust
 * @text EARTH: House Dust
 * @desc Floating white dust particles with nowhere to go.
 * So they'll just make themselves at home.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.0025\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.0025\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_PollutionClouds
 * @text EARTH: Pollution Clouds
 * @desc Absolutely disgusting colored pollution clouds.
 * Pollution clouds cover the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_RadioactiveBeams
 * @text EARTH: Radioactive Beams
 * @desc Alert! Alert! Alert! Nuclear green lights!
 * Nuclear green lights irradiate from the clouds.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#00ff00\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_SandClouds
 * @text EARTH: Sand Clouds
 * @desc Straight from the Pyramids of Giza!
 * Sand clouds will surround everything!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_Sandstorm
 * @text EARTH: Sandstorm
 * @desc Darude! Sandstorm!
 * Sand blasts across the screen from one end to the other.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_ToxicGas
 * @text EARTH: Toxic Gas
 * @desc More toxic than the comments section of social media!
 * A foggy green gas blankets the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"type:str":"straight","lockedOffsetX:eval":"+0","lockedOffsetY:eval":"+0","speed:eval":"1.2","speedVariance:eval":"0.3","angle:eval":"180","alignAngle:eval":"false","angleVariance:eval":"2","angleOffset:eval":"+0","angleArc:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","spinSpeed:eval":"+0","spinSpeedVariance:eval":"0","reverseSpin:eval":"false","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Wind
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Wind
 * @text Category - Wind-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_AutumnLeaves
 * @text WIND: Autumn Leaves
 * @desc Red, yellow, orange, brown leaves are falling all around.
 * See them dance in the cool, fall air. 
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Balloons
 * @text WIND: Balloons
 * @desc You and I in a little toy shop,
 * buy a bag balloons with the money we've got.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.5\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"1.5\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"74\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+15\",\"angleArc:eval\":\"0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_CherryBlossoms
 * @text WIND: Cherry Blossoms
 * @desc The emblem of love and good luck.
 * Cherry blossom petals flutter down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_DandelionSeeds
 * @text WIND: Dandelion Seeds
 * @desc Floating on the air. Never seem to care.
 * Dandelion seeds will flow up into the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.15\",\"scaleVariance:num\":\"0.05\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"30\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"-45\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GrassyGust
 * @text WIND: Grassy Gust
 * @desc A gust of wind! From right to left, grass flies with it.
 * Best when paired with a Tempest.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GreenLeaves
 * @text WIND: Green Leaves
 * @desc Leaf me alone!
 * Green leaves fall above, spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InCubic\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.30\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"310\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Pollen
 * @text WIND: Pollen
 * @desc Bless you! Gesundheit! Salute!
 * A cloud of pollen grains travel about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"48\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#fff799\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"15\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"8\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Tempest
 * @text WIND: Tempest
 * @desc Brought to you by a friendly slime.
 * Powerful gusts of wind blast across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.4\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_WhiteClouds
 * @text WIND: White Clouds
 * @desc Not the main character from Final Fantasy VII.
 * Fluffy white clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_XtremeSpeed
 * @text WIND: Xtreme Speed
 * @desc Gotta go fast! Speedlines whip past!
 * Works best below the tileset layer.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"middle screen\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"100\",\"opacityVariance:num\":\"28\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"2.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"2.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"15\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"24\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Light
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Light
 * @text Category - Light-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Confetti
 * @text LIGHT: Confetti
 * @desc Party like it's 1999!
 * Confetti of differing shapes drop from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"40\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LensFlare
 * @text LIGHT: Lens Flare
 * @desc Relive the amateur days from Photoshop!
 * A lens flare descends from the upper corner of the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"left 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"upper 10%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightBurst
 * @text LIGHT: Light Burst
 * @desc Sometimes also known as Sun Bursts. CAUTION: Bright lights!
 * Bright white light bursts out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightOrbs
 * @text LIGHT: Light Orbs
 * @desc Show me the light!
 * Light orbs fly round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PastelBrume
 * @text LIGHT: Pastel Brume
 * @desc Cute pastel colors forming a foggy brume.
 * Various bright colors cover the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBurst
 * @text LIGHT: Prism Burst
 * @desc More color than a bag of candy! CAUTION: Bright lights!
 * Lights of all colors expand out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBeams
 * @text LIGHT: Prismatic Gleam
 * @desc Our seven lights spring to the task!
 * Colors of all sorts shine from the skies high above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowClouds
 * @text LIGHT: Rainbow Clouds
 * @desc Colorful clouds dot the heavens.
 * Multi-colored clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 30%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"32\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowOrbs
 * @text LIGHT: Rainbow Orbs
 * @desc Taste the rainbow!
 * Multi-colored rainbow orbs spawn in and float about.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Stars
 * @text LIGHT: Star Fall
 * @desc You're a star. You're one in a million.
 * Stars fall out of the night sky spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Dark
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Dark
 * @text Category - Dark-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_AshDebris
 * @text DARK: Ash Debris
 * @desc Gotta ketchum all.
 * Pieces of ash debris flutter through the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Ashfall
 * @text DARK: Ashfall
 * @desc But unlike thunder, this didn’t stop. It went on and on.
 * Volcanic ash pieces descend from the skies above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"215\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_BloodRain
 * @text DARK: Blood Rain
 * @desc It's actually a real phenomenon.
 * However, it's not really blood.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#cc0000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_DarkOrbs
 * @text DARK: Dark Orbs
 * @desc Hello darkness, my old friend.
 * Dark orbs circle about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"2\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Fumes
 * @text DARK: Fumes
 * @desc Don't inhale any!
 * Dark fume clouds plume from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.8\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_MoonBeams
 * @text DARK: Moonlight Beams
 * @desc Moonlight is the smuggler's enemy.
 * Light the path in the night sky by moonshine.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#d0bbee\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_ShadowBurst
 * @text DARK: Shadow Siphon
 * @desc Drain all of the light! CAUTION: Dark lights!
 * Light from around is all drained into one area.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"10\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"0.1\",\"scaleOutDuration:eval\":\"20\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeFog
 * @text DARK: Smog
 * @desc Smoking is bad, mkay?
 * Smokey fog (aka Smog) cover the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#222222\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeClouds
 * @text DARK: Smoke Clouds
 * @desc Accompanied by factories owned by evil corporations.
 * Smoke clouds blot out the sun.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Sootfall
 * @text DARK: Sootfall
 * @desc Try not to build a snowman out of this.
 * Smoke-contaminated snow falls from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons1
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons1
 * @text Category - Icons (Slow)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Up
 * @text SLOW: Flying Icons ↑
 * @desc Icons fly to the top at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperRight
 * @text SLOW: Flying Icons ↗
 * @desc Icons fly upper right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Right
 * @text SLOW: Flying Icons →
 * @desc Icons fly to the right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerRight
 * @text SLOW: Flying Icons ↘
 * @desc Icons fly lower right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Down
 * @text SLOW: Flying Icons ↓
 * @desc Icons fly to the bottom at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerLeft
 * @text SLOW: Flying Icons ↙
 * @desc Icons fly lower left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Left
 * @text SLOW: Flying Icons ←
 * @desc Icons fly to the left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperLeft
 * @text SLOW: Flying Icons ↖
 * @desc Icons fly upper left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Mid
 * @text SLOW: Flying Icons ●
 * @desc Icons hover at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"1\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons2
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons2
 * @text Category - Icons (Medium)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Up
 * @text MEDIUM: Flying Icons ↑
 * @desc Icons fly to the top at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperRight
 * @text MEDIUM: Flying Icons ↗
 * @desc Icons fly upper right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Right
 * @text MEDIUM: Flying Icons →
 * @desc Icons fly to the right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerRight
 * @text MEDIUM: Flying Icons ↘
 * @desc Icons fly lower right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Down
 * @text MEDIUM: Flying Icons ↓
 * @desc Icons fly to the bottom at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerLeft
 * @text MEDIUM: Flying Icons ↙
 * @desc Icons fly lower left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Left
 * @text MEDIUM: Flying Icons ←
 * @desc Icons fly to the left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperLeft
 * @text MEDIUM: Flying Icons ↖
 * @desc Icons fly upper left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Mid
 * @text MEDIUM: Flying Icons ●
 * @desc Icons hover at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons3
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons3
 * @text Category - Icons (Fast)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Up
 * @text FAST: Flying Icons ↑
 * @desc Icons fly to the top at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperRight
 * @text FAST: Flying Icons ↗
 * @desc Icons fly upper right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Right
 * @text FAST: Flying Icons →
 * @desc Icons fly to the right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerRight
 * @text FAST: Flying Icons ↘
 * @desc Icons fly lower right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Down
 * @text FAST: Flying Icons ↓
 * @desc Icons fly to the bottom at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerLeft
 * @text FAST: Flying Icons ↙
 * @desc Icons fly lower left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Left
 * @text FAST: Flying Icons ←
 * @desc Icons fly to the left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperLeft
 * @text FAST: Flying Icons ↖
 * @desc Icons fly upper left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Mid
 * @text FAST: Flying Icons ●
 * @desc Icons hover at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"4\",\"ySwaySpeed:eval\":\"0.01\"}"}
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
 * @param WeatherEffects
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
 * @desc General Settings for the Weather Effects plugin.
 * @default {"PreRenderGenImage:eval":"false","RenderVariations:num":"16","SmoothIcons:eval":"true"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options Settings for the Weather Effects plugin.
 * @default {"Options":"","AddWeatherDensityOption:eval":"true","AdjustRect:eval":"true","Name:str":"Weather Density"}
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
 * @param PreRenderGenImage:eval
 * @text Pre-Render Generated?
 * @type boolean
 * @on Pre-render
 * @off Render when needed
 * @desc Pre-render generated images for weather patterns?
 * This reduces lag for on-demand weather patterns.
 * @default false
 *
 * @param RenderVariations:num
 * @text # of Variations
 * @parent PreRenderGenImage:eval
 * @min 1
 * @desc How many variations of each rendered weather pattern do you want?
 * @default 16
 *
 * @param SmoothIcons:eval
 * @text Smooth Icons?
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Smooth out the icons used for weather sprites?
 * Or keep them pixelated?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddWeatherDensityOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Weather Density' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Weather Density
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Custom:
 *
 * @param sprite:struct
 * @text Sprite Settings
 * @type struct<Sprite>
 * @desc The general settings involving the weather sprites.
 * @default {"lifespan:num":"60","lifespanVariance:num":"0","spawnLocationX:str":"random","spawnLocationY:str":"random","mapBound:eval":"true","opacity:num":"255","opacityVariance:num":"0","scale:num":"1.0","scaleVariance:num":"0","totalMinimum:num":"20","totalPerPower:num":"5"}
 *
 * @param dimmer:struct
 * @text Dimmer Overlay
 * @type struct<Dimmer>
 * @desc Settings involving the dimmer overlay cast over the screen.
 * @default {"color:str":"#000000","opacityMinimum:num":"0","opacityPerPower:num":"0"}
 *
 * @param image:struct
 * @text Image Settings
 * @type struct<Image>
 * @desc Settings for the images used for the weather sprites.
 * Weathers with multiple images will be picked at random.
 * @default {"generated:eval":"true","generatedWeight:num":"1","icons:arraynum":"[]","iconsWeight:num":"16","pictures:arraystr":"[]","picturesWeight:num":"16","blendMode:num":"0","hueVariations:arraynum":"[]","toneVariations:arrayeval":"[]"}
 *
 * @param flags:struct
 * @text Special Effects
 * @type struct<Flags>
 * @desc Specialized effects that are turned on for specific weather
 * types can be found here.
 * @default {"alwaysVisiblePlayer:eval":"false"}
 *
 * @param trajectory:struct
 * @text Trajectory Settings
 * @type struct<Trajectory>
 * @desc Settings used to determine the trajectory a weather sprite
 * will take and how they behave on it.
 * @default {"type:str":"straight","speed:eval":"1","angle:eval":"0","alignAngle:eval":"true","angleVariance:eval":"0","angleOffset:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 */
/* ----------------------------------------------------------------------------
 * Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sprite:
 *
 * @param lifespan:num
 * @text Lifespan
 * @desc Lifespan of each weather sprite in frames.
 * @default 60
 *
 * @param lifespanVariance:num
 * @text Variance
 * @parent lifespan:num
 * @desc What variance is there to each lifespan value?
 * @default 0
 *
 * @param spawnLocationX:str
 * @text Spawn Location X
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option left border
 * @option left 10%
 * @option left 20%
 * @option left 30%
 * @option left 40%
 * @option left 50%
 * @option left 60%
 * @option left 70%
 * @option left 80%
 * @option left 90%
 * @option - 
 * @option center screen
 * @option center 10%
 * @option center 20%
 * @option center 30%
 * @option center 40%
 * @option center 50%
 * @option center 60%
 * @option center 70%
 * @option center 80%
 * @option center 90%
 * @option - 
 * @option right border
 * @option right 10%
 * @option right 20%
 * @option right 30%
 * @option right 40%
 * @option right 50%
 * @option right 60%
 * @option right 70%
 * @option right 80%
 * @option right 90%
 * @option - 
 * @option sides border
 * @option sides 10%
 * @option sides 20%
 * @option sides 30%
 * @option sides 40%
 * @option - 
 * @desc What x location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetX:eval
 * @text Offset X
 * @parent spawnLocationX:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param spawnLocationY:str
 * @text Spawn Location Y
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option upper border
 * @option upper 10%
 * @option upper 20%
 * @option upper 30%
 * @option upper 40%
 * @option upper 50%
 * @option upper 60%
 * @option upper 70%
 * @option upper 80%
 * @option upper 90%
 * @option - 
 * @option middle screen
 * @option middle 10%
 * @option middle 20%
 * @option middle 30%
 * @option middle 40%
 * @option middle 50%
 * @option middle 60%
 * @option middle 70%
 * @option middle 80%
 * @option middle 90%
 * @option - 
 * @option - 
 * @option lower border
 * @option lower 10%
 * @option lower 20%
 * @option lower 30%
 * @option lower 40%
 * @option lower 50%
 * @option lower 60%
 * @option lower 70%
 * @option lower 80%
 * @option lower 90%
 * @option - 
 * @option either border
 * @option either 10%
 * @option either 20%
 * @option either 30%
 * @option either 40%
 * @option - 
 * @desc What y location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetY:eval
 * @text Offset Y
 * @parent spawnLocationY:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param mapBound:eval
 * @text Map Bound?
 * @parent spawnLocation:str
 * @type boolean
 * @on Moves with Map
 * @off Screen-Locked
 * @desc Do the weather sprites move with the map scrolling?
 * @default true
 *
 * @param opacity:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Starting opacity of each weather sprite in frames.
 * @default 255
 *
 * @param opacityVariance:num
 * @text Variance
 * @parent opacity:num
 * @desc What variance is there to each starting opacity value?
 * @default 0
 *
 * @param opacityEasingType:str
 * @text Easing Type
 * @parent opacity:num
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
 * @desc Select which easing type you wish to apply for opacity.
 * @default Linear
 *
 * @param opacityFadeInTime:num
 * @text Fade In Time
 * @parent opacity:num
 * @type number
 * @desc How many frames does it take for the sprite to fade in?
 * Use 0 to start immediately at full opacity.
 * @default 16
 *
 * @param scale:num
 * @text Scale
 * @desc What is the scale of the sprite?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleVariance:num
 * @text Variance
 * @parent scale:num
 * @desc What variance is there to the main scale value?
 * @default 0
 *
 * @param scaleRatioX:num
 * @text Ratio X
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale X?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleRatioY:num
 * @text Ratio Y
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale Y?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param totalMinimum:num
 * @text Total Sprite Minimum
 * @desc What is the minimum number of sprites on the screen?
 * @default 20
 *
 * @param totalPerPower:num
 * @text Total Per Power
 * @parent totalMinimum:num
 * @desc Increase the total number of sprites per power by this.
 * Lowest power is 1. Highest power is 9.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * Dimmer Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Dimmer:
 *
 * @param color:str
 * @text Color
 * @desc Dimmer color. This uses #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param opacityMinimum:num
 * @text Opacity Minimum
 * @parent totalMinimum:num
 * @desc What is the minimum opacity value for the dimmer?
 * @default 0
 *
 * @param opacityPerPower:num
 * @text Opacity Per Power
 * @parent opacityMinimum:num
 * @desc What is the total opacity value per power for the dimmer?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Image Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Image:
 *
 * @param generated:eval
 * @text Generated Image?
 * @type boolean
 * @on Include
 * @off Exclude
 * @desc Include the plugin-generated image for this weather type?
 * @default true
 *
 * @param generatedWeight:num
 * @text Weight
 * @parent generated:eval
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param icons:arraynum
 * @text Icon(s)
 * @type string[]
 * @desc Which icons do you wish to include for the images to appear as?
 * @default []
 *
 * @param iconsWeight:num
 * @text Weight
 * @parent icons:arraynum
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param pictures:arraystr
 * @text Picture(s)
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Which pictures do you wish to include for the images to appear as?
 * @default []
 *
 * @param picturesWeight:num
 * @text Weight
 * @parent pictures:arraystr
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param blendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the weather sprite?
 * @default 0
 *
 * @param hueVariations:arraynum
 * @text Hue Variations
 * @type number[]
 * @min 0
 * @max 360
 * @desc What hue variations will be randomly selected from?
 * Use a value between 0 and 360.
 * @default ["0"]
 *
 * @param toneVariations:arrayeval
 * @text Tone Variations
 * @type string[]
 * @desc What tone variations will be randomly selected from?
 * Format for each: [Red, Green, Blue, Gray]
 * @default ["[0,0,0,0]"]
 *
 */
/* ----------------------------------------------------------------------------
 * Special Flags Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Flags:
 *
 * @param alwaysVisiblePlayer:eval
 * @text Allow Visible Player?
 * @type boolean
 * @on Visible
 * @off Ignore
 * @desc Make the player more visible by reducing the
 * opacity of nearby weather sprites?
 * @default false
 *
 * @param flatFlutter:eval
 * @text Flat Fluttering?
 * @type boolean
 * @on Object is Flat
 * @off Object has Volume
 * @desc Is the object flat and flutters in the wind?
 * Or does the object have volume and doesn't?
 * @default false
 *
 * @param longevity:eval
 * @text Longevity
 * @type boolean
 * @on Lasts Until Changed
 * @off Normal
 * @desc Weather effects with longevity don't expire until
 * the weather pattern type is changed.
 * @default false
 *
 * @param hueSwayRange:eval
 * @text Hue Sway Range
 * @desc How much should the hue sway back and forth?
 * JavaScript code can be used.
 * @default 0
 *
 * @param hueSwaySpeed:eval
 * @text Hue Sway Speed
 * @parent hueSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param respawnCommonEventID:num
 * @text Respawn Common Event
 * @type common_event
 * @desc Play a specific Common Event when this event respawns?
 * The Common Event will run as a Once Parallel.
 * @default 0
 *
 * @param respawnDelayMin:eval
 * @text Respawn Delay Minimum
 * @desc Is there a delay to the respawn? This is how many
 * frames the sprite must wait before respawning.
 * @default 0
 *
 * @param respawnDelayRngPerPower:eval
 * @text RNG Delay Per Power
 * @parent respawnDelayMin:eval
 * @desc How many randomized frames of delay per power must be waited?
 * @default +0
 *
 * @param scaleIn:eval
 * @text Scale In
 * @desc What scale ratio should the sprite spawn in at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleInDuration:eval
 * @text Duration
 * @parent scaleIn:eval
 * @desc How many frames should the scale in effect take?
 * Scale in will always head towards 1.0.
 * @default 10
 *
 * @param scaleOut:eval
 * @text Scale Out
 * @desc What scale ratio should the sprite despawn out at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleOutDuration:eval
 * @text Duration
 * @parent scaleOut:eval
 * @desc How many frames should the scale out effect take?
 * Scale in will usually head from 1.0.
 * @default 10
 * 
 * @param CustomFinish
 * @text Custom Finish
 *
 * @param fireworksFinish:eval
 * @text Fireworks Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Show me fireworks!
 * @off It's not right!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fireworks explosion?
 * @default false
 *
 * @param sparkleFinish:eval
 * @text Sparkle Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Sparkle YES!
 * @off NO! No Sparkle!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fabulous spinning sparkle effect?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Trajectory Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Trajectory:
 *
 * @param type:str
 * @text Trajectory Type
 * @type select
 * @option -
 * @option Straight: Follows the trajectory
 * @value straight
 * @option Frozen: Does not follow a trajectory
 * @value frozen
 * @option -
 * @option Player-Locked: Map only! Center of sprite is locked on player
 * @value player
 * @option Follower-Locked: Map only! Center of sprite is locked on target follower
 * @value follower
 * @option Event-Locked: Map only! Center of sprite is locked on target event
 * @value event
 * @option -
 * @option Actor-Locked: Battle only! Center of sprite is locked on target actor
 * @value actor
 * @option Enemy-Locked: Battle only! Center of sprite is locked on target enemy
 * @value enemy
 * @option User-Locked: Battle only! Center of sprite is locked on current user
 * @value user
 * @option Target-Locked: Battle only! Center of sprite is locked on current target
 * @value target
 * @option -
 * @desc What trajectory type is used?
 * @default straight
 * 
 * @param lockedID:eval
 * @text Locked ID/Index
 * @parent type:str
 * @desc For locked trajectories only. Input the follower index.
 * Or ID of event, actor, enemy.
 * @default 0
 * 
 * @param lockedOffsetX:eval
 * @text Offset X (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param lockedOffsetY:eval
 * @text Offset Y (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param speed:eval
 * @text Speed
 * @desc What speed is the sprite moving at? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 1
 *
 * @param speedVariance:eval
 * @text Speed Variance
 * @parent speed:eval
 * @desc What variance is there to the speed value?
 * @default 0
 *
 * @param angle:eval
 * @text Angle
 * @desc What angle (0 to 360) is the sprite moving toward?
 * JavaScript code can be used.
 * @default 0
 *
 * @param alignAngle:eval
 * @text Align Angle?
 * @parent angle:eval
 * @type boolean
 * @on Rotates to Align
 * @off Does Not Rotate
 * @desc Should the sprite rotate itself according to the angle
 * it is moving at across the screen?
 * @default true
 *
 * @param angleVariance:eval
 * @text Angle Variance
 * @parent angle:eval
 * @desc What variance is there to the base angle?
 * @default 0
 *
 * @param angleOffset:eval
 * @text Visual Angle Offset
 * @parent angle:eval
 * @desc Offset the visual by this many degrees. Used for images
 * that aren't made aligned with 0 degrees facing left.
 * @default +0
 *
 * @param angleArc:eval
 * @text Angle Arc
 * @desc How should the trajectory arc when the sprite moves?
 * JavaScript code can be used.
 * @default +0
 *
 * @param angleSwayRange:eval
 * @text Angle Sway Range
 * @desc How much should the angle sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param angleSwaySpeed:eval
 * @text Angle Sway Speed
 * @parent angleSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param spinSpeed:eval
 * @text Spin Speed
 * @desc What speed do the sprites spin?
 * JavaScript code can be used.
 * @default +0
 *
 * @param spinSpeedVariance:eval
 * @text Spin Speed Variance
 * @parent spinSpeed:eval
 * @desc What variance is there to the spin speed?
 * @default 0
 *
 * @param reverseSpin:eval
 * @text Reverse Spin?
 * @parent spinSpeed:eval
 * @type boolean
 * @on Can Reverse Spin
 * @off No Reverse Spin
 * @desc Can the spin go in the reverse direction?
 * @default false
 *
 * @param xSwayRange:eval
 * @text X Sway Range
 * @desc How much should the X value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param xSwaySpeed:eval
 * @text X Sway Speed
 * @parent xSwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param ySwayRange:eval
 * @text Y Sway Range
 * @desc How much should the Y value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param ySwaySpeed:eval
 * @text Y Sway Speed
 * @parent ySwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 */
//=============================================================================

const _0x5da319=_0x52ec;(function(_0x449ebf,_0x140178){const _0x2006ba=_0x52ec,_0x6fa2f=_0x449ebf();while(!![]){try{const _0x113c60=parseInt(_0x2006ba(0x1e2))/0x1*(-parseInt(_0x2006ba(0x35f))/0x2)+parseInt(_0x2006ba(0x131))/0x3+parseInt(_0x2006ba(0x2d3))/0x4+parseInt(_0x2006ba(0x34c))/0x5*(parseInt(_0x2006ba(0x445))/0x6)+-parseInt(_0x2006ba(0x160))/0x7*(-parseInt(_0x2006ba(0x377))/0x8)+parseInt(_0x2006ba(0x419))/0x9*(parseInt(_0x2006ba(0x57a))/0xa)+-parseInt(_0x2006ba(0x502))/0xb;if(_0x113c60===_0x140178)break;else _0x6fa2f['push'](_0x6fa2f['shift']());}catch(_0x5f092e){_0x6fa2f['push'](_0x6fa2f['shift']());}}}(_0x751b,0xef446));var label='WeatherEffects',tier=tier||0x0,dependencies=[_0x5da319(0x4f1)],pluginData=$plugins[_0x5da319(0x472)](function(_0x39b4be){const _0x1b62b7=_0x5da319;return _0x39b4be[_0x1b62b7(0x407)]&&_0x39b4be['description'][_0x1b62b7(0x4e2)]('['+label+']');})[0x0];function _0x751b(){const _0x200bf9=['_cached_WeatherEffects_Xtreme','embers','center\x2020%','_branches','LVadr','Weather_update','flamehaze','Medium_Icons_Down','applyInverse','zCnaL','MakeVariance','isVolumeSymbol','drawSnowflakeLine','_cached_WeatherEffects_ShadowBurst','_cached_WeatherEffects_SnowClouds','_cached_WeatherEffects_PollutionClouds','qigoN','#a1a1a1','drawMapleLeaf','clearCircle','_colorTone','lower\x20border','#880000','remove','Dark_DarkOrbs','Layer','getTemporaryCanvas','lower\x2020%','slow_icons_2','Fast_Icons_LowerLeft','blizzard','medium_icons_8','#aaccff','rainboworbs','JSON','weatherEffectsFlameHaze','context','FqKQp','medium_icons_3','_hueSwayRng','toString','Ice_Sleet','status','Options','weatherEffectsDiamondDust','Xqzbv','#a8c54a','JcPCx','center\x2050%','_cached_WeatherEffects_GrassyGust','vggId','_lowerLayer','sgTsa','Light_LensFlare','test','Window_Options_isVolumeSymbol','Fire_Firestorm','_flakeRadius','#444444','qmmqI','28413DzVdWs','Slow_Icons_Left','Dark_SmokeFog','pastelbrume','rainbowclouds','white','tileWidth','weatherEffectsSunBeams','fast_icons_5','Scene_Options_maxCommands','Water_Rain','Thunder_PlasmaSurge','AResJ','angleVariance','msYVf','WEATHER_DARKNESS_COLORS','_cached_WeatherEffects_None','opacityPerPower','height','weatherEffectsSnow','setFrame','_flatFlutterDirX','nnGzF','weatherEffectsFireflies','weatherEffectsBloodRain','Fire_Fireworks','weatherEffectsSmokeClouds','rgba(255,%1,%1,0.5)','weatherEffectsSootfall','_cached_WeatherEffects_PrismBeams','drawFireball','_cached_WeatherEffects_AcidRain','_angleArc','slow_icons_6','Fast_Icons_Up','_cached_WeatherEffects_Tempest','#ddffff','reverseSpin','#d28fad','prismburst','floor','#bbffff','mist','lower','550896UBnWnF','fast_icons_3','WEATHER_SUNBEAM_COLORS','snow','weatherEffectsHouseDust','WEATHER_CLOUD_BLUE_COLORS','substring','split','destroy','_upperWeatherContainer','drawCircle','center\x2060%','rgba(255,255,%1,1)','_context','aUDth','_cached_WeatherEffects_Embers','createFrontEnvironmentContainer','lWcQJ','scaleRatioY','VyLUR','#ffccaa','stringify','weatherEffectsRainbowOrbs','#00aa00','adaptWeatherLayerData','_flatFlutterSpeedX','xtreme','radioactivebeam','_stormBitmap','WEATHER_RAINBOW_CLOUD_COLORS','updatePositionFinal','_cached_WeatherEffects_CrumblingCave','kGrcX','Fire_SunBeams','NngYp','slow_icons_4','playOnceParallelInterpreter','vZvrz','pop','loadWeatherIcons','maxSprites','scaleInDuration','weatherEffectsAurora','DwyHJ','parent','filter','balloon','angleArc','rebornLifespan','_cached_WeatherEffects_SunBeam','acidrain','#b2e0f2','fast_icons_1','stroke','log','_cached_WeatherEffects_SmokeClouds','YBKtD','criXZ','Water_SoapBubbles','_cached_WeatherEffects_RainbowArch','call','power','General','user','clamp','medium_icons_6','_cached_WeatherEffects_Icons','dQNar','setWeatherLayerData','weatherEffectsSnowflakes','_upperLayerSprites','GECzv','slow_icons_1','drawMultiPointPolygon','#ffffff','WEATHER_BALLOON_COLORS','match','updatePosition','Power','whiteclouds','createLinearGradient','grassygust','weatherEffectsBubbles','Slow_Icons_LowerLeft','updateScaleInOutRatio','WEATHER_PRISMBEAM_COLORS','middle\x2050%','_cached_WeatherEffects_UvBeam','_xSwayRange','#0072bc','rgba(%1,255,%1,1)','setFullBitmapFrame','_tempCanvas','_green','cBXSu','#69822d','UPGcI','#7da7d9','rgba(','Fast_Icons_Mid','SjWkJ','smokecloud','_cached_WeatherEffects_DustStorm','_baseAngle','GwXLJ','spawnLocationX','Water_Storm','rebornSpriteBlendMode','toLowerCase','rebornSpawnLocation','emTgS','updateHueSway','Game_Screen_clearWeather','drawDandelionSeed','_cached_WeatherEffects_Fumes','_colorFilter','diamonddust','_realOpacity','_cached_WeatherEffects_Firestorm','lower\x2090%','loadPictureBitmap','OzZsf','_hue','XBDfj','_cached_WeatherEffects_Snow','RegExp','weatherEffectsWhiteClouds','right\x2040%','left\x2090%','zAfgY','_cached_WeatherEffects_Fireflies','medium_icons_7','weatherPower','addChild','_flatFlutterSpeedY','left\x2010%','Wind_Pollen','#ffffbb','scaleOutDuration','join','#603913','WfoMd','NUM','rgba(%1,\x20%2,\x20%3,\x200)','OOzKo','Earth_RadioactiveBeams','Earth_CrumblingCave','zppAL','Fire_HeatClouds','_cached_WeatherEffects_Blizzard','right\x2070%','Wind_GrassyGust','_cached_WeatherEffects_Sootfall','IIEGI','Thunder_PurpleHaze','weatherEffectsMoonBeams','_ySwayRng','includes','fTqFp','nrxzF','strokeStyle','globalCompositeOperation','center','_cached_WeatherEffects_RainbowOrbs','BasicPreRenderGeneratedWeather','HeFoa','Name','_notLoadedReady','WEATHER_MOON_BEAM_COLORS','rCTYl','isNoWeather','pictures','VisuMZ_0_CoreEngine','weatherEffectsUltravioletBeams','fGnfm','WEATHER_EFFECTS_PRERENDER_GENERATED_IMAGES','Earth_DustStorm','rain','quIPz','weatherEffectsSnowClouds','Window_Options_addGeneralOptions','medium_icons_1','adjustWeatherLayerPower','initMembers','weatherEffectsShadowBurst','#ff8800','drawLightning','updatePositionStraightTrajectory','_trajectoryType','53600866ccqBdL','beginPath','#aaffcc','gradientFillRect','#8dc63f','left\x2070%','updateWeatherLayer','rainbowarch','_cached_WeatherEffects_PastelBrume','dobtH','_createBitmaps','slow_icons_3','_weatherParent','weatherEffectsIceFog','_cached_WeatherEffects_ShootingStars','hueSwaySpeed','updateOpacityEasing','_cached_WeatherEffects_Bubbles','Ice_GlisteningIce','#998675','ARRAYFUNC','scaleIn','fast_icons_2','Fire_Fireflies','opacity','weatherEffectsFumes','middle\x2020%','weatherEffectsWaterDrop','qIcHF','_angleSwayRng','_cached_WeatherEffects_Thunderclouds','aecAi','calculateScaleX','Ice_Snowflakes','weatherEffectsDustStorm','meteorshower','sprite','_scaleRatioX','#6aba49','reverse','fbGkx','Ice_Snow','weatherEffectsCherryBlossoms','lineWidth','xoyZx','max','prepareGeneratedWeatherImages','sandclouds','weatherEffectsPastelBrume','Light_PastelBrume','_weatherLayers','_lowerLayerSprites','weatherEffectsRainClouds','updatePositionFrozenTrajectory','#e0dd4c','duration','LpbvF','#bbbbbb','_lastDimmerColor','#4dff65','weatherEffectsRain','createUpperWeatherLayer','#ffbbff','UqGJt','middle\x2090%','rainclouds','#000044','rotate','_maxLevel','_cached_WeatherEffects_GreenLeaves','#ccffaa','snowflakes','_cached_WeatherEffects_RainClouds','weatherEffectsCloudBurst','target','Medium_Icons_Right','addCommand','WEATHER_NATURE_GREEN_COLORS','kmgva','lower\x2040%','#ff0000','processRespawnDelay','fast_icons_8','format','ConvertParams','spiderbolt','heatclouds','#fbaf5d','ultraviolet','weatherEffectsAshfall','createElement','_wholeLifespan','addLoadListener','iconHeight','weatherEffectsSparkle','#d6967c','LJoEa','_cached_WeatherEffects_MoonBeam','WEATHER_CLOUD_WHITE_COLORS','Scene_Boot_loadSystemImages','nBcwG','pollen','opacityMinimum','CupbN','arrayToHex','getGeneratedWeatherParticle','copyPluginCmdCustomSettings','WEATHER_SAKURA1_COLORS','_cached_WeatherEffects_FireworksFlower','JdAlB','drawLensFlare','setupEventCommandData','flamewall','updateDimmerOpacity','RzxtR','none','drawSnowflake','_memorizedWeatherData','lifespanVariance','WEATHER_FROST_COLORS','4850voqYDk','Wind_GreenLeaves','WEATHER_RADIOACTIVE_COLORS','map','WaitForCompletion','KFnHd','confetti','Fast_Icons_UpperLeft','_spinSpeed','pRKqE','waterdrop','upper','shadowBlur','_angleSwayRange','drawOvalGradiantCircle','#fff568','WEATHER_POLLEN_COLORS','screenX','weatherEffectsBalloons','WEATHER_SHADOW_BURST_COLORS','maxCommands','_ySwaySpeed','medium_icons_2','iconsWeight','updatePositionBattleLockedTarget','WEATHER_NUCLEAR_COLORS','_cached_WeatherEffects_Aurora','#a900ff','_lifespan','upper\x2070%','rebornBitmap','alwaysVisiblePlayer','#d2c8c5','firestorm','right\x2050%','_lockedOffsetX','control','setLayerData','fillStyle','wSaly','upper\x20border','weatherEffectsConfetti','Ice_ArcticBeam','note','destination-out','gMBiS','#00ff00','thundersurge','newLayer','rebornActions','follower','acrqw','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','WEATHER_SOAP_BUBBLE_COLORS','createTilemap','drawStar','_ySwayRange','drawFireworksFlower','weatherEffectsGreenLeaves','name','sXiNW','Water_Bubbles','Wind_AutumnLeaves','greenleaves','duststorm','findTargetSprite','_opacityFadeInTimeWhole','FUNC','clearWeather','WEATHER_PRIMARY_COLORS','setColorTone','medium_icons_4','lTrRV','Spriteset_Map_createTilemap','_cached_WeatherEffects_LensFlare','_cached_WeatherEffects_SoapBubbles','totalPerPower','_cached_WeatherEffects_IceFog','frameCount','rgba(128,255,128,1)','PJvBR','#ebebeb','WEATHER_CLOUD_DARK_COLORS','displayY','plasmasurge','TRNxn','_cached_WeatherEffects_Storm','color','slow_icons_9','#c4df9b','4154550vcLwvX','Dark_AshDebris','CVXPC','#fff200','replayMemorizedWeatherLayerData','event','euZjz','_angleOffset','#faaacf','Fire_FlameWall','_weather','middle\x2060%','weatherEffectsSoapBubbles','AoUiU','respawnDelayMin','WEATHER_GREEN_LEAVES_COLORS','weatherEffectsThunderbolt','Fast_Icons_Left','sandstorm','rgba(128,%1,255,1)','tFybl','weatherEffectsRadioactiveBeams','weatherEffectsSleet','indexOf','housedust','adjustHexColor','toxicgas','#888888','Fast_Icons_Down','_lowerWeatherContainer','lower\x2050%','kRsGV','MNGWV','Dark_MoonBeams','Spriteset_Battle_createBattleback','_cached_WeatherEffects_RainbowClouds','setup','_scaleRatioY','updatePositionTrajectoryAngle','ashfall','#898989','followers','#79bfdb','tempest','both','_cached_WeatherEffects_PurpleHaze','crumblingcave','323029vKtwfG','_cached_WeatherEffects_WhiteClouds','weatherEffectsDustClouds','longevity','HwoRL','rgba(255,255,255,1)','weatherEffectsHeatClouds','rgba(255,%1,%1,1)','NDWJs','right\x2020%','Water_RainClouds','updatePositionTrajectorySpin','_cached_WeatherEffects_ArcticBeams','upper\x2010%','width','Light_PrismBeams','_weatherIcons','registerCommand','weatherEffectsNone','VisuMZ_2_VisualBattleEnv','center\x2090%','pollutionclouds','updateWeatherLayerDuration','nNzTE','guzYH','hueSwayRange','StWPh','STR','angleOffset','spawnOffsetX','_updateAllSprites','randomInt','#d58e6a','lower\x2060%','_customModified','mtfeg','TGkkH','updatePositionFailsafeTrajectory','xSwayRange','makeData','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','children','enemy','Fire_MeteorShower','updatePositionTrajectory','VQZcV','Thunder_PlasmaBolt','WEATHER_LIGHTNING_COLORS','Earth_ToxicGas','WEATHER_LIGHT_COLORS','_cached_WeatherEffects_HouseDust','_cached_WeatherEffects_RadioactiveBeam','steam','center\x2010%','ConfigManager_applyData','prismbeams','description','#fac159','#a800ff','WeatherType','bloodrain','#00ffff','dmJJI','rebornSpriteImage','jTfjH','_lockedOffsetY','#949fc6','WEATHER_GRASSY_GUST_COLORS','addWeatherDensityCommand','fumes','spawnOffsetY','#959595','_cached_WeatherEffects_SmokeFog','_strokeWidth','Wind_DandelionSeeds','setupIconFrame','flags','ARRAYJSON','xSwaySpeed','Slow_Icons_UpperLeft','_baseHue','Wind_CherryBlossoms','respawnCommonEventID','actor','InSine','rgba(%1,%1,255,1)','#9cdaf2','drawRainbowArch','drawRainbowLensFlare','translate','Medium_Icons_Up','lower\x2070%','sqrt','uVaeh','darkorbs','applyPluginCmdSettingsWait','_xSwaySpeed','members','WEATHER_STAR_COLORS','ZVXSb','#fcecde','vMOLY','strokeColor','scaleRatioX','loadGeneratedBitmap','closePath','_cached_WeatherEffects_Snowflakes','WEATHER_ARCTIC_BEAM_COLORS','tileHeight','weatherEffectsDarkOrbs','isSceneBattle','initialize','#0000ff','WEATHER_EARTH_COLORS','toUpperCase','rgba(%1,%2,%3,%4)','_cached_WeatherEffects_LightOrbs','save','_targets','NBKXG','_respawnDelay','center\x2080%','Slow_Icons_Up','_cached_WeatherEffects_HeatClouds','#821d1c','#000000','rebornInitialTrajectoryData','respawnDelayRngPerPower','UpperLower','_cached_WeatherEffects_DarkOrbs','1FJcRib','upper\x2030%','alignAngle','globalAlpha','Ice_Aurora','_flatFlutterRngX','WEATHER_ASH_COLORS','Wind_Tempest','_lastType','applyPluginCmdSettingsSpecificCases','Wind_XtremeSpeed','_angleArcTotal','lAbWD','fill','upper\x2080%','ashdebris','soapbubbles','advanced','ARRAYSTRUCT','applyPluginCmdSettingsBasic','shift','_baseTone','_cached_WeatherEffects_Ashfall','opacityRate','upper\x2090%','IowMN','JYcqk','_cached_WeatherEffects_Spiderbolt','weatherEffectsStorm','dandelionseeds','angleSwaySpeed','_originBound','_cached_WeatherEffects_DustClouds','weatherEffectsFlameWall','weatherEffectsFireworksFlower','icons','drawText','weatherEffectsBlizzard','middle\x2010%','createRadialGradient','create','_cached_WeatherEffects_FlameHaze','constructor','bubbles','drawCloud','Slow_Icons_UpperRight','Fire_FlameHaze','#a700ff','Water_DrippingWater','hexToArray','Medium_Icons_LowerRight','_scaleInOutRatio','ARRAYNUM','screenWidth','WEATHER_PASTEL_BRUME_COLORS','getWeatherLayerSprite','_cached_WeatherEffects_FlameWall','isDebugAllOption','restore','HwKMf','weatherEffectsAshDebris','Vdesv','_cached_WeatherEffects_BloodRain','FqkNQ','paintOpacity','updateOpacityFinal','medium_icons_9','_baseTexture','xdAiD','updateDimmerColor','cgZsE','canvas','memorizeWeatherLayerData','SVzjj','WEATHER_EFFECTS_SMOOTH_ICONS','Fast_Icons_Right','TlnpE','updateWeatherLayers','smooth','#754c24','sootfall','cos','_cached_WeatherEffects_WaterDrop','Wind_Balloons','#f69679','iljil','_cached_WeatherEffects_Thunderbolt','rgba(0,0,0,0)','BasicClearWeather','qBhAb','arc','index','#a1d2e5','moveTo','Ice_IceFog','straight','fireworksflower','WEATHER_CONFETTI_COLORS','Light_RainbowClouds','#ffff00','balloons','WEATHER_PASTEL_COLORS','Spriteset_Battle_createBattleFieldContainer','createBattleFieldContainer','isLongevityAffected','WEATHER_EFFECTS_DEBUG_GENERATE_MSG','clone','bUidu','#92d450','generatedWeight','#fddbe2','fireworks','shootingstars','aImWi','weatherEffectsSmokeFog','#6dcff6','XeRwP','blAfQ','#111111','weatherEffectsAcidRain','ySwayRange','_cached_WeatherEffects_Confetti','plasmabolt','rgba(255,64,64,1)','clearWeatherLayers','weatherEffectsDandelionSeeds','hexToRgba','drawBalloon','uibci','#404040','fdvVi','angle','clearWeatherLayerData','storm','fireflies','Light_Confetti','right\x2030%','mJdGa','MAX_LAYERS','updatePositionTrajectorySway','tWEzE','PZKbb','_cached_WeatherEffects_DandelionSeeds','_opacityFadeInTime','xdlfy','#505050','weatherEffectsRainbowClouds','left','setHue','speed','#b87693','right\x2010%','thunderbolt','Slow_Icons_LowerRight','#baa4b2','Thunder_SpiderLightning','weatherEffectsShootingStars','dustclouds','worldTransform','#888800','_cached_WeatherEffects_AshDebris','_flakeAngle','Dark_Ashfall','drawImage','updateLifespan','Thunder_Thunderclouds','_cached_WeatherEffects_Sleet','CvDjq','lower\x2080%','ytVdQ','removeUnusedColorFilter','zFePi','push','isPlaytest','parse','dfFDk','discharge','weatherEffectsSpiderbolt','fast_icons_4','nEUgu','#f7941d','type','black','#a3d2e5','glistening','yellow','#ea916d','weatherEffectsArcticBeams','%1Weight','filters','_flags','FXUFp','lighter','_cached_WeatherEffects_Rain','gxCDC','#fffde0','_baseSprite','#c69c6d','Custom','AddOption','_trajectoryLockedID','Water_RisingSteam','slow_icons_7','_cached_WeatherEffects_Mist','shadowburst','_cached_WeatherEffects_Pollen','generated','middle\x2080%','fillRect','processFireworksFinish','upper\x2020%','#b8dfee','WEATHER_UV_BEAM_COLORS','dIbsX','medium_icons_5','NdHge','concat','lower\x2030%','_sprites','weatherEffectsGrassyGust','weatherEffectsLensFlare','wizHi','Thunder_StaticCharge','arcticbeam','prototype','sunbeams','drawPolyArc','screenHeight','GmrzM','#fffbc7','Water_CloudBurst','getLastPluginCommandInterpreter','updateFlags','bezierCurveTo','#fcfade','center\x2040%','calcEasing','lineTo','_scene','_cached_WeatherEffects_ToxicGas','trim','1616992OljUYB','cherryblossoms','lightorbs','rebornNewData','scaleOut','SmoothIcons','_alignAngle','fontSize','_subject','getContext','opacityFadeInTime','right\x2060%','CyuxG','rebornSprite','_dimmerSprite','drawSakuraPetal','updatePositionMapLockedTarget','#ddddff','hVkGS','drip','lifespan','smokefog','length','left\x2020%','lockedID','loadIconsetBitmap','img/system/Iconset.png','_baseScale','WEATHER_EFFECTS_ICON_GENERATED','rebornInitialOpacity','DegreesToRadian','applyPluginCmdSettingsCustom','BasicReplayMemory','_cached_WeatherEffects_Balloons','Linear','left\x2050%','return\x200','Earth_HouseDust','load','weatherEffectsAutumnLeaves','Settings','RenderVariations','applyPluginCmdSettingsLayers','_red','yeEqJ','randomizeBitmapType','blendMode','WEATHER_EFFECTS_MAX_VARIATIONS','smokeclouds','pPrJM','center\x2070%','WEATHER_AUTUMN_LEAVES_COLORS','weatherEffectsPurpleHaze','_debugID','data','RIceu','snowclouds','createLowerWeatherLayer','_cached_WeatherEffects_Fireworks','Ice_DiamondDust','Water_RainbowArch','createWeather','ApplyEasing','transform','_snowBitmap','padZero','shouldPreRenderWeatherImages','exit','#ba7959','qhFHq','#ccaaff','upper\x2050%','Slow_Icons_Right','rgba(%1,\x20%2,\x20%3,\x201)','round','#ffaaff','rgba(255,255,255,0)','rgba(128,255,128,0)','_cached_WeatherEffects_Sandstorm','iconWidth','updateScale','weatherEffectsStars','lensflare','toneVariations','_spinAngle','Ice_SnowClouds','update','right\x2080%','ConfigManager_makeData','jPiFL','PreRenderGenImage','weatherEffectsFirestorm','_layerID','zJfym','#e1e1e1','dimmer','screenY','#e6cab9','_speed','totalMinimum','autumnleaves','isInstanceOfSceneMap','viewport','WEATHER_RAINBOW_ORB_COLORS','cloudburst','#fbec65','weatherEffectsTempest','isMobileDevice','image','ceil','moonbeams','GVSvi','Thunder_Thundersurge','#ffffaa','#ff00ff','fast_icons_6','updateWeather','weatherEffectsPrismBeams','replace','setupWeatherEffectNotetags','ySwaySpeed','80WqdihX','_cached_WeatherEffects_CherryBlossoms','ARRAYEVAL','WEATHER_FIREFLY_COLORS','upper\x2060%','opacityVariance','fast_icons_7','PqUjm','scaleVariance','MakeFloatVariance','_cached_WeatherEffects_Stars','wSsBb','rebornCommonEvent','Game_Map_setup','updateWeatherLayerPower','_flatFlutterRngY','fNbxS','staticcharge','texmm','1564670cYVXyE','changeWeather','WEATHER_AUTUMN_COLORS','Agtis','min','Fast_Icons_UpperRight','#008800','thunderclouds','slow_icons_5','Duration','ARRAYSTR','aurora','WEATHER_DANDELION2_COLORS','WEATHER_FLAME_COLORS','calculateScaleY','uazOo','purplehaze','anchor','#55a743','Earth_DustClouds','rgba(255,64,64,0)','_cached_WeatherEffects_CloudBurst','applyEasing','version','320bfqOjY','#fdc689','rebornSpriteTone','right\x20border','right','createNewWeatherLayers','weatherEffectsSandClouds','QhNyc','addColorStop','shadowColor','cdxYH','parameters','slow_icons_0','IYKVh','_opacityEasingType','updateOpacity','weatherEffectsFireworks','tmeEU','Dark_Fumes','createNewWeatherSprites','rebornSpriteScale','_cached_WeatherEffects_SandClouds','scale','wait','InQuad','sleet','bitmap','#7d7d7d','drawTreeLeaf','loadSystemImages','WEATHER_SUNLIGHT_COLORS','ISmIe','WEATHER_MOONLIGHT_COLORS','random','stars','weatherEffectsSandstorm','_noWeather','mDrCo','powerTarget','lightburst','lower\x2010%','_updateDimmer','drEdy','WeatherEffects','icefog','rgba(%1,255,255,1)','erkEA','_angleSwaySpeed','origin','weatherDensity','_xSwayRng','_cached_WeatherEffects_DiamondDust','trajectory','bbDDq','#aabaf1','HfZia','Slow_Icons_Mid','spawnLocationY','Thunder_Thunderbolt','#ffaaaa','eventId','#07ff7f','WEATHER_SAKURA2_COLORS','Thunder_Discharge','_cached_WeatherEffects_Sparkle','iSGKN','abs','WEATHER_ULTRAVIOLET_COLORS','WEATHER_DANDELION3_COLORS','#fac4ad','_cached_WeatherEffects_AutumnLeaves','speedVariance','Dark_ShadowBurst','addGeneralOptions','drawFireworksMissile','spinSpeed','cyan','EXfKY','updateData','AdjustRect','czvpA','rgba(%1,%1,%1,0)','sparkle','sin','rebornSpriteHue','bind','weatherEffectsPollen','slow_icons_8','vjvCj','#fde3d9','applyPluginCmdSettings','upper\x2040%','weatherEffectsRainbowArch','loadBitmapType','rebornFlags','processSparkleFinish','jPJxy','#aaffaa','createBattleback','fast_icons_9','getWeatherLayerData','#fff799'];_0x751b=function(){return _0x200bf9;};return _0x751b();}VisuMZ[label][_0x5da319(0x2fb)]=VisuMZ[label][_0x5da319(0x2fb)]||{},VisuMZ['ConvertParams']=function(_0x4f5ca8,_0x41b77b){const _0x439b41=_0x5da319;for(const _0x1d28e7 in _0x41b77b){if(_0x439b41(0x1fb)!==_0x439b41(0x1fb)){if(this[_0x439b41(0x154)]&&_0x1298d6[_0x439b41(0x462)]['length']<=0x0){const _0x271740=this['_cached_WeatherEffects_RainbowClouds'];return _0x271740[_0x1cb357['floor'](_0x1869c4[_0x439b41(0x398)]()*_0x271740['length'])];}const _0xf1b87b=_0x268232['WEATHER_RAINBOW_CLOUD_COLORS'][_0x439b41(0x46b)](),_0x2b4634=0.85,_0x2ce71c=_0x348fac[_0x439b41(0x14a)](_0xf1b87b,_0x2b4634),_0x231f6a=_0x493444[_0x439b41(0x14a)](_0x2ce71c,_0x2b4634),_0x50f516=_0x43fbbf[_0x439b41(0x14a)](_0x231f6a,_0x2b4634),_0x100b56=new _0x24f8be(0x1f4,0x1f4);_0x100b56[_0x439b41(0x20e)](0xfa,0x15e,0x4b,_0x50f516,0x10,0x14),_0x100b56[_0x439b41(0x20e)](0xfa,0xfa,0x64,_0x2ce71c,0x40,0x19),_0x100b56['drawCloud'](0xfa,0xfa,0x3c,_0x231f6a,0x10,0x14),_0x100b56[_0x439b41(0x182)]=![];if(_0x1d0770[_0x439b41(0x24b)])_0x43abd4['log'](_0x439b41(0x41d));return this['_cached_WeatherEffects_RainbowClouds']=this[_0x439b41(0x154)]||[],this[_0x439b41(0x154)]['push'](_0x100b56),_0x100b56;}else{if(_0x1d28e7[_0x439b41(0x491)](/(.*):(.*)/i)){if(_0x439b41(0x52a)!==_0x439b41(0x52a))return _0x175abe[_0x439b41(0x311)](_0x31605f,_0x3e3ab2);else{const _0x34aec=String(RegExp['$1']),_0x263e00=String(RegExp['$2'])[_0x439b41(0x1d2)]()[_0x439b41(0x2d2)]();let _0x58b954,_0x254ae8,_0x589de9;switch(_0x263e00){case _0x439b41(0x4d3):_0x58b954=_0x41b77b[_0x1d28e7]!==''?Number(_0x41b77b[_0x1d28e7]):0x0;break;case _0x439b41(0x216):_0x254ae8=_0x41b77b[_0x1d28e7]!==''?JSON[_0x439b41(0x290)](_0x41b77b[_0x1d28e7]):[],_0x58b954=_0x254ae8[_0x439b41(0x57d)](_0x56d47c=>Number(_0x56d47c));break;case'EVAL':_0x58b954=_0x41b77b[_0x1d28e7]!==''?eval(_0x41b77b[_0x1d28e7]):null;break;case _0x439b41(0x34e):_0x254ae8=_0x41b77b[_0x1d28e7]!==''?JSON[_0x439b41(0x290)](_0x41b77b[_0x1d28e7]):[],_0x58b954=_0x254ae8[_0x439b41(0x57d)](_0x392303=>eval(_0x392303));break;case _0x439b41(0x3ff):_0x58b954=_0x41b77b[_0x1d28e7]!==''?JSON[_0x439b41(0x290)](_0x41b77b[_0x1d28e7]):'';break;case _0x439b41(0x1ad):_0x254ae8=_0x41b77b[_0x1d28e7]!==''?JSON['parse'](_0x41b77b[_0x1d28e7]):[],_0x58b954=_0x254ae8[_0x439b41(0x57d)](_0x1a2fbc=>JSON[_0x439b41(0x290)](_0x1a2fbc));break;case _0x439b41(0x11a):_0x58b954=_0x41b77b[_0x1d28e7]!==''?new Function(JSON[_0x439b41(0x290)](_0x41b77b[_0x1d28e7])):new Function(_0x439b41(0x2f7));break;case _0x439b41(0x516):_0x254ae8=_0x41b77b[_0x1d28e7]!==''?JSON['parse'](_0x41b77b[_0x1d28e7]):[],_0x58b954=_0x254ae8[_0x439b41(0x57d)](_0x3b4881=>new Function(JSON['parse'](_0x3b4881)));break;case _0x439b41(0x17b):_0x58b954=_0x41b77b[_0x1d28e7]!==''?String(_0x41b77b[_0x1d28e7]):'';break;case _0x439b41(0x369):_0x254ae8=_0x41b77b[_0x1d28e7]!==''?JSON[_0x439b41(0x290)](_0x41b77b[_0x1d28e7]):[],_0x58b954=_0x254ae8['map'](_0x2fb7a1=>String(_0x2fb7a1));break;case'STRUCT':_0x589de9=_0x41b77b[_0x1d28e7]!==''?JSON[_0x439b41(0x290)](_0x41b77b[_0x1d28e7]):{},_0x58b954=VisuMZ[_0x439b41(0x556)]({},_0x589de9);break;case _0x439b41(0x1f4):_0x254ae8=_0x41b77b[_0x1d28e7]!==''?JSON[_0x439b41(0x290)](_0x41b77b[_0x1d28e7]):[],_0x58b954=_0x254ae8[_0x439b41(0x57d)](_0x16b563=>VisuMZ[_0x439b41(0x556)]({},JSON['parse'](_0x16b563)));break;default:continue;}_0x4f5ca8[_0x34aec]=_0x58b954;}}}}return _0x4f5ca8;},(_0x176107=>{const _0xebec37=_0x5da319,_0x56cfd7=_0x176107[_0xebec37(0x112)];for(const _0x133735 of dependencies){if(!Imported[_0x133735]){if('drEdy'===_0xebec37(0x3a1)){alert(_0xebec37(0x10b)[_0xebec37(0x555)](_0x56cfd7,_0x133735)),SceneManager['exit']();break;}else{const _0x400fc0=this['_cached_WeatherEffects_Embers'];return _0x400fc0[_0x3ad011[_0xebec37(0x441)](_0x54d52d[_0xebec37(0x398)]()*_0x400fc0['length'])];}}}const _0x623e62=_0x176107[_0xebec37(0x198)];if(_0x623e62[_0xebec37(0x491)](/\[Version[ ](.*?)\]/i)){if('jTfjH'===_0xebec37(0x1a0)){const _0x1c1893=Number(RegExp['$1']);_0x1c1893!==VisuMZ[label][_0xebec37(0x376)]&&(alert(_0xebec37(0x188)['format'](_0x56cfd7,_0x1c1893)),SceneManager['exit']());}else{if(this[_0xebec37(0x170)])return this[_0xebec37(0x170)];return this['_weatherIcons']=_0x21c73b[_0xebec37(0x2f9)](_0xebec37(0x2ed)),this['_weatherIcons'][_0xebec37(0x230)]=_0x2797df[_0xebec37(0x22c)],this[_0xebec37(0x170)];}}if(_0x623e62[_0xebec37(0x491)](/\[Tier[ ](\d+)\]/i)){const _0x3aa366=Number(RegExp['$1']);_0x3aa366<tier?_0xebec37(0x28d)===_0xebec37(0x28d)?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0xebec37(0x555)](_0x56cfd7,_0x3aa366,tier)),SceneManager[_0xebec37(0x316)]()):_0x5f0a6e[_0xebec37(0x2c2)][_0xebec37(0x347)][_0xebec37(0x481)](this):tier=Math[_0xebec37(0x52f)](_0x3aa366,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0xebec37(0x2fb)],_0x176107[_0xebec37(0x382)]);})(pluginData),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'BasicAdjustWeatherPower',_0x92cf63=>{const _0x2e5f55=_0x5da319;VisuMZ['ConvertParams'](_0x92cf63,_0x92cf63);const _0x1d2f02=_0x92cf63['Layer'][_0x2e5f55(0x57d)](_0x45f134=>(Number(_0x45f134)||0x1)['clamp'](0x1,0xa)),_0x3ad701=_0x92cf63['UpperLower'],_0x588623=_0x92cf63[_0x2e5f55(0x493)]||0x0,_0x39e66f=_0x92cf63[_0x2e5f55(0x368)]||0x1;for(const _0x2466d5 of _0x1d2f02){[_0x2e5f55(0x585),'both'][_0x2e5f55(0x4e2)](_0x3ad701)&&$gameScreen[_0x2e5f55(0x4fb)](_0x2466d5,![],_0x588623,_0x39e66f),[_0x2e5f55(0x444),_0x2e5f55(0x15d)][_0x2e5f55(0x4e2)](_0x3ad701)&&$gameScreen['adjustWeatherLayerPower'](_0x2466d5,!![],_0x588623,_0x39e66f);}if(_0x92cf63[_0x2e5f55(0x57e)]){const _0x31c543=$gameTemp['getLastPluginCommandInterpreter']();if(_0x31c543){if(_0x2e5f55(0x21d)===_0x2e5f55(0x21d))_0x31c543['wait'](_0x39e66f||0x1);else{if(this[_0x2e5f55(0x282)]&&this['_cached_WeatherEffects_AshDebris']['length']>=_0x45638c[_0x2e5f55(0x302)]){const _0x3e77c7=this[_0x2e5f55(0x282)];return _0x3e77c7[_0x484773['floor'](_0x4ab1b3[_0x2e5f55(0x398)]()*_0x3e77c7['length'])];}const _0x2f89f1=new _0x2349d2(0x12,0x12),_0x4afbf0=_0x2f89f1['width'],_0x3d6f60=_0x2f89f1['height'],_0xe53d33=_0x4afbf0/0x2-0x2,_0x54af12=_0x3d6f60/0x2-0x2,_0x381e0b=[];_0x381e0b[_0x2e5f55(0x28e)](_0x43bb3d['randomInt'](_0xe53d33)+0x2,_0x5da4c5[_0x2e5f55(0x17f)](_0x54af12)+0x2),_0x381e0b['push'](_0x4afbf0-_0x5a06cc['randomInt'](_0xe53d33)-0x2,_0x2a8461['randomInt'](_0x54af12)+0x2),_0x381e0b['push'](_0x4afbf0-_0x4d33e8['randomInt'](_0xe53d33)-0x2,_0x3d6f60-_0x21f4b4[_0x2e5f55(0x17f)](_0x54af12)-0x2),_0x381e0b[_0x2e5f55(0x28e)](_0x21aa1a[_0x2e5f55(0x17f)](_0xe53d33)+0x2,_0x3d6f60-_0x10ff93[_0x2e5f55(0x17f)](_0x54af12)-0x2);const _0x22b369=_0xb2fb01[_0x2e5f55(0x1e8)][_0x2e5f55(0x24c)](),_0x544b90=_0x22b369[_0xecf282[_0x2e5f55(0x441)](_0x3fa17b[_0x2e5f55(0x398)]()*_0x22b369[_0x2e5f55(0x2e9)])];_0x2f89f1[_0x2e5f55(0x48e)](_0x381e0b,_0x544b90,_0x2e5f55(0x298),0x2,0xff,![]),_0x2f89f1[_0x2e5f55(0x182)]=![];if(_0x1252f['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x46ef8d[_0x2e5f55(0x47b)](_0x2e5f55(0x1f1));return this[_0x2e5f55(0x282)]=this[_0x2e5f55(0x282)]||[],this[_0x2e5f55(0x282)][_0x2e5f55(0x28e)](_0x2f89f1),_0x2f89f1;}}}}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x23a),_0x46e7b4=>{const _0x4d7e13=_0x5da319;VisuMZ[_0x4d7e13(0x556)](_0x46e7b4,_0x46e7b4);const _0x3980a8=_0x46e7b4[_0x4d7e13(0x3f6)][_0x4d7e13(0x57d)](_0x179409=>(Number(_0x179409)||0x1)[_0x4d7e13(0x485)](0x1,0xa)),_0x25b710=_0x46e7b4[_0x4d7e13(0x1e0)],_0x5e2f6e=_0x46e7b4[_0x4d7e13(0x368)]||0x1;for(const _0x7fe46 of _0x3980a8){if('dIbsX'===_0x4d7e13(0x2b7))[_0x4d7e13(0x585),_0x4d7e13(0x15d)][_0x4d7e13(0x4e2)](_0x25b710)&&(_0x4d7e13(0x42f)===_0x4d7e13(0x402)?(_0x218ee6[_0x4d7e13(0x556)](_0x21a513,_0x263a9b),_0x263a9f[_0x4d7e13(0x297)]=_0x4d7e13(0x3da),_0x2a1da3['WeatherEffects'][_0x4d7e13(0x3d1)](_0x1bfe2d)):$gameScreen['clearWeatherLayerData'](_0x7fe46,![],_0x5e2f6e)),[_0x4d7e13(0x444),'both'][_0x4d7e13(0x4e2)](_0x25b710)&&$gameScreen[_0x4d7e13(0x266)](_0x7fe46,!![],_0x5e2f6e);else{if(this['_cached_WeatherEffects_GrassyGust']&&_0x28af12[_0x4d7e13(0x1a3)][_0x4d7e13(0x2e9)]<=0x0){const _0x90103=this['_cached_WeatherEffects_GrassyGust'];return _0x90103[_0x255ca2[_0x4d7e13(0x441)](_0x156f4f[_0x4d7e13(0x398)]()*_0x90103[_0x4d7e13(0x2e9)])];}const _0x1bf33b=_0x217182[_0x4d7e13(0x1a3)]['pop'](),_0x3f5b6b=_0x53da73['adjustHexColor'](_0x1bf33b,0.5),_0x2bcc57=0xc,_0xf31dde=0x4,_0x1f430f=new _0x3c3b73(_0x2bcc57,_0xf31dde);_0x1f430f['fillRect'](0x0,0x0,_0x2bcc57,_0xf31dde/0x2,_0x1bf33b),_0x1f430f[_0x4d7e13(0x2b2)](0x0,_0xf31dde/0x2,_0x2bcc57,_0xf31dde/0x2,_0x3f5b6b),_0x1f430f[_0x4d7e13(0x182)]=![];if(_0x1cadc7[_0x4d7e13(0x24b)])_0x4244c0[_0x4d7e13(0x47b)]('grassyGust');return this['_cached_WeatherEffects_GrassyGust']=this['_cached_WeatherEffects_GrassyGust']||[],this[_0x4d7e13(0x40e)][_0x4d7e13(0x28e)](_0x1f430f),_0x1f430f;}}if(_0x46e7b4[_0x4d7e13(0x57e)]){const _0x44b259=$gameTemp[_0x4d7e13(0x2c9)]();_0x44b259&&_0x44b259['wait'](_0x5e2f6e||0x1);}}),PluginManager['registerCommand'](pluginData['name'],'BasicMemorizeWeather',_0xdd4f6=>{const _0x2b807b=_0x5da319;VisuMZ[_0x2b807b(0x556)](_0xdd4f6,_0xdd4f6);const _0x700263=_0xdd4f6['Layer'][_0x2b807b(0x57d)](_0x16f0da=>(Number(_0x16f0da)||0x1)['clamp'](0x1,0xa)),_0x17d6de=_0xdd4f6[_0x2b807b(0x1e0)],_0x149eec=_0xdd4f6[_0x2b807b(0x368)]||0x1;for(const _0x3422a8 of _0x700263){if(_0x2b807b(0x470)!==_0x2b807b(0x456)){if([_0x2b807b(0x585),_0x2b807b(0x15d)][_0x2b807b(0x4e2)](_0x17d6de)){if(_0x2b807b(0x18d)===_0x2b807b(0x18d))$gameScreen[_0x2b807b(0x22a)](_0x3422a8,![]);else{if(this[_0x2b807b(0x436)]&&_0x39bd41[_0x2b807b(0x49a)]['length']<=0x0){const _0x561947=this[_0x2b807b(0x436)];return _0x561947[_0x32be64[_0x2b807b(0x441)](_0x53a657[_0x2b807b(0x398)]()*_0x561947['length'])];}const _0x2c2ad0=_0x23e179[_0x2b807b(0x49a)][_0x2b807b(0x46b)](),_0x3360e3=new _0x2be940(0x3e8,0x3e8),_0x3ed4a6=_0x3360e3[_0x2b807b(0x16e)]/0x2;return _0x3360e3[_0x2b807b(0x2c4)](_0x3ed4a6,_0x3ed4a6,_0x3ed4a6,0x168,_0x2c2ad0,0x0,0x1,0x0),_0x3360e3[_0x2b807b(0x182)]=![],this[_0x2b807b(0x436)]=this[_0x2b807b(0x436)]||[],this[_0x2b807b(0x436)][_0x2b807b(0x28e)](_0x3360e3),_0x3360e3;}}[_0x2b807b(0x444),_0x2b807b(0x15d)][_0x2b807b(0x4e2)](_0x17d6de)&&$gameScreen['memorizeWeatherLayerData'](_0x3422a8,!![]);}else _0x1578e6[_0x2b807b(0x556)](_0x17e6cc,_0x3b8e35),_0x5c500a[_0x2b807b(0x297)]=_0x2b807b(0x41d),_0x342412[_0x2b807b(0x3a2)][_0x2b807b(0x3d1)](_0x2f6679);}}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x4e9),_0x587b1f=>{const _0xdacd61=_0x5da319;VisuMZ['ConvertParams'](_0x587b1f,_0x587b1f);const _0x5368bc=String(_0x587b1f[_0xdacd61(0x19b)]||'')['toLowerCase']()[_0xdacd61(0x2d2)]();if(_0x5368bc==='')return;let _0x593e6d=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']??0x1;while(_0x593e6d--){ImageManager[_0xdacd61(0x56b)](_0x5368bc);}}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x2f3),_0xb6185c=>{const _0x4648fe=_0x5da319;VisuMZ[_0x4648fe(0x556)](_0xb6185c,_0xb6185c);const _0x5712d9=_0xb6185c[_0x4648fe(0x3f6)][_0x4648fe(0x57d)](_0x5ae35d=>(Number(_0x5ae35d)||0x1)[_0x4648fe(0x485)](0x1,0xa)),_0x3bfd12=_0xb6185c[_0x4648fe(0x1e0)],_0x280aa1=_0xb6185c[_0x4648fe(0x368)]||0x1;for(const _0x27a045 of _0x5712d9){if('KvhRD'===_0x4648fe(0x184)){const _0x2330e7=this[_0x4648fe(0x25b)];return _0x2330e7[_0x558122[_0x4648fe(0x441)](_0x61a307['random']()*_0x2330e7['length'])];}else[_0x4648fe(0x585),_0x4648fe(0x15d)][_0x4648fe(0x4e2)](_0x3bfd12)&&$gameScreen[_0x4648fe(0x135)](_0x27a045,![],_0x280aa1),[_0x4648fe(0x444),_0x4648fe(0x15d)]['includes'](_0x3bfd12)&&$gameScreen[_0x4648fe(0x135)](_0x27a045,!![],_0x280aa1);}if(_0xb6185c['WaitForCompletion']){if(_0x4648fe(0x3cf)!=='wZNsJ'){const _0x215004=$gameTemp[_0x4648fe(0x2c9)]();_0x215004&&_0x215004['wait'](_0x280aa1||0x1);}else{const _0x495b46=_0x12b82f[_0x4648fe(0x118)](_0x159108);if(_0x495b46){const _0x2ff7d3=new _0xc26f75(_0x495b46['x'],_0x495b46['y']),_0x9462a=_0x495b46['worldTransform'][_0x4648fe(0x3e5)](_0x2ff7d3);this['ax']=_0x495b46['x']-_0x9462a['x']+this[_0x4648fe(0xfa)],this['ay']=_0x495b46['y']-_0x9462a['y']+this[_0x4648fe(0x1a1)];return;}}}}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Fire_Embers',_0x1d4ef4=>{const _0x36548f=_0x5da319;VisuMZ['ConvertParams'](_0x1d4ef4,_0x1d4ef4),_0x1d4ef4[_0x36548f(0x297)]=_0x36548f(0x3de),VisuMZ[_0x36548f(0x3a2)]['applyPluginCmdSettings'](_0x1d4ef4);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x519),_0x5a6a4c=>{const _0x447d13=_0x5da319;VisuMZ['ConvertParams'](_0x5a6a4c,_0x5a6a4c),_0x5a6a4c[_0x447d13(0x297)]=_0x447d13(0x268),VisuMZ[_0x447d13(0x3a2)]['applyPluginCmdSettings'](_0x5a6a4c);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x415),_0x43b37d=>{const _0x3de225=_0x5da319;VisuMZ[_0x3de225(0x556)](_0x43b37d,_0x43b37d),_0x43b37d[_0x3de225(0x297)]=_0x3de225(0xf8),VisuMZ['WeatherEffects'][_0x3de225(0x3d1)](_0x43b37d);}),PluginManager['registerCommand'](pluginData['name'],_0x5da319(0x432),_0x5f359e=>{const _0x425d84=_0x5da319;VisuMZ[_0x425d84(0x556)](_0x5f359e,_0x5f359e),_0x5f359e[_0x425d84(0x297)]='fireworks',VisuMZ[_0x425d84(0x3a2)][_0x425d84(0x3d1)](_0x5f359e);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x210),_0x2eda4c=>{const _0x16d727=_0x5da319;VisuMZ['ConvertParams'](_0x2eda4c,_0x2eda4c),_0x2eda4c[_0x16d727(0x297)]=_0x16d727(0x3e3),VisuMZ[_0x16d727(0x3a2)][_0x16d727(0x3d1)](_0x2eda4c);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x13a),_0x179cd7=>{const _0x139fbe=_0x5da319;VisuMZ['ConvertParams'](_0x179cd7,_0x179cd7),_0x179cd7['type']=_0x139fbe(0x572),VisuMZ[_0x139fbe(0x3a2)]['applyPluginCmdSettings'](_0x179cd7);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x4d9),_0x28b99a=>{const _0xe167dc=_0x5da319;VisuMZ[_0xe167dc(0x556)](_0x28b99a,_0x28b99a),_0x28b99a['type']=_0xe167dc(0x558),VisuMZ[_0xe167dc(0x3a2)]['applyPluginCmdSettings'](_0x28b99a);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x18b),_0x362e63=>{const _0x1e50d9=_0x5da319;VisuMZ[_0x1e50d9(0x556)](_0x362e63,_0x362e63),_0x362e63['type']=_0x1e50d9(0x525),VisuMZ[_0x1e50d9(0x3a2)][_0x1e50d9(0x3d1)](_0x362e63);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],'Fire_ShootingStar',_0x5c90b7=>{const _0x5b01e6=_0x5da319;VisuMZ[_0x5b01e6(0x556)](_0x5c90b7,_0x5c90b7),_0x5c90b7[_0x5b01e6(0x297)]=_0x5b01e6(0x252),VisuMZ[_0x5b01e6(0x3a2)][_0x5b01e6(0x3d1)](_0x5c90b7);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x466),_0x56acf0=>{const _0x4e61d1=_0x5da319;VisuMZ[_0x4e61d1(0x556)](_0x56acf0,_0x56acf0),_0x56acf0['type']=_0x4e61d1(0x2c3),VisuMZ['WeatherEffects'][_0x4e61d1(0x3d1)](_0x56acf0);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x101),_0x28b576=>{const _0x3aa1d3=_0x5da319;VisuMZ[_0x3aa1d3(0x556)](_0x28b576,_0x28b576),_0x28b576[_0x3aa1d3(0x297)]=_0x3aa1d3(0x2c1),VisuMZ[_0x3aa1d3(0x3a2)][_0x3aa1d3(0x3d1)](_0x28b576);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x1e6),_0x548e5c=>{const _0x5d46df=_0x5da319;VisuMZ['ConvertParams'](_0x548e5c,_0x548e5c),_0x548e5c['type']=_0x5d46df(0x36a),VisuMZ[_0x5d46df(0x3a2)][_0x5d46df(0x3d1)](_0x548e5c);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Ice_Blizzard',_0x53adaf=>{const _0x4a24ca=_0x5da319;VisuMZ[_0x4a24ca(0x556)](_0x53adaf,_0x53adaf),_0x53adaf[_0x4a24ca(0x297)]=_0x4a24ca(0x3fb),VisuMZ[_0x4a24ca(0x3a2)]['applyPluginCmdSettings'](_0x53adaf);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x30e),_0x14995d=>{const _0x5e94c6=_0x5da319;VisuMZ[_0x5e94c6(0x556)](_0x14995d,_0x14995d),_0x14995d[_0x5e94c6(0x297)]=_0x5e94c6(0x4b9),VisuMZ[_0x5e94c6(0x3a2)]['applyPluginCmdSettings'](_0x14995d);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x514),_0x173a94=>{const _0x1d5833=_0x5da319;VisuMZ[_0x1d5833(0x556)](_0x173a94,_0x173a94),_0x173a94[_0x1d5833(0x297)]=_0x1d5833(0x29a),VisuMZ[_0x1d5833(0x3a2)][_0x1d5833(0x3d1)](_0x173a94);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x240),_0x58e512=>{const _0x3506b8=_0x5da319;VisuMZ[_0x3506b8(0x556)](_0x58e512,_0x58e512),_0x58e512[_0x3506b8(0x297)]='icefog',VisuMZ[_0x3506b8(0x3a2)]['applyPluginCmdSettings'](_0x58e512);}),PluginManager['registerCommand'](pluginData['name'],_0x5da319(0x406),_0x522a1a=>{const _0xc94966=_0x5da319;VisuMZ[_0xc94966(0x556)](_0x522a1a,_0x522a1a),_0x522a1a[_0xc94966(0x297)]=_0xc94966(0x390),VisuMZ['WeatherEffects'][_0xc94966(0x3d1)](_0x522a1a);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x52b),_0x40a94a=>{const _0x3a6197=_0x5da319;VisuMZ[_0x3a6197(0x556)](_0x40a94a,_0x40a94a),_0x40a94a[_0x3a6197(0x297)]=_0x3a6197(0x448),VisuMZ[_0x3a6197(0x3a2)][_0x3a6197(0x3d1)](_0x40a94a);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x328),_0x3de7e8=>{const _0x262635=_0x5da319;VisuMZ[_0x262635(0x556)](_0x3de7e8,_0x3de7e8),_0x3de7e8[_0x262635(0x297)]='snowclouds',VisuMZ[_0x262635(0x3a2)][_0x262635(0x3d1)](_0x3de7e8);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x523),_0x14a18f=>{const _0x341515=_0x5da319;VisuMZ['ConvertParams'](_0x14a18f,_0x14a18f),_0x14a18f['type']=_0x341515(0x549),VisuMZ['WeatherEffects'][_0x341515(0x3d1)](_0x14a18f);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x3b6),_0x361f9b=>{const _0x2e7f97=_0x5da319;VisuMZ[_0x2e7f97(0x556)](_0x361f9b,_0x361f9b),_0x361f9b[_0x2e7f97(0x297)]=_0x2e7f97(0x292),VisuMZ[_0x2e7f97(0x3a2)]['applyPluginCmdSettings'](_0x361f9b);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x18e),_0x16143d=>{const _0xdf6f3b=_0x5da319;VisuMZ[_0xdf6f3b(0x556)](_0x16143d,_0x16143d),_0x16143d['type']=_0xdf6f3b(0x25c),VisuMZ[_0xdf6f3b(0x3a2)]['applyPluginCmdSettings'](_0x16143d);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x424),_0x555887=>{const _0x1445d2=_0x5da319;VisuMZ[_0x1445d2(0x556)](_0x555887,_0x555887),_0x555887[_0x1445d2(0x297)]=_0x1445d2(0x12b),VisuMZ[_0x1445d2(0x3a2)][_0x1445d2(0x3d1)](_0x555887);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x4df),_0x7dd10f=>{const _0x25e181=_0x5da319;VisuMZ[_0x25e181(0x556)](_0x7dd10f,_0x7dd10f),_0x7dd10f[_0x25e181(0x297)]=_0x25e181(0x36f),VisuMZ[_0x25e181(0x3a2)][_0x25e181(0x3d1)](_0x7dd10f);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x27d),_0x73d1c=>{const _0x229d99=_0x5da319;VisuMZ[_0x229d99(0x556)](_0x73d1c,_0x73d1c),_0x73d1c[_0x229d99(0x297)]=_0x229d99(0x557),VisuMZ[_0x229d99(0x3a2)][_0x229d99(0x3d1)](_0x73d1c);}),PluginManager['registerCommand'](pluginData['name'],_0x5da319(0x3b1),_0x2ad091=>{const _0x45aa89=_0x5da319;VisuMZ[_0x45aa89(0x556)](_0x2ad091,_0x2ad091),_0x2ad091[_0x45aa89(0x297)]=_0x45aa89(0x27a),VisuMZ['WeatherEffects'][_0x45aa89(0x3d1)](_0x2ad091);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x2c0),_0x276af2=>{const _0x28a716=_0x5da319;VisuMZ['ConvertParams'](_0x276af2,_0x276af2),_0x276af2[_0x28a716(0x297)]=_0x28a716(0x35d),VisuMZ['WeatherEffects'][_0x28a716(0x3d1)](_0x276af2);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x287),_0x9422b4=>{const _0x4e0e54=_0x5da319;VisuMZ[_0x4e0e54(0x556)](_0x9422b4,_0x9422b4),_0x9422b4[_0x4e0e54(0x297)]='thunderclouds',VisuMZ['WeatherEffects'][_0x4e0e54(0x3d1)](_0x9422b4);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x343),_0x3e19cc=>{const _0x518a5b=_0x5da319;VisuMZ[_0x518a5b(0x556)](_0x3e19cc,_0x3e19cc),_0x3e19cc[_0x518a5b(0x297)]=_0x518a5b(0x106),VisuMZ[_0x518a5b(0x3a2)][_0x518a5b(0x3d1)](_0x3e19cc);}),PluginManager[_0x5da319(0x171)](pluginData['name'],'Thunder_UltravioletBeams',_0xed5d9c=>{const _0x86da27=_0x5da319;VisuMZ[_0x86da27(0x556)](_0xed5d9c,_0xed5d9c),_0xed5d9c[_0x86da27(0x297)]=_0x86da27(0x55a),VisuMZ[_0x86da27(0x3a2)][_0x86da27(0x3d1)](_0xed5d9c);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x114),_0x302918=>{const _0xce586c=_0x5da319;VisuMZ[_0xce586c(0x556)](_0x302918,_0x302918),_0x302918[_0xce586c(0x297)]=_0xce586c(0x20d),VisuMZ[_0xce586c(0x3a2)][_0xce586c(0x3d1)](_0x302918);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x2c8),_0x131b9f=>{const _0x3436df=_0x5da319;VisuMZ['ConvertParams'](_0x131b9f,_0x131b9f),_0x131b9f[_0x3436df(0x297)]='cloudburst',VisuMZ[_0x3436df(0x3a2)][_0x3436df(0x3d1)](_0x131b9f);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x212),_0x5c1ae0=>{const _0x37ce62=_0x5da319;VisuMZ[_0x37ce62(0x556)](_0x5c1ae0,_0x5c1ae0),_0x5c1ae0['type']=_0x37ce62(0x2e6),VisuMZ['WeatherEffects'][_0x37ce62(0x3d1)](_0x5c1ae0);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Water_Mist',_0x569780=>{const _0x341746=_0x5da319;VisuMZ[_0x341746(0x556)](_0x569780,_0x569780),_0x569780['type']='mist',VisuMZ[_0x341746(0x3a2)]['applyPluginCmdSettings'](_0x569780);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x423),_0x19016f=>{const _0x5d0f8d=_0x5da319;VisuMZ[_0x5d0f8d(0x556)](_0x19016f,_0x19016f),_0x19016f[_0x5d0f8d(0x297)]=_0x5d0f8d(0x4f6),VisuMZ['WeatherEffects'][_0x5d0f8d(0x3d1)](_0x19016f);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x30f),_0x176da2=>{const _0x462614=_0x5da319;VisuMZ[_0x462614(0x556)](_0x176da2,_0x176da2),_0x176da2[_0x462614(0x297)]=_0x462614(0x509),VisuMZ[_0x462614(0x3a2)][_0x462614(0x3d1)](_0x176da2);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x16a),_0x2ff246=>{const _0xedf6c3=_0x5da319;VisuMZ['ConvertParams'](_0x2ff246,_0x2ff246),_0x2ff246[_0xedf6c3(0x297)]=_0xedf6c3(0x543),VisuMZ[_0xedf6c3(0x3a2)]['applyPluginCmdSettings'](_0x2ff246);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x2ab),_0x273bf2=>{const _0xaa0f76=_0x5da319;VisuMZ[_0xaa0f76(0x556)](_0x273bf2,_0x273bf2),_0x273bf2[_0xaa0f76(0x297)]=_0xaa0f76(0x194),VisuMZ[_0xaa0f76(0x3a2)]['applyPluginCmdSettings'](_0x273bf2);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x47f),_0x2783d1=>{const _0x3b267c=_0x5da319;VisuMZ[_0x3b267c(0x556)](_0x2783d1,_0x2783d1),_0x2783d1[_0x3b267c(0x297)]=_0x3b267c(0x1f2),VisuMZ['WeatherEffects'][_0x3b267c(0x3d1)](_0x2783d1);}),PluginManager['registerCommand'](pluginData['name'],_0x5da319(0x4af),_0x16054e=>{const _0x5df200=_0x5da319;VisuMZ[_0x5df200(0x556)](_0x16054e,_0x16054e),_0x16054e[_0x5df200(0x297)]='storm',VisuMZ['WeatherEffects'][_0x5df200(0x3d1)](_0x16054e);}),PluginManager[_0x5da319(0x171)](pluginData['name'],'Earth_AcidRain',_0x54e6e2=>{const _0x4bcf09=_0x5da319;VisuMZ[_0x4bcf09(0x556)](_0x54e6e2,_0x54e6e2),_0x54e6e2['type']='acidrain',VisuMZ[_0x4bcf09(0x3a2)]['applyPluginCmdSettings'](_0x54e6e2);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x4d7),_0x5f590d=>{const _0x490e25=_0x5da319;VisuMZ[_0x490e25(0x556)](_0x5f590d,_0x5f590d),_0x5f590d[_0x490e25(0x297)]=_0x490e25(0x15f),VisuMZ['WeatherEffects'][_0x490e25(0x3d1)](_0x5f590d);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x372),_0x2a304f=>{const _0x2ded42=_0x5da319;VisuMZ['ConvertParams'](_0x2a304f,_0x2a304f),_0x2a304f[_0x2ded42(0x297)]='dustclouds',VisuMZ[_0x2ded42(0x3a2)]['applyPluginCmdSettings'](_0x2a304f);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x4f5),_0x3c282e=>{const _0x166fb7=_0x5da319;VisuMZ[_0x166fb7(0x556)](_0x3c282e,_0x3c282e),_0x3c282e[_0x166fb7(0x297)]=_0x166fb7(0x117),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x3c282e);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x2f8),_0x56785a=>{const _0x1356e9=_0x5da319;VisuMZ[_0x1356e9(0x556)](_0x56785a,_0x56785a),_0x56785a[_0x1356e9(0x297)]=_0x1356e9(0x149),VisuMZ[_0x1356e9(0x3a2)][_0x1356e9(0x3d1)](_0x56785a);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],'Earth_PollutionClouds',_0x4c3543=>{const _0x169eeb=_0x5da319;VisuMZ[_0x169eeb(0x556)](_0x4c3543,_0x4c3543),_0x4c3543[_0x169eeb(0x297)]=_0x169eeb(0x175),VisuMZ[_0x169eeb(0x3a2)][_0x169eeb(0x3d1)](_0x4c3543);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x4d6),_0x9e58ca=>{const _0x1b56e7=_0x5da319;VisuMZ['ConvertParams'](_0x9e58ca,_0x9e58ca),_0x9e58ca[_0x1b56e7(0x297)]='radioactivebeam',VisuMZ[_0x1b56e7(0x3a2)][_0x1b56e7(0x3d1)](_0x9e58ca);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Earth_SandClouds',_0x427b70=>{const _0x403cb3=_0x5da319;VisuMZ[_0x403cb3(0x556)](_0x427b70,_0x427b70),_0x427b70['type']=_0x403cb3(0x531),VisuMZ[_0x403cb3(0x3a2)][_0x403cb3(0x3d1)](_0x427b70);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],'Earth_Sandstorm',_0x2509e5=>{const _0x6e7511=_0x5da319;VisuMZ[_0x6e7511(0x556)](_0x2509e5,_0x2509e5),_0x2509e5['type']=_0x6e7511(0x143),VisuMZ[_0x6e7511(0x3a2)][_0x6e7511(0x3d1)](_0x2509e5);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x190),_0xfb682a=>{const _0x148eb5=_0x5da319;VisuMZ['ConvertParams'](_0xfb682a,_0xfb682a),_0xfb682a[_0x148eb5(0x297)]='toxicgas',VisuMZ[_0x148eb5(0x3a2)][_0x148eb5(0x3d1)](_0xfb682a);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x115),_0x41a21e=>{const _0x282ef9=_0x5da319;VisuMZ[_0x282ef9(0x556)](_0x41a21e,_0x41a21e),_0x41a21e['type']=_0x282ef9(0x337),VisuMZ[_0x282ef9(0x3a2)][_0x282ef9(0x3d1)](_0x41a21e);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x235),_0x3cc87b=>{const _0x30d4cf=_0x5da319;VisuMZ[_0x30d4cf(0x556)](_0x3cc87b,_0x3cc87b),_0x3cc87b[_0x30d4cf(0x297)]=_0x30d4cf(0x246),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x3cc87b);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x1b1),_0x4027b6=>{const _0x9ca7a=_0x5da319;VisuMZ[_0x9ca7a(0x556)](_0x4027b6,_0x4027b6),_0x4027b6[_0x9ca7a(0x297)]=_0x9ca7a(0x2d4),VisuMZ[_0x9ca7a(0x3a2)][_0x9ca7a(0x3d1)](_0x4027b6);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x1aa),_0x3eddf6=>{const _0x269a0b=_0x5da319;VisuMZ[_0x269a0b(0x556)](_0x3eddf6,_0x3eddf6),_0x3eddf6[_0x269a0b(0x297)]='dandelionseeds',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x3eddf6);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x4dc),_0x4dcc8f=>{const _0x3819ca=_0x5da319;VisuMZ['ConvertParams'](_0x4dcc8f,_0x4dcc8f),_0x4dcc8f[_0x3819ca(0x297)]=_0x3819ca(0x496),VisuMZ[_0x3819ca(0x3a2)][_0x3819ca(0x3d1)](_0x4dcc8f);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x57b),_0x288a55=>{const _0x35e72f=_0x5da319;VisuMZ[_0x35e72f(0x556)](_0x288a55,_0x288a55),_0x288a55[_0x35e72f(0x297)]='greenleaves',VisuMZ['WeatherEffects'][_0x35e72f(0x3d1)](_0x288a55);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x4cd),_0x526c72=>{const _0x1aa3ca=_0x5da319;VisuMZ[_0x1aa3ca(0x556)](_0x526c72,_0x526c72),_0x526c72[_0x1aa3ca(0x297)]=_0x1aa3ca(0x567),VisuMZ[_0x1aa3ca(0x3a2)][_0x1aa3ca(0x3d1)](_0x526c72);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x1e9),_0x4e82c1=>{const _0x80330c=_0x5da319;VisuMZ[_0x80330c(0x556)](_0x4e82c1,_0x4e82c1),_0x4e82c1[_0x80330c(0x297)]=_0x80330c(0x15c),VisuMZ[_0x80330c(0x3a2)][_0x80330c(0x3d1)](_0x4e82c1);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Wind_WhiteClouds',_0x354184=>{const _0x2e617f=_0x5da319;VisuMZ[_0x2e617f(0x556)](_0x354184,_0x354184),_0x354184[_0x2e617f(0x297)]=_0x2e617f(0x494),VisuMZ[_0x2e617f(0x3a2)][_0x2e617f(0x3d1)](_0x354184);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x1ec),_0x33bc7f=>{const _0x501825=_0x5da319;VisuMZ[_0x501825(0x556)](_0x33bc7f,_0x33bc7f),_0x33bc7f[_0x501825(0x297)]=_0x501825(0x45f),VisuMZ[_0x501825(0x3a2)][_0x501825(0x3d1)](_0x33bc7f);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x269),_0xa3e7bf=>{const _0x26d043=_0x5da319;VisuMZ[_0x26d043(0x556)](_0xa3e7bf,_0xa3e7bf),_0xa3e7bf[_0x26d043(0x297)]=_0x26d043(0x580),VisuMZ['WeatherEffects'][_0x26d043(0x3d1)](_0xa3e7bf);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x412),_0xba2260=>{const _0x25a8f5=_0x5da319;VisuMZ[_0x25a8f5(0x556)](_0xba2260,_0xba2260),_0xba2260[_0x25a8f5(0x297)]=_0x25a8f5(0x325),VisuMZ['WeatherEffects'][_0x25a8f5(0x3d1)](_0xba2260);}),PluginManager[_0x5da319(0x171)](pluginData['name'],'Light_LightBurst',_0x5a59c0=>{const _0x707b7b=_0x5da319;VisuMZ[_0x707b7b(0x556)](_0x5a59c0,_0x5a59c0),_0x5a59c0['type']=_0x707b7b(0x39e),VisuMZ[_0x707b7b(0x3a2)][_0x707b7b(0x3d1)](_0x5a59c0);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],'Light_LightOrbs',_0x36eac2=>{const _0x22dccd=_0x5da319;VisuMZ['ConvertParams'](_0x36eac2,_0x36eac2),_0x36eac2[_0x22dccd(0x297)]=_0x22dccd(0x2d5),VisuMZ[_0x22dccd(0x3a2)][_0x22dccd(0x3d1)](_0x36eac2);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x533),_0x55fa4=>{const _0x5a9a0f=_0x5da319;VisuMZ['ConvertParams'](_0x55fa4,_0x55fa4),_0x55fa4['type']=_0x5a9a0f(0x41c),VisuMZ[_0x5a9a0f(0x3a2)][_0x5a9a0f(0x3d1)](_0x55fa4);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Light_PrismBurst',_0x38c645=>{const _0x3feb56=_0x5da319;VisuMZ['ConvertParams'](_0x38c645,_0x38c645),_0x38c645[_0x3feb56(0x297)]=_0x3feb56(0x440),VisuMZ['WeatherEffects'][_0x3feb56(0x3d1)](_0x38c645);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x16f),_0x53927f=>{const _0xcb0f69=_0x5da319;VisuMZ[_0xcb0f69(0x556)](_0x53927f,_0x53927f),_0x53927f['type']=_0xcb0f69(0x197),VisuMZ[_0xcb0f69(0x3a2)][_0xcb0f69(0x3d1)](_0x53927f);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x244),_0x5e06fd=>{const _0x38ddc7=_0x5da319;VisuMZ['ConvertParams'](_0x5e06fd,_0x5e06fd),_0x5e06fd[_0x38ddc7(0x297)]=_0x38ddc7(0x41d),VisuMZ[_0x38ddc7(0x3a2)][_0x38ddc7(0x3d1)](_0x5e06fd);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Light_RainbowOrbs',_0x2e5599=>{const _0x9c13d9=_0x5da319;VisuMZ[_0x9c13d9(0x556)](_0x2e5599,_0x2e5599),_0x2e5599[_0x9c13d9(0x297)]=_0x9c13d9(0x3fe),VisuMZ[_0x9c13d9(0x3a2)][_0x9c13d9(0x3d1)](_0x2e5599);}),PluginManager[_0x5da319(0x171)](pluginData['name'],'Light_Stars',_0x175a69=>{const _0x2ab87c=_0x5da319;VisuMZ['ConvertParams'](_0x175a69,_0x175a69),_0x175a69['type']=_0x2ab87c(0x399),VisuMZ[_0x2ab87c(0x3a2)][_0x2ab87c(0x3d1)](_0x175a69);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x132),_0x5dae34=>{const _0x6b2f38=_0x5da319;VisuMZ['ConvertParams'](_0x5dae34,_0x5dae34),_0x5dae34[_0x6b2f38(0x297)]=_0x6b2f38(0x1f1),VisuMZ[_0x6b2f38(0x3a2)][_0x6b2f38(0x3d1)](_0x5dae34);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x284),_0x59ec1c=>{const _0x1ea0f8=_0x5da319;VisuMZ[_0x1ea0f8(0x556)](_0x59ec1c,_0x59ec1c),_0x59ec1c['type']=_0x1ea0f8(0x158),VisuMZ[_0x1ea0f8(0x3a2)][_0x1ea0f8(0x3d1)](_0x59ec1c);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Dark_BloodRain',_0x26a6ac=>{const _0x3b1030=_0x5da319;VisuMZ[_0x3b1030(0x556)](_0x26a6ac,_0x26a6ac),_0x26a6ac[_0x3b1030(0x297)]=_0x3b1030(0x19c),VisuMZ[_0x3b1030(0x3a2)][_0x3b1030(0x3d1)](_0x26a6ac);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x3f5),_0x59c0af=>{const _0x4a24e0=_0x5da319;VisuMZ[_0x4a24e0(0x556)](_0x59c0af,_0x59c0af),_0x59c0af['type']=_0x4a24e0(0x1be),VisuMZ[_0x4a24e0(0x3a2)][_0x4a24e0(0x3d1)](_0x59c0af);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x389),_0x3ad85f=>{const _0x1d0041=_0x5da319;VisuMZ['ConvertParams'](_0x3ad85f,_0x3ad85f),_0x3ad85f[_0x1d0041(0x297)]=_0x1d0041(0x1a5),VisuMZ[_0x1d0041(0x3a2)][_0x1d0041(0x3d1)](_0x3ad85f);}),PluginManager['registerCommand'](pluginData['name'],_0x5da319(0x152),_0xf4ed10=>{const _0x3cbc16=_0x5da319;VisuMZ['ConvertParams'](_0xf4ed10,_0xf4ed10),_0xf4ed10[_0x3cbc16(0x297)]=_0x3cbc16(0x341),VisuMZ[_0x3cbc16(0x3a2)][_0x3cbc16(0x3d1)](_0xf4ed10);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x3bf),_0x5d1b2c=>{const _0x5c4aee=_0x5da319;VisuMZ[_0x5c4aee(0x556)](_0x5d1b2c,_0x5d1b2c),_0x5d1b2c[_0x5c4aee(0x297)]=_0x5c4aee(0x2ae),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x5d1b2c);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x41b),_0x16d75a=>{const _0x1d4878=_0x5da319;VisuMZ[_0x1d4878(0x556)](_0x16d75a,_0x16d75a),_0x16d75a[_0x1d4878(0x297)]=_0x1d4878(0x2e8),VisuMZ[_0x1d4878(0x3a2)][_0x1d4878(0x3d1)](_0x16d75a);}),PluginManager[_0x5da319(0x171)](pluginData['name'],'Dark_SmokeClouds',_0xbe9493=>{const _0x1de822=_0x5da319;VisuMZ[_0x1de822(0x556)](_0xbe9493,_0xbe9493),_0xbe9493[_0x1de822(0x297)]=_0x1de822(0x4aa),VisuMZ[_0x1de822(0x3a2)][_0x1de822(0x3d1)](_0xbe9493);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Dark_Sootfall',_0x141379=>{const _0x2e2746=_0x5da319;VisuMZ[_0x2e2746(0x556)](_0x141379,_0x141379),_0x141379[_0x2e2746(0x297)]=_0x2e2746(0x232),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x141379);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x1da),_0x3301ee=>{const _0x3cca26=_0x5da319;VisuMZ[_0x3cca26(0x556)](_0x3301ee,_0x3301ee),_0x3301ee[_0x3cca26(0x297)]=_0x3cca26(0x3f9),VisuMZ[_0x3cca26(0x3a2)][_0x3cca26(0x3d1)](_0x3301ee);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x20f),_0x41f057=>{const _0x18169c=_0x5da319;VisuMZ[_0x18169c(0x556)](_0x41f057,_0x41f057),_0x41f057[_0x18169c(0x297)]=_0x18169c(0x12f),VisuMZ[_0x18169c(0x3a2)][_0x18169c(0x3d1)](_0x41f057);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x31b),_0x4d840c=>{const _0x183ef0=_0x5da319;VisuMZ['ConvertParams'](_0x4d840c,_0x4d840c),_0x4d840c[_0x183ef0(0x297)]=_0x183ef0(0x43a),VisuMZ['WeatherEffects'][_0x183ef0(0x3d1)](_0x4d840c);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x27b),_0x389506=>{const _0x36088d=_0x5da319;VisuMZ[_0x36088d(0x556)](_0x389506,_0x389506),_0x389506['type']=_0x36088d(0x50d),VisuMZ[_0x36088d(0x3a2)][_0x36088d(0x3d1)](_0x389506);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Slow_Icons_Down',_0x33c3a0=>{const _0x110a46=_0x5da319;VisuMZ[_0x110a46(0x556)](_0x33c3a0,_0x33c3a0),_0x33c3a0[_0x110a46(0x297)]=_0x110a46(0x3f9),VisuMZ[_0x110a46(0x3a2)][_0x110a46(0x3d1)](_0x33c3a0);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x498),_0x31d270=>{const _0x216a6c=_0x5da319;VisuMZ[_0x216a6c(0x556)](_0x31d270,_0x31d270),_0x31d270[_0x216a6c(0x297)]=_0x216a6c(0x48d),VisuMZ['WeatherEffects'][_0x216a6c(0x3d1)](_0x31d270);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x41a),_0x97a940=>{const _0x4059fb=_0x5da319;VisuMZ[_0x4059fb(0x556)](_0x97a940,_0x97a940),_0x97a940[_0x4059fb(0x297)]='slow_icons_4',VisuMZ['WeatherEffects'][_0x4059fb(0x3d1)](_0x97a940);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x1af),_0x860735=>{const _0x4716df=_0x5da319;VisuMZ[_0x4716df(0x556)](_0x860735,_0x860735),_0x860735[_0x4716df(0x297)]=_0x4716df(0x2ac),VisuMZ[_0x4716df(0x3a2)][_0x4716df(0x3d1)](_0x860735);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x3af),_0x330f3f=>{const _0x32a69b=_0x5da319;VisuMZ[_0x32a69b(0x556)](_0x330f3f,_0x330f3f),_0x330f3f[_0x32a69b(0x297)]=_0x32a69b(0x367),VisuMZ[_0x32a69b(0x3a2)][_0x32a69b(0x3d1)](_0x330f3f);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x1ba),_0x3a488c=>{const _0x3986e6=_0x5da319;VisuMZ[_0x3986e6(0x556)](_0x3a488c,_0x3a488c),_0x3a488c[_0x3986e6(0x297)]=_0x3986e6(0xed),VisuMZ[_0x3986e6(0x3a2)][_0x3986e6(0x3d1)](_0x3a488c);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Medium_Icons_UpperRight',_0x3e1ecd=>{const _0x288886=_0x5da319;VisuMZ[_0x288886(0x556)](_0x3e1ecd,_0x3e1ecd),_0x3e1ecd[_0x288886(0x297)]=_0x288886(0x224),VisuMZ[_0x288886(0x3a2)]['applyPluginCmdSettings'](_0x3e1ecd);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x54d),_0x2e553e=>{const _0x8328fa=_0x5da319;VisuMZ[_0x8328fa(0x556)](_0x2e553e,_0x2e553e),_0x2e553e['type']=_0x8328fa(0x486),VisuMZ[_0x8328fa(0x3a2)][_0x8328fa(0x3d1)](_0x2e553e);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x214),_0x7b5761=>{const _0x452c3b=_0x5da319;VisuMZ['ConvertParams'](_0x7b5761,_0x7b5761),_0x7b5761['type']=_0x452c3b(0x403),VisuMZ['WeatherEffects'][_0x452c3b(0x3d1)](_0x7b5761);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x3e4),_0x446300=>{const _0x42b00f=_0x5da319;VisuMZ['ConvertParams'](_0x446300,_0x446300),_0x446300[_0x42b00f(0x297)]=_0x42b00f(0xed),VisuMZ[_0x42b00f(0x3a2)][_0x42b00f(0x3d1)](_0x446300);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Medium_Icons_LowerLeft',_0x4de47a=>{const _0x549b3d=_0x5da319;VisuMZ[_0x549b3d(0x556)](_0x4de47a,_0x4de47a),_0x4de47a[_0x549b3d(0x297)]=_0x549b3d(0x4fa),VisuMZ[_0x549b3d(0x3a2)][_0x549b3d(0x3d1)](_0x4de47a);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Medium_Icons_Left',_0x74f7e9=>{const _0x4584a4=_0x5da319;VisuMZ[_0x4584a4(0x556)](_0x74f7e9,_0x74f7e9),_0x74f7e9[_0x4584a4(0x297)]=_0x4584a4(0x11e),VisuMZ[_0x4584a4(0x3a2)][_0x4584a4(0x3d1)](_0x74f7e9);}),PluginManager[_0x5da319(0x171)](pluginData['name'],'Medium_Icons_UpperLeft',_0x44445c=>{const _0x230da6=_0x5da319;VisuMZ['ConvertParams'](_0x44445c,_0x44445c),_0x44445c['type']='medium_icons_7',VisuMZ[_0x230da6(0x3a2)][_0x230da6(0x3d1)](_0x44445c);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Medium_Icons_Mid',_0x35bff8=>{const _0x2b61c6=_0x5da319;VisuMZ['ConvertParams'](_0x35bff8,_0x35bff8),_0x35bff8[_0x2b61c6(0x297)]=_0x2b61c6(0x2b8),VisuMZ[_0x2b61c6(0x3a2)][_0x2b61c6(0x3d1)](_0x35bff8);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x43b),_0x2e25fb=>{const _0x14d9fb=_0x5da319;VisuMZ[_0x14d9fb(0x556)](_0x2e25fb,_0x2e25fb),_0x2e25fb[_0x14d9fb(0x297)]='fast_icons_2',VisuMZ[_0x14d9fb(0x3a2)][_0x14d9fb(0x3d1)](_0x2e25fb);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x364),_0x42d591=>{const _0x526a25=_0x5da319;VisuMZ['ConvertParams'](_0x42d591,_0x42d591),_0x42d591[_0x526a25(0x297)]='fast_icons_9',VisuMZ[_0x526a25(0x3a2)][_0x526a25(0x3d1)](_0x42d591);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x22d),_0x5269d8=>{const _0x1dd577=_0x5da319;VisuMZ[_0x1dd577(0x556)](_0x5269d8,_0x5269d8),_0x5269d8[_0x1dd577(0x297)]=_0x1dd577(0x346),VisuMZ[_0x1dd577(0x3a2)][_0x1dd577(0x3d1)](_0x5269d8);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],'Fast_Icons_LowerRight',_0x191891=>{const _0x592bc1=_0x5da319;VisuMZ[_0x592bc1(0x556)](_0x191891,_0x191891),_0x191891[_0x592bc1(0x297)]='fast_icons_3',VisuMZ[_0x592bc1(0x3a2)][_0x592bc1(0x3d1)](_0x191891);}),PluginManager[_0x5da319(0x171)](pluginData[_0x5da319(0x112)],_0x5da319(0x14d),_0x4805e3=>{const _0x53926a=_0x5da319;VisuMZ[_0x53926a(0x556)](_0x4805e3,_0x4805e3),_0x4805e3[_0x53926a(0x297)]=_0x53926a(0x518),VisuMZ[_0x53926a(0x3a2)]['applyPluginCmdSettings'](_0x4805e3);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x3fa),_0x283c3e=>{const _0x1b4f4e=_0x5da319;VisuMZ['ConvertParams'](_0x283c3e,_0x283c3e),_0x283c3e[_0x1b4f4e(0x297)]=_0x1b4f4e(0x479),VisuMZ[_0x1b4f4e(0x3a2)]['applyPluginCmdSettings'](_0x283c3e);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x142),_0x56268c=>{const _0x127870=_0x5da319;VisuMZ[_0x127870(0x556)](_0x56268c,_0x56268c),_0x56268c[_0x127870(0x297)]=_0x127870(0x294),VisuMZ[_0x127870(0x3a2)][_0x127870(0x3d1)](_0x56268c);}),PluginManager[_0x5da319(0x171)](pluginData['name'],_0x5da319(0x581),_0x30f63a=>{const _0x56fcf2=_0x5da319;VisuMZ[_0x56fcf2(0x556)](_0x30f63a,_0x30f63a),_0x30f63a['type']=_0x56fcf2(0x352),VisuMZ[_0x56fcf2(0x3a2)][_0x56fcf2(0x3d1)](_0x30f63a);}),PluginManager['registerCommand'](pluginData[_0x5da319(0x112)],_0x5da319(0x4a8),_0x2f378f=>{const _0xefcce1=_0x5da319;VisuMZ['ConvertParams'](_0x2f378f,_0x2f378f),_0x2f378f[_0xefcce1(0x297)]=_0xefcce1(0x421),VisuMZ[_0xefcce1(0x3a2)][_0xefcce1(0x3d1)](_0x2f378f);}),VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x4c2)]={'NoWeather':/<NO WEATHER>/gi},Weather[_0x5da319(0x26c)]=0xa,VisuMZ['WeatherEffects'][_0x5da319(0x3e2)]=Weather[_0x5da319(0x2c2)][_0x5da319(0x329)],Weather[_0x5da319(0x2c2)][_0x5da319(0x329)]=function(){const _0x32a086=_0x5da319;this[_0x32a086(0x3c5)](),VisuMZ[_0x32a086(0x3a2)]['Weather_update'][_0x32a086(0x481)](this);},Weather[_0x5da319(0x2c2)][_0x5da319(0x50c)]=function(){const _0xc5615e=_0x5da319;this['_rainBitmap']=new Bitmap(0x1,0x1),this[_0xc5615e(0x461)]=new Bitmap(0x1,0x1),this[_0xc5615e(0x313)]=new Bitmap(0x1,0x1);},Weather[_0x5da319(0x2c2)][_0x5da319(0x3a0)]=function(){const _0x52805c=_0x5da319;if(!this['_dimmerSprite'])return;this[_0x52805c(0x227)](),this[_0x52805c(0x573)]();},Weather[_0x5da319(0x2c2)][_0x5da319(0x17e)]=function(){const _0x5b534e=_0x5da319,_0x3b8725=this[_0x5b534e(0x46d)]();while(this['_sprites']['length']<_0x3b8725)this['_addSprite']();while(this['_sprites'][_0x5b534e(0x2e9)]>_0x3b8725)this['_removeSprite']();for(const _0x2274f7 of this['_sprites']){if('qBhAb'===_0x5b534e(0x23b))_0x2274f7[_0x5b534e(0x329)]();else{const _0x2f012f=this['_cached_WeatherEffects_MoonBeam'];return _0x2f012f[_0x502ae3[_0x5b534e(0x441)](_0x4ee330['random']()*_0x2f012f[_0x5b534e(0x2e9)])];}}},Weather[_0x5da319(0x2c2)]['_addSprite']=function(){const _0x4711bd=_0x5da319,_0xba4841=new Sprite_WeatherParticle(this,this[_0x4711bd(0x2bc)][_0x4711bd(0x2e9)]);this[_0x4711bd(0x2bc)][_0x4711bd(0x28e)](_0xba4841),this[_0x4711bd(0x4ca)](_0xba4841);},Weather[_0x5da319(0x2c2)][_0x5da319(0x44d)]=function(){},Weather[_0x5da319(0x2c2)]['setLayerData']=function(_0x1593a3,_0x464b91){const _0x5af3b7=_0x5da319;this['_layerID']=_0x1593a3,this[_0x5af3b7(0x410)]=_0x464b91||![];},Weather['prototype']['data']=function(){const _0x31e226=_0x5da319;return $gameScreen['getWeatherLayerData'](this[_0x31e226(0x32f)],this[_0x31e226(0x410)]);},Weather[_0x5da319(0x2c2)]['updateData']=function(){const _0x217bd8=_0x5da319,_0x1519b2=this[_0x217bd8(0x309)]();if(!_0x1519b2)return;this[_0x217bd8(0x297)]=_0x1519b2['type'],this[_0x217bd8(0x482)]=_0x1519b2[_0x217bd8(0x482)],$gameMap&&$gameMap['isNoWeather']()&&(_0x217bd8(0x427)===_0x217bd8(0x381)?(_0x9985b2[_0x217bd8(0x556)](_0x1ce1b2,_0x5dc2d9),_0x4d0e83[_0x217bd8(0x297)]='dustclouds',_0x415a85['WeatherEffects']['applyPluginCmdSettings'](_0x318b79)):this[_0x217bd8(0x482)]=0x0);},Weather[_0x5da319(0x2c2)]['updatePosition']=function(){const _0x5d7deb=_0x5da319;if(SceneManager[_0x5d7deb(0x1ce)]())return;this['origin']['x']=$gameMap['displayX']()*$gameMap[_0x5d7deb(0x41f)](),this[_0x5d7deb(0x3a7)]['y']=$gameMap[_0x5d7deb(0x12a)]()*$gameMap[_0x5d7deb(0x1cc)]();},Weather[_0x5da319(0x2c2)][_0x5da319(0x227)]=function(){const _0x43f9b9=_0x5da319;if(this['data']()[_0x43f9b9(0x297)]===_0x43f9b9(0x575))return;if(this['_lastDimmerColor']===this[_0x43f9b9(0x309)]()['dimmer']['color'])return;const _0x1fb95c=this[_0x43f9b9(0x309)]()['duration'];let _0xd705=this[_0x43f9b9(0x309)]()['dimmer'][_0x43f9b9(0x12e)];this[_0x43f9b9(0x53c)]=_0xd705;if(_0x1fb95c>0x0){if(_0x43f9b9(0x4ea)===_0x43f9b9(0x177)){const _0x317d46=this['_context'];_0x182be8=_0x3ba8ba||_0x43f9b9(0x53b),_0x3ebd3b=_0xcbaac6||_0x43f9b9(0x281),_0x54c9c4=_0x588457||'#ffffff',_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46[_0x43f9b9(0xfd)]=_0x59c43b,(_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x52d)]=0.695966,_0x317d46[_0x43f9b9(0x23f)](32.118356,32.638166),_0x317d46[_0x43f9b9(0x2cb)](36.363751,64.026251,27.872961,82.886942,27.872961,82.886942)),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46['stroke'](),_0x317d46['fillStyle']=_0x35ae44,(_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](30.16965,77.249614),_0x317d46[_0x43f9b9(0x2cb)](31.491986,78.154371,30.16965,83.443715,27.107398,89.081043),_0x317d46[_0x43f9b9(0x2cb)](24.045146,94.718371,20.495717,98.546186,19.173381,97.64143),_0x317d46[_0x43f9b9(0x2cb)](17.851045,96.736674,19.173381,91.447329,22.235633,85.810001),_0x317d46[_0x43f9b9(0x2cb)](25.297885,80.172673,28.847314,76.344858,30.16965,77.249614)),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0xfd)]=_0x5ab7c1,_0x317d46[_0x43f9b9(0x4e5)]=_0xe3558f,_0x317d46['lineWidth']=0x5,(_0x317d46['save'](),_0x317d46['transform'](0.695966,0x0,0x0,0.695966,181.842,123.051),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-242.3,-157.8),_0x317d46[_0x43f9b9(0x2cf)](-214.1,-130.5),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46['transform'](0.31266,0x0,0x0,0.32058,88.64,390.11),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-1050.5,-0x6a5),_0x317d46[_0x43f9b9(0x2cb)](-1079.4,-1729.8,-1102.2,-1750.4,-1078.2,-1725.7),_0x317d46[_0x43f9b9(0x2cb)](-1054.1,-0x6a5,-1052.9,-0x6a5,-1050.5,-0x6a5),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-1048.5,-0x6a7),_0x317d46['bezierCurveTo'](-1077.4,-1731.8,-1100.2,-1752.4,-1076.2,-1727.7),_0x317d46[_0x43f9b9(0x2cb)](-1052.1,-0x6a7,-1050.9,-0x6a7,-1048.5,-0x6a7),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](-1050.5,-0x6a7),_0x317d46[_0x43f9b9(0x2cb)](-1079.4,-1731.8,-1102.2,-1752.4,-1078.2,-1727.7),_0x317d46['bezierCurveTo'](-1054.1,-0x6a7,-1052.9,-0x6a7,-1050.5,-0x6a7),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['restore'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-230.9,-162.8),_0x317d46[_0x43f9b9(0x2cf)](-215.2,-132.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46[_0x43f9b9(0x312)](0.22445,0.070054,-0.053362,0.28457,132.9,389.45),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-1959.5,-1448.4),_0x317d46['bezierCurveTo'](-1988.4,-1477.2,-2011.2,-1497.8,-1987.2,-1473.1),_0x317d46['bezierCurveTo'](-1963.1,-1448.4,-1961.9,-1448.4,-1959.5,-1448.4),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-1957.5,-1450.4),_0x317d46['bezierCurveTo'](-1986.4,-1479.2,-2009.2,-1499.8,-1985.2,-1475.1),_0x317d46[_0x43f9b9(0x2cb)](-1961.1,-1450.4,-1959.9,-1450.4,-1957.5,-1450.4),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46['stroke'](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](-1959.5,-1450.4),_0x317d46[_0x43f9b9(0x2cb)](-1988.4,-1479.2,-2011.2,-1499.8,-1987.2,-1475.1),_0x317d46[_0x43f9b9(0x2cb)](-1963.1,-1450.4,-1961.9,-1450.4,-1959.5,-1450.4),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x21c)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-217.8,-162.7),_0x317d46['lineTo'](-216.1,-133.5),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['save'](),_0x317d46[_0x43f9b9(0x312)](0.22089,0.17769,-0.21484,0.15456,209.48,425.48),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-2652.9,-738.7),_0x317d46[_0x43f9b9(0x2cb)](-2681.8,-767.5,-2704.6,-788.1,-2680.6,-763.4),_0x317d46[_0x43f9b9(0x2cb)](-2656.5,-738.7,-2655.3,-738.7,-2652.9,-738.7),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-2650.9,-740.7),_0x317d46[_0x43f9b9(0x2cb)](-2679.8,-769.5,-2702.6,-790.1,-2678.6,-765.4),_0x317d46[_0x43f9b9(0x2cb)](-2654.5,-740.7,-2653.3,-740.7,-2650.9,-740.7),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-2652.9,-740.7),_0x317d46[_0x43f9b9(0x2cb)](-2681.8,-769.5,-2704.6,-790.1,-2680.6,-765.4),_0x317d46[_0x43f9b9(0x2cb)](-2656.5,-740.7,-2655.3,-740.7,-2652.9,-740.7),_0x317d46['fill'](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x21c)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-196.4,-158.1),_0x317d46[_0x43f9b9(0x2cf)](-216.8,-133.7),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46[_0x43f9b9(0x312)](-0.002675,0.26549,-0.23659,0.00452,270.1,476.54),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-2416.6,2007.2),_0x317d46['bezierCurveTo'](-2445.5,1978.4,-2468.3,1957.8,-2444.3,1982.5),_0x317d46[_0x43f9b9(0x2cb)](-2420.2,2007.2,-0x973,2007.2,-2416.6,2007.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-2414.6,2005.2),_0x317d46[_0x43f9b9(0x2cb)](-2443.5,1976.4,-2466.3,1955.8,-2442.3,1980.5),_0x317d46[_0x43f9b9(0x2cb)](-2418.2,2005.2,-0x971,2005.2,-2414.6,2005.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['beginPath'](),_0x317d46['moveTo'](-2416.6,2005.2),_0x317d46['bezierCurveTo'](-2445.5,1976.4,-2468.3,1955.8,-2444.3,1980.5),_0x317d46[_0x43f9b9(0x2cb)](-2420.2,2005.2,-0x973,2005.2,-2416.6,2005.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x21c)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-246.9,-141.7),_0x317d46['lineTo'](-214.2,-131.4),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['save'](),_0x317d46[_0x43f9b9(0x312)](0.24275,-0.15327,0.12697,0.28299,44.094,441.92),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-85.8,-2104.9),_0x317d46[_0x43f9b9(0x2cb)](-114.7,-2133.7,-137.5,-2154.3,-113.5,-2129.6),_0x317d46['bezierCurveTo'](-89.4,-2104.9,-88.2,-2104.9,-85.8,-2104.9),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-83.8,-2106.9),_0x317d46[_0x43f9b9(0x2cb)](-112.7,-2135.7,-135.5,-2156.3,-111.5,-2131.6),_0x317d46[_0x43f9b9(0x2cb)](-87.4,-2106.9,-86.2,-2106.9,-83.8,-2106.9),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-85.8,-2106.9),_0x317d46['bezierCurveTo'](-114.7,-2135.7,-137.5,-2156.3,-113.5,-2131.6),_0x317d46['bezierCurveTo'](-89.4,-2106.9,-88.2,-2106.9,-85.8,-2106.9),_0x317d46['fill'](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x21c)](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](-185.8,-142.3),_0x317d46[_0x43f9b9(0x2cf)](-218.5,-0x84),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['save'](),_0x317d46[_0x43f9b9(0x312)](-0.24275,-0.15327,-0.12697,0.28299,270.99,441.28),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46['stroke'](),_0x317d46['beginPath'](),_0x317d46['moveTo'](2314.6,-804.9),_0x317d46['bezierCurveTo'](2285.7,-833.7,2262.9,-854.3,2286.9,-829.6),_0x317d46[_0x43f9b9(0x2cb)](0x907,-804.9,2312.2,-804.9,2314.6,-804.9),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['beginPath'](),_0x317d46['moveTo'](2316.6,-806.9),_0x317d46['bezierCurveTo'](2287.7,-835.7,2264.9,-856.3,2288.9,-831.6),_0x317d46['bezierCurveTo'](0x909,-806.9,2314.2,-806.9,2316.6,-806.9),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](2314.6,-806.9),_0x317d46['bezierCurveTo'](2285.7,-835.7,2262.9,-856.3,2286.9,-831.6),_0x317d46[_0x43f9b9(0x2cb)](0x907,-806.9,2312.2,-806.9,2314.6,-806.9),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['restore'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-231.8,-129.4),_0x317d46[_0x43f9b9(0x2cf)](-213.2,-134.7),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46[_0x43f9b9(0x312)](0.023653,-0.076388,0.19356,0.018706,63.365,546.69),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](8238.8,-2522.6),_0x317d46['bezierCurveTo'](8209.9,-2551.4,8187.1,-0xa0c,8211.1,-2547.3),_0x317d46[_0x43f9b9(0x2cb)](8235.2,-2522.6,8236.4,-2522.6,8238.8,-2522.6),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](8240.8,-2524.6),_0x317d46['bezierCurveTo'](8211.9,-2553.4,8189.1,-0xa0e,8213.1,-2549.3),_0x317d46[_0x43f9b9(0x2cb)](8237.2,-2524.6,8238.4,-2524.6,8240.8,-2524.6),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](8238.8,-2524.6),_0x317d46[_0x43f9b9(0x2cb)](8209.9,-2553.4,8187.1,-0xa0e,8211.1,-2549.3),_0x317d46[_0x43f9b9(0x2cb)](8235.2,-2524.6,8236.4,-2524.6,8238.8,-2524.6),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['restore'](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](-199.6,-0x80),_0x317d46[_0x43f9b9(0x2cf)](-218.2,-133.3),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46[_0x43f9b9(0x312)](-0.023653,-0.076388,-0.19356,0.018706,252.97,548.1),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](9157.3,1228.3),_0x317d46[_0x43f9b9(0x2cb)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0x317d46[_0x43f9b9(0x2cb)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](9159.3,1226.3),_0x317d46[_0x43f9b9(0x2cb)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0x317d46[_0x43f9b9(0x2cb)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0x317d46['fill'](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](9157.3,1226.3),_0x317d46[_0x43f9b9(0x2cb)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0x317d46[_0x43f9b9(0x2cb)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0x317d46[_0x43f9b9(0x21c)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-198.5,-126.8),_0x317d46['lineTo'](-217.1,-132.1),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['save'](),_0x317d46['transform'](-0.023653,-0.076388,-0.19356,0.018706,254.11,549.29),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](9157.3,1228.3),_0x317d46[_0x43f9b9(0x2cb)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0x317d46['bezierCurveTo'](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](9159.3,1226.3),_0x317d46[_0x43f9b9(0x2cb)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0x317d46[_0x43f9b9(0x2cb)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](9157.3,1226.3),_0x317d46[_0x43f9b9(0x2cb)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0x317d46[_0x43f9b9(0x2cb)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['restore'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-215.6,-132.9),_0x317d46['lineTo'](-215.6,-128.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](-206.5,-160.9),_0x317d46[_0x43f9b9(0x2cf)](-215.4,-134.6),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['save'](),_0x317d46[_0x43f9b9(0x312)](0.14296,0.24045,-0.25629,0.054271,247.7,457.79),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-2632.7,307.2),_0x317d46[_0x43f9b9(0x2cb)](-2661.6,278.4,-2684.4,257.8,-2660.4,282.5),_0x317d46[_0x43f9b9(0x2cb)](-2636.3,307.2,-2635.1,307.2,-2632.7,307.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](-2630.7,305.2),_0x317d46[_0x43f9b9(0x2cb)](-2659.6,276.4,-2682.4,255.8,-2658.4,280.5),_0x317d46[_0x43f9b9(0x2cb)](-2634.3,305.2,-2633.1,305.2,-2630.7,305.2),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](-2632.7,305.2),_0x317d46[_0x43f9b9(0x2cb)](-2661.6,276.4,-2684.4,255.8,-2660.4,280.5),_0x317d46[_0x43f9b9(0x2cb)](-2636.3,305.2,-2635.1,305.2,-2632.7,305.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x21c)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-188.1,-148.7),_0x317d46['lineTo'](-215.9,-0x87),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46['transform'](-0.097581,0.23264,-0.2229,-0.086065,286.11,525.8),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](-1809.9,2931.2),_0x317d46[_0x43f9b9(0x2cb)](-1838.8,2902.4,-1861.6,2881.8,-1837.6,2906.5),_0x317d46[_0x43f9b9(0x2cb)](-1813.5,2931.2,-1812.3,2931.2,-1809.9,2931.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-1807.9,2929.2),_0x317d46[_0x43f9b9(0x2cb)](-1836.8,2900.4,-1859.6,2879.8,-1835.6,2904.5),_0x317d46[_0x43f9b9(0x2cb)](-1811.5,2929.2,-1810.3,2929.2,-1807.9,2929.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-1809.9,2929.2),_0x317d46[_0x43f9b9(0x2cb)](-1838.8,2900.4,-1861.6,2879.8,-1837.6,2904.5),_0x317d46[_0x43f9b9(0x2cb)](-1813.5,2929.2,-1812.3,2929.2,-1809.9,2929.2),_0x317d46['fill'](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x21c)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-183.8,-130.7),_0x317d46[_0x43f9b9(0x2cf)](-218.1,-134.1),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46[_0x43f9b9(0x312)](-0.17214,-0.22728,-0.2201,0.20074,299.56,495.11),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](2783.6,33.2),_0x317d46[_0x43f9b9(0x2cb)](2754.7,4.4,2731.9,-16.2,2755.9,8.5),_0x317d46[_0x43f9b9(0x2cb)](0xadc,33.2,2781.2,33.2,2783.6,33.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](2785.6,31.2),_0x317d46[_0x43f9b9(0x2cb)](2756.7,2.4,2733.9,-18.2,2757.9,6.5),_0x317d46[_0x43f9b9(0x2cb)](0xade,31.2,2783.2,31.2,2785.6,31.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](2783.6,31.2),_0x317d46[_0x43f9b9(0x2cb)](2754.7,2.4,2731.9,-18.2,2755.9,6.5),_0x317d46['bezierCurveTo'](0xadc,31.2,2781.2,31.2,2783.6,31.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['restore'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-231.5,-136.9),_0x317d46[_0x43f9b9(0x2cf)](-212.2,-134.5),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x1d5)](),_0x317d46['transform'](0.049479,-0.058228,0.17433,0.090128,67.628,508.86),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](5867.7,-3370.8),_0x317d46[_0x43f9b9(0x2cb)](5838.8,-3399.6,0x16b8,-3420.2,0x16d0,-3395.5),_0x317d46[_0x43f9b9(0x2cb)](0x16e8,-3370.8,5865.3,-3370.8,5867.7,-3370.8),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46['stroke'](),_0x317d46['beginPath'](),_0x317d46[_0x43f9b9(0x23f)](5869.7,-3372.8),_0x317d46['bezierCurveTo'](5840.8,-3401.6,0x16ba,-3422.2,0x16d2,-3397.5),_0x317d46[_0x43f9b9(0x2cb)](0x16ea,-3372.8,5867.3,-3372.8,5869.7,-3372.8),_0x317d46['fill'](),_0x317d46['stroke'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](5867.7,-3372.8),_0x317d46[_0x43f9b9(0x2cb)](5838.8,-3401.6,0x16b8,-3422.2,0x16d0,-3397.5),_0x317d46['bezierCurveTo'](0x16e8,-3372.8,5865.3,-3372.8,5867.7,-3372.8),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x21c)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-201.9,-123.4),_0x317d46['lineTo'](-217.4,-135.2),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['save'](),_0x317d46['transform'](0.005235,-0.076232,-0.18773,-0.057202,244.46,582.26),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](7327.3,2589.8),_0x317d46[_0x43f9b9(0x2cb)](7298.4,0xa01,7275.6,2540.4,7299.6,2565.1),_0x317d46[_0x43f9b9(0x2cb)](7323.6,2589.8,7324.9,2589.8,7327.3,2589.8),_0x317d46['fill'](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46['moveTo'](7329.3,2587.8),_0x317d46[_0x43f9b9(0x2cb)](7300.4,0x9ff,7277.6,2538.4,7301.6,2563.1),_0x317d46[_0x43f9b9(0x2cb)](7325.6,2587.8,7326.9,2587.8,7329.3,2587.8),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](7327.3,2587.8),_0x317d46['bezierCurveTo'](7298.4,0x9ff,7275.6,2538.4,7299.6,2563.1),_0x317d46['bezierCurveTo'](7323.6,2587.8,7324.9,2587.8,7327.3,2587.8),_0x317d46[_0x43f9b9(0x1ef)](),_0x317d46[_0x43f9b9(0x47a)](),_0x317d46['restore'](),_0x317d46[_0x43f9b9(0x503)](),_0x317d46[_0x43f9b9(0x23f)](-0xd7,-133.8),_0x317d46[_0x43f9b9(0x2cf)](-216.7,-129.6),_0x317d46['fill'](),_0x317d46['stroke']()),_0x317d46['restore'](),this['_baseTexture'][_0x43f9b9(0x329)]();}else{const _0x4e360c=[this[_0x43f9b9(0x2e1)]['_red'],this[_0x43f9b9(0x2e1)][_0x43f9b9(0x4a2)],this[_0x43f9b9(0x2e1)]['_blue']],_0x198b29=ColorManager[_0x43f9b9(0x213)](_0xd705);for(let _0x5853fc=0x0;_0x5853fc<0x3;_0x5853fc++){_0x4e360c[_0x5853fc]=Math[_0x43f9b9(0x31d)]((_0x4e360c[_0x5853fc]*(_0x1fb95c-0x1)+_0x198b29[_0x5853fc])/_0x1fb95c);}this[_0x43f9b9(0x53c)]=ColorManager['arrayToHex'](_0x4e360c);}}const _0x2fb30b=ColorManager['hexToArray'](this[_0x43f9b9(0x53c)]);this[_0x43f9b9(0x2e1)]['setColor'](_0x2fb30b[0x0]||0x0,_0x2fb30b[0x1]||0x0,_0x2fb30b[0x2]||0x0);},Weather[_0x5da319(0x2c2)][_0x5da319(0x573)]=function(){const _0x43adb9=_0x5da319,_0xe8915d=this[_0x43adb9(0x309)]()[_0x43adb9(0x539)],_0x533482=this[_0x43adb9(0x309)]()[_0x43adb9(0x332)];let _0xe2d9a7=_0x533482[_0x43adb9(0x568)]+_0x533482[_0x43adb9(0x42a)]*this[_0x43adb9(0x309)]()[_0x43adb9(0x39d)];if(this[_0x43adb9(0x482)]<=0x0)_0xe2d9a7=0x0;let _0x2b8922=_0xe2d9a7;_0xe8915d>0x0&&(_0x2b8922=(this['_dimmerSprite'][_0x43adb9(0x51a)]*(_0xe8915d-0x1)+_0xe2d9a7)/_0xe8915d),$gameMap&&$gameMap[_0x43adb9(0x4ef)]()&&(_0x2b8922=0x0),this[_0x43adb9(0x2e1)][_0x43adb9(0x51a)]=_0x2b8922;},Weather['prototype'][_0x5da319(0x46d)]=function(){const _0x3ceecc=_0x5da319;if($gameMap&&$gameMap[_0x3ceecc(0x4ef)]())return 0x0;if(this[_0x3ceecc(0x482)]<0x1)return 0x0;const _0x363a29=this[_0x3ceecc(0x309)](),_0x518c3e=_0x363a29[_0x3ceecc(0x526)][_0x3ceecc(0x336)]||0x0,_0x4eccec=_0x363a29[_0x3ceecc(0x526)][_0x3ceecc(0x123)]||0x0,_0x23dfe1=(ConfigManager[_0x3ceecc(0x3a8)]??0x64)/0x64,_0x2ffe56=Math[_0x3ceecc(0x340)](this['power']*_0x4eccec*_0x23dfe1)+_0x518c3e;return Math['ceil'](_0x2ffe56);},ConfigManager[_0x5da319(0x3a8)]=0x64,VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x32b)]=ConfigManager[_0x5da319(0x187)],ConfigManager[_0x5da319(0x187)]=function(){const _0x44261c=_0x5da319,_0x2067cb=VisuMZ['WeatherEffects']['ConfigManager_makeData'][_0x44261c(0x481)](this);return _0x2067cb[_0x44261c(0x3a8)]=this[_0x44261c(0x3a8)],_0x2067cb;},VisuMZ[_0x5da319(0x3a2)]['ConfigManager_applyData']=ConfigManager['applyData'],ConfigManager['applyData']=function(_0x3a920c){const _0x3e70f0=_0x5da319;VisuMZ[_0x3e70f0(0x3a2)][_0x3e70f0(0x196)][_0x3e70f0(0x481)](this,_0x3a920c),_0x3e70f0(0x3a8)in _0x3a920c?this[_0x3e70f0(0x3a8)]=_0x3a920c[_0x3e70f0(0x3a8)]:this[_0x3e70f0(0x3a8)]=0x64;},ImageManager[_0x5da319(0x4f4)]=VisuMZ[_0x5da319(0x3a2)]['Settings']['General'][_0x5da319(0x32d)]??![],ImageManager[_0x5da319(0x302)]=VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x2fb)][_0x5da319(0x483)][_0x5da319(0x2fc)]||0x10,ImageManager[_0x5da319(0x22c)]=VisuMZ['WeatherEffects']['Settings']['General'][_0x5da319(0x2d8)],ImageManager[_0x5da319(0x24b)]=![],ImageManager[_0x5da319(0x2ef)]=['🐄','🐕','🐖','🐏','🐑','🐐','🐇','🐎','🐒','🐓','🦆','🐈','🐁','🐀','🦢','🐢'],VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x565)]=Scene_Boot[_0x5da319(0x2c2)][_0x5da319(0x394)],Scene_Boot[_0x5da319(0x2c2)][_0x5da319(0x394)]=function(){const _0x3766f5=_0x5da319;VisuMZ[_0x3766f5(0x3a2)][_0x3766f5(0x565)][_0x3766f5(0x481)](this),ImageManager[_0x3766f5(0x530)]();},ImageManager['shouldPreRenderWeatherImages']=function(){const _0xff912c=_0x5da319;if(Utils[_0xff912c(0x33e)]())return![];return ImageManager[_0xff912c(0x4f4)];},ImageManager[_0x5da319(0x530)]=function(){const _0x4974df=_0x5da319;if(!ImageManager[_0x4974df(0x315)]())return;ImageManager[_0x4974df(0x46c)]();const _0x407e56=['none'];for(const _0x214a63 of _0x407e56){if(_0x4974df(0x4b3)!=='emTgS'){const _0x11e1d8=this['_cached_WeatherEffects_Thunderclouds'];return _0x11e1d8[_0xb3d0f0[_0x4974df(0x441)](_0x3884d7[_0x4974df(0x398)]()*_0x11e1d8[_0x4974df(0x2e9)])];}else this['getGeneratedWeatherParticle'](_0x214a63);}let _0xcbf93c=0x0;const _0x5e6c9e=[_0x4974df(0x3de),_0x4974df(0x268),_0x4974df(0xf8),_0x4974df(0x572),_0x4974df(0x558),_0x4974df(0x2c3),_0x4974df(0x3e3),_0x4974df(0x251),_0x4974df(0x252),_0x4974df(0x3fb),_0x4974df(0x448),'snowflakes',_0x4974df(0x30b),_0x4974df(0x3a3),_0x4974df(0x4b9),'aurora',_0x4974df(0x2c1),_0x4974df(0x390),'thunderbolt','purplehaze',_0x4974df(0x366),'ultraviolet',_0x4974df(0x557),_0x4974df(0x25c),_0x4974df(0x12b),_0x4974df(0x20d),_0x4974df(0x4f6),_0x4974df(0x267),_0x4974df(0x543),_0x4974df(0x443),_0x4974df(0x2e6),'soapbubbles',_0x4974df(0x509),_0x4974df(0x143),_0x4974df(0x175),_0x4974df(0x117),_0x4974df(0x27f),_0x4974df(0x531),_0x4974df(0x15f),'toxicgas',_0x4974df(0x477),_0x4974df(0x460),_0x4974df(0x149),'autumnleaves','cherryblossoms',_0x4974df(0x116),_0x4974df(0x1ff),_0x4974df(0x494),_0x4974df(0x567),'grassygust',_0x4974df(0x45f),_0x4974df(0x246),_0x4974df(0x399),_0x4974df(0x41c),_0x4974df(0x41d),_0x4974df(0x3fe),'lightorbs',_0x4974df(0x580),'prismbeams','lensflare',_0x4974df(0x1f1),'ashfall','sootfall','smokefog',_0x4974df(0x1be),'bloodrain','moonbeams',_0x4974df(0x4aa),'shadowburst',_0x4974df(0x1a5),_0x4974df(0x3c9),_0x4974df(0x242),_0x4974df(0x205)];_0xcbf93c=ImageManager[_0x4974df(0x302)];while(_0xcbf93c--){if(_0x4974df(0x1d7)!==_0x4974df(0x1d7))_0x53dbda[_0x4974df(0x2c2)][_0x4974df(0x347)]['call'](this);else for(const _0x29ffa1 of _0x5e6c9e){this[_0x4974df(0x56b)](_0x29ffa1);}}const _0x30adb4=[_0x4974df(0x27a),'thunderbolt','aurora',_0x4974df(0x36a),'aurora','aurora','shootingstars','shootingstars'];_0xcbf93c=ImageManager[_0x4974df(0x302)];while(_0xcbf93c--){for(const _0x43cdca of _0x30adb4){this['getGeneratedWeatherParticle'](_0x43cdca);}}},ImageManager[_0x5da319(0x46c)]=function(){const _0x45cfb3=_0x5da319;if(this[_0x45cfb3(0x170)])return this['_weatherIcons'];return this['_weatherIcons']=Bitmap[_0x45cfb3(0x2f9)](_0x45cfb3(0x2ed)),this[_0x45cfb3(0x170)][_0x45cfb3(0x230)]=ImageManager[_0x45cfb3(0x22c)],this[_0x45cfb3(0x170)];},ImageManager[_0x5da319(0x56b)]=function(_0x3bb42b){const _0x40397f=_0x5da319;_0x3bb42b=_0x3bb42b[_0x40397f(0x4b1)]()['trim']();switch(_0x3bb42b){case'none':return this[_0x40397f(0x172)]();case _0x40397f(0x4f6):return this['weatherEffectsRain']();case _0x40397f(0x267):return this[_0x40397f(0x1fe)]();case _0x40397f(0x448):return this['weatherEffectsSnow']();case'embers':return this['weatherEffectsEmbers']();case _0x40397f(0xf8):return this[_0x40397f(0x32e)]();case'fireflies':return this[_0x40397f(0x430)]();case _0x40397f(0x572):return this[_0x40397f(0x203)]();case'heatclouds':return this[_0x40397f(0x166)]();case'sunbeams':return this[_0x40397f(0x420)]();case _0x40397f(0x3e3):return this[_0x40397f(0x400)]();case _0x40397f(0x251):return this[_0x40397f(0x387)]();case _0x40397f(0x525):case'shootingstars':return this[_0x40397f(0x27e)]();case'blizzard':return this[_0x40397f(0x207)]();case _0x40397f(0x549):return this[_0x40397f(0x48a)]();case _0x40397f(0x30b):return this[_0x40397f(0x4f8)]();case _0x40397f(0x3a3):return this[_0x40397f(0x50f)]();case'diamonddust':return this['weatherEffectsDiamondDust']();case'aurora':return this['weatherEffectsAurora']();case'arcticbeam':return this[_0x40397f(0x29d)]();case _0x40397f(0x390):return this[_0x40397f(0x147)]();case _0x40397f(0x29a):return this[_0x40397f(0x560)]();case _0x40397f(0x27a):case _0x40397f(0x106):case _0x40397f(0x25c):case _0x40397f(0x12b):case'discharge':return this[_0x40397f(0x141)]();case _0x40397f(0x36f):return this[_0x40397f(0x307)]();case'thunderclouds':return this['weatherEffectsThunderclouds']();case _0x40397f(0x55a):return this[_0x40397f(0x4f2)]();case _0x40397f(0x557):case'staticcharge':return this[_0x40397f(0x293)]();case _0x40397f(0x20d):return this[_0x40397f(0x497)]();case'rainclouds':return this[_0x40397f(0x536)]();case _0x40397f(0x443):case _0x40397f(0x194):return this['weatherEffectsMist']();case _0x40397f(0x2e6):return this[_0x40397f(0x51d)]();case _0x40397f(0x1f2):return this[_0x40397f(0x13d)]();case _0x40397f(0x33b):return this[_0x40397f(0x54b)]();case _0x40397f(0x509):return this['weatherEffectsRainbowArch']();case _0x40397f(0x143):return this[_0x40397f(0x39a)]();case _0x40397f(0x175):return this['weatherEffectsPollutionClouds']();case _0x40397f(0x117):return this[_0x40397f(0x524)]();case _0x40397f(0x27f):return this[_0x40397f(0x162)]();case _0x40397f(0x531):return this['weatherEffectsSandClouds']();case _0x40397f(0x15f):return this['weatherEffectsCrumblingCave']();case _0x40397f(0x14b):return this['weatherEffectsToxicGas']();case _0x40397f(0x477):return this['weatherEffectsAcidRain']();case _0x40397f(0x460):return this[_0x40397f(0x146)]();case'housedust':return this['weatherEffectsHouseDust']();case _0x40397f(0x337):return this[_0x40397f(0x2fa)]();case _0x40397f(0x2d4):return this['weatherEffectsCherryBlossoms']();case _0x40397f(0x116):return this[_0x40397f(0x111)]();case _0x40397f(0x1ff):return this[_0x40397f(0x25f)]();case _0x40397f(0x494):return this[_0x40397f(0x4c3)]();case _0x40397f(0x567):return this[_0x40397f(0x3cd)]();case _0x40397f(0x15c):return this[_0x40397f(0x33d)]();case _0x40397f(0x496):return this[_0x40397f(0x2bd)]();case'xtreme':return this['weatherEffectsXtremeSpeed']();case _0x40397f(0x246):return this[_0x40397f(0xe9)]();case _0x40397f(0x399):return this[_0x40397f(0x324)]();case _0x40397f(0x41c):return this[_0x40397f(0x532)]();case _0x40397f(0x41d):return this[_0x40397f(0x274)]();case _0x40397f(0x3fe):return this[_0x40397f(0x45b)]();case _0x40397f(0x2d5):return this['weatherEffectsLightOrbs']();case _0x40397f(0x580):return this[_0x40397f(0x100)]();case _0x40397f(0x39e):return this['weatherEffectsSunBeams']();case'prismbeams':case'prismburst':return this['weatherEffectsPrismBeams']();case'lensflare':return this[_0x40397f(0x2be)]();case _0x40397f(0x1f1):return this[_0x40397f(0x21e)]();case _0x40397f(0x158):return this[_0x40397f(0x55b)]();case'sootfall':return this['weatherEffectsSootfall']();case _0x40397f(0x2e8):return this['weatherEffectsSmokeFog']();case _0x40397f(0x1be):return this[_0x40397f(0x1cd)]();case _0x40397f(0x19c):return this[_0x40397f(0x431)]();case _0x40397f(0x341):return this[_0x40397f(0x4e0)]();case _0x40397f(0x4aa):return this[_0x40397f(0x433)]();case _0x40397f(0x2ae):return this[_0x40397f(0x4fd)]();case _0x40397f(0x1a5):return this[_0x40397f(0x51b)]();case _0x40397f(0x3c9):return this[_0x40397f(0x560)]();case _0x40397f(0x242):return this[_0x40397f(0x204)]();case'icons':case _0x40397f(0x48d):case'slow_icons_2':case _0x40397f(0x50d):case _0x40397f(0x468):case _0x40397f(0x367):case _0x40397f(0x43a):case _0x40397f(0x2ac):case _0x40397f(0x3ce):case _0x40397f(0x12f):case _0x40397f(0x383):case _0x40397f(0x4fa):case _0x40397f(0xed):case _0x40397f(0x403):case _0x40397f(0x11e):case _0x40397f(0x2b8):case _0x40397f(0x486):case _0x40397f(0x4c8):case _0x40397f(0x3fc):case _0x40397f(0x224):case'medium_icons_0':case'fast_icons_1':case _0x40397f(0x518):case _0x40397f(0x446):case _0x40397f(0x294):case _0x40397f(0x421):case _0x40397f(0x346):case _0x40397f(0x352):case _0x40397f(0x554):case'fast_icons_9':case'fast_icons_0':return this['weatherEffectsIcons']();default:return this['weatherEffectsSnow']();}},ImageManager[_0x5da319(0x3f7)]=function(){const _0x59a815=_0x5da319;if(!this[_0x59a815(0x4a1)]){if(_0x59a815(0x133)===_0x59a815(0x19e)){let _0x158aac='';if(/^#([A-Fa-f0-9]{3}){1,2}$/['test'](_0x522bcb)){_0x158aac=_0x2dfa81['substring'](0x1)[_0x59a815(0x44c)]('');_0x158aac[_0x59a815(0x2e9)]===0x3&&(_0x158aac=[_0x158aac[0x0],_0x158aac[0x0],_0x158aac[0x1],_0x158aac[0x1],_0x158aac[0x2],_0x158aac[0x2]]);while(_0x158aac[_0x59a815(0x2e9)]>0x6)_0x158aac[_0x59a815(0x46b)]();return _0x158aac='0x'+_0x158aac[_0x59a815(0x4d0)](''),'rgba('+[(_0x158aac>>0x10&0xff)[_0x59a815(0x485)](0x0,0xff),(_0x158aac>>0x8&0xff)[_0x59a815(0x485)](0x0,0xff),(_0x158aac&0xff)[_0x59a815(0x485)](0x0,0xff)][_0x59a815(0x4d0)](',')+','+_0x21b92f[_0x59a815(0x485)](0x0,0x1)+')';}else return _0x59a815(0x239);}else this[_0x59a815(0x4a1)]=document[_0x59a815(0x55c)](_0x59a815(0x229));}return this[_0x59a815(0x4a1)];},ImageManager['getTemporaryContext']=function(_0xfaf0d4,_0x5b879c){const _0x234845=_0x5da319,_0x4ad764=this[_0x234845(0x3f7)]();return _0x4ad764['width']=_0xfaf0d4,_0x4ad764[_0x234845(0x42b)]=_0x5b879c,_0x4ad764[_0x234845(0x2dc)]('2d');},ImageManager[_0x5da319(0x172)]=function(){const _0x59e21a=_0x5da319;if(this[_0x59e21a(0x429)])return this['_cached_WeatherEffects_None'];const _0x15c5bb=new Bitmap(0x1,0x1);_0x15c5bb[_0x59e21a(0x182)]=![];if(ImageManager[_0x59e21a(0x24b)])console[_0x59e21a(0x47b)](_0x59e21a(0x575));return this['_cached_WeatherEffects_None']=_0x15c5bb,this[_0x59e21a(0x429)];},ImageManager[_0x5da319(0x53e)]=function(){const _0xa007c4=_0x5da319;if(this['_cached_WeatherEffects_Rain']&&this[_0xa007c4(0x2a3)][_0xa007c4(0x2e9)]>=ImageManager[_0xa007c4(0x302)]){if('qLFny'!==_0xa007c4(0x39c)){const _0x4de854=this[_0xa007c4(0x2a3)];return _0x4de854[Math[_0xa007c4(0x441)](Math[_0xa007c4(0x398)]()*_0x4de854[_0xa007c4(0x2e9)])];}else{const _0x45ce17=this[_0xa007c4(0x452)];_0x45ce17['save']();const _0x51d07f=_0x45ce17[_0xa007c4(0x495)](0x0,this[_0xa007c4(0x42b)]/0x2,this[_0xa007c4(0x16e)]/0x2,this[_0xa007c4(0x42b)]/0x2);_0x51d07f[_0xa007c4(0x37f)](0x0,_0x11a572||_0xa007c4(0x139)),_0x51d07f[_0xa007c4(0x37f)](0x1,_0xe678e2||_0xa007c4(0x250)),_0x45ce17[_0xa007c4(0xfd)]=_0x51d07f,(_0x45ce17[_0xa007c4(0x503)](),_0x45ce17[_0xa007c4(0x23f)](12.57908,31.191794),_0x45ce17[_0xa007c4(0x2cb)](4.317875,26.790381,0x2,21.507626,0x2,21.507626),_0x45ce17['bezierCurveTo'](0x2,21.507626,5.544827,18.680225,7.844373,17.156388),_0x45ce17['bezierCurveTo'](5.6081,15.442017,2.28258,12.418619,2.28258,12.418619),_0x45ce17[_0xa007c4(0x2cb)](2.28258,12.418619,4.929183,7.198899,13.612139,3.449718),_0x45ce17[_0xa007c4(0x2cb)](30.630505,-3.805291,49.031689,18.529354,49.031689,18.529354),_0x45ce17[_0xa007c4(0x2cb)](49.031689,18.529354,48.933179,18.511974,48.718891,18.575774),_0x45ce17[_0xa007c4(0x2cb)](48.915856,18.610504,49.014335,18.627874,49.014335,18.627874),_0x45ce17[_0xa007c4(0x2cb)](49.014335,18.627874,26.958007,38.905902,12.579092,31.191834)),_0x45ce17[_0xa007c4(0x1ef)](),_0x45ce17[_0xa007c4(0x1c6)]=_0x1a5d92||'#000000',_0x45ce17['stroke'](),_0x45ce17[_0xa007c4(0x1d5)](),_0x45ce17[_0xa007c4(0x21c)](),this[_0xa007c4(0x225)][_0xa007c4(0x329)]();}}const _0x5cc7ae=new Bitmap(0x1f4,0x1f4),_0xe9455b='rgba(255,255,255,0)',_0x323144='rgba(255,255,255,1)',_0x1b31cd=_0x5cc7ae[_0xa007c4(0x16e)],_0x103bac=_0x5cc7ae['height'],_0x5f52bf=0x3c,_0x50610f=_0x5f52bf/0x2,_0x2c5e3f=0x2;let _0x228255=0x10;while(_0x228255--){const _0x142477=Math['randomInt'](_0x1b31cd-_0x5f52bf)+_0x5f52bf,_0x4d19c5=Math['randomInt'](_0x103bac-_0x2c5e3f)+_0x2c5e3f;_0x5cc7ae[_0xa007c4(0x222)]=Math[_0xa007c4(0x17f)](0x40)+0xc0,_0x5cc7ae[_0xa007c4(0x505)](_0x142477,_0x4d19c5,_0x50610f,0x2,_0xe9455b,_0x323144),_0x5cc7ae[_0xa007c4(0x2b2)](_0x142477+_0x50610f,_0x4d19c5,_0x50610f,0x2,_0x323144);}_0x5cc7ae['_customModified']=![];if(ImageManager[_0xa007c4(0x24b)])console['log'](_0xa007c4(0x4f6));return this['_cached_WeatherEffects_Rain']=this[_0xa007c4(0x2a3)]||[],this['_cached_WeatherEffects_Rain'][_0xa007c4(0x28e)](_0x5cc7ae),_0x5cc7ae;},ImageManager[_0x5da319(0x1fe)]=function(){const _0xf32475=_0x5da319;if(this[_0xf32475(0x12d)]&&this[_0xf32475(0x12d)][_0xf32475(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0xf32475(0x1ee)===_0xf32475(0x178)){if(this[_0xf32475(0x1ca)]&&this['_cached_WeatherEffects_Snowflakes'][_0xf32475(0x2e9)]>=_0x17a12a[_0xf32475(0x302)]){const _0x22e8f1=this[_0xf32475(0x1ca)];return _0x22e8f1[_0x537870[_0xf32475(0x441)](_0x3d5329[_0xf32475(0x398)]()*_0x22e8f1[_0xf32475(0x2e9)])];}const _0x575491=new _0x58cd61(0x64,0x64);_0x575491[_0xf32475(0x576)](),_0x575491['_customModified']=![];if(_0x12198c['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x1a1c5f[_0xf32475(0x47b)](_0xf32475(0x549));return this[_0xf32475(0x1ca)]=this[_0xf32475(0x1ca)]||[],this['_cached_WeatherEffects_Snowflakes'][_0xf32475(0x28e)](_0x575491),_0x575491;}else{const _0x35f534=this[_0xf32475(0x12d)];return _0x35f534[Math[_0xf32475(0x441)](Math['random']()*_0x35f534['length'])];}}const _0xf281fa=new Bitmap(0x1f4,0x1f4),_0x31d09c=_0xf32475(0x31f),_0x2f6e0c=_0xf32475(0x165),_0x58f37b=_0xf281fa['width'],_0x5dfd2c=_0xf281fa[_0xf32475(0x42b)],_0x5ea8bb=0x64,_0x36d716=_0x5ea8bb/0x2,_0x3004d6=0x2;let _0x1bd483=0x20;while(_0x1bd483--){if('AsJFP'!==_0xf32475(0x4f7)){const _0x4437fe=Math['randomInt'](_0x58f37b-_0x5ea8bb)+_0x5ea8bb,_0x24bdbd=Math[_0xf32475(0x17f)](_0x5dfd2c-_0x3004d6)+_0x3004d6;_0xf281fa[_0xf32475(0x222)]=Math[_0xf32475(0x17f)](0x40)+0xc0,_0xf281fa['gradientFillRect'](_0x4437fe,_0x24bdbd,Math[_0xf32475(0x340)](_0x36d716),_0x3004d6,_0x31d09c,_0x2f6e0c),_0xf281fa['fillRect'](_0x4437fe+Math['ceil'](_0x36d716),_0x24bdbd,Math[_0xf32475(0x441)](_0x36d716),_0x3004d6,_0x2f6e0c);}else{_0x5e1e36=_0x113205[_0xf32475(0x485)](0.000001,0.999999);const _0x1ef213=this[_0xf32475(0x401)];_0x1ef213[_0xf32475(0x1d5)]();const _0x5ddf7d=_0x4408f5*(_0x10fd91['PI']/0xb4),_0x5e41f7=_0x1ca00e*0x2;_0x1ef213[_0xf32475(0x1b9)](_0xc27eec-_0x2ff45b,_0xa7b731-_0x333f6e);const _0x56114f=_0x1ef213['createRadialGradient'](_0x5549ee,_0x34df21,_0x229ce4,_0x16356f,_0x278b07,_0x4067f3),_0xfb4d2f=_0x27fd7c['hexToRgba'](_0x179b2f,_0x16d9eb/0x2),_0x213836=_0x1a3bd2['hexToRgba'](_0x2ded50,_0x28b2d9),_0x5b5343=_0x29eef4[_0xf32475(0x260)](_0x29977f,0x0);_0x56114f['addColorStop'](0x0,_0xfb4d2f),_0x56114f['addColorStop'](_0x193e54/0x2,_0x213836),_0x56114f['addColorStop'](_0xbc8302,_0x213836),_0x56114f['addColorStop'](0x1,_0x5b5343),_0x1ef213['fillStyle']=_0x56114f,_0x1ef213['beginPath'](),_0x1ef213['moveTo'](_0x427ba9,_0x5a7264),_0x1ef213[_0xf32475(0x2cf)](_0x5e41f7,_0xf9011),_0x1ef213[_0xf32475(0x23c)](_0x2d329e,_0x383fbd,_0x16d6e8,0x0,_0x5ddf7d),_0x1ef213[_0xf32475(0x2cf)](_0x55dcfd,_0x1adf33),_0x1ef213[_0xf32475(0x1ef)](),_0x1ef213[_0xf32475(0x1d5)](),_0x1ef213[_0xf32475(0x21c)](),this[_0xf32475(0x225)][_0xf32475(0x329)]();}}_0xf281fa[_0xf32475(0x182)]=![];if(ImageManager[_0xf32475(0x24b)])console[_0xf32475(0x47b)](_0xf32475(0x267));return this[_0xf32475(0x12d)]=this['_cached_WeatherEffects_Storm']||[],this['_cached_WeatherEffects_Storm']['push'](_0xf281fa),_0xf281fa;},ImageManager[_0x5da319(0x42c)]=function(){const _0x3f3514=_0x5da319;if(this['_cached_WeatherEffects_Snow']&&this['_cached_WeatherEffects_Snow'][_0x3f3514(0x2e9)]>=ImageManager[_0x3f3514(0x302)]){const _0x4b332e=this['_cached_WeatherEffects_Snow'];return _0x4b332e[Math['floor'](Math[_0x3f3514(0x398)]()*_0x4b332e['length'])];}const _0x3fa9e5=new Bitmap(0x1f4,0x1f4),_0x463076=_0x3fa9e5['width'],_0x83ebd9=_0x3fa9e5[_0x3f3514(0x42b)],_0x4fa2c3=0x5;let _0x1e2018=0x10;while(_0x1e2018--){if(_0x3f3514(0x264)!==_0x3f3514(0x36e)){const _0x427481=Math[_0x3f3514(0x17f)](_0x463076-_0x4fa2c3*0x2)+_0x4fa2c3,_0x56fdf6=Math['randomInt'](_0x83ebd9-_0x4fa2c3*0x2)+_0x4fa2c3,_0x147539=Math['randomInt'](_0x4fa2c3)+0x1;_0x3fa9e5[_0x3f3514(0x222)]=Math[_0x3f3514(0x17f)](0x40)+0xc0,_0x3fa9e5[_0x3f3514(0x44f)](_0x427481,_0x56fdf6,_0x147539,_0x3f3514(0x41e));}else _0x572b5d[_0x3f3514(0x556)](_0x532aae,_0x52b55c),_0x20d763[_0x3f3514(0x297)]=_0x3f3514(0x2b8),_0x573051[_0x3f3514(0x3a2)][_0x3f3514(0x3d1)](_0x3a4503);}_0x3fa9e5[_0x3f3514(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3f3514(0x47b)](_0x3f3514(0x448));return this[_0x3f3514(0x4c1)]=this[_0x3f3514(0x4c1)]||[],this[_0x3f3514(0x4c1)][_0x3f3514(0x28e)](_0x3fa9e5),_0x3fa9e5;},ImageManager[_0x5da319(0x207)]=function(){const _0x32d245=_0x5da319;if(this['_cached_WeatherEffects_Blizzard']&&this['_cached_WeatherEffects_Blizzard'][_0x32d245(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x359258=this[_0x32d245(0x4da)];return _0x359258[Math['floor'](Math['random']()*_0x359258[_0x32d245(0x2e9)])];}const _0x48929b=new Bitmap(0x1f4,0x1f4),_0x19d90b=_0x48929b['width'],_0x579072=_0x48929b['height'],_0x3c3f28=0x8;let _0x6f04b3=0x20;while(_0x6f04b3--){const _0x3a0e26=Math[_0x32d245(0x17f)](_0x19d90b-_0x3c3f28*0x2)+_0x3c3f28,_0x219cc9=Math[_0x32d245(0x17f)](_0x579072-_0x3c3f28*0x2)+_0x3c3f28,_0x56f750=Math[_0x32d245(0x17f)](_0x3c3f28)+0x1;_0x48929b[_0x32d245(0x222)]=Math['randomInt'](0x40)+0xc0,_0x48929b[_0x32d245(0x44f)](_0x3a0e26,_0x219cc9,_0x56f750,_0x32d245(0x41e));}_0x48929b[_0x32d245(0x182)]=![];if(ImageManager[_0x32d245(0x24b)])console[_0x32d245(0x47b)](_0x32d245(0x3fb));return this[_0x32d245(0x4da)]=this[_0x32d245(0x4da)]||[],this[_0x32d245(0x4da)]['push'](_0x48929b),_0x48929b;},ImageManager['weatherEffectsBubbles']=function(){const _0x2ae8fd=_0x5da319;if(this['_cached_WeatherEffects_Bubbles']&&this[_0x2ae8fd(0x513)][_0x2ae8fd(0x2e9)]>=ImageManager[_0x2ae8fd(0x302)]){const _0x2f6436=this[_0x2ae8fd(0x513)];return _0x2f6436[Math[_0x2ae8fd(0x441)](Math[_0x2ae8fd(0x398)]()*_0x2f6436[_0x2ae8fd(0x2e9)])];}const _0x30e4f7=new Bitmap(0x1f4,0x1f4),_0x2abdaa=_0x30e4f7[_0x2ae8fd(0x16e)],_0x2ca89f=_0x30e4f7[_0x2ae8fd(0x42b)],_0x5666fe=0xc;let _0x1ebcb0=0x10;while(_0x1ebcb0--){if(_0x2ae8fd(0x46a)!==_0x2ae8fd(0x3ed)){const _0x5725ff=Math['randomInt'](_0x2abdaa-_0x5666fe*0x2)+_0x5666fe,_0x6b5324=Math[_0x2ae8fd(0x17f)](_0x2ca89f-_0x5666fe*0x2)+_0x5666fe,_0x35d7e6=Math[_0x2ae8fd(0x17f)](_0x5666fe/0x2)+_0x5666fe/0x2;_0x30e4f7[_0x2ae8fd(0x222)]=Math[_0x2ae8fd(0x17f)](0x40)+0xc0,_0x30e4f7[_0x2ae8fd(0x44f)](_0x5725ff,_0x6b5324,_0x35d7e6,_0x2ae8fd(0x3c3)),_0x30e4f7['clearCircle'](_0x5725ff,_0x6b5324,_0x35d7e6-0x2),_0x30e4f7[_0x2ae8fd(0x44f)](_0x5725ff+_0x35d7e6/0x3,_0x6b5324-_0x35d7e6/0x3,_0x35d7e6/0x3,_0x2ae8fd(0x41e));}else _0x1d66d4[_0x2ae8fd(0x2c2)]['createWeather'][_0x2ae8fd(0x481)](this);}_0x30e4f7[_0x2ae8fd(0x182)]=![];if(ImageManager[_0x2ae8fd(0x24b)])console[_0x2ae8fd(0x47b)](_0x2ae8fd(0x20d));return this[_0x2ae8fd(0x513)]=this[_0x2ae8fd(0x513)]||[],this['_cached_WeatherEffects_Bubbles']['push'](_0x30e4f7),_0x30e4f7;},ImageManager[_0x5da319(0x324)]=function(){const _0x547ee2=_0x5da319;if(this[_0x547ee2(0x356)]&&ColorManager[_0x547ee2(0x1c2)][_0x547ee2(0x2e9)]<=0x0){const _0x4b54c9=this[_0x547ee2(0x356)];return _0x4b54c9[Math['floor'](Math[_0x547ee2(0x398)]()*_0x4b54c9[_0x547ee2(0x2e9)])];}const _0x2d5a9a=new Bitmap(0x18,0x18),_0x18d587=ColorManager[_0x547ee2(0x1c2)][_0x547ee2(0x46b)]();_0x2d5a9a[_0x547ee2(0x10e)](0xc,0xc,_0x18d587,_0x18d587,0x5,0xc,0x6),_0x2d5a9a['_customModified']=![];if(ImageManager[_0x547ee2(0x24b)])console[_0x547ee2(0x47b)](_0x547ee2(0x399));return this[_0x547ee2(0x356)]=this['_cached_WeatherEffects_Stars']||[],this[_0x547ee2(0x356)][_0x547ee2(0x28e)](_0x2d5a9a),_0x2d5a9a;},ImageManager['weatherEffectsSnowflakes']=function(){const _0x3b0ebe=_0x5da319;if(this['_cached_WeatherEffects_Snowflakes']&&this[_0x3b0ebe(0x1ca)][_0x3b0ebe(0x2e9)]>=ImageManager[_0x3b0ebe(0x302)]){const _0x569b96=this[_0x3b0ebe(0x1ca)];return _0x569b96[Math[_0x3b0ebe(0x441)](Math['random']()*_0x569b96['length'])];}const _0x35f6f0=new Bitmap(0x64,0x64);_0x35f6f0[_0x3b0ebe(0x576)](),_0x35f6f0[_0x3b0ebe(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3b0ebe(0x47b)](_0x3b0ebe(0x549));return this[_0x3b0ebe(0x1ca)]=this[_0x3b0ebe(0x1ca)]||[],this[_0x3b0ebe(0x1ca)][_0x3b0ebe(0x28e)](_0x35f6f0),_0x35f6f0;},ImageManager[_0x5da319(0x39a)]=function(){const _0x895e57=_0x5da319;if(this[_0x895e57(0x321)]&&this[_0x895e57(0x321)][_0x895e57(0x2e9)]>=ImageManager[_0x895e57(0x302)]){if(_0x895e57(0x411)!==_0x895e57(0x411))_0x5b4581['ConvertParams'](_0x549c8b,_0x5edc2a),_0x5340dc[_0x895e57(0x297)]=_0x895e57(0x366),_0x4e8d8b[_0x895e57(0x3a2)][_0x895e57(0x3d1)](_0x420bc8);else{const _0x3135c2=this[_0x895e57(0x321)];return _0x3135c2[Math[_0x895e57(0x441)](Math[_0x895e57(0x398)]()*_0x3135c2[_0x895e57(0x2e9)])];}}const _0x3b5c05=ColorManager[_0x895e57(0x1d1)][_0x895e57(0x24c)](),_0x120b22=1.5,_0x1a1543=ColorManager['adjustHexColor'](_0x3b5c05[Math[_0x895e57(0x441)](Math['random']()*_0x3b5c05[_0x895e57(0x2e9)])],_0x120b22),_0x29ac4f=ColorManager[_0x895e57(0x14a)](_0x3b5c05[Math['floor'](Math[_0x895e57(0x398)]()*_0x3b5c05[_0x895e57(0x2e9)])],_0x120b22),_0x2f2576=ColorManager[_0x895e57(0x14a)](_0x3b5c05[Math['floor'](Math['random']()*_0x3b5c05[_0x895e57(0x2e9)])],_0x120b22),_0x1050c5=new Bitmap(0x1f4,0x1f4);_0x1050c5['drawCloud'](0xfa,0x15e,0x4b,_0x1a1543,0x4,0x14),_0x1050c5[_0x895e57(0x20e)](0xfa,0xfa,0x64,_0x2f2576,0x8,0x19),_0x1050c5[_0x895e57(0x20e)](0xfa,0xfa,0x3c,_0x29ac4f,0x4,0x14);const _0xd5cd65=_0x1050c5[_0x895e57(0x16e)],_0x160b92=_0x1050c5[_0x895e57(0x42b)],_0x2d450e=0x2;let _0x2cba7e=0x40;while(_0x2cba7e--){const _0x38a763=Math['randomInt'](_0xd5cd65-_0x2d450e*0x2)+_0x2d450e,_0xf94817=Math[_0x895e57(0x17f)](_0x160b92-_0x2d450e*0x2)+_0x2d450e;let _0x2f5b40=_0x3b5c05[Math[_0x895e57(0x441)](Math['random']()*_0x3b5c05[_0x895e57(0x2e9)])];_0x2f5b40=ColorManager[_0x895e57(0x14a)](_0x2f5b40,_0x120b22);const _0xb12c52=Math['randomInt'](_0x2d450e)+0x1;_0x1050c5[_0x895e57(0x222)]=Math[_0x895e57(0x17f)](0x40)+0xa0,_0x1050c5[_0x895e57(0x44f)](_0x38a763,_0xf94817,_0xb12c52,_0x2f5b40);}_0x1050c5[_0x895e57(0x182)]=![];if(ImageManager[_0x895e57(0x24b)])console[_0x895e57(0x47b)]('sandstorm');return this[_0x895e57(0x321)]=this[_0x895e57(0x321)]||[],this['_cached_WeatherEffects_Sandstorm'][_0x895e57(0x28e)](_0x1050c5),_0x1050c5;},ImageManager['weatherEffectsEmbers']=function(){const _0x22c92e=_0x5da319;if(this[_0x22c92e(0x454)]&&this['_cached_WeatherEffects_Embers'][_0x22c92e(0x2e9)]>=ImageManager[_0x22c92e(0x302)]){const _0x359656=this['_cached_WeatherEffects_Embers'];return _0x359656[Math[_0x22c92e(0x441)](Math['random']()*_0x359656[_0x22c92e(0x2e9)])];}const _0x62660d=new Bitmap(0x1f4,0x1f4),_0x2587c3=_0x62660d[_0x22c92e(0x16e)],_0x36804c=_0x62660d[_0x22c92e(0x42b)],_0x42e923=0x10;let _0xc80ac4=0x10;while(_0xc80ac4--){const _0x2e7b5f=Math[_0x22c92e(0x17f)](_0x2587c3-_0x42e923*0x2)+_0x42e923,_0x4a951e=Math[_0x22c92e(0x17f)](_0x36804c-_0x42e923*0x2)+_0x42e923,_0x14b931=Math[_0x22c92e(0x17f)](_0x42e923/0x2)+0x2,_0x4cf5fd=ColorManager[_0x22c92e(0x56a)]([0xff,Math[_0x22c92e(0x17f)](0x46),0x0]);_0x62660d[_0x22c92e(0x222)]=Math[_0x22c92e(0x17f)](0x40),_0x62660d[_0x22c92e(0x44f)](_0x2e7b5f,_0x4a951e,_0x14b931,_0x4cf5fd),_0x62660d['paintOpacity']=Math['randomInt'](0x40)+0x40,_0x62660d['drawCircle'](_0x2e7b5f,_0x4a951e,_0x14b931/0x2,_0x4cf5fd),_0x62660d['paintOpacity']=Math['randomInt'](0x40)+0xc0;const _0x4fd2dc=ColorManager[_0x22c92e(0x56a)]([0xff,Math[_0x22c92e(0x17f)](0x46)+0xb9,0x0]);_0x62660d[_0x22c92e(0x44f)](_0x2e7b5f,_0x4a951e,_0x14b931/0x4,_0x4fd2dc),_0x62660d[_0x22c92e(0x44f)](_0x2e7b5f,_0x4a951e,_0x14b931/0x8,_0x22c92e(0x29b));}_0x62660d[_0x22c92e(0x182)]=![];if(ImageManager[_0x22c92e(0x24b)])console[_0x22c92e(0x47b)](_0x22c92e(0x3de));return this[_0x22c92e(0x454)]=this[_0x22c92e(0x454)]||[],this['_cached_WeatherEffects_Embers'][_0x22c92e(0x28e)](_0x62660d),_0x62660d;},ImageManager['weatherEffectsAshDebris']=function(){const _0x32745d=_0x5da319;if(this[_0x32745d(0x282)]&&this[_0x32745d(0x282)][_0x32745d(0x2e9)]>=ImageManager[_0x32745d(0x302)]){if(_0x32745d(0x113)===_0x32745d(0x26b)){const _0x3dc557=this[_0x32745d(0x4b7)];return _0x3dc557[_0x20bde0['floor'](_0x5d7706[_0x32745d(0x398)]()*_0x3dc557['length'])];}else{const _0x5816cb=this[_0x32745d(0x282)];return _0x5816cb[Math[_0x32745d(0x441)](Math[_0x32745d(0x398)]()*_0x5816cb[_0x32745d(0x2e9)])];}}const _0xcd829c=new Bitmap(0x12,0x12),_0x3dac83=_0xcd829c[_0x32745d(0x16e)],_0x51e0a9=_0xcd829c['height'],_0x56578d=_0x3dac83/0x2-0x2,_0x1426ba=_0x51e0a9/0x2-0x2,_0x57a22f=[];_0x57a22f[_0x32745d(0x28e)](Math['randomInt'](_0x56578d)+0x2,Math['randomInt'](_0x1426ba)+0x2),_0x57a22f[_0x32745d(0x28e)](_0x3dac83-Math[_0x32745d(0x17f)](_0x56578d)-0x2,Math[_0x32745d(0x17f)](_0x1426ba)+0x2),_0x57a22f[_0x32745d(0x28e)](_0x3dac83-Math[_0x32745d(0x17f)](_0x56578d)-0x2,_0x51e0a9-Math[_0x32745d(0x17f)](_0x1426ba)-0x2),_0x57a22f[_0x32745d(0x28e)](Math[_0x32745d(0x17f)](_0x56578d)+0x2,_0x51e0a9-Math[_0x32745d(0x17f)](_0x1426ba)-0x2);const _0x5ca3fd=ColorManager['WEATHER_ASH_COLORS'][_0x32745d(0x24c)](),_0x5f21e1=_0x5ca3fd[Math['floor'](Math[_0x32745d(0x398)]()*_0x5ca3fd['length'])];_0xcd829c[_0x32745d(0x48e)](_0x57a22f,_0x5f21e1,'black',0x2,0xff,![]),_0xcd829c['_customModified']=![];if(ImageManager[_0x32745d(0x24b)])console[_0x32745d(0x47b)](_0x32745d(0x1f1));return this[_0x32745d(0x282)]=this[_0x32745d(0x282)]||[],this[_0x32745d(0x282)]['push'](_0xcd829c),_0xcd829c;},ImageManager[_0x5da319(0x32e)]=function(){const _0x3b5ab5=_0x5da319;if(this['_cached_WeatherEffects_Firestorm']&&this[_0x3b5ab5(0x4bb)][_0x3b5ab5(0x2e9)]>=ImageManager[_0x3b5ab5(0x302)]){const _0x3538f1=this[_0x3b5ab5(0x4bb)];return _0x3538f1[Math[_0x3b5ab5(0x441)](Math[_0x3b5ab5(0x398)]()*_0x3538f1['length'])];}const _0x1a8c12=new Bitmap(0x1f4,0x1f4),_0x3c4f55=_0x1a8c12[_0x3b5ab5(0x16e)],_0x139cf6=_0x1a8c12[_0x3b5ab5(0x42b)],_0x53f609=0xc,_0x542e1a=0x64;let _0x3df380=0x4;while(_0x3df380--){const _0x1b8e11=Math[_0x3b5ab5(0x17f)](_0x3c4f55-_0x542e1a*0x2)+_0x542e1a*0x1,_0x45c8d3=Math['randomInt'](_0x139cf6-_0x53f609*0x8)+_0x53f609*0x4,_0x533a24=Math[_0x3b5ab5(0x17f)](_0x53f609*0x2/0x5)+_0x53f609*0x2/0x5,_0xaf2b0c=Math[_0x3b5ab5(0x17f)](_0x542e1a*0x1/0x3)+_0x542e1a*0x2/0x3;_0x1a8c12[_0x3b5ab5(0x437)](_0x1b8e11,_0x45c8d3,_0x533a24,_0xaf2b0c);}_0x1a8c12[_0x3b5ab5(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3b5ab5(0x47b)](_0x3b5ab5(0xf8));return this['_cached_WeatherEffects_Firestorm']=this[_0x3b5ab5(0x4bb)]||[],this['_cached_WeatherEffects_Firestorm'][_0x3b5ab5(0x28e)](_0x1a8c12),_0x1a8c12;},ImageManager[_0x5da319(0x430)]=function(){const _0x100db6=_0x5da319;if(this[_0x100db6(0x4c7)]&&this[_0x100db6(0x4c7)][_0x100db6(0x2e9)]>=ImageManager[_0x100db6(0x302)]){if(_0x100db6(0x12c)!==_0x100db6(0x12c)){let _0x12dcc7=_0x4314c1[_0x100db6(0x3a2)]['Scene_Options_maxCommands']['call'](this);const _0xadd492=_0x49b726[_0x100db6(0x3a2)]['Settings']['Options'];if(_0xadd492[_0x100db6(0x2a9)]&&_0xadd492['AdjustRect'])_0x12dcc7++;return _0x12dcc7;}else{const _0x9e0483=this[_0x100db6(0x4c7)];return _0x9e0483[Math[_0x100db6(0x441)](Math[_0x100db6(0x398)]()*_0x9e0483[_0x100db6(0x2e9)])];}}const _0x1a48f0=ColorManager['WEATHER_FIREFLY_COLORS'][_0x100db6(0x24c)](),_0x286741=_0x1a48f0[Math[_0x100db6(0x441)](Math[_0x100db6(0x398)]()*_0x1a48f0[_0x100db6(0x2e9)])];let _0x406f5d=Math['randomInt'](0x10)+0x10;if(_0x406f5d%0x2!==0x0)_0x406f5d+=0x1;const _0x407e27=new Bitmap(_0x406f5d,_0x406f5d),_0x5ea154=Math['floor'](_0x406f5d/0x2);_0x407e27[_0x100db6(0x2c4)](_0x5ea154,_0x5ea154,_0x5ea154,0x168,_0x286741,0x0,0x1,0x0),_0x407e27[_0x100db6(0x2b2)](_0x5ea154-0x1,_0x5ea154-0x1,0x2,0x2,_0x286741),_0x407e27['_customModified']=![];if(ImageManager[_0x100db6(0x24b)])console[_0x100db6(0x47b)]('fireflies');return this[_0x100db6(0x4c7)]=this[_0x100db6(0x4c7)]||[],this['_cached_WeatherEffects_Fireflies']['push'](_0x407e27),_0x407e27;},ImageManager[_0x5da319(0x141)]=function(){const _0x309384=_0x5da319;if(this['_cached_WeatherEffects_Thunderbolt']&&this['_cached_WeatherEffects_Thunderbolt']['length']>=ImageManager[_0x309384(0x302)]*0x3){const _0x452cb8=this[_0x309384(0x238)];return _0x452cb8[Math[_0x309384(0x441)](Math[_0x309384(0x398)]()*_0x452cb8[_0x309384(0x2e9)])];}const _0x2525e5=Math['max']($dataSystem[_0x309384(0x1f3)][_0x309384(0x217)],$dataSystem[_0x309384(0x1f3)][_0x309384(0x2c5)])||0x1,_0x5bda98=new Bitmap(_0x2525e5,_0x2525e5);_0x5bda98[_0x309384(0x4ff)](),_0x5bda98['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x309384(0x47b)](_0x309384(0x27a));return this[_0x309384(0x238)]=this[_0x309384(0x238)]||[],this['_cached_WeatherEffects_Thunderbolt'][_0x309384(0x28e)](_0x5bda98),_0x5bda98;},ImageManager[_0x5da319(0x435)]=function(){const _0x46b03a=_0x5da319;if(this[_0x46b03a(0x4dd)]&&this[_0x46b03a(0x4dd)][_0x46b03a(0x2e9)]>=ImageManager[_0x46b03a(0x302)]){if(_0x46b03a(0x1c5)!==_0x46b03a(0x1c5)){const _0xf7689e=this[_0x46b03a(0x3db)](_0x42ec18,_0x82ef7a),_0x5ccc6c=_0x532aa0?_0x46b03a(0x444):'upper';this[_0x46b03a(0x577)]=this[_0x46b03a(0x577)]||{'lower':[],'upper':[]},this[_0x46b03a(0x577)][_0x5ccc6c][_0x1c650c]=_0x6700fa['parse'](_0x4be5f1[_0x46b03a(0x45a)](_0xf7689e));}else{const _0x1e93c2=this[_0x46b03a(0x4dd)];return _0x1e93c2[Math[_0x46b03a(0x441)](Math[_0x46b03a(0x398)]()*_0x1e93c2[_0x46b03a(0x2e9)])];}}const _0x2f2426=ColorManager[_0x46b03a(0x1e8)][_0x46b03a(0x24c)](),_0x1c55c1=new Bitmap(0x1f4,0x1f4),_0x3572f6=_0x1c55c1[_0x46b03a(0x16e)],_0x28646a=_0x1c55c1[_0x46b03a(0x42b)],_0x40260b=0x5;let _0x1c491e=0x8;while(_0x1c491e--){if(_0x46b03a(0x226)===_0x46b03a(0x226)){const _0x2fff2b=Math[_0x46b03a(0x17f)](_0x3572f6-_0x40260b*0x2)+_0x40260b,_0x1ac91d=Math[_0x46b03a(0x17f)](_0x28646a-_0x40260b*0x2)+_0x40260b,_0x295d09=Math[_0x46b03a(0x17f)](_0x40260b)+0x1,_0x58bd9e=_0x2f2426[Math[_0x46b03a(0x441)](Math[_0x46b03a(0x398)]()*_0x2f2426[_0x46b03a(0x2e9)])];_0x1c55c1['paintOpacity']=Math[_0x46b03a(0x17f)](0x40)+0xc0,_0x1c55c1['drawCircle'](_0x2fff2b,_0x1ac91d,_0x295d09,_0x58bd9e);}else _0x15f433[_0x46b03a(0x556)](_0x5069bd,_0x41530f),_0xfd3b60[_0x46b03a(0x297)]=_0x46b03a(0x224),_0x5d7bfb[_0x46b03a(0x3a2)][_0x46b03a(0x3d1)](_0x10e966);}_0x1c55c1[_0x46b03a(0x182)]=![];if(ImageManager[_0x46b03a(0x24b)])console[_0x46b03a(0x47b)](_0x46b03a(0x232));return this[_0x46b03a(0x4dd)]=this[_0x46b03a(0x4dd)]||[],this[_0x46b03a(0x4dd)][_0x46b03a(0x28e)](_0x1c55c1),_0x1c55c1;},ImageManager[_0x5da319(0x55b)]=function(){const _0x82fcca=_0x5da319;if(this[_0x82fcca(0x1f8)]&&this['_cached_WeatherEffects_Ashfall']['length']>=ImageManager[_0x82fcca(0x302)]){if(_0x82fcca(0x289)===_0x82fcca(0x289)){const _0x3b4842=this[_0x82fcca(0x1f8)];return _0x3b4842[Math[_0x82fcca(0x441)](Math[_0x82fcca(0x398)]()*_0x3b4842[_0x82fcca(0x2e9)])];}else{this['_respawnDelay']=this[_0x82fcca(0x2a0)][_0x82fcca(0x13f)];const _0x370a93=this[_0x82fcca(0x2a0)][_0x82fcca(0x1df)],_0x58d00c=this[_0x82fcca(0x309)]()['power'],_0x36500c=_0x15fc2d[_0x82fcca(0x17f)](_0x370a93*_0x58d00c);this[_0x82fcca(0x1d8)]+=_0x36500c;}}const _0x44a259=new Bitmap(0x18,0x18),_0x45c4b3=_0x44a259['width'],_0x17fe83=_0x44a259[_0x82fcca(0x42b)],_0x12c57a=_0x45c4b3/0x2-0x2,_0x4eab1c=_0x17fe83/0x2-0x2,_0x2fcdb5=[];_0x2fcdb5['push'](Math['randomInt'](_0x12c57a)+0x2,Math[_0x82fcca(0x17f)](_0x4eab1c)+0x2),_0x2fcdb5[_0x82fcca(0x28e)](_0x45c4b3-Math[_0x82fcca(0x17f)](_0x12c57a)-0x2,Math[_0x82fcca(0x17f)](_0x4eab1c)+0x2),_0x2fcdb5['push'](_0x45c4b3-Math['randomInt'](_0x12c57a)-0x2,_0x17fe83-Math[_0x82fcca(0x17f)](_0x4eab1c)-0x2),_0x2fcdb5[_0x82fcca(0x28e)](Math['randomInt'](_0x12c57a)+0x2,_0x17fe83-Math[_0x82fcca(0x17f)](_0x4eab1c)-0x2);const _0x3191a5=ColorManager['WEATHER_ASH_COLORS']['clone'](),_0x3cec32=_0x3191a5[Math[_0x82fcca(0x441)](Math[_0x82fcca(0x398)]()*_0x3191a5[_0x82fcca(0x2e9)])];_0x44a259['drawMultiPointPolygon'](_0x2fcdb5,_0x3cec32,_0x82fcca(0x298),0x2,0xff,![]),_0x44a259['_customModified']=![];if(ImageManager[_0x82fcca(0x24b)])console[_0x82fcca(0x47b)](_0x82fcca(0x158));return this[_0x82fcca(0x1f8)]=this[_0x82fcca(0x1f8)]||[],this[_0x82fcca(0x1f8)][_0x82fcca(0x28e)](_0x44a259),_0x44a259;},ImageManager[_0x5da319(0x203)]=function(){const _0x37ad47=_0x5da319;if(this[_0x37ad47(0x21a)]&&this[_0x37ad47(0x21a)]['length']>=ImageManager[_0x37ad47(0x302)]){if(_0x37ad47(0x257)!=='blAfQ'){const _0x1b4339=_0x126d50[_0x37ad47(0x17f)](_0x1c0b71-_0x358693*0x2)+_0xf5a1b6,_0x196a5f=_0x49bbf4[_0x37ad47(0x17f)](_0x2eb6a0-_0x45817a*0x2)+_0x59b197;let _0x451898=_0x29568e[_0x3a9717[_0x37ad47(0x441)](_0x226cb6[_0x37ad47(0x398)]()*_0x5c0e58['length'])];_0x451898=_0x3aeb53[_0x37ad47(0x14a)](_0x451898,_0x23a02c),_0x33725a[_0x37ad47(0x222)]=_0x210106['randomInt'](0x40)+0xc0,_0x436893[_0x37ad47(0x10e)](_0x1b4339,_0x196a5f,_0x451898,_0x451898,0x4,_0x177128,_0x2a8738/0x2);}else{const _0x397c36=this[_0x37ad47(0x21a)];return _0x397c36[Math[_0x37ad47(0x441)](Math[_0x37ad47(0x398)]()*_0x397c36[_0x37ad47(0x2e9)])];}}const _0x12f1d7=new Bitmap(0x258,0xc8),_0x57d45d=_0x12f1d7[_0x37ad47(0x16e)],_0x5608b2=_0x12f1d7[_0x37ad47(0x42b)],_0x1762b8=0x40;let _0x4c8394=0x40;while(_0x4c8394--){const _0x35890b=Math[_0x37ad47(0x17f)](_0x57d45d-_0x1762b8*0x2)+_0x1762b8,_0x3554d7=Math[_0x37ad47(0x17f)](_0x5608b2-_0x1762b8*0x2)+_0x1762b8,_0x1ba277=Math[_0x37ad47(0x17f)](_0x1762b8/0x2)+0x2,_0x140542=ColorManager[_0x37ad47(0x56a)]([0xff,Math[_0x37ad47(0x17f)](0x46),0x0]);_0x12f1d7[_0x37ad47(0x222)]=Math[_0x37ad47(0x17f)](0x40),_0x12f1d7[_0x37ad47(0x44f)](_0x35890b,_0x3554d7,_0x1ba277,_0x140542),_0x12f1d7['paintOpacity']=Math[_0x37ad47(0x17f)](0x40)+0x40,_0x12f1d7[_0x37ad47(0x44f)](_0x35890b,_0x3554d7,_0x1ba277/0x2,_0x140542),_0x12f1d7[_0x37ad47(0x222)]=Math[_0x37ad47(0x17f)](0x40)+0xc0;const _0x54f46a=ColorManager['arrayToHex']([0xff,Math['randomInt'](0x46)+0xb9,0x0]);_0x12f1d7[_0x37ad47(0x44f)](_0x35890b,_0x3554d7,_0x1ba277/0x4,_0x54f46a),_0x12f1d7['drawCircle'](_0x35890b,_0x3554d7,_0x1ba277/0x8,'yellow'),_0x12f1d7['drawCircle'](_0x35890b,_0x3554d7,_0x1ba277/0xa,_0x37ad47(0x41e));}_0x12f1d7[_0x37ad47(0x182)]=![];if(ImageManager[_0x37ad47(0x24b)])console[_0x37ad47(0x47b)](_0x37ad47(0x572));return this[_0x37ad47(0x21a)]=this[_0x37ad47(0x21a)]||[],this['_cached_WeatherEffects_FlameWall'][_0x37ad47(0x28e)](_0x12f1d7),_0x12f1d7;},ImageManager[_0x5da319(0x2fa)]=function(){const _0x2e8aca=_0x5da319;if(this['_cached_WeatherEffects_AutumnLeaves']&&ColorManager['WEATHER_AUTUMN_LEAVES_COLORS']['length']<=0x0){if(_0x2e8aca(0x304)!==_0x2e8aca(0x4a5)){const _0x5807d7=this[_0x2e8aca(0x3bd)];return _0x5807d7[Math[_0x2e8aca(0x441)](Math[_0x2e8aca(0x398)]()*_0x5807d7[_0x2e8aca(0x2e9)])];}else['upper',_0x2e8aca(0x15d)][_0x2e8aca(0x4e2)](_0x2fb262)&&_0x5ba410[_0x2e8aca(0x45d)](_0x357fc6,![],_0x168947),[_0x2e8aca(0x444),'both']['includes'](_0xe49596)&&_0x4273ab['adaptWeatherLayerData'](_0x11f22a,!![],_0x27a18a);}const _0x24f32d=ColorManager['WEATHER_AUTUMN_LEAVES_COLORS'][_0x2e8aca(0x46b)]();let _0x2efa8d=ColorManager[_0x2e8aca(0x213)](_0x24f32d);const _0x1e59a4=[];while(_0x1e59a4['length']<0x6){if(_0x2e8aca(0x151)===_0x2e8aca(0x151)){const _0x20d765=ColorManager[_0x2e8aca(0x56a)](_0x2efa8d);_0x1e59a4[_0x2e8aca(0x28e)](_0x20d765),_0x2efa8d=_0x2efa8d['map'](_0x105e59=>Math['ceil'](_0x105e59*0.85)['clamp'](0x0,0xff));}else{const _0xd8f19c=this[_0x2e8aca(0x213)](_0x479e6b)[_0x2e8aca(0x57d)](_0x160c79=>_0xd8db43['ceil']((_0x741d7a(_0x160c79)||0x0)*_0x4dfd7a)[_0x2e8aca(0x485)](0x0,0xff));return this['arrayToHex'](_0xd8f19c);}}_0x1e59a4['reverse'](),_0x1e59a4[_0x2e8aca(0x28e)](_0x1e59a4[_0x2e8aca(0x1f6)]()),_0x1e59a4[_0x2e8aca(0x28e)](_0x1e59a4['shift']());const _0x16284c=new Bitmap(0x64,0x60);_0x16284c[_0x2e8aca(0x3ef)](_0x1e59a4),_0x16284c[_0x2e8aca(0x182)]=![];if(ImageManager[_0x2e8aca(0x24b)])console['log']('autumnleaves');return this[_0x2e8aca(0x3bd)]=this[_0x2e8aca(0x3bd)]||[],this[_0x2e8aca(0x3bd)]['push'](_0x16284c),_0x16284c;},ImageManager[_0x5da319(0x52c)]=function(){const _0x593670=_0x5da319;if(this[_0x593670(0x34d)]&&this[_0x593670(0x34d)][_0x593670(0x2e9)]>=ImageManager[_0x593670(0x302)]){if(_0x593670(0x2ff)===_0x593670(0x4ad))return _0x1dce5e[_0x593670(0x398)]()*_0xa42a5b+_0x1b0ab0[_0x593670(0x398)]()*_0x35ade2-_0x1ca24b;else{const _0x524bfb=this[_0x593670(0x34d)];return _0x524bfb[Math[_0x593670(0x441)](Math[_0x593670(0x398)]()*_0x524bfb['length'])];}}const _0x99d8f0=ColorManager['WEATHER_SAKURA1_COLORS'],_0x4dcc12=ColorManager['WEATHER_SAKURA2_COLORS'],_0x37bb1a=ColorManager['WEATHER_SAKURA3_COLORS'],_0x58fae1=_0x99d8f0[Math[_0x593670(0x441)](Math[_0x593670(0x398)]()*_0x99d8f0[_0x593670(0x2e9)])],_0x1e9b27=_0x4dcc12[Math[_0x593670(0x441)](Math[_0x593670(0x398)]()*_0x4dcc12[_0x593670(0x2e9)])],_0x3293c1=_0x37bb1a[Math[_0x593670(0x441)](Math[_0x593670(0x398)]()*_0x37bb1a[_0x593670(0x2e9)])],_0x1da1a5=new Bitmap(0x34,0x23);_0x1da1a5[_0x593670(0x2e2)](_0x58fae1,_0x1e9b27,_0x3293c1),_0x1da1a5[_0x593670(0x182)]=![];if(ImageManager[_0x593670(0x24b)])console['log'](_0x593670(0x2d4));return this[_0x593670(0x34d)]=this['_cached_WeatherEffects_CherryBlossoms']||[],this[_0x593670(0x34d)][_0x593670(0x28e)](_0x1da1a5),_0x1da1a5;},ImageManager[_0x5da319(0x111)]=function(){const _0x2fafd6=_0x5da319;if(this[_0x2fafd6(0x547)]&&ColorManager['WEATHER_GREEN_LEAVES_COLORS'][_0x2fafd6(0x2e9)]<=0x0){if('GmrzM'!==_0x2fafd6(0x2c6))_0x46af40[_0x2fafd6(0x556)](_0x2a5925,_0x3cf61e),_0x2d0e2e[_0x2fafd6(0x297)]=_0x2fafd6(0x4c8),_0x39d57b[_0x2fafd6(0x3a2)][_0x2fafd6(0x3d1)](_0x456ead);else{const _0x3ae0af=this['_cached_WeatherEffects_GreenLeaves'];return _0x3ae0af[Math[_0x2fafd6(0x441)](Math[_0x2fafd6(0x398)]()*_0x3ae0af[_0x2fafd6(0x2e9)])];}}const _0x3aae53=ColorManager['WEATHER_GREEN_LEAVES_COLORS'][_0x2fafd6(0x46b)]();let _0x334cab=ColorManager[_0x2fafd6(0x213)](_0x3aae53);const _0xff9eed=[];while(_0xff9eed[_0x2fafd6(0x2e9)]<0x6){if('bbDDq'!==_0x2fafd6(0x3ac)){const _0x1114ed=new _0x3b88f8(0x10,0x8);_0x1114ed['fillRect'](0x0,0x0,0x10,0x8,_0x4b2e58),_0x1114ed[_0x2fafd6(0x2b2)](0x1,0x1,0xe,0x6,_0x39db0b),_0x1114ed[_0x2fafd6(0x182)]=![],this[_0x2fafd6(0x25b)][_0x2fafd6(0x28e)](_0x1114ed);}else{const _0x31adf3=ColorManager[_0x2fafd6(0x56a)](_0x334cab);_0xff9eed[_0x2fafd6(0x28e)](_0x31adf3),_0x334cab=_0x334cab[_0x2fafd6(0x57d)](_0x5dfe9=>Math[_0x2fafd6(0x340)](_0x5dfe9*0.85)[_0x2fafd6(0x485)](0x0,0xff));}}_0xff9eed[_0x2fafd6(0x529)](),_0xff9eed['push'](_0xff9eed['shift']()),_0xff9eed[_0x2fafd6(0x28e)](_0xff9eed['shift']());const _0xdf3b66=new Bitmap(0x64,0x60);_0xdf3b66[_0x2fafd6(0x393)](_0xff9eed),_0xdf3b66[_0x2fafd6(0x182)]=![];if(ImageManager[_0x2fafd6(0x24b)])console[_0x2fafd6(0x47b)](_0x2fafd6(0x116));return this[_0x2fafd6(0x547)]=this[_0x2fafd6(0x547)]||[],this[_0x2fafd6(0x547)][_0x2fafd6(0x28e)](_0xdf3b66),_0xdf3b66;},ImageManager[_0x5da319(0x25f)]=function(){const _0x5b7956=_0x5da319;if(this[_0x5b7956(0x270)]&&this[_0x5b7956(0x270)]['length']>=ImageManager[_0x5b7956(0x302)]){const _0x2e2f91=this['_cached_WeatherEffects_DandelionSeeds'];return _0x2e2f91[Math[_0x5b7956(0x441)](Math[_0x5b7956(0x398)]()*_0x2e2f91[_0x5b7956(0x2e9)])];}const _0x14ad01=ColorManager['WEATHER_DANDELION1_COLORS'],_0x1d3898=ColorManager[_0x5b7956(0x36b)],_0x556ecc=ColorManager[_0x5b7956(0x3bb)],_0x4635e3=_0x14ad01[Math[_0x5b7956(0x441)](Math['random']()*_0x14ad01[_0x5b7956(0x2e9)])],_0x30bfe7=_0x1d3898[Math['floor'](Math[_0x5b7956(0x398)]()*_0x1d3898[_0x5b7956(0x2e9)])],_0x5e088c=_0x556ecc[Math[_0x5b7956(0x441)](Math[_0x5b7956(0x398)]()*_0x556ecc[_0x5b7956(0x2e9)])],_0x81cb5f=new Bitmap(0x40,0x64);_0x81cb5f[_0x5b7956(0x4b6)](_0x4635e3,_0x30bfe7,_0x5e088c),_0x81cb5f[_0x5b7956(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x5b7956(0x47b)](_0x5b7956(0x1ff));return this[_0x5b7956(0x270)]=this[_0x5b7956(0x270)]||[],this[_0x5b7956(0x270)][_0x5b7956(0x28e)](_0x81cb5f),_0x81cb5f;},ImageManager[_0x5da319(0x4c3)]=function(){const _0x1086d8=_0x5da319;if(this['_cached_WeatherEffects_WhiteClouds']&&this[_0x1086d8(0x161)][_0x1086d8(0x2e9)]>=ImageManager[_0x1086d8(0x302)]){const _0x260b13=this['_cached_WeatherEffects_WhiteClouds'];return _0x260b13[Math[_0x1086d8(0x441)](Math[_0x1086d8(0x398)]()*_0x260b13['length'])];}const _0x420e86=ColorManager[_0x1086d8(0x129)],_0xcc9aae=ColorManager['WEATHER_CLOUD_BLUE_COLORS'],_0x41088e=ColorManager[_0x1086d8(0x564)],_0x4ad4f3=_0x420e86[Math[_0x1086d8(0x441)](Math[_0x1086d8(0x398)]()*_0x420e86['length'])],_0x57fc52=_0xcc9aae[Math[_0x1086d8(0x441)](Math[_0x1086d8(0x398)]()*_0xcc9aae[_0x1086d8(0x2e9)])],_0x2b7847=_0x41088e[Math[_0x1086d8(0x441)](Math[_0x1086d8(0x398)]()*_0x41088e[_0x1086d8(0x2e9)])],_0x58c525=new Bitmap(0x1f4,0x1f4);_0x58c525[_0x1086d8(0x20e)](0xfa,0x15e,0x4b,_0x4ad4f3,0x10,0x14),_0x58c525[_0x1086d8(0x20e)](0xfa,0xfa,0x64,_0x2b7847,0x40,0x19),_0x58c525[_0x1086d8(0x20e)](0xfa,0xfa,0x3c,_0x57fc52,0x10,0x14),_0x58c525[_0x1086d8(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x1086d8(0x47b)]('smokefog');return this[_0x1086d8(0x161)]=this['_cached_WeatherEffects_WhiteClouds']||[],this[_0x1086d8(0x161)]['push'](_0x58c525),_0x58c525;},ImageManager[_0x5da319(0x254)]=function(){const _0x18be19=_0x5da319;if(this[_0x18be19(0x1a8)]&&this[_0x18be19(0x1a8)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if('UhGkO'!=='oAJBP'){const _0x5e176c=this['_cached_WeatherEffects_SmokeFog'];return _0x5e176c[Math['floor'](Math[_0x18be19(0x398)]()*_0x5e176c[_0x18be19(0x2e9)])];}else{if(this[_0x18be19(0x510)]&&this[_0x18be19(0x510)][_0x18be19(0x2e9)]>=_0x874901[_0x18be19(0x302)]*0x3){const _0x3eecd7=this[_0x18be19(0x510)];return _0x3eecd7[_0x3d852a[_0x18be19(0x441)](_0x393b0['random']()*_0x3eecd7['length'])];}const _0x46aed7=_0x22d3fa['randomInt'](0x80)+0x80,_0xe9b38e=_0x59b57d['randomInt'](0x80)+0x80,_0x4cca77=_0x10321a[_0x18be19(0x17f)](0x80)+0x80,_0x2b37d0=_0x18be19(0x4d4)[_0x18be19(0x555)](_0x46aed7,_0xe9b38e,_0x4cca77),_0x755fe6=_0x18be19(0x31c)[_0x18be19(0x555)](_0x46aed7,_0xe9b38e,_0x4cca77),_0x352d29=_0x499060[_0x18be19(0x17f)](0x32)+0x32,_0x5afd72=0x4,_0x550cef=new _0x2bf35b(_0x352d29*0x2,_0x5afd72);_0x550cef['gradientFillRect'](0x0,0x0,_0x352d29,_0x5afd72,_0x2b37d0,_0x755fe6),_0x550cef[_0x18be19(0x182)]=![];if(_0x5bd4e2[_0x18be19(0x24b)])_0x1f7e8a[_0x18be19(0x47b)](_0x18be19(0x252));return this[_0x18be19(0x510)]=this[_0x18be19(0x510)]||[],this[_0x18be19(0x510)]['push'](_0x550cef),_0x550cef;}}const _0x31d035=ColorManager[_0x18be19(0x1e8)],_0x4aa9d6=_0x31d035[0x3],_0x28a68c=_0x31d035[0x2],_0x4926b7=_0x31d035[0x1],_0x3fc39e=new Bitmap(0x3e8,0x3e8);_0x3fc39e['drawCloud'](0x1f4,0x28a,0xaf,_0x4aa9d6,0x10,0x14),_0x3fc39e['drawCloud'](0x1f4,0x1f4,0xc8,_0x4926b7,0x40,0x19),_0x3fc39e[_0x18be19(0x20e)](0x1f4,0x15e,0xa0,_0x28a68c,0x10,0x14),_0x3fc39e[_0x18be19(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log']('smokefog');return this[_0x18be19(0x1a8)]=this[_0x18be19(0x1a8)]||[],this[_0x18be19(0x1a8)][_0x18be19(0x28e)](_0x3fc39e),_0x3fc39e;},ImageManager['weatherEffectsPollutionClouds']=function(){const _0x1821e1=_0x5da319;if(this[_0x1821e1(0x3ec)]&&this[_0x1821e1(0x3ec)][_0x1821e1(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x1821e1(0x37e)===_0x1821e1(0x37e)){const _0x580434=this[_0x1821e1(0x3ec)];return _0x580434[Math['floor'](Math[_0x1821e1(0x398)]()*_0x580434['length'])];}else{const _0x49bf84=this['_cached_WeatherEffects_DustClouds'];return _0x49bf84[_0x1134d6[_0x1821e1(0x441)](_0x2f2dc6['random']()*_0x49bf84[_0x1821e1(0x2e9)])];}}const _0x5c57bd=ColorManager[_0x1821e1(0x1d1)],_0x27bec7=0.75;let _0x4d9251=ColorManager['adjustHexColor'](_0x5c57bd[Math[_0x1821e1(0x441)](Math[_0x1821e1(0x398)]()*_0x5c57bd[_0x1821e1(0x2e9)])],_0x27bec7),_0x5dd80f=ColorManager[_0x1821e1(0x14a)](_0x5c57bd[Math[_0x1821e1(0x441)](Math['random']()*_0x5c57bd[_0x1821e1(0x2e9)])],_0x27bec7),_0x2839ea=ColorManager[_0x1821e1(0x14a)](_0x5c57bd[Math['floor'](Math['random']()*_0x5c57bd[_0x1821e1(0x2e9)])],_0x27bec7);const _0x32501a=new Bitmap(0x1f4,0x1f4);_0x32501a[_0x1821e1(0x20e)](0xfa,0x15e,0x4b,_0x4d9251,0x10,0x14),_0x32501a[_0x1821e1(0x20e)](0xfa,0xfa,0x64,_0x2839ea,0x40,0x19),_0x32501a[_0x1821e1(0x20e)](0xfa,0xfa,0x3c,_0x5dd80f,0x10,0x14),_0x32501a[_0x1821e1(0x182)]=![];if(ImageManager[_0x1821e1(0x24b)])console[_0x1821e1(0x47b)]('pollutionclouds');return this[_0x1821e1(0x3ec)]=this['_cached_WeatherEffects_PollutionClouds']||[],this[_0x1821e1(0x3ec)][_0x1821e1(0x28e)](_0x32501a),_0x32501a;},ImageManager[_0x5da319(0x166)]=function(){const _0x16b125=_0x5da319;if(this[_0x16b125(0x1db)]&&this['_cached_WeatherEffects_HeatClouds'][_0x16b125(0x2e9)]>=ImageManager[_0x16b125(0x302)]){if(_0x16b125(0x2df)!==_0x16b125(0x4e4)){const _0x24906e=this[_0x16b125(0x1db)];return _0x24906e[Math[_0x16b125(0x441)](Math['random']()*_0x24906e[_0x16b125(0x2e9)])];}else this['opacity']=0x0,this['anchor']['x']=0.5,this[_0x16b125(0x370)]['y']=0.5,this[_0x16b125(0x1d8)]=0x0;}const _0x550bd6=ColorManager[_0x16b125(0x36c)],_0x19165d=0.85;let _0x482c3a=ColorManager[_0x16b125(0x14a)](_0x550bd6[Math['floor'](Math[_0x16b125(0x398)]()*_0x550bd6['length'])],_0x19165d),_0x5189c5=ColorManager[_0x16b125(0x14a)](_0x550bd6[Math['floor'](Math[_0x16b125(0x398)]()*_0x550bd6[_0x16b125(0x2e9)])],_0x19165d),_0x138c20=ColorManager[_0x16b125(0x14a)](_0x550bd6[Math[_0x16b125(0x441)](Math[_0x16b125(0x398)]()*_0x550bd6[_0x16b125(0x2e9)])],_0x19165d);const _0x4e1372=new Bitmap(0x1f4,0x1f4);_0x4e1372['drawCloud'](0xfa,0x15e,0x4b,_0x482c3a,0x10,0x14),_0x4e1372[_0x16b125(0x20e)](0xfa,0xfa,0x64,_0x138c20,0x40,0x19),_0x4e1372[_0x16b125(0x20e)](0xfa,0xfa,0x3c,_0x5189c5,0x10,0x14),_0x4e1372['_customModified']=![];if(ImageManager[_0x16b125(0x24b)])console['log'](_0x16b125(0x558));return this[_0x16b125(0x1db)]=this[_0x16b125(0x1db)]||[],this[_0x16b125(0x1db)]['push'](_0x4e1372),_0x4e1372;},ImageManager[_0x5da319(0x4f8)]=function(){const _0x142c41=_0x5da319;if(this[_0x142c41(0x3eb)]&&this[_0x142c41(0x3eb)][_0x142c41(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x513ac4=this[_0x142c41(0x3eb)];return _0x513ac4[Math[_0x142c41(0x441)](Math[_0x142c41(0x398)]()*_0x513ac4[_0x142c41(0x2e9)])];}const _0x3d908f=ColorManager[_0x142c41(0x579)],_0x472d37=1.2;let _0x2c7504=ColorManager[_0x142c41(0x14a)](_0x3d908f[Math[_0x142c41(0x441)](Math[_0x142c41(0x398)]()*_0x3d908f[_0x142c41(0x2e9)])],_0x472d37),_0x1af229=ColorManager[_0x142c41(0x14a)](_0x3d908f[Math[_0x142c41(0x441)](Math[_0x142c41(0x398)]()*_0x3d908f[_0x142c41(0x2e9)])],_0x472d37),_0x4aad61=ColorManager[_0x142c41(0x14a)](_0x3d908f[Math[_0x142c41(0x441)](Math[_0x142c41(0x398)]()*_0x3d908f[_0x142c41(0x2e9)])],_0x472d37);const _0x342801=new Bitmap(0x1f4,0x1f4);_0x342801['drawCloud'](0xfa,0x15e,0x4b,_0x2c7504,0x10,0x14),_0x342801[_0x142c41(0x20e)](0xfa,0xfa,0x64,_0x4aad61,0x40,0x19),_0x342801[_0x142c41(0x20e)](0xfa,0xfa,0x3c,_0x1af229,0x10,0x14),_0x342801[_0x142c41(0x182)]=![];if(ImageManager[_0x142c41(0x24b)])console[_0x142c41(0x47b)](_0x142c41(0x30b));return this[_0x142c41(0x3eb)]=this[_0x142c41(0x3eb)]||[],this[_0x142c41(0x3eb)][_0x142c41(0x28e)](_0x342801),_0x342801;},ImageManager['weatherEffectsIceFog']=function(){const _0x141022=_0x5da319;if(this['_cached_WeatherEffects_IceFog']&&this[_0x141022(0x124)]['length']>=ImageManager[_0x141022(0x302)]){if(_0x141022(0x164)==='gNGhP'){if(this['_cached_WeatherEffects_DandelionSeeds']&&this[_0x141022(0x270)]['length']>=_0x473c62[_0x141022(0x302)]){const _0x12476b=this[_0x141022(0x270)];return _0x12476b[_0x384d9c['floor'](_0x51cffa['random']()*_0x12476b[_0x141022(0x2e9)])];}const _0x319113=_0x34ccf4['WEATHER_DANDELION1_COLORS'],_0x54210c=_0x4b7ca6[_0x141022(0x36b)],_0x4a6297=_0x55f66e['WEATHER_DANDELION3_COLORS'],_0x1b2af6=_0x319113[_0x314d97[_0x141022(0x441)](_0x5ae8be[_0x141022(0x398)]()*_0x319113[_0x141022(0x2e9)])],_0x124bac=_0x54210c[_0x529c5e[_0x141022(0x441)](_0x55f674[_0x141022(0x398)]()*_0x54210c[_0x141022(0x2e9)])],_0x48f66e=_0x4a6297[_0x2a350e[_0x141022(0x441)](_0x2e63b1[_0x141022(0x398)]()*_0x4a6297[_0x141022(0x2e9)])],_0x1d3ca2=new _0x5cdb36(0x40,0x64);_0x1d3ca2[_0x141022(0x4b6)](_0x1b2af6,_0x124bac,_0x48f66e),_0x1d3ca2['_customModified']=![];if(_0xfcb880['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x251e55[_0x141022(0x47b)](_0x141022(0x1ff));return this['_cached_WeatherEffects_DandelionSeeds']=this['_cached_WeatherEffects_DandelionSeeds']||[],this[_0x141022(0x270)][_0x141022(0x28e)](_0x1d3ca2),_0x1d3ca2;}else{const _0x382369=this[_0x141022(0x124)];return _0x382369[Math[_0x141022(0x441)](Math[_0x141022(0x398)]()*_0x382369[_0x141022(0x2e9)])];}}const _0x149eb2=ColorManager[_0x141022(0x579)],_0x3e4607=1.3;let _0x4d8195=ColorManager['adjustHexColor'](_0x149eb2[Math[_0x141022(0x441)](Math[_0x141022(0x398)]()*_0x149eb2[_0x141022(0x2e9)])],_0x3e4607),_0x261cc7=ColorManager['adjustHexColor'](_0x149eb2[Math[_0x141022(0x441)](Math[_0x141022(0x398)]()*_0x149eb2['length'])],_0x3e4607),_0x5c267f=ColorManager[_0x141022(0x14a)](_0x149eb2[Math['floor'](Math[_0x141022(0x398)]()*_0x149eb2[_0x141022(0x2e9)])],_0x3e4607);const _0x40d60c=new Bitmap(0x3e8,0x3e8);_0x40d60c[_0x141022(0x20e)](0x1f4,0x28a,0xaf,_0x4d8195,0x10,0x14),_0x40d60c[_0x141022(0x20e)](0x1f4,0x1f4,0xc8,_0x5c267f,0x40,0x19),_0x40d60c[_0x141022(0x20e)](0x1f4,0x15e,0xa0,_0x261cc7,0x10,0x14),_0x40d60c['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x141022(0x47b)]('icefog');return this[_0x141022(0x124)]=this[_0x141022(0x124)]||[],this[_0x141022(0x124)][_0x141022(0x28e)](_0x40d60c),_0x40d60c;},ImageManager[_0x5da319(0x307)]=function(){const _0x45c19e=_0x5da319;if(this[_0x45c19e(0x15e)]&&this['_cached_WeatherEffects_PurpleHaze'][_0x45c19e(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x45c19e(0x40c)!==_0x45c19e(0x11f)){const _0x50bbb9=this[_0x45c19e(0x15e)];return _0x50bbb9[Math['floor'](Math['random']()*_0x50bbb9[_0x45c19e(0x2e9)])];}else{const _0x4c4c32=new _0x5d7522(_0x2f88d1[_0x45c19e(0x322)],_0x51820e[_0x45c19e(0x55f)]);_0x4c4c32[_0x45c19e(0x2da)]=0x1c,_0x4c4c32[_0x45c19e(0x206)](_0x273e3c,0x0,0x0,_0x4c4c32[_0x45c19e(0x16e)],_0x4c4c32[_0x45c19e(0x42b)],_0x45c19e(0x4e7)),_0x4c4c32[_0x45c19e(0x182)]=![],this[_0x45c19e(0x487)]['push'](_0x4c4c32);}}let _0x12a0d5=ColorManager[_0x45c19e(0x56a)]([Math[_0x45c19e(0x17f)](0x80)+0x80,0x18,Math['randomInt'](0x80)+0x80]),_0x7cf626=ColorManager[_0x45c19e(0x56a)]([Math['randomInt'](0x80)+0x80,0x30,Math[_0x45c19e(0x17f)](0x80)+0x80]),_0x4ba3f3=ColorManager[_0x45c19e(0x56a)]([Math[_0x45c19e(0x17f)](0x80)+0x80,0x60,Math[_0x45c19e(0x17f)](0x80)+0x80]);const _0x218de0=new Bitmap(0x3e8,0x3e8);_0x218de0['drawCloud'](0x1f4,0x28a,0xaf,_0x12a0d5,0x10,0x14),_0x218de0[_0x45c19e(0x20e)](0x1f4,0x1f4,0xc8,_0x4ba3f3,0x40,0x19),_0x218de0[_0x45c19e(0x20e)](0x1f4,0x15e,0xa0,_0x7cf626,0x10,0x14),_0x218de0[_0x45c19e(0x182)]=![];if(ImageManager[_0x45c19e(0x24b)])console[_0x45c19e(0x47b)](_0x45c19e(0x36f));return this[_0x45c19e(0x15e)]=this[_0x45c19e(0x15e)]||[],this[_0x45c19e(0x15e)][_0x45c19e(0x28e)](_0x218de0),_0x218de0;},ImageManager['weatherEffectsThunderclouds']=function(){const _0x34b020=_0x5da319;if(this['_cached_WeatherEffects_Thunderclouds']&&this[_0x34b020(0x520)][_0x34b020(0x2e9)]>=ImageManager[_0x34b020(0x302)]){if('JryFB'==='GsQhi')_0x383df7[_0x34b020(0x526)][_0x34b020(0x2e7)]=0x1c,_0x33c4e9['sprite'][_0x34b020(0x51a)]=0x82,_0x1e5568['sprite'][_0x34b020(0x351)]=0x1e,_0x708c89[_0x34b020(0x526)][_0x34b020(0x336)]=0x78,_0x257187[_0x34b020(0x526)]['totalPerPower']=0x28,(_0x1aad8a[_0x34b020(0x332)][_0x34b020(0x12e)]=_0x34b020(0x263),_0x144128[_0x34b020(0x332)][_0x34b020(0x42a)]=0x6,_0x15dc34[_0x34b020(0x3ab)][_0x34b020(0x277)]=0x10),_0x195129[_0x34b020(0x3ab)]['angle']=0xf5,_0x58ad2d[_0x34b020(0x3ab)][_0x34b020(0x426)]=0xa;else{const _0x4e7ace=this[_0x34b020(0x520)];return _0x4e7ace[Math['floor'](Math[_0x34b020(0x398)]()*_0x4e7ace['length'])];}}let _0xf53842=ColorManager[_0x34b020(0x56a)]([Math[_0x34b020(0x17f)](0x20)+0x10,0x18,Math[_0x34b020(0x17f)](0x20)+0x10]),_0x25c829=ColorManager[_0x34b020(0x56a)]([Math['randomInt'](0x30)+0x20,0x30,Math[_0x34b020(0x17f)](0x30)+0x20]),_0x40f629=ColorManager[_0x34b020(0x56a)]([Math[_0x34b020(0x17f)](0x40)+0x30,0x60,Math['randomInt'](0x40)+0x30]);const _0x1c7429=new Bitmap(0x3e8,0x3e8);_0x1c7429['drawCloud'](0x1f4,0x28a,0xaf,_0xf53842,0x10,0x14),_0x1c7429[_0x34b020(0x20e)](0x1f4,0x1f4,0xc8,_0x40f629,0x40,0x19),_0x1c7429['drawCloud'](0x1f4,0x15e,0xa0,_0x25c829,0x10,0x14),_0x1c7429[_0x34b020(0x182)]=![];if(ImageManager[_0x34b020(0x24b)])console['log']('thunderclouds');return this[_0x34b020(0x520)]=this[_0x34b020(0x520)]||[],this[_0x34b020(0x520)][_0x34b020(0x28e)](_0x1c7429),_0x1c7429;},ImageManager[_0x5da319(0x536)]=function(){const _0x4cf076=_0x5da319;if(this[_0x4cf076(0x54a)]&&this[_0x4cf076(0x54a)][_0x4cf076(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x4cf076(0x40f)===_0x4cf076(0x168)){const _0x447bd9=this[_0x4cf076(0x452)];_0x497806=_0x39151a||[_0x4cf076(0x1dc),_0x4cf076(0x538),_0x4cf076(0x33c),_0x4cf076(0x199)];const _0x3c33aa=_0x3f7cbd[0x4]||_0x4cf076(0x1dd),_0x48b36f=_0x45adef[0x5]||_0x4cf076(0x1dd);_0x447bd9[_0x4cf076(0x1d5)](),_0x447bd9['transform'](0x0,0.162467,-0.162467,0x0,101.142,-4.33347),_0x447bd9['fillStyle']=_0x33fbb4[0x0],(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9[_0x4cf076(0x23f)](555.3,409.4),_0x447bd9[_0x4cf076(0x2cb)](527.4,409.4,497.2,419.2,497.3,436.6),_0x447bd9[_0x4cf076(0x2cb)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x447bd9[_0x4cf076(0x2cb)](463.7,482.7,447.7,487.4,391.9,479.6),_0x447bd9['lineTo'](383.8,481.2),_0x447bd9[_0x4cf076(0x2cf)](381.2,481.7),_0x447bd9[_0x4cf076(0x2cb)](376.9,509.6,372.6,548.2,346.8,563.2),_0x447bd9[_0x4cf076(0x2cb)](332.8,526.3,293.1,567.7,267.3,582.7),_0x447bd9[_0x4cf076(0x2cb)](307.4,497.6,232.9,526.3,215.7,563.2),_0x447bd9[_0x4cf076(0x2cb)](200.7,0x220,157.7,541.9,131.9,559.1),_0x447bd9[_0x4cf076(0x2cb)](140.4,545.2,146.9,526.3,148.2,507.1),_0x447bd9[_0x4cf076(0x2cb)](149.1,493.9,147.6,480.6,142.6,468.8),_0x447bd9[_0x4cf076(0x2cb)](168.4,466.7,236.8,435.6,196.3,408.6),_0x447bd9[_0x4cf076(0x2cb)](195.1,407.8,193.2,407.2,190.6,406.8),_0x447bd9['bezierCurveTo'](170.3,403.6,111.9,412.7,90.9,427.9),_0x447bd9[_0x4cf076(0x2cb)](104.7,374.2,66.4,0x168,39.7,345.5),_0x447bd9[_0x4cf076(0x2cb)](39.7,345.5,104.6,326.9,104.6,279.6),_0x447bd9[_0x4cf076(0x2cb)](129.9,305.1,168.2,305.4,189.7,290.3),_0x447bd9['bezierCurveTo'](215.5,273.1,172.5,245.2,157.5,238.7),_0x447bd9[_0x4cf076(0x2cb)](168.2,234.4,185.4,230.2,185.4,215.2),_0x447bd9['bezierCurveTo'](185.4,184.8,165.4,0x9d,146.1,0x8e),_0x447bd9[_0x4cf076(0x2cb)](200.5,133.4,185.4,27.6,185.4,27.6),_0x447bd9[_0x4cf076(0x2cb)](185.4,27.6,232.7,96.9,287.1,77.6),_0x447bd9[_0x4cf076(0x2cb)](278.5,116.3,282.2,163.6,309.4,0xaa),_0x447bd9[_0x4cf076(0x2cb)](319.9,172.5,346.7,161.4,346.7,161.4),_0x447bd9[_0x4cf076(0x2cb)](343.2,202.2,345.5,215.3,369.4,215.3),_0x447bd9[_0x4cf076(0x2cb)](392.3,215.3,413.3,0xaa,416.5,133.5),_0x447bd9['bezierCurveTo'](447.6,142.1,493.3,0x7e,527.7,89.4),_0x447bd9[_0x4cf076(0x2cb)](527.2,90.9,502.6,170.4,533.7,206.5),_0x447bd9[_0x4cf076(0x2cb)](504.5,211.4,477.2,236.8,474.1,0x100),_0x447bd9['bezierCurveTo'](0x1d8,269.2,481.3,279.6,509.4,278.3),_0x447bd9[_0x4cf076(0x2cb)](512.3,278.2,515.3,277.9,518.6,277.5),_0x447bd9['bezierCurveTo'](510.4,326.9,593.3,323.5,593.3,323.5),_0x447bd9[_0x4cf076(0x2cb)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x447bd9['fill'](),_0x447bd9[_0x4cf076(0xfd)]=_0x1dc986[0x1],(_0x447bd9['beginPath'](),_0x447bd9[_0x4cf076(0x23f)](509.7,278.3),_0x447bd9[_0x4cf076(0x2cb)](501.6,295.2,497.9,314.1,492.3,332.2),_0x447bd9[_0x4cf076(0x2cb)](482.3,364.8,462.5,0x18e,0x1ae,408.1),_0x447bd9['bezierCurveTo'](422.2,410.5,413.9,411.5,406.4,414.8),_0x447bd9[_0x4cf076(0x2cb)](377.9,427.1,370.6,0x1d2,344.4,482.5),_0x447bd9[_0x4cf076(0x2cb)](307.2,0x1fa,259.1,472.5,215.5,477.7),_0x447bd9['bezierCurveTo'](191.1,480.7,170.2,495.6,148.3,507.2),_0x447bd9[_0x4cf076(0x2cb)](149.2,0x1ee,147.7,480.7,142.7,468.9),_0x447bd9['bezierCurveTo'](168.5,466.8,236.9,435.7,196.4,408.7),_0x447bd9[_0x4cf076(0x2cb)](195.2,407.9,193.3,407.3,190.7,406.9),_0x447bd9[_0x4cf076(0x2cb)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x447bd9['bezierCurveTo'](104.8,374.3,66.5,360.1,39.8,345.6),_0x447bd9[_0x4cf076(0x2cb)](39.8,345.6,104.7,0x147,104.7,279.7),_0x447bd9['bezierCurveTo'](0x82,305.2,168.3,305.5,189.8,290.4),_0x447bd9[_0x4cf076(0x2cb)](215.6,273.2,172.6,245.3,157.6,238.8),_0x447bd9[_0x4cf076(0x2cb)](168.3,234.5,185.5,230.3,185.5,215.3),_0x447bd9['bezierCurveTo'](185.5,184.9,165.5,157.1,146.2,142.1),_0x447bd9[_0x4cf076(0x2cb)](200.6,133.5,185.5,27.7,185.5,27.7),_0x447bd9[_0x4cf076(0x2cb)](185.5,27.7,232.8,0x61,287.2,77.7),_0x447bd9['bezierCurveTo'](278.6,116.4,282.3,163.7,309.5,170.1),_0x447bd9['bezierCurveTo'](0x140,172.6,346.8,161.5,346.8,161.5),_0x447bd9[_0x4cf076(0x2cb)](343.3,202.3,345.6,215.4,369.5,215.4),_0x447bd9[_0x4cf076(0x2cb)](392.4,215.4,413.4,170.1,416.6,133.6),_0x447bd9[_0x4cf076(0x2cb)](447.7,142.2,493.4,126.1,527.8,89.5),_0x447bd9[_0x4cf076(0x2cb)](527.3,0x5b,502.7,170.5,533.8,206.6),_0x447bd9[_0x4cf076(0x2cb)](504.6,211.5,477.3,236.9,474.2,256.1),_0x447bd9[_0x4cf076(0x2cb)](472.2,269.3,481.5,279.6,509.7,278.3)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0xfd)]=_0x40177d[0x2],(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9[_0x4cf076(0x23f)](533.9,206.6),_0x447bd9[_0x4cf076(0x2cb)](504.7,211.5,477.4,236.9,474.3,256.1),_0x447bd9[_0x4cf076(0x2cb)](461.6,260.5,449.1,265.3,435.6,271.5),_0x447bd9[_0x4cf076(0x2cb)](420.6,278.4,403.5,280.9,390.2,290.6),_0x447bd9['bezierCurveTo'](0x173,304.6,364.5,329.8,357.1,352.4),_0x447bd9[_0x4cf076(0x2cb)](349.7,0x177,337.4,399.6,314.4,405.8),_0x447bd9[_0x4cf076(0x2cb)](290.1,412.3,0x10a,395.2,0xf1,393.4),_0x447bd9[_0x4cf076(0x2cb)](223.2,392.1,206.8,398.4,190.7,406.9),_0x447bd9['bezierCurveTo'](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x447bd9[_0x4cf076(0x2cb)](104.8,374.3,66.5,360.1,39.8,345.6),_0x447bd9['bezierCurveTo'](39.8,345.6,104.7,0x147,104.7,279.7),_0x447bd9[_0x4cf076(0x2cb)](0x82,305.2,168.3,305.5,189.8,290.4),_0x447bd9[_0x4cf076(0x2cb)](215.6,273.2,172.6,245.3,157.6,238.8),_0x447bd9[_0x4cf076(0x2cb)](168.3,234.5,185.5,230.3,185.5,215.3),_0x447bd9[_0x4cf076(0x2cb)](185.5,184.9,165.5,157.1,146.2,142.1),_0x447bd9[_0x4cf076(0x2cb)](200.6,133.5,185.5,27.7,185.5,27.7),_0x447bd9[_0x4cf076(0x2cb)](185.5,27.7,232.8,0x61,287.2,77.7),_0x447bd9['bezierCurveTo'](278.6,116.4,282.3,163.7,309.5,170.1),_0x447bd9[_0x4cf076(0x2cb)](0x140,172.6,346.8,161.5,346.8,161.5),_0x447bd9[_0x4cf076(0x2cb)](343.3,202.3,345.6,215.4,369.5,215.4),_0x447bd9[_0x4cf076(0x2cb)](392.4,215.4,413.4,170.1,416.6,133.6),_0x447bd9[_0x4cf076(0x2cb)](447.7,142.2,493.4,126.1,527.8,89.5),_0x447bd9[_0x4cf076(0x2cb)](527.4,0x5b,502.8,170.4,533.9,206.6)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0xfd)]=_0x28d9cf[0x3],(_0x447bd9['beginPath'](),_0x447bd9[_0x4cf076(0x23f)](120.7,325.8),_0x447bd9[_0x4cf076(0x2cb)](126.5,334.6,138.7,335.8,149.3,336.1),_0x447bd9[_0x4cf076(0x2cb)](193.7,337.4,238.1,338.7,282.5,0x154),_0x447bd9['bezierCurveTo'](289.7,340.2,297.6,340.2,303.3,335.8),_0x447bd9[_0x4cf076(0x2cb)](312.9,328.2,310.8,312.8,317.4,302.5),_0x447bd9[_0x4cf076(0x2cb)](324.7,291.1,0x154,0x121,353.1,285.9),_0x447bd9[_0x4cf076(0x2cb)](405.5,273.6,444.9,231.7,0x1e1,191.8),_0x447bd9[_0x4cf076(0x2cb)](486.2,186.1,491.6,0xb4,493.5,172.5),_0x447bd9['bezierCurveTo'](498.1,154.8,479.9,137.4,461.6,136.9),_0x447bd9[_0x4cf076(0x2cb)](443.3,136.5,426.8,0x94,414.2,161.3),_0x447bd9['bezierCurveTo'](401.7,174.6,398.5,197.8,383.5,208.2),_0x447bd9[_0x4cf076(0x2cb)](368.5,218.6,339.2,214.6,325.5,202.5),_0x447bd9['bezierCurveTo'](317.3,195.2,313.8,184.1,307.6,0xaf),_0x447bd9[_0x4cf076(0x2cb)](291.6,151.6,259.3,144.6,241.8,122.3),_0x447bd9[_0x4cf076(0x2cb)](235.7,114.6,231.7,105.4,225.2,98.1),_0x447bd9[_0x4cf076(0x2cb)](218.6,0x5b,0xd0,85.9,0xc7,89.8),_0x447bd9[_0x4cf076(0x2cb)](186.5,95.3,186.2,112.6,188.1,126.1),_0x447bd9[_0x4cf076(0x2cb)](192.5,0x9d,198.5,187.7,205.8,0xda),_0x447bd9[_0x4cf076(0x2cb)](211.1,239.7,216.2,265.5,201.2,282.2),_0x447bd9[_0x4cf076(0x2cb)](189.7,295.1,108.1,306.6,120.7,325.8)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0x4e5)]=_0x48b36f,_0x447bd9[_0x4cf076(0x52d)]=0x5,(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9[_0x4cf076(0x23f)](555.3,409.4),_0x447bd9[_0x4cf076(0x2cb)](527.4,409.4,497.2,419.2,497.3,436.6),_0x447bd9[_0x4cf076(0x2cb)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x447bd9[_0x4cf076(0x2cb)](463.7,482.7,447.7,487.4,391.9,479.6),_0x447bd9[_0x4cf076(0x2cf)](383.8,481.2),_0x447bd9['lineTo'](381.2,481.7),_0x447bd9[_0x4cf076(0x2cb)](376.9,509.6,372.6,548.2,346.8,563.2),_0x447bd9[_0x4cf076(0x2cb)](332.8,526.3,293.1,567.7,267.3,582.7),_0x447bd9[_0x4cf076(0x2cb)](307.4,497.6,232.9,526.3,215.7,563.2),_0x447bd9[_0x4cf076(0x2cb)](200.7,0x220,157.7,541.9,131.9,559.1),_0x447bd9['bezierCurveTo'](146.3,535.7,154.9,497.6,142.6,468.8),_0x447bd9[_0x4cf076(0x2cb)](168.4,466.7,236.8,435.6,196.3,408.6),_0x447bd9[_0x4cf076(0x2cb)](185.6,401.4,114.6,410.7,0x5b,427.9),_0x447bd9[_0x4cf076(0x2cb)](104.8,374.2,66.5,0x168,39.8,345.5),_0x447bd9[_0x4cf076(0x2cb)](39.8,345.5,104.7,326.9,104.7,279.6),_0x447bd9[_0x4cf076(0x2cb)](0x82,305.1,168.3,305.4,189.8,290.3),_0x447bd9[_0x4cf076(0x2cb)](215.6,273.1,172.6,245.2,157.6,238.7),_0x447bd9[_0x4cf076(0x2cb)](168.3,234.4,185.5,230.2,185.5,215.2),_0x447bd9['bezierCurveTo'](185.5,184.8,165.5,0x9d,146.2,0x8e),_0x447bd9[_0x4cf076(0x2cb)](200.6,133.4,185.5,27.6,185.5,27.6),_0x447bd9[_0x4cf076(0x2cb)](185.5,27.6,232.8,96.9,287.2,77.6),_0x447bd9[_0x4cf076(0x2cb)](278.6,116.3,282.3,163.6,309.5,0xaa),_0x447bd9[_0x4cf076(0x2cb)](0x140,172.5,346.8,161.4,346.8,161.4),_0x447bd9['bezierCurveTo'](343.3,202.2,345.6,215.3,369.5,215.3),_0x447bd9['bezierCurveTo'](392.4,215.3,413.4,0xaa,416.6,133.5),_0x447bd9[_0x4cf076(0x2cb)](447.7,142.1,493.4,0x7e,527.8,89.4),_0x447bd9[_0x4cf076(0x2cb)](527.3,90.9,502.7,170.4,533.8,206.5),_0x447bd9['bezierCurveTo'](482.3,215.2,437.1,287.1,518.8,277.4),_0x447bd9[_0x4cf076(0x2cb)](510.6,326.8,593.5,323.4,593.5,323.4),_0x447bd9[_0x4cf076(0x2cb)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x447bd9[_0x4cf076(0x47a)](),_0x447bd9[_0x4cf076(0xfd)]=_0x3c33aa,(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9['moveTo'](236.9,152.9),_0x447bd9[_0x4cf076(0x2cb)](245.5,185.6,255.3,217.6,268.2,0xf9),_0x447bd9['bezierCurveTo'](281.4,281.1,296.5,312.4,310.8,344.1),_0x447bd9[_0x4cf076(0x2cb)](338.4,0x195,369.3,464.6,393.1,527.2),_0x447bd9['bezierCurveTo'](0x18f,542.9,404.5,558.8,408.9,0x23f),_0x447bd9[_0x4cf076(0x2cb)](0x19b,582.4,412.8,589.9,414.4,597.4),_0x447bd9[_0x4cf076(0x2cb)](415.2,601.3,0x1a0,605.1,416.7,0x261),_0x447bd9[_0x4cf076(0x2cb)](417.6,0x266,419.5,617.1,423.2,620.4),_0x447bd9[_0x4cf076(0x2cb)](426.8,623.6,432.5,623.3,435.1,618.9),_0x447bd9[_0x4cf076(0x2cb)](437.5,614.8,438.8,611.3,0x1b6,606.5),_0x447bd9['bezierCurveTo'](437.4,603.1,436.7,599.6,0x1b4,596.2),_0x447bd9[_0x4cf076(0x2cb)](434.5,589.4,432.8,582.7,430.8,0x240),_0x447bd9['bezierCurveTo'](426.8,561.9,421.9,0x224,416.7,534.4),_0x447bd9[_0x4cf076(0x2cb)](0x195,0x1f8,0x187,474.6,376.2,445.6),_0x447bd9['bezierCurveTo'](344.5,383.6,308.7,323.8,279.9,260.4),_0x447bd9[_0x4cf076(0x2cb)](264.1,225.5,0xf8,189.7,237.6,152.8),_0x447bd9[_0x4cf076(0x2cb)](237.5,152.3,236.7,152.5,236.9,152.9)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0xfd)]=_0x3c33aa,(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9['moveTo'](436.6,221.3),_0x447bd9[_0x4cf076(0x2cb)](415.7,0xfa,403.1,0x11a,395.3,316.5),_0x447bd9[_0x4cf076(0x2cb)](388.4,347.3,382.8,379.1,0x17c,410.6),_0x447bd9[_0x4cf076(0x2cb)](378.2,430.6,377.5,0x1c3,378.3,471.1),_0x447bd9[_0x4cf076(0x2cb)](378.6,477.6,388.6,477.7,388.5,471.1),_0x447bd9[_0x4cf076(0x2cb)](388.2,453.4,387.8,435.8,388.7,418.1),_0x447bd9[_0x4cf076(0x2cb)](389.4,0x194,390.9,389.9,392.1,375.8),_0x447bd9[_0x4cf076(0x2cb)](395.2,341.9,398.1,308.4,409.7,276.1),_0x447bd9['bezierCurveTo'](416.6,256.9,426.2,238.9,437.7,222.1),_0x447bd9[_0x4cf076(0x2cb)](438.3,221.2,437.1,220.6,436.6,221.3)),_0x447bd9['fill'](),_0x447bd9[_0x4cf076(0xfd)]=_0x3c33aa,(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9[_0x4cf076(0x23f)](0x86,344.4),_0x447bd9[_0x4cf076(0x2cb)](209.5,355.1,275.3,397.6,335.7,441.6),_0x447bd9['bezierCurveTo'](343.7,447.4,351.6,453.3,359.4,459.2),_0x447bd9[_0x4cf076(0x2cb)](363.3,462.2,367.2,465.1,371.2,468.1),_0x447bd9[_0x4cf076(0x2cb)](375.2,471.1,378.3,474.1,383.4,474.6),_0x447bd9[_0x4cf076(0x2cb)](385.5,474.8,387.6,472.1,386.8,470.1),_0x447bd9[_0x4cf076(0x2cb)](383.8,462.7,374.4,0x1ca,368.1,453.5),_0x447bd9['bezierCurveTo'](360.9,448.2,353.6,442.9,346.3,437.7),_0x447bd9[_0x4cf076(0x2cb)](330.9,426.7,315.3,416.1,299.1,406.2),_0x447bd9['bezierCurveTo'](266.5,386.3,232.2,368.6,195.8,356.6),_0x447bd9['bezierCurveTo'](175.6,349.9,155.1,345.9,133.9,343.9),_0x447bd9['bezierCurveTo'](133.7,343.9,133.6,344.4,0x86,344.4)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0xfd)]=_0x3c33aa,(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9['moveTo'](458.7,294.7),_0x447bd9[_0x4cf076(0x2cb)](458.7,294.7,0x1c9,295.4,0x1c6,296.6),_0x447bd9[_0x4cf076(0x2cb)](0x1c3,297.8,446.6,299.5,441.2,301.6),_0x447bd9[_0x4cf076(0x2cb)](435.8,303.7,429.4,306.2,422.4,309.1),_0x447bd9[_0x4cf076(0x2cb)](415.4,0x138,407.8,315.5,400.2,319.5),_0x447bd9['bezierCurveTo'](399.3,0x140,398.5,320.4,397.6,320.9),_0x447bd9[_0x4cf076(0x2cf)](396.2,321.7),_0x447bd9['lineTo'](395.5,322.1),_0x447bd9['bezierCurveTo'](395.4,322.2,395.4,0x142,395.4,0x142),_0x447bd9[_0x4cf076(0x2cf)](395.3,321.8),_0x447bd9[_0x4cf076(0x2cf)](395.1,321.5),_0x447bd9[_0x4cf076(0x2cb)](394.5,320.6,393.9,319.7,393.3,318.8),_0x447bd9['lineTo'](392.4,317.5),_0x447bd9[_0x4cf076(0x2cf)](0x188,316.7),_0x447bd9[_0x4cf076(0x2cb)](390.9,314.6,390.1,312.6,389.3,310.6),_0x447bd9[_0x4cf076(0x2cb)](387.9,306.6,0x183,302.6,386.2,298.9),_0x447bd9[_0x4cf076(0x2cb)](384.7,291.5,0x180,284.8,383.6,279.1),_0x447bd9[_0x4cf076(0x2cb)](382.8,267.8,383.4,260.5,383.5,259.4),_0x447bd9[_0x4cf076(0x2cb)](383.6,258.2,384.2,265.4,386.3,0x115),_0x447bd9[_0x4cf076(0x2cb)](387.4,282.8,388.8,289.7,390.7,297.2),_0x447bd9[_0x4cf076(0x2cb)](391.7,300.9,392.8,304.8,394.3,308.5),_0x447bd9[_0x4cf076(0x2cb)](395.1,310.4,395.8,312.2,396.8,313.9),_0x447bd9[_0x4cf076(0x2cf)](397.1,314.6),_0x447bd9[_0x4cf076(0x2cb)](397.1,314.7,397.1,314.6,397.1,314.7),_0x447bd9['lineTo'](397.1,314.7),_0x447bd9[_0x4cf076(0x2cf)](397.1,314.7),_0x447bd9[_0x4cf076(0x2cf)](397.1,314.7),_0x447bd9[_0x4cf076(0x2cf)](397.1,314.7),_0x447bd9[_0x4cf076(0x2cf)](397.1,314.7),_0x447bd9[_0x4cf076(0x2cf)](397.4,314.5),_0x447bd9[_0x4cf076(0x2cb)](405.3,310.3,413.3,307.1,420.6,304.6),_0x447bd9[_0x4cf076(0x2cb)](427.9,302.1,434.6,300.3,440.2,298.9),_0x447bd9['bezierCurveTo'](445.8,297.5,450.4,296.5,453.6,295.8),_0x447bd9[_0x4cf076(0x2cb)](456.9,295.1,458.7,294.7,458.7,294.7)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0xfd)]=_0x3c33aa,(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9[_0x4cf076(0x23f)](213.6,309.8),_0x447bd9[_0x4cf076(0x2cb)](213.6,309.8,214.3,310.1,215.7,310.8),_0x447bd9[_0x4cf076(0x2cb)](216.4,311.1,217.2,311.5,218.2,311.9),_0x447bd9[_0x4cf076(0x2cb)](219.2,312.3,220.3,312.8,221.7,313.3),_0x447bd9[_0x4cf076(0x2cb)](224.3,314.4,227.6,315.5,231.4,316.8),_0x447bd9['bezierCurveTo'](235.2,0x13e,239.6,319.4,244.4,320.8),_0x447bd9[_0x4cf076(0x2cb)](254.1,323.6,265.8,326.5,278.7,330.5),_0x447bd9[_0x4cf076(0x2cb)](285.1,332.6,291.8,334.9,298.6,0x152),_0x447bd9[_0x4cf076(0x2cb)](305.4,0x155,312.2,344.8,318.5,349.8),_0x447bd9[_0x4cf076(0x2cb)](319.9,350.9,321.2,0x160,322.5,353.2),_0x447bd9[_0x4cf076(0x2cb)](323.1,353.8,323.8,354.4,324.4,354.9),_0x447bd9[_0x4cf076(0x2cb)](0x145,355.5,325.6,356.1,326.1,356.7),_0x447bd9[_0x4cf076(0x2cb)](326.4,0x165,326.7,357.3,0x147,357.6),_0x447bd9[_0x4cf076(0x2cf)](327.1,357.7),_0x447bd9[_0x4cf076(0x2cf)](327.1,357.7),_0x447bd9[_0x4cf076(0x2cf)](327.1,357.7),_0x447bd9[_0x4cf076(0x2cf)](327.1,357.7),_0x447bd9[_0x4cf076(0x2cf)](327.1,357.8),_0x447bd9[_0x4cf076(0x2cb)](327.1,357.9,327.2,357.9,327.2,0x166),_0x447bd9['bezierCurveTo'](327.2,0x166,327.2,0x166,327.3,357.9),_0x447bd9[_0x4cf076(0x2cf)](327.3,357.8),_0x447bd9[_0x4cf076(0x2cf)](327.3,357.8),_0x447bd9['lineTo'](327.3,357.8),_0x447bd9['lineTo'](327.3,357.7),_0x447bd9[_0x4cf076(0x2cf)](327.3,357.4),_0x447bd9[_0x4cf076(0x2cf)](327.4,356.2),_0x447bd9[_0x4cf076(0x2cb)](327.5,354.6,327.6,0x161,327.7,351.5),_0x447bd9[_0x4cf076(0x2cb)](327.8,349.9,0x148,348.4,328.1,346.9),_0x447bd9[_0x4cf076(0x2cb)](328.7,340.8,329.6,335.1,330.5,329.7),_0x447bd9[_0x4cf076(0x2cb)](332.3,318.9,334.3,309.4,335.8,301.5),_0x447bd9[_0x4cf076(0x2cb)](0x153,285.6,340.2,275.5,340.5,273.7),_0x447bd9[_0x4cf076(0x2cb)](340.6,272.8,340.6,274.8,340.5,279.2),_0x447bd9[_0x4cf076(0x2cb)](340.3,283.6,339.8,290.3,338.8,298.8),_0x447bd9[_0x4cf076(0x2cb)](337.9,307.3,336.4,317.5,0x14f,328.9),_0x447bd9[_0x4cf076(0x2cb)](334.3,334.6,333.6,340.6,333.2,346.8),_0x447bd9[_0x4cf076(0x2cb)](333.1,348.4,0x14d,349.9,332.9,351.5),_0x447bd9[_0x4cf076(0x2cb)](332.8,353.1,332.7,354.7,332.7,356.3),_0x447bd9[_0x4cf076(0x2cb)](332.7,357.3,332.6,358.3,332.6,359.3),_0x447bd9[_0x4cf076(0x2cb)](332.5,360.9,332.6,362.6,332.5,364.2),_0x447bd9[_0x4cf076(0x2cb)](332.5,367.5,332.4,370.8,332.4,374.2),_0x447bd9['bezierCurveTo'](330.5,371.7,328.7,369.1,326.6,366.6),_0x447bd9[_0x4cf076(0x2cb)](325.6,365.3,324.6,364.1,323.6,362.8),_0x447bd9[_0x4cf076(0x2cf)](322.8,361.8),_0x447bd9[_0x4cf076(0x2cb)](322.6,361.6,322.5,361.5,322.4,361.4),_0x447bd9[_0x4cf076(0x2cf)](321.6,360.6),_0x447bd9[_0x4cf076(0x2cb)](321.1,360.1,320.6,359.5,0x140,0x167),_0x447bd9[_0x4cf076(0x2cf)](318.3,357.5),_0x447bd9[_0x4cf076(0x2cb)](317.2,356.5,0x13c,355.5,314.8,354.6),_0x447bd9[_0x4cf076(0x2cb)](308.9,0x15e,302.5,346.4,296.1,343.3),_0x447bd9[_0x4cf076(0x2cb)](289.7,340.2,283.2,337.7,276.9,335.4),_0x447bd9[_0x4cf076(0x2cb)](264.4,330.9,252.9,327.3,243.3,323.8),_0x447bd9[_0x4cf076(0x2cb)](238.5,322.1,234.2,320.4,230.5,318.8),_0x447bd9[_0x4cf076(0x2cb)](226.8,317.2,223.6,315.7,221.1,314.4),_0x447bd9['bezierCurveTo'](219.8,313.8,218.7,313.1,217.8,312.6),_0x447bd9[_0x4cf076(0x2cb)](216.8,312.1,0xd8,311.6,215.4,311.2),_0x447bd9['bezierCurveTo'](214.3,310.2,213.6,309.8,213.6,309.8)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0xfd)]=_0x3c33aa,(_0x447bd9['beginPath'](),_0x447bd9[_0x4cf076(0x23f)](235.1,251.7),_0x447bd9['bezierCurveTo'](235.1,251.7,236.5,252.2,238.9,253.2),_0x447bd9[_0x4cf076(0x2cb)](241.3,254.2,244.9,255.7,249.1,257.8),_0x447bd9[_0x4cf076(0x2cb)](253.4,259.9,258.3,262.4,263.8,265.3),_0x447bd9[_0x4cf076(0x2cb)](269.3,268.1,275.3,271.2,281.7,273.9),_0x447bd9[_0x4cf076(0x2cb)](282.5,274.3,283.3,274.6,284.1,274.9),_0x447bd9[_0x4cf076(0x2cb)](284.5,275.1,284.9,275.2,285.3,275.4),_0x447bd9[_0x4cf076(0x2cf)](285.9,275.6),_0x447bd9[_0x4cf076(0x2cb)](0x11e,275.6,285.9,275.6,285.9,275.6),_0x447bd9[_0x4cf076(0x2cf)](0x11e,275.7),_0x447bd9[_0x4cf076(0x2cb)](0x11e,275.7,0x11e,275.7,0x11e,275.6),_0x447bd9[_0x4cf076(0x2cf)](0x11e,275.4),_0x447bd9[_0x4cf076(0x2cf)](0x11e,0x113),_0x447bd9['bezierCurveTo'](286.1,274.2,286.2,273.5,286.3,272.8),_0x447bd9['bezierCurveTo'](286.5,271.1,286.8,269.5,287.2,0x10c),_0x447bd9[_0x4cf076(0x2cb)](288.7,261.8,291.1,256.8,293.2,252.7),_0x447bd9[_0x4cf076(0x2cb)](295.4,248.6,297.3,245.4,298.8,243.1),_0x447bd9['bezierCurveTo'](300.3,240.8,301.2,239.4,301.5,238.9),_0x447bd9['bezierCurveTo'](301.8,238.5,301.4,239.7,300.5,242.1),_0x447bd9[_0x4cf076(0x2cb)](299.6,244.5,298.2,248.1,296.6,252.6),_0x447bd9['bezierCurveTo'](0x127,257.1,293.2,262.5,292.1,268.5),_0x447bd9[_0x4cf076(0x2cb)](0x124,269.2,291.9,0x10e,291.8,270.8),_0x447bd9[_0x4cf076(0x2cb)](291.7,271.6,291.6,272.3,291.6,273.1),_0x447bd9[_0x4cf076(0x2cb)](291.6,273.5,291.6,273.9,291.5,274.3),_0x447bd9[_0x4cf076(0x2cf)](291.5,274.9),_0x447bd9[_0x4cf076(0x2cb)](291.5,275.1,291.5,275.2,291.5,275.6),_0x447bd9[_0x4cf076(0x2cb)](291.5,277.1,291.5,278.5,291.5,0x118),_0x447bd9[_0x4cf076(0x2cb)](291.5,280.8,291.5,281.7,291.5,282.5),_0x447bd9['lineTo'](291.5,283.1),_0x447bd9[_0x4cf076(0x2cf)](291.5,283.4),_0x447bd9[_0x4cf076(0x2cf)](291.5,283.5),_0x447bd9[_0x4cf076(0x2cf)](291.4,283.5),_0x447bd9[_0x4cf076(0x2cf)](291.3,283.4),_0x447bd9[_0x4cf076(0x2cf)](290.1,0x11b),_0x447bd9[_0x4cf076(0x2cb)](288.5,282.4,286.9,281.9,285.2,281.3),_0x447bd9[_0x4cf076(0x2cb)](284.8,281.2,284.3,0x119,0x11c,280.9),_0x447bd9[_0x4cf076(0x2cf)](283.3,280.6),_0x447bd9['lineTo'](0x11a,280.1),_0x447bd9[_0x4cf076(0x2cb)](281.1,279.8,280.3,279.4,279.5,279.1),_0x447bd9[_0x4cf076(0x2cb)](272.7,276.2,266.7,272.7,261.4,269.4),_0x447bd9[_0x4cf076(0x2cb)](256.1,266.1,251.5,262.9,247.6,260.2),_0x447bd9[_0x4cf076(0x2cb)](243.7,257.5,240.6,255.4,238.4,253.9),_0x447bd9[_0x4cf076(0x2cb)](236.3,252.5,235.1,251.7,235.1,251.7)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0xfd)]=_0x3c33aa,(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9[_0x4cf076(0x23f)](235.1,0x1d7),_0x447bd9[_0x4cf076(0x2cb)](235.1,0x1d7,237.1,469.6,240.8,466.9),_0x447bd9[_0x4cf076(0x2cb)](244.5,464.3,249.8,460.6,256.5,456.2),_0x447bd9[_0x4cf076(0x2cb)](263.3,451.8,271.4,446.8,281.1,442.1),_0x447bd9[_0x4cf076(0x2cb)](281.7,441.8,282.3,441.5,282.9,441.2),_0x447bd9[_0x4cf076(0x2cb)](283.5,440.9,284.1,440.6,284.8,440.4),_0x447bd9[_0x4cf076(0x2cb)](286.1,439.8,287.3,439.3,288.6,438.7),_0x447bd9[_0x4cf076(0x2cb)](291.2,437.7,293.9,436.6,296.7,435.7),_0x447bd9[_0x4cf076(0x2cb)](299.5,434.7,302.4,0x1b2,305.3,433.1),_0x447bd9[_0x4cf076(0x2cb)](308.3,432.4,311.3,431.7,314.4,431.2),_0x447bd9[_0x4cf076(0x2cb)](317.5,430.6,320.5,430.3,323.5,0x1ae),_0x447bd9[_0x4cf076(0x2cb)](324.2,429.9,0x145,429.9,325.7,429.8),_0x447bd9[_0x4cf076(0x2cf)](326.3,429.8),_0x447bd9[_0x4cf076(0x2cb)](326.4,429.8,326.4,429.8,326.4,429.8),_0x447bd9['lineTo'](326.4,429.8),_0x447bd9[_0x4cf076(0x2cf)](326.4,429.8),_0x447bd9[_0x4cf076(0x2cf)](326.4,429.8),_0x447bd9[_0x4cf076(0x2cb)](326.5,429.8,326.5,429.8,326.5,429.8),_0x447bd9[_0x4cf076(0x2cb)](326.5,429.8,326.5,429.8,326.5,429.7),_0x447bd9[_0x4cf076(0x2cb)](326.2,429.2,0x146,428.6,325.7,428.1),_0x447bd9[_0x4cf076(0x2cb)](325.1,426.9,324.5,425.7,323.9,424.5),_0x447bd9[_0x4cf076(0x2cb)](322.7,422.1,321.4,419.8,320.2,417.6),_0x447bd9[_0x4cf076(0x2cb)](317.7,413.1,315.2,0x199,312.8,405.2),_0x447bd9['bezierCurveTo'](311.5,403.3,310.4,401.5,309.2,399.7),_0x447bd9[_0x4cf076(0x2cb)](0x134,0x18e,306.8,396.3,305.7,394.7),_0x447bd9[_0x4cf076(0x2cb)](301.2,388.4,297.1,383.5,294.1,0x17c),_0x447bd9[_0x4cf076(0x2cb)](0x123,376.5,289.1,374.4,288.5,373.8),_0x447bd9[_0x4cf076(0x2cb)](287.9,373.2,289.6,374.5,292.9,377.3),_0x447bd9['bezierCurveTo'](293.7,0x17a,294.7,378.8,295.6,379.8),_0x447bd9[_0x4cf076(0x2cb)](296.6,380.7,297.7,381.8,298.9,382.9),_0x447bd9[_0x4cf076(0x2cb)](300.1,0x180,301.2,385.3,302.5,386.6),_0x447bd9['bezierCurveTo'](303.8,387.9,305.1,389.4,306.5,390.9),_0x447bd9[_0x4cf076(0x2cb)](0x138,397.1,318.2,404.9,0x144,414.3),_0x447bd9['bezierCurveTo'](324.7,415.5,325.5,416.6,326.2,417.9),_0x447bd9[_0x4cf076(0x2cb)](326.9,419.1,327.6,420.3,328.3,421.6),_0x447bd9['bezierCurveTo'](0x149,422.8,329.7,424.1,330.4,425.4),_0x447bd9['bezierCurveTo'](330.7,0x1aa,331.1,426.7,331.4,427.4),_0x447bd9[_0x4cf076(0x2cb)](0x14c,428.6,332.6,429.9,333.2,431.2),_0x447bd9['lineTo'](334.1,433.1),_0x447bd9['lineTo'](334.5,434.1),_0x447bd9[_0x4cf076(0x2cf)](334.7,434.6),_0x447bd9['lineTo'](334.8,434.7),_0x447bd9[_0x4cf076(0x2cf)](334.8,434.8),_0x447bd9[_0x4cf076(0x2cb)](334.8,434.8,334.8,434.8,334.7,434.8),_0x447bd9[_0x4cf076(0x2cf)](334.4,434.8),_0x447bd9['bezierCurveTo'](0x14d,434.9,331.6,435.1,330.2,435.3),_0x447bd9['bezierCurveTo'](328.9,435.4,327.6,435.5,326.3,435.6),_0x447bd9[_0x4cf076(0x2cb)](325.6,435.7,324.8,435.7,324.1,435.8),_0x447bd9[_0x4cf076(0x2cb)](321.2,436.2,318.2,436.5,315.3,437.1),_0x447bd9[_0x4cf076(0x2cb)](312.3,437.5,309.5,438.2,306.6,438.8),_0x447bd9[_0x4cf076(0x2cb)](303.8,439.5,0x12d,440.2,298.3,441.1),_0x447bd9[_0x4cf076(0x2cb)](295.6,441.9,0x125,442.9,290.4,443.7),_0x447bd9[_0x4cf076(0x2cb)](289.1,444.2,287.9,444.7,286.6,445.2),_0x447bd9['bezierCurveTo'](0x11e,445.4,285.4,445.7,284.7,445.9),_0x447bd9[_0x4cf076(0x2cb)](284.1,446.2,283.5,446.4,282.9,446.7),_0x447bd9[_0x4cf076(0x2cb)](273.3,450.8,264.8,455.1,257.8,458.9),_0x447bd9[_0x4cf076(0x2cb)](243.8,466.3,235.1,0x1d7,235.1,0x1d7)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9['fillStyle']=_0x3c33aa,(_0x447bd9[_0x4cf076(0x503)](),_0x447bd9['moveTo'](0xb1,376.4),_0x447bd9[_0x4cf076(0x2cb)](0xb1,376.4,178.8,375.9,182.1,375.2),_0x447bd9['bezierCurveTo'](185.4,374.6,190.3,373.8,196.5,373.5),_0x447bd9[_0x4cf076(0x2cb)](202.6,373.2,209.9,373.4,217.9,0x176),_0x447bd9[_0x4cf076(0x2cb)](225.9,374.7,234.6,375.8,243.7,376.9),_0x447bd9[_0x4cf076(0x2cb)](244.3,0x179,244.8,0x179,245.4,377.1),_0x447bd9['lineTo'](245.8,377.1),_0x447bd9[_0x4cf076(0x2cf)](245.8,377.1),_0x447bd9[_0x4cf076(0x2cf)](245.8,377.1),_0x447bd9['lineTo'](245.8,377.1),_0x447bd9['lineTo'](245.9,377.1),_0x447bd9[_0x4cf076(0x2cb)](245.9,377.1,245.9,377.1,245.9,0x179),_0x447bd9[_0x4cf076(0x2cf)](245.8,376.9),_0x447bd9[_0x4cf076(0x2cf)](245.8,376.8),_0x447bd9['lineTo'](245.4,376.3),_0x447bd9[_0x4cf076(0x2cb)](244.7,375.5,244.1,374.7,243.5,0x176),_0x447bd9[_0x4cf076(0x2cb)](242.2,372.5,240.9,0x173,239.6,369.6),_0x447bd9[_0x4cf076(0x2cb)](234.4,0x16c,229.3,359.3,224.9,355.4),_0x447bd9[_0x4cf076(0x2cb)](216.1,347.6,210.3,342.8,209.4,0x156),_0x447bd9[_0x4cf076(0x2cb)](208.9,341.6,210.3,342.3,213.1,0x158),_0x447bd9[_0x4cf076(0x2cb)](215.9,345.7,220.1,348.3,225.3,351.9),_0x447bd9[_0x4cf076(0x2cb)](230.4,355.5,236.4,0x168,242.6,365.6),_0x447bd9[_0x4cf076(0x2cb)](243.4,366.3,244.1,0x16f,244.9,367.8),_0x447bd9['bezierCurveTo'](245.7,368.6,246.4,369.3,247.2,370.1),_0x447bd9[_0x4cf076(0x2cb)](0xf8,370.9,248.7,371.7,249.4,372.5),_0x447bd9[_0x4cf076(0x2cf)](0xfa,373.1),_0x447bd9['bezierCurveTo'](250.1,373.2,250.1,373.2,250.2,373.3),_0x447bd9[_0x4cf076(0x2cf)](250.4,373.6),_0x447bd9['lineTo'](250.9,374.2),_0x447bd9[_0x4cf076(0x2cb)](251.5,0x177,252.2,375.8,252.8,376.6),_0x447bd9[_0x4cf076(0x2cb)](254.1,378.2,255.4,379.9,256.7,381.7),_0x447bd9[_0x4cf076(0x2cf)](257.7,0x17f),_0x447bd9[_0x4cf076(0x2cf)](258.2,383.7),_0x447bd9[_0x4cf076(0x2cf)](258.3,383.9),_0x447bd9[_0x4cf076(0x2cf)](258.3,383.9),_0x447bd9[_0x4cf076(0x2cf)](258.3,383.9),_0x447bd9['lineTo'](258.2,383.9),_0x447bd9['lineTo'](257.8,383.9),_0x447bd9[_0x4cf076(0x2cb)](256.7,383.8,255.6,383.7,254.6,383.6),_0x447bd9[_0x4cf076(0x2cb)](252.4,383.4,250.2,383.2,0xf8,383.1),_0x447bd9['bezierCurveTo'](246.4,382.9,244.9,382.8,243.3,382.6),_0x447bd9['bezierCurveTo'](234.1,381.5,225.4,0x17c,217.6,378.8),_0x447bd9[_0x4cf076(0x2cb)](209.7,377.6,202.7,376.7,196.7,376.3),_0x447bd9[_0x4cf076(0x2cb)](190.7,375.9,185.9,375.9,182.5,0x178),_0x447bd9['bezierCurveTo'](178.9,376.3,0xb1,376.4,0xb1,376.4)),_0x447bd9[_0x4cf076(0x1ef)](),_0x447bd9[_0x4cf076(0xfd)]=_0x3c33aa,(_0x447bd9['beginPath'](),_0x447bd9[_0x4cf076(0x23f)](458.7,346.3),_0x447bd9[_0x4cf076(0x2cb)](458.7,346.3,456.7,347.4,0x1c5,349.4),_0x447bd9[_0x4cf076(0x2cb)](449.4,351.5,444.2,354.6,438.1,0x167),_0x447bd9[_0x4cf076(0x2cb)](432.1,363.4,425.3,369.1,418.2,375.9),_0x447bd9['bezierCurveTo'](411.1,382.7,403.7,390.6,396.1,399.1),_0x447bd9[_0x4cf076(0x2cb)](0x18a,401.5,391.9,403.9,389.8,406.2),_0x447bd9[_0x4cf076(0x2cb)](388.1,408.1,386.5,0x19a,384.8,411.8),_0x447bd9[_0x4cf076(0x2cf)](383.6,413.2),_0x447bd9[_0x4cf076(0x2cf)](383.4,413.4),_0x447bd9['lineTo'](383.3,413.5),_0x447bd9[_0x4cf076(0x2cf)](383.3,413.4),_0x447bd9['lineTo'](383.2,412.9),_0x447bd9[_0x4cf076(0x2cf)](0x17f,411.9),_0x447bd9[_0x4cf076(0x2cb)](382.7,410.6,382.4,409.3,382.2,408.1),_0x447bd9[_0x4cf076(0x2cb)](381.9,406.8,381.6,405.6,381.4,404.4),_0x447bd9[_0x4cf076(0x2cb)](381.2,403.4,381.1,402.5,380.9,401.5),_0x447bd9['bezierCurveTo'](380.7,400.2,380.5,398.9,380.3,397.6),_0x447bd9['bezierCurveTo'](379.9,395.1,379.6,392.6,379.4,390.1),_0x447bd9['bezierCurveTo'](378.3,380.4,377.5,371.9,376.5,364.6),_0x447bd9[_0x4cf076(0x2cb)](375.6,357.4,374.5,351.5,373.3,347.4),_0x447bd9['bezierCurveTo'](373.1,346.3,372.7,345.4,372.5,344.6),_0x447bd9[_0x4cf076(0x2cb)](372.2,343.8,0x174,0x157,371.7,342.4),_0x447bd9[_0x4cf076(0x2cb)](371.2,341.2,370.9,340.4,370.7,0x154),_0x447bd9[_0x4cf076(0x2cb)](370.5,339.6,370.7,339.9,371.2,340.6),_0x447bd9[_0x4cf076(0x2cb)](371.7,341.4,372.5,342.6,373.4,344.5),_0x447bd9[_0x4cf076(0x2cb)](375.2,348.2,377.2,354.1,0x17b,361.7),_0x447bd9['bezierCurveTo'](380.8,369.3,382.4,378.4,384.1,388.5),_0x447bd9[_0x4cf076(0x2cb)](384.5,0x187,0x181,393.6,385.4,396.2),_0x447bd9[_0x4cf076(0x2cb)](385.6,397.5,385.9,398.8,386.1,400.1),_0x447bd9[_0x4cf076(0x2cb)](386.5,0x192,386.4,401.3,386.4,401.5),_0x447bd9[_0x4cf076(0x2cf)](386.4,401.5),_0x447bd9[_0x4cf076(0x2cf)](386.4,401.5),_0x447bd9[_0x4cf076(0x2cf)](386.5,401.4),_0x447bd9[_0x4cf076(0x2cf)](386.9,400.9),_0x447bd9['lineTo'](0x183,400.8),_0x447bd9[_0x4cf076(0x2cf)](387.5,400.2),_0x447bd9[_0x4cf076(0x2cf)](388.9,398.6),_0x447bd9[_0x4cf076(0x2cb)](389.8,397.5,390.8,396.5,391.7,395.4),_0x447bd9['bezierCurveTo'](399.4,386.8,407.1,378.9,414.8,372.4),_0x447bd9[_0x4cf076(0x2cb)](422.4,365.8,429.9,360.6,436.4,356.7),_0x447bd9[_0x4cf076(0x2cb)](0x1bb,352.8,448.6,350.3,452.5,348.7),_0x447bd9['bezierCurveTo'](454.5,347.9,0x1c8,347.4,0x1c9,0x15b),_0x447bd9[_0x4cf076(0x2cb)](458.1,346.5,458.7,346.3,458.7,346.3)),_0x447bd9['fill'](),_0x447bd9[_0x4cf076(0x21c)](),this['_baseTexture']['update']();}else{const _0x3686fa=this[_0x4cf076(0x54a)];return _0x3686fa[Math['floor'](Math[_0x4cf076(0x398)]()*_0x3686fa[_0x4cf076(0x2e9)])];}}const _0x4e0809=Math['randomInt'](0x20)+0x40,_0x1b616d=Math[_0x4cf076(0x17f)](0x20)+0x60,_0x4e4143=Math[_0x4cf076(0x17f)](0x20)+0x80;let _0x595079=ColorManager[_0x4cf076(0x56a)]([_0x4e0809,_0x4e0809,_0x4e0809]),_0x585ead=ColorManager[_0x4cf076(0x56a)]([_0x1b616d,_0x1b616d,_0x1b616d]),_0x3cfcf3=ColorManager[_0x4cf076(0x56a)]([_0x4e4143,_0x4e4143,_0x4e4143]);const _0x37e293=new Bitmap(0x1f4,0x1f4);_0x37e293['drawCloud'](0xfa,0x15e,0x4b,_0x595079,0x10,0x14),_0x37e293[_0x4cf076(0x20e)](0xfa,0xfa,0x64,_0x3cfcf3,0x40,0x19),_0x37e293[_0x4cf076(0x20e)](0xfa,0xfa,0x3c,_0x585ead,0x10,0x14),_0x37e293['_customModified']=![];if(ImageManager[_0x4cf076(0x24b)])console[_0x4cf076(0x47b)](_0x4cf076(0x543));return this[_0x4cf076(0x54a)]=this[_0x4cf076(0x54a)]||[],this[_0x4cf076(0x54a)][_0x4cf076(0x28e)](_0x37e293),_0x37e293;},ImageManager['weatherEffectsMist']=function(){const _0x7c298=_0x5da319;if(this[_0x7c298(0x2ad)]&&this[_0x7c298(0x2ad)][_0x7c298(0x2e9)]>=ImageManager[_0x7c298(0x302)]){const _0x586adc=this[_0x7c298(0x2ad)];return _0x586adc[Math['floor'](Math['random']()*_0x586adc['length'])];}const _0x20ccce=ColorManager[_0x7c298(0x129)],_0x2b3691=ColorManager[_0x7c298(0x44a)],_0x42a9f5=ColorManager[_0x7c298(0x564)],_0x11b3d7=_0x20ccce[Math['floor'](Math[_0x7c298(0x398)]()*_0x20ccce[_0x7c298(0x2e9)])],_0x20ba3c=_0x2b3691[Math[_0x7c298(0x441)](Math[_0x7c298(0x398)]()*_0x2b3691[_0x7c298(0x2e9)])],_0x10d2d6=_0x42a9f5[Math[_0x7c298(0x441)](Math[_0x7c298(0x398)]()*_0x42a9f5[_0x7c298(0x2e9)])],_0x4c8a07=new Bitmap(0x3e8,0x3e8);_0x4c8a07[_0x7c298(0x20e)](0x1f4,0x28a,0xaf,_0x11b3d7,0x10,0x14),_0x4c8a07[_0x7c298(0x20e)](0x1f4,0x1f4,0xc8,_0x10d2d6,0x40,0x19),_0x4c8a07[_0x7c298(0x20e)](0x1f4,0x15e,0xa0,_0x20ba3c,0x10,0x14),_0x4c8a07['_customModified']=![];if(ImageManager[_0x7c298(0x24b)])console['log']('smokefog');return this['_cached_WeatherEffects_Mist']=this[_0x7c298(0x2ad)]||[],this[_0x7c298(0x2ad)][_0x7c298(0x28e)](_0x4c8a07),_0x4c8a07;},ImageManager['weatherEffectsDustStorm']=function(){const _0x48045b=_0x5da319;if(this['_cached_WeatherEffects_DustStorm']&&this[_0x48045b(0x4ab)]['length']>=ImageManager[_0x48045b(0x302)]){const _0x582196=this[_0x48045b(0x4ab)];return _0x582196[Math[_0x48045b(0x441)](Math['random']()*_0x582196[_0x48045b(0x2e9)])];}const _0x443c53=ColorManager[_0x48045b(0x1d1)]['clone'](),_0x35f513=_0x443c53[Math['floor'](Math[_0x48045b(0x398)]()*_0x443c53[_0x48045b(0x2e9)])],_0x560248=_0x443c53[Math['floor'](Math[_0x48045b(0x398)]()*_0x443c53[_0x48045b(0x2e9)])],_0x6d8e2e=_0x443c53[Math[_0x48045b(0x441)](Math[_0x48045b(0x398)]()*_0x443c53[_0x48045b(0x2e9)])],_0x5c018b=new Bitmap(0x1f4,0x1f4);_0x5c018b[_0x48045b(0x20e)](0xfa,0x15e,0x4b,_0x35f513,0x6,0x14),_0x5c018b[_0x48045b(0x20e)](0xfa,0xfa,0x64,_0x6d8e2e,0xc,0x19),_0x5c018b[_0x48045b(0x20e)](0xfa,0xfa,0x3c,_0x560248,0x6,0x14);const _0xe59bfe=_0x5c018b[_0x48045b(0x16e)],_0x4dd5a2=_0x5c018b[_0x48045b(0x42b)],_0x285ac8=0x2;let _0x24148b=0x80;while(_0x24148b--){if('ACxDG'==='ACxDG'){const _0x3d2d94=Math[_0x48045b(0x17f)](_0xe59bfe-_0x285ac8*0x2)+_0x285ac8,_0x4f7b77=Math[_0x48045b(0x17f)](_0x4dd5a2-_0x285ac8*0x2)+_0x285ac8,_0xad0ab1=_0x443c53[Math[_0x48045b(0x441)](Math['random']()*_0x443c53[_0x48045b(0x2e9)])],_0x314030=Math[_0x48045b(0x17f)](_0x285ac8)+0x1;_0x5c018b['paintOpacity']=Math[_0x48045b(0x17f)](0x40)+0xc0,_0x5c018b[_0x48045b(0x44f)](_0x3d2d94,_0x4f7b77,_0x314030,_0xad0ab1);}else{const _0x500819=this[_0x48045b(0xf3)],_0x28f507=this[_0x48045b(0x2a0)]['scaleOut']??0x1;_0x500819<=0x1?this['_scaleInOutRatio']=_0x28f507:this[_0x48045b(0x215)]=(this['_scaleInOutRatio']*(_0x500819-0x1)+_0x28f507)/_0x500819;}}_0x5c018b[_0x48045b(0x182)]=![];if(ImageManager[_0x48045b(0x24b)])console[_0x48045b(0x47b)]('duststorm');return this[_0x48045b(0x4ab)]=this[_0x48045b(0x4ab)]||[],this['_cached_WeatherEffects_DustStorm'][_0x48045b(0x28e)](_0x5c018b),_0x5c018b;},ImageManager[_0x5da319(0x162)]=function(){const _0x2d5d4b=_0x5da319;if(this[_0x2d5d4b(0x202)]&&this[_0x2d5d4b(0x202)][_0x2d5d4b(0x2e9)]>=ImageManager[_0x2d5d4b(0x302)]){const _0x33839e=this['_cached_WeatherEffects_DustClouds'];return _0x33839e[Math[_0x2d5d4b(0x441)](Math[_0x2d5d4b(0x398)]()*_0x33839e[_0x2d5d4b(0x2e9)])];}const _0x4169ef=ColorManager[_0x2d5d4b(0x1d1)][_0x2d5d4b(0x24c)](),_0x4e3b65=1.5,_0x182776=ColorManager[_0x2d5d4b(0x14a)](_0x4169ef[Math[_0x2d5d4b(0x441)](Math[_0x2d5d4b(0x398)]()*_0x4169ef['length'])],_0x4e3b65),_0x5bddf3=ColorManager[_0x2d5d4b(0x14a)](_0x4169ef[Math['floor'](Math[_0x2d5d4b(0x398)]()*_0x4169ef[_0x2d5d4b(0x2e9)])],_0x4e3b65),_0x118118=ColorManager[_0x2d5d4b(0x14a)](_0x4169ef[Math[_0x2d5d4b(0x441)](Math[_0x2d5d4b(0x398)]()*_0x4169ef[_0x2d5d4b(0x2e9)])],_0x4e3b65),_0x194696=new Bitmap(0x3e8,0x3e8);_0x194696['drawCloud'](0x1f4,0x28a,0xaf,_0x182776,0x10,0x14),_0x194696[_0x2d5d4b(0x20e)](0x1f4,0x1f4,0xc8,_0x118118,0x40,0x19),_0x194696[_0x2d5d4b(0x20e)](0x1f4,0x15e,0xa0,_0x5bddf3,0x10,0x14),_0x194696[_0x2d5d4b(0x182)]=![];if(ImageManager[_0x2d5d4b(0x24b)])console[_0x2d5d4b(0x47b)]('dustclouds');return this[_0x2d5d4b(0x202)]=this[_0x2d5d4b(0x202)]||[],this['_cached_WeatherEffects_DustClouds'][_0x2d5d4b(0x28e)](_0x194696),_0x194696;},ImageManager[_0x5da319(0x37d)]=function(){const _0x319e54=_0x5da319;if(this[_0x319e54(0x38c)]&&this['_cached_WeatherEffects_SandClouds']['length']>=ImageManager[_0x319e54(0x302)]){const _0x482a1f=this['_cached_WeatherEffects_SandClouds'];return _0x482a1f[Math[_0x319e54(0x441)](Math[_0x319e54(0x398)]()*_0x482a1f[_0x319e54(0x2e9)])];}const _0x4139c3=ColorManager[_0x319e54(0x1d1)]['clone'](),_0x19cdaf=1.8,_0xf4d284=ColorManager[_0x319e54(0x14a)](_0x4139c3[Math[_0x319e54(0x441)](Math[_0x319e54(0x398)]()*_0x4139c3[_0x319e54(0x2e9)])],_0x19cdaf),_0x13dead=ColorManager['adjustHexColor'](_0x4139c3[Math[_0x319e54(0x441)](Math[_0x319e54(0x398)]()*_0x4139c3[_0x319e54(0x2e9)])],_0x19cdaf),_0x18e371=ColorManager['adjustHexColor'](_0x4139c3[Math[_0x319e54(0x441)](Math[_0x319e54(0x398)]()*_0x4139c3['length'])],_0x19cdaf),_0x5d08ae=new Bitmap(0x3e8,0x3e8);_0x5d08ae[_0x319e54(0x20e)](0x1f4,0x28a,0xaf,_0xf4d284,0x10,0x14),_0x5d08ae[_0x319e54(0x20e)](0x1f4,0x1f4,0xc8,_0x18e371,0x40,0x19),_0x5d08ae[_0x319e54(0x20e)](0x1f4,0x15e,0xa0,_0x13dead,0x10,0x14),_0x5d08ae[_0x319e54(0x182)]=![];if(ImageManager[_0x319e54(0x24b)])console['log']('sandclouds');return this[_0x319e54(0x38c)]=this[_0x319e54(0x38c)]||[],this[_0x319e54(0x38c)][_0x319e54(0x28e)](_0x5d08ae),_0x5d08ae;},ImageManager[_0x5da319(0x3cd)]=function(){const _0x41bbf2=_0x5da319;if(this[_0x41bbf2(0x2af)]&&this[_0x41bbf2(0x2af)][_0x41bbf2(0x2e9)]>=ImageManager[_0x41bbf2(0x302)]){if(_0x41bbf2(0x262)===_0x41bbf2(0x262)){const _0x22166d=this[_0x41bbf2(0x2af)];return _0x22166d[Math[_0x41bbf2(0x441)](Math['random']()*_0x22166d[_0x41bbf2(0x2e9)])];}else this[_0x41bbf2(0x534)][_0x41bbf2(0x444)][_0x41bbf2(0x28e)](_0x50a8ac['WeatherEffects'][_0x41bbf2(0x107)]());}const _0x4cdefa=ColorManager[_0x41bbf2(0xe7)]['clone'](),_0x54cb4f=0.8,_0x183bc8=ColorManager[_0x41bbf2(0x14a)](_0x4cdefa[Math[_0x41bbf2(0x441)](Math[_0x41bbf2(0x398)]()*_0x4cdefa[_0x41bbf2(0x2e9)])],_0x54cb4f),_0x3bab81=ColorManager['adjustHexColor'](_0x4cdefa[Math[_0x41bbf2(0x441)](Math[_0x41bbf2(0x398)]()*_0x4cdefa[_0x41bbf2(0x2e9)])],_0x54cb4f),_0x5911a9=ColorManager[_0x41bbf2(0x14a)](_0x4cdefa[Math[_0x41bbf2(0x441)](Math[_0x41bbf2(0x398)]()*_0x4cdefa['length'])],_0x54cb4f),_0x301dd1=new Bitmap(0x1f4,0x1f4);_0x301dd1[_0x41bbf2(0x20e)](0xfa,0x15e,0x4b,_0x183bc8,0x4,0x14),_0x301dd1['drawCloud'](0xfa,0xfa,0x64,_0x5911a9,0x8,0x19),_0x301dd1['drawCloud'](0xfa,0xfa,0x3c,_0x3bab81,0x4,0x14);const _0x163e4d=_0x301dd1[_0x41bbf2(0x16e)],_0x30e182=_0x301dd1[_0x41bbf2(0x42b)],_0x1da3e6=0x2;let _0x54943c=0x20;while(_0x54943c--){if(_0x41bbf2(0x3a5)===_0x41bbf2(0x3a5)){const _0x1f7a35=Math[_0x41bbf2(0x17f)](_0x163e4d-_0x1da3e6*0x2)+_0x1da3e6,_0x2ad065=Math[_0x41bbf2(0x17f)](_0x30e182-_0x1da3e6*0x2)+_0x1da3e6;let _0x4c9620=_0x4cdefa[Math[_0x41bbf2(0x441)](Math[_0x41bbf2(0x398)]()*_0x4cdefa[_0x41bbf2(0x2e9)])];_0x4c9620=ColorManager['adjustHexColor'](_0x4c9620,_0x54cb4f);const _0x208621=Math[_0x41bbf2(0x17f)](_0x1da3e6)+0x1;_0x301dd1[_0x41bbf2(0x222)]=Math[_0x41bbf2(0x17f)](0x40)+0xa0,_0x301dd1[_0x41bbf2(0x44f)](_0x1f7a35,_0x2ad065,_0x208621,_0x4c9620);}else{const _0x2ede11=this[_0x41bbf2(0x238)];return _0x2ede11[_0x3405c3[_0x41bbf2(0x441)](_0x4e46dc[_0x41bbf2(0x398)]()*_0x2ede11['length'])];}}_0x301dd1[_0x41bbf2(0x182)]=![];if(ImageManager[_0x41bbf2(0x24b)])console[_0x41bbf2(0x47b)](_0x41bbf2(0x567));return this[_0x41bbf2(0x2af)]=this['_cached_WeatherEffects_Pollen']||[],this[_0x41bbf2(0x2af)][_0x41bbf2(0x28e)](_0x301dd1),_0x301dd1;},ImageManager['weatherEffectsToxicGas']=function(){const _0x253849=_0x5da319;if(this['_cached_WeatherEffects_ToxicGas']&&this[_0x253849(0x2d1)][_0x253849(0x2e9)]>=ImageManager[_0x253849(0x302)]){const _0x193227=this[_0x253849(0x2d1)];return _0x193227[Math['floor'](Math['random']()*_0x193227[_0x253849(0x2e9)])];}const _0xa8144b=_0x253849(0x105),_0xfb27f0=0.75,_0x3ca0c8=ColorManager[_0x253849(0x14a)](_0xa8144b,_0xfb27f0),_0x20b4e6=ColorManager['adjustHexColor'](_0x3ca0c8,_0xfb27f0),_0x3f0c10=ColorManager[_0x253849(0x14a)](_0x20b4e6,_0xfb27f0),_0x466584=new Bitmap(0x3e8,0x3e8);_0x466584[_0x253849(0x20e)](0x1f4,0x28a,0xaf,_0x3f0c10,0x10,0x14),_0x466584[_0x253849(0x20e)](0x1f4,0x1f4,0xc8,_0x3ca0c8,0x40,0x19),_0x466584[_0x253849(0x20e)](0x1f4,0x15e,0xa0,_0x20b4e6,0x10,0x14),_0x466584[_0x253849(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x253849(0x47b)](_0x253849(0x14b));return this[_0x253849(0x2d1)]=this[_0x253849(0x2d1)]||[],this[_0x253849(0x2d1)][_0x253849(0x28e)](_0x466584),_0x466584;},ImageManager['weatherEffectsPastelBrume']=function(){const _0x14bd2c=_0x5da319;if(this[_0x14bd2c(0x50a)]&&ColorManager['WEATHER_PASTEL_BRUME_COLORS'][_0x14bd2c(0x2e9)]<=0x0){if(_0x14bd2c(0x569)!==_0x14bd2c(0x4c6)){const _0x3eb396=this[_0x14bd2c(0x50a)];return _0x3eb396[Math[_0x14bd2c(0x441)](Math[_0x14bd2c(0x398)]()*_0x3eb396[_0x14bd2c(0x2e9)])];}else{const _0x14718c=_0xf2d7d7[_0x14bd2c(0x17f)](_0x390914-_0x4baef1*0x2)+_0x4ae944,_0xec93a4=_0x228cd4[_0x14bd2c(0x17f)](_0x18d9c5-_0x32bd59*0x2)+_0x449972,_0x173e8d=_0x329fe[_0x14bd2c(0x17f)](_0x2a5021/0x2)+0x2,_0x5c6059=_0x2814a3[_0x14bd2c(0x56a)]([0xff,_0x49ab25[_0x14bd2c(0x17f)](0x46),0x0]);_0x1c1157[_0x14bd2c(0x222)]=_0x50dd68[_0x14bd2c(0x17f)](0x40),_0x925997['drawCircle'](_0x14718c,_0xec93a4,_0x173e8d,_0x5c6059),_0x105749[_0x14bd2c(0x222)]=_0x2e6542[_0x14bd2c(0x17f)](0x40)+0x40,_0x5b753a[_0x14bd2c(0x44f)](_0x14718c,_0xec93a4,_0x173e8d/0x2,_0x5c6059),_0x166d02['paintOpacity']=_0xf1c6dd[_0x14bd2c(0x17f)](0x40)+0xc0;const _0x15e4c3=_0xdbd050['arrayToHex']([0xff,_0xcb2039[_0x14bd2c(0x17f)](0x46)+0xb9,0x0]);_0x3728e8[_0x14bd2c(0x44f)](_0x14718c,_0xec93a4,_0x173e8d/0x4,_0x15e4c3),_0x3432f8[_0x14bd2c(0x44f)](_0x14718c,_0xec93a4,_0x173e8d/0x8,_0x14bd2c(0x29b));}}const _0x1d5404=ColorManager[_0x14bd2c(0x218)][_0x14bd2c(0x46b)](),_0x364c05=0.85,_0x4d8640=ColorManager[_0x14bd2c(0x14a)](_0x1d5404,_0x364c05),_0x3e6513=ColorManager[_0x14bd2c(0x14a)](_0x4d8640,_0x364c05),_0x569ad0=ColorManager[_0x14bd2c(0x14a)](_0x3e6513,_0x364c05),_0x3975f5=new Bitmap(0x3e8,0x3e8);_0x3975f5[_0x14bd2c(0x20e)](0x1f4,0x28a,0xaf,_0x569ad0,0x10,0x14),_0x3975f5[_0x14bd2c(0x20e)](0x1f4,0x1f4,0xc8,_0x4d8640,0x40,0x19),_0x3975f5[_0x14bd2c(0x20e)](0x1f4,0x15e,0xa0,_0x3e6513,0x10,0x14),_0x3975f5[_0x14bd2c(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x14bd2c(0x41c));return this[_0x14bd2c(0x50a)]=this[_0x14bd2c(0x50a)]||[],this[_0x14bd2c(0x50a)][_0x14bd2c(0x28e)](_0x3975f5),_0x3975f5;},ImageManager[_0x5da319(0x274)]=function(){const _0x5117d7=_0x5da319;if(this[_0x5117d7(0x154)]&&ColorManager['WEATHER_RAINBOW_CLOUD_COLORS']['length']<=0x0){if(_0x5117d7(0x22e)!==_0x5117d7(0x22e)){if(!_0x436a60)return;_0x132c45[_0x5117d7(0x526)][_0x5117d7(0x51a)]=0xbe,_0x2f8a11['sprite'][_0x5117d7(0x351)]=0x1e;if(_0x3d4a46['type']==='rain')_0x39f71b[_0x5117d7(0x526)][_0x5117d7(0x2e7)]=0x24,_0x327fb8['sprite'][_0x5117d7(0x51a)]=0x82,_0x230a36[_0x5117d7(0x526)][_0x5117d7(0x351)]=0x1e,_0x5527fd[_0x5117d7(0x526)][_0x5117d7(0x336)]=0x50,_0x357ecf[_0x5117d7(0x526)][_0x5117d7(0x123)]=0x14,(_0x526c3d[_0x5117d7(0x332)][_0x5117d7(0x12e)]=_0x5117d7(0x273),_0x3720fd[_0x5117d7(0x332)][_0x5117d7(0x42a)]=0x6,_0xe5849b[_0x5117d7(0x3ab)][_0x5117d7(0x277)]=0xc),_0x5adaeb[_0x5117d7(0x3ab)]['angle']=0xff,_0x507191[_0x5117d7(0x3ab)][_0x5117d7(0x426)]=0x5;else{if(_0x2271a2[_0x5117d7(0x297)]===_0x5117d7(0x267))_0x53c8ba[_0x5117d7(0x526)][_0x5117d7(0x2e7)]=0x1c,_0x18c3fb[_0x5117d7(0x526)]['opacity']=0x82,_0x3828bc[_0x5117d7(0x526)]['opacityVariance']=0x1e,_0x50c313['sprite']['totalMinimum']=0x78,_0x52c428['sprite'][_0x5117d7(0x123)]=0x28,(_0x3a93c7[_0x5117d7(0x332)][_0x5117d7(0x12e)]='#404040',_0x5ca526[_0x5117d7(0x332)][_0x5117d7(0x42a)]=0x6,_0x342bff[_0x5117d7(0x3ab)][_0x5117d7(0x277)]=0x10),_0x1e47fa[_0x5117d7(0x3ab)][_0x5117d7(0x265)]=0xf5,_0x2a31ad[_0x5117d7(0x3ab)][_0x5117d7(0x426)]=0xa;else _0x31934c[_0x5117d7(0x297)]===_0x5117d7(0x448)&&(_0x5258e0['sprite']['lifespan']=0x78,_0x3f7c9e['sprite'][_0x5117d7(0x51a)]=0xa0,_0x1bdb6f[_0x5117d7(0x526)][_0x5117d7(0x351)]=0x14,_0x1a5bc1[_0x5117d7(0x526)][_0x5117d7(0x336)]=0x96,_0x565163[_0x5117d7(0x526)][_0x5117d7(0x123)]=0x28,(_0x5c8ede['dimmer']['color']=_0x5117d7(0x14c),_0x56fe4a[_0x5117d7(0x332)]['opacityPerPower']=0x6,_0xf2aac1[_0x5117d7(0x3ab)]['speed']=0x2),_0x12baf5['trajectory']['angle']=0xdc,_0x22dbd5['trajectory'][_0x5117d7(0x426)]=0xf,_0x4ca3a2['trajectory']['xSwayRange']=0x2,_0x5cc4f0[_0x5117d7(0x3ab)]['xSwaySpeed']=0.01);}}else{const _0x17a480=this[_0x5117d7(0x154)];return _0x17a480[Math[_0x5117d7(0x441)](Math['random']()*_0x17a480[_0x5117d7(0x2e9)])];}}const _0x36fd68=ColorManager[_0x5117d7(0x462)][_0x5117d7(0x46b)](),_0x5c3dc4=0.85,_0x193e24=ColorManager['adjustHexColor'](_0x36fd68,_0x5c3dc4),_0x5a7bf3=ColorManager[_0x5117d7(0x14a)](_0x193e24,_0x5c3dc4),_0x23a8ae=ColorManager[_0x5117d7(0x14a)](_0x5a7bf3,_0x5c3dc4),_0x2fd82a=new Bitmap(0x1f4,0x1f4);_0x2fd82a['drawCloud'](0xfa,0x15e,0x4b,_0x23a8ae,0x10,0x14),_0x2fd82a['drawCloud'](0xfa,0xfa,0x64,_0x193e24,0x40,0x19),_0x2fd82a['drawCloud'](0xfa,0xfa,0x3c,_0x5a7bf3,0x10,0x14),_0x2fd82a[_0x5117d7(0x182)]=![];if(ImageManager[_0x5117d7(0x24b)])console['log']('rainbowclouds');return this[_0x5117d7(0x154)]=this['_cached_WeatherEffects_RainbowClouds']||[],this['_cached_WeatherEffects_RainbowClouds']['push'](_0x2fd82a),_0x2fd82a;},ImageManager[_0x5da319(0x45b)]=function(){const _0x3111b1=_0x5da319;if(this['_cached_WeatherEffects_RainbowOrbs']&&ColorManager['WEATHER_RAINBOW_ORB_COLORS'][_0x3111b1(0x2e9)]<=0x0){const _0x459b7c=this[_0x3111b1(0x4e8)];return _0x459b7c[Math[_0x3111b1(0x441)](Math[_0x3111b1(0x398)]()*_0x459b7c['length'])];}const _0x4f02ef=ColorManager[_0x3111b1(0x33a)][_0x3111b1(0x46b)](),_0x287f9d=0x20,_0x5f4d16=new Bitmap(_0x287f9d,_0x287f9d),_0x1cd37b=Math[_0x3111b1(0x441)](_0x287f9d/0x2);_0x5f4d16[_0x3111b1(0x2c4)](_0x1cd37b,_0x1cd37b,_0x1cd37b,0x168,_0x4f02ef,0x0,0x1,0x0),_0x5f4d16[_0x3111b1(0x2b2)](_0x1cd37b-0x1,_0x1cd37b-0x1,0x2,0x2,_0x4f02ef),_0x5f4d16[_0x3111b1(0x182)]=![];if(ImageManager[_0x3111b1(0x24b)])console[_0x3111b1(0x47b)](_0x3111b1(0x3fe));return this[_0x3111b1(0x4e8)]=this[_0x3111b1(0x4e8)]||[],this[_0x3111b1(0x4e8)]['push'](_0x5f4d16),_0x5f4d16;},ImageManager['weatherEffectsLightOrbs']=function(){const _0x2a94de=_0x5da319;if(this[_0x2a94de(0x1d4)]&&this[_0x2a94de(0x1d4)]['length']>=ImageManager[_0x2a94de(0x302)]){if(_0x2a94de(0x28b)===_0x2a94de(0x28b)){const _0x54f785=this['_cached_WeatherEffects_LightOrbs'];return _0x54f785[Math[_0x2a94de(0x441)](Math[_0x2a94de(0x398)]()*_0x54f785['length'])];}else _0x56c3d6=_0x591b58+_0x427159['cos'](_0x4f726f)*_0x4ec3d0,_0x4e8c69=_0x4ddc7d+_0x4ff314[_0x2a94de(0x3ca)](_0x493ddc)*_0xbb5dbe,_0x1cb2eb[_0x2a94de(0x2cf)](_0x5f229b,_0x3c5262),_0xf4371c+=_0x39f75b,_0x260511=_0x194c35+_0x91f40a[_0x2a94de(0x233)](_0x301d20)*_0x28288d,_0x45ff6e=_0x2f81de+_0x2b5a29['sin'](_0x557112)*_0x2ea673,_0x32222a['lineTo'](_0x1e379f,_0x33b147),_0x226acc+=_0x444f18;}const _0x4f6e6a=ColorManager[_0x2a94de(0x191)],_0x1c547d=_0x4f6e6a[Math['floor'](Math[_0x2a94de(0x398)]()*_0x4f6e6a[_0x2a94de(0x2e9)])];let _0x4d8369=Math[_0x2a94de(0x17f)](0x10)+0x10;if(_0x4d8369%0x2!==0x0)_0x4d8369+=0x1;const _0xe4c7a9=new Bitmap(_0x4d8369,_0x4d8369),_0x539d35=Math[_0x2a94de(0x441)](_0x4d8369/0x2);_0xe4c7a9['drawPolyArc'](_0x539d35,_0x539d35,_0x539d35,0x168,_0x1c547d,0x0,0x1,0x0),_0xe4c7a9[_0x2a94de(0x2b2)](_0x539d35-0x1,_0x539d35-0x1,0x2,0x2,_0x1c547d),_0xe4c7a9[_0x2a94de(0x182)]=![];if(ImageManager[_0x2a94de(0x24b)])console[_0x2a94de(0x47b)](_0x2a94de(0x2d5));return this[_0x2a94de(0x1d4)]=this['_cached_WeatherEffects_LightOrbs']||[],this[_0x2a94de(0x1d4)]['push'](_0xe4c7a9),_0xe4c7a9;},ImageManager[_0x5da319(0x1cd)]=function(){const _0x670e1d=_0x5da319;if(this[_0x670e1d(0x1e1)]&&this['_cached_WeatherEffects_DarkOrbs'][_0x670e1d(0x2e9)]>=ImageManager[_0x670e1d(0x302)]){const _0x30479b=this[_0x670e1d(0x1e1)];return _0x30479b[Math[_0x670e1d(0x441)](Math[_0x670e1d(0x398)]()*_0x30479b['length'])];}const _0x24da06=ColorManager['WEATHER_DARKNESS_COLORS'],_0x4481f0=_0x24da06[Math[_0x670e1d(0x441)](Math[_0x670e1d(0x398)]()*_0x24da06[_0x670e1d(0x2e9)])];let _0x57ca0f=Math['randomInt'](0x10)+0x10;if(_0x57ca0f%0x2!==0x0)_0x57ca0f+=0x1;const _0x102f7a=new Bitmap(_0x57ca0f,_0x57ca0f),_0x38890c=Math['floor'](_0x57ca0f/0x2);_0x102f7a[_0x670e1d(0x2c4)](_0x38890c,_0x38890c,_0x38890c,0x168,_0x4481f0,0x0,0x1,0x0),_0x102f7a[_0x670e1d(0x2b2)](_0x38890c-0x1,_0x38890c-0x1,0x2,0x2,_0x4481f0),_0x102f7a['_customModified']=![];if(ImageManager[_0x670e1d(0x24b)])console[_0x670e1d(0x47b)](_0x670e1d(0x1be));return this['_cached_WeatherEffects_DarkOrbs']=this[_0x670e1d(0x1e1)]||[],this[_0x670e1d(0x1e1)][_0x670e1d(0x28e)](_0x102f7a),_0x102f7a;},ImageManager[_0x5da319(0x409)]=function(){const _0x43ef45=_0x5da319;if(this[_0x43ef45(0x3aa)]&&this[_0x43ef45(0x3aa)][_0x43ef45(0x2e9)]>=ImageManager[_0x43ef45(0x302)]){const _0xb48efd=this[_0x43ef45(0x3aa)];return _0xb48efd[Math['floor'](Math[_0x43ef45(0x398)]()*_0xb48efd[_0x43ef45(0x2e9)])];}const _0x175337=ColorManager['WEATHER_FROST_COLORS'],_0x5cb42b=1.3;let _0x2ef79c=ColorManager[_0x43ef45(0x14a)](_0x175337[Math[_0x43ef45(0x441)](Math[_0x43ef45(0x398)]()*_0x175337[_0x43ef45(0x2e9)])],_0x5cb42b),_0x391acd=ColorManager[_0x43ef45(0x14a)](_0x175337[Math[_0x43ef45(0x441)](Math[_0x43ef45(0x398)]()*_0x175337[_0x43ef45(0x2e9)])],_0x5cb42b),_0x380723=ColorManager['adjustHexColor'](_0x175337[Math[_0x43ef45(0x441)](Math[_0x43ef45(0x398)]()*_0x175337[_0x43ef45(0x2e9)])],_0x5cb42b);const _0x4b12dd=new Bitmap(0x1f4,0x1f4);_0x4b12dd[_0x43ef45(0x20e)](0xfa,0x15e,0x4b,_0x2ef79c,0x4,0x14),_0x4b12dd[_0x43ef45(0x20e)](0xfa,0xfa,0x64,_0x380723,0x8,0x19),_0x4b12dd['drawCloud'](0xfa,0xfa,0x3c,_0x391acd,0x4,0x14);const _0x4c732f=_0x4b12dd[_0x43ef45(0x16e)],_0x335d7b=_0x4b12dd[_0x43ef45(0x42b)],_0x56ec24=0x2;let _0x493a0d=0x20;while(_0x493a0d--){if(_0x43ef45(0x56f)===_0x43ef45(0x1fc))_0x5f1b84[_0x43ef45(0x556)](_0x11da94,_0x55aea7),_0x288055[_0x43ef45(0x297)]=_0x43ef45(0x341),_0x1e18ea[_0x43ef45(0x3a2)]['applyPluginCmdSettings'](_0x49d374);else{const _0x56d458=Math['randomInt'](_0x4c732f-_0x56ec24*0x2)+_0x56ec24,_0x33fde1=Math[_0x43ef45(0x17f)](_0x335d7b-_0x56ec24*0x2)+_0x56ec24;let _0x3f916d=_0x175337[Math[_0x43ef45(0x441)](Math[_0x43ef45(0x398)]()*_0x175337[_0x43ef45(0x2e9)])];_0x3f916d=ColorManager[_0x43ef45(0x14a)](_0x3f916d,_0x5cb42b);const _0x111183=Math[_0x43ef45(0x17f)](_0x56ec24)+0x1;_0x4b12dd[_0x43ef45(0x222)]=Math['randomInt'](0x40)+0xa0,_0x4b12dd[_0x43ef45(0x44f)](_0x56d458,_0x33fde1,_0x111183,_0x3f916d);}}const _0x3218e5=_0x56ec24*0x3,_0x232899=_0x3218e5/0x2;_0x493a0d=0x8;while(_0x493a0d--){if(_0x43ef45(0x295)!==_0x43ef45(0x1c3)){const _0x4d5bba=Math[_0x43ef45(0x17f)](_0x4c732f-_0x3218e5*0x2)+_0x3218e5,_0x158091=Math['randomInt'](_0x335d7b-_0x3218e5*0x2)+_0x3218e5;let _0x2d5b2b=_0x175337[Math['floor'](Math[_0x43ef45(0x398)]()*_0x175337[_0x43ef45(0x2e9)])];_0x2d5b2b=ColorManager[_0x43ef45(0x14a)](_0x2d5b2b,_0x5cb42b),_0x4b12dd['paintOpacity']=Math[_0x43ef45(0x17f)](0x40)+0xa0,_0x4b12dd[_0x43ef45(0x10e)](_0x4d5bba,_0x158091,_0x2d5b2b,_0x2d5b2b,0x4,_0x3218e5,_0x232899);}else _0x3dce8e['ConvertParams'](_0x194ef3,_0x3d4083),_0x1bad82[_0x43ef45(0x297)]='slow_icons_2',_0x3bd581[_0x43ef45(0x3a2)][_0x43ef45(0x3d1)](_0x354e54);}_0x4b12dd['_customModified']=![];if(ImageManager[_0x43ef45(0x24b)])console[_0x43ef45(0x47b)](_0x43ef45(0x4b9));return this['_cached_WeatherEffects_DiamondDust']=this[_0x43ef45(0x3aa)]||[],this[_0x43ef45(0x3aa)]['push'](_0x4b12dd),_0x4b12dd;},ImageManager['weatherEffectsCrumblingCave']=function(){const _0x17220c=_0x5da319;if(this['_cached_WeatherEffects_CrumblingCave']&&this[_0x17220c(0x464)][_0x17220c(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x5b80cc=this['_cached_WeatherEffects_CrumblingCave'];return _0x5b80cc[Math[_0x17220c(0x441)](Math[_0x17220c(0x398)]()*_0x5b80cc[_0x17220c(0x2e9)])];}const _0x6f45c9=ColorManager[_0x17220c(0x1d1)],_0x534c90=_0x6f45c9[Math[_0x17220c(0x441)](Math[_0x17220c(0x398)]()*_0x6f45c9[_0x17220c(0x2e9)])],_0x5a457c=_0x6f45c9[Math['floor'](Math[_0x17220c(0x398)]()*_0x6f45c9[_0x17220c(0x2e9)])],_0x3c0c34=_0x6f45c9[Math[_0x17220c(0x441)](Math[_0x17220c(0x398)]()*_0x6f45c9['length'])],_0x3d007b=new Bitmap(0x1f4,0x1f4);_0x3d007b['drawCloud'](0xfa,0x15e,0x4b,_0x534c90,0x4,0x14),_0x3d007b[_0x17220c(0x20e)](0xfa,0xfa,0x64,_0x3c0c34,0x8,0x19),_0x3d007b[_0x17220c(0x20e)](0xfa,0xfa,0x3c,_0x5a457c,0x4,0x14);const _0x5e5368=_0x3d007b[_0x17220c(0x16e)],_0x5b40f8=_0x3d007b[_0x17220c(0x42b)],_0x49becb=0x4;let _0x40446c=0x80;while(_0x40446c--){const _0x4960d6=Math[_0x17220c(0x17f)](_0x5e5368-_0x49becb*0x2)+_0x49becb,_0x41cbde=Math['randomInt'](_0x5b40f8-_0x49becb*0x2)+_0x49becb;let _0x242e1f=_0x6f45c9[Math['floor'](Math['random']()*_0x6f45c9[_0x17220c(0x2e9)])];const _0x4e25de=Math[_0x17220c(0x17f)](_0x49becb)+0x1;_0x3d007b[_0x17220c(0x222)]=Math[_0x17220c(0x17f)](0x40)+0xa0,_0x3d007b[_0x17220c(0x44f)](_0x4960d6,_0x41cbde,_0x4e25de,_0x242e1f);}_0x3d007b[_0x17220c(0x182)]=![];if(ImageManager[_0x17220c(0x24b)])console['log']('crumblingcave');return this[_0x17220c(0x464)]=this[_0x17220c(0x464)]||[],this[_0x17220c(0x464)][_0x17220c(0x28e)](_0x3d007b),_0x3d007b;},ImageManager[_0x5da319(0x46f)]=function(){const _0x3939dc=_0x5da319;if(this['_cached_WeatherEffects_Aurora']&&this['_cached_WeatherEffects_Aurora'][_0x3939dc(0x2e9)]>=ImageManager[_0x3939dc(0x302)]*0x5){const _0x4bd06e=this['_cached_WeatherEffects_Aurora'];return _0x4bd06e[Math['floor'](Math[_0x3939dc(0x398)]()*_0x4bd06e[_0x3939dc(0x2e9)])];}const _0x2254b9=Math[_0x3939dc(0x17f)](0xc0)+0x40,_0xd940f5=Math[_0x3939dc(0x17f)](0xc0)+0x40,_0x3fd1c0=Math[_0x3939dc(0x17f)](0xc0)+0x40,_0x45780d=_0x3939dc(0x4d4)['format'](_0x2254b9,_0xd940f5,_0x3fd1c0),_0x1d4e19=_0x3939dc(0x31c)[_0x3939dc(0x555)](_0x2254b9,_0xd940f5,_0x3fd1c0),_0x390b78=new Bitmap(0x1f4,0x1f4),_0x19ee25=_0x390b78[_0x3939dc(0x16e)],_0xfb79d4=_0x390b78['height'],_0x265294=Math[_0x3939dc(0x17f)](0xf4240),_0x727d7=Math[_0x3939dc(0x398)]()*0.03+0.02;for(let _0x29c380=0x0;_0x29c380<_0xfb79d4;_0x29c380++){const _0x55ae6c=(_0x29c380+_0x265294)*_0x727d7;let _0x46cee5=_0x19ee25-Math[_0x3939dc(0x441)](Math['cos'](_0x55ae6c)*0xa)-0x28;const _0x2251b5=_0x29c380;_0x390b78[_0x3939dc(0x222)]=(0x1-Math[_0x3939dc(0x3b9)](_0x29c380-_0xfb79d4/0x2)/(_0xfb79d4/0x2))*0xc0,_0x390b78[_0x3939dc(0x505)](_0x46cee5,_0x2251b5,Math[_0x3939dc(0x17f)](0x14)+0xa,0x1,_0x1d4e19,_0x45780d);let _0x5562ca=Math[_0x3939dc(0x340)](Math[_0x3939dc(0x3ca)]((_0x29c380+_0x265294)*_0x727d7)*0x5)+0xa;_0x46cee5-=_0x5562ca,_0x390b78[_0x3939dc(0x505)](_0x46cee5,_0x2251b5,_0x5562ca,0x1,_0x1d4e19,_0x1d4e19),_0x5562ca=Math[_0x3939dc(0x340)](Math['cos']((_0x29c380+_0x265294)*_0x727d7)*0x3c)+0xa0,_0x46cee5-=_0x5562ca;const _0x4571e4=Math[_0x3939dc(0x17f)](0x3c);_0x46cee5+=_0x4571e4,_0x390b78[_0x3939dc(0x505)](_0x46cee5,_0x2251b5,_0x5562ca-_0x4571e4,0x1,_0x45780d,_0x1d4e19);}_0x390b78['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x3939dc(0x36a));return this['_cached_WeatherEffects_Aurora']=this[_0x3939dc(0xf1)]||[],this[_0x3939dc(0xf1)]['push'](_0x390b78),_0x390b78;},ImageManager[_0x5da319(0x27e)]=function(){const _0x3a3161=_0x5da319;if(this['_cached_WeatherEffects_ShootingStars']&&this['_cached_WeatherEffects_ShootingStars'][_0x3a3161(0x2e9)]>=ImageManager[_0x3a3161(0x302)]*0x3){const _0x2cf150=this[_0x3a3161(0x510)];return _0x2cf150[Math[_0x3a3161(0x441)](Math[_0x3a3161(0x398)]()*_0x2cf150[_0x3a3161(0x2e9)])];}const _0xa9f2ae=Math['randomInt'](0x80)+0x80,_0xc42ede=Math[_0x3a3161(0x17f)](0x80)+0x80,_0x45e730=Math[_0x3a3161(0x17f)](0x80)+0x80,_0x9b86b4=_0x3a3161(0x4d4)[_0x3a3161(0x555)](_0xa9f2ae,_0xc42ede,_0x45e730),_0x144742=_0x3a3161(0x31c)[_0x3a3161(0x555)](_0xa9f2ae,_0xc42ede,_0x45e730),_0x4e1567=Math[_0x3a3161(0x17f)](0x32)+0x32,_0x82227=0x4,_0x3bdfff=new Bitmap(_0x4e1567*0x2,_0x82227);_0x3bdfff[_0x3a3161(0x505)](0x0,0x0,_0x4e1567,_0x82227,_0x9b86b4,_0x144742),_0x3bdfff[_0x3a3161(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3a3161(0x47b)](_0x3a3161(0x252));return this[_0x3a3161(0x510)]=this[_0x3a3161(0x510)]||[],this[_0x3a3161(0x510)]['push'](_0x3bdfff),_0x3bdfff;},ImageManager['weatherEffectsSparkle']=function(){const _0x21d277=_0x5da319;if(this['_cached_WeatherEffects_Sparkle'])return this['_cached_WeatherEffects_Sparkle'];const _0x223b49=0x20,_0x44f9b9=new Bitmap(_0x223b49,_0x223b49),_0x54a958='#ffffff';_0x44f9b9[_0x21d277(0x10e)](_0x223b49/0x2,_0x223b49/0x2,_0x54a958,_0x54a958,0x4,_0x223b49/0x2,_0x223b49/0x8),_0x44f9b9[_0x21d277(0x182)]=![];if(ImageManager[_0x21d277(0x24b)])console[_0x21d277(0x47b)]('sparkle');return this[_0x21d277(0x3b7)]=_0x44f9b9,_0x44f9b9;},ImageManager[_0x5da319(0x259)]=function(){const _0x5e4488=_0x5da319;if(this[_0x5e4488(0x438)]&&this[_0x5e4488(0x438)][_0x5e4488(0x2e9)]>=ImageManager[_0x5e4488(0x302)]){if(_0x5e4488(0x4a3)!=='cBXSu'){if(_0x44f149&&_0x4d25d1[_0x5e4488(0x4ef)]())return _0x5e4488(0x575);return this[_0x5e4488(0x3db)](0x1)[_0x5e4488(0x297)]||_0x5e4488(0x575);}else{const _0x193f8d=this[_0x5e4488(0x438)];return _0x193f8d[Math[_0x5e4488(0x441)](Math[_0x5e4488(0x398)]()*_0x193f8d[_0x5e4488(0x2e9)])];}}const _0x3b016d=new Bitmap(0x1f4,0x1f4),_0x1881f3=_0x5e4488(0x320),_0xb76e76=_0x5e4488(0x126),_0x10e5b0=_0x3b016d['width'],_0x406636=_0x3b016d[_0x5e4488(0x42b)],_0x1dd912=0x3c,_0x34e94b=_0x1dd912/0x2,_0x176c45=0x2;let _0x12ed1a=0x10;while(_0x12ed1a--){const _0x56d995=Math['randomInt'](_0x10e5b0-_0x1dd912)+_0x1dd912,_0x479091=Math[_0x5e4488(0x17f)](_0x406636-_0x176c45)+_0x176c45;_0x3b016d[_0x5e4488(0x222)]=Math['randomInt'](0x40)+0xc0,_0x3b016d[_0x5e4488(0x505)](_0x56d995,_0x479091,_0x34e94b,0x2,_0x1881f3,_0xb76e76),_0x3b016d[_0x5e4488(0x2b2)](_0x56d995+_0x34e94b,_0x479091,_0x34e94b,0x2,_0xb76e76);}_0x3b016d[_0x5e4488(0x182)]=![];if(ImageManager[_0x5e4488(0x24b)])console[_0x5e4488(0x47b)](_0x5e4488(0x477));return this['_cached_WeatherEffects_AcidRain']=this[_0x5e4488(0x438)]||[],this['_cached_WeatherEffects_AcidRain']['push'](_0x3b016d),_0x3b016d;},ImageManager[_0x5da319(0x431)]=function(){const _0x1dc91f=_0x5da319;if(this[_0x1dc91f(0x220)]&&this[_0x1dc91f(0x220)][_0x1dc91f(0x2e9)]>=ImageManager[_0x1dc91f(0x302)]){const _0x5945c7=this['_cached_WeatherEffects_BloodRain'];return _0x5945c7[Math[_0x1dc91f(0x441)](Math[_0x1dc91f(0x398)]()*_0x5945c7[_0x1dc91f(0x2e9)])];}const _0x4d43a9=new Bitmap(0x1f4,0x1f4),_0x4efa8c=_0x1dc91f(0x373),_0x5ebb9=_0x1dc91f(0x25d),_0x1f47cb=_0x4d43a9[_0x1dc91f(0x16e)],_0x27b672=_0x4d43a9[_0x1dc91f(0x42b)],_0x1f4de1=0x64,_0x118253=_0x1f4de1/0x2,_0x3ba428=0x3;let _0x189bca=0x10;while(_0x189bca--){if('IJgBH'==='XRsfj')return _0x197182[_0x1dc91f(0x407)]&&_0x4fb63d[_0x1dc91f(0x198)][_0x1dc91f(0x4e2)]('['+_0x97a72f+']');else{const _0x3027c0=Math['randomInt'](_0x1f47cb-_0x1f4de1)+_0x1f4de1,_0x503577=Math[_0x1dc91f(0x17f)](_0x27b672-_0x3ba428)+_0x3ba428;_0x4d43a9[_0x1dc91f(0x222)]=Math[_0x1dc91f(0x17f)](0x40)+0xc0,_0x4d43a9[_0x1dc91f(0x505)](_0x3027c0,_0x503577,_0x118253,0x2,_0x4efa8c,_0x5ebb9),_0x4d43a9[_0x1dc91f(0x2b2)](_0x3027c0+_0x118253,_0x503577,_0x118253,0x2,_0x5ebb9);}}_0x4d43a9[_0x1dc91f(0x182)]=![];if(ImageManager[_0x1dc91f(0x24b)])console[_0x1dc91f(0x47b)](_0x1dc91f(0x19c));return this[_0x1dc91f(0x220)]=this[_0x1dc91f(0x220)]||[],this[_0x1dc91f(0x220)][_0x1dc91f(0x28e)](_0x4d43a9),_0x4d43a9;},ImageManager[_0x5da319(0x100)]=function(){const _0x431dc8=_0x5da319;if(this[_0x431dc8(0x25b)]&&ColorManager['WEATHER_PASTEL_BRUME_COLORS'][_0x431dc8(0x2e9)]<=0x0){if(_0x431dc8(0x47e)!=='criXZ'){const _0x37c41b=_0x56b661[_0x431dc8(0x56a)](_0x3bb56a);_0x44bc2a[_0x431dc8(0x28e)](_0x37c41b),_0x163da6=_0x127325[_0x431dc8(0x57d)](_0x1c6a6c=>_0x463d2e[_0x431dc8(0x340)](_0x1c6a6c*0.85)[_0x431dc8(0x485)](0x0,0xff));}else{const _0x210c52=this[_0x431dc8(0x25b)];return _0x210c52[Math[_0x431dc8(0x441)](Math[_0x431dc8(0x398)]()*_0x210c52[_0x431dc8(0x2e9)])];}}this[_0x431dc8(0x25b)]=this[_0x431dc8(0x25b)]||[];const _0xa73b76=ColorManager[_0x431dc8(0x243)][_0x431dc8(0x46b)](),_0x3c0cbc=_0x431dc8(0x1dd);{const _0x4d14bd=0x8,_0x4c3aa0=new Bitmap(_0x4d14bd*0x2,_0x4d14bd*0x2);_0x4c3aa0['drawCircle'](_0x4d14bd,_0x4d14bd,_0x4d14bd,_0x3c0cbc),_0x4c3aa0[_0x431dc8(0x44f)](_0x4d14bd,_0x4d14bd,_0x4d14bd-0x1,_0xa73b76),_0x4c3aa0[_0x431dc8(0x182)]=![],this[_0x431dc8(0x25b)]['push'](_0x4c3aa0);}{if(_0x431dc8(0x583)!==_0x431dc8(0x583))_0x50aa51[_0x431dc8(0x556)](_0x51f45b,_0x3f8381),_0x2be874[_0x431dc8(0x297)]=_0x431dc8(0x549),_0x221447[_0x431dc8(0x3a2)][_0x431dc8(0x3d1)](_0x34eef4);else{const _0x2ce59e=new Bitmap(0x10,0x8);_0x2ce59e['fillRect'](0x0,0x0,0x10,0x8,_0x3c0cbc),_0x2ce59e[_0x431dc8(0x2b2)](0x1,0x1,0xe,0x6,_0xa73b76),_0x2ce59e[_0x431dc8(0x182)]=![],this['_cached_WeatherEffects_Confetti'][_0x431dc8(0x28e)](_0x2ce59e);}}const _0x159a75=new Bitmap(0x10,0x10);_0x159a75[_0x431dc8(0x10e)](0x8,0x8,_0x3c0cbc,_0x3c0cbc,0x5,0x8,0x4),_0x159a75[_0x431dc8(0x10e)](0x8,0x8,_0xa73b76,_0xa73b76,0x5,0x7,0x3),_0x159a75[_0x431dc8(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x431dc8(0x47b)](_0x431dc8(0x580));return this[_0x431dc8(0x25b)][_0x431dc8(0x28e)](_0x159a75),_0x159a75;},ImageManager[_0x5da319(0x420)]=function(){const _0x284b59=_0x5da319;if(this['_cached_WeatherEffects_SunBeam']&&ColorManager[_0x284b59(0x447)][_0x284b59(0x2e9)]<=0x0){const _0x531d75=this[_0x284b59(0x476)];return _0x531d75[Math[_0x284b59(0x441)](Math[_0x284b59(0x398)]()*_0x531d75[_0x284b59(0x2e9)])];}const _0x5c7234=ColorManager[_0x284b59(0x447)][_0x284b59(0x46b)](),_0x4a2117=new Bitmap(0x3e8,0x3e8),_0x52420a=_0x4a2117['width']/0x2;return _0x4a2117[_0x284b59(0x2c4)](_0x52420a,_0x52420a,_0x52420a,0x168,_0x5c7234,0x0,0x1,0x0),_0x4a2117[_0x284b59(0x182)]=![],this[_0x284b59(0x476)]=this[_0x284b59(0x476)]||[],this[_0x284b59(0x476)][_0x284b59(0x28e)](_0x4a2117),_0x4a2117;},ImageManager[_0x5da319(0x348)]=function(){const _0x51d771=_0x5da319;if(this[_0x51d771(0x436)]&&ColorManager[_0x51d771(0x49a)][_0x51d771(0x2e9)]<=0x0){if(_0x51d771(0x330)!==_0x51d771(0x330))_0x2a6e26[_0x51d771(0x556)](_0x43621b,_0x16911e),_0x5d2bd8[_0x51d771(0x297)]=_0x51d771(0x352),_0x4ef343[_0x51d771(0x3a2)][_0x51d771(0x3d1)](_0x44c22d);else{const _0x1dab90=this['_cached_WeatherEffects_PrismBeams'];return _0x1dab90[Math[_0x51d771(0x441)](Math[_0x51d771(0x398)]()*_0x1dab90[_0x51d771(0x2e9)])];}}const _0x2e91db=ColorManager[_0x51d771(0x49a)][_0x51d771(0x46b)](),_0x57b3ec=new Bitmap(0x3e8,0x3e8),_0x62153f=_0x57b3ec[_0x51d771(0x16e)]/0x2;return _0x57b3ec['drawPolyArc'](_0x62153f,_0x62153f,_0x62153f,0x168,_0x2e91db,0x0,0x1,0x0),_0x57b3ec['_customModified']=![],this[_0x51d771(0x436)]=this['_cached_WeatherEffects_PrismBeams']||[],this[_0x51d771(0x436)]['push'](_0x57b3ec),_0x57b3ec;},ImageManager[_0x5da319(0x29d)]=function(){const _0x4226e8=_0x5da319;if(this[_0x4226e8(0x16c)]&&ColorManager[_0x4226e8(0x1cb)][_0x4226e8(0x2e9)]<=0x0){if(_0x4226e8(0x4c0)!==_0x4226e8(0x4c0)){let _0x53e97f=0x1;if(!_0x2d320e[_0x4226e8(0x1ce)]()){if(this['_flags']['alwaysVisiblePlayer']&&!this[_0x4226e8(0x50e)]['_lowerLayer']){const _0x488d0e=_0x1fc0d4[_0x4226e8(0xe8)]()-this['x'],_0x4bfe9d=_0x2163d6[_0x4226e8(0x333)]()-this['y'],_0x3bdea5=_0x287bce[_0x4226e8(0x1bc)](_0x488d0e*_0x488d0e+_0x4bfe9d*_0x4bfe9d),_0x33725d=0x5*_0x203260[_0x4226e8(0x41f)]();if(_0x3bdea5<=_0x33725d)_0x53e97f*=0.15;}}if(this[_0x4226e8(0x271)]>0x0){const _0x184aba=this['_opacityFadeInTimeWhole']||0x1,_0x44fb83=this['_opacityFadeInTime'];_0x53e97f*=(_0x184aba-_0x44fb83)/_0x184aba,this[_0x4226e8(0x271)]--;}return _0x53e97f;}else{const _0x2d4746=this[_0x4226e8(0x16c)];return _0x2d4746[Math[_0x4226e8(0x441)](Math['random']()*_0x2d4746[_0x4226e8(0x2e9)])];}}let _0x439f4f=ColorManager[_0x4226e8(0x1cb)][_0x4226e8(0x46b)]();_0x439f4f=ColorManager['adjustHexColor'](_0x439f4f,1.2);const _0x251218=new Bitmap(0x3e8,0x3e8),_0x337d11=_0x251218[_0x4226e8(0x16e)]/0x2;return _0x251218[_0x4226e8(0x2c4)](_0x337d11,_0x337d11,_0x337d11,0x168,_0x439f4f,0x0,0x1,0x0),_0x251218[_0x4226e8(0x182)]=![],this['_cached_WeatherEffects_ArcticBeams']=this[_0x4226e8(0x16c)]||[],this[_0x4226e8(0x16c)][_0x4226e8(0x28e)](_0x251218),_0x251218;},ImageManager[_0x5da319(0x2be)]=function(){const _0x426394=_0x5da319;if(this[_0x426394(0x121)]&&this['_cached_WeatherEffects_LensFlare']['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x4d31f6=this[_0x426394(0x121)];return _0x4d31f6[Math[_0x426394(0x441)](Math['random']()*_0x4d31f6[_0x426394(0x2e9)])];}const _0x167bef=Math['max']($dataSystem[_0x426394(0x1f3)]['screenWidth'],$dataSystem[_0x426394(0x1f3)][_0x426394(0x2c5)])||0x1,_0x497428=Math[_0x426394(0x1bc)](_0x167bef*_0x167bef+_0x167bef*_0x167bef),_0x3f9680=Math['randomInt'](_0x497428*0x1/0x3)+_0x497428*0x2/0x3,_0x2707d9=Math[_0x426394(0x17f)](0xc8)+0x64,_0x4153e0=new Bitmap(_0x3f9680,_0x2707d9*0x2);_0x4153e0['fillRect'](0x0,0x0,_0x3f9680,_0x3f9680,_0x426394(0x1dd));const _0x4c352f=_0x4153e0[_0x426394(0x16e)]/0x2,_0x1694eb=_0x4153e0[_0x426394(0x42b)],_0x185b59=_0x4c352f-_0x2707d9,_0xd01669=_0x1694eb/0x2;let _0x528aee=Math[_0x426394(0x17f)](0xa)+0x6;const _0x53cd0f=_0x185b59/_0x528aee;for(let _0x31c5e1=0x0;_0x31c5e1<_0x528aee;_0x31c5e1++){if(_0x426394(0x4d8)!==_0x426394(0x362)){if(Math['random']()<0.4-_0x31c5e1*0.04)continue;let _0x5ac242=Math[_0x426394(0x17f)](_0x2707d9*(_0x31c5e1*0.75)/_0x528aee)+_0x2707d9*0x1/_0x528aee;const _0x4cc367=_0x4c352f+_0x31c5e1*_0x53cd0f;_0x4153e0['paintOpacity']=Math[_0x426394(0x17f)](0x40)+0xc0,_0x4153e0[_0x426394(0x570)](_0x4cc367,_0xd01669,_0x5ac242);}else{if(this[_0x426394(0x309)]()[_0x426394(0x297)]===_0x426394(0x575))return;if(this[_0x426394(0x53c)]===this[_0x426394(0x309)]()[_0x426394(0x332)][_0x426394(0x12e)])return;const _0x294848=this[_0x426394(0x309)]()[_0x426394(0x539)];let _0x3a03a6=this[_0x426394(0x309)]()[_0x426394(0x332)]['color'];this[_0x426394(0x53c)]=_0x3a03a6;if(_0x294848>0x0){const _0x51062c=[this['_dimmerSprite'][_0x426394(0x2fe)],this[_0x426394(0x2e1)][_0x426394(0x4a2)],this[_0x426394(0x2e1)]['_blue']],_0x242743=_0x576eb0[_0x426394(0x213)](_0x3a03a6);for(let _0x20cff6=0x0;_0x20cff6<0x3;_0x20cff6++){_0x51062c[_0x20cff6]=_0x20e8ac[_0x426394(0x31d)]((_0x51062c[_0x20cff6]*(_0x294848-0x1)+_0x242743[_0x20cff6])/_0x294848);}this[_0x426394(0x53c)]=_0x2f2dd1[_0x426394(0x56a)](_0x51062c);}const _0xb25b0f=_0x11a6c4[_0x426394(0x213)](this[_0x426394(0x53c)]);this[_0x426394(0x2e1)]['setColor'](_0xb25b0f[0x0]||0x0,_0xb25b0f[0x1]||0x0,_0xb25b0f[0x2]||0x0);}}const _0x3f39b9=_0x3f9680-_0x2707d9;_0x4153e0[_0x426394(0x222)]=Math[_0x426394(0x17f)](0x10)+0x10,_0x4153e0[_0x426394(0x1b8)](_0x3f39b9,_0xd01669,_0x2707d9),_0x4153e0[_0x426394(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x426394(0x47b)](_0x426394(0x325));return this[_0x426394(0x121)]=this[_0x426394(0x121)]||[],this['_cached_WeatherEffects_LensFlare'][_0x426394(0x28e)](_0x4153e0),_0x4153e0;},ImageManager[_0x5da319(0x4e0)]=function(){const _0x36ff61=_0x5da319;if(this[_0x36ff61(0x563)]&&ColorManager['WEATHER_MOON_BEAM_COLORS']['length']<=0x0){const _0x251c5f=this[_0x36ff61(0x563)];return _0x251c5f[Math['floor'](Math[_0x36ff61(0x398)]()*_0x251c5f['length'])];}let _0x3a7ccd=ColorManager[_0x36ff61(0x4ed)][_0x36ff61(0x46b)]();_0x3a7ccd=ColorManager[_0x36ff61(0x14a)](_0x3a7ccd,1.2);const _0xcdccf7=new Bitmap(0x3e8,0x3e8),_0x464213=_0xcdccf7['width']/0x2;return _0xcdccf7[_0x36ff61(0x2c4)](_0x464213,_0x464213,_0x464213,0x168,_0x3a7ccd,0x0,0x1,0x0),_0xcdccf7['_customModified']=![],this['_cached_WeatherEffects_MoonBeam']=this['_cached_WeatherEffects_MoonBeam']||[],this[_0x36ff61(0x563)][_0x36ff61(0x28e)](_0xcdccf7),_0xcdccf7;},ImageManager[_0x5da319(0x4f2)]=function(){const _0x444eb4=_0x5da319;if(this['_cached_WeatherEffects_UvBeam']&&ColorManager[_0x444eb4(0x2b6)][_0x444eb4(0x2e9)]<=0x0){if(_0x444eb4(0x396)!==_0x444eb4(0x396)){const _0x4eec93=this[_0x444eb4(0x50a)];return _0x4eec93[_0x4ade4d[_0x444eb4(0x441)](_0x5ce146[_0x444eb4(0x398)]()*_0x4eec93['length'])];}else{const _0x38b8f0=this[_0x444eb4(0x49c)];return _0x38b8f0[Math[_0x444eb4(0x441)](Math[_0x444eb4(0x398)]()*_0x38b8f0['length'])];}}const _0x5abaa6=ColorManager[_0x444eb4(0x2b6)]['pop'](),_0xb6b4e8=new Bitmap(0x3e8,0x3e8),_0x24c86d=_0xb6b4e8[_0x444eb4(0x16e)]/0x2;return _0xb6b4e8[_0x444eb4(0x2c4)](_0x24c86d,_0x24c86d,_0x24c86d,0x168,_0x5abaa6,0x0,0x1,0x0),_0xb6b4e8[_0x444eb4(0x182)]=![],this[_0x444eb4(0x49c)]=this['_cached_WeatherEffects_UvBeam']||[],this[_0x444eb4(0x49c)]['push'](_0xb6b4e8),_0xb6b4e8;},ImageManager[_0x5da319(0x146)]=function(){const _0x363e6a=_0x5da319;if(this[_0x363e6a(0x193)]&&ColorManager[_0x363e6a(0x57c)][_0x363e6a(0x2e9)]<=0x0){if(_0x363e6a(0x183)===_0x363e6a(0x183)){const _0x5a7c89=this[_0x363e6a(0x193)];return _0x5a7c89[Math['floor'](Math[_0x363e6a(0x398)]()*_0x5a7c89[_0x363e6a(0x2e9)])];}else{const _0x7a8d07=this[_0x363e6a(0x56e)];return _0x7a8d07[_0x2c1c81[_0x363e6a(0x441)](_0x716eec[_0x363e6a(0x398)]()*_0x7a8d07[_0x363e6a(0x2e9)])];}}const _0x189528=ColorManager[_0x363e6a(0x57c)][_0x363e6a(0x46b)](),_0x32a100=new Bitmap(0x3e8,0x3e8),_0x1d5746=_0x32a100[_0x363e6a(0x16e)]/0x2;return _0x32a100[_0x363e6a(0x2c4)](_0x1d5746,_0x1d5746,_0x1d5746,0x168,_0x189528,0x0,0x1,0x0),_0x32a100[_0x363e6a(0x182)]=![],this[_0x363e6a(0x193)]=this[_0x363e6a(0x193)]||[],this[_0x363e6a(0x193)]['push'](_0x32a100),_0x32a100;},ImageManager[_0x5da319(0x449)]=function(){const _0x3fb856=_0x5da319;if(this[_0x3fb856(0x192)]&&this['_cached_WeatherEffects_HouseDust'][_0x3fb856(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x38ede8=this[_0x3fb856(0x192)];return _0x38ede8[Math[_0x3fb856(0x441)](Math[_0x3fb856(0x398)]()*_0x38ede8['length'])];}const _0x5d393a=new Bitmap(0x1f4,0x1f4),_0x430703=_0x5d393a['width'],_0x1a7930=_0x5d393a[_0x3fb856(0x42b)],_0x6b5948=ColorManager['WEATHER_CLOUD_WHITE_COLORS'][_0x3fb856(0x24c)](),_0x47529f=1.5,_0x188b92=0x1;let _0x17a5bc=0x20;while(_0x17a5bc--){if(_0x3fb856(0x3c7)!==_0x3fb856(0x3c7)){if(this['_cached_WeatherEffects_Stars']&&_0xd9352b[_0x3fb856(0x1c2)]['length']<=0x0){const _0x3171c5=this[_0x3fb856(0x356)];return _0x3171c5[_0x33e7ec[_0x3fb856(0x441)](_0x548383['random']()*_0x3171c5[_0x3fb856(0x2e9)])];}const _0x2e14c1=new _0xb2716c(0x18,0x18),_0x47c0c8=_0x38b183['WEATHER_STAR_COLORS'][_0x3fb856(0x46b)]();_0x2e14c1[_0x3fb856(0x10e)](0xc,0xc,_0x47c0c8,_0x47c0c8,0x5,0xc,0x6),_0x2e14c1[_0x3fb856(0x182)]=![];if(_0x11b7a4[_0x3fb856(0x24b)])_0x3ecfe5[_0x3fb856(0x47b)](_0x3fb856(0x399));return this[_0x3fb856(0x356)]=this['_cached_WeatherEffects_Stars']||[],this[_0x3fb856(0x356)][_0x3fb856(0x28e)](_0x2e14c1),_0x2e14c1;}else{const _0x197090=Math[_0x3fb856(0x17f)](_0x430703-_0x188b92*0x2)+_0x188b92,_0x314fb7=Math['randomInt'](_0x1a7930-_0x188b92*0x2)+_0x188b92;let _0x452ecc=_0x6b5948[Math[_0x3fb856(0x441)](Math[_0x3fb856(0x398)]()*_0x6b5948[_0x3fb856(0x2e9)])];_0x452ecc=ColorManager[_0x3fb856(0x14a)](_0x452ecc,_0x47529f);const _0xaeece7=Math[_0x3fb856(0x17f)](_0x188b92)+0x1;_0x5d393a[_0x3fb856(0x222)]=Math[_0x3fb856(0x17f)](0x40)+0xa0,_0x5d393a[_0x3fb856(0x44f)](_0x197090,_0x314fb7,_0xaeece7,_0x452ecc);}}_0x5d393a[_0x3fb856(0x182)]=![];if(ImageManager[_0x3fb856(0x24b)])console[_0x3fb856(0x47b)]('housedust');return this[_0x3fb856(0x192)]=this[_0x3fb856(0x192)]||[],this['_cached_WeatherEffects_HouseDust'][_0x3fb856(0x28e)](_0x5d393a),_0x5d393a;},ImageManager['weatherEffectsFlameHaze']=function(){const _0xd42a61=_0x5da319;if(this[_0xd42a61(0x20b)]&&this['_cached_WeatherEffects_FlameHaze'][_0xd42a61(0x2e9)]>=ImageManager[_0xd42a61(0x302)]){const _0x885c0b=this[_0xd42a61(0x20b)];return _0x885c0b[Math[_0xd42a61(0x441)](Math[_0xd42a61(0x398)]()*_0x885c0b['length'])];}const _0x23a279=ColorManager[_0xd42a61(0x36c)][_0xd42a61(0x24c)](),_0x2ecfe4=_0x23a279[Math[_0xd42a61(0x441)](Math[_0xd42a61(0x398)]()*_0x23a279[_0xd42a61(0x2e9)])];_0x23a279['remove'](_0x2ecfe4);const _0x1dfd89=_0x23a279[Math['floor'](Math[_0xd42a61(0x398)]()*_0x23a279[_0xd42a61(0x2e9)])];_0x23a279[_0xd42a61(0x3f4)](_0x1dfd89);const _0x1b01a0=_0x23a279[Math[_0xd42a61(0x441)](Math[_0xd42a61(0x398)]()*_0x23a279[_0xd42a61(0x2e9)])];_0x23a279['remove'](_0x1b01a0);const _0x7b767d=new Bitmap(0x3e8,0x3e8);_0x7b767d['drawCloud'](0x1f4,0x28a,0xaf,_0x1b01a0,0x10,0x14),_0x7b767d[_0xd42a61(0x20e)](0x1f4,0x1f4,0xc8,_0x2ecfe4,0x40,0x19),_0x7b767d[_0xd42a61(0x20e)](0x1f4,0x15e,0xa0,_0x1dfd89,0x10,0x14),_0x7b767d[_0xd42a61(0x182)]=![];if(ImageManager[_0xd42a61(0x24b)])console[_0xd42a61(0x47b)](_0xd42a61(0x3e3));return this[_0xd42a61(0x20b)]=this['_cached_WeatherEffects_FlameHaze']||[],this[_0xd42a61(0x20b)][_0xd42a61(0x28e)](_0x7b767d),_0x7b767d;},ImageManager[_0x5da319(0x293)]=function(){const _0x493414=_0x5da319;if(this['_cached_WeatherEffects_Spiderbolt']&&this['_cached_WeatherEffects_Spiderbolt'][_0x493414(0x2e9)]>=ImageManager[_0x493414(0x302)]*0x3){const _0x462039=this[_0x493414(0x1fd)];return _0x462039[Math['floor'](Math['random']()*_0x462039[_0x493414(0x2e9)])];}const _0x1b8031=Math['max']($dataSystem[_0x493414(0x1f3)]['screenWidth'],$dataSystem[_0x493414(0x1f3)][_0x493414(0x2c5)])||0x1,_0x29f097=new Bitmap(_0x1b8031,_0x1b8031),_0x30d201='#ffffff';_0x29f097['drawStar'](_0x1b8031/0x2,_0x1b8031/0x2,_0x30d201,_0x30d201,0x4,0x10,0x4),_0x29f097[_0x493414(0x452)][_0x493414(0x38d)](0.5,0.5),_0x29f097['_context']['translate'](_0x1b8031,_0x1b8031/0x2),_0x29f097[_0x493414(0x4ff)](),_0x29f097['_customModified']=![];if(ImageManager[_0x493414(0x24b)])console[_0x493414(0x47b)](_0x493414(0x557));return this[_0x493414(0x1fd)]=this[_0x493414(0x1fd)]||[],this['_cached_WeatherEffects_Spiderbolt'][_0x493414(0x28e)](_0x29f097),_0x29f097;},ImageManager['weatherEffectsWaterDrop']=function(){const _0x58821d=_0x5da319;if(this[_0x58821d(0x234)]&&this['_cached_WeatherEffects_WaterDrop'][_0x58821d(0x2e9)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){if(_0x58821d(0x10a)===_0x58821d(0x10a)){const _0x56d92f=this[_0x58821d(0x234)];return _0x56d92f[Math['floor'](Math[_0x58821d(0x398)]()*_0x56d92f[_0x58821d(0x2e9)])];}else this[_0x58821d(0x215)]=(this[_0x58821d(0x215)]*(_0x10b080-0x1)+_0x168f95)/_0x136a1b;}const _0x50f5cd=_0x58821d(0x31f),_0xdf9fe8='rgba(255,255,255,1)';let _0x5656f9=Math[_0x58821d(0x17f)](0x1e)+0x1e;if(_0x5656f9%0x2!==0x0)_0x5656f9+=0x1;const _0x492d08=0x2,_0x5b7d99=new Bitmap(_0x5656f9,_0x492d08);_0x5b7d99['paintOpacity']=Math[_0x58821d(0x17f)](0x40)+0xc0,_0x5b7d99[_0x58821d(0x505)](0x0,0x0,_0x5656f9/0x2,_0x492d08,_0x50f5cd,_0xdf9fe8),_0x5b7d99[_0x58821d(0x2b2)](_0x5656f9/0x2,0x0,_0x5656f9/0x2,_0x492d08,_0xdf9fe8),_0x5b7d99['_customModified']=![];if(ImageManager[_0x58821d(0x24b)])console[_0x58821d(0x47b)](_0x58821d(0x584));return this['_cached_WeatherEffects_WaterDrop']=this[_0x58821d(0x234)]||[],this[_0x58821d(0x234)][_0x58821d(0x28e)](_0x5b7d99),_0x5b7d99;},ImageManager[_0x5da319(0x13d)]=function(){const _0x2b1804=_0x5da319;if(this[_0x2b1804(0x122)]&&ColorManager[_0x2b1804(0x10c)][_0x2b1804(0x2e9)]<=0x0){if(_0x2b1804(0x521)!==_0x2b1804(0x4d2)){const _0x2f0c2e=this['_cached_WeatherEffects_SoapBubbles'];return _0x2f0c2e[Math[_0x2b1804(0x441)](Math[_0x2b1804(0x398)]()*_0x2f0c2e[_0x2b1804(0x2e9)])];}else _0x2ae655[_0x2b1804(0x3a2)][_0x2b1804(0x565)][_0x2b1804(0x481)](this),_0x10a14c['prepareGeneratedWeatherImages']();}const _0x2c2f37=ColorManager[_0x2b1804(0x10c)]['pop'](),_0x53b8ea=new Bitmap(0x18,0x18),_0x619754=0xc,_0x4cb674=_0x619754/0x3;return _0x53b8ea['drawCircle'](_0x619754,_0x619754,_0x619754,_0x2c2f37),_0x53b8ea[_0x2b1804(0x3f0)](_0x619754,_0x619754,_0x619754-0x2),_0x53b8ea[_0x2b1804(0x44f)](_0x619754+_0x4cb674,_0x619754-_0x4cb674,_0x4cb674,'#ffffff'),_0x53b8ea['_customModified']=![],this['_cached_WeatherEffects_SoapBubbles']=this[_0x2b1804(0x122)]||[],this[_0x2b1804(0x122)]['push'](_0x53b8ea),_0x53b8ea;},ImageManager[_0x5da319(0x433)]=function(){const _0x88e6a9=_0x5da319;if(this[_0x88e6a9(0x47c)]&&this['_cached_WeatherEffects_SmokeClouds'][_0x88e6a9(0x2e9)]>=ImageManager[_0x88e6a9(0x302)]){const _0x51a42c=this[_0x88e6a9(0x47c)];return _0x51a42c[Math[_0x88e6a9(0x441)](Math[_0x88e6a9(0x398)]()*_0x51a42c[_0x88e6a9(0x2e9)])];}const _0x103e0e=ColorManager[_0x88e6a9(0x1e8)],_0x1a3fef=_0x103e0e[0x3],_0x4587a0=_0x103e0e[0x2],_0x3b70e9=_0x103e0e[0x1],_0xe28efc=new Bitmap(0x1f4,0x1f4);_0xe28efc['drawCloud'](0xfa,0x15e,0x4b,_0x1a3fef,0x10,0x14),_0xe28efc[_0x88e6a9(0x20e)](0xfa,0xfa,0x64,_0x3b70e9,0x40,0x19),_0xe28efc[_0x88e6a9(0x20e)](0xfa,0xfa,0x3c,_0x4587a0,0x10,0x14),_0xe28efc[_0x88e6a9(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x88e6a9(0x47b)](_0x88e6a9(0x303));return this[_0x88e6a9(0x47c)]=this[_0x88e6a9(0x47c)]||[],this['_cached_WeatherEffects_SmokeClouds'][_0x88e6a9(0x28e)](_0xe28efc),_0xe28efc;},ImageManager['weatherEffectsSleet']=function(){const _0x384d49=_0x5da319;if(this[_0x384d49(0x288)]&&this[_0x384d49(0x288)][_0x384d49(0x2e9)]>=ImageManager[_0x384d49(0x302)]){if(_0x384d49(0x35c)==='fNbxS'){const _0x1cd2eb=this['_cached_WeatherEffects_Sleet'];return _0x1cd2eb[Math[_0x384d49(0x441)](Math[_0x384d49(0x398)]()*_0x1cd2eb[_0x384d49(0x2e9)])];}else this[_0x384d49(0x18c)](),this['updatePositionFinal']();}const _0x17285b=ColorManager[_0x384d49(0x579)],_0x43e010=1.3;let _0x19c6b6=ColorManager[_0x384d49(0x14a)](_0x17285b[Math['floor'](Math[_0x384d49(0x398)]()*_0x17285b[_0x384d49(0x2e9)])],_0x43e010),_0x2e5a3d=ColorManager[_0x384d49(0x14a)](_0x17285b[Math[_0x384d49(0x441)](Math[_0x384d49(0x398)]()*_0x17285b[_0x384d49(0x2e9)])],_0x43e010),_0x3690cf=ColorManager[_0x384d49(0x14a)](_0x17285b[Math[_0x384d49(0x441)](Math[_0x384d49(0x398)]()*_0x17285b[_0x384d49(0x2e9)])],_0x43e010);const _0xffbcb5=new Bitmap(0x1f4,0x1f4);_0xffbcb5[_0x384d49(0x20e)](0xfa,0x15e,0x4b,_0x19c6b6,0x4,0x14),_0xffbcb5[_0x384d49(0x20e)](0xfa,0xfa,0x64,_0x3690cf,0x8,0x19),_0xffbcb5[_0x384d49(0x20e)](0xfa,0xfa,0x3c,_0x2e5a3d,0x4,0x14);const _0x123d9e=_0xffbcb5['width'],_0x4717d8=_0xffbcb5['height'],_0x2359bf=0x4;let _0x2b0f0f=0x10;while(_0x2b0f0f--){const _0x4ca625=Math[_0x384d49(0x17f)](_0x123d9e-_0x2359bf*0x2)+_0x2359bf,_0x87d9af=Math[_0x384d49(0x17f)](_0x4717d8-_0x2359bf*0x2)+_0x2359bf;let _0x43c0a5=_0x17285b[Math['floor'](Math[_0x384d49(0x398)]()*_0x17285b[_0x384d49(0x2e9)])];_0x43c0a5=ColorManager[_0x384d49(0x14a)](_0x43c0a5,_0x43e010),_0xffbcb5[_0x384d49(0x222)]=Math[_0x384d49(0x17f)](0x40)+0xc0,_0xffbcb5['drawStar'](_0x4ca625,_0x87d9af,_0x43c0a5,_0x43c0a5,0x4,_0x2359bf,_0x2359bf/0x2);}_0xffbcb5[_0x384d49(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x384d49(0x47b)](_0x384d49(0x143));return this[_0x384d49(0x288)]=this[_0x384d49(0x288)]||[],this[_0x384d49(0x288)][_0x384d49(0x28e)](_0xffbcb5),_0xffbcb5;},ImageManager['weatherEffectsTempest']=function(){const _0x431570=_0x5da319;if(this[_0x431570(0x43c)]&&this[_0x431570(0x43c)]['length']>=ImageManager[_0x431570(0x302)]){const _0x245fac=this['_cached_WeatherEffects_Tempest'];return _0x245fac[Math[_0x431570(0x441)](Math[_0x431570(0x398)]()*_0x245fac[_0x431570(0x2e9)])];}const _0xccd379=Math[_0x431570(0x17f)](0x20)+0x40,_0x100c46=Math[_0x431570(0x17f)](0x20)+0x60,_0x37140a=Math[_0x431570(0x17f)](0x20)+0x80;let _0x5440a9=ColorManager[_0x431570(0x56a)]([_0xccd379,_0xccd379,_0xccd379]),_0x2d9323=ColorManager[_0x431570(0x56a)]([_0x100c46,_0x100c46,_0x100c46]),_0x38512f=ColorManager['arrayToHex']([_0x37140a,_0x37140a,_0x37140a]);const _0x5d8501=new Bitmap(0x3e8,0x3e8);_0x5d8501[_0x431570(0x20e)](0x1f4,0x28a,0xaf,_0x5440a9,0x10,0x14),_0x5d8501[_0x431570(0x20e)](0x1f4,0x1f4,0xc8,_0x38512f,0x40,0x19),_0x5d8501[_0x431570(0x20e)](0x1f4,0x15e,0xa0,_0x2d9323,0x10,0x14),_0x5d8501[_0x431570(0x182)]=![];if(ImageManager[_0x431570(0x24b)])console[_0x431570(0x47b)](_0x431570(0x15c));return this[_0x431570(0x43c)]=this[_0x431570(0x43c)]||[],this['_cached_WeatherEffects_Tempest'][_0x431570(0x28e)](_0x5d8501),_0x5d8501;},ImageManager['weatherEffectsGrassyGust']=function(){const _0x142f85=_0x5da319;if(this[_0x142f85(0x40e)]&&ColorManager[_0x142f85(0x1a3)][_0x142f85(0x2e9)]<=0x0){if('LDhdX'!==_0x142f85(0x2b9)){const _0xa799f9=this[_0x142f85(0x40e)];return _0xa799f9[Math['floor'](Math[_0x142f85(0x398)]()*_0xa799f9['length'])];}else _0x537af1['ConvertParams'](_0x3b0b57,_0x8a884b),_0x1f2b3e[_0x142f85(0x297)]='slow_icons_2',_0x1bde86['WeatherEffects'][_0x142f85(0x3d1)](_0x37bb04);}const _0x43ab79=ColorManager[_0x142f85(0x1a3)][_0x142f85(0x46b)](),_0x3a324b=ColorManager[_0x142f85(0x14a)](_0x43ab79,0.5),_0x7d15d0=0xc,_0x2d7b1c=0x4,_0x4886e8=new Bitmap(_0x7d15d0,_0x2d7b1c);_0x4886e8[_0x142f85(0x2b2)](0x0,0x0,_0x7d15d0,_0x2d7b1c/0x2,_0x43ab79),_0x4886e8[_0x142f85(0x2b2)](0x0,_0x2d7b1c/0x2,_0x7d15d0,_0x2d7b1c/0x2,_0x3a324b),_0x4886e8[_0x142f85(0x182)]=![];if(ImageManager[_0x142f85(0x24b)])console[_0x142f85(0x47b)]('grassyGust');return this[_0x142f85(0x40e)]=this['_cached_WeatherEffects_GrassyGust']||[],this['_cached_WeatherEffects_GrassyGust'][_0x142f85(0x28e)](_0x4886e8),_0x4886e8;},ImageManager['weatherEffectsXtremeSpeed']=function(){const _0x4ff1d0=_0x5da319;if(this[_0x4ff1d0(0x3dd)]&&this[_0x4ff1d0(0x3dd)][_0x4ff1d0(0x2e9)]>=ImageManager[_0x4ff1d0(0x302)]){const _0x62781c=this['_cached_WeatherEffects_Xtreme'];return _0x62781c[Math[_0x4ff1d0(0x441)](Math[_0x4ff1d0(0x398)]()*_0x62781c[_0x4ff1d0(0x2e9)])];}const _0x4e4b17=_0x4ff1d0(0x48f),_0x2d3feb='#6dcff6',_0x1f1332=_0x4ff1d0(0x49e),_0x4d32b2=0x1f4,_0x3964f8=new Bitmap(_0x4d32b2,_0x4d32b2);let _0xf22a0a=0x40;while(_0xf22a0a--){const _0x31bc6c=Math[_0x4ff1d0(0x17f)](0x32)+0xa,_0x506c6a=Math[_0x4ff1d0(0x17f)](0x32)+0x1b8,_0x1b43bd=Math[_0x4ff1d0(0x17f)](0x1e0)+0xa,_0x3f3c74=(_0x506c6a-_0x31bc6c)/0x2,_0x31bcac=Math['randomInt'](0x3)+0x1c,_0x551e8f=ColorManager[_0x4ff1d0(0x260)](_0x1f1332,0x0),_0x7da9a1=ColorManager[_0x4ff1d0(0x260)](_0x1f1332,Math[_0x4ff1d0(0x398)]());_0x3964f8[_0x4ff1d0(0x505)](_0x31bc6c,_0x1b43bd,Math[_0x4ff1d0(0x441)](_0x3f3c74),_0x31bcac,_0x551e8f,_0x7da9a1),_0x3964f8[_0x4ff1d0(0x505)](_0x31bc6c+Math['floor'](_0x3f3c74),_0x1b43bd,Math[_0x4ff1d0(0x340)](_0x3f3c74),_0x31bcac,_0x7da9a1,_0x551e8f);}_0xf22a0a=0x20;while(_0xf22a0a--){if('usRxy'===_0x4ff1d0(0x3ae))_0x1186c3[_0x4ff1d0(0x556)](_0x51912c,_0x49a658),_0x19fbe1[_0x4ff1d0(0x297)]='drip',_0x310e7b[_0x4ff1d0(0x3a2)][_0x4ff1d0(0x3d1)](_0x3ded7b);else{const _0x3876cd=Math[_0x4ff1d0(0x17f)](0x32)+0x64,_0x1ca615=Math['randomInt'](0x32)+0x15e,_0x4e93e2=Math[_0x4ff1d0(0x17f)](0x1e0)+0xa,_0x50366b=(_0x1ca615-_0x3876cd)/0x2,_0x385614=Math[_0x4ff1d0(0x17f)](0x6)+0xa,_0x28c26c=ColorManager[_0x4ff1d0(0x260)](_0x2d3feb,0x0),_0x2fcfb2=ColorManager['hexToRgba'](_0x2d3feb,Math[_0x4ff1d0(0x398)]());_0x3964f8[_0x4ff1d0(0x505)](_0x3876cd,_0x4e93e2,Math[_0x4ff1d0(0x441)](_0x50366b),_0x385614,_0x28c26c,_0x2fcfb2),_0x3964f8[_0x4ff1d0(0x505)](_0x3876cd+Math[_0x4ff1d0(0x441)](_0x50366b),_0x4e93e2,Math[_0x4ff1d0(0x340)](_0x50366b),_0x385614,_0x2fcfb2,_0x28c26c);}}_0xf22a0a=0x10;while(_0xf22a0a--){const _0x225790=Math[_0x4ff1d0(0x17f)](0x32)+0xa,_0x5d1f6d=Math[_0x4ff1d0(0x17f)](0x32)+0x1b8,_0x482637=Math[_0x4ff1d0(0x17f)](0x1e0)+0xa,_0x2b8151=(_0x5d1f6d-_0x225790)/0x2,_0x33ea63=Math[_0x4ff1d0(0x17f)](0x6)+0x5,_0x2545a4=ColorManager[_0x4ff1d0(0x260)](_0x4e4b17,0x0),_0x492771=ColorManager[_0x4ff1d0(0x260)](_0x4e4b17,0x1);_0x3964f8['gradientFillRect'](_0x225790,_0x482637,Math[_0x4ff1d0(0x441)](_0x2b8151),_0x33ea63,_0x2545a4,_0x492771),_0x3964f8[_0x4ff1d0(0x505)](_0x225790+Math[_0x4ff1d0(0x441)](_0x2b8151),_0x482637,Math[_0x4ff1d0(0x340)](_0x2b8151),_0x33ea63,_0x492771,_0x2545a4);}const _0x2f6a94=_0x4ff1d0(0x31f),_0x2dab72=_0x4ff1d0(0x165),_0x43c48d=0xc8,_0x157b08=_0x43c48d/0x2,_0x151304=0x6;_0xf22a0a=0x10;while(_0xf22a0a--){if(_0x4ff1d0(0x425)==='IRJPa'){const _0x5049c1=_0x16bce0[_0x4ff1d0(0x3a2)][_0x4ff1d0(0x107)]();this['applyPluginCmdSettingsBasic'](_0x5049c1,_0x4e28c6),this[_0x4ff1d0(0x2f2)](_0x5049c1,_0x4161d),this[_0x4ff1d0(0x1eb)](_0x5049c1,_0x23af64),this[_0x4ff1d0(0x2fd)](_0x5049c1,_0x2c6fe5),this[_0x4ff1d0(0x1bf)](_0x5049c1,_0x561e6f);}else{const _0x291961=Math['randomInt'](_0x4d32b2-_0x43c48d)+_0x43c48d,_0x723773=Math[_0x4ff1d0(0x17f)](_0x4d32b2-_0x151304)+_0x151304;_0x3964f8[_0x4ff1d0(0x222)]=Math[_0x4ff1d0(0x17f)](0x40)+0xc0,_0x3964f8[_0x4ff1d0(0x505)](_0x291961,_0x723773,_0x157b08,0x2,_0x2f6a94,_0x2dab72),_0x3964f8[_0x4ff1d0(0x2b2)](_0x291961+_0x157b08,_0x723773,_0x157b08,0x2,_0x2dab72);}}_0x3964f8[_0x4ff1d0(0x182)]=![];if(ImageManager[_0x4ff1d0(0x24b)])console[_0x4ff1d0(0x47b)](_0x4ff1d0(0x45f));return this[_0x4ff1d0(0x3dd)]=this[_0x4ff1d0(0x3dd)]||[],this[_0x4ff1d0(0x3dd)][_0x4ff1d0(0x28e)](_0x3964f8),_0x3964f8;},ImageManager['weatherEffectsBalloons']=function(){const _0x9b7c61=_0x5da319;if(this[_0x9b7c61(0x2f4)]&&ColorManager['WEATHER_BALLOON_COLORS'][_0x9b7c61(0x2e9)]<=0x0){const _0x5be53a=this[_0x9b7c61(0x2f4)];return _0x5be53a[Math[_0x9b7c61(0x441)](Math['random']()*_0x5be53a[_0x9b7c61(0x2e9)])];}const _0x54822b=ColorManager[_0x9b7c61(0x490)]['pop'](),_0x31476a=ColorManager[_0x9b7c61(0x14a)](_0x54822b,0.8),_0x4919c4=[_0x54822b,_0x31476a],_0x3c3172=new Bitmap(0x64,0x24);_0x3c3172[_0x9b7c61(0x261)](_0x4919c4),_0x3c3172[_0x9b7c61(0x182)]=![];if(ImageManager[_0x9b7c61(0x24b)])console[_0x9b7c61(0x47b)](_0x9b7c61(0x473));return this[_0x9b7c61(0x2f4)]=this['_cached_WeatherEffects_Balloons']||[],this['_cached_WeatherEffects_Balloons']['push'](_0x3c3172),_0x3c3172;},ImageManager['weatherEffectsFireworks']=function(){const _0x1733b7=_0x5da319;if(this['_cached_WeatherEffects_Fireworks']&&this[_0x1733b7(0x30d)][_0x1733b7(0x2e9)]>=ImageManager[_0x1733b7(0x302)]){const _0x2ebceb=this[_0x1733b7(0x30d)];return _0x2ebceb[Math[_0x1733b7(0x441)](Math[_0x1733b7(0x398)]()*_0x2ebceb['length'])];}const _0x1fe428=_0x1733b7(0x552);let _0x10408=Math[_0x1733b7(0x17f)](0x32)+0x64;if(_0x10408%0x2!==0x0)_0x10408+=0x1;const _0x355edc=new Bitmap(_0x10408,0x8);_0x355edc[_0x1733b7(0x3c1)](_0x1fe428),_0x355edc[_0x1733b7(0x182)]=![];if(ImageManager[_0x1733b7(0x24b)])console[_0x1733b7(0x47b)](_0x1733b7(0x251));return this['_cached_WeatherEffects_Fireworks']=this[_0x1733b7(0x30d)]||[],this[_0x1733b7(0x30d)]['push'](_0x355edc),_0x355edc;},ImageManager['weatherEffectsFireworksFlower']=function(){const _0xb86c83=_0x5da319;if(this[_0xb86c83(0x56e)]&&this[_0xb86c83(0x56e)]['length']>=ImageManager[_0xb86c83(0x302)]){const _0x190089=this[_0xb86c83(0x56e)];return _0x190089[Math[_0xb86c83(0x441)](Math[_0xb86c83(0x398)]()*_0x190089['length'])];}const _0x1d7b90=_0xb86c83(0x552),_0x2b8203=new Bitmap(0xc8,0xc8);_0x2b8203[_0xb86c83(0x110)](_0x1d7b90),_0x2b8203['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log']('fireworksflower');return this[_0xb86c83(0x56e)]=this[_0xb86c83(0x56e)]||[],this['_cached_WeatherEffects_FireworksFlower'][_0xb86c83(0x28e)](_0x2b8203),_0x2b8203;},ImageManager[_0x5da319(0x4fd)]=function(){const _0x5918cd=_0x5da319;if(this[_0x5918cd(0x3ea)]&&ColorManager[_0x5918cd(0xea)][_0x5918cd(0x2e9)]<=0x0){const _0x233d15=this[_0x5918cd(0x3ea)];return _0x233d15[Math['floor'](Math[_0x5918cd(0x398)]()*_0x233d15['length'])];}const _0x381df6=ColorManager[_0x5918cd(0xea)]['pop'](),_0x4309fd=new Bitmap(0x3e8,0x3e8),_0x5bae58=_0x4309fd[_0x5918cd(0x16e)]/0x2;_0x4309fd[_0x5918cd(0x2c4)](_0x5bae58,_0x5bae58,_0x5bae58,0x168,_0x381df6,0x0,0x1,0x0),_0x4309fd[_0x5918cd(0x182)]=![];if(ImageManager[_0x5918cd(0x24b)])console[_0x5918cd(0x47b)](_0x5918cd(0x2ae));return this[_0x5918cd(0x3ea)]=this['_cached_WeatherEffects_ShadowBurst']||[],this[_0x5918cd(0x3ea)][_0x5918cd(0x28e)](_0x4309fd),_0x4309fd;},ImageManager[_0x5da319(0x54b)]=function(){const _0x1c0cc5=_0x5da319;if(this[_0x1c0cc5(0x374)]&&this['_cached_WeatherEffects_CloudBurst'][_0x1c0cc5(0x2e9)]>=ImageManager[_0x1c0cc5(0x302)]){const _0x1e5db8=this[_0x1c0cc5(0x374)];return _0x1e5db8[Math[_0x1c0cc5(0x441)](Math[_0x1c0cc5(0x398)]()*_0x1e5db8[_0x1c0cc5(0x2e9)])];}const _0x111749=new Bitmap(0x1f4,0x1f4);let _0x566bae=ColorManager[_0x1c0cc5(0x56a)]([Math['randomInt'](0x20)+0x10,0x18,Math['randomInt'](0x20)+0x10]),_0x270237=ColorManager[_0x1c0cc5(0x56a)]([Math[_0x1c0cc5(0x17f)](0x30)+0x20,0x30,Math[_0x1c0cc5(0x17f)](0x30)+0x20]),_0x50c299=ColorManager['arrayToHex']([Math['randomInt'](0x40)+0x30,0x60,Math['randomInt'](0x40)+0x30]);_0x111749[_0x1c0cc5(0x20e)](0xfa,0x15e,0x4b,_0x566bae,0x10,0x14),_0x111749['drawCloud'](0xfa,0xfa,0x64,_0x50c299,0x40,0x19),_0x111749[_0x1c0cc5(0x20e)](0xfa,0xfa,0x3c,_0x270237,0x10,0x14);const _0x38c7a5=_0x1c0cc5(0x31f),_0x741cec=_0x1c0cc5(0x165),_0x33ccd0=_0x111749[_0x1c0cc5(0x16e)],_0x50b326=_0x111749[_0x1c0cc5(0x42b)],_0x5e6f6a=0x64,_0x424a5e=_0x5e6f6a/0x2,_0x25f3fe=0x2;let _0x2ee9a6=0x20;while(_0x2ee9a6--){if(_0x1c0cc5(0x13e)!==_0x1c0cc5(0x13e)){const _0x5be7bc=[];for(var _0x31aeb3=0x0;_0x31aeb3<_0x4c3c96[_0x1c0cc5(0x2e9)]-0x1;_0x31aeb3++){var _0x3f2caf=_0x3ff41e[_0x31aeb3],_0x5467db=_0x515998[_0x31aeb3+0x1],_0x2c21f5=(_0x3f2caf['y']+_0x5467db['y'])/0x2,_0x3085f0=_0x2c21f5+(_0x373520[_0x1c0cc5(0x398)]()*0x2-0x1)*_0x107ebd;_0x5be7bc[_0x1c0cc5(0x28e)](_0x3f2caf,{'x':(_0x3f2caf['x']+_0x5467db['x'])/0x2,'y':_0x3085f0});}_0x5be7bc[_0x1c0cc5(0x28e)](_0x4730cf[_0x1c0cc5(0x46b)]()),_0x12bf91=_0x5be7bc,_0xe8feb9/=_0x14ff7d,_0x593530/=0x2;}else{const _0x42bd95=Math['randomInt'](_0x33ccd0-_0x5e6f6a)+_0x5e6f6a,_0x213fdf=Math[_0x1c0cc5(0x17f)](_0x50b326-_0x25f3fe)+_0x25f3fe;_0x111749['paintOpacity']=Math[_0x1c0cc5(0x17f)](0x40)+0xc0,_0x111749[_0x1c0cc5(0x505)](_0x42bd95,_0x213fdf,Math[_0x1c0cc5(0x340)](_0x424a5e),_0x25f3fe,_0x38c7a5,_0x741cec),_0x111749['fillRect'](_0x42bd95+Math['ceil'](_0x424a5e),_0x213fdf,Math['floor'](_0x424a5e),_0x25f3fe,_0x741cec);}}_0x111749['_customModified']=![];if(ImageManager[_0x1c0cc5(0x24b)])console[_0x1c0cc5(0x47b)](_0x1c0cc5(0x33b));return this[_0x1c0cc5(0x374)]=this[_0x1c0cc5(0x374)]||[],this[_0x1c0cc5(0x374)][_0x1c0cc5(0x28e)](_0x111749),_0x111749;},ImageManager[_0x5da319(0x3d3)]=function(){const _0x1daa0a=_0x5da319;if(this[_0x1daa0a(0x480)])return this[_0x1daa0a(0x480)];const _0x4e9164=Math[_0x1daa0a(0x52f)]($dataSystem[_0x1daa0a(0x1f3)][_0x1daa0a(0x217)],$dataSystem[_0x1daa0a(0x1f3)][_0x1daa0a(0x2c5)])||0x1,_0x241da4=new Bitmap(_0x4e9164,_0x4e9164);_0x241da4[_0x1daa0a(0x1b7)](_0x4e9164/0x2,_0x4e9164/0x2,_0x4e9164/0x2),_0x241da4[_0x1daa0a(0x182)]=![];if(ImageManager[_0x1daa0a(0x24b)])console[_0x1daa0a(0x47b)](_0x1daa0a(0x509));return this[_0x1daa0a(0x480)]=_0x241da4,_0x241da4;},ImageManager['weatherEffectsIcons']=function(){const _0x279a98=_0x5da319;if(this['_cached_WeatherEffects_Icons']){const _0x3a5b88=this[_0x279a98(0x487)];return _0x3a5b88[Math['floor'](Math[_0x279a98(0x398)]()*_0x3a5b88[_0x279a98(0x2e9)])];}this['_cached_WeatherEffects_Icons']=this[_0x279a98(0x487)]||[];const _0x2e9808=ImageManager['WEATHER_EFFECTS_ICON_GENERATED'];for(const _0x29ce0c of _0x2e9808){const _0x38dde7=new Bitmap(ImageManager[_0x279a98(0x322)],ImageManager['iconHeight']);_0x38dde7[_0x279a98(0x2da)]=0x1c,_0x38dde7[_0x279a98(0x206)](_0x29ce0c,0x0,0x0,_0x38dde7[_0x279a98(0x16e)],_0x38dde7[_0x279a98(0x42b)],_0x279a98(0x4e7)),_0x38dde7[_0x279a98(0x182)]=![],this['_cached_WeatherEffects_Icons']['push'](_0x38dde7);}if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x279a98(0x47b)](_0x279a98(0x205));const _0x3e6e86=this[_0x279a98(0x487)];return _0x3e6e86[Math[_0x279a98(0x441)](Math[_0x279a98(0x398)]()*_0x3e6e86['length'])];},ImageManager[_0x5da319(0x51b)]=function(){const _0x652411=_0x5da319;if(this[_0x652411(0x4b7)]&&this[_0x652411(0x4b7)]['length']>=ImageManager[_0x652411(0x302)]){const _0x2a05cc=this[_0x652411(0x4b7)];return _0x2a05cc[Math[_0x652411(0x441)](Math[_0x652411(0x398)]()*_0x2a05cc[_0x652411(0x2e9)])];}let _0x31e239=ColorManager[_0x652411(0x1e8)];const _0x5e01b8=_0x31e239[Math['floor'](Math[_0x652411(0x398)]()*_0x31e239[_0x652411(0x2e9)])];_0x31e239=ColorManager[_0x652411(0x1d1)];const _0x14efa1=_0x31e239[Math[_0x652411(0x441)](Math[_0x652411(0x398)]()*_0x31e239[_0x652411(0x2e9)])];_0x31e239=ColorManager[_0x652411(0x564)];const _0x57a820=_0x31e239[Math[_0x652411(0x441)](Math['random']()*_0x31e239['length'])],_0x18f11b=new Bitmap(0x3e8,0x3e8);_0x18f11b[_0x652411(0x20e)](0x1f4,0x258,0xaf,_0x5e01b8,0x40,0x14),_0x18f11b[_0x652411(0x20e)](0x1f4,0x1f4,0xc8,_0x57a820,0x40,0x19),_0x18f11b[_0x652411(0x20e)](0x1f4,0x1c2,0xa0,_0x14efa1,0x40,0x1e),_0x18f11b[_0x652411(0x182)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x652411(0x47b)](_0x652411(0x1a5));return this[_0x652411(0x4b7)]=this['_cached_WeatherEffects_Fumes']||[],this[_0x652411(0x4b7)][_0x652411(0x28e)](_0x18f11b),_0x18f11b;},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x3f0)]=function(_0x27b88e,_0x5dedd6,_0x49e863){const _0x4225f5=_0x5da319,_0x1c8af3=this[_0x4225f5(0x401)];_0x1c8af3[_0x4225f5(0x1d5)](),_0x1c8af3[_0x4225f5(0x4e6)]='destination-out',_0x1c8af3[_0x4225f5(0x503)](),_0x1c8af3[_0x4225f5(0x23c)](_0x27b88e,_0x5dedd6,_0x49e863,0x0,0x2*Math['PI'],![]),_0x1c8af3['fill'](),_0x1c8af3[_0x4225f5(0x21c)](),this[_0x4225f5(0x225)]['update']();},Bitmap['prototype'][_0x5da319(0x48e)]=function(_0x3d980b,_0x5e8dca,_0x3f0279,_0x159694,_0x315951,_0x3bbed2){const _0x47ddf2=_0x5da319,_0x44f5ff=this['_context'];_0x44f5ff['save'](),_0x44f5ff['fillStyle']=_0x5e8dca,_0x44f5ff['beginPath'](),_0x44f5ff['moveTo'](_0x3d980b[0x0],_0x3d980b[0x1]);for(var _0xd255eb=0x2;_0xd255eb<_0x3d980b[_0x47ddf2(0x2e9)];_0xd255eb+=0x2){_0x47ddf2(0x3c4)!==_0x47ddf2(0x3c4)?this[_0x47ddf2(0x4a1)]=_0x533d3f[_0x47ddf2(0x55c)](_0x47ddf2(0x229)):_0x44f5ff['lineTo'](_0x3d980b[_0xd255eb],_0x3d980b[_0xd255eb+0x1]);}_0x44f5ff[_0x47ddf2(0x2cf)](_0x3d980b[0x0],_0x3d980b[0x1]),_0x44f5ff['strokeStyle']=_0x3f0279,_0x44f5ff[_0x47ddf2(0x52d)]=_0x159694,_0x3bbed2&&(_0x47ddf2(0x1bd)!==_0x47ddf2(0x1bd)?this[_0x47ddf2(0x215)]=0x1:_0x44f5ff[_0x47ddf2(0x47a)]()),_0x44f5ff[_0x47ddf2(0x1e5)]=_0x315951,_0x44f5ff[_0x47ddf2(0x1ef)](),_0x44f5ff['globalAlpha']=0x1,_0x44f5ff[_0x47ddf2(0x21c)]();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x2c4)]=function(_0x2d56ff,_0x387de8,_0x218f8e,_0x15a523,_0x406639,_0x4647f6,_0x25fe18,_0x170c8b){const _0x3d452e=_0x5da319;_0x4647f6=_0x4647f6['clamp'](0.000001,0.999999);const _0x11d8bb=this[_0x3d452e(0x401)];_0x11d8bb[_0x3d452e(0x1d5)]();const _0x5145c5=_0x15a523*(Math['PI']/0xb4),_0x1813e2=_0x218f8e*0x2;_0x11d8bb[_0x3d452e(0x1b9)](_0x2d56ff-_0x218f8e,_0x387de8-_0x218f8e);const _0x256282=_0x11d8bb[_0x3d452e(0x209)](_0x218f8e,_0x218f8e,_0x170c8b,_0x218f8e,_0x218f8e,_0x218f8e),_0x5a53d2=ColorManager[_0x3d452e(0x260)](_0x406639,_0x25fe18/0x2),_0x308585=ColorManager[_0x3d452e(0x260)](_0x406639,_0x25fe18),_0x506530=ColorManager[_0x3d452e(0x260)](_0x406639,0x0);_0x256282[_0x3d452e(0x37f)](0x0,_0x5a53d2),_0x256282[_0x3d452e(0x37f)](_0x4647f6/0x2,_0x308585),_0x256282['addColorStop'](_0x4647f6,_0x308585),_0x256282[_0x3d452e(0x37f)](0x1,_0x506530),_0x11d8bb[_0x3d452e(0xfd)]=_0x256282,_0x11d8bb['beginPath'](),_0x11d8bb[_0x3d452e(0x23f)](_0x218f8e,_0x218f8e),_0x11d8bb['lineTo'](_0x1813e2,_0x218f8e),_0x11d8bb[_0x3d452e(0x23c)](_0x218f8e,_0x218f8e,_0x218f8e,0x0,_0x5145c5),_0x11d8bb[_0x3d452e(0x2cf)](_0x218f8e,_0x218f8e),_0x11d8bb[_0x3d452e(0x1ef)](),_0x11d8bb[_0x3d452e(0x1d5)](),_0x11d8bb[_0x3d452e(0x21c)](),this[_0x3d452e(0x225)]['update']();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0xe5)]=function(_0x226dfb,_0x5cfb3f,_0x3a81a6,_0x121c2d,_0x54b216,_0x38e254,_0x424228){const _0x3eb880=_0x5da319,_0x2bab65=_0x121c2d/_0x3a81a6,_0x4a3051=this[_0x3eb880(0x452)];_0x4a3051['save'](),_0x4a3051['scale'](0x1,_0x2bab65),this['drawPolyArc'](_0x226dfb,_0x5cfb3f/_0x2bab65,_0x3a81a6,0x168,_0x54b216,_0x38e254,_0x424228,0x0),_0x4a3051['restore'](),this[_0x3eb880(0x225)][_0x3eb880(0x329)]();},Bitmap[_0x5da319(0x2c2)]['drawCloud']=function(_0x5621f1,_0x57c782,_0xf81aa4,_0x14c71c,_0x4fecd8,_0x53427c){const _0x5e8181=_0x5da319,_0x5a038b=this[_0x5e8181(0x452)];_0xf81aa4=_0xf81aa4||0x1;const _0x3cf881=_0xf81aa4*0x3/0x5;_0x4fecd8=_0x4fecd8??0xff,_0x53427c=_0x53427c??0xa;const _0x6d1884=ColorManager['hexToArray'](_0x14c71c),_0x230cfc=_0x5a038b[_0x5e8181(0x209)](_0x3cf881,_0x3cf881,0x0,_0x3cf881,_0x3cf881,_0x3cf881),_0x5defe9=_0x5e8181(0x1d3)[_0x5e8181(0x555)](_0x6d1884[0x0],_0x6d1884[0x1],_0x6d1884[0x2],_0x4fecd8/0xff),_0x12f234=_0x5e8181(0x1d3)[_0x5e8181(0x555)](_0x6d1884[0x0],_0x6d1884[0x1],_0x6d1884[0x2],0x0);_0x230cfc[_0x5e8181(0x37f)](0x0,_0x5defe9),_0x230cfc[_0x5e8181(0x37f)](0x1,_0x12f234);const _0xa1b1d1=_0x3cf881*0x2,_0x31ca9d=ImageManager['getTemporaryContext'](_0xa1b1d1,_0xa1b1d1);_0x31ca9d[_0x5e8181(0xfd)]=_0x230cfc,_0x31ca9d['beginPath'](),_0x31ca9d[_0x5e8181(0x23c)](_0x3cf881,_0x3cf881,_0x3cf881,0x0,Math['PI']*0x2,!![]),_0x31ca9d[_0x5e8181(0x1ef)]();for(let _0x19256b=0x0;_0x19256b<_0x53427c;_0x19256b++){const _0x16adf4=Math[_0x5e8181(0x398)]()*(Math['PI']*0x2),_0x3a3000=Math['random']()*Math[_0x5e8181(0x3ca)](_0x16adf4)*_0xf81aa4+(_0x5621f1-_0x3cf881),_0x1a7412=Math[_0x5e8181(0x398)]()*Math['cos'](_0x16adf4)*_0xf81aa4+(_0x57c782-_0x3cf881);_0x5a038b[_0x5e8181(0x285)](ImageManager[_0x5e8181(0x3f7)](),_0x3a3000,_0x1a7412);}},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x10e)]=function(_0x4e6173,_0x202520,_0x16de4d,_0x46e9d0,_0x1c2f51,_0x39c7ca,_0x1d3a0f,_0x29889e){const _0xb01bfb=_0x5da319;_0x29889e=_0x29889e||0x3;const _0x52dbfe=this['context'];let _0x303147=Math['PI']/0x2*_0x29889e,_0xf1be6=_0x4e6173,_0x44402c=_0x202520,_0x41c5ce=Math['PI']/_0x1c2f51;_0x52dbfe[_0xb01bfb(0x1d5)](),_0x52dbfe['beginPath'](),_0x52dbfe[_0xb01bfb(0x23f)](_0x4e6173,_0x202520-_0x39c7ca);for(let _0x5c4990=0x0;_0x5c4990<_0x1c2f51;_0x5c4990++){_0xf1be6=_0x4e6173+Math[_0xb01bfb(0x233)](_0x303147)*_0x39c7ca,_0x44402c=_0x202520+Math[_0xb01bfb(0x3ca)](_0x303147)*_0x39c7ca,_0x52dbfe[_0xb01bfb(0x2cf)](_0xf1be6,_0x44402c),_0x303147+=_0x41c5ce,_0xf1be6=_0x4e6173+Math[_0xb01bfb(0x233)](_0x303147)*_0x1d3a0f,_0x44402c=_0x202520+Math[_0xb01bfb(0x3ca)](_0x303147)*_0x1d3a0f,_0x52dbfe[_0xb01bfb(0x2cf)](_0xf1be6,_0x44402c),_0x303147+=_0x41c5ce;}_0x52dbfe[_0xb01bfb(0x2cf)](_0x4e6173,_0x202520-_0x39c7ca),_0x52dbfe[_0xb01bfb(0x1c9)](),_0x52dbfe[_0xb01bfb(0x52d)]=0x0;if(_0x52dbfe[_0xb01bfb(0x52d)]>0x1){if(_0xb01bfb(0x50b)===_0xb01bfb(0x50b))_0x52dbfe[_0xb01bfb(0x52d)]=_0x52dbfe[_0xb01bfb(0x52d)]-0x1,_0x52dbfe[_0xb01bfb(0x4e5)]=_0x46e9d0,_0x52dbfe[_0xb01bfb(0x47a)]();else return _0x56924a*(_0x3857e3['PI']/0xb4);}_0x52dbfe[_0xb01bfb(0xfd)]=_0x16de4d,_0x52dbfe[_0xb01bfb(0x1ef)](),_0x52dbfe[_0xb01bfb(0x21c)](),this[_0xb01bfb(0x225)][_0xb01bfb(0x329)]();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x576)]=function(){const _0x5e3ac1=_0x5da319,_0xada091=0x6,_0xcea581=this[_0x5e3ac1(0x401)],_0x3c7f52=this['width']/0x2,_0x7585f0=this[_0x5e3ac1(0x42b)]/0x2;this[_0x5e3ac1(0x546)]=0x3,this['_branches']=0x2+Math['randomInt'](0x2),this[_0x5e3ac1(0x416)]=Math[_0x5e3ac1(0x363)](_0x3c7f52,_0x7585f0)*0x2/0x3,this[_0x5e3ac1(0x283)]=Math['PI']*0x2*(Math[_0x5e3ac1(0x398)]()*0.15+0.7),this[_0x5e3ac1(0x1a9)]=Math['max'](Math[_0x5e3ac1(0x340)](this[_0x5e3ac1(0x16e)]/0xc),0x2),_0xcea581[_0x5e3ac1(0x1b9)](_0x3c7f52,_0x7585f0);for(let _0x4c6877=0x0;_0x4c6877<_0xada091;_0x4c6877++){_0x5e3ac1(0x51e)==='DPySa'?(_0xdddb79['ConvertParams'](_0x30a339,_0x4fdefe),_0x35b675[_0x5e3ac1(0x297)]=_0x5e3ac1(0x292),_0x196701[_0x5e3ac1(0x3a2)][_0x5e3ac1(0x3d1)](_0x214826)):(this[_0x5e3ac1(0x3e9)](0x0),_0xcea581[_0x5e3ac1(0x545)](Math['PI']*0x2/_0xada091));}},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x3e9)]=function(_0x4c28c3){const _0x4331b7=_0x5da319;if(_0x4c28c3>this[_0x4331b7(0x546)])return;const _0x4f33ab=this[_0x4331b7(0x401)];_0x4f33ab['strokeStyle']=_0x4331b7(0x48f),_0x4f33ab[_0x4331b7(0x52d)]=0x3,_0x4f33ab[_0x4331b7(0x503)](),_0x4f33ab[_0x4331b7(0x23f)](0x0,0x0),_0x4f33ab['lineTo'](0x0+this[_0x4331b7(0x416)],0x0),_0x4f33ab['stroke']();for(let _0x525b6f=0x1;_0x525b6f<this[_0x4331b7(0x3e0)]+0x1;_0x525b6f++){_0x4f33ab[_0x4331b7(0x1d5)](),_0x4f33ab[_0x4331b7(0x1b9)](this[_0x4331b7(0x416)]*_0x525b6f/(this[_0x4331b7(0x3e0)]+0x1),0x0),_0x4f33ab['scale'](0.5,0.5),_0x4f33ab[_0x4331b7(0x1d5)](),_0x4f33ab[_0x4331b7(0x545)](this[_0x4331b7(0x283)]),this[_0x4331b7(0x3e9)](_0x4c28c3+0x1),_0x4f33ab[_0x4331b7(0x21c)](),_0x4f33ab['save'](),_0x4f33ab[_0x4331b7(0x545)](-this[_0x4331b7(0x283)]),this[_0x4331b7(0x3e9)](_0x4c28c3+0x1),_0x4f33ab[_0x4331b7(0x21c)](),_0x4f33ab[_0x4331b7(0x21c)]();}},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x437)]=function(_0x33a416,_0x558e17,_0x393536,_0x4543dd){const _0x17d518=_0x5da319;let _0x36f6ab=0x1e,_0x5371f5=Math[_0x17d518(0x441)](_0x4543dd/0x6),_0x552e8e=0x10;const _0x21cc1a=(0xff-_0x552e8e)/_0x5371f5,_0x537538=(0xff-_0x36f6ab)/_0x5371f5,_0x58beba=Math[_0x17d518(0x441)](_0x4543dd/_0x5371f5),_0x2ba87d=_0x393536/0x10,_0x1c4a86=_0x558e17;let _0x494e50=Math[_0x17d518(0x17f)](0xf4240),_0x5ecd0b=0x10,_0x15bb69=_0x393536/0x2,_0x4f84de=Math['max'](0x4,_0x393536/0x10);_0x33a416-=_0x4543dd;while(_0x5371f5--){if(_0x17d518(0x272)!==_0x17d518(0x467)){_0x36f6ab+=_0x537538,_0x4f84de+=_0x2ba87d,_0x552e8e+=_0x21cc1a,_0x33a416+=_0x58beba,_0x558e17=_0x1c4a86+Math[_0x17d518(0x233)](_0x494e50)*_0x15bb69/0x2,_0x494e50+=Math[_0x17d518(0x17f)](_0x5ecd0b)+_0x5ecd0b/0x2,_0x4543dd-=_0x58beba;if(_0x4543dd<=0x0)break;const _0x1fe5be='rgba(255,\x20%1,\x200,\x201)'[_0x17d518(0x555)](_0x36f6ab);this[_0x17d518(0x222)]=_0x552e8e,this[_0x17d518(0x44f)](_0x33a416,_0x558e17,_0x4f84de,_0x1fe5be);}else _0x101189[_0x17d518(0x28e)](_0x17d518(0x2b0)),_0x2be61f+=_0x268b10[_0x17d518(0x33f)][_0x17d518(0x24f)]||0x1;}this[_0x17d518(0x222)]=0xf0,this[_0x17d518(0x44f)](_0x33a416,_0x558e17,_0x4f84de*0x3/0x4,_0x17d518(0x41e));},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x4ff)]=function(){const _0x14f139=_0x5da319,_0x449792=this[_0x14f139(0x452)],_0x2211c4=0xa,_0x225c49=0x50,_0x385793={'x':_0x2211c4,'y':this[_0x14f139(0x42b)]/0x2},_0x3d21e8=0x8,_0x5982e1=this[_0x14f139(0x16e)]-_0x2211c4,_0x2649bd=ColorManager[_0x14f139(0x18f)]['clone'](),_0x27f073=_0x2649bd[Math[_0x14f139(0x441)](Math[_0x14f139(0x398)]()*_0x2649bd[_0x14f139(0x2e9)])],_0x31e953=0x2,_0x213ac4=this['width']/0x5;_0x449792['globalCompositeOperation']=_0x14f139(0x2a2),_0x449792['strokeStyle']=_0x27f073,_0x449792[_0x14f139(0x380)]=_0x27f073,_0x449792[_0x14f139(0xfd)]=_0x27f073;let _0x4ac484=[],_0x4afd6d=_0x385793['x']+_0x5982e1;_0x4ac484[_0x14f139(0x28e)]({'x':_0x385793['x'],'y':_0x385793['y']}),_0x4ac484['push']({'x':_0x5982e1+(Math[_0x14f139(0x398)]()-0.9)*_0x225c49,'y':Math[_0x14f139(0x398)]()*(this[_0x14f139(0x42b)]-0x64)+_0x225c49});let _0x1598ef=_0x213ac4;while(_0x4afd6d>_0x3d21e8){if('Xqzbv'!==_0x14f139(0x40a)){const _0x2962b3=this[_0x14f139(0x2a0)][_0x14f139(0x46e)]-(this[_0x14f139(0x55d)]-this[_0x14f139(0xf3)]),_0x2b0c3c=0x1;_0x2962b3<=0x1?this[_0x14f139(0x215)]=_0x2b0c3c:this['_scaleInOutRatio']=(this['_scaleInOutRatio']*(_0x2962b3-0x1)+_0x2b0c3c)/_0x2962b3;}else{const _0x8de412=[];for(var _0xeb5e7f=0x0;_0xeb5e7f<_0x4ac484[_0x14f139(0x2e9)]-0x1;_0xeb5e7f++){if(_0x14f139(0x388)===_0x14f139(0x418)){const _0x2255a0=_0x76ce96[_0x14f139(0x125)]+this[_0x14f139(0x404)],_0x370ad7=this[_0x14f139(0x2a0)][_0x14f139(0x511)],_0x233df1=this[_0x14f139(0x2a0)][_0x14f139(0x179)]/0x2,_0x1e5ed0=this[_0x14f139(0x1b0)]+_0xd4eac7['cos'](_0x2255a0*_0x370ad7)*_0x233df1;this['setHue'](_0x1e5ed0);}else{var _0x3f960a=_0x4ac484[_0xeb5e7f],_0x3fb99d=_0x4ac484[_0xeb5e7f+0x1],_0xc1a440=(_0x3f960a['y']+_0x3fb99d['y'])/0x2,_0x14cfc4=_0xc1a440+(Math[_0x14f139(0x398)]()*0x2-0x1)*_0x1598ef;_0x8de412['push'](_0x3f960a,{'x':(_0x3f960a['x']+_0x3fb99d['x'])/0x2,'y':_0x14cfc4});}}_0x8de412[_0x14f139(0x28e)](_0x4ac484[_0x14f139(0x46b)]()),_0x4ac484=_0x8de412,_0x1598ef/=_0x31e953,_0x4afd6d/=0x2;}}_0x449792['globalCompositeOperation']=_0x14f139(0x2a2),_0x449792[_0x14f139(0xe3)]=0xf,_0x449792['beginPath']();for(var _0xeb5e7f=0x0;_0xeb5e7f<_0x4ac484[_0x14f139(0x2e9)];_0xeb5e7f++){_0x449792[_0x14f139(0x2cf)](_0x4ac484[_0xeb5e7f]['x'],_0x4ac484[_0xeb5e7f]['y']);}let _0x2be148=0x3;while(_0x2be148--)_0x449792[_0x14f139(0x47a)]();_0x449792[_0x14f139(0x21c)](),this['_baseTexture'][_0x14f139(0x329)]();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x3ef)]=function(_0x41dc21){const _0x53473f=_0x5da319,_0x149fd3=this[_0x53473f(0x452)];_0x41dc21=_0x41dc21||['#821d1c',_0x53473f(0x538),'#fbec65',_0x53473f(0x199)];const _0x41d211=_0x41dc21[0x4]||'#000000',_0x2711b8=_0x41dc21[0x5]||_0x53473f(0x1dd);_0x149fd3[_0x53473f(0x1d5)](),_0x149fd3[_0x53473f(0x312)](0x0,0.162467,-0.162467,0x0,101.142,-4.33347),_0x149fd3[_0x53473f(0xfd)]=_0x41dc21[0x0],(_0x149fd3[_0x53473f(0x503)](),_0x149fd3[_0x53473f(0x23f)](555.3,409.4),_0x149fd3[_0x53473f(0x2cb)](527.4,409.4,497.2,419.2,497.3,436.6),_0x149fd3['bezierCurveTo'](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x149fd3[_0x53473f(0x2cb)](463.7,482.7,447.7,487.4,391.9,479.6),_0x149fd3[_0x53473f(0x2cf)](383.8,481.2),_0x149fd3['lineTo'](381.2,481.7),_0x149fd3[_0x53473f(0x2cb)](376.9,509.6,372.6,548.2,346.8,563.2),_0x149fd3[_0x53473f(0x2cb)](332.8,526.3,293.1,567.7,267.3,582.7),_0x149fd3[_0x53473f(0x2cb)](307.4,497.6,232.9,526.3,215.7,563.2),_0x149fd3[_0x53473f(0x2cb)](200.7,0x220,157.7,541.9,131.9,559.1),_0x149fd3[_0x53473f(0x2cb)](140.4,545.2,146.9,526.3,148.2,507.1),_0x149fd3[_0x53473f(0x2cb)](149.1,493.9,147.6,480.6,142.6,468.8),_0x149fd3[_0x53473f(0x2cb)](168.4,466.7,236.8,435.6,196.3,408.6),_0x149fd3[_0x53473f(0x2cb)](195.1,407.8,193.2,407.2,190.6,406.8),_0x149fd3[_0x53473f(0x2cb)](170.3,403.6,111.9,412.7,90.9,427.9),_0x149fd3[_0x53473f(0x2cb)](104.7,374.2,66.4,0x168,39.7,345.5),_0x149fd3['bezierCurveTo'](39.7,345.5,104.6,326.9,104.6,279.6),_0x149fd3[_0x53473f(0x2cb)](129.9,305.1,168.2,305.4,189.7,290.3),_0x149fd3[_0x53473f(0x2cb)](215.5,273.1,172.5,245.2,157.5,238.7),_0x149fd3[_0x53473f(0x2cb)](168.2,234.4,185.4,230.2,185.4,215.2),_0x149fd3[_0x53473f(0x2cb)](185.4,184.8,165.4,0x9d,146.1,0x8e),_0x149fd3[_0x53473f(0x2cb)](200.5,133.4,185.4,27.6,185.4,27.6),_0x149fd3['bezierCurveTo'](185.4,27.6,232.7,96.9,287.1,77.6),_0x149fd3[_0x53473f(0x2cb)](278.5,116.3,282.2,163.6,309.4,0xaa),_0x149fd3[_0x53473f(0x2cb)](319.9,172.5,346.7,161.4,346.7,161.4),_0x149fd3['bezierCurveTo'](343.2,202.2,345.5,215.3,369.4,215.3),_0x149fd3[_0x53473f(0x2cb)](392.3,215.3,413.3,0xaa,416.5,133.5),_0x149fd3['bezierCurveTo'](447.6,142.1,493.3,0x7e,527.7,89.4),_0x149fd3[_0x53473f(0x2cb)](527.2,90.9,502.6,170.4,533.7,206.5),_0x149fd3['bezierCurveTo'](504.5,211.4,477.2,236.8,474.1,0x100),_0x149fd3[_0x53473f(0x2cb)](0x1d8,269.2,481.3,279.6,509.4,278.3),_0x149fd3['bezierCurveTo'](512.3,278.2,515.3,277.9,518.6,277.5),_0x149fd3['bezierCurveTo'](510.4,326.9,593.3,323.5,593.3,323.5),_0x149fd3[_0x53473f(0x2cb)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x149fd3['fill'](),_0x149fd3[_0x53473f(0xfd)]=_0x41dc21[0x1],(_0x149fd3['beginPath'](),_0x149fd3['moveTo'](509.7,278.3),_0x149fd3['bezierCurveTo'](501.6,295.2,497.9,314.1,492.3,332.2),_0x149fd3[_0x53473f(0x2cb)](482.3,364.8,462.5,0x18e,0x1ae,408.1),_0x149fd3[_0x53473f(0x2cb)](422.2,410.5,413.9,411.5,406.4,414.8),_0x149fd3[_0x53473f(0x2cb)](377.9,427.1,370.6,0x1d2,344.4,482.5),_0x149fd3[_0x53473f(0x2cb)](307.2,0x1fa,259.1,472.5,215.5,477.7),_0x149fd3[_0x53473f(0x2cb)](191.1,480.7,170.2,495.6,148.3,507.2),_0x149fd3[_0x53473f(0x2cb)](149.2,0x1ee,147.7,480.7,142.7,468.9),_0x149fd3[_0x53473f(0x2cb)](168.5,466.8,236.9,435.7,196.4,408.7),_0x149fd3['bezierCurveTo'](195.2,407.9,193.3,407.3,190.7,406.9),_0x149fd3[_0x53473f(0x2cb)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x149fd3['bezierCurveTo'](104.8,374.3,66.5,360.1,39.8,345.6),_0x149fd3[_0x53473f(0x2cb)](39.8,345.6,104.7,0x147,104.7,279.7),_0x149fd3[_0x53473f(0x2cb)](0x82,305.2,168.3,305.5,189.8,290.4),_0x149fd3['bezierCurveTo'](215.6,273.2,172.6,245.3,157.6,238.8),_0x149fd3[_0x53473f(0x2cb)](168.3,234.5,185.5,230.3,185.5,215.3),_0x149fd3[_0x53473f(0x2cb)](185.5,184.9,165.5,157.1,146.2,142.1),_0x149fd3[_0x53473f(0x2cb)](200.6,133.5,185.5,27.7,185.5,27.7),_0x149fd3['bezierCurveTo'](185.5,27.7,232.8,0x61,287.2,77.7),_0x149fd3[_0x53473f(0x2cb)](278.6,116.4,282.3,163.7,309.5,170.1),_0x149fd3[_0x53473f(0x2cb)](0x140,172.6,346.8,161.5,346.8,161.5),_0x149fd3[_0x53473f(0x2cb)](343.3,202.3,345.6,215.4,369.5,215.4),_0x149fd3[_0x53473f(0x2cb)](392.4,215.4,413.4,170.1,416.6,133.6),_0x149fd3[_0x53473f(0x2cb)](447.7,142.2,493.4,126.1,527.8,89.5),_0x149fd3[_0x53473f(0x2cb)](527.3,0x5b,502.7,170.5,533.8,206.6),_0x149fd3[_0x53473f(0x2cb)](504.6,211.5,477.3,236.9,474.2,256.1),_0x149fd3['bezierCurveTo'](472.2,269.3,481.5,279.6,509.7,278.3)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3[_0x53473f(0xfd)]=_0x41dc21[0x2],(_0x149fd3[_0x53473f(0x503)](),_0x149fd3[_0x53473f(0x23f)](533.9,206.6),_0x149fd3['bezierCurveTo'](504.7,211.5,477.4,236.9,474.3,256.1),_0x149fd3['bezierCurveTo'](461.6,260.5,449.1,265.3,435.6,271.5),_0x149fd3[_0x53473f(0x2cb)](420.6,278.4,403.5,280.9,390.2,290.6),_0x149fd3['bezierCurveTo'](0x173,304.6,364.5,329.8,357.1,352.4),_0x149fd3['bezierCurveTo'](349.7,0x177,337.4,399.6,314.4,405.8),_0x149fd3[_0x53473f(0x2cb)](290.1,412.3,0x10a,395.2,0xf1,393.4),_0x149fd3[_0x53473f(0x2cb)](223.2,392.1,206.8,398.4,190.7,406.9),_0x149fd3[_0x53473f(0x2cb)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x149fd3[_0x53473f(0x2cb)](104.8,374.3,66.5,360.1,39.8,345.6),_0x149fd3[_0x53473f(0x2cb)](39.8,345.6,104.7,0x147,104.7,279.7),_0x149fd3[_0x53473f(0x2cb)](0x82,305.2,168.3,305.5,189.8,290.4),_0x149fd3['bezierCurveTo'](215.6,273.2,172.6,245.3,157.6,238.8),_0x149fd3[_0x53473f(0x2cb)](168.3,234.5,185.5,230.3,185.5,215.3),_0x149fd3['bezierCurveTo'](185.5,184.9,165.5,157.1,146.2,142.1),_0x149fd3[_0x53473f(0x2cb)](200.6,133.5,185.5,27.7,185.5,27.7),_0x149fd3[_0x53473f(0x2cb)](185.5,27.7,232.8,0x61,287.2,77.7),_0x149fd3['bezierCurveTo'](278.6,116.4,282.3,163.7,309.5,170.1),_0x149fd3[_0x53473f(0x2cb)](0x140,172.6,346.8,161.5,346.8,161.5),_0x149fd3[_0x53473f(0x2cb)](343.3,202.3,345.6,215.4,369.5,215.4),_0x149fd3[_0x53473f(0x2cb)](392.4,215.4,413.4,170.1,416.6,133.6),_0x149fd3[_0x53473f(0x2cb)](447.7,142.2,493.4,126.1,527.8,89.5),_0x149fd3[_0x53473f(0x2cb)](527.4,0x5b,502.8,170.4,533.9,206.6)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3[_0x53473f(0xfd)]=_0x41dc21[0x3],(_0x149fd3[_0x53473f(0x503)](),_0x149fd3[_0x53473f(0x23f)](120.7,325.8),_0x149fd3['bezierCurveTo'](126.5,334.6,138.7,335.8,149.3,336.1),_0x149fd3[_0x53473f(0x2cb)](193.7,337.4,238.1,338.7,282.5,0x154),_0x149fd3['bezierCurveTo'](289.7,340.2,297.6,340.2,303.3,335.8),_0x149fd3[_0x53473f(0x2cb)](312.9,328.2,310.8,312.8,317.4,302.5),_0x149fd3[_0x53473f(0x2cb)](324.7,291.1,0x154,0x121,353.1,285.9),_0x149fd3[_0x53473f(0x2cb)](405.5,273.6,444.9,231.7,0x1e1,191.8),_0x149fd3[_0x53473f(0x2cb)](486.2,186.1,491.6,0xb4,493.5,172.5),_0x149fd3[_0x53473f(0x2cb)](498.1,154.8,479.9,137.4,461.6,136.9),_0x149fd3['bezierCurveTo'](443.3,136.5,426.8,0x94,414.2,161.3),_0x149fd3[_0x53473f(0x2cb)](401.7,174.6,398.5,197.8,383.5,208.2),_0x149fd3[_0x53473f(0x2cb)](368.5,218.6,339.2,214.6,325.5,202.5),_0x149fd3['bezierCurveTo'](317.3,195.2,313.8,184.1,307.6,0xaf),_0x149fd3[_0x53473f(0x2cb)](291.6,151.6,259.3,144.6,241.8,122.3),_0x149fd3[_0x53473f(0x2cb)](235.7,114.6,231.7,105.4,225.2,98.1),_0x149fd3[_0x53473f(0x2cb)](218.6,0x5b,0xd0,85.9,0xc7,89.8),_0x149fd3[_0x53473f(0x2cb)](186.5,95.3,186.2,112.6,188.1,126.1),_0x149fd3[_0x53473f(0x2cb)](192.5,0x9d,198.5,187.7,205.8,0xda),_0x149fd3['bezierCurveTo'](211.1,239.7,216.2,265.5,201.2,282.2),_0x149fd3[_0x53473f(0x2cb)](189.7,295.1,108.1,306.6,120.7,325.8)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3[_0x53473f(0x4e5)]=_0x2711b8,_0x149fd3[_0x53473f(0x52d)]=0x5,(_0x149fd3[_0x53473f(0x503)](),_0x149fd3['moveTo'](555.3,409.4),_0x149fd3[_0x53473f(0x2cb)](527.4,409.4,497.2,419.2,497.3,436.6),_0x149fd3[_0x53473f(0x2cb)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x149fd3[_0x53473f(0x2cb)](463.7,482.7,447.7,487.4,391.9,479.6),_0x149fd3[_0x53473f(0x2cf)](383.8,481.2),_0x149fd3[_0x53473f(0x2cf)](381.2,481.7),_0x149fd3[_0x53473f(0x2cb)](376.9,509.6,372.6,548.2,346.8,563.2),_0x149fd3[_0x53473f(0x2cb)](332.8,526.3,293.1,567.7,267.3,582.7),_0x149fd3[_0x53473f(0x2cb)](307.4,497.6,232.9,526.3,215.7,563.2),_0x149fd3[_0x53473f(0x2cb)](200.7,0x220,157.7,541.9,131.9,559.1),_0x149fd3[_0x53473f(0x2cb)](146.3,535.7,154.9,497.6,142.6,468.8),_0x149fd3[_0x53473f(0x2cb)](168.4,466.7,236.8,435.6,196.3,408.6),_0x149fd3[_0x53473f(0x2cb)](185.6,401.4,114.6,410.7,0x5b,427.9),_0x149fd3[_0x53473f(0x2cb)](104.8,374.2,66.5,0x168,39.8,345.5),_0x149fd3[_0x53473f(0x2cb)](39.8,345.5,104.7,326.9,104.7,279.6),_0x149fd3['bezierCurveTo'](0x82,305.1,168.3,305.4,189.8,290.3),_0x149fd3[_0x53473f(0x2cb)](215.6,273.1,172.6,245.2,157.6,238.7),_0x149fd3['bezierCurveTo'](168.3,234.4,185.5,230.2,185.5,215.2),_0x149fd3[_0x53473f(0x2cb)](185.5,184.8,165.5,0x9d,146.2,0x8e),_0x149fd3[_0x53473f(0x2cb)](200.6,133.4,185.5,27.6,185.5,27.6),_0x149fd3[_0x53473f(0x2cb)](185.5,27.6,232.8,96.9,287.2,77.6),_0x149fd3[_0x53473f(0x2cb)](278.6,116.3,282.3,163.6,309.5,0xaa),_0x149fd3[_0x53473f(0x2cb)](0x140,172.5,346.8,161.4,346.8,161.4),_0x149fd3[_0x53473f(0x2cb)](343.3,202.2,345.6,215.3,369.5,215.3),_0x149fd3[_0x53473f(0x2cb)](392.4,215.3,413.4,0xaa,416.6,133.5),_0x149fd3[_0x53473f(0x2cb)](447.7,142.1,493.4,0x7e,527.8,89.4),_0x149fd3[_0x53473f(0x2cb)](527.3,90.9,502.7,170.4,533.8,206.5),_0x149fd3[_0x53473f(0x2cb)](482.3,215.2,437.1,287.1,518.8,277.4),_0x149fd3[_0x53473f(0x2cb)](510.6,326.8,593.5,323.4,593.5,323.4),_0x149fd3[_0x53473f(0x2cb)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x149fd3[_0x53473f(0x47a)](),_0x149fd3[_0x53473f(0xfd)]=_0x41d211,(_0x149fd3[_0x53473f(0x503)](),_0x149fd3['moveTo'](236.9,152.9),_0x149fd3[_0x53473f(0x2cb)](245.5,185.6,255.3,217.6,268.2,0xf9),_0x149fd3[_0x53473f(0x2cb)](281.4,281.1,296.5,312.4,310.8,344.1),_0x149fd3[_0x53473f(0x2cb)](338.4,0x195,369.3,464.6,393.1,527.2),_0x149fd3[_0x53473f(0x2cb)](0x18f,542.9,404.5,558.8,408.9,0x23f),_0x149fd3[_0x53473f(0x2cb)](0x19b,582.4,412.8,589.9,414.4,597.4),_0x149fd3[_0x53473f(0x2cb)](415.2,601.3,0x1a0,605.1,416.7,0x261),_0x149fd3[_0x53473f(0x2cb)](417.6,0x266,419.5,617.1,423.2,620.4),_0x149fd3[_0x53473f(0x2cb)](426.8,623.6,432.5,623.3,435.1,618.9),_0x149fd3['bezierCurveTo'](437.5,614.8,438.8,611.3,0x1b6,606.5),_0x149fd3[_0x53473f(0x2cb)](437.4,603.1,436.7,599.6,0x1b4,596.2),_0x149fd3['bezierCurveTo'](434.5,589.4,432.8,582.7,430.8,0x240),_0x149fd3[_0x53473f(0x2cb)](426.8,561.9,421.9,0x224,416.7,534.4),_0x149fd3[_0x53473f(0x2cb)](0x195,0x1f8,0x187,474.6,376.2,445.6),_0x149fd3['bezierCurveTo'](344.5,383.6,308.7,323.8,279.9,260.4),_0x149fd3[_0x53473f(0x2cb)](264.1,225.5,0xf8,189.7,237.6,152.8),_0x149fd3[_0x53473f(0x2cb)](237.5,152.3,236.7,152.5,236.9,152.9)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3[_0x53473f(0xfd)]=_0x41d211,(_0x149fd3[_0x53473f(0x503)](),_0x149fd3[_0x53473f(0x23f)](436.6,221.3),_0x149fd3[_0x53473f(0x2cb)](415.7,0xfa,403.1,0x11a,395.3,316.5),_0x149fd3[_0x53473f(0x2cb)](388.4,347.3,382.8,379.1,0x17c,410.6),_0x149fd3[_0x53473f(0x2cb)](378.2,430.6,377.5,0x1c3,378.3,471.1),_0x149fd3[_0x53473f(0x2cb)](378.6,477.6,388.6,477.7,388.5,471.1),_0x149fd3[_0x53473f(0x2cb)](388.2,453.4,387.8,435.8,388.7,418.1),_0x149fd3[_0x53473f(0x2cb)](389.4,0x194,390.9,389.9,392.1,375.8),_0x149fd3[_0x53473f(0x2cb)](395.2,341.9,398.1,308.4,409.7,276.1),_0x149fd3['bezierCurveTo'](416.6,256.9,426.2,238.9,437.7,222.1),_0x149fd3[_0x53473f(0x2cb)](438.3,221.2,437.1,220.6,436.6,221.3)),_0x149fd3['fill'](),_0x149fd3[_0x53473f(0xfd)]=_0x41d211,(_0x149fd3['beginPath'](),_0x149fd3[_0x53473f(0x23f)](0x86,344.4),_0x149fd3['bezierCurveTo'](209.5,355.1,275.3,397.6,335.7,441.6),_0x149fd3[_0x53473f(0x2cb)](343.7,447.4,351.6,453.3,359.4,459.2),_0x149fd3[_0x53473f(0x2cb)](363.3,462.2,367.2,465.1,371.2,468.1),_0x149fd3['bezierCurveTo'](375.2,471.1,378.3,474.1,383.4,474.6),_0x149fd3[_0x53473f(0x2cb)](385.5,474.8,387.6,472.1,386.8,470.1),_0x149fd3[_0x53473f(0x2cb)](383.8,462.7,374.4,0x1ca,368.1,453.5),_0x149fd3[_0x53473f(0x2cb)](360.9,448.2,353.6,442.9,346.3,437.7),_0x149fd3[_0x53473f(0x2cb)](330.9,426.7,315.3,416.1,299.1,406.2),_0x149fd3[_0x53473f(0x2cb)](266.5,386.3,232.2,368.6,195.8,356.6),_0x149fd3[_0x53473f(0x2cb)](175.6,349.9,155.1,345.9,133.9,343.9),_0x149fd3['bezierCurveTo'](133.7,343.9,133.6,344.4,0x86,344.4)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3['fillStyle']=_0x41d211,(_0x149fd3['beginPath'](),_0x149fd3[_0x53473f(0x23f)](458.7,294.7),_0x149fd3[_0x53473f(0x2cb)](458.7,294.7,0x1c9,295.4,0x1c6,296.6),_0x149fd3[_0x53473f(0x2cb)](0x1c3,297.8,446.6,299.5,441.2,301.6),_0x149fd3[_0x53473f(0x2cb)](435.8,303.7,429.4,306.2,422.4,309.1),_0x149fd3['bezierCurveTo'](415.4,0x138,407.8,315.5,400.2,319.5),_0x149fd3[_0x53473f(0x2cb)](399.3,0x140,398.5,320.4,397.6,320.9),_0x149fd3[_0x53473f(0x2cf)](396.2,321.7),_0x149fd3[_0x53473f(0x2cf)](395.5,322.1),_0x149fd3[_0x53473f(0x2cb)](395.4,322.2,395.4,0x142,395.4,0x142),_0x149fd3[_0x53473f(0x2cf)](395.3,321.8),_0x149fd3[_0x53473f(0x2cf)](395.1,321.5),_0x149fd3[_0x53473f(0x2cb)](394.5,320.6,393.9,319.7,393.3,318.8),_0x149fd3[_0x53473f(0x2cf)](392.4,317.5),_0x149fd3[_0x53473f(0x2cf)](0x188,316.7),_0x149fd3[_0x53473f(0x2cb)](390.9,314.6,390.1,312.6,389.3,310.6),_0x149fd3['bezierCurveTo'](387.9,306.6,0x183,302.6,386.2,298.9),_0x149fd3['bezierCurveTo'](384.7,291.5,0x180,284.8,383.6,279.1),_0x149fd3['bezierCurveTo'](382.8,267.8,383.4,260.5,383.5,259.4),_0x149fd3[_0x53473f(0x2cb)](383.6,258.2,384.2,265.4,386.3,0x115),_0x149fd3[_0x53473f(0x2cb)](387.4,282.8,388.8,289.7,390.7,297.2),_0x149fd3[_0x53473f(0x2cb)](391.7,300.9,392.8,304.8,394.3,308.5),_0x149fd3[_0x53473f(0x2cb)](395.1,310.4,395.8,312.2,396.8,313.9),_0x149fd3['lineTo'](397.1,314.6),_0x149fd3[_0x53473f(0x2cb)](397.1,314.7,397.1,314.6,397.1,314.7),_0x149fd3['lineTo'](397.1,314.7),_0x149fd3['lineTo'](397.1,314.7),_0x149fd3[_0x53473f(0x2cf)](397.1,314.7),_0x149fd3['lineTo'](397.1,314.7),_0x149fd3[_0x53473f(0x2cf)](397.1,314.7),_0x149fd3[_0x53473f(0x2cf)](397.4,314.5),_0x149fd3[_0x53473f(0x2cb)](405.3,310.3,413.3,307.1,420.6,304.6),_0x149fd3[_0x53473f(0x2cb)](427.9,302.1,434.6,300.3,440.2,298.9),_0x149fd3[_0x53473f(0x2cb)](445.8,297.5,450.4,296.5,453.6,295.8),_0x149fd3[_0x53473f(0x2cb)](456.9,295.1,458.7,294.7,458.7,294.7)),_0x149fd3['fill'](),_0x149fd3['fillStyle']=_0x41d211,(_0x149fd3[_0x53473f(0x503)](),_0x149fd3[_0x53473f(0x23f)](213.6,309.8),_0x149fd3[_0x53473f(0x2cb)](213.6,309.8,214.3,310.1,215.7,310.8),_0x149fd3[_0x53473f(0x2cb)](216.4,311.1,217.2,311.5,218.2,311.9),_0x149fd3[_0x53473f(0x2cb)](219.2,312.3,220.3,312.8,221.7,313.3),_0x149fd3['bezierCurveTo'](224.3,314.4,227.6,315.5,231.4,316.8),_0x149fd3[_0x53473f(0x2cb)](235.2,0x13e,239.6,319.4,244.4,320.8),_0x149fd3['bezierCurveTo'](254.1,323.6,265.8,326.5,278.7,330.5),_0x149fd3['bezierCurveTo'](285.1,332.6,291.8,334.9,298.6,0x152),_0x149fd3['bezierCurveTo'](305.4,0x155,312.2,344.8,318.5,349.8),_0x149fd3['bezierCurveTo'](319.9,350.9,321.2,0x160,322.5,353.2),_0x149fd3['bezierCurveTo'](323.1,353.8,323.8,354.4,324.4,354.9),_0x149fd3[_0x53473f(0x2cb)](0x145,355.5,325.6,356.1,326.1,356.7),_0x149fd3[_0x53473f(0x2cb)](326.4,0x165,326.7,357.3,0x147,357.6),_0x149fd3[_0x53473f(0x2cf)](327.1,357.7),_0x149fd3[_0x53473f(0x2cf)](327.1,357.7),_0x149fd3[_0x53473f(0x2cf)](327.1,357.7),_0x149fd3[_0x53473f(0x2cf)](327.1,357.7),_0x149fd3[_0x53473f(0x2cf)](327.1,357.8),_0x149fd3[_0x53473f(0x2cb)](327.1,357.9,327.2,357.9,327.2,0x166),_0x149fd3[_0x53473f(0x2cb)](327.2,0x166,327.2,0x166,327.3,357.9),_0x149fd3[_0x53473f(0x2cf)](327.3,357.8),_0x149fd3[_0x53473f(0x2cf)](327.3,357.8),_0x149fd3['lineTo'](327.3,357.8),_0x149fd3[_0x53473f(0x2cf)](327.3,357.7),_0x149fd3['lineTo'](327.3,357.4),_0x149fd3[_0x53473f(0x2cf)](327.4,356.2),_0x149fd3['bezierCurveTo'](327.5,354.6,327.6,0x161,327.7,351.5),_0x149fd3[_0x53473f(0x2cb)](327.8,349.9,0x148,348.4,328.1,346.9),_0x149fd3['bezierCurveTo'](328.7,340.8,329.6,335.1,330.5,329.7),_0x149fd3[_0x53473f(0x2cb)](332.3,318.9,334.3,309.4,335.8,301.5),_0x149fd3[_0x53473f(0x2cb)](0x153,285.6,340.2,275.5,340.5,273.7),_0x149fd3[_0x53473f(0x2cb)](340.6,272.8,340.6,274.8,340.5,279.2),_0x149fd3[_0x53473f(0x2cb)](340.3,283.6,339.8,290.3,338.8,298.8),_0x149fd3[_0x53473f(0x2cb)](337.9,307.3,336.4,317.5,0x14f,328.9),_0x149fd3[_0x53473f(0x2cb)](334.3,334.6,333.6,340.6,333.2,346.8),_0x149fd3['bezierCurveTo'](333.1,348.4,0x14d,349.9,332.9,351.5),_0x149fd3[_0x53473f(0x2cb)](332.8,353.1,332.7,354.7,332.7,356.3),_0x149fd3[_0x53473f(0x2cb)](332.7,357.3,332.6,358.3,332.6,359.3),_0x149fd3[_0x53473f(0x2cb)](332.5,360.9,332.6,362.6,332.5,364.2),_0x149fd3[_0x53473f(0x2cb)](332.5,367.5,332.4,370.8,332.4,374.2),_0x149fd3[_0x53473f(0x2cb)](330.5,371.7,328.7,369.1,326.6,366.6),_0x149fd3[_0x53473f(0x2cb)](325.6,365.3,324.6,364.1,323.6,362.8),_0x149fd3[_0x53473f(0x2cf)](322.8,361.8),_0x149fd3['bezierCurveTo'](322.6,361.6,322.5,361.5,322.4,361.4),_0x149fd3[_0x53473f(0x2cf)](321.6,360.6),_0x149fd3[_0x53473f(0x2cb)](321.1,360.1,320.6,359.5,0x140,0x167),_0x149fd3['lineTo'](318.3,357.5),_0x149fd3[_0x53473f(0x2cb)](317.2,356.5,0x13c,355.5,314.8,354.6),_0x149fd3[_0x53473f(0x2cb)](308.9,0x15e,302.5,346.4,296.1,343.3),_0x149fd3['bezierCurveTo'](289.7,340.2,283.2,337.7,276.9,335.4),_0x149fd3[_0x53473f(0x2cb)](264.4,330.9,252.9,327.3,243.3,323.8),_0x149fd3[_0x53473f(0x2cb)](238.5,322.1,234.2,320.4,230.5,318.8),_0x149fd3[_0x53473f(0x2cb)](226.8,317.2,223.6,315.7,221.1,314.4),_0x149fd3[_0x53473f(0x2cb)](219.8,313.8,218.7,313.1,217.8,312.6),_0x149fd3[_0x53473f(0x2cb)](216.8,312.1,0xd8,311.6,215.4,311.2),_0x149fd3[_0x53473f(0x2cb)](214.3,310.2,213.6,309.8,213.6,309.8)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3[_0x53473f(0xfd)]=_0x41d211,(_0x149fd3[_0x53473f(0x503)](),_0x149fd3[_0x53473f(0x23f)](235.1,251.7),_0x149fd3[_0x53473f(0x2cb)](235.1,251.7,236.5,252.2,238.9,253.2),_0x149fd3[_0x53473f(0x2cb)](241.3,254.2,244.9,255.7,249.1,257.8),_0x149fd3[_0x53473f(0x2cb)](253.4,259.9,258.3,262.4,263.8,265.3),_0x149fd3[_0x53473f(0x2cb)](269.3,268.1,275.3,271.2,281.7,273.9),_0x149fd3[_0x53473f(0x2cb)](282.5,274.3,283.3,274.6,284.1,274.9),_0x149fd3['bezierCurveTo'](284.5,275.1,284.9,275.2,285.3,275.4),_0x149fd3['lineTo'](285.9,275.6),_0x149fd3[_0x53473f(0x2cb)](0x11e,275.6,285.9,275.6,285.9,275.6),_0x149fd3[_0x53473f(0x2cf)](0x11e,275.7),_0x149fd3['bezierCurveTo'](0x11e,275.7,0x11e,275.7,0x11e,275.6),_0x149fd3[_0x53473f(0x2cf)](0x11e,275.4),_0x149fd3[_0x53473f(0x2cf)](0x11e,0x113),_0x149fd3[_0x53473f(0x2cb)](286.1,274.2,286.2,273.5,286.3,272.8),_0x149fd3[_0x53473f(0x2cb)](286.5,271.1,286.8,269.5,287.2,0x10c),_0x149fd3['bezierCurveTo'](288.7,261.8,291.1,256.8,293.2,252.7),_0x149fd3['bezierCurveTo'](295.4,248.6,297.3,245.4,298.8,243.1),_0x149fd3['bezierCurveTo'](300.3,240.8,301.2,239.4,301.5,238.9),_0x149fd3[_0x53473f(0x2cb)](301.8,238.5,301.4,239.7,300.5,242.1),_0x149fd3[_0x53473f(0x2cb)](299.6,244.5,298.2,248.1,296.6,252.6),_0x149fd3['bezierCurveTo'](0x127,257.1,293.2,262.5,292.1,268.5),_0x149fd3['bezierCurveTo'](0x124,269.2,291.9,0x10e,291.8,270.8),_0x149fd3[_0x53473f(0x2cb)](291.7,271.6,291.6,272.3,291.6,273.1),_0x149fd3[_0x53473f(0x2cb)](291.6,273.5,291.6,273.9,291.5,274.3),_0x149fd3['lineTo'](291.5,274.9),_0x149fd3[_0x53473f(0x2cb)](291.5,275.1,291.5,275.2,291.5,275.6),_0x149fd3['bezierCurveTo'](291.5,277.1,291.5,278.5,291.5,0x118),_0x149fd3['bezierCurveTo'](291.5,280.8,291.5,281.7,291.5,282.5),_0x149fd3['lineTo'](291.5,283.1),_0x149fd3[_0x53473f(0x2cf)](291.5,283.4),_0x149fd3[_0x53473f(0x2cf)](291.5,283.5),_0x149fd3['lineTo'](291.4,283.5),_0x149fd3['lineTo'](291.3,283.4),_0x149fd3[_0x53473f(0x2cf)](290.1,0x11b),_0x149fd3[_0x53473f(0x2cb)](288.5,282.4,286.9,281.9,285.2,281.3),_0x149fd3[_0x53473f(0x2cb)](284.8,281.2,284.3,0x119,0x11c,280.9),_0x149fd3[_0x53473f(0x2cf)](283.3,280.6),_0x149fd3[_0x53473f(0x2cf)](0x11a,280.1),_0x149fd3[_0x53473f(0x2cb)](281.1,279.8,280.3,279.4,279.5,279.1),_0x149fd3['bezierCurveTo'](272.7,276.2,266.7,272.7,261.4,269.4),_0x149fd3[_0x53473f(0x2cb)](256.1,266.1,251.5,262.9,247.6,260.2),_0x149fd3[_0x53473f(0x2cb)](243.7,257.5,240.6,255.4,238.4,253.9),_0x149fd3['bezierCurveTo'](236.3,252.5,235.1,251.7,235.1,251.7)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3[_0x53473f(0xfd)]=_0x41d211,(_0x149fd3['beginPath'](),_0x149fd3[_0x53473f(0x23f)](235.1,0x1d7),_0x149fd3[_0x53473f(0x2cb)](235.1,0x1d7,237.1,469.6,240.8,466.9),_0x149fd3[_0x53473f(0x2cb)](244.5,464.3,249.8,460.6,256.5,456.2),_0x149fd3['bezierCurveTo'](263.3,451.8,271.4,446.8,281.1,442.1),_0x149fd3['bezierCurveTo'](281.7,441.8,282.3,441.5,282.9,441.2),_0x149fd3[_0x53473f(0x2cb)](283.5,440.9,284.1,440.6,284.8,440.4),_0x149fd3['bezierCurveTo'](286.1,439.8,287.3,439.3,288.6,438.7),_0x149fd3[_0x53473f(0x2cb)](291.2,437.7,293.9,436.6,296.7,435.7),_0x149fd3['bezierCurveTo'](299.5,434.7,302.4,0x1b2,305.3,433.1),_0x149fd3[_0x53473f(0x2cb)](308.3,432.4,311.3,431.7,314.4,431.2),_0x149fd3[_0x53473f(0x2cb)](317.5,430.6,320.5,430.3,323.5,0x1ae),_0x149fd3[_0x53473f(0x2cb)](324.2,429.9,0x145,429.9,325.7,429.8),_0x149fd3[_0x53473f(0x2cf)](326.3,429.8),_0x149fd3[_0x53473f(0x2cb)](326.4,429.8,326.4,429.8,326.4,429.8),_0x149fd3[_0x53473f(0x2cf)](326.4,429.8),_0x149fd3[_0x53473f(0x2cf)](326.4,429.8),_0x149fd3[_0x53473f(0x2cf)](326.4,429.8),_0x149fd3['bezierCurveTo'](326.5,429.8,326.5,429.8,326.5,429.8),_0x149fd3[_0x53473f(0x2cb)](326.5,429.8,326.5,429.8,326.5,429.7),_0x149fd3['bezierCurveTo'](326.2,429.2,0x146,428.6,325.7,428.1),_0x149fd3[_0x53473f(0x2cb)](325.1,426.9,324.5,425.7,323.9,424.5),_0x149fd3[_0x53473f(0x2cb)](322.7,422.1,321.4,419.8,320.2,417.6),_0x149fd3[_0x53473f(0x2cb)](317.7,413.1,315.2,0x199,312.8,405.2),_0x149fd3[_0x53473f(0x2cb)](311.5,403.3,310.4,401.5,309.2,399.7),_0x149fd3[_0x53473f(0x2cb)](0x134,0x18e,306.8,396.3,305.7,394.7),_0x149fd3[_0x53473f(0x2cb)](301.2,388.4,297.1,383.5,294.1,0x17c),_0x149fd3['bezierCurveTo'](0x123,376.5,289.1,374.4,288.5,373.8),_0x149fd3[_0x53473f(0x2cb)](287.9,373.2,289.6,374.5,292.9,377.3),_0x149fd3[_0x53473f(0x2cb)](293.7,0x17a,294.7,378.8,295.6,379.8),_0x149fd3[_0x53473f(0x2cb)](296.6,380.7,297.7,381.8,298.9,382.9),_0x149fd3['bezierCurveTo'](300.1,0x180,301.2,385.3,302.5,386.6),_0x149fd3[_0x53473f(0x2cb)](303.8,387.9,305.1,389.4,306.5,390.9),_0x149fd3[_0x53473f(0x2cb)](0x138,397.1,318.2,404.9,0x144,414.3),_0x149fd3[_0x53473f(0x2cb)](324.7,415.5,325.5,416.6,326.2,417.9),_0x149fd3[_0x53473f(0x2cb)](326.9,419.1,327.6,420.3,328.3,421.6),_0x149fd3[_0x53473f(0x2cb)](0x149,422.8,329.7,424.1,330.4,425.4),_0x149fd3[_0x53473f(0x2cb)](330.7,0x1aa,331.1,426.7,331.4,427.4),_0x149fd3[_0x53473f(0x2cb)](0x14c,428.6,332.6,429.9,333.2,431.2),_0x149fd3[_0x53473f(0x2cf)](334.1,433.1),_0x149fd3[_0x53473f(0x2cf)](334.5,434.1),_0x149fd3[_0x53473f(0x2cf)](334.7,434.6),_0x149fd3[_0x53473f(0x2cf)](334.8,434.7),_0x149fd3[_0x53473f(0x2cf)](334.8,434.8),_0x149fd3[_0x53473f(0x2cb)](334.8,434.8,334.8,434.8,334.7,434.8),_0x149fd3['lineTo'](334.4,434.8),_0x149fd3['bezierCurveTo'](0x14d,434.9,331.6,435.1,330.2,435.3),_0x149fd3[_0x53473f(0x2cb)](328.9,435.4,327.6,435.5,326.3,435.6),_0x149fd3[_0x53473f(0x2cb)](325.6,435.7,324.8,435.7,324.1,435.8),_0x149fd3[_0x53473f(0x2cb)](321.2,436.2,318.2,436.5,315.3,437.1),_0x149fd3[_0x53473f(0x2cb)](312.3,437.5,309.5,438.2,306.6,438.8),_0x149fd3['bezierCurveTo'](303.8,439.5,0x12d,440.2,298.3,441.1),_0x149fd3[_0x53473f(0x2cb)](295.6,441.9,0x125,442.9,290.4,443.7),_0x149fd3[_0x53473f(0x2cb)](289.1,444.2,287.9,444.7,286.6,445.2),_0x149fd3[_0x53473f(0x2cb)](0x11e,445.4,285.4,445.7,284.7,445.9),_0x149fd3[_0x53473f(0x2cb)](284.1,446.2,283.5,446.4,282.9,446.7),_0x149fd3['bezierCurveTo'](273.3,450.8,264.8,455.1,257.8,458.9),_0x149fd3[_0x53473f(0x2cb)](243.8,466.3,235.1,0x1d7,235.1,0x1d7)),_0x149fd3['fill'](),_0x149fd3[_0x53473f(0xfd)]=_0x41d211,(_0x149fd3[_0x53473f(0x503)](),_0x149fd3['moveTo'](0xb1,376.4),_0x149fd3['bezierCurveTo'](0xb1,376.4,178.8,375.9,182.1,375.2),_0x149fd3[_0x53473f(0x2cb)](185.4,374.6,190.3,373.8,196.5,373.5),_0x149fd3[_0x53473f(0x2cb)](202.6,373.2,209.9,373.4,217.9,0x176),_0x149fd3[_0x53473f(0x2cb)](225.9,374.7,234.6,375.8,243.7,376.9),_0x149fd3['bezierCurveTo'](244.3,0x179,244.8,0x179,245.4,377.1),_0x149fd3['lineTo'](245.8,377.1),_0x149fd3[_0x53473f(0x2cf)](245.8,377.1),_0x149fd3[_0x53473f(0x2cf)](245.8,377.1),_0x149fd3[_0x53473f(0x2cf)](245.8,377.1),_0x149fd3[_0x53473f(0x2cf)](245.9,377.1),_0x149fd3['bezierCurveTo'](245.9,377.1,245.9,377.1,245.9,0x179),_0x149fd3[_0x53473f(0x2cf)](245.8,376.9),_0x149fd3[_0x53473f(0x2cf)](245.8,376.8),_0x149fd3[_0x53473f(0x2cf)](245.4,376.3),_0x149fd3[_0x53473f(0x2cb)](244.7,375.5,244.1,374.7,243.5,0x176),_0x149fd3[_0x53473f(0x2cb)](242.2,372.5,240.9,0x173,239.6,369.6),_0x149fd3[_0x53473f(0x2cb)](234.4,0x16c,229.3,359.3,224.9,355.4),_0x149fd3['bezierCurveTo'](216.1,347.6,210.3,342.8,209.4,0x156),_0x149fd3[_0x53473f(0x2cb)](208.9,341.6,210.3,342.3,213.1,0x158),_0x149fd3['bezierCurveTo'](215.9,345.7,220.1,348.3,225.3,351.9),_0x149fd3[_0x53473f(0x2cb)](230.4,355.5,236.4,0x168,242.6,365.6),_0x149fd3[_0x53473f(0x2cb)](243.4,366.3,244.1,0x16f,244.9,367.8),_0x149fd3['bezierCurveTo'](245.7,368.6,246.4,369.3,247.2,370.1),_0x149fd3[_0x53473f(0x2cb)](0xf8,370.9,248.7,371.7,249.4,372.5),_0x149fd3[_0x53473f(0x2cf)](0xfa,373.1),_0x149fd3[_0x53473f(0x2cb)](250.1,373.2,250.1,373.2,250.2,373.3),_0x149fd3['lineTo'](250.4,373.6),_0x149fd3[_0x53473f(0x2cf)](250.9,374.2),_0x149fd3[_0x53473f(0x2cb)](251.5,0x177,252.2,375.8,252.8,376.6),_0x149fd3[_0x53473f(0x2cb)](254.1,378.2,255.4,379.9,256.7,381.7),_0x149fd3[_0x53473f(0x2cf)](257.7,0x17f),_0x149fd3[_0x53473f(0x2cf)](258.2,383.7),_0x149fd3[_0x53473f(0x2cf)](258.3,383.9),_0x149fd3[_0x53473f(0x2cf)](258.3,383.9),_0x149fd3[_0x53473f(0x2cf)](258.3,383.9),_0x149fd3[_0x53473f(0x2cf)](258.2,383.9),_0x149fd3[_0x53473f(0x2cf)](257.8,383.9),_0x149fd3[_0x53473f(0x2cb)](256.7,383.8,255.6,383.7,254.6,383.6),_0x149fd3[_0x53473f(0x2cb)](252.4,383.4,250.2,383.2,0xf8,383.1),_0x149fd3[_0x53473f(0x2cb)](246.4,382.9,244.9,382.8,243.3,382.6),_0x149fd3[_0x53473f(0x2cb)](234.1,381.5,225.4,0x17c,217.6,378.8),_0x149fd3[_0x53473f(0x2cb)](209.7,377.6,202.7,376.7,196.7,376.3),_0x149fd3[_0x53473f(0x2cb)](190.7,375.9,185.9,375.9,182.5,0x178),_0x149fd3[_0x53473f(0x2cb)](178.9,376.3,0xb1,376.4,0xb1,376.4)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3[_0x53473f(0xfd)]=_0x41d211,(_0x149fd3['beginPath'](),_0x149fd3[_0x53473f(0x23f)](458.7,346.3),_0x149fd3[_0x53473f(0x2cb)](458.7,346.3,456.7,347.4,0x1c5,349.4),_0x149fd3['bezierCurveTo'](449.4,351.5,444.2,354.6,438.1,0x167),_0x149fd3[_0x53473f(0x2cb)](432.1,363.4,425.3,369.1,418.2,375.9),_0x149fd3[_0x53473f(0x2cb)](411.1,382.7,403.7,390.6,396.1,399.1),_0x149fd3[_0x53473f(0x2cb)](0x18a,401.5,391.9,403.9,389.8,406.2),_0x149fd3[_0x53473f(0x2cb)](388.1,408.1,386.5,0x19a,384.8,411.8),_0x149fd3[_0x53473f(0x2cf)](383.6,413.2),_0x149fd3[_0x53473f(0x2cf)](383.4,413.4),_0x149fd3['lineTo'](383.3,413.5),_0x149fd3['lineTo'](383.3,413.4),_0x149fd3[_0x53473f(0x2cf)](383.2,412.9),_0x149fd3['lineTo'](0x17f,411.9),_0x149fd3['bezierCurveTo'](382.7,410.6,382.4,409.3,382.2,408.1),_0x149fd3[_0x53473f(0x2cb)](381.9,406.8,381.6,405.6,381.4,404.4),_0x149fd3[_0x53473f(0x2cb)](381.2,403.4,381.1,402.5,380.9,401.5),_0x149fd3[_0x53473f(0x2cb)](380.7,400.2,380.5,398.9,380.3,397.6),_0x149fd3['bezierCurveTo'](379.9,395.1,379.6,392.6,379.4,390.1),_0x149fd3[_0x53473f(0x2cb)](378.3,380.4,377.5,371.9,376.5,364.6),_0x149fd3[_0x53473f(0x2cb)](375.6,357.4,374.5,351.5,373.3,347.4),_0x149fd3[_0x53473f(0x2cb)](373.1,346.3,372.7,345.4,372.5,344.6),_0x149fd3['bezierCurveTo'](372.2,343.8,0x174,0x157,371.7,342.4),_0x149fd3['bezierCurveTo'](371.2,341.2,370.9,340.4,370.7,0x154),_0x149fd3[_0x53473f(0x2cb)](370.5,339.6,370.7,339.9,371.2,340.6),_0x149fd3['bezierCurveTo'](371.7,341.4,372.5,342.6,373.4,344.5),_0x149fd3[_0x53473f(0x2cb)](375.2,348.2,377.2,354.1,0x17b,361.7),_0x149fd3[_0x53473f(0x2cb)](380.8,369.3,382.4,378.4,384.1,388.5),_0x149fd3[_0x53473f(0x2cb)](384.5,0x187,0x181,393.6,385.4,396.2),_0x149fd3['bezierCurveTo'](385.6,397.5,385.9,398.8,386.1,400.1),_0x149fd3['bezierCurveTo'](386.5,0x192,386.4,401.3,386.4,401.5),_0x149fd3['lineTo'](386.4,401.5),_0x149fd3['lineTo'](386.4,401.5),_0x149fd3[_0x53473f(0x2cf)](386.5,401.4),_0x149fd3[_0x53473f(0x2cf)](386.9,400.9),_0x149fd3[_0x53473f(0x2cf)](0x183,400.8),_0x149fd3[_0x53473f(0x2cf)](387.5,400.2),_0x149fd3['lineTo'](388.9,398.6),_0x149fd3[_0x53473f(0x2cb)](389.8,397.5,390.8,396.5,391.7,395.4),_0x149fd3['bezierCurveTo'](399.4,386.8,407.1,378.9,414.8,372.4),_0x149fd3[_0x53473f(0x2cb)](422.4,365.8,429.9,360.6,436.4,356.7),_0x149fd3[_0x53473f(0x2cb)](0x1bb,352.8,448.6,350.3,452.5,348.7),_0x149fd3['bezierCurveTo'](454.5,347.9,0x1c8,347.4,0x1c9,0x15b),_0x149fd3['bezierCurveTo'](458.1,346.5,458.7,346.3,458.7,346.3)),_0x149fd3[_0x53473f(0x1ef)](),_0x149fd3[_0x53473f(0x21c)](),this[_0x53473f(0x225)][_0x53473f(0x329)]();},Bitmap['prototype']['drawSakuraPetal']=function(_0x12eaea,_0x59d42a,_0x47c60f){const _0x5b51b6=_0x5da319,_0x251997=this[_0x5b51b6(0x452)];_0x251997[_0x5b51b6(0x1d5)]();const _0xbb74b8=_0x251997['createLinearGradient'](0x0,this[_0x5b51b6(0x42b)]/0x2,this[_0x5b51b6(0x16e)]/0x2,this[_0x5b51b6(0x42b)]/0x2);_0xbb74b8[_0x5b51b6(0x37f)](0x0,_0x12eaea||'#faaacf'),_0xbb74b8['addColorStop'](0x1,_0x59d42a||_0x5b51b6(0x250)),_0x251997[_0x5b51b6(0xfd)]=_0xbb74b8,(_0x251997['beginPath'](),_0x251997[_0x5b51b6(0x23f)](12.57908,31.191794),_0x251997[_0x5b51b6(0x2cb)](4.317875,26.790381,0x2,21.507626,0x2,21.507626),_0x251997[_0x5b51b6(0x2cb)](0x2,21.507626,5.544827,18.680225,7.844373,17.156388),_0x251997[_0x5b51b6(0x2cb)](5.6081,15.442017,2.28258,12.418619,2.28258,12.418619),_0x251997[_0x5b51b6(0x2cb)](2.28258,12.418619,4.929183,7.198899,13.612139,3.449718),_0x251997[_0x5b51b6(0x2cb)](30.630505,-3.805291,49.031689,18.529354,49.031689,18.529354),_0x251997[_0x5b51b6(0x2cb)](49.031689,18.529354,48.933179,18.511974,48.718891,18.575774),_0x251997[_0x5b51b6(0x2cb)](48.915856,18.610504,49.014335,18.627874,49.014335,18.627874),_0x251997[_0x5b51b6(0x2cb)](49.014335,18.627874,26.958007,38.905902,12.579092,31.191834)),_0x251997[_0x5b51b6(0x1ef)](),_0x251997[_0x5b51b6(0x1c6)]=_0x47c60f||_0x5b51b6(0x1dd),_0x251997[_0x5b51b6(0x47a)](),_0x251997['save'](),_0x251997[_0x5b51b6(0x21c)](),this[_0x5b51b6(0x225)][_0x5b51b6(0x329)]();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x393)]=function(_0x324311){const _0xd0f439=_0x5da319,_0x39c38e=this[_0xd0f439(0x452)];_0x324311=_0x324311||[_0xd0f439(0x105),'#00dd00','#00bb00',_0xd0f439(0x45c),_0xd0f439(0x365),_0xd0f439(0x1dd)],_0x39c38e[_0xd0f439(0x1d5)](),_0x39c38e[_0xd0f439(0x312)](0.044027,0.164312,-0.164312,0.044027,89.0097,-44.1852),_0x39c38e['fillStyle']=_0x324311[0x0],_0x39c38e['strokeStyle']=_0x324311[0x5],_0x39c38e[_0xd0f439(0x52d)]=0xc,(_0x39c38e[_0xd0f439(0x503)](),_0x39c38e['moveTo'](431.62,249.52),_0x39c38e[_0xd0f439(0x2cb)](431.721833,257.349163,431.387983,265.177929,430.62,272.97),_0x39c38e[_0xd0f439(0x2cb)](430.23,276.86,429.73,280.75,429.1,284.61),_0x39c38e[_0xd0f439(0x2cb)](428.47,288.47,427.91,292.3,427.37,296.18),_0x39c38e[_0xd0f439(0x2cb)](426.83,300.06,426.06,303.89,425.37,307.73),_0x39c38e[_0xd0f439(0x2cb)](424.68,311.57,423.88,315.4,423.26,319.24),_0x39c38e[_0xd0f439(0x2cb)](422.64,323.08,422.18,326.95,421.56,330.82),_0x39c38e[_0xd0f439(0x2cb)](420.94,334.69,420.14,338.52,419.39,342.35),_0x39c38e[_0xd0f439(0x2cb)](418.64,346.18,417.8,350.01,416.84,353.81),_0x39c38e[_0xd0f439(0x2cb)](415.88,357.61,414.75,361.36,413.6,365.1),_0x39c38e['bezierCurveTo'](411.28,372.57,408.73,379.96,406.25,387.35),_0x39c38e['bezierCurveTo'](405.01,391.06,403.73,394.77,402.15,398.35),_0x39c38e['bezierCurveTo'](400.57,401.93,398.73,405.42,396.87,408.87),_0x39c38e[_0xd0f439(0x2cb)](395.01,412.32,0x189,415.72,0x187,419.05),_0x39c38e[_0xd0f439(0x2cb)](0x185,422.38,386.74,425.65,384.38,428.79),_0x39c38e[_0xd0f439(0x2cb)](379.581436,434.992727,374.447096,440.928264,0x171,446.57),_0x39c38e[_0xd0f439(0x2cb)](363.63,452.25,358.11,457.81,352.4,463.16),_0x39c38e[_0xd0f439(0x2cb)](349.56,465.85,346.63,468.42,343.72,471.04),_0x39c38e[_0xd0f439(0x2cf)](0x14f,478.86),_0x39c38e[_0xd0f439(0x2cf)](326.28,486.68),_0x39c38e[_0xd0f439(0x2cf)](321.9,490.58),_0x39c38e[_0xd0f439(0x2cb)](320.42,491.87,318.9,493.12,317.31,494.31),_0x39c38e[_0xd0f439(0x2cb)](314.158788,496.68913,310.840189,498.838031,307.38,500.74),_0x39c38e[_0xd0f439(0x2cb)](305.65,501.74,303.88,502.55,302.15,503.43),_0x39c38e[_0xd0f439(0x2cf)](296.92,506.07),_0x39c38e[_0xd0f439(0x2cb)](293.43,507.82,289.92,509.53,286.29,511.07),_0x39c38e['bezierCurveTo'](282.677226,512.628282,278.985531,513.996813,275.23,515.17),_0x39c38e[_0xd0f439(0x2cb)](271.49,516.37,267.75,517.45,0x108,518.58),_0x39c38e[_0xd0f439(0x2cb)](260.227016,519.72514,256.38621,520.633574,252.5,521.3),_0x39c38e[_0xd0f439(0x2cb)](248.595082,521.810403,244.66662,522.120808,240.73,522.23),_0x39c38e[_0xd0f439(0x2cf)](234.87,522.46),_0x39c38e[_0xd0f439(0x2cf)](231.93,522.57),_0x39c38e[_0xd0f439(0x2cb)](231.042639,522.560274,230.157021,522.650849,229.29,522.84),_0x39c38e[_0xd0f439(0x2cf)](229.29,522.84),_0x39c38e[_0xd0f439(0x2cf)](229.12,522.84),_0x39c38e[_0xd0f439(0x2cf)](228.9,522.84),_0x39c38e['bezierCurveTo'](226.0396,522.722573,223.221208,522.110173,220.57,521.03),_0x39c38e[_0xd0f439(0x2cf)](220.44,520.98),_0x39c38e['bezierCurveTo'](219.08661,520.382693,217.816088,519.612985,216.66,518.69),_0x39c38e[_0xd0f439(0x2cb)](216.085072,518.218253,215.537516,517.714102,215.02,517.18),_0x39c38e[_0xd0f439(0x2cf)](213.61,515.56),_0x39c38e[_0xd0f439(0x2cf)](213.51,515.44),_0x39c38e['lineTo'](213.44,515.27),_0x39c38e[_0xd0f439(0x2cf)](213.44,515.22),_0x39c38e[_0xd0f439(0x2cb)](212.708687,513.436313,211.887639,511.69075,210.98,509.99),_0x39c38e[_0xd0f439(0x2cb)](210.09,508.23,209.21,506.46,208.39,504.65),_0x39c38e[_0xd0f439(0x2cb)](206.643417,501.02829,205.395407,497.186707,204.68,493.23),_0x39c38e[_0xd0f439(0x2cb)](204.146127,489.249079,204.125962,485.21606,204.62,481.23),_0x39c38e['bezierCurveTo'](205.081051,477.294323,205.748639,473.385598,206.62,469.52),_0x39c38e[_0xd0f439(0x2cb)](207.49288,465.764819,207.886016,461.9141,207.79,458.06),_0x39c38e[_0xd0f439(0x2cb)](207.513295,454.195646,206.860201,450.36751,205.84,446.63),_0x39c38e[_0xd0f439(0x2cb)](204.99,443.31,204.17,439.98,203.25,436.68),_0x39c38e[_0xd0f439(0x2cb)](203.12,436.2,202.99,435.68,202.85,435.26),_0x39c38e[_0xd0f439(0x2cf)](199.49,0x1a8),_0x39c38e[_0xd0f439(0x2cf)](196.33,412.63),_0x39c38e[_0xd0f439(0x2cb)](195.241308,408.813871,194.412739,404.928284,193.85,0x191),_0x39c38e[_0xd0f439(0x2cb)](192.79,393.13,192.48,385.3,192.02,377.41),_0x39c38e[_0xd0f439(0x2cb)](191.77,369.41,192.93,361.55,194.4,353.82),_0x39c38e[_0xd0f439(0x2cf)](196.71,342.26),_0x39c38e[_0xd0f439(0x2cb)](197.47,338.41,198.18,334.55,198.81,330.69),_0x39c38e['bezierCurveTo'](199.44,326.83,200.07,322.93,200.45,319.07),_0x39c38e[_0xd0f439(0x2cb)](200.83,315.21,0xc9,311.25,201.45,307.31),_0x39c38e['bezierCurveTo'](202.45,299.51,203.2,291.66,205.03,283.93),_0x39c38e[_0xd0f439(0x2cb)](206.86,276.2,210.25,0x10d,212.78,261.6),_0x39c38e['bezierCurveTo'](215.47,254.2,218.06,246.79,220.78,239.41),_0x39c38e[_0xd0f439(0x2cb)](222.24,235.74,223.88,232.16,225.46,228.56),_0x39c38e[_0xd0f439(0x2cb)](227.04,224.96,228.46,221.33,0xe6,217.7),_0x39c38e[_0xd0f439(0x2cf)](234.48,206.81),_0x39c38e[_0xd0f439(0x2cb)](235.91,203.21,236.93,199.36,238.48,195.74),_0x39c38e[_0xd0f439(0x2cf)](240.77,190.29),_0x39c38e[_0xd0f439(0x2cb)](241.53,188.47,242.27,186.64,243.15,184.89),_0x39c38e[_0xd0f439(0x2cb)](244.83,181.33,246.56,177.79,248.15,174.23),_0x39c38e['bezierCurveTo'](249.74,170.67,251.28,167.02,253.15,163.5),_0x39c38e[_0xd0f439(0x2cb)](255.02,159.98,257.01,156.61,259.15,153.29),_0x39c38e[_0xd0f439(0x2cb)](261.29,149.97,263.53,146.74,265.82,143.53),_0x39c38e['bezierCurveTo'](268.11,140.32,270.29,137.11,272.31,133.75),_0x39c38e[_0xd0f439(0x2cb)](274.33,130.39,276.31,126.98,278.2,123.57),_0x39c38e[_0xd0f439(0x2cb)](280.09,120.16,281.77,116.57,283.6,113.1),_0x39c38e[_0xd0f439(0x2cb)](284.52,111.36,285.47,109.62,286.5,107.93),_0x39c38e[_0xd0f439(0x2cb)](287.522434,106.213457,288.729617,104.61394,290.1,103.16),_0x39c38e[_0xd0f439(0x2cb)](291.46,101.7,292.9,100.35,294.29,98.98),_0x39c38e[_0xd0f439(0x2cb)](295.68,97.61,297.01,96.17,298.37,94.75),_0x39c38e['lineTo'](306.51,86.23),_0x39c38e[_0xd0f439(0x2cb)](309.21,83.35,312.03,80.59,314.93,77.93),_0x39c38e['bezierCurveTo'](317.83,75.27,320.83,72.71,323.87,70.22),_0x39c38e[_0xd0f439(0x2cb)](326.950045,67.806921,329.835603,65.155418,332.5,62.29),_0x39c38e[_0xd0f439(0x2cb)](335.15434,59.416711,337.584777,56.344397,339.77,53.1),_0x39c38e[_0xd0f439(0x2cb)](341.91,49.84,344.23,46.49,347.5,44.1),_0x39c38e[_0xd0f439(0x2cb)](349.125878,42.9073,350.950982,42.013371,352.89,41.46),_0x39c38e[_0xd0f439(0x2cb)](353.37,41.33,353.89,41.2,354.34,41.1),_0x39c38e[_0xd0f439(0x2cb)](354.838027,40.968768,355.346669,40.881764,355.86,40.84),_0x39c38e[_0xd0f439(0x2cb)](356.947139,40.805706,358.010866,41.160281,358.86,41.84),_0x39c38e['bezierCurveTo'](359.63952,42.468744,360.362298,43.164753,361.02,43.92),_0x39c38e['lineTo'](363.02,46.07),_0x39c38e[_0xd0f439(0x2cb)](364.36,47.52,365.68,48.98,366.95,50.49),_0x39c38e[_0xd0f439(0x2cb)](370.89,55.3,374.55,60.33,378.05,65.49),_0x39c38e[_0xd0f439(0x2cf)](378.05,65.49),_0x39c38e['bezierCurveTo'](378.99,66.86,379.91,68.23,380.83,69.61),_0x39c38e['bezierCurveTo'](383.02,72.87,385.19,76.15,387.29,79.48),_0x39c38e[_0xd0f439(0x2cb)](389.460572,82.779822,391.414679,86.217047,393.14,89.77),_0x39c38e[_0xd0f439(0x2cb)](394.766901,93.373214,396.130474,97.089619,397.22,100.89),_0x39c38e[_0xd0f439(0x2cb)](398.34,104.67,399.22,108.5,400.29,112.28),_0x39c38e[_0xd0f439(0x2cb)](401.36,116.06,402.41,119.83,403.67,123.54),_0x39c38e['lineTo'](407.58,134.66),_0x39c38e[_0xd0f439(0x2cb)](408.86,138.3,410.15,141.94,411.42,145.59),_0x39c38e[_0xd0f439(0x2cb)](412.69,149.24,414.06,153.14,415.34,156.93),_0x39c38e[_0xd0f439(0x2cf)](417.23,162.52),_0x39c38e[_0xd0f439(0x2cf)](418.98,168.15),_0x39c38e[_0xd0f439(0x2cb)](420.12,171.91,421.23,175.7,422.1,179.55),_0x39c38e['lineTo'](427.1,202.6),_0x39c38e[_0xd0f439(0x2cf)](428.36,208.36),_0x39c38e['lineTo'](428.98,211.24),_0x39c38e['bezierCurveTo'](429.173333,212.22,429.333333,213.2,429.46,214.18),_0x39c38e['bezierCurveTo'](0x1ae,218.11,430.15,222.05,430.4,225.96),_0x39c38e[_0xd0f439(0x2cb)](0x1af,233.79,431.51,241.64,431.62,249.52),_0x39c38e[_0xd0f439(0x1ef)]()),_0x39c38e['stroke'](),_0x39c38e[_0xd0f439(0xfd)]=_0x324311[0x1],(_0x39c38e[_0xd0f439(0x503)](),_0x39c38e['moveTo'](285.75,360.45),_0x39c38e[_0xd0f439(0x2cf)](317.05,277.5),_0x39c38e['lineTo'](329.05,225.84),_0x39c38e[_0xd0f439(0x2cf)](340.79,165.58),_0x39c38e[_0xd0f439(0x2cf)](0x15b,124.66),_0x39c38e[_0xd0f439(0x2cf)](349.15,110.28),_0x39c38e['lineTo'](352.38,88.17),_0x39c38e[_0xd0f439(0x2cf)](354.04,74.9),_0x39c38e[_0xd0f439(0x2cb)](354.04,74.9,340.19,93.66,0x142,121.85),_0x39c38e[_0xd0f439(0x2cf)](0x142,121.85),_0x39c38e['lineTo'](318.94,116.08),_0x39c38e['lineTo'](315.07,108.52),_0x39c38e[_0xd0f439(0x2cf)](313.88,105.61),_0x39c38e[_0xd0f439(0x2cb)](313.88,105.61,320.3,123.77,309.71,141.31),_0x39c38e[_0xd0f439(0x2cf)](309.71,141.31),_0x39c38e['bezierCurveTo'](306.916667,145.83,304.09,150.496667,301.23,155.31),_0x39c38e['lineTo'](301.23,155.31),_0x39c38e[_0xd0f439(0x2cf)](297.4,0x95),_0x39c38e[_0xd0f439(0x2cf)](293.4,142.73),_0x39c38e[_0xd0f439(0x2cf)](288.67,134.87),_0x39c38e[_0xd0f439(0x2cb)](295.901876,148.194393,295.803749,164.294746,288.41,177.53),_0x39c38e[_0xd0f439(0x2cf)](288.41,177.53),_0x39c38e[_0xd0f439(0x2cb)](286.65,180.676667,284.896667,183.86,283.15,187.08),_0x39c38e['lineTo'](283.15,187.08),_0x39c38e[_0xd0f439(0x2cf)](279.22,182.53),_0x39c38e[_0xd0f439(0x2cf)](272.79,175.59),_0x39c38e[_0xd0f439(0x2cb)](275.19,178.45,281.64,188.49,273.09,206.31),_0x39c38e[_0xd0f439(0x2cf)](273.09,206.31),_0x39c38e['bezierCurveTo'](270.72,211.02,268.4,215.77,266.15,220.52),_0x39c38e[_0xd0f439(0x2cf)](266.15,220.52),_0x39c38e[_0xd0f439(0x2cf)](263.84,218.34),_0x39c38e[_0xd0f439(0x2cf)](260.92,215.6),_0x39c38e[_0xd0f439(0x2cb)](260.92,215.6,265.27,221.08,259.07,236.13),_0x39c38e[_0xd0f439(0x2cf)](259.07,236.13),_0x39c38e[_0xd0f439(0x2cb)](256.603333,241.836667,254.27,247.503333,252.07,253.13),_0x39c38e[_0xd0f439(0x2cf)](252.07,253.13),_0x39c38e['lineTo'](247.51,249.29),_0x39c38e[_0xd0f439(0x2cf)](244.92,0xf7),_0x39c38e[_0xd0f439(0x2cf)](243.76,246.13),_0x39c38e[_0xd0f439(0x2cb)](246.52,248.92,250.54,256.13,244.9,272.77),_0x39c38e['lineTo'](244.9,272.77),_0x39c38e[_0xd0f439(0x2cb)](243.806667,275.85,242.716667,278.986667,241.63,282.18),_0x39c38e[_0xd0f439(0x2cf)](241.63,282.18),_0x39c38e[_0xd0f439(0x2cf)](237.21,0x114),_0x39c38e[_0xd0f439(0x2cf)](233.81,271.77),_0x39c38e['lineTo'](230.81,267.86),_0x39c38e[_0xd0f439(0x2cb)](233.81,272.45,239.7,285.52,232.29,310.91),_0x39c38e['lineTo'](232.29,310.91),_0x39c38e[_0xd0f439(0x2cb)](231.623333,313.11,230.956667,315.326667,230.29,317.56),_0x39c38e[_0xd0f439(0x2cf)](230.29,317.56),_0x39c38e[_0xd0f439(0x2cf)](226.67,310.46),_0x39c38e[_0xd0f439(0x2cf)](223.88,304.91),_0x39c38e[_0xd0f439(0x2cf)](221.49,299.78),_0x39c38e['bezierCurveTo'](224.38,307.42,228.04,322.78,222.56,344.43),_0x39c38e[_0xd0f439(0x2cf)](222.56,344.43),_0x39c38e[_0xd0f439(0x2cb)](222.08,346.16,221.62,347.89,221.15,349.62),_0x39c38e['lineTo'](221.15,349.62),_0x39c38e[_0xd0f439(0x2cf)](219.97,346.31),_0x39c38e[_0xd0f439(0x2cf)](215.78,0x150),_0x39c38e[_0xd0f439(0x2cf)](215.38,334.89),_0x39c38e[_0xd0f439(0x2cb)](217.23,341.26,219.38,353.39,216.06,369.47),_0x39c38e['bezierCurveTo'](215.62,371.28,215.19,373.08,214.76,374.89),_0x39c38e[_0xd0f439(0x2cf)](214.7,375.14),_0x39c38e[_0xd0f439(0x2cf)](214.7,375.14),_0x39c38e[_0xd0f439(0x2cb)](213.32,381.06,212.01,386.96,210.77,392.84),_0x39c38e[_0xd0f439(0x2cf)](210.77,392.84),_0x39c38e[_0xd0f439(0x2cf)](209.36,389.71),_0x39c38e[_0xd0f439(0x2cf)](0xd0,386.2),_0x39c38e['lineTo'](207.12,383.09),_0x39c38e[_0xd0f439(0x2cf)](206.37,378.74),_0x39c38e['bezierCurveTo'](208.034744,391.047293,208.034744,403.522707,206.37,415.83),_0x39c38e[_0xd0f439(0x2cb)](205.89,418.61,205.43,421.37,205.01,424.12),_0x39c38e['bezierCurveTo'](205.005302,424.16989,205.005302,424.22011,205.01,424.27),_0x39c38e['lineTo'](205.01,424.27),_0x39c38e['bezierCurveTo'](204.343333,428.47,203.746667,432.623333,203.22,436.73),_0x39c38e[_0xd0f439(0x2cb)](204.14,440.03,204.96,443.36,205.81,446.68),_0x39c38e[_0xd0f439(0x2cb)](206.830201,450.41751,207.483295,454.245646,207.76,458.11),_0x39c38e[_0xd0f439(0x2cb)](207.856016,461.9641,207.46288,465.814819,206.59,469.57),_0x39c38e[_0xd0f439(0x2cb)](205.718639,473.435598,205.051051,477.344323,204.59,481.28),_0x39c38e[_0xd0f439(0x2cb)](204.095962,485.26606,204.116127,489.299079,204.65,493.28),_0x39c38e['bezierCurveTo'](205.365407,497.236707,206.613417,501.07829,208.36,504.7),_0x39c38e[_0xd0f439(0x2cb)](209.18,506.51,210.06,508.28,210.95,510.04),_0x39c38e[_0xd0f439(0x2cb)](211.857639,511.74075,212.678687,513.486313,213.41,515.27),_0x39c38e['lineTo'](213.41,515.32),_0x39c38e['lineTo'](213.48,515.49),_0x39c38e[_0xd0f439(0x2cf)](213.58,515.61),_0x39c38e[_0xd0f439(0x2cf)](214.99,517.23),_0x39c38e['bezierCurveTo'](215.507516,517.764102,216.055072,518.268253,216.63,518.74),_0x39c38e['bezierCurveTo'](217.786088,519.662985,219.05661,520.432693,220.41,521.03),_0x39c38e[_0xd0f439(0x2cf)](220.54,521.08),_0x39c38e['bezierCurveTo'](234.62,498.82,250.27,460.36,250.27,460.36)),_0x39c38e[_0xd0f439(0x1ef)](),_0x39c38e[_0xd0f439(0xfd)]=_0x324311[0x2],(_0x39c38e['beginPath'](),_0x39c38e[_0xd0f439(0x23f)](430.49,225.94),_0x39c38e[_0xd0f439(0x2cb)](430.24,222.03,430.09,218.09,429.55,214.16),_0x39c38e[_0xd0f439(0x2cb)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x39c38e[_0xd0f439(0x2cf)](428.45,208.34),_0x39c38e[_0xd0f439(0x2cf)](427.19,202.58),_0x39c38e[_0xd0f439(0x2cf)](422.19,179.53),_0x39c38e['bezierCurveTo'](421.32,175.68,420.19,171.89,419.07,168.13),_0x39c38e[_0xd0f439(0x2cf)](417.32,162.5),_0x39c38e['lineTo'](415.43,156.91),_0x39c38e[_0xd0f439(0x2cb)](412.91,149.45,410.28,142.05,407.67,134.64),_0x39c38e[_0xd0f439(0x2cf)](403.76,123.52),_0x39c38e[_0xd0f439(0x2cb)](402.5,119.81,401.42,116.04,400.38,112.26),_0x39c38e[_0xd0f439(0x2cb)](399.34,108.48,398.43,104.65,397.31,100.87),_0x39c38e[_0xd0f439(0x2cb)](396.220474,97.069619,394.856901,93.353214,393.23,89.75),_0x39c38e[_0xd0f439(0x2cb)](391.504679,86.197047,389.550572,82.759822,387.38,79.46),_0x39c38e[_0xd0f439(0x2cb)](385.28,76.13,383.11,72.85,380.92,69.59),_0x39c38e[_0xd0f439(0x2cb)](0x17c,68.21,379.08,66.84,378.14,65.47),_0x39c38e[_0xd0f439(0x2cb)](387.8,80.8,395.04,109.72,396.47,149.27),_0x39c38e['lineTo'](376.1,161.86),_0x39c38e[_0xd0f439(0x2cb)](379.85,159.59,396.59,0x96,396.69,160.27),_0x39c38e['bezierCurveTo'](396.75,167.25,396.633333,174.516667,396.34,182.07),_0x39c38e['lineTo'](370.5,194.47),_0x39c38e[_0xd0f439(0x2cb)](379.58,190.47,396.45,184.53,395.5,196.63),_0x39c38e[_0xd0f439(0x2cb)](395.39,198.23,395.27,199.84,395.15,201.46),_0x39c38e[_0xd0f439(0x2cf)](389.25,207.26),_0x39c38e[_0xd0f439(0x2cf)](383.25,212.74),_0x39c38e[_0xd0f439(0x2cb)](383.25,212.74,380.25,215.38,375.87,218.98),_0x39c38e[_0xd0f439(0x2cb)](390.22,209.39,393.47,215.75,392.87,224.41),_0x39c38e[_0xd0f439(0x2cb)](392.15,230.37,391.323333,236.463333,390.39,242.69),_0x39c38e[_0xd0f439(0x2cf)](374.29,253.84),_0x39c38e[_0xd0f439(0x2cb)](381.29,249.93,389.62,247.84,387.03,262.84),_0x39c38e[_0xd0f439(0x2cb)](386.036667,268.253333,384.96,273.74,383.8,279.3),_0x39c38e[_0xd0f439(0x2cf)](378.4,282.68),_0x39c38e[_0xd0f439(0x2cf)](368.4,288.48),_0x39c38e[_0xd0f439(0x2cf)](351.28,0x12a),_0x39c38e[_0xd0f439(0x2cb)](351.28,0x12a,382.89,280.72,379.45,298.88),_0x39c38e[_0xd0f439(0x2cb)](378.51,302.88,377.51,306.896667,376.45,310.93),_0x39c38e[_0xd0f439(0x2cf)](364.43,0x13d),_0x39c38e[_0xd0f439(0x2cf)](354.48,321.41),_0x39c38e['bezierCurveTo'](363.55,317.83,375.77,314.48,373.1,323.71),_0x39c38e['bezierCurveTo'](373.01,324.03,372.93,324.35,372.84,324.71),_0x39c38e['bezierCurveTo'](371.506667,329.583333,370.066667,334.36,368.52,339.04),_0x39c38e[_0xd0f439(0x2cf)](358.52,344.38),_0x39c38e['lineTo'](353.36,347.17),_0x39c38e[_0xd0f439(0x2cf)](341.49,352.49),_0x39c38e[_0xd0f439(0x2cb)](351.93,348.35,366.49,344.44,361.87,357.42),_0x39c38e[_0xd0f439(0x2cb)](359.27,364.006667,356.51,370.406667,353.59,376.62),_0x39c38e[_0xd0f439(0x2cb)](349.53,378.78,331.04,388.35,313.91,392.41),_0x39c38e[_0xd0f439(0x2cb)](326.26,390.74,350.91,379.56,344.78,394.04),_0x39c38e['bezierCurveTo'](339.71,403.42,334.34,412.3,328.78,420.68),_0x39c38e[_0xd0f439(0x2cb)](318.476689,423.18083,308.011191,424.958495,297.46,0x1aa),_0x39c38e['bezierCurveTo'](315.21,425.12,326.79,424.25,317.73,436.57),_0x39c38e[_0xd0f439(0x2cb)](311.08,445.57,304.32,453.89,297.65,461.51),_0x39c38e[_0xd0f439(0x2cb)](297.56,461.51,279.87,463.81,266.65,461.17),_0x39c38e[_0xd0f439(0x2cb)](280.85,464.3,296.44,463.02,284.31,476.04),_0x39c38e['bezierCurveTo'](280.976667,479.5,277.703333,482.77,274.49,485.85),_0x39c38e[_0xd0f439(0x2cb)](274.43,485.85,261.73,486.11,251.87,484.55),_0x39c38e[_0xd0f439(0x2cb)](262.77,486.37,273.54,486.5,263.2,496.32),_0x39c38e[_0xd0f439(0x2cb)](258.69,500.32,254.47,503.9,250.65,507.01),_0x39c38e[_0xd0f439(0x2cb)](250.55,507.01,238.65,508.01,233.16,506.79),_0x39c38e['bezierCurveTo'](239.07,508.66,243.85,511.37,237.87,516.9),_0x39c38e[_0xd0f439(0x2cb)](232.71,520.68,229.59,522.68,229.32,522.9),_0x39c38e[_0xd0f439(0x2cb)](230.187021,522.710849,231.072639,522.620274,231.96,522.63),_0x39c38e[_0xd0f439(0x2cf)](234.9,522.52),_0x39c38e[_0xd0f439(0x2cf)](240.76,522.29),_0x39c38e[_0xd0f439(0x2cb)](244.69662,522.180808,248.625082,521.870403,252.53,521.36),_0x39c38e[_0xd0f439(0x2cb)](256.406968,520.679223,260.23773,519.757436,0x108,518.6),_0x39c38e['bezierCurveTo'](267.75,517.47,271.49,516.39,275.23,515.19),_0x39c38e[_0xd0f439(0x2cb)](278.985531,514.016813,282.677226,512.648282,286.29,511.09),_0x39c38e[_0xd0f439(0x2cb)](289.9,509.53,293.43,507.82,296.92,506.09),_0x39c38e['lineTo'](302.15,503.45),_0x39c38e[_0xd0f439(0x2cb)](303.88,502.57,305.65,501.72,307.38,500.76),_0x39c38e[_0xd0f439(0x2cb)](310.840189,498.858031,314.158788,496.70913,317.31,494.33),_0x39c38e[_0xd0f439(0x2cb)](318.89,493.14,320.42,491.89,321.9,490.6),_0x39c38e[_0xd0f439(0x2cf)](326.28,486.7),_0x39c38e[_0xd0f439(0x2cf)](0x14f,478.88),_0x39c38e[_0xd0f439(0x2cf)](343.72,471.06),_0x39c38e[_0xd0f439(0x2cb)](346.63,468.44,349.56,465.87,352.4,463.18),_0x39c38e[_0xd0f439(0x2cb)](358.11,457.83,363.63,452.27,0x171,446.59),_0x39c38e['bezierCurveTo'](374.436839,440.947476,379.561151,435.011953,384.35,428.81),_0x39c38e[_0xd0f439(0x2cb)](386.71,425.67,388.93,422.42,390.97,419.07),_0x39c38e[_0xd0f439(0x2cb)](393.01,415.72,394.97,412.36,396.89,408.92),_0x39c38e['bezierCurveTo'](398.81,405.48,400.57,402.02,402.17,398.4),_0x39c38e[_0xd0f439(0x2cb)](403.77,394.78,405.03,391.08,406.27,387.4),_0x39c38e['bezierCurveTo'](408.75,380.01,411.27,372.62,413.62,365.15),_0x39c38e[_0xd0f439(0x2cb)](414.77,361.41,415.89,357.67,416.86,353.86),_0x39c38e[_0xd0f439(0x2cb)](417.83,350.05,418.64,346.24,419.41,342.4),_0x39c38e['bezierCurveTo'](420.18,338.56,420.96,334.75,421.58,330.87),_0x39c38e[_0xd0f439(0x2cb)](422.2,326.99,422.68,323.13,423.28,319.29),_0x39c38e[_0xd0f439(0x2cb)](423.88,315.45,424.7,311.61,425.39,307.78),_0x39c38e[_0xd0f439(0x2cb)](426.08,303.95,426.9,300.12,427.39,296.23),_0x39c38e[_0xd0f439(0x2cb)](427.88,292.34,428.44,288.51,429.12,284.66),_0x39c38e[_0xd0f439(0x2cb)](429.8,280.81,430.25,276.91,430.64,273.02),_0x39c38e[_0xd0f439(0x2cb)](431.407983,265.227929,431.741833,257.399163,431.64,249.57),_0x39c38e[_0xd0f439(0x2cb)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x39c38e[_0xd0f439(0x1ef)](),_0x39c38e[_0xd0f439(0xfd)]=_0x324311[0x3],(_0x39c38e[_0xd0f439(0x503)](),_0x39c38e[_0xd0f439(0x23f)](340.27,176.61),_0x39c38e[_0xd0f439(0x2cf)](348.27,122.21),_0x39c38e[_0xd0f439(0x2cf)](0x160,0x56),_0x39c38e[_0xd0f439(0x2cb)](0x160,0x56,349.18,94.32,344.36,108.7),_0x39c38e['lineTo'](341.04,104.91),_0x39c38e[_0xd0f439(0x2cb)](341.04,104.91,344.15,109.29,341.39,117.57),_0x39c38e[_0xd0f439(0x2cf)](341.39,117.57),_0x39c38e['bezierCurveTo'](339.01,124.71,336.28,132.9,333.28,141.95),_0x39c38e[_0xd0f439(0x2cf)](333.28,141.95),_0x39c38e['lineTo'](328.13,133.05),_0x39c38e[_0xd0f439(0x2cf)](325.91,129.17),_0x39c38e[_0xd0f439(0x2cb)](325.91,129.17,332.53,142.95,325.57,165.28),_0x39c38e[_0xd0f439(0x2cf)](325.57,165.28),_0x39c38e[_0xd0f439(0x2cb)](323.503333,171.573333,321.35,178.12,319.11,184.92),_0x39c38e[_0xd0f439(0x2cf)](319.11,184.92),_0x39c38e[_0xd0f439(0x2cf)](0x13b,177.71),_0x39c38e[_0xd0f439(0x2cf)](308.25,166.82),_0x39c38e[_0xd0f439(0x2cb)](314.733452,179.880969,315.811249,194.970124,311.25,208.82),_0x39c38e[_0xd0f439(0x2cf)](311.25,208.82),_0x39c38e[_0xd0f439(0x2cb)](310.103333,212.326667,308.946667,215.883333,307.78,219.49),_0x39c38e[_0xd0f439(0x2cf)](307.78,219.49),_0x39c38e[_0xd0f439(0x2cf)](300.16,0xd0),_0x39c38e['lineTo'](295.37,201.93),_0x39c38e[_0xd0f439(0x2cb)](295.37,201.93,308.11,218.47,299.78,244.52),_0x39c38e['bezierCurveTo'](298.653333,248.04,297.516667,251.586667,296.37,255.16),_0x39c38e[_0xd0f439(0x2cf)](296.37,255.16),_0x39c38e[_0xd0f439(0x2cf)](290.64,0xf7),_0x39c38e['lineTo'](280.58,236.2),_0x39c38e[_0xd0f439(0x2cb)](281.58,237.26,296.58,254.13,287.96,281.57),_0x39c38e['lineTo'](287.96,281.57),_0x39c38e[_0xd0f439(0x2cb)](287.333333,283.53,286.71,285.496667,286.09,287.47),_0x39c38e[_0xd0f439(0x2cf)](286.09,287.47),_0x39c38e[_0xd0f439(0x2cf)](0x118,279.81),_0x39c38e['lineTo'](270.72,270.71),_0x39c38e['bezierCurveTo'](270.72,270.71,286.28,286.4,277.78,313.81),_0x39c38e[_0xd0f439(0x2cf)](277.78,313.81),_0x39c38e['bezierCurveTo'](276.106667,319.143333,274.44,324.476667,272.78,329.81),_0x39c38e[_0xd0f439(0x2cf)](272.78,329.81),_0x39c38e['lineTo'](265.2,315.89),_0x39c38e[_0xd0f439(0x2cf)](259.75,307.61),_0x39c38e[_0xd0f439(0x2cb)](267.679619,321.381348,269.795642,337.744541,265.63,353.08),_0x39c38e['lineTo'](264.63,356.41),_0x39c38e[_0xd0f439(0x2cf)](264.63,356.41),_0x39c38e[_0xd0f439(0x2cf)](264.63,356.41),_0x39c38e[_0xd0f439(0x2cb)](263.683333,359.516667,262.74,362.62,261.8,365.72),_0x39c38e['lineTo'](261.8,365.72),_0x39c38e[_0xd0f439(0x2cf)](255.48,357.92),_0x39c38e[_0xd0f439(0x2cf)](248.69,349.01),_0x39c38e[_0xd0f439(0x2cb)](248.69,349.01,261.56,365.87,253.9,392.1),_0x39c38e[_0xd0f439(0x2cf)](253.9,392.1),_0x39c38e[_0xd0f439(0x2cb)](252.566667,396.706667,251.233333,401.26,249.9,405.76),_0x39c38e['lineTo'](249.9,405.76),_0x39c38e[_0xd0f439(0x2cf)](243.52,395.82),_0x39c38e['lineTo'](238.92,387.92),_0x39c38e['bezierCurveTo'](238.92,387.92,249.49,405.92,241.92,433.65),_0x39c38e[_0xd0f439(0x2cf)](241.92,433.65),_0x39c38e['lineTo'](239.82,441.18),_0x39c38e['lineTo'](239.82,441.18),_0x39c38e[_0xd0f439(0x2cf)](0xe9,429.68),_0x39c38e['bezierCurveTo'](0xe9,429.68,239.72,442.12,234.11,462.31),_0x39c38e[_0xd0f439(0x2cf)](234.11,462.31),_0x39c38e[_0xd0f439(0x2cb)](233.17,465.85,232.27,469.303333,231.41,472.67),_0x39c38e[_0xd0f439(0x2cf)](227.3,467.28),_0x39c38e[_0xd0f439(0x2cb)](227.3,467.28,230.97,473.84,228.38,484.69),_0x39c38e['lineTo'](228.38,484.69),_0x39c38e[_0xd0f439(0x2cb)](225.19,497.69,222.71,508.99,221.15,518.02),_0x39c38e[_0xd0f439(0x2cb)](0xf0,483.95,262.65,419.16,262.65,419.16),_0x39c38e[_0xd0f439(0x2cf)](306.26,315.71),_0x39c38e[_0xd0f439(0x2cf)](323.48,243.71)),_0x39c38e[_0xd0f439(0x1ef)](),_0x39c38e['fillStyle']=_0x324311[0x4],(_0x39c38e[_0xd0f439(0x503)](),_0x39c38e[_0xd0f439(0x23f)](430.49,225.94),_0x39c38e[_0xd0f439(0x2cb)](430.24,222.03,430.09,218.09,429.55,214.16),_0x39c38e[_0xd0f439(0x2cb)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x39c38e['lineTo'](428.45,208.34),_0x39c38e[_0xd0f439(0x2cf)](427.19,202.58),_0x39c38e['lineTo'](422.19,179.53),_0x39c38e['bezierCurveTo'](421.32,175.68,420.19,171.89,419.07,168.13),_0x39c38e['lineTo'](417.32,162.5),_0x39c38e[_0xd0f439(0x2cf)](415.43,156.91),_0x39c38e['bezierCurveTo'](414.15,153.123333,412.843333,149.343333,411.51,145.57),_0x39c38e[_0xd0f439(0x2cb)](412.03,148.49,448.2,358.03,321.91,490.57),_0x39c38e['lineTo'](326.29,486.67),_0x39c38e[_0xd0f439(0x2cf)](335.01,478.85),_0x39c38e['lineTo'](343.73,471.03),_0x39c38e[_0xd0f439(0x2cb)](346.64,468.41,349.57,465.84,352.41,463.15),_0x39c38e[_0xd0f439(0x2cb)](358.12,457.8,363.64,452.24,369.01,446.56),_0x39c38e['bezierCurveTo'](374.446839,440.917476,379.571151,434.981953,384.36,428.78),_0x39c38e[_0xd0f439(0x2cb)](386.72,425.64,388.94,422.39,390.98,419.04),_0x39c38e['bezierCurveTo'](393.02,415.69,394.98,412.33,396.9,408.89),_0x39c38e[_0xd0f439(0x2cb)](398.82,405.45,400.58,401.99,402.18,398.37),_0x39c38e[_0xd0f439(0x2cb)](403.78,394.75,405.04,391.05,406.28,387.37),_0x39c38e['bezierCurveTo'](408.76,379.98,411.28,372.59,413.63,365.12),_0x39c38e[_0xd0f439(0x2cb)](414.78,361.38,415.9,357.64,416.87,353.83),_0x39c38e['bezierCurveTo'](417.84,350.02,418.65,346.21,419.42,342.37),_0x39c38e[_0xd0f439(0x2cb)](420.19,338.53,420.97,334.72,421.59,330.84),_0x39c38e[_0xd0f439(0x2cb)](422.21,326.96,422.69,323.1,423.29,319.26),_0x39c38e[_0xd0f439(0x2cb)](423.89,315.42,424.71,311.58,425.4,307.75),_0x39c38e[_0xd0f439(0x2cb)](426.09,303.92,426.91,300.09,427.4,296.2),_0x39c38e['bezierCurveTo'](427.89,292.31,428.45,288.48,429.13,284.63),_0x39c38e['bezierCurveTo'](429.81,280.78,430.26,276.88,430.65,272.99),_0x39c38e[_0xd0f439(0x2cb)](431.417983,265.197929,431.751833,257.369163,431.65,249.54),_0x39c38e[_0xd0f439(0x2cb)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x39c38e[_0xd0f439(0x1ef)](),_0x39c38e[_0xd0f439(0xfd)]=_0x324311[0x5],_0x39c38e['strokeStyle']=_0x324311[0x5],_0x39c38e['lineWidth']=0.5,(_0x39c38e[_0xd0f439(0x503)](),_0x39c38e[_0xd0f439(0x23f)](299.66,335.53),_0x39c38e[_0xd0f439(0x2cb)](309.681137,334.686744,319.615142,333.014353,329.36,330.53),_0x39c38e[_0xd0f439(0x2cb)](339.199482,327.973836,348.817214,324.629701,358.12,320.53),_0x39c38e[_0xd0f439(0x2cb)](362.786667,318.47,367.35,316.243333,371.81,313.85),_0x39c38e[_0xd0f439(0x2cb)](376.27,311.456667,380.643333,308.883333,384.93,306.13),_0x39c38e[_0xd0f439(0x2cb)](393.507021,300.696702,401.564499,294.483707,0x199,287.57),_0x39c38e[_0xd0f439(0x2cb)](401.449487,294.326806,393.291566,300.372438,384.63,305.63),_0x39c38e[_0xd0f439(0x2cb)](380.33,308.296667,375.93,310.79,371.43,313.11),_0x39c38e[_0xd0f439(0x2cb)](366.93,315.43,362.353333,317.57,357.7,319.53),_0x39c38e[_0xd0f439(0x2cb)](348.401624,323.448152,338.804247,326.614952,0x149,0x149),_0x39c38e[_0xd0f439(0x2cb)](319.603472,331.243088,310.043265,332.734467,300.41,333.46),_0x39c38e[_0xd0f439(0x2cb)](301.51,330.46,302.62,327.46,303.7,324.4),_0x39c38e[_0xd0f439(0x2cb)](305.086667,320.546667,306.46,316.68,307.82,312.8),_0x39c38e[_0xd0f439(0x2cf)](314.12,311.35),_0x39c38e[_0xd0f439(0x2cf)](317.4,310.58),_0x39c38e[_0xd0f439(0x2cf)](320.63,309.58),_0x39c38e[_0xd0f439(0x2cb)](322.79,308.94,324.95,308.32,327.09,307.66),_0x39c38e[_0xd0f439(0x2cf)](333.43,305.41),_0x39c38e[_0xd0f439(0x2cb)](341.840722,302.350071,350.047426,298.756089,0x166,294.65),_0x39c38e['bezierCurveTo'](365.959278,290.559569,373.699792,286.056786,381.19,281.16),_0x39c38e[_0xd0f439(0x2cb)](388.682119,276.281578,395.887358,270.976145,402.77,265.27),_0x39c38e[_0xd0f439(0x2cb)](395.789265,270.841289,388.493886,276.006485,380.92,280.74),_0x39c38e[_0xd0f439(0x2cb)](373.356854,285.469142,365.556654,289.808149,357.55,293.74),_0x39c38e[_0xd0f439(0x2cb)](349.567396,297.696491,341.340718,301.140139,332.92,304.05),_0x39c38e['lineTo'](326.59,306.16),_0x39c38e['bezierCurveTo'](324.45,306.78,322.3,307.34,320.16,307.94),_0x39c38e[_0xd0f439(0x2cf)](316.95,308.82),_0x39c38e[_0xd0f439(0x2cf)](313.69,309.52),_0x39c38e[_0xd0f439(0x2cf)](308.57,310.6),_0x39c38e['lineTo'](309.36,308.35),_0x39c38e[_0xd0f439(0x2cf)](0x138,300.27),_0x39c38e[_0xd0f439(0x2cf)](313.32,296.22),_0x39c38e[_0xd0f439(0x2cb)](313.77,294.88,314.21,293.53,314.58,292.16),_0x39c38e[_0xd0f439(0x2cb)](315.35,289.54,316.09,286.91,316.83,284.28),_0x39c38e['bezierCurveTo'](325.865827,281.447791,334.625259,277.799422,0x157,273.38),_0x39c38e[_0xd0f439(0x2cf)](349.3,270.03),_0x39c38e[_0xd0f439(0x2cf)](355.47,266.47),_0x39c38e['bezierCurveTo'](357.55,265.31,359.54,264.01,361.57,262.77),_0x39c38e[_0xd0f439(0x2cb)](363.6,261.53,365.57,260.29,367.57,258.97),_0x39c38e[_0xd0f439(0x2cb)](375.57,253.84,383.32,248.36,390.96,242.73),_0x39c38e['bezierCurveTo'](398.6,237.1,406.08,231.26,413.35,225.16),_0x39c38e[_0xd0f439(0x2cb)](405.98,231.16,398.35,236.81,390.66,242.32),_0x39c38e[_0xd0f439(0x2cb)](382.97,247.83,375.09,253.15,0x16f,258.13),_0x39c38e[_0xd0f439(0x2cb)](0x16d,259.41,0x16b,260.6,360.93,261.81),_0x39c38e[_0xd0f439(0x2cb)](358.86,263.02,356.93,264.26,354.79,265.38),_0x39c38e[_0xd0f439(0x2cf)](348.58,268.83),_0x39c38e['lineTo'](342.29,0x110),_0x39c38e[_0xd0f439(0x2cb)](334.311743,276.031109,326.005153,279.376494,317.46,0x11a),_0x39c38e[_0xd0f439(0x2cf)](319.2,275.76),_0x39c38e['bezierCurveTo'](321.9,266.06,324.34,256.29,326.62,246.49),_0x39c38e['bezierCurveTo'](329.874304,245.741841,333.077493,244.786562,336.21,243.63),_0x39c38e[_0xd0f439(0x2cb)](339.430957,242.413731,342.588325,241.035303,345.67,239.5),_0x39c38e[_0xd0f439(0x2cb)](351.791575,236.396752,357.680318,232.854149,363.29,228.9),_0x39c38e[_0xd0f439(0x2cb)](368.9,224.98,374.29,220.75,379.46,216.3),_0x39c38e[_0xd0f439(0x2cb)](384.63,211.85,389.65,207.18,394.36,202.24),_0x39c38e[_0xd0f439(0x2cb)](389.53,207.06,384.41,211.59,379.14,215.92),_0x39c38e[_0xd0f439(0x2cb)](373.87416,220.243153,368.393882,224.298292,362.72,228.07),_0x39c38e[_0xd0f439(0x2cb)](357.066914,231.866215,351.144545,235.245174,0x159,238.18),_0x39c38e[_0xd0f439(0x2cb)](341.934973,239.618284,338.797427,240.896667,335.6,242.01),_0x39c38e[_0xd0f439(0x2cb)](332.81442,242.95951,329.976369,243.747486,327.1,244.37),_0x39c38e[_0xd0f439(0x2cb)](329.486667,233.97,331.696667,223.536667,333.73,213.07),_0x39c38e['lineTo'](393.36,182.9),_0x39c38e[_0xd0f439(0x2cf)](334.11,211.14),_0x39c38e[_0xd0f439(0x2cf)](334.44,209.48),_0x39c38e[_0xd0f439(0x2cb)](336.66,197.92,338.73,186.326667,340.65,174.7),_0x39c38e[_0xd0f439(0x2cb)](343.104938,174.985029,345.590493,174.84976,0x15c,174.3),_0x39c38e[_0xd0f439(0x2cb)](350.54725,173.755679,353.050747,173.023682,355.49,172.11),_0x39c38e[_0xd0f439(0x2cb)](360.323367,170.268226,365.033112,168.117108,369.59,165.67),_0x39c38e[_0xd0f439(0x2cb)](374.16,163.25,378.59,160.67,0x17f,157.94),_0x39c38e[_0xd0f439(0x2cb)](387.41,155.21,391.69,152.4,395.9,149.44),_0x39c38e['bezierCurveTo'](391.62,152.31,387.25,155.03,382.82,157.65),_0x39c38e[_0xd0f439(0x2cb)](378.39,160.27,373.87,162.75,369.28,165.05),_0x39c38e['bezierCurveTo'](364.706245,167.379689,359.98636,169.410609,355.15,171.13),_0x39c38e[_0xd0f439(0x2cb)](352.747367,171.981834,350.28365,172.650414,347.78,173.13),_0x39c38e['bezierCurveTo'](345.506501,173.59759,343.170462,173.678726,340.87,173.37),_0x39c38e[_0xd0f439(0x2cb)](342.583333,163.07,344.193333,152.736667,345.7,142.37),_0x39c38e[_0xd0f439(0x2cb)](345.78,141.83,345.85,141.29,345.93,140.74),_0x39c38e['bezierCurveTo'](347.937647,140.185143,349.849427,139.32872,351.6,138.2),_0x39c38e[_0xd0f439(0x2cb)](353.402611,137.059465,355.129551,135.803509,356.77,134.44),_0x39c38e[_0xd0f439(0x2cb)](360.020292,131.719246,363.108885,128.810959,366.02,125.73),_0x39c38e[_0xd0f439(0x2cb)](368.95,122.67,371.76,119.51,374.48,116.28),_0x39c38e[_0xd0f439(0x2cb)](377.2,113.05,379.86,109.75,382.4,106.38),_0x39c38e[_0xd0f439(0x2cb)](379.79,109.7,377.07,112.93,374.29,116.11),_0x39c38e['bezierCurveTo'](371.51,119.29,368.63,122.38,365.65,125.37),_0x39c38e[_0xd0f439(0x2cb)](362.693277,128.372353,359.564676,131.200448,356.28,133.84),_0x39c38e[_0xd0f439(0x2cb)](354.645971,135.148027,352.925382,136.344087,351.13,137.42),_0x39c38e[_0xd0f439(0x2cb)](349.573662,138.386994,347.891052,139.134074,346.13,139.64),_0x39c38e['bezierCurveTo'](347.616667,129.34,349.023333,119.006667,350.35,108.64),_0x39c38e['bezierCurveTo'](350.57,106.84,350.78,105.04,0x15f,103.24),_0x39c38e[_0xd0f439(0x2cb)](353.772959,102.887322,356.382857,101.733546,358.51,99.92),_0x39c38e[_0xd0f439(0x2cb)](360.689247,98.129763,362.646488,96.085235,364.34,93.83),_0x39c38e[_0xd0f439(0x2cb)](366.045862,91.599723,367.605781,89.261516,369.01,86.83),_0x39c38e['bezierCurveTo'](370.424961,84.40499,371.713354,81.908312,372.87,79.35),_0x39c38e[_0xd0f439(0x2cb)](371.664016,81.886654,370.328935,84.359892,368.87,86.76),_0x39c38e[_0xd0f439(0x2cb)](367.43589,89.167971,365.84583,91.47957,364.11,93.68),_0x39c38e[_0xd0f439(0x2cb)](362.402661,95.90958,360.431652,97.92424,358.24,99.68),_0x39c38e[_0xd0f439(0x2cb)](356.181381,101.379613,353.679738,102.455215,351.03,102.78),_0x39c38e[_0xd0f439(0x2cb)](351.48,99.13,351.94,95.48,352.36,91.78),_0x39c38e[_0xd0f439(0x2cb)](352.91,87.02,353.45,82.26,353.84,77.48),_0x39c38e['bezierCurveTo'](353.9683,76.612156,354.041779,75.737088,354.06,74.86),_0x39c38e[_0xd0f439(0x2cf)](354.06,74.86),_0x39c38e[_0xd0f439(0x2cb)](353.767911,76.227538,353.547609,77.609429,353.4,0x4f),_0x39c38e[_0xd0f439(0x2cf)](352.83,83.08),_0x39c38e['lineTo'](351.66,91.23),_0x39c38e[_0xd0f439(0x2cb)](350.86,96.67,350.036667,102.1,349.19,107.52),_0x39c38e['bezierCurveTo'](348.96,0x6d,348.71,110.52,348.47,111.95),_0x39c38e[_0xd0f439(0x2cb)](346.380877,110.605461,344.506467,108.953553,342.91,107.05),_0x39c38e['bezierCurveTo'](341.207134,104.948594,339.794484,102.627812,338.71,100.15),_0x39c38e[_0xd0f439(0x2cb)](337.631198,97.658606,336.803763,95.065754,336.24,92.41),_0x39c38e[_0xd0f439(0x2cb)](335.652362,89.750891,335.317538,87.042163,335.24,84.32),_0x39c38e[_0xd0f439(0x2cb)](335.239879,87.048686,335.501071,89.771113,336.02,92.45),_0x39c38e[_0xd0f439(0x2cb)](336.526469,95.139226,337.296862,97.771962,338.32,100.31),_0x39c38e[_0xd0f439(0x2cb)](339.364301,102.853909,340.746748,105.245442,342.43,107.42),_0x39c38e[_0xd0f439(0x2cb)](344.096692,109.506877,346.080879,111.318967,348.31,112.79),_0x39c38e['bezierCurveTo'](346.85,121.876667,345.33,130.953333,343.75,140.02),_0x39c38e['bezierCurveTo'](342.99,144.34,342.21,148.64,341.43,152.95),_0x39c38e[_0xd0f439(0x2cb)](338.9,149.65,336.59,146.14,334.35,142.6),_0x39c38e[_0xd0f439(0x2cb)](331.84,138.6,329.43,134.6,327.08,130.48),_0x39c38e['bezierCurveTo'](322.413333,122.313333,317.893333,114.033333,313.52,105.64),_0x39c38e[_0xd0f439(0x2cb)](317.68,114.12,321.98,122.51,326.52,130.8),_0x39c38e[_0xd0f439(0x2cb)](328.773333,134.946667,331.106667,139.053333,333.52,143.12),_0x39c38e[_0xd0f439(0x2cb)](335.853003,147.115524,338.396586,150.984307,341.14,154.71),_0x39c38e[_0xd0f439(0x2cb)](338.08,171.43,334.79,188.09,331.14,204.71),_0x39c38e[_0xd0f439(0x2cf)](330.93,205.64),_0x39c38e[_0xd0f439(0x2cb)](330.54,204.77,330.14,203.92,329.7,203.09),_0x39c38e['lineTo'](328.46,200.64),_0x39c38e['lineTo'](327.15,198.24),_0x39c38e[_0xd0f439(0x2cb)](326.29,196.63,325.4,195.04,324.5,193.46),_0x39c38e[_0xd0f439(0x2cb)](323.6,191.88,322.71,190.29,321.78,188.72),_0x39c38e[_0xd0f439(0x2cb)](318.13,182.42,314.34,176.21,310.55,0xaa),_0x39c38e[_0xd0f439(0x2cb)](302.93,157.6,295.18,145.29,287.3,133.07),_0x39c38e[_0xd0f439(0x2cb)](294.96,145.43,302.5,157.866667,309.92,170.38),_0x39c38e[_0xd0f439(0x2cb)](313.61,176.65,317.28,182.92,320.82,189.27),_0x39c38e[_0xd0f439(0x2cb)](321.72,190.85,322.59,192.44,323.46,194.04),_0x39c38e[_0xd0f439(0x2cb)](324.33,195.64,325.19,197.23,326.02,198.84),_0x39c38e[_0xd0f439(0x2cf)](327.28,201.25),_0x39c38e[_0xd0f439(0x2cf)](328.46,203.69),_0x39c38e[_0xd0f439(0x2cb)](329.2,205.12,329.79,206.59,330.4,208.05),_0x39c38e['bezierCurveTo'](328.27,217.66,326.14,227.26,323.83,236.82),_0x39c38e['bezierCurveTo'](323.31,0xef,322.77,241.17,322.23,243.35),_0x39c38e[_0xd0f439(0x2cb)](319.523513,237.538154,316.457575,231.900567,313.05,226.47),_0x39c38e[_0xd0f439(0x2cb)](309.17,220.21,304.89,214.22,300.51,208.33),_0x39c38e[_0xd0f439(0x2cb)](296.13,202.44,291.51,196.75,286.74,191.14),_0x39c38e[_0xd0f439(0x2cb)](281.97,185.53,277.13,180.05,272.07,174.74),_0x39c38e[_0xd0f439(0x2cb)](277.01,180.16,281.74,185.74,286.36,191.46),_0x39c38e[_0xd0f439(0x2cb)](290.98,197.18,295.45,202.95,299.7,208.92),_0x39c38e[_0xd0f439(0x2cb)](303.95,214.89,308.06,220.92,311.76,227.24),_0x39c38e['bezierCurveTo'](315.459615,233.407716,318.695213,239.842143,321.44,246.49),_0x39c38e[_0xd0f439(0x2cb)](319.56,253.903333,317.56,261.293333,315.44,268.66),_0x39c38e['lineTo'](311.15,283.19),_0x39c38e[_0xd0f439(0x2cb)](310.43586,280.708811,309.577739,278.271346,308.58,275.89),_0x39c38e[_0xd0f439(0x2cb)](307.125264,272.474241,305.455242,269.154237,303.58,265.95),_0x39c38e[_0xd0f439(0x2cb)](299.85838,259.571158,295.67733,253.471705,291.07,247.7),_0x39c38e['bezierCurveTo'](286.51,241.91,281.65,236.37,276.59,231.03),_0x39c38e[_0xd0f439(0x2cb)](271.53,225.69,266.29,220.53,260.8,215.63),_0x39c38e[_0xd0f439(0x2cb)](266.18,220.63,271.29,225.93,276.22,231.37),_0x39c38e['bezierCurveTo'](281.15,236.81,285.87,242.45,290.27,248.31),_0x39c38e[_0xd0f439(0x2cb)](294.711787,254.133096,298.722451,260.272753,302.27,266.68),_0x39c38e['bezierCurveTo'](304.033085,269.865329,305.586386,273.162337,306.92,276.55),_0x39c38e[_0xd0f439(0x2cb)](308.270743,279.897749,309.298741,283.366825,309.99,286.91),_0x39c38e[_0xd0f439(0x2cf)](308.34,292.3),_0x39c38e['lineTo'](305.78,0x12c),_0x39c38e[_0xd0f439(0x2cf)](303.08,307.79),_0x39c38e[_0xd0f439(0x2cf)](302.38,309.67),_0x39c38e[_0xd0f439(0x2cb)](298.932766,303.588345,295.056269,297.760233,290.78,292.23),_0x39c38e[_0xd0f439(0x2cb)](286.07,286.23,281.01,280.49,275.78,274.97),_0x39c38e['bezierCurveTo'](270.55,269.45,264.98,264.22,259.31,259.13),_0x39c38e['bezierCurveTo'](253.64,254.04,247.81,249.13,241.77,244.52),_0x39c38e[_0xd0f439(0x2cb)](247.71,249.27,253.41,254.32,258.97,259.52),_0x39c38e[_0xd0f439(0x2cb)](264.53,264.72,269.9,270.1,275.05,275.68),_0x39c38e[_0xd0f439(0x2cb)](280.2,281.26,285.05,287.09,289.61,293.16),_0x39c38e[_0xd0f439(0x2cb)](294.060285,299.171244,298.029271,305.524297,301.48,312.16),_0x39c38e['lineTo'](300.23,315.52),_0x39c38e[_0xd0f439(0x2cf)](294.37,330.91),_0x39c38e[_0xd0f439(0x2cb)](291.99,337.05,289.593333,343.18,287.18,349.3),_0x39c38e['bezierCurveTo'](283.87,347.64,281.89,344.1,279.84,340.74),_0x39c38e[_0xd0f439(0x2cb)](277.68,337.04,275.63,333.25,273.58,329.46),_0x39c38e['lineTo'](270.51,323.78),_0x39c38e[_0xd0f439(0x2cb)](269.42,321.9,268.41,319.98,267.26,318.16),_0x39c38e[_0xd0f439(0x2cf)](265.57,315.39),_0x39c38e[_0xd0f439(0x2cf)](263.81,312.67),_0x39c38e[_0xd0f439(0x2cb)](262.66,310.84,261.45,309.06,260.24,307.27),_0x39c38e['bezierCurveTo'](255.4,300.13,250.33,293.15,245.14,286.27),_0x39c38e['bezierCurveTo'](239.95,279.39,234.66,272.58,229.25,265.87),_0x39c38e['bezierCurveTo'](234.53,272.683333,239.693333,279.58,244.74,286.56),_0x39c38e[_0xd0f439(0x2cb)](249.79,293.56,254.74,300.56,259.41,307.82),_0x39c38e[_0xd0f439(0x2cb)](260.58,309.63,261.75,311.43,262.86,313.27),_0x39c38e[_0xd0f439(0x2cf)](264.55,316.01),_0x39c38e[_0xd0f439(0x2cf)](266.18,318.79),_0x39c38e['bezierCurveTo'](267.29,320.63,268.25,322.55,269.29,324.42),_0x39c38e[_0xd0f439(0x2cf)](272.29,330.16),_0x39c38e['bezierCurveTo'](274.29,333.99,276.29,337.82,278.36,341.61),_0x39c38e[_0xd0f439(0x2cb)](279.408258,343.540652,280.580722,345.40123,281.87,347.18),_0x39c38e[_0xd0f439(0x2cb)](282.552636,348.10872,283.345052,348.951501,284.23,349.69),_0x39c38e[_0xd0f439(0x2cb)](284.930562,350.256711,285.687936,350.749339,286.49,351.16),_0x39c38e['bezierCurveTo'](282.943333,360.18,279.36,369.18,275.74,378.16),_0x39c38e['bezierCurveTo'](272.678992,375.756461,269.779399,373.154177,267.06,370.37),_0x39c38e[_0xd0f439(0x2cb)](264.050646,367.3051,261.197054,364.091055,258.51,360.74),_0x39c38e[_0xd0f439(0x2cb)](253.113167,354.032122,248.104966,347.02064,243.51,339.74),_0x39c38e['bezierCurveTo'](238.87,332.47,234.51,324.99,230.45,317.4),_0x39c38e['bezierCurveTo'](226.39,309.81,222.45,302.09,218.9,294.22),_0x39c38e[_0xd0f439(0x2cb)](222.31,302.16,226.06,309.95,0xe6,317.63),_0x39c38e[_0xd0f439(0x2cb)](233.94,325.31,238.15,332.88,242.66,340.27),_0x39c38e[_0xd0f439(0x2cb)](247.134146,347.686959,252.028804,354.841974,257.32,361.7),_0x39c38e[_0xd0f439(0x2cb)](259.967844,365.143315,262.791598,368.447708,265.78,371.6),_0x39c38e[_0xd0f439(0x2cb)](268.633614,374.64481,271.697841,377.485151,274.95,380.1),_0x39c38e['bezierCurveTo'](270.03,392.36,265.07,404.6,260.07,416.82),_0x39c38e[_0xd0f439(0x2cb)](257.405305,414.216058,254.944723,411.411128,252.71,408.43),_0x39c38e[_0xd0f439(0x2cb)](250.19,405.11,247.84,401.65,245.61,398.11),_0x39c38e['bezierCurveTo'](241.18,391.02,237.18,383.63,233.44,376.11),_0x39c38e[_0xd0f439(0x2cb)](229.7,368.59,226.22,360.96,222.93,353.23),_0x39c38e[_0xd0f439(0x2cb)](219.64,345.5,216.5,337.71,213.62,329.82),_0x39c38e[_0xd0f439(0x2cb)](216.34,337.77,219.33,345.63,222.47,353.43),_0x39c38e[_0xd0f439(0x2cb)](225.61,361.23,228.95,368.94,232.54,376.55),_0x39c38e[_0xd0f439(0x2cb)](236.13,384.16,0xf0,391.64,244.33,398.89),_0x39c38e[_0xd0f439(0x2cb)](246.51,402.5,248.81,406.05,251.33,409.47),_0x39c38e[_0xd0f439(0x2cb)](253.727855,412.797666,256.40415,415.915549,259.33,418.79),_0x39c38e['bezierCurveTo'](255.15,429.01,250.953333,439.226667,246.74,449.44),_0x39c38e[_0xd0f439(0x2cb)](244.778777,447.210592,242.996576,444.829866,241.41,442.32),_0x39c38e[_0xd0f439(0x2cb)](239.52,439.43,237.79,436.41,236.07,433.4),_0x39c38e[_0xd0f439(0x2cb)](232.66,427.34,229.43,421.17,225.97,415.11),_0x39c38e[_0xd0f439(0x2cb)](224.25,412.11,222.44,409.11,220.52,406.17),_0x39c38e[_0xd0f439(0x2cb)](219.52,404.73,218.52,403.29,217.41,401.94),_0x39c38e[_0xd0f439(0x2cb)](216.3,400.59,215.2,399.27,214.22,397.83),_0x39c38e[_0xd0f439(0x2cb)](212.202342,395.007135,210.505222,391.96842,209.16,388.77),_0x39c38e[_0xd0f439(0x2cb)](207.794006,385.579613,206.881803,382.213553,206.45,378.77),_0x39c38e['bezierCurveTo'](206.794245,382.246821,207.629204,385.657359,208.93,388.9),_0x39c38e[_0xd0f439(0x2cb)](210.205438,392.159366,211.842331,395.265438,213.81,398.16),_0x39c38e[_0xd0f439(0x2cb)](214.75,399.62,215.9,400.98,216.92,402.37),_0x39c38e['bezierCurveTo'](217.94,403.76,218.92,405.18,219.92,406.62),_0x39c38e[_0xd0f439(0x2cb)](221.76,409.56,223.496667,412.56,225.13,415.62),_0x39c38e['bezierCurveTo'](228.43,421.74,231.51,427.98,234.79,434.14),_0x39c38e[_0xd0f439(0x2cb)](236.44,437.21,238.1,440.29,239.96,443.27),_0x39c38e[_0xd0f439(0x2cb)](241.69116,446.199586,243.700435,448.955642,245.96,451.5),_0x39c38e[_0xd0f439(0x2cb)](245.73,452.05,245.51,452.61,245.28,453.16),_0x39c38e[_0xd0f439(0x2cf)](235.65,476.16),_0x39c38e['bezierCurveTo'](233.234419,473.928115,231.116935,471.393856,229.35,468.62),_0x39c38e[_0xd0f439(0x2cf)](227.86,466.23),_0x39c38e['lineTo'](226.53,463.74),_0x39c38e['bezierCurveTo'](226.07,462.92,225.7,462.05,225.29,461.2),_0x39c38e[_0xd0f439(0x2cb)](224.88,460.35,224.47,459.5,224.12,458.62),_0x39c38e[_0xd0f439(0x2cb)](222.637911,455.133693,221.349287,451.568275,220.26,447.94),_0x39c38e[_0xd0f439(0x2cb)](219.17,444.3,218.19,440.63,217.46,436.94),_0x39c38e[_0xd0f439(0x2cb)](218.03,440.71,218.84,444.43,219.78,448.12),_0x39c38e[_0xd0f439(0x2cb)](220.651169,451.803459,221.726156,455.435715,0xdf,0x1cb),_0x39c38e[_0xd0f439(0x2cb)](223.31,459.91,223.69,460.79,224.06,461.67),_0x39c38e[_0xd0f439(0x2cb)](224.43,462.55,224.77,463.45,225.21,464.3),_0x39c38e[_0xd0f439(0x2cf)](226.46,466.9),_0x39c38e[_0xd0f439(0x2cf)](227.87,469.42),_0x39c38e['bezierCurveTo'](229.710692,472.611692,231.993268,475.527195,234.65,478.08),_0x39c38e[_0xd0f439(0x2cf)](225.34,500.28),_0x39c38e[_0xd0f439(0x2cb)](223.567784,498.932077,222.096411,497.229099,221.02,495.28),_0x39c38e[_0xd0f439(0x2cb)](219.682772,492.949719,218.654152,490.455485,217.96,487.86),_0x39c38e[_0xd0f439(0x2cb)](217.240155,485.235686,216.71539,482.561726,216.39,479.86),_0x39c38e[_0xd0f439(0x2cb)](216.048256,477.146861,215.881245,474.414563,215.89,471.68),_0x39c38e[_0xd0f439(0x2cb)](215.715019,474.420543,215.715019,477.169457,215.89,479.91),_0x39c38e[_0xd0f439(0x2cb)](216.051088,482.664265,216.422166,485.402217,0xd9,488.1),_0x39c38e[_0xd0f439(0x2cb)](217.563246,490.841192,218.473932,493.49932,219.71,496.01),_0x39c38e[_0xd0f439(0x2cb)](220.864811,498.365539,222.524089,500.437928,224.57,502.08),_0x39c38e[_0xd0f439(0x2cf)](194.12,574.71),_0x39c38e[_0xd0f439(0x2cb)](193.118154,577.053783,193.766894,579.777055,195.717847,581.41742),_0x39c38e[_0xd0f439(0x2cb)](197.6688,583.057785,200.463015,583.229356,202.6,581.84),_0x39c38e[_0xd0f439(0x2cb)](203.294888,581.395101,203.885101,580.804888,204.33,580.11),_0x39c38e[_0xd0f439(0x2cb)](204.537742,579.764552,204.718287,579.403462,204.87,579.03),_0x39c38e[_0xd0f439(0x2cf)](205.26,578.03),_0x39c38e[_0xd0f439(0x2cf)](211.54,562.23),_0x39c38e['lineTo'](224.09,530.63),_0x39c38e['lineTo'](233.09,507.93),_0x39c38e['bezierCurveTo'](237.58,508.07,242.09,508.14,246.55,507.93),_0x39c38e['bezierCurveTo'](251.01,507.72,255.72,507.44,260.27,506.93),_0x39c38e[_0xd0f439(0x2cb)](264.82,506.42,269.38,505.81,273.89,505.03),_0x39c38e[_0xd0f439(0x2cb)](278.4,504.25,282.89,503.32,287.31,502.14),_0x39c38e[_0xd0f439(0x2cb)](282.85,503.14,278.31,503.91,273.81,504.53),_0x39c38e[_0xd0f439(0x2cb)](269.31,505.15,264.74,505.63,260.19,505.93),_0x39c38e[_0xd0f439(0x2cb)](255.64,506.23,251.08,506.42,246.52,506.4),_0x39c38e[_0xd0f439(0x2cb)](242.29,506.4,238.07,506.21,233.87,505.94),_0x39c38e[_0xd0f439(0x2cf)](242.87,483.17),_0x39c38e[_0xd0f439(0x2cb)](247.748633,484.67415,252.779669,485.630046,257.87,486.02),_0x39c38e[_0xd0f439(0x2cf)](261.81,486.28),_0x39c38e[_0xd0f439(0x2cf)](265.75,486.37),_0x39c38e[_0xd0f439(0x2cb)](267.06,486.37,268.38,486.37,269.69,486.37),_0x39c38e[_0xd0f439(0x2cb)](0x10f,486.37,272.31,486.37,273.62,486.24),_0x39c38e[_0xd0f439(0x2cb)](278.86,486.02,284.08,485.46,289.26,484.78),_0x39c38e['bezierCurveTo'](294.44,484.1,299.61,483.21,304.72,482.07),_0x39c38e[_0xd0f439(0x2cb)](299.58,483.07,294.4,483.74,289.21,484.28),_0x39c38e[_0xd0f439(0x2cb)](284.02,484.82,278.8,485.19,273.59,485.28),_0x39c38e[_0xd0f439(0x2cb)](272.29,485.34,270.98,485.28,269.68,485.28),_0x39c38e[_0xd0f439(0x2cb)](268.38,485.28,267.08,485.28,265.78,485.18),_0x39c38e[_0xd0f439(0x2cf)](261.89,484.97),_0x39c38e['lineTo'](258.02,484.58),_0x39c38e[_0xd0f439(0x2cb)](253.124193,484.047191,248.301856,482.977424,243.64,481.39),_0x39c38e[_0xd0f439(0x2cf)](249.19,467.39),_0x39c38e[_0xd0f439(0x2cb)](250.19,464.99,251.09,462.58,252.04,460.18),_0x39c38e[_0xd0f439(0x2cf)](257.36,461.07),_0x39c38e[_0xd0f439(0x2cf)](260.36,461.57),_0x39c38e['bezierCurveTo'](261.36,461.72,262.36,461.78,263.36,461.89),_0x39c38e[_0xd0f439(0x2cf)](269.36,462.48),_0x39c38e[_0xd0f439(0x2cb)](271.36,462.61,273.36,462.64,275.36,462.73),_0x39c38e[_0xd0f439(0x2cf)](278.36,462.84),_0x39c38e['bezierCurveTo'](279.36,462.84,280.36,462.84,281.36,462.79),_0x39c38e[_0xd0f439(0x2cf)](287.36,462.65),_0x39c38e[_0xd0f439(0x2cb)](291.36,462.34,295.36,462.15,299.26,461.58),_0x39c38e[_0xd0f439(0x2cb)](307.162025,460.627802,314.987783,459.124133,322.68,457.08),_0x39c38e[_0xd0f439(0x2cb)](330.372552,455.087162,337.898555,452.499367,345.19,449.34),_0x39c38e[_0xd0f439(0x2cb)](337.845928,452.34203,330.279858,454.769325,322.56,456.6),_0x39c38e[_0xd0f439(0x2cb)](314.859048,458.475463,307.03677,459.812033,299.15,460.6),_0x39c38e[_0xd0f439(0x2cb)](295.22,461.08,291.26,461.18,287.32,461.41),_0x39c38e[_0xd0f439(0x2cf)](281.39,461.41),_0x39c38e[_0xd0f439(0x2cb)](280.39,461.41,279.39,461.41,278.39,461.41),_0x39c38e[_0xd0f439(0x2cf)](275.44,461.24),_0x39c38e['bezierCurveTo'](273.44,461.11,271.49,461.04,269.53,460.87),_0x39c38e[_0xd0f439(0x2cf)](263.65,460.16),_0x39c38e[_0xd0f439(0x2cb)](262.65,460.03,261.65,459.95,260.72,459.79),_0x39c38e[_0xd0f439(0x2cf)](257.81,459.23),_0x39c38e[_0xd0f439(0x2cf)](252.92,458.31),_0x39c38e[_0xd0f439(0x2cb)](255.886667,450.803333,258.83,443.283333,261.75,435.75),_0x39c38e['lineTo'](264.75,427.87),_0x39c38e[_0xd0f439(0x2cf)](271.61,0x1ac),_0x39c38e[_0xd0f439(0x2cf)](275.28,428.06),_0x39c38e['bezierCurveTo'](276.5,428.06,277.72,427.99,278.95,427.95),_0x39c38e['lineTo'](286.28,427.7),_0x39c38e[_0xd0f439(0x2cf)](293.59,427.1),_0x39c38e['lineTo'](297.24,426.8),_0x39c38e[_0xd0f439(0x2cf)](300.88,426.33),_0x39c38e[_0xd0f439(0x2cb)](303.3,426.01,305.73,425.73,308.15,425.38),_0x39c38e[_0xd0f439(0x2cb)](312.96,424.55,317.79,423.82,322.56,422.75),_0x39c38e[_0xd0f439(0x2cb)](332.11993,420.773435,341.569582,418.296698,350.87,415.33),_0x39c38e['bezierCurveTo'](360.149488,412.428191,369.248783,408.978807,378.12,0x195),_0x39c38e[_0xd0f439(0x2cb)](369.169758,408.852543,359.996642,412.16515,350.65,414.92),_0x39c38e[_0xd0f439(0x2cb)](341.325156,417.724595,331.858624,420.034482,322.29,421.84),_0x39c38e[_0xd0f439(0x2cb)](317.53,422.84,312.7,423.47,307.9,424.21),_0x39c38e[_0xd0f439(0x2cb)](305.49,424.52,303.07,424.76,300.66,425.03),_0x39c38e[_0xd0f439(0x2cf)](297.03,425.43),_0x39c38e[_0xd0f439(0x2cf)](293.4,425.68),_0x39c38e[_0xd0f439(0x2cf)](286.13,426.14),_0x39c38e['lineTo'](278.85,426.27),_0x39c38e[_0xd0f439(0x2cb)](277.64,426.27,276.42,426.33,275.21,426.27),_0x39c38e['lineTo'](271.57,426.14),_0x39c38e[_0xd0f439(0x2cf)](265.44,425.92),_0x39c38e['lineTo'](273.9,404.05),_0x39c38e[_0xd0f439(0x2cf)](276.44,397.42),_0x39c38e[_0xd0f439(0x2cb)](281.770413,397.776303,287.120775,397.70608,292.44,397.21),_0x39c38e['bezierCurveTo'](297.9039,396.661021,303.32566,395.752383,308.67,394.49),_0x39c38e[_0xd0f439(0x2cb)](319.304232,391.902545,329.68049,388.351187,339.67,383.88),_0x39c38e[_0xd0f439(0x2cb)](349.660792,379.456497,359.372192,374.427141,368.75,368.82),_0x39c38e['bezierCurveTo'](378.143829,363.260838,387.208908,357.16403,395.9,350.56),_0x39c38e['bezierCurveTo'](387.113785,357.02045,377.965537,362.973489,368.5,368.39),_0x39c38e[_0xd0f439(0x2cb)](359.068327,373.847301,349.313675,378.726297,339.29,0x17f),_0x39c38e[_0xd0f439(0x2cb)](329.283202,387.286697,318.907086,390.653914,308.29,393.06),_0x39c38e['bezierCurveTo'](302.996377,394.226849,297.631313,395.041964,292.23,395.5),_0x39c38e[_0xd0f439(0x2cb)](287.210705,395.884995,282.169295,395.884995,277.15,395.5),_0x39c38e[_0xd0f439(0x2cb)](280.603333,386.466667,284.033333,377.43,287.44,368.39),_0x39c38e['bezierCurveTo'](291.168819,368.27132,294.884664,367.890379,298.56,367.25),_0x39c38e[_0xd0f439(0x2cb)](302.456875,366.589762,306.315704,365.721859,310.12,364.65),_0x39c38e[_0xd0f439(0x2cb)](317.703022,362.515407,325.149958,359.924007,332.42,356.89),_0x39c38e[_0xd0f439(0x2cb)](339.7,353.89,346.83,350.58,353.85,347.05),_0x39c38e[_0xd0f439(0x2cb)](360.87,343.52,367.77,339.76,374.5,335.72),_0x39c38e[_0xd0f439(0x2cb)](367.69,339.62,360.7,343.21,353.63,346.6),_0x39c38e[_0xd0f439(0x2cb)](346.56,349.99,339.36,353.14,332.05,355.96),_0x39c38e[_0xd0f439(0x2cb)](324.766107,358.820936,317.315836,361.238684,309.74,363.2),_0x39c38e[_0xd0f439(0x2cb)](305.963906,364.178842,302.138527,364.956602,298.28,365.53),_0x39c38e[_0xd0f439(0x2cb)](294.938345,366.030666,291.568185,366.317915,288.19,366.39),_0x39c38e[_0xd0f439(0x2cb)](291.443333,357.723333,294.666667,349.056667,297.86,340.39),_0x39c38e[_0xd0f439(0x2cb)](298.49,338.79,299.06,337.16,299.66,335.53)),_0x39c38e['fill'](),_0x39c38e[_0xd0f439(0x47a)](),_0x39c38e[_0xd0f439(0x21c)](),this[_0xd0f439(0x225)][_0xd0f439(0x329)]();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x4b6)]=function(_0x5a4bba,_0x1aa140,_0xe097eb){const _0xf7f233=_0x5da319,_0x56d3c3=this[_0xf7f233(0x452)];_0x5a4bba=_0x5a4bba||_0xf7f233(0x53b),_0x1aa140=_0x1aa140||'#888800',_0xe097eb=_0xe097eb||_0xf7f233(0x48f),_0x56d3c3['save'](),_0x56d3c3[_0xf7f233(0xfd)]=_0x5a4bba,(_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x52d)]=0.695966,_0x56d3c3[_0xf7f233(0x23f)](32.118356,32.638166),_0x56d3c3['bezierCurveTo'](36.363751,64.026251,27.872961,82.886942,27.872961,82.886942)),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0xfd)]=_0x1aa140,(_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](30.16965,77.249614),_0x56d3c3[_0xf7f233(0x2cb)](31.491986,78.154371,30.16965,83.443715,27.107398,89.081043),_0x56d3c3[_0xf7f233(0x2cb)](24.045146,94.718371,20.495717,98.546186,19.173381,97.64143),_0x56d3c3[_0xf7f233(0x2cb)](17.851045,96.736674,19.173381,91.447329,22.235633,85.810001),_0x56d3c3['bezierCurveTo'](25.297885,80.172673,28.847314,76.344858,30.16965,77.249614)),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['fillStyle']=_0xe097eb,_0x56d3c3[_0xf7f233(0x4e5)]=_0xe097eb,_0x56d3c3[_0xf7f233(0x52d)]=0x5,(_0x56d3c3['save'](),_0x56d3c3['transform'](0.695966,0x0,0x0,0.695966,181.842,123.051),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3['moveTo'](-242.3,-157.8),_0x56d3c3['lineTo'](-214.1,-130.5),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](0.31266,0x0,0x0,0.32058,88.64,390.11),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-1050.5,-0x6a5),_0x56d3c3[_0xf7f233(0x2cb)](-1079.4,-1729.8,-1102.2,-1750.4,-1078.2,-1725.7),_0x56d3c3[_0xf7f233(0x2cb)](-1054.1,-0x6a5,-1052.9,-0x6a5,-1050.5,-0x6a5),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-1048.5,-0x6a7),_0x56d3c3[_0xf7f233(0x2cb)](-1077.4,-1731.8,-1100.2,-1752.4,-1076.2,-1727.7),_0x56d3c3[_0xf7f233(0x2cb)](-1052.1,-0x6a7,-1050.9,-0x6a7,-1048.5,-0x6a7),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3['moveTo'](-1050.5,-0x6a7),_0x56d3c3['bezierCurveTo'](-1079.4,-1731.8,-1102.2,-1752.4,-1078.2,-1727.7),_0x56d3c3['bezierCurveTo'](-1054.1,-0x6a7,-1052.9,-0x6a7,-1050.5,-0x6a7),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3['moveTo'](-230.9,-162.8),_0x56d3c3['lineTo'](-215.2,-132.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](0.22445,0.070054,-0.053362,0.28457,132.9,389.45),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-1959.5,-1448.4),_0x56d3c3[_0xf7f233(0x2cb)](-1988.4,-1477.2,-2011.2,-1497.8,-1987.2,-1473.1),_0x56d3c3[_0xf7f233(0x2cb)](-1963.1,-1448.4,-1961.9,-1448.4,-1959.5,-1448.4),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-1957.5,-1450.4),_0x56d3c3[_0xf7f233(0x2cb)](-1986.4,-1479.2,-2009.2,-1499.8,-1985.2,-1475.1),_0x56d3c3['bezierCurveTo'](-1961.1,-1450.4,-1959.9,-1450.4,-1957.5,-1450.4),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-1959.5,-1450.4),_0x56d3c3['bezierCurveTo'](-1988.4,-1479.2,-2011.2,-1499.8,-1987.2,-1475.1),_0x56d3c3[_0xf7f233(0x2cb)](-1963.1,-1450.4,-1961.9,-1450.4,-1959.5,-1450.4),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-217.8,-162.7),_0x56d3c3[_0xf7f233(0x2cf)](-216.1,-133.5),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](0.22089,0.17769,-0.21484,0.15456,209.48,425.48),_0x56d3c3['beginPath'](),_0x56d3c3['moveTo'](-2652.9,-738.7),_0x56d3c3[_0xf7f233(0x2cb)](-2681.8,-767.5,-2704.6,-788.1,-2680.6,-763.4),_0x56d3c3[_0xf7f233(0x2cb)](-2656.5,-738.7,-2655.3,-738.7,-2652.9,-738.7),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-2650.9,-740.7),_0x56d3c3['bezierCurveTo'](-2679.8,-769.5,-2702.6,-790.1,-2678.6,-765.4),_0x56d3c3[_0xf7f233(0x2cb)](-2654.5,-740.7,-2653.3,-740.7,-2650.9,-740.7),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-2652.9,-740.7),_0x56d3c3[_0xf7f233(0x2cb)](-2681.8,-769.5,-2704.6,-790.1,-2680.6,-765.4),_0x56d3c3[_0xf7f233(0x2cb)](-2656.5,-740.7,-2655.3,-740.7,-2652.9,-740.7),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['restore'](),_0x56d3c3['beginPath'](),_0x56d3c3['moveTo'](-196.4,-158.1),_0x56d3c3[_0xf7f233(0x2cf)](-216.8,-133.7),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['save'](),_0x56d3c3['transform'](-0.002675,0.26549,-0.23659,0.00452,270.1,476.54),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-2416.6,2007.2),_0x56d3c3[_0xf7f233(0x2cb)](-2445.5,1978.4,-2468.3,1957.8,-2444.3,1982.5),_0x56d3c3[_0xf7f233(0x2cb)](-2420.2,2007.2,-0x973,2007.2,-2416.6,2007.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-2414.6,2005.2),_0x56d3c3[_0xf7f233(0x2cb)](-2443.5,1976.4,-2466.3,1955.8,-2442.3,1980.5),_0x56d3c3['bezierCurveTo'](-2418.2,2005.2,-0x971,2005.2,-2414.6,2005.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-2416.6,2005.2),_0x56d3c3[_0xf7f233(0x2cb)](-2445.5,1976.4,-2468.3,1955.8,-2444.3,1980.5),_0x56d3c3['bezierCurveTo'](-2420.2,2005.2,-0x973,2005.2,-2416.6,2005.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3['beginPath'](),_0x56d3c3['moveTo'](-246.9,-141.7),_0x56d3c3[_0xf7f233(0x2cf)](-214.2,-131.4),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](0.24275,-0.15327,0.12697,0.28299,44.094,441.92),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-85.8,-2104.9),_0x56d3c3[_0xf7f233(0x2cb)](-114.7,-2133.7,-137.5,-2154.3,-113.5,-2129.6),_0x56d3c3[_0xf7f233(0x2cb)](-89.4,-2104.9,-88.2,-2104.9,-85.8,-2104.9),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-83.8,-2106.9),_0x56d3c3[_0xf7f233(0x2cb)](-112.7,-2135.7,-135.5,-2156.3,-111.5,-2131.6),_0x56d3c3['bezierCurveTo'](-87.4,-2106.9,-86.2,-2106.9,-83.8,-2106.9),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-85.8,-2106.9),_0x56d3c3[_0xf7f233(0x2cb)](-114.7,-2135.7,-137.5,-2156.3,-113.5,-2131.6),_0x56d3c3[_0xf7f233(0x2cb)](-89.4,-2106.9,-88.2,-2106.9,-85.8,-2106.9),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3['restore'](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-185.8,-142.3),_0x56d3c3[_0xf7f233(0x2cf)](-218.5,-0x84),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](-0.24275,-0.15327,-0.12697,0.28299,270.99,441.28),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](2314.6,-804.9),_0x56d3c3[_0xf7f233(0x2cb)](2285.7,-833.7,2262.9,-854.3,2286.9,-829.6),_0x56d3c3[_0xf7f233(0x2cb)](0x907,-804.9,2312.2,-804.9,2314.6,-804.9),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](2316.6,-806.9),_0x56d3c3[_0xf7f233(0x2cb)](2287.7,-835.7,2264.9,-856.3,2288.9,-831.6),_0x56d3c3[_0xf7f233(0x2cb)](0x909,-806.9,2314.2,-806.9,2316.6,-806.9),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](2314.6,-806.9),_0x56d3c3[_0xf7f233(0x2cb)](2285.7,-835.7,2262.9,-856.3,2286.9,-831.6),_0x56d3c3[_0xf7f233(0x2cb)](0x907,-806.9,2312.2,-806.9,2314.6,-806.9),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3['moveTo'](-231.8,-129.4),_0x56d3c3[_0xf7f233(0x2cf)](-213.2,-134.7),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](0.023653,-0.076388,0.19356,0.018706,63.365,546.69),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](8238.8,-2522.6),_0x56d3c3[_0xf7f233(0x2cb)](8209.9,-2551.4,8187.1,-0xa0c,8211.1,-2547.3),_0x56d3c3[_0xf7f233(0x2cb)](8235.2,-2522.6,8236.4,-2522.6,8238.8,-2522.6),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3['moveTo'](8240.8,-2524.6),_0x56d3c3[_0xf7f233(0x2cb)](8211.9,-2553.4,8189.1,-0xa0e,8213.1,-2549.3),_0x56d3c3['bezierCurveTo'](8237.2,-2524.6,8238.4,-2524.6,8240.8,-2524.6),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](8238.8,-2524.6),_0x56d3c3['bezierCurveTo'](8209.9,-2553.4,8187.1,-0xa0e,8211.1,-2549.3),_0x56d3c3[_0xf7f233(0x2cb)](8235.2,-2524.6,8236.4,-2524.6,8238.8,-2524.6),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-199.6,-0x80),_0x56d3c3[_0xf7f233(0x2cf)](-218.2,-133.3),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](-0.023653,-0.076388,-0.19356,0.018706,252.97,548.1),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](9157.3,1228.3),_0x56d3c3[_0xf7f233(0x2cb)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0x56d3c3['bezierCurveTo'](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](9159.3,1226.3),_0x56d3c3['bezierCurveTo'](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0x56d3c3['bezierCurveTo'](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](9157.3,1226.3),_0x56d3c3[_0xf7f233(0x2cb)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0x56d3c3[_0xf7f233(0x2cb)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-198.5,-126.8),_0x56d3c3[_0xf7f233(0x2cf)](-217.1,-132.1),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](-0.023653,-0.076388,-0.19356,0.018706,254.11,549.29),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](9157.3,1228.3),_0x56d3c3[_0xf7f233(0x2cb)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0x56d3c3[_0xf7f233(0x2cb)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](9159.3,1226.3),_0x56d3c3['bezierCurveTo'](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0x56d3c3[_0xf7f233(0x2cb)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3['moveTo'](9157.3,1226.3),_0x56d3c3[_0xf7f233(0x2cb)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0x56d3c3[_0xf7f233(0x2cb)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0x56d3c3['fill'](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-215.6,-132.9),_0x56d3c3['lineTo'](-215.6,-128.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-206.5,-160.9),_0x56d3c3[_0xf7f233(0x2cf)](-215.4,-134.6),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](0.14296,0.24045,-0.25629,0.054271,247.7,457.79),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-2632.7,307.2),_0x56d3c3[_0xf7f233(0x2cb)](-2661.6,278.4,-2684.4,257.8,-2660.4,282.5),_0x56d3c3['bezierCurveTo'](-2636.3,307.2,-2635.1,307.2,-2632.7,307.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-2630.7,305.2),_0x56d3c3[_0xf7f233(0x2cb)](-2659.6,276.4,-2682.4,255.8,-2658.4,280.5),_0x56d3c3[_0xf7f233(0x2cb)](-2634.3,305.2,-2633.1,305.2,-2630.7,305.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-2632.7,305.2),_0x56d3c3[_0xf7f233(0x2cb)](-2661.6,276.4,-2684.4,255.8,-2660.4,280.5),_0x56d3c3[_0xf7f233(0x2cb)](-2636.3,305.2,-2635.1,305.2,-2632.7,305.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['restore'](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-188.1,-148.7),_0x56d3c3[_0xf7f233(0x2cf)](-215.9,-0x87),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](-0.097581,0.23264,-0.2229,-0.086065,286.11,525.8),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-1809.9,2931.2),_0x56d3c3[_0xf7f233(0x2cb)](-1838.8,2902.4,-1861.6,2881.8,-1837.6,2906.5),_0x56d3c3[_0xf7f233(0x2cb)](-1813.5,2931.2,-1812.3,2931.2,-1809.9,2931.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['beginPath'](),_0x56d3c3['moveTo'](-1807.9,2929.2),_0x56d3c3[_0xf7f233(0x2cb)](-1836.8,2900.4,-1859.6,2879.8,-1835.6,2904.5),_0x56d3c3['bezierCurveTo'](-1811.5,2929.2,-1810.3,2929.2,-1807.9,2929.2),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-1809.9,2929.2),_0x56d3c3[_0xf7f233(0x2cb)](-1838.8,2900.4,-1861.6,2879.8,-1837.6,2904.5),_0x56d3c3[_0xf7f233(0x2cb)](-1813.5,2929.2,-1812.3,2929.2,-1809.9,2929.2),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](-183.8,-130.7),_0x56d3c3[_0xf7f233(0x2cf)](-218.1,-134.1),_0x56d3c3['fill'](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](-0.17214,-0.22728,-0.2201,0.20074,299.56,495.11),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](2783.6,33.2),_0x56d3c3['bezierCurveTo'](2754.7,4.4,2731.9,-16.2,2755.9,8.5),_0x56d3c3[_0xf7f233(0x2cb)](0xadc,33.2,2781.2,33.2,2783.6,33.2),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](2785.6,31.2),_0x56d3c3[_0xf7f233(0x2cb)](2756.7,2.4,2733.9,-18.2,2757.9,6.5),_0x56d3c3[_0xf7f233(0x2cb)](0xade,31.2,2783.2,31.2,2785.6,31.2),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](2783.6,31.2),_0x56d3c3[_0xf7f233(0x2cb)](2754.7,2.4,2731.9,-18.2,2755.9,6.5),_0x56d3c3[_0xf7f233(0x2cb)](0xadc,31.2,2781.2,31.2,2783.6,31.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-231.5,-136.9),_0x56d3c3[_0xf7f233(0x2cf)](-212.2,-134.5),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](0.049479,-0.058228,0.17433,0.090128,67.628,508.86),_0x56d3c3['beginPath'](),_0x56d3c3['moveTo'](5867.7,-3370.8),_0x56d3c3[_0xf7f233(0x2cb)](5838.8,-3399.6,0x16b8,-3420.2,0x16d0,-3395.5),_0x56d3c3[_0xf7f233(0x2cb)](0x16e8,-3370.8,5865.3,-3370.8,5867.7,-3370.8),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](5869.7,-3372.8),_0x56d3c3[_0xf7f233(0x2cb)](5840.8,-3401.6,0x16ba,-3422.2,0x16d2,-3397.5),_0x56d3c3[_0xf7f233(0x2cb)](0x16ea,-3372.8,5867.3,-3372.8,5869.7,-3372.8),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3['beginPath'](),_0x56d3c3[_0xf7f233(0x23f)](5867.7,-3372.8),_0x56d3c3[_0xf7f233(0x2cb)](5838.8,-3401.6,0x16b8,-3422.2,0x16d0,-3397.5),_0x56d3c3[_0xf7f233(0x2cb)](0x16e8,-3372.8,5865.3,-3372.8,5867.7,-3372.8),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-201.9,-123.4),_0x56d3c3[_0xf7f233(0x2cf)](-217.4,-135.2),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x1d5)](),_0x56d3c3[_0xf7f233(0x312)](0.005235,-0.076232,-0.18773,-0.057202,244.46,582.26),_0x56d3c3['beginPath'](),_0x56d3c3['moveTo'](7327.3,2589.8),_0x56d3c3[_0xf7f233(0x2cb)](7298.4,0xa01,7275.6,2540.4,7299.6,2565.1),_0x56d3c3[_0xf7f233(0x2cb)](7323.6,2589.8,7324.9,2589.8,7327.3,2589.8),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](7329.3,2587.8),_0x56d3c3[_0xf7f233(0x2cb)](7300.4,0x9ff,7277.6,2538.4,7301.6,2563.1),_0x56d3c3[_0xf7f233(0x2cb)](7325.6,2587.8,7326.9,2587.8,7329.3,2587.8),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3[_0xf7f233(0x47a)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](7327.3,2587.8),_0x56d3c3[_0xf7f233(0x2cb)](7298.4,0x9ff,7275.6,2538.4,7299.6,2563.1),_0x56d3c3['bezierCurveTo'](7323.6,2587.8,7324.9,2587.8,7327.3,2587.8),_0x56d3c3[_0xf7f233(0x1ef)](),_0x56d3c3['stroke'](),_0x56d3c3[_0xf7f233(0x21c)](),_0x56d3c3[_0xf7f233(0x503)](),_0x56d3c3[_0xf7f233(0x23f)](-0xd7,-133.8),_0x56d3c3[_0xf7f233(0x2cf)](-216.7,-129.6),_0x56d3c3['fill'](),_0x56d3c3[_0xf7f233(0x47a)]()),_0x56d3c3[_0xf7f233(0x21c)](),this[_0xf7f233(0x225)]['update']();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x570)]=function(_0x10fd22,_0x16ce1f,_0x341cee){const _0x19fdf1=_0x5da319,_0x36b2c1=this['context'];_0x36b2c1[_0x19fdf1(0x1d5)](),_0x36b2c1[_0x19fdf1(0x1b9)](_0x10fd22-_0x341cee,_0x16ce1f-_0x341cee);const _0x156fcd=0x168*(Math['PI']/0xb4),_0x4c0af3=ColorManager[_0x19fdf1(0x247)],_0x50d08b=_0x4c0af3[Math[_0x19fdf1(0x441)](Math[_0x19fdf1(0x398)]()*_0x4c0af3[_0x19fdf1(0x2e9)])];let _0xb88d67=ColorManager[_0x19fdf1(0x14a)](_0x50d08b,0.85);_0xb88d67=ColorManager[_0x19fdf1(0x260)](_0xb88d67,Math['random']()*0.4+0.2);let _0x1ce21c=ColorManager[_0x19fdf1(0x14a)](_0x50d08b,0.85);_0x1ce21c=ColorManager['hexToRgba'](_0x1ce21c,Math[_0x19fdf1(0x398)]()*0.2);const _0x12f47f=_0x36b2c1[_0x19fdf1(0x209)](_0x341cee,_0x341cee,0xa,_0x341cee,_0x341cee,_0x341cee);_0x12f47f[_0x19fdf1(0x37f)](0x0,_0xb88d67),_0x12f47f[_0x19fdf1(0x37f)](0x1,_0x1ce21c),_0x36b2c1['fillStyle']=_0x12f47f,_0x36b2c1['beginPath'](),_0x36b2c1[_0x19fdf1(0x23f)](_0x341cee,_0x341cee),_0x36b2c1[_0x19fdf1(0x2cf)](length,_0x341cee),_0x36b2c1['arc'](_0x341cee,_0x341cee,_0x341cee,0x0,_0x156fcd),_0x36b2c1[_0x19fdf1(0x2cf)](_0x341cee,_0x341cee),_0x36b2c1[_0x19fdf1(0x1ef)](),_0x36b2c1[_0x19fdf1(0x21c)](),this[_0x19fdf1(0x225)]['update']();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x1b8)]=function(_0x287f42,_0x2d92bd,_0x4b14e9){const _0x2c64d8=_0x5da319,_0x3774d8=this[_0x2c64d8(0x401)];_0x3774d8[_0x2c64d8(0x1d5)](),_0x3774d8[_0x2c64d8(0x1b9)](_0x287f42-_0x4b14e9,_0x2d92bd-_0x4b14e9);const _0x17439a=0x168*(Math['PI']/0xb4),_0x112448=Math[_0x2c64d8(0x17f)](0x80),_0x1eddd5=_0x2c64d8(0x3c8)['format'](_0x112448),_0x1d3a0c=_0x2c64d8(0x144)['format'](_0x112448),_0x441e32=_0x2c64d8(0x1b5)[_0x2c64d8(0x555)](_0x112448),_0xde20d0=_0x2c64d8(0x3a4)[_0x2c64d8(0x555)](_0x112448),_0x20fa00=_0x2c64d8(0x49f)[_0x2c64d8(0x555)](_0x112448),_0x30a750=_0x2c64d8(0x451)[_0x2c64d8(0x555)](_0x112448),_0x1da623=_0x2c64d8(0x167)[_0x2c64d8(0x555)](_0x112448),_0x3a6f93=_0x2c64d8(0x434)[_0x2c64d8(0x555)](_0x112448),_0x3595ed=_0x3774d8[_0x2c64d8(0x209)](_0x4b14e9,_0x4b14e9,0xa,_0x4b14e9,_0x4b14e9,_0x4b14e9);_0x3595ed[_0x2c64d8(0x37f)](0x0,_0x1eddd5),_0x3595ed[_0x2c64d8(0x37f)](0.7,_0x1eddd5),_0x3595ed['addColorStop'](0.8,_0x1d3a0c),_0x3595ed[_0x2c64d8(0x37f)](0.81,_0x441e32),_0x3595ed[_0x2c64d8(0x37f)](0.82,_0xde20d0),_0x3595ed[_0x2c64d8(0x37f)](0.8225,_0x20fa00),_0x3595ed[_0x2c64d8(0x37f)](0.8275,_0x30a750),_0x3595ed[_0x2c64d8(0x37f)](0.85,_0x1da623),_0x3595ed[_0x2c64d8(0x37f)](0.9,_0x3a6f93),_0x3595ed[_0x2c64d8(0x37f)](0.95,_0x1eddd5),_0x3595ed['addColorStop'](0x1,_0x1eddd5),_0x3774d8[_0x2c64d8(0xfd)]=_0x3595ed,_0x3774d8[_0x2c64d8(0x503)](),_0x3774d8[_0x2c64d8(0x23f)](_0x4b14e9,_0x4b14e9),_0x3774d8['lineTo'](length,_0x4b14e9),_0x3774d8['arc'](_0x4b14e9,_0x4b14e9,_0x4b14e9,0x0,_0x17439a),_0x3774d8[_0x2c64d8(0x2cf)](_0x4b14e9,_0x4b14e9),_0x3774d8[_0x2c64d8(0x1ef)](),_0x3774d8['restore'](),this[_0x2c64d8(0x225)]['update']();},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x261)]=function(_0x43c197){const _0x5e76e9=_0x5da319,_0x59af5f=this[_0x5e76e9(0x401)];_0x43c197=_0x43c197||[_0x5e76e9(0x552),_0x5e76e9(0x3f3)],_0x59af5f[_0x5e76e9(0x1d5)](),_0x59af5f['transform'](0x0,0.11738,-0.11738,0x0,99.6785,-39.5524),_0x59af5f[_0x5e76e9(0x4e5)]='#000000',_0x59af5f['lineWidth']=0xa;const _0x379100=_0x59af5f[_0x5e76e9(0x495)](0x0,this[_0x5e76e9(0x42b)],this[_0x5e76e9(0x16e)]*0x2,this[_0x5e76e9(0x42b)]*0x14);_0x379100[_0x5e76e9(0x37f)](0x0,_0x43c197[0x0]),_0x379100[_0x5e76e9(0x37f)](0x1,_0x43c197[0x1]),_0x59af5f['fillStyle']=_0x379100,(_0x59af5f[_0x5e76e9(0x503)](),_0x59af5f['moveTo'](489.1,324.8),_0x59af5f[_0x5e76e9(0x2cb)](492.6,324.4,516.9,356.8,515.5,360.1),_0x59af5f[_0x5e76e9(0x2cb)](514.1,363.4,473.9,368.2,471.8,365.3),_0x59af5f['bezierCurveTo'](469.7,362.5,485.6,325.2,489.1,324.8)),_0x59af5f[_0x5e76e9(0x1ef)](),_0x59af5f[_0x5e76e9(0x47a)](),(_0x59af5f['beginPath'](),_0x59af5f[_0x5e76e9(0x23f)](622.6,156.7),_0x59af5f['bezierCurveTo'](622.6,230.8,556.4,341.5,488.3,341.5),_0x59af5f[_0x5e76e9(0x2cb)](418.2,341.5,0x162,230.8,0x162,156.7),_0x59af5f[_0x5e76e9(0x2cb)](0x162,82.6,414.2,14.3,488.3,14.3),_0x59af5f[_0x5e76e9(0x2cb)](562.4,14.3,622.6,82.6,622.6,156.7)),_0x59af5f['fill'](),_0x59af5f[_0x5e76e9(0x47a)](),_0x59af5f[_0x5e76e9(0x52d)]=0x5,(_0x59af5f[_0x5e76e9(0x503)](),_0x59af5f['moveTo'](0x1de,0x156),_0x59af5f[_0x5e76e9(0x2cb)](486.5,340.3,492.4,338.5,503.5,341.1),_0x59af5f[_0x5e76e9(0x2cb)](482.2,561.7,393.8,609.5,366.7,789.6),_0x59af5f[_0x5e76e9(0x2cb)](366.2,792.9,368.2,806.3,371.3,831.2)),_0x59af5f[_0x5e76e9(0x47a)](),_0x59af5f['restore'](),this[_0x5e76e9(0x222)]=0x80,this[_0x5e76e9(0x44f)](this[_0x5e76e9(0x16e)]*0x7/0x8,this[_0x5e76e9(0x42b)]*0x1/0x4,0x4,_0x5e76e9(0x41e));},Bitmap[_0x5da319(0x2c2)][_0x5da319(0x3c1)]=function(_0x1a06ba){const _0x4bed2e=_0x5da319;_0x1a06ba=_0x1a06ba||_0x4bed2e(0x552);const _0x55b610=this[_0x4bed2e(0x16e)]/0x2,_0x4a9b1e=this[_0x4bed2e(0x42b)]/0x2,_0x691cce=ColorManager[_0x4bed2e(0x260)](_0x1a06ba,0x0),_0x2239b2=ColorManager[_0x4bed2e(0x260)](_0x1a06ba,0.8),_0x139ca7=ColorManager[_0x4bed2e(0x260)](_0x1a06ba,0x1),_0x3c4a99=this['width']/0x2,_0x32e35d=0x4;this[_0x4bed2e(0x505)](0x0,_0x4a9b1e-_0x32e35d,_0x3c4a99,_0x32e35d*0x2,_0x691cce,_0x2239b2),this[_0x4bed2e(0x44f)](_0x55b610,_0x4a9b1e,_0x32e35d,_0x139ca7),this[_0x4bed2e(0x44f)](_0x55b610,_0x4a9b1e,_0x32e35d-0x2,_0x4bed2e(0x41e));},Bitmap['prototype'][_0x5da319(0x110)]=function(_0x20b583){const _0x3b4654=_0x5da319,_0xa69e1a=this[_0x3b4654(0x452)];_0x20b583=_0x20b583||_0x3b4654(0x552);const _0x421ac2=this[_0x3b4654(0x16e)]/0x2,_0x377da4=this[_0x3b4654(0x42b)]/0x2,_0x3d470b=ColorManager['hexToRgba'](_0x20b583,0x0),_0x331b4f=ColorManager[_0x3b4654(0x260)](_0x20b583,0.25),_0x5963ea=ColorManager[_0x3b4654(0x260)](_0x20b583,0x1),_0x13bf70=this['width']/0x2,_0x9aaa10=0x4,_0x179314=Math[_0x3b4654(0x17f)](0x3)+0xa;_0xa69e1a[_0x3b4654(0x1b9)](_0x421ac2,_0x377da4);const _0x500670=Math[_0x3b4654(0x17f)](0x3)+0x4;for(let _0xc358c9=0x0;_0xc358c9<_0x500670;_0xc358c9++){if(_0x3b4654(0x228)==='zIqvY'){if(this['_cached_WeatherEffects_Ashfall']&&this[_0x3b4654(0x1f8)][_0x3b4654(0x2e9)]>=_0x344f59[_0x3b4654(0x302)]){const _0x58b491=this[_0x3b4654(0x1f8)];return _0x58b491[_0x4e62c1[_0x3b4654(0x441)](_0x4debaf[_0x3b4654(0x398)]()*_0x58b491[_0x3b4654(0x2e9)])];}const _0x392df8=new _0x2a95e1(0x18,0x18),_0xb2d1ea=_0x392df8[_0x3b4654(0x16e)],_0x16b3e8=_0x392df8[_0x3b4654(0x42b)],_0x25848c=_0xb2d1ea/0x2-0x2,_0x3590b0=_0x16b3e8/0x2-0x2,_0x2bf888=[];_0x2bf888['push'](_0x3e303a[_0x3b4654(0x17f)](_0x25848c)+0x2,_0x58b0c9[_0x3b4654(0x17f)](_0x3590b0)+0x2),_0x2bf888['push'](_0xb2d1ea-_0x44bc87[_0x3b4654(0x17f)](_0x25848c)-0x2,_0x2fc066[_0x3b4654(0x17f)](_0x3590b0)+0x2),_0x2bf888[_0x3b4654(0x28e)](_0xb2d1ea-_0x256ffb[_0x3b4654(0x17f)](_0x25848c)-0x2,_0x16b3e8-_0x4f817c['randomInt'](_0x3590b0)-0x2),_0x2bf888['push'](_0x189c98[_0x3b4654(0x17f)](_0x25848c)+0x2,_0x16b3e8-_0x4f58ab[_0x3b4654(0x17f)](_0x3590b0)-0x2);const _0x33b706=_0x42063f[_0x3b4654(0x1e8)][_0x3b4654(0x24c)](),_0x13398b=_0x33b706[_0x5ed66e[_0x3b4654(0x441)](_0x335b59['random']()*_0x33b706['length'])];_0x392df8[_0x3b4654(0x48e)](_0x2bf888,_0x13398b,_0x3b4654(0x298),0x2,0xff,![]),_0x392df8[_0x3b4654(0x182)]=![];if(_0x436eb6['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x275f59[_0x3b4654(0x47b)](_0x3b4654(0x158));return this[_0x3b4654(0x1f8)]=this[_0x3b4654(0x1f8)]||[],this['_cached_WeatherEffects_Ashfall'][_0x3b4654(0x28e)](_0x392df8),_0x392df8;}else{const _0x2ea19f=_0x13bf70*((_0x500670-_0xc358c9)/_0x500670);let _0x2abb18=Math['randomInt'](0xa)+0x28;_0x2abb18/=_0xc358c9+0x1;for(let _0x50c268=0x0;_0x50c268<_0x2abb18;_0x50c268++){let _0x4361da=Math[_0x3b4654(0x17f)](Math['round'](_0x2ea19f/_0x179314))+_0x2ea19f*(_0x179314-0x1)/_0x179314;const _0x1500b3=Math[_0x3b4654(0x17f)](_0x4361da/0x2);this['gradientFillRect'](_0x1500b3,-_0x9aaa10,_0x4361da-_0x1500b3,_0x9aaa10*0x2,_0x3d470b,_0x331b4f),this[_0x3b4654(0x44f)](_0x4361da,0x0,_0x9aaa10,_0x5963ea),this[_0x3b4654(0x44f)](_0x4361da,0x0,_0x9aaa10-(Math[_0x3b4654(0x17f)](0x2)-0x1),_0x3b4654(0x41e)),_0xa69e1a[_0x3b4654(0x545)](Math['PI']*0x2/_0x2abb18);}}}},Bitmap[_0x5da319(0x2c2)]['drawRainbowArch']=function(_0x35c3aa,_0xb1fa91,_0xc59947){const _0x922a4c=_0x5da319,_0x159550=this[_0x922a4c(0x401)];_0x159550[_0x922a4c(0x1d5)](),_0x159550['translate'](_0x35c3aa-_0xc59947,_0xb1fa91-_0xc59947);const _0x3422f8=0x168*(Math['PI']/0xb4),_0x2e83cc=Math[_0x922a4c(0x17f)](0x80),_0xc22be1='rgba(%1,%1,%1,0)'[_0x922a4c(0x555)](_0x2e83cc),_0x82442f=_0x922a4c(0x144)[_0x922a4c(0x555)](_0x2e83cc),_0x4ad0fd=_0x922a4c(0x1b5)['format'](_0x2e83cc),_0x4a43b9='rgba(%1,255,255,1)'['format'](_0x2e83cc),_0x4c8396=_0x922a4c(0x49f)[_0x922a4c(0x555)](_0x2e83cc),_0x26872b=_0x922a4c(0x451)[_0x922a4c(0x555)](_0x2e83cc),_0x5de967=_0x922a4c(0x167)[_0x922a4c(0x555)](_0x2e83cc),_0xe5692a=_0x922a4c(0x434)['format'](_0x2e83cc),_0x55918a=_0x159550[_0x922a4c(0x209)](_0xc59947,_0xc59947,0xa,_0xc59947,_0xc59947,_0xc59947);_0x55918a[_0x922a4c(0x37f)](0x0,_0xc22be1),_0x55918a[_0x922a4c(0x37f)](0.15,_0xc22be1),_0x55918a[_0x922a4c(0x37f)](0.25,_0x82442f),_0x55918a[_0x922a4c(0x37f)](0.3,_0x82442f),_0x55918a[_0x922a4c(0x37f)](0.4,_0x4ad0fd),_0x55918a['addColorStop'](0.45,_0x4a43b9),_0x55918a[_0x922a4c(0x37f)](0.5,_0x4a43b9),_0x55918a['addColorStop'](0.55,_0x4c8396),_0x55918a[_0x922a4c(0x37f)](0.6,_0x26872b),_0x55918a[_0x922a4c(0x37f)](0.65,_0x26872b),_0x55918a[_0x922a4c(0x37f)](0.75,_0x5de967),_0x55918a[_0x922a4c(0x37f)](0.85,_0xe5692a),_0x55918a[_0x922a4c(0x37f)](0.95,_0xc22be1),_0x55918a['addColorStop'](0x1,_0xc22be1),_0x159550[_0x922a4c(0xfd)]=_0x55918a,_0x159550[_0x922a4c(0x503)](),_0x159550[_0x922a4c(0x23f)](_0xc59947,_0xc59947),_0x159550[_0x922a4c(0x2cf)](length,_0xc59947),_0x159550[_0x922a4c(0x23c)](_0xc59947,_0xc59947,_0xc59947,0x0,_0x3422f8),_0x159550[_0x922a4c(0x2cf)](_0xc59947,_0xc59947),_0x159550[_0x922a4c(0x1ef)](),_0x159550[_0x922a4c(0x21c)](),this[_0x922a4c(0x225)][_0x922a4c(0x329)]();},TextManager[_0x5da319(0x3a8)]=VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x2fb)][_0x5da319(0x408)][_0x5da319(0x4eb)],ColorManager[_0x5da319(0x1e8)]=[_0x5da319(0x258),'#222222','#333333',_0x5da319(0x417)],ColorManager[_0x5da319(0x361)]=['#a8c54a',_0x5da319(0x40b),_0x5da319(0x538),'#fbec65',_0x5da319(0x199),'#e6654c','#c5302e','#c5302e',_0x5da319(0x4a4)],ColorManager[_0x5da319(0x129)]=[_0x5da319(0x3ee),_0x5da319(0x1a7),_0x5da319(0x159),_0x5da319(0x392)],ColorManager[_0x5da319(0x44a)]=['#cceaf6',_0x5da319(0x478),_0x5da319(0x1b6),_0x5da319(0x299)],ColorManager[_0x5da319(0x564)]=[_0x5da319(0x48f),'#ebebeb',_0x5da319(0x331)],ColorManager['WEATHER_DANDELION1_COLORS']=[_0x5da319(0x334),_0x5da319(0x27c),_0x5da319(0xf7),'#b4a8b1'],ColorManager[_0x5da319(0x36b)]=[_0x5da319(0x29c),_0x5da319(0x317),_0x5da319(0x180)],ColorManager['WEATHER_DANDELION3_COLORS']=[_0x5da319(0x48f),_0x5da319(0x128),_0x5da319(0x331),_0x5da319(0x2a5),'#fff2e4'],ColorManager['WEATHER_DARKNESS_COLORS']=[_0x5da319(0x1dd),_0x5da319(0x544),'#440000','#004400'],ColorManager[_0x5da319(0x1d1)]=[_0x5da319(0x2a7),'#a67c52','#8c6239',_0x5da319(0x231),_0x5da319(0x4d1)],ColorManager[_0x5da319(0x34f)]=[_0x5da319(0x3dc),_0x5da319(0xe6),'#fdc689','#fbaf5d',_0x5da319(0x2c7)],ColorManager['WEATHER_FLAME_COLORS']=['#ed1c24','#f26522',_0x5da319(0x296),_0x5da319(0x559),'#f68e56','#f26c4f'],ColorManager[_0x5da319(0x579)]=[_0x5da319(0x2b5),_0x5da319(0x23e),_0x5da319(0x15b),'#bbc9f9',_0x5da319(0x3ad),_0x5da319(0x1a2)],ColorManager[_0x5da319(0x191)]=[_0x5da319(0x48f),_0x5da319(0x4ce),_0x5da319(0x442),_0x5da319(0x540)],ColorManager['WEATHER_LIGHTNING_COLORS']=['#ffddff',_0x5da319(0x43d),_0x5da319(0x2e4)],ColorManager[_0x5da319(0x397)]=['#7accc8',_0x5da319(0x255),_0x5da319(0x4a6),'#8393ca'],ColorManager[_0x5da319(0x54f)]=[_0x5da319(0x24e),'#92d450',_0x5da319(0x506),_0x5da319(0x528),_0x5da319(0x371),'#3d8b43'],ColorManager['WEATHER_PASTEL_COLORS']=[_0x5da319(0x3b2),_0x5da319(0x459),_0x5da319(0x344),_0x5da319(0x548),_0x5da319(0x3d8),_0x5da319(0x504),'#aaffff',_0x5da319(0x3fd),'#aaaaff',_0x5da319(0x319),_0x5da319(0x31e),'#ffaacc',_0x5da319(0x48f)],ColorManager[_0x5da319(0xe7)]=[_0x5da319(0x378),'#fff799',_0x5da319(0x130),_0x5da319(0x515),'#efcba2',_0x5da319(0x236),_0x5da319(0xe6),_0x5da319(0xe6),'#fff568',_0x5da319(0x134),_0x5da319(0x134),_0x5da319(0x134)],ColorManager[_0x5da319(0x11c)]=[_0x5da319(0x48f),'#ff0000',_0x5da319(0x245),_0x5da319(0x105),_0x5da319(0x19d),_0x5da319(0x1d0),_0x5da319(0x345),_0x5da319(0x4fe),_0x5da319(0x552),'#00ff00',_0x5da319(0x19d)],ColorManager[_0x5da319(0xf0)]=[_0x5da319(0x105),'#acff3b',_0x5da319(0x53d),_0x5da319(0x3b4),'#13ffee'],ColorManager[_0x5da319(0x56d)]=[_0x5da319(0x139),'#f49ac1','#f5989d','#faacab',_0x5da319(0x3bc)],ColorManager[_0x5da319(0x3b5)]=['#fddbe2',_0x5da319(0x3d0),'#fdedd9'],ColorManager['WEATHER_SAKURA3_COLORS']=[_0x5da319(0x43f),_0x5da319(0x278),_0x5da319(0x561)],ColorManager[_0x5da319(0x395)]=['#ffffff',_0x5da319(0x2cc),'#fcf3de',_0x5da319(0x1c4)],ColorManager[_0x5da319(0x3ba)]=[_0x5da319(0x211),_0x5da319(0x19a),_0x5da319(0xf2),'#aa00ff'],ColorManager[_0x5da319(0x1cb)]=ColorManager[_0x5da319(0x579)][_0x5da319(0x24c)](),ColorManager[_0x5da319(0x306)]=ColorManager[_0x5da319(0x361)]['clone'](),ColorManager[_0x5da319(0x490)]=ColorManager[_0x5da319(0x247)][_0x5da319(0x2ba)](ColorManager[_0x5da319(0x11c)]),ColorManager['WEATHER_CONFETTI_COLORS']=ColorManager[_0x5da319(0x247)][_0x5da319(0x24c)](),ColorManager['WEATHER_GRASSY_GUST_COLORS']=ColorManager[_0x5da319(0x54f)][_0x5da319(0x24c)](),ColorManager[_0x5da319(0x140)]=ColorManager['WEATHER_NATURE_GREEN_COLORS'][_0x5da319(0x24c)](),ColorManager[_0x5da319(0x4ed)]=ColorManager['WEATHER_MOONLIGHT_COLORS'][_0x5da319(0x24c)](),ColorManager['WEATHER_PASTEL_BRUME_COLORS']=ColorManager['WEATHER_PASTEL_COLORS'][_0x5da319(0x24c)](),ColorManager[_0x5da319(0x49a)]=ColorManager[_0x5da319(0x11c)][_0x5da319(0x24c)](),ColorManager[_0x5da319(0x462)]=ColorManager['WEATHER_PASTEL_COLORS']['clone'](),ColorManager[_0x5da319(0x33a)]=ColorManager[_0x5da319(0x11c)][_0x5da319(0x24c)](),ColorManager['WEATHER_STAR_COLORS']=ColorManager[_0x5da319(0x247)][_0x5da319(0x24c)](),ColorManager['WEATHER_RADIOACTIVE_COLORS']=ColorManager[_0x5da319(0xf0)]['clone'](),ColorManager[_0x5da319(0xea)]=ColorManager[_0x5da319(0x428)][_0x5da319(0x24c)](),ColorManager[_0x5da319(0x10c)]=ColorManager[_0x5da319(0x247)][_0x5da319(0x24c)](),ColorManager[_0x5da319(0x447)]=ColorManager[_0x5da319(0x395)][_0x5da319(0x24c)](),ColorManager[_0x5da319(0x2b6)]=ColorManager[_0x5da319(0x3ba)]['clone'](),ColorManager[_0x5da319(0x260)]=function(_0x1b8ff7,_0x3d03aa){const _0xd60f1e=_0x5da319;let _0x2d8a77='';if(/^#([A-Fa-f0-9]{3}){1,2}$/['test'](_0x1b8ff7)){if(_0xd60f1e(0x4be)!==_0xd60f1e(0x291)){_0x2d8a77=_0x1b8ff7[_0xd60f1e(0x44b)](0x1)[_0xd60f1e(0x44c)]('');if(_0x2d8a77['length']===0x3){if(_0xd60f1e(0x357)!==_0xd60f1e(0x357)){const _0x3c1886=_0x3afbb7[_0xd60f1e(0x17f)](_0x16e173-_0x126cb7)+_0xa35f40,_0x71950f=_0x55bf6d[_0xd60f1e(0x17f)](_0x34bc14-_0x514745)+_0x5c95e7;_0x47ae63[_0xd60f1e(0x222)]=_0x194623[_0xd60f1e(0x17f)](0x40)+0xc0,_0x1d640f['gradientFillRect'](_0x3c1886,_0x71950f,_0x4d0cdb['ceil'](_0x2fe1ca),_0x5e05cd,_0x9a1036,_0x36cade),_0xa9f2a[_0xd60f1e(0x2b2)](_0x3c1886+_0x26b3f5[_0xd60f1e(0x340)](_0x4f674f),_0x71950f,_0x45c0ed[_0xd60f1e(0x441)](_0x5331a2),_0x43b7ab,_0x4aa209);}else _0x2d8a77=[_0x2d8a77[0x0],_0x2d8a77[0x0],_0x2d8a77[0x1],_0x2d8a77[0x1],_0x2d8a77[0x2],_0x2d8a77[0x2]];}while(_0x2d8a77[_0xd60f1e(0x2e9)]>0x6)_0x2d8a77[_0xd60f1e(0x46b)]();return _0x2d8a77='0x'+_0x2d8a77['join'](''),_0xd60f1e(0x4a7)+[(_0x2d8a77>>0x10&0xff)[_0xd60f1e(0x485)](0x0,0xff),(_0x2d8a77>>0x8&0xff)[_0xd60f1e(0x485)](0x0,0xff),(_0x2d8a77&0xff)[_0xd60f1e(0x485)](0x0,0xff)][_0xd60f1e(0x4d0)](',')+','+_0x3d03aa[_0xd60f1e(0x485)](0x0,0x1)+')';}else{const _0x54827d=this[_0xd60f1e(0x513)];return _0x54827d[_0x921dad[_0xd60f1e(0x441)](_0x4d63fa['random']()*_0x54827d[_0xd60f1e(0x2e9)])];}}else{if(_0xd60f1e(0x127)===_0xd60f1e(0x17a))_0x4af0b0['ConvertParams'](_0x298a62,_0x18d12b),_0x491c10[_0xd60f1e(0x297)]=_0xd60f1e(0x580),_0x5771b3[_0xd60f1e(0x3a2)]['applyPluginCmdSettings'](_0x283350);else return _0xd60f1e(0x239);}},ColorManager[_0x5da319(0x213)]=function(_0x3f7425){const _0x4e94fe=_0x5da319;let _0x1697fd='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x4e94fe(0x413)](_0x3f7425)){if(_0x4e94fe(0x541)!==_0x4e94fe(0x2a1)){_0x1697fd=_0x3f7425[_0x4e94fe(0x44b)](0x1)['split']('');_0x1697fd[_0x4e94fe(0x2e9)]===0x3&&(_0x1697fd=[_0x1697fd[0x0],_0x1697fd[0x0],_0x1697fd[0x1],_0x1697fd[0x1],_0x1697fd[0x2],_0x1697fd[0x2]]);while(_0x1697fd['length']>0x6)_0x1697fd[_0x4e94fe(0x46b)]();return _0x1697fd='0x'+_0x1697fd[_0x4e94fe(0x4d0)](''),[(_0x1697fd>>0x10&0xff)[_0x4e94fe(0x485)](0x0,0xff),(_0x1697fd>>0x8&0xff)[_0x4e94fe(0x485)](0x0,0xff),(_0x1697fd&0xff)[_0x4e94fe(0x485)](0x0,0xff)];}else{if(this[_0x4e94fe(0x4c1)]&&this['_cached_WeatherEffects_Snow'][_0x4e94fe(0x2e9)]>=_0x49a3c2[_0x4e94fe(0x302)]){const _0x6d054b=this[_0x4e94fe(0x4c1)];return _0x6d054b[_0x1c8d46[_0x4e94fe(0x441)](_0x56f9b0['random']()*_0x6d054b[_0x4e94fe(0x2e9)])];}const _0x51e502=new _0x295c5a(0x1f4,0x1f4),_0x3f812f=_0x51e502['width'],_0x38831b=_0x51e502['height'],_0x2db022=0x5;let _0x299680=0x10;while(_0x299680--){const _0x55ad83=_0x11358d['randomInt'](_0x3f812f-_0x2db022*0x2)+_0x2db022,_0x3b2fe1=_0x15f122[_0x4e94fe(0x17f)](_0x38831b-_0x2db022*0x2)+_0x2db022,_0x458e71=_0x32998a['randomInt'](_0x2db022)+0x1;_0x51e502[_0x4e94fe(0x222)]=_0x102148[_0x4e94fe(0x17f)](0x40)+0xc0,_0x51e502[_0x4e94fe(0x44f)](_0x55ad83,_0x3b2fe1,_0x458e71,'white');}_0x51e502['_customModified']=![];if(_0x4e2195['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x2070c5[_0x4e94fe(0x47b)](_0x4e94fe(0x448));return this[_0x4e94fe(0x4c1)]=this['_cached_WeatherEffects_Snow']||[],this['_cached_WeatherEffects_Snow']['push'](_0x51e502),_0x51e502;}}else return _0x4e94fe(0x342)!==_0x4e94fe(0x48c)?[0x0,0x0,0x0]:this[_0x4e94fe(0x3b7)];},ColorManager['arrayToHex']=function(_0x380e0b){const _0x3d4d67=_0x5da319;while(_0x380e0b[_0x3d4d67(0x2e9)]<0x3)_0x380e0b[_0x3d4d67(0x28e)](0x0);while(_0x380e0b[_0x3d4d67(0x2e9)]>0x3)_0x380e0b['pop']();return'#'+_0x380e0b['map'](_0x17d055=>_0x17d055['clamp'](0x0,0xff)[_0x3d4d67(0x405)](0x10)[_0x3d4d67(0x314)](0x2))['join']('');},ColorManager['adjustHexColor']=function(_0x157688,_0x3d546f){const _0x1b89a9=_0x5da319,_0x207c92=this[_0x1b89a9(0x213)](_0x157688)['map'](_0x53932f=>Math[_0x1b89a9(0x340)]((Number(_0x53932f)||0x0)*_0x3d546f)[_0x1b89a9(0x485)](0x0,0xff));return this[_0x1b89a9(0x56a)](_0x207c92);},SceneManager[_0x5da319(0x1ce)]=function(){const _0x4b6478=_0x5da319;return this[_0x4b6478(0x2d0)]&&this[_0x4b6478(0x2d0)][_0x4b6478(0x20c)]===Scene_Battle;},SceneManager[_0x5da319(0x338)]=function(){const _0x5497f1=_0x5da319;return this[_0x5497f1(0x2d0)]&&this['_scene']instanceof Scene_Map;},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x4b5)]=Game_Screen['prototype'][_0x5da319(0x11b)],Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x11b)]=function(){const _0x42e0d6=_0x5da319;VisuMZ['WeatherEffects']['Game_Screen_clearWeather'][_0x42e0d6(0x481)](this),this[_0x42e0d6(0x25e)]();},Game_Screen[_0x5da319(0x2c2)]['weatherType']=function(){const _0x4bef67=_0x5da319;if($gameMap&&$gameMap[_0x4bef67(0x4ef)]())return'none';return this[_0x4bef67(0x3db)](0x1)[_0x4bef67(0x297)]||'none';},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x4c9)]=function(){const _0x10f330=_0x5da319;if($gameMap&&$gameMap[_0x10f330(0x4ef)]())return 0x0;return this[_0x10f330(0x3db)](0x1)[_0x10f330(0x482)]||0x0;},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x360)]=function(_0x35120a,_0x552167,_0x4ac4b5){const _0x325526=_0x5da319,_0x4ebb04=this[_0x325526(0x3db)](0x1,![])[_0x325526(0x482)],_0x23751c=VisuMZ[_0x325526(0x3a2)][_0x325526(0x107)]();if(!_0x23751c)return;_0x23751c[_0x325526(0x297)]=_0x35120a,_0x23751c[_0x325526(0x482)]=_0x4ebb04,_0x23751c[_0x325526(0x39d)]=_0x35120a===_0x325526(0x575)?0x0:_0x552167['clamp'](0x1,0x9),_0x23751c[_0x325526(0x539)]=_0x4ac4b5,_0x4ac4b5<=0x0&&(_0x325526(0x574)==='RzxtR'?_0x23751c['power']=_0x23751c['powerTarget']:(_0x446af3[_0x325526(0x556)](_0x1da003,_0x5257e1),_0x564276[_0x325526(0x297)]=_0x325526(0x15c),_0x4ed59c[_0x325526(0x3a2)][_0x325526(0x3d1)](_0x394ea0))),VisuMZ['WeatherEffects'][_0x325526(0x571)](_0x23751c),this['setWeatherLayerData'](0x1,![],_0x23751c);},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x347)]=function(){const _0x3efb6f=_0x5da319;if(this[_0x3efb6f(0x534)]===undefined)this['clearWeatherLayers']();for(let _0x2d3adc=0x1;_0x2d3adc<=Weather[_0x3efb6f(0x26c)];_0x2d3adc++){this[_0x3efb6f(0x508)](_0x2d3adc,!![]),this['updateWeatherLayer'](_0x2d3adc,![]);}},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x25e)]=function(){const _0x1db668=_0x5da319;this[_0x1db668(0x534)]={'lower':[],'upper':[]};while(this[_0x1db668(0x534)][_0x1db668(0x444)][_0x1db668(0x2e9)]<Weather['MAX_LAYERS']){_0x1db668(0x47d)!==_0x1db668(0x150)?this[_0x1db668(0x534)][_0x1db668(0x444)][_0x1db668(0x28e)](VisuMZ[_0x1db668(0x3a2)][_0x1db668(0x107)]()):_0x306a4e['wait'](_0x1d72e6[_0x1db668(0x539)]||0x1);}while(this[_0x1db668(0x534)][_0x1db668(0x585)][_0x1db668(0x2e9)]<Weather['MAX_LAYERS']){if(_0x1db668(0x221)!==_0x1db668(0x221)){const _0x5c0ff5=_0x5f18b8[_0x1db668(0x3a2)][_0x1db668(0x2f1)](_0x8e8714);this['ax']+=this[_0x1db668(0x335)]*_0x3166e8[_0x1db668(0x233)](_0x5c0ff5),this['ay']-=this[_0x1db668(0x335)]*_0x583e7d[_0x1db668(0x3ca)](_0x5c0ff5);}else this[_0x1db668(0x534)]['upper'][_0x1db668(0x28e)](VisuMZ['WeatherEffects'][_0x1db668(0x107)]());}},Game_Screen[_0x5da319(0x2c2)]['clearWeatherLayerData']=function(_0x242c07,_0x40ffcf,_0x3d3a6e){const _0x153707=_0x5da319;if(this[_0x153707(0x534)]===undefined)this[_0x153707(0x25e)]();const _0x32a9ba=this['getWeatherLayerData'](_0x242c07,_0x40ffcf),_0x49be4a=_0x242c07[_0x153707(0x485)](0x1,Weather['MAX_LAYERS'])-0x1,_0x2de1f3=_0x40ffcf?_0x153707(0x444):_0x153707(0x585);_0x3d3a6e=_0x3d3a6e||0x0;const _0x352f0d=_0x32a9ba[_0x153707(0x482)],_0x5b80fa=VisuMZ[_0x153707(0x3a2)][_0x153707(0x107)]();_0x5b80fa[_0x153707(0x482)]=_0x352f0d,_0x5b80fa['duration']=_0x3d3a6e,this[_0x153707(0x534)][_0x2de1f3][_0x49be4a]=_0x5b80fa;},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x4fb)]=function(_0x3bd2b6,_0x1d4a46,_0x4b58d5,_0xd81006){const _0xddb30e=_0x5da319,_0x4b70ea=this['getWeatherLayerData'](_0x3bd2b6,_0x1d4a46);_0x4b70ea[_0xddb30e(0x539)]=_0xd81006||0x1,_0x4b70ea[_0xddb30e(0x39d)]=(_0x4b70ea[_0xddb30e(0x39d)]+_0x4b58d5)[_0xddb30e(0x485)](0x1,0x9);},Game_Screen['prototype'][_0x5da319(0x22a)]=function(_0x35dce6,_0x498643){const _0x51c521=_0x5da319,_0x561463=this['getWeatherLayerData'](_0x35dce6,_0x498643),_0x1c1829=_0x498643?_0x51c521(0x444):'upper';this[_0x51c521(0x577)]=this['_memorizedWeatherData']||{'lower':[],'upper':[]},this['_memorizedWeatherData'][_0x1c1829][_0x35dce6]=JSON[_0x51c521(0x290)](JSON['stringify'](_0x561463));},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x135)]=function(_0x5f51ce,_0x52b26c,_0x28e049){const _0x2ce109=_0x5da319,_0x3f872d=_0x52b26c?_0x2ce109(0x444):_0x2ce109(0x585);this[_0x2ce109(0x577)]=this['_memorizedWeatherData']||{'lower':[],'upper':[]};const _0x4e1390=this[_0x2ce109(0x577)][_0x3f872d][_0x5f51ce]||VisuMZ[_0x2ce109(0x3a2)][_0x2ce109(0x107)]();_0x4e1390[_0x2ce109(0x539)]=_0x28e049,_0x4e1390[_0x2ce109(0x39d)]=_0x4e1390[_0x2ce109(0x482)],_0x4e1390[_0x2ce109(0x482)]=this['getWeatherLayerData'](_0x5f51ce,_0x52b26c)['power'],this[_0x2ce109(0x489)](_0x5f51ce,_0x52b26c,_0x4e1390);},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x3db)]=function(_0x5a472c,_0x27f260){const _0x151336=_0x5da319;if(this[_0x151336(0x534)]===undefined)this[_0x151336(0x25e)]();const _0x36977c=_0x5a472c['clamp'](0x1,Weather[_0x151336(0x26c)])-0x1,_0x3fdf12=_0x27f260?_0x151336(0x444):_0x151336(0x585);if(!this[_0x151336(0x534)][_0x3fdf12][_0x36977c]){if(_0x151336(0x550)!==_0x151336(0x550)){if(this[_0x151336(0x534)]===_0x393ec2)this[_0x151336(0x25e)]();for(let _0x55a196=0x1;_0x55a196<=_0xb13744['MAX_LAYERS'];_0x55a196++){this['updateWeatherLayer'](_0x55a196,!![]),this[_0x151336(0x508)](_0x55a196,![]);}}else this[_0x151336(0x534)][_0x3fdf12][_0x36977c]=VisuMZ[_0x151336(0x3a2)]['newLayer']();}return this[_0x151336(0x534)][_0x3fdf12][_0x36977c];},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x489)]=function(_0x3036c7,_0xfc844c,_0x378ebe){const _0x6ccb6=_0x5da319;if(this[_0x6ccb6(0x534)]===undefined)this[_0x6ccb6(0x25e)]();const _0x283a4b=_0x3036c7['clamp'](0x1,Weather[_0x6ccb6(0x26c)])-0x1,_0x4d6a61=_0xfc844c?_0x6ccb6(0x444):_0x6ccb6(0x585);this['_weatherLayers'][_0x4d6a61][_0x283a4b]=JSON[_0x6ccb6(0x290)](JSON[_0x6ccb6(0x45a)](_0x378ebe));},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x45d)]=function(_0x3496bc,_0x3aa328,_0x43e3fd){const _0x18c044=_0x5da319;if(this[_0x18c044(0x534)]===undefined)this[_0x18c044(0x25e)]();const _0x222970=this['getWeatherLayerData'](_0x3496bc,_0x3aa328),_0x30ffb0=_0x3496bc['clamp'](0x1,Weather[_0x18c044(0x26c)])-0x1,_0x1cb6e5=_0x3aa328?_0x18c044(0x444):_0x18c044(0x585);_0x43e3fd[_0x18c044(0x482)]=_0x222970[_0x18c044(0x482)],this[_0x18c044(0x534)][_0x1cb6e5][_0x30ffb0]=_0x43e3fd;},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x508)]=function(_0x399c7a,_0x4b1714){const _0x3e571e=_0x5da319,_0xd07c80=this['getWeatherLayerData'](_0x399c7a,_0x4b1714);if(!_0xd07c80)return;_0xd07c80[_0x3e571e(0x539)]>0x0&&(this[_0x3e571e(0x35a)](_0xd07c80),this[_0x3e571e(0x176)](_0xd07c80));},Game_Screen['prototype'][_0x5da319(0x35a)]=function(_0x121ebc){const _0x528e3a=_0x5da319,_0x2ed249=_0x121ebc[_0x528e3a(0x539)],_0x5d2903=_0x121ebc['powerTarget'];_0x121ebc[_0x528e3a(0x482)]=(_0x121ebc[_0x528e3a(0x482)]*(_0x2ed249-0x1)+_0x5d2903)/_0x2ed249;},Game_Screen[_0x5da319(0x2c2)][_0x5da319(0x176)]=function(_0x2f6150){const _0x1c7a82=_0x5da319;_0x2f6150['duration']--;if(_0x2f6150['duration']===0x0&&_0x2f6150[_0x1c7a82(0x39d)]===0x0){if(_0x1c7a82(0x4d5)!==_0x1c7a82(0x4d5)){const _0x5f2e4a=this[_0x1c7a82(0x2af)];return _0x5f2e4a[_0x5637da['floor'](_0x283607[_0x1c7a82(0x398)]()*_0x5f2e4a[_0x1c7a82(0x2e9)])];}else _0x2f6150[_0x1c7a82(0x297)]=_0x1c7a82(0x575);}},VisuMZ[_0x5da319(0x3a2)]['Game_Map_setup']=Game_Map[_0x5da319(0x2c2)][_0x5da319(0x155)],Game_Map[_0x5da319(0x2c2)][_0x5da319(0x155)]=function(_0x488fb7){const _0x22be2a=_0x5da319;VisuMZ[_0x22be2a(0x3a2)][_0x22be2a(0x359)][_0x22be2a(0x481)](this,_0x488fb7),this[_0x22be2a(0x34a)]();},Game_Map['prototype'][_0x5da319(0x34a)]=function(){const _0x34ca73=_0x5da319;if(!$dataMap)return;if(!SceneManager['isSceneMap']())return;this[_0x34ca73(0x39b)]=![];const _0x3c4596=VisuMZ['WeatherEffects'][_0x34ca73(0x4c2)],_0x23d6b2=$dataMap[_0x34ca73(0x102)]||'';_0x23d6b2['match'](_0x3c4596['NoWeather'])&&(this[_0x34ca73(0x39b)]=!![]);},Game_Map[_0x5da319(0x2c2)][_0x5da319(0x4ef)]=function(){const _0x1111bd=_0x5da319;if(this[_0x1111bd(0x39b)]===undefined)this[_0x1111bd(0x34a)]();return this['_noWeather'];},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x422)]=Scene_Options[_0x5da319(0x2c2)][_0x5da319(0xeb)],Scene_Options['prototype'][_0x5da319(0xeb)]=function(){const _0x585bf6=_0x5da319;let _0xcee621=VisuMZ[_0x585bf6(0x3a2)][_0x585bf6(0x422)][_0x585bf6(0x481)](this);const _0x3c3070=VisuMZ[_0x585bf6(0x3a2)][_0x585bf6(0x2fb)][_0x585bf6(0x408)];if(_0x3c3070[_0x585bf6(0x2a9)]&&_0x3c3070[_0x585bf6(0x3c6)])_0xcee621++;return _0xcee621;};function _0x52ec(_0x204487,_0x52627a){const _0x751b8e=_0x751b();return _0x52ec=function(_0x52ec55,_0x6c4724){_0x52ec55=_0x52ec55-0xe3;let _0x5677e9=_0x751b8e[_0x52ec55];return _0x5677e9;},_0x52ec(_0x204487,_0x52627a);}function Sprite_WeatherParticle(){const _0x450b1c=_0x5da319;this[_0x450b1c(0x1cf)](...arguments);}Sprite_WeatherParticle[_0x5da319(0x2c2)]=Object[_0x5da319(0x20a)](Sprite[_0x5da319(0x2c2)]),Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x20c)]=Sprite_WeatherParticle,Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x1cf)]=function(_0x293cc8,_0x52f1d4){const _0x8e36ae=_0x5da319;this[_0x8e36ae(0x50e)]=_0x293cc8,this[_0x8e36ae(0x308)]=_0x52f1d4,Sprite[_0x8e36ae(0x2c2)]['initialize'][_0x8e36ae(0x481)](this,this[_0x8e36ae(0x50e)][_0x8e36ae(0x339)]),this[_0x8e36ae(0x4fc)](),this['rebornSprite']();},Sprite_WeatherParticle['prototype']['initMembers']=function(){const _0x27371a=_0x5da319;this[_0x27371a(0x51a)]=0x0,this[_0x27371a(0x370)]['x']=0.5,this[_0x27371a(0x370)]['y']=0.5,this[_0x27371a(0x1d8)]=0x0;},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x309)]=function(){const _0x4cf082=_0x5da319;return this[_0x4cf082(0x50e)][_0x4cf082(0x309)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x23d)]=function(){const _0x434615=_0x5da319;if(!this['parent'])return-0x1;return this[_0x434615(0x471)][_0x434615(0x189)][_0x434615(0x148)](this);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x2e0)]=function(){const _0xde997e=_0x5da319;this[_0xde997e(0x2d6)](),this[_0xde997e(0x19f)](),this['rebornActions']();},Sprite_WeatherParticle[_0x5da319(0x2c2)]['rebornNewData']=function(){const _0x521fbb=_0x5da319;this['type']=this[_0x521fbb(0x309)]()['type'];if(this[_0x521fbb(0x297)]==='none')return;this[_0x521fbb(0x475)](),this[_0x521fbb(0x3d5)](),this[_0x521fbb(0x38b)](),this[_0x521fbb(0x4b2)](),this['rebornInitialOpacity'](),this[_0x521fbb(0x1de)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x475)]=function(){const _0x5d13ef=_0x5da319;this[_0x5d13ef(0xf3)]=this[_0x5d13ef(0x309)]()[_0x5d13ef(0x526)][_0x5d13ef(0x2e7)];const _0x1db5ca=this['data']()['sprite'][_0x5d13ef(0x578)],_0x3408cc=VisuMZ[_0x5d13ef(0x3a2)][_0x5d13ef(0x3e7)](_0x1db5ca);this['_lifespan']=Math[_0x5d13ef(0x52f)](0x1,Math[_0x5d13ef(0x340)](this['_lifespan']+_0x3408cc)),this[_0x5d13ef(0x55d)]=this['_lifespan'];if(this['_lastType']!==this[_0x5d13ef(0x297)]){if('kGrcX'===_0x5d13ef(0x465))this[_0x5d13ef(0x1ea)]=this[_0x5d13ef(0x297)],this[_0x5d13ef(0xf3)]=Math[_0x5d13ef(0x17f)](this[_0x5d13ef(0xf3)])+0x1;else{if(this['_cached_WeatherEffects_SunBeam']&&_0x133050['WEATHER_SUNBEAM_COLORS'][_0x5d13ef(0x2e9)]<=0x0){const _0x3a3794=this[_0x5d13ef(0x476)];return _0x3a3794[_0x2c3bdf[_0x5d13ef(0x441)](_0x3d0c06['random']()*_0x3a3794[_0x5d13ef(0x2e9)])];}const _0x3a17f9=_0x36d654[_0x5d13ef(0x447)]['pop'](),_0x25e668=new _0x83a3ec(0x3e8,0x3e8),_0x2b8a87=_0x25e668[_0x5d13ef(0x16e)]/0x2;return _0x25e668['drawPolyArc'](_0x2b8a87,_0x2b8a87,_0x2b8a87,0x168,_0x3a17f9,0x0,0x1,0x0),_0x25e668['_customModified']=![],this['_cached_WeatherEffects_SunBeam']=this[_0x5d13ef(0x476)]||[],this[_0x5d13ef(0x476)]['push'](_0x25e668),_0x25e668;}}},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x3d5)]=function(){const _0x48e7df=_0x5da319;this[_0x48e7df(0x2a0)]=JSON[_0x48e7df(0x290)](JSON[_0x48e7df(0x45a)](this['data']()[_0x48e7df(0x1ac)])),this[_0x48e7df(0x404)]=Math[_0x48e7df(0x17f)](0xf4240),this['_flatFlutterRngX']=Math['randomInt'](0xf4240),this[_0x48e7df(0x35b)]=Math[_0x48e7df(0x17f)](0xf4240),this[_0x48e7df(0x45e)]=Math[_0x48e7df(0x398)]()*0.05+0.005,this[_0x48e7df(0x4cb)]=Math[_0x48e7df(0x398)]()*0.05+0.005,this[_0x48e7df(0x42e)]=Math[_0x48e7df(0x398)]()<0.5;},Sprite_WeatherParticle['prototype'][_0x5da319(0x38b)]=function(){const _0xfd36fa=_0x5da319;this[_0xfd36fa(0x2ee)]=this[_0xfd36fa(0x309)]()[_0xfd36fa(0x526)]['scale']??0x1;const _0x57167e=this['data']()['sprite'][_0xfd36fa(0x354)]??0x0;this[_0xfd36fa(0x2ee)]+=VisuMZ[_0xfd36fa(0x3a2)][_0xfd36fa(0x355)](_0x57167e),this[_0xfd36fa(0x527)]=this[_0xfd36fa(0x309)]()['sprite'][_0xfd36fa(0x1c7)]??0x1,this[_0xfd36fa(0x156)]=this[_0xfd36fa(0x309)]()[_0xfd36fa(0x526)][_0xfd36fa(0x457)]??0x1,this[_0xfd36fa(0x215)]=this['data']()[_0xfd36fa(0x1ac)][_0xfd36fa(0x517)]??0x1,this['scale']['x']=this[_0xfd36fa(0x2ee)]*this[_0xfd36fa(0x527)]*this['_scaleInOutRatio'],this[_0xfd36fa(0x38d)]['y']=this[_0xfd36fa(0x2ee)]*this['_scaleRatioY']*this[_0xfd36fa(0x215)];},Sprite_WeatherParticle[_0x5da319(0x2c2)]['rebornSpawnLocation']=function(){const _0x4ec081=_0x5da319,_0x4de17f=0xc8;let _0x1c0899=this[_0x4ec081(0x309)]()[_0x4ec081(0x526)][_0x4ec081(0x4ae)]||_0x4ec081(0x398);_0x1c0899=_0x1c0899[_0x4ec081(0x349)](/sides/i,Math[_0x4ec081(0x398)]()<0.5?_0x4ec081(0x275):_0x4ec081(0x37b));let _0x7d9ee=0x0;switch(_0x1c0899['toLowerCase']()[_0x4ec081(0x2d2)]()){case _0x4ec081(0x398):this['ax']=Math[_0x4ec081(0x17f)](Graphics[_0x4ec081(0x16e)]+_0x4de17f*0x2)-_0x4de17f;break;case'left\x20border':this['ax']=0x0;break;case _0x4ec081(0x4cc):case _0x4ec081(0x2ea):case'left\x2030%':case'left\x2040%':case _0x4ec081(0x2f6):case'left\x2060%':case _0x4ec081(0x507):case'left\x2080%':case _0x4ec081(0x4c5):if(_0x1c0899['match'](/(\d+)([%％])/i)){if(_0x4ec081(0x35e)===_0x4ec081(0x35e)){const _0x51cb20=Number(RegExp['$1'])*0.01;_0x7d9ee+=Math[_0x4ec081(0x441)](Graphics['width']*_0x51cb20);}else _0x2328dd[_0x4ec081(0x556)](_0x2b89bf,_0x22f963),_0x79357c[_0x4ec081(0x297)]=_0x4ec081(0x20d),_0x48f327['WeatherEffects'][_0x4ec081(0x3d1)](_0x26ecd3);}this['ax']=0x0+Math[_0x4ec081(0x17f)](_0x7d9ee)-Math[_0x4ec081(0x17f)](_0x4de17f);break;case _0x4ec081(0x37a):this['ax']=Graphics[_0x4ec081(0x16e)];break;case _0x4ec081(0x279):case _0x4ec081(0x169):case _0x4ec081(0x26a):case _0x4ec081(0x4c4):case _0x4ec081(0xf9):case _0x4ec081(0x2de):case _0x4ec081(0x4db):case _0x4ec081(0x32a):case'right\x2090%':if(_0x1c0899[_0x4ec081(0x491)](/(\d+)([%％])/i)){const _0x45ed0d=Number(RegExp['$1'])*0.01;_0x7d9ee+=Math[_0x4ec081(0x441)](Graphics[_0x4ec081(0x16e)]*_0x45ed0d);}this['ax']=Graphics[_0x4ec081(0x16e)]-Math[_0x4ec081(0x17f)](_0x7d9ee)+Math[_0x4ec081(0x17f)](_0x4de17f);break;case _0x4ec081(0x195):case _0x4ec081(0x195):case _0x4ec081(0x3df):case'center\x2030%':case _0x4ec081(0x2cd):case _0x4ec081(0x40d):case _0x4ec081(0x450):case _0x4ec081(0x305):case _0x4ec081(0x1d9):case _0x4ec081(0x174):if(_0x1c0899['match'](/(\d+)([%％])/i)){if(_0x4ec081(0x57f)===_0x4ec081(0x57f)){const _0x4776da=Number(RegExp['$1'])*0.01;_0x7d9ee+=Math[_0x4ec081(0x441)](Graphics[_0x4ec081(0x16e)]*_0x4776da);}else{const _0x57ca43=this['data']()[_0x4ec081(0x33f)][_0x4ec081(0x301)];this['blendMode']=_0x57ca43;}}this['ax']=Graphics['width']/0x2+Math[_0x4ec081(0x17f)](_0x7d9ee)+Math[_0x4ec081(0x17f)](_0x7d9ee)-_0x7d9ee;break;default:this['ax']=Graphics[_0x4ec081(0x16e)]/0x2;break;}let _0x3e553d=this['data']()[_0x4ec081(0x526)][_0x4ec081(0x3b0)]||_0x4ec081(0x398);_0x3e553d=_0x3e553d[_0x4ec081(0x349)](/either/i,Math[_0x4ec081(0x398)]()<0.5?_0x4ec081(0x585):'lower');let _0x24654a=0x0;switch(_0x3e553d['toLowerCase']()[_0x4ec081(0x2d2)]()){case'random':this['ay']=Math[_0x4ec081(0x17f)](Graphics['height']+_0x4de17f*0x2)-_0x4de17f;break;case _0x4ec081(0xff):this['ay']=0x0;break;case _0x4ec081(0x16d):case _0x4ec081(0x2b4):case _0x4ec081(0x1e3):case _0x4ec081(0x3d2):case _0x4ec081(0x31a):case _0x4ec081(0x350):case _0x4ec081(0xf4):case _0x4ec081(0x1f0):case _0x4ec081(0x1fa):if(_0x3e553d[_0x4ec081(0x491)](/(\d+)([%％])/i)){const _0x42ad7a=Number(RegExp['$1'])*0.01;_0x24654a+=Math[_0x4ec081(0x441)](Graphics[_0x4ec081(0x42b)]*_0x42ad7a);}this['ay']=0x0+Math[_0x4ec081(0x17f)](_0x24654a)-Math['randomInt'](_0x4de17f);break;case _0x4ec081(0x3f2):this['ay']=Graphics[_0x4ec081(0x42b)];break;case _0x4ec081(0x39f):case _0x4ec081(0x3f8):case _0x4ec081(0x2bb):case _0x4ec081(0x551):case _0x4ec081(0x14f):case _0x4ec081(0x181):case _0x4ec081(0x1bb):case _0x4ec081(0x28a):case _0x4ec081(0x4bc):if(_0x3e553d[_0x4ec081(0x491)](/(\d+)([%％])/i)){if(_0x4ec081(0x32c)===_0x4ec081(0x4f3)){if(this[_0x4ec081(0x21a)]&&this[_0x4ec081(0x21a)][_0x4ec081(0x2e9)]>=_0xce1d91[_0x4ec081(0x302)]){const _0x10ed6e=this[_0x4ec081(0x21a)];return _0x10ed6e[_0xd5fcb3['floor'](_0x56a2eb[_0x4ec081(0x398)]()*_0x10ed6e['length'])];}const _0x12945f=new _0x671930(0x258,0xc8),_0x878b88=_0x12945f[_0x4ec081(0x16e)],_0x2faafd=_0x12945f[_0x4ec081(0x42b)],_0x63b02d=0x40;let _0x364fa9=0x40;while(_0x364fa9--){const _0x415c55=_0x3109f1[_0x4ec081(0x17f)](_0x878b88-_0x63b02d*0x2)+_0x63b02d,_0x51b118=_0x4a287a[_0x4ec081(0x17f)](_0x2faafd-_0x63b02d*0x2)+_0x63b02d,_0x42cbd6=_0x1c32b9[_0x4ec081(0x17f)](_0x63b02d/0x2)+0x2,_0x253211=_0x32b9da['arrayToHex']([0xff,_0x821a3c[_0x4ec081(0x17f)](0x46),0x0]);_0x12945f[_0x4ec081(0x222)]=_0x35c7cd['randomInt'](0x40),_0x12945f[_0x4ec081(0x44f)](_0x415c55,_0x51b118,_0x42cbd6,_0x253211),_0x12945f[_0x4ec081(0x222)]=_0x46cf8e[_0x4ec081(0x17f)](0x40)+0x40,_0x12945f[_0x4ec081(0x44f)](_0x415c55,_0x51b118,_0x42cbd6/0x2,_0x253211),_0x12945f['paintOpacity']=_0x5276f8[_0x4ec081(0x17f)](0x40)+0xc0;const _0xed2bbc=_0x28cd77[_0x4ec081(0x56a)]([0xff,_0x928950['randomInt'](0x46)+0xb9,0x0]);_0x12945f[_0x4ec081(0x44f)](_0x415c55,_0x51b118,_0x42cbd6/0x4,_0xed2bbc),_0x12945f['drawCircle'](_0x415c55,_0x51b118,_0x42cbd6/0x8,_0x4ec081(0x29b)),_0x12945f[_0x4ec081(0x44f)](_0x415c55,_0x51b118,_0x42cbd6/0xa,'white');}_0x12945f[_0x4ec081(0x182)]=![];if(_0x3ffa49[_0x4ec081(0x24b)])_0x4f4150[_0x4ec081(0x47b)](_0x4ec081(0x572));return this['_cached_WeatherEffects_FlameWall']=this[_0x4ec081(0x21a)]||[],this['_cached_WeatherEffects_FlameWall']['push'](_0x12945f),_0x12945f;}else{const _0x15810b=Number(RegExp['$1'])*0.01;_0x24654a+=Math[_0x4ec081(0x441)](Graphics[_0x4ec081(0x42b)]*_0x15810b);}}this['ay']=Graphics['height']-Math[_0x4ec081(0x17f)](_0x24654a)+Math[_0x4ec081(0x17f)](_0x4de17f);break;case _0x4ec081(0x208):case _0x4ec081(0x208):case _0x4ec081(0x51c):case'middle\x2030%':case'middle\x2040%':case _0x4ec081(0x49b):case _0x4ec081(0x13c):case'middle\x2070%':case _0x4ec081(0x2b1):case _0x4ec081(0x542):if(_0x3e553d[_0x4ec081(0x491)](/(\d+)([%％])/i)){if('zeFXX'===_0x4ec081(0x4de))_0x3e9536[_0x4ec081(0x2cf)](_0x3df486[_0x4d8f6f]['x'],_0x1f841b[_0x58e2bd]['y']);else{const _0x46657c=Number(RegExp['$1'])*0.01;_0x24654a+=Math['floor'](Graphics[_0x4ec081(0x42b)]*_0x46657c);}}this['ay']=Graphics[_0x4ec081(0x42b)]/0x2+Math[_0x4ec081(0x17f)](_0x24654a)+Math[_0x4ec081(0x17f)](_0x24654a)-_0x24654a;break;default:this['ay']=Graphics[_0x4ec081(0x42b)]/0x2;break;}this['ax']+=this[_0x4ec081(0x309)]()[_0x4ec081(0x526)][_0x4ec081(0x17d)]||0x0,this['ay']+=this[_0x4ec081(0x309)]()['sprite'][_0x4ec081(0x1a6)]||0x0,this[_0x4ec081(0x201)]=this[_0x4ec081(0x309)]()[_0x4ec081(0x526)]['mapBound'],this[_0x4ec081(0x201)]&&(this['ax']+=this['_weatherParent'][_0x4ec081(0x3a7)]['x'],this['ay']+=this[_0x4ec081(0x50e)][_0x4ec081(0x3a7)]['y']);},Sprite_WeatherParticle['prototype'][_0x5da319(0x2f0)]=function(){const _0x32d6c5=_0x5da319;this[_0x32d6c5(0x51a)]=this[_0x32d6c5(0x309)]()[_0x32d6c5(0x526)][_0x32d6c5(0x51a)];const _0x12fe2d=this[_0x32d6c5(0x309)]()[_0x32d6c5(0x526)][_0x32d6c5(0x351)],_0x14ed73=VisuMZ['WeatherEffects'][_0x32d6c5(0x3e7)](_0x12fe2d);this[_0x32d6c5(0x51a)]=(this[_0x32d6c5(0x51a)]+_0x14ed73)['clamp'](0x0,0xff),this[_0x32d6c5(0x4ba)]=this[_0x32d6c5(0x51a)],this[_0x32d6c5(0x385)]=this[_0x32d6c5(0x309)]()['sprite']['opacityEasingType']||'Linear',this[_0x32d6c5(0x271)]=this[_0x32d6c5(0x309)]()['sprite'][_0x32d6c5(0x2dd)]||0x0,this['_opacityFadeInTimeWhole']=this[_0x32d6c5(0x309)]()['sprite'][_0x32d6c5(0x2dd)]||0x0;},Sprite_WeatherParticle['prototype'][_0x5da319(0x1de)]=function(){const _0x2c826=_0x5da319;this[_0x2c826(0x501)]=this['data']()[_0x2c826(0x3ab)][_0x2c826(0x297)]||_0x2c826(0x241),this[_0x2c826(0x2aa)]=this[_0x2c826(0x309)]()['trajectory']['lockedID']||0x0,this[_0x2c826(0xfa)]=this['data']()[_0x2c826(0x3ab)]['lockedOffsetX']||0x0,this[_0x2c826(0x1a1)]=this['data']()[_0x2c826(0x3ab)]['lockedOffsetY']||0x0,this['_speed']=this['data']()[_0x2c826(0x3ab)][_0x2c826(0x277)],this[_0x2c826(0x335)]+=VisuMZ[_0x2c826(0x3a2)]['MakeFloatVariance'](this['data']()[_0x2c826(0x3ab)][_0x2c826(0x3be)]);if(this[_0x2c826(0x309)]()[_0x2c826(0x3ab)]['speedVariance']!==0x0){if(_0x2c826(0x562)===_0x2c826(0x562)){if(this[_0x2c826(0x335)]===0x0)this[_0x2c826(0x335)]=Math[_0x2c826(0x398)]();}else _0x45adf7[_0x2c826(0x556)](_0x436d12,_0x55ad8a),_0x388db2['type']=_0x2c826(0x267),_0x2fb9ec[_0x2c826(0x3a2)]['applyPluginCmdSettings'](_0x19079b);}this[_0x2c826(0x4ac)]=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)][_0x2c826(0x265)];const _0x263e5f=this['data']()[_0x2c826(0x3ab)][_0x2c826(0x426)],_0x484904=VisuMZ[_0x2c826(0x3a2)]['MakeVariance'](_0x263e5f);this[_0x2c826(0x4ac)]=Math[_0x2c826(0x340)](this[_0x2c826(0x4ac)]+_0x484904),this['_angleOffset']=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)][_0x2c826(0x17c)],this[_0x2c826(0x2d9)]=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)][_0x2c826(0x1e4)]??!![],this[_0x2c826(0x439)]=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)][_0x2c826(0x474)]??0x0,this[_0x2c826(0x1ed)]=0x0,this[_0x2c826(0x51f)]=Math[_0x2c826(0x17f)](0xf4240),this[_0x2c826(0xe4)]=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)]['angleSwayRange'],this[_0x2c826(0x3a6)]=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)][_0x2c826(0x200)],this[_0x2c826(0x327)]=0x0,this[_0x2c826(0x582)]=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)][_0x2c826(0x3c2)]||0x0;this['_spinSpeed']!==0x0&&(this[_0x2c826(0x327)]=Math['randomInt'](0x168));this['_spinSpeed']+=VisuMZ[_0x2c826(0x3a2)][_0x2c826(0x3e7)](this[_0x2c826(0x309)]()['trajectory']['spinSpeedVariance']||0x0);if(this['data']()[_0x2c826(0x3ab)][_0x2c826(0x43e)]){if(Math[_0x2c826(0x398)]()<0.5)this['_spinSpeed']*=-0x1;}this[_0x2c826(0x3a9)]=Math['randomInt'](0xf4240),this[_0x2c826(0x4e1)]=Math['randomInt'](0xf4240),this[_0x2c826(0x49d)]=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)]['xSwayRange'],this[_0x2c826(0x1c0)]=this['data']()[_0x2c826(0x3ab)][_0x2c826(0x1ae)],this['_ySwayRange']=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)][_0x2c826(0x25a)],this[_0x2c826(0xec)]=this[_0x2c826(0x309)]()[_0x2c826(0x3ab)][_0x2c826(0x34b)];},Sprite_WeatherParticle['prototype'][_0x5da319(0x19f)]=function(){const _0x56265a=_0x5da319;this[_0x56265a(0xf5)](),this['rebornSpriteBlendMode'](),this[_0x56265a(0x3cb)](),this['rebornSpriteTone'](),this['removeUnusedColorFilter']();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0xf5)]=function(){const _0x235c1f=_0x5da319,_0x4d252b=this[_0x235c1f(0x300)]();this[_0x235c1f(0x3d4)](_0x4d252b);},Sprite_WeatherParticle[_0x5da319(0x2c2)]['randomizeBitmapType']=function(){const _0x126e40=_0x5da319,_0x10777c=this[_0x126e40(0x309)]();let _0x1d3d17=[],_0x20b1b2=0x0;_0x10777c[_0x126e40(0x33f)][_0x126e40(0x2b0)]&&(_0x1d3d17[_0x126e40(0x28e)](_0x126e40(0x2b0)),_0x20b1b2+=_0x10777c['image']['generatedWeight']||0x1);_0x10777c['image'][_0x126e40(0x205)][_0x126e40(0x2e9)]>0x0&&(_0x1d3d17['push'](_0x126e40(0x205)),_0x20b1b2+=_0x10777c['image'][_0x126e40(0xee)]||0x1);if(_0x10777c[_0x126e40(0x33f)][_0x126e40(0x4f0)][_0x126e40(0x2e9)]>0x0){if(_0x126e40(0x30a)==='HriTT'){if(this[_0x126e40(0x192)]&&this[_0x126e40(0x192)][_0x126e40(0x2e9)]>=_0x36746e['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0xea3f61=this['_cached_WeatherEffects_HouseDust'];return _0xea3f61[_0x43e7ed['floor'](_0x35c9b6[_0x126e40(0x398)]()*_0xea3f61[_0x126e40(0x2e9)])];}const _0x28ef8f=new _0x1f69ad(0x1f4,0x1f4),_0x137f3d=_0x28ef8f[_0x126e40(0x16e)],_0x49d475=_0x28ef8f[_0x126e40(0x42b)],_0x4a896c=_0x2200db[_0x126e40(0x564)][_0x126e40(0x24c)](),_0x1e72c8=1.5,_0x6bb7d7=0x1;let _0x4f19a2=0x20;while(_0x4f19a2--){const _0x59e6b4=_0x48c84e[_0x126e40(0x17f)](_0x137f3d-_0x6bb7d7*0x2)+_0x6bb7d7,_0x33e424=_0x317e01['randomInt'](_0x49d475-_0x6bb7d7*0x2)+_0x6bb7d7;let _0x46b5d4=_0x4a896c[_0x111d32[_0x126e40(0x441)](_0x15b799[_0x126e40(0x398)]()*_0x4a896c['length'])];_0x46b5d4=_0x167974['adjustHexColor'](_0x46b5d4,_0x1e72c8);const _0x3b10ab=_0x3c9989['randomInt'](_0x6bb7d7)+0x1;_0x28ef8f[_0x126e40(0x222)]=_0x4f6318['randomInt'](0x40)+0xa0,_0x28ef8f['drawCircle'](_0x59e6b4,_0x33e424,_0x3b10ab,_0x46b5d4);}_0x28ef8f[_0x126e40(0x182)]=![];if(_0xf9c3f6['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0xa37a2a[_0x126e40(0x47b)](_0x126e40(0x149));return this['_cached_WeatherEffects_HouseDust']=this[_0x126e40(0x192)]||[],this[_0x126e40(0x192)]['push'](_0x28ef8f),_0x28ef8f;}else _0x1d3d17['push'](_0x126e40(0x4f0)),_0x20b1b2+=_0x10777c[_0x126e40(0x33f)]['picturesWeight']||0x1;}let _0x45ac55=Math[_0x126e40(0x398)]()*_0x20b1b2;for(const _0x54bf32 of _0x1d3d17){if(_0x126e40(0x24d)!==_0x126e40(0x4e3)){_0x45ac55-=_0x10777c[_0x126e40(0x33f)][_0x126e40(0x29e)[_0x126e40(0x555)](_0x54bf32)]||0x0;if(_0x45ac55<=0x0)return _0x54bf32;}else{if(this['_cached_WeatherEffects_RainbowOrbs']&&_0x247e2b[_0x126e40(0x33a)]['length']<=0x0){const _0x48195f=this['_cached_WeatherEffects_RainbowOrbs'];return _0x48195f[_0x4b2a43[_0x126e40(0x441)](_0x15ac18['random']()*_0x48195f[_0x126e40(0x2e9)])];}const _0x9cd869=_0xb078cf[_0x126e40(0x33a)][_0x126e40(0x46b)](),_0x2fa0f0=0x20,_0x2a8710=new _0x3f16a4(_0x2fa0f0,_0x2fa0f0),_0xde58fb=_0x3bd3e6[_0x126e40(0x441)](_0x2fa0f0/0x2);_0x2a8710[_0x126e40(0x2c4)](_0xde58fb,_0xde58fb,_0xde58fb,0x168,_0x9cd869,0x0,0x1,0x0),_0x2a8710[_0x126e40(0x2b2)](_0xde58fb-0x1,_0xde58fb-0x1,0x2,0x2,_0x9cd869),_0x2a8710[_0x126e40(0x182)]=![];if(_0x4e23aa[_0x126e40(0x24b)])_0x23e8ae[_0x126e40(0x47b)]('rainboworbs');return this[_0x126e40(0x4e8)]=this['_cached_WeatherEffects_RainbowOrbs']||[],this['_cached_WeatherEffects_RainbowOrbs'][_0x126e40(0x28e)](_0x2a8710),_0x2a8710;}}return _0x126e40(0x2b0);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x3d4)]=function(_0x573ec3){const _0x4742a0=_0x5da319;this[_0x4742a0(0x4ec)]=!![];if(_0x573ec3==='generated')this[_0x4742a0(0x1c8)]();else{if(_0x573ec3===_0x4742a0(0x205))this[_0x4742a0(0x2ec)]();else _0x573ec3==='pictures'&&this[_0x4742a0(0x4bd)]();}},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x1c8)]=function(){const _0x2d1856=_0x5da319,_0x2da6ac=this[_0x2d1856(0x309)]()['type']['toLowerCase']()[_0x2d1856(0x2d2)]();this['bitmap']=ImageManager['getGeneratedWeatherParticle'](_0x2da6ac),this[_0x2d1856(0x391)]['addLoadListener'](this['setFullBitmapFrame'][_0x2d1856(0x3cc)](this));},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x4a0)]=function(){const _0x417619=_0x5da319;this[_0x417619(0x4ec)]=![];const _0x391c72=this[_0x417619(0x391)][_0x417619(0x16e)],_0x5b0a89=this[_0x417619(0x391)][_0x417619(0x42b)];this[_0x417619(0x42d)](0x0,0x0,_0x391c72,_0x5b0a89);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x2ec)]=function(){const _0x4d08e5=_0x5da319;this[_0x4d08e5(0x391)]=ImageManager[_0x4d08e5(0x46c)](),this[_0x4d08e5(0x391)]['addLoadListener'](this[_0x4d08e5(0x1ab)][_0x4d08e5(0x3cc)](this));},Sprite_WeatherParticle['prototype'][_0x5da319(0x1ab)]=function(){const _0x6fabc9=_0x5da319;this[_0x6fabc9(0x4ec)]=![];const _0x12adf2=this['data']()['image'][_0x6fabc9(0x205)],_0x41b009=_0x12adf2[Math[_0x6fabc9(0x441)](Math[_0x6fabc9(0x398)]()*_0x12adf2[_0x6fabc9(0x2e9)])],_0x45c703=ImageManager[_0x6fabc9(0x322)],_0x5410c0=ImageManager[_0x6fabc9(0x55f)],_0x48dee6=_0x41b009%0x10*_0x45c703,_0x3b360a=Math[_0x6fabc9(0x441)](_0x41b009/0x10)*_0x5410c0;this[_0x6fabc9(0x42d)](_0x48dee6,_0x3b360a,_0x45c703,_0x5410c0);},Sprite_WeatherParticle['prototype'][_0x5da319(0x4bd)]=function(){const _0x2ada2b=_0x5da319,_0x5c62e9=this[_0x2ada2b(0x309)]()['image'][_0x2ada2b(0x4f0)],_0x5ca198=_0x5c62e9[Math['floor'](Math['random']()*_0x5c62e9[_0x2ada2b(0x2e9)])];this[_0x2ada2b(0x391)]=ImageManager['loadPicture'](_0x5ca198),this[_0x2ada2b(0x391)]['addLoadListener'](this['setFullBitmapFrame'][_0x2ada2b(0x3cc)](this));},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x4b0)]=function(){const _0x808a07=_0x5da319,_0xbfaee4=this['data']()[_0x808a07(0x33f)]['blendMode'];this[_0x808a07(0x301)]=_0xbfaee4;},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x3cb)]=function(){const _0x11724a=_0x5da319,_0x28f8af=this[_0x11724a(0x309)]()[_0x11724a(0x33f)]['hueVariations']||[];if(_0x28f8af[_0x11724a(0x2e9)]<=0x0)_0x28f8af[_0x11724a(0x28e)](0x0);this[_0x11724a(0x1b0)]=_0x28f8af[Math[_0x11724a(0x441)](Math[_0x11724a(0x398)]()*_0x28f8af[_0x11724a(0x2e9)])],this[_0x11724a(0x276)](this[_0x11724a(0x1b0)]);},Sprite_WeatherParticle['prototype'][_0x5da319(0x379)]=function(){const _0x7d86ed=_0x5da319,_0x45d3f2=this[_0x7d86ed(0x309)]()['image'][_0x7d86ed(0x326)]||[];if(_0x45d3f2[_0x7d86ed(0x2e9)]<=0x0)_0x45d3f2[_0x7d86ed(0x28e)]([0x0,0x0,0x0,0x0]);this[_0x7d86ed(0x1f7)]=_0x45d3f2[Math[_0x7d86ed(0x441)](Math[_0x7d86ed(0x398)]()*_0x45d3f2[_0x7d86ed(0x2e9)])]['clone'](),this[_0x7d86ed(0x11d)](this[_0x7d86ed(0x1f7)]);},Sprite_WeatherParticle['prototype'][_0x5da319(0x28c)]=function(){const _0x4bf7df=_0x5da319;if(!this[_0x4bf7df(0x29f)])return;if(!this[_0x4bf7df(0x4b8)])return;if(this['_hue']!==0x0)return;if(!this[_0x4bf7df(0x3f1)]['equals']([0x0,0x0,0x0,0x0]))return;this['filters']['remove'](this[_0x4bf7df(0x4b8)]),delete this[_0x4bf7df(0x4b8)];},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x108)]=function(){const _0x19bea8=_0x5da319;this[_0x19bea8(0x358)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x358)]=function(){const _0x5d98f3=_0x5da319;if(!this[_0x5d98f3(0x2a0)])return;if(!this[_0x5d98f3(0x2a0)][_0x5d98f3(0x1b2)])return;const _0x35de4e=this['_flags'][_0x5d98f3(0x1b2)]||0x0;SceneManager['_scene'][_0x5d98f3(0x469)](_0x35de4e);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x329)]=function(){const _0x42ba57=_0x5da319;Sprite[_0x42ba57(0x2c2)][_0x42ba57(0x329)][_0x42ba57(0x481)](this);if(this[_0x42ba57(0x297)]===_0x42ba57(0x575))return;if(this['_notLoadedReady'])return;if(this[_0x42ba57(0x1d8)]>0x0)return this[_0x42ba57(0x271)]=0x0,this['opacity']=0x0,this['_respawnDelay']--;this[_0x42ba57(0x286)](),this[_0x42ba57(0x2ca)](),this['updateScale'](),this[_0x42ba57(0x492)](),this[_0x42ba57(0x386)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x286)]=function(){const _0x4a58b7=_0x5da319;if(this[_0x4a58b7(0xf3)]<=0x0)return this[_0x4a58b7(0x2e0)]();if(this[_0x4a58b7(0x24a)]()){this[_0x4a58b7(0xf3)]=this['_wholeLifespan'];return;}this[_0x4a58b7(0xf3)]--;if(this[_0x4a58b7(0xf3)]<=0x0&&this[_0x4a58b7(0x2a0)]){if(this['_flags']['fireworksFinish']&&this['type']!==_0x4a58b7(0x242)){if(_0x4a58b7(0x3b8)!==_0x4a58b7(0x3b8)){if(this[_0x4a58b7(0x535)]===_0xf1ed33)this['createNewWeatherSprites']();if(this[_0x4a58b7(0x48b)]===_0x343973)this['createNewWeatherSprites']();_0x25b57a=(_0xef855d||0x1)[_0x4a58b7(0x485)](0x1,_0x19aec5[_0x4a58b7(0x26c)]);const _0x5f402a=_0x22281c-0x1;return _0x12685f?this[_0x4a58b7(0x535)][_0x5f402a]:this[_0x4a58b7(0x48b)][_0x5f402a];}else return this[_0x4a58b7(0x2b3)]();}else{if(this[_0x4a58b7(0x2a0)]['sparkleFinish']&&this[_0x4a58b7(0x297)]!==_0x4a58b7(0x3c9))return this[_0x4a58b7(0x3d6)]();}this[_0x4a58b7(0x2a0)][_0x4a58b7(0x13f)]&&this[_0x4a58b7(0x553)]();}},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x24a)]=function(){const _0x4ed25b=_0x5da319;if(!this[_0x4ed25b(0x2a0)])return![];if(!this[_0x4ed25b(0x2a0)][_0x4ed25b(0x163)])return![];return this['type']===this[_0x4ed25b(0x309)]()[_0x4ed25b(0x297)];},Sprite_WeatherParticle['prototype'][_0x5da319(0x2b3)]=function(){const _0x487c0e=_0x5da319;this[_0x487c0e(0x297)]='fireworks',this[_0x487c0e(0xf3)]=Math[_0x487c0e(0x17f)](0x14)+0x50,this[_0x487c0e(0x55d)]=this[_0x487c0e(0xf3)],this[_0x487c0e(0x1ea)]=_0x487c0e(0x251),this[_0x487c0e(0x2a0)]={'scaleIn':0x0,'scaleInDuration':0x64,'scaleOut':0x2,'scaleOutDuration':0x64},this[_0x487c0e(0x527)]=0x1,this[_0x487c0e(0x156)]=0x1,this[_0x487c0e(0x215)]=0x0,this[_0x487c0e(0x51a)]=0xff,this['_realOpacity']=0xff,this[_0x487c0e(0x385)]=_0x487c0e(0x1b4),this[_0x487c0e(0x271)]=0xa,this[_0x487c0e(0x119)]=0xa,this[_0x487c0e(0x501)]=_0x487c0e(0x241),this[_0x487c0e(0x335)]=0.05,this[_0x487c0e(0x4ac)]=0x10e,this[_0x487c0e(0x138)]=Math[_0x487c0e(0x17f)](0x168),this[_0x487c0e(0x2d9)]=![],this[_0x487c0e(0x439)]=0x0,this[_0x487c0e(0x1ed)]=0x0,this['_angleSwayRange']=0x0,this['_spinAngle']=0x0,this[_0x487c0e(0x582)]=0x0,this[_0x487c0e(0x49d)]=0x0,this[_0x487c0e(0x10f)]=0x0,this[_0x487c0e(0x4ec)]=!![],this[_0x487c0e(0x391)]=ImageManager[_0x487c0e(0x204)](),this[_0x487c0e(0x391)]['addLoadListener'](this[_0x487c0e(0x4a0)][_0x487c0e(0x3cc)](this)),this['blendMode']=0x1,this['_colorTone']=[0x0,0x0,0x0,0x0];},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x3d6)]=function(){const _0x3b6bc6=_0x5da319;this[_0x3b6bc6(0x297)]=_0x3b6bc6(0x3c9),this[_0x3b6bc6(0xf3)]=Math[_0x3b6bc6(0x17f)](0x1e)+0x3c,this[_0x3b6bc6(0x55d)]=this[_0x3b6bc6(0xf3)],this[_0x3b6bc6(0x1ea)]='sparkle',this[_0x3b6bc6(0x2a0)]={},this[_0x3b6bc6(0x527)]=0x1,this[_0x3b6bc6(0x156)]=0x1,this['_scaleInOutRatio']=0x1,this[_0x3b6bc6(0x51a)]=0xff,this['_realOpacity']=0xff,this[_0x3b6bc6(0x385)]=_0x3b6bc6(0x38f),this[_0x3b6bc6(0x271)]=0x6,this[_0x3b6bc6(0x119)]=0x6,this[_0x3b6bc6(0x501)]='frozen',this[_0x3b6bc6(0x335)]=0x0,this['_baseAngle']=0x0,this['_angleOffset']=0x0,this[_0x3b6bc6(0x2d9)]=![],this[_0x3b6bc6(0x439)]=0x0,this[_0x3b6bc6(0x1ed)]=0x0,this[_0x3b6bc6(0xe4)]=0x0,this[_0x3b6bc6(0x327)]=0x0,this[_0x3b6bc6(0x582)]=Math[_0x3b6bc6(0x17f)](0x3)+0x2,this['_xSwayRange']=0x0,this['_ySwayRange']=0x0,this[_0x3b6bc6(0x4ec)]=!![],this['bitmap']=ImageManager[_0x3b6bc6(0x560)](),this[_0x3b6bc6(0x391)][_0x3b6bc6(0x55e)](this[_0x3b6bc6(0x4a0)]['bind'](this)),this[_0x3b6bc6(0x301)]=0x1,this[_0x3b6bc6(0x4bf)]=0x0,this[_0x3b6bc6(0x3f1)]=[0x0,0x0,0x0,0x0],this[_0x3b6bc6(0x28c)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x553)]=function(){const _0xf22be8=_0x5da319;this[_0xf22be8(0x1d8)]=this['_flags'][_0xf22be8(0x13f)];const _0x2dab1a=this['_flags'][_0xf22be8(0x1df)],_0x77247d=this['data']()[_0xf22be8(0x482)],_0x4d8fb3=Math[_0xf22be8(0x17f)](_0x2dab1a*_0x77247d);this[_0xf22be8(0x1d8)]+=_0x4d8fb3;},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x2ca)]=function(){const _0x4515eb=_0x5da319;if(this['_flags'][_0x4515eb(0x179)])this[_0x4515eb(0x4b4)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x4b4)]=function(){const _0x34c1e2=_0x5da319,_0x18b8bc=Graphics[_0x34c1e2(0x125)]+this[_0x34c1e2(0x404)],_0x1e8bb1=this[_0x34c1e2(0x2a0)][_0x34c1e2(0x511)],_0x4a660f=this['_flags'][_0x34c1e2(0x179)]/0x2,_0x46f9c1=this[_0x34c1e2(0x1b0)]+Math[_0x34c1e2(0x233)](_0x18b8bc*_0x1e8bb1)*_0x4a660f;this['setHue'](_0x46f9c1);},Sprite_WeatherParticle['prototype'][_0x5da319(0x323)]=function(){const _0x161513=_0x5da319;this[_0x161513(0x499)](),this[_0x161513(0x38d)]['x']=this[_0x161513(0x522)](),this['scale']['y']=this[_0x161513(0x36d)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x499)]=function(){const _0x370efc=_0x5da319;if(this[_0x370efc(0x2a0)][_0x370efc(0x4cf)]>this[_0x370efc(0xf3)]){const _0x2f0f36=this[_0x370efc(0xf3)],_0x536c35=this[_0x370efc(0x2a0)][_0x370efc(0x2d7)]??0x1;if(_0x2f0f36<=0x1){if(_0x370efc(0x3e1)===_0x370efc(0x145)){const _0x13dbf8=this[_0x370efc(0x401)];_0x13dbf8[_0x370efc(0x1d5)](),_0x13dbf8['globalCompositeOperation']=_0x370efc(0x103),_0x13dbf8[_0x370efc(0x503)](),_0x13dbf8[_0x370efc(0x23c)](_0x175684,_0x365d65,_0x558307,0x0,0x2*_0x326ba7['PI'],![]),_0x13dbf8['fill'](),_0x13dbf8[_0x370efc(0x21c)](),this[_0x370efc(0x225)][_0x370efc(0x329)]();}else this[_0x370efc(0x215)]=_0x536c35;}else _0x370efc(0x4a9)!==_0x370efc(0x104)?this['_scaleInOutRatio']=(this[_0x370efc(0x215)]*(_0x2f0f36-0x1)+_0x536c35)/_0x2f0f36:(_0x318815[_0x370efc(0x556)](_0x151121,_0x5ad7c3),_0x6e70b0['type']='fireworks',_0x5442af['WeatherEffects'][_0x370efc(0x3d1)](_0x40149e));}else{if(this[_0x370efc(0x2a0)]['scaleInDuration']>this[_0x370efc(0x55d)]-this[_0x370efc(0xf3)]){const _0x3525f2=this[_0x370efc(0x2a0)]['scaleInDuration']-(this[_0x370efc(0x55d)]-this[_0x370efc(0xf3)]),_0x15e5c7=0x1;if(_0x3525f2<=0x1)this[_0x370efc(0x215)]=_0x15e5c7;else{if(_0x370efc(0x253)===_0x370efc(0x253))this[_0x370efc(0x215)]=(this[_0x370efc(0x215)]*(_0x3525f2-0x1)+_0x15e5c7)/_0x3525f2;else{const _0x346455=this[_0x370efc(0x309)]();if(!_0x346455)return;this['type']=_0x346455['type'],this['power']=_0x346455[_0x370efc(0x482)],_0x2d0472&&_0x3faca4['isNoWeather']()&&(this[_0x370efc(0x482)]=0x0);}}}else _0x370efc(0x3d7)==='jPJxy'?this[_0x370efc(0x215)]=0x1:(_0x2e8aa2[_0x370efc(0x3a2)]['Window_Options_addGeneralOptions'][_0x370efc(0x481)](this),this[_0x370efc(0x1a4)]());}},Sprite_WeatherParticle['prototype']['calculateScaleX']=function(){const _0xbffdda=_0x5da319;let _0x4ea76b=this[_0xbffdda(0x2ee)];_0x4ea76b*=this[_0xbffdda(0x527)];if(this[_0xbffdda(0x2a0)]['flatFlutter']&&this[_0xbffdda(0x42e)]){if(_0xbffdda(0x2a4)===_0xbffdda(0x566))_0x54218e['ConvertParams'](_0x3c5e53,_0x55e9a6),_0x3a9e4d[_0xbffdda(0x297)]=_0xbffdda(0x14b),_0x22c611['WeatherEffects'][_0xbffdda(0x3d1)](_0x250d60);else{const _0x41377f=Graphics[_0xbffdda(0x125)]+this[_0xbffdda(0x1e7)];_0x4ea76b*=Math['cos'](_0x41377f*this[_0xbffdda(0x45e)]);}}return _0x4ea76b*=this[_0xbffdda(0x215)],_0x4ea76b;},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x36d)]=function(){const _0x44e898=_0x5da319;let _0x4f6060=this['_baseScale'];_0x4f6060*=this['_scaleRatioY'];if(this[_0x44e898(0x2a0)]['flatFlutter']&&!this[_0x44e898(0x42e)]){if(_0x44e898(0x488)!==_0x44e898(0x488))_0x42e080('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x44e898(0x555)](_0x48198e,_0x2f30b6,_0xe1c073)),_0xe0964e[_0x44e898(0x316)]();else{const _0x1d233f=Graphics[_0x44e898(0x125)]+this[_0x44e898(0x35b)];_0x4f6060*=Math[_0x44e898(0x233)](_0x1d233f*this[_0x44e898(0x4cb)]);}}return _0x4f6060*=this[_0x44e898(0x215)],_0x4f6060;},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x492)]=function(){const _0x365734=_0x5da319;this['updatePositionTrajectory'](),this[_0x365734(0x463)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x463)]=function(){const _0x2e466d=_0x5da319;this['x']=this['ax'],this['y']=this['ay'],this[_0x2e466d(0x201)]&&(this['x']-=this[_0x2e466d(0x50e)][_0x2e466d(0x3a7)]['x'],this['y']-=this['_weatherParent']['origin']['y']),this['x']=Math[_0x2e466d(0x340)](this['x']),this['y']=Math[_0x2e466d(0x340)](this['y']);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x386)]=function(){const _0x5459e0=_0x5da319;this[_0x5459e0(0x512)](),this[_0x5459e0(0x223)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x512)]=function(){const _0x2ff03e=_0x5da319;if(this[_0x2ff03e(0xf3)]<=0x0)return;if(this[_0x2ff03e(0x271)]>0x0&&this[_0x2ff03e(0xf3)]>this[_0x2ff03e(0x271)])return;if(this[_0x2ff03e(0x24a)]())return;const _0x38a982=this[_0x2ff03e(0x385)]||_0x2ff03e(0x2f5);this[_0x2ff03e(0x4ba)]=this[_0x2ff03e(0x375)](this['_realOpacity'],0x0,_0x38a982);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x375)]=function(_0x28491c,_0xa3f999,_0x280292){const _0x11615f=_0x5da319,_0x2ea139=this['_lifespan'],_0x325b28=this['_wholeLifespan'],_0x290948=this[_0x11615f(0x2ce)]((_0x325b28-_0x2ea139)/_0x325b28,_0x280292),_0x434eb6=this[_0x11615f(0x2ce)]((_0x325b28-_0x2ea139+0x1)/_0x325b28,_0x280292),_0x2c67df=(_0x28491c-_0xa3f999*_0x290948)/(0x1-_0x290948);return _0x2c67df+(_0xa3f999-_0x2c67df)*_0x434eb6;},Sprite_WeatherParticle[_0x5da319(0x2c2)]['calcEasing']=function(_0x241a5a,_0x4cc7b7){const _0x204de6=_0x5da319;return VisuMZ[_0x204de6(0x311)](_0x241a5a,_0x4cc7b7);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x1f9)]=function(){const _0x4ec60f=_0x5da319;let _0x1af532=0x1;if(!SceneManager[_0x4ec60f(0x1ce)]()){if(this[_0x4ec60f(0x2a0)][_0x4ec60f(0xf6)]&&!this[_0x4ec60f(0x50e)][_0x4ec60f(0x410)]){const _0x21b537=$gamePlayer[_0x4ec60f(0xe8)]()-this['x'],_0x58af57=$gamePlayer[_0x4ec60f(0x333)]()-this['y'],_0x34f283=Math[_0x4ec60f(0x1bc)](_0x21b537*_0x21b537+_0x58af57*_0x58af57),_0x5f37c0=0x5*$gameMap['tileWidth']();if(_0x34f283<=_0x5f37c0)_0x1af532*=0.15;}}if(this[_0x4ec60f(0x271)]>0x0){if(_0x4ec60f(0x2e5)!==_0x4ec60f(0x2e5)){if(this[_0x4ec60f(0xf1)]&&this[_0x4ec60f(0xf1)][_0x4ec60f(0x2e9)]>=_0x4ee023[_0x4ec60f(0x302)]*0x5){const _0x35e92d=this[_0x4ec60f(0xf1)];return _0x35e92d[_0x412cc0[_0x4ec60f(0x441)](_0x337343[_0x4ec60f(0x398)]()*_0x35e92d[_0x4ec60f(0x2e9)])];}const _0x2c7b95=_0x1f93ae[_0x4ec60f(0x17f)](0xc0)+0x40,_0x32cd90=_0x48463c[_0x4ec60f(0x17f)](0xc0)+0x40,_0x389984=_0x4e2a26[_0x4ec60f(0x17f)](0xc0)+0x40,_0xd3a561=_0x4ec60f(0x4d4)['format'](_0x2c7b95,_0x32cd90,_0x389984),_0xaff764=_0x4ec60f(0x31c)[_0x4ec60f(0x555)](_0x2c7b95,_0x32cd90,_0x389984),_0x23d6c6=new _0x113d22(0x1f4,0x1f4),_0x476a2f=_0x23d6c6[_0x4ec60f(0x16e)],_0x3e80c4=_0x23d6c6[_0x4ec60f(0x42b)],_0x183371=_0x4e0a2c[_0x4ec60f(0x17f)](0xf4240),_0x1e7e9d=_0x40eb90['random']()*0.03+0.02;for(let _0x12b55f=0x0;_0x12b55f<_0x3e80c4;_0x12b55f++){const _0x1610c9=(_0x12b55f+_0x183371)*_0x1e7e9d;let _0x450b59=_0x476a2f-_0x7f02e0[_0x4ec60f(0x441)](_0xdabbd1['cos'](_0x1610c9)*0xa)-0x28;const _0x557b1b=_0x12b55f;_0x23d6c6['paintOpacity']=(0x1-_0x3818eb[_0x4ec60f(0x3b9)](_0x12b55f-_0x3e80c4/0x2)/(_0x3e80c4/0x2))*0xc0,_0x23d6c6['gradientFillRect'](_0x450b59,_0x557b1b,_0x3fd598[_0x4ec60f(0x17f)](0x14)+0xa,0x1,_0xaff764,_0xd3a561);let _0x4be0f6=_0x24d408[_0x4ec60f(0x340)](_0x2076ae[_0x4ec60f(0x3ca)]((_0x12b55f+_0x183371)*_0x1e7e9d)*0x5)+0xa;_0x450b59-=_0x4be0f6,_0x23d6c6[_0x4ec60f(0x505)](_0x450b59,_0x557b1b,_0x4be0f6,0x1,_0xaff764,_0xaff764),_0x4be0f6=_0x4489e3[_0x4ec60f(0x340)](_0x4f64e[_0x4ec60f(0x233)]((_0x12b55f+_0x183371)*_0x1e7e9d)*0x3c)+0xa0,_0x450b59-=_0x4be0f6;const _0x6a7d50=_0x4a5278[_0x4ec60f(0x17f)](0x3c);_0x450b59+=_0x6a7d50,_0x23d6c6[_0x4ec60f(0x505)](_0x450b59,_0x557b1b,_0x4be0f6-_0x6a7d50,0x1,_0xd3a561,_0xaff764);}_0x23d6c6[_0x4ec60f(0x182)]=![];if(_0x4b9969[_0x4ec60f(0x24b)])_0x41e971[_0x4ec60f(0x47b)](_0x4ec60f(0x36a));return this[_0x4ec60f(0xf1)]=this[_0x4ec60f(0xf1)]||[],this[_0x4ec60f(0xf1)][_0x4ec60f(0x28e)](_0x23d6c6),_0x23d6c6;}else{const _0x825282=this[_0x4ec60f(0x119)]||0x1,_0x362210=this[_0x4ec60f(0x271)];_0x1af532*=(_0x825282-_0x362210)/_0x825282,this[_0x4ec60f(0x271)]--;}}return _0x1af532;},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x223)]=function(){const _0x2ef563=_0x5da319,_0xc8185e=this[_0x2ef563(0x1f9)]();this[_0x2ef563(0x51a)]=Math[_0x2ef563(0x31d)](this['_realOpacity']*_0xc8185e);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x18c)]=function(){const _0x19341e=_0x5da319,_0x29f9e6=this[_0x19341e(0x157)]();switch(this['_trajectoryType']){case _0x19341e(0x241):this[_0x19341e(0x500)](_0x29f9e6);break;case'frozen':this[_0x19341e(0x537)](_0x29f9e6);break;case'player':case _0x19341e(0x109):case _0x19341e(0x136):this[_0x19341e(0x2e3)](_0x29f9e6);break;case'actor':case _0x19341e(0x18a):case _0x19341e(0x484):case _0x19341e(0x54c):this[_0x19341e(0xef)](_0x29f9e6);break;default:this[_0x19341e(0x185)]();break;}this[_0x19341e(0x16b)](),this[_0x19341e(0x26d)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x157)]=function(){const _0x3ce10a=_0x5da319;this[_0x3ce10a(0x1ed)]+=this[_0x3ce10a(0x439)];let _0x5e6c59=this[_0x3ce10a(0x4ac)]+this[_0x3ce10a(0x1ed)];const _0x4da137=Graphics[_0x3ce10a(0x125)]+this[_0x3ce10a(0x51f)];return _0x5e6c59+=Math[_0x3ce10a(0x233)](_0x4da137*this[_0x3ce10a(0x3a6)])*this['_angleSwayRange'],this['angle']=-((this['_alignAngle']?_0x5e6c59:0x0)+this[_0x3ce10a(0x138)]),_0x5e6c59;},Sprite_WeatherParticle['prototype']['updatePositionStraightTrajectory']=function(_0xad6911){const _0x2ba112=_0x5da319,_0x1386ee=VisuMZ[_0x2ba112(0x3a2)][_0x2ba112(0x2f1)](_0xad6911);this['ax']+=this[_0x2ba112(0x335)]*Math[_0x2ba112(0x233)](_0x1386ee),this['ay']-=this[_0x2ba112(0x335)]*Math[_0x2ba112(0x3ca)](_0x1386ee);},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x185)]=function(){const _0x2e9dd0=_0x5da319;this['ax']=Graphics[_0x2e9dd0(0x16e)]*0x64,this['ay']=Graphics[_0x2e9dd0(0x42b)]*0x64;},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x537)]=function(_0x467d55){},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x2e3)]=function(_0x3f0798){const _0x5c5102=_0x5da319;let _0x1e4455=null;if(!SceneManager[_0x5c5102(0x1ce)]()){if(_0x5c5102(0x4ee)!==_0x5c5102(0x4ee)){const _0x4a14df=this[_0x5c5102(0x476)];return _0x4a14df[_0x5f20a6['floor'](_0x25f817[_0x5c5102(0x398)]()*_0x4a14df['length'])];}else switch(this[_0x5c5102(0x501)]){case'player':_0x1e4455=$gamePlayer;break;case _0x5c5102(0x109):const _0x83c7c1=this['_trajectoryLockedID'];_0x1e4455=$gamePlayer[_0x5c5102(0x15a)]()[_0x5c5102(0x109)](_0x83c7c1);break;case'event':const _0x2c2c5e=this[_0x5c5102(0x2aa)];_0x1e4455=$gameMap[_0x5c5102(0x136)](_0x2c2c5e);break;}}if(_0x1e4455){if(_0x5c5102(0x458)!==_0x5c5102(0xfe)){this['ax']=_0x1e4455[_0x5c5102(0xe8)]()+this[_0x5c5102(0xfa)],this['ay']=_0x1e4455[_0x5c5102(0x333)]()+this[_0x5c5102(0x1a1)];return;}else{if(this[_0x5c5102(0x2a0)][_0x5c5102(0x179)])this[_0x5c5102(0x4b4)]();}}this[_0x5c5102(0x185)]();},Sprite_WeatherParticle['prototype'][_0x5da319(0xef)]=function(_0x1b91b7){const _0x44c999=_0x5da319;let _0x219ef0=null;if(SceneManager[_0x44c999(0x1ce)]()){if(_0x44c999(0x21f)===_0x44c999(0x26f)){if(this[_0x44c999(0x34d)]&&this[_0x44c999(0x34d)][_0x44c999(0x2e9)]>=_0x41f3a5[_0x44c999(0x302)]){const _0x4ab448=this[_0x44c999(0x34d)];return _0x4ab448[_0x42dfb7[_0x44c999(0x441)](_0x32aa64[_0x44c999(0x398)]()*_0x4ab448[_0x44c999(0x2e9)])];}const _0x51747b=_0x5977f0[_0x44c999(0x56d)],_0x16be24=_0x5b2a1d['WEATHER_SAKURA2_COLORS'],_0x3f73cb=_0x33734b['WEATHER_SAKURA3_COLORS'],_0x5323c9=_0x51747b[_0x49d362['floor'](_0x5ba7c2[_0x44c999(0x398)]()*_0x51747b['length'])],_0x3f5f02=_0x16be24[_0x207226[_0x44c999(0x441)](_0x4438e7['random']()*_0x16be24['length'])],_0x171cc7=_0x3f73cb[_0x3853a7[_0x44c999(0x441)](_0x4ef530[_0x44c999(0x398)]()*_0x3f73cb['length'])],_0x380d8b=new _0x4656ff(0x34,0x23);_0x380d8b[_0x44c999(0x2e2)](_0x5323c9,_0x3f5f02,_0x171cc7),_0x380d8b[_0x44c999(0x182)]=![];if(_0xee2165['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x4640d9['log'](_0x44c999(0x2d4));return this[_0x44c999(0x34d)]=this[_0x44c999(0x34d)]||[],this[_0x44c999(0x34d)]['push'](_0x380d8b),_0x380d8b;}else switch(this[_0x44c999(0x501)]){case'actor':const _0x4812cd=this[_0x44c999(0x2aa)];_0x219ef0=$gameActors[_0x44c999(0x1b3)](_0x4812cd);break;case _0x44c999(0x18a):const _0x118fea=this[_0x44c999(0x2aa)];_0x219ef0=$gameTroop[_0x44c999(0x1c1)]()[_0x118fea];break;case _0x44c999(0x484):_0x219ef0=BattleManager[_0x44c999(0x2db)];break;case _0x44c999(0x54c):_0x219ef0=BattleManager['_target'];!_0x219ef0&&BattleManager[_0x44c999(0x1d6)]&&(_0x44c999(0x3e6)==='zCnaL'?_0x219ef0=BattleManager[_0x44c999(0x1d6)][0x0]:(_0x33a584[_0x44c999(0x556)](_0x4da999,_0x143914),_0x241d9f[_0x44c999(0x297)]=_0x44c999(0x117),_0x1192aa[_0x44c999(0x3a2)][_0x44c999(0x3d1)](_0x13e484)));break;}}if(_0x219ef0){if(_0x44c999(0x453)!==_0x44c999(0x453))this[_0x44c999(0x50e)]=_0x378d31,this['_debugID']=_0x5d1602,_0x5290ac[_0x44c999(0x2c2)][_0x44c999(0x1cf)]['call'](this,this['_weatherParent'][_0x44c999(0x339)]),this[_0x44c999(0x4fc)](),this[_0x44c999(0x2e0)]();else{const _0x3aac24=SceneManager[_0x44c999(0x2d0)]['_spriteset'];if(_0x3aac24){if(_0x44c999(0x52e)!==_0x44c999(0x22b)){const _0x4e77cc=_0x3aac24['findTargetSprite'](_0x219ef0);if(_0x4e77cc){if('wizHi'===_0x44c999(0x2bf)){const _0x3d5769=new Point(_0x4e77cc['x'],_0x4e77cc['y']),_0x40b457=_0x4e77cc[_0x44c999(0x280)]['applyInverse'](_0x3d5769);this['ax']=_0x4e77cc['x']-_0x40b457['x']+this[_0x44c999(0xfa)],this['ay']=_0x4e77cc['y']-_0x40b457['y']+this[_0x44c999(0x1a1)];return;}else _0xf7c2f2['ConvertParams'](_0xd64530,_0x521748),_0x5d5720[_0x44c999(0x297)]=_0x44c999(0x440),_0x3cebac[_0x44c999(0x3a2)][_0x44c999(0x3d1)](_0x2d96cd);}}else _0x5b9a2a[_0x44c999(0x556)](_0x3047b8,_0x361d04),_0x58db4c[_0x44c999(0x297)]=_0x44c999(0x3fe),_0x212a0c['WeatherEffects'][_0x44c999(0x3d1)](_0x4dd76a);}}}this[_0x44c999(0x185)]();},Sprite_WeatherParticle[_0x5da319(0x2c2)]['updatePositionTrajectorySpin']=function(){const _0x224c97=_0x5da319;this[_0x224c97(0x327)]+=this[_0x224c97(0x582)],this[_0x224c97(0x265)]+=this['_spinAngle'];},Sprite_WeatherParticle[_0x5da319(0x2c2)][_0x5da319(0x26d)]=function(){const _0x424c3d=_0x5da319,_0x2a72c7=Graphics[_0x424c3d(0x125)]+this['_xSwayRng'],_0x4ff58e=Graphics[_0x424c3d(0x125)]+this['_ySwayRng'];this['ax']+=Math[_0x424c3d(0x233)](_0x2a72c7*this[_0x424c3d(0x1c0)])*this['_xSwayRange']/0x2,this['ay']+=Math[_0x424c3d(0x3ca)](_0x4ff58e*this[_0x424c3d(0xec)])*this['_ySwayRange']/0x2;},Spriteset_Base['prototype'][_0x5da319(0x310)]=function(){const _0x43c7d8=_0x5da319;if(this[_0x43c7d8(0x44e)]){if('rWsbl'!==_0x43c7d8(0x53a))this[_0x43c7d8(0x13b)]=this['_upperWeatherContainer'][_0x43c7d8(0x189)][0x0];else{const _0x4eb6a8=_0x458591['randomInt'](0x32)+0x64,_0x1fbc0c=_0x55bea0[_0x43c7d8(0x17f)](0x32)+0x15e,_0x5b98f4=_0x41c3f9[_0x43c7d8(0x17f)](0x1e0)+0xa,_0x4c5cef=(_0x1fbc0c-_0x4eb6a8)/0x2,_0x2050bc=_0x38d4b6[_0x43c7d8(0x17f)](0x6)+0xa,_0x163a62=_0x56ca57[_0x43c7d8(0x260)](_0x5437de,0x0),_0x2f3cf2=_0x1d5ef3[_0x43c7d8(0x260)](_0x3826f7,_0x4f1f3d['random']());_0x420997[_0x43c7d8(0x505)](_0x4eb6a8,_0x5b98f4,_0x1b5670[_0x43c7d8(0x441)](_0x4c5cef),_0x2050bc,_0x163a62,_0x2f3cf2),_0x1ff606[_0x43c7d8(0x505)](_0x4eb6a8+_0x22242a[_0x43c7d8(0x441)](_0x4c5cef),_0x5b98f4,_0x282c56[_0x43c7d8(0x340)](_0x4c5cef),_0x2050bc,_0x2f3cf2,_0x163a62);}}else _0x43c7d8(0x256)===_0x43c7d8(0x256)?(this[_0x43c7d8(0x13b)]=new Weather(),this[_0x43c7d8(0x4ca)](this[_0x43c7d8(0x13b)])):(_0xef86ae[_0x43c7d8(0x556)](_0x17c5c4,_0xee7966),_0x3f2930[_0x43c7d8(0x297)]=_0x43c7d8(0x399),_0x30e6cf[_0x43c7d8(0x3a2)][_0x43c7d8(0x3d1)](_0x459db3));},Spriteset_Base[_0x5da319(0x2c2)][_0x5da319(0x37c)]=function(_0x279d44,_0x4523ea){const _0x49352d=_0x5da319;if(!_0x279d44)return;const _0x4d3f45=Weather['MAX_LAYERS'];for(let _0x5015d2=0x1;_0x5015d2<=_0x4d3f45;_0x5015d2++){const _0x591882=VisuMZ['WeatherEffects']['getWeatherLayerSprite'](_0x5015d2,_0x4523ea);_0x279d44[_0x49352d(0x4ca)](_0x591882);}},Spriteset_Base['prototype'][_0x5da319(0x30c)]=function(){const _0x19af3a=_0x5da319;this[_0x19af3a(0x14e)]=new Sprite(),this[_0x19af3a(0x37c)](this[_0x19af3a(0x14e)],!![]),this[_0x19af3a(0x2a6)][_0x19af3a(0x4ca)](this['_lowerWeatherContainer']);},Spriteset_Base[_0x5da319(0x2c2)][_0x5da319(0x53f)]=function(){const _0x2214ba=_0x5da319;this[_0x2214ba(0x44e)]=new Sprite(),this['createNewWeatherLayers'](this[_0x2214ba(0x44e)],![]),this[_0x2214ba(0x4ca)](this[_0x2214ba(0x44e)]);},Spriteset_Base[_0x5da319(0x2c2)]['updateWeather']=function(){const _0x38ae94=_0x5da319;this[_0x38ae94(0x22f)](!![]),this[_0x38ae94(0x22f)](![]);},Spriteset_Base[_0x5da319(0x2c2)][_0x5da319(0x22f)]=function(_0x199634){const _0x5e2add=_0x5da319,_0x10810f=_0x199634?this['_lowerWeatherContainer']:this['_upperWeatherContainer'];if(!_0x10810f)return;for(const _0x21127d of _0x10810f[_0x5e2add(0x189)]){if('pbrVQ'!=='pbrVQ')_0x1392fa[_0x5e2add(0x556)](_0x5aed3d,_0x2ddc8c),_0x34f326[_0x5e2add(0x297)]=_0x5e2add(0x543),_0x462dde[_0x5e2add(0x3a2)][_0x5e2add(0x3d1)](_0x25dfd8);else{if(!_0x21127d)continue;_0x21127d[_0x5e2add(0x3c5)](),_0x21127d[_0x5e2add(0x492)]();}}},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x120)]=Spriteset_Map[_0x5da319(0x2c2)][_0x5da319(0x10d)],Spriteset_Map[_0x5da319(0x2c2)][_0x5da319(0x10d)]=function(){const _0x715dec=_0x5da319;this[_0x715dec(0x30c)](),VisuMZ[_0x715dec(0x3a2)][_0x715dec(0x120)][_0x715dec(0x481)](this),this[_0x715dec(0x53f)]();},Spriteset_Map['prototype'][_0x5da319(0x310)]=function(){const _0x2f3ea5=_0x5da319;Spriteset_Base[_0x2f3ea5(0x2c2)][_0x2f3ea5(0x310)]['call'](this);},Spriteset_Map['prototype'][_0x5da319(0x347)]=function(){const _0x2a2088=_0x5da319;Spriteset_Base[_0x2a2088(0x2c2)][_0x2a2088(0x347)][_0x2a2088(0x481)](this);},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x153)]=Spriteset_Battle['prototype'][_0x5da319(0x3d9)],Spriteset_Battle[_0x5da319(0x2c2)]['createBattleback']=function(){const _0x5f3a9f=_0x5da319;this['createLowerWeatherLayer'](),VisuMZ['WeatherEffects'][_0x5f3a9f(0x153)][_0x5f3a9f(0x481)](this);},VisuMZ['WeatherEffects'][_0x5da319(0x248)]=Spriteset_Battle[_0x5da319(0x2c2)][_0x5da319(0x249)],Spriteset_Battle[_0x5da319(0x2c2)][_0x5da319(0x249)]=function(){const _0x84ec2d=_0x5da319;VisuMZ[_0x84ec2d(0x3a2)]['Spriteset_Battle_createBattleFieldContainer'][_0x84ec2d(0x481)](this),this['createUpperWeatherLayer']();},Spriteset_Battle[_0x5da319(0x2c2)][_0x5da319(0x30c)]=function(){const _0x5cbe92=_0x5da319;Spriteset_Base[_0x5cbe92(0x2c2)][_0x5cbe92(0x30c)][_0x5cbe92(0x481)](this),this[_0x5cbe92(0x2a6)][_0x5cbe92(0x4ca)](this[_0x5cbe92(0x14e)]);},Spriteset_Battle[_0x5da319(0x2c2)]['createUpperWeatherLayer']=function(){const _0x47ef39=_0x5da319;Spriteset_Base[_0x47ef39(0x2c2)]['createUpperWeatherLayer']['call'](this),this['_baseSprite'][_0x47ef39(0x4ca)](this[_0x47ef39(0x44e)]);},Spriteset_Battle[_0x5da319(0x2c2)][_0x5da319(0x310)]=function(){const _0x30f4e3=_0x5da319;Imported[_0x30f4e3(0x173)]&&this[_0x30f4e3(0x455)](),Spriteset_Base[_0x30f4e3(0x2c2)][_0x30f4e3(0x310)][_0x30f4e3(0x481)](this);},Spriteset_Battle[_0x5da319(0x2c2)][_0x5da319(0x347)]=function(){const _0x962689=_0x5da319;Spriteset_Base[_0x962689(0x2c2)][_0x962689(0x347)][_0x962689(0x481)](this);},VisuMZ['WeatherEffects'][_0x5da319(0x4f9)]=Window_Options['prototype'][_0x5da319(0x3c0)],Window_Options[_0x5da319(0x2c2)][_0x5da319(0x3c0)]=function(){const _0x63672b=_0x5da319;VisuMZ[_0x63672b(0x3a2)][_0x63672b(0x4f9)][_0x63672b(0x481)](this),this[_0x63672b(0x1a4)]();},Window_Options[_0x5da319(0x2c2)][_0x5da319(0x1a4)]=function(){const _0x112597=_0x5da319;if(!VisuMZ[_0x112597(0x3a2)]['Settings']['Options']['AddWeatherDensityOption'])return;const _0x176560=TextManager[_0x112597(0x3a8)],_0x2e0ff0=_0x112597(0x3a8);this[_0x112597(0x54e)](_0x176560,_0x2e0ff0);},VisuMZ['WeatherEffects'][_0x5da319(0x414)]=Window_Options['prototype'][_0x5da319(0x3e8)],Window_Options[_0x5da319(0x2c2)][_0x5da319(0x3e8)]=function(_0x1f45d0){const _0x6c8a63=_0x5da319;if(_0x1f45d0==='weatherDensity')return!![];return VisuMZ[_0x6c8a63(0x3a2)][_0x6c8a63(0x414)][_0x6c8a63(0x481)](this,_0x1f45d0);},VisuMZ[_0x5da319(0x3a2)]['DegreesToRadian']=function(_0x40832a){return _0x40832a*(Math['PI']/0xb4);},VisuMZ[_0x5da319(0x3a2)]['RadiansToDegrees']=function(_0x2eccd2){return _0x2eccd2*(0xb4/Math['PI']);},VisuMZ['WeatherEffects'][_0x5da319(0x3e7)]=function(_0x57bf2a){const _0x766d4=_0x5da319;return Math[_0x766d4(0x17f)](_0x57bf2a+0x1)+Math[_0x766d4(0x17f)](_0x57bf2a+0x1)-_0x57bf2a;},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x355)]=function(_0x26d02d){const _0x53f235=_0x5da319;return Math['random']()*_0x26d02d+Math[_0x53f235(0x398)]()*_0x26d02d-_0x26d02d;},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x38a)]=function(){const _0x42e8de=_0x5da319;this['_lowerLayerSprites']=[],this[_0x42e8de(0x48b)]=[];const _0x1ce11d=Weather[_0x42e8de(0x26c)];let _0x3d7113=!![];for(let _0x3e8f3d=0x1;_0x3e8f3d<=_0x1ce11d;_0x3e8f3d++){const _0x57cd64=new Weather();_0x57cd64[_0x42e8de(0xfc)](_0x3e8f3d,_0x3d7113),this[_0x42e8de(0x535)][_0x42e8de(0x28e)](_0x57cd64);}_0x3d7113=![];for(let _0x2c1a70=0x1;_0x2c1a70<=_0x1ce11d;_0x2c1a70++){const _0x2b4e28=new Weather();_0x2b4e28[_0x42e8de(0xfc)](_0x2c1a70,_0x3d7113),this[_0x42e8de(0x48b)]['push'](_0x2b4e28);}},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x219)]=function(_0x38e219,_0x2ada5b){const _0x56ef8a=_0x5da319;if(this[_0x56ef8a(0x535)]===undefined)this['createNewWeatherSprites']();if(this[_0x56ef8a(0x48b)]===undefined)this[_0x56ef8a(0x38a)]();_0x38e219=(_0x38e219||0x1)['clamp'](0x1,Weather['MAX_LAYERS']);const _0xa7e286=_0x38e219-0x1;if(_0x2ada5b){if(_0x56ef8a(0x384)!==_0x56ef8a(0x384)){const _0x353074=this[_0x56ef8a(0x54a)];return _0x353074[_0xb10a85['floor'](_0x12bd58[_0x56ef8a(0x398)]()*_0x353074[_0x56ef8a(0x2e9)])];}else return this[_0x56ef8a(0x535)][_0xa7e286];}else return this['_upperLayerSprites'][_0xa7e286];},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x107)]=function(){const _0x573958=_0x5da319;return{'type':_0x573958(0x575),'power':0x0,'powerTarget':0x0,'duration':0x0,'sprite':{'lifespan':0x3c,'lifespanVariance':0x0,'spawnLocationX':'random','spawnOffsetX':0x0,'spawnLocationY':'random','spawnOffsetY':0x0,'mapBound':!![],'opacity':0xff,'opacityVariance':0x0,'opacityEasingType':_0x573958(0x2f5),'opacityFadeInTime':0x10,'scale':0x1,'scaleVariance':0x0,'scaleRatioX':0x1,'scaleRatioY':0x1,'totalMinimum':0x14,'totalPerPower':0x5},'dimmer':{'color':_0x573958(0x1dd),'opacityMinimum':0x0,'opacityPerPower':0x0},'image':{'generated':!![],'generatedWeight':0x1,'icons':[],'iconsWeight':0x10,'pictures':[],'picturesWeight':0x10,'blendMode':0x0,'hueVariations':[],'toneVariations':[]},'flags':{'alwaysVisiblePlayer':![],'flatFlutter':![],'hueSwayRange':0x0,'hueSwaySpeed':0.01,'longevity':![],'respawnCommonEventID':0x0,'respawnDelayMin':0x0,'respawnDelayRngPerPower':0x0,'scaleIn':0x1,'scaleInDuration':0xa,'scaleOut':0x1,'scaleOutDuration':0xa,'fireworksFinish':![],'sparkleFinish':![]},'trajectory':{'type':_0x573958(0x241),'lockedID':0x0,'lockedOffsetX':0x0,'lockedOffsetY':0x0,'speed':0x1,'speedVariance':0x0,'angle':0x0,'alignAngle':!![],'angleOffset':0x0,'angleVariance':0x0,'angleArc':0x0,'angleSwayRange':0x0,'angleSwaySpeed':0.01,'spinSpeed':0x0,'spinSpeedVariance':0x0,'reverseSpin':![],'xSwayRange':0x0,'xSwaySpeed':0.01,'ySwayRange':0x0,'ySwaySpeed':0.01}};},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x571)]=function(_0xd80c27){const _0x153dcd=_0x5da319;if(!_0xd80c27)return;_0xd80c27['sprite'][_0x153dcd(0x51a)]=0xbe,_0xd80c27[_0x153dcd(0x526)]['opacityVariance']=0x1e;if(_0xd80c27[_0x153dcd(0x297)]===_0x153dcd(0x4f6))_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x2e7)]=0x24,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x51a)]=0x82,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x351)]=0x1e,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x336)]=0x50,_0xd80c27['sprite'][_0x153dcd(0x123)]=0x14,(_0xd80c27[_0x153dcd(0x332)][_0x153dcd(0x12e)]=_0x153dcd(0x273),_0xd80c27[_0x153dcd(0x332)][_0x153dcd(0x42a)]=0x6,_0xd80c27[_0x153dcd(0x3ab)][_0x153dcd(0x277)]=0xc),_0xd80c27['trajectory'][_0x153dcd(0x265)]=0xff,_0xd80c27['trajectory'][_0x153dcd(0x426)]=0x5;else{if(_0xd80c27[_0x153dcd(0x297)]===_0x153dcd(0x267))_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x2e7)]=0x1c,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x51a)]=0x82,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x351)]=0x1e,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x336)]=0x78,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x123)]=0x28,(_0xd80c27[_0x153dcd(0x332)][_0x153dcd(0x12e)]=_0x153dcd(0x263),_0xd80c27[_0x153dcd(0x332)][_0x153dcd(0x42a)]=0x6,_0xd80c27[_0x153dcd(0x3ab)]['speed']=0x10),_0xd80c27[_0x153dcd(0x3ab)][_0x153dcd(0x265)]=0xf5,_0xd80c27[_0x153dcd(0x3ab)][_0x153dcd(0x426)]=0xa;else{if(_0xd80c27[_0x153dcd(0x297)]===_0x153dcd(0x448)){if(_0x153dcd(0x318)!==_0x153dcd(0x137))_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x2e7)]=0x78,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x51a)]=0xa0,_0xd80c27[_0x153dcd(0x526)][_0x153dcd(0x351)]=0x14,_0xd80c27[_0x153dcd(0x526)]['totalMinimum']=0x96,_0xd80c27['sprite'][_0x153dcd(0x123)]=0x28,(_0xd80c27[_0x153dcd(0x332)][_0x153dcd(0x12e)]=_0x153dcd(0x14c),_0xd80c27[_0x153dcd(0x332)][_0x153dcd(0x42a)]=0x6,_0xd80c27['trajectory'][_0x153dcd(0x277)]=0x2),_0xd80c27['trajectory'][_0x153dcd(0x265)]=0xdc,_0xd80c27[_0x153dcd(0x3ab)][_0x153dcd(0x426)]=0xf,_0xd80c27['trajectory'][_0x153dcd(0x186)]=0x2,_0xd80c27[_0x153dcd(0x3ab)]['xSwaySpeed']=0.01;else{const _0x449bc8=this[_0x153dcd(0x124)];return _0x449bc8[_0x9596cf[_0x153dcd(0x441)](_0x2e3148['random']()*_0x449bc8[_0x153dcd(0x2e9)])];}}}}},VisuMZ['WeatherEffects'][_0x5da319(0x3d1)]=function(_0x4e466f){const _0x248ce9=_0x5da319,_0x5876cc=VisuMZ['WeatherEffects']['newLayer']();this[_0x248ce9(0x1f5)](_0x5876cc,_0x4e466f),this[_0x248ce9(0x2f2)](_0x5876cc,_0x4e466f),this[_0x248ce9(0x1eb)](_0x5876cc,_0x4e466f),this[_0x248ce9(0x2fd)](_0x5876cc,_0x4e466f),this[_0x248ce9(0x1bf)](_0x5876cc,_0x4e466f);},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x21b)]=function(){const _0x75e1cd=_0x5da319;return![];if(!$gameTemp[_0x75e1cd(0x28f)]())return![];return Input['isPressed'](_0x75e1cd(0xfb))&&Input['isPressed']('shift');},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x1f5)]=function(_0x15dcd2,_0x5497d9){const _0x2d8594=_0x5da319;_0x15dcd2[_0x2d8594(0x297)]=_0x5497d9[_0x2d8594(0x297)]||_0x2d8594(0x575),_0x15dcd2['powerTarget']=(_0x5497d9[_0x2d8594(0x39d)]||0x1)['clamp'](0x1,0x9),this['isDebugAllOption']()&&(_0x15dcd2[_0x2d8594(0x39d)]=0x9);},VisuMZ[_0x5da319(0x3a2)][_0x5da319(0x2f2)]=function(_0x459d6b,_0x42424b){const _0x21ca54=_0x5da319,_0x584379=[_0x21ca54(0x526),_0x21ca54(0x332),_0x21ca54(0x33f),_0x21ca54(0x1ac),_0x21ca54(0x3ab)];for(const _0x43bc4c of _0x584379){if(!_0x459d6b[_0x43bc4c])continue;if(!_0x42424b[_0x21ca54(0x2a8)][_0x43bc4c])continue;this[_0x21ca54(0x56c)](_0x459d6b[_0x43bc4c],_0x42424b[_0x21ca54(0x2a8)][_0x43bc4c]);}},VisuMZ['WeatherEffects'][_0x5da319(0x56c)]=function(_0x25fb12,_0x3b9eda){for(const _0x1c1099 in _0x25fb12){if(_0x3b9eda[_0x1c1099]===undefined)continue;_0x25fb12[_0x1c1099]=_0x3b9eda[_0x1c1099];}},VisuMZ[_0x5da319(0x3a2)]['applyPluginCmdSettingsSpecificCases']=function(_0x37eaef,_0x264c46){const _0x2a15e7=_0x5da319;if(_0x37eaef[_0x2a15e7(0x3ab)][_0x2a15e7(0x297)]==='event'&&_0x37eaef[_0x2a15e7(0x3ab)][_0x2a15e7(0x2eb)]<=0x0){if(_0x2a15e7(0x353)!==_0x2a15e7(0x353))this[_0x2a15e7(0x3a8)]=0x64;else{const _0x50a16=$gameTemp[_0x2a15e7(0x2c9)]();_0x37eaef[_0x2a15e7(0x3ab)][_0x2a15e7(0x2eb)]=_0x50a16[_0x2a15e7(0x3b3)]();}}},VisuMZ['WeatherEffects'][_0x5da319(0x2fd)]=function(_0x177e87,_0x248feb){const _0x5b531e=_0x5da319;let _0x74522b=_0x248feb[_0x5b531e(0x3f6)][_0x5b531e(0x57d)](_0x544f84=>(Number(_0x544f84)||0x1)[_0x5b531e(0x485)](0x1,0xa)),_0x51a990=_0x248feb[_0x5b531e(0x1e0)];_0x177e87['duration']=_0x248feb[_0x5b531e(0x539)]||0x1;this[_0x5b531e(0x21b)]()&&(_0x74522b=[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa],_0x51a990=_0x5b531e(0x15d));for(const _0x3e04d1 of _0x74522b){if('tWEzE'===_0x5b531e(0x26e)){if([_0x5b531e(0x585),'both'][_0x5b531e(0x4e2)](_0x51a990)){if('iljil'!==_0x5b531e(0x237)){if(this['_cached_WeatherEffects_ShadowBurst']&&_0x2d0b16['WEATHER_SHADOW_BURST_COLORS'][_0x5b531e(0x2e9)]<=0x0){const _0x2600e6=this[_0x5b531e(0x3ea)];return _0x2600e6[_0x2cc267['floor'](_0x36d280['random']()*_0x2600e6[_0x5b531e(0x2e9)])];}const _0x19025e=_0x310a7d[_0x5b531e(0xea)]['pop'](),_0x48fac6=new _0x41c492(0x3e8,0x3e8),_0x1a3534=_0x48fac6[_0x5b531e(0x16e)]/0x2;_0x48fac6[_0x5b531e(0x2c4)](_0x1a3534,_0x1a3534,_0x1a3534,0x168,_0x19025e,0x0,0x1,0x0),_0x48fac6[_0x5b531e(0x182)]=![];if(_0x4d2ec3[_0x5b531e(0x24b)])_0x2c7014['log']('shadowburst');return this[_0x5b531e(0x3ea)]=this[_0x5b531e(0x3ea)]||[],this[_0x5b531e(0x3ea)][_0x5b531e(0x28e)](_0x48fac6),_0x48fac6;}else $gameScreen[_0x5b531e(0x45d)](_0x3e04d1,![],_0x177e87);}[_0x5b531e(0x444),_0x5b531e(0x15d)][_0x5b531e(0x4e2)](_0x51a990)&&$gameScreen[_0x5b531e(0x45d)](_0x3e04d1,!![],_0x177e87);}else{var _0x13c913=_0x20caba[_0x533aa5],_0x186529=_0x1c8047[_0x240cc1+0x1],_0x1db2c2=(_0x13c913['y']+_0x186529['y'])/0x2,_0x28d989=_0x1db2c2+(_0x37ac65['random']()*0x2-0x1)*_0x1fe1c8;_0x5f39ad[_0x5b531e(0x28e)](_0x13c913,{'x':(_0x13c913['x']+_0x186529['x'])/0x2,'y':_0x28d989});}}},VisuMZ['WeatherEffects'][_0x5da319(0x1bf)]=function(_0x1bed6f,_0x512f8e){const _0x18790c=_0x5da319;if(!_0x512f8e[_0x18790c(0x57e)])return;const _0x2dbddc=$gameTemp[_0x18790c(0x2c9)]();_0x2dbddc&&_0x2dbddc[_0x18790c(0x38e)](_0x1bed6f['duration']||0x1);};