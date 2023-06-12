import React from 'react';
import './preview.css';

class PreviewExperience extends React.Component {
  render() {
    const { experiences } = this.props;
    return (
      <>
        {experiences.map((item) => (
          <div
            className='preview-experience-content'
            id={`experience-${item.id}`}
            key={`experience-${item.id}`}
          >
            <h2>
              {item.company} | {item.city}
            </h2>
            <h2>{item.position}</h2>
            <h3>
              {item.startDate} - {item.endDate}
            </h3>
            <div>{item.summary}</div>
          </div>
        ))}
      </>
    );
  }
}

class PreviewEducation extends React.Component {
  render() {
    return (
      <>
        <h3>start and End date</h3>
        <h2>University | City</h2>
        <h2>Level of Course | Degree</h2>
      </>
    );
  }
}

class Preview extends React.Component {
  render() {
    const { profile, techStack, experiences, educations } = this.props;

    return (
      <div className='preview-main-container'>
        <div className='preview-profile-container'>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
          <h2> {profile.currentPosition} </h2>
          <div>{profile.summary}</div>
        </div>

        <div className='preview-content-container'>
          <div className='side-content-container'>
            <div className='preview-contact-info-container'>
              <div className='contact-info'>
                <h2> Email </h2>
                <p>{profile.email}</p>
              </div>
              <div className='contact-info'>
                <h2> Contact Number </h2>
                <p>{profile.contactNumber}</p>
              </div>
              <div className='contact-info'>
                <h2> Github </h2>
                <a href=''>{profile.github}</a>
              </div>
              <div className='contact-info'>
                <h2> Portfolio </h2>
                <a href=''>{profile.portfolio}</a>
              </div>
              <div className='contact-info'>
                <h2> LinkedIn </h2>
                <a href=''>{profile.linkedin}</a>
              </div>
              <div className='tech-stack-info'>
                <h2> Tech Stack </h2>
                <p>
                  {techStack.map((item) => (
                    <li key={item.id}> {item.text}</li>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className='main-content-container'>
            <div className='preview-experience-container'>
              <h1>Professional Experiences</h1>
              <PreviewExperience experiences={experiences} />
            </div>
            <div className='preview-education-container'>
              <h1>Education</h1>
              {educations.map((item) => (
                <div
                  className='preview-education-content'
                  id={`education-${item.id}`}
                  key={`education-${item.id}`}
                >
                  <PreviewEducation />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
