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
// APPAREIL search by INPUT to show RECIPES
// search bar input - if it includes name show in recipes or each list of ingredients, appareil or ustensiles
searchAppareil.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);

  filteredRecipes;
  console.log(filteredRecipes);

  // filteredApplianceList = recipes.filter((recipe) => {
  //   console.log("show list of all appliance");
  //   return (
      
  //     recipe.appliance.toLowerCase().includes(searchString) 
      
  //   ); 
  // });

  //   displayRecipes(filteredApplianceList);
  //   displayIngredients(filteredApplianceList);
  //   displayAppareil(filteredApplianceList);
  //   displayUstensiles(filteredApplianceList);
   
   
  //   console.log(filteredApplianceList);


  //   filteredRecipes = recipes.filter((recipe) => {
  //     return (
  //       recipe.name.toLowerCase().includes(searchString) ||
  //       recipe.appliance.toLowerCase().includes(searchString) ||
  //       recipe.ingredients
  //         .map((ingredient) => {
  //           return ingredient.ingredient.toLowerCase();
  //         })
  //         .includes(searchString) ||
  //       recipe.ustensils
  //             .map((ustnesile) => {
  //                 return ustnesile.toLowerCase();
  //             })
  //       .includes(searchString)
  //     );
  // });
  
  // console.log(filteredRecipes);
 
  // displayRecipes(filteredRecipes);
  // displayIngredients(filteredRecipes);
  // displayAppareil(filteredRecipes);
  // displayUstensiles(filteredRecipes);

  // console.log(displayRecipes(filteredRecipes));


  if (filteredRecipes) {
    console.log("show only list of filtered ingredients by MAIN SEARCH");

   searchInputRes2 =  filteredRecipes.filter((recipe)=> {
    return (
     
      recipe.appliance.toLowerCase().includes(searchString)
      
    );

  });
    console.log(searchInputRes2);
    console.log('show only list of filtered ingredients by MAIN SEARCH"');

    displayAppareil(searchInputRes2);

  } else {
    filteredApplianceList = recipes.filter((recipe) => {
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
 
    console.log(filteredApplianceList);
    // console.log(searchInputRes2);
    displayRecipes(filteredApplianceList);
    displayIngredients(filteredApplianceList);
    displayAppareil(filteredApplianceList);
    displayUstensiles(filteredApplianceList);

   
  }


});


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
const displayIngredients = (recipes) => {
    const htmlString = recipes.map((recipe) => {
    //   console.log(recipe.ingredients);
      let ingredHtml = '';
      recipe.ingredients.forEach(ingredient => {
        ingredHtml = ingredHtml + '<li class="recepies__ingredients">' + ingredient.ingredient + '</li>';
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
      return `<li class="recepies__appliance" id="recepiesList__appliance">${recipe.appliance}</li>`;
    })
    .join(""); 
  
    appareilList.innerHTML = htmlString;
};


// let appliance = [];
// recipes.map((recipe) => {
//     recipe.appliance.forEach(element => {
//     if (!appliance.includes(element)) {
//         appliance.push(element)
//     }
// });

// console.log(appliance);
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




/**
 *
 *  CALL ALL FUNCTIONS
 */
//   funcions
displayRecipes(recipes);

displayAppareil(recipes);

displayIngredients(recipes);

displayUstensiles(recipes);
