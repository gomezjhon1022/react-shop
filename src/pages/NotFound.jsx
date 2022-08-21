import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
        <div className="not-found">
          <div className="container">
        
            <h1 className="title"> Error 404 Not Found</h1>
            <h4 className="sub-title">This page is not found</h4>
            <button className="primary-button">Home</button>
          </div>
        </div>
  )
}

export default NotFound