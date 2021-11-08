// import from other js
import { recipes } from "./recipes.js";
console.log(recipes);



const allRecipes = recipes.map((recipe) => {
  return {
    recipe,
  };
});
console.log(allRecipes);

// const ingredientsArray = [];
// console.log(ingredientsArray);

// recipes.map((recipe) => {
//   ingredientsArray.push(recipe.ingredients);
// });

// const allingredients = ingredientsArray.map((ingredients) => {
//   return {
//     ingredients,
//   };
// });
// console.log(allingredients);;




const ustensilsArrays = [];
console.log(ustensilsArrays);

recipes.map((recipe) => {
  ustensilsArrays.push(recipe.ustensils);
});


const displayIngredientsingredient = recipes.map((recipe) => recipe.ingredients.map((ingredient) => ingredient.ingredient));
console.log(displayIngredientsingredient);


const displayIngredientarrays = recipes.map((recipe) => recipe.ingredients.map((ingredient) => ingredient.ingredient));
console.log(displayIngredientarrays);

// const displayIngredientsquantity = displayIngredientarrays.map((ingredients) => ingredients.quantity.map((quantity)=> quantity.ingredient));
// console.log(displayIngredientsquantity);


const displayIngredientsunit = recipes.map((recipe) => recipe.ingredients.map((ingredient) => ingredient.unit));
console.log(displayIngredientsunit);




// works with for each 

let ingredientsArray = [];
console.log(ingredientsArray);

recipes.forEach(recipe => {
  recipe.ingredients.forEach((allIngredients) => {
    ingredientsArray.push(allIngredients.ingredient);
  });
});

// Filter duplicate tags
const uniqueIngredients = [...new Set(ingredientsArray)];
console.log(uniqueIngredients);

let ingredientsArrayUnit = [];
console.log(ingredientsArrayUnit);

recipes.forEach(recipe => {
  recipe.ingredients.forEach((allIngredientsUnit) => {
    ingredientsArrayUnit.push(allIngredientsUnit.unit);
  });
});