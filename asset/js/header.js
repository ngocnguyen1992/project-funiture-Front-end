const cartBtn = $('.cart');
const closeCartBtn = $('.close');
const cartClose = $('.cart-bg-close');
const cartSection = $('.cart-section');
function handleToggleCart() {
    cartSection.toggleClass('active');
}

cartBtn.click(handleToggleCart)

closeCartBtn.click(handleToggleCart)

cartClose.click(handleToggleCart)
//mobile

const mobileMenuBtn = $('.mobile-menu-btn');
const closeMenuBtn = $('.mobile-menu-close');


function handleToggleMenu(){
    mobileMenuContainer.toggleClass('active');
}
mobileMenuBtn.click(handleToggleMenu)

closeMenuBtn.click(handleToggleMenu)
