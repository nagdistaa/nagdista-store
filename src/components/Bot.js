"use client";
import { chatMessages } from "@/data";
import Image from "next/image";
import React, { useState } from "react";

export default function Bot() {
  const [isBotOpen, setIsBotOpen] = useState(true);
  const [visibleMessages, setVisibleMessages] = useState([]);

  function handleBotClick() {
    setIsBotOpen((prev) => !prev);
  }

  // لما المستخدم يضغط على سؤال
  function handleSelectMessage(msg) {
    setVisibleMessages((prev) => [...prev, msg]);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
     <div
        className="bg-white h-[50px] w-[50px] rounded-full flex justify-center items-center shadow-md cursor-pointer"
        onClick={handleBotClick}
      >
        <Image src="/chat.png" alt="chat icon" width={25} height={25} />
      </div>

      {isBotOpen && (
        <div className="absolute right-0 bottom-[70px] bg-white w-[400px] h-[500px] rounded-2xl p-5 shadow-md flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            {visibleMessages.map((chat, idx) => (
              <div key={idx} className="mb-4 flex flex-col gap-2">
                <div className="bg-green-500 text-white py-2 px-4 rounded-full w-fit self-end">
                  {chat.question}
                </div>
                <div className="bg-red-500 text-white py-2 px-4 rounded-full w-fit self-start">
                  {chat.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t pt-2 flex gap-2 overflow-x-auto">
            {chatMessages.map((msg, idx) => (
              <button
                key={idx}
                className="bg-gray-200 text-sm px-3 py-1 rounded-full hover:bg-gray-300 whitespace-nowrap"
                onClick={() => handleSelectMessage(msg)}
              >
                {msg.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
