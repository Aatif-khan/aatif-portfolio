import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NavItems } from "@/data/navigation";
import { personalData } from "@/data/personal";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-subtle bg-canvas text-txt-secondary py-8 sm:py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          {/* Personal Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <Link
              href="#home"
              className="text-lg font-bold tracking-tight text-txt-primary hover:text-accent transition-colors"
            >
              {personalData.name}
            </Link>
            <p className="text-xs font-mono text-txt-muted max-w-sm">
              {personalData.role} • {personalData.specialization}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            {NavItems.ALL.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus rounded px-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Bottom Metadata Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-txt-muted">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">•</span>
            <a
              href="https://github.com/Aatif-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <span aria-hidden="true">•</span>
            <a
              href={`mailto:${personalData.email}`}
              className="hover:text-accent transition-colors"
              aria-label="Send Direct Email"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
