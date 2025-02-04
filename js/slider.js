document.addEventListener('DOMContentLoaded', function () {
  function slider(sliderContainer) {

    const slider = document.querySelector(sliderContainer);
    const slides = slider.querySelectorAll('.card');
    const slide = slider.querySelector('.card');
    const slideLeftButton = slider.parentElement.querySelector('.left');
    const slideRightButton = slider.parentElement.querySelector('.right');


    let widthSlide = parseInt(getComputedStyle(slide).width);
    let sliderGap = parseInt(getComputedStyle(slider).gap);

    let currentIndex = 0;
    let visibleSlides = 1;

    window.addEventListener('resize', (event) => {
      widthSlide = parseInt(getComputedStyle(slide).width);
      sliderGap = parseInt(getComputedStyle(slider).gap);
    });

    // Функция для обновления слайдера
    function updateSlider() {
      slider.style.transform = `translateX(-${(sliderGap + widthSlide) * currentIndex}px)`;
    }

    // Переключение на следующий слайд
    slideRightButton.addEventListener('click', function () {
      if (currentIndex < slides.length - visibleSlides) {
        currentIndex++;
      } else {
        currentIndex = 0;  // Переход к первому слайду
      }
      updateSlider();
    });

    // Переключение на предыдущий слайд
    slideLeftButton.addEventListener('click', function () {
      // const visibleSlides = (window.innerWidth <= 1024) ? 1 : 2;
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - visibleSlides;  // Переход к последнему слайду
      }
      updateSlider();
    });

    // Обновление слайдера при изменении размера окна
    window.addEventListener('resize', updateSlider);

  }
  slider('.gallerySlider');
  slider('.testimonialsSlider');
});