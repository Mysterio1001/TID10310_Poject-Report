// 生日下拉式選單

let YYYY = new Date().getFullYear(); //取得今年
let MM = new Date().getMonth()+1; //取得當月
let DD = new Date().getDate(); //取得當日

console.log(`${YYYY}年,${MM}月,${DD}日`);

// 年選單
let years = document.querySelector('#birthday-year');

for(let y=YYYY-70; y<= YYYY; y++){
    let option = document.createElement('option');

    option.value = y;     //option的value
    option.innerText = y;   //option的內文

    if(y === YYYY){
    option.selected = true; //option添加 selected屬性
    }

    years.appendChild(option);  //加入<select> (父層)
}

//月選單

let months = document.querySelector('#birthday-month');

for(let m=1; m<= 12; m++){
    let option = document.createElement('option');

    option.value = m;     //option的value
    option.innerText = m;   //option的內文

    if(m === MM){
    option.selected = true; //option添加 selected屬性
    }

    months.appendChild(option);  //加入<select> (父層)
}

//日選單

let days = document.querySelector('#birthday-day');
let monthDays;

//判斷是否閏年
if([4,6,9,11].includes(MM)){
    monthDays = 30;
}
else if([1, 3, 5, 7, 8, 10, 12].includes(MM)){
    monthDays = 31;
}else if(MM === 2){
    if((YYYY % 4 === 0 && YYYY % 100 !== 0) || (YYYY % 400 === 0)){
        monthDays = 29;
    }else{
        monthDays = 28;
    }
}

for(let d=1; d<= monthDays; d++){
    let option = document.createElement('option');

    option.value = d;     //option的value
    option.innerText = d;   //option的內文

    if(d === DD){
    option.selected = true; //option添加 selected屬性
    }

    days.appendChild(option);  //加入<select> (父層)
}