# myPortfolioSite

# 🖼️ Portfolio Site (Astro + react + Sanity)

This is a personal illustration portfolio site powered by **Astro**, **react**, and **Sanity** (Headless CMS), deployed via **Netlify**.

## 📁 Project Structure

portfolio/
├── portfolioAstro/ # Frontend (Astro + react)
├── portfolioSanity/ # CMS backend (Sanity Studio)
├── bin/
│ └── run.sh # Script to run both Astro and Sanity dev servers
├── .gitignore
└── README.md

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

- [Astro](https://astro.build/) – Static site generator for modern web.
- [react](https://www.react.com/) – UI framework for client interactivity.
- [Sanity](https://www.sanity.io/) – Headless CMS backend with live editor.
- [Netlify](https://www.netlify.com/) – Deployment platform.

---

## 📦 Build & Deploy (Astro only)

Astro is deployed to Netlify. To generate a production build locally:

cd portfolioAstro
npm run build

The output will be generated in `portfolioAstro/dist`.

---

## 📝 Notes

- Git is initialized at the root `portfolio/` directory, tracking both `portfolioAstro` and `portfolioSanity`.
- `.gitignore` entries are configured to exclude Node modules, build artifacts, and sensitive files from both sub-projects.
- You can push to GitHub from the `portfolio` directory as a mono-repo.
- This structure allows independent development and clean separation of frontend and CMS.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) unless otherwise noted.
