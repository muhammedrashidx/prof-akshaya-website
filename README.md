# Atmospheric Convection and Dynamics Group – Website


## 1) Quick Start (Local Setup)

### Prerequisites
- Node.js (LTS 18+ recommended)
- npm (bundled with Node.js)

### Clone and run
```bash
# 1) Clone the repository
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_FOLDER>

# 2) Install dependencies
npm install

# 3) Run the development server
npm run dev
# Open http://localhost:3000 in your browser
```

Common scripts (from `package.json`):
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 2) Project Structure Overview

Key folders and files you will edit most often:

```
public/                       # Static assets (images, icons, etc.)
  images/
    logo/
    team/
    research/

src/
  app/
    (site)/                  # All site pages live here (App Router)
      page.tsx               # Home page
      research/page.tsx      # Research page
      people/page.tsx        # People page
      publication/page.tsx   # Publications page
      projects/page.tsx      # Projects page
      resources/page.tsx     # Resources page
      news/                  # News list + dynamic details (list uses markdown)
        page.tsx             # News list page
        [slug]/page.tsx      # Optional details page (removed usage in menu)

    layout.tsx               # Global layout, metadata, providers
    not-found.tsx            # 404 page

  components/
    Header/                  # Top navigation
      menuData.tsx           # Menu items (edit to add/remove pages)
    Footer/                  # Footer
    Team/                    # People page cards & modal
      index.tsx              # People grouping & modal state
      SingleTeam.tsx         # Profile card (name, image, links)
      PersonModal.tsx        # Modal content (bio, emails)
    News/
      HomeNewsSection.tsx    # News section on Home page
      SingleNews.tsx         # Single news card (uses externalUrl when present)
    Common/                  # Reusable UI (Breadcrumb, ScrollUp, etc.)
    Features/                # Home “Meet the PI” timeline cards

  styles/
    index.css                # Global CSS (fonts, selection color, custom rules)

  utils/
    markdown.ts              # News markdown loader (getAllPosts, etc.)

markdown/
  news/                      # News entries as .mdx files
    <your-news>.mdx

tailwind.config.ts          # Tailwind CSS configuration
next.config.js              # Next.js config
package.json                # Scripts and dependencies
```

---

## 3) Editing Pages

All pages live under `src/app/(site)/` and are standard React components with Tailwind classes.

- Home: `src/app/(site)/page.tsx`
- Research: `src/app/(site)/research/page.tsx`
- People: `src/app/(site)/people/page.tsx`
- Publications: `src/app/(site)/publication/page.tsx`
- Projects: `src/app/(site)/projects/page.tsx`
- Resources: `src/app/(site)/resources/page.tsx`
- News list: `src/app/(site)/news/page.tsx`

Edit the text directly inside each `page.tsx`. Tailwind utility classes (e.g., `text-xl`, `bg-white`, `rounded-lg`) control styling inline.

### Research page (images and video sizing)
File: `src/app/(site)/research/page.tsx`
- Images/iframe are wrapped in responsive containers; adjust heights using Tailwind classes like `sm:h-[350px] lg:h-[500px]` or switch to aspect ratio utilities.
- Replace image files under `public/images/research/` and update the `src` path.

### Projects page
File: `src/app/(site)/projects/page.tsx`
- Add/edit project “cards” in the `projectCards` array (title, investigators, funding).
- The layout uses a responsive grid; adjust columns by editing the grid classes.

### Resources page
File: `src/app/(site)/resources/page.tsx`
- Add/edit links in the `resources` array.
- Links open in a new tab using `target="_blank"`.

---

## 4) Editing the People page (Profiles & Modal)

Files:
- `src/app/(site)/people/page.tsx` (renders `<Team />`)
- `src/components/Team/index.tsx` (grouping; adds bios/emails; handles modal open/close)
- `src/components/Team/SingleTeam.tsx` (single profile card; click opens modal)
- `src/components/Team/PersonModal.tsx` (modal content UI)
- `src/types/team.ts` (TeamType fields)

How to add a new person:
1. Open `src/components/Team/index.tsx`.
2. Add an entry to the appropriate array (e.g., `phdStudents`, `postdocs`, `projectStaff`, `alumni`, `mastersThesis`).
3. Provide fields:
   - `name`, `designation`, `image`, social links (optional), and optionally `emails` and `bio` to show in modal.
4. Images live in `public/images/team/`. Put a photo there (or use `/images/team/placeholder.jpg`).

How the modal opens:
- We pass `onOpen={() => setSelected(person)}` into `SingleTeam`. Clicking the name or photo opens the modal with that person’s `bio` and `emails`.

Styling the cards:
- The card’s width and image size are controlled by Tailwind classes in `SingleTeam.tsx`. We have restored the original look, but you can tweak utility classes if needed.

