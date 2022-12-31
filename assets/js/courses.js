import { elements } from "./database.js";
const courseContent = document.querySelector(".course-content");
const btnList = document.querySelector(".btn-list");
const rangePrice = document.querySelector("#range-price");
const smallPrice = document.querySelector("#small-price");
const searchInput = document.querySelector("#searchInput");


window.addEventListener("DOMContentLoaded", function()
{
  menuDisplay(elements);
  displayMenuButtons();

});

const menuDisplay =(Items) =>{
    let Menu = Items.map(function (item) {
         console.log(item);
    
        return `
        <div class="card m-3" style="width: 18rem; height : fit-content">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${item.des}</p>
          <h5 class="card-title">${item.prix}$</h5>
        </div>
      </div>
        `;
      });
      Menu = Menu.join("");
      // console.log(displayMenu);
    
      courseContent.innerHTML = Menu;

};


/* Function buttons display menu by categories*/

function displayMenuButtons() {
const categories = elements.reduce(
  function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
);
const categoryBtns = categories.map(function (category) {
    return `
    <button type="button" class=" btn-filtrage" data-id="${category}" >${category}</button>
    `;
  }).join("");

btnList.innerHTML = categoryBtns;
const filterBtns = btnList.querySelectorAll(".btn-filtrage");
console.log(filterBtns);

filterBtns.forEach(function (btn) {
  btn.addEventListener("click",function (e) {
  
    const category = e.currentTarget.dataset.id;
    const elementCategory = elements.filter(function (elementItem) {
      
      if (elementItem.category === category) {
        return elementItem;
      }
    });
    if (category === "all") {
      menuDisplay(elements);
    } else {
      menuDisplay(elementCategory);
    }
    console.log(elementCategory);
    return elementCategory;
  });


});
};
const E =displayMenuButtons();
console.log(E);

searchInput.focus();
searchInput.addEventListener("input",function(eventValue){
  let searchValue = eventValue.target.value.toUpperCase();
  console.log(searchValue);
  const elementSearch = elements.filter(
    function(Items){
      if(Items.des.toLocaleUpperCase().includes(searchValue) === true  || Items.category.toLocaleUpperCase().includes(searchValue) === true){
        return Items
      }
      console.log(Items);
    }
  );
  console.log(elementSearch)
  menuDisplay(elementSearch);
}
);
rangePrice.addEventListener("input", () => {
  let valueP = rangePrice.value;
  smallPrice.innerText = `${valueP}$`;
  console.log(valueP);
  const rangeElements = elements.filter(
    function(elementItem){
      if(valueP >= elementItem.prix){
        return elementItem;
      }
    }
  )
  menuDisplay(rangeElements);
});
