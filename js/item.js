  var count = 0;
  var btn = document.getElementById("btn");
  var disp = document.getElementById("display");

  btn.onclick = function () {
    if (!localStorage.getItem("cart")){
      localStorage.setItem("cart","[]");
      
    }
    
      count++;
      disp.innerHTML = count;

      //*esraa & abdalrhman
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
//     } else{
//       alert("you already purchased this product")
//     }
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
// }
  }
