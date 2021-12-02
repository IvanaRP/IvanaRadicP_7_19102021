import { recipes } from "../js/recipes.js";

const recipesList = document.getElementById("recepies-cards");
const searchBar = document.getElementById("search__bar");
const ingredientsList = document.getElementById("ingredients-list");
const appareilList = document.getElementById("appareil-list");
const ustensilesList = document.getElementById("ustensiles-list");
const searchIngredients = document.getElementById("search__ingredient");
const searchAppareil = document.getElementById("search__appareil");
const searchUstensiles = document.getElementById("search__ustensiles");

let filteredIngList = [];
let filteredAppList = [];
let filteredUstList = [];

let filteredRecipes = [];
let filterIngredient = [];
let filterAppliance = [];
let filterUstensils = [];

let searchInputResult = [];

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
    .map((uniqueIngredient) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${uniqueIngredient}</li>`;
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
    .map((uniqueAppliance) => {
      return `<li class="recepiesList__appliance" id="recepiesList__appliance">${uniqueAppliance}</li>`;
    })
    .join("");

  appareilList.innerHTML = htmlString;
};

const displayUstensiles = (uniqueUstensils) => {
  const htmlString = uniqueUstensils
    .map((uniqueUstensil) => {
      return `<li class="recepiesList__ustensil" id="recepiesList__ustensil">${uniqueUstensil}</li>`;
    })
    .join("");
  ustensilesList.innerHTML = htmlString;
};

searchBar.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();

  searchInputResult = filteredRecipes;
  console.log(searchInputResult);


  let notFound = document.getElementById("not-found");
  let searchError = document.getElementById("search__error");

  if (search.length < 3) {
    searchError.style.display = "inline-block";
    displayRecipes(recipes);
    displayIngredients(uniqueIngredients);
    displayUstensiles(uniqueUstensils);
    displayAppareil(uniqueAppliances);
    



  } else if (search.length > 2) {
    searchError.style.display = "none";
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
          .map((ustnesile) => {
            return ustnesile.toLowerCase();
          })
          .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
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

searchIngredients.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);

  if (searchInputResult.length > 0) {
    console.log("filtriraj isfiltriranu listu po main searchu");
    console.log(searchInputResult);
  const  filteredIngredientList = filteredRecipes.filter((recipe) => {
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
          .map((ustnesile) => {
            return ustnesile.toLowerCase();
          })
          .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(filteredIngredientList);
    displayIngredients(filteredUniqueIngredients);

    console.log(filteredIngredientList);

  } else {
    filteredRecipes = recipes.filter((recipe) => {
      console.log("filtriraj celu listu");
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
          .map((ustnesile) => {
            return ustnesile.toLowerCase();
          })
          .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
    const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
    const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

    displayRecipes(filteredRecipes);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  }

});

searchAppareil.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);


  if (searchInputResult.length > 0) {
    console.log("filtriraj isfiltriranu listu po main searchu");
    console.log(searchInputResult);
  const  filteredAppliancesList = filteredRecipes.filter((recipe) => {
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
          .map((ustnesile) => {
            return ustnesile.toLowerCase();
          })
          .includes(search)
      );
    });

    const filteredUniqueAppliances = findUniqueApp(filteredAppliancesList);
    displayAppareil(filteredUniqueAppliances);

  } else {
    filteredRecipes = recipes.filter((recipe) => {
      console.log("filtriraj celu listu");
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
          .map((ustnesile) => {
            return ustnesile.toLowerCase();
          })
          .includes(search)
      );
    });

    const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
    const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
    const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

    displayRecipes(filteredRecipes);
    displayIngredients(filteredUniqueIngredients);
    displayAppareil(filteredUniqueAppliances);
    displayUstensiles(filteredUniqueUstensiles);
  }

});

searchUstensiles.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);

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
        .map((ustnesile) => {
          return ustnesile.toLowerCase();
        })
        .includes(search)
    );
  });

  const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
  const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
  const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

  displayRecipes(filteredRecipes);
  displayIngredients(filteredUniqueIngredients);
  displayAppareil(filteredUniqueAppliances);
  displayUstensiles(filteredUniqueUstensiles);
});

// selected tag
ingredientsList.addEventListener("click", function (e) {
  console.log(e.target.nodeName);

  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
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
    console.log(tagsicon);

    tagsIng.appendChild(tagsicon);
    console.log(tagsicon);

    // close TAG on X
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



// filter by tag
ingredientsList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

if (recipes.length > 0) {
  // selectuj tag iz cele liste 
  console.log("filtriraj celu listu");
  const filteredIngredientTag = recipes.filter((recipe) => {
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
        .map((ustnesile) => {
          return ustnesile.toLowerCase();
        })
        .includes(search)
    );
  });

  const filteredUniqueIngredients = findUniqueIng(filteredIngredientTag);
  const filteredUniqueAppliances = findUniqueApp(filteredIngredientTag);
  const filteredUniqueUstensiles = findUniqueUst(filteredIngredientTag);

  displayRecipes(filteredIngredientTag);
  displayIngredients(filteredUniqueIngredients);
  displayAppareil(filteredUniqueAppliances);
  displayUstensiles(filteredUniqueUstensiles);
} else if (searchInputResult.length > 0) {
   //tag selectovan pokazi samo ostatak liste - blokiraj search
   console.log("filtriraj isfiltriranu listu po main searchu");
   console.log(searchInputResult);
 const  filteredIngredientList = filteredRecipes.filter((recipe) => {
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
         .map((ustnesile) => {
           return ustnesile.toLowerCase();
         })
         .includes(search)
     );
   });
 
   const filteredUniqueIngredients = findUniqueIng(filteredIngredientList);
   displayIngredients(filteredUniqueIngredients);


} else {
  //tag selectovan po kliku na TAG pokazi samo ostatak liste - blokiraj search
  console.log("lista tagova koja je ostala posle selecktovanog taga");
 const  filteredIngredientTagList = filteredIngredientTag.filter((recipe) => {
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
         .map((ustnesile) => {
           return ustnesile.toLowerCase();
         })
         .includes(search)
     );
   });
 
   const filteredUniqueIngredients = findUniqueIng(filteredIngredientTagList);
   displayIngredients(filteredUniqueIngredients);

} 

});

appareilList.addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);

  //   const searchString = e.target.textContent;
  //   console.log(searchString);

  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
    let tagsApp = document.createElement("div");
    tagsApp.setAttribute("class", "tagsAppNew");
    tagsApp.setAttribute("id", "tagsAppNew");
    console.log(tagsApp);
    let newTag = document.getElementById("appTags");
    console.log(newTag);
    newTag.appendChild(tagsApp);
    tagsApp.textContent = e.target.textContent;

    // add fontawesome Icon
    let tagsicon = document.createElement("div");
    tagsicon.setAttribute("class", "tagsIcon");
    tagsicon.setAttribute("id", "tagsIcon");

    tagsicon.innerHTML = '<i class="far fa-times-circle"></i>';
    console.log(tagsicon);

    tagsApp.appendChild(tagsicon);
    console.log(tagsicon);

    // close TAG on X
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

appareilList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);



if (recipes.length > 0) {
  // selectuj tag iz cele liste 
  console.log("filtriraj celu listu");
  const filteredAppliancesTag = recipes.filter((recipe) => {
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
        .map((ustnesile) => {
          return ustnesile.toLowerCase();
        })
        .includes(search)
    );
  });

  const filteredUniqueIngredients = findUniqueIng(filteredAppliancesTag);
  const filteredUniqueAppliances = findUniqueApp(filteredAppliancesTag);
  const filteredUniqueUstensiles = findUniqueUst(filteredAppliancesTag);

  displayRecipes(filteredAppliancesTag);
  displayIngredients(filteredUniqueIngredients);
  displayAppareil(filteredUniqueAppliances);
  displayUstensiles(filteredUniqueUstensiles);
} else if (searchInputResult.length > 0) {
   //tag selectovan pokazi samo ostatak liste - blokiraj search
   console.log("filtriraj isfiltriranu listu po main searchu");
   console.log(searchInputResult);
 const  filteredAppliancesList = filteredRecipes.filter((recipe) => {
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
         .map((ustnesile) => {
           return ustnesile.toLowerCase();
         })
         .includes(search)
     );
   });
 
   const filteredUniqueAppliances = findUniqueApp(filteredAppliancesList);
   displayAppareil(filteredUniqueAppliances);


} else {
  //tag selectovan po kliku na TAG pokazi samo ostatak liste - blokiraj search
  console.log("lista tagova koja je ostala posle selecktovanog taga");
 const  filteredAppliancesTagList = filteredAppliancesTag.filter((recipe) => {
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
         .map((ustnesile) => {
           return ustnesile.toLowerCase();
         })
         .includes(search)
     );
   });
 
   const filteredUniqueAppliances = findUniqueApp(filteredAppliancesTagList);
   displayAppareil(filteredUniqueAppliances);
  } 
  // filteredRecipes = recipes.filter((recipe) => {
  //   return (
  //     recipe.name.toLowerCase().includes(search) ||
  //     recipe.appliance.toLowerCase().includes(search) ||
  //     recipe.description.toLowerCase().includes(search) ||
  //     recipe.ingredients
  //       .map((ingredient) => {
  //         return ingredient.ingredient.toLowerCase();
  //       })
  //       .includes(search) ||
  //     recipe.ustensils
  //       .map((ustnesile) => {
  //         return ustnesile.toLowerCase();
  //       })
  //       .includes(search)
  //   );
  // });

  // const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
  // const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
  // const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

  // displayRecipes(filteredRecipes);
  // displayIngredients(filteredUniqueIngredients);
  // displayAppareil(filteredUniqueAppliances);
  // displayUstensiles(filteredUniqueUstensiles);
});

ustensilesList.addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);
  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
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
    console.log(tagsicon);

    tagsUst.appendChild(tagsicon);
    console.log(tagsicon);

    // close TAG on X
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

ustensilesList.addEventListener("click", (e) => {
  const search = e.target.textContent.toLowerCase();
  console.log(search);

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
        .map((ustnesile) => {
          return ustnesile.toLowerCase();
        })
        .includes(search)
    );
  });

  const filteredUniqueIngredients = findUniqueIng(filteredRecipes);
  const filteredUniqueAppliances = findUniqueApp(filteredRecipes);
  const filteredUniqueUstensiles = findUniqueUst(filteredRecipes);

  displayRecipes(filteredRecipes);
  displayIngredients(filteredUniqueIngredients);
  displayAppareil(filteredUniqueAppliances);
  displayUstensiles(filteredUniqueUstensiles);
});

displayRecipes(recipes);
displayIngredients(uniqueIngredients);
displayUstensiles(uniqueUstensils);
displayAppareil(uniqueAppliances);
