import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./Header";
import { FirstPart } from "../src/pages/Landing/components/FirstPart/FirstPart";


function App() {
  return (
    <>
      <Header />
      <main>
        
        <FirstPart />
        
      </main>

      <footer></footer>
    </>
  );
}

export default App;
