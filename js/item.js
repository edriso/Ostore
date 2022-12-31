  let products
  let sProduct
  /*fetching data*/
  fetch("../js/json_data.json").then((Response)  =>  Response.json()).then(data => {
    let productId=1
    products = data
    sProduct = products.find((item) => {
        return item.id = productId
    }) 
    
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

</div>`
document.querySelector(".content-container").innerHTML=htmlProduct
})
  
  
  var count = 0;
  var btn = document.getElementById("btn");
  var disp = document.getElementById("display");

  document.querySelector(".content-container").onclick = function (e) {
    if (e.target.classList.contains("btn")) {
        if (!localStorage.getItem("cart")){
            localStorage.setItem("cart","[]");
            
          }

        console.log(sProduct);

    }
    
    
    //   count++;
    //   disp.innerHTML = count;

     
}
