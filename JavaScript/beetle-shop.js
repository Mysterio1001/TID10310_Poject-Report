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

//商品搜尋(jQuery)

//如有輸入字串 按鈕啟用

$(document).ready(function(){

$('#productName').on('input', function(){
    let productName = $(this).val(); //輸入框的值
    
    if(productName !==''){
        $('#searchBtn').prop('disabled', false);
    }else{
        $('#searchBtn').prop('disabled', true); //空字串不啟用按鈕
    }

    //搜尋列空白時回復        
    if(productName ===""){
        $('.main-product ul li').show(); //顯示網頁版所有商品
        $('.rwd-product li').show();  //顯示手機版所有商品
    }
    


}); 

//(網頁版本)

$('#searchBtn').on('click', function(){
    event.preventDefault(); // 防止表單提交，避免頁面刷新
    
    let productName = $('#productName').val(); //輸入框的值
    
    //找data-name是否符合輸入值 不符合(等於-1)隱藏
    $('.main-product ul li').each(function(){
        let beetles = $(this).attr('data-name');

        if(beetles.indexOf(productName)!== -1){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
    
    
});



//(手機版本)
    
    $('#searchBtn').on('click', function(){
        event.preventDefault(); // 防止表單提交，避免頁面刷新
        
        let productName = $('#productName').val(); //輸入框的值
        
        //找data-name是否符合輸入值 不符合(等於-1)隱藏
        $('.rwd-product li').each(function(){
            let beetles = $(this).attr('data-name');
    
            if(beetles.indexOf(productName)!== -1){
                $(this).show();
            }else{
                $(this).hide();
            }
        });
    
    
    
    
    })

    });