
import React from 'react';
import './PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className="section">
            <h1 className="error">404</h1>
            <div className="page">Ooops!!! The page you are looking for is not found</div>
            <a className="back-home" href="/login">Back to home</a>
        </div>
    </div>
  )
}

export default PageNotFound;