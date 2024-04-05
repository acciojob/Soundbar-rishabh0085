//your JS code here. If required.
function playSound(soundFile) {
  var audio = document.getElementById('audio');
  audio.src = 'sounds/' + soundFile;
  audio.play();
}

function stopSound() {
  var audio = document.getElementById('audio');
  audio.pause();
  audio.currentTime = 0;
}
