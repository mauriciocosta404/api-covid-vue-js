# Starter app for Vue + Vite + Tailwind (w/ Eslint & Prettier) projects

This is an extremely simple setup to develop Vue + Tailwind projects with everything you need to have a good development experience (ESlint + Prettier).

Dependencies included:

- vue
- vite, vite-plugin-vue, vite-plugin-eslint
- postcss (needed for Tailwind), tailwindcss, autoprefixer (needed for Tailwind), prettier-plugin-tailwindcss (needed for automatic class sorting for Tailwind w/ Prettier [https://tailwindcss.com/blog/automatic-class-sorting-with-prettier]).
- eslint, eslint-plugin-vue, eslint-config-prettier (needed to avoid conflicts between eslint and prettier [https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/]).

Required plugins (must be installed via VSCode extensions):

- ESLint
- PostCSS Language Support
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- Vue Language Features (Volar)

## Usage

Install required VSCode plugins

Install dependencies:

```
npm install
```

Run the app:

```
npm run dev
```

Add any config values to the **tailwind.config.js** file

To build once, run:

```
npm run build
```

Enjoy! 😋
