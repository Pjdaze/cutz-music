import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Divider } from "semantic-ui-react";
import MainWrap from "../styled-components/MainWrap";
import { useState } from "react";
import { useEffect } from "react";
import HomeWrap from "../styled-components/HomeWrapp";

function Home() {
  const [playList, setPlaylist] = useState([]);

  useEffect(() => {
    const url = "https://api.spotify.com/v1/1KK1sxBEY0mYcArJ5jBU1Q";

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);

        setPlaylist(data);
      });
  }, []);

  return (
    <MainWrap>
      <HomeWrap className="flex-center">
        <div className="neon-wrap">
          <span className="blink">C</span>
          <span className="spin">
            <span className="down">U</span>
          </span>

          <span className="r">
            T<span className="blink1">Z</span>M<span className="off">u</span>
            <span className="blink1">s</span>
            <span className="blink1">i</span>
            <span className="blink1">c</span>
          </span>
        </div>
        <br />
        Enjoy The Ride
        <iframe
          className="iframe"
          title="cutz-music"
          src="https://open.spotify.com/embed/artist/1KK1sxBEY0mYcArJ5jBU1Q"
          width="600"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <NavLink className="App-link" to="/About">
          Learn More
        </NavLink>
      </HomeWrap>
    </MainWrap>
  );
}

export default Home;
