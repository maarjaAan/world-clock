function showSelectedCity(event){
    let cityTimeZone=event.target.value;
    if(cityTimeZone === "current") {
        cityTimeZone= moment.tz.guess();
    }
    let cityTime=moment().tz(cityTimeZone);
    let cityName=cityTimeZone.split("/")[1];
     let newCitySelectElement=document.querySelector("#cities");
     newCitySelectElement.innerHTML=`     
     <div class="city">
     <div>
     <h2>${cityName}</h2>
 
     <div class="date">
        ${cityTime.format("MMMM Do YYYY")}
     </div>
     </div>
     <div class="time">
         ${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")}</small>
     </div>
</div>
</ br> <a href="index.html" class="button"><button>Go back!</button></a>
`;


}


let citySelectElement=document.querySelector("#select-city");
citySelectElement.addEventListener("change",showSelectedCity);






//Porto
function displayPortoTime(){
    let portoElement=document.querySelector("#porto");
    if(portoElement){
        let portoDateElement=portoElement.querySelector(".date");
        let portoTimeElement=portoElement.querySelector(".time");
        let portoTime=moment().tz("Europe/Lisbon");

        portoDateElement.innerHTML=portoTime.format("MMMM Do YYYY");
        portoTimeElement.innerHTML=portoTime.format("h:mm:ss [<small>]A[</small]");
    }
}
displayPortoTime();
setInterval(displayPortoTime,1000);


//Sydney
function displaySydneyTime(){
    let sydneyElement=document.querySelector("#sydney");
    if(sydneyElement){
        let sydneyDateElement=sydneyElement.querySelector(".date");
        let sydneyTimeElement=sydneyElement.querySelector(".time");
        let sydneyTime=moment().tz("Australia/Sydney");

        sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY");
        sydneyTimeElement.innerHTML=sydneyTime.format("h:mm:ss [<small>]A[</small]");
    }
}
displaySydneyTime();
setInterval(displaySydneyTime,1000);



//Cuba
function displayCubaTime(){
    let cubaElement=document.querySelector("#cuba");
    if(cubaElement){
        let cubaDateElement=cubaElement.querySelector(".date");
        let cubaTimeElement=cubaElement.querySelector(".time");
        let cubaTime=moment().tz("Cuba");

        cubaDateElement.innerHTML=cubaTime.format("MMMM Do YYYY");
        cubaTimeElement.innerHTML=cubaTime.format("h:mm:ss [<small>]A[</small]");
    }
}
displayCubaTime();
setInterval(displayCubaTime,1000);




