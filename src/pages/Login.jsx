import React, { useRef } from 'react';
import '../styles/Login.scss';

const Login = () => {
  const form = useRef(null);
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }
  return (
    <div className="login">
      <div className="login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" name="email" placeholder="jhon@example.com" className="input input-email" />
          <label htmlFor="password" className="label">Re-enter password</label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />
          <button type="button"
          className="primary-button login-button" onClick={handleSubmit} > Login</button>
          <a href="/">Forgot my pasword</a>
        </form>
        <button
          className="secondary-button signup-button"
          >
          Sign up
        </button>
      </div>
    </div>
)
}

export default Login;