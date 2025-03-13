const productsUrl = "https://checkout.ivsoapsmke.com/checkout.php?products=all";

async function fetchAsync (productsUrl) {
    let response = await fetch(productsUrl);
    let data = await response.json();
    return data;
}

console.log(fetchAsync(productsUrl));