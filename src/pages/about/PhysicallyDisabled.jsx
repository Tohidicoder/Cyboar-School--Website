import { motion } from "framer-motion";
import InnerHero from "../../components/InnerHero";
import Reveal from "../../components/Reveal";
import FeatureCard from "../../components/FeatureCard";
import ConsultationForm from "../../components/ConsultationForm";
import { intro, features, studentStory } from "../../data/inspiringAbilities";
import { teachers } from "../../data/teachers";
import heroImg from "../../assets/about/physicallyDisabled.jpg";

const initials = (n) => n.split(" ").map((w) => w[0]).slice(0, 2).join("");

export default function PhysicallyDisabled() {
return (
<>
<InnerHero
  title="Differently Abled but Equally Educated"
  subtitle="Give your child the confidence to succeed. We offer inclusive education from the comfort of your home."
  image={heroImg}
  imageAlt="Children and a teacher practising sign language together in a classroom"
  imagePosition="50% 25%"
  badges={[
    { value: "Class 8", label: "Inclusive Education Up To" },
    { value: "100%", label: "Learn From Home" },
  ]}
>
  <a href="#consult" className="inline-block rounded-full bg-brand-gold px-7 py-3 text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:brightness-110">
    Connect With Our Counsellor ↓
  </a>
</InnerHero>
  {/* معرفی */}
  <section className="mx-auto max-w-4xl px-4 py-20 text-center">
    <Reveal>
      <span className="inline-block rounded-full bg-brand-dark px-4 py-1.5 text-xs font-semibold text-brand-gold">
        {intro.tag}
      </span>
      <h2 className="mt-4 font-serif text-3xl font-bold text-brand-dark">{intro.title}</h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600">{intro.text}</p>
    </Reveal>
  </section>

  {/* امکانات */}
  <section className="bg-white py-20">
    <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <Reveal key={f.title} delay={(i % 3) * 0.1}>
          <FeatureCard badge={i + 1} title={f.title}>{f.text}</FeatureCard>
        </Reveal>
      ))}
    </div>
  </section>

  {/* پیام دانش‌آموز */}
  <section className="mx-auto max-w-4xl px-4 py-20">
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0F3D2E,#165C42)] p-10 text-center text-white md:p-14">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gold/25 blur-3xl" />
        <p className="relative text-xs font-semibold uppercase tracking-widest text-brand-gold">
          Message From Our Student
        </p>
        <h2 className="relative mt-3 font-serif text-2xl font-bold italic md:text-3xl">
          “{studentStory.headline}”
        </h2>
        <p className="relative mt-5 text-sm leading-relaxed text-white/85">{studentStory.text}</p>
        <p className="relative mt-6 font-serif font-bold text-brand-gold">{studentStory.name}</p>
        <p className="relative text-xs text-white/70">{studentStory.meta}</p>
      </div>
    </Reveal>
  </section>

  {/* تیم معلمان */}
  <section className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-4">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold text-brand-dark">Our Teaching Team</h2>
        <p className="mt-4 text-sm text-gray-600">
          Committed to delivering education that integrates technology and emphasises experiential learning.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((t, i) => (
          <Reveal key={t.name} delay={(i % 4) * 0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="h-full rounded-3xl bg-brand-cream p-6 text-center shadow-sm transition-shadow hover:shadow-xl"
            >
              {t.img ? (
                <img src={t.img} alt={t.name} className="mx-auto h-24 w-24 rounded-full object-cover" />
              ) : (
                <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0F3D2E,#165C42)] font-serif text-2xl font-bold text-brand-gold">
                  {initials(t.name)}
                </span>
              )}
              <h3 className="mt-4 font-serif text-lg font-semibold text-brand-dark">{t.name}</h3>
<span className="mt-2 inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-[11px] font-semibold text-brand-dark">
                {t.subject}
              </span>
              <p className="mt-3 text-xs text-gray-600">Ex-{t.prev}</p>
              <p className="mt-1 text-xs font-semibold text-brand-dark">Experience: {t.exp}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* فرم */}
  <section className="mx-auto max-w-3xl px-4 py-20">
    <Reveal>
      <ConsultationForm
        id="consult"
        student
        maxClass={10}
        title="Fill the Form to Know More About Cyboard School"
        button="Book a Free Consultation Today"
      />
    </Reveal>
  </section>
</>
);
}