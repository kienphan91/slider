let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let images = document.querySelectorAll(".slide");
let index = 0;

// reset image
function reset() {
  // for ( let i = 0; i < images.length; i++) {
  //     images[i].style.display = "none"
  // }
  images.forEach(function (element) {
    element.style.display = "none";
  });
}

// start
function startSlide() {
  reset();
  images[0].style.display = "block";
}

// show right image
function rightImage() {
    reset();
    if (index === images.length - 1) {
        index = -1;
    }
    images[index + 1].style.display = "block";
    index += 1;
}

// show left image
function leftImage() {
    reset();
    if (index === 0) {
        index = images.length;
    }
    images[index - 1].style.display = "block";
    index -= 1;
}

arrowRight.addEventListener("click", rightImage)
arrowLeft.addEventListener("click", leftImage)

startSlide();
