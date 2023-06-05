import React from 'react';

class Preview extends React.Component {
  render() {
    return (
      <div className='preview'>
        <div className='preview-profile-container'>preview Profile</div>
        <div className='preview-tech-stack-container'>preview Tech Stack</div>
        <div className='preview-experience-container'>
          preview Professional Experience
        </div>
        <div className='preview-education-container'>preview Education</div>
      </div>
    );
  }
}

export default Preview;
