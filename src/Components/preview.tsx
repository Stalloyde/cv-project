import * as React from 'react';
import {
  ExperiencesType,
  EducationsType,
  TechStackType,
  ProfileType,
  CurrentTechType,
} from '../App';
import './preview.css';

interface PreviewExperienceProps {
  experiences: ExperiencesType;
}

interface PreviewEducationsProps {
  educations: EducationsType;
}

const PreviewExperience: React.FC<PreviewExperienceProps> = ({
  experiences,
}) => {
  return (
    <>
      {experiences.map((item) => {
        if (item) {
          return (
            <section
              className='preview-experience-content'
              id={`experience-${item.id}`}
              key={`experience-${item.id}`}
            >
              <h2>
                {item.company} | {item.city}
              </h2>
              <h2>{item.position}</h2>
              <h2>
                <>
                  {item.startDate} - {item.endDate}
                </>
              </h2>
              <div className='summary'>{item.summary}</div>
            </section>
          );
        }
        return null;
      })}
    </>
  );
};

const PreviewEducation: React.FC<PreviewEducationsProps> = ({ educations }) => {
  return (
    <>
      {educations.map((item) => {
        if (item) {
          return (
            <section
              className='preview-education-content'
              id={`education-${item.id}`}
              key={`education-${item.id}`}
            >
              <h2>
                {item.university} | {item.city}
              </h2>
              <h2>{item.course}</h2>
              <h2>
                <>
                  {item.startDate} - {item.endDate}
                </>
              </h2>
              <div className='summary'>{item.summary}</div>
            </section>
          );
        }
        return null;
      })}
    </>
  );
};

interface PreviewProps {
  profile: ProfileType;
  currentTech: CurrentTechType;
  techStack: TechStackType;
  experiences: ExperiencesType;
  educations: EducationsType;
}

const Preview: React.FC<PreviewProps> = ({
  profile,
  techStack,
  experiences,
  educations,
}) => {
  return (
    <main>
      <section className='preview-profile-container'>
        <h1>
          {profile.firstName} {profile.lastName}
        </h1>
        <h2> {profile.currentPosition} </h2>
        <div className='summary'>{profile.summary}</div>
      </section>

      <section className='preview-content-container'>
        <div className='side-content-container'>
          <div className='preview-contact-info-container'>
            <section className='contact-info'>
              <h2> Email </h2>
              <p>{profile.email}</p>
            </section>
            <section className='contact-info'>
              <h2> Contact Number </h2>
              <p>{profile.contactNumber}</p>
            </section>
            <section className='contact-info'>
              <h2> Github </h2>
              <a href=''>{profile.github}</a>
            </section>
            <section className='contact-info'>
              <h2> Portfolio </h2>
              <a href=''>{profile.portfolio}</a>
            </section>
            <section className='contact-info'>
              <h2> LinkedIn </h2>
              <a href=''>{profile.linkedin}</a>
            </section>
            <section className='tech-stack-info'>
              <h2> Tech Stack </h2>
              <p>
                {techStack.map(
                  (item) => item && <li key={item.id}> {item.text}</li>
                )}
              </p>
            </section>
          </div>
        </div>

        <section className='main-content-container'>
          <section className='preview-experience-container'>
            <h1>Professional Experiences</h1>
            <PreviewExperience experiences={experiences} />
          </section>
          <section className='preview-education-container'>
            <h1>Education</h1>
            <PreviewEducation educations={educations} />
          </section>
        </section>
      </section>
    </main>
  );
};

export default Preview;
