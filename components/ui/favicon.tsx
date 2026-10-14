"use client";

import { useEffect } from "react";

/**
 * Determines the currently active theme based on the portfolio's hierarchy:
 * 1. Explicit .dark or .light class on <html> or <body>
 * 2. Explicit data-theme attribute on <html> or <body>
 * 3. Stored theme in localStorage
 * 4. System preference via window.matchMedia("(prefers-color-scheme: dark)")
 */
export function getActiveTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "light";

  // 1. Check classes on root element
  if (
    document.documentElement.classList.contains("dark") ||
    document.body?.classList.contains("dark")
  ) {
    return "dark";
  }
  if (
    document.documentElement.classList.contains("light") ||
    document.body?.classList.contains("light")
  ) {
    return "light";
  }

  // 2. Check data-theme attribute
  const dataTheme =
    document.documentElement.getAttribute("data-theme") ||
    document.body?.getAttribute("data-theme");
  if (dataTheme === "dark") return "dark";
  if (dataTheme === "light") return "light";

  // 3. Check localStorage if set
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return "dark";
    if (stored === "light") return "light";
  } catch {
    // Ignore localStorage access issues in restricted environments
  }

  // 4. Fallback to OS / browser preference
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
}

/**
 * Updates the browser's <link rel="icon"> element immediately.
 * Ensures only a single active favicon link exists to prevent browser conflicts,
 * and forces Chromium-based browsers to repaint the tab icon.
 */
export function updateFavicon(theme?: "dark" | "light") {
  if (typeof document === "undefined") return;

  const activeTheme = theme ?? getActiveTheme();
  const iconHref =
    activeTheme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";

  // Collect all existing icon links (excluding apple-touch-icon)
  const existingLinks = Array.from(
    document.querySelectorAll<HTMLLinkElement>(
      "link[rel*='icon']:not([rel*='apple'])"
    )
  );

  let dynamicLink = document.getElementById(
    "dynamic-favicon"
  ) as HTMLLinkElement | null;

  if (!dynamicLink) {
    dynamicLink = document.createElement("link");
    dynamicLink.id = "dynamic-favicon";
    dynamicLink.rel = "icon";
    dynamicLink.type = "image/svg+xml";
    document.head.appendChild(dynamicLink);
  }

  // Clean up any other favicon links to ensure single active reference
  existingLinks.forEach((link) => {
    if (link !== dynamicLink) {
      link.remove();
    }
  });

  // Ensure media attribute is removed so the chosen theme icon applies unconditionally
  dynamicLink.removeAttribute("media");
  dynamicLink.type = "image/svg+xml";

  // Update href if changed, and replace link node to trigger immediate tab favicon update in Chromium
  const currentHref = dynamicLink.getAttribute("href");
  if (currentHref !== iconHref) {
    dynamicLink.setAttribute("href", iconHref);
    const clone = dynamicLink.cloneNode(true) as HTMLLinkElement;
    dynamicLink.parentNode?.replaceChild(clone, dynamicLink);
  }
}

/**
 * Client component that monitors theme changes in real time
 * and keeps the favicon in sync with light/dark theme.
 */
export const FaviconWatcher: React.FC = () => {
  useEffect(() => {
    // Initial sync
    updateFavicon();

    const handleThemeChange = () => {
      updateFavicon();
    };

    // 1. Listen for OS / browser theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleThemeChange);
    } else if (
      "addListener" in mediaQuery &&
      typeof (mediaQuery as unknown as { addListener: unknown }).addListener ===
        "function"
    ) {
      (
        mediaQuery as unknown as {
          addListener: (cb: (e: MediaQueryListEvent) => void) => void;
        }
      ).addListener(handleThemeChange);
    }

    // 2. Observe manual theme toggles on documentElement and body (class, data-theme)
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "class" ||
            mutation.attributeName === "data-theme")
        ) {
          handleThemeChange();
          break;
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class", "data-theme"],
      });
    }

    // 3. Listen for storage changes across tabs
    window.addEventListener("storage", handleThemeChange);

    // 4. Listen for custom theme change events
    window.addEventListener("portfolio:theme-change", handleThemeChange);
    document.addEventListener("theme-change", handleThemeChange);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleThemeChange);
      } else if (
        "removeListener" in mediaQuery &&
        typeof (mediaQuery as unknown as { removeListener: unknown })
          .removeListener === "function"
      ) {
        (
          mediaQuery as unknown as {
            removeListener: (cb: (e: MediaQueryListEvent) => void) => void;
          }
        ).removeListener(handleThemeChange);
      }
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
      window.removeEventListener("portfolio:theme-change", handleThemeChange);
      document.removeEventListener("theme-change", handleThemeChange);
    };
  }, []);

  return null;
};
