// import { motion } from "motion/react";
// import { ArrowUpRight, Images } from "lucide-react";

// const galleryImages = [
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Janaki-Anand-576x1024.jpg",
//     title: "Learning Through Sports",
//     category: "Sports Activities",
//     layout: "lg:col-span-2 lg:row-span-2",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Sai-Yessica-4-b-576x1024.jpg",
//     title: "Together Against Bullying",
//     category: "Social Awareness",
//     layout: "",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/group-img-576x1024.jpg",
//     title: "Growing Together",
//     category: "School Events",
//     layout: "",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Gunjan-2c-576x1024.jpg",
//     title: "Christmas Celebration",
//     category: "Creative Activities",
//     layout: "",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Mikhael-576x1024.jpg",
//     title: "Learning Mathematics",
//     category: "Hands-on Learning",
//     layout: "",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Nylah_ig-activity-576x1024.jpg",
//     title: "Creative Paper Crafts",
//     category: "Art & Craft",
//     layout: "",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Shiv-1-576x1024.jpg",
//     title: "Learning Through Nature",
//     category: "Environmental Activities",
//     layout: "",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/zohaib-2-b-576x1024.jpg",
//     title: "Making Creative Decorations",
//     category: "Student Projects",
//     layout: "",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Anaab_ib-activity-576x1024.jpg",
//     title: "Artistic Expressions",
//     category: "Creative Learning",
//     layout: "",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Dawid-2-A-576x1024.jpg",
//     title: "Learning by Creating",
//     category: "Practical Projects",
//     layout: "",
//   },
// ];

// export default function StudentGallery() {
//   return (
//     <section
//       id="student-gallery"
//       className="relative overflow-hidden bg-[#FCF9FD] px-5 py-20 md:px-10 md:py-28 lg:px-20"
//     >
//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#683879]/10 blur-3xl" />

//       <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#F58232]/10 blur-3xl" />

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
//             <Images size={16} />
//             OUR SCHOOL GALLERY
//           </span>

//           <h2 className="text-3xl font-extrabold leading-tight text-[#25202B] sm:text-4xl lg:text-5xl">
//             Little Moments,{" "}
//             <span className="text-[#683879]">Big Achievements</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
//             Discover the artistic flair and creativity of Cyboard School
//             students through exciting projects, celebrations, sports, and
//             learning activities.
//           </p>
//         </motion.div>

//         {/* GALLERY GRID */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
//           {galleryImages.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: (index % 4) * 0.08,
//               }}
//               className={`group relative h-[320px] overflow-hidden rounded-3xl bg-[#683879]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[300px] lg:h-full ${item.layout}`}
//             >
//               {/* IMAGE */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 loading="lazy"
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* IMAGE OVERLAY */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#25202B]/85 via-[#25202B]/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

//               {/* ORANGE ACCENT */}
//               <div className="absolute left-0 top-0 h-1.5 w-0 bg-[#F58232] transition-all duration-500 group-hover:w-full" />

//               {/* IMAGE CONTENT */}
//               <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 md:p-7">
//                 <div>
//                   <span className="mb-3 inline-block rounded-full bg-[#F58232] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
//                     {item.category}
//                   </span>

//                   <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#F58232]">
//                   <ArrowUpRight size={20} />
//                 </div>
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
//           <p className="text-base font-bold text-[#683879]">
//             Every picture tells a story of creativity, confidence, and growth.
//           </p>

//           <p className="mt-2 text-sm text-gray-500">
//             Celebrating every little achievement at Cyboard School.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "motion/react";

// import { ArrowUpRight, Images, Sparkles, Camera } from "lucide-react";

// // ==========================================
// // GALLERY DATA
// // ==========================================

