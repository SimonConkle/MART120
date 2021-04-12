// character
var characterX = 100;
var characterY = 100;

// wasd
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// shapes
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// mouse click shape
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);
    // ranadom speed
    var x = 50;
    var y = 50;
    var diameter = 25;
    for (var i = 0; i < 10; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(200, 350);
}

function draw() {
    background(100,150,20);

    // call createBorders function
    createBorders();

    // call movePlayer function
    movePlayer();

    // exit message
    textSize(25);
    text("Exit", width-470,height-25)

    // call createCharacter function
    createCharacter();

    // call createWin function
    createWin();
    
    // create shapes
    for (var i = 0; i < shapeXs.length; i++) {
    {
        circle(shapeXs[0],shapeYs[0], diameters[0]);
        fill(100,80,70)
        circle(shapeXs[1],shapeYs[1], diameters[1]);
        fill(20,30,60)
        circle(shapeXs[2],shapeYs[2], diameters[2]);
        fill(50,75,90)
        circle(shapeXs[3],shapeYs[3], diameters[3]);
        fill(10,20,20)
        circle(shapeXs[4],shapeYs[4], diameters[4]);
        fill(80,100,70)
    }
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    // shape movement 
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

    // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
   
    // create the shape based on the mouse click
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
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
function createCharacter()
{
    fill(60,30,90);
    circle(characterX,characterY,25);
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

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
