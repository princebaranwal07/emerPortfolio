import React, { useEffect, useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Sparkles, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { personalInfo } from "../../mock/mock";

const TypingText = ({ words = [], typingSpeed = 90, deletingSpeed = 50, pause = 1400 }) => {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && sub === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setSub((s) =>
          deleting ? current.slice(0, s.length - 1) : current.slice(0, s.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="font-mono">
      {sub}
      <span className="caret h-[0.9em] align-middle" />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to opportunities · Available for work</span>
            </div>

            <h1 className="font-display mt-6 text-[clamp(2.4rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-tight">
              Hi, I’m <span className="shimmer-text">{personalInfo.firstName}</span>.
              <br />
              I build <span className="underline decoration-foreground/30 underline-offset-[10px]">fast</span>,
              <br className="hidden sm:block" />
              delightful web products.
            </h1>

            <div className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
              <span className="text-foreground">&gt; </span>
              <TypingText words={personalInfo.typingRoles} />
            </div>

            <p className="mt-5 text-[15px] sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects">
                <Button size="lg" className="rounded-full gap-2 group">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="rounded-full gap-2">
                  <Mail className="h-4 w-4" /> Contact Me
                </Button>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-muted-foreground">
              <a href={personalInfo.socials.github} aria-label="GitHub" className="hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href={personalInfo.socials.linkedin} aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={personalInfo.socials.email} aria-label="Email" className="hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <span className="h-4 w-px bg-border" />
              <span className="inline-flex items-center gap-1.5 text-xs">
                <MapPin className="h-3.5 w-3.5" /> {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative mx-auto w-full max-w-md aspect-square">
              <div className="absolute inset-0 dot-grid rounded-[2rem] opacity-60" />
              <div className="absolute inset-6 rounded-[1.75rem] bg-card border border-border overflow-hidden animate-floaty shadow-[0_30px_80px_-30px_hsl(0_0%_0%/0.6)] z-10">
                <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-44 w-44 rounded-full border-2 border-foreground/40 bg-foreground/[0.06] flex items-center justify-center">
                    <span className="font-display text-6xl font-bold tracking-tight text-foreground leading-none">
                      {personalInfo.avatarPlaceholder}
                    </span>
                    <span className="absolute -inset-2 rounded-full border border-dashed border-foreground/25 animate-[spin_24s_linear_infinite]" />
                    <span className="absolute -inset-8 rounded-full border border-foreground/10" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-mono text-[11px] text-muted-foreground z-10">
                  <div><span className="text-foreground">const</span> dev = &#123;</div>
                  <div className="pl-4">name: <span className="text-foreground">"Prince"</span>,</div>
                  <div className="pl-4">stack: <span className="text-foreground">["MERN", "Java"]</span>,</div>
                  <div className="pl-4">mode: <span className="text-foreground">"build &amp; ship"</span></div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -top-3 -left-2 glass rounded-full px-3 py-1.5 text-xs font-mono animate-floaty" style={{ animationDelay: "-2s" }}>
                <Sparkles className="h-3.5 w-3.5 inline mr-1" /> React
              </div>
              <div className="absolute -top-3 -right-2 glass rounded-full px-3 py-1.5 text-xs font-mono animate-floaty" style={{ animationDelay: "-4s" }}>
               <Sparkles className="h-3.5 w-3.5 inline mr-1" /> Node.js
              </div>
              <div className="absolute -bottom-1 right-2 glass rounded-full px-3 py-1.5 text-xs font-mono animate-floaty" style={{ animationDelay: "-8s" }}>
                <Sparkles className="h-3.5 w-3.5 inline mr-1" /> MongoDB
              </div>
              <div className="absolute -bottom-1 -left-5 glass rounded-full px-3 py-1.5 text-xs font-mono animate-floaty" style={{ animationDelay: "-3s" }}>
                <Sparkles className="h-3.5 w-3.5 inline mr-1" /> Java
              </div>
            </div>
          </div>
        </div>

        {/* Marquee tech strip */}
        <div className="mt-20 overflow-hidden border-y border-border py-4">
          <div className="flex gap-12 whitespace-nowrap marquee-track w-max font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {[...Array(2)].map((_, r) => (
              <div key={r} className="flex gap-12">
                {["React", "Node.js", "Express", "MongoDB", "MySQL", "Java","Spring Boot", "Python", "Tailwind", "Docker", "AWS", "Git"].map((t, i) => (
                  <span key={`${r}-${i}`} className="inline-flex items-center gap-3">
                    {t}
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
