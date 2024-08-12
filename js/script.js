// Set the date we're counting down to
var countDownDate = new Date("September 26, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("demo").innerHTML = days + "д " + hours + "ч "
+ minutes + "м " + seconds + "с ";


// If the count down is finished, write some text 
if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




var header = $('#header');

var backgrounds = [
    'img/BG1.jpg',
    'img/BG2.jpg',
    'img/BG3.jpg',
    'img/BG4.jpg',
    'img/BG5.jpg',
    'img/BG6.jpg',
    'img/BG7.jpg',
    'img/BG8.jpg',
    'img/BG9.jpg',
    'img/BG10.jpg'
];

var current = 0;

// Предварительная загрузка изображений
var images = [];
for (var i = 0; i < backgrounds.length; i++) {
    var img = new Image();
    img.src = backgrounds[i];
    images.push(img);
}

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', 'url(' + backgrounds[current] + ')');
}

setInterval(nextBackground, 6000);

header.css('background-image', 'url(' + backgrounds[0] + ')');
