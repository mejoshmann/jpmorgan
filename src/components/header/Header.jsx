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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleScroll]);

  return (
    <header className="header">
      <nav
        className="nav"
        style={{ opacity: showNav ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <Link className="link" to="/Home">
          <h1 className="logo">JP MORGAN</h1>
          <h3 className="logo">CONSTRUCTION</h3>
        </Link>

        <div className="hamburger" onClick={handleToggle}>
          <span></span>
        </div>

        <ul className={`list ${isOpen ? "open" : ""} `}>
          <li className="list__item">
              <a className="link" href="#about">
                About
              </a>
          </li>
          <li className="list__item">
            <Link className="link" to="/Projects">
              Projects
            </Link>
          </li>
          <li className="list__item">
            <Link className="link" to="/Steel">
              Marine
            </Link>
          </li>
          <li className="list__item">
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
