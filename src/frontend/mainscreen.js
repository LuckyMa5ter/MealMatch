import React from 'react';
import './mainscreen.css';

class Main extends React.Component {
  render() {
    return (
      <div>

        <div className='header'>
          <a className='title'>title</a>
          <login className='login'
            onClick={console.log('here')}//put ur function here
          >login</login>
        </div>
      </div>
    )
  }
}

export default Main;