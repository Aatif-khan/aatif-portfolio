import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { personalData } from "@/data/personal";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-border-subtle/50"
    >
      {/* Subtle background grid accent pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Professional Status / Role Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface text-txt-secondary text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalData.role}</span>
              <span className="text-border-strong">•</span>
              <span className="text-txt-muted">{personalData.experienceYears} Years Exp</span>
            </div>

            {/* Primary H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-txt-primary leading-[1.12]">
              Building Scalable{" "}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                Enterprise Web
              </span>{" "}
              Experiences
            </h1>

            {/* Supporting Value Proposition Text */}
            <p className="text-base sm:text-lg lg:text-xl text-txt-secondary leading-relaxed max-w-2xl">
              {personalData.summary}
            </p>

            {/* Core Technology Signal Badges */}
            <div className="flex flex-col gap-2 w-full max-w-xl pt-2">
              <span className="text-xs font-mono font-medium text-txt-muted uppercase tracking-wider">
                Core Specialization
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {personalData.primaryTech.map((tech) => (
                  <Badge key={tech} variant="accent" className="text-xs sm:text-sm py-1 px-3">
                    {tech}
                  </Badge>
                ))}
                {personalData.secondaryTech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs sm:text-sm py-1 px-2.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" href="#projects" className="w-full sm:w-auto">
                View My Work
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                href="#"
                title="[PLACEHOLDER: Resume PDF path]"
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>

              <Button
                variant="ghost"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto text-txt-secondary hover:text-txt-primary"
              >
                Let&apos;s Connect &rarr;
              </Button>
            </div>
          </div>

          {/* Subtle Abstract Technical Architecture Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-surface/80 backdrop-blur-xs border-border-strong/60 p-6 space-y-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs font-mono text-txt-muted">
                  architecture.ts
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs text-txt-secondary">
                <div className="flex items-center justify-between p-2.5 rounded bg-canvas border border-border-subtle">
                  <span className="text-accent font-semibold">@Component</span>
                  <span className="text-txt-muted">Angular 19+</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-canvas border border-border-subtle">
                  <span className="text-txt-primary font-semibold">State Management</span>
                  <span className="text-txt-muted">RxJS Observables</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-canvas border border-border-subtle">
                  <span className="text-txt-primary font-semibold">Data Layer</span>
                  <span className="text-txt-muted">REST & WebSockets</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-canvas border border-border-subtle">
                  <span className="text-txt-primary font-semibold">Application Type</span>
                  <span className="text-txt-muted">Enterprise SaaS / PWA</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-xs text-txt-muted">
                <span>Location: {personalData.location}</span>
                <span className="text-emerald-500 font-medium">Available</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
