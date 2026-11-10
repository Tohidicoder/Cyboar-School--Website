import { motion } from "motion/react";

import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Sparkles,
  Users,
} from "lucide-react";

// ==========================================
// TEACHERS DATA
// ==========================================

const teachers = [
  {
    name: "Sushma Rani",
    role: "Math TGT",
    experience: "13 Years+ Experience",
    image:
      "https://cyboardschool.com/wp-content/uploads/2025/12/Sushma-Rani-Photo-image.png",
    subject: "Mathematics",
  },
  {
    name: "Ritu Bhatnagar",
    role: "HOD Hindi",
    experience: "3 Years+ Experience",
    image:
      "https://cyboardschool.com/wp-content/uploads/2025/12/Ritu-Bhatnagar-Photo-image.png",
    subject: "Hindi",
  },
  {
    name: "Bushra Akhter",
    role: "SST Teacher",
    experience: "3 Years+ Experience",
    image:
      "https://cyboardschool.com/wp-content/uploads/2025/12/Bushra-Akhter-Photo-image.png",
    subject: "Social Studies",
  },
  {
    name: "Amrita Sharma",
    role: "PRT Math",
    experience: "4 Years+ Experience",
    image:
      "https://cyboardschool.com/wp-content/uploads/2025/12/Amrita-R-Sharma-Photo-image-1024x1024.png",
    subject: "Mathematics",
  },
  {
    name: "Suhani Mittal",
    role: "Hindi Faculty",
    experience: "4 Years+ Experience",
    image:
      "https://cyboardschool.com/wp-content/uploads/2025/12/Suhani-Mittal-Photo-image.png",
    subject: "Hindi",
  },
  {
    name: "Avidha Jain",
    role: "English Teacher",
    experience: "4+ Years Experience",
    image:
      "https://cyboardschool.com/wp-content/uploads/2025/12/Avidha-Jain-image-1024x1024.png",
    subject: "English",
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// TEACHING TEAM COMPONENT
// ==========================================

export default function TeachingTeam() {
  return (
    <section
      id="teaching-team"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#EAF4EF] via-[#F7FAF7] to-[#FDF4E9] py-20 sm:py-24 lg:py-28"
    >
      {/* ==================================
          BACKGROUND DECORATIONS
      ================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Mint green glow */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#B9DCCB]/45 blur-[110px]" />

        {/* Warm peach glow */}
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#F7DCC4]/40 blur-[120px]" />

        {/* Soft green glow */}
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#CDE8DB]/45 blur-[110px]" />

        {/* Decorative circles */}
        <div className="absolute right-[8%] top-20 h-28 w-28 rounded-full border border-[#43866B]/10" />

        <div className="absolute right-[11%] top-24 h-20 w-20 rounded-full border border-[#F58232]/10" />

        <div className="absolute bottom-24 left-[7%] h-32 w-32 rounded-full border border-[#43866B]/10" />

        {/* Small decorative dots */}
        <div className="absolute left-[12%] top-1/3 h-2.5 w-2.5 rounded-full bg-[#F58232]/50" />

        <div className="absolute right-[18%] bottom-1/4 h-2 w-2 rounded-full bg-[#43866B]/30" />

        {/* Decorative vertical line */}
        <div className="absolute left-[5%] top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-[#43866B]/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ==================================
            SECTION HEADING
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#43866B]/15 bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#39775D] shadow-sm backdrop-blur-sm">
            <Sparkles size={16} className="text-[#F58232]" />
            Meet Our Educators
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#263D34] sm:text-4xl lg:text-5xl">
            Inspiring Minds,
            <span className="mt-2 block bg-gradient-to-r from-[#43866B] via-[#683879] to-[#F58232] bg-clip-text text-transparent">
              Shaping Bright Futures
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64756C] sm:text-base sm:leading-8">
            Meet our passionate educators who inspire curiosity, encourage
            creativity, and help every student discover their full potential
            through meaningful learning experiences.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#43866B]" />
            <span className="h-1 w-5 rounded-full bg-[#F58232]/75" />
            <span className="h-1 w-2 rounded-full bg-[#43866B]/25" />
          </div>
        </motion.div>

        {/* ==================================
            TEACHERS GRID
        ================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8"
        >
          {teachers.map((teacher) => (
            <motion.article
              key={teacher.name}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-[25px] border border-white bg-white/95 shadow-[0_8px_30px_rgba(54,91,72,0.08)] transition-all duration-500 hover:border-[#BBDACB] hover:shadow-[0_18px_42px_rgba(54,91,72,0.15)]"
            >
              {/* Top Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-[#43866B] via-[#A6CDB8] to-[#F58232]/80" />

              {/* Image Area */}
              <div className="relative flex h-[290px] items-end justify-center overflow-hidden bg-gradient-to-br from-[#E5F1EA] via-[#F2F7F2] to-[#FFF1E4] sm:h-[305px]">
                {/* Decorative circles */}
                <div className="absolute left-5 top-5 h-20 w-20 rounded-full border border-[#43866B]/10" />

                <div className="absolute left-9 top-9 h-12 w-12 rounded-full bg-white/50" />

                <div className="absolute bottom-6 right-5 h-24 w-24 rounded-full border border-[#F58232]/15" />

                <div className="absolute right-8 top-8 h-2.5 w-2.5 rounded-full bg-[#F58232]/60" />

                <div className="absolute bottom-16 left-8 h-2 w-2 rounded-full bg-[#43866B]/30" />

                {/* Experience Badge */}
                <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white bg-white/90 px-3 py-2 text-[11px] font-bold text-[#39775D] shadow-sm backdrop-blur-sm sm:text-xs">
                  <Sparkles size={13} className="text-[#F58232]" />
                  {teacher.experience}
                </div>

                {/* Teacher Image */}
                <motion.img
                  src={teacher.image}
                  alt={teacher.name}
                  loading="lazy"
                  className="relative z-[1] h-[255px] w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.045] sm:h-[270px]"
                />

                {/* Bottom Fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-14 bg-gradient-to-t from-[#E5F1EA]/70 to-transparent" />
              </div>

              {/* Teacher Details */}
              <div className="relative px-6 pb-6 pt-5 text-center sm:px-7">
                {/* Subject */}
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#EAF4EF] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#39775D]">
                  <BookOpen size={12} />
                  {teacher.subject}
                </div>

                {/* Name */}
                <h3 className="text-xl font-extrabold tracking-tight text-[#293D33] transition-colors duration-300 group-hover:text-[#43866B] sm:text-2xl">
                  {teacher.name}
                </h3>

                {/* Role */}
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {teacher.role}
                </p>

                {/* Decorative line */}
                <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
                  <span className="h-1 w-8 rounded-full bg-[#43866B]/80" />
                  <span className="h-1 w-3 rounded-full bg-[#F58232]/60" />
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF4EF] text-[#43866B] transition-all duration-300 group-hover:bg-[#43866B] group-hover:text-white">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ==================================
            BOTTOM MESSAGE
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-[25px] border border-white/90 bg-gradient-to-r from-white/90 via-[#EDF6F0]/95 to-[#FFF3E8]/90 px-6 py-8 text-center shadow-[0_8px_30px_rgba(54,91,72,0.07)] sm:mt-16 sm:px-10 sm:py-10"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#F58232]/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#43866B] to-[#76A98D] text-white shadow-lg shadow-[#43866B]/15">
              <GraduationCap size={28} />
            </div>

            <h3 className="text-xl font-extrabold text-[#293D33] sm:text-2xl">
              Great Teachers Create Great Futures
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Our educators bring knowledge, care, and creativity into every
              online classroom, making learning meaningful and engaging.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#39775D]">
              <Users size={17} className="text-[#F58232]" />
              Dedicated to Every Learner
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
