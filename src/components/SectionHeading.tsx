type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", titleClassName = "", descriptionClassName = "" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#5CE3D0] sm:text-sm sm:tracking-[0.32em]">{eyebrow}</p>
      <h2 className={`text-2xl font-semibold tracking-tight text-inherit sm:text-3xl lg:text-4xl ${titleClassName}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 text-inherit opacity-90 sm:text-lg sm:leading-8 ${descriptionClassName}`}>{description}</p>
    </div>
  );
}
