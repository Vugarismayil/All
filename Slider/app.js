let slider = document.getElementById("slider");
let dotsContainer = document.getElementById("dots");

let images = slider.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);


  dot.addEventListener("click", function() {
    showImage(i);
  });
}

let currentImage = 0;
showImage(currentImage);


function showImage(index) {

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    dotsContainer.children[i].classList.remove("active");
  }


  images[index].style.display = "block";
  dotsContainer.children[index].classList.add("active");


  currentImage = index;
}

function loopImages() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  showImage(currentImage);
}
