import React, { Component } from "react";

class Skills extends Component {
  renderSkillIcon(skill) {
    const nameLower = (skill.name || "").toLowerCase();
    const classLower = (skill.class || "").toLowerCase();

    // 1. Next.js - Iconic official monochrome badge with gradient N
    if (nameLower.includes("next")) {
      return (
        <svg
          className="skill-devicon nextjs-icon"
          width="36"
          height="36"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="90" cy="90" r="88" fill="#000000" stroke="#18181b" strokeWidth="4" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#nextGradient)"
          />
          <rect
            x="114"
            y="54"
            width="12"
            height="72"
            fill="url(#nextGradient)"
          />
          <defs>
            <linearGradient id="nextGradient" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 2. Fiber Golang - High-speed Go framework with cartoon speed badge
    if (nameLower.includes("fiber") || classLower.includes("fiber")) {
      return (
        <div className="position-relative d-inline-flex align-items-center justify-content-center">
          <i
            className="devicon-go-plain colored skill-devicon"
            style={{ color: "#00ADD8" }}
          ></i>
          <span
            style={{
              position: "absolute",
              bottom: "-4px",
              right: "-6px",
              background: "#F97316",
              color: "#ffffff",
              fontSize: "8.5px",
              fontWeight: "900",
              fontFamily: "'Fredoka', sans-serif",
              padding: "1px 5px",
              borderRadius: "5px",
              border: "1.5px solid #18181b",
              boxShadow: "1px 1px 0px #18181b",
              lineHeight: 1.1,
              letterSpacing: "0.2px",
            }}
          >
            FIBER
          </span>
        </div>
      );
    }

    // 3. Golang - Official Go Gopher Cyan
    if (nameLower === "golang" || nameLower === "go" || (classLower.includes("go-") && !nameLower.includes("fiber"))) {
      return (
        <i
          className="devicon-go-plain colored skill-devicon"
          style={{ color: "#00ADD8" }}
        ></i>
      );
    }

    // 4. Node.js - Official Node Green
    if (nameLower.includes("node") || classLower.includes("node")) {
      return (
        <i
          className="devicon-nodejs-plain colored skill-devicon"
          style={{ color: "#539E43" }}
        ></i>
      );
    }

    // 5. Express.js - Inked brand badge
    if (nameLower.includes("express") || classLower.includes("express")) {
      return (
        <i
          className="devicon-express-original colored skill-devicon"
          style={{ color: "var(--text-main, #18181b)" }}
        ></i>
      );
    }

    // 6. React - Official Electric Cyan
    if (nameLower.includes("react") || classLower.includes("react")) {
      return (
        <i
          className="devicon-react-original colored skill-devicon"
          style={{ color: "#61DAFB" }}
        ></i>
      );
    }

    // 7. Vue.js - Official Vue Emerald Green
    if (nameLower.includes("vue") || classLower.includes("vue")) {
      return (
        <i
          className="devicon-vuejs-plain colored skill-devicon"
          style={{ color: "#41B883" }}
        ></i>
      );
    }

    // 8. Laravel - Official Vibrant Red
    if (nameLower.includes("laravel") || classLower.includes("laravel")) {
      return (
        <i
          className="devicon-laravel-plain colored skill-devicon"
          style={{ color: "#FF2D20" }}
        ></i>
      );
    }

    // 9. PHP - Official Elephant Indigo
    if (nameLower.includes("php") || classLower.includes("php")) {
      return (
        <i
          className="devicon-php-plain colored skill-devicon"
          style={{ color: "#777BB4" }}
        ></i>
      );
    }

    // 10. JavaScript - Official JS Yellow with dark background for contrast
    if (nameLower.includes("javascript") || classLower.includes("javascript")) {
      return (
        <span
          className="skill-devicon d-inline-flex align-items-center justify-content-center"
          style={{
            background: "#18181b",
            borderRadius: "6px",
            lineHeight: 0,
            padding: "1px",
          }}
        >
          <i
            className="devicon-javascript-plain colored"
            style={{ color: "#F7DF1E" }}
          ></i>
        </span>
      );
    }

    // 11. TypeScript - Official TypeScript Royal Blue
    if (nameLower.includes("typescript") || classLower.includes("typescript")) {
      return (
        <i
          className="devicon-typescript-plain colored skill-devicon"
          style={{ color: "#3178C6" }}
        ></i>
      );
    }

    // 12. Apache Kafka - Official Kafka Red-Orange
    if (nameLower.includes("kafka") || classLower.includes("kafka")) {
      return (
        <i
          className="devicon-apachekafka-original colored skill-devicon"
          style={{ color: "#E03C11" }}
        ></i>
      );
    }

    // 13. PostgreSQL - Official Elephant Blue
    if (nameLower.includes("postgres") || classLower.includes("postgres")) {
      return (
        <i
          className="devicon-postgresql-plain colored skill-devicon"
          style={{ color: "#336791" }}
        ></i>
      );
    }

    // 14. MySQL - Official MySQL Marine Blue
    if (nameLower.includes("mysql") || classLower.includes("mysql")) {
      return (
        <i
          className="devicon-mysql-plain colored skill-devicon"
          style={{ color: "#00758F" }}
        ></i>
      );
    }

    // 15. Redis - Official Crimson Red
    if (nameLower.includes("redis") || classLower.includes("redis")) {
      return (
        <i
          className="devicon-redis-plain colored skill-devicon"
          style={{ color: "#DC382D" }}
        ></i>
      );
    }

    // 16. Docker - Official Docker Whale Blue
    if (nameLower.includes("docker") || classLower.includes("docker")) {
      return (
        <i
          className="devicon-docker-plain colored skill-devicon"
          style={{ color: "#2496ED" }}
        ></i>
      );
    }

    // 17. NGINX - Official High-Performance Green
    if (nameLower.includes("nginx") || classLower.includes("nginx")) {
      return (
        <i
          className="devicon-nginx-original colored skill-devicon"
          style={{ color: "#009639" }}
        ></i>
      );
    }

    // 18. CI/CD - DevOps Cyan
    if (nameLower.includes("cicd") || nameLower.includes("ci/cd") || classLower.includes("infinity")) {
      return (
        <i
          className="fas fa-infinity skill-devicon"
          style={{
            color: "#06B6D4",
            filter: "drop-shadow(0 1px 2px rgba(6, 182, 212, 0.3))",
          }}
        ></i>
      );
    }

    // 19. Google Cloud - GCP Blue
    if (nameLower.includes("google") || nameLower.includes("gcp") || classLower.includes("googlecloud")) {
      return (
        <i
          className="devicon-googlecloud-plain colored skill-devicon"
          style={{ color: "#4285F4" }}
        ></i>
      );
    }

    // 20. WebSocket - Realtime Amber/Orange
    if (nameLower.includes("websocket") || classLower.includes("exchange-alt")) {
      return (
        <i
          className="fas fa-exchange-alt skill-devicon"
          style={{
            color: "#F59E0B",
            filter: "drop-shadow(0 1px 2px rgba(245, 158, 11, 0.3))",
          }}
        ></i>
      );
    }

    // 21. Git - Branch Flame Orange-Red
    if (nameLower.includes("git") || classLower.includes("git")) {
      return (
        <i
          className="devicon-git-plain colored skill-devicon"
          style={{ color: "#F05032" }}
        ></i>
      );
    }

    return <i className={`${skill.class} colored skill-devicon`}></i>;
  }

  render() {
    const sectionName =
      this.props.resumeBasicInfo?.section_name?.skills || "Technical Skills";
    const skillIcons = this.props.sharedSkills?.icons || [];

    const skills = skillIcons.map((skill, i) => (
      <div className="skill-card cartoon-skill-card" key={i}>
        <div className="skill-icon-wrapper">{this.renderSkillIcon(skill)}</div>
        <span className="skill-name">{skill.name}</span>
      </div>
    ));

    return (
      <section id="skills" className="py-5 cartoon-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <div className="cartoon-tag-hero mb-2 d-inline-block">
              <span>STACK &amp; TOOLS</span>
            </div>
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
