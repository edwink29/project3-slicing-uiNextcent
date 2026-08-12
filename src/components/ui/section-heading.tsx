type SectionHeadingProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Shared title + subtitle block used by every landing page section, so
 * heading styles (size, color, spacing) stay driven by design tokens
 * instead of being re-typed per component.
 */
export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={[align === "center" ? "text-center" : "text-left", className]
        .filter(Boolean)
        .join(" ")}
    >
      <h2 className="text-3xl font-semibold leading-tight text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm leading-relaxed text-brand-grey">
          {subtitle}
        </p>
      )}
    </div>
  );
}
