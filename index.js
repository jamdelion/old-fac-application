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
      if (buttonBox1.innerHTML.toLowerCase().includes("see more")) {
        buttonBox1.innerHTML = "Close X";
      } else if (buttonBox1.innerHTML.toLowerCase().includes("close")) {
        buttonBox1.innerHTML = "See More";
      } else {
        throw new Error("Unexpected box text: " + buttonBox1.innerHTML);
      }
      //no idea why setTimeout worked here!
      setTimeout(() => {
        hiddenText1.classList.toggle('visible');
      }, 750)
    };
    //box 2
    var buttonBox2 = document.getElementById("button-box2");
    var hiddenBox2 = document.getElementById('hiddenBox2');
    var hiddenText2 = document.getElementById('hidden-text-box2');
    buttonBox2.onclick = function() {
      box2.classList.toggle("wide-box");
      hiddenBox2.classList.toggle("hidden");
      box3.toggle();
      box4.toggle();
      if (buttonBox2.innerHTML.toLowerCase().includes("see more")) {
        buttonBox2.innerHTML = "Close X";
      } else if (buttonBox2.innerHTML.toLowerCase().includes("close")) {
        buttonBox2.innerHTML = "See More";
      } else {
        throw new Error("Unexpected box text: " + buttonBox2.innerHTML);
      }
      setTimeout(() => {
        hiddenText2.classList.toggle('visible');
      }, 750)
    };
    //box 3
    var buttonBox4 = document.getElementById("button-box4");
    var hiddenBox4 = document.getElementById('hiddenBox4');
    var hiddenText4 = document.getElementById('hidden-text-box4');
    buttonBox4.onclick = function() {
      box4.classList.toggle("wide-box-reverse");
      hiddenBox4.classList.toggle("hidden");
      box2.toggle();
      box3.toggle();
      if (buttonBox4.innerHTML.toLowerCase().includes("see more")) {
        buttonBox4.innerHTML = "Close X";
      } else if (buttonBox4.innerHTML.toLowerCase().includes("close")) {
        buttonBox4.innerHTML = "See More";
      } else {
        throw new Error("Unexpected box text: " + buttonBox4.innerHTML);
      }
      setTimeout(() => {
        hiddenText4.classList.toggle('visible');
      }, 750)
    };
    //disable other buttons if one is pressed??? or close the other? If toggled, turn off etc.


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
