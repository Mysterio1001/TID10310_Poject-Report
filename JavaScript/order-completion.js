window.addEventListener('load',()=>{
    // 返回首頁事件
    let countdown = 5

    function newtimes(){
        countdown--;
        document.querySelector('#times').textContent = countdown;
    }
    
    setInterval(newtimes,1000); //倒數計時  setInterval(方法,時間) 1000毫秒執行一次
    
    setTimeout(function() {  //指定時間執行方法
                window.location.href = "./index.html"; 
            }, 5000); // 5秒（5000毫秒）


});