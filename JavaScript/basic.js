let wrapper = document.querySelector('.wrapper');
//監聽滾動事件
window.addEventListener('scroll', function(){
 
    console.log(window.scrollY); // 這行會顯示當前的滾動位置
    if(window.scrollY > 30){
       wrapper.style.opacity = '0.95';
    }else{
       wrapper.style.opacity = '1';
    
    }
});