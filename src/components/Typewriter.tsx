"use client";
import { TypewriterEffect } from "./ui/type-writer";

export function TypeWriterEffect() {
  const words = [
    {
      text: "Building",
    },
    {
      text: "Full Stack",
    },
    {
      text: "Applications",
    },
    {
      text: "from",
    },
    {
      text: "End",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "to",
    },
    {
      text: "End",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <div className=" flex flex-col items-center justify-center h-[40rem] ">
        <p className="z-10 text-neutral-600 dark:text-neutral-200 text-base  mb-10">
          The road to freedom starts from here
        </p>
        <div className="text-5xl">
          <TypewriterEffect className="text-5xl font-extrabold" words={words} />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button className="z-10 mt-10 w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
