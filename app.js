const navigationBtn = document.querySelector(".navigation__btn");
const navigationMenu = document.querySelector(".navigation__nav");

// Get the width and height of the browser window
const width = window.innerWidth;
const height = window.innerHeight;

// Log the size of the browser window
console.log(`Window size: ${width} x ${height}`);

if (width === 500) {
  navigationMenu.setAttribute("id", "display-none");
}

navigationBtn.addEventListener("click", () => {
  if (navigationMenu.hasAttribute("id")) {
    navigationMenu.removeAttribute("id");
  } else {
    navigationMenu.setAttribute("id", "display-none");
  }
});
