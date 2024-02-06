import React, { useState } from "react";
import "./cssfiles/content.css";
// import Youtube from "./svg/youtube";
import Spotify from "./svg/Spotify";
import Inotebook from "./svg/inotebook";
import Github from "./svg/Github";
import Chatgpt from "./svg/Chatgpt";
import Name from "./Name";

function Content() {
  const [githubdisplay, setgithubdisplay] = useState(false);
  // const [youtubedisplay, setyoutubedisplay] = useState(false);
  const [chatgptdisplay, setchatgptdisplay] = useState(false);
  const [spotifydisplay, setspotifydisplay] = useState(false);
  const [inotebook, setinotebook] = useState(false);
  const displaygithub = () => {
    setgithubdisplay(true);
    // console.log("ture");
  };
  const nondisplaygithub = () => {
    setgithubdisplay(false);
    // console.log(false);
  };
  const spotifyenter = () => {
    setspotifydisplay(true);
    // console.log(false);
  };
  const spotifyleave = () => {
    setspotifydisplay(false);
    // console.log(false);
  };
  const inotebookenter = () => {
    setinotebook(true);
    // console.log(false);
  };
  const inotebookleave = () => {
    setinotebook(false);
    // console.log(false);
  };
  const chatgptenter = () => {
    setchatgptdisplay(true);
    // console.log(false);
  };
  const chatgptleave = () => {
    setchatgptdisplay(false);
    // console.log(false);
  };
  return (
    <div className="content">
      <a
        style={{ height: "100px" }}
        href="https://notebook-v2wu.onrender.com/"
        onMouseEnter={inotebookenter}
        onMouseLeave={inotebookleave}
        className={`${
          githubdisplay || spotifydisplay || chatgptdisplay 
            ? "none"
            : ""
        }`}
        target="_blank"
      >
        <Inotebook  />
      </a>
      <a
        onMouseEnter={displaygithub}
        onMouseLeave={nondisplaygithub}
        className={`${
          spotifydisplay || chatgptdisplay || inotebook ? "none" : ""
        }`}
        target="_blank"
        href="https://github.com/Jashanwebsite"
      >
        <Github  />
      </a>
      <a
        href="https://chat.openai.com/"
        onMouseEnter={chatgptenter}
        onMouseLeave={chatgptleave}
        className={`${
          githubdisplay || spotifydisplay  || inotebook
            ? "none"
            : ""
        }`}
        target="_blank"
      >
        <Chatgpt  />
      </a>
      <a
        href="https://spotify.com"
        onMouseEnter={spotifyenter}
        onMouseLeave={spotifyleave}
        className={`${
          githubdisplay  || chatgptdisplay || inotebook
            ? "none"
            : ""
        }`}
        target="_blank"
      >
        <Spotify  />
      </a>
      <Name/>
    </div>
  );
}

export default Content;
