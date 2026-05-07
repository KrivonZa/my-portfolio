"use client";

import { useEffect, useRef } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
  const { resolvedTheme } = useTheme();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const init = async () => {
      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: getOptions(resolvedTheme),
      });
    };

    init();
  }, []);

  // Update the color when the theme changes
  useEffect(() => {
    tsParticles.load({
      id: "tsparticles",
      options: getOptions(resolvedTheme),
    });
  }, [resolvedTheme]);

  return <div id="tsparticles" aria-hidden="true" className="pointer-events-none" />;
}

function getOptions(theme: string | undefined) {
  const isDark = theme === "dark";
  const palette = getThemePalette(isDark);

  return {
    background: {
      color: "transparent",
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 140,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 60,
      },
      color: {
        value: palette.particle,
      },
      links: {
        enable: true,
        color: palette.link,
        distance: 180,
        opacity: 0.35,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
  };
}

function getThemePalette(isDark: boolean) {
  return {
    particle: isDark ? "#e8f0ff" : "#4477ee",
    link: isDark ? "#9fbfff" : "#6b8dff",
  };
}