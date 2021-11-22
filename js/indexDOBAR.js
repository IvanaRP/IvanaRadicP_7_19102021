
// import other js
import { recipes } from "./recipes.js";
console.log(recipes);

/**
 *
 *   MAKE VARIABLES
 */
// make variable

let ingredients = [];
console.log(ingredients);

let appliances = [];
console.log(appliances);

let ustensils = [];
console.log(ustensils);

let ingredientsAll = [];
console.log(ingredientsAll);

let appliancesAll = [];
console.log(appliancesAll);

let ustensilsAll = [];
console.log(ustensilsAll);

let searchInputRes = [];
console.log(searchInputRes);

let filteredIngr = [];
console.log(filteredIngr);

let filteredRecipes = [];
console.log(filteredRecipes);

let uniqApp = [];
console.log(uniqApp);

let tagsIng = [];
console.log(tagsIng);




/**
 *
 *  RECIPES ARRAY
 */
// // display all Recipes
// const displayRecipes = (recipes) => {
//     const htmlString = recipes
//       .map((recipe) => {
//         return `
//                 <div class="recepies__card">
//                     <div class="recepies__img"> <img class="recipe-img" src="../img/img/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="image"></div>
//                     <div class="recepies__info">
    
//                       <div class="recepies__name-time">
//                           <h3 class="recepies__name">${recipe.name}</h3>
//                           <p class="recepies__time"><i class="far fa-clock"></i>${
//                             recipe.time
//                           }</p>
//                       </div>
    
//                       <div class="recepies__ingredients-description">
//                           <div class="recepies__ingredients">
//                               <ul>
//                               <li class="recepies__ingredients-list">${[
//                                 ...recipe.ingredients.map((ingredient) => {
//                                   return ingredient.ingredient;
//                                 }),
//                               ]}</li>
//                               </ul>
//                           </div>
                    
                   
//                           <p class="recepies__description">${
//                             recipe.description
//                           }</p>
//                       </div>
                      
//                     </div>
//                 </div>
               
//               `;
//       })
//       .join("");
//     recipesList.innerHTML = htmlString;
//   };

// select elements
const recipesList = document.getElementById("recepies-cards");
console.log(recipesList);
const searchBar = document.getElementById("search__bar");
console.log(searchBar);


const ingredientsList = document.getElementById("ingredients-list");
/**
 *
 *   MAIN SEARCH BY INPUT
 */
// // MAIN search bar input - if it includes name show in recipes or lists
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    console.log(searchString);
  
    // searchInputRes = filteredRecipes;
    // console.log(searchInputRes);
  
  
    filteredRecipes = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(searchString) ||
          recipe.appliance.toLowerCase().includes(searchString) ||
          recipe.ingredients
            .map((ingredient) => {
              return ingredient.ingredient.toLowerCase();
            })
            .includes(searchString) ||
          recipe.ustensils
                .map((ustnesile) => {
                    return ustnesile.toLowerCase();
                })
          .includes(searchString)
        );
    });
    

    // filteredIngr = ingredients.filter((ingredient) => {
    //     return (
    //         ingredient.ingredient.toLowerCase().includes(searchString) 
  
    //     );
    //   });


    //   console.log(filteredIngr);

    //   console.log(ingredientHtml);
    
    console.log(filteredRecipes);

    //     filteredIngr = recipes.filter((recipe) => {
    //         return (
            
    //             recipe.ingredients
    //             .map((ingredient) => {
    //             return ingredient.ingredient.toLowerCase();
    //             })
    //             .includes(searchString)
    //             );
    //     });
     


    //   console.log(filteredIngr);

        displayIngredients(filteredRecipes);

    // drawRecipesHtml();
    // console.log(drawRecipesHtml);
  
    drawRecipesHtml(filteredRecipes);
    console.log(drawRecipesHtml(filteredRecipes));

    // displayRecipes(filteredRecipes);
    // displayIngredients(filteredRecipes);
  
    // displayAppareil(filteredRecipes);
   
    // displayUstensiles(filteredRecipes);
  
    // console.log(displayRecipes(filteredRecipes));
  });



// let ustensilsHtml = [];

// //   // display Recipes cards
// function drawRecipesHtml() {

