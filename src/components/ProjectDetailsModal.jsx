import React, { Component } from "react";
import { Modal, Carousel } from "react-bootstrap";

class ProjectDetailsModal extends Component {
  renderTechIcon(icon) {
    const nameLower = (icon.name || "").toLowerCase();
    const classLower = (icon.class || "").toLowerCase();

    if (nameLower.includes("next")) {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "inline-block", verticalAlign: "middle" }}
        >
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="#ffffff"
          />
          <rect x="114" y="54" width="12" height="72" fill="#ffffff" />
        </svg>
      );
    }

    if (nameLower.includes("golang") || nameLower === "go" || classLower.includes("golang") || classLower.includes("go-")) {
      return <i className="devicon-go-plain" style={{ fontSize: "1.25rem", lineHeight: 1, color: "#00ADD8" }}></i>;
    }

    if (nameLower.includes("fiber") || classLower.includes("fiber")) {
      return <i className="devicon-fiber-plain" style={{ fontSize: "1.25rem", lineHeight: 1, color: "#00ADD8" }}></i>;
    }

    if (nameLower.includes("cicd") || nameLower.includes("ci/cd") || classLower.includes("infinity")) {
      return <i className="fas fa-infinity" style={{ fontSize: "1.15rem", lineHeight: 1, color: "#2563eb" }}></i>;
    }

    if (nameLower.includes("websocket") || classLower.includes("exchange-alt")) {
      return <i className="fas fa-exchange-alt" style={{ fontSize: "1.15rem", lineHeight: 1, color: "#f59e0b" }}></i>;
    }

    if (nameLower.includes("nginx") || classLower.includes("nginx")) {
      return <i className="devicon-nginx-original" style={{ fontSize: "1.25rem", lineHeight: 1, color: "#009639" }}></i>;
    }

    return <i className={icon.class} style={{ fontSize: "1.2rem", lineHeight: 1 }}></i>;
  }

  render() {
    if (!this.props.data) return null;

    const { technologies = [], images = [], title = "", description = "", url = "" } = this.props.data;

    const techList = technologies.map((icon, i) => (
      <li className="list-inline-item m-1" key={i}>
        <div className="tech-badge">
          <span className="tech-badge-icon">{this.renderTechIcon(icon)}</span>
          <span className="tech-badge-name">{icon.name}</span>
        </div>
      </li>
    ));

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <div className="modal-header-custom d-flex justify-content-between align-items-center px-4 pt-3 pb-3">
          <h4 className="modal-title mb-0">{title}</h4>
          <button
            type="button"
            className="modal-close-btn"
            onClick={this.props.onHide}
            aria-label="Close"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <Modal.Body className="px-4 pb-4 pt-3">
          {images && images.length > 0 && (
            <div className="modal-image-container mb-4">
              {images.length > 1 ? (
                <Carousel interval={null} indicators={true} controls={true}>
                  {images.map((elem, i) => (
                    <Carousel.Item key={i}>
                      <img
                        className="d-block w-100 modal-preview-img"
                        src={elem}
                        alt={`${title} slide ${i + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <img
                  className="d-block w-100 modal-preview-img"
                  src={images[0]}
                  alt={title}
                />
              )}
            </div>
          )}

          <div className="modal-info">
           

            <div className="modal-description-wrapper mb-4">
              <h6 className="section-subheading mb-2">Overview &amp; Architecture</h6>
              <p className="modal-description">{description}</p>
            </div>

            <div className="modal-tech-stack">
              <h6 className="section-subheading mb-2">Technologies &amp; Architecture</h6>
              <ul className="list-inline mb-0 d-flex flex-wrap align-items-center">{techList}</ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
