import './App.css';
import * as React from 'react';
import { useState } from 'react';
import Form from './Components/form';
import Preview from './Components/preview';
import * as uniqid from 'uniqid';
import format from 'date-fns/format';

export interface ProfileType {
  firstName: string;
  lastName: string;
  currentPosition: string;
  email: string;
  contactNumber: string;
  github: string;
  portfolio: string;
  linkedin: string;
  summary: string;
}

export type TechStackType = (CurrentTechType | null)[];

export interface CurrentTechType {
  text: string;
  id: string;
}

export type ExperiencesType = (ExperienceType | null)[];

export interface ExperienceType {
  id: string;
  position: string;
  company: string;
  city: string;
  startDate: string | null;
  endDate: string | null;
  summary: string;
}

export type EducationsType = (EducationType | null)[];

export interface EducationType {
  id: string;
  university: string;
  city: string;
  course: string;
  startDate: string | null;
  endDate: string | null;
  summary: string;
}

const App = () => {
  const [profile, setProfile] = useState<ProfileType>({
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

  const [techStack, setTechStack] = useState<TechStackType>([]);
  const [currentTech, setCurrentTech] = useState<CurrentTechType>({
    text: '',
    id: '',
  });
  const [experiences, setExperiences] = useState<ExperiencesType>([]);
  const [experience, setExperience] = useState<ExperienceType>({
    id: '',
    position: '',
    company: '',
    city: '',
    startDate: null,
    endDate: null,
    summary: '',
  });
  const [educations, setEducations] = useState<EducationsType>([]);
  const [education, setEducation] = useState<EducationType>({
    id: '',
    university: '',
    city: '',
    course: '',
    startDate: null,
    endDate: null,
    summary: '',
  });

  const handleProfileInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProfile({
      firstName:
        e.currentTarget.id === 'firstName'
          ? e.currentTarget.value
          : profile.firstName,
      lastName:
        e.currentTarget.id === 'lastName'
          ? e.currentTarget.value
          : profile.lastName,
      currentPosition:
        e.currentTarget.id === 'currentPosition'
          ? e.currentTarget.value
          : profile.currentPosition,
      email:
        e.currentTarget.id === 'email' ? e.currentTarget.value : profile.email,
      contactNumber:
        e.currentTarget.id === 'contactNumber'
          ? e.currentTarget.value
          : profile.contactNumber,
      github:
        e.currentTarget.id === 'github'
          ? e.currentTarget.value
          : profile.github,
      portfolio:
        e.currentTarget.id === 'portfolio'
          ? e.currentTarget.value
          : profile.portfolio,
      linkedin:
        e.currentTarget.id === 'linkedin'
          ? e.currentTarget.value
          : profile.linkedin,
      summary:
        e.currentTarget.id === 'summary'
          ? e.currentTarget.value
          : profile.summary,
    });
  };

  const handleExperienceInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedExperiences = experiences.map((item) => {
      if (item && e.currentTarget && item.id === e.currentTarget.id.slice(-8)) {
        return {
          id: item.id,
          position:
            e.currentTarget.id === `position-${item.id}`
              ? e.currentTarget.value
              : item.position,
          company:
            e.currentTarget.id === `company-${item.id}`
              ? e.currentTarget.value
              : item.company,
          city:
            e.currentTarget.id === `city-${item.id}`
              ? e.currentTarget.value
              : item.city,
          startDate:
            e.currentTarget.id === `startDate-${item.id}`
              ? format(new Date(e.currentTarget.value), 'MMM yyyy')
              : item.startDate,
          endDate:
            e.currentTarget.id === `endDate-${item.id}`
              ? format(new Date(e.currentTarget.value), 'MMM yyyy')
              : item.endDate,
          summary:
            e.currentTarget.id === `description-${item.id}`
              ? e.currentTarget.value
              : item.summary,
        };
      } else {
        return item;
      }
    });
    setExperiences(updatedExperiences);
  };

  const handleEducationInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedEducations = educations.map((item) => {
      if (item && e.currentTarget && item.id === e.currentTarget.id.slice(-8)) {
        return {
          id: item.id,
          university:
            e.currentTarget.id === `university-${item.id}`
              ? e.currentTarget.value
              : item.university,
          city:
            e.currentTarget.id === `city-${item.id}`
              ? e.currentTarget.value
              : item.city,
          course:
            e.currentTarget.id === `course-${item.id}`
              ? e.currentTarget.value
              : item.course,
          startDate:
            e.currentTarget.id === `startDate-${item.id}`
              ? format(new Date(e.currentTarget.value), 'MMM yyyy')
              : item.startDate,
          endDate:
            e.currentTarget.id === `endDate-${item.id}`
              ? format(new Date(e.currentTarget.value), 'MMM yyyy')
              : item.endDate,
          summary:
            e.currentTarget.id === `description-${item.id}`
              ? e.currentTarget.value
              : item.summary,
        };
      } else {
        return item;
      }
    });

    setEducations(updatedEducations);
  };

  const handleTechInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentTech({ text: e.currentTarget.value, id: uniqid() });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      startDate: null,
      endDate: null,
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
      startDate: null,
      endDate: null,
      summary: '',
    };

    setEducations(educations.concat(newEducation));
    setEducation(newEducation);
  };

  const onRemoveExperience = (updatedExperiences: ExperiencesType) => {
    setExperience({
      id: uniqid(),
      position: '',
      company: '',
      city: '',
      startDate: null,
      endDate: null,
      summary: '',
    });
    setExperiences(updatedExperiences);
  };

  const onRemoveEducation = (updatedEducations: EducationsType) => {
    setEducation({
      id: uniqid(),
      university: '',
      city: '',
      course: '',
      startDate: null,
      endDate: null,
      summary: '',
    });
    setEducations(updatedEducations);
  };

  const onRemoveTech = (updatedTechStack: TechStackType) => {
    setTechStack(updatedTechStack);
  };

  return (
    <div className='main-container'>
      <Form
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
        experiences={experiences}
        educations={educations}
      />
    </div>
  );
};
export default App;
