import React from 'react';

function Loading() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="spinner ">
        <i className="fa-solid fa-spinner fa-spin fa-3x"></i>
      </div>
    </div>
  )
}

export default Loading;