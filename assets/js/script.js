const menuBtns = document.querySelectorAll('.menu-button');
const scrollToTopBtn = document.querySelector('#scroll-to-top');
const headerSection = document.querySelector('#header');
const navLinksContainer = document.querySelector('#nav-links-container');
const navLinks = document.querySelectorAll('.to-section');

menuBtns.forEach(button => {
  button.addEventListener('click', e => {
    navLinksContainer.classList.toggle('hidden');
    toggleMenuBtns();
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    navLinksContainer.classList.toggle('hidden');
    toggleMenuBtns();
  });
});

const toggleMenuBtns = () => {
  for (let btn = 0; btn <= menuBtns.length; btn++) {
    menuBtns[btn].classList.toggle('transparent');
  };
};

window.onscroll = () => {
  if (window.scrollX === 0)
    scrollToTopBtn.classList.add('transparent');

  if (window.scrollY > headerSection.offsetTop)
    scrollToTopBtn.classList.remove('transparent');
};

scrollToTopBtn.onclick = () => {
  window.scrollTo(0, 0);

  scrollToTopBtn.classList.add('transparent');
};