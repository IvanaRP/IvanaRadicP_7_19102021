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

let filteredRecipes2 = [];
console.log(filteredRecipes2);



let filterIngredient = [];
console.log(filterIngredient);

let filterArray3 = [];
console.log(filterArray3);

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
  console.log(ingredientsTabs);
});

let applianceTabs = [];
recipes.forEach((recipe) => {
 if (!applianceTabs.includes(recipe.appliance))
 applianceTabs.push(recipe.appliance);

});
console.log(applianceTabs);



// recipes.forEach((recipe) => {
//   //recipe ici contient donc recipe.ingredients donc on veut passer sur chacun
//   ((recipe.appliance) => {
//     //là on passe sur chaque ingrédient de chaque recette
//     if (!applianceTabs.includes(applianc))
//       //si le tableau ne contient pas déjà l'ingrédient qu'on regarde (pour éviter les doublons)
//       applianceTabs.push(applianc); //on ajoute l'ingrédient au tableau
//   });
//   console.log(applianceTabs);
// });


// ({"ing": ingredient.ingredient })


// concat array 

let data = [];
function pretreatData(recipes) {
 
  recipes.forEach(recipe => {
      data.push({
          "name": recipe.name.toLowerCase(),
          "description": recipe.description.toLowerCase(),
          "appliance": recipe.appliance.toLowerCase(),
          "ingredients": [...recipe.ingredients.map(ingredient => {return ingredient.ingredient.toLowerCase()})],
          "ustensils": recipe.ustensils,
      })
  })
  return data;
}
console.log(data);
pretreatData(recipes);


let alllists = recipes.concat(ingredientsTabs);
console.log(alllists);


let aquariums = [...recipes, ...ingredientsTabs];
console.log(aquariums);


let zz = data.concat(ingredientsTabs);
console.log(zz);
console.log(data);
console.log(ingredientsTabs);

// let zingr = [];
// console.log(zingr);
// zz.map((z) => {
//   zingr.push(z.recipe);
// });

// console.log(zingr);

// recipes.push(ingredientsTabs);
// console.log(recipes);

// let dataalllists = [];
// function  all(alllists) {
 
//   alllists.forEach(alllist => {
//       dataalllists.push({
//           "name": alllist.name.toLowerCase(),
//           "ing": alllist,
//           // "description": recipe.description.toLowerCase(),
//           // "appliance": recipe.appliance.toLowerCase(),
//           // "ingredients": [...recipe.ingredients.map(ingredient => {return ingredient.ingredient.toLowerCase()})],
//           // "ustensils": recipe.ustensils,
//           // "raw": recipe,
//       })
//   })
//   return dataalllists;
// }
// console.log(dataalllists);
// all(recipes);



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



/**
 *
 *  DISPLAY PROBA
 */
// ===========================================
// const displayPROBA = (ingredientsTabs) => {
//   const htmlString = ingredientsTabs
//   .map((ingredientsTabs) => {
//     return `<li class="recepiesList__appliance" id="recepiesList__appliance">${ingredientsTabs}</li>`;
//   })
//   .join("");
//   document.getElementById("proba").innerHTML = htmlString;
   
// };


/**
 *
 *  DISPLAY PROBA
 */
// ===========================================
const displayPROBA = (zz) => {
  const htmlString = zz
  .map((data) => {
    return `<li class="recepiesList__appliance" id="recepiesList__appliance">${data.name}</li>`;
  })
  .join("");
  document.getElementById("proba").innerHTML = htmlString;
   
};
// ===========================================
// /**
//  *
//  *  DISPLAY RECIPES CARDS
//  */
// // display Recipes cards
// const displayRecipes = (recipes) => {
//   const html = recipes
//     .map((recipe) => {
//       const ingredientHtml = recipe.ingredientsTab
//           .map((ingredientsTab) => {
//             return `<li id="recepiesIngredient__list" class="recepiesIngredient__list">${ingredientsTab}</li>`;
//           })
//           .join("");
//       return `
//             <div class="recepies__card">
//                   <div class="recepies__img"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
//                   <div class="recepies__info">
  
//                     <div class="recepies__name-time">
//                         <h3 class="recepies__name">${recipe.name}</h3>
//                         <h3 class="recepies__name">${recipe.description}</h3>
//                         <p class="recepies__time"><i class="far fa-clock"></i>${recipe.time}</p>
//                     </div>
  
//                     <div class="recepies__ingredients-description"> 
//                        <div class="recepies__ingredients">${recipe.ustensils}</div>
//                        <div class="recepies__ustensil">${recipe.appliance}</div>
//                         <p class="recepies__INGS">${ingredientHtml}</p>
//                     </div>
                    
//                   </div>
//               </div>
       
