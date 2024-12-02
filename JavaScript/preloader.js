// 轉場動畫
window.addEventListener('load',()=>{
    let preloader = document.querySelector('#preloader');
    let body =  document.querySelector('body');
 
    body.classList.add('loaded');
 
    setTimeout(()=>{  
       preloader.classList.add('loaded'); 
       body.classList.remove('loaded'); 
    },1400) //1.4秒後消失
 
    let loading = document.querySelector('#loading');
 
    let Interval = setInterval(()=>{
       loading.textContent += " ."   //Loading加上.號
    },400);
 
    setTimeout(()=>{
       clearInterval(Interval);  //停止Interval
    },1200)
 
 });
 