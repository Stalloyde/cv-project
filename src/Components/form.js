import React from 'react';
import './form.css';

class TextInput extends React.Component {
  render() {
    const { label, id, handleProfileInputChange } = this.props;

    return (
      <div className='input-container'>
        <label>
          {label}
          <input
            type='text'
            id={id}
            onChange={handleProfileInputChange}
          ></input>
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
    const { handleTechInputChange, handleSubmit, currentTech, techStack } =
      this.props;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            value={currentTech.text}
            onChange={handleTechInputChange}
            placeholder='Insert proficient technology here'
          ></input>
        </label>

        <input type='submit' value='Add'></input>

        {techStack && (
          <ul className='tech-stack-container'>
            {techStack.map((item) => (
              <li key={item.id} id={item.id}>
                <div>{item.text}</div>
                <div>
                  <button
                    id={item.id}
                    className='remove-stack-btn'
                    onClick={this.handleRemove}
                  >
                    Remove
                  </button>
                </div>
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
    const { id } = this.props;

    return (
      <div className='form-experience-inputs-container'>
        <TextInput label='Position:' id={`position-${id}`} />
        <TextInput label='Company:' id={`company-${id}`} />
        <TextInput label='City:' id={`city-${id}`} />
        <DateInput label='Start Date:' id={`startDate-${id}`} />
        <DateInput label='End Date:' id={`endDate-${id}`} />
        <label className='description'>
          Summary:
          <textarea
            placeholder='Insert key achievements/roles here'
            maxLength={350}
            id={`description-${id}`}
          ></textarea>
        </label>
        <div className='remove-btn'>
          <button onClick={this.handleRemove}>Remove</button>
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
    const { id } = this.props;

    return (
      <div className='form-education-inputs-container'>
        <TextInput label='University:' id={`university-${id}`} />
        <TextInput label='City:' id={`city-${id}`} />
        <div className='input-container'>
          <label>
            Level of Course:
            <select>
              <option value='doctorate' id={`doctorate-${id}`}>
                Doctorate (Phd/EdD)
              </option>
              <option value='professional' id={`professional-${id}`}>
                Professional Degree(MD/DDS/JD)
              </option>
              <option value='masters' id={`masters-${id}`}>
                Masters degree (MA/MS/ MEng)
              </option>
              <option value='bachelors' id={`bachelors-${id}`}>
                Bachelor's degree (BA/BSc)
              </option>
              <option value='associates' id={`associates-${id}`}>
                Associate's degree (AA/AS)
              </option>
              <option value='college' id={`college-${id}`}>
                Some college, but no degree
              </option>
              <option value='secondary' id={`secondary-${id}`}>
                High school, diploma or GED
              </option>
            </select>
          </label>
        </div>
        <TextInput label='Degree:' id={`degree-${id}`} />
        <DateInput label='Start Date:' id={`startDate-${id}`} />
        <DateInput label='End Date:' id={`endDate-${id}`} />
        <div className='remove-btn'>
          <button onClick={this.handleRemove}>Remove</button>
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
      handleProfileInputChange,
      handleTechInputChange,
      handleSubmit,
    } = this.props;

    return (
      <div className='form-main-container'>
        <div className='form-profile-container'>
          <h1>Profile</h1>
          <label className='description'>
            Summary:
            <textarea
              id='summary'
              placeholder='Insert short bio here'
              maxLength={250}
              onChange={handleProfileInputChange}
            ></textarea>
          </label>
          <TextInput
            label='First Name:'
            id='firstName'
            handleProfileInputChange={handleProfileInputChange}
          />
          <TextInput
            label='Last Name:'
            id='lastName'
            handleProfileInputChange={handleProfileInputChange}
          />
          <TextInput
            label='Current Position:'
            id='currentPosition'
            handleProfileInputChange={handleProfileInputChange}
          />
          <TextInput
            label='Email:'
            id='email'
            handleProfileInputChange={handleProfileInputChange}
          />
          <TextInput
            label='Contact Number:'
            id='contactNumber'
            handleProfileInputChange={handleProfileInputChange}
          />
          <TextInput
            label='Github:'
            id='github'
            handleProfileInputChange={handleProfileInputChange}
          />
          <TextInput
            label='Portfolio Site:'
            id='portfolio'
            handleProfileInputChange={handleProfileInputChange}
          />
          <TextInput
            label='LinkedIn:'
            id='linkedin'
            handleProfileInputChange={handleProfileInputChange}
          />
        </div>

        <div className='form-tech-stack-container'>
          <h1>Technology Stack</h1>
          <TechStackForm
            currentTech={currentTech}
            techStack={techStack}
            handleTechInputChange={handleTechInputChange}
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
