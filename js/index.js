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


//WHEEL ON NAVBAR

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('div');
  el.onwheel = zoom;

  el.addEventListener('wheel', zoom);


//
