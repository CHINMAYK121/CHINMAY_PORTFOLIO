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

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(`.home__data, .projects__container, .testimonials__container, .footer__container`);
sr.reveal(`.home__info div`, { delay: 600, origin: 'bottom', interval: 100 });
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'left' });
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin: 'right' });
sr.reveal(`.qualification__content, .services__card`, { interval: 100 });

// Custom reveals for this specific portfolio structure
sr.reveal(`.nav__logo, .nav__menu`, { origin: 'top', interval: 100 });
sr.reveal(`.home__greeting, .home__name, .home__split, .home__profession`, { origin: 'left', interval: 100 });
sr.reveal(`.home__social`, { origin: 'bottom', delay: 800 });
sr.reveal(`.home__image`, { origin: 'right', delay: 800 });
sr.reveal(`.section__title`, { origin: 'top', interval: 100 });
sr.reveal(`.about__image`, { origin: 'left' });
sr.reveal(`.about__description, .about .button`, { origin: 'right', interval: 100 });
sr.reveal(`.projects__card`, { interval: 150 });
sr.reveal(`.work__card`, { interval: 100 });
sr.reveal(`.services__item`, { interval: 100 });
sr.reveal(`.testimonials__card`, { interval: 100 });
sr.reveal(`.contact__intro, .contact__item`, { interval: 100 });

/*=============== PARALLAX MOUSEMOVE ===============*/
document.addEventListener('mousemove', (e) => {
  const homeContent = document.querySelector('.home__content');
  if (homeContent) {
    const x = (window.innerWidth - e.pageX * 2) / 90;
    const y = (window.innerHeight - e.pageY * 2) / 90;

    homeContent.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }

  // Also apply to background video overlay for a depth effect
  const videoOverlay = document.querySelector('.video-background__overlay');

  if (videoOverlay) {
    const x = (window.innerWidth - e.pageX * 2) / 120; // Slower movement
    const y = (window.innerHeight - e.pageY * 2) / 120;
    videoOverlay.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }
});

/*=============== MOUSE TRACKING FOR CARDS (SPOTLIGHT EFFECT) ===============*/
const cards = document.querySelectorAll('.projects__card, .services__item, .testimonials__card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

/*=============== LINK ATTRIBUTE HANDLING ===============*/
const linkedElements = document.querySelectorAll('[link]');

linkedElements.forEach(element => {
  element.addEventListener('click', () => {
    const link = element.getAttribute('link');
    if (link) {
      window.open(link, '_blank');
    }
  });
});
