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


//DRAG DROP

var dragged;

document.addEventListener("drag", function(event) {
}, false);


//FOCUS

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});

//WIDTH
const widthOutput = document.querySelector('#width');
function reportWindowSize() {
    widthOutput.textContent = window.innerWidth;
  }
  window.onresize = reportWindowSize;


// scroll

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


//select
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);



//DBCLICK added to ISLAND getaway btn


const workBtn = document.getElementById('work-btn')

workBtn.addEventListener('dblclick', function () {
    console.log('I was clicked')
});

