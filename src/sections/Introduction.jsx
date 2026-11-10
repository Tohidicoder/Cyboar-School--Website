import { useState } from "react";
import { motion } from "motion/react";

import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  MonitorPlay,
  Sparkles,
} from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";

const VIDEO_PATH = "/videos/he.mp4";
const POSTER_PATH = "/images/programs/7.jpeg";

const stats = [
  {
    number: "K–12",
    label: "Complete Learning Journey",
    icon: GraduationCap,
  },
  {
    number: "Online",
    label: "Flexible Education",
    icon: MonitorPlay,
  },
  {
    number: "Live",
    label: "Interactive Classes",
    icon: BookOpen,
  },
];

export default function Introduction() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="introduction"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#F4EAF9] via-[#FFFAF5] to-[#FDEBDD] px-5 py-20 sm:px-8 md:py-28"
    >
      {/* =====================================
          COLORFUL ANIMATED BACKGROUND
      ====================================== */}

      {/* Base Gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#F4EAF9] via-[#FFF9F2] to-[#FDEBDD]" />

      {/* Purple Animated Glow */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#9B65B5]/30 blur-[90px]"
        animate={{
          x: [0, 130, 50, 0],
          y: [0, 100, 180, 0],
          scale: [1, 1.25, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orange Animated Glow */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[480px] w-[480px] rounded-full bg-[#F58232]/30 blur-[95px]"
        animate={{
          x: [0, -120, -50, 0],
          y: [0, 120, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pink Animated Glow */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-[35%] -z-10 h-[400px] w-[400px] rounded-full bg-[#E9A6C8]/30 blur-[100px]"
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -100, -30, 0],
          scale: [0.9, 1.3, 1, 0.9],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue Animated Glow */}
      <motion.div
        className="pointer-events-none absolute bottom-10 right-[25%] -z-10 h-[280px] w-[280px] rounded-full bg-[#A7C9ED]/25 blur-[90px]"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, -80, 40, 0],
          opacity: [0.4, 0.9, 0.5, 0.4],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT VIDEO SECTION */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Decorative Shapes */}

          <div className="absolute -left-7 -top-7 -z-10 h-32 w-32 rounded-full bg-[#F58232]/15" />

          <div className="absolute -bottom-12 -left-8 -z-10 h-40 w-40 rounded-full bg-[#683879]/10 blur-2xl" />

          {/* Main Video Container */}

          <div className="group relative h-[350px] overflow-hidden rounded-[30px] bg-[#683879] shadow-xl sm:h-[430px] lg:h-[490px]">
            {/* Poster Image */}

            <img
              src={POSTER_PATH}
              alt="Students learning at Cyboard School"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                videoLoaded && !videoError ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Main Video */}

            {!videoError && (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={POSTER_PATH}
                onCanPlay={() => setVideoLoaded(true)}
                onError={() => setVideoError(true)}
                className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                  videoLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                <source src={VIDEO_PATH} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            )}

            {/* Video Overlay */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#442052]/50 via-[#442052]/5 to-transparent" />

            {/* Loading Message */}

            {!videoLoaded && !videoError && (
              <div className="absolute bottom-5 left-5 z-10 rounded-full bg-black/40 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                Loading video...
              </div>
            )}

            {/* Error Message */}

            {videoError && (
              <div className="absolute bottom-5 left-5 z-10 rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md">
                Showing poster image
              </div>
            )}
          </div>

          {/* Floating Education Card */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-7 right-3 z-20 rounded-2xl bg-[#683879] p-5 text-white shadow-xl sm:right-[-20px] sm:p-7"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F58232]">
              <GraduationCap size={25} />
            </div>

            <p className="text-sm text-white/75">Education for</p>

            <h3 className="mt-1 text-2xl font-bold sm:text-3xl">
              Every Learner
            </h3>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-5 lg:pt-0"
        >
          {/* Section Heading */}

          <SectionHeading
            eyebrow="ABOUT CYBOARD SCHOOL"
            title="A New Way to"
            highlight="Experience Education"
            description="Shaping Young Minds with Excellence in Online Schooling Since 2021."
            center={false}
          />

          {/* Description */}

          <p className="mt-6 text-sm leading-8 text-slate-600 md:text-base">
            Cyboard School offers a digital learning environment designed to
            connect students, parents and educators. Through structured academic
            programs, interactive lessons and teacher guidance, students can
            enjoy a flexible and engaging educational journey.
          </p>

          {/* Highlights */}

          <div className="mt-7 space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#683879]/10 text-[#683879]">
                <Sparkles size={16} />
              </div>

              <p className="text-sm leading-7 text-slate-700">
                Engaging digital learning experiences.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F58232]/15 text-[#F58232]">
                <GraduationCap size={16} />
              </div>

              <p className="text-sm leading-7 text-slate-700">
                Teacher-guided academic learning.
              </p>
            </div>
          </div>

          {/* STATISTICS */}

          <div className="mt-9 grid grid-cols-3 gap-3 border-t border-slate-100 pt-7">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.number} className="group">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#683879]/10 text-[#683879] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#F58232] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#683879] sm:text-2xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Explore Button */}

          <a
            href="#school-programs"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#683879] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#683879]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#F58232]"
          >
            Explore Our School
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
