import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InnerHero from "../../components/InnerHero";
import Reveal from "../../components/Reveal";
import CTABanner from "../../components/CTABanner";
import { leaders } from "../../data/leaders";

export default function Leadership() {
  return (
    <>
      <InnerHero
        title="Our Leadership Team"
        subtitle="Dynamic change-makers and experts in their fields, committed to helping every student reach their full potential."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <Reveal>
          <p className="text-base leading-relaxed text-gray-600">
            Leadership is not inherited, it is earned along the journey. Our
            leaders bring years of experience and a shared vision to
            revolutionise schooling in India.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex flex-wrap justify-center gap-8">
          {leaders.map((l, i) => (
            <Reveal
              key={l.slug}
              delay={(i % 3) * 0.1}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
            >
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group h-full overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-12px_rgba(15,61,46,0.2)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(15,61,46,0.45)]"
              >
                <Link to={`/cyboard-leadership/${l.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-brand-light">
                    {l.img && (
                      <img
                        src={l.img}
                        alt={l.name}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,61,46,0.85),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-dark">
                      {l.role}
                    </span>
                  </div>
                </Link>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-brand-dark">
                    {l.name}
                  </h3>
                  <span className="mt-2 block h-1 w-10 rounded-full bg-brand-gold transition-all duration-500 group-hover:w-20" />
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {l.short}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      to={`/cyboard-leadership/${l.slug}`}
                      className="text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:text-brand-gold"
                    >
                      View Profile →
                    </Link>
                    {l.linkedin && (
                      <a
                        href={l.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${l.name} on LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-xs font-bold text-brand-gold transition hover:bg-brand-gold hover:text-brand-dark"
                      >
                        in
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
