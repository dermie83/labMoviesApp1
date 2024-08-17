React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
Expanding the ESLint configuration
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

Configure the top-level parserOptions property like this:
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
Replace plugin:@typescript-eslint/recommended to plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked
Optionally add plugin:@typescript-eslint/stylistic-type-checked
Install eslint-plugin-react and add plugin:react/recommended & plugin:react/jsx-runtime to the extends list
This web app pulls more than 15k movies info from the API.

Live Demo This project is proudly hosted on https://youtu.be/OmrDQBgDp_8

Tools React Js MUI React Router react-query storybook - This was used initially in the project for demonstration porposes. It may need more work and updating!

Installation If you want to install this project locally:

Clone the repo: git clone https://github.com/dermie83/labMoviesApp.git Change directory: cd react-movie-db Install packages: npm install Launch project: npm run dev Author Email - 20104123@mail.wit.ie
