// Get the hamburger icon and the menu
const menuToggle = document.querySelector('.links-toggle');
const menu = document.querySelector('.links-class');

// Add event listener to the hamburger icon
menuToggle.addEventListener('click', () => {
  // Toggle the display of the menu
  menu.classList.toggle('show-links');
});
