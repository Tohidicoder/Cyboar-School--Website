// import { motion } from "motion/react";
// import { Star, Quote, ArrowUpRight } from "lucide-react";

// const testimonials = [
//   {
//     name: "Hashmat Azim",
//     student: "Parent of Dawid Azim",
//     grade: "Class 3A",
//     initial: "H",
//     review:
//       "Hashmat shares that Dawid has enjoyed learning at Cyboard so much that he continued from Grade One into higher classes. The teachers make learning enjoyable and connect with children quickly.",
//   },
//   {
//     name: "Daniel Emeka Echesirim",
//     student: "Parent of Promise & Panna",
//     grade: "Classes 6A & 3B",
//     initial: "D",
//     review:
//       "Daniel highlights the positive progress of his children and appreciates how Cyboard has supported their education and overall well-being.",
//   },
//   {
//     name: "Pavani Ranga",
//     student: "Parent of Lakshmi Pranav Thadi",
//     grade: "Class 1B",
//     initial: "P",
//     review:
//       "Pavani appreciates the teachers' communication and individual attention. She especially values the engaging teaching approach and the quality of education provided.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="relative overflow-hidden bg-[#FCF9FD] px-5 py-20 md:px-10 md:py-28 lg:px-20">
//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#683879]/10 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#F58232]/10 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* SECTION HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto mb-16 max-w-3xl text-center"
//         >
//           <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#683879]/10 px-5 py-2 text-sm font-bold text-[#683879]">
//             <span className="h-2 w-2 rounded-full bg-[#F58232]" />
//             PARENTS' TESTIMONIALS
//           </span>

//           <h2 className="mb-5 text-3xl font-extrabold leading-tight text-[#25202B] sm:text-4xl lg:text-5xl">
//             Happy Parents,{" "}
//             <span className="text-[#683879]">Happy Students</span>
//           </h2>

//           <p className="mx-auto max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
//             Discover what families say about their journey with Cyboard School
//             and how online education is making a difference in their children's
//             lives.
//           </p>
//         </motion.div>

//         {/* TESTIMONIAL CARDS */}
//         <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.55,
//                 delay: index * 0.12,
//               }}
//               className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#683879]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#683879]/25 hover:shadow-xl md:p-8"
//             >
//               {/* TOP ACCENT */}
//               <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#F58232] transition-transform duration-500 group-hover:scale-x-100" />

//               {/* QUOTE ICON */}
//               <div className="mb-6 flex items-center justify-between">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#683879]/10 text-[#683879] transition-all duration-300 group-hover:bg-[#683879] group-hover:text-white">
//                   <Quote size={27} fill="currentColor" />
//                 </div>

//                 <span className="text-sm font-bold tracking-widest text-[#683879]/20">
//                   0{index + 1}
//                 </span>
//               </div>

//               {/* STARS */}
//               <div className="mb-5 flex items-center gap-1 text-[#F58232]">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star
//                     key={i}
//                     size={17}
//                     fill="currentColor"
//                     strokeWidth={1.5}
//                   />
//                 ))}
//               </div>

//               {/* REVIEW */}
//               <p className="mb-8 flex-1 text-sm leading-8 text-gray-600">
//                 {item.review}
//               </p>

