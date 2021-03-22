var headx = 250;
var heady = 100;
var headDirection = 3;

var bodyX = 180;
var bodyY = 170;
var bodyDirection = 3;

var lefteyeX = 100; 
var lefteyeY = 120;
var lefteyeZ = 120;
var lefteyeDirection = 3;

var righteyeX = 100;
var righteyeY = 120;
var righteyeZ = 120;
var righteyeDirection = 3;

var mouthX = 250;
var mouthY = 20;
var mouthDirection = 3;


var size = 32;
var count = 0;
var sizeDirection = 2;
function setup()
            {
                createCanvas(500,600);
                movement = Math.floor(Math.random() * 10) + 1;
            }

            function draw()
            {
                background(100,60,40);
                textSize(22); 
                
                //head
                circle(headx,heady,100);
                fill('rgb(0,255,0)');
                headx+=headDirection;
                heady+=headDirection;
                if(headx >=418 || headx <= 82)
                {
                    headDirection *= -1;
                }
                if(heady >=418 || heady <= 82)
                {
                    headDirection *= -1;
                }

                //body
                rect(bodyX,bodyY,150,255);
                fill('rgba(100%,0%,100%,0.5)');
                bodyX+=bodyDirection;
                if(bodyX >=410 || bodyX <= 82)
                {
                    bodyDirection *= -1;
                }

                //legs
                line(500, 15000, 210, 425);
                line(500, 15000, 290, 425);

                // left eye
                triangle(240, lefteyeY, 230, lefteyeX, 210, lefteyeZ);
                lefteyeY += lefteyeDirection;
                if(lefteyeY <= 0 || lefteyeY >= 450 )
                {
                    lefteyeDirection *= -1;
                }
                lefteyeZ += lefteyeDirection;
                if(lefteyeZ <= 0 || lefteyeZ >= 450 )
                {
                    lefteyeDirection *= -1;
                }
                lefteyeX += lefteyeDirection;
                if(lefteyeX <= 0 || lefteyeX >= 450 )
                {
                    lefteyeDirection *= -1;
                }

                // right eye
                triangle(280, righteyeX, 270, righteyeY, 255, righteyeZ);
                righteyeY += lefteyeDirection;
                if(righteyeY <= 0 || righteyeY >= 450 )
                {
                    righteyeDirection *= -1;
                }
                righteyeZ += righteyeDirection;
                if(righteyeZ <= 0 || righteyeZ >= 450 )
                {
                    righteyeDirection *= -1;
                }
                righteyeX += righteyeDirection;
                if(lefteyeX <= 0 || lefteyeX >= 450 )
                {
                    righteyeDirection *= -1;
                }


                //mouth
                ellipse(mouthX,150,60,mouthY);
                fill(255, 204, 100);
                mouthX+=headDirection;
                if(mouthX >=20 || mouthX <= 200)
                {
                    mouthDirection *= -1;
                }
                if(mouthY >=20 || mouthY <= 200)
                {
                    mouthDirection *= +1;
                }

                //nose
                point(250, 130);

                //arms
                line(180, 250, 100, 300);
                line(330, 250, 420, 300);

                //text
                fill(120);
                textSize(size);
                size+= sizeDirection;
                count++;
                if(count > 5)
                {
                    sizeDirection *=-1;
                    count = 0;
                }
    text("Simons Portrait",70,50 );
    
                
            }