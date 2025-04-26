# YumAuth 🍳 - Dynamic Recipe Application

**YumAuth** is a dynamic web application built with React and Vite. It allows users to browse, search, and view detailed recipes. While it offers a simple and clean design, it includes real protected routes for viewing recipe details and performing searches, enhancing the user experience with authentication-based navigation.

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.5-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/ReactQuery-5.74.4-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)

---

## 📚 Table of Contents

- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Technologies Used

This project leverages modern web technologies:

- **React 19**: Building reusable UI components.
- **Vite**: Super fast bundler and dev server.
- **TailwindCSS**: Utility-first CSS framework.
- **Flowbite**: Ready-to-use TailwindCSS components.
- **React Router DOM 7**: Handling client-side routing and protected routes.
- **Formik & Yup**: Form management and validation.
- **Axios**: Making API requests.
- **@tanstack/react-query**: Data fetching and caching.
- **Framer Motion**: Smooth animations.
- **react-use-online-offline**: Detecting network status (online/offline).

---

## 🛠️ Setup

Follow these steps to get the project running locally:

### 1. Clone the repository:

```bash
git clone https://github.com/Amrr-Maherr/YumAuth.git
```

### 2. Navigate to the project directory:

```bash
cd YumAuth
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the development server:

```bash
npm run dev
```

Then open your browser at: [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

- 💾 Browse a collection of delicious recipes.
- 🔍 Search for recipes with keywords.
- 📃 View detailed information about a recipe.
- 🔒 Access search and detail pages only after authentication (protected routes).
- 🌐 Network status detection: See when you go offline or back online.
- 🎨 Fully responsive mobile-first design with TailwindCSS.
- ⚡ Optimized performance with Vite and React Query.
- ✨ Smooth UI animations with Framer Motion.

---

## 📂 Folder Structure

```plaintext
.
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and icons
│   ├── components/          # Reusable components (e.g., Navbar, RecipeCard)
│   ├── pages/               # Home, Search, Recipe Details
│   ├── routes/              # Protected routes and navigation logic
│   ├── utils/               # API calls, validation schemas
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # ReactDOM entry point
│   └── index.css            # TailwindCSS configuration
├── tailwind.config.js       # Tailwind customization
├── vite.config.js           # Vite settings
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---

## 📖 How to Use

1. Login/authenticate to gain access to protected areas (search & recipe details).
2. Browse recipes on the homepage.
3. Use the search bar to filter recipes by name.
4. Click on a recipe to view more detailed information.

---

## 🤝 Contributing

Contributions are welcome!  
If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to your forked repo (`git push origin feature/YourFeature`).
5. Create a Pull Request.

Please open an issue first for major changes.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---


