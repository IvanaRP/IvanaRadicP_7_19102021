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
      <div class="ingredientAll">
             <li class="ingredientName">${ingredient.ingredient ? ingredient.ingredient : ""} : </li>
             <li class="ingredientQuantity"> ${ingredient.quantity ? ingredient.quantity : ""} ${ingredient.unit ? ingredient.unit : ""}</li>
     </div>
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
                        <p class="ustensils">${recipe.ustensils}}</p>
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
      <button class="ingredientClosed" id="ingredientbtnClosed"><p>Ingredient <i class="fas fa-angle-down"></i></p></button>
      </div>

      <div class="ingredientOpenListDiv" id="ingredientOpenListDiv">
      <input class="ingredientOpenList" id="ingredientbtn" type="text" placeholder="Rechercher un ingrédient..."/>
      <div class="ingredient-hideDRUGI" id="ingredient-hideDRUGI"></div>
      </div>
</div>

<div class=appBTN">
      <div class="appareilClosedDiv" id="appareilClosedDiv">
      <button class="appareilClosed" id="appareilbtnClosed"> <p>Appareil <i class="fas fa-angle-down"></i></p></button>
      </div>

      <div class="appareilOpenListDiv" id="appareilOpenListDiv">
      <input class="appareilOpenList" id="appareilbtn" type="text" placeholder="Rechercher un appareil..."/>
      <div class="appareil-hideDRUGI" id="appareil-hideDRUGI"></div>
      </div>
</div>

<div class=ustBTN">
      <div class="ustensilesClosedDiv" id="ustensilesClosedDiv">
      <button  class="ustensilesClosed" id="ustensilesbtnClosed"><p>Ustensiles <i class="fas fa-angle-down"></i></p></button>
      </div>

      <div class="ustensilesOpenListDiv" id="ustensilesOpenListDiv">
      <input class="ustensilesOpenList" id="ustensilesbtn" type="text" placeholder="Rechercher un ustensiles..."/>
      <div class="ustensiles-hideDRUGI" id="ustensiles-hideDRUGI"></div>
      </div>
</div>



        <select>
            <option disabled hidden selected>Select</option>
            <option>Javascript</option>
            <option>Angular</option>
            <option>React</option>
            <option>C#</option>
        </select>



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
         <li class=listIng>${ingredientsFun(recipe.ingredients)} </li>
    `;
}
ingredientBtnDrugi.innerHTML = `${recipes.map(ingredient).join("")}`;

// Appareil button
let applianceBtn = document.getElementById("appareil-hideDRUGI");
console.log(applianceBtn);

function appliance(recipe) {
  
  return `

    <div class="appliance-list" id="appliance-list">
    <p class="appOption" id="appOption">${recipe.appliance} </p>
    </div>
  
  `;
}
applianceBtn.innerHTML = `${recipes.map(appliance).join("")}`;

// Ustensiles button
let ustensilsBtn = document.getElementById("ustensiles-hideDRUGI");
console.log(ustensilsBtn);

function ustensils(recipe) {
  return `
    <div class="ustensiles-list">
    <p> ${ustensilesFun(recipe.ustensils)} </p>
    </div>
  `;
}
ustensilsBtn.innerHTML = `${recipes.map(ustensils).join("")}`;


// // Appareil button
// let applianceBtn = document.getElementById("appareil-hide");
// console.log(applianceBtn);

// function appliance(recipe) {
  
//   return `
//     <div class="appliance-list" id="appliance-list">
//     <p class="appOption" id="appOption">${recipe.appliance} </p>
//     </div>
//   `;
// }
// applianceBtn.innerHTML = `${recipes.map(appliance).join("")}`;

// // Ustensiles button
// let ustensilsBtn = document.getElementById("ustensiles-hide");
// console.log(ustensilsBtn);

// function ustensils(recipe) {
//   return `
//     <div class="ustensiles-list">
//     <p> ${ustensilesFun(recipe.ustensils)} </p>
//     </div>
//   `;
// }
// ustensilsBtn.innerHTML = `${recipes.map(ustensils).join("")}`;



// search Input BUTTON
// // Search Input BUTTON
let inputSearchIng = document.getElementById("ingredientbtn");
console.log(inputSearchIng);

// Search Input  by input
inputSearchIng.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  let searchItemI = e.target.value.toLowerCase();
  let items = document.querySelectorAll(".recipeinput");
  console.log(items);
  // let itemsLists = document.querySelectorAll(".ingredients-list");
  // console.log(itemsLists);
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

  // itemsLists.forEach(function (itemsList) {
  //   console.log(itemsList.textContent);
  //   if (itemsList.textContent.toLowerCase().indexOf(searchItemI) != -1) {
  //     itemsList.closest("li").style.display ="flex";
  //     console.log(itemsList.closest("li"));
  //   } else {
  //     itemsList.closest("li").style.display = "none";
  //   }
  // });
  // console.log(searchItemI);
});



// search APPAREIL BUTTON
// // Search APPAREIL  BUTTON
let inputSearchApp = document.getElementById("appareilbtn");
console.log(inputSearchApp);

// Search Input  by input
inputSearchApp.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  let searchItemI = e.target.value.toLowerCase();
  let items = document.querySelectorAll(".recipeinput");
  console.log(items);
 
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




// search USTENSILES BUTTON
// // Search USTENSILES  BUTTON
let inputSearchUst = document.getElementById("ustensilesbtn");
console.log(inputSearchUst);

// Search Input  by input
inputSearchUst.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  let searchItemI = e.target.value.toLowerCase();
  let items = document.querySelectorAll(".recipeinput");
  console.log(items);
 
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
let btnApp = document.getElementById("appareilClosedDiv");
console.log(btnApp);
let btnAppList = document.getElementById("appareilOpenListDiv");
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
	let appareilMenu = document.getElementById('appareilOpenListDiv');
	if (event.target != appareilMenu && event.target.parentNode != appareilMenu){
    appareilMenu.style.display = 'none';
    }
});



// btn Ustensiles
let btnUst = document.getElementById("ustensilesClosedDiv");
console.log(btnUst);
let btnUstList = document.getElementById("ustensilesOpenListDiv");
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
	let ustensilesMenu = document.getElementById('ustensilesOpenListDiv');
	if (event.target != ustensilesMenu && event.target.parentNode != ustensilesMenu){
    ustensilesMenu.style.display = 'none';
    }
});





// get value of dropdown
// let selection = document.querySelector('select');
// let result = document.getElementById('test');


// selection.addEventListener('change', () => {
//   result.innerHTML = selection.options[selection.selectedIndex].text;
// });


// get value of dropdown APPLIANCE
// let selectionApp = document.getElementById('appliance-list');
// console.log(selectionApp);
// let resultApp = document.getElementById('tagsApp');
// console.log(resultApp);


// selectionApp.addEventListener('change', () => {
//   resultApp.innerHTML = selectionApp.options[selectionApp.selectedIndex].text;
// });


// GET VALUE FROM DROPDOWN TO DIV
let selection = document.querySelector('select');
let result = document.getElementById('tagsIng');
selection.addEventListener('change', () => {
    result.innerText = selection.options[selection.selectedIndex].value;
    console.log(selection.selectedIndex);
});
