"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined) {
      if (latest > previous && latest > 80) setHidden(true);
      else setHidden(false);
    }
  });

  const headerVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  const leftSectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={headerVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.32, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/50 backdrop-blur-md shadow-xl shadow-primary/15"
    >
      <div className="flex justify-between items-center p-4 px-14">
        <motion.div
          className="flex items-center"
          variants={leftSectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {theme === "light" ? (
            <Image src="/logo_light.png" alt="Logo" width={25} height={25} />
          ) : (
            <Image src="/logo_dark.png" alt="Logo" width={25} height={25} />
          )}
          <p className="ml-2 text-xl">Truong Tan Dung</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-8"
          variants={buttonsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {["About", "Experience", "Projects", "Contact", "Resume"].map(
            (text) => (
              <motion.div key={text} variants={buttonItemVariants}>
                <Button variant="slideRight">{text}</Button>
              </motion.div>
            ),
          )}

          <motion.div variants={buttonItemVariants}>
            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="border border-primary"
              variant="slideRight"
            >
              {theme === "light" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
              {theme === "light" ? "Light" : "Dark"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
