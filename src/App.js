import "./App.css";
import React from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Counters></Counters>
    </React.Fragment>
  );
}

export default App;
