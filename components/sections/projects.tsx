import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";

export const Projects: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const supportingProjects = projectsData.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 border-b border-border-subtle/60 relative bg-canvas"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          label="Selected Work"
          title="Featured Projects"
          description="A curated selection of enterprise web platforms, workflow tools, and independent products demonstrating frontend architecture and problem solving."
        />

        {/* Featured Projects (GTC Enterprise & CashLoom) */}
        <div className="mt-10 space-y-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Primary Featured Case Studies
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-accent/40 bg-surface shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Category & Type Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge
                      variant={project.type === "personal" ? "accent" : "outline"}
                      className="text-xs font-mono py-0.5"
                    >
                      {project.type === "personal"
                        ? "Personal Project / Public PWA"
                        : "Enterprise Professional Project"}
                    </Badge>

                    {project.confidentialNotice && (
                      <span className="text-[11px] font-mono text-txt-muted bg-surface-hover px-2 py-0.5 rounded border border-border-subtle">
                        Confidentiality Protected
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-txt-primary tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-accent mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Role / Responsibility */}
                  <div className="p-3 rounded-lg bg-canvas border border-border-subtle text-xs text-txt-secondary space-y-1">
                    <span className="font-mono font-semibold text-txt-primary block">
                      My Frontend Role:
                    </span>
                    <span>{project.myRole}</span>
                  </div>

                  {/* Contribution Highlights */}
                  {project.highlights && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-medium text-txt-muted uppercase tracking-wider">
                        Key Engineering Contributions
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-txt-secondary leading-relaxed"
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
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer: Tech Stack & Action Links */}
                <div className="pt-4 border-t border-border-subtle space-y-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="muted"
                        className="text-[11px] font-mono py-0.5 px-2"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {project.type === "personal" ? (
                      <>
                        {project.liveUrl && (
                          <Button
                            variant="primary"
                            size="sm"
                            href={project.liveUrl}
                            isExternal={true}
                          >
                            Live Demo &rarr;
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="secondary"
                            size="sm"
                            href={project.githubUrl}
                            isExternal={true}
                          >
                            GitHub Repo &rarr;
                          </Button>
                        )}
                      </>
                    ) : (
                      <span className="text-xs font-mono text-txt-muted flex items-center gap-1.5">
                        <svg
                          className="h-4 w-4 text-txt-muted"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        {project.confidentialNotice}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Supporting Professional Projects Grid */}
        <div className="mt-16 space-y-6">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-txt-muted">
            Additional Professional Engineering Projects
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingProjects.map((project) => (
              <Card
                key={project.id}
                hoverable
                className="flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="text-[11px] font-mono py-0.5">
                      Professional Work
                    </Badge>
                    <span className="text-[10px] font-mono text-txt-muted">
                      Enterprise
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-txt-primary tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-accent mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-txt-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle space-y-3">
                  <div className="flex flex-wrap items-center gap-1">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="muted"
                        className="text-[10px] font-mono py-0.5 px-1.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-txt-muted flex items-center gap-1">
                    <svg
                      className="h-3.5 w-3.5 text-txt-muted shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    <span>Generalized details</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
