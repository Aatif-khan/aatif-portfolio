"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { personalData } from "@/data/personal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // Honeypot spam protection field
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "info" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  // Reset validation and error UI state when navigating away from Contact section via menu navigation
  React.useEffect(() => {
    const resetValidationUI = () => {
      setErrors({});
      setTouched({});
      setStatusMessage({ type: null, text: "" });
      setIsSubmitting(false);
    };

    const handleNavEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ section?: string }>;
      const targetSection =
        customEvent.detail?.section ||
        (typeof window !== "undefined"
          ? window.location.hash.replace("#", "")
          : "");

      if (targetSection && targetSection !== "contact") {
        resetValidationUI();
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && hash !== "contact") {
        resetValidationUI();
      }
    };

    window.addEventListener("portfolio:navigate", handleNavEvent);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("portfolio:navigate", handleNavEvent);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Client-side form validation
  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (!data.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!data.subject.trim()) {
      errs.subject = "Subject is required.";
    }

    if (!data.message.trim()) {
      errs.message = "Message is required.";
    } else if (data.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const nextData = { ...formData, [name]: value };
    setFormData(nextData);

    if (touched[name]) {
      setErrors(validate(nextData));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark required fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage({
        type: "error",
        text: "Please correct the errors in the form before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          website: formData.website, // Honeypot field
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatusMessage({
          type: "success",
          text:
            data.message ||
            "Thanks for reaching out. I'll get back to you as soon as possible.",
        });
        // Clear form data and validation on successful email delivery
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
        setTouched({});
        setErrors({});
      } else {
        const errorMsg =
          data?.error ||
          "Something went wrong while sending your message. Please try again or email me directly.";
        setStatusMessage({
          type: "error",
          text: errorMsg,
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text:
          "Something went wrong while sending your message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-b border-border-subtle/60 relative bg-canvas"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          label="Get In Touch"
          title="Let's Work Together"
          description="Have a frontend project, a product idea, or a Senior Frontend / Angular opportunity to discuss? I'd be happy to connect."
        />

        {/* 2-Column Grid Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Contact Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Card className="bg-surface border-border-subtle p-4 sm:p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-txt-primary tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-txt-secondary mt-1">
                  Fill out the form below to start a conversation regarding roles, projects, or technical inquiries.
                </p>
              </div>

              {/* Status Alert Message */}
              {statusMessage.text && (
                <div
                  className={`p-4 rounded-lg text-xs sm:text-sm font-medium border ${
                    statusMessage.type === "error"
                      ? "bg-red-500/10 border-red-500/30 text-red-400"
                      : statusMessage.type === "info"
                      ? "bg-accent/10 border-accent/30 text-txt-primary"
                      : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  }`}
                  role="alert"
                >
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot Field for Spam Protection (Visually Hidden) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-txt-primary"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Sarah Jenkins"
                      aria-required="true"
                      aria-invalid={touched.name && Boolean(errors.name)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-canvas border text-sm text-txt-primary placeholder:text-txt-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                        touched.name && errors.name
                          ? "border-red-500/60 focus:ring-red-500"
                          : "border-border-subtle focus:border-transparent"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="text-[11px] font-mono text-red-400 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-txt-primary"
                    >
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@company.com"
                      aria-required="true"
                      aria-invalid={touched.email && Boolean(errors.email)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-canvas border text-sm text-txt-primary placeholder:text-txt-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                        touched.email && errors.email
                          ? "border-red-500/60 focus:ring-red-500"
                          : "border-border-subtle focus:border-transparent"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-[11px] font-mono text-red-400 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-txt-primary"
                  >
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Senior Angular Engineer Opportunity / Project Inquiry"
                    aria-required="true"
                    aria-invalid={touched.subject && Boolean(errors.subject)}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-canvas border text-sm text-txt-primary placeholder:text-txt-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      touched.subject && errors.subject
                        ? "border-red-500/60 focus:ring-red-500"
                        : "border-border-subtle focus:border-transparent"
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="text-[11px] font-mono text-red-400 mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-txt-primary"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me a little about your project, team, or opportunity..."
                    aria-required="true"
                    aria-invalid={touched.message && Boolean(errors.message)}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-canvas border text-sm text-txt-primary placeholder:text-txt-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      touched.message && errors.message
                        ? "border-red-500/60 focus:ring-red-500"
                        : "border-border-subtle focus:border-transparent"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="text-[11px] font-mono text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Form Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-accent-fg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span>Send Message &rarr;</span>
                    )}
                  </Button>

                  <span className="text-[11px] font-mono text-txt-muted">
                    Delivered directly to inbox
                  </span>
                </div>
              </form>
            </Card>
          </div>

          {/* Column 2: Direct Contact Info & Social Links (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: Direct Contact Details */}
            <Card className="bg-surface border-border-subtle p-4 sm:p-6 space-y-5">
              <div className="space-y-1">
                <Badge variant="accent" className="text-[10px] font-mono py-0.5">
                  Direct Contact
                </Badge>
                <h3 className="text-lg font-bold text-txt-primary tracking-tight">
                  Contact Information
                </h3>
              </div>

              {/* Direct Email Address */}
              <div className="p-4 rounded-lg bg-canvas border border-border-subtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-txt-muted uppercase tracking-wider">
                  <svg
                    className="w-4 h-4 text-accent shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.75"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>Primary Email</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm font-semibold font-mono text-txt-primary hover:text-accent transition-colors break-all"
                    aria-label={`Send email to ${personalData.email}`}
                  >
                    {personalData.email}
                  </a>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                    className="text-xs"
                  >
                    {copied ? (
                      <span className="text-emerald-400 font-mono">Copied!</span>
                    ) : (
                      <span>Copy</span>
                    )}
                  </Button>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-lg bg-canvas border border-border-subtle space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-txt-muted uppercase tracking-wider">
                  <svg
                    className="w-4 h-4 text-accent shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.75"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>Based In</span>
                </div>
                <p className="text-sm font-medium text-txt-primary">
                  {personalData.location}
                </p>
              </div>

              {/* Professional Links */}
              <div className="space-y-2 pt-2 border-t border-border-subtle">
                <div className="text-xs font-mono text-txt-muted uppercase tracking-wider">
                  Professional Profiles
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* LinkedIn */}
                  <Button
                    variant="secondary"
                    size="sm"
                    href={personalData.linkedin}
                    isExternal={true}
                    className="justify-start text-xs font-mono"
                    aria-label="Visit LinkedIn Profile"
                  >
                    <svg
                      className="w-4 h-4 text-accent shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn Profile &rarr;</span>
                  </Button>

                  {/* GitHub */}
                  <Button
                    variant="secondary"
                    size="sm"
                    href="https://github.com/Aatif-khan"
                    isExternal={true}
                    className="justify-start text-xs font-mono"
                    aria-label="Visit GitHub Profile"
                  >
                    <svg
                      className="w-4 h-4 text-accent shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub Repos &rarr;</span>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 2: Open Opportunities Guidance */}
            <Card className="bg-canvas border-border-subtle p-4 sm:p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-txt-primary">
                  Open Opportunities
                </h4>
              </div>
              <p className="text-xs text-txt-secondary leading-relaxed">
                Currently open for Senior Frontend Engineer and Senior Angular Developer roles, enterprise web app contracts, and frontend architecture consultations.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
