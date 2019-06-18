// Your code goes here

//MOUSEOVER
let navLink = document.getElementById('something');

navLink.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);




//KEYDOWN
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
