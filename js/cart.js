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

if (!sessionStorage.getItem("loggedUserId")) {
  window.location.href = "../pages/signup.html";
}

function updateTotalPrice() {
  cartItemRow = document.querySelectorAll(".cart-item");
  itemPrice = document.querySelectorAll(".item-price");
  itemQuantityInput = document.querySelectorAll("input[name=itemQuantity]");

  let total = 0;
  if (cartItemRow.length) {
    for (let i = 0; i < cartItemRow.length; i++) {
      cartItemRow[i];
      let price = parseFloat(itemPrice[i].innerText);
      let quantity = parseFloat(itemQuantityInput[i].value);
      total += price * quantity;
      totalCostAtNav.innerText = `${total} $`;
      totalCostAtFooter.innerText = `${total} $`;
    }
  } else {
    totalCostAtNav.innerText = `${0}`;
    totalCostAtFooter.innerText = `${0}`;
  }
}
const item = document.createElement("tr");

function addItemsToCart() {
  cart?.forEach((element) => {
    let itemRowNumber = document.querySelectorAll(".cart-item").length;
    if (element != null) {
      tableBody.innerHTML += `
      <tr class="cart-item">
          <th scope="row">${itemRowNumber + 1}</th>
          <td><img src="${element.thumbnail}"
                  alt="" width="10%">
                  <span class="item-title">${element.title}</span>        
          </td>
          <td class="text-center">
              <input id="${
                element.id
              }" type="number" name="itemQuantity" value="${
        element.quantity
      }" size="2">
      </td>
      <td class="price text-center">
          <span class="item-price">${element.price}</span>
      </td>
      <td>
          <i id="${
            element.id
          }" class="remove-btn bi bi-x-square text-danger fs-2"></i>
      </td>
  </tr>
      `;
    }
  });

  updateTotalPrice();
}

tableBody.addEventListener("click", function (event) {
  let clickedItem = event.target;

  if (clickedItem.classList.contains("remove-btn")) {
    clickedItem.parentElement.parentElement.remove();
    updateTotalPrice();
    removeFromCartStorage(clickedItem.id);
    checkCartIsEmpty();
  }
});

fetch("../js/json_data.json")
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

// function addItemToCartStorage(productId) {
//   let prod = products.find(function (item) {
//     return item.id == productId;
//   });

//   if (cart.length == 0) {
//     cart.push(prod);
//   } else {
//     let result = cart.find((element) => element?.id == productId);
//     if (result === undefined) {
//       cart.push(prod);
//     }
//     //  else {
//     //   alert("you already purchased this product");
//     // }
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

function removeFromCartStorage(productId) {
  let temp = cart.filter((item) => item?.id != productId);
  localStorage.setItem("cart", JSON.stringify(temp));
}

function updateCartStorageQuantity(productId, quantity) {
  for (let product of cart) {
    if (product?.id == productId) {
      product.quantity = quantity;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

addItemsToCart();

for (let i = 0; i < itemQuantityInput.length; i++) {
  itemQuantityInput[i].addEventListener("change", function (event) {
    let targetElement = event.target;
    if (isNaN(targetElement.value) || targetElement.value <= 0) {
      targetElement.value = 1;
    }
    let quantity = parseInt(targetElement.value);
    updateTotalPrice();
    updateCartStorageQuantity(targetElement.id, quantity);
  });
}

function checkCartIsEmpty() {
  let confirmationBtn = document.querySelector(".confirm-btn");
  let cartItemRowLength = document.querySelectorAll(".cart-item").length;
  // let cartLength = localStorage.getItem("cart").length;
  if (cartItemRowLength == 0) {
    confirmationBtn.setAttribute("disabled", "disabled");
  }
}

checkCartIsEmpty();

//! 2- TODO : check bootstrap
//! in case of updating price error, check the above for loop (ask idris)
