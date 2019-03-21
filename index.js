(function() { //good practise to wrap JS in this
  "use strict";


  HTMLElement.prototype.show = function(){
    this.style.display = "";
  };

  HTMLElement.prototype.hide = function(){
    this.style.display = "none";
  };

  HTMLElement.prototype.toggle = function(){
    if (this.style.display === "none"){
      this.show();
    } else {
      this.hide();
    }
  };



  //on load
  function init() {
    var extendBox1 = document.getElementById("box1-extended");
    var extendBox2 = document.getElementById("box2-extended");
    var extendBox4 = document.getElementById("box4-extended");
    extendBox1.hide();
    extendBox2.hide();
    extendBox4.hide();
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");

    //when click each box button
    var buttonBox1 = document.getElementById("button-box1");
    buttonBox1.onclick = function(){
      extendBox1.toggle();
      box2.toggle();
      box3.toggle();
    };
    var buttonBox2 = document.getElementById("button-box2");
    buttonBox2.onclick = function(){
      extendBox2.toggle();
      box3.toggle();
      box4.toggle();
    };
    var buttonBox4 = document.getElementById("button-box4");
    buttonBox4.onclick = function(){
      extendBox4.toggle();
      box2.toggle();
      box3.toggle();
    }
  }
  //do this for all the other boxes

  //on start , init function executes
  document.addEventListener("DOMContentLoaded", init);





  //get element by id etc. display/hidden





})();
