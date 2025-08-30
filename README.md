# 🍳 Recipe Finder

**Recipe Finder** is a React-based web application that allows users to search for recipes by ingredient. It utilizes **TheMealDB API** to fetch recipes and is **fully responsive** across mobile, tablet, and desktop devices.

---

## 🔗 Live Demo

[Recipe Finder Live Site](https://ankitkumaar01.github.io/Recipe_Finder/)

---

## 📖 Features

- Search recipes by any ingredient (e.g., chicken, rice, tomato).  
- Display recipe image, name, and a link to the full recipe.  
- Loader animation while fetching data from API.  
- **Responsive design**:
  - **Mobile (≤600px):** Search bar and title centered, recipes displayed in single column.  
  - **Tablet (601px–900px):** Centered search bar, recipes displayed in two columns.  
  - **Desktop (≥901px):** Recipes displayed in three columns.  
- Professional card design with hover effects and gradient-colored buttons.  
- Error handling for network issues or when no recipes are found.

---

## 🛠 Technology Stack

- **Frontend:** React.js (functional components & hooks)  
- **Styling:** Plain CSS with responsive media queries  
- **Data Fetching:** TheMealDB API  
- **Deployment:** GitHub Pages  
- **State Management:** React `useState` & `useEffect`  

---

## 🗂 File Structure

recipe-ideas/
│
├── src/
│ ├── components/
│ │ ├── RecipeApp.jsx # Main component for recipe search and display
│ │ └── RecipeApp.css # CSS for RecipeApp component
│ ├── App.jsx # Root component importing RecipeApp
│ ├── App.css # Optional global CSS
│ └── index.js # Entry point for React
├── package.json
├── vite.config.js # Vite configuration with base URL
└── README.md

## 💻 Usage

1. Enter an ingredient in the search box (e.g., chicken).

2. Click the Search button.

3. Recipes related to the ingredient will display in cards.

4. Click View Recipe → to open the full recipe in the same tab.

## 📝 Notes

This project uses TheMealDB API, which is free and does not require authentication.

Responsive design ensures proper display across devices: mobile, tablet, and desktop.

Loader animation improves user experience while fetching API data.

## 👨‍💻 Author

Ankit Kumaar

📍GitHub: https://github.com/ankitkumaar01

