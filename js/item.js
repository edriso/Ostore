let sProduct;
/*fetching data*/
fetch("../js/json_data.json")
  .then((Response) => Response.json())
  .then((data) => {
    let productId = 1;
    let products = data;
    sProduct = products.find((item) => {
      return (item.id = productId);
    });

    let htmlProduct = `<div class="text-container">
 
<div class="allText">
<h1> ${sProduct.title}</h1>
<p>${sProduct.description}</p>
<p class="price">$${sProduct.price}</p>



<div class="cart">
<a><button class="btn">Add to cart</button><a>
</div>
<div class="garag">
<div >Button Clicked <span id="display">0</span> Times </div>
</div>
</div>
<img class="sneaker" src="${sProduct.thumbnail}">

</div>`;
    document.querySelector(".content-container").innerHTML = htmlProduct;
  });

var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");
let loginStorageId = sessionStorage.getItem("loggedUserId")


document.querySelector(".content-container").onclick = function (e) {
  if (e.target.classList.contains("btn")) {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
    let cartItems = JSON.parse(localStorage.getItem("cart"));

    if (!cartItems.some((item) => item.id == sProduct.id)) {
        if (loginStorageId) {
            cartItems.push(sProduct);
            localStorage.setItem("cart", JSON.stringify(cartItems));
    
        }else{
            window.location.href = "../pages/signup.html";
        }
    } else alert("Item already exists");

    console.log(sProduct);
  }

  //   count++;
  //   disp.innerHTML = count;
};

/*esraa & abdalrhman
function addItemToCartStorage(productId) {
  let prod = products.find(function (item) {
    return item.id == productId;
  });

  if (cart.length == 0) {
    cart.push(prod);
  } else {
    let result = cart.find((element) => element?.id == productId);
    if (result === undefined) {
      cart.push(prod);
    } else{
      alert("you already purchased this product")
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}*/
