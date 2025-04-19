const productsUrl = "https://checkout.ivsoapsmke.com/checkout.php?products=all";

async function fetchAsync (productsUrl) {
    let response = await fetch(productsUrl);
    let data = await response.json();
    return data;
}

async function getProducts() {
    const productsData = await fetchAsync(productsUrl);
    console.log(productsData);

    for (const p in productsData) {
        console.log(p.name);
        /*if (productsData.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value:`, productsData[key]);
        } else{
            for (const product of productsData) {
                console.log(product);
            }
        }*/
    }
    
}

getProducts();

