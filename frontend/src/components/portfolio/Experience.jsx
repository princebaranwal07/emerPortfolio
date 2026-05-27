import React from "react";
import Reveal from "./Reveal";
import { experiences } from "../../mock/mock";
import { Briefcase } from "lucide-react";
import { Badge } from "../ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">04 — Experience</div>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                Where I’ve worked.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Internship experiences where I shipped real features, shadowed senior engineers, and learned how teams move.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 relative">
          {/* Vertical rail */}
          <div className="absolute left-[22px] sm:left-[28px] top-0 bottom-0 w-px bg-border" aria-hidden />

          <div className="space-y-8">
            {experiences.map((e, idx) => (
              <Reveal key={e.id} delay={idx * 80}>
                <div className="relative pl-14 sm:pl-20">
                  <div className="absolute left-0 top-2 h-11 w-11 sm:h-14 sm:w-14 rounded-2xl border border-border bg-card flex items-center justify-center">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lift">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="font-display text-xl font-semibold">{e.role}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          <span className="text-foreground">{e.company}</span>
                          <span className="mx-2">·</span>
                          <span className="font-mono">{e.period}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="rounded-full font-mono text-[11px] bg-muted/60">
                        Internship
                      </Badge>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {e.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {e.tech.map((t) => (
                        <Badge key={t} variant="outline" className="rounded-full text-[11px] font-mono">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
