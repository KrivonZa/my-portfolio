"use client";

import { ArrowUp, Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollFade, GrowExpand } from "@/components/motions";
import { submitContactForm } from "@/components/server/action";
import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useRef } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button
      type="submit"
      variant="slideTop"
      disabled={pending}
      className="w-full sm:w-auto px-10 py-6 text-base font-bold shadow-xl flex items-center gap-3 disabled:opacity-50"
    >
      <Send size={18} />
      {pending ? "SENDING..." : "SEND MESSAGE"}
    </Button>
  );
}

function FormMessages() {
  const { pending } = useFormStatus();
  
  return (
    <>
      {pending && (
        <div className="flex items-start gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <Loader2 className="size-5 text-primary shrink-0 mt-0.5 animate-spin" />
          <p className="text-sm text-primary font-medium">
            Sending your message...
          </p>
        </div>
      )}
    </>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(submitContactForm, {});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  const goToIntro = () => {
    const intro = document.getElementById("intro");
    if (intro) {
      intro.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-svh w-full flex flex-col md:grid md:grid-cols-3 overflow-x-hidden font-nunito-sans bg-background">
      {/* --- DECORATIVE ELEMENTS (DESKTOP) --- */}
      <div className="absolute top-0 right-8 hidden md:flex flex-col items-center z-20">
        <GrowExpand
          direction="down"
          size="120px"
          className="w-3 grow-contact shadow-2xl"
        />
        <span className="text-4xl font-black section-index-contact mt-4 tracking-tighter">
          100
        </span>
      </div>

      {/* --- DECORATIVE ELEMENTS (MOBILE) --- */}
      <div className="flex md:hidden items-center justify-between px-6 pt-12 pb-4 w-full">
        <span className="text-3xl font-black section-index-contact">100</span>
        <GrowExpand direction="left" size="60px" className="h-1 grow-contact" />
      </div>

      {/* LEFT BACKGROUND (Desktop only) */}
      <div className="hidden md:block md:col-span-2 bg-background" />

      {/* RIGHT BACKGROUND (Gradient Background) */}
      <ScrollFade
        direction="right"
        className="absolute inset-0 md:relative md:inset-auto h-1/3 md:h-full md:col-span-1 animated-background 
          bg-linear-to-br from-blue-600 via-primary to-emerald-500 
          dark:from-blue-950 dark:via-blue-900 dark:to-emerald-900 
          opacity-20 md:opacity-100 -z-10 md:z-0"
      />

      {/* CONTENT CARD */}
      <div className="relative md:absolute md:inset-0 flex items-center justify-center z-10 px-4 sm:px-8 py-10 md:py-0">
        <ScrollFade direction="down" className="w-full max-w-6xl">
          <div className="relative py-8 px-5 sm:px-10 md:py-14 md:px-12 bg-card/90 dark:bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 p-4 hidden sm:block">
              <GrowExpand
                direction="left"
                size="60px"
                className="h-1 grow-contact"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Info Side */}
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-tight">
                  Contact <span className="text-primary italic">Me.</span>
                </h2>

                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                  <p>
                    Shoot me a message and I will get back to you as soon as I
                    can. I&apos;m always open to discussing new projects or
                    creative opportunities.
                  </p>

                  <div className="flex flex-col space-y-2 pt-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Direct Lines
                    </span>
                    <a
                      href="mailto:kevintruong6587@gmail.com"
                      className="text-foreground font-semibold hover:text-primary transition-colors underline decoration-primary/20 underline-offset-8 break-all"
                    >
                      kevintruong6587@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <form
                ref={formRef}
                action={formAction}
                className="space-y-4 md:space-y-5 w-full"
              >
                <FormMessages />

                {state.success && (
                  <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-700 dark:text-emerald-400">
                      {state.message}
                    </p>
                  </div>
                )}

                {state.error && (
                  <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <XCircle className="size-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive">
                      {state.error}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4">
                  <Input
                    className="h-12 bg-background/50"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                  <Input
                    className="h-12 bg-background/50"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Tell me what you think!"
                  rows={5}
                  className="min-h-32 md:min-h-40 bg-background/50 resize-none"
                  required
                />

                <div className="flex justify-end pt-2">
                  <SubmitButton />
                </div>
              </form>
            </div>

            <div className="absolute bottom-0 right-0 p-4 hidden sm:block">
              <GrowExpand
                direction="right"
                size="60px"
                className="h-1 grow-contact"
              />
            </div>
          </div>
        </ScrollFade>
      </div>

      <div className="w-full flex justify-center items-center z-30 py-10 md:py-0 md:absolute md:bottom-8 md:left-0">
        <button
          type="button"
          aria-label="Back to intro"
          className="group flex flex-col items-center gap-2 text-primary transition-all duration-300 hover:text-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-full p-2"
          onClick={goToIntro}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            Back to Top
          </span>
          <ArrowUp className="size-10 animate-bounce" />
        </button>
      </div>

      {/* Subtle background text decoration */}
      <div className="absolute bottom-0 right-10 opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none hidden xl:block">
        <span className="text-[15rem] font-black text-foreground uppercase tracking-tighter">
          Connect
        </span>
      </div>
    </div>
  );
}
