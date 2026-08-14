# Image manifest

**Last verified:** 2026-08-13, all 80 assets confirmed live (HTTP 200).

The complete image inventory for Laguna Beach Counseling, what each asset is, where it
comes from, and where the site uses it today. Read this before placing any image, so a
page never claims an AI-generated room is our office or puts a real person on a service
page where they would read as a client.

## Rules that govern this inventory

**Hostname.** Every `src` uses the custom hostname:

```
https://cdn.circulationstudio.com/clients/laguna-beach-counseling/<folder>/<file>
```

Never `circulation-studio-cdn.b-cdn.net`. Both hostnames serve the same Bunny storage,
but the custom one is the only one that belongs in the codebase. The one live exception
is documented under Known issues below.

**Provenance is not obvious from the folder name.** `interior/` holds both real
photographs of the practice and AI-generated room scenes. The reliable tell is
dimensions: **every AI-generated asset is exactly 1376x768**, and no real photograph is.
All 14 AI assets share that size. Check the number, not the folder.

**Real photography** means the client's own: Kay's family took the coastal set, the
office and team photos are the actual practice. These carry place and authenticity, and
they are the only assets allowed to represent Laguna or the practice itself.

**AI-generated** assets are commissioned service imagery. `DESIGN_SYSTEM.md` Forbidden
Patterns bans AI imagery posing as real photography, so these are constrained:

- Never on `/beach-therapy` or `/sand-castle-therapy`, where real photography is what
  establishes the signature services are real.
- Never where the page implies the image is our coastline, our office, or our clients.
- Alt text describes the scene without asserting a location or naming a client.
- Prefer a real photograph whenever one serves the slot equally well.

**People restrictions (HIPAA-adjacent).** Four real photographs show identifiable people
the client knows. They must not appear on any service or specialty page, where they would
imply those people are clients:

- `coastal/...couple-embracing-ocean-overlook-portrait.webp`
- `coastal/...couple-walking-foggy-beach-portrait.webp`
- `coastal/...family-walking-beach-sunset-portrait.webp`
- `coastal/...father-son-shoreline-hz.webp`

Distant or silhouetted figures (surfers, paddleboarders, the skimboarder) are fine
anywhere. `coastal/...surfers-group-beach-hz.webp` is the exception: it is close enough to
show faces, so it is on hold pending confirmation those people agreed to its use.

**Slot mechanics.** `hero__frame` (hero `variant: "split"`) is a 4:5 crop, so portraits
belong there. `hero__bg` (`variant: "bg"`) is full-bleed under a sand-warm veil that is
heaviest on the left, so it wants bright horizontals with the interest on the right.
`promo__img` (crossSell) is natural ratio and wants horizontals.

---

## coastal/ (42 assets, all real photography)

Kay's family's own photographs of Laguna. The default source for any page needing
atmosphere or place.

