# Template React

<!-- ![template-react]() -->

Plantilla para crear aplicaciones web usando Vite, React + TypeScript y Sass

## Inicio

Instalar las depedencias usando `pnpm` y luego ejecutar el proyecto en modo desarrollo con el comando `dev`

```sh
corepack enable
pnpm install
pnpm dev
```

## Variables de Entorno

Copiar la [plantilla](./.env.template) con las variables de entorno en la raíz del proyecto y documentar el tipado en el
archivo [env.d.ts](./src/@types/env.d.ts)

```sh
cp .env.template .env
```

## Vistas por Defecto

- `Auth`: Componente de react que valida si el usuarios ha iniciado sesion, ademas de verificar el nivel de acceso a la
  pagina por medio del rol (si lo posee).
- `Login`: Vista para que el usuario inicie sesion.
- `Home`: Vista principal.
- `NotFound`: Vista mostrada cuando no se encuentra la página solicitada.

## Lista de Comandos

```sh
# Ejecutar en modo desarrollo
pnpm dev

# Compilar app a producción
pnpm build

# Ejecutar en modo producción
pnpm preview

# Ejecutar el linter
pnpm lint

# Formatear todo el código usando prettier
pnpm format
```

## Tecnologías Utilizadas

- Vite v4
- React v18
- React-Router v6
- Sass v1.58
- TypeScript v4.9

## Licencia

[MIT](https://github.com/EdixonAlberto/template-react/blob/main/LICENSE) &copy; Edixon Piña
