import familyImg from "../../assets/about/transferablejobs.jpg";
import { motion } from "framer-motion";
import InnerHero from "../../components/InnerHero";
import Reveal from "../../components/Reveal";
import FeatureCard from "../../components/FeatureCard";
import FaqList from "../../components/FaqList";
import ConsultationForm from "../../components/ConsultationForm";
import {
heroBadges, stats, worries, compare, flow, reasons,
testimonials, videoId, steps, enquiryPoints, faqs,
} from "../../data/transferableJobs.js";

const Title = ({ children, sub, light }) => (
<Reveal className="mx-auto max-w-3xl text-center">
<h2 className={`font-serif text-3xl font-bold ${light ? "text-white" : "text-brand-dark"}`}>{children}</h2>
{sub && <p className={`mt-4 text-sm leading-relaxed ${light ? "text-white/80" : "text-gray-600"}`}>{sub}</p>}
</Reveal>
);

export default function TransferableJobs() {
return (
<>
<InnerHero
title="Job transfer? Your child's school doesn't have to start over."
subtitle="Move cities with your job. Your child keeps the same school and routine, wherever your next posting takes you."
>
<a href="#consult" className="inline-block rounded-full bg-brand-gold px-7 py-3 text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:brightness-110">
Book a Free Consultation ↓
</a>
<div className="mt-8 flex flex-wrap justify-center gap-2">
{heroBadges.map((b) => (
<span key={b} className="rounded-full bg-white/10 px-4 py-1.5 text-xs text-white/90">✓ {b}</span>
))}
</div>
</InnerHero>
  {/* آمار */}
  <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-4">
    <Reveal>
      <div className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-8 text-center shadow-xl md:grid-cols-4">
        {stats.map(([v, l]) => (
          <div key={l}>
            <div className="font-serif text-3xl font-bold text-brand-dark">{v}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{l}</div>
          </div>
        ))}
      </div>
    </Reveal>
  </div>

  {/* نگرانی‌ها */}
  <section className="mx-auto max-w-6xl px-4 py-20">
    <Title sub="Every transfer brings the same six worries.">
      The posting is confirmed. The school search starts again.
    </Title>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {worries.map((w, i) => (
        <Reveal key={w.title} delay={(i % 3) * 0.1}>
          <div className="h-full rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="text-brand-gold">●</span>
            <h3 className="mt-2 font-serif text-lg font-semibold text-brand-dark">{w.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{w.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>

  {/* مقایسه */}
  <section className="bg-brand-dark py-20">
    <div className="mx-auto max-w-4xl px-4">
      <Title light sub="Here is what changes when the school moves with you.">Move the Family. Keep the School.</Title>
      <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="grid grid-cols-2 text-center font-serif text-sm font-bold">
          <div className="bg-brand-cream p-4 text-brand-dark">Typical School Move</div>
          <div className="bg-brand-gold p-4 text-brand-dark">Move with Cyboard</div>
        </div>
        {compare.map(([a, b], i) => (
          <Reveal key={a} delay={i * 0.06}>
            <div className="grid grid-cols-2 border-t border-brand/10 text-sm">
              <div className="p-4 text-gray-500">✗ {a}</div>
              <div className="bg-brand-light p-4 font-medium text-brand-dark">✓ {b}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* جریان: خانواده جابه‌جا می‌شود */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:grid-cols-2">
  {/* عکس */}
  <Reveal>
    <div className="relative mx-auto w-full max-w-md">
      {/* قاب طلایی */}
      <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-brand-gold" />
      {/* درخشش */}
      <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-brand-gold/30 blur-2xl" />

      <motion.img
        src={familyImg}
        alt="A family studying together at home"
        whileHover={{ scale: 1.03, rotate: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
      />

      {/* کارت شناور: مسیر جابه‌جایی */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-5 bottom-8 hidden rounded-2xl bg-white px-4 py-3 shadow-xl sm:block"
      >
        <div className="font-serif text-sm font-bold text-brand-dark">Delhi → Pune</div>
        <div className="text-[11px] text-gray-500">Same school, new home</div>
      </motion.div>

      {/* کارت شناور: One School */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-6 rounded-2xl bg-brand-dark px-5 py-3 text-white shadow-xl"
      >
        <div className="font-serif text-lg font-bold text-brand-gold">1 School</div>
        <div className="text-[11px] text-white/80">Any City</div>
      </motion.div>
    </div>
  </Reveal>

  {/* متن + مراحل */}
  <div>
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">One Journey</p>
      <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark">Family Moves. Learning Continues.</h2>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        Your child sees one thing change: the address.
      </p>
    </Reveal>

    <div className="relative mt-8 space-y-5 border-l-2 border-brand-gold/40 pl-8">
      {flow.map((f, i) => (
        <Reveal key={f.title} delay={i * 0.12}>
          <div className="relative">
            <span className="absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark font-serif font-bold text-brand-gold">
              {i + 1}
            </span>
            <h3 className="font-serif text-base font-semibold text-brand-dark">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

  {/* چرا Cyboard */}
  <section className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-4">
      <Title sub="Built around one idea: a move should not restart school.">Why Transferable Families Choose Cyboard</Title>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.1}>
            <FeatureCard badge={i + 1} title={r.title}>{r.text}</FeatureCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* نظر والدین */}
  <section className="mx-auto max-w-6xl px-4 py-20">
    <Title sub="Parents who relocated for work, and kept their child's school.">A Real Family. A Real Move.</Title>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={(i % 2) * 0.1}>
          <figure className="h-full rounded-3xl border-t-4 border-brand-gold bg-white p-7 shadow-sm">
            <motion.span
              whileInView={{ scale: [0.8, 1.05, 1] }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-semibold text-brand-gold"
            >
              {t.route}
            </motion.span>
            <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">“{t.text}”</blockquote>
            <figcaption className="mt-4">
              <div className="font-serif font-bold text-brand-dark">{t.name}</div>
              <div className="text-xs text-gray-500">{t.meta}</div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </section>

  {/* ویدیو */}
  <section className="mx-auto max-w-4xl px-4 pb-20">
    <Title sub="Parents share what Cyboard means for their child's learning.">Hear From More Cyboard Families</Title>
    <Reveal>
      <div className="mt-8 aspect-video overflow-hidden rounded-3xl shadow-2xl">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="Cyboard parents' stories"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </Reveal>
  </section>

  {/* مراحل */}
  <section className="bg-brand-dark py-20">
    <div className="mx-auto max-w-5xl px-4">
      <Title light sub="Three simple steps. No pressure.">What Happens After You Enquire</Title>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.12}>
            <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-6">
              <span className="font-serif text-3xl font-bold text-brand-gold">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-white/75">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section className="mx-auto max-w-3xl px-4 py-20">
    <Title sub="Quick answers for families on the move.">Questions Transferable Parents Ask</Title>
    <div className="mt-8"><FaqList items={faqs} /></div>
  </section>

  {/* فرم نهایی */}
  <section className="bg-white pb-20 pt-20">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
      <Reveal>
<h2 className="font-serif text-3xl font-bold text-brand-dark">What Happens When You Enquire?</h2>
        <p className="mt-3 text-sm text-gray-600">A free conversation to help you plan your child's school around your move.</p>
        <ul className="mt-6 space-y-3">
          {enquiryPoints.map(([t, d]) => (
            <li key={t} className="flex gap-3 rounded-xl bg-brand-cream p-4 text-sm">
              <span className="font-bold text-brand-gold">✓</span>
              <span><b className="text-brand-dark">{t}:</b> <span className="text-gray-600">{d}</span></span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs font-semibold text-brand-gold">Free. No obligation to decide.</p>
      </Reveal>
      <Reveal delay={0.15}>
        <ConsultationForm
          id="consult"
          extended
          title="Book a Free Consultation"
          text="Talk to a counsellor about your child's class, your move dates and your options."
          button="Book a Free Consultation"
        />
      </Reveal>
    </div>
  </section>
</>
);
}