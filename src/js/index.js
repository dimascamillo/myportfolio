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

function closedWindow() {
  document.querySelector('.windowMySkills').classList.remove('openWindow');
  document.querySelector('.windowMySkills').classList.add('closedWindow');
}

function myskills() {
  document.querySelector('.windowMySkills').classList.add('openWindow');
  document.querySelector('.windowMySkills').classList.remove('closedWindow');
}

generatorClock()
updateClock()