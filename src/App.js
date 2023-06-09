import './App.css';
import React from 'react';
import Form from './Components/form';
import Preview from './Components/preview';
import uniqid from 'uniqid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        firstName: '',
        lastName: '',
        currentPositiion: '',
        email: '',
        contactNumber: '',
        github: '',
        portfolio: '',
        linkedin: '',
      },
      techStack: [],
      currentTech: { text: '', id: '' },
      experiences: [],
      experience: {
        count: 1,
        id: uniqid(),
        profile: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        summary: '',
      },
      educations: [],
      education: {
        count: 1,
        id: uniqid(),
        university: '',
        city: '',
        levelOfCourse: '',
        degree: '',
        startDate: '',
        endDate: '',
      },
    };
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.onRemoveExperience = this.onRemoveExperience.bind(this);
    this.onRemoveEducation = this.onRemoveEducation.bind(this);
    this.onRemoveTech = this.onRemoveTech.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ currentTech: { text: e.target.value, id: uniqid() } });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.currentTech.text) {
      this.setState((prevState) => ({
        techStack: prevState.techStack.concat(prevState.currentTech),
        currentTech: { text: '', id: '' },
      }));
    }
  }

  handleAddExperience() {
    const newExperience = {
      count: this.state.experience.count + 1,
      id: uniqid(),
    };

    this.setState((prevState) => ({
      experience: newExperience,
      experiences: prevState.experiences.concat(newExperience),
    }));
  }

  handleAddEducation() {
    const newEducation = {
      count: this.state.education.count + 1,
      id: uniqid(),
    };

    this.setState((prevState) => ({
      education: newEducation,
      educations: prevState.educations.concat(newEducation),
    }));
  }

  onRemoveExperience(updatedExperiences) {
    this.setState((prevState) => ({
      experience: '',
      experiences: updatedExperiences,
    }));
  }

  onRemoveEducation(updatedEducations) {
    this.setState((prevState) => ({
      education: '',
      educations: updatedEducations,
    }));
  }

  onRemoveTech(updatedTechStack) {
    this.setState((prevState) => ({
      techStack: updatedTechStack,
    }));
  }

  render() {
    const {
      currentTech,
      techStack,
      experience,
      experiences,
      education,
      educations,
    } = this.state;

    return (
      <div className='main-container'>
        <Form
          currentTech={currentTech}
          techStack={techStack}
          experience={experience}
          experiences={experiences}
          education={education}
          educations={educations}
          handleAddEducation={this.handleAddEducation}
          handleAddExperience={this.handleAddExperience}
          onRemoveEducation={this.onRemoveEducation}
          onRemoveExperience={this.onRemoveExperience}
          onRemoveTech={this.onRemoveTech}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Preview
          experience={experience}
          experiences={experiences}
          education={education}
          educations={educations}
        />
      </div>
    );
  }
}

export default App;
