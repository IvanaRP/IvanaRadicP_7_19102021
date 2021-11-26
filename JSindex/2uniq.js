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
const uniqueAppliances = [...new Set(appliancesAll)];
console.log(uniqueAppliances);

// Array.prototype.push.apply(recipes, uniqueAppliances); 
// console.log(recipes);
// let allRecipes = recipes
// console.log(allRecipes);

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
  // console.log(ingredientsTabs);
});


// let obj = Object.fromEntries(
//   ingredientsTabs.map(ingredients => [ingredients, {
//     something: "based",
//     on: ingredients
//   }])
// )

// console.log(obj)

// Array.prototype.push.apply(recipes, obj); 
// console.log(recipes);
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

          const uniqueApplianceHtml = uniqueAppliances
          .map((uniqueAppliance) => {
            return `<li id="recepiesuniqueAppliance" class="recepiesuniqueAppliance">${uniqueAppliance}</li>`;
          })
          .join("");
        
        return `
              <div class="recepies__card">
                    <div class="recepies__img"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
                    <div class="recepies__info">
    
                      <div class="recepies__name-time">
                          <h3 class="recepies__name">${recipe.name}</h3>
                          <h3 class="recepies__name">${uniqueApplianceHtml}</h3>
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
  // ========================================================

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

// // display appareil List
// const displayAppareil = (recipes) => {
//     const htmlString = recipes
//       .map((recipe) => {
//         return `<li class="recepiesList__appliance" id="recepiesList__appliance">${recipe.appliance}</li>`;
//       })
//       .join("");
  
//     appareilList.innerHTML = htmlString;
//   };
    // ========================================================

    // let applianceList = [];

    //   recipes.forEach(recipe => {  //recipe ici contient donc recipe.ingredients donc on veut passer sur chacun
    //         if (!applianceList.includes(recipe.appliance)) //si le tableau ne contient pas déjà l'ingrédient qu'on regarde (pour éviter les doublons)
    //         applianceList.push(recipe.appliance); //on ajoute l'ingrédient au tableau
    //      })
    //      appareilList.innerHTML = "";
    //      console.log(appareilList);
    //      appareilList.innerHTML = applianceList.join("");

    //      console.log(applianceList);
    
  // ========================================================
  // display appareil List
// const displayAppareil = (recipes) => {
//     const htmlString = recipes
//       .map((recipe) => {
//         return `<li class="recepiesList__appliance" id="recepiesList__appliance">${recipe.appliance}</li>`;
//       })
//       .join("");
  
//     appareilList.innerHTML = htmlString;
//   };

  // ========================================================
//  display appareil List
// const displayAppareil = (uniqueAppliances) => {
//   const htmlString = uniqueAppliances
//     .map((uniqueAppliance) => {
//       return `<li class="recepiesList__appliance" id="recepiesList__appliance">${uniqueAppliance}</li>`;
//     })
//     .join("");

//   appareilList.innerHTML = htmlString;
// };

    // ======================================================================================
/**
 *
 *   MAIN SEARCH BY INPUT
 */
// // MAIN search bar input - if it includes name show in recipes or lists
searchBar.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();
    console.log(search);

    searchInputRes = filteredRecipes;
    console.log(searchInputRes);



// if (ingredientsTabs > 0) {
  
  filterIngredient = ingredientsTabs.filter((ingredientsTab) => {
    // console.log(filterIngredient);
    // console.log(ingredientsTab.toLowerCase());
    return (ingredientsTab.toLowerCase().includes(search)
    );
  });
  
  displayIngredients(filterIngredient);
// } else {
  
  filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(search) ||
      recipe.appliance.toLowerCase().includes(search) ||
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
// }
 
    // let applianceList = [];
    // const filteredAp = recipes.forEach(recipe => {  //recipe ici contient donc recipe.ingredients donc on veut passer sur chacun
    //       if (!applianceList.includes(recipe.appliance)) //si le tableau ne contient pas déjà l'ingrédient qu'on regarde (pour éviter les doublons)
    //       applianceList.push(recipe.appliance); //on ajoute l'ingrédient au tableau

    //       return (appareilList.includes(search));
    //    })



//   console.log(filteredAp);
// //   displayRecipes(filteredAp);
// // //   displayIngredients(filteredRecipes);
//   displayAppareil(filteredAp);
// //   displayUstensiles(filteredRecipes);
//   console.log(displayRecipes(filteredRecipes));

// filterIngredient = ingredientsTabs.filter((ingredientsTab) => {
//   // console.log(filterIngredient);
//   // console.log(ingredientsTab.toLowerCase());
//   return (ingredientsTab.toLowerCase().includes(search)
//   );
// });

// displayIngredients(filterIngredient);
// displayIngredients(recipes);

    // filteredRecipes = recipes.filter((recipe) => {
       
    //     return (
    //       recipe.name.toLowerCase().includes(search) ||
    //       recipe.appliance.toLowerCase().includes(search) ||
       
    //       // recipe.ingredients
    //       //   .map((ingredient) => {
    //       //     return ingredient.ingredient.toLowerCase();
    //       //   })
    //       //   .includes(search)
    //         //  ||
    //       recipe.ustensils
    //         .map((ustnesile) => {
    //           return ustnesile.toLowerCase();
    //         })
    //         .includes(search)
    //     );
    //   });
    // //   console.log(JSON.stringify(appliance));
      
    //   console.log(filteredRecipes);
    //   displayRecipes(filteredRecipes);
    // //   displayIngredients(filteredRecipes);
    //   // displayAppareil(filteredRecipes);
    // //   displayUstensiles(filteredRecipes);
    //   console.log(displayRecipes(filteredRecipes));

//   const uniqApp = uniqueAppliances.filter((uniqueAppliance) => {
//       console.log(uniqueAppliances);
//       console.log(uniqueAppliance.toLowerCase().includes(search));
//     //   uniqueAppliance.toLowerCase().includes(search)
//       return (
//           uniqueAppliance.toLowerCase().includes(search)
//       );
//   });
//   console.log(uniqApp);
//   displayAppareil(uniqApp);
  
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

// displayAppareil(recipes);
// displayAppareil(uniqueAppliances);


// displayIngredients(recipes);

// displayUstensiles(recipes);
  


// ===========

// logika za tag if else

// // // APPAREIL search bar input
// const filteredIngTag = [];
// console.log(filteredIngTag);

// const filteredAppTag = [];
// console.log(filteredAppTag);

// const filteredUstTag = [];
// console.log(filteredUstTag);

// appareilList.addEventListener('click', (e) => {
//     const search = e.target.textContent.toLowerCase();
//     console.log(search);
  
//     // searchInputRes;
//     // console.log(searchInputRes);
  
//     if (searchInputRes.length > 0) {
//       //if global search exist
//       console.log(searchInputRes);
//       console.log("show only list of filtered appliance by MAIN SEARCH");
//       const searchInputRes2 = searchInputRes.filter((recipe) => {
//         return recipe.appliance.toLowerCase().includes(search);
//       });
//       console.log(searchInputRes2);
//       displayAppareil(searchInputRes2);

//     } else if (filteredIngTag.length > 0) {
//       //if ingredient search exist
//       console.log(filteredIngTag);
//       console.log("show only list of filtered appliance by Ingredient SEARCH");
//       const searchAppInstTag = filteredIngTag.filter((recipe) => {
//         return recipe.appliance.toLowerCase().includes(searchAppareil);
//       });
//       console.log(searchAppInstTag);
//       displayAppareil(searchAppInstTag);

//     } else if (filteredUstTag.length > 0) {
//       //if ustensil search exist
//       console.log(filteredUstTag);
//       console.log("show only list of filtered appliance by Ustensil SEARCH");
//       const searchAppUstTag = filteredUstTag.filter((recipe) => {
//         return recipe.appliance.toLowerCase().includes(search);
//       });
//       console.log(searchAppUstTag);
//       displayAppareil(searchAppUstTag);
//     } else {
//         const filteredAppTag = recipes.filter((recipe) => {
//             console.log("show all list of appliance");
//             return (
//               recipe.name.toLowerCase().includes(search) ||
//               recipe.appliance.toLowerCase().includes(search) ||
//               recipe.ingredients
//                 .map((ingredient) => {
//                   return ingredient.ingredient.toLowerCase();
//                 })
//                 .includes(search) ||
//               recipe.ustensils
//                 .map((ustnesile) => {
//                   return ustnesile.toLowerCase();
//                 })
//                 .includes(search)
//             );
//           });
//           console.log(filteredAppTag);
//           displayRecipes(filteredAppTag);
//           displayIngredients(filteredAppTag);
//           displayAppareil(filteredAppTag);
//           displayUstensiles(filteredAppTag);
//           console.log(displayRecipes(filteredAppTag));
        
//     }
    
//   });