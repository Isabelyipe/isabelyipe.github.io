var allBtns = document.getElementsByClassName('product-color');
var allPatterns = document.getElementsByClassName('pattern');
var checkoutButton = document.getElementById('checkoutButton');
var amountDisplay = document.getElementById('amountDisplay');

let cartAmount = 0;

checkoutButton.addEventListener("click", function(){
    cartAmount += 1;
    amountDisplay.textContent = cartAmount;
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


// console.log(colorInnerHTML)


// .innerHTML => string, 

// .classList => array of strings (class names)
//         ["product-color", "selected"]
//            .add / .remove / .toggle

// element.classList.add("newClass") 
//=> ["product-color", "selected", "newClass"]
// => class="product-color selecteda newClass"










// .style



// var colorBtns = document.getElementsByClassName("product-color");

// // [btn1, btn2, btn3, btn4]

// for (let i = 0; i < colorBtns.length; i++) {
//     let button = colorBtns[i];
//     button.addEventListener("click", select);
// }

// function select() {
//     for (let j = 0; j < colorBtns.length; j++) {
//         colorBtns[j].classList.remove("selected");
//     }
//     this.classList.add("selected");
// }