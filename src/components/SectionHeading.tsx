type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#00C4B3] sm:text-sm sm:tracking-[0.3em]">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-[#071A2F] sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
    </div>
  );
}
