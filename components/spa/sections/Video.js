import React from "react";

const Video = props => {
  return (
    <section className="video-wrapper">
      <div className="fixed-width">
        <div className="video-container">
          <iframe title="射箭兒童班介紹影片" className="video-yt" width="994" height="560" src="https://www.youtube.com/embed/aaSmgiw6s-A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
