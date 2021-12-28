function textbox(x, y, color, phrase) {
  this.x = x;
  this.y = y;
  this.template = phrase;
  this.phrase = phrase;
  this.color = color;

  this.update = function(update) {
    this.phrase = this.template + update;
  }

  this.show = function() {
    push();
    textSize(16);
    fill(this.color)
    textAlign(CENTER, CENTER);
    text(this.phrase, this.x, this.y);
    pop();
  }
}
