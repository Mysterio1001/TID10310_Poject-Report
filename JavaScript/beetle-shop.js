//商品選單透明出現

const filter = document.querySelector('#filter');
const lList = document.querySelector('.l-list');
const bodyBlackShop = document.querySelector('#black');
const disableScrollShop = document.querySelector('body');

filter.addEventListener('click', function(){
    lList.classList.add('active');
    bodyBlackShop.classList.add('active');
    disableScrollShop.classList.add('active');
})

bodyBlackShop.addEventListener('click', function(){
    lList.classList.remove('active');
    bodyBlackShop.classList.remove('active');
    disableScrollShop.classList.remove('active');
})
