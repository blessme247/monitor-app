import React from 'react'
import "./login.scss"
import logo from '../../assets/Icons/logo.svg'

const Login = () => {
  return (
    <div className='wrapper'>
        <div className="top">
            <img src={logo} alt="logo" />
        </div>
        <div className="loginSection">
            <div className="formWrapper">
                <form>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login