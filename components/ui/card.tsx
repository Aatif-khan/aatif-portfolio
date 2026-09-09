import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  as: Component = "div",
  children,
  hoverable = false,
  className = "",
  ...props
}) => {
  return (
    <Component
      className={`rounded-xl border border-border-subtle bg-surface p-6 text-txt-primary transition-all duration-200 ${
        hoverable
          ? "hover:border-border-strong hover:bg-surface-hover hover:shadow-sm"
          : ""
      } ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
