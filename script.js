
const days=document.querySelector(".days");
prevNextButton = document.querySelectorAll("button");
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

//to show the month and the actual date above on the calender
document.querySelector(".month h1").innerHTML=monthsOfYear[today.getMonth()];
document.querySelector(".month p").innerHTML=today.toDateString();

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
         let isToday= i ===today.getDate()&&currentMonth===new Date().getMonth() && currentYear ===new Date().getFullYear() ? "active":"";
        listOfDays+= `<th class="${isToday}">${i}</th>`;

        
    }

    for(let i=lastDayofMonth; i<6;i++){ //create table of next month first days
        listOfDays+= `<th>${i-lastDayofMonth +1}</th>`;
        
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


let weather ={
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

/* const api=document.querySelector(".weatherApi");

fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=436dfed4d87dcee590f021623b970ea0&units=metric").then(response =>response.json())
.then(posts=>{
    posts.forEach(post => {
        const postElement=document.createElement("span")
    postElement.innerHTML=
        `<span.k>${post.main.temp}</span.k>`
             
        

    api.appendChild(postElement);
    });
    

})
.catch((error) => {
    console.log(error);
}) */
 