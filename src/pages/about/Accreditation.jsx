import InnerHero from "../../components/InnerHero";
import Reveal from "../../components/Reveal";
import FeatureCard from "../../components/FeatureCard";
import CTABanner from "../../components/CTABanner";
import {
  certificateUrl,
  accreditationId,
  stats,
  intro,
  whatIs,
  purposes,
  aboutIao,
  whyMatters,
  process,
  online,
  benefits,
} from "../../data/accreditation";

const Heading = ({ title, text, center }) => (
  <Reveal className={center ? "mx-auto max-w-3xl text-center" : ""}>
    <h2 className="font-serif text-3xl font-bold text-brand-dark">{title}</h2>
    {text && (
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{text}</p>
    )}
  </Reveal>
);

export default function Accreditation() {
  return (
    <>
      <InnerHero title="Accreditation with IAO" subtitle={intro.tagline} />
      <div className="relative z-10 mx-auto -mt-16 max-w-4xl px-4">
        <Reveal>
          <div className="grid grid-cols-3 gap-6 rounded-2xl bg-white p-8 text-center shadow-xl">
            {stats.map(([v, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
                  {v}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Intro + certificate */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Our Credential
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark">
            Accredited by IAO
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            {intro.text}
          </p>
          <div className="mt-6 inline-block rounded-xl border-2 border-dashed border-brand-gold px-5 py-3 text-sm font-semibold text-brand-dark">
            {accreditationId}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="rounded-2xl bg-brand-dark p-8 text-white">
            <h3 className="font-serif text-xl font-semibold text-brand-gold">
              {aboutIao.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              {aboutIao.text}
            </p>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-brand-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:brightness-110"
            >
              View Accreditation Certificate →
            </a>
          </div>
        </Reveal>
      </section>

      {/* What is accreditation + 4 cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Heading center title={whatIs.title} text={whatIs.text} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {purposes.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <FeatureCard badge={i + 1} title={p.title}>
                  {p.text}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Heading center title={whyMatters.title} text={whyMatters.text} />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {whyMatters.parameters.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <div className="rounded-2xl border border-brand/10 bg-white p-6 text-center font-serif font-semibold text-brand-dark shadow-sm">
                {p}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold">{process.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {process.text}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="relative h-full rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold font-serif text-lg font-bold text-brand-dark">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Online */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <Heading center title={online.title} text={online.text} />
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Heading center title={benefits.title} text={benefits.text} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.items.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border-t-4 border-brand-gold bg-brand-cream p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-brand-dark">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-3xl text-center font-serif text-lg italic text-brand-dark">
              {benefits.closing}
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
