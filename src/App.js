import './App.css';
import React, { useState } from 'react';
import Form from './Components/form';
import Preview from './Components/preview';
import uniqid from 'uniqid';
import format from 'date-fns/format';

const App = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    currentPosition: '',
    email: '',
    contactNumber: '',
    github: '',
    portfolio: '',
    linkedin: '',
    summary: '',
  });

  const [techStack, setTechStack] = useState([]);
  const [currentTech, setCurrentTech] = useState({ text: '', id: '' });
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState({
    id: '',
    position: '',
    company: '',
    city: '',
    startDate: '',
    endDate: '',
    summary: '',
  });

  const [educations, setEducations] = useState([]);
  const [education, setEducation] = useState({
    id: uniqid(),
    university: '',
    city: '',
    course: '',
    startDate: '',
    endDate: '',
    summary: '',
  });

  const handleProfileInputChange = (e) => {
    setProfile({
      firstName:
        e.target.id === 'firstName' ? e.target.value : profile.firstName,
      lastName: e.target.id === 'lastName' ? e.target.value : profile.lastName,
      currentPosition:
        e.target.id === 'currentPosition'
          ? e.target.value
          : profile.currentPosition,
      email: e.target.id === 'email' ? e.target.value : profile.email,
      contactNumber:
        e.target.id === 'contactNumber'
          ? e.target.value
          : profile.contactNumber,
      github: e.target.id === 'github' ? e.target.value : profile.github,
      portfolio:
        e.target.id === 'portfolio' ? e.target.value : profile.portfolio,
      linkedin: e.target.id === 'linkedin' ? e.target.value : profile.linkedin,
      summary: e.target.id === 'summary' ? e.target.value : profile.summary,
    });
  };

  const handleExperienceInputChange = (e) => {
    const updatedExperiences = experiences.map((item) => {
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

    setExperiences(updatedExperiences);
  };

  const handleEducationInputChange = (e) => {
    const updatedEducations = educations.map((item) => {
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
    setEducations(updatedEducations);
  };

  const handleTechInputChange = (e) => {
    setCurrentTech({ text: e.target.value, id: uniqid() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTech.text) {
      setTechStack(techStack.concat(currentTech));
      setCurrentTech({ text: '', id: '' });
    }
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: uniqid(),
      position: '',
      company: '',
      city: '',
      startDate: '',
      endDate: '',
      summary: '',
    };

    setExperiences(experiences.concat(newExperience));
    setExperience(newExperience);
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: uniqid(),
      university: '',
      city: '',
      course: '',
      startDate: '',
      endDate: '',
      summary: '',
    };

    setEducations(educations.concat(newEducation));
    setEducation(newEducation);
    console.log(educations);
    console.log(education);
  };

  const onRemoveExperience = (updatedExperiences) => {
    setExperience({
      id: uniqid(),
      position: '',
      company: '',
      city: '',
      startDate: '',
      endDate: '',
      summary: '',
    });
    setExperiences(updatedExperiences);
  };

  const onRemoveEducation = (updatedEducations) => {
    setEducations({
      id: uniqid(),
      university: '',
      city: '',
      course: '',
      startDate: '',
      endDate: '',
      summary: '',
    });
    setEducations(updatedEducations);
  };

  const onRemoveTech = (updatedTechStack) => {
    setTechStack(updatedTechStack);
  };

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
        handleAddEducation={handleAddEducation}
        handleAddExperience={handleAddExperience}
        onRemoveEducation={onRemoveEducation}
        onRemoveExperience={onRemoveExperience}
        onRemoveTech={onRemoveTech}
        handleProfileInputChange={handleProfileInputChange}
        handleExperienceInputChange={handleExperienceInputChange}
        handleEducationInputChange={handleEducationInputChange}
        handleTechInputChange={handleTechInputChange}
        handleSubmit={handleSubmit}
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
};
export default App;
