// Importing the styles
import '../../styles/HeaderFooterStyles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 My Project. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://twitter.com" className="footer-link">Twitter</a>
        <a href="https://facebook.com" className="footer-link">Facebook</a>
        <a href="https://linkedin.com" className="footer-link">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
