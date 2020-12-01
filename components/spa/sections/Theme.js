import React from "react";
import ThemeCard from "../../spa/elements/Theme-card";

const Theme = props => {
  return (
    <section className="theme-wrapper">
      <div className="title desktop">
        <h1>
          <span>◆</span> 教學方向
        </h1>
      </div>

      <div className="title-m mobile">
        <h2>教學方向</h2>
      </div>

      <div className="fixed-width">
        <article className="theme-txt">
          <h1>建議7~12歲(身高120cm以上)</h1>
          <ul>
            {props.theme.map((el, index) => {
              return <ThemeCard key={index} themeTitle={el.themeTitle} themeContent={el.themeContent} />;
            })}
          </ul>
        </article>

        <div className="theme-img">
          <img className="desktop" src={props.theme_01.path} alt="" />
          <img className="mobile-hidden" src={props.theme_02.path} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Theme;
