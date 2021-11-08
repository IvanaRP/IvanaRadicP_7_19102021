// import from other js
import { recipes } from "./recipes.js";
console.log(recipes);

// make variables
// let recipes;
// let allrecipes;
// // let ingredients;
// let appliance;
// let ustensils;
let recipe = recipes;
console.log(recipe);

let applianceArray = [];
console.log(applianceArray);

let ingredientsArray = [];
console.log(ingredientsArray);

let ustensilsArray = [];
console.log(ustensilsArray);

const ingredientNames = [];
console.log(ingredientNames);

recipes.map((recipe) => {
  ingredientNames.push(recipe.ingredients);
});

const ingredientinfo = [];
console.log(ingredientinfo);


const ingredientarrays = ingredientNames.map((ingredients) => {
  return {
    blah: ingredients[0].ingredient,
  };
});
console.log(ingredientarrays);




// fill arrays

recipes.map((recipe) => {
  applianceArray.push(recipe.appliance);
});

recipes.map((recipe) => {
  ingredientsArray.push(recipe.ingredients);
});

// const ingredientAll = ingredientsArray.map((ingredients) => {
//   return {
//     ingredient: ingredients[0].ingredient,
//   };
// });
// console.log(ingredientAll);

// const ingredientQuantity = ingredientsArray.map((ingredients) => {
//   return {
//     ingredient: ingredients[0].quantity,
//   };
// });
// console.log(ingredientQuantity);

// const ingredientUnit = ingredientsArray.map((ingredients) => {
//   return {
//     ingredient: ingredients[0].unit,
//   };
// });
// console.log(ingredientUnit);

// recipes.map((recipe) => {
//     ustensilsArray.push(recipe.ustensils);
//   });

const nameUsts = recipes.map((recipe) => {
  return recipe.ustensils;
});
console.log(nameUsts);

// const ust1 = nameUsts.map(nameUst => {
//     return nameUst.ustensils;
// })

// console.log(ust1);

// Filter duplicate tags
const uniqueAppliance = [...new Set(applianceArray)];
console.log(uniqueAppliance);

// const uniqueIngredientsAll = [...new Set(ingredientAll)];
// console.log(uniqueIngredientsAll);

// const uniqueustensilsAll = [...new Set(ustensilsAll)];
// console.log(uniqueustensilsAll);

// recepiesCards
let recepiesCard = document.getElementById("recepies-card");
console.log(recepiesCard);

// draw recepiesCard
function recipiesBox(recipe) {
  return `<li class="recipeinput" id="recipeinput">
                <div class="recepiesBox" id="recipeinput">
                  <div class="recepiesimg"> PHOTO</div>
                      <div class="recepiesinfo">
                        <div class="nameTime">
                          <h3 class="name" id="name">${recipe.name}</h3>
                          <h3 class="time"><i class="far fa-clock"></i>${recipe.time} min</h3>
                        </div>
                          <div class="ingDes">
                          
                          <p class="description">${recipe.description}</p>
                          <p class="ustensils">${recipe.ustensils}}</p>
                          </div>
                      </div>
                  </div>
           </li>
      `;
}
recepiesCard.innerHTML = `${recipes.map(recipiesBox).join("")}`;
