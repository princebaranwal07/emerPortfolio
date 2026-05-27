import React, { useState } from "react";
import Reveal from "./Reveal";
import { skills } from "../../mock/mock";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Code, Server, Database, Wrench } from "lucide-react";

const iconMap = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

const SkillBar = ({ name, level }) => {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-foreground transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = Object.keys(skills);
  const [active] = useState(categories[0]);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">02 — Skills</div>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                Tools I reach for.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A focused stack, sharpened through projects and real-world use. Quick to pick up new tools when the problem demands it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Tabs defaultValue={active} className="mt-12">
            <TabsList className="bg-transparent p-0 h-auto flex flex-wrap gap-2 justify-start">
              {categories.map((cat) => {
                const Icon = iconMap[cat];
                return (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="rounded-full border border-border bg-card data-[state=active]:bg-foreground data-[state=active]:text-background px-4 py-2 gap-2"
                  >
                    <Icon className="h-3.5 w-3.5" /> {cat}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-3xl p-7 gradient-border">
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-5">
                      {cat} — Proficiency
                    </div>
                    <div className="space-y-5">
                      {skills[cat].map((s) => (
                        <SkillBar key={s.name} {...s} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-3xl border border-border p-7 bg-card">
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-5">
                      Stack tags
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills[cat].map((s) => (
                        <Badge
                          key={s.name}
                          variant="secondary"
                          className="rounded-full px-3 py-1.5 text-xs font-mono bg-muted/60 hover:bg-foreground hover:text-background transition-colors cursor-default"
                        >
                          {s.name}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-8 text-sm text-muted-foreground leading-relaxed">
                      I pick the right tool for the job — always learning, never dogmatic. Comfortable going deep on frameworks while keeping fundamentals sharp.
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
