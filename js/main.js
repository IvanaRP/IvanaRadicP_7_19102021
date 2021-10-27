// import other js
import { recipes } from "./recipes.js";
// console.log(recipes);


let ingredients = [];

// // display all recipes
function ingredientsFun(ingredients) {
  return `
                      <ul class="ingredients-list">
                          ${ingredients
                            .map((ingredient) => {
                              return `
                            <li>${ingredient.ingredient} ${ingredient.quantity} ${ingredient.unit}</li>
                            `;
                            })
                            .join("")}
                      </ul>
    `;
}

ingredients = ingredient
console.log(ingredients);


function recipiesBox(recipe) {
  return `
              <div class="recepiesBox">
              <div class="recepiesimg"> PHOTO</div>
                  <div class="recepiesinfo">
                    <div class="nameTime">
                      <h3 class="name">${recipe.name}</h3>
                      <h3 class="time"><i class="far fa-clock"></i>${
                        recipe.time
                      } min</h3>
                    </div>
                      <div class="ingDes">
                      ${ingredientsFun(recipe.ingredients)}
                      <p class="description">${recipe.description}</p>
                      </div>
                  </div>
              </div>
  `;
}
document.getElementById("recepies").innerHTML = `
  ${recipes.map(recipiesBox).join("")}
    `;

// buttons
function buttonsSelect() {
  return `

    <div class="ingredient"><p>Ingredient <i class="fas fa-angle-down"></i></p></div>
    <div class="ingredient-hide" id="ingredient-hide"></div>
  
    <div class="appareil"><p>Appareil <i class="fas fa-angle-down"></i></p></div>
    <div class="appareil-hide" id="appareil-hide"></div>

    <div class="ustensiles"><p>Ustensiles <i class="fas fa-angle-down"></i></p></div>
    <div class="ustensiles-hide" id="ustensiles-hide"></div>

    `;
}
document.getElementById("buttons-select").innerHTML = buttonsSelect();

// Ingredient button
let ingredientBtn = document.getElementById("ingredient-hide");
console.log(ingredientBtn);

function ingredient(recipe) {
  return `
    <div class="ingredient-list">
    <p>  ${ingredientsFun(recipe.ingredients)} </p>
    </div>
  `;
}

ingredientBtn.innerHTML = `
  ${recipes.map(ingredient).join("")}
  `;

// show Ingredient list on click

// Appareil button
let applianceBtn = document.getElementById("appareil-hide");
console.log(applianceBtn);

function appliance(recipe) {
  return `
    <div class="appliance-list">
    <p>${recipe.appliance} </p>
    </div>
  `;
}

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
  `;
}

ustensilesBtn.innerHTML = `
  ${recipes.map(ustensiles).join("")}
  `;

// add listener forn input and if smth type make filter - show only typeed
function inputSearch() {
  let inputSearch = document.getElementById("search-all");
  // console.log(inputSearch);


  // addEventlistener on keyup - everytime its pressed smth
  inputSearch.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
  //   const filteresIngridients = ingredient.filter( ingredient => {
  //     ingredient.name.includes(searchString);

  //   });
  //     console.log(filteresIngridients);
  });
};
// inputSearch();
