class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .navbar {
          background-color: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #3b82f6;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
        }
        .nav-link:hover {
          color: #3b82f6;
          background-color: #f3f4f6;
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #ffffff;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .nav-links.active {
            display: flex;
          }
        }
      </style>
      <nav class="navbar">
        <div class="navbar-container">
          <a href="index.html" class="logo">All inMG</a>
          <button class="mobile-menu-button">
            <i data-feather="menu"></i>
          </button>
          <ul class="nav-links">
            <li><a href="index.html" class="nav-link">Accueil</a></li>
            <li><a href="services.html" class="nav-link">Services</a></li>
            <li><a href="about.html" class="nav-link">À propos</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;

    // Mobile menu functionality
    const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
    const navLinks = this.shadowRoot.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      feather.replace();
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);