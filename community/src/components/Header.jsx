import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>Community</div>
        <div className='tagLine'>Welcome Home</div>
        <nav className='navBar'></nav>
        <div className='logIn'><a href='/login'>Log In</a></div> 
          <ul className='pages'>
              <li><a href='/'>Home</a></li>
              <li><a href='/profile'>My Profile</a></li>
              <li><a href='/profiles'>Mentors</a></li>
              <li><a href='/resources'>Resources</a></li>
          </ul>
     </div>
    );
  }
}

export default Header;