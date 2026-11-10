import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InnerHero from "../../components/InnerHero";
import Reveal from "../../components/Reveal";
import FaqList from "../../components/FaqList";
import ConsultationForm from "../../components/ConsultationForm";
import { Users, Sparkles, MessageCircle, Lightbulb } from "lucide-react";
import playImg from "../../assets/about/beyondAcademics.jpg";
import { intro, stats, steps, categories, activities, story, faqs } from "../../data/beyondAcademics";

export default function BeyondAcademics() {
const [active, setActive] = useState("all");
const shown = activities.filter((a) => active === "all" || a.cat === active);

return (
<>
<InnerHero
title="Building Skills Beyond Academics"
subtitle="Holistic education where children discover their passions through live, mentor-led activities."
>
<a href="#consult" className="inline-block rounded-full bg-brand-gold px-7 py-3 text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:brightness-110">
Book a Consultation ↓
</a>
</InnerHero>
  {/* آمار */}
  <div className="relative z-10 mx-auto -mt-16 max-w-3xl px-4">
    <Reveal>
      <div className="grid grid-cols-3 gap-6 rounded-2xl bg-white p-8 text-center shadow-xl">
        {stats.map(([v, l]) => (
          <div key={l}>
            <div className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">{v}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{l}</div>
          </div>
        ))}
      </div>
    </Reveal>
  </div>

<section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:grid-cols-2">
  <Reveal>
    <div className="relative">
      <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border-2 border-brand-gold" />
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-gold/30 blur-2xl" />

      <motion.img
        src={playImg}
        alt="Two children sharing a toy car while playing together"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-6 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-brand-gold">
          <Users className="h-4 w-4" />
        </span>
        <span className="font-serif text-sm font-bold text-brand-dark">Teamwork</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-2xl bg-brand-dark px-4 py-3 text-white shadow-xl"
      >
        <Sparkles className="h-4 w-4 text-brand-gold" />
        <span className="font-serif text-sm font-bold">Creativity</span>
      </motion.div>
    </div>
  </Reveal>

  <Reveal delay={0.15}>
    <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Learning Through Play</p>
    <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark">More Than Textbooks</h2>
    <p className="mt-4 text-base leading-relaxed text-gray-600">{intro}</p>
    <div className="mt-6 flex flex-wrap gap-3">
      {[
        [MessageCircle, "Communication"],
        [Users, "Teamwork"],
        [Lightbulb, "Critical Thinking"],
      ].map(([Icon, label]) => (
        <span key={label} className="flex items-center gap-2 rounded-full bg-brand-dark px-4 py-2 text-xs font-semibold text-brand-gold">
          <Icon className="h-4 w-4" />{label}
        </span>
      ))}
    </div>
  </Reveal>
</section>

  {/* سه مرحله */}
  <section className="bg-brand-dark py-20">
    <div className="mx-auto max-w-6xl px-4">
      <Reveal className="text-center">
        <h2 className="font-serif text-3xl font-bold text-white">How Holistic Learning Comes to Life</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.12}>
            <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-7">
              <span className="font-serif text-4xl font-bold text-brand-gold">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* فعالیت‌ها با تب فیلتر */}
  <section className="mx-auto max-w-6xl px-4 py-20">
    <Reveal className="text-center">
      <h2 className="font-serif text-3xl font-bold text-brand-dark">Activities Your Child Can Explore</h2>
    </Reveal>

    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => setActive(c.key)}
          className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition ${
            active === c.key
              ? "bg-brand-dark text-brand-gold shadow-lg"
              : "bg-white text-brand-dark hover:bg-brand-light"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>

    <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {shown.map((a) => (
          <motion.div
            key={a.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -8 }}
            className="group h-full rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-2xl"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#E3A82B,#F3C85C)] text-2xl shadow-lg shadow-brand-gold/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <a.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold text-brand-dark">{a.title}</h3>
            <span className="mt-2 block h-1 w-10 rounded-full bg-brand-gold transition-all duration-500 group-hover:w-20" />
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{a.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </section>

  {/* تجربه‌ی دانش‌آموز */}
  <section className="mx-auto max-w-4xl px-4 pb-20">
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0F3D2E,#165C42)] p-10 text-center text-white md:p-14">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gold/25 blur-3xl" />
        <p className="relative text-xs font-semibold uppercase tracking-widest text-brand-gold">Student Experience</p>
        <p className="relative mt-4 font-serif text-xl italic leading-relaxed md:text-2xl">“{story.text}”</p>
        <p className="relative mt-6 font-serif font-bold text-brand-gold">{story.name}</p>
        <p className="relative text-xs text-white/70">{story.meta}</p>
      </div>
    </Reveal>
  </section>

  {/* FAQ */}
  <section className="mx-auto max-w-3xl px-4 pb-20">
    <Reveal className="text-center">
      <h2 className="font-serif text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
    </Reveal>
    <div className="mt-8"><FaqList items={faqs} /></div>
  </section>

  {/* فرم */}
  <section className="mx-auto max-w-3xl px-4 pb-20">
    <Reveal>
      <ConsultationForm id="consult" student title="Book a Consultation" />
    </Reveal>
  </section>
</>
);
}