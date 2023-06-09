import React from 'react';
import './form.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    alert(e.target.value);
  }

  render() {
    const { label } = this.props;

    return (
      <div className='input-container'>
        <label>
          {label}
          <input type='text' onChange={this.handleChange}></input>
        </label>
      </div>
    );
  }
}

class DateInput extends React.Component {
  render() {
    const { label } = this.props;

    return (
      <div className='input-container'>
        <label>
          {label}
          <input type='date'></input>
        </label>
      </div>
    );
  }
}

class TechStackForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    const { onRemoveTech, techStack } = this.props;
    const updatedTechStack = techStack.filter(
      (item) => item.id !== e.target.id
    );
    onRemoveTech(updatedTechStack);
  }

  render() {
    const { handleChange, handleSubmit, currentTech, techStack } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            value={currentTech.text}
            onChange={handleChange}
            placeholder='Insert proficient technology here'
          ></input>
        </label>

        <input type='submit' value='Add'></input>

        {techStack && (
          <ul>
            {techStack.map((item) => (
              <li key={item.id} id={item.id}>
                {item.text}
                <button
                  id={item.id}
                  className='remove-stack-btn'
                  onClick={this.handleRemove}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </form>
    );
  }
}

class ExperienceInputs extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    const { onRemoveExperience, experiences, id } = this.props;
    const updatedExperiences = experiences.filter((item) => item.id !== id);
    onRemoveExperience(updatedExperiences);
  }

  render() {
    return (
      <div className='form-experience-inputs-container' id={this.props.id}>
        <TextInput label='Position:' />
        <TextInput label='Company:' />
        <TextInput label='City:' />
        <DateInput label='Start Date:' />
        <DateInput label='End Date:' />
        <label className='description'>
          Summary:
          <textarea
            placeholder='Insert key achievements/roles here'
            maxLength={350}
          ></textarea>
        </label>
        <div className='remove-btn'>
          <button onClick={this.handleRemove} id={this.props.id}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

class EducationInputs extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    const { onRemoveEducation, educations, id } = this.props;
    const updatedEducations = educations.filter((item) => item.id !== id);
    onRemoveEducation(updatedEducations);
  }

  render() {
    return (
      <div className='form-education-inputs-container'>
        <TextInput label='University:' />
        <TextInput label='City:' />
        <div className='input-container'>
          <label>
            Level of Course:
            <select>
              <option value='doctorate'>Doctorate (Phd/EdD)</option>
              <option value='professional'>
                Professional Degree(MD/DDS/JD)
              </option>
              <option value='masters'>Masters degree (MA/MS/ MEng)</option>
              <option value='bachelors'>Bachelor's degree (BA/BSc)</option>
              <option value='associates'>Associate's degree (AA/AS)</option>
              <option value='college'>Some college, but no degree</option>
              <option value='secondary'>High school, diploma or GED</option>
            </select>
          </label>
        </div>
        <TextInput label='Degree:' />
        <DateInput label='Start Date:' />
        <DateInput label='End Date:' />
        <div className='remove-btn'>
          <button onClick={this.handleRemove} id={this.props.id}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    const {
      currentTech,
      techStack,
      experience,
      experiences,
      education,
      educations,
      handleAddExperience,
      handleAddEducation,
      onRemoveExperience,
      onRemoveEducation,
      onRemoveTech,
      handleChange,
      handleSubmit,
    } = this.props;

    return (
      <div className='form-main-container'>
        <div className='form-profile-container'>
          <h1>Profile</h1>
          <label className='description'>
            Summary:
            <textarea
              placeholder='Insert short bio here'
              maxLength={250}
            ></textarea>
          </label>
          <TextInput label='First Name:' />
          <TextInput label='Last Name:' />
          <TextInput label='Current Position:' />
          <TextInput label='Email:' />
          <TextInput label='Contact Number:' />
          <TextInput label='Github:' />
          <TextInput label='Portfolio Site:' />
          <TextInput label='LinkedIn:' />
        </div>

        <div className='form-tech-stack-container'>
          <h1>Technology Stack</h1>
          <TechStackForm
            currentTech={currentTech}
            techStack={techStack}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onRemoveTech={onRemoveTech}
          />
        </div>

        <div className='form-experience-container'>
          <h1>Professional Experiences</h1>
          {experiences.map((item) => (
            <ExperienceInputs
              key={item.id}
              id={item.id}
              experience={experience}
              experiences={experiences}
              onRemoveExperience={onRemoveExperience}
            />
          ))}
          <button onClick={handleAddExperience}>Add Experience</button>
        </div>

        <div className='form-education-container'>
          <h1>Education</h1>
          {educations.map((item) => (
            <EducationInputs
              key={item.id}
              id={item.id}
              education={education}
              educations={educations}
              onRemoveEducation={onRemoveEducation}
            />
          ))}
          <button onClick={handleAddEducation}>Add Education</button>
        </div>
      </div>
    );
  }
}

export default Form;
