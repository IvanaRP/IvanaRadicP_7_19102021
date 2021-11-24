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

let searchInputRes = [];
console.log(searchInputRes);
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

  searchInputRes = filteredRecipes;
  console.log(searchInputRes);


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
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);
 
  searchInputRes;
  console.log(searchInputRes);

  if (searchInputRes.length > 0) { //if global search exist
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


  } else if (filteredAppList.length > 0) { //if appliance search exist
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

  } else if (filteredUstList.length > 0) { //if ustensil search exist
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





  const search = e.target.value.toLowerCase();
  console.log(search);




//   let recipes2;

// if (filteredRecipes.length > 0){
//   recipes2 = filteredRecipes;
// } else {
//   recipes2 = recipes;
// }
//   // ======================================================================================
//   // filter all list of ingredient
//     const filteredIngredients = recipes2.filter((recipe) => {
//       console.log("show all list");
//       return (
//         recipe.name.toLowerCase().includes(search) ||
//         recipe.appliance.toLowerCase().includes(search) ||
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
//     console.log(filteredIngredients);
//     displayRecipes(filteredIngredients);
//     displayIngredients(filteredIngredients);
//     displayAppareil(filteredIngredients);
//     displayUstensiles(filteredIngredients);
//     console.log(displayRecipes(filteredIngredients));
  // ======================================================================================
  // filtrira vec filtriranu listu - koja je napravlejna od global input searcha

  // //   filteredRecipes;
  // //   console.log(filteredRecipes);

  //   const filteredIngredientList = filteredRecipes.filter((recipe) => {
  //     console.log("show only search by list already filtered");
  //     return recipe.ingredients
  //       .map((ingredient) => {
  //         return ingredient.ingredient.toLowerCase();
  //       })
  //       .includes(search);
  //   });

  //   displayRecipes(filteredIngredientList);
  //   displayIngredients(filteredIngredientList);
  //   displayAppareil(filteredIngredientList);
  //   displayUstensiles(filteredIngredientList);
  //   console.log(filteredIngredientList);
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

  if (searchInputRes.length > 0) { //if global search exist
    console.log(searchInputRes);
    console.log("show only list of filtered appliance by MAIN SEARCH");
    const searchInputRes2 = searchInputRes.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(searchString);
    });
    console.log(searchInputRes2);
    displayAppareil(searchInputRes2);

  } else if (filteredIngList.length > 0) { //if ingredient search exist
    console.log(filteredIngList);
    console.log("show only list of filtered appliance by Ingredient SEARCH");
    const searchAppInst = filteredIngList.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(searchString);
    });
    console.log(searchAppInst);
    displayAppareil(searchAppInst);

  } else if (filteredUstList.length > 0) { //if ustensil search exist
    console.log(filteredUstList);
    console.log("show only list of filtered appliance by Ustensil SEARCH");
    const searchAppUst = filteredUstList.filter((recipe) => {
      return recipe.appliance.toLowerCase().includes(searchString);
    });
    console.log(searchAppUst);
    displayAppareil(searchAppUst);

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
  // let recipes2;

  // if (filteredRecipes.length > 0){
  //   recipes2 = filteredRecipes;
  // } else {
  //   recipes2 = recipes;
  // }

 
  // // ======================================================================================
  // // filter all list of appareil
  // const filteredAppliance = recipes2.filter((recipe) => {
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
  // // ======================================================================================
  // // filtrira vec filtriranu listu - koja je napravlejna od global input searcha

  // // filteredRecipes;
  // // console.log(filteredRecipes);

  // const filteredApplianceList = filteredRecipes.filter((recipe) => {
  //   console.log("show only search by list already filtered");
  //   return recipe.appliance.toLowerCase().includes(search);
  // });

  // displayRecipes(filteredApplianceList);
  // displayIngredients(filteredApplianceList);
  // displayAppareil(filteredApplianceList);
  // displayUstensiles(filteredApplianceList);
  // console.log(filteredApplianceList);


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

  } else if (filteredIngList.length > 0) { //if ingredient search exist
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

  } else if (filteredAppList.length > 0) { //if appliance search exist
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

  // let ustensilsTab = [];
  // console.log(ustensilsTab);

  // let search = e.target.value; //on récupère ce qui a été écrit
  // filteredRecipes = recipes.forEach(recipe => {  
  //    recipe.ustensils.forEach(ustensil => { 
  //       if (!ustensilsTab.includes(ustensil) && ustensil.includes(search)) //on regarde que dans le texte de l'ingrédient il y a ce qu'on a tapé, si ce n'est pas le cas on ne met pas dans le tableau 
  //       ustensilsTab.push(ustensil); 
  //    }) 
  // })

  // ustensilesList.innerHTML = ustensilsTab;
  
  // console.log(ustensilsTab);
  // console.log(filteredRecipes);

  

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

    // filteredRecipes;
    // console.log(filteredRecipes);

    // const filteredUstensilesList = filteredRecipes.filter((recipe) => {
    //   console.log("show only search by list already filtered");
    //   return recipe.ustensils
    //     .map((ustnesile) => {
    //       return ustnesile.toLowerCase();
    //     })
    //     .includes(search);
    // });

    // displayRecipes(filteredUstensilesList);
    // displayIngredients(filteredUstensilesList);
    // displayAppareil(filteredUstensilesList);
    // displayUstensiles(filteredUstensilesList);
    // console.log(filteredUstensilesList);
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


// appareilList.addEventListener("click", function (e) {
//   // e.target is our targetted element.
//   console.log(e.target.nodeName);

//   const selectedTag = e.target.innerHTML;
//   console.log(selectedTag);

// ingredientsList.addEventListener('click', e => {

//    let ingredientTab = [];

//    let search = e.target.textContent; //on récupère ce qui a été écrit
//    console.log(search);

//    recipes.forEach(recipe => {  
//       recipe.ingredients.forEach(ingredient => { 
//          if (!ingredientTab.includes(ingredient.ingredient) && ingredient.ingredient.includes(search)) //on regarde que dans le texte de l'ingrédient il y a ce qu'on a tapé, si ce n'est pas le cas on ne met pas dans le tableau 
//             ingredientTab.push(ingredient.ingredient); 
//       })
//       ingredientsList.innerHTML = ingredientTab;
//    })
//    console.log(ingredientTab);
// })

ingredientsList.addEventListener('click', e => {

    let selectedTag = e.target.textContent; //on récupère ce qui a été écrit
    console.log(selectedTag);
    let ingredientTab = []; 


    ingredientsList.innerHTML = ingredientTab;
    console.log(ingredientsList.innerHTML);

    ingredientTab.push(selectedTag);
    console.log(ingredientTab);

// const filtrIngTab = recipes.filter((recipe) => {
//       return (
//         recipe.name.toLowerCase().includes(selectedTag.innerHTML) ||
//         recipe.appliance.toLowerCase().includes(selectedTag.innerHTML) ||
//         recipe.ingredients
//           .map((ingredient) => {
//             return ingredient.ingredient.toLowerCase();
//           })
//           .includes(selectedTag.innerHTML) ||
//         recipe.ustensils
//           .map((ustnesil) => {
//             return ustnesil.toLowerCase();
//           })
//           .includes(selectedTag.innerHTML)
//       );
//     });
//     console.log(filtrIngTab);
//     displayRecipes(filtrIngTab);
//     displayIngredients(filtrIngTab);
//     displayAppareil(filtrIngTab);
//     displayUstensiles(filtrIngTab);
//     console.log(displayRecipes(filtrIngTab));

//    recipes.forEach((recipe) => {
//     if (
//       recipe.name.toLowerCase().includes(selectedTag) ||
//       recipe.appliance.toLowerCase().includes(selectedTag) ||
//       recipe.ingredients.map((ingredient) => {
//           return ingredient.ingredient.toLowerCase();
//         }).includes(selectedTag) ||
//       recipe.ustensils.map((ustnesile) => {
//           return ustnesile.toLowerCase();
//         }).includes(selectedTag)
//     );
// ingredientTab.push(recipe.appliance);

//   });
//   ingredientsList.innerHTML = ingredientTab;
//   console.log(ingredientTab);
  
});
// ======================================================================================
// ======================================================================================
// ======================================================================================
/**
 *
 *   APPAREIL SEARCH BY SELECTED TAG
 */

// // APPAREIL TAG

appareilList.addEventListener("click", (e) => {

  // Pour le tri par tags, je conseille de créer une liste de tag
//  qui va se remplir avec les tags qu'on a choisis. 
//  Chaque fois que l'on clique pour en choisir un, tu refais 
//  l'affichage des recettes en vérifiant à chaque fois qu'elle est
//   valide pour chaque tag de la liste avant de la valider. Concrètement :

// Ajouter le listener sur chaque élément de la liste
// Quand le listener se lance, on ajoute le mot dans le tableau
// On fait une boucle qui passe sur chaque recette (avec un forEach probablement)
// A l'intérieur de cette boucle on fait une deuxième boucle forEach sur notre liste de tags qui va vérifier que chacun est validé dans la recette qu'on regarde (avec des includes par exemple)
// Si c'est bon on peut la mettre dans les recettes valides et l'afficher

  const targetList = e.target.textContent;
  console.log(e.target.nodeName);
  console.log(targetList);

  let appareilTag = [];

  // recipes.map((recipe) => {
  //   if (!appareilTab.includes(recipe.appliance)) 
  //   appareilTab.push(recipe.appliance);
  // });
  
  
recipes.forEach((recipe) => {
  (recipe.appliance)
  if(!appareilTag.includes(recipe.appliance))
  appareilTag.push(recipe.appliance);
}) ;

// recipes.forEach(recipe => {  //recipe ici contient donc recipe.ingredients donc on veut passer sur chacun
//     recipe.appliance.forEach(applianc => { //là on passe sur chaque ingrédient de chaque recette
//        if (!appareilTag.includes(applianc)) //si le tableau ne contient pas déjà l'ingrédient qu'on regarde (pour éviter les doublons)
//        appareilTag.push(applianc); //on ajoute l'ingrédient au tableau
//     })
 
//  })
 console.log(appareilTag);
  

// const filteredSelection = recipes.filter((recipe) =>{
//   console.log("filter with selected list");
//   return recipe.appliance.toLowerCase().includes(targetList);
// });

// console.log(filteredSelection);
// displayRecipes(filteredSelection);

//  const filteredAppTag = recipes.filter((recipe) => {
//         console.log("show list of all appliance");
//         return (
//           recipe.name.includes(targetList) ||
//           recipe.appliance.includes(targetList) ||
//           recipe.ingredients
//             .map((ingredient) => {
//               return ingredient.ingredient;
//             })
//             .includes(targetList) ||
//           recipe.ustensils.includes(targetList)
//         );
//       });
  
//       console.log(filteredAppTag);
  
//       displayRecipes(filteredAppTag);
//       displayIngredients(filteredAppTag);
//       displayAppareil(filteredAppTag);
//       displayUstensiles(filteredAppTag);
  
//       console.log(displayRecipes(filteredAppTag));

  // const searchString = e.target
  // console.log(searchString);

  // searchInputRes;
  // console.log(searchInputRes);

  // if (searchInputRes.length > 0) { //if global search exist
  //   console.log(searchInputRes);
  //   console.log("show only list of filtered appliance by MAIN SEARCH");
  //   const searchInputRes2 = searchInputRes.filter((recipe) => {
  //     return recipe.appliance.toLowerCase().includes(searchString);
  //   });
  //   console.log(searchInputRes2);
  //   displayAppareil(searchInputRes2);

  // } else if (filteredIngList.length > 0) { //if ingredient search exist
  //   console.log(filteredIngList);
  //   console.log("show only list of filtered appliance by Ingredient SEARCH");
  //   const searchAppInst = filteredIngList.filter((recipe) => {
  //     return recipe.appliance.toLowerCase().includes(searchString);
  //   });
  //   console.log(searchAppInst);
  //   displayAppareil(searchAppInst);

  // } else if (filteredUstList.length > 0) { //if ustensil search exist
  //   console.log(filteredUstList);
  //   console.log("show only list of filtered appliance by Ustensil SEARCH");
  //   const searchAppUst = filteredUstList.filter((recipe) => {
  //     return recipe.appliance.toLowerCase().includes(searchString);
  //   });
  //   console.log(searchAppUst);
  //   displayAppareil(searchAppUst);

  // } else {
  //   filteredAppList = recipes.filter((recipe) => {
  //     console.log("show list of all appliance");
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

  //   console.log(filteredAppList);

  //   displayRecipes(filteredAppList);
  //   displayIngredients(filteredAppList);
  //   displayAppareil(filteredAppList);
  //   displayUstensiles(filteredAppList);

  //   console.log(displayRecipes(filteredAppList));
  // }

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

displayIngredients(recipes);

displayUstensiles(recipes);


// function filter() {





// }