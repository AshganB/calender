
//const days=document.querySelector(".days");
prevNextButton = document.querySelectorAll("button");
let today=new Date();

let currentMonth=today.getMonth();

let currentYear=today.getFullYear();

// let daysOfWeek =[
//     'Mon',
//     'Tue',
//     'Wed',
//     'Thr',
//     'Fri',
//     'Sat',
//     'Sun'
// ];

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

//to show the month and the actual date above on the calender
document.querySelector(".month h1").innerHTML=monthsOfYear[today.getMonth()];
document.querySelector(".month p").innerHTML=today.toDateString();

//const renderCalender =() => {
   /* let firstDayOfMonth =new Date(currentYear,currentMonth ,1).getDay(), // get first day of month
    lastDateOfMonth =new Date(currentYear,currentMonth +1,0).getDate(), //get last date of month
    lastDayofMonth=new Date(currentYear,currentMonth,lastDateOfMonth).getDay(), //get last day of month
    lastDateOfLastMonth =new Date(currentYear,currentMonth ,0).getDate(); //get last date of previous month
    let listOfDays="";
    
     for(let i=firstDayOfMonth; i>0;i--){ // create a table of previous month last days
        listOfDays+= `<th>${lastDateOfLastMonth -i +1}</th>`;
        
    } 

    for(let i=1; i<=lastDateOfMonth;i++){ //create a table of  all days of current month
         let isToday= i ===today.getDate()&&currentMonth===new Date().getMonth() && currentYear ===new Date().getFullYear() ? "active":"";
        listOfDays+= `<th class="${isToday}">${i}</th>`;

        
    }
 
     for(let i=lastDayofMonth; i<6;i++){ //create table of next month first days
        listOfDays+= `<th>${i-lastDayofMonth +1}</th>`;
        
    } 

    days.innerHTML=listOfDays;  */
/*
    let calenderTable =document.createElement("div");
    let day = 1;
    let daysInMonth = new Date(currentYear,currentMonth +1,0).getDate();
    for(let i=0; i < 6; i++){
        const row =document.createElement("tr");
        for(let j = 0; j < 7; j++){
            const cell =document.createElement("td");
            if(i === 0 && j < today){
                cell.innerText = "";
            }
            else if (day > daysInMonth){
                cell.innerText="";
            }
            else {
                cell.innerText=today;
                if(day === today.getDate()){
                    cell.classList.add("today");
                }
                day++;
            }
            row.appendChild(cell);
            console.log(row);
            console.log(cell);
        }
        
        calenderTable.appendChild(row);
        
        
    }
    const calenderContainer= document.querySelector(".calender-container");
    calenderContainer.innerHTML="";
    calenderContainer.appendChild(calenderTable);
    console.log("")
}
renderCalender();

prevNextButton.forEach(button =>{
   button.addEventListener("click", () => {
   currentMonth=button.id==="previous"? currentMonth-1 :currentMonth+1;
   document.querySelector(".month h1").innerHTML=monthsOfYear[currentMonth];

   renderCalender();
    });
}); */

function renderCalendar() {

    console.log("calender");
    const daysOfWeek = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    let firstDay = new Date(currentYear, currentMonth, 1);
    let currentDay = firstDay.getDay();
    console.log(currentDay + " is current day");
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    if (currentDay == 0) {
        currentDay = 6
      } else {
        currentDay--;
      }
      console.log(currentDay + " is current day");
    // create calendar header
    const calendarHeader = document.createElement('div');
    calendarHeader.classList.add('calendar-header');
    calendarHeader.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}`;
    
    // create calendar table
    const calendarTable = document.createElement('table');
    calendarTable.classList.add('calendar-table');
  
    // create table header with days of the week
    const tableHeader = document.createElement('tr');
    daysOfWeek.forEach((dayOfWeek) => {
      const th = document.createElement('th');
      console.log(th);
      th.innerText = dayOfWeek;
      console.log(th.innerText);
      tableHeader.appendChild(th);
    });
    calendarTable.appendChild(tableHeader);
  
    // create table rows for each day in the month
    let day = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        if (i === 0 && j < currentDay) {
          // add empty cells for days before the start of the month
          cell.innerText = '';
        } else if (day > daysInMonth) {
          // add empty cells for days after the end of the month
          cell.innerText = '';
        } else {
          // add a cell for the current day
          cell.innerText = day;
          if (day === currentDate.getDate()) {
            cell.classList.add('today');
          }
          day++;
        }
        row.appendChild(cell);
      }
      calendarTable.appendChild(row);


      /* let firstDay =new Date(currentYear,currentMonth ,1);
      let startDay=firstDay.getDay();
      if(startDay==0){
        startDay==6;
      } */
    }
  
    // add the calendar header and table to the DOM
    const calendarContainer = document.querySelector('.calendar-container');
    console.log(calendarContainer);
    calendarContainer.innerHTML = '';
    calendarContainer.appendChild(calendarHeader);
    calendarContainer.appendChild(calendarTable);


  }
  renderCalendar();

   prevNextButton.forEach(button =>{
    button.addEventListener("click", () => {
    currentMonth=button.id==="previous"? currentMonth-1 :currentMonth+1;
    document.querySelector(".month h1").innerHTML=monthsOfYear[currentMonth];

    document.querySelector('.calendar-container').innerHTML = '';
    

    renderCalendar();
     });
    });








/* let weather ={
    apiKey:"436dfed4d87dcee590f021623b970ea0",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response)=> response.json())
            .then((data)=> this.displayWeather(data));
    },
    displayWeather:function(data){
        const{name}=data;
        const{description}=data.weather[0];
        const{temp,humidity}=data.main;
        document.querySelector(".city").innerText ="Weather in "+name;
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp +"°C";
        document.querySelector(".humidity").innerText="Humidity: " +humidity+ "%";
    }
}
 */



let quote = document.getElementById("quote");
let btn = document.getElementById("btn");

const url="https://api.quotable.io/random";
//let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        console.log(item.content);
        quote.innerText=item.content;
        

    })
    .catch((error) => {
        console.log(error);
    })

//window.addEventListener("load",getQuote);
//btn.addEventListener("click",getQuote);

const api=document.querySelector(".weatherApi");

fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=436dfed4d87dcee590f021623b970ea0&units=metric")
.then(response => response.json())

.then(data=>{
    console.log(data.main);
    console.log(data.weather);
    console.log(data.weather[0].description);
    document.querySelector(".temp").innerText=data.main.temp +"°C";
    document.querySelector(".humidity").innerText=data.main.humidity +"%";
    document.querySelector(".description").innerText=data.weather[0].description;
   
    

})
.catch((error) => {
    console.log(error);
}) 
 