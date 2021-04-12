// character
var characterX = 100;
var characterY = 100;

// wasd
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// shape 1
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// shape 2
var shapeW = 60;
var shapeZ = 80;
var shapeWSpeed;
var shapeZSpeed;

// mouse click shape
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeWSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeZSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
    {background(100,150,20);

    // call createBorders function
    createBorders();

    // call createCharacter function
    createCharacter();

    // call movePlayer function
    movePlayer();

    // call drawMouseclick function
    drawMouseclick();

    // call createEnemy function
    createEnemy();

    // call createRandoMmovment function
    createRandoMmovment();

    // call createWin function
    createWin();

    // exit message
    textSize(25);
    text("Exit", width-470,height-25)

   
    // enemy shapes
    {circle(shapeX, shapeY, 10);
        fill(50,25,10)
    }
    {circle(shapeW, shapeZ, 20);
        fill(40,50,20)
    }

    // shape 1 out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // shape 2 out of bounds
    if(shapeW > width)
    {
        shapeW = 0;
    }
    if(shapeW < 0)
    {
        shapeW = width;
    }
    if(shapeZ > height)
    {
        shapeZ = 0;
    }
    if(shapeZ < 0)
    {
        shapeZ = height;
    }

}

function createEnemy()
{
    {circle(shapeX, shapeY, 10);
        fill(50,25,10)
    }
    {circle(shapeW, shapeZ, 20);
        fill(40,50,20)
    }
}

function createRandoMmovment()
{
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeW += shapeWSpeed;
    shapeZ += shapeZSpeed;
} 

function createWin()
{
    if(characterY > width && characterX < width-500)
    {
        stroke(5);
        fill(0);
        textSize(50);
        text("You Win!", width/2-20, height/2-25);
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function createCharacter()
{
    fill(60,30,90);
    circle(characterX,characterY,25);
}

function createBorders()
{
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height-50);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height); 
}

function drawMouseclick()
{
    fill(100,100,100);
    circle(mouseShapeX, mouseShapeY, 30);
}

function movePlayer()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }