// import other js
import { recipes } from "./recipes.js";
console.log(recipes);



// // Search Input
let inputSearch = document.getElementById("searchBar");
console.log(inputSearch);

// Search Input  by input
inputSearch.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  let searchItem = e.target.value.toLowerCase();
  let items = document.querySelectorAll(".recipeinput");
  console.log(items);
  // select whole div

  // let recepiescar = document.getElementById("recepiesBox");;
  // console.log(recepiescar);

  items.forEach(function (item) {
    console.log(item.textContent);
    if (item.textContent.toLowerCase().indexOf(searchItem) != -1) {
      item.closest("li").style.display = "block";
      console.log(item.closest("li"));
    } else {
      item.closest("li").style.display = "none";
    }
  });

  console.log(searchItem);
});

// recepiesCards
let recepiesCard = document.getElementById("recepies");
console.log(recepiesCard);

//display all Ustensiles
function ustensilesFun(ustensils) {
  return `<ul class="ustensils-list"> ${ustensils
    .map((ustensil) => {
      return `
               <li>${ustensil}</li>
               `;
    })
    .join("")}
              </ul>
        `;
}

//display all Ingredents
function ingredientsFun(ingredients) {
  return `<ul class="ingredients-list"> ${ingredients
    .map((ingredient) => {
      return `
             <li>${ingredient.ingredient ? ingredient.ingredient : ""}
             ${ingredient.quantity ? ingredient.quantity : ""}
             ${ingredient.unit ? ingredient.unit : ""}</li>
          
             `;
    })
    .join("")}
            </ul>
      `;
}

// draw recepiesCard
function recipiesBox(recipe) {
  return `<li class="recipeinput" id="recipeinput">
              <div class="recepiesBox" id="recipeinput">
                <div class="recepiesimg"> PHOTO</div>
                    <div class="recepiesinfo">
                      <div class="nameTime">
                        <h3 class="name" id="name">${recipe.name}</h3>
                        <h3 class="time"><i class="far fa-clock"></i>${recipe.time} min</h3>
                      </div>
                        <div class="ingDes">
                        ${ingredientsFun(recipe.ingredients)}  
                        <p class="description">${recipe.description}</p>
                        </div>
                    </div>
                </div>
         </li>
    `;
}
recepiesCard.innerHTML = `${recipes.map(recipiesBox).join("")}`;

// <div class="ingredient-hide" id="ingredient-hide"></div>
//<button class="ingredient" id="ingredientbtn"><p>Ingredient <i class="fas fa-angle-down"></i></p></button>


//BUTTONS
function buttonsSelect() {
  return `
 
 

<div class=ingrBTN">
      <div class="ingredientClosedDiv" id="ingredientClosedDiv">
      <input class="ingredientClosed" id="ingredientbtnClosed" type="text" placeholder="Ingredient"/>
      <i class="fas fa-chevron-down" id="ingredients-down"></i>
      </div>

      <div class="ingredientOpenListDiv" id="ingredientOpenListDiv">
      <input class="ingredientOpenList" id="ingredientbtn" type="text" placeholder="Rechercher un ingrédient..."/>
      <div class="ingredient-hideDRUGI" id="ingredient-hideDRUGI"></div>
      </div>
</div>




      <button class="appareil" id="appareilbtn"><p>Appareil <i class="fas fa-angle-down"></i></p></button>
      <div class="appareil-hide" id="appareil-hide"></div>
  
      <button class="ustensiles" id="ustensilesbtn"><p>Ustensiles <i class="fas fa-angle-down"></i></p></button>
      <div class="ustensiles-hide" id="ustensiles-hide"></div>
  
      `;
}
document.getElementById("buttons-select").innerHTML = buttonsSelect();

// // Ingredient button
// let ingredientBtn = document.getElementById("ingredient-hide");
// console.log(ingredientBtn);

// function ingredient(recipe) {
//   return `
//          <a href="#" <li>${ingredientsFun(recipe.ingredients)} </li> 
//     `;
// }
// ingredientBtn.innerHTML = `${recipes.map(ingredient).join("")}`;



// Ingredient button list DRUGIPOKUSAJ
let ingredientBtnDrugi = document.getElementById("ingredient-hideDRUGI");
console.log(ingredientBtnDrugi);

function ingredient(recipe) {
  return `
         <a href="#" <li>${ingredientsFun(recipe.ingredients)} </li> 
    `;
}
ingredientBtnDrugi.innerHTML = `${recipes.map(ingredient).join("")}`;



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
applianceBtn.innerHTML = `${recipes.map(appliance).join("")}`;

// Ustensiles button
let ustensilsBtn = document.getElementById("ustensiles-hide");
console.log(ustensilsBtn);

function ustensils(recipe) {
  return `
    <div class="ustensiles-list">
    <p> ${ustensilesFun(recipe.ustensils)} </p>
    </div>
  `;
}
ustensilsBtn.innerHTML = `${recipes.map(ustensils).join("")}`;

// // Search Input BUTTON
let inputSearchIng = document.getElementById("ingredientbtn");
console.log(inputSearchIng);

// Search Input  by input
inputSearchIng.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  let searchItemI = e.target.value.toLowerCase();
  let items = document.querySelectorAll(".recipeinput");
  console.log(items);
  // select whole div

  // let recepiescar = document.getElementById("recepiesBox");;
  // console.log(recepiescar);

  items.forEach(function (item) {
    console.log(item.textContent);
    if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      item.closest("li").style.display = "block";
      console.log(item.closest("li"));
    } else {
      item.closest("li").style.display = "none";
    }
  });
  console.log(searchItemI);
});


// // dropdownBTN show div with list
// // btn Ingredients
// let btnIng = document.getElementById("ingredientbtn");
// console.log(btnIng);
// let btnIngList = document.getElementById("ingredient-hide");
// console.log(btnIngList);

// btnIng.addEventListener("click", () => {
//   if(btnIngList.style.display === "none"){
//     btnIngList.style.display = "flex";
//   } else {
//     btnIngList.style.display = "none"
//   }

// });

// // click outside hide dropdown Ingredient
// window.addEventListener('mouseup', function(event){
// 	let ingredientMenu = document.getElementById('ingredient-hide');
// 	if (event.target != ingredientMenu && event.target.parentNode != ingredientMenu){
//     ingredientMenu.style.display = 'none';
//     }
// });

// NOVI
// dropdownBTN show div with list
// btn Ingredients
let btnIng = document.getElementById("ingredientClosedDiv");
console.log(btnIng);
let btnIngList = document.getElementById("ingredientOpenListDiv");
console.log(btnIngList);

btnIng.addEventListener("click", () => {
  if(btnIngList.style.display === "none"){
    btnIngList.style.display = "flex";
  } else {
    btnIngList.style.display = "none"
  }

});

// click outside hide dropdown Ingredient
window.addEventListener('mouseup', function(event){
	let ingredientMenu = document.getElementById('ingredientOpenListDiv');
	if (event.target != ingredientMenu && event.target.parentNode != ingredientMenu){
    ingredientMenu.style.display = 'none';
    }
});




// btn Appareil
let btnApp = document.getElementById("appareilbtn");
console.log(btnApp);
let btnAppList = document.getElementById("appareil-hide");
console.log(btnAppList);

btnApp.addEventListener("click", () => {
  if(btnAppList.style.display === "none"){
    btnAppList.style.display = "flex";
  } else {
    btnAppList.style.display = "none"
  }

});

// click outside hide dropdown Appareil
window.addEventListener('mouseup', function(event){
	let appareilMenu = document.getElementById('appareil-hide');
	if (event.target != appareilMenu && event.target.parentNode != appareilMenu){
    appareilMenu.style.display = 'none';
    }
});



// btn Ustensiles
let btnUst = document.getElementById("ustensilesbtn");
console.log(btnUst);
let btnUstList = document.getElementById("ustensiles-hide");
console.log(btnUstList);

btnUst.addEventListener("click", () => {
  if(btnUstList.style.display === "none"){
    btnUstList.style.display = "flex";
  } else {
    btnUstList.style.display = "none"
  }

});


// click outside hide dropdown Ustensiles
window.addEventListener('mouseup', function(event){
	let ustensilesMenu = document.getElementById('ustensiles-hide');
	if (event.target != ustensilesMenu && event.target.parentNode != ustensilesMenu){
    ustensilesMenu.style.display = 'none';
    }
});
