import { motion } from "motion/react";

import {
  Users,
  BookOpen,
  Video,
  CalendarDays,
  ChartNoAxesCombined,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  BookMarked,
} from "lucide-react";

// ==========================================
// LMS FEATURES
// ==========================================

const features = [
  {
    icon: Users,
    title: "Integrated Login for Everyone",
    description:
      "A unified platform that connects students, parents, and teachers through one convenient login experience.",
  },
  {
    icon: BookOpen,
    title: "Tailored Learning Resources",
    description:
      "Access engaging digital learning materials designed to support different learning needs and levels.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "AI-Powered Monitoring",
    description:
      "Learning insights and progress monitoring help teachers and parents better understand student development.",
  },
  {
    icon: CalendarDays,
    title: "Timetable Management",
    description:
      "Keep track of class schedules, daily activities, and important academic dates in one place.",
  },
  {
    icon: Users,
    title: "Empowering Parents",
    description:
      "Parents can stay connected with their child's learning journey, assignments, schedules, and progress.",
  },
  {
    icon: BookMarked,
    title: "Comprehensive Repository",
    description:
      "A digital collection of educational resources that supports learning beyond live classroom sessions.",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// ==========================================
// LMS COMPONENT
// ==========================================

export default function LMS() {
  return (
    <section
      id="lms"
      className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div className="absolute inset-0 -z-20 bg-[#fbf7fd]" />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 8% 15%, rgba(104,56,121,0.19), transparent 38%), radial-gradient(ellipse at 90% 35%, rgba(245,130,50,0.18), transparent 34%), linear-gradient(135deg, #fbf7fd 0%, #f5edf8 48%, #fff7ef 100%)",
        }}
      />

      {/* Animated purple glow */}

      <motion.div
        animate={{
          x: [0, 45, -20, 0],
          y: [0, 35, -15, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-[#683879]/10 blur-[100px]"
      />

      {/* Animated orange glow */}

      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, -25, 35, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#F58232]/10 blur-[110px]"
      />

      {/* Decorative circles */}

      <div className="absolute right-[8%] top-24 -z-10 h-24 w-24 rounded-full border border-[#F58232]/20" />

      <div className="absolute bottom-28 left-[6%] -z-10 h-16 w-16 rounded-full border border-[#683879]/20" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ======================================
            INTRODUCTION + IMAGE
        ====================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#683879]/15 bg-white/75 px-4 py-2 text-sm font-semibold text-[#683879] shadow-sm backdrop-blur">
                <Sparkles size={16} className="text-[#F58232]" />
                CYBOARD DIGITAL LEARNING
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-7 max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight text-[#29212f] sm:text-5xl lg:text-[58px]"
            >
              Discover the
              <span className="block text-[#683879]">Cyboard LMS</span>
              <span className="mt-1 block text-[#F58232]">
                Learning Without Limits.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-8 text-[#625968] sm:text-lg"
            >
              Experience a connected digital learning environment where
              students, parents, and teachers come together. Cyboard's Learning
              Management System brings classes, learning resources, schedules,
              and progress information into one accessible platform.
            </motion.p>

            {/* Highlights */}

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#51435b] shadow-sm">
                <Video size={17} className="text-[#683879]" />
                Live Learning
              </span>

              <span className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#51435b] shadow-sm">
                <BookOpen size={17} className="text-[#F58232]" />
                Digital Resources
              </span>

              <span className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#51435b] shadow-sm">
                <Users size={17} className="text-[#683879]" />
                Parent Portal
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-4"
            >
              <div className="h-[3px] w-16 rounded-full bg-[#F58232]" />

              <p className="text-sm font-semibold tracking-wide text-[#683879]">
                A smarter way to learn and grow
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[590px]"
          >
            <div className="absolute -inset-5 rotate-3 rounded-[35px] bg-gradient-to-br from-[#683879]/25 via-[#F58232]/20 to-[#683879]/10 blur-sm" />

            <motion.div
              whileHover={{ y: -7 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-3 shadow-[0_25px_80px_rgba(72,38,83,0.16)]"
            >
              <img
                src="https://cyboardschool.com/wp-content/uploads/2022/12/lms-1.png"
                alt="Cyboard School Learning Management System"
                className="h-auto min-h-[280px] w-full rounded-[20px] object-contain"
              />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#683879] text-white">
                    <GraduationCap size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#34263b]">
                      Digital Learning
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Connected learning environment
                    </p>
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e5] text-[#F58232]">
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </motion.div>

            {/* Floating labels */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-12 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2e9f6] text-[#683879]">
                <Video size={20} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#34263b]">Live Classes</p>

                <p className="text-[11px] text-gray-500">
                  Interactive learning
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 bottom-24 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e5] text-[#F58232]">
                <BookMarked size={20} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#34263b]">
                  Digital Library
                </p>

                <p className="text-[11px] text-gray-500">Learning resources</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ======================================
            FEATURES HEADING
        ====================================== */}

        <div className="mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F58232]">
                Everything in one place
              </span>

              <h3 className="mt-4 text-3xl font-extrabold text-[#29212f] sm:text-4xl lg:text-5xl">
                Explore Our
                <span className="text-[#683879]"> LMS Features</span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#625968] sm:text-base">
              A collection of smart tools designed to make online education more
              organized, connected, and engaging.
            </p>
          </motion.div>

          {/* ======================================
              ORIGINAL FEATURES ROW DESIGN
              Enhanced hover effects only
          ====================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-x-8 md:grid-cols-2"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  className="group relative isolate flex gap-5 overflow-hidden rounded-2xl border border-transparent px-5 py-7 transition-all duration-500 hover:border-white/30 hover:bg-gradient-to-br hover:from-[#683879] hover:via-[#754486] hover:to-[#F58232] hover:shadow-[0_18px_40px_rgba(104,56,121,0.22)] sm:px-6"
                >
                  {/* Animated background light */}

                  <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full bg-white/20 opacity-0 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

                  {/* Moving light effect */}

                  <div className="pointer-events-none absolute -left-1/2 top-0 -z-10 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.12,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 12,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#683879] shadow-sm transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:shadow-none"
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </motion.div>

                  {/* Content */}

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[#302438] transition-colors duration-500 group-hover:text-white sm:text-xl">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-[#706777] transition-colors duration-500 group-hover:text-white/85">
                      {feature.description}
                    </p>

                    {/* Animated underline */}

                    <div className="mt-4 h-[2px] w-9 rounded-full bg-[#F58232] transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
                  </div>

                  {/* Arrow */}

                  <motion.div
                    whileHover={{
                      x: 5,
                      y: -5,
                    }}
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 text-[#683879] transition-all duration-500 group-hover:bg-white/20 group-hover:text-white"
                  >
                    <ArrowUpRight size={19} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom decorative line */}

          <div className="mt-8 h-[2px] w-full rounded-full bg-gradient-to-r from-[#683879]/40 via-[#F58232]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
