import React from "react";
import Image1 from "../assets/category/earphone.png";
import Image2 from "../assets/category/watch.png";
import Image3 from "../assets/category/macbook.png";
import Button from "./Button";

export default function Category() {
  return (
    <div className="pt-6 bg-gray-50 dark:bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative py-12 pl-8 pr-4 bg-gradient-to-br from-black/90 to-red-800/70 text-white rounded-3xl h-[320px] flex items-end overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 col-span-1 sm:col-span-2">
            <div className="mb-6 z-10 relative">
              <p className="text-sm opacity-80 mb-1">Enjoy</p>
              <p className="text-sm opacity-80 mb-2">Premium Sound</p>
              <p className="text-3xl font-bold mb-4">Earphones</p>
              <p className="text-sm opacity-90 mb-4 max-w-xs">
                Experience crystal clear audio with our premium collection of
                wireless and wired earphones.
              </p>
              <Button
                text="Shop Earphones"
                bgColor="bg-primary"
                textColor="text-white"
              />
            </div>
            <img
              src={Image1}
              alt="Earphones"
              className="absolute bottom-0 right-8 w-[200px] h-auto object-contain"
            />
          </div>

          <div className="relative py-10 pl-8 pr-4 bg-gradient-to-br from-blue-900/90 to-blue-600/70 text-white rounded-3xl h-[320px] flex items-end overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-6 z-10 relative">
              <p className="text-sm opacity-80 mb-1">Smart</p>
              <p className="text-sm opacity-80 mb-2">& Stylish</p>
              <p className="text-2xl font-bold mb-4">Watches</p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-blue-900"
              />
            </div>
            <img
              src={Image2}
              alt="Watches"
              className="absolute bottom-0 right-0 w-[160px] h-auto object-contain transform translate-x-2"
            />
          </div>

          <div className="relative py-10 pl-8 pr-4 bg-gradient-to-br from-gray-800/90 to-gray-600/70 text-white rounded-3xl h-[320px] flex items-end overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-6 z-10 relative">
              <p className="text-sm opacity-80 mb-1">Premium</p>
              <p className="text-sm opacity-80 mb-2">Performance</p>
              <p className="text-2xl font-bold mb-4">MacBooks</p>
              <Button
                text="Browse"
                bgColor="bg-primary"
                textColor="text-white"
              />
            </div>
            <img
              src={Image3}
              alt="MacBooks"
              className="absolute bottom-0 right-0 w-[200px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
