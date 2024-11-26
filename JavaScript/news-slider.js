document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;
    const slideCount = document.querySelectorAll('.slide').length; // 確保是 5 張圖片

    // 更新輪播位置
    function updateSlider() {
        slides.style.transform = `translateX(-${currentSlide * 1150}px)`; // 單張圖片寬度
        // 更新圓點狀態
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // 下一張
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount; // 循環播放
        updateSlider();
    }

    // 上一張
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount; // 從第一張回到最後一張
        updateSlider();
    }

    // 點擊圓點切換
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    // 綁定按鈕事件
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // 自動輪播
    setInterval(nextSlide, 5000);
});





// $(document).ready(function(){
//     $('#all-news').click(function(){
//         // 點選按鈕顯示全部且按鈕變成已按樣式 其他變回一般模式
//         $(this).css({
//             'background-color':'#5d7c71',
//             'color': '#FFFF',
//             'border': '1px solid #FFFF'
//         });
//         $('.tags li').not(this).css({
//             'background-color': '#FFFF',
//             'color': '#728f85'
//         })
//         $('.news-list li').css('display','block');
//     })

//     $('#notice').click(function(){
//         // 點選按鈕顯示公告且按鈕變成已按樣式 其他變回一般模式
//         $(this).css({
//             'background-color':'#5d7c71',
//             'color': '#FFFF',
//             'border': '1px solid #FFFF'
//         });
//         $('.tags li').not(this).css({
//             'background-color': '#FFFF',
//             'color': '#728f85'
//         })
//         $('.notice').css('display','block');
//         $('.news-list li').not('.notice').css('display','none');
//     })

//     $('even').click(function(){
//         // 點選按鈕顯示活動且按鈕變成已按樣式 其他變回一般模式
//         $(this).css({
//             'background-color':'#5d7c71',
//             'color': '#FFFF',
//             'border': '1px solid #FFFF'
//         });
//         $().css();
//     })

//     $('breeding-info').click(function(){
//         // 點選按鈕顯示情報且按鈕變成已按樣式 其他變回一般模式
//         $(this).css({
//             'background-color':'#5d7c71',
//             'color': '#FFFF',
//             'border': '1px solid #FFFF'
//         });
//         $().css();
//     })    

// })