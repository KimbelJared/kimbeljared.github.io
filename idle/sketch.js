let moneyGen;
let grid;

function setup()
{
  createCanvas(windowWidth-10, windowHeight-10);

  frameRate(50);

  moneyGen = new generator(width/4, height/2, 0);
  grid = new blockGrid();
}

function draw()
{
  background(51);

  moneyGen.update();
  moneyGen.show();

  grid.show();
}
