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
  // } else if (applianceListTag.length > 0) {
  //   //if appliance tag exist
  //   console.log("show list of all appliance = applianceListTag");
   

  //   const filterAppTag = applianceListTag.filter((recipe) => {
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

  //   const filteredUniqueIngredients = findUniqueIng(filterAppTag);
  //   const filteredUniqueAppliances = findUniqueApp(filterAppTag);
  //   const filteredUniqueUstensiles = findUniqueUst(filterAppTag);

  //   displayRecipes(filterAppTag);
  //   displayIngredients(filteredUniqueIngredients);
  //   displayAppareil(filteredUniqueAppliances);
  //   displayUstensiles(filteredUniqueUstensiles);
  } else {
    notFound.style.display = "inline-block";
    console.log("not found");
  }


   if (applianceListTag.length > 0) {
    //if appliance tag exist
    console.log("show list of all appliance = applianceListTag");
   

    const filterAppTag = applianceListTag.filter((recipe) => {
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

    const filteredUniqueIngredients = findUniqueIng(filterAppTag);
    const filteredUniqueAppliances = findUniqueApp(filterAppTag);
    const filteredUniqueUstensiles = findUniqueUst(filterAppTag);

    displayRecipes(filterAppTag);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  } else {
    const filteredUniqueIngredients = findUniqueIng(applianceListTag);
    const filteredUniqueAppliances = findUniqueApp(applianceListTag);
    const filteredUniqueUstensiles = findUniqueUst(applianceListTag);

    displayRecipes(applianceListTag);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  }
});

/**
 *
 *   Appareil SEARCH BY INPUT
 */

// search input Appareil
searchAppareil.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  if (searchInputResult.length > 0) {
    //  if global  main search exist = filter that results
    console.log("show only list of filtered appliance by MAIN SEARCH");
    const filteredAppList = filteredRecipes.filter((recipe) => {
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

    const filteredUniqueIngredients = findUniqueIng(filteredAppList);
    const filteredUniqueAppliances = findUniqueApp(filteredAppList);
    const filteredUniqueUstensiles = findUniqueUst(filteredAppList);

    displayRecipes(filteredAppList);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
    // } else if (filteredIngList.length > 0) {
    //   //if ingredient search exist
    //   console.log(filteredIngList);
    //   console.log("show only list of filtered appliance by Ingredient SEARCH");
    //   const searchAppInst = filteredIngList.filter((recipe) => {
    //     return recipe.appliance.toLowerCase().includes(searchString);
    //   });
    //   console.log(searchAppInst);
    //   displayAppareil(searchAppInst);
    // } else if (filteredUstList.length > 0) {
    //   //if ustensil search exist
    //   console.log(filteredUstList);
    //   console.log("show only list of filtered appliance by Ustensil SEARCH");
    //   const searchAppUst = filteredUstList.filter((recipe) => {
    //     return recipe.appliance.toLowerCase().includes(searchString);
    //   });
    //   console.log(searchAppUst);
    //   displayAppareil(searchAppUst);
    // } else if (applianceListTag.length > 0) {
    //   //if appliance tag exist
    // console.log("show list of all appliance = applianceListTag");
    //   console.log(applianceListTag);

    //   const searchAppTag = applianceListTag.filter((recipe) => {
    //     return recipe.appliance.toLowerCase().includes(searchString);
    //   });
    //   console.log(searchAppTag);
    //   displayAppareil(searchAppTag);
  } else {
    console.log("show list of all appliance");
    // filter list of appliances
    const applianceList = recipes.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });

    console.log(applianceList);

    const filteredUniqueIngredients = findUniqueIng(applianceList);
    const filteredUniqueAppliances = findUniqueApp(applianceList);
    const filteredUniqueUstensiles = findUniqueUst(applianceList);

    displayRecipes(applianceList);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  }
});

appareilList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

  // if (searchInputResult.length > 0) {
    // //  if global  main search exist = filter that results
    // console.log(
    //   "show only list of filtered appliance by MAIN SEARCH = filteredAppListTag"
    // );
    // const filteredAppListTag = filteredRecipes.filter((recipe) => {
    //   return (
    //     recipe.name.toLowerCase().includes(search) ||
    //     recipe.appliance.toLowerCase().includes(search) ||
    //     recipe.description.toLowerCase().includes(search) ||
    //     recipe.ingredients
    //       .map((ingredient) => {
    //         return ingredient.ingredient.toLowerCase();
    //       })
    //       .includes(search) ||
    //     recipe.ustensils
    //       .map((ustensil) => {
    //         return ustensil.toLowerCase();
    //       })
    //       .includes(search)
    //   );
    // });

    // const filteredUniqueIngredients = findUniqueIng(filteredAppListTag);
    // const filteredUniqueAppliances = findUniqueApp(filteredAppListTag);
    // const filteredUniqueUstensiles = findUniqueUst(filteredAppListTag);

    // displayRecipes(filteredAppListTag);
    // displayIngredients(filteredUniqueIngredients);
    // displayAppareil(filteredUniqueAppliances);
    // displayUstensiles(filteredUniqueUstensiles);

  // } else if (applianceListTag.length < 0) {
    console.log("show list of all appliance = applianceListTag");
    // filter list of appliances
    applianceListTag = recipes.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });

    console.log(applianceListTag);

    const filteredUniqueIngredients = findUniqueIng(applianceListTag);
    const filteredUniqueAppliances = findUniqueApp(applianceListTag);
    const filteredUniqueUstensiles = findUniqueUst(applianceListTag);

    displayRecipes(applianceListTag);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  // } else {
  //   console.log(
  //     "show list of rest od  appliance slected tag =applianceSelectedTag"
  //   );
  //   // filter list of appliances that rest after seleted tag
  //   const applianceSelectedTag = applianceListTag.filter((recipe) => {
  //     return recipe.appliance.toLowerCase().includes(search);
  //   });

  //   console.log(applianceSelectedTag);

  //   const filteredUniqueIngredients = findUniqueIng(applianceSelectedTag);
  //   const filteredUniqueAppliances = findUniqueApp(applianceSelectedTag);
  //   const filteredUniqueUstensiles = findUniqueUst(applianceSelectedTag);

  //   displayRecipes(applianceSelectedTag);
  //   displayIngredients(filteredUniqueIngredients);
  //   displayAppareil(filteredUniqueAppliances);
  //   displayUstensiles(filteredUniqueUstensiles);
  // }
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
