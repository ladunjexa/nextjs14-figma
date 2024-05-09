# Next.js 14 FigPro (Figma Clone)

<!-- GitHub badges -->

[![Latest release](https://img.shields.io/github/v/release/ladunjexa/nextjs14-figma?label=Latest%20release&style=social)](https://github.com/ladunjexa/nextjs14-figma/releases/tag/v0.1.0)
[![Stars](https://img.shields.io/github/stars/ladunjexa/nextjs14-figma?style=social)](https://github.com/ladunjexa/nextjs14-figma/stargazers)
[![Fork](https://img.shields.io/github/forks/ladunjexa/nextjs14-figma?style=social)](https://github.com/ladunjexa/nextjs14-figma/forks)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/ladunjexa/nextjs14-figma?style=social&logo=github)](https://github.com/ladunjexa/nextjs14-figma/commits)
[![Pull requests](https://img.shields.io/github/issues-pr/ladunjexa/nextjs14-figma?style=social&logo=github)](https://github.com/ladunjexa/nextjs14-figma/pulls)

![demo](https://i.postimg.cc/FHjF4tjS/thumbnail.png)

[![ladunjexa](https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/luadnjexa)
[![License](https://img.shields.io/github/license/ladunjexa/nextjs14-figma?color=dddddd&labelColor=000000)](https://github.com/ladunjexa/nextjs14-figma/blob/main/LICENSE)
[![Top Language](https://img.shields.io/github/languages/top/ladunjexa/nextjs14-figma?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)
[![Contributors](https://img.shields.io/github/contributors/ladunjexa/nextjs14-figma?style=flat&color=orange&label=Contributors)](https://github.com/ladunjexa/nextjs14-figma/graphs/contributors)
![Release](https://img.shields.io/github/release/ladunjexa/nextjs14-figma.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)
![deployment](https://img.shields.io/github/deployments/ladunjexa/nextjs14-figma/Production?logo=vercel&label=Website)
[![Known Vulnerabilities](https://snyk.io/test/github/ladunjexa/nextjs14-figma/badge.svg)](https://snyk.io/test/github/ladunjexa/nextjs14-figma)

## 🌐 Live Demo

Explore the live demonstration of the project: [nextjs14-figma](https://nextjs14-figma.vercel.app/)

## 📝 Description

**FigPro** is a Figma Clone built with Next.js 14 and Tailwind CSS using Liveblocks and Fabric.js.
It is a collaborative design tool for building meaningful products. Seamlessly design, prototype,
develop, and collect feedback in a single platform.

<details><summary><b>Folder Structure</b></summary>

```bash
nextjs14-figma/
├── .vscode/
│   └── settings.json
├── app/
│   ├── (root)/
│   │   └── app.tsx
│   ├── api/
│   │   └── liveblocks/
│   │       └── auth.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── comments/
│   │   ├── comments-overlay.tsx
│   │   ├── comments.tsx
│   │   ├── new-thread-cursor.tsx
│   │   ├── new-thread.tsx
│   │   ├── pinned-composer.tsx
│   │   └── pinned-thread.tsx
│   ├── cursor/
│   │   ├── cursor-chat.tsx
│   │   ├── cursor.tsx
│   │   └── live-cursors.tsx
│   ├── layout/
│   │   ├── left-sidebar.tsx
│   │   ├── loader.tsx
│   │   ├── navbar.tsx
│   │   └── right-sidebar.tsx
│   ├── live.tsx
│   ├── reaction/
│   │   ├── flying-reaction.module.css
│   │   ├── flying-reaction.tsx
│   │   └── reaction-selector.tsx
│   ├── settings/
│   │   ├── color.tsx
│   │   ├── dimension.tsx
│   │   ├── export.tsx
│   │   └── text.tsx
│   ├── shapes-menu.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── select.tsx
│   └── users/
│       ├── avatar.module.css
│       ├── avatar.tsx
│       └── live-avatars.tsx
├── constants/
│   └── index.ts
├── hooks/
│   ├── use-interval.ts
│   └── use-max-z-index.ts
├── lib/
│   ├── canvas.ts
│   ├── key-events.ts
│   ├── shapes.ts
│   └── utils.ts
├── providers/
│   └── room-provider.tsx
├── public/
│   ├── .DS_Store
│   ├── assets/
│   │   ├── CursorSVG.tsx
│   │   └── [[...]].{svg,gif,ico}
│   ├── next.svg
│   ├── thumbnail.png
│   └── vercel.svg
├── types/
│   ├── declaration.d.ts
│   └── index.ts
└── utils/
│   └── get-contrasting-color.ts
├── .env.local
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── components.json
├── liveblocks.config.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Contributing](#-contributing)
  - [Bug / Feature Request](#-bug--feature-request)
- [Acknowledgements](#-acknowledgements)
- [Contact Us](#-contact-us)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>FigPro</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
- [Next.js](https://nextjs.org/): Next.js is a React framework for building server-side rendered and
  statically generated web applications.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [Liveblocks](https://liveblocks.io/): Liveblocks is a real-time collaboration API for building
  collaborative applications.
- [Fabric.js](http://fabricjs.com/): Fabric.js is a powerful and simple JavaScript HTML5 canvas
  library.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Shadcn-UI](https://ui.shadcn.com/): Shadcn UI is a React UI library that helps developers rapidly
  build modern web applications.
- [jsPDF](https://parall.ax/products/jspdf): jsPDF is a client-side JavaScript PDF generation
  library.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the
  frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,nextjs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

> [!IMPORTANT]
>
> - the application uses Liveblocks for Real-time Collaboration, therefore, you need to create
>   Liveblocks account [here](https://liveblocks.io/) and sets the
>   `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` and `NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY` environment
>   variables in `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/ladunjexa/nextjs14-figma.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install
dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script          | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
| `npm run start` | Start your production site locally          |
| `npm run lint`  | Run ESLint                                  |

## 🔒 Environment Variables

Environment variables[^2] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are
> set in the operating system or shell, typically used to configure programs.

**FigPro** uses [Liveblocks](https://liveblocks.io) for real-time collaboration. You need to create
an account on Liveblocks and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment
variables:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<LIVEBLOCKS_PUBLIC_KEY>
NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY=<LIVEBLOCKS_SECRET_KEY>
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Fnextjs14-figma)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/nextjs14-figma)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🔧 Contributing

[![contributors](https://contrib.rocks/image?repo=ladunjexa/nextjs14-figma)](https://github.com/ladunjexa/nextjs14-figma/graphs/contributors)

Contributions are what make the open source community such an amazing place to learn, inspire, and
create. Any contributions you make are **greatly appreciated**.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -m 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request 🎉

### 📩 Bug / Feature Request

If you find a bug (failure of a module to execute its intended function), kindly open an issue
[here](https://github.com/ladunjexa/nextjs14-figma/issues/new) by including the issue with a title
and clear description.

If you'd like to request a new function, feel free to do so by opening an issue
[here](https://github.com/ladunjexa/nextjs14-figma/issues/new). Please include sample queries and
their corresponding results.

## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this project and made it
possible:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Liveblocks](https://liveblocks.io/)
- [Fabric.js](http://fabricjs.com/)
- [Radix](https://radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [jsPDF](https://parall.ax/products/jspdf)
- [UUID](https://www.npmjs.com/package/uuid)
- [Vercel](https://vercel.com/)
- [JavaScript Mastery](https://www.jsmastery.pro/)

## 📞 Contact Us

[![Telegram](https://img.shields.io/badge/Telegram-@ladunjexa-2CA5E0?style=social&logo=telegram&logoColor=000000)](https://t.me/ladunjexa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ladunjexa-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/in/lironabutbul)
[![Instagram](https://img.shields.io/badge/Instagram-ladunjexa-grey?style=flat&logo=instagram&logoColor=b0c0c0&labelColor=8134af)](https://www.instagram.com/ladunjexa)
[![Discord](https://img.shields.io/badge/Discord-ladunjexa-7289da?style=flat&logo=discord&logoColor=b0c0c0&labelColor=2c2f33)](https://discord.com/users/827996364331810816)

<!-- [![Twitter](https://img.shields.io/twitter/follow/ladunjexa.svg?style=social)](https://twitter.com/intent/follow?screen_name=ladunjexa) -->

## 📋 License

**FigPro** is open source software [licensed as MIT](https://opensource.org/license/mit/) and is
free to use — See [LICENSE](https://github.com/ladunjexa/nextjs14-figma/blob/main/LICENSE) for more
details.
