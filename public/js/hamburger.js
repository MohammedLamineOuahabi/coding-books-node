var hamburger = document.querySelector('#mobile-menu'),
  menu = document.querySelector('#desktop-menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.contains('animeX')
    ? (hamburger.classList.remove('animeX'), menu.classList.add('hide-on-phone'))
    : (hamburger.classList.add('animeX'), menu.classList.remove('hide-on-phone'));
}),
  menu.addEventListener('click', function () {
    console.log('remove animeX'),
      hamburger.classList.remove('animeX'),
      menu.classList.add('hide-on-phone');
  });
