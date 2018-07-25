import React, { Component } from 'react';
import trevor from '../trevor.png'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='bottom'>
        <a href='https://www.thetrevorproject.org/#sm.00001qn85ix24es2pgm287pu48bvk'>
            <img className='trevor' src={trevor}/>
        </a>
        </div>
      </footer>
    );
  }
}

export default Footer