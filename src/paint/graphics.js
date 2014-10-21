var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var radius = 10;
ctx.lineWidth = 2 * radius;
ctx.lineCap = 'round';

function drawPoint(x,y,color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI,false);
    ctx.fill();
}

function drawLine(x1,y1,x2,y2,color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

function randomColor() {
    var r = 255 * Math.random() | 0;
    var g = 255 * Math.random() | 0;
    var b = 255 * Math.random() | 0;
    return 'rgb(' + [r,g,b].join(',') + ')';
}
