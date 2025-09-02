import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Services";
import Banner from "./components/Banner";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products";
import smartwatch2 from "./assets/category/smartwatch2.png";
import Blogs from "./components/Blogs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
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
const BannerData2 = {
  discount: "25% OFF",
  title: "Happy Hours",
  date: "19 Jan to 29 Jan",
  image: smartwatch2,
  title2: "Smart Watch",
  title3: "Winter Sale",
  title4:
    "Lorem ipusm , dolor , sit amat conscutar  Tottnehma best Teams In england and Harry Kane best player in the world",
  bgColor: "#2dcc6f",
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
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
