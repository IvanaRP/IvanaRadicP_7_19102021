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


let filterIngredient = [];
console.log(filterIngredient);



let filterALL = [];
console.log(filterALL);


// concat array 

// let data = [];
// function pretreatData(recipes) {
 
//   recipes.forEach(recipe => {
//       data.push({
//           "name": recipe.name,
//           "description": recipe.description,
//           "appliance": recipe.appliance,
//           "time": recipe.time,
//           "ingredients": [...recipe.ingredients.map(ingredient => {return ingredient.ingredient})],
//           "ustensils": recipe.ustensils,
//       })
//   })
//   return data;
// }
// console.log(data);
// pretreatData(recipes);

// remove duplicates



// Ensuite il suffit de faire un innerHtml qui mette tous les éléments du tableau dans la liste. En n'oubliant pas de mettre le li à chaque fois comme on l'avait fait



// let ingredientsTabs = [];
// recipes.forEach((recipe) => {
//   //recipe ici contient donc recipe.ingredients donc on veut passer sur chacun
//   recipe.ingredients.forEach((ingredient) => {
//     //là on passe sur chaque ingrédient de chaque recette
//     if (!ingredientsTabs.includes(ingredient.ingredient))
//       //si le tableau ne contient pas déjà l'ingrédient qu'on regarde (pour éviter les doublons)
//       ingredientsTabs.push(ingredient.ingredient); //on ajoute l'ingrédient au tableau
//   });
//   console.log(ingredientsTabs);
// });

// concat

// let allDatas = data.concat(ingredientsTabs);
// console.log(allDatas);
// console.log(data);
// console.log(ingredientsTabs);




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




let ingredientTab = [];
recipes.forEach(recipe => {  //recipe ici contient donc recipe.ingredients donc on veut passer sur chacun
   recipe.ingredients.forEach(ingredient => { //là on passe sur chaque ingrédient de chaque recette
      if (!ingredientTab.includes(ingredient.ingredient)) //si le tableau ne contient pas déjà l'ingrédient qu'on regarde (pour éviter les doublons)
         ingredientTab.push(ingredient.ingredient); //on ajoute l'ingrédient au tableau
   })
//    ingredientsList.innerHTML = ingredientTab;
})
console.log(ingredientTab);
 
// x.push('b', 'c');
// let allDatas = recipes;

// allDatas.push({"ing" : ingredientTab});
// console.log(allDatas);

// console.log(recipes);
// console.log(ingredientTab);

ingredientTab.push(recipes);
console.log(ingredientTab);


/**
 *
 *  DISPLAY RECIPES CARDS
 */
// display Recipes cards
// display Recipes cards
const displayRecipes = (recipes) => {
 const html = recipes
   .map((recipe) => {
    //  const ingredientHtml = recipe.ingredients
    //    .map((ingredient) => {
    //      return `<li id="recepiesIngredient__list" class="recepiesIngredient__list">${ingredient.ingredient}</li>`;
    //    })
    //    .join("");

    //  const ustensilsHtml = recipe.ustensils
    //    .map((ustensil) => {
    //      return `<li id="recepiesUstensiles__list" class="recepiesUstensiles__list">${ustensil}</li>`;
    //    })
    //    .join("");

     return `
           <div class="recepies__card">
                 <div class="recepies__img"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
                 <div class="recepies__info">
 
                   <div class="recepies__name-time">
                       <h3 class="recepies__name">${recipe.name}</h3>
                       <p class="recepies__time"><i class="far fa-clock"></i>${recipe.time}</p>
                   </div>
 
                   <div class="recepies__ingredients-description"> 
                   
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

 const displayIngredients = (ingredientTab) => {
    const htmlString = ingredientTab
      .map((ingredientTab) => {
        return `<li class="recepiesList__appliance" id="recepiesList__appliance">${ingredientTab}</li>`;
      })
      .join("");
    ingredientsList.innerHTML = htmlString;
  };
  

/**
 *
 *   MAIN SEARCH BY INPUT
 */
// // MAIN search bar input - if it includes name show in recipes or lists
searchBar.addEventListener('keyup', e => {
    const search = e.target.value.toLowerCase();
    console.log(search);

//     filterALL = allDatas.filter((recipe) => {
//         // console.log(recipe.name.includes(search));
//         console.log(allDatas);
//         // console.log(recipe.ing);
//         return (recipe.name.toLowerCase().includes(search)
//         );
//       });
//    console.log(filterALL);
//    displayRecipes(filterALL);
//    displayIngredients(filterALL);

    filterIngredient = ingredientTab.filter((ingredientTab) => {
      // console.log(filterIngredient);
      // console.log(ingredientsTab.toLowerCase());
      return (ingredientTab.toLowerCase().includes(search)
    //    ||
    //   ingredientTab.name.toLowerCase().includes(search)
      );
    });
 console.log(filterIngredient);
 displayIngredients(filterIngredient);

//     filteredRecipes = recipes.filter((recipe) => {
//         return (
//           recipe.name.toLowerCase().includes(search) ||
          
//           recipe.appliance.toLowerCase().includes(search) ||
//         //   recipe.ingredients
//         //       .map((ingredient) => {
//         //         return ingredient.ingredient.toLowerCase();
//         //       })
//         //       .includes(search) ||
//           recipe.ustensils
//             .map((ustnesile) => {
//               return ustnesile.toLowerCase();
//             })
//             .includes(search)
//         );
//       });
  
//       console.log(filteredRecipes);
//       displayRecipes(filteredRecipes);
//     //   displayIngredients(filteredRecipes);
//       // displayAppareil(filteredRecipes);
//     //   displayUstensiles(filteredRecipes);
//       console.log(displayRecipes(filteredRecipes));



});
 
//  Et on fait le innerHtml.


  displayRecipes(recipes);
  displayIngredients(ingredientTab);