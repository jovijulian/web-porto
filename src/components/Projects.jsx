import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    const detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    const detailsModalClose = () => this.setState({ detailsModalShow: false });

    const sectionName = this.props.resumeBasicInfo?.section_name?.projects || "Featured Projects";
    const projectsList = this.props.resumeProjects || [];

    const projectCards = projectsList.map((project, index) => {
      const mainTechnologies = (project.technologies || []).slice(0, 3);

      return (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
          <div
            className="project-card h-100"
            onClick={() => detailsModalShow(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") detailsModalShow(project);
            }}
          >
            <div className="project-thumbnail-wrapper">
              <img
                src={project.images[0]}
                alt={project.title}
                className="project-thumbnail-img"
              />
              <div className="project-overlay">
                <span className="view-details-btn">
                  <i className="fas fa-eye mr-2"></i> View Project Details
                </span>
              </div>
            </div>

            <div className="project-card-body">
              <h5 className="project-card-title">{project.title}</h5>
              <p className="project-card-snippet">
                {project.description.length > 115
                  ? project.description.substring(0, 115) + "..."
                  : project.description}
              </p>

              <div className="project-tech-pills">
                {mainTechnologies.map((tech, i) => (
                  <span key={i} className="tech-pill">
                    {tech.name}
                  </span>
                ))}
                {project.technologies?.length > 3 && (
                  <span className="tech-pill tech-pill-more">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio" className="py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
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
