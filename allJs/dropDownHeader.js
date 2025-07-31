// JavaScript for responsive header
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
  menuToggle.classList.toggle('open');
});
