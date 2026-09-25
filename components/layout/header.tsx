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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const animFrameRef = React.useRef<number | null>(null);

  // Desktop navigation: Keep original, proven working scrollIntoView behavior
  const handleDesktopNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("portfolio:navigate", {
          detail: { section: sectionId },
        })
      );
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Mobile navigation: Account for 64px fixed header offset, prevent layout shifts, and provide natural smooth easing
  const handleMobileNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    if (typeof window === "undefined") return;

    window.history.pushState(null, "", `#${sectionId}`);
    window.dispatchEvent(
      new CustomEvent("portfolio:navigate", {
        detail: { section: sectionId },
      })
    );

    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mobile sticky header height is exactly 64px (h-16)
    const mobileHeaderHeight = 64;
    const targetY =
      sectionId === "home"
        ? 0
        : Math.max(
            0,
            Math.round(
              targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                mobileHeaderHeight
            )
          );

    if (prefersReducedMotion) {
      window.scrollTo(0, targetY);
      return;
    }

    // Cancel any previous in-flight animation
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    const startY = window.pageYOffset;
    const distance = targetY - startY;
    if (Math.abs(distance) < 2) return;

    // Natural, smooth scroll duration (650ms to 850ms)
    const duration = Math.min(850, Math.max(650, 600 + Math.abs(distance) * 0.08));
    let startTime: number | null = null;

    // Gentle ease-in-out quadratic curve for natural eye tracking
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, Math.round(startY + distance * ease));

      if (progress < 1) {
        animFrameRef.current = window.requestAnimationFrame(step);
      } else {
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = window.requestAnimationFrame(step);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur-md transition-colors">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo / Personal Brand */}
          <Link
            href="#home"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-md p-1 -ml-1 transition-opacity shrink-0"
            onClick={(e) => {
              if (window.innerWidth < 768) {
                handleMobileNavClick("home", e);
              } else {
                handleDesktopNavClick("home");
              }
            }}
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-txt-primary group-hover:text-accent transition-colors">
              {personalData.name}
            </span>
            <span className="text-xs font-mono text-txt-muted hidden xl:inline-block">
              {personalData.role}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-0.5 lg:gap-1.5 xl:gap-2"
          >
            {NavItems.ALL.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleDesktopNavClick(sectionId)}
                  className={`text-sm font-medium px-2.5 lg:px-3 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
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
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              variant="secondary"
              size="sm"
              href="#contact"
              onClick={() => handleDesktopNavClick("contact")}
            >
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
          className="md:hidden absolute top-full left-0 w-full border-b border-border-subtle bg-surface px-4 pt-3 pb-6 space-y-1 shadow-xl transition-all animate-in fade-in slide-in-from-top-2 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NavItems.ALL.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(sectionId, e)}
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
              onClick={(e) => handleMobileNavClick("contact", e)}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
