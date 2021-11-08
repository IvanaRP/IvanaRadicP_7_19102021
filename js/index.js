// import other js
import { recipes } from "./recipes.js";
console.log(recipes);

// remove duplicate  value from an array
// let recipes1 = recipes;
// console.log(recipes1);

// display Photographers
// function drawPhotographersHtmlBox() {
//   let filteredUserhtml = filteredUsers
//     .map((user) => {
//       let tagsHtml = user.tags
//         .map((tag) => {
//           return `<a href="index.html?tags=${tag}"><p onClick=filterByTag("${tag}") id="tags" class="tags" >#${tag}</p></a>`;
//         })
//         .join("");
//       return `
//              <div class = "filteredUser__infoButton"> 
//                             <p class="id">${filteredUser.id}</p>
//                   </div> 
           
//       `;
//     }).join("");
//   document.querySelector("#photographer").innerHTML = filteredUserhtml;
// }
// let appliance1 
// let filteredApp 

// function drawAppliance() {
//   let filteredApphtml = filteredApp
//     .map((recipes1) => {
//       return `
//              <div class = "filteredUser__infoButton"> 
//                             <p class="id">${recipes1.appliance}</p>
//                   </div> 
           
//       `;
//     }).join("");
//   document.querySelector("#photographer").innerHTML = filteredApphtml;
// };

// drawAppliance();


// appliance1 = filteredApp;
// console.log(appliance1);

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
let recepiesCard = document.getElementById("recepies-card");
console.log(recepiesCard);

//display all Ustensiles
function ustensilesFun(ustensils) {
  return `<ul class="ustensils-list"> ${ustensils
    .map((ustensil) => {
      return `
               <li id="ustDropList">${ustensil}</li>
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
             <li class="ingredientName">${
               ingredient.ingredient ? ingredient.ingredient : ""
             } : </li>
             <li class="ingredientQuantity"> ${
               ingredient.quantity ? ingredient.quantity : ""
             } ${ingredient.unit ? ingredient.unit : ""}</li>
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
                        <h3 class="time"><i class="far fa-clock"></i>${
                          recipe.time
                        } min</h3>
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
console.log(ingredientBtnDrugi);

// unique 
// let app = recipes.map(appliance);
// console.log(app);

// let uniqueApp = [... new Set(app)];
// console.log(uniqueApp);


// let ing = recipes.map(ingredient);
// console.log(app);

// let uniqueIng = [... new Set(ing)];
// console.log(uniqueIng);




// Appareil button
let applianceBtn = document.getElementById("appareil-hideDRUGI");
console.log(applianceBtn);



function appliance(recipe) {
  return `
  <li>
    <div class="appliance-list" id="appliance-list">
    <p class="appOption" id="appOption">${recipe.appliance}</p>
    </div>
  </li>
  `;
}
applianceBtn.innerHTML = `${recipes.map(appliance).join("")}`;


let uniq = [...new Set(recipes.map(appliance))];
console.log(uniq);

applianceBtn.innerHTML = uniq;
console.log(applianceBtn);



// Ustensiles button
let ustensilsBtn = document.getElementById("ustensiles-hideDRUGI");
console.log(ustensilsBtn);

function ustensils(recipe) {
  return `
  <li>
    <div class="ustensiles-list">
    <p> ${ustensilesFun(recipe.ustensils)} </p>
    </div>
  </li>
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

  items.forEach(function (item) {
    console.log(item.textContent);
    if (item.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      item.closest("li").style.display = "block";
      console.log(item.closest("li"));
    } else {
      item.closest("li").style.display = "none";
    }
  });

  let ingLists = document.querySelectorAll(".ingredients-list");
  console.log(ingLists);

  ingLists.forEach(function (ingList) {
    console.log(ingList.textContent);
    if (ingList.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      ingList.closest("li").style.display = "block";
      console.log(ingList.closest("li"));
    } else {
      ingList.closest("li").style.display = "none";
    }
  });

  console.log(searchItemI);
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

  let appLists = document.querySelectorAll(".appliance-list");
  console.log(appLists);

  appLists.forEach(function (appList) {
    console.log(appList.textContent);
    if (appList.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      appList.closest("li").style.display = "block";
      console.log(appList.closest("li"));
    } else {
      appList.closest("li").style.display = "none";
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

  // search in recipe cards
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

  // search for list Items
  let ustLists = document.querySelectorAll(".ustensiles-list");
  console.log(ustLists);

  ustLists.forEach(function (ustList) {
    console.log(ustList.textContent);
    if (ustList.textContent.toLowerCase().indexOf(searchItemI) != -1) {
      ustList.closest("li").style.display = "block";
      console.log(ustList.closest("li"));
    } else {
      ustList.closest("li").style.display = "none";
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
  if (btnIngList.style.display === "none") {
    btnIngList.style.display = "flex";
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

// btn Appareil
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
console.log(btnUst);
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


// Appareil button
// let applianceBtnNovo = document.getElementById("buttonInput");
// console.log(applianceBtnNovo);

// function appliancenovo(recipe) {
//   return `

//               <option class="dropdownApp">${recipe.appliance}</option>
       
 
//   `;
// }
// applianceBtnNovo.innerHTML = `${recipes.map(appliancenovo).join("")}`;

// // // GET VALUE FROM DROPDOWN TO DIV
// function buttonInput() {
//   return `<select>
//               <option>Blender</option>
//               <option>Saladier</option>
//               <option>Four</option>
//               <option>Mixer</option>
//           </select>
//     `;
// }
// document.getElementById("buttonInput").innerHTML = buttonInput();


// GET VALUE FROM DROPDOWN TO DIV
// let selection = document.querySelector("select");
// console.log(selection);
// let result = document.getElementById("inputSelectedTags");
// console.log(result);

// let tagBox = document.getElementById("inputSelected");
// console.log(tagBox);


// selection.addEventListener("change", () => {
//   tagBox.style.display = 'flex';
//   result.innerText = selection.options[selection.selectedIndex].value;
//   console.log(selection.selectedIndex);
// });



// // close TAG on X
// let tagsClose = document.getElementById('tagsClose');
// console.log(tagsClose);


// tagsClose.addEventListener('click' , () => {
//   if (tagBox.style.display === "none") {
//     tagBox.style.display = "flex";
//   } else {
//     tagBox.style.display = "none";
//   }
// });



// // add listenr to list Ust

// let ustDropList = document.getElementById('ustDropList');
// console.log(ustDropList);


// let tagsUts = document.getElementById('tagsUts');
// console.log(tagsUts);

// ustDropList.addEventListener("change", () => {
//   tagsUts.innerText = ustDropList.options[ustDropListselectedIndex].value;
// //   console.log(selection.selectedIndex);
 
// });



