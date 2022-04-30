import React from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import { memo } from "react";
function Home(props) {
  let keyword = "education and motivation english";
  const getVideo = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?type=video&q=${keyword}&part=snippet&maxResults=25&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        props.setVideos(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getVideo();
  return <SearchResult videos={props.videos} />;
}
export default memo(Home);
