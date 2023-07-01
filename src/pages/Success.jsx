import React from 'react'
import SuccessImg from '../assets/images/icon-success.svg';

function Success() {
  return (
    <div className='main-container'>
      <div className="success-container">
          <div className="success-icon">
              <img src={SuccessImg} alt="" />
          </div>

          <div className="caption">
            <p className='heading'>Thanks for subscribing!</p>
            <p className='description'>
              A confirmation email has been sent to user's email. please open
               it and click the button inside to confirm your subscription
            </p>
          </div>

          <div className='dismiss-btn'>
              <button>Dismiss Message</button>
          </div>
      </div>
    </div>
  )
}

export default Success