---

## 5) Editing the Header menu

File: `src/components/Header/menuData.tsx`
- Add/remove a menu item by inserting a new object with `{ id, title, path, newTab }`.
- Example (already present):
```ts
{
  id: 5.5,
  title: "Resources",
  path: "/resources",
  newTab: false,
}
```
- Order the items by the `id` (lower appears first).

---

## 6) Editing the Footer

File: `src/components/Footer/index.tsx`
- The footer uses a 3-column responsive layout with logos and links.
- Update links, text, and logos by editing the JSX and image file paths (public/images/logo/...).
- Tailwind classes handle spacing and alignment.

---

## 7) News (Markdown) & External Links

News entries are stored as `.mdx` files under `markdown/news/`. Each file has **frontmatter** at the top:
```mdx
---
title: NCAR visit
excerpt: Short description
date: 2024-03-15
coverImage: /images/blog/some-cover.jpg
externalUrl: https://example.com/full-article  # optional: open external site when clicked
---

# The rest of the content (not required for the card itself)
```

- The list page `src/app/(site)/news/page.tsx` reads these mdx files via `src/utils/markdown.ts`.
- The news card component `src/components/News/SingleNews.tsx`:
  - If `externalUrl` is set, the card opens that link in a new tab.
  - If `externalUrl` is missing, the card is non-clickable.

On the Home page, `HomeNewsSection.tsx` displays the latest 3 news items using the same cards.

---

## 8) Publications page

File: `src/app/(site)/publication/page.tsx`
- Publications are laid out with title, authors, journal, links, and divider lines.
- Title font: Source Sans Pro; authors/journal: EB Garamond; sizes and spacing are set via Tailwind + custom CSS in `src/styles/index.css`.
- To add a new publication, copy an existing entry block and update text and links (`PDF`, journal link).

Fonts & selection
- Custom fonts and selection color (Vox yellow) are configured in `src/styles/index.css`.

---

## 9) Styling (Tailwind CSS)

Tailwind is a utility-first CSS framework. You apply classes directly on elements like:
```tsx
<h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">Heading</h2>
```

Configuration: `tailwind.config.ts`
- The `content` section tells Tailwind where to look for class names (e.g., `src/**/*.{ts,tsx}`)
- You can extend theme (colors, fonts) if needed.

Global CSS: `src/styles/index.css`
- Imports fonts (Source Sans Pro, EB Garamond)
- Custom selection color
- Publication-specific rules (e.g., letter spacing)

Dark mode
- This project leverages Tailwind’s dark classes (e.g., `dark:bg-dark`).

---

## 10) Images & Assets

- Put images in `public/images/...`. You can reference them with absolute paths: `/images/...`.
- People photos: `public/images/team/`
- Research images: `public/images/research/`
- Logos/icons: `public/images/logo/`
- Favicon: `public/favicon.ico` (handled by `src/app/layout.tsx` metadata icons)

---

## 11) Troubleshooting

- Favicon conflict error
  - Ensure there is NO `src/app/favicon.ico` when you already have `public/favicon.ico` and icons configured in `layout.tsx`.

- Image not showing at small screens
  - Ensure the image container has a defined height or aspect ratio. We use responsive heights/ratios in Research to guarantee visibility.

- News card doesn’t open external link
  - Add `externalUrl` to the markdown frontmatter.

- Styles not applying
  - Check that you’ve saved files with Tailwind classes. Tailwind only generates classes it finds in files listed in `tailwind.config.ts`.

---

## 12) Where to Change What (Cheat Sheet)

- Menu items: `src/components/Header/menuData.tsx`
- Footer logos/links: `src/components/Footer/index.tsx`
- People profiles: `src/components/Team/index.tsx` (data + modal), images `public/images/team/`
- Publications: `src/app/(site)/publication/page.tsx` (+ font rules in `src/styles/index.css`)
- Projects: `src/app/(site)/projects/page.tsx` (edit `projectCards`)
- Resources: `src/app/(site)/resources/page.tsx` (edit `resources`)
- Research: `src/app/(site)/research/page.tsx` (text + images/iframe sizing)
- News (list): `src/app/(site)/news/page.tsx`; entries: `markdown/news/*.mdx`
- Home News snippet: `src/components/News/HomeNewsSection.tsx`

If you get stuck, open the relevant file, search for the section title, and update the text/classes directly. Save and refresh the browser.

---

## 13) Conventions & Tips

- Prefer editing content directly in `page.tsx` files for pages, and in the arrays for People/Projects/Resources.
- Use Tailwind utilities for spacing and fonts; keep styles co-located with the JSX.
- Keep images under `public/images/...` and reference with absolute paths (starting with `/`).
- For news cards, set `externalUrl` in markdown if the card should open an external site.

---


