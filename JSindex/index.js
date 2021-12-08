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

let filteredUniqueIngredients = [];
let filteredUniqueAppliances = [];
let filteredUniqueUstensiles = [];

// appliance tag selected
let filteredUniqueIngredientsByAppTag = [];
let filteredUniqueUstensilesByAppTag = [];
let appliancesString2tag = [];
let recepiesNameString2Tag = [];

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
    filteredUniqueAppliances = findUniqueApp(filteredRecipes);
    filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

    displayRecipes(filteredRecipes);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  } else {
    notFound.style.display = "inline-block";
    console.log("not found");
  }

  console.log(recepiesNameString2Tag);
 
  // search kad je vec tag selektovan appliance
  let mainApplianceTagSelected = [];
  let mainingredientlist = [];
  let mainAppliancelist = [];
  let mainUstencilslist = [];

  if (appliancesString2tag.length > 0) {
    mainApplianceTagSelected = recepiesNameString2Tag;
    mainingredientlist = filteredUniqueIngredientsByAppTag;
    mainAppliancelist = appliancesString2tag;
    mainUstencilslist = filteredUniqueUstensilesByAppTag;

  } else {
    mainApplianceTagSelected = recipes;
    mainingredientlist = uniqueIngredients;
    mainAppliancelist = uniqueAppliances;
    mainUstencilslist = uniqueUstensils;
  }

  let mainApplianceTagSelected2 = mainApplianceTagSelected.filter((recipe) => {
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
  console.log(mainApplianceTagSelected2);
  displayRecipes(mainApplianceTagSelected2);

  let filteredUniqueIngredientsTag = findUniqueIng(mainApplianceTagSelected2);
  displayIngredients(filteredUniqueIngredientsTag);

  let filteredUniqueAppareilTag = findUniqueApp(mainApplianceTagSelected2);
  displayAppareil(filteredUniqueAppareilTag);

  let filteredUniqueUstensilesTag = findUniqueUst(mainApplianceTagSelected2);
  displayUstensiles(filteredUniqueUstensilesTag);

console.log(filteredUniqueUstensilesTag);

//   let mainingredientlist2 = mainingredientlist.filter((ingredient) => {
//     return ingredient.toLowerCase().includes(search);
//   });
//   displayIngredients(mainingredientlist2);
 
// console.log(mainingredientlist2);

  // let mainAppliancelist2 = mainAppliancelist.filter((appliance) => {
  //   return ( 
  //     // appliance.name.toLowerCase().includes(search)
  //     //  ||
  //     appliance.toLowerCase().includes(search)
  //   );
  // });
  // displayAppareil(mainAppliancelist2);
  
  // let mainUstencilslist2 = mainUstencilslist.filter((ustensils) => {
  //   return ustensils.toLowerCase().includes(search);
  // });
  // displayUstensiles(mainUstencilslist2);
});

// // INGREDIENTS search bar input

searchIngredients.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  // 1.search ingredient list
  // 2. search ingredient list that is already filtered by main search
  // 3. search by click on tag

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

  // search kad je vec tag selektovan appliance
  let ingredientTag = [];
  let recepiesTagIng = [];

  if (appliancesString2tag.length > 0) {
    ingredientTag = filteredUniqueIngredientsByAppTag;
    recepiesTagIng = recepiesNameString2Tag;
  } else {
    ingredientTag = uniqueIngredients;
    recepiesTagIng = recipes;
  }

  let ingredientTag2 = ingredientTag.filter((ingredient) => {
    return ingredient.toLowerCase().includes(search);
  });

  console.log(ingredientTag2);

  displayIngredients(ingredientTag2);

  let recepiesTagIng2 = recepiesTagIng.filter((recipe) => {
    return recipe.ingredients
      .map((ingredient) => {
        return ingredient.ingredient.toLowerCase();
      })
      .includes(search);
  });

  const filteredUniqueAppliancesByIngTag = findUniqueApp(recepiesTagIng2);
  const filteredUniqueUstensilesByIngTag = findUniqueUst(recepiesTagIng2);

  displayRecipes(recepiesTagIng2);
  displayAppareil(filteredUniqueAppliancesByIngTag);
  displayUstensiles(filteredUniqueUstensilesByIngTag);
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
  const search = e.target.textContent.toLowerCase();

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

  console.log(recepiesNameString2);
  displayRecipes(recepiesNameString2);
  displayAppareil(filteredUniqueAppliancesByIng);
  displayUstensiles(filteredUniqueUstensilesByIng);
});

