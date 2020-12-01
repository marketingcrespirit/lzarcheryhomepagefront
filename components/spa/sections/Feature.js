import React from "react";
import FeatureCard from "../elements/Feature-card";

const Feature = props => {
  return (
    <section className="feature-wrapper">
      <div className="title desktop">
      <h1><span>◆</span>  教學重點</h1>
      </div>
      <div className="title-m mobile">
        <h2>教學重點</h2>
      </div>


      <article className="fixed-width block">
        <div className="feature-container">
          {props.feature.map((el, index) => {
            return <FeatureCard key={index} featureTitle={el.featureTitle} featureContent={el.featureContent} path={el.path} path_m={el.path_m}/>;
          })}
        </div>
        
        <div className="feature-txt-bottom">
          <h2>人生常勝軍 從小扎根興趣</h2>
          <p>台灣的射箭成績，世界排名前五。<br/>射箭同時也是歐美與韓國等國家的重點運動，興趣可以成為人生的優勢，射箭是邁向世界的一扇窗。</p>
        </div>
      </article>
      <img className="feature-txt-bottom-img mobile" src="/assets/spa/images/theme_01.jpg" alt="兒童射箭照片" />
    </section>
  );
};

export default Feature;
