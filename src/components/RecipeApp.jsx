import React, { useState } from "react";
import "./RecipeApp.css";

const RecipeApp = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const fetchRecipes = async () => {
    if (!ingredient) {
      setError("Please enter an ingredient.");
      return;
    }

    setLoading(true); // loader start
    setError("");
    setRecipes([]);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals);
        console.log(data.meals);
      } else {
        setError("No recipe found. Try another ingredient.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
        {/*++++++++++ left section here ++++++++++++++ */}

      <div className="search_container">
          <h1 className="title">🍳Recipe Finder</h1>
            <div className="search-box">
                <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    placeholder="Enter ingredient(e.g. chicken)"
                />
                <button onClick={fetchRecipes}>Search</button>
            </div>
            {loading && <div className="loader"></div>} {/* loader */}
            {error && <p className="error">{error}</p>}
      </div>
      
        {/* ++++++++++++ right section here ++++++++++++++++  */}
        
      <div className="recipes">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />

            <div className="recipe-info">
              <h2>{recipe.strMeal}</h2>
              <a
                href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
                target="_blank"
                rel="noreferrer"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeApp;
