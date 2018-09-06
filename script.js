var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var button = document.getElementById('download');

var context = document.getElementById('canvas').getContext("2d");

$('#canvas').mousedown(function (e) {
    clearCanvas();
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});

$('#canvas').mousemove(function (e) {
    if (paint) {
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
    }
});

$('#canvas').mouseup(function (e) {
    paint = false;
});

$('#canvas').mouseleave(function (e) {
    paint = false;
});


function addClick(x, y, dragging) {       
   
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function redraw() {

    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas   
    
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
   
}


// Clears the canvas.
 function clearCanvas() {   
	
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

$('#clearCanvas').mousedown(function(e)
	{
		clickX = new Array();
		clickY = new Array();
		clickDrag = new Array();		
		clearCanvas();
	});

$('#predictDigit').mousedown(function(e)
	{
      
    
	});


button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});