var clap = new Audio ();
clap.src = "sounds/clap.wav";
clap.classList.add('playing');

var boom = new Audio ();
boom.src = "sounds/boom.wav";

var hihat = new Audio ();
hihat.src = "sounds/hihat.wav";

var kick = new Audio ();
kick.src = "sounds/kick.wav";

var openhat = new Audio ();
openhat.src = "sounds/openhat.wav";

var ride = new Audio ();
ride.src = "sounds/ride.wav";

var snare = new Audio ();
snare.src = "sounds/snare.wav";

var tink = new Audio ();
tink.src = "sounds/tink.wav";

var tom = new Audio ();
tom.src = "sounds/tom.wav";


























/* function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); */