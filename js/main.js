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
    c.querySelector('.soap-name').innerHTML = p.name;
    c.querySelector('.soap-price').innerHTML = "$"+ p.price +" / bar";
    c.querySelector('.soap-desc').innerHTML = p.description;
    for(let x = 0; x < p.images.length; x++){
        c.querySelector('.soap-pic').src = p.images[x];
        c.querySelector('.soap-pic').alt = p.name + " Bar Picture";
    }
    productContainer.appendChild(c);
    console.log(c);
}

getProducts(productElement);
