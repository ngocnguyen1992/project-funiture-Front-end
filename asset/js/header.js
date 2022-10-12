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
// closeCartBtn.addEventListener('click', () =>{
//     cartClose.style.tranform = "translateX(0)";
//     cartSection.style.transform = "translateX(0)"
// })
// cartSection.addEventListener('click', () =>{
//     cartClose.style.tranform = "translateX(-100%)";
//     cartSection.style.transform = "translateX(100%)";
// })
//animation
//mobile

const mobileMenuBtn = $('.mobile-menu-btn');
const closeMenuBtn = $('.mobile-menu-close');


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

