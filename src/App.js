import './App.css';
import React from 'react';
import Form from './Components/form';
import Preview from './Components/preview';
import uniqid from 'uniqid';
import format from 'date-fns/format';

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
        summary: '',
      },
      techStack: [],
      currentTech: { text: '', id: '' },
      experiences: [],
      experience: {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        summary: '',
      },
      educations: [],
      education: {
        id: uniqid(),
        university: '',
        city: '',
        course: '',
        startDate: '',
        endDate: '',
        summary: '',
      },
    };
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.onRemoveExperience = this.onRemoveExperience.bind(this);
    this.onRemoveEducation = this.onRemoveEducation.bind(this);
    this.onRemoveTech = this.onRemoveTech.bind(this);
    this.handleProfileInputChange = this.handleProfileInputChange.bind(this);
    this.handleTechInputChange = this.handleTechInputChange.bind(this);
    this.handleExperienceInputChange =
      this.handleExperienceInputChange.bind(this);
    this.handleEducationInputChange =
      this.handleEducationInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProfileInputChange(e) {
    this.setState((prevState) => ({
      profile: {
        firstName:
          e.target.id === 'firstName'
            ? e.target.value
            : prevState.profile.firstName,
        lastName:
          e.target.id === 'lastName'
            ? e.target.value
            : prevState.profile.lastName,
        currentPosition:
          e.target.id === 'currentPosition'
            ? e.target.value
            : prevState.profile.currentPosition,
        email:
          e.target.id === 'email' ? e.target.value : prevState.profile.email,
        contactNumber:
          e.target.id === 'contactNumber'
            ? e.target.value
            : prevState.profile.contactNumber,
        github:
          e.target.id === 'github' ? e.target.value : prevState.profile.github,
        portfolio:
          e.target.id === 'portfolio'
            ? e.target.value
            : prevState.profile.portfolio,
        linkedin:
          e.target.id === 'linkedin'
            ? e.target.value
            : prevState.profile.linkedin,
        summary:
          e.target.id === 'summary'
            ? e.target.value
            : prevState.profile.summary,
      },
    }));
  }

  handleExperienceInputChange(e) {
    const updatedExperiences = this.state.experiences.map((item) => {
      if (item.id === e.target.parentNode.parentNode.parentNode.id) {
        return {
          id: item.id,
          position:
            e.target.id === `position-${item.id}`
              ? e.target.value
              : item.position,
          company:
            e.target.id === `company-${item.id}`
              ? e.target.value
              : item.company,
          city: e.target.id === `city-${item.id}` ? e.target.value : item.city,
          startDate:
            e.target.id === `startDate-${item.id}`
              ? format(new Date(e.target.value), 'MMM yyyy')
              : item.startDate,
          endDate:
            e.target.id === `endDate-${item.id}`
              ? format(new Date(e.target.value), 'MMM yyyy')
              : item.endDate,
          summary:
            e.target.id === `description-${item.id}`
              ? e.target.value
              : item.summary,
        };
      } else {
        return item;
      }
    });
    this.setState((prevState) => ({
      experiences: updatedExperiences,
    }));
    console.log(this.state.experiences);
  }

  handleEducationInputChange(e) {
    const updatedEducations = this.state.educations.map((item) => {
      if (item.id === e.target.parentNode.parentNode.parentNode.id) {
        return {
          id: item.id,
          university:
            e.target.id === `university-${item.id}`
              ? e.target.value
              : item.university,
          city: e.target.id === `city-${item.id}` ? e.target.value : item.city,
          course:
            e.target.id === `course-${item.id}` ? e.target.value : item.course,
          startDate:
            e.target.id === `startDate-${item.id}`
              ? format(new Date(e.target.value), 'MMM yyyy')
              : item.startDate,
          endDate:
            e.target.id === `endDate-${item.id}`
              ? format(new Date(e.target.value), 'MMM yyyy')
              : item.endDate,
          summary:
            e.target.id === `description-${item.id}`
              ? e.target.value
              : item.summary,
        };
      } else {
        return item;
      }
    });
    this.setState((prevState) => ({
      educations: updatedEducations,
    }));
  }

  handleTechInputChange(e) {
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
      id: uniqid(),
      position: '',
      company: '',
      city: '',
      startDate: '',
      endDate: '',
      summary: '',
    };

    this.setState((prevState) => ({
      experience: newExperience,
      experiences: prevState.experiences.concat(newExperience),
    }));
  }

  handleAddEducation() {
    const newEducation = {
      id: uniqid(),
      university: '',
      city: '',
      course: '',
      startDate: '',
      endDate: '',
      summary: '',
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
      profile,
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
          profile={profile}
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
          handleProfileInputChange={this.handleProfileInputChange}
          handleExperienceInputChange={this.handleExperienceInputChange}
          handleEducationInputChange={this.handleEducationInputChange}
          handleTechInputChange={this.handleTechInputChange}
          handleSubmit={this.handleSubmit}
        />
        <Preview
          profile={profile}
          currentTech={currentTech}
          techStack={techStack}
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
