document.addEventListener('DOMContentLoaded', function () {
  const modalButtons1 = document.querySelectorAll('.button-link-modal');

  modalButtons1.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
      } else {
        elem.classList.add('active');
      }
    })
  })

  const modalButtonsServices = document.querySelector('.service');
  const mobileOverlayNav = document.querySelector('.mobile-overlay__nav');

  modalButtonsServices.addEventListener('click', () => {
    mobileOverlayNav.innerHTML =
      `
  <li class="mobile-overlay__nav-item button-back">Back to the menu
  </li>
  <li class="mobile-overlay__nav-item ">
    Cabinet Refacing
  </li>
  <li class="mobile-overlay__nav-item ">Cabinet Doors Replacement
  </li>
  <li class="mobile-overlay__nav-item ">Thermofoil Cabinet Door Repair
  </li>
  <li class="mobile-overlay__nav-item ">Decorative Wall Panels
  </li>
  <li class="mobile-overlay__nav-item ">View All Services</li>
  `;
    const modalButtonBack = document.querySelector('.button-back')
    modalButtonBack.addEventListener('click', () => {
      mobileOverlayNav.innerHTML =
        `
      <li class="mobile-overlay__nav-item button-link-modal2 service">
      Services
      </li>
      <li class="mobile-overlay__nav-item button-link-modal2">
        Commercial
      </li>
      <li class="mobile-overlay__nav-item button-link-modal2">Gallery
      </li>
      <li class="mobile-overlay__nav-item button-link-modal2">About Us
      </li>
      <li class="mobile-overlay__nav-item button-link-modal2">Areas We
        Serve
      </li>
      <li class="mobile-overlay__nav-item button-link-modal2">Contact
      Us</li>
  `;
    })
  });


  const mobileOverlay = document.getElementById('mobileOverlay');
  const openOverlayMobile = document.querySelector('.button-burger');
  const closeOverlayMobile = document.querySelector('.button-burger-close');

  openOverlayMobile.addEventListener('click', () => {
    mobileOverlay.showModal();
    mobileOverlay.style.display = 'flex'
    this.body.style.overflow = 'hidden';
  });
  closeOverlayMobile.addEventListener('click', () => {
    mobileOverlay.close();
    mobileOverlay.style.display = 'none'
    this.body.style.overflow = 'visible';
  });

  const formFeedback = document.getElementById('formFeedback');
  formFeedback.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formFeedback);
    const feedBack = document.querySelector('.feedback__inner')
    feedBack.innerHTML =
      `
        <h2 class="feedback__title">Thank you!</h2>
          <p class="feedback__subheading p--m">Your message has been submitted
          </p>
    `;
  })
});