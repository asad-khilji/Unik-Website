
let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;

// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
  sliderImages[i].style.display = "none";
}
}

// Initial slide
function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if (current === 0) {
  current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
  current = -1;
}
slideRight();
});

startSlide();

const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

// toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})