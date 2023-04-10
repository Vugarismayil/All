// Merkez 
var img = document.createElement("img");
img.src = "/assets/css/images/10624.png";
img.style.position = "absolute";
document.body.appendChild(img);
img.style.width = "100px"

var target = document.createElement("div");
target.style.width = "100px";
target.style.height = "100px";
target.style.backgroundColor = "green";
target.style.position = "absolute";
target.style.left = "50%";
target.style.top = "50%";
target.style.marginLeft = "-50px";
target.style.marginTop = "-50px";
document.body.appendChild(target);


document.addEventListener("keydown", function(event) {
  var x = parseInt(img.style.left) || 0;
  var y = parseInt(img.style.top) || 0;

  switch (event.key) {
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
    case "ArrowRight":
      x += 10;
      break;
  }

  img.style.left = x + "px";
  img.style.top = y + "px";
  

  var targetX = target.offsetLeft + target.offsetWidth / 2;
  var targetY = target.offsetTop + target.offsetHeight / 2;
  if (Math.abs(x - targetX) < 50 && Math.abs(y - targetY) < 50) {
    alert("Oyun Bitdi");
  }
});





var target = document.createElement("div");
target.style.width = "100";
target.style.height = "100";
target.style.backgroundColor = "green";
target.style.position = "absolute";
target.style.left = "50%";
target.style.top = "50%";
target.style.transform = "translate(-50%, -50%)"; 
document.body.appendChild(target);



document.addEventListener("keydown", function(event) {
  var x = parseInt(img.style.left) || 0;
  var y = parseInt(img.style.top) || 0;

  switch (event.key) {
    case "ArrowUp":
      y = Math.max(y - 10, 0);
      break;
    case "ArrowDown":
      y = Math.min(y + 10, window.innerHeight - img.offsetHeight);
      break;
    case "ArrowLeft":
      x = Math.max(x - 10, 0);
      break;
    case "ArrowRight":
      x = Math.min(x + 10, window.innerWidth - img.offsetWidth);
      break;
  }

  img.style.left = x + "px";
  img.style.top = y + "px";
  var targetX = target.offsetLeft;
  var targetY = target.offsetTop;
  var targetWidth = target.offsetWidth;
  var targetHeight = target.offsetHeight;
  if (
    x + img.offsetWidth >= targetX &&
    x <= targetX + targetWidth &&
    y + img.offsetHeight >= targetY &&
    y <= targetY + targetHeight
  ) {
    alert("Oyun bitdi");
  }
});