
const days=document.querySelector(".days");
prevNextButton = document.querySelectorAll("#previous #next");
let today=new Date();
console.log(today);
let currentMonth=today.getMonth();
console.log(currentMonth);
let currentYear=today.getFullYear();
console.log(currentYear);
console.log(today);
let daysOfWeek =[
    'Mon',
    'Tue',
    'Wed',
    'Thr',
    'Fri',
    'Sat',
    'Sun'
];
console.log(daysOfWeek);
let monthsOfYear =[
    'January',
    'February',
    'March',
    'April',
    'Mai',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const renderCalender =() => {
    let firstDayOfMonth =new Date(currentYear,currentMonth ,1).getDay(), // get first day of month
    lastDateOfMonth =new Date(currentYear,currentMonth +1,0).getDate(), //get last date of month
    lastDayofMonth=new Date(currentYear,currentMonth,lastDateOfMonth).getDay(), //get last day of month
    lastDateOfLastMonth =new Date(currentYear,currentMonth ,0).getDate(); //get last date of previous month
    let listOfDays="";
    
    for(let i=firstDayOfMonth; i>0;i--){ // create a table of previous month last days
        listOfDays+= `<th>${lastDateOfLastMonth -i +1}</th>`;
        
    }

    for(let i=1; i<=lastDateOfMonth;i++){ //create a table of  all days of current month
         let isToday=1 ===today.getDate()&&currentMonth===new Date().getMonth() && currentYear ===new Date().getFullYear() ? "active":"";
        listOfDays+= `<th>${i}</th>`;
        
    }

    for(let i=lastDayofMonth; i<6;i++){ //create table of next month first days
        listOfDays+= `<th>${i-lastDateOfLastMonth +1}</th>`;
        
    }

    days.innerHTML=listOfDays;
}
renderCalender();

prevNextButton.forEach(button =>{
   button.addEventListener("click", () => {
   currentMonth=button.id==="previous"? currentMonth-1 :currentMonth+1;
   renderCalender();
    });
});
 