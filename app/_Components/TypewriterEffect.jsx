"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export function TypewriterEffect() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Reusable UI",
      className: "text-pink-400",
    },
    {
      text: "Components",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} className="tracking-wider" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mb-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
