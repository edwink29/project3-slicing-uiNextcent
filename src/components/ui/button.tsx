import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const VARIANT_CLASSES = {
  primary: "bg-brand-primary text-white hover:bg-brand-hover",
  outline:
    "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  ghost: "text-brand-primary hover:text-brand-hover",
} as const;

const SIZE_CLASSES = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm",
} as const;

type ButtonOwnProps = {
  variant?: keyof typeof VARIANT_CLASSES;
  size?: keyof typeof SIZE_CLASSES;
  className?: string;
};

type LinkButtonProps = ButtonOwnProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type NativeButtonProps = ButtonOwnProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const BASE_CLASSES =
  "inline-flex items-center justify-center rounded font-medium transition";

/**
 * Reusable CTA button. Renders a Next.js `Link` when `href` is provided,
 * otherwise a native `<button>`. Keeps every CTA across the landing page
 * visually consistent and driven by design tokens (see globals.css).
 */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    const { href, ...rest } = props as LinkButtonProps;
    return <Link href={href} className={classes} {...rest} />;
  }

  const { type = "button", ...rest } = props as NativeButtonProps;
  return <button type={type} className={classes} {...rest} />;
}