//               {/* PARENT INFORMATION */}
//               <div className="flex items-center gap-4 border-t border-[#683879]/10 pt-6">
//                 {/* AVATAR */}
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#683879] text-lg font-bold text-white ring-4 ring-[#683879]/10">
//                   {item.initial}
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-sm font-bold text-[#25202B] transition-colors group-hover:text-[#683879]">
//                     {item.name}
//                   </h3>

//                   <p className="mt-1 text-xs leading-5 text-gray-500">
//                     {item.student}
//                   </p>

//                   <span className="mt-1 inline-block rounded-full bg-[#F58232]/10 px-3 py-1 text-[10px] font-bold text-[#F58232]">
//                     {item.grade}
//                   </span>
//                 </div>

//                 <ArrowUpRight
//                   size={20}
//                   className="shrink-0 text-[#683879]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F58232]"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* BOTTOM MESSAGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-14 text-center"
//         >
//           <p className="text-sm font-medium text-gray-600">
//             Every child's success begins with a supportive learning environment.
//           </p>

//           <p className="mt-2 text-base font-bold text-[#683879]">
//             Thank you for being part of the Cyboard family!
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "motion/react";

// import { Star, Quote, ArrowUpRight, Heart, MessageCircle } from "lucide-react";

// // ==========================================
// // TESTIMONIAL DATA
// // ==========================================

// const testimonials = [
//   {
//     name: "Hashmat Azim",
//     student: "Parent of Dawid Azim",
//     grade: "Class 3A",
//     initial: "H",
//     review:
//       "Hashmat shares that Dawid has enjoyed learning at Cyboard so much that he continued from Grade One into higher classes. The teachers make learning enjoyable and connect with children quickly.",
//   },
//   {
//     name: "Daniel Emeka Echesirim",
//     student: "Parent of Promise & Panna",
//     grade: "Classes 6A & 3B",
//     initial: "D",
//     review:
//       "Daniel highlights the positive progress of his children and appreciates how Cyboard has supported their education and overall well-being.",
//   },
//   {
//     name: "Pavani Ranga",
//     student: "Parent of Lakshmi Pranav Thadi",
//     grade: "Class 1B",
//     initial: "P",
//     review:
//       "Pavani appreciates the teachers' communication and individual attention. She especially values the engaging teaching approach and the quality of education provided.",
//   },
// ];

// // ==========================================
// // ANIMATION VARIANTS
// // ==========================================

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// // ==========================================
// // TESTIMONIALS COMPONENT
// // ==========================================

// export default function Testimonials() {
//   return (
//     <section
//       id="testimonials"
//       className="relative isolate overflow-hidden bg-[#FCF9FD] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
//     >
//       {/* ==================================
//           BACKGROUND DECORATIONS
//       ================================== */}

//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#683879]/10 blur-[100px]" />

//         <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F58232]/10 blur-[110px]" />

//         <div className="absolute right-[12%] top-16 h-24 w-24 rounded-full border border-[#683879]/[0.07]" />

//         <div className="absolute bottom-24 left-[8%] h-16 w-16 rounded-full border border-[#F58232]/15" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* ==================================
//             SECTION HEADING
//         ================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
//         >
//           {/* Section Badge */}
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#683879]/10 bg-white/80 px-5 py-2.5 text-sm font-bold text-[#683879] shadow-sm backdrop-blur-sm">
//             <Heart size={16} className="fill-[#F58232] text-[#F58232]" />
//             PARENTS' TESTIMONIALS
//           </div>

//           {/* Main Heading */}
//           <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#25202B] sm:text-4xl lg:text-5xl">
//             Happy Parents,
//             <span className="mt-2 block bg-gradient-to-r from-[#683879] via-[#875394] to-[#F58232] bg-clip-text text-transparent">
//               Happy Students
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
//             Discover what families say about their journey with Cyboard School
//             and how online education is making a difference in their children's
//             lives.
//           </p>

//           {/* Decorative Divider */}
//           <div className="mx-auto mt-7 flex items-center justify-center gap-2">
//             <span className="h-1 w-10 rounded-full bg-[#683879]" />
//             <span className="h-1 w-5 rounded-full bg-[#F58232]" />
//             <span className="h-1 w-2 rounded-full bg-[#683879]/25" />
//           </div>
//         </motion.div>

//         {/* ==================================
//             TESTIMONIAL CARDS
//         ================================== */}

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
//         >
//           {testimonials.map((item) => (
//             <motion.article
//               key={item.name}
//               variants={cardVariants}
//               whileHover={{
//                 y: -7,
//                 transition: { duration: 0.3 },
//               }}
//               className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-[#683879]/10 bg-white p-6 shadow-[0_8px_30px_rgba(70,40,80,0.05)] transition-all duration-300 hover:border-[#683879]/20 hover:shadow-[0_18px_45px_rgba(70,40,80,0.11)] sm:p-7 lg:p-8"
//             >
//               {/* Top Accent */}
//               <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#683879] via-[#A276AE] to-[#F58232] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

//               {/* Card Header */}
//               <div className="mb-7 flex items-center justify-between">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#683879]/[0.08] text-[#683879] transition-all duration-300 group-hover:bg-[#683879] group-hover:text-white">
//                   <Quote size={23} fill="currentColor" />
//                 </div>

//                 {/* Rating */}
//                 <div className="flex items-center gap-1 rounded-full bg-[#FFF7ED] px-3 py-2">
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <Star
//                       key={index}
//                       size={14}
//                       fill="currentColor"
//                       strokeWidth={1.5}
//                       className="text-[#F58232]"
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Review */}
//               <div className="relative mb-8 flex-1">
//                 <p className="text-[14px] leading-[1.9] text-[#6F6874] sm:text-[15px]">
//                   {item.review}
//                 </p>
//               </div>

