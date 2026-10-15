import React, { Component } from "react";
import Switch from "react-switch";
import Typewriter from "./Typewriter";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, isScrolled: false, mobileMenuOpen: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState((prev) => ({ mobileMenuOpen: !prev.mobileMenuOpen }));
  }

  closeMobileMenu() {
    this.setState({ mobileMenuOpen: false });
  }

  componentDidMount() {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    this.setState({ checked: isDark });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 30) {
      if (!this.state.isScrolled) this.setState({ isScrolled: true });
    } else {
      if (this.state.isScrolled) this.setState({ isScrolled: false });
    }
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme(checked);
  }

  setTheme(isDark) {
    const newTheme = isDark ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
  }

  render() {
    const name = this.props.sharedData ? this.props.sharedData.name : "Jovi Julian Hendri";
    const titles = this.props.sharedData
      ? this.props.sharedData.titles
      : [
          "Full Stack Developer",
          "IoT Systems Engineer",
          "Microservices & Backend Specialist",
          "Next.js & Laravel Developer",
        ];

    return (
      <header id="home" className="hero-section hero-full-screen cartoon-section">
        {/* Minimalist Cartoon Background: </> Badges at Top-Right & Bottom-Left */}
        <div className="hero-cartoon-bg" aria-hidden="true">
          {/* Top-Right </> Code Badge */}
          <div className="cartoon-doodle doodle-code-top-right">
            <div className="code-badge-inner">&lt;/&gt;</div>
          </div>

          {/* Bottom-Left </> Code Badge */}
          <div className="cartoon-doodle doodle-code-bottom-left">
            <div className="code-badge-inner">&lt;/&gt;</div>
          </div>
        </div>

        {/* Navigation Bar - Polished & Clearly Defined */}
        <nav className={`top-navbar ${this.state.isScrolled ? "navbar-scrolled" : ""}`}>
          <div className="container d-flex justify-content-between align-items-center">
            {/* Logo Badge */}
            <a href="#home" className="navbar-brand-logo cartoon-logo-badge">
              {/* <span className="logo-sparkle">✦</span> */}
              <span className="logo-accent">Jo</span>
              {/* <span className="logo-dot">.</span> */}
              <span className="logo-role-tag d-none d-sm-inline-block">portfolio</span>
            </a>

            <div className="d-flex align-items-center gap-2 gap-sm-3">
              {/* Clearly Defined Cartoon Navigation Pills */}
              <ul className="navbar-nav-links d-none d-md-flex align-items-center mb-0 list-unstyled gap-2">
                <li>
                  <a href="#about" className="nav-link-item cartoon-nav-pill">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav-link-item cartoon-nav-pill">
                    <span>Projects</span>
                  </a>
                </li>
                <li>
                  <a href="#skills" className="nav-link-item cartoon-nav-pill">
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a href="#resume" className="nav-link-item cartoon-nav-pill">
                    <span>Experience</span>
                  </a>
                </li>
              </ul>

              {/* Theme Toggle Box */}
              <div className="theme-toggle-wrap cartoon-toggle-wrapper">
                <Switch
                  checked={this.state.checked}
                  onChange={this.onThemeSwitchChange}
                  offColor="#e5e5e5"
                  onColor="#8B5CF6"
                  offHandleColor="#18181b"
                  onHandleColor="#ffffff"
                  className="react-switch cartoon-theme-switch"
                  width={52}
                  height={26}
                  uncheckedIcon={
                    <span className="switch-icon">
                      <i className="fas fa-sun" style={{ color: "#d97706" }}></i>
                    </span>
                  }
                  checkedIcon={
                    <span className="switch-icon">
                      <i className="fas fa-moon" style={{ color: "#facc15" }}></i>
                    </span>
                  }
                  id="header-theme-switch"
                  aria-label="Toggle dark/light theme"
                />
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="cartoon-mobile-toggle d-md-none"
                onClick={this.toggleMobileMenu}
                aria-label="Toggle mobile navigation menu"
                aria-expanded={this.state.mobileMenuOpen}
              >
                <i className={`fas ${this.state.mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
              </button>
            </div>
          </div>

          {/* Animated Cartoon Mobile Navigation Drawer */}
          <div className={`cartoon-mobile-drawer d-md-none ${this.state.mobileMenuOpen ? "drawer-open" : ""}`}>
            <div className="container">
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li>
                  <a href="#about" className="mobile-nav-pill" onClick={this.closeMobileMenu}>
                    <span className="mobile-pill-label">About</span>
                    <i className="fas fa-arrow-right ms-auto mobile-arrow"></i>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="mobile-nav-pill" onClick={this.closeMobileMenu}>
                    <span className="mobile-pill-label">Projects</span>
                    <i className="fas fa-arrow-right ms-auto mobile-arrow"></i>
                  </a>
                </li>
                <li>
                  <a href="#skills" className="mobile-nav-pill" onClick={this.closeMobileMenu}>
                    <span className="mobile-pill-label">Skills</span>
                    <i className="fas fa-arrow-right ms-auto mobile-arrow"></i>
                  </a>
                </li>
                <li>
                  <a href="#resume" className="mobile-nav-pill" onClick={this.closeMobileMenu}>
                    <span className="mobile-pill-label">Experience</span>
                    <i className="fas fa-arrow-right ms-auto mobile-arrow"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Content - Perfectly Centered in Viewport */}
        <div className="hero-content-container flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-lg-10 col-xl-9">
                <h1 className="hero-name-title mb-3">{name}</h1>

                <div className="hero-typewriter-container mb-4">
                  <span className="typewriter-prefix">Specialized in</span>
                  <span className="typewriter-box">
                    <Typewriter words={titles} className="hero-typewriter-text" />
                  </span>
                </div>

                {/* Explore Projects Button */}
                {/* <div className="hero-scroll-wrapper">
                  <a href="#portfolio" className="btn-explore-more cartoon-btn-primary" aria-label="Explore Projects and scroll down">
                    <span className="explore-text">Explore Projects</span>
                    <span className="scroll-indicator-arrow">
                      <i className="fas fa-arrow-down"></i>
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cartoon Scroll Down Indicator (Triple Chevrons matching reference image) */}
        <div className="hero-scroll-down-wrapper">
            <div className="hero-scroll-wrapper">
                  <a href="#about" className="btn-explore-more cartoon-btn-primary" aria-label="Explore Projects and scroll down">
                    <span className="explore-text">Explore More</span>
                    <span className="scroll-indicator-arrow">
                      <i className="fas fa-arrow-down"></i>
                    </span>
                  </a>
                </div>
        </div>
      </header>
    );
  }
}

export default Header;
