import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function CTABanner({
  title = "Admissions Open 2027-28",
  text = "Give your child the best start for a bright tomorrow.",
  button = "Apply Now",
  to = "/admission-process",
}) {
  return (
    <section className="px-4 pb-20">
      <Reveal>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0F3D2E,#165C42)] px-8 py-12 text-center text-white md:flex-row md:text-left">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gold/30 blur-2xl" />
          <div className="relative">
            <h2 className="font-serif text-2xl font-bold text-brand-gold md:text-3xl">{title}</h2>
            <p className="mt-2 text-sm text-white/80">{text}</p>
          </div>
          <Link
            to={to}
            className="relative rounded-full bg-brand-gold px-8 py-3 text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:brightness-110"
          >
            {button} →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}