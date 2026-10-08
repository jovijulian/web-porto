import React, { Component } from "react";
import Switch from "react-switch";
import Typewriter from "./Typewriter";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, isScrolled: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
      <header id="home" className="hero-section">
        {/* Navigation Bar */}
        <nav className={`top-navbar ${this.state.isScrolled ? "navbar-scrolled" : ""}`}>
          <div className="container d-flex justify-content-between align-items-center">
            <a href="#home" className="navbar-brand-logo">
              <span className="logo-accent">Jo</span>
            </a>

            <div className="d-flex align-items-center">
              <ul className="navbar-nav-links d-none d-md-flex align-items-center mb-0 me-4 list-unstyled">
                <li><a href="#about" className="nav-link-item">About</a></li>
                <li><a href="#portfolio" className="nav-link-item">Projects</a></li>
                <li><a href="#skills" className="nav-link-item">Skills</a></li>
                <li><a href="#resume" className="nav-link-item">Experience</a></li>
              </ul>

              <div className="theme-toggle-wrap">
                <Switch
                  checked={this.state.checked}
                  onChange={this.onThemeSwitchChange}
                  offColor="#dcd6cb"
                  onColor="#2563eb"
                  offHandleColor="#ffffff"
                  onHandleColor="#ffffff"
                  className="react-switch"
                  width={50}
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
            </div>
          </div>
        </nav>

        {/* Hero Content - Clean, Minimal & High-Impact */}
        <div className="container hero-content-container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <h1 className="hero-name-title mb-3">{name}</h1>

              <div className="hero-typewriter-container mb-5">
                <span className="typewriter-prefix">Specialized in</span>
                <Typewriter words={titles} className="hero-typewriter-text" />
              </div>

              {/* Single Central Animated Explore More Button */}
              <div className="hero-scroll-wrapper">
                <a href="#about" className="btn-explore-more" aria-label="Explore More and scroll down">
                  <span className="explore-text">Explore More</span>
                  <span className="scroll-indicator-arrow">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
