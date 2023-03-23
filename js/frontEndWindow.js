function frontEndWindow() {
  document.getElementById('windowFrontEnd').classList.remove('disabled');
  document.getElementById('windowFrontEnd').classList.add('active');
  document.getElementById('windowBackEnd').classList.remove('active');
  document.getElementById('windowBackEnd').classList.add('disabled');
  document.getElementById('windowSoftSkills').classList.remove('active');
  document.getElementById('windowSoftSkills').classList.add('disabled');
}

