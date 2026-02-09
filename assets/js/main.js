/*=============== SWIPER PROJECTS ===============*/
const projectsSwiper = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/*=============== WORK TABS ===============*/
const workButtons = document.querySelectorAll('.work__button');
const workContents = document.querySelectorAll('.work__content');

workButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    workButtons.forEach((btn) => btn.classList.remove('work__button-active'));
    workContents.forEach((content) => {
      content.classList.remove('work__content-active');
      if (content.id === targetId) {
        content.classList.add('work__content-active');
      }
    });
    button.classList.add('work__button-active');
  });
});

/*=============== COPY EMAIL IN CONTACT ===============*/
const contactButton = document.querySelector('.contact__button');
if (contactButton) {
  contactButton.addEventListener('click', () => {
    const email = contactButton.getAttribute('data-email') || 'anid123@email.com';
    navigator.clipboard.writeText(email).then(() => {
      contactButton.textContent = 'Copied!';
      setTimeout(() => {
        contactButton.textContent = 'Copy email';
      }, 2000);
    });
  });
}

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const yearEl = document.getElementById('current-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
