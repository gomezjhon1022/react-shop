import React from 'react'

const Password = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <label htmlFor="new-password" className="label">Re-enter password</label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password" />
          <input type="submit" defaultValue="Confirm new password" className="primary-button login-button" />
          {/* Este input se puede estilizar como un boton ya que estamos usando input en un formulario */}
        </form>
      </div>
    </div>

  )
}

export default Password;