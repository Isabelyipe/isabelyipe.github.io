//cart item display

for (let key in localStorage) {
    console.log(key);
    if (!isNaN(key)) {
        let cartItem = JSON.parse(localStorage[key]);
        document.getElementById("cart-items").innerHTML += `
        <div class="box-cart-product">
            <img src="img/couch_pillow_1_small.png" alt="couch_pillow_1">
            <div class="box-cart-attributes">
                <p class="cart-product selected-name">
                `
                + cartItem.name +
                `</p>
                <p class="cart-product selected-price">$
                `
                + cartItem.price +
                `</p>
                <button class="product-color selected-color" type="button" style="background-color:`
                + cartItem.color +
                `
                ;"></button>
                <p class="material-button">
                `
                + cartItem.material +
                `</p>
                <p class="amount-button">
                `
                + cartItem.amount +
                `</p>
                <button class="edit">Edit</button>
                <button class="remove" onclick="remove(
                    `
                + key +
                    `
                )">Remove</button>
            </div>
        </div>
`

    }
 
}

//onclick="remove(3)"

function remove(key) {
    localStorage.removeItem(key);
    location.reload();
}


// let removeButton = document.getElementbyId('remove'); 



// if (removeButton.onclick) {
//     for (let key in localStorage) {
//         if (!isNaN(key)) {
//             let cartItem = JSON.parse(localStorage[key]);
//             localStorage.removeItem(cartItem);
//         }
//     }
// }


