const API_URL=`https://api.ipgeolocation.io/timezone?apiKey=c1f95a93d15d4658b43aa33b180a50ab&tz=` ;
 console.log(API_URL);
let city=["Europe/Paris","America/New_York","Europe/Moscow","Asia/Shanghai","America/Mexico_City"];
 
let parisTime=document.getElementById("parisTime");
let newyorkTime=document.getElementById("newyorkTime");
let moscowTime=document.getElementById("moscowTime");
let shangaiTime=document.getElementById("shangaiTime");
let mexicocityTime=document.getElementById("mexicocityTime");

let btnParis=document.getElementById("paris");
let btnNewyork=document.getElementById("newyork");
let btnMoscow=document.getElementById("moscow");
let btnShanghai=document.getElementById("shanghai");
let btnMexicocity=document.getElementById("mexicocity");

async function getData(e) {
     // console.log(btnParis);
     if (e.target=="button#paris"){
          const response=await fetch(API_URL+city[0]);
          const data=await response.json();
          const {time_24} = data;
          console.log(time_24);
          parisTime.textContent=time_24;
     }
//     if (e.target=="button#newyork"){
//           const response=await fetch(API_URL+city[1]);
//           const data=await response.json();
//           const {time_24} = data;
//           console.log(time_24);
//           newyorkTime.textContent=time_24;
//      }
    
}

      
btnParis.addEventListener("click", function(e) {
      console.log(e);
    getData(e);
});
btnNewyork.addEventListener("click", function(e) {
     console.log(e);
     getData(e);
 });
btnMoscow.addEventListener("click", function() {
     getData();
 });
btnShanghai.addEventListener("click", function() {
     getData();
 });
btnMexicocity.addEventListener("click", function() {
     getData();
 });

