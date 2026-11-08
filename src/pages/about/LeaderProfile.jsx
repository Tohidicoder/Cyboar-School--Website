import { Link, useParams } from "react-router-dom";
import InnerHero from "../../components/InnerHero";
import Reveal from "../../components/Reveal";
import FeatureCard from "../../components/FeatureCard";
import CTABanner from "../../components/CTABanner";
import { leaders } from "../../data/leaders";

export default function LeaderProfile() {
const { slug } = useParams();
const index = leaders.findIndex((l) => l.slug === slug);
const leader = leaders[index];

if (!leader) {
return (
<section className="px-4 py-32 text-center">
<h1 className="font-serif text-3xl font-bold text-brand-dark">Profile not found</h1>
<Link to="/cyboard-leadership" className="mt-6 inline-block text-brand-gold">
← Back to Leadership Team
</Link>
</section>
);
}

const prev = leaders[(index - 1 + leaders.length) % leaders.length];
const next = leaders[(index + 1) % leaders.length];

return (
<>
<InnerHero title={leader.name} subtitle={leader.role} />
  <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[320px_1fr]">
    {/* عکس */}
    <Reveal>
      <div className="md:sticky md:top-8">
        <div className="relative">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border-2 border-brand-gold" />
          {leader.img && (
            <img
              src={leader.img}
              alt={leader.name}
              className="relative aspect-[4/5] w-full rounded-3xl bg-brand-light object-cover object-top shadow-xl"
            />
          )}
        </div>
        {leader.linkedin && (
          <a
            href={leader.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-8 block rounded-full bg-brand-dark py-3 text-center text-xs font-semibold uppercase tracking-wide text-brand-gold transition hover:bg-brand-gold hover:text-brand-dark"
          >
            Connect on LinkedIn
          </a>
        )}
      </div>
    </Reveal>

    {/* محتوا */}
    <div className="space-y-14">
      <Reveal>
        <h2 className="font-serif text-3xl font-bold text-brand-dark">Meet {leader.name}</h2>
        <span className="mt-3 block h-1 w-16 rounded-full bg-brand-gold" />
        {leader.bio.map((p, i) => (
          <p key={i} className="mt-5 text-base leading-relaxed text-gray-700">{p}</p>
        ))}
      </Reveal>

      {leader.awards && (
        <Reveal>
          <h3 className="font-serif text-2xl font-bold text-brand-dark">Awards & Recognition</h3>
          <ul className="mt-5 space-y-3">
            {leader.awards.map((a) => (
              <li key={a} className="flex gap-3 rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm">
                <span className="font-bold text-brand-gold">★</span>{a}
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {leader.contributions && (
        <div>
          <Reveal>
            <h3 className="font-serif text-2xl font-bold text-brand-dark">
              Key Contributions to Online Schooling
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {leader.contributions.map((c, i) => (
              <Reveal key={c} delay={(i % 2) * 0.1}>
                <FeatureCard badge={i + 1} title={c} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {leader.talks && (
        <Reveal>
          <h3 className="font-serif text-2xl font-bold text-brand-dark">Leadership Talks</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {leader.talks.map((t) => (
              <span key={t} className="rounded-full bg-brand-dark px-4 py-2 text-xs font-semibold text-brand-gold">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      )}

      {leader.message && (
        <Reveal>
          <div className="rounded-3xl bg-[linear-gradient(135deg,#0F3D2E,#165C42)] p-8 text-white">
            <h3 className="font-serif text-xl font-semibold text-brand-gold">Message to Parents</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{leader.message}</p>
          </div>
        </Reveal>
      )}
    </div>
  </section>

  {/* قبلی / بعدی */}
  <div className="mx-auto flex max-w-6xl justify-between gap-4 px-4 pb-16 text-sm font-semibold text-brand-dark">
    <Link to={`/cyboard-leadership/${prev.slug}`} className="hover:text-brand-gold">← {prev.name}</Link>
    <Link to="/cyboard-leadership" className="hover:text-brand-gold">All Leaders</Link>
    <Link to={`/cyboard-leadership/${next.slug}`} className="hover:text-brand-gold">{next.name} →</Link>
  </div>

  <CTABanner />
</>
);
}