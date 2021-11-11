// import from other js
import { recipes } from "./recipes.js";
console.log(recipes);

// make variables

let ingredientsAll = [];
console.log(ingredientsAll);

let appliancesAll = [];
console.log(appliancesAll);

let ustensilsAll = [];
console.log(ustensilsAll);

let ingredientsUnit = [];
console.log(ingredientsUnit);

// loop forEach or Map

recipes.forEach((recipe) => {
  recipe.ingredients.forEach((ingredients) => {
    ingredientsAll.push(ingredients.ingredient ? ingredients.ingredient : "");
  });
});

recipes.map((recipe) => {
  recipe.ingredients.forEach((ingredients) => {
    ingredientsUnit.push(ingredients.unit ? ingredients.unit : "");
  });
});

recipes.map((recipe) => {
  appliancesAll.push(recipe.appliance);
});

recipes.forEach((recipe) => {
  recipe.ustensils.forEach((ustensils) => {
    ustensilsAll.push(ustensils);
  });
});

// remove duplicate tags

const uniqueIngredients = [...new Set(ingredientsAll)];
console.log(uniqueIngredients);

const uniqueAppliances = [...new Set(appliancesAll)];
console.log(uniqueAppliances);

const uniqueUstensils = [...new Set(ustensilsAll)];
console.log(uniqueUstensils);

// make div not found result
const notFound = document.createElement("div");
notFound.setAttribute("class", "notFound");
notFound.innerHTML = ` <div class="notFoundBox">
                                   <a href="index.html"><img class="header__logo" src="./img/Logo.svg" alt="Les Petits Plats"/></a>
                                   <h2>"Aucune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes", "poisson", etc."</h2>
                                   </div>`;

document.getElementById("not-found").appendChild(notFound);

// click outside hide Not Found div
window.addEventListener("mouseup", function (event) {
  let notfoundbox = document.getElementById("not-found");
  // let allRecipesBox = document.getElementById("recepies-card");
  // console.log(allRecipesBox);
  if (event.target != notfoundbox && event.target.parentNode != notfoundbox) {
    notfoundbox.style.display = "none";
    //   allRecipesBox.style.display = "flex";
  }
});

//display all Ingredents
function ingredientsFun(ingredients) {
  return `<ul class="ingredients-list"> ${ingredients
    .map((ingredient) => {
      return `
        <div class="ingredientAll">
               <li class="ingredientName">${
                 ingredient.ingredient ? ingredient.ingredient : ""
               }</li>
               <li class="ingredientQuantity">
               ${ingredient.quantity ? ingredient.quantity : ""} ${
        ingredient.unit ? ingredient.unit : ""
      }</li>
       </div>
               `;
    })
    .join("")}
              </ul>
        `;
}

// display recipes cards

let recepiesCard = document.getElementById("recepies-card");
console.log(recepiesCard);

// draw recepiesCard
function recipiesBox(recipe) {
  return `
              <div class="recepiesBox" id="recipeinput">
                <div class="recepiesimg"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
                    <div class="recepiesinfo">
                       <div class="nameTime">
                        <h3 class="name" id="name">${recipe.name}</h3>
                        <h3 class="time"><i class="far fa-clock"></i>${
                          recipe.time
                        } min</h3>
                       </div>
                        <div class="ingDes">
                        <p >${ingredientsFun(recipe.ingredients)}</p>
                            <p class="description">${recipe.description}</p>
                            <p class="ustensils">${recipe.ustensils}</p>
                            <p class="appliances">${recipe.appliance}</p>
                          
                            
                        </div>
                    </div>
                </div>
    `;
}
recepiesCard.innerHTML = `${recipes.map(recipiesBox).join("")}`;

//Search Input and remove other div
let inputSearch = document.getElementById("searchBar");
console.log(inputSearch);

// document.getElementById("searchBar").addEventListener ("submit" , function (e) {
// /*conditin IF ELSE for FIRST name input*/
// 	// Input should not be EMPTY , LESS THEN 2 CHARACTERS or an SPACE character
// 	let inputSearch = document.getElementById("searchBar");
// console.log(inputSearch);

