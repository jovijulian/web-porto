import React, { Component } from "react";
import "./App.scss";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  componentDidMount() {
    this.loadSharedData();
    this.loadResumeData();
  }

  loadResumeData() {
    fetch("res_primaryLanguage.json")
      .then((res) => res.json())
      .then((data) => this.setState({ resumeData: data }))
      .catch((err) => console.error("Error loading resume data:", err));
  }

  loadSharedData() {
    fetch("portfolio_shared_data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ sharedData: data });
        if (data?.basic_info?.name) {
          document.title = `${data.basic_info.name} | Portfolio`;
        }
      })
      .catch((err) => console.error("Error loading shared data:", err));
  }

  render() {
    return (
      <div className="portfolio-app-root">
        <CustomCursor />
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
