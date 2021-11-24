// import other js
import { recipes } from "../js/recipes.js";
console.log(recipes);
// select elements
const recipesList = document.getElementById("recepies-cards");
const searchBar = document.getElementById("search__bar");


searchBar.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();
    console.log(search);


 // Declare variables
 var input, filter, ul, li, a, i, txtValue;
 input = document.getElementById('search__bar');
 filter = input.value.toUpperCase();
 ul = document.getElementById("recepies-cards");
 li = ul.getElementsByTagName('li');


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
});


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
            return `<li id="recepiesIngredient__list" class="recepiesIngredient__list">${ingredient.ingredient}</a></li>`;
          })
          .join("");
        const ustensilsHtml = recipe.ustensils
          .map((ustensil) => {
            return `<li id="recepiesUstensiles__list" class="recepiesUstensiles__list">${ustensil}</l>`;
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
                          <li <a href="#"class="recepies__description">${recipe.description} </a></li>
                      </div>
                      
                    </div>
                </div>
         
          `;
      })
      .join("");
    recipesList.innerHTML = html;
  };

  displayRecipes(recipes);