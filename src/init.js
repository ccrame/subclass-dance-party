$(document).ready(function(){
  window.dancers = [];

  $(".lineDancerButton").on("click", function(event){
    var top = 50;
    for(var j = 0; j < window.dancers.length; j ++){
      window.dancers[j].lineUp(top);
      top +=30;

    }
  });

  $('body').on('mouseenter mouseleave', '.dancer', function(){
    $(this).toggleClass('scale');
  });


  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 500 + 500
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

