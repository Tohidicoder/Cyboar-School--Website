export default function SectionHeading({ eyebrow, title, highlight, description, center = true }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && <span className="mb-4 inline-flex rounded-full bg-[#f8f3fa] px-4 py-2 text-xs font-extrabold uppercase tracking-[.15em] text-[#713e83]">{eyebrow}</span>}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#28232d] md:text-4xl lg:text-5xl">{title} {highlight && <span className="text-[#713e83]">{highlight}</span>}</h2>
      {description && <p className="mt-5 text-sm leading-8 text-[#706a75] md:text-base">{description}</p>}
    </div>
  );
}
