"use client";
import { sliderImages } from "@/data";
import React, { useEffect, useState } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[calc(100vh-50px)] w-full p-5 flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url("${sliderImages[currentIndex]}")` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* content */}
      <div className="z-0 flex flex-col items-center justify-center gap-8 text-center px-4">
        <h1 className="text-white text-5xl font-bold leading-normal tracking-wide">
          Step Into Style With Our New Arrivals
        </h1>
        <p className="text-white text-xl">
          Discover trendy outfits, fresh looks, and timeless fashion — curated
          just for you.
        </p>
        <button className="px-7 py-3.5 rounded-xl bg-red-500 text-white font-semibold text-xl hover:bg-red-600 transition">
          Shop Now
        </button>
      </div>

      {/* indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-0">
        {sliderImages.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-300 ring-1 ring-black w-[15px] h-[15px] rounded-full cursor-pointer ${
              idx === currentIndex
                ? "bg-red-500 ring-red-500 scale-110"
                : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
