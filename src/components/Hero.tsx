"use client";
import React from "react";
import { Boxes } from "@components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { TypeWriterEffect } from "./Typewriter";
import { inter } from "@nextfonts";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className={`${inter.className} text-5xl max-w-3xl`}>
        <TypeWriterEffect />
      </div>
    </div>
  );
}
