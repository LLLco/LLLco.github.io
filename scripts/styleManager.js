const minimumDesktopWidth = 1152;
var mobileMode = false;
const body = document.querySelector("body");

handleViewport();

window.addEventListener('resize', delay(handleViewport))

function delay(f, delay = 20) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => f.apply(this, args), delay);
  };
}

function handleViewport() {
    if(window.innerWidth < minimumDesktopWidth) {
        console.log("its mobile time")
        if (mobileMode == false) {
            makeMobile();
        }
    }
    else {
        console.log("its not mobile time")
        if (mobileMode == true) {
            makeDesktop();
        }
    }
}

function makeMobile() {
    console.log("i am becoming mobile")
    mobileMode = true;

    body.style.setProperty("--header-ratio","6/1");
    body.style.setProperty("--desktop-width","90vw");
    body.style.setProperty("--flex-direction","column");
    body.style.setProperty("--font-size","120%");
    body.style.setProperty("--content-padding","1% 0%");
    body.style.setProperty("--project-window-width","95%");
    body.style.setProperty("--desktop-visibilty","hidden");
}

function makeDesktop() {
    console.log("i am desktop")
    mobileMode = false;

    body.style.setProperty("--header-ratio","16/1");
    body.style.setProperty("--desktop-width",minimumDesktopWidth + "px");
    body.style.setProperty("--flex-direction","row");
    body.style.setProperty("--font-size","300%");
    body.style.setProperty("--content-padding","1% 3%");
    body.style.setProperty("--project-window-width","98%");
    body.style.setProperty("--desktop-visibilty","visible");
}