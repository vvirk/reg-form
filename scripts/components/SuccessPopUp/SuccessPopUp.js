import React from 'react';

export const SuccessPopUp = (props) => {
  return(
    <div className="success-pop-up">
      <div className="success-pop-up-content">
        <div className="success-pop-up-icon-wrap">
          <div className="success-pop-up-icon">
            &#10003;
          </div>
        </div>
        <div className="success-pop-up-text">
          <h2 className="success-pop-up-title">
            Great!
          </h2>
          <div className="success-pop-up-desc">
            your account has been successfully created.
          </div>
        </div>
      </div>
      <div className="success-pop-up-btn-wrap">
        <button 
          className="success-pop-up-btn"
          onClick={()=> props.togglePopUp(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default SuccessPopUp;