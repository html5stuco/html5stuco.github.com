var rightKey, leftKey, topKey, bottomKey;


$(document).ready(function () {
  
  //Set up the triggers for the arrow keys
  $(document).keydown(function(e){
    if (e.keyCode == 37 && typeof leftKey === 'function') { 
      leftKey();
    } else if(e.keyCode == 38 && typeof topKey === 'function') { 
      topKey();
    } else if(e.keyCode == 39 && typeof rightKey === 'function') { 
      rightKey();
    } else if(e.keyCode == 40 && typeof bottomKey === 'function') { 
      bottomKey();
    }
  });
  
  
  parallax.add("slideA", $("#home"))
      .add("slideB", $("#bs"))
      .add("slideC", $("#cs"));
      
  parallax.background = $("body");  

  parallax.preload = function(){
    rightKey = leftKey = topKey = bottomKey = "";
  };

  console.log(parallax);

  //Setting up page navigation
  parallax.slideA.onload=function(){
    setLeft("slideC", "C");
    setRight("slideB", "B");
  };
  
  parallax.slideB.onload=function(){
    setLeft("slideA", "A");
    setRight("slideC", "C");
  };
  
  parallax.slideC.onload=function(){
    setLeft("slideB", "B");
    setRight("slideA","A");
  };
  
  
  //Sets the correct triggers for the arrows, plus arrow keys
  function setRight(page, text){
    $("#rightText").text(text);
    $("#rightControl").show().unbind('click').click(function(){
      parallax[page].right();
    });
    rightKey = function(){ 
      parallax[page].right(); 
    };
  }
  
  function setLeft(page, text){
    $("#leftText").text(text);
    $("#leftControl").show().unbind('click').click(function(){
      parallax[page].left();
    });
    leftKey = function(){ 
      parallax[page].left(); 
    };
  }
  
  function setTop(page, text){
    $("#topText").text(text);
    $("#topControl").show().unbind('click').click(function(){
      parallax[page].top();
    });
    topKey = function(){ 
      parallax[page].top(); 
    };
  }
  
  function setBottom(page, text){
    $("#bottomText").text(text);
    $("#bottomControl").show().unbind('click').click(function(){
      parallax[page].bottom();
    });
    bottomKey = function(){ 
      parallax[page].bottom(); 
    };
  }
  parallax.slideA.show();
});