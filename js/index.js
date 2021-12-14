const recipesList = document.getElementById("recepies-cards");
const searchBar = document.getElementById("search__bar");
const ingredientsList = document.getElementById("ingredients-list");
const appareilList = document.getElementById("appareil-list");
const ustensilesList = document.getElementById("ustensiles-list");
const searchIngredients = document.getElementById("search__ingredient");
const searchAppareil = document.getElementById("search__appareil");
const searchUstensiles = document.getElementById("search__ustensiles");

import { recipes } from "../js/recipes.js";

let filteredRecipes = [];

let selectedIngredients = [];
let selectedAppareil = [];
let selectedUstensiles = [];

let filteredUniqueIngredients = [];
let filteredUniqueAppliances = [];
let filteredUniqueUstensiles = [];

let uniqueIngredients = [];
uniqueIngredients = findUniqueIng(recipes);

function findUniqueIng(recipes) {
  let uniqueIngredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!uniqueIngredients.includes(ingredient.ingredient))
        uniqueIngredients.push(ingredient.ingredient);
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

      const quantityHtml = recipe.ingredients
        .map((ingredient) => {
          return `<li id="recepiesIngredient__list" class="recepiesIngredient__list">${
            ingredient.quantity ? ingredient.quantity : ""
          } 
            ${ingredient.unit ? ingredient.unit : ""}</li>`;
        })
        .join("");

      return `
              <div class="recepies__card">
                    <div class="recepies__img"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
                    <div class="recepies__info">
    
                      <div class="recepies__name-time">
                          <h3 class="recepies__name">${recipe.name}</h3>
                          <p class="recepies__time"><i class="far fa-clock"></i> ${recipe.time}</p>
                      </div>
    
                      <div class="recepies__ingredients-description"> 
                         <div class="recepies__ingredients">${ingredientHtml}</div>
                         <div class="recepies__quantity">${quantityHtml}</div>
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

function mainSearch() {
  const search = searchBar.value.toLowerCase();

  let notFound = document.getElementById("not-found");
  let searchError = document.getElementById("search__error");

  filteredRecipes = recipes;
  if (search.length < 3) {
    searchError.style.display = "inline-block";
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
  } else if (search.length > 2) {
    searchError.style.display = "none";
    // filter list Recipes
    let resultat = [];
    for (let i = 0; i < filteredRecipes.length; i++) {
      // const element = filteredRecipes[index];
      let recipe = filteredRecipes[i];
      console.log(recipe);
      let found =
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
          .includes(search);
      console.log(found);

      if (found) {
        resultat.push(recipe);
      }
    }
    // console.log(filteredRecipes);
    filteredRecipes = resultat;
  }

  if (filteredRecipes.length == 0) {
    notFound.style.display = "flex";
  } else {
    notFound.style.display = "none";
  }

  if (search.length == 0) {
    searchError.style.display = "none";
  }

  //   search by tags
  selectedIngredients.forEach((element) => {
    console.log(element);
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return recipe.ingredients
        .map((ingredient) => {
          return ingredient.ingredient;
        })
        .includes(element);
    });
  });

  selectedAppareil.forEach((element) => {
    console.log(element);
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return recipe.appliance.includes(element);
    });
  });

  selectedUstensiles.forEach((element) => {
    console.log(element);
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return recipe.ustensils
        .map((ustensil) => {
          return ustensil;
        })
        .includes(element);
    });
  });

  filteredUniqueIngredients = findUniqueIng(filteredRecipes);
  filteredUniqueAppliances = findUniqueApp(filteredRecipes);
  filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

  displayRecipes(filteredRecipes);
  displayIngredients(filteredUniqueIngredients);
  displayAppareil(filteredUniqueAppliances);
  displayUstensiles(filteredUniqueUstensiles);
}

// MAIN SEARCH
searchBar.addEventListener("keyup", mainSearch);

// // INGREDIENTS search bar input

searchIngredients.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  let ingredientString = [];
  let recepiesNameString = [];

  if (filteredUniqueIngredients.length > 0) {
    ingredientString = filteredUniqueIngredients;
    recepiesNameString = filteredRecipes;
  } else {
    ingredientString = uniqueIngredients;
    recepiesNameString = recipes;
  }

  let ingredientString2 = ingredientString.filter((ingredient) => {
    return ingredient.toLowerCase().includes(search);
  });

  displayIngredients(ingredientString2);

  let recepiesNameString2 = recepiesNameString.filter((recipe) => {
    return recipe.ingredients
      .map((ingredient) => {
        return ingredient.ingredient.toLowerCase();
      })
      .includes(search);
  });

  const filteredUniqueAppliancesByIng = findUniqueApp(recepiesNameString2);
  const filteredUniqueUstensilesByIng = findUniqueUst(recepiesNameString2);

  displayRecipes(recepiesNameString2);
  displayAppareil(filteredUniqueAppliancesByIng);
  displayUstensiles(filteredUniqueUstensilesByIng);
});

// // Appareil search bar input
searchAppareil.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  let appliancesString = [];
  let recepiesNameString = [];

  if (filteredUniqueAppliances.length > 0) {
    appliancesString = filteredUniqueAppliances;
    recepiesNameString = filteredRecipes;
  } else {
    appliancesString = uniqueAppliances;
    recepiesNameString = recipes;
  }

  let appliancesString2 = appliancesString.filter((appliances) => {
    return appliances.toLowerCase().includes(search);
  });

  displayAppareil(appliancesString2);

  let recepiesNameString2 = recepiesNameString.filter((recipe) => {
    return recipe.appliance.toLowerCase().includes(search);
  });

  const filteredUniqueIngredientsByApp = findUniqueIng(recepiesNameString2);
  const filteredUniqueUstensilesByApp = findUniqueUst(recepiesNameString2);

  console.log(recepiesNameString2);
  displayRecipes(recepiesNameString2);
  displayIngredients(filteredUniqueIngredientsByApp);
  displayUstensiles(filteredUniqueUstensilesByApp);
});

// // Ustensiles search bar input
searchUstensiles.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  let UstensilesString = [];
  let recepiesNameString = [];

  if (filteredUniqueUstensiles.length > 0) {
    UstensilesString = filteredUniqueUstensiles;
    recepiesNameString = filteredRecipes;
  } else {
    UstensilesString = uniqueUstensils;
    recepiesNameString = recipes;
  }

  let UstensilesString2 = UstensilesString.filter((ustensiles) => {
    return ustensiles.toLowerCase().includes(search);
  });

  displayUstensiles(UstensilesString2);

  let recepiesNameString2 = recepiesNameString.filter((recipe) => {
    return recipe.ustensils
      .map((ustensil) => {
        return ustensil.toLowerCase();
      })
      .includes(search);
  });

  const filteredUniqueIngredientsByUst = findUniqueIng(recepiesNameString2);
  const filteredUniqueAppliancesByUst = findUniqueApp(recepiesNameString2);

  console.log(recepiesNameString2);
  displayRecipes(recepiesNameString2);
  displayIngredients(filteredUniqueIngredientsByUst);
  displayAppareil(filteredUniqueAppliancesByUst);
});

// // ingredients search CLICK TAG
ingredientsList.addEventListener("click", (e) => {
  const search = e.target.textContent;
  selectedIngredients.push(search);
  console.log(selectedIngredients);
  mainSearch();

  if (e.target && e.target.nodeName == "LI") {
    let tagsIng = document.createElement("div");
    tagsIng.setAttribute("class", "tagsIngNew");
    tagsIng.setAttribute("id", "tagsIngNew");
    let newTag = document.getElementById("ingTags");
    newTag.appendChild(tagsIng);
    tagsIng.textContent = e.target.textContent;

    // add fontawesome Icon
    let tagsicon = document.createElement("div");
    tagsicon.setAttribute("class", "tagsIcon");
    tagsicon.setAttribute("id", "tagsIcon");
    tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
    tagsIng.appendChild(tagsicon);

    tagsicon.addEventListener("click", () => {
      if (tagsIng.style.display === "none") {
        tagsIng.style.display = "flex";
      } else {
        tagsIng.style.display = "none";
        console.log("previus search");
        const index = selectedIngredients.indexOf(search);
        if (index > -1) {
          selectedIngredients.splice(index, 1);
        }
        console.log(selectedIngredients);
        mainSearch();
      }
    });
  }
});

// // Appareil search CLICK TAG
appareilList.addEventListener("click", (e) => {
  const search = e.target.textContent;
  selectedAppareil.push(search);
  console.log(selectedAppareil);
  mainSearch();

  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
    let tagsApp = document.createElement("div");
    tagsApp.setAttribute("class", "tagsAppNew");
    tagsApp.setAttribute("id", "tagsAppNew");
    // console.log(tagsApp);
    let newTag = document.getElementById("appTags");
    // console.log(newTag);
    newTag.appendChild(tagsApp);
    tagsApp.textContent = e.target.textContent;

    // add fontawesome Icon
    let tagsicon = document.createElement("div");
    tagsicon.setAttribute("class", "tagsIcon");
    tagsicon.setAttribute("id", "tagsIcon");

    tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
    tagsApp.appendChild(tagsicon);

    tagsicon.addEventListener("click", () => {
      if (tagsApp.style.display === "none") {
        tagsApp.style.display = "flex";
      } else {
        tagsApp.style.display = "none";

        const index = selectedAppareil.indexOf(search);
        if (index > -1) {
          selectedAppareil.splice(index, 1);
        }
        console.log(selectedAppareil);
        mainSearch();
      }
    });
  }
});

// // Ustensiles search CLICK TAG
ustensilesList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  selectedUstensiles.push(search);
  console.log(selectedUstensiles);
  mainSearch();

  if (e.target && e.target.nodeName == "LI") {
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
    tagsUst.appendChild(tagsicon);

    tagsicon.addEventListener("click", () => {
      if (tagsUst.style.display === "none") {
        tagsUst.style.display = "flex";
      } else {
        tagsUst.style.display = "none";

        const index = selectedUstensiles.indexOf(search);
        if (index > -1) {
          selectedUstensiles.splice(index, 1);
        }
        console.log(selectedUstensiles);
        mainSearch();
      }
    });
  }
});

displayRecipes(recipes);
displayIngredients(uniqueIngredients);
displayUstensiles(uniqueUstensils);
displayAppareil(uniqueAppliances);
