import React from "react";
import Navbar from "./components/Navbar";
import CenterContent from "./components/CenterContent";
import InstantSearch from "./components/InstantSearch";
import DiscoverySections from "./components/DiscoverySections";
import SignUpSection from "./components/SignUpSection";
import Spacer from "./components/Spacer";
import ScrollbaleCard from "./components/ScrollbaleCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <CenterContent />
      <InstantSearch />
      <DiscoverySections />
      <SignUpSection />
      <ScrollbaleCard />
      <Footer/>
    </div>
  );
};

export default App;
