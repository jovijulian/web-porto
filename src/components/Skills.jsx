import React, { Component } from "react";

class Skills extends Component {
  renderSkillIcon(skill) {
    const nameLower = (skill.name || "").toLowerCase();
    const classLower = (skill.class || "").toLowerCase();

    if (nameLower.includes("next")) {
      return (
        <svg
          className="skill-devicon"
          width="36"
          height="36"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="var(--nextjs-inverted, #0b1120)"
          />
          <rect
            x="114"
            y="54"
            width="12"
            height="72"
            fill="var(--nextjs-inverted, #0b1120)"
          />
        </svg>
      );
    }

    if (nameLower.includes("golang") || nameLower === "go" || classLower.includes("golang") || classLower.includes("go-")) {
      return <i className="devicon-go-plain skill-devicon" style={{ color: "#00ADD8" }}></i>;
    }

    if (nameLower.includes("fiber") || classLower.includes("fiber")) {
      return <i className="devicon-fiber-plain skill-devicon" style={{ color: "#00ADD8" }}></i>;
    }

    if (nameLower.includes("cicd") || nameLower.includes("ci/cd") || classLower.includes("infinity")) {
      return <i className="fas fa-infinity skill-devicon" style={{ color: "#2563eb", fontSize: "2rem" }}></i>;
    }

    if (nameLower.includes("websocket") || classLower.includes("exchange-alt")) {
      return <i className="fas fa-exchange-alt skill-devicon" style={{ color: "#f59e0b", fontSize: "2rem" }}></i>;
    }

    if (nameLower.includes("nginx") || classLower.includes("nginx")) {
      return <i className="devicon-nginx-original skill-devicon" style={{ color: "#009639" }}></i>;
    }

    return <i className={`${skill.class} skill-devicon`}></i>;
  }

  render() {
    const sectionName =
      this.props.resumeBasicInfo?.section_name?.skills || "Technical Skills";
    const skillIcons = this.props.sharedSkills?.icons || [];

    const skills = skillIcons.map((skill, i) => (
      <div className="skill-card" key={i}>
        <div className="skill-icon-wrapper">{this.renderSkillIcon(skill)}</div>
        <span className="skill-name">{skill.name}</span>
      </div>
    ));

    return (
      <section id="skills" className="py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title-clean">{sectionName}</h2>
            <div className="section-title-line"></div>
          </div>
          <div className="skills-grid-wrapper">
            <div className="skills-grid">{skills}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
