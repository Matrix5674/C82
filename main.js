
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width<992){
document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;
document.body.style.overflow = "hidden"; 
}

color = "black";
width_of_line = 1;
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart")
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

   
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)

{
    console.log("my_touchmove");
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;//e.clientX will give the x coordinate of the cursor on the canvas
    //when clicked.So to get the actual x coordinate on canvas with respect to the screen when clicked we do:
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
   

    
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}


//Additional Activity
function clearArea() {
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
