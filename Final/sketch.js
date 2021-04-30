function setup()
{
    createCanvas(500,600);
}

function draw()
            {
                background(150,90,50);
                textSize(22); 
                
                //head
                circle(250,175,100);

                //hat
                {
                line(200, 130, 300, 130)
                circle(250, 100, 70)
                fill(255, 204, 100)
                }
                //legs
                line(500, 15000, 210, 455);
                line(500, 15000, 290, 455);

                //body
                {ellipse(250,350,150,250);
                fill(0, 0, 0);
                }
        
                //eyes
                {
                circle( 230, 160, 25);
                fill(0,0,0)
                }
                {
                circle( 270, 160, 25);
                fill(0,0,0)
                }

                //mouth
                ellipse(250,200,50,5);
                fill(255, 204, 100);

                //nose
                circle(250, 185, 10);

                //arms
                {
                ellipse(80, 300, 200, 10);
                ellipse(420, 300, 200, 10);
                fill(0, 0, 0) }

                //text
                fill(110, 0, 0);
               { textSize(32);
                text("The Cowboy",25,500 );
                text("Mulholland Drive",100,60)
                fill(120, 100, 50)
                 }
    
                
            }