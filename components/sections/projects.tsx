"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/data/types";
import { CaseStudyModal } from "@/components/projects/case-study-modal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projectsData.filter((p) => p.featured);
  const supportingProjects = projectsData.filter((p) => !p.featured);

  const handleOpenCaseStudy = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 border-b border-border-subtle/60 relative bg-canvas"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          label="Case Studies & Engineering Work"
          title="Featured Case Studies"
          description="In-depth technical case studies showcasing frontend architecture, complex enterprise state handling, dynamic UI components, real-time protocols, and mobile PWA applications."
        />

        {/* Primary Featured Case Studies Grid */}
        <div className="mt-10 space-y-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Primary Case Studies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-accent/40 bg-surface shadow-xs flex flex-col justify-between space-y-6 hover:border-accent transition-colors"
              >
                <div className="space-y-4">
                  {/* Category & Type Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge
                      variant={project.type === "personal" ? "accent" : "outline"}
                      className="text-xs font-mono py-0.5"
                    >
                      {project.type === "personal"
                        ? "Personal Project"
                        : "Professional Experience"}
                    </Badge>

                    {project.confidentialNotice && (
                      <span className="text-[11px] font-mono text-txt-muted bg-canvas px-2 py-0.5 rounded border border-border-subtle flex items-center gap-1">
                        <svg
                          className="h-3 w-3 text-txt-muted shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        <span>Confidential</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-txt-primary tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-accent mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-txt-secondary leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Role / Responsibility */}
                  <div className="p-3 rounded-lg bg-canvas border border-border-subtle text-xs text-txt-secondary space-y-1">
                    <span className="font-mono font-semibold text-txt-primary block">
                      My Role:
                    </span>
                    <span className="line-clamp-2">{project.myRole}</span>
                  </div>

                  {/* Contribution Highlights */}
                  {project.highlights && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-medium text-txt-muted uppercase tracking-wider">
                        Key Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
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
                            <span className="line-clamp-2">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer: Tech Stack & Action Buttons */}
                <div className="pt-4 border-t border-border-subtle space-y-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech}
                        variant="muted"
                        className="text-[11px] font-mono py-0.5 px-2"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[10px] font-mono text-txt-muted">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {project.caseStudy && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleOpenCaseStudy(project)}
                        aria-label={`View Case Study for ${project.title}`}
                      >
                        View Case Study &rarr;
                      </Button>
                    )}

                    {project.type === "personal" && project.liveUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        href={project.liveUrl}
                        isExternal={true}
                        aria-label="View Live Demo of CashLoom"
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Supporting Professional Projects Grid */}
        {supportingProjects.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-txt-muted">
              Additional Professional Engineering Work
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingProjects.map((project) => (
                <Card
                  key={project.id}
                  hoverable
                  className="flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="outline" className="text-[11px] font-mono py-0.5">
                        Professional Project
                      </Badge>
                      <span className="text-[10px] font-mono text-txt-muted">
                        Confidential
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-txt-primary tracking-tight break-words">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-accent mt-0.5 break-words">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-txt-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border-subtle space-y-3">
                    <div className="flex flex-wrap items-center gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="muted"
                          className="text-[10px] font-mono py-0.5 px-1.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      {project.caseStudy && (
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleOpenCaseStudy(project)}
                          className="text-xs"
                          aria-label={`View Case Study for ${project.title}`}
                        >
                          Case Study &rarr;
                        </Button>
                      )}

                      <span className="text-[10px] font-mono text-txt-muted flex items-center gap-1">
                        <svg
                          className="h-3 w-3 text-txt-muted shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        <span>Details generalized</span>
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Case Study Detail Modal */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseCaseStudy}
        />
      </Container>
    </section>
  );
};
