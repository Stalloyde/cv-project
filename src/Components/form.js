import React from 'react';
import './form.css';

class TextInput extends React.Component {
  render() {
    const { label } = this.props;

    return (
      <div className='input-container'>
        <label>
          {label}
          <input type='text'></input>
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

class Form extends React.Component {
  render() {
    return (
      <div>
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
          <form>
            <label>
              <input type='text'></input>
            </label>

            <input type='submit' value='Add'></input>
            <ul>
              <li>
                List of Added technology
                <button className='remove-stack-btn'>Remove</button>
              </li>
            </ul>
          </form>
        </div>
        <div className='form-experience-container'>
          <h1>Professional Experience</h1>
          <TextInput label='Position:' />
          <TextInput label='Company:' />
          <TextInput label='City:' />
          <DateInput label='Start Date:' />
          <DateInput label='End Date:' />
          <button>Add</button>
        </div>
        <div className='form-education-container'>
          <h1>Education</h1>
          <TextInput label='University:' />
          <TextInput label='City:' />
          <div class='input-container'>
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
          <button>Add</button>
        </div>
      </div>
    );
  }
}

export default Form;
