if (localStorage.itemAmount === undefined) {
    localStorage.setItem("itemAmount", 0);
} 

var cartAmount = parseInt(localStorage.itemAmount);
document.getElementById("amountDisplay").innerHTML = localStorage.itemAmount




// localStorage.setItem("color", "product-color");
// localStorage.setItem("pattern", "product-color");
// localStorage.setItem("material", "product-color");
// localStorage.setItem("amount", "product-color");

// document.getElementsByClassName