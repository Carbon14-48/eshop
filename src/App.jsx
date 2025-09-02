import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Services";
import Banner from "./components/Banner";
import headphone from "./assets/hero/headphone.png";
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smike",
  date: "19 Jan to 29 Jan",
  image: headphone,
  title2: "Air Solo Base",
  title3: "Winter Sale",
  title4:
    "Lorem ipusm , dolor , sit amat conscutar  Tottnehma best Teams In england and Harry Kane best player in the world",
  bgColor: "#f42c37",
};
function App() {
  return (
    <div className="bg-gray-50 dark:bg-blue-950 dark:text-white overflow-hidden duration-200">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
    </div>
  );
}

export default App;
