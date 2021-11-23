// import other js
import { recipes } from "../js/recipes.js";
console.log(recipes);


/**
 *
 *   MAKE VARIABLES
 */
// make variable

// ===========================================
/**
 *
 *   SELECT BY ID ELEMENTS
 */
// select elements
const recipesList = document.getElementById("recepies-cards");
const searchBar = document.getElementById("search__bar");

// List for ingredients, appareil et ustnesiles
const ingredientsList = document.getElementById("ingredients-list");
const appareilList = document.getElementById("appareil-list");
const ustensilesList = document.getElementById("ustensiles-list");

const inglist = document.getElementById("recepies__ingredientsList");
console.log(inglist);

// search by ingredient input
const searchIngredients = document.getElementById("search__ingredient");
console.log(searchIngredients);

// search by appareil input
const searchAppareil = document.getElementById("search__appareil");
console.log(searchAppareil);

// search by ustensiles input
const searchUstensiles = document.getElementById("search__ustensiles");
console.log(searchUstensiles);

// ===========================================

/**
 *
 *  DISPLAY RECIPES CARDS
 */
// display Recipes cards
const displayRecipes  = (recipes) => {
    const html = recipes
      .map((recipe) => {
        const ingredientHtml = recipe.ingredients
          .map((ingredient) => {
            return `<l id="recepiesIngredient__list" class="recepiesIngredient__list">${ingredient.ingredient}</l>`;
          })
          .join("");
          const ustensilsHtml = recipe.ustensils
          .map((ustensil) => {
            return `<l id="recepiesUstensiles__list" class="recepiesUstensiles__list">${ustensil}</l>`;
          })
          .join("");
        return `
            <div class="recepies__card">
                  <div class="recepies__img"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
                  <div class="recepies__info">
  
                    <div class="recepies__name-time">
                        <h3 class="recepies__name">${recipe.name}</h3>
                        <p class="recepies__time"><i class="far fa-clock"></i>${recipe.time}</p>
                    </div>
  
                    <div class="recepies__ingredients-description"> 
                        <div class="recepies__ingredients">${ingredientHtml}</div>
                        <div class="recepies__ustensil">${ustensilsHtml}</div>
                        <p class="recepies__description">${recipe.description}</p>
                    </div>
                    
                  </div>
              </div>
       
        `;
      })
      .join("");
      recipesList.innerHTML = html;
};

/**
 *
 *   DISPLAY INGREDIENTS ARRAY
 */

const displayIngredients = (recipes) => {
    const htmlString = recipes.map((recipe) => {
    //   console.log(recipe.ingredients);
      let ingredHtml = '';
      recipe.ingredients.forEach(ingredient => {
        ingredHtml = ingredHtml + '<li class="recepies__ingredientsList">' + ingredient.ingredient + '</li>';
      })
  return ingredHtml;
    })
    .join("");
    ingredientsList.innerHTML = htmlString;
};
/**
 *
 *  APPAREIL ARRAY
 */
// display appareil List
const displayAppareil = (recipes) => {
    const htmlString = recipes
    .map((recipe) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${recipe.appliance}</li>`;
    })
    .join(""); 
  
    appareilList.innerHTML = htmlString;
};
/**
 *
 *  USTENSILES ARRAY
 */
// display all Ustensiles List
const displayUstensiles = (recipes) => {
    const htmlString = recipes.map((recipe) => {
    //   console.log(recipe.ustensiles);
      let UstensilesHtml = '';
      recipe.ustensils.forEach(ustensil => {
        UstensilesHtml = UstensilesHtml + '<li class="recepiesList__ustensil">' + ustensil + '</li>';
      })
  return UstensilesHtml;
    })
    .join("");
    ustensilesList.innerHTML = htmlString;
};

// ======================================================================================
/**
 *
 *   MAIN SEARCH BY INPUT
 */
// // MAIN search bar input - if it includes name show in recipes or lists
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
  
    // searchInputRes = filteredRecipes;
    // console.log(searchInputRes);

   const filteredRecipes = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(searchString) ||
          recipe.appliance.toLowerCase().includes(searchString) ||
          recipe.ingredients
            .map((ingredient) => {
              return ingredient.ingredient.toLowerCase();
            })
            .includes(searchString) ||
          recipe.ustensils
                .map((ustnesile) => {
                    return ustnesile.toLowerCase();
                })
          .includes(searchString)
        );
    });
    
    console.log(filteredRecipes);
   
    displayRecipes(filteredRecipes);
    displayIngredients(filteredRecipes);
    displayAppareil(filteredRecipes);
    displayUstensiles(filteredRecipes);

    console.log(displayRecipes(filteredRecipes));

   
});

  
/**
 *
 *  CALL ALL FUNCTIONS
 */
//   funcions
displayRecipes(recipes);

displayAppareil(recipes);

displayIngredients(recipes);

displayUstensiles(recipes);


