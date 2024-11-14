# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

INSTALLATION GUIDE: before creating folders, 
npm install --gobal yarn 
yarn init (type project names) yarn 
install "stop reactjs app before adding packages with yarn"

creating folders, 
yarn create vite client > React > JavaScript -once client directory up, from terminal;
cd client > yarn;
 -after yarn installed in client> directory, type yarn dev;
 (to get port number for browser open) -add React Dev Tools Chrome extension on Chrome browser

SETUP CSS {
Replacing App.css with tailwind.config.js:
cd client > yarn add tailwindcss postcss autoprefixer > npx tailwindcss init -p

point css to tailwindcss and postcss.config.js using index.css:
index.css > @tailwind base; @tailwind components; @tailwind utilities;

setup tailwind.config.js > point content:["./src/*.jsx"] ;
safely delete App.css files
}

START CODING 37:15min
