const slides = document.querySelectorAll('.slide');
var index = 0;

function slideshow() {
    slides.forEach(slide => {slide.style.display = 'none'});
    index++;
    index > slides.length ? index = 1 : console.log('ignore this');
    slides[index-1].style.display = 'grid';
    setTimeout(slideshow, 5000);
}

slideshow();