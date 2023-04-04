const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider #image');
const prevButton = document.querySelector('.slider .prev');
const nextButton = document.querySelector('.slider .next');

let currentImage = 0;
let timer;

slider.addEventListener('mouseenter', startSlideshow);
slider.addEventListener('mouseleave', stopSlideshow);

function showImage(index) {
  images[currentImage].style.display = 'none';
  images[index].style.display = 'block';
  currentImage = index;
}

function prevImage() {
  let index = currentImage - 1;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage(index);
}

function nextImage() {
  let index = currentImage + 1;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
}

function startSlideshow() {
  timer = setInterval(nextImage, 2000);
  images[currentImage].style.display = 'none';
  currentImage = 0;
  images[currentImage].style.display = 'block';
}

function stopSlideshow() {
  clearInterval(timer);
  images[currentImage].style.display = 'none';
  currentImage = 0;
  images[currentImage].style.display = 'block';
}

prevButton.addEventListener('mouseover', function() {
  prevButton.style.backgroundColor = 'black';
});

prevButton.addEventListener('mouseout', function() {
  prevButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});

nextButton.addEventListener('mouseover', function() {
  nextButton.style.backgroundColor = 'black';
});

nextButton.addEventListener('mouseout', function() {
  nextButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});