// const galleryImages = [
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Janaki-Anand-576x1024.jpg",
//     title: "Learning Through Sports",
//     category: "Sports Activities",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Sai-Yessica-4-b-576x1024.jpg",
//     title: "Together Against Bullying",
//     category: "Social Awareness",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/group-img-576x1024.jpg",
//     title: "Growing Together",
//     category: "School Events",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Gunjan-2c-576x1024.jpg",
//     title: "Christmas Celebration",
//     category: "Creative Activities",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Mikhael-576x1024.jpg",
//     title: "Learning Mathematics",
//     category: "Hands-on Learning",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Nylah_ig-activity-576x1024.jpg",
//     title: "Creative Paper Crafts",
//     category: "Art & Craft",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Shiv-1-576x1024.jpg",
//     title: "Learning Through Nature",
//     category: "Environmental Activities",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/zohaib-2-b-576x1024.jpg",
//     title: "Making Creative Decorations",
//     category: "Student Projects",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Anaab_ib-activity-576x1024.jpg",
//     title: "Artistic Expressions",
//     category: "Creative Learning",
//   },
//   {
//     image:
//       "https://cyboardschool.com/wp-content/uploads/2023/10/Dawid-2-A-576x1024.jpg",
//     title: "Learning by Creating",
//     category: "Practical Projects",
//   },
// ];

// // ==========================================
// // ANIMATION VARIANTS
// // ==========================================

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.09,
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
// // STUDENT GALLERY COMPONENT
// // ==========================================

// export default function StudentGallery() {
//   return (
//     <section
//       id="student-gallery"
//       className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFF5E9] via-[#FFFCF8] to-[#F3ECF7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
//     >
//       {/* ==================================
//           BACKGROUND DECORATIONS
//       ================================== */}

//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {/* Peach Glow */}
//         <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#F9D9BE]/45 blur-[120px]" />

//         {/* Lavender Glow */}
//         <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#DCC9E9]/40 blur-[120px]" />

//         {/* Warm Bottom Glow */}
//         <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#FCE5D2]/50 blur-[110px]" />

//         {/* Decorative Circles */}
//         <div className="absolute right-[8%] top-20 h-28 w-28 rounded-full border border-[#683879]/[0.08]" />

//         <div className="absolute right-[11%] top-24 h-20 w-20 rounded-full border border-[#F58232]/15" />

//         <div className="absolute bottom-20 left-[6%] h-32 w-32 rounded-full border border-[#F58232]/15" />

//         {/* Decorative Dots */}
//         <div className="absolute left-[12%] top-1/3 h-2.5 w-2.5 rounded-full bg-[#F58232]/50" />

//         <div className="absolute right-[18%] bottom-1/4 h-2 w-2 rounded-full bg-[#683879]/25" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* ==================================
//             SECTION HEADING
//         ================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
//         >
//           {/* Section Label */}
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F58232]/15 bg-white/80 px-5 py-2.5 text-sm font-bold text-[#683879] shadow-sm backdrop-blur-sm">
//             <Images size={16} className="text-[#F58232]" />
//             OUR SCHOOL GALLERY
//             <Sparkles size={15} className="text-[#F58232]" />
//           </div>

//           {/* Main Heading */}
//           <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#302638] sm:text-4xl lg:text-5xl">
//             Little Moments,
//             <span className="mt-2 block bg-gradient-to-r from-[#683879] via-[#9B659F] to-[#F58232] bg-clip-text text-transparent">
//               Big Achievements
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#746A76] sm:text-base sm:leading-8">
//             Discover the artistic flair and creativity of Cyboard School
//             students through exciting projects, celebrations, sports, and
//             learning activities.
//           </p>

//           {/* Decorative Divider */}
//           <div className="mx-auto mt-7 flex items-center justify-center gap-2">
//             <span className="h-1 w-10 rounded-full bg-[#683879]" />
//             <span className="h-1 w-5 rounded-full bg-[#F58232]/75" />
//             <span className="h-1 w-2 rounded-full bg-[#683879]/25" />
//           </div>
//         </motion.div>

//         {/* ==================================
//             GALLERY GRID
//         ================================== */}

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.08 }}
//           className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7"
//         >
//           {galleryImages.map((item, index) => (
//             <motion.article
//               key={item.title}
//               variants={cardVariants}
//               whileHover={{
//                 y: -7,
//                 transition: { duration: 0.3 },
//               }}
//               className={`group relative h-[390px] overflow-hidden rounded-[25px] border border-white/90 bg-white p-2 shadow-[0_8px_30px_rgba(75,45,85,0.08)] transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(75,45,85,0.16)] sm:h-[370px] lg:h-[390px] ${
//                 index === 8
//                   ? "lg:col-start-2"
//                   : index === 9
//                     ? "lg:col-start-3"
//                     : ""
//               }`}
//             >
//               {/* Image Container */}
//               <div className="relative h-full w-full overflow-hidden rounded-[19px] bg-gradient-to-br from-[#F7EBDD] to-[#EDE2F1]">
//                 {/* Student Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   loading="lazy"
//                   className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
//                 />

