import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Divider } from "semantic-ui-react";
import MainWrap from "../styled-components/MainWrap";
import { useState } from "react";
import { useEffect } from "react";
function Home() {
  const [playList, setPlaylist] = useState([]);

  useEffect(() => {
    const url = "https://api.spotify.com/v1/cutz";

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);

        setPlaylist(data);
      });
  }, []);

  return (
    <div className="App">
      <MainWrap>
        <p>
          <span style={{ fontSize: "1.4em" }}>Cutz Music</span>
          <br />
          Enjoy The Ride
        </p>

        <NavLink className="App-link" to="/About">
          Learn More
        </NavLink>
      </MainWrap>
    </div>
  );
}

export default Home;
