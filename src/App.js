import "./App.css";
import Navbar from "./navbar/Navbar";
import WatchVideo from "./WatchVideo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import SearchResult from "./SearchResult";
//import RelatedVideos from "./RelatedVideos";
import TredingVideos from "./TrendingVIdeos";
import Home from "./Home";

function App() {
  let [videos, setVideos] = useState([]);
  return (
    <Router>
      <div className="App">
        <Navbar setVideos={setVideos} />
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home videos={videos} setVideos={setVideos} />;
          }}
        />
        <Route exact path="/trendIng" component={TredingVideos} />
        <Route
          exact
          path="/:searchvideo"
          render={(props) => {
            return <SearchResult videos={videos} />;
          }}
        />

        <Route path="/videoplay/:id" component={WatchVideo} />
      </div>
    </Router>
  );
}

export default App;
