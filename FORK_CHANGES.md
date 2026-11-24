# Fork changes (aphanos74-glitch)

This fork tracks the upstream game and adds a set of bug fixes and small
quality-of-life changes. They were written against v0.28.3 (Nov 11-12, 2026)
and rebased onto the upstream "Doll maker and edit game update" (Nov 21, 2026).

Every changed line in the code carries a short comment saying what changed
and why. Each section below is one commit.

## Mission fixes

### Missions stuck "In Progress" when all steps are done (`supportingChar.js`)
**Why:** the game ticked a mission's last step but never marked the mission
itself as finished.
**Change:** a mission whose steps are all finished now closes automatically
(all succeeded = Completed, all failed = Failed, mixed = Closed). The check
runs when a step finishes, when a mission starts, and when a save loads, so
old saves repair themselves.
- `sc.autoCloseSkip` (~70 missions) lists missions the story still needs
  "In Progress" (ending missions, missions a later scene checks or can still
  fail). These are never auto-closed.
  Nov 24, 2026: removed `janice/*cuck` from this list because upstream
  dropped that mission and replaced it with `*doggy`.
- `sc.autoCloseStepLookup` lists missions read through `sc.taskGetStep`;
  those only auto-close when every step succeeded, so scene choice is not
  changed.
- `completeMissionTopLevelOnly`: its "already finished" check compared the
  mission object instead of `mStatus`, so it never worked.

### Individual missions
| Mission | File | Bug | Fix |
|---|---|---|---|
| Meet (Tom) | `room040.js` | Second chat ticked step 1 again | Ticks "Perfect girl"; chat stays available |
| Personal Trainer (G) | `room551.js` | "Regular workouts" never ticked | Any regular workout ticks it once "Raise your strength bitch!" is done |
| Secret Room (G) | `room555.js`, `room551.js` | Introduction skipped; exercises only marked started; gym button vanished on completion | Each step ticked when done; button stays after Completed |
| Her Honor (Raven) | `room354.js` | "Stop touching her!" never ticked; jumped to an unused scene | Step ticked, renamed "(Repeatable)"; scene keeps replaying |
| Bedroom (Ralph's mom) | `room803.js` | "Tell me even more" never ticked | Ticked when the bed scene starts, renamed "(Repeatable)"; chat stays available |
| Practice dates (Lola) | `room013.js` | Button only showed while In Progress, so it could never complete | Button shows while In Progress or Completed |
| Bully (River) | `room103.js` | "Welcome back wedgie" never ticked | Ticked at the end of the scene; old saves repaired on load |
| Lola / Eva talk | `room013.js` | Clicking them after the mission did nothing; Eva's `evatalk1` completed task 0 twice; Lola's "Massages" task never completed | Stock-line fallbacks, missing `break`, correct task ids, new `talkLola2` callback |
| Chloe (Zoey) | `room501.js` | "Spy on her." never ticked | Ticked when the mission starts; old saves repaired; Zoey's follow-up talk no longer depends on it |
| Random / Misc (Mother, Lola, Eva, Janice, Ralph's Dad) | `supportingChar.js` | Event trackers never started, so showed Not Started | Switch to In Progress when any step is started or ticked (`sc.autoStartMissions`) |

### Weekly events repeating (`gamevariables.js`)
**Why:** weekly flags were saved into the daily list but loaded from the
weekly list, so after a save/load the game forgot a weekly event had already
happened (Mother walking in at the computer, Lola's bathroom event).
**Change:** weekly flags are saved in the weekly list; older saves have weekly
flags moved back out of the daily list on load.

## Phone and display

- **Hidden tasks** (`supportingChar.js`, `phone.js`): new task option
  `showWhenDone`. Hidden steps appear in the phone once completed, marked
  "(Hidden Task)".
- **Cheat menu "Show Hidden Tasks"** (`phone.js`, `gamevariables.js`): On/Off
  toggle that lists every hidden step. Saved as `showHiddenTasks`, default Off.
- **Alternative steps struck out** (`supportingChar.js`, `phone.js`): new task
  option `orTask`. When two steps are alternatives, the other is shown grey and
  struck through once one is done. Used for Chloe ("Catch her at the club?" /
  "Glory hole?") and Chad's Membership Dues ("Pay the $500" / "Get topless
  picture.").
- **Green names** (`phone.js`, `supportingChar.js`): on Relationships, a
  character's name turns green (#33cc33) when all their missions are complete
  (new `sc.allMissionsComplete`).
- **Phone text inside the screen** (`phone.js`): long text on character pages
  wraps at the phone screen's edge; the Missy message is two lines.
- **Stats screen ability points and percent** (`stats.js`, `char.js`): the four
  Abilities can show "current / needed Points" ("Max" at the cap) and a centred
  % inside the bar. A maxed ability shows a full bar.
- **Settings page 2** (`phone.js`, `stats.js`, `gamevariables.js`): Next Page /
  Previous Page buttons; page 2 has Points and Percentage On/Off toggles
  (saved as `showAbilityPoints`, `showBarPercent`, default Off). New images in
  `images/room/999_phone/`: `settingbg2.png`, `settings_next.png`,
  `settings_prev.png`.
- **Wide monitors** (`global.js`, `char.js`): when the window is wider than
  16:9, the scene and right-side controls align to the right edge while the
  left menu stays on the left. At 16:9 the layout is unchanged.
- **Map opens on the right page** (`room000.js`): the map opens on the page
  showing the place you came from, instead of whichever page was viewed last.
- **Spelling** (`global.js`): "Gym Front Desm" is now "Gym Front Desk".
- **Version text** (`global.js`): 0.28.2 became 0.28.3 to match the release.

## Known issues left as-is
- Sperm Bank [Side Quest]: "Assistant Nurse loop" is never ticked, so the
  mission cannot complete.
- Laius (Dick) step 4, Boy's Game (Kei) "The new class": content not built yet.
- Park (Cop) "You know why you keep coming back.": never ticked; the mission
  closes through the Save Missy storyline.
- Rent (Dick), Friends (Zoey): one dead step each; the missions still close
  through later scenes.
