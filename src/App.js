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
      educations: [],
    };
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.onRemoveExperience = this.onRemoveExperience.bind(this);
    this.onRemoveEducation = this.onRemoveEducation.bind(this);
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

  render() {
    const { experience, experiences, education, educations } = this.state;

    return (
      <div className='main-container'>
        <Form
          experience={experience}
          experiences={experiences}
          education={education}
          educations={educations}
          handleAddEducation={this.handleAddEducation}
          handleAddExperience={this.handleAddExperience}
          onRemoveEducation={this.onRemoveEducation}
          onRemoveExperience={this.onRemoveExperience}
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
