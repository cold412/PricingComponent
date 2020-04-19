const checkbox = document.getElementById("check");


checkbox.addEventListener("click", myFunction);



function myFunction(checkboxElem) {
    var price1 = document.getElementById("pr1")
    var price2 = document.getElementById("pr2")
    var price3 = document.getElementById("pr3")
    if (checkbox.checked) {
    price1.textContent = "$199.99"
    price2.textContent = "$249.99"
    price3.textContent = "$399.99"
    } else {
    price1.textContent = "$19.99"
    price2.textContent = "$29.99"
    price3.textContent = "$39.99"
    }
  }


