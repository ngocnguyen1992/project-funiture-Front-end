const cartBtn = $('.cart');
const closeCartBtn = $('.close');
const cartSection = $('.cart-section');
function handleToggleCart() {
    cartSection.toggleClass('active');
}

cartBtn.click(handleToggleCart)

closeCartBtn.click(handleToggleCart)


//mobile

const mobileMenuBtn = $('.mobile-menu-btn');
const closeMenuBtn = $('.mobile-menu-close');
const mobileMenuContainer = $('.mobile-menu-container');

function handleToggleMenu(){
    mobileMenuContainer.toggleClass('active');
}
mobileMenuBtn.click(handleToggleMenu)

closeMenuBtn.click(handleToggleMenu)