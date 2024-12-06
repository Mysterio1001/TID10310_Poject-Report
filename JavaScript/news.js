$(document).ready(function(){
    // 先把全部消息加上selceted的類別
    $('#all-news').addClass('selected');
// 點選按鈕 變成以點選樣式 且其他按鈕回復未點選
// 點選者添加selected類別並移除其他selected的類別
    $('#all-news,#notice,#even,#breeding-info').click(function(){
        $(this).addClass('selected').css({
            'background-color':'#5d7c71',
            'color': '#FFFF',
            'border': '1px solid #FFFF'
        });

        $('.tags li').not(this).removeClass('selected').css({
            'background-color': '#FFFF',
            'color': '#728f85'
        })
    })


    //點擊事件 (750px為界線)

    if(window.innerWidth > 750){

    $('#all-news').click(function(){
        // 點選按鈕顯示全部     
        $('.news-list li').css('display','block');
    })

    $('#notice').click(function(){
        // 點選按鈕顯示公告    
        $('.notice').css('display','block');
        $('.news-list li').not('.notice').css('display','none');
    })

    $('#even').click(function(){
        // 點選按鈕顯示活動    
        $('.even').css('display','block');
        $('.news-list li').not('.even').css('display','none');
    })

    $('#breeding-info').click(function(){
        // 點選按鈕顯示情報      
        $('.breeding-info').css('display','block');
        $('.news-list li').not('.breeding-info').css('display','none');
    })    

    }else{
        $('#all-news').click(function(){
            // 點選按鈕顯示全部     
            $('.news-list li').css('display','flex');
        })
    
        $('#notice').click(function(){
            // 點選按鈕顯示公告    
            $('.notice').css('display','flex');
            $('.news-list li').not('.notice').css('display','none');
        })
    
        $('#even').click(function(){
            // 點選按鈕顯示活動    
            $('.even').css('display','flex');
            $('.news-list li').not('.even').css('display','none');
        })
    
        $('#breeding-info').click(function(){
            // 點選按鈕顯示情報      
            $('.breeding-info').css('display','flex');
            $('.news-list li').not('.breeding-info').css('display','none');
        })    
    }

    //RWD 標題調上

    $('.news-list li').each(function(){
        let newListLi = $(this);

        if(window.innerWidth > 750){
            let spanDownContent = newListLi.find('span').html() //找出標題內容
            newListLi.find('span');  //移除span
            $(newListLi).prepend(`<span>${spanDownContent}</span>`);



        }else{}



    })
    
    
    // 輪播器設定
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})
