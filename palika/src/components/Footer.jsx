function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="logo">
            <div className="logo-icon">SP</div>

            <div>
              <h2>Smart Palika</h2>
              <span>Digital Local Government</span>
            </div>
          </div>

          <p>
            Making local government services more accessible,
            transparent and convenient for citizens.
          </p>

        </div>

        <div className="footer-links">

          <div>
            <h4>Services</h4>
            <a href="/services">e-Sifaris</a>
            <a href="/services">Registration</a>
            <a href="/services">Tax Services</a>
          </div>

          <div>
            <h4>Information</h4>
            <a href="/notices">Notices</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <h4>Help</h4>
            <a href="/contact">Support</a>
            <a href="/contact">Complaints</a>
            <a href="/contact">FAQ</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Smart Palika. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;