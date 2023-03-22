const newHour = new Date();

const showHour = true;

let spanHour = document.getElementById('hour')

let hour = newHour.getHours();
let minute = newHour.getMinutes();
let ampm = hour >= 12 ? 'PM' : 'AM';

spanHour.innerHTML = `${hour}:${minute}${ampm}`;

