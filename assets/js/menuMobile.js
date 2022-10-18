const handleActive = ({target}) => {
  target.classList.toggle('active')
};
const button = document.querySelector('#menu-mobile');

button.addEventListener('click', handleActive)
