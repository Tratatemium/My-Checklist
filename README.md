# My-Checklist

A collaborative study project built at **HYPER ISLAND**.

My-Checklist is a task management app — a simple, accessible checklist where you can add, edit, complete, and delete tasks. The project focuses on component-driven development with a custom design system documented in Storybook.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — dev server and bundler
- [Storybook 10](https://storybook.js.org/) — component documentation and interaction testing
- CSS Modules — scoped component styles
- Context API — global task state

## Getting started

```bash
npm install
```

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Start the dev server at `http://localhost:5173` |
| `npm run storybook` | Start Storybook at `http://localhost:6006`      |
| `npm run build`     | Type-check and build for production             |
| `npm run lint`      | Run ESLint                                      |

## Project structure

```
src/
├── components/
│   ├── features/       # App-specific components (Card, Checklist, ListItem)
│   ├── icons/          # SVG icon components
│   └── ui/             # Reusable UI primitives (Button, Checkbox, InputField, Title)
├── context/
│   └── TasksContext/   # Global task state (Context API)
└── styles/             # Global styles and CSS variables
```
