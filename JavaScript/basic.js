let wrapper = document.querySelector('.wrapper');
//監聽滾動事件
window.addEventListener('scroll', function(){
 
    console.log(window.scrollY); // 顯示當前的滾動位置
    if(window.scrollY > 30){
       wrapper.style.opacity = '0.95';
    }else{
       wrapper.style.opacity = '1';
    
    }
});




// RWD進入式選單動畫

const hamburger = document.querySelector('.hamburger');
const disableScroll = document.querySelector('body');
const rwdTranslate = document.querySelectorAll('.rwd-translate');   //選擇全部的.rwd-translate
const bodyBlack = document.querySelector('#black')

hamburger.addEventListener('click', function(){
   hamburger.classList.toggle('active');
   disableScroll.classList.toggle('active');
   bodyBlack.classList.toggle('active');

   //判斷是否為進場or返回 (是否有active)
   const hasActive = hamburger.classList.contains('active');

   // 對每個 .rwd-translate 元素加入 active 類別
   rwdTranslate.forEach(function(arry, index){

      // 如果進場is true
         if(hasActive){
            arry.style.transitionDelay = `${index * 0.1}s`   //'索引'乘以0.1s；transitionDelay: CSS屬性 延遲
         }else{     //如果是退場                    //(總數-1-'索引')*0.1s : 越前面越慢 第一個(6-1-0)*0.1=0.5
            arry.style.transitionDelay = `${(rwdTranslate.length - 1 -index) * 0.1}s`  
      }

      arry.classList.toggle('active');    
      
      
   })

});