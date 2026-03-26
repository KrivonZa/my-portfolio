"use client";

import { ExternalLink, Code2 } from "lucide-react";
import { ScrollFade } from "@/components/motions";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  year: string;
  team: string;
  role?: string;
  description: string;
  tags: string[];
  imageSrc: string;
  alt?: string;
  liveLink?: string;
  repoLink?: string;
  imagePosition?: "left" | "right";
}

export default function ProjectCard({
  title,
  year,
  team,
  role,
  description,
  tags,
  imageSrc,
  alt,
  liveLink,
  repoLink,
  imagePosition = "right",
}: ProjectCardProps) {
  const containerClasses =
    imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row";

  const hasLiveLink = Boolean(
    liveLink && liveLink.trim() !== "" && liveLink !== "#",
  );

  const textAnimDir = imagePosition === "left" ? "right" : "left";
  const imageAnimDir = imagePosition === "left" ? "left" : "right";

  return (
    <div
      className={`flex flex-col ${containerClasses} items-center gap-10 md:gap-16 w-full mb-20 md:mb-32`}
    >
      {/* CONTENT SIDE (Stays on top in Mobile) */}
      <div className="flex-1 w-full space-y-5">
        <ScrollFade direction={textAnimDir} reduceMotionOnMobile>
          <div className="space-y-1">
            <h3 className="text-4xl md:text-6xl font-bold text-foreground transition-colors duration-500">
              {title}
            </h3>
            <span className="block text-2xl md:text-3xl font-light text-muted-foreground/40 transition-colors duration-500">
              {year}
            </span>
          </div>

          <p className="font-mono text-primary font-bold text-lg mt-1 tracking-tight transition-colors duration-500">
            with {team}
          </p>

          {role && (
            <p className="text-sm md:text-base font-semibold text-foreground/85 transition-colors duration-500">
              Role: <span className="text-primary">{role}</span>
            </p>
          )}

          <div className="h-px w-full bg-border my-6 transition-colors duration-500" />

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl transition-colors duration-500">
            {description}
          </p>

          {/* Tag Cloud */}
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-px"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-8 pt-8 font-semibold">
            {repoLink ? (
              <a
                href={repoLink}
                target="_blank"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-500"
              >
                <Code2 size={20} /> Code
              </a>
            ) : (
              <div className="flex items-center gap-2 text-muted-foreground/40 cursor-not-allowed bg-secondary/30 px-4 py-2 rounded-md transition-colors duration-500">
                Private <Code2 size={18} />
              </div>
            )}

            {hasLiveLink && (
              <a
                href={liveLink}
                target="_blank"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group duration-500"
              >
                Link{" "}
                <ExternalLink
                  size={18}
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                />
              </a>
            )}
          </div>
        </ScrollFade>
      </div>

      {/* IMAGE SIDE (Stays at bottom in Mobile) */}
      <div className="flex-1 w-full">
        <ScrollFade direction={imageAnimDir} reduceMotionOnMobile>
          <div className="relative group rounded-sm overflow-hidden shadow-2xl border border-border transition-colors duration-500">
            <Image
              src={imageSrc}
              alt={alt || title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={600}
              height={400}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </ScrollFade>
      </div>
    </div>
  );
}
