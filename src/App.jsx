import React from "react";
import Navbar from "./components/Navbar";
import CenterContent from "./components/CenterContent";
import InstantSearch from "./components/InstantSearch";
import DiscoverySections from "./components/DiscoverySections";

const App = () => {
  return (
    <div>
      <Navbar />
      <CenterContent />
      <InstantSearch/>
      <DiscoverySections/>
    </div>
  );
};

export default App;
