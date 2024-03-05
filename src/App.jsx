import { useState } from "react";
import Content from "./assets/components/Content";
import Header from "./assets/components/Header";

function App() {
  const [display, setdisplay] = useState({
    githubdisplay: false,
    whatsappdisplay: false,
    chatgptdisplay: false,
    spotifydisplay: false,
  });
  // const [githubdisplay, setgithubdisplay] = useState(false);
  //   const [whatsappdisplay, setwhatsappdisplay] = useState(false);
  //   const [chatgptdisplay, setchatgptdisplay] = useState(false);
  //   const [spotifydisplay, setspotifydisplay] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    upperlogo1: Math.random() < 0.5,
    clock: Math.random() < 0.5,
    name:  Math.random() < 0.5 // Returns true 50% of the time and false 50% of the time
    ,
    content: true,
  });
  return (
    <>
      <Content
        checkboxStates={checkboxStates}
        display={display}
        setdisplay={setdisplay}
      />
      {display.githubdisplay ||
      display.chatgptdisplay ||
      display.whatsappdisplay ||
      display.spotifydisplay ? (
        ""
      ) : (
        <Header
          checkboxStates={checkboxStates}
          setCheckboxStates={setCheckboxStates}
        />
      )}
    </>
  );
}

export default App;
