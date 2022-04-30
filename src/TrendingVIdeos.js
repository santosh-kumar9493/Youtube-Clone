import axios from "axios";
import React, { useEffect, useState, memo } from "react";
import "./App.css";
import SearchResult from "./SearchResult";

const TredingVideos = () => {
  let [trendVideo, setTrendVideo] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?type=video&part=contentDetails,player&chart=mostPopular&part=snippet&regionCode=IN&maxResults=25&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.items);
        setTrendVideo(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {trendVideo.length != 0 ? <SearchResult videos={trendVideo} /> : null}
    </div>
  );
};

export default memo(TredingVideos);
