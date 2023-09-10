import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const dropdownRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 100;
    setShowNav(scrollY <= scrollThreshold);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

 
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
}, [isOpen]);

  return (
    <header className="header">
      <nav
        className="nav"
        style={{ opacity: showNav ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <Link className="link" to="/">
          <h1 className="logo">JP MORGAN</h1>
          <h3 className="logo">CONSTRUCTION</h3>
        </Link>

        <div className="hamburger" onClick={handleToggle}>
          <span></span>
        </div>

        <ul className={`list ${isOpen ? "open" : ""} `}>
          <li className="list__item">
              <Link className="link" to="/About">
                About
              </Link>
          </li>
          <li className="list__item">
            <Link className="link" to="/Projects">
              Projects
            </Link>
          </li>
          <li className="list__item">
            <Link className="link" to="/Marine">
              Marine
            </Link>
          </li>
          <li className="list__item">
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
