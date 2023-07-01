import './App.css'
import { useState } from 'react'
import ListIcon from './assets/images/icon-list.svg'
import FormImage from './assets/images/illustration-sign-up-desktop.svg'
import { useNavigate } from 'react-router-dom'

function App() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function loginFunction(e)
  {
    e.preventDefault(); 
      navigate('/success')
      console.log(`the users email is ${email}`)
  }
  return (
    <div className="body-container">
      <div className='container'>
        <div className='form-container'>
          <p className='heading'>Stay updated!</p>
          <p className='description'>Join 60,000+ product managers recieving monthly updates on:</p>

          <div className='icon-list-container'>
            <div className='list-container'>
              <img src={ListIcon} alt="" />
              <p>product discovery and building what matters</p>
            </div>
            <div className='list-container'>
               <img src={ListIcon} alt="" />
              <p>Mesuring to ensure update are a success</p>
            </div>
            <div className='list-container'>
               <img src={ListIcon} alt="" />
              <p>And much more!</p>
            </div>

              <form action="" onSubmit={loginFunction}>
                <div className='input-container'>
                  <label htmlFor="email">Email Address</label>
                <input type="email" name='email' placeholder='email@company.com' 
                onChange={(e)=> setEmail(e.target.value)} required/>
                </div>

                <div className='form-btn-container'>
                  <button>subscribe to monthly news letter</button>
                </div>
            </form>

          </div>
        </div>
        <div className='form-image-container'>
          <img src={FormImage} alt="" />
        </div>
    </div>
    </div>
  )
}

export default App
