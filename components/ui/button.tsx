import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

type AnchorProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = AnchorProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg hover:bg-accent-hover active:bg-accent-hover shadow-xs border border-transparent",
  secondary:
    "bg-surface text-txt-primary hover:bg-surface-hover active:bg-surface-active border border-border-subtle hover:border-border-strong",
  outline:
    "bg-transparent text-txt-primary border border-border-strong hover:bg-surface-hover active:bg-surface-active",
  ghost:
    "bg-transparent text-txt-secondary hover:text-txt-primary hover:bg-surface-hover active:bg-surface-active border border-transparent",
  link:
    "bg-transparent text-accent hover:text-accent-hover underline-offset-4 hover:underline p-0 h-auto border-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
  md: "text-sm px-4 py-2 rounded-lg gap-2 font-medium",
  lg: "text-base px-5 py-2.5 rounded-lg gap-2.5 font-medium",
};

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    isExternal = false,
    ...rest
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

  const computedClassName = `${baseStyles} ${variantStyles[variant]} ${
    variant !== "link" ? sizeStyles[size] : ""
  } ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorProps;
    if (isExternal || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={computedClassName}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={computedClassName} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const nativeRest = rest as NativeButtonProps;
  return (
    <button className={computedClassName} {...nativeRest}>
      {children}
    </button>
  );
};
