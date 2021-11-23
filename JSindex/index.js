// import other js
import { recipes } from "../js/recipes.js";
console.log(recipes);

/**
 *
 *   MAKE VARIABLES
 */
// make variable
let filteredRecipes = [];
console.log(filteredRecipes);
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
          return `<l id="recepiesIngredient__list" class="recepiesIngredient__list">${ingredient.ingredient}</l>`;
        })
        .join("");
      const ustensilsHtml = recipe.ustensils
        .map((ustensil) => {
          return `<l id="recepiesUstensiles__list" class="recepiesUstensiles__list">${ustensil}</l>`;
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

const displayIngredients = (recipes) => {
  const htmlString = recipes
    .map((recipe) => {
      //   console.log(recipe.ingredients);
      let ingredHtml = "";
      recipe.ingredients.forEach((ingredient) => {
        ingredHtml =
          ingredHtml +
          '<li class="recepies__ingredientsList" id="recepies__ingredientsList">' +
          ingredient.ingredient +
          "</li>";
      });
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
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${recipe.appliance}</li>`;
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

  filteredRecipes = recipes.filter((recipe) => {
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
  console.log(filteredRecipes);
  displayRecipes(filteredRecipes);
  displayIngredients(filteredRecipes);
  displayAppareil(filteredRecipes);
  displayUstensiles(filteredRecipes);
  console.log(displayRecipes(filteredRecipes));
});

/**
 *
 *   INGREDIENTS SEARCH BY INPUT
 */
// // INGREDIENTS search bar input

searchIngredients.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);

  // ======================================================================================
  // filter all list of ingredient
  //   const filteredIngredients = recipes.filter((recipe) => {
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
  //   console.log(filteredIngredients);
  //   displayRecipes(filteredIngredients);
  //   displayIngredients(filteredIngredients);
  //   displayAppareil(filteredIngredients);
  //   displayUstensiles(filteredIngredients);
  //   console.log(displayRecipes(filteredIngredients));
  // ======================================================================================
  // filtrira vec filtriranu listu - koja je napravlejna od global input searcha

  filteredRecipes;
  console.log(filteredRecipes);

  const filteredIngredientList = filteredRecipes.filter((recipe) => {
    console.log("show only search by list already filtered");
    return recipe.ingredients
      .map((ingredient) => {
        return ingredient.ingredient.toLowerCase();
      })
      .includes(search);
  });

  displayRecipes(filteredIngredientList);
  displayIngredients(filteredIngredientList);
  displayAppareil(filteredIngredientList);
  displayUstensiles(filteredIngredientList);
  console.log(filteredIngredientList);
});
// ======================================================================================

/**
 *
 *   APPAREIL SEARCH BY INPUT
 */

// // APPAREIL search bar input

searchAppareil.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);
  // ======================================================================================
  // filter all list of appareil
  // const filteredAppliance = recipes.filter((recipe) => {
  //   return (
  //     recipe.name.toLowerCase().includes(search) ||
  //     recipe.appliance.toLowerCase().includes(search) ||
  //     recipe.ingredients
  //       .map((ingredient) => {
  //         return ingredient.ingredient.toLowerCase();
  //       })
  //       .includes(search) ||
  //     recipe.ustensils
  //       .map((ustnesile) => {
  //         return ustnesile.toLowerCase();
  //       })
  //       .includes(search)
  //   );
  // });
  // console.log(filteredAppliance);
  // displayRecipes(filteredAppliance);
  // displayIngredients(filteredAppliance);
  // displayAppareil(filteredAppliance);
  // displayUstensiles(filteredAppliance);
  // console.log(displayRecipes(filteredAppliance));
  // ======================================================================================
  // filtrira vec filtriranu listu - koja je napravlejna od global input searcha

  filteredRecipes;
  console.log(filteredRecipes);

  const filteredApplianceList = filteredRecipes.filter((recipe) => {
    console.log("show only search by list already filtered");
    return recipe.appliance.toLowerCase().includes(search);
  });

  displayRecipes(filteredApplianceList);
  displayIngredients(filteredApplianceList);
  displayAppareil(filteredApplianceList);
  displayUstensiles(filteredApplianceList);
  console.log(filteredApplianceList);
});

// ======================================================================================

/**
 *
 *   USTENSILS SEARCH BY INPUT
 */

// // USTENSILS search bar input

searchUstensiles.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);

  // ======================================================================================
  // filter all list of Ustensiles
  //   const filteredUstensiles = recipes.filter((recipe) => {
  //     return (
  //       recipe.name.toLowerCase().includes(search) ||
  //       recipe.appliance.toLowerCase().includes(search) ||
  //       recipe.ingredients
  //         .map((ingredient) => {
  //           return ingredient.ingredient.toLowerCase();
  //         })
  //         .includes(search) ||
  //       recipe.ustensils
  //         .map((ustnesil) => {
  //           return ustnesil.toLowerCase();
  //         })
  //         .includes(search)
  //     );
  //   });
  //   console.log(filteredUstensiles);
  //   displayRecipes(filteredUstensiles);
  //   displayIngredients(filteredUstensiles);
  //   displayAppareil(filteredUstensiles);
  //   displayUstensiles(filteredUstensiles);
  //   console.log(displayRecipes(filteredUstensiles));
  // ======================================================================================
  // filtrira vec filtriranu listu - koja je napravlejna od global input searcha

  filteredRecipes;
  console.log(filteredRecipes);

  const filteredUstensilesList = filteredRecipes.filter((recipe) => {
    console.log("show only search by list already filtered");
    return recipe.ustensils
      .map((ustnesile) => {
        return ustnesile.toLowerCase();
      })
      .includes(search);
  });

  displayRecipes(filteredUstensilesList);
  displayIngredients(filteredUstensilesList);
  displayAppareil(filteredUstensilesList);
  displayUstensiles(filteredUstensilesList);
  console.log(filteredUstensilesList);
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
      }
    });
  }
});
// ======================================================================================
// ======================================================================================
// ======================================================================================
/**
 *
 *  FILTER BY SELECTED TAG
 */

/**
 *
 *  FILTER INGREDIENTS BY SELECTED TAG !!!NE RADI
 */


// dislay only recipes with selected TAG


// ingredientsList.addEventListener("click", function (e) {
//   // e.target is our targetted element.
//   console.log(e.target.nodeName);

//   const selectedTag = e.target.innerHTML;
//   console.log(selectedTag);

//   const filteredTag = recipes.filter((recipe) => {
//     return (
//       recipe.name.toLowerCase().includes(selectedTag) ||
//       recipe.appliance.toLowerCase().includes(selectedTag) ||
//       recipe.ingredients
//         .map((ingredient) => {
//           return ingredient.ingredient.toLowerCase();
//         })
//         .includes(selectedTag) ||
//       recipe.ustensils
//         .map((ustnesile) => {
//           return ustnesile.toLowerCase();
//         })
//         .includes(selectedTag)
//     );
//   });
//   console.log(filteredTag);
//   displayRecipes(filteredTag);
//   displayIngredients(filteredTag);
//   displayAppareil(filteredTag);
//   displayUstensiles(filteredTag);
//   console.log(displayRecipes(filteredTag));
  
// });


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

displayIngredients(recipes);

displayUstensiles(recipes);
