// import other js
import { recipes } from "../js/recipes.js";
console.log(recipes);
// select elements
const recipesList = document.getElementById("recepies-cards");
const searchBar = document.getElementById("search__bar");

// List for ingredients, appareil et ustnesiles
const ingredientsList = document.getElementById("ingredients-list");
const appareilList = document.getElementById("appareil-list");
const ustensilesList = document.getElementById("ustensiles-list");


// let filteredRecipes = [];
// console.log(filteredRecipes);
// remove duplicats appliance

let applianceTabs = [];
recipes.forEach((recipe) => {
  if (!applianceTabs.includes(recipe.appliance))
    applianceTabs.push(recipe.appliance);
});
console.log(applianceTabs);



// tuto for loop

function selectElement(selector) {
  return document.querySelector(selector);
}

// clears the content inside of the search results
function clearResults() {
  selectElement(".recepies-cards").innerHTML = "";
}

// function getResults() {
//   const search = selectElement(".search__bar").value;

//   clearResults();
//   // if (search.lenght > 0) {

//   // }

//   if (search.length < 3) {
//     console.log("stop from search");
//     displayRecipes(recipes);
//     displayAppareil(applianceTabs);
//   } else {
//     for (let i = 0; i < recipes.length; i++) {
//       if (
//         recipes[i].name.toLowerCase().includes(search.toLowerCase()) ||
//         recipes[i].appliance.toLowerCase().includes(search.toLowerCase()) ||
//         recipes[i].description.toLowerCase().includes(search.toLowerCase()) ||
//         recipes[i].ustensils.includes(search.toLowerCase())
//       ){
//         recipesList.innerHTML += `
//       <div class="recepies__card">
//       <div class="recepies__img"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
//       <div class="recepies__info">
//        <div class="recepies__name-time">
//             <h3 class="recepies__name">${recipes[i].name}</h3>
//             <p class="recepies__time"><i class="far fa-clock"></i>${recipes[i].time}</p>
//         </div>
//         <div class="recepies__ingredients-description"> 
//             <div class="recepies__ingredients">${recipes[i].ingredients}</div>
//             <div class="recepies__ustensil">${recipes[i].ustensils}</div>
//             <li <a href="#"class="recepies__description">${recipes[i].description} </a></li>
//         </div>
//         </div>
//         </div>
//         `;
//         }
//       }
//     }
// }

function getResults() {
  const search = selectElement(".search__bar").value;

  clearResults();
  // if (search.lenght > 0) {

  // }

  if (search.length < 3) {
    console.log("stop from search");
    displayRecipes(recipes);
    displayAppareil(applianceTabs);
  } else {
    for (let i = 0; i < applianceTabs.length; i++) {
      if (
        applianceTabs[i].includes(search.toLowerCase())
        
      ){
        appareilList.innerHTML += `
        <li class="recepiesList__appliance" id="recepiesList__appliance">${applianceTabs[i]}</li>
        `;
        }
      }
    }
}

selectElement(".search__bar").addEventListener("keyup", getResults);

// /**
//  *
//  *  DISPLAY RECIPES CARDS
//  */
// display Recipes cards
const displayRecipes = (recipes) => {
  const html = recipes
    .map((recipe) => {
      const ingredientHtml = recipe.ingredients
        .map((ingredient) => {
          return `<li id="recepiesIngredient__list" class="recepiesIngredient__list">${ingredient.ingredient}</a></li>`;
        })
        .join("");
      const ustensilsHtml = recipe.ustensils
        .map((ustensil) => {
          return `<li id="recepiesUstensiles__list" class="recepiesUstensiles__list">${ustensil}</l>`;
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
                          <li <a href="#"class="recepies__description">${recipe.description} </a></li>
                      </div>
                      
                    </div>
                </div>
         
          `;
    })
    .join("");
  recipesList.innerHTML = html;
};


// ========================================================
// display appareil List
const displayAppareil = (applianceTabs) => {
  const htmlString = applianceTabs
    .map((applianceTab) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${applianceTab}</li>`;
    })
    .join("");

  appareilList.innerHTML = htmlString;
};

displayRecipes(recipes);

displayAppareil(applianceTabs);
