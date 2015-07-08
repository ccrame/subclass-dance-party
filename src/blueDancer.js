var BlueDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("blueDancer");
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;
BlueDancer.prototype.lineUp = function(top){
  this.left = 600;
  this.top = top;
  this.setPosition();
};
BlueDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    if(this.$node.hasClass('rotateRight')){
      this.$node.removeClass('rotateRight');
      this.$node.addClass('rotateDown');
    }else if(this.$node.hasClass('rotateDown')){
      this.$node.removeClass('rotateDown');
      this.$node.addClass('rotateLeft');
    }else if(this.$node.hasClass('rotateLeft')){
      this.$node.removeClass('rotateLeft');
    }else{
      this.$node.addClass('rotateRight');
    }
};