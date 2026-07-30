"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useThemeTransition } from "@/hooks/use-theme-transition";
import { Moon, Sun, Menu, X } from "lucide-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState, useSyncExternalStore, RefObject, useCallback } from "react";

interface HeaderProps {
  scrollRef: RefObject<HTMLElement | null>;
}

const MOBILE_BREAKPOINT_QUERY = "(max-width: 767px)";

const subscribeToMobileQuery = (onStoreChange: () => void) => {
  const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
  const listener = () => onStoreChange();

  mediaQuery.addEventListener("change", listener);

  return () => mediaQuery.removeEventListener("change", listener);
};

const getMobileSnapshot = () => window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches;

const getMobileServerSnapshot = () => false;

export default function Header({ scrollRef }: HeaderProps) {
  const { toggleTheme } = useThemeTransition();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useSyncExternalStore(
    subscribeToMobileQuery,
    getMobileSnapshot,
    getMobileServerSnapshot,
  );

  const { scrollY } = useScroll({ container: scrollRef });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isMobile) return;

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

  const navLinks = ["About", "Experience", "Projects", "Contact"];
  const isHeaderHidden = !isMobile && hidden;

  return (
    <motion.div
      variants={headerVariants}
      animate={isHeaderHidden ? "hidden" : "visible"}
      transition={{ duration: isMobile ? 0.18 : 0.32, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 md:bg-secondary/50 backdrop-blur-0 md:backdrop-blur-md shadow-lg md:shadow-xl shadow-primary/15"
    >
      <div className="flex justify-between items-center p-4 px-6 md:px-14">
        {/* Left Section */}
        <motion.div
          className="flex items-center cursor-pointer"
          variants={leftSectionVariants}
          initial={false}
          animate="visible"
          transition={{ duration: isMobile ? 0.2 : 0.45, ease: "easeOut" }}
          onClick={() =>
            scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <Image
            src="/logo_light.png"
            alt="Logo"
            width={25}
            height={25}
            className="block dark:hidden"
          />
          <Image
            src="/logo_dark.png"
            alt="Logo"
            width={25}
            height={25}
            className="hidden dark:block"
          />
          <p className="ml-2 text-xl font-medium">Kevin Truong</p>
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
              onClick={(e) => toggleTheme(e)}
              className="border border-primary"
              variant="slideRight"
            >
              <Sun className="size-4 block dark:hidden" />
              <Moon className="hidden size-4 dark:block" />
              <span className="ml-2 block dark:hidden">Light</span>
              <span className="ml-2 hidden dark:block">Dark</span>
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
            initial={{ opacity: 0, y: -8, scaleY: 0.98 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden bg-secondary/95 border-t border-primary/10 overflow-hidden"
            style={{ transformOrigin: "top" }}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((text) => (
                <Button
                  key={text}
                  variant="ghost"
                  className="justify-start text-lg px-2"
                  onClick={() => scrollToSection(text)}
                >
                  {text}
                </Button>
              ))}

              <Button
                asChild
                variant="ghost"
                className="justify-start text-lg px-2"
              >
                <Link href="/resume" onClick={() => setIsOpen(false)}>
                  Resume
                </Link>
              </Button>

              <Button
                onClick={(e) => toggleTheme(e)}
                variant="ghost"
                className="justify-start text-lg px-2 gap-3"
              >
                <Sun className="size-5 block dark:hidden" />
                <Moon className="hidden size-5 dark:block" />
                <span className="block dark:hidden">Light Mode</span>
                <span className="hidden dark:block">Dark Mode</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
