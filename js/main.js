const productsUrl = "https://checkout.ivsoapsmke.com/checkout.php?products=all";
const productElement = document.getElementsByClassName('soapBar')[0];
const productContainer = document.getElementById('soaps');
var clonedProduct;

async function fetchAsync (productsUrl) {
    let response = await fetch(productsUrl);
    let data = await response.json();
    return data;
}

async function getProducts(e) {
    const productsData = await fetchAsync(productsUrl);
    for (const product in productsData) {
        clonedProduct = e.cloneNode(true);
        createProduct(productsData[product], clonedProduct);
    }
    productElement.style.display = "none";
}

function createProduct(p, c) {
    console.log(p);
    let scented = "<span></span>";

    c.id = "elem_"+p.default_price;
    c.querySelector('.soap-price').innerHTML = "$"+ p.price +" / bar";
    c.querySelector('.soap-desc').innerHTML = p.description;
    for (var meta in p.metadata) {
        if (p.metadata.hasOwnProperty(meta)){
            if (meta == 'Scent' && p.metadata[meta] == 'Unscented') {
                scented = "<span>(Unscented)</span>";
            }
        }
    }
    for (let x = 0; x < p.images.length; x++){
        c.querySelector('.soap-pic').src = p.images[x];
        c.querySelector('.soap-pic').alt = p.name + " Bar Picture";
    }

    c.querySelector('.soap-name').innerHTML = scented+p.name;
    c.querySelector('.soap-buy').id = p.default_price;
    
    productContainer.appendChild(c);
    console.log(c);
}

getProducts(productElement);

document.querySelectorAll(".soap-buy").forEach(function(elem) {
    elem.addEventListener("click", function() {
        editCart(this.id, 1, 'add');
    });
});