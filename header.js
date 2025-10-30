function loadHeader() {
  const container = document.getElementById("header-component");
  if (container) {
    const isPortfolio = window.location.pathname.includes('portfolio.html');
    
    container.innerHTML = `
      <header>
        <div class="header">
          <a href="index.html">
            <img src="https://i.ibb.co/TxyGh41Y/Chat-GPT-Image-6-oct-2025-01-25-07-p-m.png" alt="logo" class="header__logo">
          </a>
          <nav class="header__menu">
            ${isPortfolio 
              ? '<a href="index.html" class="header__menu-link">Home</a>' 
              : '<a href="portfolio.html" class="header__menu-link">Portfolio</a>'
            }
            <a href="index.html#servicios" class="header__menu-link">Servicios</a>
            <a href="index.html#contacto" class="header__menu-link">Contacto</a>
          </nav>
          <div class="header__burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    `;
  } else {
    console.log('No se encontró el div #header-component');
  }
}

// Manejar el scroll cuando se carga la página con hash
window.addEventListener('load', function() {
  if (window.location.hash) {
    setTimeout(function() {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }
});

document.addEventListener("DOMContentLoaded", loadHeader);
console.log('Header insertado correctamente');