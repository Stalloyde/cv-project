import React from 'react';
import './preview.css';

class Preview extends React.Component {
  render() {
    return (
      <div className='preview-main-container'>
        <div className='preview-profile-container'>
          <h1> Name </h1>
          <h2> Current Position </h2>
          <div> Summary</div>
        </div>

        <div class='preview-content-container'>
          <div class='side-content-container'>
            <div className='preview-contact-info-container'>
              <div class='contact-info'>
                <h2> Email </h2>
                asdqwdqwdqwdqwdqwdqwd
              </div>
              <div class='contact-info'>
                <h2> Contact Number </h2>
                asfqfqwfqwfqw
              </div>
              <div class='contact-info'>
                <h2> Github</h2>
                <a href=''>test</a>
              </div>
              <div class='contact-info'>
                <h2> Portfolio </h2>
                <a href=''>test</a>
              </div>
              <div class='contact-info'>
                <h2> LinkedIn</h2>
                <a href=''>test</a>
              </div>
            </div>
            <div className='preview-tech-stack-container'>
              <h2> Tech Stack </h2>
            </div>
          </div>

          <div class='main-content-container'>
            <div className='preview-experience-container'>
              <h1>Professional Experiences</h1>
              <h3>start and End date</h3>
              <h2>Company | City </h2>
              <h2>Position</h2>
              <div>Summary</div>
            </div>
            <div className='preview-education-container'>
              <h1>Education</h1>
              <h3>start and End date</h3>
              <h2>University | City</h2>
              <h2>Level of Course | Degree</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
