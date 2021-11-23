// import other js
import { recipes } from "./recipes.js";
console.log(recipes);


/**
 *
 *   MAKE VARIABLES
 */
// make variable

// let ingredients = [];
// // console.log(ingredients);

// let appliances = [];
// // console.log(appliances);

// let ustensils = [];
// console.log(ustensils);

// let ingredientsAll = [];
// console.log(ingredientsAll);

// let appliancesAll = [];
// console.log(appliancesAll);

// let ustensilsAll = [];
// console.log(ustensilsAll);

// let searchInputRes = [];
// console.log(searchInputRes);

// let filteredIngr = [];
// console.log(filteredIngr);

let filteredRecipes = [];
console.log(filteredRecipes);


let filteredApplianceList = [];
console.log(filteredApplianceList);

let searchInputRes = [];
console.log(searchInputRes);

let searchInputRes2 = [];
console.log(searchInputRes2);

// let uniqApp = [];
// console.log(uniqApp);

// let tagsIng = [];
// console.log(tagsIng);

//
// // loop forEach or Map

// recipes.forEach((recipe) => {
//   recipe.ingredients.forEach((ingredients) => {
//     ingredientsAll.push(ingredients.ingredient ? ingredients.ingredient : "");
//   });
// });

// recipes.map((recipe) => {
//   appliancesAll.push(recipe.appliance);
// });

// recipes.forEach((recipe) => {
//   recipe.ustensils.forEach((ustensils) => {
//     ustensilsAll.push(ustensils);
//   });
// });

// remove duplicate tags

// const uniqueIngredients = [...new Set(ingredientsAll)];
// console.log(uniqueIngredients);

// const uniqueAppliances = [...new Set(appliancesAll)];
// console.log(uniqueAppliances);

// const uniqueUstensils = [...new Set(ustensilsAll)];
// console.log(uniqueUstensils);

// const all = ingredientsAll.concat(appliancesAll, ustensilsAll);
// console.log(all);





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

// search by ingredient input
const searchIngredients = document.getElementById("search__ingredient");
console.log(searchIngredients);

// search by appareil input
const searchAppareil = document.getElementById("search__appareil");
console.log(searchAppareil);

// search by ustensiles input
const searchUstensiles = document.getElementById("search__ustensiles");
console.log(searchUstensiles);


/**
 *
 *   MAIN SEARCH BY INPUT
 */
// // MAIN search bar input - if it includes name show in recipes or lists
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
  
    searchInputRes = filteredRecipes;
    console.log(searchInputRes);

    filteredRecipes = recipes.filter((recipe) => {
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
 *   APPAREIL SEARCH BY INPUT
 */

// // ===========================================
// // // radi search FILTRIRANU listu
//   // filteredRecipes;
//   // console.log(filteredRecipes);

//   // filteredApplianceList = filteredRecipes.filter((recipe) => {
//   //   console.log("show only search by list already filtered");
//   //   return (
      
//   //     recipe.appliance.toLowerCase().includes(searchString) 
      
//   //   ); 
//   // });

//   //   displayRecipes(filteredApplianceList);
//   //   displayIngredients(filteredApplianceList);
//   //   displayAppareil(filteredApplianceList);
//   //   displayUstensiles(filteredApplianceList);
   
   
//   //   console.log(filteredApplianceList);
// // ===========================================
// // // radi search celu listu
//   //   filteredRecipes = recipes.filter((recipe) => {
//   //     return (
//   //       recipe.name.toLowerCase().includes(searchString) ||
//   //       recipe.appliance.toLowerCase().includes(searchString) ||
//   //       recipe.ingredients
//   //         .map((ingredient) => {
//   //           return ingredient.ingredient.toLowerCase();
//   //         })
//   //         .includes(searchString) ||
//   //       recipe.ustensils
//   //             .map((ustnesile) => {
//   //                 return ustnesile.toLowerCase();
//   //             })
//   //       .includes(searchString)
//   //     );
//   // });
  
//   // console.log(filteredRecipes);
 
//   // displayRecipes(filteredRecipes);
//   // displayIngredients(filteredRecipes);
//   // displayAppareil(filteredRecipes);
//   // displayUstensiles(filteredRecipes);

//   // console.log(displayRecipes(filteredRecipes));
// // ===========================================

/**
 *
 *  display all elements
 */

// display Recipes cards
const displayRecipes  = (recipes) => {
    const html = recipes
      .map((recipe) => {
        const ingredientHtml = recipe.ingredients
          .map((ingredient) => {
            return `<p id="ingredient" class="ingredient">${ingredient.ingredient}</p>`;
          })
          .join("");
          const ustensilsHtml = recipe.ustensils
          .map((ustensil) => {
            return `<p id="ustensil" class="ustensil">${ustensil}</p>`;
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
                        <p class="recepies__ingredients">${ingredientHtml}</p>
                        <p class="recepies__ustensil">${ustensilsHtml}</p>
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
 *  INGREDIENTS ARRAY
 */
// display ingredient list
const inglist = document.querySelectorAll(".recepies__ingredients");
console.log(inglist);

let ingredientTab = [];

recipes.forEach(recipe => {  //recipe ici contient donc recipe.ingredients donc on veut passer sur chacun
   recipe.ingredients.forEach(ingredient => { //là on passe sur chaque ingrédient de chaque recette
      if (!ingredientTab.includes(ingredient.ingredient)) //si le tableau ne contient pas déjà l'ingrédient qu'on regarde (pour éviter les doublons)
         ingredientTab.push(ingredient.ingredient); //on ajoute l'ingrédient au tableau
   })
 
})
ingredientsList.innerHTML = ingredientTab.join("");
// const displayIngredients = (recipes) => {
//     const htmlString = recipes.map((recipe) => {
//     //   console.log(recipe.ingredients);
//       let ingredHtml = '';
//       recipe.ingredients.forEach(ingredient => {
//         ingredHtml = ingredHtml + '<li class="recepies__ingredients">' + ingredient.ingredient + '</li>';
//       })
//   return ingredHtml;
//     })
//     .join("");
//     ingredientsList.innerHTML = htmlString;
// };

/**
 *
 *  APPAREIL ARRAY
 */
// display appareil List
const displayAppareil = (recipes) => {
    const htmlString = recipes
    .map((recipe) => {
      return `<li class="recepies__appliance" id="recepiesList__appliance">${recipe.appliance}</li>`;
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
        UstensilesHtml = UstensilesHtml + '<li class="recepies__ingredients">' + ustensil + '</li>';
      })
  return UstensilesHtml;
    })
    .join("");
    ustensilesList.innerHTML = htmlString;
};
// ======================================================================================
/**
 *
 *  Search APPAREIL LIST
 */
// // MAIN search bar input - if it includes name show in recipes or lists
searchAppareil.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);
 

  // let appareilTab = [];
  // console.log(appareilTab);
  // console.log(filteredRecipes);



  // filteredRecipes.filter((recipe) => {
  //     if (!appareilTab.includes(recipe.appliance) && recipe.appliance.toLowerCase().includes(search))
  //     appareilTab.push(recipe.appliance);
  //     appareilList.innerHTML = appareilTab;
  // });
  // console.log(appareilTab);
 
  let appareilAllList = [];
  console.log(appareilAllList);
  
  recipes.filter((recipe) => {
    if (!appareilAllList.includes(recipe.appliance) && recipe.appliance.toLowerCase().includes(search))
    appareilAllList.push(recipe.appliance);
    appareilList.innerHTML = appareilAllList;
});
console.log(appareilAllList);



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
