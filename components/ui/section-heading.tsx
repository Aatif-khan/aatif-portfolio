import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  centered = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col gap-2 mb-10 ${
        centered ? "items-center text-center mx-auto max-w-2xl" : "items-start"
      } ${className}`.trim()}
    >
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-accent font-mono">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-txt-primary">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-txt-secondary max-w-2xl leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
};
