import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
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
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

function Hero({ openPopup }) {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="bg-gray-50 dark:bg-blue-950 pt-8 mb-0 pb-16">
      <div className="mx-4 lg:mx-8 mb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800">
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, delay: 2 }}
              className="absolute bottom-10 left-10 w-24 h-24 bg-pink-300/20 rounded-full blur-lg"
            ></motion.div>

            <div className="relative z-10 px-6 lg:px-12">
              <Slider {...settings}>
                {HeroData.map((data) => (
                  <div key={data.id}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] lg:min-h-[600px] py-12">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left order-2 lg:order-1 space-y-8"
                      >
                        <motion.div
                          variants={textVariants}
                          className="inline-block"
                        >
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/30">
                            {data.subtitle}
                          </span>
                        </motion.div>

                        <motion.div
                          variants={textVariants}
                          className="space-y-2"
                        >
                          <motion.h1
                            variants={textVariants}
                            className="text-6xl sm:text-7xl lg:text-8xl xl:text-8xl font-black text-white leading-none tracking-tight"
                          >
                            {data.title}
                          </motion.h1>
                          {data.title2 && (
                            <motion.h2
                              variants={textVariants}
                              className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 tracking-wide"
                            >
                              {data.title2}
                            </motion.h2>
                          )}
                        </motion.div>

                        <motion.p
                          variants={textVariants}
                          className="text-lg text-white/80 max-w-md mx-auto lg:mx-0 leading-relaxed"
                        >
                          Experience the future of shopping with our premium
                          collection.
                        </motion.p>

                        <motion.div
                          variants={containerVariants}
                          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                        >
                          <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={openPopup}
                            className="cursor-pointer group relative bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                          >
                            <span className="relative z-10">Shop Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Shop Now
                            </span>
                          </motion.button>

                          <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="cursor-pointer border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300"
                          >
                            Explore Collection
                          </motion.button>
                        </motion.div>
                      </motion.div>

                      {/* Image Content */}
                      <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-1 lg:order-2 relative"
                      >
                        <div className="relative group">
                          <motion.div
                            animate={{
                              scale: [0.9, 1.1, 0.9],
                              opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-30 scale-90"
                          ></motion.div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:border-white/40 transition-all duration-300"
                          >
                            <motion.img
                              variants={floatingVariants}
                              animate="animate"
                              src={data.img}
                              alt={data.title}
                              className="w-full h-auto max-w-[450px] mx-auto object-contain drop-shadow-2xl"
                            />
                          </motion.div>

                          <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.3,
                            }}
                            className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"
                          ></motion.div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400 rounded-full opacity-60"
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
