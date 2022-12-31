import { elements } from "./database.js";
const randomElement = () =>{
    const randomNumber = Math.floor(Math.random() * elements.length);
    console.log(randomNumber);
    const newElement = elements[randomNumber];
    console.log(newElement);
    return newElement;
}
const displayMenuRandom =()=>{
    const setElement =() =>{
        let a =randomElement();
        let b =randomElement();
        let c =randomElement();
        console.log(a);
        console.log(b);
        console.log(c);
        return `
        <div class="card" style="width: 18rem;">
        <img src="${a.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${a.des}</p>
          <h5 class="card-title">${a.prix}$</h5>
          <a href="./courses.html" class="btn btn-cr">courses</a>
        </div>
        </div>
        <div class="card" style="width: 18rem;">
        <img src="${b.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${b.des}</p>
          <h5 class="card-title">${b.prix}$</h5>
          <a href="./courses.html" class="btn btn-cr">Courses</a>
        </div>
        </div>
        <div class="card" style="width: 18rem;">
        <img src="${c.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${c.des}</p>
          <h5 class="card-title">${c.prix}$</h5>
          <a href="./courses.html" class="btn btn-cr">Courses</a>
        </div>
        </div>
     
        `
    }
    const item =setElement();
    console.log(item);
    const parentCourses =document.querySelector(".courses");
    parentCourses.innerHTML = item;
    console.log(parentCourses);

}
window.addEventListener("DOMContentLoaded",displayMenuRandom());




