import React from "react";

const Themecard = props => {
  return (
    <li>
      <h2>{props.themeTitle}</h2>
      <p>{props.themeContent}</p>
    </li>
  );
};

export default Themecard;
