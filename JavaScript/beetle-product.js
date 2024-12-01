//數量點擊按鈕

$(document).ready(function(){
//加號按鈕
    $('#button-plus').click(function(){
        //當前的值
        let nowAmount = parseInt($('#product-amount').val());

        $('#product-amount').val(nowAmount + 1);
    })


    //減號按鈕
    $('#button-minus').click(function(){
        //當前的值
        let nowAmount = parseInt($('#product-amount').val());

        //避免0及負數
        if(nowAmount > 1){
            $('#product-amount').val(nowAmount - 1);
        }
    })

})


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