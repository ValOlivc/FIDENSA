# FIDENSA Page (PHP)

Sitio web de FIDENSA GROUP en **PHP** con plantillas modulares, CSS estático y JavaScript vanilla para el carrusel y el header.

## Estructura

```
fidensa-page/
├── public/                 # Document root (servir desde aquí)
│   ├── index.php
│   ├── favicon.svg
│   └── assets/
│       ├── css/
│       ├── js/
│       ├── img/
│       ├── icons/
│       └── servicios/
└── includes/
    ├── config.php          # Datos y helpers (asset, e)
    └── partials/           # Header, footer, banners, secciones
```

## Requisitos

- PHP 8.1 o superior

## Ejecutar en local

Desde la carpeta `fidensa-page`:

```powershell
php -S localhost:8000 -t public
```

Abre: http://localhost:8000

## Secciones

- Header fijo con blur al hacer scroll
- Carrusel Banner 1 / Banner 2 (auto cada 10 s + dots)
- Banner 3 (beneficios)
- Servicios
- Proceso simple (¿Cómo funciona?)
- Footer

## Notas

- Los estilos están en `public/assets/css/`.
- Las imágenes están en `public/assets/img/`, `icons/` y `servicios/`.