// // ingredients search CLICK TAG
ingredientsList.addEventListener("click", function (e) {
  console.log(e.target.nodeName);
  if (e.target && e.target.nodeName == "LI") {
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
    // console.log(tagsicon);

    tagsIng.appendChild(tagsicon);

    tagsicon.addEventListener("click", () => {
      if (tagsIng.style.display === "none") {
        tagsIng.style.display = "flex";
      } else {
        tagsIng.style.display = "none";
        displayRecipes(recipes);
        displayIngredients(uniqueIngredients);
        displayUstensiles(uniqueUstensils);
        displayAppareil(uniqueAppliances);
      }
    });
  }
});


function selectApp() {


// // Appareil search CLICK TAG
appareilList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

  let appliancesString = [];
  let recepiesNameString = [];

  if (filteredUniqueAppliances.length > 0) {
    appliancesString = filteredUniqueAppliances;
    recepiesNameString = filteredRecipes;
  } else {
    appliancesString = uniqueAppliances;
    recepiesNameString = recipes;
  }

  appliancesString2tag = appliancesString.filter((appliances) => {
    return appliances.toLowerCase().includes(search);
  });

  displayAppareil(appliancesString2tag);

  recepiesNameString2Tag = recepiesNameString.filter((recipe) => {
    return (recipe.name.toLowerCase().includes(search) ||
    recipe.appliance.toLowerCase().includes(search)
    );
  });

  filteredUniqueIngredientsByAppTag = findUniqueIng(recepiesNameString2Tag);
  filteredUniqueUstensilesByAppTag = findUniqueUst(recepiesNameString2Tag);


  console.log(recepiesNameString2Tag);
  displayRecipes(recepiesNameString2Tag);
  displayIngredients(filteredUniqueIngredientsByAppTag);
  displayUstensiles(filteredUniqueUstensilesByAppTag);
});

}
// Appareil search CLICK TAG make tag button
appareilList.addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);

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
    // console.log(tagsicon);

    tagsApp.appendChild(tagsicon);
    // console.log(tagsicon);

    // close TAG on X
    // const closeTags = document.getElementById("tagsIcon");
    // console.log(closeTags);

    tagsicon.addEventListener("click", () => {
      if (tagsApp.style.display === "none") {
        tagsApp.style.display = "flex";
      } else {
        tagsApp.style.display = "none";
        displayRecipes(recipes);
        displayIngredients(uniqueIngredients);
        displayUstensiles(uniqueUstensils);
        displayAppareil(uniqueAppliances);
      }
    });
  }
});

// // Ustensiles search CLICK TAG
ustensilesList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

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

// // Ustensiles search CLICK TAG
ustensilesList.addEventListener("click", function (e) {
  console.log(e.target.nodeName);

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
    // console.log(tagsicon);

    tagsUst.appendChild(tagsicon);
    // console.log(tagsicon);

    // close TAG on X
    // const closeTags = document.getElementById("tagsIcon");
    // console.log(closeTags);

    tagsicon.addEventListener("click", () => {
      if (tagsUst.style.display === "none") {
        tagsUst.style.display = "flex";
      } else {
        tagsUst.style.display = "none";
        displayRecipes(recipes);
        displayIngredients(uniqueIngredients);
        displayUstensiles(uniqueUstensils);
        displayAppareil(uniqueAppliances);
      }
    });
  }
});

displayRecipes(recipes);
displayIngredients(uniqueIngredients);
displayUstensiles(uniqueUstensils);
displayAppareil(uniqueAppliances);

selectApp();

// domaci
//DONE// 0. uradi noiz za appliance i ustencil ko sto si uradila za ingredient
// 1.napravi funkciju od selektovanih tagova!!!
// 2. svaki tag selektovan ubaci u novi array= selectedTags//ingr//app//usten svi su prazni
// 3. u main searchu - dodati search po selectedTags
