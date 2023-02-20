# Template React

Plantilla para crear aplicaciones web usando Vite, React + TypeScript y Sass

<!-- ![template-react]() -->

## Inicio

Primero instalale las depedencias con yarn, luego copie el [template](./.env.template) con las variables de entorno en
la raiz del proyecto y ejecute el comando `dev`.

```bash
yarn install
cp .env.template .env
yarn dev
```

## Vistas por Defecto

- Auth: Componente de react que valida si el usuarios ha iniciado sesion, ademas de verificar el nivel de acceso a la
  pagina por medio del rol (si lo posee).
- Login: Vista para que el usuario inicie sesion.
- Home: Vista de inicio.
- NotFound: Vista mostrada cuando no se encuentra el recurso solicitado.

## Lista de Comandos

```sh
# Ejecutar en modo desarrollo
yarn dev

# Compilar app a producción
yarn build

# Ejecutar en modo producción
yarn preview

# Formatear todo el código usando prettier
yarn format
```

## Tecnologías Utilizadas

- Vite v4
- React v18
- React-Router v6
- Sass v1.58
- TypeScript v4.9
