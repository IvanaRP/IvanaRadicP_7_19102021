import { recipes } from "../js/recipes.js";


const recipesList = document.getElementById("recepies-cards");
const searchBar = document.getElementById("search__bar");
const ingredientsList = document.getElementById("ingredients-list");
const appareilList = document.getElementById("appareil-list");
const ustensilesList = document.getElementById("ustensiles-list");
const searchIngredients = document.getElementById("search__ingredient");
const searchAppareil = document.getElementById("search__appareil");
const searchUstensiles = document.getElementById("search__ustensiles");


let filteredIngList = [];
let filteredAppList = [];
let filteredUstList = [];

let filteredRecipes = [];
let filterIngredient = [];
let filterAppliance = [];
let filterUstensils = [];

let searchInputRes = [];


let uniqueIngredients = [];
uniqueIngredients = findUniqueIng(recipes);

function findUniqueIng(recipes) {
  let uniqueIngredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!uniqueIngredients.includes(ingredient.ingredient))
        uniqueIngredients.push(ingredient.ingredient); 
    });
  });
  return uniqueIngredients;
}


let uniqueAppliances = [];
uniqueAppliances = findUniqueApp(recipes);

function findUniqueApp(recipes) {
let uniqueAppliances = [];
recipes.forEach((recipe) => {
  if (!uniqueAppliances.includes(recipe.appliance))
    uniqueAppliances.push(recipe.appliance);
});
return uniqueAppliances;
}


let uniqueUstensils = [];
uniqueUstensils = findUniqueUst(recipes);

function findUniqueUst(recipes) {
let uniqueUstensils = [];
recipes.forEach((recipe) => {
  recipe.ustensils.forEach((ustensil) => {
    if (!uniqueUstensils.includes(ustensil))
      uniqueUstensils.push(ustensil);
  });
});
return uniqueUstensils;
}


const displayIngredients = (uniqueIngredients) => {
  const htmlString = uniqueIngredients
    .map((ingredientsTab) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${ingredientsTab}</li>`;
    })
    .join("");
  ingredientsList.innerHTML = htmlString;
};

const displayRecipes = (recipes) => {
  const html = recipes
    .map((recipe) => {
      const ingredientHtml = recipe.ingredients
        .map((ingredient) => {
          return `<li id="recepiesIngredient__list" class="recepiesIngredient__list">${ingredient.ingredient}</li>`;
        })
        .join("");

      const ustensilsHtml = recipe.ustensils
        .map((ustensil) => {
          return `<li id="recepiesUstensiles__list" class="recepiesUstensiles__list">${ustensil}</li>`;
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

const displayAppareil = (uniqueAppliances) => {
  const htmlString = uniqueAppliances
    .map((applianceTab) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${applianceTab}</li>`;
    })
    .join("");

  appareilList.innerHTML = htmlString;
};

const displayUstensiles = (uniqueUstensils) => {
  const htmlString = uniqueUstensils
    .map((ustensilsTab) => {
      return `<li class="recepiesList__ustensil" id="recepiesList__ustensil">${ustensilsTab}</li>`;
    })
    .join("");
  ustensilesList.innerHTML = htmlString;
};


searchBar.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();
    
    
    let notFound = document.getElementById("not-found");
    let searchError = document.getElementById("search__error");
    
      searchError.style.display = "none";
  
  
      // filter list Recipes
      filteredRecipes = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(search) ||
          recipe.appliance.toLowerCase().includes(search) ||
          recipe.description.toLowerCase().includes(search) ||
          recipe.ingredients
            .map((ingredient) => {
              return ingredient.ingredient.toLowerCase();
            })
            .includes(search) ||
          recipe.ustensils
            .map((ustnesile) => {
              return ustnesile.toLowerCase();
            })
            .includes(search)
        );
      });
  
      const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
      const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
      const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);


      displayRecipes(filteredRecipes);
      displayIngredients(filteredUniqueIngredients);
      displayAppareil(filteredUniqueAppliances);
      displayUstensiles(filteredUniqueUstensiles);
  });
  
  displayRecipes(recipes);
  displayIngredients(uniqueIngredients);
  displayUstensiles(uniqueUstensils);
  displayAppareil(uniqueAppliances);
  