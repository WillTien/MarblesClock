var MARGIN_LEFT = 30;
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 762;
window.onload = function() {
    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight;
    MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
    MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5);
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    createRoundLine(context, 0, 20, 200, 20, 250, 20, 250, 70, 50);
}

function createRoundLine(cxt, x0, y0, x1, y1, x2, y2, R) {
    cxt.beginPath();
    cxt.moveTo(x0, y0);
    // cxt.lineTo(WINDOW_WIDTH - 10, 10);
    cxt.arcTo(x1, y1, x2, y2, R);
    ctx.lineWidth = 10;
    cxt.strokeStyle = "red";
    cxt.stroke();
    cxt.closePath();
    ctx.globalCompositeOperation = "destination-over";
}