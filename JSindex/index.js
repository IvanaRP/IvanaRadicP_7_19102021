// import other js
import { recipes } from "../js/recipes.js";
console.log(recipes);

/**
 *
 *   MAKE VARIABLES
 */
// make variable

let filteredIngList = [];
console.log(filteredIngList);

let filteredAppList = [];
console.log(filteredAppList);

let filteredUstList = [];
console.log(filteredUstList);

let filteredRecipes = [];
console.log(filteredRecipes);

let filterIngredient = [];
console.log(filterIngredient);

let searchInputRes = [];
console.log(searchInputRes);

let appliancesAll = [];
console.log(appliancesAll);
recipes.map((recipe) => {
  appliancesAll.push(recipe.appliance);
});

// remove duplicates

let ingredientsTabs = [];
recipes.forEach((recipe) => {
  //recipe ici contient donc recipe.ingredients donc on veut passer sur chacun
  recipe.ingredients.forEach((ingredient) => {
    //là on passe sur chaque ingrédient de chaque recette
    if (!ingredientsTabs.includes(ingredient.ingredient))
      //si le tableau ne contient pas déjà l'ingrédient qu'on regarde (pour éviter les doublons)
      ingredientsTabs.push(ingredient.ingredient); //on ajoute l'ingrédient au tableau
  });
  console.log(ingredientsTabs);
});

// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index;
// }

// var unique = appliancesAll.filter(onlyUnique);

// console.log(unique);

// const uniqueAppliances = [...new Set(appliancesAll)];
// console.log(uniqueAppliances);

// Array.prototype.push.apply(recipes, uniqueAppliances);
// console.log(recipes);

// Array.prototype.push.apply(uniqueAppliances,recipes);
// console.log(uniqueAppliances);
// let allRecipes;
// allRecipes = recipes;
// console.log(allRecipes);

// tag variables
let filteredIngTag = [];
console.log(filteredIngTag);

let filteredAppTag = [];
console.log(filteredAppTag);

let filteredUstTag = [];
console.log(filteredUstTag);

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

//element of  List for ingredients, appareil et ustnesiles
// const ingredientsListTag = document.getElementById("recepies__ingredientsList");
// console.log(ingredientsListTag);

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

/**
 *
 *   DISPLAY INGREDIENTS ARRAY
 */

