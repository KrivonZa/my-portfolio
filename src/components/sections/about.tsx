"use client";

import { ScrollFade, GrowExpand } from "@/components/motions";

export default function About() {
  return (
    <div className="relative h-screen grid grid-cols-1 md:grid-cols-3 items-center overflow-hidden">
      <ScrollFade
        direction="left"
        className="h-full col-span-1 animated-background bg-linear-to-br from-purple-500 via-red-500 to-purple-500 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 px-4 space-y-3">
          <GrowExpand
            direction="down"
            size="249px"
            className="shadow-xl w-4 bg-gray-700 dark:bg-blue-200"
          />
        </div>
      </ScrollFade>
      <div className="h-full col-span-1 md:col-span-2 bg-background relative overflow-hidden"></div>

      <ScrollFade
        direction="down"
        className="absolute inset-0 flex items-center justify-center z-10 overflow-x-hidden"
      >
        <div className="h-40 w-[50vw] bg-gray-700 shadow-xl flex items-center justify-center">
          Hi
        </div>
      </ScrollFade>
    </div>
  );
}
