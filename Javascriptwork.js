const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');
const openEye = document.getElementById("open-eye")
  let i = document.createElement("i")
  togglePasswordButton.prepend(i);
  i.setAttribute("class" , "fas fa-eye-slash");
  i.style.display = "none";
  openEye.style.display = 'inline';
togglePasswordButton.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  if(openEye.style.display == 'inline') {
     i.style.display = "inline";
    openEye.style.display = "none";
  } else {
    i.style.display = "none"
    openEye.style.display = "inline";
  }
});