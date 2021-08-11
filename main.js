canvas = document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

rover_x = 10;

rover_y = 10;

rover_widht = 100;

rover_height = 100;

mass_image = ["mars.jpg","mass_1.jpg","mass_2jpg.jpg","mass_3.jpg","mass_4.jpg","mass_5.jpg","mass_6.jpg","mass_7.jpg","mass_8.jpg","mass_9.jpg"];

random_number=Math.floor(Math.random()*10);

background_image = mass_image[random_number];

rover_image = "rover.png";

function add() {
    background_imageTag = new Image(); 
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_widht, rover.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
      if(keyPressed=='38')
      {
          up();
          console.log("up");
      }
      if(keyPressed == '40')
      {
          down();
          console.log("down");
      }
      if(keyPressed =='37')
      {
          left();
          console.log("left");
      }
      if(keyPressed == '39')
      {
          right();
          console.log("right");
      }
}

function up()
{

    if(rover_y >=0)
    {
        rover_y -= 10;
        console.log("When uparrow is pressed = " + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down()
{

    if(rover_y <=500)
    {
        rover_y += 10;
        console.log("When downarrow is pressed, x =" + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right()
{

    if(rover_x <=700)
    {
        rover_x += 10;
        console.log("When rightarrow is pressed, x =" + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left()
{

    if(rover_x >=0)
    {
        rover_x -= 10;
        console.log("When leftarrow is pressed, x =" + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}