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
