import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Landing } from "./pages/Landing/Landing";
import { Header } from "./Header";


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
