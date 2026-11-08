import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import InnerHero from "../../components/InnerHero";
import heroImg from "../../assets/about/whatWeDo.jpg";
import Reveal from "../../components/Reveal";
import {
pillars, trustPoints, benefitsFor, dashboards, lmsFeatures, beyond, faqs,
} from "../../data/whatWeDo";

const Check = () => <span className="mr-2 font-bold text-brand-gold">✓</span>;

function FaqItem({ q, a }) {
const [open, setOpen] = useState(false);
return (
<div className="border-b border-brand/20">
<button
onClick={() => setOpen(!open)}
className="flex w-full items-center justify-between py-4 text-left font-semibold text-brand-dark"
>
{q}
<span className="ml-4 text-brand-gold">{open ? "−" : "+"}</span>
</button>
<AnimatePresence initial={false}>
{open && (
<motion.p
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
className="overflow-hidden pb-4 text-sm text-gray-600"
>
{a}
</motion.p>
)}
</AnimatePresence>
</div>
);
}

export default function WhatWeDo() {
return (
<>
<InnerHero
  title="What We Do At Cyboard School"
  subtitle="India's 100% online K–12 school with a CBSE-mapped curriculum, accredited by the IAO."
  image={heroImg}
  imageAlt="Smiling Cyboard student with books and backpack"
  badges={[
    { value: "100%", label: "Live Classes" },
    { value: "CBSE", label: "Mapped Curriculum" },
  ]}
>
  <Link
    to="/admission-process"
    className="inline-block rounded-full bg-brand-gold px-7 py-3 text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:brightness-110"
  >
    Apply Now →
  </Link>
</InnerHero>
  {/* 3 pillars */}
  <section className="mx-auto max-w-6xl px-4 py-16">
    <Reveal className="text-center">
      <h2 className="font-serif text-3xl font-bold text-brand-dark">
        How Cyboard Prepares Your Child to Be Future-Ready
      </h2>
    </Reveal>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {pillars.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.1}>
          <div className="h-full rounded-lg bg-white p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark font-serif font-bold text-brand-gold">
              {i + 1}
            </span>
            <h3 className="mt-4 font-serif text-lg font-semibold text-brand-dark">{p.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {p.points.map((t) => <li key={t}><Check />{t}</li>)}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </section>

  {/* Why parents + who benefits */}
  <section className="bg-brand-dark py-16 text-white">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
      <Reveal>
        <h2 className="font-serif text-3xl font-bold">India's Trusted Online School System</h2>
        <ul className="mt-5 space-y-3 text-sm text-white/85">
          {trustPoints.map((t) => <li key={t}><Check />{t}</li>)}
        </ul>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-serif text-3xl font-bold">Who Benefits Most</h2>
        <ul className="mt-5 space-y-3 text-sm text-white/85">
          {benefitsFor.map((t) => <li key={t}><Check />{t}</li>)}
        </ul>
      </Reveal>
    </div>
  </section>

  {/* LMS */}
  <section className="mx-auto max-w-6xl px-4 py-16">
    <Reveal className="text-center">
      <h2 className="font-serif text-3xl font-bold text-brand-dark">Learning Ecosystem (LMS)</h2>
    </Reveal>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {dashboards.map((d, i) => (
        <Reveal key={d.title} delay={i * 0.1}>
          <div className="h-full rounded-lg border-t-4 border-brand-gold bg-white p-6 shadow-sm">
            <h3 className="font-serif text-lg font-semibold text-brand-dark">{d.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{d.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
    <Reveal>
      <ul className="mt-10 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
        {lmsFeatures.map((f) => <li key={f}><Check />{f}</li>)}
      </ul>
    </Reveal>
  </section>

  {/* Beyond classes */}
  <section className="bg-white py-16">
<div className="mx-auto max-w-6xl px-4">
      <Reveal className="text-center">
        <h2 className="font-serif text-3xl font-bold text-brand-dark">More Than Just Online Classes</h2>
        <p className="mt-2 text-sm text-gray-600">
          A future-ready education designed to shape thinkers, leaders and global citizens.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beyond.map((b, i) => (
          <Reveal key={b.title} delay={(i % 3) * 0.1}>
            <div className="h-full rounded-lg bg-brand-cream p-6 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-serif text-base font-semibold text-brand-dark">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section className="mx-auto max-w-3xl px-4 py-16">
    <Reveal className="text-center">
      <h2 className="font-serif text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
    </Reveal>
    <div className="mt-8">
      {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
    </div>
  </section>
  
  </>
  );
}
