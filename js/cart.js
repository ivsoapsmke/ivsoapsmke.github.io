var cartContents = {};

function editCart(price_id, qty, type){
    if (price_id in cartContents) {
        cartContents[price_id] = cartContents[price_id]+qty;
    } else {
        cartContents[price_id] = qty;
    }
    console.log(cartContents);
}

function checkoutCart(cart){
    let cartArray = [];
    for (var price_id in cart) {
        if (cart.hasOwnProperty(price_id)) {
            let productArray = [];
            productArray["price"] = price_id;
            productArray["quantity"] = cart[price_id];
            cartArray.push(productArray);
        }
    }

    console.log(cartArray);
}