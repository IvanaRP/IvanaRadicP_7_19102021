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

let filteredAppliancesTag = [];

// filter list
let filteredAppareil = [];
let filteredAppareilList = [];
let filteredAppareilTag = [];

// let filteredAppliancesList = [];
let tagsicon;
// tag variables
let filteredIngTag = [];
console.log(filteredIngTag);

let filteredAppTag = [];
console.log(filteredAppTag);

let filteredUstTag = [];
console.log(filteredUstTag);

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
const displayIngredients = (uniqueIngredients) => {
  const htmlString = uniqueIngredients
    .map((uniqueIngredient) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${uniqueIngredient}</li>`;
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
  
  } else {
    notFound.style.display = "inline-block";
    console.log("not found");
  }
});

// Appareil search

// searchAppareil.addEventListener("keyup", (e) => {
//   const search = e.target.value.toLowerCase();

//   // if (main search searched) {
//   //   // if MAIN SEARCH IS SEARCHED =show filtered list
//   // } else if (tag selected) {
//   //   /// if tag selected = show filtered list by tag
//   // } else {
//   //    // nothing searched = show all list of appliances
//   // }

//   // searchInputResult = filteredRecipes;
//   // console.log(searchInputResult);

//   if (filteredRecipes.length > 0) {
//     console.log("filtered by main search");
//     // if MAIN SEARCH IS SEARCHED =show filtered list
//     filteredAppareilList = filteredRecipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(filteredAppareilList);
//     const filteredUniqueAppliances = findUniqueApp(filteredAppareilList);
//     const filteredUniqueUstensiles = findUniqueUst(filteredAppareilList);

//     displayRecipes(filteredAppareilList);
//     displayIngredients(filteredUniqueIngredients);
//     displayAppareil(filteredUniqueAppliances);
//     displayUstensiles(filteredUniqueUstensiles);

//   } else if (filteredAppTag.length > 0) {
//     /// if tag selected = show filtered list by tag
//     console.log("if tag selected = show filtered list by tag");
//     console.log(filteredAppTag);
//     const searchAppTag = filteredAppTag.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueAppliances = findUniqueApp(searchAppTag);
//     displayRecipes(searchAppTag);
//     displayAppareil(filteredUniqueAppliances);

//   } else {
//     // nothing searched = show all list of appliances
//     console.log("show all list of appliances");
//     filteredAppareil = recipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(filteredAppareil);
//     const filteredUniqueAppliances = findUniqueApp(filteredAppareil);
//     const filteredUniqueUstensiles = findUniqueUst(filteredAppareil);

//     displayRecipes(filteredAppareil);
//     displayIngredients(filteredUniqueIngredients);
//     displayAppareil(filteredUniqueAppliances);
//     displayUstensiles(filteredUniqueUstensiles);
//   }
// });

/**
 *
 *   Ingredients SEARCH BY INPUT
 */
// searchIngredients.addEventListener("keyup", (e) => {
//   const search = e.target.value.toLowerCase();
//   console.log(search);

//   if (filteredRecipes.length > 0) {
//     //if global search exist

//     console.log("show only list of filtered appliance by MAIN SEARCH");

//     const filteredIngList2 = filteredRecipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(filteredIngList2);
//     const filteredUniqueAppliances = findUniqueApp(filteredIngList2);
//     const filteredUniqueUstensiles = findUniqueUst(filteredIngList2);

//     displayRecipes(filteredRecipes);
//     displayIngredients(filteredUniqueIngredients);
//     displayAppareil(filteredUniqueAppliances);
//     displayUstensiles(filteredUniqueUstensiles);

//     console.log(filteredIngList2);
//   } else if (filteredAppList.length > 0) {
//     //if appliance search exist
//     console.log(filteredAppList);
//     console.log("show only list of filtered appliance by Appliance SEARCH");

//     const searchIngApp = filteredRecipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(searchIngApp);

//     displayRecipes(searchIngApp);
//     displayIngredients(filteredUniqueIngredients);
//     console.log(searchIngApp);
//   } else if (filteredUstList.length > 0) {
//     //if ustensil search exist
//     console.log(filteredUstList);
//     console.log("show only list of filtered appliance by Ustensil SEARCH");

//     const searchIngUst = filteredUstList.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(searchIngUst);

//     displayIngredients(filteredUniqueIngredients);
//   } else if (filteredIngTag.length > 0) {
//     //if ingredient tag exist
//     console.log(filteredIngTag);
//     console.log(
//       "show only list of filtered ingredient by ingredient tag SEARCH"
//     );

//     const searchIngTag = filteredIngTag.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(searchIngTag);

//     displayAppareil(filteredUniqueIngredients);

//     console.log(searchIngTag);
//   } else {
//     console.log("show list of all appliance");
//     filteredRecipes = recipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
//     const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
//     const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

//     displayRecipes(filteredRecipes);
//     displayIngredients(filteredUniqueIngredients);
//     displayAppareil(filteredUniqueAppliances);
//     displayUstensiles(filteredUniqueUstensiles);
//   }
// });

// TAG
// make TAG button from selected ingredients-list
// locate your element and add the Click Event Listener

// ingredientsList.addEventListener("click", function (e) {
//   // e.target is our targetted element.
//   console.log(e.target.nodeName);

//   // const searchString = e.target.textContent;
//   // console.log(searchString);

//   if (e.target && e.target.nodeName == "LI") {
//     // alert(e.target.textContent);
//     let tagsIng = document.createElement("div");
//     tagsIng.setAttribute("class", "tagsIngNew");
//     tagsIng.setAttribute("id", "tagsIngNew");
//     console.log(tagsIng);
//     let newTag = document.getElementById("ingTags");
//     console.log(newTag);
//     newTag.appendChild(tagsIng);
//     tagsIng.textContent = e.target.textContent;

//     // add fontawesome Icon
//     let tagsicon = document.createElement("div");
//     tagsicon.setAttribute("class", "tagsIcon");
//     tagsicon.setAttribute("id", "tagsIcon");

//     tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
//     console.log(tagsicon);

//     tagsIng.appendChild(tagsicon);
//     console.log(tagsicon);

//     // close TAG on X
//     tagsicon.addEventListener("click", () => {
//       if (tagsIng.style.display === "none") {
//         tagsIng.style.display = "flex";
//       } else {
//         tagsIng.style.display = "none";
//         displayRecipes(recipes);
//         displayIngredients(uniqueIngredients);
//         displayUstensiles(uniqueUstensils);
//         displayAppareil(uniqueAppliances);
//       }
//     });
//   }
// });

// // INGREDIENT TAG BY SELECTED TAG if else

// ingredientsList.addEventListener("click", (e) => {
//   const search = e.target.textContent.toLowerCase();
//   console.log(search);

//   if (recipes.length > 0) {
//     // ===if list tag is not filteres
//     console.log(filteredIngTag);
//     console.log("show all list of tags");

//     filteredIngTag = recipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(filteredIngTag);
//     const filteredUniqueAppliances = findUniqueApp(filteredIngTag);
//     const filteredUniqueUstensiles = findUniqueUst(filteredIngTag);

//     displayRecipes(filteredIngTag);
//     displayIngredients(filteredUniqueIngredients);
//     displayAppareil(filteredUniqueAppliances);
//     displayUstensiles(filteredUniqueUstensiles);
//   } else if (filteredRecipes.length > 0) {
//     //if filteredIngTag search exist
//     console.log(filteredUstTag);
//     console.log("show only list of filtered Ingredients by MAIN SEARCH");

//     const filteredIngList2tag = filteredRecipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     // const filteredUniqueIngredients = findUniqueIng(filteredAppList2tag);
//     const filteredUniqueAppliances = findUniqueApp(filteredIngList2tag);
//     // const filteredUniqueUstensiles = findUniqueUst(filteredAppList2tag);

//     // displayRecipes(filteredRecipes);
//     // displayIngredients(filteredUniqueIngredients);
//     displayAppareil(filteredUniqueAppliances);
//     // displayUstensiles(filteredUniqueUstensiles);

//     console.log(filteredIngList2tag);
//   } else if (filteredAppTag.length > 0) {
//     //if filteredAppTag search exist
//     console.log(filteredAppTag);
//     console.log("show only list of filtered appliance by app TAG");

//     const searchAppTag = recipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueAppliances = findUniqueApp(searchAppTag);
//     displayAppareil(filteredUniqueAppliances);

//     console.log(searchAppTag);
//   } else if (filteredIngTag.length > 0) {
//     //if filteredIngTag search exist
//     console.log(filteredIngTag);
//     console.log("show only list of filtered appliance by ING TAG");

//     const searchAppTagbyIng = filteredIngTag.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueAppliances = findUniqueApp(searchAppTagbyIng);

//     // displayRecipes(searchAppTagbyIng);

//     displayAppareil(filteredUniqueAppliances);

//     console.log(searchAppTagbyIng);
//   } else if (filteredUstTag.length > 0) {
//     //if ustensil search exist
//     console.log(filteredUstTag);
//     console.log("show only list of filtered appliance by Ustensil SEARCH");

//     const searchAppTagbyUst = filteredUstTag.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueAppliances = findUniqueApp(searchAppTagbyUst);

//     displayAppareil(filteredUniqueAppliances);
//     console.log(searchAppTagbyUst);
//   }
// });

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
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search)
        //  ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(filteredAppList2);
    const filteredUniqueAppliances = findUniqueApp(filteredAppList2);
    const filteredUniqueUstensiles = findUniqueUst(filteredAppList2);

    displayRecipes(filteredAppList2);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);

    console.log(filteredAppList2);
    // } else if (filteredIngList.length > 0) {
    //   //if ingredient search exist
    //   console.log(filteredIngList);
    //   console.log("show only list of filtered appliance by Ingredient SEARCH");

    //   const searchAppIng = filteredRecipes.filter((recipe) => {
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
    //         .map((ustnesile) => {
    //           return ustnesile.toLowerCase();
    //         })
    //         .includes(search)
    //     );
    //   });

    //   const filteredUniqueAppliances = findUniqueApp(searchAppIng);

    //   displayRecipes(searchAppIng);
    //   displayAppareil(filteredUniqueAppliances);
    //   console.log(searchAppIng);
    // } else if (filteredUstList.length > 0) {
    //   //if ustensil search exist
    //   console.log(filteredUstList);
    //   console.log("show only list of filtered appliance by Ustensil SEARCH");

    //   searchAppUst = filteredUstList.filter((recipe) => {
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
    //         .map((ustnesile) => {
    //           return ustnesile.toLowerCase();
    //         })
    //         .includes(search)
    //     );
    //   });

    //   // const filteredUniqueIngredients = findUniqueIng(searchAppUst);
    //   const filteredUniqueAppliances = findUniqueApp(searchAppUst);
    //   // const filteredUniqueUstensiles = findUniqueUst(searchAppUst);

    //   // displayRecipes(searchAppUst);
    //   // displayIngredients(filteredUniqueIngredients);
    //   displayAppareil(filteredUniqueAppliances);
    //   // displayUstensiles(filteredUniqueUstensiles);
  } else if (filteredAppTag.length > 0) {
    //if appliance tag exist
    console.log(filteredAppTag);
    console.log("show only list of filtered appliance by applinace tag SEARCH");

    const searchAppTag = filteredAppTag.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search)
        //  ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
      );
    });

    // const filteredUniqueIngredients = findUniqueIng(searchAppUst);
    const filteredUniqueAppliances = findUniqueApp(searchAppTag);
    // const filteredUniqueUstensiles = findUniqueUst(searchAppUst);

    // displayRecipes(searchAppUst);
    // displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    // displayUstensiles(filteredUniqueUstensiles);
  } else if (search.length > 2) {
    console.log("show list of all appliance");
    filteredRecipes = recipes.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search)
        //  ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
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

searchAppareil.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  // searchInputResult;
  // console.log(searchInputResult);

  if (filteredRecipes.length > 0) {
    //if global search exist

    console.log("show only list of filtered appliance by MAIN SEARCH");

    const filteredAppList2 = filteredRecipes.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search)
        //  ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(filteredAppList2);
    const filteredUniqueAppliances = findUniqueApp(filteredAppList2);
    const filteredUniqueUstensiles = findUniqueUst(filteredAppList2);

    displayRecipes(filteredAppList2);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);

    console.log(filteredAppList2);
  // } else if (filteredIngList.length > 0) {
  //   //if ingredient search exist
  //   console.log(filteredIngList);
  //   console.log("show only list of filtered appliance by Ingredient SEARCH");

  //   const searchAppIng = filteredRecipes.filter((recipe) => {
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
  //         .map((ustnesile) => {
  //           return ustnesile.toLowerCase();
  //         })
  //         .includes(search)
  //     );
  //   });

  //   const filteredUniqueAppliances = findUniqueApp(searchAppIng);

  //   displayRecipes(searchAppIng);
  //   displayAppareil(filteredUniqueAppliances);
  //   console.log(searchAppIng);
  // } else if (filteredUstList.length > 0) {
  //   //if ustensil search exist
  //   console.log(filteredUstList);
  //   console.log("show only list of filtered appliance by Ustensil SEARCH");

  //   searchAppUst = filteredUstList.filter((recipe) => {
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
  //         .map((ustnesile) => {
  //           return ustnesile.toLowerCase();
  //         })
  //         .includes(search)
  //     );
  //   });

  //   // const filteredUniqueIngredients = findUniqueIng(searchAppUst);
  //   const filteredUniqueAppliances = findUniqueApp(searchAppUst);
  //   // const filteredUniqueUstensiles = findUniqueUst(searchAppUst);

  //   // displayRecipes(searchAppUst);
  //   // displayIngredients(filteredUniqueIngredients);
  //   displayAppareil(filteredUniqueAppliances);
  //   // displayUstensiles(filteredUniqueUstensiles);
  } else if (filteredAppTag.length > 0) {
    //if appliance tag exist
    console.log(filteredAppTag);
    console.log("show only list of filtered appliance by applinace tag SEARCH");

    const searchAppTag = filteredAppTag.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search) 
        // ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(searchAppTag);
    const filteredUniqueAppliances = findUniqueApp(searchAppTag);
    const filteredUniqueUstensiles = findUniqueUst(searchAppTag);

    displayRecipes(searchAppTag);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);

  } else if (search.length > 2){
    console.log("show list of all appliance");
    filteredRecipes = recipes.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search) 
        // ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
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
    tagsicon = document.createElement("div");
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
        displayIngredients(uniqueIngredients);
        displayUstensiles(uniqueUstensils);
        displayAppareil(uniqueAppliances);
      }
    });
  }
});

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
    console.log("show all list of tags");

    console.log("filteredAppTag selektovan");

    filteredAppTag = recipes.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search) 
        // ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(filteredAppTag);
    const filteredUniqueAppliances = findUniqueApp(filteredAppTag);
    const filteredUniqueUstensiles = findUniqueUst(filteredAppTag);

    displayRecipes(filteredAppTag);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  } else if (filteredRecipes.length > 0) {
    //if filteredAppTag search exist
    console.log(filteredAppTag);
    console.log("filteredAppTag selektovan");

    console.log("show only list of filtered appliance by MAIN SEARCH");

    const filteredAppList2tag = filteredRecipes.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search)
        //  ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
      );
    });

    // const filteredUniqueIngredients = findUniqueIng(filteredAppList2tag);
    const filteredUniqueAppliances = findUniqueApp(filteredAppList2tag);
    // const filteredUniqueUstensiles = findUniqueUst(filteredAppList2tag);

    // displayRecipes(filteredRecipes);
    // displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    // displayUstensiles(filteredUniqueUstensiles);

    console.log(filteredAppList2tag);
  } else if (filteredAppTag.length > 0) {
    //if filteredAppTag search exist
    console.log(filteredAppTag);
    console.log("show only list of filtered appliance by app TAG");

    const searchAppTag = filteredAppTag.filter((recipe) => {
      return (
        // recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search)
        //  ||
        // recipe.description.toLowerCase().includes(search) ||
        // recipe.ingredients
        //   .map((ingredient) => {
        //     return ingredient.ingredient.toLowerCase();
        //   })
        //   .includes(search) ||
        // recipe.ustensils
        //   .map((ustnesile) => {
        //     return ustnesile.toLowerCase();
        //   })
        //   .includes(search)
      );
    });

    const filteredUniqueAppliances = findUniqueApp(searchAppTag);
    displayAppareil(filteredUniqueAppliances);
    displayRecipes(searchAppTag);

    console.log(searchAppTag);
  } else if (filteredIngTag.length > 0) {
    //if filteredIngTag search exist
    console.log(filteredIngTag);
    console.log("show only list of filtered appliance by ING TAG");

    const searchAppTagbyIng = filteredIngTag.filter((recipe) => {
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

    const filteredUniqueAppliances = findUniqueApp(searchAppTagbyIng);

    displayRecipes(searchAppTagbyIng);

    displayAppareil(filteredUniqueAppliances);

    console.log(searchAppTagbyIng);
  } else if (filteredUstTag.length > 0) {
    //if ustensil search exist
    console.log(filteredUstTag);
    console.log("show only list of filtered appliance by Ustensil SEARCH");

    const searchAppTagbyUst = filteredUstTag.filter((recipe) => {
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

    const filteredUniqueAppliances = findUniqueApp(searchAppTagbyUst);

    displayAppareil(filteredUniqueAppliances);
    console.log(searchAppTagbyUst);
  }
});

/**
 *
 *   USTENSILS SEARCH BY INPUT
 */

// // USTENSILS search bar input

// searchUstensiles.addEventListener("keyup", (e) => {
//   const search = e.target.value.toLowerCase();

//   if (filteredRecipes.length > 0) {
//     //if global search exist

//     console.log("show only list of filtered ustensils by MAIN SEARCH");

//     const filteredUstList2 = filteredRecipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(filteredUstList2);
//     const filteredUniqueAppliances = findUniqueApp(filteredUstList2);
//     const filteredUniqueUstensiles = findUniqueUst(filteredUstList2);

//     displayRecipes(filteredRecipes);
//     displayIngredients(filteredUniqueIngredients);
//     displayAppareil(filteredUniqueAppliances);
//     displayUstensiles(filteredUniqueUstensiles);

//     console.log(filteredUstList2);
//   } else if (filteredIngList.length > 0) {
//     //if ingredient search exist

//     console.log(filteredIngList);
//     console.log("show only list of filtered appliance by Ingredient SEARCH");

//     const searchUstInst = filteredRecipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueUstensiles = findUniqueUst(searchUstInst);

//     displayRecipes(searchUstInst);
//     displayUstensiles(filteredUniqueUstensiles);
//     console.log(searchUstInst);
//   } else if (filteredAppList.length > 0) {
//     //if appliance search exist
//     console.log(filteredAppList);
//     console.log("show only list of filtered ustensile by Appliance SEARCH");

//     const searchUstApp = filteredAppList.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueUstensiles = findUniqueUst(searchUstApp);
//     displayUstensiles(filteredUniqueUstensiles);
//   } else if (filteredUstTag.length > 0) {
//     //if ustencil tag exist
//     console.log(filteredUstTag);
//     console.log("show only list of filtered ustencil by ustencil tag SEARCH");

//     const searchUstTag = filteredUstTag.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueUstensiles = findUniqueUst(searchUstTag);
//     displayRecipes(searchUstTag);
//     displayUstensiles(filteredUniqueUstensiles);
//   } else {
//     console.log("show list of all ustensils");

//     filteredRecipes = recipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
//     const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
//     const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

//     displayRecipes(filteredRecipes);
//     displayIngredients(filteredUniqueIngredients);
//     displayAppareil(filteredUniqueAppliances);
//     displayUstensiles(filteredUniqueUstensiles);
//   }
// });

// make TAG button from selected Ustensils
// locate your element and add the Click Event Listener
// ustensilesList.addEventListener("click", function (e) {
//   // e.target is our targetted element.
//   console.log(e.target.nodeName);
//   if (e.target && e.target.nodeName == "LI") {
//     // alert(e.target.textContent);
//     let tagsUst = document.createElement("div");
//     tagsUst.setAttribute("class", "tagsUstNew");
//     tagsUst.setAttribute("id", "tagsUstNew");
//     console.log(tagsUst);
//     let newTag = document.getElementById("ustTags");
//     console.log(newTag);
//     newTag.appendChild(tagsUst);
//     tagsUst.textContent = e.target.textContent;

//     // add fontawesome Icon
//     let tagsicon = document.createElement("div");
//     tagsicon.setAttribute("class", "tagsIcon");
//     tagsicon.setAttribute("id", "tagsIcon");

//     tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
//     console.log(tagsicon);

//     tagsUst.appendChild(tagsicon);
//     console.log(tagsicon);

//     // close TAG on X
//     tagsicon.addEventListener("click", () => {
//       if (tagsUst.style.display === "none") {
//         tagsUst.style.display = "flex";
//       } else {
//         tagsUst.style.display = "none";
//         displayRecipes(recipes);
//         displayIngredients(uniqueIngredients);
//         displayUstensiles(uniqueUstensils);
//         displayAppareil(uniqueAppliances);
//       }
//     });
//   }
// });

// // USTENSILES  TAG SEARCH BY SELECTED TAG if else

// ustensilesList.addEventListener("click", (e) => {
//   const search = e.target.textContent.toLowerCase();
//   console.log(search);

//   if (recipes.length > 0) {
//     // ===if list tag is not filteres

//     console.log("show all list");

//     filteredUstTag = recipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     // const filteredUniqueIngredients = findUniqueIng(filteredUstTag);
//     // const filteredUniqueAppliances = findUniqueApp(filteredUstTag);
//     const filteredUniqueUstensiles = findUniqueUst(filteredUstTag);

//     // console.log(filteredUstTag);
//     displayRecipes(filteredUstTag);
//     // displayIngredients(filteredUniqueIngredients);
//     // displayAppareil(filteredUniqueAppliances);
//     displayUstensiles(filteredUniqueUstensiles);

//   } else if (filteredUstTag.length > 0) {
//     //if filteredUstTag alredy chose one tag
//     console.log(filteredUstTag);
//     console.log("search with only rest of tag");

//     const filteredRestUstTag = filteredUstTag.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     // const filteredUniqueUstensiles = findUniqueUst(filteredRestUstTag);

//     displayRecipes(filteredRestUstTag);

//     // displayUstensiles(filteredUniqueUstensiles);

//     console.log(filteredRestUstTag);

//   } else if (filteredRecipes.length > 0) {
//     //if filteredUstTag search exist
//     console.log(filteredUstTag);
//     console.log("show only list of filtered appliance by MAIN SEARCH");

//     const filteredUstList2tag = filteredRecipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueUstensiles = findUniqueUst(filteredUstList2tag);

//     // displayRecipes(filteredUstList2tag);

//     displayUstensiles(filteredUniqueUstensiles);

//     console.log(filteredUstList2tag);

//   } else if (filteredAppTag.length > 0) {
//     //if filteredAppTag search exist
//     console.log(filteredAppTag);
//     console.log("show only list of filtered appliance by app TAG");

//     const searchAppTag = recipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueUstensiles = findUniqueUst(searchAppTag);

//  displayUstensiles(filteredUniqueUstensiles);
//     console.log(searchAppTag);

//   } else if (filteredIngTag.length > 0) {
//     //if filteredIngTag search exist
//     console.log(filteredIngTag);
//     console.log("show only list of filtered appliance by ING TAG");

//     const searchAppTagbyIng = filteredIngTag.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     // displayRecipes(searchAppTagbyIng);

//     const filteredUniqueUstensiles = findUniqueUst(searchAppTagbyIng);

//     displayUstensiles(filteredUniqueUstensiles);

//     console.log(searchAppTagbyIng);

//   } else if (filteredUstTag.length > 0) {
//     //if ustensil search exist
//     console.log(filteredUstTag);
//     console.log("show only list of filtered appliance by Ustensil SEARCH");

//     const searchAppTagbyUst = filteredUstTag.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
//         recipe.description.toLowerCase().includes(search) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(search) ||
//         recipe.ustensils
//           .map((ustnesile) => {
//             return ustnesile.toLowerCase();
//           })
//           .includes(search)
//       );
//     });

//     const filteredUniqueUstensiles = findUniqueUst(searchAppTagbyUst);

//     displayUstensiles(filteredUniqueUstensiles);
//     console.log(searchAppTagbyUst);

//   }
// });

displayRecipes(recipes);
displayIngredients(uniqueIngredients);
displayUstensiles(uniqueUstensils);
displayAppareil(uniqueAppliances);
