// import other js
import { recipes } from "./recipes.js";
console.log(recipes);

// make variables
let recipesNames;
let ingredients;
let appareil;
// let ustensiles;

// // Search Input
let inputSearch = document.getElementById("searchBar");
  console.log(inputSearch);




  inputSearch.addEventListener("keyup", function(e){
    //   console.log(e.target.value);
        let searchItem = e.target.value.toLowerCase();
        let items = document.querySelectorAll(".recipeinput");
        console.log(items);
        // select whole div

        // let recepiescar = document.getElementById("recepiesBox");;
        // console.log(recepiescar);

        items.forEach(function(item){
            console.log(item.textContent);
            if(item.textContent.toLowerCase().indexOf(searchItem) != -1){
                item.closest("li").style.display = "block";
                console.log(item.closest("li"));
            }
            else {
                item.closest("li").style.display = "none";
            }
        })

        console.log(searchItem);
  })



// recepiesCards
let recepiesCard = document.getElementById("recepies");
console.log(recepiesCard);

// // search bar
// const searchBar = document.getElementById("searchBar");
// console.log(searchBar);


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
             <li>${ingredient.ingredient ? ingredient.ingredient : ''}
             ${ingredient.quantity ? ingredient.quantity : ''}
             ${ingredient.unit ? ingredient.unit : ''}</li>
          
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

//BUTTONS
function buttonsSelect() {
  return `
  
      <div class="ingredient"><p>Ingredient <i class="fas fa-angle-down"></i></p></div>
      <div class="ingredient-hide" id="ingredient-hide"></div>
    
      <div class="appareil"><p>Appareil <i class="fas fa-angle-down"></i></p></div>
      <div class="appareil-hide" id="appareil-hide"></div>
  
      <div class="ustensiles"><p>Ustensiles <i class="fas fa-angle-down"></i></p></div>
      <div class="ustensiles-hide" id="ustensiles-hide"></div>
  
      `;
}
document.getElementById("buttons-select").innerHTML = buttonsSelect();

// Ingredient button
let ingredientBtn = document.getElementById("ingredient-hide");
console.log(ingredientBtn);

function ingredient(recipe) {
  return `
        <div class="ingredient-list">
        <p>  ${ingredientsFun(recipe.ingredients)} </p>
        </div>
    `;
}
ingredientBtn.innerHTML = `${recipes.map(ingredient).join("")}`;


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




// // filter SEARCH input
// let inputSearch = document.getElementById("searchBar");
//   console.log(inputSearch);

//   inputSearch.addEventListener('keyup', function(e){
//       const term = e.target.value.toLowerCase();
//     //   console.log(term);
//     const books = document.getElementById("name");
//     console.log(books);
//     Array.from(books).forEach(function(book){
//         const title = book.textContent;
//         console.log(title);
//         if(title.toLowerCase().indexOf(term)!= -1){
//             book.style.display = 'block';
//         }else {
//             book.style.display = 'none';
//         }
//     })
//   })





// // Search Input
// let inputSearch = document.getElementById("searchBar");
//   console.log(inputSearch);

//   inputSearch.addEventListener("keyup", function(){
//       let value = this.value;
//       console.log('Value:', value);
//       let data = searchRecepies(value, recipes)
//       recipiesBox(recipes);


//   });

//   function searchRecepies(value, recipes){
//       let filteredRecepies = [];
//         for(var i = 0; i < recipes.length; i++)
//         value = value.toLowerCase()
//         let name = recipes[i].name.toLowerCase()
       

//             if (name.includes(value)){
//                 filteredRecepies.push(data[i])
//             }
//         }

