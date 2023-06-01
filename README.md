# Static portfolio web built by [Astro](https://astro.build) [![Docker Image CI](https://github.com/NghiaNguyen170192/my-blog/actions/workflows/docker-image.yml/badge.svg)](https://github.com/NghiaNguyen170192/my-blog/actions/workflows/docker-image.yml)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├─ public/
│   └─ favicon.ico
├─ src/
│   ├─ components/
│   │       └─ *.astro
│   ├─ layouts/
│   │       └─ BaseLayout.astro
│   │       └─ BlogPostLayout.astro
│   └─ pages/
│           └─ *.mdx
├─ package.json
├─ tsconfig.json
└─ astro.config.mjs
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |


## Production
Please visit [NQTN Blog](https://www.nqtn.online) for demo