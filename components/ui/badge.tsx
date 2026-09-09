import React from "react";

export type BadgeVariant = "default" | "accent" | "outline" | "muted";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-badge-bg text-badge-text border-badge-border hover:border-border-strong",
  accent:
    "bg-accent-muted text-accent border-accent/20",
  outline:
    "bg-transparent text-txt-secondary border-border-subtle",
  muted:
    "bg-surface-hover text-txt-muted border-transparent",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  return (
    <span
      className={`inline-flex items-center text-xs font-mono px-2.5 py-0.5 rounded-md border font-medium transition-colors ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
};