| File (minus `laguna-beach-counseling-` prefix) | Orient | Dimensions | What it shows | Used on |
|---|---|---|---|---|
| `outdoor-beach-path-stairs-header-hz.webp` | hz | 400x223 | Stone steps and wooden railing down a bluff to a sunny cove, two people descending | mega menu (nav.json) |
| `outdoor-beach-path-stairs-hz.webp` | hz | 1280x714 | Same scene, full resolution | /specialties/life-transitions |
| `outdoor-blue-trolley-downtown-hz.webp` | hz | 1280x853 | The blue Laguna Beach Transit trolley on a downtown street under a large tree | unused |
| `outdoor-cloudy-beach-oceanfront-homes-hz.webp` | hz | 1280x853 | Wide empty beach, foam, oceanfront buildings far left, tall broken clouds | /specialties/depression |
| `outdoor-coastal-foliage-detail-hz.webp` | hz | 1280x714 | Native bluff shrubs in bloom, silver-green leaves and rust flower heads, ocean soft behind | /specialties/neurodiversity |
| `outdoor-couple-embracing-ocean-overlook-portrait.webp` | portrait | 853x1280 | Two people on a stone bench, arm around, backs to camera, ocean and palm | **restricted, unused** |
| `outdoor-couple-walking-foggy-beach-portrait.webp` | portrait | 853x1280 | Two people walking arm in arm on a foggy beach, bluff behind | **restricted, unused** |
| `outdoor-crescent-bay-cove-hz.webp` | hz | 1280x714 | Cove at sunset, wet sand and tide pools reflecting orange sky, homes on the bluff | /about, /components |
| `outdoor-curlew-golden-hour-shoreline-portrait.webp` | portrait | 853x1280 | A long-billed curlew alone at the waterline in low golden light | /specialties/depression |
| `outdoor-dawn-beach-oceanfront-condo-portrait.webp` | portrait | 853x1280 | Empty beach after dawn, pale pink sky, scalloped foam, white building on the bluff | /specialties/anxiety |
| `outdoor-dramatic-cloudy-ocean-sunset-hz.webp` | hz | 1280x853 | Sun low behind long streaked clouds, dark quiet water, a contrail | /discernment-counseling |
| `outdoor-family-walking-beach-sunset-portrait.webp` | portrait | 853x1280 | An adult and two children walking away along the sand at golden hour | **restricted, unused** |
| `outdoor-father-son-shoreline-hz.webp` | hz | 1280x853 | An adult and a child at the water's edge, town on the bluff behind | **restricted, unused** |
| `outdoor-foggy-beachfront-homes-surfers-hz.webp` | hz | 1280x853 | Heavy fog, a beachfront home with a flag, two distant figures walking | unused |
| `outdoor-footprints-in-sand-portrait.webp` | portrait | 853x1280 | Bare footprints pressed into smooth wet sand, leading away | /about/our-approach |
| `outdoor-golden-hour-breaking-wave-hz.webp` | hz | 1280x853 | A single clean wave breaking under a pale gold sky, minimal | /beach-therapy |
| `outdoor-lifeguard-tower-sunny-beach-portrait.webp` | portrait | 853x1280 | White lifeguard tower on clean sand, blue sky, palms on the bluff, flowering ice plant | /therapy/children, /components |
| `outdoor-low-angle-shoreline-foam-hz.webp` | hz | 1280x853 | Low view along the shoreline, foam running up firm wet sand, town distant | /specialties/anxiety, /components |
| `outdoor-ocean-sunset-catalina-view-hz.webp` | hz | 1280x853 | Wide sunset sky, orange and grey cloud above a dark island, palm tops silhouetted | /specialties/faith-based |
| `outdoor-ocean-surface-waves-hz.webp` | hz | 1280x714 | Open ocean surface, low blue swells folding, no shoreline | /specialties/conflict-resolution, /components |
| `outdoor-oceanfront-gazebo-heisler-park-hz.webp` | hz | 1280x853 | The Heisler Park gazebo, rustic railing and shingled roof framing calm ocean | /therapy/individuals |
| `outdoor-paddleboarder-calm-blue-sea-hz.webp` | hz | 1280x853 | A lone paddleboarder on glassy blue sea, hazy island on the horizon | /therapy/individuals |
| `outdoor-paddleboarder-orange-sunset-hz.webp` | hz | 1280x853 | Paddleboarder silhouetted on orange sunset water | unused |
| `outdoor-palm-point-coastal-view-portrait.webp` | portrait | 853x1280 | Palms on a rocky point across the water, seen through blurred foreground grasses | /specialties/life-transitions |
| `outdoor-palm-silhouette-pink-sunset-portrait.webp` | portrait | 853x1280 | One tall palm and a pine silhouetted against a pink and orange sunset | unused |
| `outdoor-red-sunset-palm-silhouettes-hz.webp` | hz | 1280x853 | A red sun disk low in hazy sky over the ocean, tree silhouettes below | /couples-intensive |
| `outdoor-rocky-cove-sandy-beach-portrait.webp` | portrait | 853x1280 | A small rocky cove from above, turquoise surf around boulders, sandstone bluff | /components |
| `outdoor-rocky-cove-sun-rays-hz.webp` | hz | 1280x853 | Sun breaking through heavy cloud over a silver sea, dark wet rocks foreground | /specialties/infidelity |
| `outdoor-sandpiper-reflective-shore-sunset-hz.webp` | hz | 1280x853 | One small shorebird on mirror-wet sand at dusk, pale pink sky reflected | /specialties/grief |
| `outdoor-sea-foam-shoreline-closeup-hz.webp` | hz | 1280x853 | Close view of foam lines gathering and dissolving on wet sand | /specialties/addiction-recovery |
| `outdoor-sea-lavender-ocean-overlook-portrait.webp` | portrait | 853x1280 | Purple sea lavender beside a dark park railing, palms on the point, ocean beyond | /therapy/seniors |
| `outdoor-seagull-silhouette-sunset-portrait.webp` | portrait | 853x1280 | A gull silhouetted on wet reflective sand, palm-lined bluff, pink sunset | unused |
| `outdoor-shorebirds-feeding-shoreline-hz.webp` | hz | 1280x853 | Four shorebirds feeding in the shallow wash, town on the bluff behind | /therapy/families |
| `outdoor-silhouetted-rocks-sunset-shore-portrait.webp` | portrait | 853x1280 | Dark rocks on wet sand against a warm cream sky, surf running in | unused |
| `outdoor-skimboarder-airborne-wave-portrait.webp` | portrait | 853x1280 | A skimboarder airborne over shorebreak, deep blue ocean behind | unused |
| `outdoor-surfer-carrying-board-hillside-homes-portrait.webp` | portrait | 853x1280 | A surfer in a wetsuit walking away with a green board, hillside homes behind | unused |
| `outdoor-surfer-paddleboarder-sunset-silhouettes-portrait.jpg` | portrait | 853x1280 | Surfer silhouette walking the tideline, paddleboarder beyond, orange sunset | **unused, see Known issues** |
| `outdoor-surfers-group-beach-hz.webp` | hz | 1280x853 | A group of surfers on the sand with boards, faces partly visible | **on hold, see People restrictions** |
| `outdoor-surfers-shoreline-dusk-hz.webp` | hz | 1280x853 | Silhouetted surfers heading to the water at dusk, golden reflective sand | / (homepage) |
| `outdoor-tide-pools-detail-hz.webp` | hz | 1280x714 | Sunset over a rocky shelf, still tide pools between dark ledges, spray at the point | /therapy/couples |
| `beach-hands-sandcastle-hz.webp` | hz | 1448x1086 | Close up of a child's and an adult's hands packing wet sand on a sandcastle wall | /sand-castle-therapy |
| `sandcastle-therapy-hz.webp` | hz | 1448x1086 | A child and adult kneeling beside a tall sandcastle with a small flag, surf beyond | /sand-castle-therapy, /beach-therapy |

