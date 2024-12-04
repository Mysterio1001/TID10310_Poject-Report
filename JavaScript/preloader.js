// 轉場動畫
// window.addEventListener('load',()=>{
//    if(window.innerWidth > 820){
   
//     let preloader = document.querySelector('#preloader');
//     let body =  document.querySelector('body');
 
//     body.classList.add('loaded');
 
//     setTimeout(()=>{  
//        preloader.classList.add('loaded'); 
//        body.classList.remove('loaded'); 
//     },1400) //1.4秒後消失
 
//     let loading = document.querySelector('#loading');
 
//     let IntervalItem = setInterval(()=>{
//        loading.textContent += " ."   //Loading加上.號
//     },400);
 
//     setTimeout(()=>{
//        clearInterval(IntervalItem);  //停止Interval
//     },1200)
//    }else{
//     let preloader = document.querySelector('#preloader');
//     preloader.style.display = "none";
//    } 
//  });



 


window.addEventListener('load',()=>{
   
    let preloader = document.querySelector('#preloader');
    let body =  document.querySelector('body');
 
    body.classList.add('loaded');
 
    setTimeout(()=>{  
       preloader.classList.add('loaded'); 
       body.classList.remove('loaded'); 
    },1400) //1.4秒後消失
 
    let loading = document.querySelector('#loading');
 
    let IntervalItem = setInterval(()=>{
       loading.textContent += " ."   //Loading加上.號
    },400);
 
    setTimeout(()=>{
       clearInterval(IntervalItem);  //停止Interval
    },1400)
   
   
 });