# LVLX Premium Landing

Landing page estatica estilo deportivo premium, creada para GitHub + Vercel.

## Que incluye

- Next.js + Tailwind CSS.
- Diseno responsive para desktop, tablet y movil.
- Hero desktop y hero mobile con imagenes generadas.
- Logo SVG editable inspirado en la direccion visual del PSD, sin copiarlo literal.
- Cards premium con imagenes generadas.
- Secciones comerciales: hero, experiencia, retos/activaciones, marcas, servicios, metodo, CTA y footer.
- Sin calendario, sin login, sin panel, sin backend y sin base de datos.

## Correr local

```bash
npm install
npm run dev
```

Luego abre:

```bash
http://localhost:3000
```

## Deploy en Vercel

1. Sube esta carpeta a GitHub.
2. Entra a Vercel.
3. Importa el repositorio.
4. Framework: Next.js.
5. Build command: `npm run build`.
6. Deploy.

## GitHub Pages / export estatico

El proyecto ya tiene `output: "export"` en `next.config.mjs`, por lo que `npm run build` genera una carpeta `out`.

Si el sitio va en una ruta tipo `usuario.github.io/nombre-repo`, define esta variable antes del build:

```bash
NEXT_PUBLIC_BASE_PATH=/nombre-repo npm run build
```

Para Vercel normalmente no hace falta definir `NEXT_PUBLIC_BASE_PATH`.

## Donde cambiar textos

Edita:

```bash
app/page.jsx
```

## Donde cambiar imagenes

Reemplaza archivos en:

```bash
public/assets
```

Manteniendo estos nombres:

- `hero-desktop.webp`
- `hero-mobile.webp`
- `card-runner.webp`
- `card-vikings.webp`
- `card-aqua.webp`
- `card-organizer.webp`
- `logo-generated.webp`

## Nota

La web omite intencionalmente cualquier sistema de calendario, eventos dinamicos, dashboard o base de datos. Esta version esta pensada como landing visual y comercial estatica.
