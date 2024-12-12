//第二、三部分輪播器方案

var swiper = new Swiper(".mySwiper", {
    loop:true
});


// 手機版本滑動提示(左)
// 第二部分
let rwdMiddle = document.querySelector('.rwd-middle');
let coverMiddle = document.querySelector('#cover-middle')

// 紀錄X座標
let startX = 0;

// 更新手指觸控點原點
rwdMiddle.addEventListener('touchstart', function(start){
    startX = start.touches[0].clientX;
});

// 監聽滑動 且 計算滑動方向&距離(太短不觸發)
rwdMiddle.addEventListener('touchmove', function(end){
    let endX = end.touches[0].clientX;

    if(endX - startX < -10){
    coverMiddle.style.opacity = '0';
    }
})


// 第三部分
let rwdExtra = document.querySelector('.rwd-extra');
let coverExtra = document.querySelector('#cover-extra')

// 紀錄X座標
let exStartX = 0;

// 更新手指觸控點原點
rwdExtra.addEventListener('touchstart', function(start){
    exStartX = start.touches[0].clientX;
});

// 監聽滑動 且 計算滑動方向&距離(太短不觸發)
rwdExtra.addEventListener('touchmove', function(end){
    let exEndX = end.touches[0].clientX;

    if(exEndX - exStartX < -10){
    coverExtra.style.opacity = '0';
    }
})

// -----------------------------------------------------

// // 手機版本滑動提示(右)
// // 第二部
// let rwdMiddle = document.querySelector('.rwd-middle');
// let coverMiddle = document.querySelector('#cover-middle')

// // 紀錄X座標
// let startX = 0;

// // 更新手指觸控點原點
// rwdMiddle.addEventListener('touchstart', function(start){
//     startX = start.touches[0].clientX;
// });

// // 監聽滑動 且 計算滑動方向&距離(太短不觸發)
// rwdMiddle.addEventListener('touchmove', function(end){
//     let endX = end.touches[0].clientX;

//     if(endX - startX < -10){
//     coverMiddle.style.opacity = '0';
//     }
// })


// // 第三部分
// let rwdExtra = document.querySelector('.rwd-extra');
// let coverExtra = document.querySelector('#cover-extra')

// // 紀錄X座標
// let exStartX = 0;

// // 更新手指觸控點原點
// rwdExtra.addEventListener('touchstart', function(start){
//     exStartX = start.touches[0].clientX;
// });

// // 監聽滑動 且 計算滑動方向&距離(太短不觸發)
// rwdExtra.addEventListener('touchmove', function(end){
//     let exEndX = end.touches[0].clientX;

//     if(exEndX - exStartX < -10){
//     coverExtra.style.opacity = '0';
//     }
// })