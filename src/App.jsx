import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Content from "./assets/components/content";
import Header from "./assets/components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Content/>
    </>
  );
}

export default App;
