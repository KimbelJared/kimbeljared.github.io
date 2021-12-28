function blockGrid() {
  this.residents = [8];
  
  this.show = function(){
    push();
    rectMode(CENTER);
    noStroke();
    translate(width/2, height/2);

    rect(-125, -125, 100, 100);

    rect(0, -125, 100, 100);

    rect(125, -125, 100, 100);

    rect(-125, 0, 100, 100);

    rect(0, 0, 100, 100);

    rect(125, 0, 100, 100);

    rect(-125, 125, 100, 100);

    rect(0, 125, 100, 100);

    rect(125, 125, 100, 100);
    pop();
  }
}
