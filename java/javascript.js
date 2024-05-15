let portoDate= moment().tz("Europe/Lisbon").format("MMMM D YYYY");
let currentDatePorto= document.querySelector("#date");
currentDatePorto.innerHTML=portoDate;

let sydneyDate= moment().tz("Australia/Sydney").format("MMMM D YYYY");
let currentDateSydney= document.querySelector("#date2");
currentDateSydney.innerHTML=sydneyDate;

function displayPortoTime(){
    let portoTime= moment().tz("Europe/Lisbon").format("HH:mm:ss A");
let currentTimePorto= document.querySelector("#time");
currentTimePorto.innerHTML=portoTime;

}
displayPortoTime();
setInterval(displayPortoTime,1000);

function displaySydneyTime(){
    let sydneyTime= moment().tz("Australia/Sydney").format("HH:mm:ss A");
let currentTimeSydney= document.querySelector("#time2");
currentTimeSydney.innerHTML=sydneyTime;

}
displaySydneyTime();
setInterval(displaySydneyTime,1000);