const displayIngredients = (ingredientsTabs) => {
  const htmlString = ingredientsTabs
    .map((ingredientsTab) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${ingredientsTab}</li>`;
    })
    .join("");
  ingredientsList.innerHTML = htmlString;
};

// const displayIngredients = (ingredientsTab) => {
//   const htmlString = ingredientsTab
//     .map((ingredientsTa) => {
//       //   console.log(recipe.ingredients);
//       let ingredHtml = "";
//       ingredientsTab.forEach((ingredient) => {
//         ingredHtml =
//           ingredHtml +
//           '<li class="recepies__ingredientsList" id="recepies__ingredientsList">' +
//           ingredient.ingredient +
//           "</li>";
//       });
//       return ingredHtml;
//     })
//     .join("");
//   ingredientsList.innerHTML = htmlString;
// };

// const displayIngredients = (recipes) => {
//   const htmlString = recipes
//     .map((recipe) => {
//       //   console.log(recipe.ingredients);
//       let ingredHtml = "";
//       recipe.ingredients.forEach((ingredient) => {
//         ingredHtml =
//           ingredHtml +
//           '<li class="recepies__ingredientsList" id="recepies__ingredientsList">' +
//           ingredient.ingredient +
//           "</li>";
//       });
//       return ingredHtml;
//     })
//     .join("");
//   ingredientsList.innerHTML = htmlString;
// };

/**
 *
 *  APPAREIL ARRAY
 */

// unique appliance list
//  let appliancesAll = [];
//  console.log(appliancesAll);
//  recipes.map((recipe) => {
//    appliancesAll.push(recipe.appliance);
//  });
//  const uniqueAppliances = [...new Set(appliancesAll)];
//  console.log(uniqueAppliances);

//  Array.prototype.push.apply(recipes,uniqueAppliances);
//  console.log(recipes);

//  display appareil List
// const displayAppareil = (recipes) => {
//   const htmlString = uniqueAppliances
//     .map((uniqueAppliance) => {
//       return `<li class="recepiesList__appliance" id="recepiesList__appliance">${uniqueAppliance}</li>`;
//     })
//     .join("");

//   appareilList.innerHTML = htmlString;
// };
// ========================================================
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

// unique USTENSILES list
// let ustensilsAll = [];
// console.log(ustensilsAll);

// recipes.forEach((recipe) => {
//   recipe.ustensils.forEach((ustensils) => {
//     ustensilsAll.push(ustensils);
//   });
// });

// const uniqueUstensils = [...new Set(ustensilsAll)];
// console.log(uniqueUstensils);

// display all Ustensiles List

// const displayUstensiles = (uniqueUstensils) => {
//   const htmlString = uniqueUstensils
//     .map((uniqueUstensil) => {
//       return `<li class="recepiesList__ustensil" id="recepiesList__ustensil">${uniqueUstensil}</li>`;
//     })
//     .join("");

//     ustensilesList.innerHTML = htmlString;
// };

// // display all Ustensiles List
const displayUstensiles = (recipes) => {
  const htmlString = recipes
    .map((recipe) => {
      //   console.log(recipe.ustensiles);
      let UstensilesHtml = "";
      recipe.ustensils.forEach((ustensil) => {
        UstensilesHtml =
          UstensilesHtml +
          '<li class="recepiesList__ustensil">' +
          ustensil +
          "</li>";
      });
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
  const search = e.target.value.toLowerCase();
  console.log(search);
  // e.target.value == "" ||
  searchInputRes = filteredRecipes;
  console.log(searchInputRes);

  let notFound = document.getElementById("not-found");

  let searchError = document.getElementById("search__error");
  console.log(searchError);
  if (search.length < 3) {
    console.log("stop from search");
    searchError.style.display = "inline-block";

    displayRecipes(recipes);
  } else if (search.length > 2) {
    searchError.style.display = "none";

    filterIngredient = ingredientsTabs.filter((ingredientsTab) => {
      // console.log(filterIngredient);
      // console.log(ingredientsTab.toLowerCase());
      return (ingredientsTab.toLowerCase().includes(search)
      );
    });
 
    displayIngredients(filterIngredient);
    // displayIngredients(recipes);

    filteredRecipes = recipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search) ||
        // recipe.ingredients
        //     .map((ingredient) => {
        //       return ingredient.ingredient.toLowerCase();
        //     })
        //     .includes(search) ||
        recipe.ustensils
          .map((ustnesile) => {
            return ustnesile.toLowerCase();
          })
          .includes(search)
      );
    });

    console.log(filteredRecipes);
    displayRecipes(filteredRecipes);
    // displayIngredients(filteredRecipes);
    displayAppareil(filteredRecipes);
    displayUstensiles(filteredRecipes);
    console.log(displayRecipes(filteredRecipes));

    
  } else {
    notFound.style.display = "flex";
    console.log("not found");
  }
});

/**
 *
 *   INGREDIENTS SEARCH BY INPUT
 */
// // INGREDIENTS search bar input

searchIngredients.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);

  searchInputRes;
  console.log(searchInputRes);

  // ===================================
  // let ingredientTab = [];
  // // let search = e.target.value; //on récupère ce qui a été écrit
  // filteredRecipes.forEach(recipe => {
  //    recipe.ingredients.forEach(ingredient => {
  //       if (!ingredientTab.includes(ingredient.ingredient) && ingredient.ingredient.includes(search)) //on regarde que dans le texte de l'ingrédient il y a ce qu'on a tapé, si ce n'est pas le cas on ne met pas dans le tableau
  //          ingredientTab.push(ingredient.ingredient);
  //    })
  // })
  // ingredientsList.innerHTML = ingredientTab;

  // =========================

  if (searchInputRes.length > 0) {
    //if global search exist
    console.log(searchInputRes);
    const filteredIngredientList = searchInputRes.filter((recipe) => {
      console.log("show only search by list already filtered");
      return recipe.ingredients
        .map((ingredient) => {
          return ingredient.ingredient.toLowerCase();
        })
        .includes(searchString);
    });

    console.log(filteredIngredientList);
    displayIngredients(filteredIngredientList);
  } else if (filteredAppList.length > 0) {
    //if appliance search exist
    console.log(filteredAppList);
    const searchIngApp = filteredAppList.filter((recipe) => {
      console.log("show only list of filtered appliance by Appliance SEARCH");
      return recipe.ingredients
        .map((ingredient) => {
          return ingredient.ingredient.toLowerCase();
        })
        .includes(searchString);
    });

    console.log(searchIngApp);
    displayIngredients(searchIngApp);
  } else if (filteredUstList.length > 0) {
    //if ustensil search exist
    console.log(filteredUstList);
    console.log("show only list of filtered appliance by Ustensil SEARCH");
    const searchIngUst = filteredUstList.filter((recipe) => {
      return recipe.ingredients
        .map((ingredient) => {
          return ingredient.ingredient.toLowerCase();
        })
        .includes(searchString);
    });

    console.log(searchIngUst);
    displayIngredients(searchIngUst);
  } else if (filteredIngTag.length > 0) {
    //if ingredient tag exist
    console.log(filteredIngTag);
    console.log(
      "show only list of filtered ingredient by ingredient tag SEARCH"
    );
    const searchIngTag = filteredIngTag.filter((recipe) => {
      return recipe.ingredients
        .map((ingredient) => {
          return ingredient.ingredient.toLowerCase();
        })
        .includes(searchString);
    });
    console.log(searchIngTag);
    displayIngredients(searchIngTag);
  } else {
    filteredIngList = recipes.filter((recipe) => {
      console.log("show list of all ingredients");
      return (
        recipe.name.toLowerCase().includes(searchString) ||
        recipe.appliance.toLowerCase().includes(searchString) ||
        recipe.ingredients
          .map((ingredient) => {
            return ingredient.ingredient.toLowerCase();
          })
          .includes(searchString) ||
        recipe.ustensils.includes(searchString)
      );
    });

    console.log(filteredIngList);

    displayRecipes(filteredIngList);
    displayIngredients(filteredIngList);
    displayAppareil(filteredIngList);
    displayUstensiles(filteredIngList);

    console.log(displayRecipes(filteredIngList));
  }
});
// ======================================================================================

/**
 *
 *   APPAREIL SEARCH BY INPUT
 */

// // APPAREIL search bar input

searchAppareil.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);

  searchInputRes;
  console.log(searchInputRes);

  if (searchInputRes.length > 0) {
    //if global search exist
    console.log(searchInputRes);
    console.log("show only list of filtered appliance by MAIN SEARCH");
    const searchInputRes2 = searchInputRes.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(searchString);
    });
    console.log(searchInputRes2);
    displayAppareil(searchInputRes2);
  } else if (filteredIngList.length > 0) {
    //if ingredient search exist
    console.log(filteredIngList);
    console.log("show only list of filtered appliance by Ingredient SEARCH");
    const searchAppInst = filteredIngList.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(searchString);
    });
    console.log(searchAppInst);
    displayAppareil(searchAppInst);
  } else if (filteredUstList.length > 0) {
    //if ustensil search exist
    console.log(filteredUstList);
    console.log("show only list of filtered appliance by Ustensil SEARCH");
    const searchAppUst = filteredUstList.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(searchString);
    });
    console.log(searchAppUst);
    displayAppareil(searchAppUst);
  } else if (filteredAppTag.length > 0) {
    //if appliance tag exist
    console.log(filteredAppTag);
    console.log("show only list of filtered appliance by applinace tag SEARCH");
    const searchAppTag = filteredAppTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(searchString);
    });
    console.log(searchAppTag);
    displayAppareil(searchAppTag);
  } else {
    filteredAppList = recipes.filter((recipe) => {
      console.log("show list of all appliance");
      return (
        recipe.name.toLowerCase().includes(searchString) ||
        recipe.appliance.toLowerCase().includes(searchString) ||
        recipe.ingredients
          .map((ingredient) => {
            return ingredient.ingredient.toLowerCase();
          })
          .includes(searchString) ||
        recipe.ustensils.includes(searchString)
      );
    });

    console.log(filteredAppList);

    displayRecipes(filteredAppList);
    displayIngredients(filteredAppList);
    displayAppareil(filteredAppList);
    displayUstensiles(filteredAppList);

    console.log(displayRecipes(filteredAppList));
  }
});

// ======================================================================================

/**
 *
 *   USTENSILS SEARCH BY INPUT
 */

// // USTENSILS search bar input

searchUstensiles.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);

  searchInputRes;
  console.log(searchInputRes);

  if (searchInputRes.length > 0) {
    console.log(searchInputRes);
    console.log("show only list of filtered ustensils by MAIN SEARCH");
    const searchInputRes2 = searchInputRes.filter((recipe) => {
      return recipe.ustensils
        .map((ustnesile) => {
          return ustnesile.toLowerCase();
        })
        .includes(searchString);
    });
    console.log(searchInputRes2);
    displayUstensiles(searchInputRes2);
  } else if (filteredIngList.length > 0) {
    //if ingredient search exist
    console.log(filteredIngList);
    console.log("show only list of filtered ustensile by Ingredient SEARCH");
    const searchUstInst = filteredIngList.filter((recipe) => {
      return recipe.ustensils
        .map((ustnesile) => {
          return ustnesile.toLowerCase();
        })
        .includes(searchString);
    });
    console.log(searchUstInst);
    displayUstensiles(searchUstInst);
  } else if (filteredAppList.length > 0) {
    //if appliance search exist
    console.log(filteredAppList);
    const searchUstApp = filteredAppList.filter((recipe) => {
      console.log("show only list of filtered ustensile by Appliance SEARCH");
      return recipe.ustensils
        .map((ustnesile) => {
          return ustnesile.toLowerCase();
        })
        .includes(searchString);
    });

    console.log(searchUstApp);
    displayUstensiles(searchUstApp);
  } else if (filteredUstTag.length > 0) {
    //if ustencil tag exist
    console.log(filteredUstTag);
    console.log("show only list of filtered ustencil by ustencil tag SEARCH");
    const searchUstTag = filteredUstTag.filter((recipe) => {
      return recipe.ustensils
        .map((ustnesile) => {
          return ustnesile.toLowerCase();
        })
        .includes(searchString);
    });
    console.log(searchUstTag);
    displayUstensiles(searchUstTag);
  } else {
    filteredUstList = recipes.filter((recipe) => {
      console.log("show list of all ustensils");
      return (
        recipe.name.toLowerCase().includes(searchString) ||
        recipe.appliance.toLowerCase().includes(searchString) ||
        recipe.ingredients
          .map((ingredient) => {
            return ingredient.ingredient.toLowerCase();
          })
          .includes(searchString) ||
        recipe.ustensils.includes(searchString)
      );
    });

    console.log(filteredUstList);

    displayRecipes(filteredUstList);
    displayIngredients(filteredUstList);
    displayAppareil(filteredUstList);
    displayUstensiles(filteredUstList);

    console.log(displayRecipes(filteredUstList));
  }
});
// ======================================================================================
// ======================================================================================
// ======================================================================================
/**
 *
 * SELECTED  TAG FROM DROPDOWN
 */

/**
 *
 * SELECTED  INGREDIENT TAG FROM DROPDOWN
 */

// TAG
// make TAG button from selected ingredients-list
// locate your element and add the Click Event Listener

ingredientsList.addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);

  // const searchString = e.target.textContent;
  // console.log(searchString);

  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
    let tagsIng = document.createElement("div");
    tagsIng.setAttribute("class", "tagsIngNew");
    tagsIng.setAttribute("id", "tagsIngNew");
    console.log(tagsIng);
    let newTag = document.getElementById("ingTags");
    console.log(newTag);
    newTag.appendChild(tagsIng);
    tagsIng.textContent = e.target.textContent;

    // add fontawesome Icon
    let tagsicon = document.createElement("div");
    tagsicon.setAttribute("class", "tagsIcon");
    tagsicon.setAttribute("id", "tagsIcon");

    tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
    console.log(tagsicon);

    tagsIng.appendChild(tagsicon);
    console.log(tagsicon);

    // close TAG on X
    tagsicon.addEventListener("click", () => {
      if (tagsIng.style.display === "none") {
        tagsIng.style.display = "flex";
      } else {
        tagsIng.style.display = "none";
        displayRecipes(recipes);
      }
    });
  }
});

/**
 *
 * SELECTED APPLIANCE TAG FROM DROPDOWN
 */

// make TAG button from selected appareil-list
// locate your element and add the Click Event Listener
appareilList.addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);

  //   const searchString = e.target.textContent;
  //   console.log(searchString);

  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
    let tagsApp = document.createElement("div");
    tagsApp.setAttribute("class", "tagsAppNew");
    tagsApp.setAttribute("id", "tagsAppNew");
    console.log(tagsApp);
    let newTag = document.getElementById("appTags");
    console.log(newTag);
    newTag.appendChild(tagsApp);
    tagsApp.textContent = e.target.textContent;

    // add fontawesome Icon
    let tagsicon = document.createElement("div");
    tagsicon.setAttribute("class", "tagsIcon");
    tagsicon.setAttribute("id", "tagsIcon");

    tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
    console.log(tagsicon);

    tagsApp.appendChild(tagsicon);
    console.log(tagsicon);

    // close TAG on X
    tagsicon.addEventListener("click", () => {
      if (tagsApp.style.display === "none") {
        tagsApp.style.display = "flex";
      } else {
        tagsApp.style.display = "none";
        displayRecipes(recipes);
      }
    });
  }
});

/**
 *
 * SELECTED USTENCILS TAG FROM DROPDOWN
 */
// make TAG button from selected Ustensils
// locate your element and add the Click Event Listener
ustensilesList.addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);
  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
    let tagsUst = document.createElement("div");
    tagsUst.setAttribute("class", "tagsUstNew");
    tagsUst.setAttribute("id", "tagsUstNew");
    console.log(tagsUst);
    let newTag = document.getElementById("ustTags");
    console.log(newTag);
    newTag.appendChild(tagsUst);
    tagsUst.textContent = e.target.textContent;

    // add fontawesome Icon
    let tagsicon = document.createElement("div");
    tagsicon.setAttribute("class", "tagsIcon");
    tagsicon.setAttribute("id", "tagsIcon");

    tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
    console.log(tagsicon);

    tagsUst.appendChild(tagsicon);
    console.log(tagsicon);

    // close TAG on X
    tagsicon.addEventListener("click", () => {
      if (tagsUst.style.display === "none") {
        tagsUst.style.display = "flex";
      } else {
        tagsUst.style.display = "none";
        displayRecipes(recipes);
        displayAppareil(recipes);
        displayIngredients(recipes);
        displayUstensiles(recipes);
      }
    });
  }
});

// ======================================================================================
// ======================================================================================
// ======================================================================================

/**
 *
 *   INGREDIENT SEARCH BY SELECTED TAG
 */

// // INGREDIENT TAG

ingredientsList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

  if (recipes.length > 0) {
    // ===if list tag is not filteres
    console.log(filteredIngTag);
    console.log("show all list");
    filteredIngTag = recipes.filter((recipe) => {
      console.log("show all list TAG of appliance");
      return (
        recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search) ||
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
    console.log(filteredIngTag);
    displayRecipes(filteredIngTag);
    displayIngredients(filteredIngTag);
    displayAppareil(filteredIngTag);
    displayUstensiles(filteredIngTag);
    console.log(displayRecipes(filteredIngTag));
  } else if (filteredIngTag.length > 0) {
    //if filteredIngTag search exist
    console.log(filteredUstTag);
    console.log("show only list of filtered ingedients by ing TAG");
    const searchIngTag = filteredIngTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchIngTag);
    displayIngredients(searchIngTag);
  } else if (filteredUstTag.length > 0) {
    //if filteredIngTag search exist
    console.log(filteredUstTag);
    console.log("show only list of filtered appliance by Ust TAG");
    const searchIngTagbyUst = filteredUstTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchIngTagbyUst);
    displayIngredients(searchIngTagbyUst);
  } else if (filteredAppTag.length > 0) {
    //if filteredAppTag search exist
    console.log(filteredAppTag);
    console.log("show only list of filtered ingredient by App SEARCH");
    const searchIngTagbyApp = filteredAppTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchIngTagbyApp);
    displayIngredients(searchIngTagbyApp);
  }
});

// ingredientsList.addEventListener("click", (e) => {
//   const search = e.target.textContent.toLowerCase();
//   console.log(search);

//   searchInputRes = filteredRecipes;
//   console.log(searchInputRes);

//   filteredIngTag = recipes.filter((recipe) => {
//     return (
//       recipe.name.toLowerCase().includes(search) ||
//       recipe.appliance.toLowerCase().includes(search) ||
//       recipe.ingredients
//         .map((ingredient) => {
//           return ingredient.ingredient.toLowerCase();
//         })
//         .includes(search) ||
//       recipe.ustensils
//         .map((ustnesile) => {
//           return ustnesile.toLowerCase();
//         })
//         .includes(search)
//     );
//   });
//   console.log(filteredIngTag);
//   displayRecipes(filteredIngTag);
//   displayIngredients(filteredIngTag);
//   displayAppareil(filteredIngTag);
//   displayUstensiles(filteredIngTag);
//   console.log(displayRecipes(filteredIngTag));
// });
// ===================================================================
/**
 *
 *   APPAREIL SEARCH BY SELECTED TAG if else
 */

appareilList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

  if (recipes.length > 0) {
    // ===if list tag is not filteres
    console.log(filteredAppTag);
    console.log("show all list");
    filteredAppTag = recipes.filter((recipe) => {
      console.log("show all list TAG of appliance");
      return (
        recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search) ||
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
    console.log(filteredAppTag);
    displayRecipes(filteredAppTag);
    displayIngredients(filteredAppTag);
    displayAppareil(filteredAppTag);
    displayUstensiles(filteredAppTag);
    console.log(displayRecipes(filteredAppTag));
  } else if (filteredAppTag.length > 0) {
    //if filteredAppTag search exist
    console.log(filteredAppTag);
    console.log("show only list of filtered appliance by app TAG");
    const searchAppTag = filteredAppTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchAppTag);
    displayAppareil(searchAppTag);
  } else if (filteredIngTag.length > 0) {
    //if filteredIngTag search exist
    console.log(filteredIngTag);
    console.log("show only list of filtered appliance by ING TAG");
    const searchAppTagbyIng = filteredIngTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchAppTagbyIng);
    displayAppareil(searchAppTagbyIng);
  } else if (filteredUstTag.length > 0) {
    //if ustensil search exist
    console.log(filteredUstTag);
    console.log("show only list of filtered appliance by Ustensil SEARCH");
    const searchAppTagbyUst = filteredUstTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchAppTagbyUst);
    displayAppareil(searchAppTagbyUst);
  }
});

// ===================================================================
/**
 *
 *   USTENSILES SEARCH BY SELECTED TAG
 */

// // USTENSILES  TAG

ustensilesList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

  if (recipes.length > 0) {
    // ===if list tag is not filteres
    console.log(filteredUstTag);
    console.log("show all list");
    filteredUstTag = recipes.filter((recipe) => {
      console.log("show all list TAG of ustencile");
      return (
        recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search) ||
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
    console.log(filteredUstTag);
    displayRecipes(filteredUstTag);
    displayIngredients(filteredUstTag);
    displayAppareil(filteredUstTag);
    displayUstensiles(filteredUstTag);
    console.log(displayRecipes(filteredUstTag));
  } else if (filteredUstTag.length > 0) {
    //if filteredUstTag search exist
    console.log(filteredUstTag);
    console.log("show only list of filtered appliance by app TAG");
    const searchUstTag = filteredUstTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchUstTag);
    displayUstensiles(searchUstTag);
  } else if (filteredIngTag.length > 0) {
    //if filteredIngTag search exist
    console.log(filteredIngTag);
    console.log("show only list of filtered appliance by ING TAG");
    const searchUstTagbyIng = filteredIngTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchUstTagbyIng);
    displayUstensiles(searchUstTagbyIng);
  } else if (filteredAppTag.length > 0) {
    //if filteredAppTag search exist
    console.log(filteredAppTag);
    console.log("show only list of filtered appliance by Ustensil SEARCH");
    const searchUstTagbyApp = filteredAppTag.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(search);
    });
    console.log(searchUstTagbyApp);
    displayUstensiles(searchUstTagbyApp);
  }
});

// ======================================================================================
// ======================================================================================
// ======================================================================================
/**
 *
 *  CALL ALL FUNCTIONS
 */
//   funcions
displayRecipes(recipes);

displayAppareil(recipes);

displayIngredients(ingredientsTabs);

displayUstensiles(recipes);
