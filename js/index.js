function generatorClock() {
  const newHour = new Date();

  let spanHour = document.getElementById('hour')
  
  let hour = newHour.getHours();
  let minute = newHour.getMinutes();
  let ampm = hour >= 12 ? 'PM' : 'AM';
  let formatMinute = minute < 10 ? `0${minute}` : minute;
  
  spanHour.innerHTML = `${hour}:${formatMinute}${ampm}`;
}

function updateClock() {
  setInterval(() => {
    generatorClock()
  }, 60000);
}

function closedWindow(window) {
  document.querySelector(window).classList.remove('openWindow');
  document.querySelector(window).classList.add('closedWindow');
}

function myWindow(window) {
  document.querySelector(window).classList.add('openWindow');
  document.querySelector(window).classList.remove('closedWindow');
}

function openMenuStart() {
  document.getElementById('overlay').classList.remove('disabled');
  document.getElementById('overlay').classList.add('active');
}

function closedMenuStart() {
  document.getElementById('overlay').classList.remove('active');
  document.getElementById('overlay').classList.add('disabled');
}

generatorClock()
updateClock()