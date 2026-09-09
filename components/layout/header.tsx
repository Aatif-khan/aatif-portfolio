"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { NavItems } from "@/data/navigation";
import { personalData } from "@/data/personal";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle active link indicator on hash change or scroll
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur-md transition-colors">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo / Personal Brand */}
          <Link
            href="#home"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-md p-1 -ml-1 transition-opacity"
            onClick={() => setActiveSection("home")}
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-txt-primary group-hover:text-accent transition-colors">
              {personalData.name}
            </span>
            <span className="text-xs font-mono text-txt-muted hidden sm:inline-block">
              {personalData.role}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NavItems.ALL.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                    isActive
                      ? "text-accent bg-accent-muted/60 font-semibold"
                      : "text-txt-secondary hover:text-txt-primary hover:bg-surface-hover"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="secondary" size="sm" href="#contact">
              Let&apos;s Connect
            </Button>
          </div>

          {/* Mobile Navigation Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-txt-secondary hover:text-txt-primary hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                /* Accessible Close Icon (X) */
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Accessible Hamburger Icon */
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Navigation Panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-border-subtle bg-surface px-4 pt-3 pb-6 space-y-1 shadow-lg transition-all animate-in fade-in slide-in-from-top-2"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NavItems.ALL.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(sectionId);
                    closeMobileMenu();
                  }}
                  className={`text-base font-medium px-4 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                    isActive
                      ? "text-accent bg-accent-muted/60 font-semibold"
                      : "text-txt-secondary hover:text-txt-primary hover:bg-surface-hover"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-border-subtle mt-3">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              className="w-full justify-center"
              onClick={closeMobileMenu}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
