const recipesList = document.getElementById("recepies-cards");
const searchBar = document.getElementById("search__bar");
const ingredientsList = document.getElementById("ingredients-list");
const appareilList = document.getElementById("appareil-list");
const ustensilesList = document.getElementById("ustensiles-list");
const searchIngredients = document.getElementById("search__ingredient");
const searchAppareil = document.getElementById("search__appareil");
const searchUstensiles = document.getElementById("search__ustensiles");

import { recipes } from "../js/recipes.js";

let filteredIngList = [];
let filteredAppList = [];
let filteredUstList = [];

let filteredRecipes = [];
let filterIngredient = [];
let filterAppliance = [];
let filterUstensils = [];

let searchInputRes = [];


let filteredUniqueIngredients = [];

let uniqueIngredients = [];
uniqueIngredients = findUniqueIng(recipes);

function findUniqueIng(recipes) {
  let uniqueIngredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!uniqueIngredients.includes(ingredient.ingredient))
        uniqueIngredients.push(ingredient.ingredient); //on ajoute l'ingrédient au tableau
    });
  });
  return uniqueIngredients;
}

let uniqueAppliances = [];
uniqueAppliances = findUniqueApp(recipes);

function findUniqueApp(recipes) {
  let uniqueAppliances = [];
  recipes.forEach((recipe) => {
    if (!uniqueAppliances.includes(recipe.appliance))
      uniqueAppliances.push(recipe.appliance);
  });
  return uniqueAppliances;
}

let uniqueUstensils = [];
uniqueUstensils = findUniqueUst(recipes);

function findUniqueUst(recipes) {
  let uniqueUstensils = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      if (!uniqueUstensils.includes(ustensil)) uniqueUstensils.push(ustensil);
    });
  });
  return uniqueUstensils;
}

const displayIngredients = (uniqueIngredients) => {
  const htmlString = uniqueIngredients
    .map((ingredientsTab) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${ingredientsTab}</li>`;
    })
    .join("");
  ingredientsList.innerHTML = htmlString;
};

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

const displayAppareil = (uniqueAppliances) => {
  const htmlString = uniqueAppliances
    .map((applianceTab) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${applianceTab}</li>`;
    })
    .join("");

  appareilList.innerHTML = htmlString;
};

const displayUstensiles = (uniqueUstensils) => {
  const htmlString = uniqueUstensils
    .map((ustensilsTab) => {
      return `<li class="recepiesList__ustensil" id="recepiesList__ustensil">${ustensilsTab}</li>`;
    })
    .join("");
  ustensilesList.innerHTML = htmlString;
};

// MAIN SEARCH
searchBar.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  //   searchInputResult = filteredRecipes;

  let notFound = document.getElementById("not-found");
  let searchError = document.getElementById("search__error");

  if (search.length < 3) {
    // searchError.style.display = "inline-block";
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
  } else if (search.length > 2) {
    // searchError.style.display = "none";
    // filter list Recipes
    filteredRecipes = recipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(search) ||
        recipe.appliance.toLowerCase().includes(search) ||
        recipe.description.toLowerCase().includes(search) ||
        recipe.ingredients
          .map((ingredient) => {
            return ingredient.ingredient.toLowerCase();
          })
          .includes(search) ||
        recipe.ustensils
          .map((ustensil) => {
            return ustensil.toLowerCase();
          })
          .includes(search)
      );
    });

  filteredUniqueIngredients = findUniqueIng(filteredRecipes);
    const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
    const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

    displayRecipes(filteredRecipes);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  } else {
    notFound.style.display = "inline-block";
    console.log("not found");
  }
});

// // INGREDIENTS search bar input

searchIngredients.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  // 1.search ingredient list
  // 2. search ingredient list that is already filtered by main search
  // 3. search by click on tag


let ingredientString = [];

if (filteredUniqueIngredients.length > 0) {
    ingredientString = filteredUniqueIngredients;
} else {
    ingredientString =  uniqueIngredients;
}

let ingredientString2 = ingredientString.filter((ing) => {
    return (
    ing.toLowerCase().includes(search)
    );
  });

console.log(ingredientString2);

displayIngredients(ingredientString2);





});


// // Appareil search bar input
searchAppareil.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
});

// // Appareil search CLICK TAG
appareilList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);
});

// // Appareil search CLICK TAG make tag button
appareilList.addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);

//   //   const searchString = e.target.textContent;
//   //   console.log(searchString);



//   if (e.target && e.target.nodeName == "LI") {
//     // alert(e.target.textContent);
//     let tagsApp = document.createElement("div");
//     tagsApp.setAttribute("class", "tagsAppNew");
//     tagsApp.setAttribute("id", "tagsAppNew");
//     // console.log(tagsApp);
//     let newTag = document.getElementById("appTags");
//     // console.log(newTag);
//     newTag.appendChild(tagsApp);
//     tagsApp.textContent = e.target.textContent;

//     // add fontawesome Icon
//     let tagsicon = document.createElement("div");
//     tagsicon.setAttribute("class", "tagsIcon");
//     tagsicon.setAttribute("id", "tagsIcon");

//     tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
//     // console.log(tagsicon);

//     tagsApp.appendChild(tagsicon);
//     // console.log(tagsicon);

//     // close TAG on X
//     // const closeTags = document.getElementById("tagsIcon");
//     // console.log(closeTags);

//     tagsicon.addEventListener("click", () => {
//       if (tagsApp.style.display === "none") {
//         tagsApp.style.display = "flex";
//       } else {
//         tagsApp.style.display = "none";
//         displayRecipes(recipes);
//         displayIngredients(uniqueIngredients);
//         displayUstensiles(uniqueUstensils);
//         displayAppareil(uniqueAppliances);
//       }
//     });
//   }


});

// // Ustensiles search bar input
searchUstensiles.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
});

displayRecipes(recipes);
displayIngredients(uniqueIngredients);
displayUstensiles(uniqueUstensils);
displayAppareil(uniqueAppliances);




// domaci
// 0. uradi noiz za appliance i ustencil ko sto si uradila za ingredient
// 1.napravi funkciju od selektovanih tagova!!!
// 2. svaki tag selektovan ubaci u novi array= selectedTags//ingr//app//usten svi su prazni
// 3. u main searchu - dodati search po selectedTags 
