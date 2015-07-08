var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("squareDancer");

};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.lineUp = function(top){
  this.left = 900;
  this.top = top;
  this.setPosition();
};
SquareDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    // this.$node.toggleClass('up');
    if(this.$node.hasClass('left')){
      this.$node.removeClass('left');
      this.$node.addClass('upLeft');
    }else if(this.$node.hasClass('upLeft')){
      this.$node.removeClass('upLeft');
      this.$node.addClass('up');
    }else if(this.$node.hasClass('up')){
      this.$node.removeClass('up');
    }else{
      this.$node.addClass('left');
    }
     
};