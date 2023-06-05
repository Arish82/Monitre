import React from 'react'
import masthead from '../../assets/masthead.png'
import './masthead.css'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='masthead-text'>
        <div className='masthead-heading'><h1>Manage your money in the best possible way</h1></div>
        <div className='masthead-subheading'>Monitre is the platform that manages your finances wisely and efficiently</div>
        <button className="start">Get Started
          <div style={{marginLeft:'0.5rem', marginTop:'0.3rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>
        </button>
      </div>
      <div className='masthead-image'>
        <img src={masthead} alt="masthead" />
      </div>
    </div>
  )
}

export default LandingPage