// 	if (inputSearch.value == "" || inputSearch.value.length < 7) {
// 		e.preventDefault();//stop form from submitting

// 		return false;

// 	} else  if (/\s/.test(inputSearch.value)){ //stop form from submitting if there is space
// 		e.preventDefault();//stop form from submitting

// 		return false;
// 	}
// 	else {
//     searchInput();
// 	}
// });

function searchInput() {
  // Search Input  by input
  inputSearch.addEventListener("keydown", function (e) {
    // console.log(e.target.value);
    let searchItem = e.target.value.toLowerCase();
    let items = document.querySelectorAll(".recepiesBox");
    let noResult = document.getElementById("not-found");
    console.log(noResult);
    console.log(items);
    // select whole div

    // let recepiescar = document.getElementById("recepiesBox");;
    // console.log(recepiescar);
    // && item.textContent.length > 3
    // if (inputSearch.length > 5){

    // }

    items.forEach(function (item) {
      console.log(item.textContent);
      if (item.textContent.toLowerCase().indexOf(searchItem) != -1) {
        item.closest("div").style.display = "block";
        console.log(item.closest("div"));
    
      } else if (inputSearch.value == "" || inputSearch.value.length < 3) {
        console.log("morethen3");
      } else if (/\s/.test(inputSearch.value)) {
        //stop form from submitting if there is space
        console.log("nospace");
      } else {
        item.closest("div").style.display = "none";
        noResult.style.display = "flex";
      }
    });

    console.log(searchItem);
  });
}

// keyevents
// inputSearch.addEventListener("keypress", function (event) {
//   // console.log("toto");
//   if (event.key === "Enter"){
//     // event.target.click()
//     //  alert("ENTER SEARCH");
//      searchInput();
//      console.log("ENTER SEARCH");
//   }

// });
// console.log(searchInput);
searchInput();

// 3 BUTTONS Search

function buttonsSelect() {
  return `
    <div class=ingredient-dropBtn">
            <div class="ingredient-btn" id="ingredient-btn">
            <button class="ingredient-BtnArrow" id="ingredient-BtnArrow"><p>Ingredient <i class="fas fa-angle-down"></i></p></button>
            </div>
    
            <div class="ingredient-btn_closed" id="ingredient-btn_closed">
            <input class="ingredient-btn_closedSearch" id="ingredient-btn_closedSearch" type="text" placeholder="Rechercher un ingrédient..."/>
            <div class="ingredient-btn_closedList" id="ingredient-btn_closedList"></div>
            </div>
    </div>

    <div class=appliances-dropBtn">
            <div class="appliances-btn" id="appliances-btn">
            <button class="appliances-BtnArrow" id="appliances-BtnArrow"><p>Appareil <i class="fas fa-angle-down"></i></p></button>
            </div>

            <div class="appliances-btn_closed" id="appliances-btn_closed">
            <input class="appliances-btn_closedSearch" id="appliances-btn_closedSearch" type="text" placeholder="Rechercher un appareil..."/>
            <div class="appliances-btn_closedList" id="appliances-btn_closedList"></div>
            </div>
    </div>

    <div class=ustensils-dropBtn">
            <div class="ustensils-btn" id="ustensils-btn">
            <button class="ustensils-BtnArrow" id="ustensils-BtnArrow"><p>Ustensils <i class="fas fa-angle-down"></i></p></button>
            </div>

            <div class="ustensils-btn_closed" id="ustensils-btn_closed">
            <input class="ustensils-btn_closedSearch" id="ustensils-btn_closedSearch" type="text" placeholder="Rechercher un ustensils..."/>
            <div class="ustensils-btn_closedList" id="ustensils-btn_closedList"></div>
            </div>
    </div>
        `;
}
document.getElementById("buttons-select").innerHTML = buttonsSelect();

// search by Ingredients

// // Ingredient button list
let ingredientlist = document.getElementById("ingredient-btn_closedList");
console.log(ingredientlist);

ingredientlist.innerHTML = `
        <ul class="ingListAll" id="ingListAll">${uniqueIngredients
          .map(
            (ingredient) => `
            <li class="ingList" id="ingList">${ingredient}</li>
            `
          )
          .join("")}
        </ul>
`;

