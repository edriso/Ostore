let productId = window.location.hash.slice(1);

/*fetching data*/
let sProduct;
fetch("../js/json_data.json")
  .then((Response) => Response.json())
  .then((data) => {
    let products = data;
    sProduct = products.find((item) => {
      return item.id == productId;
    });

    if (!sProduct) {
      window.location.replace("../pages/404.html");
    }

    let htmlProduct = `<div class="text-container">
 
<div class="allText">
<h1> ${sProduct?.title}</h1>
<p>${sProduct?.description}</p>
<p class="price">$${sProduct?.price}</p>
<div class="cart">
<a><button class="btn">Add to cart</button><a>
</div>
</div>
<img class="sneaker" src="${sProduct?.thumbnail}">
</div>`;

    document.querySelector(".content-container").innerHTML = htmlProduct;
  });

let loginStorageId = sessionStorage.getItem("loggedUserId");
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
      } else {
        window.location.href = "../pages/signup.html";
      }
    } else alert("Item already exists");
  }
};
