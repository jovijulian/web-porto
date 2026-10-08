import React, { Component } from "react";

class Footer extends Component {
  render() {
    const networks = this.props.sharedBasicInfo?.social?.map((network) => (
      <span key={network.name} className="mx-3">
        <a
          href={network.url}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          aria-label={network.name}
        >
          <i className={network.class}></i>
        </a>
      </span>
    ));

    const name = this.props.sharedBasicInfo?.name || "Jovi Julian Hendri";

    return (
      <footer className="footer-section py-4">
        <div className="container text-center">
          <div className="footer-socials mb-3">{networks}</div>
          <div className="footer-copyright">
            <small>
              &copy; {new Date().getFullYear()} {name}.
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
