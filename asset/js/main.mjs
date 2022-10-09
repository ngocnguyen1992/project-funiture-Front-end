import { addToCart } from "./cart.js";
import { API_URL, GET_DATA } from "./utils.js";

function buildProductsElements(products) {
    const productList = document.querySelector('.products__list');
    productList.innerHTML = '';
    products.forEach((product) => {
        const productElement = buildProductElement(product);
        productList.appendChild(productElement);
    })
}

function buildProductElement(product) {
    const productElementTemplate = document.querySelector('#productTemplate');
    const productElementFragment = productElementTemplate.content.cloneNode(true);
    const productElement = productElementFragment.querySelector('.product-item');

    const productName = productElement.querySelector('.name');
    productName.innerText = product.name;

    const productPrice = productElement.querySelector('.price');
    productPrice.innerText = product.price;

    const productATCBtn = productElement.querySelector('.product__image--cart');
    console.log(productATCBtn)
    productATCBtn.addEventListener('click', function () {
        addToCart(product)
    })

    return productElement
}

fetch(`${API_URL}/products`).then((json) => {
    return json.json()
}).then(data => {
    buildProductsElements(data);
})