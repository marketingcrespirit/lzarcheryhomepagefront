import React from "react";
import CoachCard from "../../spa/elements/Coach-card";

const Coach = props => {
  return (
    <section className="coach-wrapper">
      <div className="title desktop">
        <h1 className="white">
          <span>◆</span> 教練師資
        </h1>
      </div>
      <div className="title-m mobile">
        <h2>教練師資</h2>
      </div>

      <div className="coach-container fixed-width">
        {props.coach.map((el, index) => {
          return <CoachCard windowX={props.windowX} key={index} name={el.name} major={el.major} intro={el.intro} path={el.path} path_m={el.path_m} />;
        })}
      </div>
    </section>
  );
};

export default Coach;
