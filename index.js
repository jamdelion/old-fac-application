(function() { //good practise to wrap JS in this
  "use strict";


  HTMLElement.prototype.show = function() {
    this.style.display = "";
  };

  HTMLElement.prototype.hide = function() {
    this.style.display = "none";
  };


  HTMLElement.prototype.toggle = function() {
    if (this.style.display === "none") {
      this.show();
    } else {
      this.hide();
    }
  };

  //on load
  function init() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    //when click each box button, toggle to wide-box
    //box 1
    var buttonBox1 = document.getElementById("button-box1");
    var hiddenBox1 = document.getElementById('hiddenBox1');
    var hiddenText1 = document.getElementById('hidden-text-box1');
    buttonBox1.onclick = function() {
      box1.classList.toggle("wide-box");
      hiddenBox1.classList.toggle("hidden");
      box2.toggle();
      box3.toggle();
      //no idea why setTimeout worked here!
      setTimeout(() => {
        hiddenText1.classList.toggle('visible');
      }, 750)

    };
    //box 2
    var buttonBox2 = document.getElementById("button-box2");
    buttonBox2.onclick = function() {
      box2.classList.toggle("wide-box");
      box3.toggle();
      box4.toggle();
    };
    //box 3
    var buttonBox4 = document.getElementById("button-box4");
    buttonBox4.onclick = function() {
      box4.classList.toggle("wide-box-reverse");
      box2.toggle();
      box3.toggle();
    }
    //test to see if toggling images works - need to cycle round carousel
    var imghold1 = document.getElementById("img-hold-1");
    var nextButton = document.getElementById("next-icon");
    nextButton.onclick = function(){
      imghold1.toggle();
    }

  }


  //on start , init function executes
  document.addEventListener("DOMContentLoaded", init);





  //get element by id etc. display/hidden





})();
