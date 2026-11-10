import { motion } from "motion/react";
import SectionHeading from "../components/common/SectionHeading";

import {
  MonitorPlay,
  GraduationCap,
  BrainCircuit,
  Globe2,
  Sparkles,
  BookOpenCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// FEATURES DATA
// Images from public/images/programs
// ==========================================

const features = [
  {
    id: 1,
    title: "Live Interactive Classes",
    description:
      "Experience engaging live online classes where students interact with teachers, ask questions, and learn together in real time.",
    image: "/images/programs/1.avif",
    icon: MonitorPlay,
    color: "purple",
    label: "Interactive Learning",
  },
  {
    id: 2,
    title: "Expert Teachers",
    description:
      "Learn from experienced and dedicated educators who guide students with personalized attention and effective teaching methods.",
    image: "/images/programs/2.avif",
    icon: GraduationCap,
    color: "orange",
    label: "Quality Education",
  },
  {
    id: 3,
    title: "AI-Powered Monitoring",
    description:
      "Smart learning tools help track student progress, identify learning needs, and support a more personalized educational journey.",
    image: "/images/programs/3.avif",
    icon: BrainCircuit,
    color: "purple",
    label: "Smart Technology",
  },
  {
    id: 4,
    title: "Learn From Anywhere",
    description:
      "Access quality education from anywhere with a flexible online learning experience designed for modern families.",
    image: "/images/programs/4.avif",
    icon: Globe2,
    color: "orange",
    label: "Flexible Learning",
  },
  {
    id: 5,
    title: "Holistic Development",
    description:
      "Go beyond textbooks with activities that encourage creativity, communication, confidence, and essential life skills.",
    image: "/images/programs/g.avif",
    icon: Sparkles,
    color: "purple",
    label: "Beyond Academics",
  },
  {
    id: 6,
    title: "Structured Curriculum",
    description:
      "Follow a well-organized curriculum that supports students at every stage of their academic journey.",
    image: "/images/programs/6.avif",
    icon: BookOpenCheck,
    color: "orange",
    label: "Academic Excellence",
  },
];

// ==========================================
// FEATURE CARD
// ==========================================

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  const isPurple = feature.color === "purple";

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
      className={`
        group relative flex w-full max-w-[390px]
        min-h-[465px] flex-col items-center
        justify-center overflow-hidden
        rounded-[30px] border border-white/80
        bg-white/90 px-7 py-9 text-center
        shadow-[0_10px_40px_rgba(80,50,100,0.07)]
        backdrop-blur-sm
        transition-all duration-500 ease-out
        ${
          isPurple
            ? "hover:border-[#683879] hover:bg-[#683879]"
            : "hover:border-[#F58232] hover:bg-[#F58232]"
        }
      `}
    >
      {/* Soft Decorative Circle */}

      <div
        className="
          pointer-events-none absolute -right-20 -top-20
          h-48 w-48 rounded-full bg-white
          opacity-0 transition-all duration-700
          group-hover:scale-150 group-hover:opacity-10
        "
      />

      {/* Circular Image */}

      <div className="relative z-10 mb-7 flex items-center justify-center">
        <div
          className="
            relative h-40 w-40 overflow-hidden
            rounded-full border-[7px] border-white
            bg-gray-50
            shadow-[0_10px_30px_rgba(0,0,0,0.10)]
            transition-all duration-500
            group-hover:scale-110
            sm:h-44 sm:w-44
          "
        >
          <img
            src={feature.image}
            alt={feature.title}
            loading="lazy"
            className="
              h-full w-full rounded-full
              object-cover brightness-110
              contrast-[0.96] saturate-[1.05]
              transition-all duration-700
              group-hover:scale-110
              group-hover:brightness-105
            "
          />
        </div>

        {/* Icon Badge */}

        <div
          className={`
            absolute -bottom-2 -right-2
            flex h-14 w-14 items-center justify-center
            rounded-full border-[5px] border-white
            text-white shadow-lg
            transition-all duration-500
            group-hover:rotate-12 group-hover:scale-110
            ${isPurple ? "bg-[#683879]" : "bg-[#F58232]"}
            group-hover:bg-white
          `}
        >
          <Icon
            size={23}
            strokeWidth={2.2}
            className={`
              transition-colors duration-500
              ${
                isPurple
                  ? "text-white group-hover:text-[#683879]"
                  : "text-white group-hover:text-[#F58232]"
              }
            `}
          />
        </div>
      </div>

      {/* Label */}

      <span
        className={`
          relative z-10 mb-3 inline-flex items-center
          gap-2 rounded-full px-4 py-1.5
          text-xs font-bold uppercase tracking-wider
          transition-all duration-500
          ${
            isPurple
              ? "bg-[#683879]/10 text-[#683879]"
              : "bg-[#F58232]/10 text-[#F58232]"
          }
          group-hover:bg-white/20
          group-hover:text-white
        `}
      >
        <CheckCircle2 size={14} />
        {feature.label}
      </span>

      {/* Title */}

      <h3
        className="
          relative z-10 mb-4 text-xl font-extrabold
          leading-snug text-[#25202B]
          transition-colors duration-500
          group-hover:text-white
          sm:text-2xl
        "
      >
        {feature.title}
      </h3>

      {/* Description */}

      <p
        className="
          relative z-10 mx-auto max-w-[310px]
          text-sm leading-7 text-gray-600
          transition-colors duration-500
          group-hover:text-white/90
          sm:text-[15px]
        "
      >
        {feature.description}
      </p>

      {/* Bottom Arrow */}

      <div
        className={`
          relative z-10 mt-6 flex h-10 w-10
          items-center justify-center rounded-full
          transition-all duration-500
          ${
            isPurple
              ? "bg-[#683879]/10 text-[#683879]"
              : "bg-[#F58232]/10 text-[#F58232]"
          }
          group-hover:translate-x-1
          group-hover:bg-white
          ${
            isPurple
              ? "group-hover:text-[#683879]"
              : "group-hover:text-[#F58232]"
          }
        `}
      >
        <ArrowUpRight size={21} />
      </div>
    </motion.article>
  );
}

// ==========================================
// MAIN SECTION
// ==========================================

export default function WhyCyboard() {
  return (
    <section
      id="why-cyboard"
      className="
        relative isolate overflow-hidden
        bg-gradient-to-br
        from-[#FBF8FD]
        via-[#FFFFFF]
        to-[#FFF8F1]
        px-5 py-20
        sm:px-8 sm:py-24
        lg:px-12 lg:py-28
      "
    >
      {/* Background Decorations */}

      <div
        className="
          pointer-events-none absolute -left-40 top-10
          -z-10 h-96 w-96 rounded-full
          bg-[#683879]/[0.07] blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-0
          -z-10 h-96 w-96 rounded-full
          bg-[#F58232]/[0.07] blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          -z-10 h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-white/70 blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <SectionHeading
            eyebrow="WHY CHOOSE CYBOARD"
            title="Why Cyboard Is the Right Choice for Your Child"
            description="Discover a smarter and more flexible way of learning with interactive classes, expert teachers, innovative technology, and a student-focused approach."
            centered
          />
        </motion.div>

        {/* Feature Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            mx-auto grid max-w-[1250px]
            grid-cols-1 justify-items-center
            gap-7 sm:grid-cols-2
            lg:grid-cols-3 lg:gap-8
          "
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>

        {/* Bottom Message */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p
            className="
              text-base font-medium leading-8
              text-gray-600 sm:text-lg
            "
          >
            At Cyboard School, we combine technology, creativity, and quality
            teaching to help every student learn, grow, and succeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
