"use client";
import React from "react";
import { Boxes } from "@components/ui/background-boxes";
import { inter } from "@nextfonts";
import { TextGenerateEffect } from "./ui/textGenerationEffect";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import AnimatedData from "@public/Animation1.json";
import Link from "next/link";
const words = "Building Full Stack Apps From End to End";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <Boxes />

      <div
        className={`${inter.className} max-w-3xl z-10 flex flex-col justify-center items-center pt-40`}
      >
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="flex justify-center items-center">
              Hi there! Yaswanth Kosuru from India
              <Lottie animationData={AnimatedData} className="w-10 h-10" />
            </div>
            <TextGenerateEffect
              filter={false}
              words={words}
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
          </div>
          <div></div>

          {/* <Lottie animationData={AnimatedData2} className="w-60 h-60" /> */}
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button className="z-10 mt-10 w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            <Link href="#about">Know more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
