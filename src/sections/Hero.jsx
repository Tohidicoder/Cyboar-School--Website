import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[680px] overflow-hidden bg-[#683879]"
    >
      {/* =====================================
          FALLBACK BACKGROUND IMAGE
      ====================================== */}
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* =====================================
          SCHOOL BACKGROUND VIDEO
      ====================================== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroImage}
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/f.mp4" type="video/mp4" />
      </video>

      {/* =====================================
          PURPLE BRAND OVERLAY
      ====================================== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#442052]/95 via-[#683879]/75 to-[#683879]/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#442052]/50 via-transparent to-[#442052]/20" />

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#F58232]/20 blur-3xl" />

      <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-purple-300/10 blur-3xl" />

      {/* =====================================
          HERO CONTENT
      ====================================== */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* WELCOME BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#F58232] animate-pulse" />
            Welcome to Cyboard School
            <Sparkles size={17} className="text-[#F58232]" />
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Where Every Child
            <span className="mt-2 block text-[#FFAA68]">Dares to Dream.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg md:text-xl"
          >
            Shaping Young Minds with Excellence in Online Schooling Since 2021.
            Discover personalized learning, expert teachers, and an engaging
            digital school experience for your child.
          </motion.p>

          {/* SCHOOL FEATURES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-7 flex flex-wrap items-center gap-5 text-sm font-medium text-white"
          >
            <span className="flex items-center gap-2">
              <GraduationCap size={21} className="text-[#FFAA68]" />
              Nursery to Grade 12
            </span>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <span>Personalized Online Learning</span>
          </motion.div>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/#admissions"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#F58232] px-8 py-4 font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#E87325]"
            >
              Book a Consultation
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#school-programs"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/70 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#683879]"
            >
              Explore Programs
              <ArrowRight size={19} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BRAND DECORATION */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#F58232] via-[#FFAA68] to-transparent" />
    </section>
  );
}
