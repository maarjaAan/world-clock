function showSelectedCity(event){
    let cityTimeZone=event.target.value;
    let cityTime=moment().tz(cityTimeZone);
    let cityName=cityTimeZone.split("/")[1];
     let newCitySelectElement=document.querySelector(".cities");
     newCitySelectElement.innerHTML=`     
     <div class="city">
     <div>
     <h2>${cityName}</h2>
 
     <div class="date" id="date2">
        ${cityTime.format("MMMM Do YYYY")}
     </div>
     </div>
     <div class="time" id="time2
     ">
         ${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")}</small>
     </div>
</div>`;
}
let citySelectElement=document.querySelector("#select-city");
citySelectElement.addEventListener("change",showSelectedCity);




//Porto
let portoDate= moment().tz("Europe/Lisbon").format("MMMM D YYYY");
let currentDatePorto= document.querySelector("#date");
currentDatePorto.innerHTML=portoDate;

function displayPortoTime(){
    if(currentTimePorto){
    let portoTime= moment().tz("Europe/Lisbon").format("HH:mm:ss A");
let currentTimePorto= document.querySelector("#time");
currentTimePorto.innerHTML=portoTime;

}
displayPortoTime();
setInterval(displayPortoTime,1000);
}

//Sydney

let sydneyDate= moment().tz("Australia/Sydney").format("MMMM D YYYY");
let currentDateSydney= document.querySelector("#date2");
currentDateSydney.innerHTML=sydneyDate;



function displaySydneyTime(){
    if (currentTimeSydney){
    let sydneyTime= moment().tz("Australia/Sydney").format("HH:mm:ss A");
let currentTimeSydney= document.querySelector("#time2");
currentTimeSydney.innerHTML=sydneyTime;


}
displaySydneyTime();
setInterval(displaySydneyTime,1000);
}


