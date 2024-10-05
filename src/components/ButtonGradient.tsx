"use client";
import React from "react";
import { HoverBorderGradient } from "@components/ui/hover-border-gradient";

export function Button_hover({ text }: { text: string }) {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-lg text-black dark:text-white flex items-center space-x-2"
      >
        <span className="">{text}</span>
      </HoverBorderGradient>
    </div>
  );
}
