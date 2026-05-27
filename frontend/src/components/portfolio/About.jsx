import React from "react";
import Reveal from "./Reveal";
import { personalInfo, aboutHighlights } from "../../mock/mock";
import { Code2, Rocket, Layers, Brain } from "lucide-react";

const items = [
  { icon: Code2, title: "Clean Code", text: "I write readable, testable, maintainable code — because future-you and your team matter." },
  { icon: Rocket, title: "Ship Fast", text: "Pragmatic choices, tight feedback loops, and a bias for shipping over perfection." },
  { icon: Layers, title: "Full Stack", text: "From pixels to databases. Comfortable across React, Node, MongoDB, and beyond." },
  { icon: Brain, title: "Always Learning", text: "Systems design, DSA, cloud — I treat every project like a new opportunity to level up." },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">01 — About</div>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                A developer who cares about
                <br className="hidden sm:block" />
                <span className="text-muted-foreground">craft &amp; outcomes.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              {personalInfo.summary}
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6 mt-14">
          <Reveal className="lg:col-span-5">
            <div className="glass rounded-3xl p-8 h-full gradient-border noise relative overflow-hidden">
              <div className="font-mono text-xs text-muted-foreground">{"// profile.json"}</div>
              <div className="mt-4 space-y-3 font-mono text-sm">
                <div><span className="text-muted-foreground">name</span>: <span>"{personalInfo.name}"</span></div>
                <div><span className="text-muted-foreground">role</span>: <span>"{personalInfo.role}"</span></div>
                <div><span className="text-muted-foreground">location</span>: <span>"{personalInfo.location}"</span></div>
                <div><span className="text-muted-foreground">focus</span>: ["MERN", "Java", "Cloud"]</div>
                <div><span className="text-muted-foreground">status</span>: <span className="text-emerald-500">"available"</span></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {aboutHighlights.map((h) => (
                  <div key={h.label} className="rounded-2xl border border-border p-4">
                    <div className="font-display text-3xl font-bold">{h.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {items.map((it, idx) => (
              <Reveal key={it.title} delay={idx * 80}>
                <div className="group relative rounded-3xl border border-border bg-card p-7 h-full lift overflow-hidden">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-foreground/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-11 w-11 rounded-xl border border-border flex items-center justify-center mb-5">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
