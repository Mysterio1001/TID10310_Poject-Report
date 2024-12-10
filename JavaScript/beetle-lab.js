// 文章搜尋



$(document).ready(()=>{
    
// 網頁版

    // 有輸入字串按鈕才啟用
    $('#articleName').on('input',function(){
        let articleName = $(this).val();

        if (articleName !==''){

            $('#searchBtn').prop('disabled', false);
        }else{
            $('#searchBtn').prop('disabled', true);
        }
        
        if(articleName === ""){
            $('.article').show();
        }
    });

    // 進行搜尋
    $('#searchBtn').on('click',function(){
        event.preventDefault(); // 防止表單提交，避免頁面刷新
        let articleName = $('#articleName').val();
        
        $('.article').each(function(){
            let titleName = $(this).data('name');

            if(titleName.indexOf(articleName)!== -1){
                $(this).show();
            }else{
                $(this).hide();
            }
        });
    });

// 手機版

// 有輸入字串按鈕才啟用
    $('#rwd-articleName').on('input',function(){
        let rwdArticleName = $(this).val();

        if (rwdArticleName !==''){

            $('#rwd-searchBtn').prop('disabled', false);
        }else{
            $('#rwd-searchBtn').prop('disabled', true);
        }
        
        if(rwdArticleName === ""){
            $('.rwd-article').show();
        }
    });

    // 進行搜尋
    $('#rwd-searchBtn').on('click',function(){
        event.preventDefault(); // 防止表單提交，避免頁面刷新
        let rwdArticleName = $('#rwd-articleName').val();
        
        $('.rwd-article').each(function(){
            let titleName = $(this).data('name');

            if(titleName.indexOf(rwdArticleName)!== -1){
                $(this).show();
            }else{
                $(this).hide();
            }
        });
    });
});

