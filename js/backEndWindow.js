function backEndWindow() {
  document.getElementById('windowBackEnd').classList.remove('disabled');
  document.getElementById('windowBackEnd').classList.add('active');
  document.getElementById('windowFrontEnd').classList.remove('active');
  document.getElementById('windowFrontEnd').classList.add('disabled');
  document.getElementById('windowSoftSkills').classList.remove('active');
  document.getElementById('windowSoftSkills').classList.add('disabled');
}

