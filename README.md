# mrjaketay.com

Source for my personal site. React + Vite, React Router for the pages.

## Run it

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output goes to `dist/`. `public/.htaccess` handles the page routes on Hostinger.

## Editing content

Almost all the text (services, projects, work history, certificates) is in `src/data/site.js`.

## Deploys

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and puts the built files on the `deploy` branch. Hostinger pulls from `deploy`.
