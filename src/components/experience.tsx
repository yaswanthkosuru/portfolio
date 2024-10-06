import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeLine";
import recommendationLetter from "@public/recommendation.png";
import leetcode from "@public/leetcode.png";
import lushly from "@public/lushly.png";
export function TimelineDemo() {
  const data = [
    {
      title: "2024 FEB-JULY",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base  md:text-2xl font-normal mb-8">
            Worked In A.I.HYR as a Full Stack Developer, Prompt Engineer,
            Artificial Model Integrations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={recommendationLetter}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019-2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-2xl pt-4 border-white   font-normal mb-8">
            Attended S.R.K.R college for Graduation and Started Learning
            React,Node,Databases,operating systems,Leetcoding,DSA,Cloud,Deep
            Learning lot more....
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={leetcode}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={lushly}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-[#010519]">
      <Timeline data={data} />
    </div>
  );
}
