let monthName=document.querySelector(".MonthName");
let week=document.getElementById("week")
let monthName2=document.querySelector(".monthName2")
let realDate=document.querySelector(".realDate")
let year=document.getElementById("year")
let monthArray=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
let monthArray2=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
let weekArray=["SUN","MON","TUE","WED","THU","FRI","SAT"]
let date=new Date();
let month=date.getMonth();
monthName.textContent=monthArray[month];
let weekName=date.getDay();
week.textContent=weekArray[weekName];
let month2=date.getMonth();
monthName2.textContent=monthArray2[month2]

let date1=date.getDate();
realDate.textContent=date1;

let year1=date.getFullYear();
year.textContent=year1
// ===================================
let days=document.querySelector(".days");
const lastDay=new Date(new Date().getFullYear(),month +1,0).getDate();
// ================
const firstWeek=new Date(new Date().getFullYear(),month,1).getDay() -1;//-1 because in javascript weekday start from sunday but in our case its monday
// ==============
let dayss="";
for(let i=firstWeek;i>0;i--){
    dayss+=`<div class=empty></div>`
}


// --------
for(let i=1;i<=lastDay;i++){

    if(i===new Date().getDate()){
        dayss+=`<div class="today">${i}</div>`;
    }
    else{
        dayss+=`<div>${i}</div>`;
    }

    

}
days.innerHTML=dayss;
// ===================================
let hour=document.getElementById("hour");
let minute=document.getElementById("minute")
let second=document.getElementById("second")

function calling(){
let newdate=new Date();
setTimeout(calling,1000);
hour.textContent=newdate.getHours();
minute.textContent=newdate.getMinutes();
second.textContent=newdate.getSeconds();

}
calling()
// =======AM PM
let amPm=document.getElementById("am");
console.log(amPm)
if(hour<=12){
    amPm.textContent="AM";
}
else{
    amPm.textContent="PM";
}