//         `;
//     })
//     .join("");
//   recipesList.innerHTML = html;
// };
// ========================================================
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
const displayAppareil = (applianceTabs) => {
  const htmlString =  applianceTabs
    .map((applianceTab) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${applianceTab}</li>`;
    })
    .join("");

  appareilList.innerHTML = htmlString;
};
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

    // ======================================================================================
    // FOR LOOP
  // callback function 
// function filterProducts(){
//   let filterValue = searchBar.value.toLowerCase();
//   let item = document.querySelectorAll('.recepies__card')
//   // console.log(filterValue);

//   for (let i = 0; i < item.length; i++){
//       let span = item[i].querySelector('.recepies__name');

//       if(span.innerHTML.toLowerCase().indexOf(filterValue) > -1){
//           item[i].style.display = "initial";
//       }else{
//           item[i].style.display = "none";
//       }
//   }
// }

// filterProducts();
// ======================
// // added ingredientsTabs in recipes array alllists

// filteredRecipes = recipes.filter((recipe) => {

//   console.log(recipe.name.toLowerCase().includes(search));
//   return (
//     recipe.name.toLowerCase().includes(search)
//     // alllist.name.toLowerCase().includes(search) ||
//     // alllist.appliance.toLowerCase().includes(search) ||
//     // alllist.ingredients
//     //   .map((ingredient) => {
//     //     return ingredient.ingredient.toLowerCase();
//     //   })
//     //   .includes(search) ||
//     //   alllist.ustensils
//     //   .map((ustnesile) => {
//     //     return ustnesile.toLowerCase();
//     //   })
//     //   .includes(search)
//   );
// });

// console.log(filteredRecipes);
// displayRecipes(filteredRecipes);
// displayPROBA(filteredRecipes);
// displayIngredients(filteredRecipes);
// // displayAppareil(filteredRecipes);
// // displayUstensiles(filteredRecipes);
// console.log(displayRecipes(filteredRecipes));


// // =======================


// filteredRecipes = zz.filter((recipe) => {

//   console.log(recipe.name.toLowerCase().includes(search));
//   return (
//     recipe.name.toLowerCase().includes(search)
//     // alllist.name.toLowerCase().includes(search) ||
//     // alllist.appliance.toLowerCase().includes(search) ||
//     // alllist.ingredients
//     //   .map((ingredient) => {
//     //     return ingredient.ingredient.toLowerCase();
//     //   })
//     //   .includes(search) ||
//     //   alllist.ustensils
//     //   .map((ustnesile) => {
//     //     return ustnesile.toLowerCase();
//     //   })
//     //   .includes(search)
//   );
// });

// console.log(filteredRecipes);
// displayRecipes(filteredRecipes);
// displayPROBA(filteredRecipes);
// displayIngredients(filteredRecipes);
// // displayAppareil(filteredRecipes);
// // displayUstensiles(filteredRecipes);
// console.log(displayRecipes(filteredRecipes));


// =======================



// filterArray3 = ingredientsTabs.filter((ingredientsTabs) => {
//   console.log(filterArray3);
//   console.log(ingredientsTabs.toLowerCase());
//   return (ingredientsTabs.toLowerCase().includes(search)
//   );
// });

//     displayPROBA(filterArray3);



// // if (ingredientsTabs > 0) {
  
  // filterIngredient = ingredientsTabs.filter((ingredientsTab) => {
  //   // console.log(filterIngredient);
  //   // console.log(ingredientsTab.toLowerCase());
  //   return (ingredientsTab.toLowerCase().includes(search)
  //   );
  // });
  
  // displayIngredients(filterIngredient);
// // } else {
  
  // filteredRecipes = recipes.filter((recipe) => {
  //   // console.log(recipe.ingredientsTabs);
  //   return (
  //     recipe.name.toLowerCase().includes(search) ||
  //     // recipe.appliance.toLowerCase().includes(search) ||
  //     recipe.ustensils
  //       .map((ustnesile) => {
  //         return ustnesile.toLowerCase();
  //       })
  //       .includes(search)
  //   );
  // });
  // console.log(filteredRecipes);
  // displayRecipes(filteredRecipes);

  // displayPROBA(filteredRecipes);
  // // displayAppareil(filteredRecipes);
  // // displayUstensiles(filteredRecipes);
  // console.log(displayRecipes(filteredRecipes));

  // let ingredientTab = [];

  // filteredRecipes2 = recipes.filter((recipe) => {
  
  //     recipe.ingredients.forEach(ingredient => { 
  //       if (!ingredientTab.includes(ingredient.ingredient) && ingredient.ingredient.includes(search)) //on regarde que dans le texte de l'ingrédient il y a ce qu'on a tapé, si ce n'est pas le cas on ne met pas dans le tableau 
  //          ingredientTab.push(ingredient.ingredient); 
  //    })
    
   
  // });

  // console.log(ingredientTab);
  
  // displayIngredients(filteredRecipes2);


  // filteredRecipes2 =recipes.filter((recipe) => {
  //   console.log(recipe.appliance);
  //   if (!applianceTabs.includes(recipe.appliance) && recipe.appliance.includes(search))
  //   applianceTabs.push(recipe.appliance);
   
  //  });
// let newApp = [];
//   filteredRecipes2 = recipes.filter((recipe) => {
//     console.log(recipe.appliance);
//     if (!newApp.includes(recipe.appliance.toLowerCase()) && recipe.appliance.toLowerCase().includes(search))
//     newApp.push(recipe.appliance);
//     return (appareilList.innerHTML = newApp);
//    });

//    console.log(newApp);


  
//    displayAppareil(filteredRecipes2);


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

displayAppareil(applianceTabs);
// displayAppareil(uniqueAppliances);
displayPROBA(zz);
displayIngredients(ingredientsTabs);
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