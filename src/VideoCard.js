import React from "react";
import "./App.css";
const VideoCard = (props) => {
  return (
    <div className="Vidcard">
      <div className="imgWrapper">
        <img src={props.thumbnail.url} alt="" />
      </div>
      <div className="descWrapper">
        <h2>{props.title}</h2>
        <h5>
          {props.channel}

          <span>&nbsp;&nbsp;&nbsp;&nbsp;{props.publishTime}</span>
        </h5>
        <p className="videoDescription">{props.desc}</p>
      </div>
    </div>
  );
};

export default VideoCard;
