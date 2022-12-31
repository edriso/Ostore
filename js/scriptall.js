function addItemToCartStorage(productId) {
  let prod = products.find(function (item) {
    return item.id == productId;
  });

  if (cart.length == 0) {
    cart.push(prod);
  } else {
    // console.log(cart);
    let result = cart.find((element) => element?.id == productId);
    if (result === undefined) {
      cart.push(prod);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then(function (data) {
    localStorage.setItem("my products", JSON.stringify(data));
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
    console.log(data);
  });

//variables to hold the data
let products = JSON.parse(localStorage.getItem("my products")).products;
let cart = JSON.parse(localStorage.getItem("cart"));

function addItemToCartStorage(productId) {
  let prod = products.find(function (item) {
    return item.id == productId;
  });

  if (cart.length == 0) {
    cart.push(prod);
  } else {
    let result = cart.find((element) => element.id == productId);
    if (result === undefined) {
      cart.push(prod);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

var items = [] ;


function furnitures(){
var furniture = products.filter(function (item){
  return item.category == "home-decoration"
});

var productContainer = document.getElementById("products_container");
furniture.forEach(product => {
  let item = `<a href="/item#${product.id}" class="nav-link"><div class="row bg-white pb-3 pt-3">
  <img src="${product.thumbnail}" alt="" class="col-lg-9 col-sm-12" style="height: 500px;">
  <div class="col-lg-3 col-sm-12  pt-2">
    <p class="pt-5" style="color: rgb(194, 167, 167);">FEATURED PRODUCT</p>
    <h3 class="title">${product.title}</h3>
    <hr style="width: 20%; height: 3px; color:  rgb(255, 196, 0);" >
    <p class="">${product.description}</p>
    <div >
    <button class="priceBtn" data-id="${product.id}" style="width: 54%; border:rgb(11, 68, 11) solid 1px;  ">${product.price}$ <i class="bi bi-arrow-right"></i>
  </button></div>
</div>
<hr>
</div></a>`  
let prodId = document.querySelectorAll(".priceBtn").id ;
productContainer.innerHTML += item ;
});
localStorageCart();
}

function Laptops(){
  var laptop = products.filter(function (item){
    return item.category == "laptops"
  });
  var productContainer = document.getElementById("products_container");
  productContainer.addEventListener("click",function(){
    console.log()
  })
  laptop.forEach(product => {
    let item = `<a href="/item#${product.id}" class="nav-link">
    <div class="row bg-white pb-3 pt-3">
    <img src="${product.thumbnail}" alt="" class="col-lg-9 col-sm-12" style="height: 500px;">
    <div class="col-lg-3 col-sm-12  pt-2">
      <p class="pt-5" style="color: rgb(194, 167, 167);">FEATURED PRODUCT</p>
      <h3 class="title">${product.title}</h3>
      <hr style="width: 20%; height: 3px; color:  rgb(255, 196, 0);" >
      <p class="">${product.description}</p>
      <div ><button class="priceBtn" data-id="${product.id}" style="width: 54%; border:rgb(11, 68, 11) solid 1px;  ">${product.price}$ <i class="bi bi-arrow-right"></i>
    </button></div>
  </div>
  <hr>
  </div></a>`
  productContainer.innerHTML += item ;
  });
  localStorageCart();
  }

function phone(){
  var furniture = products.filter(function (item){
    return item.category == "smartphones"
  });
  
  var productContainer = document.getElementById("products_container");
  furniture.forEach(product => {
    let item = `<a href="/item#${product.id}" class="nav-link"><div class="row bg-white pb-3 pt-3">
    <img src="${product.thumbnail}" alt="" class="col-lg-9 col-sm-12" style="height: 500px;">
    <div class="col-lg-3 col-sm-12  pt-2">
      <p class="pt-5" style="color: rgb(194, 167, 167);">FEATURED PRODUCT</p>
      <h3 class="title">${product.title}</h3>
      <hr style="width: 20%; height: 3px; color:  rgb(255, 196, 0);" >
      <p class="">${product.description}</p>
      <div ><button class="priceBtn" data-id="${product.id}" style="width: 54%; border:rgb(11, 68, 11) solid 1px;  ">${product.price}$ <i class="bi bi-arrow-right"></i>
    </button></div>
  </div>
  <hr>
  </div></a>`
    productContainer.innerHTML += item ;
  });
  localStorageCart();
  }

  function fragrances(){
    var furniture = products.filter(function (item){
      return item.category == "fragrances"
    });
    
    var productContainer = document.getElementById("products_container");
    furniture.forEach(product => {
      let item = `<a href="/item#${product.id}"class="nav-link"><div class="row bg-white pb-3 pt-3">
      <img src="${product.thumbnail}" alt="" class="col-lg-9 col-sm-12" style="height: 500px;">
      <div class="col-lg-3 col-sm-12  pt-2">
        <p class="pt-5" style="color: rgb(194, 167, 167);">FEATURED PRODUCT</p>
        <h3 class="title">${product.title}</h3>
        <hr style="width: 20%; height: 3px; color:  rgb(255, 196, 0);" >
        <p class="">${product.description}</p>
        <div ><button class="priceBtn" data-id="${product.id}" style="width: 54%; border:rgb(11, 68, 11) solid 1px;  ">${product.price}$ <i class="bi bi-arrow-right"></i>
      </button></div>
    </div>
    <hr>
    </div></a>`
      productContainer.innerHTML += item ;
    });
    localStorageCart();
    }
    function skincare(){
      var furniture = products.filter(function (item){
        return item.category == "skincare"
      });
      
      var productContainer = document.getElementById("products_container");
      furniture.forEach(product => {
        let item = `<a href="/item#${product.id}"class="nav-link"><div class="row bg-white ">
        <img src="${product.thumbnail}" alt="" class="col-lg-7 col-sm-12" style="height: 500px;">
        <div class="col-lg-3 col-sm-12  ">
          <p class="pt-5" style="color: rgb(194, 167, 167);">FEATURED PRODUCT</p>
          <h3 class="title">${product.title}</h3>
          <hr style="width: 20%; height: 3px; color:  rgb(255, 196, 0);" >
          <p class="">${product.description}</p>
          <div ><button class="priceBtn" data-id="${product.id}" style="width: 54%; border:rgb(11, 68, 11) solid 1px;  ">${product.price}$ <i class="bi bi-arrow-right"></i>
        </button></div>
      </div>
      <hr>
      </div></a>`
        productContainer.innerHTML += item ;
      });
      localStorageCart();
      }
      
      function localStorageCart() {

        var priceBtn = document.querySelectorAll(".priceBtn");
 
for (var i of priceBtn){
  i.addEventListener("click",function(event){
    var productId = this.getAttribute('data-id') ;
    var selectedProduct = products.find (function(item){
      return item.id == productId
    })
    console.log(selectedProduct)
    cart.push(selectedProduct);
    localStorage.setItem("cart",JSON.stringify(cart))
  })

}
      }