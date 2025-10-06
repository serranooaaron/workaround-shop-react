# WorkAround Shop React

Este proyecto es una tienda online desarrollada con **React** y **Vite**. Incluye una barra de navegación, un widget de carrito interactivo y un contenedor de productos, todo con estilos personalizados y diseño responsive.

## Estructura del Proyecto

```
MyReactApp/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── cart-icon.png
│   │   └── react.svg
│   ├── components/
│   │   ├── CartWidget.jsx
│   │   ├── ItemListContainer.jsx
│   │   └── NavBar.jsx
│   └── styles/
│       ├── CartWidget.css
│       ├── itemListContainer.css
│       └── navbar.css
├── package.json
├── vite.config.js
└── README.md
```

## Componentes Principales

- **NavBar.jsx**: Barra de navegación principal con enlaces y el carrito.
- **CartWidget.jsx**: Widget de carrito con contador y botones para sumar/restar productos.
- **ItemListContainer.jsx**: Contenedor para mostrar mensajes o productos.

## Estilos

Los estilos están organizados en la carpeta `src/styles/` y utilizan Flexbox y media queries para asegurar un diseño responsive.

## Personalización y Responsividad

- El header y la navbar usan Flexbox y `flex-wrap` para adaptarse a diferentes tamaños de pantalla.
- Se utilizan media queries para mejorar la experiencia en dispositivos móviles.
- Los íconos y assets están en `src/assets/` y se importan como módulos en los componentes.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Genera la build de producción.
- `npm run preview`: Previsualiza la build de producción.
- `npm run lint`: Ejecuta ESLint para analizar el código.

## Dependencias

- **React** 19+
- **Vite** 7+
- **ESLint** para control de calidad del código

## Cómo iniciar el proyecto

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Notas

- El proyecto está pensado para ser una base de e-commerce, fácilmente ampliable.
- Los estilos y componentes pueden personalizarse según tus necesidades.

## DEPLOY: https://workaround-shop-react.vercel.app/

Desarrollado por [serranooaaron](https://github.com/serranooaaron)
