import React, { memo } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import LoaderSpinner from "./LoaderSpinner";
import "./App.css";
const SearchResult = ({ videos }) => {
  return (
    <div className="videoContainer">
      {console.log(videos)}
      {videos.length === 0 ? (
        <LoaderSpinner />
      ) : (
        videos.map((video, pos) => {
          return (
            <Link
              key={pos}
              to={`/videoplay/${
                video.id.videoId == undefined ? video.id : video.id.videoId
              }`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <VideoCard
                title={video.snippet.title}
                channel={video.snippet.channelTitle}
                key={pos}
                thumbnail={video.snippet.thumbnails.medium}
                desc={video.snippet.description}
                publishTime={video.snippet.publishedAt}
              />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default memo(SearchResult);
