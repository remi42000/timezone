const API_URL=`https://api.ipgeolocation.io/timezone?apiKey=c1f95a93d15d4658b43aa33b180a50ab&tz=${city}` ;
let city=["Europe/Paris","Europe/Moscow","America/NewYork","Asia/Shanghai","America/MexicoCity"];
 
let time=document.getElementById("parisTime");
let time=document.getElementById("newyorkTime");
let time=document.getElementById("moscowTime");
let time=document.getElementById("shangaiTime");
let time=document.getElementById("mexicocityTime");
let btn=document.getElementById("paris");

async function getData() {
     const response=await fetch(API_URL);
     const data=await response.json();
     const {time_24} = data;
     console.log(time_24);
     time.textContent=time_24;
}

 btn.addEventListener("click", function() {
    getData();
});

