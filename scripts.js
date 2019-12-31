var canvas;
var ctx;
var width = 0;
var height = 0;
var timer;
var updateStarted = false;
var touches = [];

function touchHandler(event) {
    event.preventDefault();
    touches = event.touches;
}

function updateTouch() {

    if (!updateStarted) {
        
        updateStarted = true;
        let newWidth = screen.width-5;
        let newHeight = screen.height;
        if ((width != newWidth) || (height != newHeight)) {
            canvas.width = newWidth;
            canvas.height = newHeight;
        }
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.font = "30px Verdana";
        ctx.fillText(touches.length + " fingers detected.", 40, 40);

        let i; let rect = canvas.getBoundingClientRect();
        for (i = 0; i < touches.length; i++) {
            ctx.beginPath();
            ctx.arc(touches[i].pageX - rect.left, touches[i].pageY - rect.top, 20, 0, 2*Math.PI);
            ctx.fillStyle = "rgb(0, 255, 0)";
            ctx.fill();
            ctx.stroke();
        }
        updateStarted = false;
    }
}

function initMultitouch() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	timer = setInterval(updateTouch, 10);
    document.addEventListener('touchend', function() {
        touchHandler(event);
    });
    document.addEventListener('touchmove', function(event) {
        touchHandler(event);
    });
    document.addEventListener("touchcancel", function(event) {
        touchHandler(event);
    });

    document.addEventListener('touchstart', function(event) {
        touchHandler(event);
});
};