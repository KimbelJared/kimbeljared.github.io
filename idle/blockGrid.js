function blockGrid() {
  this.residents = [0,0,0,0,0,0,0,0,0];

  this.setup = function(){
    for (var i = 0; i < this.residents.length; i++) {
      this.residents[i] = new resident(i, 1);
      this.residents[i].findHome();
    }

    for (var z = 0; z < this.residents.length; z++) {
      console.log(this.residents[z]);
    }
  }
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

    for (var z = 0; z < this.residents.length; z++) {
      this.residents[z].show();
    }
  }
}
