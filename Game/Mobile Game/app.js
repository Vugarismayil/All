//#region Mobile Game
var player = document.getElementById('player');
var target = document.getElementById('target');

var startTouchX, startTouchY, moveTouchX, moveTouchY;

player.addEventListener('touchstart', function(e) {
  startTouchX = e.touches[0].pageX;
  startTouchY = e.touches[0].pageY;
});

player.addEventListener('touchmove', function(e) {
  e.preventDefault(); 
  moveTouchX = e.touches[0].pageX;
  moveTouchY = e.touches[0].pageY;
  var deltaX = moveTouchX - startTouchX;
  var deltaY = moveTouchY - startTouchY;
  var newX = parseInt(player.style.left) + deltaX;
  var newY = parseInt(player.style.top) + deltaY;
  player.style.left = newX + 'px';
  player.style.top = newY + 'px';
  startTouchX = moveTouchX;
  startTouchY = moveTouchY;

  var targetRect = target.getBoundingClientRect();
  var playerRect = player.getBoundingClientRect();
  if (playerRect.left + playerRect.width >= targetRect.left &&
      playerRect.left <= targetRect.left + targetRect.width &&
      playerRect.top + playerRect.height >= targetRect.top &&
      playerRect.top <= targetRect.top + targetRect.height) {
    alert('Oyun Bitdi!');
  }
});

//#endregion 



