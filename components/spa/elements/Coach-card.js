import React from "react";

const CoachCard = props => {
  return (
    <div className="coach-card">
      <div className="coach-img desktop">
        <img src={props.path} alt="coach" />
      </div>

      <div className="coach_img_m_wrapper mobile">
        <img id="coach_1" className="effect1" src={props.path_m} alt="coach" />
      </div>

      <div className="coach-txt">
        <div className="coach-txt-title">
          <h1>{props.name}</h1>
          <div className="coach-major">
            <img className="desktop" src="/assets/spa/icons/coach_icon.png" alt="arrow" />
            <img className="mobile" src="/assets/icons/arrow_black.png" alt="arrow" />
            <p>{props.major}</p>
          </div>
        </div>
        <article className="coach-txt-intro">
          <p> {props.intro} </p>
        </article>
      </div>
    </div>
  );
};

export default CoachCard;
