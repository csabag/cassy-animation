import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Coming soon...</h1>
  <canvas id="main-canvas"></canvas>
`
var animation_delay = 10;
var my_timeout = null;
var line1;
var direction = 1;
let inc=0;
let ddx = 0;
let ddy = 0;
let date = Date.now();

function setupScreen(canvas_id)
{
  var canvas = document.getElementById(canvas_id);
  var actual_width = canvas.offsetWidth;
  var actual_height = canvas.offsetHeight;
  canvas.width = actual_width;
  canvas.height = actual_height;
}

function drawScreen(canvas_id)
{
  var canvas = document.getElementById(canvas_id);
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width, canvas.height);

  ctx.beginPath();
  
  let i = 0;
  for (var k=30; k<45; k++) {
    for(var j=0; j<Math.PI*2*200; j++){
      i = j/200 
      let x = Math.sin(-i)*k/10*(Math.sin(inc*1)+20)/20;
      let y = Math.cos(i)*k/10*(Math.sin(inc*1)+20)/20;
      let delta = Math.sin(i*(4)+k+Math.sin(inc))*10+Math.sin(inc/2);
      let delta2 = Math.sin(i*(7)+k/3+Math.sin(inc/2))*10+Math.sin(inc/2);
      let delta3 = Math.sin(i*(8)+k/3+Math.sin(inc/2))*1;
      let c = Math.sin((k-30)/50)+0.0;
      ctx.fillStyle = `rgba(255, 255, 255,${c})`;
      ctx.fillRect(
        canvas.width/2 + (x * Math.max(canvas.width/10, 30) + delta+delta2+delta3)/1.5,
        canvas.height/2 + (y * Math.max(canvas.width/10, 30) + delta+delta2+delta3)/1.5,
        (2*Math.sin(inc/2)+8)/2, Math.sin(inc/3)+2);
    }
  }

  ctx.stroke();
  inc = Date.now()/1000;
}


function animate()
{
  drawScreen('main-canvas');
  my_timeout = setTimeout(animate, animation_delay);
}

function onLoad()
{
  setupScreen('main-canvas');
  drawScreen('main-canvas');
  my_timeout = setTimeout(animate, animation_delay);
}

function onResize()
{
  setupScreen('main-canvas');
  drawScreen('main-canvas');
}

window.onload = onLoad;
window.onresize = onResize;