const menuBtns = document.querySelectorAll('.menu-button');
const logoBtn = document.querySelector('#logo');
const navLinksContainer = document.querySelector('#nav-links-container');
const navLinks = document.querySelectorAll('.nav-link');

menuBtns.forEach(button => {
  button.addEventListener('click', e => {
    navLinksContainer.classList.toggle('hidden');
    toggleMenuBtns();
  });
});

logoBtn.addEventListener('click', function (e) {
  e.preventDefault();

  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});;

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
    menuBtns[btn].classList.toggle('hidden');
  };
};