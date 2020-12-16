/*  i Manan Patel,000826892 , certify that this material is my original work. 
No other person's work has been used without due acknowledgment and i have not made 
my work available to anyone else.*/
var canvas = document.getElementById("myCanvas");
canvas.addEventListener("click",draw);
var startBtn=document.getElementById("Play");
var ctx = canvas.getContext("2d");
var ballRadius = 40;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
function play(){
    ctx.beginPath();
    ctx.fill();
    clickable;
    reset.style.display="none";
    ctx.closepath();
}
function ball() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = document.getElementById("MyColorPicker").value;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startBtn.style.display="none";
    ball();
    
    
    
    if(x + dx > canvas.width-(ballRadius/2) || x + dx < (ballRadius/2)) {
        dx = -dx;
    }
    if(y + dy > canvas.height-(ballRadius/2) || y + dy < (ballRadius/2)) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}
function reset(){
    var resetBtn=document.getElementById("reset")
    resetBtn.addEventListener('click',function(){draw();});
}
play();
setInterval(draw,5);