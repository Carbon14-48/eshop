import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Services";
function App() {
  return (
    <div className="bg-gray-50 dark:bg-blue-950 dark:text-white overflow-hidden duration-200">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
    </div>
  );
}

export default App;
