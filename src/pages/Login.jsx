import React from 'react';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" id="email" placeholder="jhon@example.com" className="input input-email" />
          <label htmlFor="password" className="label">Re-enter password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <input type="submit" defaultValue="Log in" className="primary-button login-button" />
          <a href="/">Forgot my pasword</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
)
}

export default Login;