const cartBtn = $('.cart');
const closeCartBtn = $('.close');
const cartClose = $('.cart-bg-close');
const cartSection = $('.cart-section');
function handleToggleCart() {
    cartSection.toggleClass('active');
}
cartBtn.click(handleToggleCart)

closeCartBtn.click(handleToggleCart)

cartClose.click(handleToggleCart);

const mobileMenuBtn = $('.mobile-menu-btn');
const closeMenuBtn = $('.mobile-menu-close');
const mobileMenuContainer = $('.mobile-menu-container');

function handleToggleMenu(){
    mobileMenuContainer.toggleClass('active');
}
mobileMenuBtn.click(handleToggleMenu)

closeMenuBtn.click(handleToggleMenu)

const searchBtn = $('.search');
const headerNavSearch = $('.header-nav-search');
function handleSearch() {
    headerNavSearch.toggleClass('active');
}
searchBtn.click(handleSearch)

