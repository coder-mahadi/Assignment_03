"use strict"

function dates (){
    let dates = new Date()
    let daysArray = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday"]
    let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let day = daysArray[dates.getDay()]
    let date = dates.getDay()
    let month = monthsArray[dates.getMonth()]
    let year = dates.getFullYear()

    document.querySelector(".days").innerHTML =`${day} ${date} ${month} ${year}`
}
dates()
function times(){
    let timesFromDate = new Date()
    let currentHours = timesFromDate.getHours()
    let currentMinutes = timesFromDate.getMinutes()
    let currentSeconds = timesFromDate.getSeconds()
    const ampm = currentHours>=12 ? "PM" : "AM"
    currentHours = currentHours % 12 || 12;
    currentHours = currentHours < 10 ? `0${currentHours}`: currentHours
    currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
    currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
    const time = `${currentHours} : ${currentMinutes} : ${currentSeconds} ${ampm}`

   document.querySelector(".time").innerHTML = time
}
setInterval(()=>{
    times()
},100)

//This way to simple numeric date
// let date = new Date().toLocaleDateString()
// let time = new Date().toLocaleTimeString()

