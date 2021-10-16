console.log('script start...')
let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = "<b>Good Evening, User<b>";
    // add name as template literal
}else if (hourNow > 12) {
    greeting = "<b>Good Afternoon</b>";
} else if (hourNow > 0) {
    greeting = '<b>Good Morning</b>';
} else { greeting = 'Welcome (calculator error occured)';
}

document.getElementById('lblGreetings').innerHTML =
'<b>' + greeting + '</b> and Welcome to Bizzabo';

console.log('pulled date successfully')

$(document).ready(function () {
    getEvents()
})

 // let today = new Date();
 let currentMonth = today.getMonth();
 let currentYear = today.getFullYear();
 let selectYear = document.getElementById("year");
 let selectMonth = document.getElementById("month");
 
 let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
 let monthAndYear = document.getElementById("monthAndYear");
 showCalendar(currentMonth, currentYear);
 
 
 function next() {
     currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
     currentMonth = (currentMonth + 1) % 12;
     showCalendar(currentMonth, currentYear);
 }
 
 function previous() {
     currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
     currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
     showCalendar(currentMonth, currentYear);
 }
 
 function jump() {
     currentYear = parseInt(selectYear.value);
     currentMonth = parseInt(selectMonth.value);
     showCalendar(currentMonth, currentYear);
 }
 
 function showCalendar(month, year) {
 
     let firstDay = (new Date(year, month)).getDay();
     let daysInMonth = 32 - new Date(year, month, 32).getDate();
 
     let tbl = document.getElementById("calendar-body"); // body of the calendar
 
     // clearing all previous cells
     tbl.innerHTML = "";
 
     // filing data about month and in the page via DOM.
     monthAndYear.innerHTML = months[month] + " " + year;
     selectYear.value = year;
     selectMonth.value = month;
 
     // creating all cells
     let date = 1;
     for (let i = 0; i < 6; i++) {
         // creates a table row
         let row = document.createElement("tr");
 
         //creating individual cells, filing them up with data.
         for (let j = 0; j < 7; j++) {
             if (i === 0 && j < firstDay) {
                 let cell = document.createElement("td");
                 let cellText = document.createTextNode("");
                 cell.appendChild(cellText);
                 row.appendChild(cell);
             }
             else if (date > daysInMonth) {
                 break;
             }
 
             else {
                 let cell = document.createElement("td");
                 let cellText = document.createTextNode(date);
                 if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                     cell.classList.add("bg-info");
                 } // color today's date
                 cell.appendChild(cellText);
                 row.appendChild(cell);
                 date++;
             }
 
 
         }
 
         tbl.appendChild(row); // appending each row into calendar body.
     }
 
 
 }


function getEvents() {

    var settings = {
        "async": true,
        
        "crossOrigin": true,
        "crossDomain": true,
        "url": "https://api.bizzabo.com/api/events",
        "method": "GET",
        "Content-type": "application/x-www-form-urlencoded",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
        "data": "{}"
    }


    $.ajax({
        url: "https://api.bizzabo.com/api/events",
        mode:'cors',
         credentials: 'include',
        async: true,
        method: "GET",
        crossOrigin: true,
        crossDomain: true,
        // xhrFields: {
        //     withCredentials: true
        // },
        // "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-type": "application/x-www-form-urlencoded",
        headers: {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "https://api.bizzabo.com/api/events",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
// Access-Control-Allow-Headers: Authorization, Lang
        }
    }).done(function (data) {
        console.log(data);
    }
    
    )}

    

   
