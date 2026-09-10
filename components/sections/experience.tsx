import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/experience";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 border-b border-border-subtle/60 relative bg-canvas"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          label="Career History"
          title="Professional Experience"
          description="A timeline of my frontend engineering work across enterprise SaaS platforms, administrative applications, PWAs, and real-time web products."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 space-y-8 sm:space-y-10">
          {/* Vertical Timeline Guide Line (Desktop/Tablet) */}
          <div
            className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-border-subtle hidden md:block"
            aria-hidden="true"
          />

          {experienceData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group"
            >
              {/* Timeline Marker Node */}
              <div
                className="hidden md:flex items-center justify-center shrink-0 w-12 h-12 rounded-full border border-border-strong bg-surface z-10 text-txt-muted group-hover:border-accent group-hover:text-accent transition-colors"
                aria-hidden="true"
              >
                {item.isCurrent ? (
                  <span className="h-3 w-3 rounded-full bg-accent animate-pulse" />
                ) : (
                  <span className="h-2.5 w-2.5 rounded-full bg-border-strong group-hover:bg-accent transition-colors" />
                )}
              </div>

              {/* Experience Card */}
              <Card
                className={`flex-1 transition-all duration-200 ${
                  item.isCurrent
                    ? "border-accent/40 bg-surface shadow-xs"
                    : "border-border-subtle bg-surface"
                }`}
              >
                {/* Header Row: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-subtle">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-txt-primary tracking-tight">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <Badge variant="accent" className="text-[11px] py-0.5">
                          Current Role
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-accent mt-0.5">
                      {item.company}
                      {item.location && (
                        <span className="text-txt-muted font-normal ml-2 text-xs">
                          • {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <Badge variant="outline" className="self-start sm:self-center font-mono text-xs">
                    {item.period}
                  </Badge>
                </div>

                {/* Role Overview Description */}
                <p className="text-sm sm:text-base text-txt-secondary leading-relaxed mt-4">
                  {item.description}
                </p>

                {/* Key Contributions List */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-mono font-medium text-txt-muted uppercase tracking-wider">
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-txt-secondary leading-relaxed"
                      >
                        <svg
                          className="h-4 w-4 text-accent shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used Badges */}
                <div className="mt-5 pt-4 border-t border-border-subtle flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-txt-muted mr-1">
                    Tech Stack:
                  </span>
                  {item.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="muted"
                      className="text-[11px] py-0.5 px-2 font-mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
