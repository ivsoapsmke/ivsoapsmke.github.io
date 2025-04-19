const productsUrl = "https://checkout.ivsoapsmke.com/checkout.php?products=all";

async function fetchAsync (productsUrl) {
    let response = await fetch(productsUrl);
    let data = await response.json();
    return data;
}

async function getProducts() {
    const productsData = await fetchAsync(productsUrl);
    for (const product in productsData) {
        createProduct(productsData[product]);
    }
    
}

function createProduct(p) {
    console.log(p);
}

getProducts();
