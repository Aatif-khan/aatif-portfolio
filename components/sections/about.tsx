import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalData } from "@/data/personal";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-b border-border-subtle/60 relative bg-canvas"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          label="About Me"
          title="Engineering Scalable Web Applications"
          description="A focused look at my technical background, core engineering principles, and enterprise application focus."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Left Column: Background & Engineering Principles */}
          <div className="lg:col-span-7 space-y-8">
            <Card className="space-y-4">
              <h3 className="text-xl font-bold text-txt-primary tracking-tight">
                Professional Background
              </h3>
              {personalData.aboutBio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base text-txt-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </Card>

            {/* Engineering Approach Card */}
            <Card className="space-y-4 border-border-strong/40">
              <h3 className="text-lg font-semibold text-txt-primary tracking-tight flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Core Engineering Priorities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {personalData.engineeringApproach.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-txt-secondary"
                  >
                    <svg
                      className="h-5 w-5 text-accent shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Right Column: Focus Areas Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-medium text-txt-muted uppercase tracking-wider mb-2">
              Primary Focus Areas
            </div>

            {personalData.focusAreas.map((area, idx) => (
              <Card
                key={idx}
                hoverable
                className="space-y-3 transition-all duration-200"
              >
                <h4 className="text-base font-semibold text-txt-primary flex items-center justify-between">
                  <span>{area.title}</span>
                </h4>
                <p className="text-sm text-txt-secondary leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {area.skills.map((skill) => (
                    <Badge key={skill} variant="muted" className="text-[11px] py-0.5 px-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
