import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      activeCategory: "ALL",
    };
  }

  getCategory(project) {
    const title = (project.title || "").toLowerCase();
    const desc = (project.description || "").toLowerCase();
    const tech = (project.technologies || []).map((t) => t.name.toLowerCase()).join(" ");

    if (
      title.includes("sensor") ||
      title.includes("satkomlek") ||
      title.includes("smart") ||
      title.includes("water") ||
      title.includes("meter") ||
      title.includes("forta") ||
      desc.includes("iot") ||
      desc.includes("hardware")
    ) {
      return "IoT & Telematics";
    }

    if (
      title.includes("reeval") ||
      title.includes("erp") ||
      title.includes("garis") ||
      title.includes("kafka") ||
      desc.includes("microservice") ||
      desc.includes("enterprise") ||
      tech.includes("kafka") ||
      tech.includes("golang")
    ) {
      return "Microservices & Backend";
    }

    return "Web Developing";
  }

  getGitHubUrl(project) {
    if (project.url && project.url.trim().length > 0) return project.url;
    const cleanTitle = (project.title || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return `https://github.com/jovijulian/${cleanTitle}`;
  }

  render() {
    const detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    const detailsModalClose = () => this.setState({ detailsModalShow: false });

    const sectionName = this.props.resumeBasicInfo?.section_name?.projects || "Featured Projects";
    const projectsList = this.props.resumeProjects || [];

    const categories = ["ALL", "Web Developing", "IoT & Telematics", "Microservices & Backend"];

    const filteredProjects =
      this.state.activeCategory === "ALL"
        ? projectsList
        : projectsList.filter((p) => this.getCategory(p) === this.state.activeCategory);

    const projectCards = filteredProjects.map((project, index) => {
      const category = this.getCategory(project);
      const mainTechnologies = (project.technologies || []).slice(0, 4);
      const githubUrl = this.getGitHubUrl(project);

      return (
        <div className="col-12 col-xl-6 mb-5" key={index}>
          <div className="cartoon-project-wrapper">
            {/* Top Purple Pill Banner from User Reference */}

            {/* Main Cartoon Project Card */}
            <div
              className="cartoon-showcase-card"
              role="button"
              tabIndex={0}
              onClick={() => detailsModalShow(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") detailsModalShow(project);
              }}
            >
              <div className="row g-0 h-100">
                {/* Left Side: Info & Interactive Pill Links */}
                <div className="col-lg-6 cartoon-info-column d-flex flex-column justify-content-between p-4">
                  <div>
                    {/* Top Handle & Action Button */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="card-top-handle"></div>
                      <div
                        className="cartoon-circle-btn"
                        title="Interactive Settings"
                        onClick={(e) => {
                          e.stopPropagation();
                          detailsModalShow(project);
                        }}
                      >
                        <i className="fas fa-cog"></i>
                      </div>
                    </div>


                    {/* Big Bold Punchy Title */}
                    <h3 className="cartoon-card-title mb-3">{project.title}</h3>

                    <p className="cartoon-card-snippet mb-3">
                      {project.description.length > 130
                        ? project.description.substring(0, 130) + "..."
                        : project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="cartoon-tech-pills mb-4">
                      {mainTechnologies.map((tech, i) => (
                        <span key={i} className="tech-pill cartoon-tech-pill">
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies?.length > 4 && (
                        <span className="tech-pill cartoon-tech-pill tech-pill-more">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Mobile Tap Call-To-Action */}
                    <div className="cartoon-mobile-cta d-lg-none mt-3">
                      <span className="cartoon-action-pill">
                        <i className="fas fa-eye me-2"></i> View Project Details
                        <i className="fas fa-arrow-right ms-2 arrow-nudge"></i>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Image Showcase with Cartoon Frame */}
                <div className="col-lg-6 cartoon-visual-column p-4 d-flex flex-column justify-content-center">
                  <div className="cartoon-image-frame position-relative">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="cartoon-preview-img"
                    />
                    <div className="cartoon-image-overlay">
                      <span className="cartoon-view-btn">
                        <i className="fas fa-eye me-2"></i> View Project Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio" className="py-5 cartoon-section">
        <div className="container">
          <div className="section-header text-center mb-4">
            <div className="cartoon-tag-hero mb-2 d-inline-block">
              <span>CURATED WORKS</span>
            </div>
            <h2 className="section-title-clean">{sectionName}</h2>
            <div className="section-title-line"></div>
          </div>


          <div className="row g-4">{projectCards}</div>

          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
