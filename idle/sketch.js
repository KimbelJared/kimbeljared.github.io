let moneyGen;
let grid;

var loadButton;
var saveButton;

var saveJSON

function preLoad(){

}

function setup()
{
  createCanvas(windowWidth-10, windowHeight-10);

  frameRate(50);

  //Create load button
  loadButton = createButton('Load');
  loadButton.position(width/8, height/16);
  loadButton.mousePressed(loadSave);

  //Create save button
  saveButton = createButton('Save');
  saveButton.position(width/16, height/16);
  saveButton.mousePressed(outputSave);

  moneyGen = new generator(width/4, height/2, 0);
  grid = new blockGrid();

  grid.setup();
}

function draw()
{
  background(51);

  moneyGen.update();
  moneyGen.show();

  grid.show();
}
function loadSave() {
  saveJSON = loadJSON("assets/mySave.json");

  

}
function outputSave() {
  var jsonOutput = {};
  jsonOutput.money = {}
  jsonOutput.residents = [];
  jsonOutput.money.count = moneyGen.count;
  jsonOutput.money.rate = moneyGen.growthRate;
  jsonOutput.money.perFull = moneyGen.perFull;

  for (var z = 0; z < grid.residents.length; z++) {
    jsonOutput.residents[z] = grid.residents[z].tier;
  }

  saveJSON(jsonOutput, 'mySave.json');
}
