import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive isolate",
  {
    variants: {
      variant: {
        default: "text-primary hover:bg-primary/20",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        slideRight:
          "relative overflow-hidden cursor-pointer text-primary transition-colors duration-300 hover:text-secondary before:absolute before:inset-0 before:bg-primary before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0 before:z-[-1]",
        slideLeft:
          "relative overflow-hidden cursor-pointer text-primary transition-colors duration-300 hover:text-secondary before:absolute before:inset-0 before:bg-primary before:translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0 before:z-[-1]",
        slideTop:
          "relative overflow-hidden cursor-pointer text-primary transition-colors duration-300 hover:text-secondary before:absolute before:inset-0 before:bg-primary before:translate-y-full before:transition-all before:duration-300 hover:before:translate-y-0 before:z-[-1]",
        slideBottom:
          "relative overflow-hidden cursor-pointer text-primary transition-colors duration-300 hover:text-secondary before:absolute before:inset-0 before:bg-primary before:-translate-y-full before:transition-all before:duration-300 hover:before:translate-y-0 before:z-[-1]",
        glow: "relative text-primary before:absolute before:inset-0 before:rounded-lg before:bg-primary/70 before:blur-xl before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:before:blur-2xl",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const isSlide = variant?.toString().startsWith("slide");

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {!asChild && isSlide ? (
        <span className="relative flex items-center gap-2">{children}</span>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
