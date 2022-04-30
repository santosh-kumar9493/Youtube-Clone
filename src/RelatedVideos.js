import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";
import LoaderSpinner from "./LoaderSpinner";

const RelatedVideos = (props) => {
  let [relVideos, setRelVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.parentvideoID}&type=video&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setRelVideo(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.parentvideoID]);
  return (
    <div>
      {relVideos.length === 0 ? (
        <LoaderSpinner />
      ) : (
        relVideos.map((item, pos) => {
          {
            if (item != undefined && item.snippet != undefined)
              return (
                <Link
                  to={`/videoplay/${item.id.videoId}`}
                  key={pos}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div key={pos} className="relatedVideoContainer">
                    <div className="relImgWrapper">
                      <img
                        className="relImage"
                        src={item.snippet.thumbnails.medium.url}
                      />
                    </div>
                    <div className="reldesWrapper">
                      <h5
                        style={{
                          textDecoration: "none",
                          color: "black",
                          overflowClipBox: "contentBox",
                          margin: "0px",
                        }}
                      >
                        {item.snippet.title}
                      </h5>
                      <p
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "12px",
                          margin: "0px",
                        }}
                      >
                        {item.snippet.publishedAt}
                      </p>
                    </div>
                  </div>
                </Link>
              );
          }
        })
      )}
    </div>
  );
};

export default memo(RelatedVideos);
