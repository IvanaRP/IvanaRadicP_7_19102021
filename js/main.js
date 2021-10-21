// import other js
import { recipes } from "./recipes.js";
console.log(recipes);

// // display all recipes

function ingredientsFun(ingredients){
  return`
                     <ul class="ingredients-list">
                        ${ingredients.map((ingredient) => {
                          return `
                          <li>${ingredient.ingredient} ${ingredient.quantity} ${ingredient.unit}</li>
                          `
                        }).join("")}
                     </ul>
  `
}


function recipiesBox(recipe) {
    return `
            <div class="recepiesBox">
            <div class="recepiesimg"> PHOTO</div>

                <div class="recepiesinfo">

                  <div class="nameTime">
                    <h3 class="name">${recipe.name}</h3>
                    <h3 class="time"><i class="far fa-clock"></i>${recipe.time} min</h3>
                  </div>

                    <div class="ingDes">

                    ${ingredientsFun(recipe.ingredients)}
                  
                    <p class="description">${recipe.description}</p>
                    </div>
                </div>
            </div>
 `
};

document.getElementById("recepies").innerHTML = `
 ${recipes.map(recipiesBox).join("")}
  `;


  
// Ingredient button
let ingredientBtn = document.getElementById("ingredient-hide");
console.log(ingredientBtn);

function ingredient(recipe) {
  return `
  <div class="appliance-list">
   <p>  ${ingredientsFun(recipe.ingredients)} </p>
  </div>
`
};

ingredientBtn.innerHTML = `
${recipes.map(ingredient).join("")}
`;



// Appareil button
let applianceBtn = document.getElementById("appareil-hide");
console.log(applianceBtn);

function appliance(recipe) {
  return `
  <div class="appliance-list">
   <p>${recipe.appliance} </p>
  </div>
`
};

applianceBtn.innerHTML = `
${recipes.map(appliance).join("")}
`;


// Ustensiles button
let ustensilesBtn = document.getElementById("ustensiles-hide");
console.log(ustensilesBtn);

function ustensiles(recipe) {
  return `
  <div class="ustensiles-list">
   <p>${recipe.ustensiles} </p>
  </div>
`
};

ustensilesBtn.innerHTML = `
${recipes.map(ustensiles).join("")}
`;