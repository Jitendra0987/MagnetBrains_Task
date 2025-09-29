


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo or Brand Name */}
        <div className="footer-logo">TaskManagerPro</div>

        {/* Links Section */}
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/support">Support</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} TaskManagerPro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
