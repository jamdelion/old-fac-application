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
    //box 1 variables
    var buttonBox1 = document.getElementById("button-box1");
    var hiddenBox1 = document.getElementById('hiddenBox1');
    var hiddenText1 = document.getElementById('hidden-text-box1');
    var hiddenText1Box2 = document.getElementById('hidden-text-box1box2');
    //box 2 variables
    var buttonBox2 = document.getElementById("button-box2");
    var hiddenBox2 = document.getElementById('hiddenBox2');
    var hiddenText2 = document.getElementById('hidden-text-box2');
    // box 4 variables
    var buttonBox4 = document.getElementById("button-box4");
    var hiddenBox4 = document.getElementById('hiddenBox4');
    var hiddenText4 = document.getElementById('hidden-text-box4');
    var hiddenText4Box2 = document.getElementById('hidden-text-box4box2');

// IF MIN WIDTH = greater than mobile width (desktop), enable wide box toggles
    var desktopWidth = window.matchMedia("(min-width: 651px)");
    if (desktopWidth.matches) {
      //when click each box button, toggle to wide-box
      buttonBox1.onclick = function() {
        box1.classList.toggle("wide-box");
        hiddenBox1.classList.toggle("hidden");
        hiddenBox1.classList.toggle("inherit-display");
        hiddenText1.classList.toggle("hidden");
        hiddenText1Box2.classList.toggle("hidden");
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
        setTimeout(() => {
          hiddenText1Box2.classList.toggle('visible');
        }, 950)
        // hide other box buttons
        buttonBox4.classList.toggle("invisible");
      };
      //box 2
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
        buttonBox1.classList.toggle("hidden");
      };
      //box 4
      buttonBox4.onclick = function() {
        box4.classList.toggle("wide-box-reverse");
        hiddenBox4.classList.toggle("hidden");
        hiddenBox4.classList.toggle("inherit-display");
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
        setTimeout(() => {
          hiddenText4Box2.classList.toggle('visible');
        }, 950)
        buttonBox1.classList.toggle("invisible");
      };
    } else {
// if min width less than desktopWidth IE MOBILE WIDTH
        buttonBox1.onclick = function() {
          box1.classList.toggle("wide-box");
          hiddenBox1.classList.toggle("hidden");
          hiddenText1.classList.toggle("hidden");
          hiddenText1Box2.classList.toggle("hidden");
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
          setTimeout(() => {
            hiddenText1Box2.classList.toggle('visible');
          }, 950)

        }
        //box 2
        buttonBox2.onclick = function() {
          box2.classList.toggle("wide-box");
          hiddenBox2.classList.toggle("hidden");
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
          buttonBox1.classList.toggle("hidden");
        };
        //box 4
        buttonBox4.onclick = function() {
          box4.classList.toggle("wide-box-reverse");
          hiddenBox4.classList.toggle("hidden");
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
          setTimeout(() => {
            hiddenText4Box2.classList.toggle('visible');
          }, 950)
        };
    };






    // IMAGE CAROUSEL
    var slideIndex = 0;
    var images = [];
    var timeLapse = 1000;
    var slide = document.querySelector(".imageHolder");

    // Buttons
    var playButton = document.querySelector('.pause');
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
    var playIcon = document.getElementById('playIcon');

    // Image list
    images[0] = "images/img1.JPG";
    images[1] = "images/img2.JPG";
    images[2] = "images/img3.JPG";
    images[3] = "images/img4.jpg";
    images[4] = "images/img5.jpg";
    // set initial slide to img1
    slide.src = images[0];


    // dots
    // get array of dot elements
    var dotsArray = document.getElementsByClassName("dot");
    // initially dots[0] is active
    // if playing, slideIndex dot is active (follows slideIndex)
    dotsArray[slideIndex].classList.toggle("active");

    // make dots clickable
    for (var j = 0; j < dotsArray.length; j++) {
      dotsArray[j].onclick = function(event) {
        // if the carousel not playing, change the image to the same index as the dot
        var dotIndex = Array.from(dotsArray).indexOf(event.target);
        if (playButton.classList.contains("play")) {
          slide.src = images[dotIndex];
          // match the slideIndex with the dotIndex
          slideIndex = dotIndex;
          // change unclicked dots to not active
          Array.from(dotsArray).forEach(function(dot) {
            dot.classList.remove("active")
          });
          dotsArray[dotIndex].classList.toggle("active");
        }
      }
    }


    // on click play slides
    playButton.onclick = function() {
      // does playbutton class contains "play" (true or false)
      var playing = !playButton.classList.toggle("play");
      // change icon from play to pause icon if slideshow playing
      playIcon.classList.toggle("fas");
      playIcon.classList.toggle("hidden");
      pauseIcon.classList.toggle("fas");
      pauseIcon.classList.toggle("hidden");
      // if "play" not in classlist, playslides (start function)
      if (playing) {
        playSlides();
      }
    }

    // Automatic play (change images)
    function playSlides() {
      if (!playButton.classList.contains("play")) {
        nextSlide();
        setTimeout(playSlides, timeLapse);
      }
    }
    // deactivate next/prev buttons? (make grey)

    function nextSlide() {
      // change unclicked dots to not active
      Array.from(dotsArray).forEach(function(dot) {
        dot.classList.remove("active")
      });
      // active dot
      // dotsArray[i].classList.toggle("active");
      if (slideIndex < images.length - 1) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      slide.src = images[slideIndex];
      dotsArray[slideIndex].classList.toggle("active");
    }

    nextButton.onclick = function() {
      if (playButton.classList.contains("play")) {
        nextSlide();
      }
    }

    function prevSlide() {
      dotsArray[slideIndex].classList.toggle("active");
      if (slideIndex !== 0) {
        slideIndex--;
      } else {
        slideIndex = images.length - 1;
      }
      slide.src = images[slideIndex];
      dotsArray[slideIndex].classList.toggle("active");
    }

    prevButton.onclick = function() {
      if (playButton.classList.contains("play")) {
        prevSlide();
      }
    }

    document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 37:
          prevSlide();
          break;
        case 39:
          nextSlide();
          break;
      }
    };



    var mobileWidth = window.matchMedia("(max-width: 650px)");

    var aboutMe = document.getElementById('about-me');
    var secondBox = document.getElementById("second-box");
    var aboutMeContent = document.getElementById("about-me-content");
    var whyContent = document.getElementById("why-content");
    var whyTitle = document.getElementById("why-fac");
    var imgContent = document.getElementById("img-content");
    var imgTitle = document.getElementById("images-title");

    function uncollapseBox(mobileWidth) {
      if (mobileWidth.matches) { // If media query matches
        aboutMeContent.classList.toggle("hidden");
        whyContent.classList.toggle("hidden");
        imgContent.classList.toggle("hidden");
        // reveal about-me box when click heading
        aboutMe.onclick = function() {
          aboutMeContent.classList.toggle("hidden");
        }
        // reveal why-fac box when click heading
        whyTitle.onclick = function() {
          whyContent.classList.toggle("hidden");
        }
        // reveal image carousel box when click heading
        imgTitle.onclick = function() {
          imgContent.classList.toggle("hidden");
        }
      }
    }

    uncollapseBox(mobileWidth);









    // end of init function
  }

  //on start , init function executes
  document.addEventListener("DOMContentLoaded", init);

})();
