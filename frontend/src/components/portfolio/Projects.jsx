import React from "react";
import Reveal from "./Reveal";
import { projects } from "../../mock/mock";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";

const ProjectCard = ({ p, idx }) => {
  return (
    <Reveal delay={idx * 80}>
      <article className="group relative rounded-3xl border border-border bg-card overflow-hidden lift">
        {/* Visual header */}
        <div className="relative h-44 sm:h-52 border-b border-border overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-[5rem] sm:text-[6rem] font-bold tracking-tight text-foreground/10 select-none whitespace-nowrap">
              {String(p.id).padStart(2, "0")}
            </div>
          </div>
          <div className="absolute top-4 left-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          </div>
          <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Project
          </div>
          <div className="absolute bottom-4 left-4 right-4 font-mono text-xs text-muted-foreground line-clamp-1">
            {p.highlight}
          </div>
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.03] transition-colors" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold leading-tight">
              {p.title}
            </h3>
            <a
              href={p.live}
              aria-label={`${p.title} live`}
              className="h-9 w-9 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {p.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full text-[11px] font-mono bg-muted/60">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm">
            <a
              href={p.github}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" /> Code
            </a>
            <span className="h-3 w-px bg-border" />
            <a
              href={p.live}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">03 — Projects</div>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                Selected work.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A few things I’ve built recently — each one taught me something new about product, polish, and performance.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
