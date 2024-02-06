import React, { useState } from "react";
import "./cssfiles/content.css";
import Spotify from "./svg/Spotify";
import "../../App.css";
import Header from "./Header";
import Github from "./svg/Github";
import Chatgpt from "./svg/Chatgpt";
import Name from "./Name";
import Whatsapp from "./svg/Whatsapp";

function Content() {
  const [githubdisplay, setgithubdisplay] = useState(false);
  const [whatsappdisplay, setwhatsappdisplay] = useState(false);
  const [chatgptdisplay, setchatgptdisplay] = useState(false);
  const [spotifydisplay, setspotifydisplay] = useState(false);
  const [, set] = useState(false);
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
  const whatsappenter = () => {
    setwhatsappdisplay(true);
    // console.log(false);
  };
  const whatsappleave = () => {
    setwhatsappdisplay(false);
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
    <>
      { githubdisplay  || chatgptdisplay || whatsappdisplay || spotifydisplay ?"" :<Header/>}
    {/* <Whatsapp></Whatsapp> */}
    <div className="content">
    <a
        href="https://web.whatsapp.com/"
        onMouseEnter={whatsappenter}
        onMouseLeave={whatsappleave}
        className={`${
            spotifydisplay || chatgptdisplay || githubdisplay
            ? "none"
            : ""
        }`}
        target="_blank"
      >
      
        <Whatsapp/>
      </a>
      <a
        style={{ height: "100px" }}
        href="https://github.com/Jashanwebsite/"
        onMouseEnter={displaygithub}
        onMouseLeave={nondisplaygithub}
        className={`${
            spotifydisplay || chatgptdisplay || whatsappdisplay
            ? "none"
            : ""
        }`}
        target="_blank"
      >
      
        <Github  />
      </a>
      <a
        href="https://chat.openai.com/"
        onMouseEnter={chatgptenter}
        onMouseLeave={chatgptleave}
        className={`${
          githubdisplay || spotifydisplay  || whatsappdisplay
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
          githubdisplay  || chatgptdisplay || whatsappdisplay
            ? "none"
            : ""
        }`}
        target="_blank"
      >
        <Spotify  />
      </a>
      <div style={{display:`${ githubdisplay  || whatsappdisplay || chatgptdisplay || spotifydisplay ?"none" :""}`}}>
      <Name/>  
      </div>
     
    </div>
    </>
  );
}

export default Content;
