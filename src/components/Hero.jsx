import React from "react";
import Slider from "react-slick";
import Image1 from "../assets/hero/headphone.png";
import Image2 from "../assets/category/vr.png";
import Image3 from "../assets/category/macbook.png";
const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 1,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];
function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className=" bg-gray-50 dark:bg-blue-950 pt-8 mb-0 pb-16">
      <div className="mx-4 lg:mx-8 mb-0">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800">
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-300/20 rounded-full blur-lg"></div>
            <div className="relative z-10 px-6 lg:px-12">
              <Slider {...settings}>
                {HeroData.map((data) => (
                  <div key={data.id}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] lg:min-h-[600px] py-12">
                      <div className="text-center lg:text-left order-2 lg:order-1 space-y-8">
                        <div className="inline-block">
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/30">
                            {data.subtitle}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-8xl font-black text-white leading-none tracking-tight">
                            {data.title}
                          </h1>
                          {data.title2 && (
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 tracking-wide">
                              {data.title2}
                            </h2>
                          )}
                        </div>

                        <p className="text-lg text-white/80 max-w-md mx-auto lg:mx-0 leading-relaxed">
                          Experience the future of shopping with our premium
                          collection.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                          <button className="group relative bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <span className="relative z-10">Shop Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Shop Now
                            </span>
                          </button>

                          <button className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300">
                            Explore Collection
                          </button>
                        </div>
                      </div>

                      <div className="order-1 lg:order-2 relative">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-90"></div>

                          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                            <img
                              src={data.img}
                              alt={data.title}
                              className="w-full h-auto max-w-[450px] mx-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-60 animate-bounce delay-300"></div>
                          <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
