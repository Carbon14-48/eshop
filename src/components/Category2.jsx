import React from "react";
import Image1 from "../assets/category/gaming.png";
import Image2 from "../assets/category/vr.png";
import Image3 from "../assets/category/speaker.png";
import Button from "./Button";

export default function Category2() {
  return (
    <div className="pt-8 bg-gray-50 dark:bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative py-12 pl-8 pr-4 bg-gradient-to-br from-emerald-800/90 to-green-600/70 text-white rounded-3xl h-[320px] flex items-end overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 col-span-1 sm:col-span-2">
            <div className="mb-6 z-10 relative">
              <p className="text-sm opacity-80 mb-1">Ultimate</p>
              <p className="text-sm opacity-80 mb-2">Gaming</p>
              <p className="text-3xl font-bold mb-4">Experience</p>
              <p className="text-sm opacity-90 mb-4 max-w-xs">
                Discover the latest gaming gear and accessories for the ultimate
                gaming setup.
              </p>
              <Button
                text="Explore Gaming"
                bgColor="bg-white"
                textColor="text-emerald-800"
              />
            </div>
            <img
              src={Image1}
              alt="Gaming"
              className="absolute bottom-0 right-8 w-[220px] h-auto object-contain"
            />
          </div>

          <div className="relative py-10 pl-8 pr-4 bg-gradient-to-br from-indigo-800/90 to-purple-700/70 text-white rounded-3xl h-[320px] flex items-end overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-6 z-10 relative">
              <p className="text-sm opacity-80 mb-1">Virtual</p>
              <p className="text-sm opacity-80 mb-2">Reality</p>
              <p className="text-2xl font-bold mb-4">VR Headsets</p>
              <Button
                text="Enter VR"
                bgColor="bg-white"
                textColor="text-indigo-800"
              />
            </div>
            <img
              src={Image2}
              alt="VR Headsets"
              className="absolute bottom-0 right-0 w-[160px] h-auto object-contain transform translate-x-2"
            />
          </div>

          <div className="relative py-10 pl-8 pr-4 bg-gradient-to-br from-orange-800/90 to-amber-600/70 text-white rounded-3xl h-[320px] flex items-end overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-6 z-10 relative">
              <p className="text-sm opacity-80 mb-1">Premium</p>
              <p className="text-sm opacity-80 mb-2">Sound</p>
              <p className="text-2xl font-bold mb-4">Speakers</p>
              <Button
                text="Listen Now"
                bgColor="bg-white"
                textColor="text-orange-800"
              />
            </div>
            <img
              src={Image3}
              alt="Speakers"
              className="absolute bottom-0 right-0 w-[180px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
