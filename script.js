const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

function emailCheck(){
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email.match(pattern)){
      msg.innerHTML = "Your email is valid";
      msg.style.color = "green";
  }else{
      msg.innerHTML = "Your email is invalid";
      msg.style.color = "red";
  }
}

function emailSubmit(){
  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Log data to the console
  console.log('Form Submitted!');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);
}