// recipes.map((recipe) => {
//     ustensilsHtml =  recipe.ustensils.map((ustensil) => {
//         return ` <p id="ustensil" class="ustensil">#${ustensil}</p>`
        
//     })
//     .join("");
// })
 
//         };


//         drawRecipesHtml();
//         console.log(drawRecipesHtml());
//         console.log(ustensilsHtml);

//         console.log(ustensils);
//         // let ustensilsHtml =[];
//         // recipes.map((recipe) => {
//         // recipe.ustensils.map((ustensil) => {
//         //     return `<p id="ustensil" class="ustensil">#${ustensil}</p>`;
//         //   })
//         // .join("");


//   function drawRecipesHtml() {
//     let html = recipes
//       .map((recipe) => {
//         ingredientHtml = recipe.ingredients
//           .map((ingredient) => {
//             return `<pid="ingredient" class="ingredient">#${ingredient.ingredient}</p>`;
//           })
//           .join("");
// let ustensilsHtml = recipe.ustensils
//           .map((ustensil) => {
//             return `<p id="ustensil" class="ustensil">#${ustensil}</p>`;
//           })
//           .join("");
//         return `
//            <h3 class="recepies__name">${recipe.name}</h3>
//             <h3 class="recepies__appliance">${recipe.appliance}</h3>

//            <p class="recepies__description">${recipe.description}</p> 


//             <div class="ingredientHtml" id="ingredientHtml">${ingredientHtml}</div> 
//             <div class="ustensilsHtml" id="ustensilsHtml">${ustensilsHtml}</div> 
       
//         `;
//       })
//       .join("");
//     document.querySelector("#recepies-cards").innerHTML = html;
//   }


/**
 *
 *  USTENSILES ARRAY
 */
// display all Ingredients
const displayIngredients = (recipes) => {
    const htmlString = recipes.map((recipe) => {
    //   console.log(recipe.ingredients);
      let ingredHtml = '';
  
      recipe.ingredients.forEach(ingredient => {
        ingredHtml = ingredHtml + '<li class="recepies__ingredients">' + ingredient.ingredient + '</li>';
      })
  
    //   console.log(ingredHtml);
  return ingredHtml;
  
  
      // return `
       
      // {recipe.ingredients}
      //   // <li class="recepies__ingredients">${[
      //   //   ...recipe.ingredients.map((ingredient) => {
      //   //     return ingredient.ingredient;
      //   //   }),
      //   // ]}</li>
        
      //           `;
    });
  
    // .join("");
    ingredientsList.innerHTML = htmlString;
  };


//   //   // display Recipes cards
  const drawRecipesHtml  = (recipes) => {
    const html = recipes
      .map((recipe) => {
        const ingredientHtml = recipe.ingredients
          .map((ingredient) => {
            return `<p id="ingredient" class="ingredient">#${ingredient.ingredient}</p>`;
          })
          .join("");
          const ustensilsHtml = recipe.ustensils
          .map((ustensil) => {
            return `<p id="ustensil" class="ustensil">#${ustensil}</p>`;
          })
          .join("");
        return `
           <h3 class="recepies__name">${recipe.name}</h3>
            <h3 class="recepies__appliance">${recipe.appliance}</h3>

           <p class="recepies__description">${recipe.description}</p> 


            <div class="ingredientHtml" id="ingredientHtml">${ingredientHtml}</div> 
            <div class="ustensilsHtml" id="ustensilsHtml">${ustensilsHtml}</div> 
       
        `;
      })
      .join("");
    document.querySelector("#recepies-cards").innerHTML = html;
  }



  /**
 *
 *  CALL ALL FUNCTIONS
 */
//   funkcions
drawRecipesHtml(recipes);
  console.log(drawRecipesHtml(recipes));

  displayIngredients(recipes);
  console.log(displayIngredients(recipes));


//   // get Appliances double by map
//   function getAppliances(recipes) {
//     let appliances = [];
//     recipes.map((recipe) => {
//         appliances.push(recipe.appliance);
//       });
//       console.log(appliances);
//     // recipes.appliances.map((appliance) => {
//     //   if (appliance.includes("tags")) {
//     //     photographer.tags.map((tag) => {
//     //       if (!tags.includes(tag)) {
//     //         tags.push(tag);
//     //       }
//     //     });
//     //   }
//     // });
//     // return tags;
//   }


