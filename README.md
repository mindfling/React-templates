# React-templates

ME React js course templates

## templates in branches

Шаблон с помощью vite 5.4.10

Прямо по шаблону in PowerShell

Vite5 it must works at Win7 with fixd vite.5.4.10 at Node.js.16.20.2

```bash
npm create vite@5.4.10 . -- --template react
```

```sh
npm install
```

```sh
npm run dev
```

## React + Vite5.4.10 an React.18.3.1 fixed vers at Node.16.20.2

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

also in `package.json`

```js
    "dev": "vite",
    "start": "vite --open",
    "build": "vite build",
```

```sh
npm i -D hygen
```

and fixed dependences

```js
  "dependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "9.13.0",
    "@types/react": "18.3.12",
    "@types/react-dom": "18.3.1",
    "@vitejs/plugin-react": "4.3.3",
    "eslint": "9.13.0",
    "eslint-plugin-react": "7.37.2",
    "eslint-plugin-react-hooks": "5.0.0",
    "eslint-plugin-react-refresh": "0.4.14",
    "globals": "15.11.0",
    "vite": "5.4.10"
  }
```


## StrictMode

```jsx
  <StrictMode>
    <App />
  </StrictMode>
```


## React Fragment

```jsx
<React.Fragment>
</React.Fragment>
```

```jsx
<Fragment>
</Fragment>
```

empty fragment
```jsx
<>
</>
```

## hygen should work only at CRA

on Create React App
