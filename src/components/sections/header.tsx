"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, RefObject, useCallback } from "react";

interface HeaderProps {
  scrollRef: RefObject<HTMLElement | null>;
}

export default function Header({ scrollRef }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fix for: "Calling setState synchronously within an effect"
  // requestAnimationFrame delays the update to the next frame, 
  // preventing cascading render errors while solving hydration issues.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const { scrollY } = useScroll({ container: scrollRef });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (!isOpen) {
      if (latest > previous && latest > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const scrollToSection = useCallback((text: string) => {
    const id = text.toLowerCase();
    const element = document.getElementById(id);

    if (element) {
      setIsOpen(false);
      // Small timeout to allow mobile menu to close before scrolling
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  }, []);

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
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  // Prevent hydration mismatch (don't render theme-dependent UI until mounted)
  if (!mounted) return null;

  const navLinks = ["About", "Experience", "Projects", "Contact"];

  return (
    <motion.div
      variants={headerVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.32, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/50 backdrop-blur-md shadow-xl shadow-primary/15"
    >
      <div className="flex justify-between items-center p-4 px-6 md:px-14">
        {/* Left Section */}
        <motion.div
          className="flex items-center cursor-pointer"
          variants={leftSectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, ease: "easeOut" }}
          onClick={() =>
            scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <Image
            src={theme === "light" ? "/logo_light.png" : "/logo_dark.png"}
            alt="Logo"
            width={25}
            height={25}
          />
          <p className="ml-2 text-xl font-medium">Truong Tan Dung</p>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          variants={buttonsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((text) => (
            <motion.div key={text} variants={buttonItemVariants}>
              <Button
                variant="slideRight"
                onClick={() => scrollToSection(text)}
              >
                {text}
              </Button>
            </motion.div>
          ))}

          <motion.div variants={buttonItemVariants}>
            <Button asChild variant="slideRight">
              <Link href="/resume">Resume</Link>
            </Button>
          </motion.div>

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
              <span className="ml-2">{theme === "light" ? "Light" : "Dark"}</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary/95 border-t border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((text) => (
                <Button
                  key={text}
                  variant="ghost"
                  className="justify-start text-lg"
                  onClick={() => scrollToSection(text)}
                >
                  {text}
                </Button>
              ))}

              <Button asChild variant="ghost" className="justify-start text-lg">
                <Link href="/resume" onClick={() => setIsOpen(false)}>
                  Resume
                </Link>
              </Button>

              <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                variant="outline"
                className="justify-between"
              >
                Toggle Theme
                {theme === "light" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}