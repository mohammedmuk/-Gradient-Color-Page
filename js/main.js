let pageImg = document.querySelector(".landing-page .page-image");

theStory = document.querySelector(".story");

(theCustom = document.querySelector(".custom")),
  (theImg = document.querySelector(".story .box-img img")),
  (grad = document.querySelector(".story .container .box-img .grad")),
  (theProject = document.querySelector(".project")),
  (theNumber = Array.from(document.querySelectorAll(".project .numbers h3"))),
  (landCounter = 1),
  (status5 = false);

pageImg.style.backgroundImage = `url(imgs/header/1.jpg)`;

// Start Fundtion of land page images

function nextImg(){
  var timePage = setInterval(() => {
    landCounter++;
    pageImg.style.backgroundImage = `url(imgs/header/${landCounter}.jpg)`;
    if (landCounter == 4) {
      landCounter = 0;
    }
  }, 2000);
}

window.onload = () => nextImg()

window.onscroll = function () {
  let offsetStory = theStory.offsetTop,
    storyHeight = theStory.clientHeight,
    windowHeight = window.innerHeight,
    windowY = window.scrollY,
    locationStory = offsetStory + storyHeight - windowHeight;

  if (windowY >= locationStory - 500) {
    grad.style.right = 0;
    theImg.style.marginLeft = 0;
    theCustom.style.opacity = 1;
  } else {
    grad.style.right = "300px";
    theImg.style.marginLeft = "100px";
    theCustom.style.opacity = 0;
  }

  let offsetProject = theProject.offsetTop,
    projectHeight = theProject.clientHeight;

  locationProject = offsetProject + projectHeight - windowHeight;

  if (windowY >= locationProject - 500) {
    if (!status5) {
      counter();
    }

    status5 = true;
  }
};

function counter() {
  theNumber.forEach((number) => {
    let count = number.dataset.number;

    let time = setInterval(() => {
      number.textContent++;

      if (number.textContent == count) {
        number.textContent = number.textContent;

        clearInterval(time);
      }
    }, 2500 / count);
  });
}