//               {/* Parent Information */}
//               <div className="mt-auto border-t border-[#683879]/10 pt-6">
//                 <div className="flex items-center gap-4">
//                   {/* Avatar */}
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#683879] to-[#9666A4] text-xl font-extrabold text-white shadow-md shadow-[#683879]/15 transition-transform duration-300 group-hover:rotate-3">
//                     {item.initial}
//                   </div>

//                   {/* Details */}
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-sm font-extrabold text-[#302638] transition-colors duration-300 group-hover:text-[#683879] sm:text-base">
//                       {item.name}
//                     </h3>

//                     <p className="mt-1 text-xs leading-5 text-[#89818E]">
//                       {item.student}
//                     </p>

//                     <span className="mt-2 inline-flex rounded-full bg-[#F58232]/10 px-3 py-1 text-[10px] font-bold text-[#D66A20]">
//                       {item.grade}
//                     </span>
//                   </div>

//                   {/* Arrow */}
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#683879]/10 text-[#683879]/50 transition-all duration-300 group-hover:border-[#F58232] group-hover:bg-[#F58232] group-hover:text-white">
//                     <ArrowUpRight size={18} />
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>

//         {/* ==================================
//             BOTTOM MESSAGE
//         ================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="relative mt-14 overflow-hidden rounded-[26px] border border-white bg-white/75 px-6 py-8 text-center shadow-[0_8px_30px_rgba(70,40,80,0.05)] backdrop-blur-sm sm:mt-16 sm:px-10 sm:py-9"
//         >
//           {/* Decoration */}
//           <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-[#F58232]/10 blur-3xl" />

//           <div className="relative z-10">
//             <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F58232]/10 text-[#F58232]">
//               <MessageCircle size={23} />
//             </div>

//             <p className="text-sm font-medium leading-7 text-[#746A76] sm:text-base">
//               Every child's success begins with a supportive learning
//               environment.
//             </p>

//             <p className="mt-2 text-base font-extrabold text-[#683879] sm:text-lg">
//               Thank you for being part of the Cyboard family!
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";

import { Star, Quote, ArrowUpRight, Heart } from "lucide-react";

// ==========================================
// TESTIMONIAL DATA
// ==========================================

const testimonials = [
  {
    name: "Hashmat Azim",
    student: "Parent of Dawid Azim",
    grade: "Class 3A",
    initial: "H",
    review:
      "Hashmat shares that Dawid has enjoyed learning at Cyboard so much that he continued from Grade One into higher classes. The teachers make learning enjoyable and connect with children quickly.",
  },
  {
    name: "Daniel Emeka Echesirim",
    student: "Parent of Promise & Panna",
    grade: "Classes 6A & 3B",
    initial: "D",
    review:
      "Daniel highlights the positive progress of his children and appreciates how Cyboard has supported their education and overall well-being.",
  },
  {
    name: "Pavani Ranga",
    student: "Parent of Lakshmi Pranav Thadi",
    grade: "Class 1B",
    initial: "P",
    review:
      "Pavani appreciates the teachers' communication and individual attention. She especially values the engaging teaching approach and the quality of education provided.",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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
// TESTIMONIALS COMPONENT
// ==========================================

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#FCF9FD] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* ==================================
          BACKGROUND DECORATIONS
      ================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#683879]/10 blur-[100px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F58232]/10 blur-[110px]" />

        <div className="absolute right-[12%] top-16 h-24 w-24 rounded-full border border-[#683879]/[0.07]" />

        <div className="absolute bottom-24 left-[8%] h-16 w-16 rounded-full border border-[#F58232]/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
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
          {/* Section Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#683879]/10 bg-white/80 px-5 py-2.5 text-sm font-bold text-[#683879] shadow-sm backdrop-blur-sm">
            <Heart size={16} className="fill-[#F58232] text-[#F58232]" />
            PARENTS' TESTIMONIALS
          </div>

          {/* Main Heading */}

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#25202B] sm:text-4xl lg:text-5xl">
            Happy Parents,
            <span className="mt-2 block bg-gradient-to-r from-[#683879] via-[#875394] to-[#F58232] bg-clip-text text-transparent">
              Happy Students
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Discover what families say about their journey with Cyboard School
            and how online education is making a difference in their children's
            lives.
          </p>

          {/* Decorative Divider */}

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#683879]" />
            <span className="h-1 w-5 rounded-full bg-[#F58232]" />
            <span className="h-1 w-2 rounded-full bg-[#683879]/25" />
          </div>
        </motion.div>

        {/* ==================================
            TESTIMONIAL CARDS
        ================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: { duration: 0.3 },
              }}
              className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-[#683879]/10 bg-white p-6 shadow-[0_8px_30px_rgba(70,40,80,0.05)] transition-all duration-300 hover:border-[#683879]/20 hover:shadow-[0_18px_45px_rgba(70,40,80,0.11)] sm:p-7 lg:p-8"
            >
              {/* Top Accent */}

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#683879] via-[#A276AE] to-[#F58232] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card Header */}

              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#683879]/[0.08] text-[#683879] transition-all duration-300 group-hover:bg-[#683879] group-hover:text-white">
                  <Quote size={23} fill="currentColor" />
                </div>

                {/* Rating */}

                <div className="flex items-center gap-1 rounded-full bg-[#FFF7ED] px-3 py-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill="currentColor"
                      strokeWidth={1.5}
                      className="text-[#F58232]"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}

              <div className="relative mb-8 flex-1">
                <p className="text-[14px] leading-[1.9] text-[#6F6874] sm:text-[15px]">
                  {item.review}
                </p>
              </div>

              {/* Parent Information */}

              <div className="mt-auto border-t border-[#683879]/10 pt-6">
                <div className="flex items-center gap-4">
                  {/* Avatar */}

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#683879] to-[#9666A4] text-xl font-extrabold text-white shadow-md shadow-[#683879]/15 transition-transform duration-300 group-hover:rotate-3">
                    {item.initial}
                  </div>

                  {/* Details */}

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-extrabold text-[#302638] transition-colors duration-300 group-hover:text-[#683879] sm:text-base">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#89818E]">
                      {item.student}
                    </p>

                    <span className="mt-2 inline-flex rounded-full bg-[#F58232]/10 px-3 py-1 text-[10px] font-bold text-[#D66A20]">
                      {item.grade}
                    </span>
                  </div>

                  {/* Arrow */}

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#683879]/10 text-[#683879]/50 transition-all duration-300 group-hover:border-[#F58232] group-hover:bg-[#F58232] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
