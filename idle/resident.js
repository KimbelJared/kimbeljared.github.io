function resident(sq, t){

  this.square = sq;
  this.tier = t;
  this.x = width/2;
  this.y = height/2;
  this.txt = 0;

  this.show = function(){
    this.txt.show();
  }

  this.findHome = function(){
    switch (this.square) {
      case 0:
        this.x = this.x - 125;
        this.y = this.y - 125;
        break;
      case 1:
        this.x = this.x;
        this.y = this.y - 125;
        break;
      case 2:
        this.x = this.x + 125;
        this.y = this.y - 125;
        break;
      case 3:
        this.x = this.x - 125;
        this.y = this.y;
        break;
      case 4:
        this.x = this.x;
        this.y = this.y;
        break;
      case 5:
        this.x = this.x + 125;
        this.y = this.y;
        break;
      case 6:
        this.x = this.x - 125;
        this.y = this.y + 125;
        break;
      case 7:
        this.x = this.x;
        this.y = this.y + 125;
        break;
      case 8:
        this.x = this.x + 125;
        this.y = this.y + 125;
        break;

    }
    this.txt = new textbox(this.x, this.y, 0, this.square)
  }
}
