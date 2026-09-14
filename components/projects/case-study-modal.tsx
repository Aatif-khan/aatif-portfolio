"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  // Prevent background body scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border border-border-subtle rounded-xl shadow-2xl p-6 sm:p-8 text-txt-primary my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar / Close Button */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-border-subtle">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant={project.type === "personal" ? "accent" : "outline"}
                className="text-xs font-mono py-0.5"
              >
                {project.type === "personal"
                  ? "Personal Project — Public App"
                  : "Professional Experience — Confidential Project"}
              </Badge>

              {project.confidentialNotice && (
                <span className="text-[11px] font-mono text-txt-muted bg-canvas px-2.5 py-0.5 rounded border border-border-subtle flex items-center gap-1">
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
                  <span>Confidentiality Protected</span>
                </span>
              )}
            </div>

            <h2
              id="case-study-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-txt-primary"
            >
              {project.title}
            </h2>
            <p className="text-sm font-mono text-accent">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-lg text-txt-muted hover:text-txt-primary hover:bg-canvas transition-colors border border-transparent hover:border-border-subtle shrink-0 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-8 text-sm leading-relaxed text-txt-secondary">
          {/* 1. Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              1. Project Overview
            </h3>
            <p className="text-txt-primary text-base font-normal">
              {caseStudy.overview}
            </p>
          </div>

          {/* 2. My Role */}
          <div className="p-4 rounded-lg bg-canvas border border-border-subtle space-y-1">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-txt-muted">
              2. My Role & Responsibilities
            </h3>
            <p className="text-txt-primary font-medium">{caseStudy.myRole}</p>
          </div>

          {/* 3. Engineering Challenge */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              3. Technical Challenge
            </h3>
            <p className="p-4 rounded-lg bg-surface-hover border border-border-subtle text-txt-secondary">
              {caseStudy.challenge}
            </p>
          </div>

          {/* 4. My Contributions */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              4. Key Frontend Contributions
            </h3>
            <ul className="space-y-2">
              {caseStudy.contributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-txt-secondary">
                  <svg
                    className="h-4 w-4 text-accent shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Key Engineering Work & Architecture */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              5. Key Engineering Work & Architecture
            </h3>
            <div className="p-4 rounded-lg bg-canvas border border-border-subtle space-y-2">
              {caseStudy.keyEngineeringWork.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent font-bold mt-0.5 shrink-0">
                    0{idx + 1}.
                  </span>
                  <p className="text-xs sm:text-sm text-txt-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Technical Approach */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              6. Technical Approach
            </h3>
            <p className="text-txt-secondary">{caseStudy.technicalApproach}</p>
          </div>

          {/* 7. Technologies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-txt-muted">
              7. Technology Stack
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {caseStudy.technologies.map((tech) => (
                <Badge key={tech} variant="muted" className="text-xs font-mono py-1 px-2.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* 8. Outcome & Impact */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              8. Qualitative Outcome & Engineering Impact
            </h3>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20 text-txt-primary font-medium">
              {caseStudy.outcome}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          {project.type === "personal" ? (
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  href={project.liveUrl}
                  isExternal={true}
                >
                  Live Application &rarr;
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  href={project.githubUrl}
                  isExternal={true}
                >
                  GitHub Repository &rarr;
                </Button>
              )}
            </div>
          ) : (
            <div className="text-xs font-mono text-txt-muted flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-txt-muted shrink-0"
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
              <span>Professional Project — Details generalized due to confidentiality</span>
            </div>
          )}

          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};
