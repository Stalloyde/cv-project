import React from 'react';
import './form.css';

const TextInput = ({ label, id }) => {
  const determineInputChange = (
    e,
    {
      handleProfileInputChange,
      handleExperienceInputChange,
      handleEducationInputChange,
      className,
    }
  ) => {
    if (className === 'profile-input') {
      handleProfileInputChange(e);
    }

    if (className === 'experience-input') {
      handleExperienceInputChange(e);
    }

    if (className === 'education-input') {
      handleEducationInputChange(e);
    }
  };

  return (
    <div className='input-container'>
      <label>
        {label}
        <input type='text' id={id} onChange={determineInputChange}></input>
      </label>
    </div>
  );
};

const DateInput = ({ label, id }) => {
  const determineDateChange = (
    e,
    { handleExperienceInputChange, handleEducationInputChange, className }
  ) => {
    if (className === 'education-input') {
      handleEducationInputChange(e);
    }

    if (className === 'experience-input') {
      handleExperienceInputChange(e);
    }
  };

  return (
    <div className='input-container'>
      <label>
        {label}
        <input type='date' id={id} onChange={determineDateChange}></input>
      </label>
    </div>
  );
};
const TechStackForm = ({
  handleTechInputChange,
  handleSubmit,
  currentTech,
  techStack,
}) => {
  const handleRemove = (e, { onRemoveTech, techStack }) => {
    const updatedTechStack = techStack.filter(
      (item) => item.id !== e.target.id
    );
    onRemoveTech(updatedTechStack);
  };

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
                  onClick={handleRemove}
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
};

const ExperienceInputs = ({ handleExperienceInputChange, id }) => {
  const handleRemove = ({ onRemoveExperience, experiences, id }) => {
    const updatedExperiences = experiences.filter((item) => item.id !== id);
    onRemoveExperience(updatedExperiences);
  };

  return (
    <div className='form-experience-inputs-container' id={id}>
      <TextInput
        label='Position:'
        className='experience-input'
        id={`position-${id}`}
        key={id}
        handleExperienceInputChange={handleExperienceInputChange}
      />
      <TextInput
        label='Company:'
        className='experience-input'
        id={`company-${id}`}
        handleExperienceInputChange={handleExperienceInputChange}
      />
      <TextInput
        label='City:'
        className='experience-input'
        id={`city-${id}`}
        handleExperienceInputChange={handleExperienceInputChange}
      />
      <DateInput
        label='Start Date:'
        className='experience-input'
        id={`startDate-${id}`}
        handleExperienceInputChange={handleExperienceInputChange}
      />
      <DateInput
        label='End Date:'
        className='experience-input'
        id={`endDate-${id}`}
        handleExperienceInputChange={handleExperienceInputChange}
      />
      <div className='description input-container'>
        <label>
          Summary:
          <textarea
            placeholder='Insert key achievements/roles here'
            maxLength={350}
            className='experience-input'
            id={`description-${id}`}
            onChange={handleExperienceInputChange}
          ></textarea>
        </label>
      </div>
      <div className='remove-btn'>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

const EducationInputs = ({ handleEducationInputChange, id }) => {
  const handleRemove = ({ onRemoveEducation, educations, id }) => {
    const updatedEducations = educations.filter((item) => item.id !== id);
    onRemoveEducation(updatedEducations);
  };

  return (
    <div className='form-education-inputs-container' id={id}>
      <TextInput
        label='University:'
        id={`university-${id}`}
        className='education-input'
        handleEducationInputChange={handleEducationInputChange}
      />
      <TextInput
        label='City:'
        id={`city-${id}`}
        className='education-input'
        handleEducationInputChange={handleEducationInputChange}
      />
      <TextInput
        label='Course:'
        id={`course-${id}`}
        className='education-input'
        handleEducationInputChange={handleEducationInputChange}
      />

      <DateInput
        label='Start Date:'
        id={`startDate-${id}`}
        className='education-input'
        handleEducationInputChange={handleEducationInputChange}
      />
      <DateInput
        label='End Date:'
        id={`endDate-${id}`}
        className='education-input'
        handleEducationInputChange={handleEducationInputChange}
      />
      <div className='description input-container'>
        <label>
          Summary:
          <textarea
            placeholder='Insert key achievements/roles here'
            maxLength={350}
            className='education-input'
            id={`description-${id}`}
            onChange={handleEducationInputChange}
          ></textarea>
        </label>
      </div>
      <div className='remove-btn'>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

const Form = ({
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
  handleExperienceInputChange,
  handleEducationInputChange,
  handleTechInputChange,
  handleSubmit,
}) => {
  return (
    <div className='form-main-container'>
      <div className='form-profile-container'>
        <h1>Profile</h1>
        <TextInput
          className='profile-input'
          label='First Name:'
          id='firstName'
          handleProfileInputChange={handleProfileInputChange}
        />
        <TextInput
          className='profile-input'
          label='Last Name:'
          id='lastName'
          handleProfileInputChange={handleProfileInputChange}
        />
        <TextInput
          className='profile-input'
          label='Current Position:'
          id='currentPosition'
          handleProfileInputChange={handleProfileInputChange}
        />
        <TextInput
          className='profile-input'
          label='Email:'
          id='email'
          handleProfileInputChange={handleProfileInputChange}
        />
        <TextInput
          className='profile-input'
          label='Contact Number:'
          id='contactNumber'
          handleProfileInputChange={handleProfileInputChange}
        />
        <TextInput
          className='profile-input'
          label='Github:'
          id='github'
          handleProfileInputChange={handleProfileInputChange}
        />
        <TextInput
          className='profile-input'
          label='Portfolio Site:'
          id='portfolio'
          handleProfileInputChange={handleProfileInputChange}
        />
        <TextInput
          className='profile-input'
          label='LinkedIn:'
          id='linkedin'
          handleProfileInputChange={handleProfileInputChange}
        />
        <label className='description input-container'>
          Summary:
          <textarea
            className='profile-input'
            id='summary'
            placeholder='Insert short bio here'
            maxLength={250}
            onChange={handleProfileInputChange}
          ></textarea>
        </label>
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
            handleExperienceInputChange={handleExperienceInputChange}
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
            handleEducationInputChange={handleEducationInputChange}
          />
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>
    </div>
  );
};

export default Form;
