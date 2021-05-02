const nav = document.querySelector('.navbar');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY > navTop) {    
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', fixedNav);

// Modal 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Toggle Menu 
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const closeBtn = document.getElementById("menu-btn")
closeBtn.addEventListener("click" , openNav)