// toggle cart 
const cartSection = document.querySelector('.cart-section');

// template object product 
//  { productName, id, quantity }

const productsCart = []

const updateTotal = () => {

    let total = 0;

    productsCart.forEach(product => {
        total += product.quantity * product.price
    })

    document.querySelector('.total-price').innerText = total;
}

const buildCartProductElement = (product) => {
    const productCartTemplate = document.querySelector('#cartProductTemplate');
    const fragment = productCartTemplate.content.cloneNode(true);
    const cartProductElement = fragment.querySelector('.cart-product');

    const elementName = cartProductElement.querySelector('h4 a');
    elementName.innerText = product.Name;

    const elementPrice = cartProductElement.querySelector('.price');
    elementPrice.innerText = product.price;

    const elementQuantity = cartProductElement.querySelector('.quantity');
    elementQuantity.innerText = product.quantity;

    const removeBtn = cartProductElement.querySelector('.cart-product__remove-btn');
    removeBtn.addEventListener('click', () => {
        const productIndex = productsCart.findIndex(function (cartProduct) {
            return cartProduct.id === product.id;
        })

        productsCart.splice(productIndex, 1);
        updateTotal();
        buildProductsCart();
    })

    return cartProductElement
}

const buildProductsCart = () => {
    const cartWrapper = document.querySelector('.cart-products');
    cartWrapper.innerHTML = ''
    productsCart.forEach(product => {
        const productElement = buildCartProductElement(product);
        cartWrapper.appendChild(productElement)
    });
}

export function addToCart(product) {
    cartSection.classList.add('active');

    const productIndex = productsCart.findIndex(function (cartProduct) {
        return cartProduct.id === product.id;
    })

    if (productIndex !== -1) {
        productsCart[productIndex].quantity = productsCart[productIndex].quantity + 1
        buildProductsCart();
        updateTotal();
        return;
    }

    const newProduct = {
        ...product,
        quantity: 1
    };

    productsCart.push(newProduct);

    buildProductsCart();
    updateTotal();
}
