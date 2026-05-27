import React from "react";
import Reveal from "./Reveal";
import { education, certifications } from "../../mock/mock";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">05 — Education</div>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                Education &amp; Certifications.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Formal learning, supplemented by hands-on programs and certifications that keep my stack sharp.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 mt-14">
          <Reveal>
            <div className="glass rounded-3xl p-7 gradient-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-xl border border-border bg-card flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Education
                </div>
              </div>

              <div className="space-y-6">
                {education.map((ed) => (
                  <div key={ed.id} className="border-l border-border pl-5">
                    <div className="font-display text-lg font-semibold">{ed.school}</div>
                    <div className="font-mono text-xs text-muted-foreground mt-1">{ed.period}</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ed.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-border bg-card p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-xl border border-border bg-background flex items-center justify-center">
                  <Award className="h-5 w-5" />
                </div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Certifications
                </div>
              </div>

              <ul className="divide-y divide-border">
                {certifications.map((c) => (
                  <li key={c.id} className="py-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium">{c.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 font-mono">{c.issuer}</div>
                    </div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                      Verified
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