//                 {/* Dark Image Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#241B2B]/90 via-[#241B2B]/15 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100" />

//                 {/* Top Accent */}
//                 <div className="absolute left-0 top-0 h-1.5 w-0 bg-[#F58232] transition-all duration-500 group-hover:w-full" />

//                 {/* Image Number */}
//                 <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//                 {/* Image Content */}
//                 <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
//                   {/* Category */}
//                   <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#FFAD68]" />
//                     {item.category}
//                   </div>

//                   {/* Title */}
//                   <div className="flex items-end justify-between gap-3">
//                     <h3 className="max-w-[85%] text-lg font-extrabold leading-snug text-white sm:text-xl">
//                       {item.title}
//                     </h3>

//                     {/* Arrow */}
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-[#F58232] group-hover:bg-[#F58232]">
//                       <ArrowUpRight size={19} />
//                     </div>
//                   </div>

//                   {/* Bottom Accent */}
//                   <div className="mt-4 h-[2px] w-9 rounded-full bg-[#F58232] transition-all duration-500 group-hover:w-16" />
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>

//         {/* ==================================
//             BOTTOM MESSAGE
//         ================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="relative mt-14 overflow-hidden rounded-[26px] border border-white bg-gradient-to-r from-white/90 via-[#FFF7EE]/90 to-[#F5EDF8]/90 px-6 py-8 text-center shadow-[0_8px_30px_rgba(75,45,85,0.06)] sm:mt-16 sm:px-10 sm:py-10"
//         >
//           {/* Soft Background Decoration */}
//           <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#F58232]/10 blur-3xl" />

//           <div className="relative z-10">
//             {/* Icon */}
//             <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#683879] to-[#A276AE] text-white shadow-lg shadow-[#683879]/15">
//               <Camera size={26} />
//             </div>

//             {/* Heading */}
//             <h3 className="text-xl font-extrabold text-[#302638] sm:text-2xl">
//               Every Picture Tells a Story
//             </h3>

//             {/* Description */}
//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#746A76] sm:text-base">
//               Every picture captures a moment of creativity, confidence,
//               friendship, and growth. We celebrate every little achievement at
//               Cyboard School.
//             </p>

//             {/* Bottom Label */}
//             <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#683879]">
//               <Sparkles size={17} className="text-[#F58232]" />
//               Celebrating Our Students
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";

import { ArrowUpRight, Images, Sparkles, Camera } from "lucide-react";

// ==========================================
// GALLERY DATA
// ==========================================

const galleryImages = [
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/Janaki-Anand-576x1024.jpg",
    title: "Learning Through Sports",
    category: "Sports Activities",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/Sai-Yessica-4-b-576x1024.jpg",
    title: "Together Against Bullying",
    category: "Social Awareness",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/group-img-576x1024.jpg",
    title: "Growing Together",
    category: "School Events",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/Gunjan-2c-576x1024.jpg",
    title: "Christmas Celebration",
    category: "Creative Activities",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/Mikhael-576x1024.jpg",
    title: "Learning Mathematics",
    category: "Hands-on Learning",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/Nylah_ig-activity-576x1024.jpg",
    title: "Creative Paper Crafts",
    category: "Art & Craft",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/Shiv-1-576x1024.jpg",
    title: "Learning Through Nature",
    category: "Environmental Activities",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/zohaib-2-b-576x1024.jpg",
    title: "Making Creative Decorations",
    category: "Student Projects",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/Anaab_ib-activity-576x1024.jpg",
    title: "Artistic Expressions",
    category: "Creative Learning",
  },
  {
    image:
      "https://cyboardschool.com/wp-content/uploads/2023/10/Dawid-2-A-576x1024.jpg",
    title: "Learning by Creating",
    category: "Practical Projects",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
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
// STUDENT GALLERY COMPONENT
// ==========================================

export default function StudentGallery() {
  return (
    <section
      id="student-gallery"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#FCEBDD] via-[#FFF9F2] to-[#EEE4F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* ==================================
          BACKGROUND DECORATIONS
      ================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft Peach Glow */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#F9CDAA]/40 blur-[120px]" />

        {/* Soft Purple Glow */}
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#D8C0E5]/35 blur-[120px]" />

        {/* Bottom Warm Glow */}
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#F7DCC8]/45 blur-[110px]" />

        {/* Decorative Circles */}
        <div className="absolute right-[8%] top-20 h-28 w-28 rounded-full border border-[#683879]/[0.10]" />

        <div className="absolute right-[11%] top-24 h-20 w-20 rounded-full border border-[#F58232]/20" />

        <div className="absolute bottom-20 left-[6%] h-32 w-32 rounded-full border border-[#F58232]/20" />

        {/* Decorative Dots */}
        <div className="absolute left-[12%] top-1/3 h-2.5 w-2.5 rounded-full bg-[#F58232]/55" />

        <div className="absolute right-[18%] bottom-1/4 h-2 w-2 rounded-full bg-[#683879]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ==================================
            SECTION HEADING
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          {/* Section Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F58232]/20 bg-white/85 px-5 py-2.5 text-sm font-bold text-[#683879] shadow-sm backdrop-blur-sm">
            <Images size={16} className="text-[#F58232]" />
            OUR SCHOOL GALLERY
            <Sparkles size={15} className="text-[#F58232]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#302638] sm:text-4xl lg:text-5xl">
            Little Moments,
            <span className="mt-2 block bg-gradient-to-r from-[#683879] via-[#9B659F] to-[#F58232] bg-clip-text text-transparent">
              Big Achievements
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#746A76] sm:text-base sm:leading-8">
            Discover the artistic flair and creativity of Cyboard School
            students through exciting projects, celebrations, sports, and
            learning activities.
          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#683879]" />
            <span className="h-1 w-5 rounded-full bg-[#F58232]/75" />
            <span className="h-1 w-2 rounded-full bg-[#683879]/25" />
          </div>
        </motion.div>

        {/* ==================================
            GALLERY GRID
        ================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7"
        >
          {galleryImages.map((item, index) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: { duration: 0.3 },
              }}
              className={`group relative h-[390px] overflow-hidden rounded-[25px] border border-white/90 bg-white p-2 shadow-[0_8px_30px_rgba(75,45,85,0.08)] transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(75,45,85,0.16)] sm:h-[370px] lg:h-[390px] ${
                index === 8
                  ? "lg:col-start-2"
                  : index === 9
                    ? "lg:col-start-3"
                    : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[19px] bg-gradient-to-br from-[#F7EBDD] to-[#EDE2F1]">
                {/* Student Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241B2B]/85 via-[#241B2B]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1.5 w-0 bg-[#F58232] transition-all duration-500 group-hover:w-full" />

                {/* Image Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  {/* Category */}
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFAD68]" />
                    {item.category}
                  </div>

                  {/* Title With Background */}
                  <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/80 bg-[#FFF9F2]/95 p-3.5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 group-hover:bg-white">
                    <h3 className="text-sm font-extrabold leading-snug text-[#563263] sm:text-base">
                      {item.title}
                    </h3>

                    {/* Arrow */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F58232] text-white shadow-md shadow-[#F58232]/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#683879]">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-3 h-[2px] w-9 rounded-full bg-[#F58232] transition-all duration-500 group-hover:w-16" />
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
          className="relative mt-14 overflow-hidden rounded-[26px] border border-white bg-gradient-to-r from-white/90 via-[#FFF7EE]/90 to-[#F5EDF8]/90 px-6 py-8 text-center shadow-[0_8px_30px_rgba(75,45,85,0.06)] sm:mt-16 sm:px-10 sm:py-10"
        >
          {/* Soft Background Decoration */}
          <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#F58232]/10 blur-3xl" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#683879] to-[#A276AE] text-white shadow-lg shadow-[#683879]/15">
              <Camera size={26} />
            </div>

            {/* Heading */}
            <h3 className="text-xl font-extrabold text-[#302638] sm:text-2xl">
              Every Picture Tells a Story
            </h3>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#746A76] sm:text-base">
              Every picture captures a moment of creativity, confidence,
              friendship, and growth. We celebrate every little achievement at
              Cyboard School.
            </p>

            {/* Bottom Label */}
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#683879]">
              <Sparkles size={17} className="text-[#F58232]" />
              Celebrating Our Students
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
