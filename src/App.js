import './App.css';
import React from 'react';
import Form from './Components/form';
import Preview from './Components/preview';

class App extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <Form />
        <Preview />
      </div>
    );
  }
}

export default App;
