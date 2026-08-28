# UI kit — powerunitcoaching.com (marketing site)

Click-through recreation of the public marketing site. Open `index.html`; the top nav switches screens.

| Screen | File | Source page |
|---|---|---|
| Home | `HomeScreen.jsx` | `/` |
| Solutions → PWRU University | `UniversityScreen.jsx` | `/training-programs/university/` |
| Teams → Brokerage Performance Suite | `BrokersScreen.jsx` | `/training-programs/teams-brokers/` |
| Blog | `BlogScreen.jsx` | `/blog/` |

Interactions: nav switches screens, the PULSE pillar grid is selectable, the blog category chips filter posts, and the BPS demo form submits to a confirmation state.

**Sourcing note.** The live site is WordPress (Slider Revolution / Salient-style theme) and its CSS was not readable from here, so layout, spacing, and type are reconstructed from the rendered pages, the supplied logo artwork, and the 6-Pillar workbook cover — not from theme source. Copy is verbatim from the live pages.

**Images** are hotlinked from `powerunitcoaching.com/wp-content/uploads/` (hero, product thumbnails, headshots, blog covers). They will not render offline. Replace with local files in `assets/` before shipping anything.

Not recreated (no public source available): the logged-in PWRU University LMS, the PULSEIntel PRO dashboard, and the BPS broker admin console. Those are behind auth — leave them blank rather than inventing them.
