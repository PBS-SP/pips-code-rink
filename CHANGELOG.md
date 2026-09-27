# Versions

Two games share one engine: **Pip's Code Rink** (the penguin game, main folder) and **Fluffy's Code Garden** (the bunny game, `bunny/` folder).

## Pip's Code Rink

Numbering: **V major.minor.patch**
- **Major** (V2.00.00): a big change, like a new world or a redesign
- **Minor** (V1.01.00): new features or levels
- **Patch** (V1.00.01): bug fixes and small tweaks

To roll back, restore the commit listed for that version.

| Version | Date | Commit | What's in it |
|---|---|---|---|
| V1.01.03 | 2026-09-27 | d54fe97 | Tablets and iPads show far more of the program (about 10 steps sideways on an iPad, up from 2): command blocks are grouped into tabs when a level has lots of them, program steps are slimmer, and the headings take less room. Blocks are listed left before right everywhere. Checked on 15 screen sizes including iPad upright and sideways. |
| V1.01.02 | 2026-09-27 | dc1fe01 | Behind the scenes only: the game code now also powers Clover's Code Garden. Nothing looks different. |
| V1.01.01 | 2026-09-27 | 56aac7c | Uses "device" instead of "iPad" throughout. Tablet fixes: program list fits when the tablet is sideways (repeat block + and − were cut off), Pip's keyboard fits on upright tablets. Now checked on 13 screen sizes including small and large tablets, upright and sideways. |
| V1.01.00 | 2026-09-26 | a16d231 | Restart button in levels (back to the level's starting code, stars kept). Reopening a finished level asks Keep my program / Start fresh and shows the missing star. Full QWERTY Pip's keyboard with ( ) _ : keys. Version number in the Parent Corner. |
| V1.00.00 | 2026-09-26 | 761b532 | Known-good baseline. Worlds 1-3 (Frozen Pond, Loop Lagoon, Power Play), daily puzzles, hard mode for Worlds 2 and 3, code buttons for Python levels (typing optional), phone and tablet layouts, offline app, Parent Corner, passcode. |

## Before V1.00.00
| Commit | Update |
|---|---|
| fab6280 | Hard mode |
| b0e769f | World 3 Power Play |
| 39a7977 | Clearer repeat block |
| 951d6ab | Typing update |
| 650167e | Phone fixes: everything on screen |
| fb9e175 | Bigger rink on phones |
| c6c70dc | Fit small phones |
| 756251b | Phone layout and passcode |

## Fluffy's Code Garden (bunny game, `bunny/` folder)

Called Clover's Code Garden in V1.00.00.
| Version | Date | Commit | What's in it |
|---|---|---|---|
| V1.01.01 | 2026-09-27 | d54fe97 | Tablets and iPads show far more of the program (about 10 steps sideways on an iPad, up from 2): command blocks are grouped into tabs when a level has lots of them, program steps are slimmer, and the headings take less room. Blocks are listed left before right everywhere. Checked on 15 screen sizes including iPad upright and sideways. |
| V1.01.00 | 2026-09-27 | b2fe60d | The bunny is now Fluffy, with a cuter round face, big sparkly eyes, pink cheeks, a pom-pom tail and a bow on one ear. Game renamed Fluffy's Code Garden. Fluffy only holds a carrot after picking one up (levels 1-1, 1-4, 1-6, 1-7 and 1-8 now have a carrot to collect first). She bounces as she moves and does a happy wiggle when she gets home. New home-screen icon. |
| V1.00.00 | 2026-09-27 | dc1fe01 | First release. World 1 Spring Meadow: 10 levels (carrots, burrow, hop, lily pads, hay bales, the goose, read-the-code, first Python with code buttons). Bunny wardrobe (bunnies and bows), badges, Parent Corner, offline app, same passcode. |

## Asteroid Belt Idle (idle game, `idle/` folder)
| Version | Date | Commit | What's in it |
|---|---|---|---|
| V2.00.00 | 2026-09-28 | ce3988b | Fresh start: the game was rebalanced so everyone starts again (sound settings, event badges and event tokens are kept). The main worlds now grow steadily: prices climb faster, power-ups of the same kind add together instead of multiplying, and upgrades and milestones never run out (a new milestone every +100 after each item's list). Checked with a pacing bot over 48 hours of play with no runaway. New World 3, Deep-Sea Salvage: a current moves between its three groups every 4 minutes and items in it earn ×3, with its own music. Worlds unlock by milestones: Coffee at 500 Belt Stars, Deep-Sea Salvage at 500 Beans, weekly events after the first Belt restart. Events stay wild (power-ups multiply) and have 4 new twists; one event gives at most 60 tokens. Smaller cross-world bonus. Music pauses when you leave the app. Copy progress code on the Event tab too. |
| V1.05.00 | 2026-09-28 | d6223d0 | Stars now come from everything you've ever earned in a world, so every run adds some and progress no longer stalls (your Stars carry over). Restart advice relaxes to +25% after 8 restarts. Events can be restarted for Event Stars that last the whole event; tokens and finished challenges are kept. Tight Quarters items earn ×10, and event targets are gentler when fewer items are allowed. Away earnings build up in each world and are collected when you open it. Timed power-ups are small fixed-width chips (tap one for details). Coffee's rewards swing more; the Belt stays steady. Copy progress code button on the Stars tab. |
| V1.04.00 | 2026-09-28 | 9224d72 | Generated music for each world (spacey Belt, lo-fi Coffee, upbeat event) and action sounds, each switched on or off separately (both off by default). Bigger speed power-ups, especially for costly items, plus group-wide and everything-faster options. Short, strong timed power-ups (×10 for 10 minutes, ×25 one item, triple speed) whose clock only runs while you play. Active power-ups are combined into totals. Event challenge targets scale down when the event allows fewer items, and never repeat the same type at once. |
| V1.03.00 | 2026-09-27 | b533d27 | Group targets now let you choose 1 of 3 random power-ups (auto-picked after 3 minutes or while away); the Power-ups badge counts picks waiting. Each item has its own milestone ladder (cheap items stretch out, costly items come sooner). "Earners" renamed to items. Group label sits beside the item name so milestone rewards show in full. In events, items, group targets and upgrades that aren't part of the event are hidden. |
| V1.02.01 | 2026-09-27 | 6dcc0e8 | Fix: in the Tight Quarters event, earners 7 to 12 looked buyable but did nothing. They now show as locked for the week, and group targets that can't be reached say so. |
| V1.02.00 | 2026-09-27 | eb58c72 | World 2 Coffee Empire (unlocks after 3 Belt restarts): slower, bigger payouts, each earner boosts the one above it, own restart currency (Beans). Weekly events worked out from the date: open Friday to Monday with a random twist, three random challenges at a time, tokens that become a permanent +1% each for every world, and a badge per event. Restart advice now shows the real boost and says Not yet / Worth it soon / Good time, and waits while Stars are still piling up quickly. Worlds share a small bonus. |
| V1.01.01 | 2026-09-27 | b4f5e10 | Fix: on phones the timer bar and earner name ran under the buy buttons. Long names now shorten neatly and the per-second rate is hidden on narrow screens. |
| V1.01.00 | 2026-09-27 | 57e42c8 | All 12 earners shown and buyable in any order. Next buy (straight to the next milestone). Buy bar stays on screen when scrolling. Milestone rewards now vary each run: speed, profit, boosts to another earner, price cuts, or everything ×1.25. Group tags on earners and member lists on group cards. Badges on tabs when upgrades, new power-ups or Stars are ready. Warning when a perk would cut the Star bonus by more than 20%. Away earnings shown whenever you come back, including from the background. |
| V1.00.00 | 2026-09-27 | 2cce76a | World 1 Asteroid Belt: 12 earners, managers, milestones, upgrades, random group power-ups with climbing targets (3 belts + full set), golden asteroids, restarts for Stars, Star perks, unlimited away earnings. Other worlds shown as coming next. |
