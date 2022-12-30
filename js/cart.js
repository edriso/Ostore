let plusBtn = document.querySelectorAll(".plus");
let minusBtn = document.querySelectorAll(".minus");
let removeBtn = document.querySelectorAll(".remove-btn");
let itemPrice = document.querySelectorAll(".item-price");
let cartItemRow = document.querySelectorAll(".cart-item");
let itemTitle = document.querySelectorAll(".item-title");
let tableBody = document.querySelector("tbody");
let totalCostAtNav = document.querySelectorAll(".cost")[0];
let totalCostAtFooter = document.querySelectorAll(".cost")[1];
let itemQuantityInput = document.querySelectorAll("input[name=itemQuantity]");

//to not adding the same item to the cart
for (let i = 0; i < itemTitle.length; i++) {
  //check if the item title in the cart row = the item title from the add to cart
  if (itemTitle.innerText /* == title from home page */) {
    alert("this item is already added to the cart");
    // return;
  }
}

function updateTotalPrice() {
  cartItemRow = document.querySelectorAll(".cart-item");
  itemPrice = document.querySelectorAll(".item-price");
  itemQuantityInput = document.querySelectorAll("input[name=itemQuantity]");

  let total = 0;
  if (cartItemRow.length) {
    for (let i = 0; i < cartItemRow.length; i++) {
      console.log(cartItemRow);
      cartItemRow[i];
      let price = parseFloat(itemPrice[i].innerText);
      let quantity = parseFloat(itemQuantityInput[i].value);
      total += price * quantity;
      console.log(total);
      totalCostAtNav.innerText = `${total} $`;
      totalCostAtFooter.innerText = `${total} $`;
    }
  } else {
    totalCostAtNav.innerText = `${0}`;
    totalCostAtFooter.innerText = `${0}`;
  }
}
const item = document.createElement("tr") 

function addItemsToCart() {
  cart.forEach((element) => {
    console.log(element);
    tableBody.innerHTML += `
    <tr class="cart-item">
        <th scope="row">1</th>
        <td><img src="${element.thumbnail}"
                alt="" width="10%">
                <span class="item-title">${element.title}</span>        
        </td>
        <td class="text-center">
            <i class="minus bi bi-bag-dash-fill text-danger fs-3"></i>
            <input type="number" name="itemQuantity" value="1" size="2">
            <i class="plus bi bi-bag-plus-fill text-success fs-3"></i>
    </td>
    <td class="price text-center">
        <span class="item-price">${element.price}</span>
    </td>
    <td>
        <i class="remove-btn bi bi-x-square text-danger fs-2"></i>
    </td>
</tr>
    `;
  });

  updateTotalPrice();
}

tableBody.addEventListener("click", function (event) {
  // console.log(event.target);
  let clickedItem = event.target;
  if (clickedItem.classList.contains("remove-btn")) {
    clickedItem.parentElement.parentElement.remove();
    updateTotalPrice();
  }
});
// function removeCartItem(event) {
//   console.log("jjjjjj");
//   event.target.parent;
// }

fetch("/json_data.json")
  .then((response) => response.json())
  .then(function (data) {
    localStorage.setItem("my products", JSON.stringify(data));
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  });

//variables to hold the data
let products = JSON.parse(localStorage.getItem("my products"));
let cart = JSON.parse(localStorage.getItem("cart"));
console.log(products[0].title);

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

function removeFromCartStorage(productId) {
  console.log(cart);
  let temp = cart.filter((item) => item?.id != productId);
  localStorage.setItem("cart", JSON.stringify(temp));
}

function updateCartStorageQuantity(productId, quantity) {
  for (let product of cart) {
    if (product.id == productId) {
      product.quantity = quantity;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
// itemTitle[0].innerHTML=`<span class="item-title">${products[2].title}</span>`

addItemToCartStorage(1);
addItemToCartStorage(2);
removeFromCartStorage(1);
addItemsToCart();

//? min 26 for add items to cart
//? min 30 for check if the item added twice
//? min 36 if you have a problem with new add buttons
// TODO : REPlACE Input field by add & remove buttons
// TODO : Add 2 decimal to the price
// TODO : Clean the code (ex. add variables & methods)
// TODO : maybe you need to add Ready state
