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

let applianceListTag = [];

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

//   if (search.length < 3) {
//     searchError.style.display = "inline-block";
//     displayRecipes(recipes);
//     displayIngredients(uniqueIngredients);
//     displayUstensiles(uniqueUstensils);
//     displayAppareil(uniqueAppliances);
 
//   } else {
//     searchError.style.display = "none";
//   }

  if (search.length > 2) {
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
          .map((ustensil) => {
            return ustensil.toLowerCase();
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
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
  }

});


/**
 *
 *   Appareil SEARCH BY INPUT
 */

// search input Appareil
searchAppareil.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();
  console.log(search);
  const filteredAppList = [];
if (searchInputResult.length > 0) {
      //  if global  main search exist = filter that results
      console.log("show only list of filtered appliance by MAIN SEARCH");
      filteredAppList = filteredRecipes.filter((recipe) => {
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
            .map((ustensil) => {
              return ustensil.toLowerCase();
            })
            .includes(search)
        );
      });
      console.log(filteredAppList);
      const filteredUniqueIngredients = findUniqueIng(filteredAppList);
      const filteredUniqueAppliances = findUniqueApp(filteredAppList);
      const filteredUniqueUstensiles = findUniqueUst(filteredAppList);
  
      displayRecipes(filteredAppList);
      displayIngredients(filteredUniqueIngredients);
      displayAppareil(filteredUniqueAppliances);
      displayUstensiles(filteredUniqueUstensiles);
} else {
    // display all list of appliances
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
}


// if main search doesnt exists
if (filteredAppList.length > 0) {
     // filter aplliance list 
     console.log(searchInputResult);
   const filteredApplianceList = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(search) ||
          recipe.appliance.toLowerCase().includes(search)
           ||
          recipe.description.toLowerCase().includes(search) ||
          recipe.ingredients
            .map((ingredient) => {
              return ingredient.ingredient.toLowerCase();
            })
            .includes(search) ||
          recipe.ustensils
            .map((ustensil) => {
              return ustensil.toLowerCase();
            })
            .includes(search)
        );
      });
      console.log(filteredApplianceList);
      const filteredUniqueIngredients = findUniqueIng(filteredApplianceList);
      const filteredUniqueAppliances = findUniqueApp(filteredApplianceList);
      const filteredUniqueUstensiles = findUniqueUst(filteredApplianceList);
  
      displayRecipes(filteredApplianceList);
      displayIngredients(filteredUniqueIngredients);
      displayAppareil(filteredUniqueAppliances);
      displayUstensiles(filteredUniqueUstensiles);
} else {
        // display all list of appliances
        displayRecipes(recipes);
        displayIngredients(uniqueIngredients);
        displayUstensiles(uniqueUstensils);
        displayAppareil(uniqueAppliances);
}




    // if (searchInputResult.length > 0) {
    //   //  if global  main search exist = filter that results
    //   console.log("show only list of filtered appliance by MAIN SEARCH");
    //   const filteredAppList = filteredRecipes.filter((recipe) => {
    //     return (
    //       recipe.name.toLowerCase().includes(search) ||
    //       recipe.appliance.toLowerCase().includes(search) ||
    //       recipe.description.toLowerCase().includes(search) ||
    //       recipe.ingredients
    //         .map((ingredient) => {
    //           return ingredient.ingredient.toLowerCase();
    //         })
    //         .includes(search) ||
    //       recipe.ustensils
    //         .map((ustensil) => {
    //           return ustensil.toLowerCase();
    //         })
    //         .includes(search)
    //     );
    //   });
  
    //   const filteredUniqueIngredients = findUniqueIng(filteredAppList);
    //   const filteredUniqueAppliances = findUniqueApp(filteredAppList);
    //   const filteredUniqueUstensiles = findUniqueUst(filteredAppList);
  
    //   displayRecipes(filteredAppList);
    //   displayIngredients(filteredUniqueIngredients);
    //   displayAppareil(filteredUniqueAppliances);
    //   displayUstensiles(filteredUniqueUstensiles);
    //   // } else if (filteredIngList.length > 0) {
    //   //   //if ingredient search exist
    //   //   console.log(filteredIngList);
    //   //   console.log("show only list of filtered appliance by Ingredient SEARCH");
    //   //   const searchAppInst = filteredIngList.filter((recipe) => {
    //   //     return recipe.appliance.toLowerCase().includes(searchString);
    //   //   });
    //   //   console.log(searchAppInst);
    //   //   displayAppareil(searchAppInst);
    //   // } else if (filteredUstList.length > 0) {
    //   //   //if ustensil search exist
    //   //   console.log(filteredUstList);
    //   //   console.log("show only list of filtered appliance by Ustensil SEARCH");
    //   //   const searchAppUst = filteredUstList.filter((recipe) => {
    //   //     return recipe.appliance.toLowerCase().includes(searchString);
    //   //   });
    //   //   console.log(searchAppUst);
    //   //   displayAppareil(searchAppUst);
    //   // } else if (applianceListTag.length > 0) {
    //   //   //if appliance tag exist
    //   // console.log("show list of all appliance = applianceListTag");
    //   //   console.log(applianceListTag);
  
    //   //   const searchAppTag = applianceListTag.filter((recipe) => {
    //   //     return recipe.appliance.toLowerCase().includes(searchString);
    //   //   });
    //   //   console.log(searchAppTag);
    //   //   displayAppareil(searchAppTag);
    // } else {
    //   console.log("show list of all appliance");
    //   // filter list of appliances
    //   const applianceList = recipes.filter((recipe) => {
    //     return recipe.appliance.toLowerCase().includes(search);
    //   });
  
    //   console.log(applianceList);
  
    //   const filteredUniqueIngredients = findUniqueIng(applianceList);
    //   const filteredUniqueAppliances = findUniqueApp(applianceList);
    //   const filteredUniqueUstensiles = findUniqueUst(applianceList);
  
    //   displayRecipes(applianceList);
    //   displayIngredients(filteredUniqueIngredients);
    //   displayAppareil(filteredUniqueAppliances);
    //   displayUstensiles(filteredUniqueUstensiles);
    // }
  });

/**
 *
 *   Ingredients SEARCH BY INPUT
 */
searchIngredients.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);

  if (filteredRecipes.length > 0) {
    //if global search exist

    console.log("show only list of filtered appliance by MAIN SEARCH");

    const filteredIngList2 = filteredRecipes.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        // recipe.appliance.toLowerCase().includes(search) ||
        // recipe.description.toLowerCase().includes(search) ||
        recipe.ingredients
          .map((ingredient) => {
            return ingredient.ingredient.toLowerCase();
          })
          .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(filteredIngList2);
    const filteredUniqueAppliances = findUniqueApp(filteredIngList2);
    const filteredUniqueUstensiles = findUniqueUst(filteredIngList2);

    displayRecipes(filteredRecipes);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);

    console.log(filteredIngList2);


  } else {
    console.log("show list of all appliance");
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
  }
});





//   display all

displayRecipes(recipes);
displayIngredients(uniqueIngredients);
displayUstensiles(uniqueUstensils);
displayAppareil(uniqueAppliances);
