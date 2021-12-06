import { recipes } from "../js/recipes.js";

const recipesList = document.getElementById("recepies-cards");
const searchBar = document.getElementById("search__bar");
const ingredientsList = document.getElementById("ingredients-list");
const appareilList = document.getElementById("appareil-list");
const ustensilesList = document.getElementById("ustensiles-list");
const searchIngredients = document.getElementById("search__ingredient");
const searchAppareil = document.getElementById("search__appareil");
const searchUstensiles = document.getElementById("search__ustensiles");

let filteredRecipes = [];

let filteredAppList2tag = [];

// let filteredAppliancesList = [];
let tagsicon;
// tag variables
let filteredIngTag = [];

let filteredAppTag = [];

let filteredUstTag = [];

let searchInputResult = [];

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
      if (!uniqueUstensils.includes(ustensil)) uniqueUstensils.push(ustensil);
    });
  });
  return uniqueUstensils;
}

// display LIST AND RECIPES

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

const displayIngredients = (uniqueIngredients) => {
  const htmlString = uniqueIngredients
    .map((uniqueIngredient) => {
      return `<li class="recepiesList__ingredients" id="recepiesList__ingredients">${uniqueIngredient}</li>`;
    })
    .join("");
  ingredientsList.innerHTML = htmlString;
};

const displayAppareil = (uniqueAppliances) => {
  const htmlString = uniqueAppliances
    .map((uniqueAppliance) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${uniqueAppliance}</li>`;
    })
    .join("");

  appareilList.innerHTML = htmlString;
};

const displayUstensiles = (uniqueUstensils) => {
  const htmlString = uniqueUstensils
    .map((uniqueUstensil) => {
      return `<li class="recepiesList__ustensil" id="recepiesList__ustensil">${uniqueUstensil}</li>`;
    })
    .join("");
  ustensilesList.innerHTML = htmlString;
};

// MAIN SEARCH
searchBar.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  searchInputResult = filteredRecipes;
  console.log(searchInputResult);

  let notFound = document.getElementById("not-found");
  let searchError = document.getElementById("search__error");

  if (search.length < 3) {
    // searchError.style.display = "inline-block";
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
  } else if (search.length > 2) {
    // searchError.style.display = "none";
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
  } else {
    notFound.style.display = "inline-block";
    console.log("not found");
  }
});

/**
 *
 *   Appareil SEARCH BY INPUT
 */

// search input Appareil
searchAppareil.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  if (search.length < 2) {
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
  } else if (filteredRecipes.length > 0) {
    //if global search exist

    console.log("show only list of filtered appliance by MAIN SEARCH");

    const filteredAppList2 = filteredRecipes.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });

    const filteredUniqueIngredients = findUniqueIng(filteredAppList2);
    const filteredUniqueAppliances = findUniqueApp(filteredAppList2);
    const filteredUniqueUstensiles = findUniqueUst(filteredAppList2);

    displayRecipes(filteredAppList2);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);

    console.log(filteredAppList2);
  } else if (filteredAppTag.length > 0) {
    //if appliance tag exist
    console.log(filteredAppTag);
    console.log("show only list of filtered appliance by applinace tag SEARCH");

    const searchAppTag = filteredAppTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    const filteredUniqueAppliances = findUniqueApp(searchAppTag);
    displayAppareil(filteredUniqueAppliances);
    displayRecipes(searchAppTag);
    
  } else if (search.length > 2) {
    console.log("show list of all appliance");
    filteredRecipes = recipes.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });

    const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
    const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
    const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

    displayRecipes(filteredRecipes);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  } else {
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
  }
});

appareilList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

  if (filteredRecipes.length < 0) {
      // filter list Recipes by selectigna  tag
   const filteredApplianceTag = recipes.filter((recipe) => {
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
  
      const filteredUniqueIngredients = findUniqueIng(filteredApplianceTag);
      const filteredUniqueAppliances = findUniqueApp(filteredApplianceTag);
      const filteredUniqueUstensiles = findUniqueUst(filteredApplianceTag);
  
      displayRecipes(filteredApplianceTag);
      displayIngredients(filteredUniqueIngredients);
      displayAppareil(filteredUniqueAppliances);
      displayUstensiles(filteredUniqueUstensiles);
  } else {
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
  }


//   if (filteredRecipes.length > 0) {
//     //if main search exist
//     console.log("show only list of filtered appliance by MAIN SEARCH");

//     filteredAppList2tag = filteredRecipes.filter((recipe) => {
//       return recipe.appliance.toLowerCase().includes(search);
//     });

//     const filteredUniqueAppliances = findUniqueApp(filteredAppList2tag);
//     displayAppareil(filteredUniqueAppliances);
//     displayRecipes(filteredAppList2tag);
//     console.log(filteredAppList2tag);

//   } else if (filteredRecipes.length > 0) {
//     console.log("nesto drugo");
//   } else if (filteredAppTag.length > 0) {
//     //if filteredAppTag search exist
//     console.log(filteredAppTag);
//     console.log("show only list of filtered appliance by app TAG");

//     const searchAppTag = filteredAppTag.filter((recipe) => {
//       return recipe.appliance.toLowerCase().includes(search);
//     });

//     const filteredUniqueAppliances = findUniqueApp(searchAppTag);
//     displayAppareil(filteredUniqueAppliances);
//     displayRecipes(searchAppTag);

//     console.log(searchAppTag);
//   }
});

// make TAG button from selected appareil-list

appareilList.addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);

  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
    let tagsApp = document.createElement("div");
    tagsApp.setAttribute("class", "tagsAppNew");
    tagsApp.setAttribute("id", "tagsAppNew");
    //   console.log(tagsApp);
    let newTag = document.getElementById("appTags");
    //   console.log(newTag);
    newTag.appendChild(tagsApp);
    tagsApp.textContent = e.target.textContent;

    // add fontawesome Icon
    tagsicon = document.createElement("div");
    tagsicon.setAttribute("class", "tagsIcon");
    tagsicon.setAttribute("id", "tagsIcon");

    tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';

    tagsApp.appendChild(tagsicon);

    // close TAG on X
    tagsicon.addEventListener("click", () => {
      if (tagsApp.style.display === "none") {
        tagsApp.style.display = "flex";
      } else {
        tagsApp.style.display = "none";
        displayRecipes(recipes);
        displayIngredients(uniqueIngredients);
        displayUstensiles(uniqueUstensils);
        displayAppareil(uniqueAppliances);
      }
    });
  }
});

//   display all

displayRecipes(recipes);
displayIngredients(uniqueIngredients);
displayUstensiles(uniqueUstensils);
displayAppareil(uniqueAppliances);
