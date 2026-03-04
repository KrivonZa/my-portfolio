"use client";

import { ScrollFade, GrowExpand } from "@/components/motions";

export default function Intro() {
  return (
    <div className="relative h-screen grid grid-cols-1 md:grid-cols-3 items-center overflow-hidden">
      <div className="h-full col-span-1 md:col-span-2 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 px-4 space-y-3">
          <GrowExpand direction="up" size="249px" className="shadow-xl w-4 bg-gray-700 dark:bg-gray-50" />
        </div>
      </div>

      <ScrollFade direction="right" className="h-full col-span-1 animated-background bg-linear-to-br from-green-500 via-blue-500 to-green-500" />

      <ScrollFade direction="down" className="absolute inset-0 flex items-center justify-center z-10 overflow-x-hidden">
        <div className="h-40 w-[50vw] bg-gray-700 shadow-xl flex items-center justify-center">
          Hi
        </div>
      </ScrollFade>
    </div>
  );
}