## interior/ (13 assets, mixed provenance)

**Read the dimensions column.** The eight real ones are 1280x853, 853x1280 or 765x1020.
The five at 1376x768 are AI-generated rooms that are not our office.

The folder name is unreliable twice over: it holds AI images alongside real ones, and
`laguna-beach-counseling-exterior.webp` is an exterior sitting in `interior/`.

### Real photographs of the practice (8)

Amateur snapshots rather than styled photography, but genuinely the actual rooms:
seafoam recliners, seahorse lamps, starfish garland, coastal art, an orange sofa.

| File (minus prefix) | Orient | Dimensions | What it shows | Used on |
|---|---|---|---|---|
| `office-interior-1.webp` | hz | 1280x853 | Session room, two seafoam recliners, seahorse lamps on a sideboard, starfish garland | /about |
| `office-interior-2.webp` | hz | 1280x853 | Same room from another angle, coastal painting, wicker chair, batik throw | unused |
| `office-interior-3.webp` | hz | 1280x853 | Same room wider, showing the rug, plant, and a second seating area | unused |
| `office-interior-4.webp` | hz | 1280x853 | Waiting area, seahorse drawing on the door, wicker chairs, magazines, coffee table | unused |
| `office-interior-5.webp` | **portrait** | 853x1280 | Second suite, orange sofa, woven coffee table, grey armchair, framed landscapes | /fees |
| `office-interior-6.webp` | hz | 1280x853 | Same orange-sofa room from the doorway, lamps lit, tissue box on the table | /get-started |
| `laguna-beach-counseling-exterior.webp` | **portrait** | 765x1020 | EXTERIOR despite the folder: the white Spanish-style building at 333 Third Street, street number beside an arched entrance, "Main Beach Realty" sign on the front (the ground-floor tenant; the practice is upstairs in Suite 6) | /contact |
| `orange-county-couples-counseling-interior.webp` | **portrait** | 765x1020 | The shared Irvine sister office: corner room, white sofa, patterned rug, windows over trees and low hills | /contact |

