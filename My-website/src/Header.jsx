function Header({ activeSection }) {
  return (
    <header className="headerr">
      <h1 className="logo">
        DC <span className="log">WEB</span>
      </h1>
      <nav className="navv">
        <ul className="navlinks">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className={activeSection === "faqs" ? "active" : ""}
            >
              FAQs
            </a>
          </li>
        </ul>
      </nav>
      <button className="butt">Work</button>
    </header>
  );
}
export default Header;
