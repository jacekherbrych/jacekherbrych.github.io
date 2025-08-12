shuffle()
function shuffleArray(array) {
 for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
 }
 return array;
}
function shuffle() {
 var inst = [1, 2, 3, 4, 5, 6, 7, 8];
 var speed = [1, 2, 3, 4, 4, 3, 2, 1];
 var shift = [-31, -15.5, 1.5, 20, 60, 78.5, 95.5, 111];
 instshuffled = shuffleArray(inst);
 var str = "";
 var j=0;
 for (let i = 0; i <= 8; i++) {
  if (i == 4) {
   str += "<div data-parallax='layer' data-parallax-speed='speed5' data-image='inst0' style='left: 40vw;'></div>";
  } else {
   str += "<div class='layer-fade-in' data-parallax='layer' data-parallax-speed='speed" + speed[j] + "' data-image='inst" + inst[j] + "' style='left: " + shift[j] + "vw;'>" + "</div>";
   j += 1;
  }
 }
 document.getElementById("shuffle").outerHTML = str;
}
