import React from 'react'
import SuccessImg from '../assets/images/icon-success.svg';
import { Link } from 'react-router-dom';
import App from '../App';

function Success(props) {
  return (
    <div className='main-container'>
      <div className="success-container">
          <div className="success-icon">
              <img src={SuccessImg} alt="" />
          </div>

          <div className="caption">
            <p className='heading'>Thanks for subscribing!</p>
            <p className='description'>
              A confirmation email has been sent to {props.userEmail}. please open
               it and click the button inside to confirm your subscription.
            </p>
          </div>

          <div className='dismiss-btn'>
              <Link to= '/'><button>Dismiss Message</button></Link>
          </div>
      </div>
    </div>
  )
}

export default Success