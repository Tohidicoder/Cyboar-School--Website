import { motion } from "framer-motion";
import InnerHero from "../../components/InnerHero";
import Reveal from "../../components/Reveal";
import FeatureCard from "../../components/FeatureCard";
import FaqList from "../../components/FaqList";
import CTABanner from "../../components/CTABanner";
import storyImg from "../../assets/about/cyboardStory.jpg";
import {
intro, future, whyOnline, whoBenefits, missionVision, founderNote,
dayInLife, tech, curriculum, faqs,
} from "../../data/cyboardStory";

const Title = ({ children, sub, light }) => (
<Reveal className="mx-auto max-w-3xl text-center">
<h2 className={`font-serif text-3xl font-bold ${light ? "text-white" : "text-brand-dark"}`}>{children}</h2>
{sub && <p className={`mt-4 text-sm leading-relaxed ${light ? "text-white/80" : "text-gray-600"}`}>{sub}</p>}
</Reveal>
);
export default function CyboardStory() {
return (
<>
<InnerHero title="Cyboard Story: From Chalk to Click" subtitle={intro.subtitle} />
  {/* شروع داستان */}
  <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:grid-cols-2">
  {/* عکس */}
  <Reveal>
    <div className="relative mx-auto w-full max-w-md">
      {/* قاب طلایی پشت عکس */}
      <div className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] border-2 border-brand-gold" />
      {/* درخشش طلایی */}
      <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-brand-gold/30 blur-2xl" />

      <motion.img
        src={storyImg}
        alt="A curious child asking questions while his mother listens"
        whileHover={{ scale: 1.03, rotate: -1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-2xl"
      />
      {/* کارت شناور */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 left-4 rounded-2xl bg-white px-5 py-3 shadow-xl"
      >
        <div className="font-serif text-sm font-bold text-brand-dark">Curious Minds</div>
        <div className="text-[11px] font-medium text-gray-500">Future Leaders</div>
      </motion.div>

      {/* دایره‌ی تزئینی */}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -right-3 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-xl text-brand-gold shadow-lg"
      >
        ✦
      </motion.span>
    </div>
  </Reveal>

  {/* متن */}
  <div>
    {intro.paragraphs.map((p, i) => (
      <Reveal key={i} delay={i * 0.1}>
        <p className="mb-5 text-base leading-relaxed text-gray-700">{p}</p>
      </Reveal>
    ))}
    <Reveal>
      <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-brand-gold">
        Breaking every barrier
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {intro.barriers.map((b, i) => (
          <motion.span
            key={b}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="rounded-full bg-brand-dark px-5 py-2 text-sm font-semibold text-brand-gold"
          >
            {b}
          </motion.span>
        ))}
      </div>
    </Reveal>
  </div>
</section>

  {/* آینده‌ی آموزش */}
  <section className="bg-white py-20">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
      <Reveal>
        <h2 className="font-serif text-3xl font-bold text-brand-dark">{future.title}</h2>
        <span className="mt-4 block h-1 w-16 rounded-full bg-brand-gold" />
      </Reveal>
      <ul className="space-y-4">
        {future.points.map((t, i) => (
          <Reveal key={t} delay={i * 0.1}>
            <li className="flex gap-3 rounded-xl bg-brand-cream p-4 text-sm text-gray-700">
              <span className="font-bold text-brand-gold">✓</span>{t}
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>

  {/* چرا آنلاین */}
  <section className="mx-auto max-w-6xl px-4 py-20">
    <Title>Why Online Schooling is the Future</Title>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {whyOnline.map((w, i) => (
        <Reveal key={w.title} delay={i * 0.1}>
          <FeatureCard badge={i + 1} title={w.title}>{w.text}</FeatureCard>
        </Reveal>
      ))}
    </div>
  </section>

  {/* چه کسانی سود می‌برند */}
  <section className="bg-brand-dark py-20">
    <div className="mx-auto max-w-6xl px-4">
      <Title light>Who Benefits Most from Online Schooling?</Title>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whoBenefits.map((b, i) => (
          <Reveal key={b} delay={(i % 3) * 0.1}>
            <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-white/90">
              <span className="mr-2 text-brand-gold">●</span>{b}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* Mission & Vision + نقل‌قول */}
  <section className="mx-auto max-w-6xl px-4 py-20">
    <div className="grid gap-6 md:grid-cols-2">
      {missionVision.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.15}>
          <div className="h-full rounded-3xl border-t-4 border-brand-gold bg-white p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-brand-dark">{m.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{m.text}</p>
          </div>
</Reveal>
      ))}
    </div>
    <Reveal>
      <blockquote className="mx-auto mt-14 max-w-3xl text-center">
        <p className="font-serif text-2xl italic text-brand-dark">“{founderNote.text}”</p>
        <footer className="mt-3 text-sm font-semibold text-brand-gold">— {founderNote.by}</footer>
      </blockquote>
    </Reveal>
  </section>

  {/* یک روز از زندگی دانش‌آموز */}
  <section className="bg-white py-20">
    <div className="mx-auto max-w-4xl px-4">
      <Title>A Day as a Cyboard Student</Title>
      <div className="relative mt-12 space-y-8 border-l-2 border-brand-gold/40 pl-8">
        {dayInLife.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.1}>
            <div className="relative">
              <span className="absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark font-serif font-bold text-brand-gold">
                {i + 1}
              </span>
              <h3 className="font-serif text-lg font-semibold text-brand-dark">{d.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{d.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* فناوری + برنامه‌ی درسی */}
  <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
    {[tech, curriculum].map((s, i) => (
      <Reveal key={s.title} delay={i * 0.15}>
        <div className="h-full rounded-3xl bg-[linear-gradient(135deg,#0F3D2E,#165C42)] p-8 text-white">
          <h3 className="font-serif text-xl font-semibold text-brand-gold">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/85">{s.text}</p>
        </div>
      </Reveal>
    ))}
  </section>

  {/* FAQ */}
  <section className="mx-auto max-w-3xl px-4 pb-20">
    <Title>Frequently Asked Questions</Title>
    <div className="mt-8"><FaqList items={faqs} /></div>
  </section>

  <CTABanner title="Explore More on Cyboard School" text="See how admission works and start your child's journey." />
</>
);
}