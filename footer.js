function loadFooter() {
  const container = document.getElementById("footer-component");
  if (container) {
    // Detectar si estamos en index.html o en otra página
    const isIndex = window.location.pathname.includes('index.html') || window.location.pathname === '/';
    
    container.innerHTML = `
      <footer class="footer">
        <div class="footer-logo">
          <img src="https://i.ibb.co/TxyGh41Y/Chat-GPT-Image-6-oct-2025-01-25-07-p-m.png" alt="logo" class="footer__logo">
        </div>
        <nav class="footer-nav">
          <a href="${isIndex ? '#bienvenida-component' : 'index.html'}"><i class="fas fa-home"></i> Home</a>
          <a href="${isIndex ? '#servicios' : 'index.html#servicios'}"><i class="fas fa-user"></i> Servicios</a>
          <a href="${isIndex ? '#contacto' : 'index.html#contacto'}"><i class="fas fa-phone"></i> Contacto</a>
        </nav>
        <div class="social">
          <a href="https://linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
        <p class="copy">&copy; 2025 - Mauro</p>
      </footer>
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadFooter);