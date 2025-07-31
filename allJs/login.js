const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');



registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const urlParams = new URLSearchParams(window.location.search);
  
  if (urlParams.has('showLogin')) {
    wrapper.classList.add('active-popup');
  }
});

// JavaScript for responsive header
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
  menuToggle.classList.toggle('open');
});


