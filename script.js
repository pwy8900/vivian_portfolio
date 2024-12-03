// Array of image sources
const images = [
    'img/Rainbow.png',
    'img/OGA.png',
    'img/AirRacket.png',
    'img/Shiny.png',
    'img/data.png',
    'img/FullFree.png'
];

let currentIndex = 0;

// Select the image element
const imgElement = document.getElementById('work-image');

// Function to change the image
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    imgElement.src = images[currentIndex]; // Update the image source
}

// Change image automatically every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);