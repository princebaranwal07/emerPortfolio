import React, { useState } from "react";
import Reveal from "./Reveal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Github, Linkedin, Mail, Send, MapPin, Loader2 } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import { personalInfo } from "../../mock/mock";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing info", description: "Please fill in all fields before sending." });
      return;
    }
    setSubmitting(true);
    // MOCK: store in localStorage. Backend integration coming next.
    try {
      const prior = JSON.parse(localStorage.getItem("pb-messages") || "[]");
      prior.unshift({ ...form, ts: new Date().toISOString() });
      localStorage.setItem("pb-messages", JSON.stringify(prior));
      await new Promise((r) => setTimeout(r, 800));
      toast({
        title: "Message sent !",
        description: "In the meantime, feel free to connect with me on LinkedIn or connect through email.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast({ title: "Something went wrong", description: "Wake up! and try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">06 — Contact</div>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                Let’s build something.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Got a role, a project, or just want to say hi? Drop a message — I read every one.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6 mt-14">
          <Reveal className="lg:col-span-5">
            <div className="glass rounded-3xl p-7 gradient-border h-full">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-5">
                Direct channels-
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-3 rounded-2xl border border-border bg-card/60 hover:bg-card transition-colors">
                  <div className="h-10 w-10 rounded-xl border border-border flex items-center justify-center"><Mail className="h-4 w-4" /></div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <a href={personalInfo.socials.email} className="text-sm font-mono truncate block">{personalInfo.email}</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-3 rounded-2xl border border-border bg-card/60 hover:bg-card transition-colors">
                  <div className="h-10 w-10 rounded-xl border border-border flex items-center justify-center"><Github className="h-4 w-4" /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">GitHub</div>
                    <a href={personalInfo.socials.github} className="text-sm font-mono">github.com/princebaranwal</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-3 rounded-2xl border border-border bg-card/60 hover:bg-card transition-colors">
                  <div className="h-10 w-10 rounded-xl border border-border flex items-center justify-center"><Linkedin className="h-4 w-4" /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">LinkedIn</div>
                    <a href={personalInfo.socials.linkedin} className="text-sm font-mono">in/princebaranwal</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-3 rounded-2xl border border-border bg-card/60">
                  <div className="h-10 w-10 rounded-xl border border-border flex items-center justify-center"><MapPin className="h-4 w-4" /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-mono">{personalInfo.location}</div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 h-full">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-5">
                Send a message
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your name" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" className="h-11" />
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project or opportunity…" rows={6} />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-muted-foreground font-mono">
                  avg. response time · under 24h
                </p>
                <Button type="submit" size="lg" className="rounded-full gap-2" disabled={submitting}>
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
