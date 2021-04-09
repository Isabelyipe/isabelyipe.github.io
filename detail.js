var allBtns = document.getElementsByClassName('product-color');
var allPatterns = document.getElementsByClassName('pattern');
var checkoutButton = document.getElementById('checkoutButton');
var amountDisplay = document.getElementById('amountDisplay');

// checkoutButton
checkoutButton.addEventListener("click", function(){
    cartAmount += 1;
    amountDisplay.textContent = cartAmount;
    localStorage.setItem("itemAmount", cartAmount);
    var item = {
        name: document.getElementById("product").innerHTML,
        price: document.getElementById("price").innerHTML.slice(1),
        color: document.querySelector(".product-color.selected").style.backgroundColor,
        material: document.querySelector(".material-selection").value,
        amount: document.querySelector(".amount-selection").value
    }

    localStorage.setItem(cartAmount.toString(), JSON.stringify(item));
    console.log(JSON.parse(localStorage[cartAmount]));
})



// select color & pattern
for (let i = 0; i < allBtns.length; i++) {
    let btn = allBtns[i];
    btn.addEventListener("click", function(){
        select(btn, allBtns);
    });
}

for (let k = 0; k < allPatterns.length; k++) {
    let pattern = allPatterns[k];
    pattern.addEventListener("click", function(){
        select(pattern, allPatterns);
    });
}

function select(selectedEl, elements) {
    for (let j = 0; j < elements.length; j++) {
        elements[j].classList.remove("selected");
    }
    selectedEl.classList.add("selected");
}


// dropdown menu function
function myFunction() {
    document.querySelector(".dropdown-content").style.display = "block";
}







