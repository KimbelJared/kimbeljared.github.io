function generator(x, y){


  this.x = x;
  this.y = y;
  this.w = 100;
  this.h = 25;
  this.color = '#81cc26';

  this.nameBox = new textbox(this.x, this.y-25, 255, 'Money');
  this.countBox = new textbox(this.x, this.y, 0, '');

  this.percent = 50;
  this.count = 0;
  this.growthRate = 1;
  this.perFull = 1;


  this.update = function() {
    this.modifyPercent(this.growthRate);
  }

  this.show = function() {

    push();
    rect((this.x-(this.w/2)), (this.y-(this.h/2)), this.w, this.h);
    pop();

    push();
    fill(this.color);
    rect((this.x-(this.w/2)), (this.y-(this.h/2)), map(this.percent, 0, 100, 0, this.w), this.h);
    pop();

    this.nameBox.show();
    this.countBox.show();
  }

  this.modifyPercent = function(val) {

    if(this.percent >= 100){
      this.modifyCount(this.perFull);

      this.percent = 0;
    }

    this.percent += val;
  }

  this.modifyCount = function(val){
    this.count += val;

    this.countBox.update(this.count);
  }
}
