import { motion } from "motion/react";

import {
  Clock,
  Users,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// ==========================================
// ONLINE LEARNING IMAGE
// ==========================================

const learningImage =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85";

// ==========================================
// BENEFITS DATA
// ==========================================

const benefits = [
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "A flexible learning environment helps students balance education with their daily activities.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "Students receive guidance and support to understand lessons and develop their skills.",
  },
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description:
      "Engaging lessons and digital resources make learning more interesting and enjoyable.",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "Structured lessons and academic support help students build a strong educational foundation.",
  },
  {
    icon: HeartHandshake,
    title: "Parent Involvement",
    description:
      "Parents can stay connected with their children's educational journey and learning progress.",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// BENEFITS COMPONENT
// ==========================================

export default function Benefits() {
  return (
    <section
      id="benefits"
      // className="relative isolate overflow-hidden bg-gradient-to-br from-[#FCFAFD] via-[#F8F4FA] to-[#FFF9F4] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
      // className="relative overflow-hidden bg-gradient-to-br from-[#FCFAFD] via-[#F8F4FA] to-[#FFF9F4] py-24"
      className="relative overflow-hidden bg-gradient-to-br from-[#EDE2F3] via-[#F4EAF5] to-[#FBE9DD] py-24"
    >
      {/* ==================================
          BACKGROUND DECORATIONS
      ================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#683879]/[0.07] blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F58232]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A5D3]/[0.08] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ==================================
            SECTION HEADING
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#683879]/10 bg-white/80 px-4 py-2 text-xs font-bold tracking-wider text-[#683879] shadow-sm backdrop-blur-sm">
              <Sparkles size={15} className="text-[#F58232]" />
              WHY ONLINE LEARNING?
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#25202B] sm:text-4xl lg:text-5xl">
              Education That
              <br className="hidden sm:block" />
              <span className="text-[#683879]">Opens New Possibilities</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-gray-600 md:text-base">
            Discover a smarter way to learn through flexible education, personal
            support, and engaging digital experiences.
          </p>
        </motion.div>

        {/* ==================================
            MAIN CONTENT
        ================================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* ==================================
              FEATURED IMAGE PANEL
          ================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex min-h-[540px] flex-col justify-between overflow-hidden rounded-[30px] bg-gradient-to-br from-[#754B83] via-[#683879] to-[#493052] p-7 text-white shadow-xl shadow-[#683879]/15 sm:p-10 lg:min-h-[570px]"
          >
            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#F58232]/20 blur-[75px]" />

            {/* Heading */}

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-white/75">
                <Sparkles size={16} className="text-[#F9A46B]" />
                LEARNING WITHOUT LIMITS
              </span>

              <h3 className="mb-4 mt-7 max-w-sm text-3xl font-bold leading-tight sm:text-4xl">
                Learn from Anywhere
              </h3>

              <p className="max-w-sm text-sm leading-8 text-white/75 sm:text-base">
                Students can attend classes and access learning materials from
                the comfort of their homes.
              </p>
            </div>

            {/* ==================================
                IMAGE
            ================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mx-auto my-9 w-full max-w-[370px]"
            >
              <div className="absolute inset-5 rounded-full bg-[#F58232]/20 blur-[65px]" />

              <div className="relative overflow-hidden rounded-[25px] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <img
                  src={learningImage}
                  alt="Students learning in a modern classroom"
                  loading="lazy"
                  className="h-[230px] w-full rounded-[19px] object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[260px]"
                />
              </div>

              {/* Floating label */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-2 rounded-2xl border border-white/30 bg-white px-4 py-3 text-[#683879] shadow-xl sm:-left-5"
              >
                <p className="text-xs font-bold">Your Classroom, Everywhere</p>
                <p className="mt-1 text-[10px] text-gray-500">
                  Learn · Explore · Grow
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom content */}

            <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/15 pt-6">
              <div>
                <p className="text-sm font-semibold text-white">
                  Learning without boundaries
                </p>

                <p className="mt-1 text-xs text-white/55">
                  Education wherever life takes you
                </p>
              </div>

              <motion.div
                whileHover={{
                  rotate: 45,
                  scale: 1.12,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F58232] text-white shadow-lg"
              >
                <ArrowUpRight size={23} />
              </motion.div>
            </div>
          </motion.div>

          {/* ==================================
              BENEFITS LIST
          ================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col justify-center"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  whileHover={{
                    x: 7,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative flex gap-5 overflow-hidden border-b border-[#683879]/10 py-6 first:pt-0 last:border-b-0 last:pb-0 sm:gap-6 sm:py-7"
                >
                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#683879]/10 bg-white/80 text-[#683879] shadow-sm transition-all duration-300 group-hover:border-[#683879] group-hover:bg-[#683879] group-hover:text-white sm:h-16 sm:w-16"
                  >
                    <Icon size={26} strokeWidth={1.7} />
                  </motion.div>

                  {/* Content */}

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2 text-base font-bold text-[#25202B] transition-colors duration-300 group-hover:text-[#683879] sm:text-lg">
                      {benefit.title}
                    </h3>

                    <p className="text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      {benefit.description}
                    </p>

                    {/* Orange underline */}

                    <div className="mt-3 h-[2px] w-0 rounded-full bg-[#F58232] transition-all duration-500 group-hover:w-16" />
                  </div>

                  {/* Arrow */}

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="hidden items-center text-[#F58232] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:flex"
                  >
                    <ArrowUpRight size={21} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ==================================
            BOTTOM MESSAGE
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#683879]/10 bg-white/65 px-6 py-5 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:px-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F58232]/10 text-[#F58232]">
              <CheckCircle2 size={21} />
            </div>

            <p className="text-sm font-semibold leading-6 text-[#25202B]">
              Every student deserves an opportunity to learn and grow.
            </p>
          </div>

          <span className="text-xs font-bold tracking-wider text-[#683879]">
            LEARN · GROW · SUCCEED
          </span>
        </motion.div>
      </div>
    </section>
  );
}
