import React from 'react';
import './form.css';
import uniqid from 'uniqid';

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

class TechStackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { techStack: [], currentTech: { text: '', id: '' } };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e) {
    this.setState({ currentTech: { text: e.target.value, id: uniqid() } });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.currentTech.text) {
      this.setState({
        techStack: this.state.techStack.concat(this.state.currentTech),
        currentTech: { text: '', id: '' },
      });
    }
  }

  handleRemove(e) {
    const updatedTechStack = this.state.techStack.filter(
      (item) => item.id !== e.target.id
    );

    this.setState({ techStack: updatedTechStack });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type='text'
            value={this.state.currentTech.text}
            onChange={this.handleChange}
            placeholder='Insert proficient technology here'
          ></input>
        </label>

        <input type='submit' value='Add'></input>

        {this.state.techStack && (
          <ul>
            {this.state.techStack.map((item) => (
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
  render() {
    return (
      <div className='form-experience-inputs-container'>
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
          <button> Remove </button>
        </div>
      </div>
    );
  }
}

class EducationInputs extends React.Component {
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
          <button> Remove </button>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    // this.state = {
    //   experience: {
    //     position: '',
    //     company: '',
    //     city: '',
    //     startDate: '',
    //     endDate: '',
    //     summary: '',
    //   },
    //   experienceList: [],
    //   education: {
    //     university: '',
    //     city: '',
    //     levelOfCourse: '',
    //     degree: '',
    //     startDate: '',
    //     endDate: '',
    //   },
    //   educationList: [],
    // };
  }

  handleAddExperience() {
    this.setState({
      experience: this.state.experience.concat(this.state.experience),
    });
    console.log(this.state.experience);
  }

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
          <TechStackForm />
        </div>

        <div className='form-experience-container'>
          <h1>Professional Experiences</h1>
          <ExperienceInputs />
          <ExperienceInputs />
          <button onClick={this.handleAddExperience}>Add Experience</button>
        </div>

        <div className='form-education-container'>
          <h1>Education</h1>
          <EducationInputs />
          <EducationInputs />
          <button onClick={this.handleAddEducation}>Add Education</button>
        </div>
      </div>
    );
  }
}

export default Form;
