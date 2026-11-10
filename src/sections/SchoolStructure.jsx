import { motion } from "motion/react";

import {
  Baby,
  BookOpen,
  Compass,
  GraduationCap,
  Award,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
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
// SCHOOL PROGRAMS
// ==========================================

const programs = [
  {
    icon: Baby,
    title: "Pre-Primary",
    subtitle: "Early Years Foundation",
    grades: "Nursery – Kindergarten",
    image: "/images/programs/1.jpeg",
    description:
      "A joyful beginning where young learners explore, play, build confidence, and develop essential early learning skills.",
    color: "purple",
  },
  {
    icon: BookOpen,
    title: "Primary School",
    subtitle: "Building Strong Foundations",
    grades: "Grades 1 – 5",
    image: "/images/programs/2.jpeg",
    description:
      "Students develop essential knowledge, creativity, communication, and problem-solving skills through engaging lessons.",
    color: "orange",
  },
  {
    icon: Compass,
    title: "Middle School",
    subtitle: "Discovering New Possibilities",
    grades: "Grades 6 – 8",
    image: "/images/programs/3.jpeg",
    description:
      "Learners strengthen their academic abilities, explore new interests, and become more independent thinkers.",
    color: "purple",
  },
  {
    icon: GraduationCap,
    title: "High School",
    subtitle: "Preparing for the Future",
    grades: "Grades 9 – 10",
    image: "/images/programs/4.jpeg",
    description:
      "A focused academic journey that develops subject knowledge, critical thinking, and confidence for future success.",
    color: "orange",
  },
  {
    icon: Award,
    title: "Senior Secondary",
    subtitle: "Achieving Academic Excellence",
    grades: "Grades 11 – 12",
    image: "/images/programs/5.jpeg",
    description:
      "Students prepare for higher education and future careers through advanced learning and academic guidance.",
    color: "purple",
  },
];

// ==========================================
// PROGRAM CARD
// ==========================================

function ProgramCard({ program }) {
  const Icon = program.icon;
  const isOrange = program.color === "orange";

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="group flex h-full w-full flex-col overflow-hidden rounded-[26px] border border-[#EAE3EF] bg-white shadow-[0_8px_30px_rgba(65,42,79,0.06)] transition-all duration-300 hover:border-[#D7C3E1] hover:shadow-[0_20px_45px_rgba(65,42,79,0.12)]"
    >
      {/* IMAGE */}
      <div className="relative h-[220px] shrink-0 overflow-hidden bg-[#F3EEF6]">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Soft image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24172F]/35 via-transparent to-transparent" />

        {/* ICON */}
        <div
          className={`absolute bottom-4 left-5 flex h-[58px] w-[58px] items-center justify-center rounded-2xl border-[4px] border-white shadow-lg ${
            isOrange ? "bg-[#F58232] text-white" : "bg-[#683879] text-white"
          }`}
        >
          <Icon size={27} strokeWidth={1.8} />
        </div>

        {/* GRADE BADGE */}
        <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/95 px-4 py-2 shadow-sm backdrop-blur-md">
          <span className="text-[11px] font-bold tracking-wide text-[#683879]">
            {program.grades}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-7 sm:px-7">
        <div className="mb-3 flex items-center gap-2">
          <span
            className={`h-[2px] w-7 rounded-full ${
              isOrange ? "bg-[#F58232]" : "bg-[#683879]"
            }`}
          />

          <span
            className={`text-[11px] font-bold uppercase tracking-[1.8px] ${
              isOrange ? "text-[#E7792D]" : "text-[#683879]"
            }`}
          >
            {program.subtitle}
          </span>
        </div>

        <h3 className="mb-3 text-[22px] font-extrabold leading-tight text-[#30213A] transition-colors duration-300 group-hover:text-[#683879]">
          {program.title}
        </h3>

        <p className="flex-1 text-[14px] leading-[1.85] text-[#77717D]">
          {program.description}
        </p>

        {/* BOTTOM LINK */}
        <a
          href="#admissions"
          className={`mt-6 flex w-fit items-center gap-2 border-b pb-1 text-[13px] font-bold transition-all duration-300 ${
            isOrange
              ? "border-[#F58232]/40 text-[#E7792D] hover:gap-3 hover:border-[#F58232]"
              : "border-[#683879]/30 text-[#683879] hover:gap-3 hover:border-[#683879]"
          }`}
        >
          Explore Program
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* BOTTOM ACCENT */}
      <div
        className={`h-[4px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
          isOrange ? "bg-[#F58232]" : "bg-[#683879]"
        }`}
      />
    </motion.article>
  );
}

// ==========================================
// SCHOOL STRUCTURE SECTION
// ==========================================

export default function SchoolStructure() {
  return (
    // <section
    //   id="school-structure"
    //   className="relative isolate overflow-hidden bg-gradient-to-br from-[#F0E7F5] via-[#F7EFF8] to-[#FCEBDD] py-24 sm:py-28"
    // >
    <section
      id="school-structure"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#DCC9E9] via-[#EADCF0] via-50% to-[#F8D9C2] py-24 sm:py-28"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-[350px] w-[350px] rounded-full bg-[#683879]/[0.07] blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-[350px] w-[350px] rounded-full bg-[#F58232]/[0.08] blur-[110px]" />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* BACKGROUND DECORATIONS */}

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-[760px] text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#683879]/10 bg-white/80 px-5 py-2.5 shadow-sm">
            <Sparkles size={15} className="text-[#F58232]" />

            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#683879]">
              Our Academic Programs
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.2] tracking-tight text-[#30213A] sm:text-4xl md:text-[48px]">
            A Learning Journey For
            <span className="mt-2 block text-[#683879]">Every Stage</span>
          </h2>

          {/* DECORATIVE UNDERLINE */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-[3px] w-12 rounded-full bg-[#683879]" />
            <span className="h-[7px] w-[7px] rotate-45 rounded-[1px] bg-[#F58232]" />
            <span className="h-[3px] w-12 rounded-full bg-[#F58232]" />
          </div>

          <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-[1.9] text-[#77717D] sm:text-base">
            From the first steps of discovery to advanced academic preparation,
            we provide a supportive learning experience for every stage of your
            child's educational journey.
          </p>
        </motion.div>

        {/* PROGRAM CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-6 lg:gap-7"
        >
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`flex min-w-0 ${
                index < 3
                  ? "lg:col-span-2"
                  : index === 3
                    ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-2 lg:col-start-2 lg:w-full"
                    : "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-2 lg:col-start-4 lg:w-full"
              }`}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </motion.div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-semibold tracking-wide text-[#817687]">
            Growing Together,
            <span className="ml-1 text-[#683879]">Learning Forever.</span>
          </p>
        </motion.div>
      </div>
      {/* </div> */}
    </section>
  );
}
