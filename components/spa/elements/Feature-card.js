import React from "react";

const FeatureCard = props => {
  return (
    <div className="feature-card">
      <div className="feature-txt">
        <h2>{props.featureTitle}</h2>
        <p>{props.featureContent}</p>
      </div>

      <div className="feature-img desktop">
        <img src={props.path} alt="" />
      </div>

      <div className="feature-img-m mobile">
        <ul>
        { props.path_m.map((el, index) => {
            return <li key={index}><img  alt="icon" src="/assets/spa/icons/check.png" /><p>{ el }</p></li>
        }) }
        </ul>
      </div>
    </div>
  );
};

export default FeatureCard;
