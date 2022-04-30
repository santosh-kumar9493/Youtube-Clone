import axios from "axios";
import React from "react";
import "./App.css";
import RelatedVideos from "./RelatedVideos";

class WatchVideo extends React.Component {
  constructor() {
    super();
    console.log(this.props);
    this.state = { loading: true, showingDescription: false };
  }

  componentDidMount() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&key=${process.env.REACT_APP_API_KEY}&id=${this.props.match.params.id}`
      )
      .then((res) => {
        console.log(res);
        const video = res.data.items[0];
        this.setState({
          title: video.snippet.title,
          views: video.statistics.viewCount,
          desc: video.snippet.description,
          channel: video.snippet.channelTitle,
          like: video.statistics.likeCount,
          loading: false,
          url: video.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&key=${process.env.REACT_APP_API_KEY}&id=${this.props.match.params.id}`
      )
      .then((res) => {
        console.log(res);
        const video = res.data.items[0];
        this.setState({
          title: video.snippet.title,
          views: video.statistics.viewCount,
          desc: video.snippet.description,
          channel: video.snippet.channelTitle,
          like: video.statistics.likeCount,
          loading: false,
          url: video.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.url === nextState.url) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  showclickHandler = () => {
    this.setState((prevState, preProps) => {
      return {
        ...prevState,
        showingDescription: !this.state.showingDescription,
      };
    });
  };
  render() {
    return (
      <div className="videopage">
        <div className="videoPlay">
          {this.state.loading ? null : (
            <div className="videoframe">
              <div>
                <iframe
                  className="vidframeSetter"
                  src={`//www.youtube.com/embed/${this.state.url}`}
                ></iframe>
              </div>
              <div className="videoDetails">
                <div>
                  <h3>{this.state.title}</h3>
                </div>
                <div className="stats">
                  <div>
                    <span className="statText">{this.state.views}</span>
                    <b>Views</b>
                  </div>
                  <div>
                    <b>Channel : </b>
                    <span className="statText">{this.state.channel}</span>
                  </div>
                  <div>
                    <span className="statText">{this.state.like}</span>
                    <b>Likes</b>
                  </div>
                </div>
                <div className="description">
                  <div>
                    {!this.state.showingDescription ? (
                      <h5
                        onClick={this.showclickHandler}
                        style={{
                          cursor: "pointer",
                          color: "#8a5a5a",
                          fontWeight: 600,
                          fontSize: "15px",
                        }}
                      >
                        SHOW DESCRIPTION
                      </h5>
                    ) : null}
                  </div>
                  <div>
                    {this.state.showingDescription ? (
                      <div className="desBox">{this.state.desc}</div>
                    ) : null}
                  </div>
                  <div>
                    {this.state.showingDescription ? (
                      <h5
                        onClick={this.showclickHandler}
                        style={{
                          cursor: "pointer",
                          color: "#8a5a5a",
                          fontWeight: 600,
                          fontSize: "15px",
                        }}
                      >
                        HIDE DESCRIPTION
                      </h5>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relatedVideoBox">
          <h4
            style={{
              textAlign: "center",
              margin: "0px",
              padding: "3px",
              border: "1px solid #ccc",
              boxSizing: "borderBox",
            }}
          >
            Realted Videos
          </h4>
          <RelatedVideos parentvideoID={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default WatchVideo;
