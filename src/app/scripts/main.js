import "../style/div.scss"

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuClose = document.querySelector('.menu-close');
 
  
    // Función para mostrar el menú desplegable
    function showMenu() {
      menuOverlay.classList.remove('hidden');
    }
  
    // Función para ocultar el menú desplegable
    function hideMenu() {
      menuOverlay.classList.add('hidden');
    }
  
    // Evento click en el icono de menú
    menuIcon.addEventListener('click', function () {
      showMenu();
    });
  
    // Evento click en el icono de cierre
    menuClose.addEventListener('click', function () {
      hideMenu();
    });
  
  });
  

