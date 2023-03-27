function generatorClock() {
  const newHour = new Date();

  let spanHour = document.getElementById('hour')
  
  let hour = newHour.getHours();
  let minute = newHour.getMinutes();
  let formatMinute = minute < 10 ? `0${minute}` : minute;
  
  spanHour.innerHTML = `${hour}:${formatMinute}`;
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

function validityForm() {
  let form = document.querySelector('form');
  let formInputs = document.querySelectorAll('input')
  let verify = "";
  let msgError = document.createElement('span');
  form.appendChild(msgError);

  let mensagem = document.getElementById('mensagem')

  formInputs.forEach(input=> {

    if([input.value].includes(verify) && mensagem.value == verify) {
      input.classList.add('inputError')
      input.setAttribute('placeholder', 
      `Por favor preencha o campo ${input.name} corretamente`)

      mensagem.classList.add('inputError')
      mensagem.setAttribute('placeholder', 
      `Por favor preencha o campo Mensagem corretamente`)

    } else if([input.value].includes(verify) && mensagem.value !== verify){
      input.classList.remove('inputError')
      input.value = ""
      mensagem.value = ""
      mensagem.classList.remove('inputError')
    }
  })
}

const enviar = document.getElementById('enviar')
enviar.addEventListener('click', (e)=> {
  e.preventDefault()
  validityForm();
})

generatorClock()
updateClock()