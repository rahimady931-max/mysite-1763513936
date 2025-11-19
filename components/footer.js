class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        .footer {
          background-color: #1f2937;
          color: #ffffff;
          padding: 3rem 0 2rem;
          margin-top: 4rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section h3 {
          color: #3b82f6;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }
        .footer-section p {
          color: #d1d5db;
          line-height: 1.6;
        }
        .footer-links {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: #3b82f6;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-link {
          color: #d1d5db;
          transition: color 0.3s ease;
        }
        .social-link:hover {
          color: #3b82f6;
        }
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>All inMG</h3>
              <p>Votre destination ultime pour tous vos besoins. Nous proposons des solutions innovantes et fiables pour votre entreprise.</p>
              <div class="social-links">
                <a href="#" class="social-link"><i data-feather="facebook"></i></a>
                <a href="#" class="social-link"><i data-feather="twitter"></i></a>
                <a href="#" class="social-link"><i data-feather="instagram"></i></a>
                <a href="#" class="social-link"><i data-feather="linkedin"></i></a>
              </div>
            </div>
            <div class="footer-section">
              <h3>Liens rapides</h3>
              <ul class="footer-links">
                <li><a href="index.html">Accueil</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="about.html">À propos</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Contact</h3>
              <ul class="footer-links">
                <li><i data-feather="mail"></i> contact@allinmg.com</li>
                <li><i data-feather="phone"></i> +33 1 23 45 67 89</li>
                <li><i data-feather="map-pin"></i> Paris, France</li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 All inMG. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);