//   getAppliances(recipes);  

// // Get URL Parameters
// function getParam(tags) {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     return urlParams.get(tags);
//   }
  
//   // make variables
//   let allPhotographers;
//   let filteredPhotographers;
//   let allTags;
//   let selectedTag;
  
//   // // fetch Json data
//   // function fetchData() {
//   //   return fetch("FishEyeData.json").then((response) => {
//   //     return response.json();
//   //   });
//   // }
  
//   // get Tags by map
//   function getTags(data) {
//     let tags = [];
//     data.photographers.map((photographer) => {
//       if (photographer.hasOwnProperty("tags")) {
//         photographer.tags.map((tag) => {
//           if (!tags.includes(tag)) {
//             tags.push(tag);
//           }
//         });
//       }
//     });
//     return tags;
//   }
  
//   // topTags for header
//   function drawTagsHtml() {
//     taghtml = allTags
//       .map((tag) => {
//         return `<div class="header__tag tagclick" aria-label="photographer categories"  onClick=filterByTag("${tag}")><p id="${tag}" class="tags" tabindex="0">#${tag}</p></div>`;
//       })
//       .join("");
//     document.querySelector("#header__tags").innerHTML = taghtml;
//   }
  
//   // filter by Tags photographer
//   function filterByTag(tag) {
//   console.log(tag, selectedTag);
//     if(tag == selectedTag) {
     
//       filteredPhotographers = allPhotographers
   
//     } 
//     else {
  
//      filteredPhotographers = allPhotographers.filter((photographer) => {
//             return photographer.tags.includes(tag);
//           });
//     }
//   selectedTag = tag;
  
  
//     drawPhotographersHtml();
//   }
  
  
//   // KEYBOARD EVENTS for Tag
//   function keyboardTag() {
//     let tagsKey = document.querySelectorAll(".tags");
//     // console.log(tagsKey);
//     tagsKey.forEach((tagkey) => {
//       // console.log("toto");
//       tagkey.addEventListener("keypress", function (event) {
//         // console.log("toto");
//         if (event.key === "Enter"){
//           event.target.click()
//         }
//       });
//     });
//   }
  
//   // display Photographers cards
//   function drawPhotographersHtml() {
//     let html = filteredPhotographers
//       .map((user) => {
//         let tagsHtml = user.tags
//           .map((tag) => {
//             return `<p onClick=filterByTag("${tag}") id="tags" class="tags"  tabindex="0">#${tag}</p>`;
//           })
//           .join("");
//         return `
//         <div class = "user" id="user">
//           <a href="photographer-page.html?id=${user.id}" class="user__photoName" aria-label="photographer image ${user.name}" tabindex="0">
//             <img id="profile" src="Documents/Sample Photos/Photographers ID Photos/${user.portrait}" class="profile" alt="photo of ${user.name}" role="img"/>
//             <h2 class="name">${user.name}</h2>
//          </a>
//               <p class="location">${user.city}, ${user.country}</p>
//               <p class="tagline">${user.tagline}</p>
//               <p class="price">${user.price}€/jour</p>
//             <div class="tags__all" id="tags">${tagsHtml}</div> 
//         </div>
//         `;
//       })
//       .join("");
//     document.querySelector("#photographer__card").innerHTML = html;
//   }
  
//   // change color for TAGS when selected
//   function changeTagColor() {
//     let tags = document.querySelectorAll(".tags");
  
//     function changeColor() {
//       for (var i = 0; i < tags.length; i++) {
//         tags[i].classList.remove("clicked");
//       }
//       this.classList.add("clicked");
//     }
//     for (var i = 0; i < tags.length; i++) {
//       tags[i].addEventListener("click", changeColor, false);
//     } 
//   }
  
  
  
//   // fetch Json data
//   fetch("FishEyeData.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
    
//       allPhotographers = data.photographers;
//       allTags = getTags(data);
//       filteredPhotographers = allPhotographers;
  
//       drawPhotographersHtml();
//       drawTagsHtml();
//       changeTagColor();
//       keyboardTag();
     
  
//       photographerTag = getParam("tags");
//       if (!!photographerTag){
//         filterByTag(photographerTag)
//       }
  
  
//     })
//     .catch((error) => {
//       console.log(error);
//     });
