import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experience extends Component {
  render() {
    const sectionName = this.props.resumeBasicInfo?.section_name?.experience || "Work Experience";
    const experiences = this.props.resumeExperience || [];

    const workElements = experiences.map((work, i) => {
      const responsibilities = work.technologies || [];
      const mainTechnologies = work.mainTech || [];

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#2563eb",
            color: "#ffffff",
            boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.2)",
          }}
          icon={<i className="fas fa-briefcase experience-icon"></i>}
          key={i}
        >
          <div className="experience-header mb-2">
            <h4 className="vertical-timeline-element-title mb-1">{work.title}</h4>
            <h5 className="vertical-timeline-element-subtitle">{work.company}</h5>
          </div>

          <div className="main-tech-tags mb-3">
            {mainTechnologies.map((tech, idx) => (
              <span className="badge-tech-primary mr-2 mb-1 m-1" key={idx}>
                {tech}
              </span>
            ))}
          </div>

          <ul className="experience-bullet-list pl-3 mb-0">
            {responsibilities.map((item, idx) => (
              <li key={idx} className="experience-bullet-item mb-2">
                {item}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title-clean">{sectionName}</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="timeline-container mx-auto">
            <VerticalTimeline>
              {workElements}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