### AI-generated interiors (5)

Idealized rooms. None of these is the practice. The real office is more modest, so
presenting these as our space would be a straightforward authenticity problem.

| File (minus prefix) | Orient | Dimensions | What it shows | Used on |
|---|---|---|---|---|
| `session-space-chairs.webp` | hz | 1376x768 | Bright room, upholstered chair facing a leather chair, garden window, coastal art | unused |
| `warm-interior-light.webp` | hz | 1376x768 | Coastal living room, stone fireplace, picture window onto a cove | unused |
| `workspace-detail.webp` | hz | 1376x768 | Wooden desk, open journal, laptop, mug, palms out the window | unused |
| `journal-writing-detail.webp` | hz | 1376x768 | A hand writing in a lined journal, close crop | unused |
| `texture-neutral-warm.webp` | hz | 1376x768 | Linen cloth draped over weathered oak, abstract texture | unused |

## services/ (9 assets, all AI-generated)

Commissioned service imagery. Governed by the AI constraints above.

| File (minus prefix) | Folder | Dimensions | What it shows | Used on |
|---|---|---|---|---|
| `parent-teen-outdoors.webp` | therapy | 1376x768 | A parent and teenager walking a paved trail through golden hills, mid-conversation | /therapy/teens |
| `telehealth-home-session.webp` | therapy | 1376x768 | A woman at a laptop on a dining table in a bright living room, on a video call | /telehealth |
| `coffee-conversation.webp` | therapy | 1376x768 | Two people in armchairs with mugs, tissue box between them, windows onto trees | unused |
| `couple-walking-shoreline.webp` | therapy | 1376x768 | A couple walking the tideline at sunset, cliffside homes above the cove | **unused, AI coastline** |
| `family-outdoors.webp` | therapy | 1376x768 | A family of four picnicking on the sand, one parent blowing bubbles | **unused, AI coastline** |
| `seniors-couple-walking.webp` | therapy | 1376x768 | An older couple holding hands on a coastal trail, ocean and headland below | **unused, AI coastline** |
| `grief-support-hands.webp` | specialties | 1376x768 | An older woman looking down, hands clasped, a younger woman's hand on hers | **unused, not recommended** |
| `individual-contemplativebeach.webp` | specialties | 1376x768 | A woman sitting alone on the sand looking out at a sunset sea | **unused, non-Laguna geography** |
| `two-women-happpy-conversation.webp` | specialties | 1376x768 | Two women laughing over coffee at an outdoor table, vineyards behind | /components (demo only) |

Note the doubled `p` in `happpy` is the real filename, not a typo here.

The three marked "AI coastline" were reviewed and set aside: the real coastal library
covers those scenes, so an AI-generated Laguna is not worth the authenticity cost.
`grief-support-hands` is the comforting-hands genre the brand avoids, and
`/specialties/grief` already carries a code comment rejecting AI grief imagery.

## team/ (8 assets, all real photography)

| File | Orient | Dimensions | What it is | Used on |
|---|---|---|---|---|
| `kay-wenger-cutout.webp` | square | 700x700 | Transparent cutout portrait, Kay Wenger | 12 pages, via founderNote |
| `austin-whitman-cutout.webp` | square | 700x700 | Transparent cutout portrait | /about/our-team |
| `christy-hill-cutout.webp` | square | 700x700 | Transparent cutout portrait | /about/our-team |
| `natasha-gaffaney-cutout.webp` | square | 700x700 | Transparent cutout portrait | /about/our-team, /components |
| `rozy-pishvaiy-cutout.webp` | square | 700x700 | Transparent cutout portrait | /about/our-team, /components |
| `laguna-beach-counseling-team-hz.webp` | hz | 1920x1568 | Five team members standing together in the office, lamp and coastal art behind | / (homepage hero) |
| `laguna-beach-counseling-team-couch-hz.webp` | hz | 1920x1402 | Four team members seated on the orange sofa and armchair, framed landscapes above | / (homepage) |
| `laguna-beach-counseling-team-stairs-portrait.webp` | **portrait** | 1538x1920 | Four team members on the office stairs beneath the painted "Laguna Beach Counseling" sign | /contact |

