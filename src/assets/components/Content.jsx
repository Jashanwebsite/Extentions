import React, { useState } from "react";
import "./cssfiles/content.css";
import Spotify from "./svg/Spotify";
import "../../App.css";
import Header from "./Header";
import Github from "./svg/Github";
import Chatgpt from "./svg/Chatgpt";
import Name from "./Name";
import Whatsapp from "./svg/Whatsapp";

function Content({display,setdisplay,checkboxStates}) {
  // const [display.githubdisplay, setdisplay.githubdisplay] = useState(false);
  // const [whatsappdisplay, setwhatsappdisplay] = useState(false);
  // const [chatgptdisplay, setchatgptdisplay] = useState(false);
  // const [spotifydisplay, setspotifydisplay] = useState(false);
  // const [, set] = useState(false);
  const displaygithub = () => {
    setdisplay({ ...display, githubdisplay: true });
    console.log("true");
  };

  const nondisplaygithub = () => {
    setdisplay({ ...display, githubdisplay: false });
  };

  const spotifyenter = () => {
    setdisplay({ ...display, spotifydisplay: true });
  };

  const spotifyleave = () => {
    setdisplay({ ...display, spotifydisplay: false });
  };

  const whatsappenter = () => {
    setdisplay({ ...display, whatsappdisplay: true });
  };

  const whatsappleave = () => {
    setdisplay({ ...display, whatsappdisplay: false });
  };

  const chatgptenter = () => {
    setdisplay({ ...display, chatgptdisplay: true });
  };

  const chatgptleave = () => {
    setdisplay({ ...display, chatgptdisplay: false });
  };


  return (
    <>
      {/* { display.githubdisplay  || display.chatgptdisplay || display.whatsappdisplay || display.spotifydisplay ?"" :<Header/>} */}
    {/* <Whatsapp></Whatsapp> */}
    <div className="content">
    {checkboxStates.content && <a
        href="https://web.whatsapp.com/"
        onMouseEnter={whatsappenter}
        onMouseLeave={whatsappleave}
        className={`${
          display.spotifydisplay || display.chatgptdisplay || display.githubdisplay
            ? "none"
            : ""
        }`}
        target="_blank"
      >
      
        <Whatsapp/>
      </a>}
      {checkboxStates.content &&<a
        style={{ height: "100px" }}
        href="https://github.com/Jashanwebsite/"
        onMouseEnter={displaygithub}
        onMouseLeave={nondisplaygithub}
        className={`${
          display.spotifydisplay || display.chatgptdisplay || display.whatsappdisplay
            ? "none"
            : ""
        }`}
        target="_blank"
      >
      
        <Github  />
      </a>}
     { checkboxStates.content && <a
        href="https://chat.openai.com/"
        onMouseEnter={chatgptenter}
        onMouseLeave={chatgptleave}
        className={`${
          display.githubdisplay || display.spotifydisplay  || display.whatsappdisplay
            ? "none"
            : ""
        }`}
        target="_blank"
      >
        <Chatgpt  />
      </a>}
      {checkboxStates.content &&<a
        href="https://spotify.com"
        onMouseEnter={spotifyenter}
        onMouseLeave={spotifyleave}
        className={`${
          display.githubdisplay  || display.chatgptdisplay || display.whatsappdisplay
            ? "none"
            : ""
        }`}
        target="_blank"
      >
        <Spotify  />
      </a>}
      <div style={{display:`${ display.githubdisplay  || display.whatsappdisplay || display.chatgptdisplay || display.spotifydisplay ?"none" :""}`}}>
      <Name clock ={checkboxStates.clock} name={checkboxStates.name}/>  
      </div>
     
    </div>
    </>
  );
}

export default Content;
