// import other js
import { recipes } from "./recipes.js";
console.log(recipes);

/**
 *
 *   MAKE VARIABLES
 */
// make variable

let ingredients = [];
console.log(ingredients);

let appliances = [];
console.log(appliances);

let ustensils = [];
console.log(ustensils);

let ingredientsAll = [];
console.log(ingredientsAll);

let appliancesAll = [];
console.log(appliancesAll);

let ustensilsAll = [];
console.log(ustensilsAll);

let searchInputRes = [];
console.log(searchInputRes);

let filteredIngr = [];
console.log(filteredIngr);

let filteredRecipes = [];
console.log(filteredRecipes);

let tagsIng = [];
console.log(tagsIng);

//
// // loop forEach or Map

recipes.forEach((recipe) => {
  recipe.ingredients.forEach((ingredients) => {
    ingredientsAll.push(ingredients.ingredient ? ingredients.ingredient : "");
  });
});

recipes.map((recipe) => {
  appliancesAll.push(recipe.appliance);
});

recipes.forEach((recipe) => {
  recipe.ustensils.forEach((ustensils) => {
    ustensilsAll.push(ustensils);
  });
});

// remove duplicate tags

const uniqueIngredients = [...new Set(ingredientsAll)];
console.log(uniqueIngredients);

const uniqueAppliances = [...new Set(appliancesAll)];
console.log(uniqueAppliances);

const uniqueUstensils = [...new Set(ustensilsAll)];
console.log(uniqueUstensils);

const all = ingredientsAll.concat(appliancesAll, ustensilsAll);
console.log(all);

// let ustensiles = [];
// ustensiles.forEach(ustensile => {
//   if(ustensiles.includes(ustensile)) {
//     // fait rien
//   } else {
//     ustensiles.push(ustensile);
//   }
// })

// console.log(ustensiles);

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
// MAIN search bar input - if it includes name show in recipes or lists
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  filteredRecipes = recipes.filter((recipe) => {
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

  searchInputRes = filteredRecipes;
  console.log(searchInputRes);

  // let a = recipes.filter((recipe) => {recipe});
  // let b = [];
  //  recipes.map((recipe) => {
  //   b.push(recipe.appliance);
  // });

  // const as = [...new Set(b)];
  // console.log(as);

  // console.log(b.includes(searchString));
  // // a.some(v => b.includes(v));
  // console.log(b, as, b.some(v => as.includes(v)));

  // const filtA = as.filter((as) => {
  //   return (

  //     as.includes(searchString)

  //   );
  // });

  console.log(filteredRecipes);

  displayRecipes(filteredRecipes);
  displayIngredients(filteredRecipes);
  displayAppareil(filteredRecipes);
  // displayAppareil(a);
  displayUstensiles(filteredRecipes);

  console.log(displayRecipes(filteredRecipes));
});

/**
 *
 *   INGREDIENT SEARCH BY INPUT
 */
// INGREDIENT search by INPUT to show RECIPES
// search bar input - if it includes name show in recipes or each list of ingredients, appareil or ustensiles
searchIngredients.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  searchInputRes;
  console.log(searchInputRes);

  filteredIngr = [];
  console.log(filteredIngr);

  if (searchInputRes) {
    console.log("show only list of filtered ingredients by MAIN SEARCH");
    const searchInputRes2 = searchInputRes.filter((recipe) => {
      return recipe.ingredients
        .map((ingredient) => {
          return ingredient.ingredient.toLowerCase();
        })
        .includes(searchString);
    });
    console.log(searchInputRes2);
    displayIngredients(searchInputRes2);
  } else {
    filteredIngr = recipes.filter((recipe) => {
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

    console.log(filteredIngr);

    displayRecipes(filteredIngr);
    displayIngredients(filteredIngr);
    displayAppareil(filteredIngr);
    displayUstensiles(filteredIngr);

    console.log(displayRecipes(filteredIngr));
  }
});

/**
 *
 *   APPAREIL SEARCH BY INPUT
 */

// APPAREIL search by INPUT to show RECIPES
// search bar input - if it includes name show in recipes or each list of ingredients, appareil or ustensiles
searchAppareil.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  // searchInputRes;
  // console.log(searchInputRes);

  // const searchInputRes2 = searchInputRes.filter((recipe) => {
  //   return recipe.appliance.toLowerCase().includes(searchString);
  // });
  // console.log(searchInputRes2);
  // displayAppareil(searchInputRes2);
  searchInputRes;
  console.log(searchInputRes);

  filteredIngr = [];
  console.log(filteredIngr);

  if (searchInputRes) {
    console.log("show only list of filtered ingredients by MAIN SEARCH");
    const searchInputRes2 = searchInputRes.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(searchString);
    });
    console.log(searchInputRes2);
    displayAppareil(searchInputRes2);
  } else {
    filteredIngr = recipes.filter((recipe) => {
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

    console.log(filteredIngr);

    displayRecipes(filteredIngr);
    displayIngredients(filteredIngr);
    displayAppareil(filteredIngr);
    displayUstensiles(filteredIngr);

    console.log(displayRecipes(filteredIngr));
  }

 
});

