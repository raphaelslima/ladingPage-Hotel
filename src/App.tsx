import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Emphasis from "./components/Emphasis/Emphasis";
import Resorts from "./components/Resorts/Resorts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="h-screen container max-w-5xl mx-auto p-4 bg-gray-50">
      <Header />
      <Banner />
      <Emphasis />
      <Resorts />
      <Footer />
    </div>
  );
}

export default App;
