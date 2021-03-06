// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  this.setPosition(top, left);
  this.step();
  
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
  
Dancer.prototype.setPosition = function(){
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
};

