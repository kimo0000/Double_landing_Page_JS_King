const apple = document.querySelector("#apple");
const sumsung = document.querySelector("#sumsung");

apple.addEventListener("mouseenter", getFullWidth);
sumsung.addEventListener("mouseenter", getFullWidth);
apple.addEventListener("mouseleave", hideFullWidth);
sumsung.addEventListener("mouseleave", hideFullWidth);

function getFullWidth(e) {
  console.log(e.target);
  e.target.classList.toggle("full_width");
}

function hideFullWidth(e) {
  console.log(e.target);
  e.target.classList.remove("full_width");
}
