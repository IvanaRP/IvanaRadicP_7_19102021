// open list ingrredient
// dropdownBTN show div with list
// btn Ingredients
let btnIng = document.getElementById("ingredientClosedDiv");
// console.log(btnIng);
let btnIngList = document.getElementById("ingredientOpenListDiv");
// console.log(btnIngList);

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
// console.log(btnApp);
let btnAppList = document.getElementById("appareilOpenListDiv");
// console.log(btnAppList);

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
// console.log(btnApp);
let btnUstList = document.getElementById("ustensilesOpenListDiv");

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
