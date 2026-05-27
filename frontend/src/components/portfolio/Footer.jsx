import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "../../mock/mock";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg border border-border bg-card flex items-center justify-center font-mono font-bold text-sm">PB</div>
              <span className="font-display font-semibold tracking-tight">
                {personalInfo.firstName}<span className="text-muted-foreground">.dev</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Full Stack Developer based in {personalInfo.location}. Building for the web with care, craft, and curiosity.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Navigate</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Connect</div>
            <div className="mt-4 flex items-center gap-3">
              <a href={personalInfo.socials.github} aria-label="GitHub" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href={personalInfo.socials.linkedin} aria-label="LinkedIn" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={personalInfo.socials.email} aria-label="Email" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Tailwind.
          </div>
          <a href="#home" className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
