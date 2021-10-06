var weights=[30,50,100,20]

function setup() 
{
  createCanvas(400,400);
  var sum=weights[0]+weights[1]+weights[2]+weights[3]
  var avg=sum/weights.length
  console.log(avg)
}

function draw() 
{
background(51);

}

