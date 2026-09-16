import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";

// SVG Icon renderer matching portfolio minimalist aesthetics
const ServiceIcon: React.FC<{ iconName: string; className?: string }> = ({
  iconName,
  className = "w-6 h-6 text-accent",
}) => {
  switch (iconName) {
    case "angular":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      );
    case "enterprise":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L12 6.75l5.571 3m0 0l4.179-2.25L12 2.25 1.821 7.5l4.608 2.25m11.142 0l4.179 2.25-4.179 2.25m0 0L12 17.25l-5.571-3m11.142 0l4.608 2.25L12 21.75l-10.179-4.5 4.608-2.25"
          />
        </svg>
      );
    case "dashboard":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
          />
        </svg>
      );
    case "modernization":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      );
    case "api":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      );
    case "pwa":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      );
    case "react":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      );
  }
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 border-b border-border-subtle/60 relative bg-surface"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          label="Services & Capabilities"
          title="Frontend Engineering Services"
          description="I help teams build and improve modern frontend applications, from complex enterprise SaaS systems to responsive PWAs and API-driven interfaces."
        />

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              hoverable
              className={`flex flex-col justify-between space-y-6 ${
                service.isPrimary
                  ? "border-accent/40 bg-surface shadow-xs hover:border-accent"
                  : "bg-surface"
              } transition-colors`}
            >
              <div className="space-y-4">
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2.5 rounded-lg bg-canvas border border-border-subtle shrink-0">
                    <ServiceIcon iconName={service.iconName} />
                  </div>

                  {service.categoryTag && (
                    <Badge
                      variant={service.isPrimary ? "accent" : "outline"}
                      className="text-[11px] font-mono py-0.5"
                    >
                      {service.categoryTag}
                    </Badge>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-txt-primary tracking-tight">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-xs font-mono text-accent mt-0.5">
                      {service.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-txt-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                {service.highlights && (
                  <div className="space-y-2 pt-2 border-t border-border-subtle/60">
                    <div className="text-[11px] font-mono text-txt-muted uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5">
                      {service.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-txt-secondary leading-relaxed"
                        >
                          <svg
                            className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5"
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
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Capabilities & Tech Tags */}
              <div className="pt-4 border-t border-border-subtle space-y-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {service.capabilities.map((cap) => (
                    <Badge
                      key={cap}
                      variant="muted"
                      className="text-[11px] font-mono py-0.5 px-2"
                    >
                      {cap}
                    </Badge>
                  ))}
                </div>

                {/* Card CTA Action */}
                <div className="pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline focus:outline-none focus:ring-1 focus:ring-accent rounded px-1 -ml-1"
                    aria-label={`Discuss a project related to ${service.title}`}
                  >
                    <span>Discuss a Project</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 p-8 rounded-xl bg-canvas border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="text-xl font-bold text-txt-primary tracking-tight">
              Have a frontend project or need an Angular / Next.js engineer?
            </h3>
            <p className="text-sm text-txt-secondary leading-relaxed">
              Whether you need to build a new enterprise web application, modernize an existing codebase, or add senior frontend capacity to your team, let&apos;s discuss how I can help.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            href="#contact"
            className="shrink-0"
          >
            Get in Touch &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
};
