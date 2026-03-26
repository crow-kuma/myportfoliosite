# myPortfolioSite

# 🖼️ Portfolio Site (Astro + react + Sanity)

This is a personal illustration portfolio site powered by **Astro**, **React**, and **Sanity** (Headless CMS).

## 📁 Project Structure

```
portfolio/
├── portfolioAstro/ # Frontend (Astro + react)
├── portfolioSanity/ # CMS backend (Sanity Studio)
├── bin/
│ └── run.sh # Script to run both Astro and Sanity dev servers
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies (both frontend & CMS)

cd portfolio/portfolioAstro
npm install

cd ../portfolioSanity
npm install

### 2. Start both Astro and Sanity development servers

You can run both servers at once using the provided shell script:

./bin/run.sh

This runs:

- `npm run dev` in `portfolioAstro` (usually at http://localhost:4321)
- `npm run dev` in `portfolioSanity` (usually at http://localhost:3333)

---

## 🧠 Technologies Used

- [Astro](https://astro.build/) (`6.0.8`) – Static site generator for modern web (Target: Netlify static).
- [Vite](https://vitejs.dev/) (`7.3.1`) – Build tool used by Astro for lightning-fast bundling.
- [React](https://react.dev/) (`19.2.4`) – UI framework for client interactivity.
- [Sanity](https://www.sanity.io/) (`5.18.0` Studio, `7.17.0` Client) – Headless CMS backend with live editor.

---

## 📦 Build (Astro only)

To generate a production build locally:

cd portfolioAstro
npm run build

The output will be generated in `portfolioAstro/dist` and configured for deployment on **Netlify**.

---

## 📝 Notes

- Git is initialized at the root `portfolio/` directory, tracking both `portfolioAstro` and `portfolioSanity`.
- `.gitignore` entries are configured to exclude Node modules, build artifacts, and sensitive files from both sub-projects.
- You can push to GitHub from the `portfolio` directory as a mono-repo.
- This structure allows independent development and clean separation of frontend and CMS.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) unless otherwise noted.
