import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { coreSkillsData, skillCategoriesData } from "@/data/skills";

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-b border-border-subtle/60 relative bg-canvas"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          label="Technical Stack"
          title="Skills & Capabilities"
          description="A categorized breakdown of my core specialization in Angular, TypeScript, and RxJS alongside modern web application tools and engineering practices."
        />

        {/* Tier 1: Core Specialization Hero Cards */}
        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Core Specialization (Tier 1)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreSkillsData.map((skill) => (
              <Card
                key={skill.name}
                className="border-accent/40 bg-surface shadow-xs flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-txt-primary tracking-tight">
                      {skill.name}
                    </h4>
                    <Badge variant="accent" className="text-[11px] py-0.5">
                      {skill.tag}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle">
                  <div className="text-[11px] font-mono text-txt-muted uppercase tracking-wider mb-2">
                    Core Capabilities
                  </div>
                  <ul className="space-y-1.5">
                    {skill.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-txt-secondary font-mono"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tier 2 & 3: Categorized Tech Stack Grid */}
        <div className="mt-16 space-y-6">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-txt-muted">
            Ecosystem & Specialized Domains
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategoriesData.map((cat) => (
              <Card
                key={cat.id}
                hoverable
                className="flex flex-col justify-between space-y-4"
              >
                <div>
                  <h4 className="text-base font-bold text-txt-primary tracking-tight mb-1">
                    {cat.category}
                  </h4>
                  <p className="text-xs text-txt-secondary mb-3">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-subtle">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="default"
                      className="text-xs py-1 px-2.5 hover:border-accent/40 transition-colors"
                    >
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
