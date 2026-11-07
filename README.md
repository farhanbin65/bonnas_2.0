# Bonna’s 2.0

Edit the page sections in `sections/`. The page order and shared wrapper are in
`index.template.html`, styles are in `css/style.css`, menu names and prices are in `js/menu-data.js`, and interactions are in
`js/main.js` and `js/animations.js`.

After editing, run:

```sh
node scripts/build.mjs
```

Open the generated `index.html` directly in a browser. The build embeds the
sections, styles, and scripts in the HTML. Keep `public/` beside the generated page so the logo, menu photos and PDF can load.