/**
 *
 *  USTENSILES  SEARCH BY INPUT
 */

// USTENSILES search by INPUT to show RECIPES
// search bar input - if it includes name show in recipes or each list of ingredients, appareil or ustensiles
searchUstensiles.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  searchInputRes;
  console.log(searchInputRes);

  const searchInputRes2 = searchInputRes.filter((recipe) => {
    return recipe.ustensils.includes(searchString);
  });
  console.log(searchInputRes2);
  displayUstensiles(searchInputRes2);
  searchInputRes;
  console.log(searchInputRes);

  filteredIngr = [];
  console.log(filteredIngr);

  if (searchInputRes) {
    console.log("show only list of filtered ingredients by MAIN SEARCH");
    const searchInputRes2 = searchInputRes.filter((recipe) => {
      return recipe.ustensils.includes(searchString);
    });
    console.log(searchInputRes2);
    displayUstensiles(searchInputRes2);
  } else {
    filteredIngr = recipes.filter((recipe) => {
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

    console.log(filteredIngr);

    displayRecipes(filteredIngr);
    displayIngredients(filteredIngr);
    displayAppareil(filteredIngr);
    displayUstensiles(filteredIngr);

    console.log(displayRecipes(filteredIngr));
  }

  
});

/**
 *
 *  DISPLAY/ DRAW ARRAYS
 */

/**
 *
 *  INGREDIENTS ARRAY
 */

// display all Ingredients
const displayIngredients = (recipes) => {
  const htmlString = recipes.map((recipe) => {
    return `
     
      <li class="recepies__ingredients">${[
        ...recipe.ingredients.map((ingredient) => {
          return ingredient.ingredient;
        }),
      ]}</li>
      
              `;
  });

  // .join("");
  ingredientsList.innerHTML = htmlString;
};

// // uniqueIngredients
// // display all uniqueIngredients Ingredients
// const displayIngredients = (recipes) => {
//   const htmlString = uniqueIngredients
//     .map((uniqueIngredient) => {
//       return `

//      <div>
//       <li class="recepies__ingredients">${uniqueIngredient}
//       </li>
//       </div>

//               `;
//     })
//     .join(" ");
//   ingredientsList.innerHTML = htmlString;
// };

/**
 *
 *  APPAREIL ARRAY
 */
// display all Appareil
const displayAppareil = (recipes) => {
  //   let ustensiles = [];
  // ustensiles.forEach(ustensile => {
  //   if(ustensiles.includes(ustensile)) {
  //     // fait rien
  //   } else {
  //     ustensiles.push(ustensile);
  //   }
  // })

  // console.log(ustensiles);
  const htmlString = recipes
    .map((recipe) => {
      return `
                      <li class="recepies__appliance" id="recepiesList__appliance">${recipe.appliance}
                      </li>
              `;
    })
    .join("");
  appareilList.innerHTML = htmlString;
};

/**
 *
 *  USTENSILES ARRAY
 */
// display all Ustensiles
const displayUstensiles = (recipes) => {
  const htmlString = recipes
    .map((recipe) => {
      return `

      <li class="recepies__appliance">${recipe.ustensils}
      </li>
              `;
    })
    .join("");
  ustensilesList.innerHTML = htmlString;
};

/**
 *
 *  RECIPES ARRAY
 */
// display all Recipes
const displayRecipes = (recipes) => {
  const htmlString = recipes
    .map((recipe) => {
      return `
              <div class="recepies__card">
                  <div class="recepies__img"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
                  <div class="recepies__info">
  
                    <div class="recepies__name-time">
                        <h3 class="recepies__name">${recipe.name}</h3>
                        <p class="recepies__time"><i class="far fa-clock"></i>${
                          recipe.time
                        }</p>
                    </div>
  
                    <div class="recepies__ingredients-description">
                        <div class="recepies__ingredients">
                            <ul>
                            <li class="recepies__ingredients-list">${[
                              ...recipe.ingredients.map((ingredient) => {
                                return ingredient.ingredient;
                              }),
                            ]}</li>
                            </ul>
                        </div>
                 
                   
                        <p class="recepies__description">${
                          recipe.description
                        }</p>
                    </div>
                    
                  </div>
              </div>
             
            `;
    })
    .join("");
  recipesList.innerHTML = htmlString;
};

/**
 *
 * SELECTED  TAG FROM DROPDOWN
 */

