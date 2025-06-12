import { categoryImages } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Categories() {
  return (
    <div className="p-3 w-full h-[50vh]">
      <h1 className="my-5 text-black text-2xl font-bold">Categories</h1>

      <div
        className="w-full h-fit flex gap-8 overflow-x-auto py-4 whitespace-nowrap"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categoryImages.map((cat, idx) => (
          <div
            key={idx}
            className="w-[300px] h-[300px] shrink-0 relative rounded-lg overflow-hidden group"
          >
            <Link href="/">
              <Image
                src={cat.img}
                alt={`Category ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <div className="absolute inset-0 bg-black opacity-50 z-0" />

            <h2 className="absolute inset-0 flex justify-center items-center text-white text-4xl font-semibold z-10">
              {cat.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
