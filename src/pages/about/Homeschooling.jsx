import InnerHero from "../../components/InnerHero";
import Reveal from "../../components/Reveal";
import FeatureCard from "../../components/FeatureCard";
import FaqList from "../../components/FaqList";
import CTABanner from "../../components/CTABanner";
import { motion } from "framer-motion";
import homeImg from "../../assets/about/Homeschooling.jpg";
import ConsultationForm from "../../components/ConsultationForm";
import {
whatsapp, phone, heroBadges, alternative, steps, experience,
pillars, compareCols, compareRows, testimonials, faqs,
} from "../../data/homeschooling";

const Title = ({ children, sub }) => (
<Reveal className="mx-auto max-w-3xl text-center">
<h2 className="font-serif text-3xl font-bold text-brand-dark">{children}</h2>
{sub && <p className="mt-4 text-sm leading-relaxed text-gray-600">{sub}</p>}
</Reveal>
);

export default function Homeschooling() {
return (
<>
<InnerHero
title="Experience the Ease of Structured Homeschooling"
subtitle="A live, teacher-led, CBSE-mapped environment built around how your child actually learns, without exhausting commutes or one-size-fits-all classrooms."
>
<div className="flex flex-wrap justify-center gap-3">
<a href="#consult" className="rounded-full bg-brand-gold px-7 py-3 text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:brightness-110">
Talk to a Counsellor ↓
</a>
<a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-7 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/10">
WhatsApp {phone.replace("+91", "+91 ")}
</a>
</div>
<div className="mt-8 flex flex-wrap justify-center gap-2">
{heroBadges.map((b) => (
<span key={b} className="rounded-full bg-white/10 px-4 py-1.5 text-xs text-white/90">✓ {b}</span>
))}
</div>
</InnerHero>
  {/* فرم روی هیرو */}
  <div className="relative z-10 mx-auto -mt-16 max-w-3xl px-4">
    <Reveal>
      <ConsultationForm
        id="consult"
        title="Talk to a Cyboard Counsellor"
        text="Share a few details and an academic counsellor will call you to discuss your child's grade, learning style and routine."
      />
    </Reveal>
  </div>

  {/* جایگزین متفکرانه */}
  <section className="mx-auto max-w-3xl px-4 py-20 text-center">
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">A Thoughtful Alternative</p>
      <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark">{alternative.title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{alternative.text}</p>
    </Reveal>
  </section>

  {/* ۴ مرحله */}
  <section className="bg-brand-dark py-20">
    <div className="mx-auto max-w-6xl px-4">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold text-white">A Clearer Way to Start Homeschooling</h2>
        <p className="mt-4 text-sm text-white/80">
          You don't have to work out textbooks, lesson plans or board affiliation alone.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Step 0{i + 1}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/75">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* تجربه‌ی Cyboard */}
<section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:grid-cols-2">
  {/* عکس */}
  <Reveal>
    <div className="relative">
      {/* قاب طلایی */}
      <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border-2 border-brand-gold" />
      {/* درخشش */}
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-gold/30 blur-2xl" />

      <motion.img
        src={homeImg}
        alt="A student joining a live online class on her first day of school"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative aspect-[3/2] w-full rounded-[2rem] object-cover shadow-2xl"
      />
      {/* کارت شناور بالا */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-6 hidden rounded-2xl bg-white px-4 py-3 shadow-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          <span className="font-serif text-sm font-bold text-brand-dark">Live Class</span>
        </div>
        <div className="mt-0.5 text-[11px] text-gray-500">2-Teacher Model</div>
      </motion.div>
      {/* کارت شناور پایین */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 right-4 rounded-2xl bg-brand-dark px-5 py-3 text-white shadow-xl"
      >
        <div className="font-serif text-xl font-bold text-brand-gold">0 hrs</div>
        <div className="text-[11px] text-white/80">Daily Commute</div>
      </motion.div>
    </div>
  </Reveal>

  {/* متن */}
  <div>
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">The Cyboard Experience</p>
      <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark">A Genuine School Community</h2>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        Homeschooling with Cyboard is a live, teacher-guided daily experience, not pre-recorded videos.
      </p>
    </Reveal>

    <div className="mt-8 space-y-5">
      {experience.map((e, i) => (
        <Reveal key={e.title} delay={i * 0.12}>
          <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-lg">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark font-serif font-bold text-brand-gold">
              {i + 1}
            </span>
            <div>
              <h3 className="font-serif text-base font-semibold text-brand-dark">{e.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{e.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

  {/* ۸ ستون */}
<section className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-4">
      <Title sub="Everything your child needs for academic excellence, holistic growth and recognised board exams.">
        Why Choose Cyboard as Your Homeschooling Partner?
      </Title>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 0.08}>
            <FeatureCard badge={i + 1} title={p.title}>{p.text}</FeatureCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* جدول مقایسه */}
  <section className="mx-auto max-w-6xl px-4 py-20">
    <Title sub="How Cyboard combines a school's academic credibility with the freedom and safety of home.">
      Traditional School vs. DIY Homeschooling vs. Cyboard
    </Title>
    <Reveal>
      <div className="mt-10 overflow-x-auto rounded-3xl shadow-xl">
        <table className="w-full min-w-[640px] border-collapse bg-white text-left text-sm">
          <thead>
            <tr>
              <th className="bg-brand-cream p-4 font-serif text-brand-dark">Parameter</th>
              {compareCols.map((c, i) => (
                <th
                  key={c}
                  className={`p-4 font-serif ${i === 0 ? "bg-brand-dark text-brand-gold" : "bg-brand-cream text-brand-dark"}`}
                >
                  {i === 0 && "★ "}{c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareRows.map(([label, a, b, c]) => (
              <tr key={label} className="border-t border-brand/10">
                <td className="p-4 font-semibold text-brand-dark">{label}</td>
                <td className="bg-brand-light p-4 font-medium text-brand-dark">✓ {a}</td>
                <td className="p-4 text-gray-600">{b}</td>
                <td className="p-4 text-gray-600">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  </section>

  {/* نظر والدین */}
  <section className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-4">
      <Title>Other Parents Had the Same Questions</Title>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="h-full rounded-3xl border-t-4 border-brand-gold bg-brand-cream p-7">
              <span className="font-serif text-5xl leading-none text-brand-gold">“</span>
              <blockquote className="text-sm leading-relaxed text-gray-700">{t.text}</blockquote>
              <figcaption className="mt-5">
                <div className="font-serif font-bold text-brand-dark">{t.name}</div>
                <div className="text-xs text-gray-500">{t.meta}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section className="mx-auto max-w-3xl px-4 py-20">
    <Title>Starting Homeschooling? Start With Clarity</Title>
    <div className="mt-8"><FaqList items={faqs} /></div>
  </section>

  <CTABanner
    title="A Better Education Begins With One Honest Conversation"
    text="No aggressive sales calls, just an open discussion about whether structured homeschooling fits your child."
    button="Talk to a Counsellor"
    to="/contact-us"
  />
</>
);
}