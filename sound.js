window.onload = (event) => {
 var random = Math.floor(Math.random() * 3) + 1;
 if (random == 1) {
   var sound = document.getElementById("1");
   sound.play();
 };
 if (random == 2) {
   var sound = document.getElementById("2");
   sound.play();
 };
 if (random == 3) {
   var sound = document.getElementById("3");
   sound.play();
 };
};
