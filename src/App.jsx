import React from "react";
import Navbar from "./components/Navbar";
import CenterContent from "./components/CenterContent";
import InstantSearch from "./components/InstantSearch";

const App = () => {
  return (
    <div>
      <Navbar />
      <CenterContent />
      <InstantSearch/>
    </div>
  );
};

export default App;
