# YumAuth

**YumAuth** is a user-friendly frontend project for browsing, searching, and viewing detailed recipes, with protected routes for search and detail pages.

[🔗 Live Demo](https://yum-auth.vercel.app)

---

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [License](#license)
- [Author](#author)

---

## 📖 About the Project

YumAuth offers a smooth experience for users to:

- Browse all available recipes.
- View detailed information about a selected recipe.
- Search for recipes by keywords.
- Access search and recipe details only after authentication (protected routes).

The project is built with React, Vite, and TailwindCSS, focusing on performance, responsive design, and clean architecture.

---

## ⚙️ Tech Stack

| Technology                   | Purpose                                      |
| ----------------------------- | -------------------------------------------- |
| React                         | Frontend UI Framework                        |
| React Router DOM              | Client-side Routing and Protected Routes     |
| Vite                          | Build Tool for Fast Development              |
| TailwindCSS                   | Utility-first CSS Framework                  |
| Flowbite                      | UI Components built for TailwindCSS          |
| Formik                        | Form State Management                        |
| Yup                           | Form Validation                             |
| Axios                         | HTTP Client for API Requests                 |
| @tanstack/react-query         | Data Fetching, Caching, and Synchronization  |
| Framer Motion                 | Animations and Motion Effects                |
| react-use-online-offline      | Network Status Detection (Online/Offline)    |
| ESLint                        | Linting and Code Quality Tools               |
| PostCSS + Autoprefixer         | CSS Transformation & Cross-browser Support  |
| Heroicons                     | Ready-to-use SVG Icons                       |

---

## ✨ Features

- 🧾 Browse all available recipes with a clean and modern UI.
- 🔍 Search for recipes using keywords.
- 📃 View detailed recipe information.
- 🔒 Protect sensitive pages like Search and Details (require authentication).
- 🎨 Fully responsive and mobile-first design.
- ⚡ Ultra-fast development with Vite.
- 🌐 Detect online/offline network status.
- ✨ Smooth animations using Framer Motion.

---

## 📂 Project Structure

```bash
YumAuth/
├── public/
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable UI components
│   ├── pages/            # Home, Recipe Details, Search
│   ├── routes/           # Protected Routes and Navigation
│   ├── utils/            # Helper functions (validation, API calls)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