The stairs shot is the only asset showing the practice's exterior signage and suite
number, which makes it the natural candidate for `/contact` or `/about`.

## brand/ (8 assets)

| File | Format | Size | Used on |
|---|---|---|---|
| `laguna-beach-counseling-logo-horizontal.svg` | vector | 36K | site.json, header |
| `laguna-beach-counseling-logo-horizontal-reversed.svg` | vector | 40K | site.json, footer |
| `laguna-beach-counseling-logo-stacked.svg` | vector | 24K | unused |
| `laguna-beach-counseling-logo-stacked-reversed.svg` | vector | 24K | unused |
| `laguna-beach-counseling-icon-reversed.svg` | vector | 8K | support-resources.njk |
| `favicon-32.png` | 32x32 | 4K | site-wide, base.njk |
| `favicon-180.png` | 180x180 | 8K | site-wide (apple-touch-icon), site.webmanifest |
| `favicon-512.png` | 512x512 | 24K | site-wide, site.webmanifest |

---

## Known issues

1. **One file is still `.jpg`.** `coastal/...surfer-paddleboarder-sunset-silhouettes-portrait.jpg`
   is the only non-WebP photograph in the library. Convert and re-upload before using it.
2. **A real Beach Therapy photo is stored sideways.** On the legacy host,
   `laguna-beach-therapy-02.JPG` is 2976x1984 with no EXIF orientation tag, so browsers
   render it rotated 90 degrees. `/components/` carries a coastal substitute and a code
   comment; restore the real photo once it is re-uploaded upright.
3. **The mega menu image is a 400x223 crop.** Fine at thumbnail size, soft on a 2x
   display. `outdoor-beach-path-stairs-hz.webp` is the same scene at full resolution.
4. **Favicons: RESOLVED.** The head previously pointed at `/favicon.svg`, `/favicon.ico`
   and `/apple-touch-icon.png`, none of which exist in the build, so every page shipped
   three 404s and no favicon while the real icons sat unused on the CDN. `base.njk` and
   `site.webmanifest` now use `brand/favicon-32`, `-180` and `-512`, sourced through
   `site.icons`.
5. **`promo__img` has no width or height attributes**, so cross-sell images can cause a
   small layout shift. A single `aspect-ratio` rule on the component would fix every page.

## Superseded paths

Everything the site references now lives in the current inventory, with one exception
noted below.

| Old path | Status | Resolution |
|---|---|---|
| `beach-therapy/beach-hands-sandcastle.webp` | byte-identical duplicate | RESOLVED, repointed to `coastal/...beach-hands-sandcastle-hz.webp` |
| `beach-therapy/sandcastle-therapy.webp` | byte-identical duplicate | RESOLVED, repointed to `coastal/...sandcastle-therapy-hz.webp` |
| `b-cdn.net/.../Laguna Beach Counseling/laguna-beach.webp` | legacy host, was carrying three pages | RESOLVED, retired. `/therapy/individuals`, `/couples-intensive` and the `/beach-therapy` cross-sell now use the coastal library |
| `b-cdn.net/.../Laguna Beach Counseling/laguna-beach-therapy-01.JPG` | legacy host, still referenced | OPEN, needs migrating |

The two `beach-therapy/` duplicates were confirmed byte-identical to their `coastal/`
counterparts (matching MD5 and dimensions), so repointing them was lossless.

`laguna-beach-therapy-01.JPG` is the last legacy-host asset on the site. It is the only
genuine walk-and-talk photograph anywhere in the library, which is exactly what
`/beach-therapy` needs, so it stays until it is migrated to the custom hostname. It is
referenced from `/beach-therapy` (hero) and `/components` (promo callout 9b); migrating it
means updating both.
