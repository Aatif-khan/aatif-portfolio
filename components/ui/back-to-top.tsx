"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

export interface BackToTopProps {
  /**
   * The scroll threshold in pixels at which the button becomes visible.
   * Defaults to 400.
   */
  threshold?: number;
  /**
   * Optional additional CSS class names to apply to the button.
   */
  className?: string;
}

export const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 400,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY || document.documentElement.scrollTop;
          setIsVisible(scrolled > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check visibility on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    if (typeof window === "undefined") return;

    // Remove focus from button if activated via keyboard so focus isn't trapped on an element that fades out
    if (document.activeElement === buttonRef.current) {
      buttonRef.current?.blur();
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    // Notify portfolio sections (e.g. contact form validation reset)
    window.dispatchEvent(
      new CustomEvent("portfolio:navigate", {
        detail: { section: "home" },
      })
    );
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`group fixed z-40 flex items-center justify-center rounded-full bg-surface/90 text-txt-secondary backdrop-blur-md border border-border-subtle shadow-md transition-all duration-300 ease-out hover:border-border-strong hover:bg-surface hover:text-accent hover:shadow-lg active:scale-95 active:bg-surface-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas cursor-pointer touch-manipulation bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 h-10 w-10 sm:h-11 sm:w-11 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto visible"
          : "opacity-0 translate-y-3 pointer-events-none invisible"
      } ${className}`.trim()}
    >
      <svg
        className="h-5 w-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-7.5-7.5v13.5"
        />
      </svg>
      <span className="sr-only">Back to top</span>
    </button>
  );
};
