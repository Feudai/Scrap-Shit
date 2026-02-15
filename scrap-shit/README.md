# My Web App — React Structure

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Folder layout

```
my-webapp/
├── index.html                          ← Vite entry (just a shell)
├── vite.config.js                      ← Vite config
├── package.json
├── public/
│   └── placeholder.svg                 ← Static files served at root /
└── src/
    ├── main.jsx                        ← React entry point
    ├── App.jsx                         ← Root layout component
    ├── components/
    │   ├── Header/
    │   │   ├── Header.jsx              ← Component logic
    │   │   └── Header.module.css       ← Scoped styles
    │   ├── Hero/
    │   │   ├── Hero.jsx
    │   │   └── Hero.module.css
    │   ├── Card/
    │   │   ├── Card.jsx
    │   │   └── Card.module.css
    │   ├── WorkGrid/
    │   │   ├── WorkGrid.jsx
    │   │   └── WorkGrid.module.css
    │   ├── Section/
    │   │   ├── Section.jsx
    │   │   └── Section.module.css
    │   └── Footer/
    │       ├── Footer.jsx
    │       └── Footer.module.css
    ├── hooks/
    │   ├── useInView.js                ← Scroll detection hook
    │   └── useScrolled.js              ← Header scroll hook
    ├── styles/
    │   ├── global.css                  ← Design tokens + reset
    │   └── shared.css                  ← Container, buttons
    ├── assets/                         ← Imported images/fonts
    └── utils/                          ← Shared helper functions
```

## Vanilla → React translation

| Vanilla (what you had)            | React (what you have now)             |
|-----------------------------------|---------------------------------------|
| `base.css` design tokens          | `global.css` — identical              |
| `layout.css` / `components.css`   | `*.module.css` per component          |
| `scroll.js` IntersectionObserver  | `useInView.js` hook + Framer Motion   |
| `header.js` scroll listener       | `useScrolled.js` hook                 |
| `menu.js` toggle class            | `useState()` inside Header            |
| Copy-paste HTML for each card     | `<Card />` component with props       |
| Sections in index.html            | `<Section />` wrapper component       |
| `app.js` imports & inits          | `App.jsx` composes components         |

## Key React concepts used

- **Props**: Pass data to components (`<Card title="..." />`)
- **State**: `useState()` for interactive values (menu open/close)
- **Hooks**: `useScrolled`, `useInView` — reusable behavior
- **CSS Modules**: Scoped styles, no class name conflicts
- **Framer Motion**: Declarative animations (`initial` → `animate`)