console.log(ingredientlist);

// Appareil button list
let appliancelist = document.getElementById("appliances-btn_closedList");
console.log(appliancelist);

appliancelist.innerHTML = `
        <ul class="appListAll" id="appListAll">${uniqueAppliances
          .map(
            (appliance) => `
            <li class="appList" id="appList">${appliance}</li>
            `
          )
          .join("")}
        </ul>
`;

console.log(appliancelist);

// Ustensils button list
let ustensilsList = document.getElementById("ustensils-btn_closedList");
console.log(ustensilsList);

ustensilsList.innerHTML = `
        <ul class="ustListAll" id="ustListAll">${uniqueUstensils
          .map(
            (ustensils) => `
            <li class="ustList" id="ustList">${ustensils}</li>
            `
          )
          .join("")}
        </ul>
`;

console.log(ustensilsList);

// dropdownBTN show div with list
// btn Ingredients
let btnIng = document.getElementById("ingredient-btn");
console.log(btnIng);
let btnIngList = document.getElementById("ingredient-btn_closed");
console.log(btnIngList);

btnIng.addEventListener("click", () => {
  if (btnIngList.style.display === "none") {
    btnIngList.style.display = "flex";
  } else {
    btnIngList.style.display = "none";
  }
});

// click outside hide dropdown Ingredient
window.addEventListener("mouseup", function (event) {
  let ingredientMenu = document.getElementById("ingredient-btn_closed");
  if (
    event.target != ingredientMenu &&
    event.target.parentNode != ingredientMenu
  ) {
    ingredientMenu.style.display = "none";
  }
});

// // Search Igredient BUTTON
let inputSearchIng = document.getElementById("ingredient-btn_closed");
console.log(inputSearchIng);

// Search Igredient  by input
inputSearchIng.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  let searchItemI = e.target.value.toLowerCase();
  console.log(searchItemI);

  let items = document.querySelectorAll(".ingredientAll");
  console.log(items);
  let noResult = document.getElementById("not-found");
  console.log(noResult);

  let ingItems = document.querySelectorAll(".ingredientName");
  console.log(ingItems);

  ingItems.forEach(function (ingItem) {
    let appListRemove = document.querySelectorAll(".appList");
    console.log(appListRemove);

    let pp = [];
    console.log(pp);
    appListRemove.forEach((p) => pp.push(p.textContent));

    console.log(pp);
    console.log(ingItem.textContent);

    if (ingItem.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      ingItem.closest(".recepiesBox").style.display = "block";
      // ingItem.closest("appList").style.display = "block";
      //  ingItem.closest(".appListAll").style.display = "block";
      console.log(ingItem.closest("div"));
      console.log(ingItem.closest(".recepiesBox"));
      console.log(ingItem.closest(".appListAll"));

      console.log(appListRemove);
      console.log(pp);
      // console.log(ingItem.closest(".recepiesBox"));
      // console.log(ingItem.closest(".appList"));
    } else {
      ingItem.closest(".recepiesBox").style.display = "none";
    }
  });

  // items.forEach(function (item) {
  //   console.log(item.textContent);

  //  if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
  //     // item.closest("div").style.display = "block";
  //     item.closest(".recepiesBox").style.display = "block";
  //     console.log(item.closest(".recepiesBox"));
  //   } else {
  //     // item.closest("div").style.display = "none";
  //     item.closest(".recepiesBox").style.display = "block";
  //     noResult.style.display = "flex";
  //   }
  // });

  let ingLists = document.querySelectorAll(".ingList");
  console.log(ingLists);

  // let appListAlls = document.querySelectorAll(".appList");
  // console.log(appListAlls);

  ingLists.forEach(function (ingList) {
    console.log(ingList.textContent);
    if (ingList.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      ingList.closest("li").style.display = "block";
      console.log(ingList.closest("li"));

      // console.log((appListAlls.style.display = "block"));
      // console.log(appListAlls);
    } else {
      ingList.closest("li").style.display = "none";
      noResult.style.display = "flex";
    }
  });

  console.log(searchItemI);
});

