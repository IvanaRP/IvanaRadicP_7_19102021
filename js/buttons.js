// buttons lists
//BUTTONS
// function buttonsSelect() {
//   return `
//          <div class="ingrBTN">
//             <div class="ingredientClosedDiv" id="ingredientClosedDiv">
//             <button class="ingredientClosed" id="ingredientbtnClosed"><p>Ingredient <i class="fas fa-angle-down"></i></p></button>
//             </div>
//             <div class="ingredientOpenListDiv" id="ingredientOpenListDiv">
//               <input class="ingredientOpenList" id="ingredientbtn" type="text" placeholder="Rechercher un ingrédient..."/>
//               <div class="ingredient-hideDRUGI" id="ingredient-hideDRUGI">   <ul class="ingredients-list" id="ingredients-list"></ul>
//             </div>
//         </div>
//         <div class="appBTN">
//             <div class="appareilClosedDiv" id="appareilClosedDiv">
//             <button class="appareilClosed" id="appareilbtnClosed"> <p>Appareil <i class="fas fa-angle-down"></i></p></button>
//             </div>
//             <div class="appareilOpenListDiv" id="appareilOpenListDiv">
//             <input class="appareilOpenList" id="appareilbtn" type="text" placeholder="Rechercher un appareil..."/>
//             <div class="appareil-hideDRUGI" id="appareil-hideDRUGI"> <ul class="appareil-list" id="appareil-list"></ul>
//             </div>
//         </div>
//         <div class="ustBTN">
//             <div class="ustensilesClosedDiv" id="ustensilesClosedDiv">
//             <button  class="ustensilesClosed" id="ustensilesbtnClosed"><p>Ustensiles <i class="fas fa-angle-down"></i></p></button>
//             </div>
//             <div class="ustensilesOpenListDiv" id="ustensilesOpenListDiv">
//             <input class="ustensilesOpenList" id="ustensilesbtn" type="text" placeholder="Rechercher un ustensiles..."/>
//             <div class="ustensiles-hideDRUGI" id="ustensiles-hideDRUGI"> <ul class="ustensiles-list" id="ustensiles-list"></ul>
//          </div>
//       `;
// }
// document.getElementById("buttons-select").innerHTML = buttonsSelect();

// open list ingrredient
// dropdownBTN show div with list
// btn Ingredients
let btnIng = document.getElementById("ingredientClosedDiv");
console.log(btnIng);
let btnIngList = document.getElementById("ingredientOpenListDiv");
console.log(btnIngList);

btnIng.addEventListener("click", () => {
  console.log(btnIng);
  if (btnIngList.style.display === "none") {
    btnIngList.style.display = "flex";

    console.log(btnIngList);
  } else {
    btnIngList.style.display = "none";
  }
});

// click outside hide dropdown Ingredient
window.addEventListener("mouseup", function (event) {
  let ingredientMenu = document.getElementById("ingredientOpenListDiv");
  if (
    event.target != ingredientMenu &&
    event.target.parentNode != ingredientMenu
  ) {
    ingredientMenu.style.display = "none";
  }
});

// btn Appliance
let btnApp = document.getElementById("appareilClosedDiv");
console.log(btnApp);
let btnAppList = document.getElementById("appareilOpenListDiv");
console.log(btnAppList);

btnApp.addEventListener("click", () => {
  if (btnAppList.style.display === "none") {
    btnAppList.style.display = "flex";
  } else {
    btnAppList.style.display = "none";
  }
});

// click outside hide dropdown Appareil
window.addEventListener("mouseup", function (event) {
  let appareilMenu = document.getElementById("appareilOpenListDiv");
  if (event.target != appareilMenu && event.target.parentNode != appareilMenu) {
    appareilMenu.style.display = "none";
  }
});

// btn Ustensiles
let btnUst = document.getElementById("ustensilesClosedDiv");
console.log(btnApp);
let btnUstList = document.getElementById("ustensilesOpenListDiv");
console.log(btnUstList);

btnUst.addEventListener("click", () => {
  if (btnUstList.style.display === "none") {
    btnUstList.style.display = "flex";
  } else {
    btnUstList.style.display = "none";
  }
});

// click outside hide dropdown Ustensiles
window.addEventListener("mouseup", function (event) {
  let ustensilesMenu = document.getElementById("ustensilesOpenListDiv");
  if (
    event.target != ustensilesMenu &&
    event.target.parentNode != ustensilesMenu
  ) {
    ustensilesMenu.style.display = "none";
  }
});


