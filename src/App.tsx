import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./Header";
import { Landing } from "./pages/Landing/Landing";


function App() {
  return (
    <>
      <Header />
      <main>
        
        <Landing />
        
      </main>

      <footer></footer>
    </>
  );
}

export default App;