// TAG
// make TAG button from selected ingredients-list
// locate your element and add the Click Event Listener
document
  .getElementById("ingredients-list")
  .addEventListener("click", function (e) {
    // e.target is our targetted element.
    console.log(e.target.nodeName);

    // const searchString = e.target.textContent;
    // console.log(searchString);
    

    if (e.target && e.target.nodeName == "LI") {
      // alert(e.target.textContent);
      let  tagsIng = document.createElement("div");
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
      
  

    // dislay only recipes with selected TAG

    // filteredRecipes = [];
    //   console.log(filteredRecipes);

    //   let tagsIng = [];
    //   console.log(tagsIng);

    //   searchInputRes;
    //   console.log(searchInputRes);

    //   filteredIngr = [];
    //   console.log(filteredIngr);

    // if (searchInputRes) {
    //   console.log("show only list of filtered ingredients by MAIN SEARCH");
    //   const searchInputRes2 = searchInputRes.filter((recipe) => {
    //     return recipe.ingredients
    //       .map((ingredient) => {
    //         return ingredient.ingredient.toLowerCase();
    //       })
    //       .includes(searchString);
    //   });
    //   console.log(searchInputRes2);
    //   displayIngredients(searchInputRes2);
    // } else {
    //   filteredIngr = recipes.filter((recipe) => {
    //     console.log("show list of all ingredients");
    //     return (
    //       recipe.name.toLowerCase().includes(searchString) ||
    //       recipe.appliance.toLowerCase().includes(searchString) ||
    //       recipe.ingredients
    //         .map((ingredient) => {
    //           return ingredient.ingredient.toLowerCase();
    //         })
    //         .includes(searchString) ||
    //       recipe.ustensils.includes(searchString)
    //     );
    //   });

    //   console.log(filteredIngr);

    //   displayRecipes(filteredIngr);
    //   displayIngredients(filteredIngr);
    //   displayAppareil(filteredIngr);
    //   displayUstensiles(filteredIngr);

    //   console.log(displayRecipes(filteredIngr));
    // }
  });

// TAG
// make TAG button from selected appareil-list
// locate your element and add the Click Event Listener
document
  .getElementById("appareil-list")
  .addEventListener("click", function (e) {
    // e.target is our targetted element.
    console.log(e.target.nodeName);

    const searchString = e.target.textContent;
    console.log(searchString);

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

// make TAG button from selected Ustensils
// locate your element and add the Click Event Listener
document
  .getElementById("ustensiles-list")
  .addEventListener("click", function (e) {
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
        }
      });
    }
  });

/**
 *
 * FILTER WITH TAGS
 */

// // filter by Tags photographer
// // search by appareil TAG
// appareilList.addEventListener("click", (e) => {
//   const searchString = e.target.textContent.toLowerCase();

//   const filteredTag = recipes.filter((recipe) => {
//     console.log(recipe.name == recipe.name);
//     console.log(recipe.name.toLowerCase().includes(searchString));

//     return recipe.name == recipe.name;
//     //   return (
//     //     recipe.name.toLowerCase().includes(searchString) ||
//     //     recipe.appliance.toLowerCase().includes(searchString) ||
//     //     recipe.ingredients
//     //       .map((ingredient) => {
//     //         return ingredient.ingredient.toLowerCase();
//     //       })
//     //       .includes(searchString) ||
//     //      recipe.ustensils.includes(searchString)
//     //   );
//   });

//   console.log(filteredTag);

//   displayRecipes(filteredTag);
//   displayIngredients(filteredTag);
//   displayAppareil(filteredTag);
//   displayUstensiles(filteredTag);

//   console.log(displayRecipes(filteredTag));
// });

// filter by Tags photographer
// // search by appareil TAG
// appareilList.addEventListener("click", (e) => {
//     const searchString = e.target.textContent.toLowerCase();

//     const filteredTag = recipes.forEach((recipe) => {
//         return (
//           recipe.name.toLowerCase().includes(searchString) ||
//           recipe.appliance.toLowerCase().includes(searchString) ||
//           recipe.ingredients
//             .map((ingredient) => {
//               return ingredient.ingredient.toLowerCase();
//             })
//             .includes(searchString) ||
//            recipe.ustensils.includes(searchString)
//         );
//     });

//     console.log(filteredTag);

//     displayRecipes(filteredTag);
//     displayIngredients(filteredTag);
//     displayAppareil(filteredTag);
//     displayUstensiles(filteredTag);

//     console.log(displayRecipes(filteredTag));
//   });

/**
 *
 *  CALL ALL FUNCTIONS
 */
//   funkcions
displayRecipes(recipes);

displayIngredients(recipes);
displayAppareil(recipes);
displayUstensiles(recipes);