// dropdownBTN show div with list
// btn Appliances
let btnApp = document.getElementById("appliances-btn");
console.log(btnApp);
let btnAppList = document.getElementById("appliances-btn_closed");
console.log(btnAppList);

btnApp.addEventListener("click", () => {
  if (btnAppList.style.display === "none") {
    btnAppList.style.display = "flex";
  } else {
    btnAppList.style.display = "none";
  }
});

// // click outside hide dropdown Appliances
window.addEventListener("mouseup", function (event) {
  let appliancesMenu = document.getElementById("appliances-btn_closed");
  if (
    event.target != appliancesMenu &&
    event.target.parentNode != appliancesMenu
  ) {
    appliancesMenu.style.display = "none";
  }
});

// // // Search Appliances BUTTON
let inputSearchApp = document.getElementById("appliances-btn_closed");
console.log(inputSearchApp);

// Search Appliances  by input
inputSearchApp.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  let searchItemI = e.target.value.toLowerCase();

  let items = document.querySelectorAll(".appliances");
  console.log(items);
  let noResult = document.getElementById("not-found");
  console.log(noResult);

  items.forEach(function (item) {
    console.log(item.textContent);
    if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      // item.closest("div").style.display = "block";
      item.closest(".recepiesBox").style.display = "block";
      // console.log(item.closest("div"));
    } else {
      item.closest(".recepiesBox").style.display = "none";
      noResult.style.display = "flex";
    }
  });

  let appLists = document.querySelectorAll(".appList");
  console.log(appLists);

  appLists.forEach(function (appList) {
    console.log(appList.textContent);
    if (appList.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      appList.closest("li").style.display = "block";
      console.log(appList.closest("li"));
    } else {
      appList.closest("li").style.display = "none";
      noResult.style.display = "flex";
    }
  });

  console.log(searchItemI);
});

// dropdownBTN show div with list
// btn Ustensils
let btnUst = document.getElementById("ustensils-btn");
console.log(btnUst);
let btnUstList = document.getElementById("ustensils-btn_closed");
console.log(btnUstList);

btnUst.addEventListener("click", () => {
  if (btnUstList.style.display === "none") {
    btnUstList.style.display = "flex";
  } else {
    btnUstList.style.display = "none";
  }
});

// // click outside hide dropdown Ustensils
window.addEventListener("mouseup", function (event) {
  let ustensilsMenu = document.getElementById("ustensils-btn_closed");
  if (
    event.target != ustensilsMenu &&
    event.target.parentNode != ustensilsMenu
  ) {
    ustensilsMenu.style.display = "none";
  }
});

// Search ustensilsMenu BUTTON
let inputSearchUst = document.getElementById("ustensils-btn_closed");
console.log(inputSearchUst);

// Search Ustensils  by input
inputSearchUst.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  let searchItemI = e.target.value.toLowerCase();

  let items = document.querySelectorAll(".ustensils");
  console.log(items);
  let noResult = document.getElementById("not-found");
  console.log(noResult);

  items.forEach(function (item) {
    console.log(item.textContent);
    if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      item.closest(".recepiesBox").style.display = "block";
      // console.log(item.closest("div"));
    } else {
      item.closest(".recepiesBox").style.display = "none";
      noResult.style.display = "flex";
    }
  });

  let ustLists = document.querySelectorAll(".ustList");
  console.log(ustLists);

  ustLists.forEach(function (ustList) {
    console.log(ustList.textContent);
    if (ustList.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      ustList.closest("li").style.display = "block";
      console.log(ustList.closest("li"));
    } else {
      ustList.closest("li").style.display = "none";
      noResult.style.display = "flex";
    }
  });

  console.log(searchItemI);
});

// GET LIST T MAKE NEW DIV TAG
// GET VALUE FROM DROPDOWN TO DIV

// // locate your element and add the Click Event Listener
// document.getElementById("ingListAll").addEventListener("click", function (e) {
//   // e.target is our targetted element.
//   console.log(e.target.nodeName);
//   if (e.target && e.target.nodeName == "LI") {
//     // alert(e.target.textContent);
//     let tagsIng = document.createElement("div");
//     tagsIng.setAttribute("class", "tagsIngNew");
//     console.log(tagsIng);

