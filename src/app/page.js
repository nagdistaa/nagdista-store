import Bot from "@/components/Bot";
import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import React from "react";

export default function Home() {
  return (
    <>
      <Slider />

      <Categories />
        <Bot />
    </>
  );
}
