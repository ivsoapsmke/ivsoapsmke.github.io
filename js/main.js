const productsUrl = "https://checkout.ivsoapsmke.com/checkout.php?products=all";
const productElement = document.getElementsByClassName('soapBar')[0];
var clonedProduct;

async function fetchAsync (productsUrl) {
    let response = await fetch(productsUrl);
    let data = await response.json();
    return data;
}

async function getProducts() {
    const productsData = await fetchAsync(productsUrl);
    for (const product in productsData) {
        clonedProduct = productElement.cloneNode(true);
        createProduct(productsData[product], clonedProduct);
    }
}

function createProduct(p, c) {
    console.log(p);
}

getProducts();
