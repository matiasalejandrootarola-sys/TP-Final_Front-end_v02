/*
const productosContainer = document.querySelector(".container_2");

fetch('https://dummyjson.com/products/category/smartphones')
  .then((response) => response.json())
  .then((data) => {

    const producto = data.products.slice(0, 4);

    let productosHTML = "";

    for (let i = 0; i < producto.length; i++) {
      const prod = producto[i];
      productosHTML +=
        `
           <div class="card">
            <div class=" box box1">
               <div Class="content">
                 <img src="${prod.thumbnail}" width="600" height="400" alt="robot">
                   <h3>"${prod.title}"</h3>
               </div>
             </div>
             <div class="box box2">
               <div class="content">
                 <p> "${prod.description}"</p>
                 <i class="fa-solid fa-cart-shopping"></i>
                 <a href="#">Agregar al carrito</a>
                 <div class="info">
                   <a href="./Reseña_01.html">Reseña</a>
                 </div>
               </div>
             </div>
           </div>
         `
    }
    productosContainer.innerHTML = productosHTML;
  })
*/

//=====================================================================================//
// Correr .json creado de forma local 

const productosContainer = document.querySelector(".container_2");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {

    const producto = data.products.slice(0, 3);

    let productosHTML = "";

    for (let i = 0; i < producto.length; i++) {
      const prod = producto[i];
      productosHTML +=
        `
             <div class="card">
              <div class=" box box1">
                 <div Class="content">
                   <img src="${prod.img}" width="600" height="400" alt="robot">
                     <h3>"${prod.titulo}"</h3>
                 </div>
               </div>
               <div class="box box2">
                 <div class="content">
                   <p> "${prod.descripcion}"</p>
                   <i class="fa-solid fa-cart-shopping"></i>
                   <a href="#">Agregar al carrito</a>
                   <div class="info">
                     <a href="./Reseña_01.html">Reseña</a>
                   </div>
                 </div>
               </div>
             </div>
           `
    }
    productosContainer.innerHTML = productosHTML;
  })
 
  .catch((error)=> console.log(error))