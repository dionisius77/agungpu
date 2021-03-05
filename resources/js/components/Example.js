import React from 'react';
import ReactDOM from 'react-dom';

export default function Example() {
  return (
    <div className='root'>
      <div className='header'>
        <div className='logo'>Logo</div>
        <div className='menu-box'>
          <div className='menu-btn'>Home</div>
          <div className='menu-btn'>Profile</div>
          <div className='menu-btn'>Contact</div>
          <div className='menu-btn'>Career</div>
        </div>
      </div>
      <div className='content-container'>
        test
      </div>
      <div className='footer'></div>
    </div>
  )
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
