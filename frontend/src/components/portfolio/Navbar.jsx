import React, { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "../ui/button";
import ThemeToggle from "./ThemeToggle";
import { navLinks, personalInfo } from "../../mock/mock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-lg border border-border bg-card flex items-center justify-center font-mono font-bold text-sm overflow-hidden">
            <span className="relative z-10">PB</span>
            <span className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="hidden sm:block font-display font-semibold tracking-tight">
            {personalInfo.firstName}
            <span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3.5 py-1.5 text-sm rounded-full transition-colors ${
                active === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === l.href && (
                <span className="absolute inset-0 rounded-full bg-foreground/10" />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={personalInfo.resumeUrl} download className="hidden sm:block">
            <Button variant="default" size="sm" className="rounded-full gap-2">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </a>
          <button
            className="md:hidden h-9 w-9 rounded-lg border border-border flex items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl glass-strong p-3">
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm hover:bg-foreground/5"
              >
                {l.label}
              </a>
            ))}
            <a href={personalInfo.resumeUrl} download className="mt-2">
              <Button className="w-full rounded-xl gap-2">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
