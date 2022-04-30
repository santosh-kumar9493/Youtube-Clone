import React, { useState, memo } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../App.css";

const SearchBar = (props) => {
  let [keyWord, setkeyWord] = useState("");
  const getResult = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?type=video&q=${keyWord}&part=snippet&maxResults=25&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        props.setVideos(res.data.items);
        props.history.push(`/${keyWord}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="searchBar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getResult();
        }}
      >
        <label htmlFor="searchWord">
          <input
            className="inputSearchBox"
            type="text"
            id="searchword"
            value={keyWord}
            placeholder="Search"
            onChange={(e) => setkeyWord(e.target.value)}
          />
        </label>
        <button className="sbutton" type="submit">
          <i className="fas fa-search" style={{ cursor: "pointer" }}></i>
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchBar);
