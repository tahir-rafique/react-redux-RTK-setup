## Project Details

This repository is a small starter project for showing how to wire React (with Vite) and Redux Toolkit together. The project includes a minimal RTK slice, a Redux store, a simple Counter component, and basic tooling (Vite, ESLint and Tailwind-related deps).

## Key features

- React 19 + Vite dev server with HMR for fast development.
- Redux Toolkit (@reduxjs/toolkit) for concise, recommended Redux patterns (slices, reducers, actions).
- React-Redux for connecting components to the store.
- Example `counter` feature using a slice and a `Counter` component in `src/Components/Counter.jsx`.
- Centralized store at `src/store/store.js` demonstrating how to register slices.
- ESLint configuration and dev dependencies for linting.
- Tailwind-related packages present in `package.json` (ready for styling if configured).

## Project structure (important files)

- `index.html` — app entry page used by Vite.
- `src/main.jsx` — application entry; renders React tree and provides store provider.
- `src/App.jsx` — main app component.
- `src/index.css` — global styles (Tailwind-ready if you enable it).
- `src/Components/Counter.jsx` — example component showing usage of the counter slice.
- `src/store/store.js` — Redux store configuration.
- `src/store/features/counter/counterSlice.js` — example RTK slice containing reducers and actions.
- `package.json` — scripts and dependencies.

## Scripts (from package.json)

Use the project scripts defined in `package.json`:

```powershell
npm run dev     # start Vite dev server (HMR)
npm run build   # build for production
npm run preview # locally preview production build
npm run lint    # run ESLint
```

## Quick start

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

3. Open http://localhost:5173 (or the port Vite shows) in your browser.

## What you can learn from this repo

- How to organize a small React + RTK project with a feature-slice layout.
- How to connect components to the Redux store with `react-redux`.
- How to use Vite for fast local development and production builds.

## Next steps / suggestions

- Add Tailwind CSS configuration and imports if you want to use Tailwind utilities.
- Add unit tests for the slice and components (Jest / React Testing Library).
- Convert to TypeScript for stronger typing and better editor support.

---

If you'd like, I can also:

- wire up Tailwind fully (postcss/tailwind config + example styles),
- add a simple test for the counter slice, or
- convert the store and components to TypeScript.

Happy hacking!
