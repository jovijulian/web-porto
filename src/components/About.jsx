import React, { Component } from "react";

class About extends Component {
  render() {
    const profilepic = this.props.sharedBasicInfo
      ? "images/" + this.props.sharedBasicInfo.image
      : "images/myProfile.jpg";
    const sectionName = this.props.resumeBasicInfo?.section_name?.about || "About Me";
    const hello = this.props.resumeBasicInfo?.description_header || "Systems Architecture & Engineering";
    const about = this.props.resumeBasicInfo?.description || "";
    const socials = this.props.sharedBasicInfo?.social || [];

    return (
      <section id="about" className="py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title-clean">{sectionName}</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="row align-items-stretch justify-content-center g-4">
            <div className="col-lg-4 col-md-5 text-center">
              <div className="profile-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="profile-img-wrap mb-4">
                    <img
                      src={profilepic}
                      alt="Jovi Julian Hendri"
                      className="profile-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "images/myProfile.jpg";
                      }}
                    />
                  </div>
                  <h4 className="profile-name">Jovi Julian Hendri</h4>
                  <p className="profile-role">Full Stack &amp; IoT Engineer</p>
                  <p className="profile-location">
                    <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                    <span>Bandung, Indonesia</span>
                  </p>
                </div>

                <div className="profile-social-links pt-3 border-top">
                  {socials.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn mx-1"
                      aria-label={item.name}
                    >
                      <i className={item.class}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-7">
              <div className="about-content-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="about-card-header d-flex align-items-center justify-content-between px-4 py-3">
                    <span className="about-header-tag">
                      <i className="fas fa-terminal me-2 text-primary"></i>
                      <span>{hello}</span>
                    </span>
                  </div>
                  <div className="about-body px-4 py-4">
                    <p className="about-text">{about}</p>
                  </div>
                </div>

                <div className="about-highlights px-4 pb-4 pt-2">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="highlight-item h-100">
                        <span className="highlight-icon">
                          <i className="fas fa-trophy"></i>
                        </span>
                        <div>
                          <div className="highlight-label">Best Thesis Award (1st Place)</div>
                          <div className="highlight-desc">Institut Digital Ekonomi LPKIA • GPA 3.91 / 4.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="highlight-item h-100">
                        <span className="highlight-icon">
                          <i className="fas fa-network-wired"></i>
                        </span>
                        <div>
                          <div className="highlight-label">Certified Networks &amp; Systems</div>
                          <div className="highlight-desc">Cisco CCNA • MikroTik MTCNA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
