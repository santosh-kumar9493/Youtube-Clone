import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../App.css";

const Navbar = (props) => {
  return (
    <div className={styles.Topbar}>
      <div className={styles.imgWrapper}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://cdn.icon-icons.com/icons2/2429/PNG/512/youtube_logo_icon_147199.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className={styles.textWrapper}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className={styles.logoText}>YOU TUBE</h3>
        </Link>
      </div>
      <div className={styles.searchComp}>
        <SearchBar setVideos={props.setVideos} />
      </div>
      <div className={styles.trendText}>
        <Link to="/trendIng" style={{ textDecoration: "none", color: "black" }}>
          <h3>
            Trending &nbsp;
            <i className="fab fa-hotjar" style={{ color: "red" }}></i>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