//     // let tagX = document.createElement("div");
//     // tagX.setAttribute("class", "tagX");

//     document.getElementById("tagsIng").appendChild(tagsIng);
//     //  document.getElementById("novakocka").appendChild(tagX);
//     tagsIng.innerHTML = e.target.textContent;
//   }
// });

// make TAG button from selected Appliane
// locate your element and add the Click Event Listener
document.getElementById("ingListAll").addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);
  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
    let tagsUst = document.createElement("div");
    tagsUst.setAttribute("class", "tagsIngNew");
    tagsUst.setAttribute("id", "tagsIngNew");
    console.log(tagsUst);
    let newTag = document.getElementById("ingTags");
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
      } else  {
        tagsUst.style.display = "none";
  // show all 
  // document.querySelectorAll(".recepiesBox").style.display = "flex";
  // show all 

 

      }
    });
  }
});

// make TAG button from selected Appliane
// locate your element and add the Click Event Listener
document.getElementById("appListAll").addEventListener("click", function (e) {
  // e.target is our targetted element.
  console.log(e.target.nodeName);
  if (e.target && e.target.nodeName == "LI") {
    // alert(e.target.textContent);
    let tagsUst = document.createElement("div");
    tagsUst.setAttribute("class", "tagsAppNew");
    tagsUst.setAttribute("id", "tagsAppNew");
    console.log(tagsUst);
    let newTag = document.getElementById("appTags");
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

      }
    });
  }
});

// make TAG button from selected Ustensils
// locate your element and add the Click Event Listener
document.getElementById("ustListAll").addEventListener("click", function (e) {
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
      }
    });
  }
});

// // search by selected List INGREDIENT
// document.getElementById("ingListAll").addEventListener("click", function (e) {
//   console.log(e.target.textContent);
//   let searchItemI = e.target.textContent.toLowerCase();
//   console.log(searchItemI);
//   // let searchItemI = e.target.textContent;
//   let items = document.querySelectorAll(".ingredients");
//   console.log(items);

//   items.forEach(function (item) {
//     console.log(item.textContent);
//     if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
//       item.closest(".recepiesBox").style.display = "block";

//       console.log(item.closest(".recepiesBox"));
//     } else {
//       item.closest(".recepiesBox").style.display = "none";

//     }
//   });
// });

// // search by selected List appliances
document.getElementById("appListAll").addEventListener("click", function (e) {
  console.log(e.target.textContent);

  let searchItemI = e.target.textContent.toLowerCase();
  console.log(searchItemI);

  let items = document.querySelectorAll(".appliances");
  console.log(items);

  items.forEach(function (item) {
    console.log(item.textContent);
    if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      item.closest(".recepiesBox").style.display = "block";

      console.log(item.closest(".recepiesBox"));
    } else {
      item.closest(".recepiesBox").style.display = "none";
    }
  });
});

// search by selected List USTENSILS
document.getElementById("ustListAll").addEventListener("click", function (e) {
  // console.log(e.target.textContent);

  let searchItemI = e.target.textContent.toLowerCase();
  console.log(searchItemI);

  let items = document.querySelectorAll(".ustensils");
  console.log(items);

  items.forEach(function (item) {
    console.log(item.textContent);
    if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      item.closest(".recepiesBox").style.display = "block";

      console.log(item.closest(".recepiesBox"));
    } else {
      item.closest(".recepiesBox").style.display = "none";
    }
  });
});

// // search by selected List ingredients
document.getElementById("ingListAll").addEventListener("click", function (e) {
  console.log(e.target.textContent);

  let searchItemI = e.target.textContent.toLowerCase();
  console.log(searchItemI);

  let items = document.querySelectorAll(".ingredients-list");
  console.log(items);

  let itemsAppList = document.querySelectorAll(".appList");
  console.log(itemsAppList);

  items.forEach(function (item) {
    console.log(item.textContent);
    if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      item.closest(".recepiesBox").style.display = "block";

      console.log(item.closest(".recepiesBox"));
    } else {
      item.closest(".recepiesBox").style.display = "none";
    }
  });
});
