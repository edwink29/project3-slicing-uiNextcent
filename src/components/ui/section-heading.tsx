type SectionHeadingProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  return (
    <div
      className={[align === "center" ? "text-center" : "text-left", className]
        .filter(Boolean)
        .join(" ")}
    >
      <h2
        className={[
          "font-semibold text-brand-dark",
          titleClassName || "text-3xl leading-tight",
        ]
          .filter(Boolean)
          .join(" ")}
      >
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
