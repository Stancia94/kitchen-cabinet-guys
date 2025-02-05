// настройки
const optionsCallback = {
  root: null,
  rootMargin: '400px 1000px 20px 1000px',
  threshold: 0.5
}

// функция обратного вызова
const callbackOpacity = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translate(0%,0%)';
    }
  });
}


// наблюдатель
const observer2 = new IntersectionObserver(callbackOpacity, optionsCallback);
const headingContent = document.querySelector('.heading__content');
const advantagesSVG = document.querySelectorAll('.heading__advantages-icon');

observer2.observe(headingContent);

let counter = 1.5;
advantagesSVG.forEach(svg => {
  svg.style.transition = ` all ${counter}s ease`;
  counter++;
  observer2.observe(svg)
})

const serviceCard = document.querySelectorAll('.our-service__card')

serviceCard.forEach(card => {
  observer2.observe(card);
})

