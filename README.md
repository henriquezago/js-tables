# Pure JS table VS React table

Project to compare implementation of table in pure JS and React.

Bundled with [Vite](https://vitejs.dev/).

## Running the project

```bash
npm install
npm run dev
```

## Debrief

Things I'd like to improve:

- Table is not ready to receive a different dataset. It's hardcoded to receive the same dataset as the React table.

Trade-off:

- CSS is all centralized and React doesn't have visibility on the classes, meaning it's only reusing the Pure JS table CSS. With more time I'd like to make a modular copy for the React side to showcase my techniques.
- No page input. By copying the table layout in the dashboard app, I've implemented a button based page navigation. With more time I'd like to implement a page input.
