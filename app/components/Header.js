// components/Header.js
import Link from 'next/link'; // Import Link from Next.js

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">My Project</div>
      <nav>
        <ul className="navbar">
          <li><Link href="/" className="nav-item">Home</Link></li>
          <li><Link href="/about" className="nav-item">About</Link></li>
          <li><Link href="/contact" className="nav-item">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
