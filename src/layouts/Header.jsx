// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "motion/react";

// import {
//   Menu,
//   X,
//   ChevronDown,
//   ArrowUpRight,
//   GraduationCap,
// } from "lucide-react";

// // ==========================================
// // NAVIGATION ITEMS
// // ==========================================

// const navigation = [
//   {
//     label: "Home",
//     to: "/",
//   },
//   {
//     label: "About Us",
//     children: [
//       { label: "Introduction", to: "/#introduction" },
//       { label: "Why Cyboard", to: "/#why-cyboard" },
//       { label: "Our Benefits", to: "/#benefits" },
//     ],
//   },
//   {
//     label: "Academics",
//     children: [
//       { label: "Pre-Primary", to: "/#school-programs" },
//       { label: "Primary School", to: "/#school-programs" },
//       { label: "Middle School", to: "/#school-programs" },
//       { label: "High School", to: "/#school-programs" },
//       { label: "Senior Secondary", to: "/#school-programs" },
//     ],
//   },
//   {
//     label: "Learning",
//     children: [
//       { label: "Cyboard LMS", to: "/#lms" },
//       { label: "Teaching Team", to: "/#teaching-team" },
//       { label: "Student Gallery", to: "/#student-gallery" },
//     ],
//   },
//   {
//     label: "Admissions",
//     to: "/#admissions",
//   },
//   {
//     label: "News & Media",
//     children: [
//       { label: "Blogs", to: "/blogs" },
//       { label: "Awards", to: "/awards" },
//       { label: "In the News", to: "/news" },
//     ],
//   },
//   {
//     label: "Contact",
//     to: "/#contact",
//   },
// ];

// // ==========================================
// // ANIMATION VARIANTS
// // ==========================================

// const dropdownVariants = {
//   hidden: {
//     opacity: 0,
//     y: 12,
//     scale: 0.97,
//     transition: {
//       duration: 0.18,
//     },
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.24,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const mobileMenuVariants = {
//   hidden: {
//     opacity: 0,
//     height: 0,
//   },
//   visible: {
//     opacity: 1,
//     height: "auto",
//     transition: {
//       duration: 0.3,
//       ease: "easeOut",
//       staggerChildren: 0.045,
//     },
//   },
//   exit: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       duration: 0.22,
//     },
//   },
// };

// const mobileItemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 8,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.22,
//     },
//   },
// };

// // ==========================================
// // HEADER COMPONENT
// // ==========================================

// export default function Header() {
//   const location = useLocation();

//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   // ========================================
//   // HANDLE HASH NAVIGATION
//   // ========================================

//   useEffect(() => {
//     if (!location.hash) return;

//     const sectionId = location.hash.slice(1);

//     let firstFrame;
//     let secondFrame;

//     firstFrame = requestAnimationFrame(() => {
//       secondFrame = requestAnimationFrame(() => {
//         const section = document.getElementById(sectionId);

//         if (section) {
//           section.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       });
//     });

//     return () => {
//       cancelAnimationFrame(firstFrame);

//       if (secondFrame) {
//         cancelAnimationFrame(secondFrame);
//       }
//     };
//   }, [location.pathname, location.hash]);

//   // ========================================
//   // CLOSE MOBILE MENU AFTER NAVIGATION
//   // ========================================

//   useEffect(() => {
//     setMobileOpen(false);
//     setMobileDropdown(null);
//   }, [location.pathname, location.hash]);

//   // ========================================
//   // NAVIGATION LINK
//   // ========================================

//   function NavigationLink({ item, mobile = false }) {
//     const isActive =
//       item.to === "/" && location.pathname === "/" && !location.hash;

//     return (
//       <Link
//         to={item.to}
//         onClick={() => {
//           if (mobile) {
//             setMobileOpen(false);
//             setMobileDropdown(null);
//           }
//         }}
//         className={`
//           relative inline-flex items-center
//           font-serif font-semibold tracking-wide
//           transition-colors duration-300

//           ${
//             mobile
//               ? "w-full py-4 text-[15px]"
//               : "h-[78px] py-2 text-[14px] xl:text-[15px]"
//           }

//           ${isActive ? "text-[#683879]" : "text-[#51465A] hover:text-[#683879]"}
//         `}
//       >
//         {item.label}

//         {!mobile && (
//           <motion.span
//             className="absolute bottom-[17px] left-0 h-[2px] w-full origin-left rounded-full bg-[#F58232]"
//             initial={{ scaleX: 0 }}
//             whileHover={{ scaleX: 1 }}
//             transition={{ duration: 0.25 }}
//           />
//         )}
//       </Link>
//     );
//   }

//   // ========================================
//   // HEADER
//   // ========================================

//   return (
//     <header className="sticky top-0 z-50 w-full">
//       {/* MAIN NAVBAR */}

//       <div className="relative border-b border-[#683879]/10 bg-white/95 shadow-[0_4px_25px_rgba(65,35,80,0.07)] backdrop-blur-xl">
//         {/* SUBTLE BACKGROUND DECORATION */}

//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <div className="absolute -left-24 -top-28 h-56 w-56 rounded-full bg-[#683879]/[0.045] blur-3xl" />

//           <div className="absolute -right-20 -bottom-24 h-52 w-52 rounded-full bg-[#F58232]/[0.045] blur-3xl" />
//         </div>

//         {/* NAVBAR CONTENT */}

//         <div className="relative mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:min-h-[82px] lg:px-10">
//           {/* LOGO */}

//           <Link
//             to="/"
//             aria-label="Cyboard School Home"
//             className="relative z-10 flex shrink-0 items-center"
//           >
//             <motion.img
//               src="/images/logo-cropped.jpg"
//               alt="Cyboard School"
//               className="h-[47px] w-auto object-contain sm:h-[53px]"
//               whileHover={{ scale: 1.035 }}
//               transition={{ duration: 0.25 }}
//             />
//           </Link>

//           {/* DESKTOP NAVIGATION */}

//           <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
//             {navigation.map((item) => (
//               <div key={item.label} className="group relative">
//                 {/* MAIN MENU ITEM */}

//                 {item.children ? (
//                   <button
//                     type="button"
//                     aria-haspopup="true"
//                     className="
//                       flex h-[78px] items-center gap-1.5
//                       font-serif text-[14px] font-semibold
//                       tracking-wide text-[#51465A]
//                       transition-colors duration-300
//                       hover:text-[#683879]
//                       xl:text-[15px]
//                     "
//                   >
//                     {item.label}

//                     <ChevronDown
//                       size={15}
//                       strokeWidth={2}
//                       className="
//                         text-[#F58232]
//                         transition-transform duration-300
//                         group-hover:rotate-180
//                         group-focus-within:rotate-180
//                       "
//                     />

//                     {/* HOVER UNDERLINE */}

//                     <span
//                       className="
//                       absolute bottom-[17px] left-0
//                       h-[2px] w-0 rounded-full
//                       bg-[#F58232]
//                       transition-all duration-300
//                       group-hover:w-full
//                       group-focus-within:w-full
//                     "
//                     />
//                   </button>
//                 ) : (
//                   <NavigationLink item={item} />
//                 )}

//                 {/* DESKTOP DROPDOWN */}

//                 {item.children && (
//                   <div
//                     className="
//                       invisible absolute left-0 top-full z-50
//                       w-[250px] translate-y-3
//                       rounded-2xl border border-[#683879]/10
//                       bg-white p-2
//                       opacity-0 shadow-[0_16px_45px_rgba(45,20,55,0.13)]
//                       transition-all duration-300

//                       group-hover:visible
//                       group-hover:translate-y-0
//                       group-hover:opacity-100

//                       group-focus-within:visible
//                       group-focus-within:translate-y-0
//                       group-focus-within:opacity-100
//                     "
//                   >
//                     {/* DROPDOWN TOP DESIGN */}

//                     <div className="flex items-center gap-2 px-3 pb-2 pt-3">
//                       <span className="h-[3px] w-8 rounded-full bg-[#F58232]" />
//                       <span className="h-[3px] w-4 rounded-full bg-[#683879]/25" />
//                     </div>

//                     {/* DROPDOWN ITEMS */}

//                     {item.children.map((child, index) => (
//                       <Link
//                         key={child.label}
//                         to={child.to}
//                         className="
//                           group/link flex items-center
//                           justify-between gap-3
//                           rounded-xl px-4 py-3

//                           font-serif text-[13px] font-medium
//                           text-[#51465A]

//                           transition-all duration-200

//                           hover:bg-[#F8F3FA]
//                           hover:pl-5
//                           hover:text-[#683879]

//                           focus-visible:bg-[#F8F3FA]
//                           focus-visible:outline-none
//                         "
//                       >
//                         <span>{child.label}</span>

//                         <ArrowUpRight
//                           size={15}
//                           className="
//                             shrink-0 text-[#F58232]
//                             opacity-0
//                             transition-all duration-200
//                             group-hover/link:translate-x-0.5
//                             group-hover/link:-translate-y-0.5
//                             group-hover/link:opacity-100
//                           "
//                         />
//                       </Link>
//                     ))}

//                     {/* DROPDOWN BOTTOM */}

//                     <div className="mx-3 mt-2 h-px bg-[#683879]/10" />

//                     <div className="px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A69AAE]">
//                       Cyboard School
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* APPLY NOW BUTTON */}

//           <div className="hidden shrink-0 lg:block">
//             <Link
//               to="/#admissions"
//               className="
//                 group inline-flex items-center gap-2
//                 rounded-full bg-[#F58232]
//                 px-5 py-3

//                 font-serif text-[13px] font-bold
//                 tracking-wide text-white

//                 shadow-[0_5px_16px_rgba(245,130,50,0.20)]

//                 transition-all duration-300

//                 hover:-translate-y-1
//                 hover:bg-[#E87325]
//                 hover:shadow-[0_9px_22px_rgba(245,130,50,0.30)]

//                 xl:px-6 xl:text-[14px]
//               "
//             >
//               Apply Now
//               <ArrowUpRight
//                 size={16}
//                 className="
//                   transition-transform duration-300
//                   group-hover:translate-x-0.5
//                   group-hover:-translate-y-0.5
//                 "
//               />
//             </Link>
//           </div>

//           {/* MOBILE MENU BUTTON */}

//           <button
//             type="button"
//             onClick={() => {
//               setMobileOpen((previous) => !previous);
//               setMobileDropdown(null);
//             }}
//             aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
//             aria-expanded={mobileOpen}
//             className="
//               flex h-10 w-10 items-center justify-center
//               rounded-xl border border-[#683879]/15
//               bg-white text-[#683879]
//               shadow-sm

//               transition-all duration-300

//               hover:border-[#683879]
//               hover:bg-[#683879]
//               hover:text-white

//               lg:hidden
//             "
//           >
//             <AnimatePresence mode="wait" initial={false}>
//               <motion.span
//                 key={mobileOpen ? "close" : "open"}
//                 initial={{ opacity: 0, rotate: -70, scale: 0.7 }}
//                 animate={{ opacity: 1, rotate: 0, scale: 1 }}
//                 exit={{ opacity: 0, rotate: 70, scale: 0.7 }}
//                 transition={{ duration: 0.18 }}
//               >
//                 {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//               </motion.span>
//             </AnimatePresence>
//           </button>
//         </div>

//         {/* BRAND BOTTOM LINE */}

//         <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#683879]/[0.06]">
//           <motion.div
//             className="h-full w-1/4 rounded-r-full bg-gradient-to-r from-[#F58232] to-[#683879]"
//             animate={{ x: ["0%", "300%", "0%"] }}
//             transition={{
//               duration: 9,
//               ease: "easeInOut",
//               repeat: Infinity,
//             }}
//           />
//         </div>
//       </div>

//       {/* =====================================
//           MOBILE NAVIGATION
//       ====================================== */}

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             variants={mobileMenuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="
//               absolute left-0 top-full z-50
//               max-h-[85vh] w-full overflow-y-auto
//               border-t border-[#683879]/10
//               bg-white px-5 pb-6
//               shadow-[0_18px_35px_rgba(45,20,55,0.12)]
//               lg:hidden
//             "
//           >
//             <div className="mx-auto max-w-2xl">
//               <nav className="divide-y divide-[#683879]/10">
//                 {navigation.map((item) => (
//                   <motion.div key={item.label} variants={mobileItemVariants}>
//                     {item.children ? (
//                       <div>
//                         {/* MOBILE DROPDOWN BUTTON */}

//                         <button
//                           type="button"
//                           aria-expanded={mobileDropdown === item.label}
//                           onClick={() =>
//                             setMobileDropdown((current) =>
//                               current === item.label ? null : item.label,
//                             )
//                           }
//                           className="
//                             flex w-full items-center
//                             justify-between py-4
//                             text-left font-serif
//                             text-[15px] font-semibold
//                             text-[#51465A]
//                             transition-colors duration-300
//                             hover:text-[#683879]
//                           "
//                         >
//                           {item.label}

//                           <ChevronDown
//                             size={18}
//                             className={`
//                               text-[#F58232]
//                               transition-transform duration-300
//                               ${
//                                 mobileDropdown === item.label
//                                   ? "rotate-180"
//                                   : ""
//                               }
//                             `}
//                           />
//                         </button>

//                         {/* MOBILE DROPDOWN CONTENT */}

//                         <AnimatePresence>
//                           {mobileDropdown === item.label && (
//                             <motion.div
//                               initial={{
//                                 height: 0,
//                                 opacity: 0,
//                               }}
//                               animate={{
//                                 height: "auto",
//                                 opacity: 1,
//                               }}
//                               exit={{
//                                 height: 0,
//                                 opacity: 0,
//                               }}
//                               transition={{ duration: 0.25 }}
//                               className="overflow-hidden"
//                             >
//                               <div
//                                 className="
//                                 mb-3 ml-2 rounded-xl
//                                 border border-[#683879]/[0.08]
//                                 bg-gradient-to-br
//                                 from-[#FCFAFD] to-[#F7F1FA]
//                                 p-2
//                               "
//                               >
//                                 {item.children.map((child) => (
//                                   <Link
//                                     key={child.label}
//                                     to={child.to}
//                                     onClick={() => {
//                                       setMobileOpen(false);
//                                       setMobileDropdown(null);
//                                     }}
//                                     className="
//                                       flex items-center
//                                       justify-between
//                                       rounded-lg px-4 py-3
//                                       font-serif text-[13px]
//                                       font-medium text-[#62556B]

//                                       transition-all duration-200

//                                       hover:bg-white
//                                       hover:pl-5
//                                       hover:text-[#683879]
//                                     "
//                                   >
//                                     {child.label}

//                                     <ArrowUpRight
//                                       size={14}
//                                       className="text-[#F58232]"
//                                     />
//                                   </Link>
//                                 ))}
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <NavigationLink item={item} mobile />
//                     )}
//                   </motion.div>
//                 ))}
//               </nav>

//               {/* MOBILE APPLY BUTTON */}

//               <Link
//                 to="/#admissions"
//                 onClick={() => {
//                   setMobileOpen(false);
//                   setMobileDropdown(null);
//                 }}
//                 className="
//                   mt-5 flex w-full items-center
//                   justify-center gap-2
//                   rounded-xl bg-[#F58232]
//                   px-6 py-3.5

//                   font-serif text-[14px]
//                   font-bold text-white

//                   shadow-md shadow-[#F58232]/20
//                   transition-all duration-300

//                   hover:bg-[#E87325]
//                 "
//               >
//                 <GraduationCap size={19} />
//                 Apply Now
//                 <ArrowUpRight size={17} />
//               </Link>

//               {/* MOBILE FOOTER */}

//               <p
//                 className="
//                 mt-5 text-center
//                 font-serif text-[11px]
//                 tracking-wide text-[#A69AAE]
//               "
//               >
//                 Empowering Young Minds with Cyboard School
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

// ==========================================
// NAVIGATION ITEMS
// ==========================================

const navigation = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    children: [
      { label: "What We Do", to: "/about/what-we-do" },
      { label: "Accreditation", to: "/about/accreditation" },
      {
        label: "Cyboard Story",
        to: "/about/cyboard-story-learning-from-chalk-to-click",
      },
      { label: "Leadership", to: "/about/cyboard-leadership" },
      { label: "Homeschooling", to: "/about/homeschooling" },
      { label: "Transferable Jobs", to: "/about/transferable-jobs" },
      { label: "Inspiring Abilities", to: "/about/inspiring-abilities" },
      { label: "Beyond Academics", to: "/about/beyond-academics" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Pre-Primary", to: "/#school-programs" },
      { label: "Primary School", to: "/#school-programs" },
      { label: "Middle School", to: "/#school-programs" },
      { label: "High School", to: "/#school-programs" },
      { label: "Senior Secondary", to: "/#school-programs" },
    ],
  },
  {
    label: "Learning",
    children: [
      { label: "Cyboard LMS", to: "/#lms" },
      { label: "Teaching Team", to: "/#teaching-team" },
      { label: "Student Gallery", to: "/#student-gallery" },
    ],
  },
  {
    label: "Admissions",
    to: "/#admissions",
  },
  {
    label: "News & Media",
    children: [
      { label: "Blogs", to: "/blogs" },
      { label: "Awards", to: "/awards" },
      { label: "In the News", to: "/news" },
    ],
  },
  {
    label: "Contact",
    to: "/#contact",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.97,
    transition: {
      duration: 0.18,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.045,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.22,
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
    },
  },
};

// ==========================================
// HEADER COMPONENT
// ==========================================

export default function Header() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // ========================================
  // HANDLE HASH NAVIGATION
  // ========================================

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.slice(1);

    let firstFrame;
    let secondFrame;

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);

      if (secondFrame) {
        cancelAnimationFrame(secondFrame);
      }
    };
  }, [location.pathname, location.hash]);

  // ========================================
  // CLOSE MOBILE MENU AFTER NAVIGATION
  // ========================================

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname, location.hash]);

  // ========================================
  // NAVIGATION LINK
  // ========================================

  function NavigationLink({ item, mobile = false }) {
    const isActive =
      item.to === "/" && location.pathname === "/" && !location.hash;

    return (
      <Link
        to={item.to}
        onClick={() => {
          if (mobile) {
            setMobileOpen(false);
            setMobileDropdown(null);
          }
        }}
        className={`
          relative inline-flex items-center
          font-serif font-semibold tracking-wide
          transition-colors duration-300

          ${
            mobile
              ? "w-full py-4 text-[15px]"
              : "h-[78px] py-2 text-[14px] xl:text-[15px]"
          }

          ${isActive ? "text-[#683879]" : "text-[#51465A] hover:text-[#683879]"}
        `}
      >
        {item.label}

        {!mobile && (
          <motion.span
            className="absolute bottom-[17px] left-0 h-[2px] w-full origin-left rounded-full bg-[#F58232]"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </Link>
    );
  }

  // ========================================
  // HEADER
  // ========================================

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* MAIN NAVBAR */}

      <div className="relative border-b border-[#683879]/10 bg-white/95 shadow-[0_4px_25px_rgba(65,35,80,0.07)] backdrop-blur-xl">
        {/* SUBTLE BACKGROUND DECORATION */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 -top-28 h-56 w-56 rounded-full bg-[#683879]/[0.045] blur-3xl" />

          <div className="absolute -right-20 -bottom-24 h-52 w-52 rounded-full bg-[#F58232]/[0.045] blur-3xl" />
        </div>

        {/* NAVBAR CONTENT */}

        <div className="relative mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:min-h-[82px] lg:px-10">
          {/* LOGO */}

          <Link
            to="/"
            aria-label="Cyboard School Home"
            className="relative z-10 flex shrink-0 items-center"
          >
            <motion.img
              src="/images/logo-cropped.jpg"
              alt="Cyboard School"
              className="h-[47px] w-auto object-contain sm:h-[53px]"
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.25 }}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navigation.map((item) => (
              <div key={item.label} className="group relative">
                {/* MAIN MENU ITEM */}

                {item.children ? (
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="
                      flex h-[78px] items-center gap-1.5
                      font-serif text-[14px] font-semibold
                      tracking-wide text-[#51465A]
                      transition-colors duration-300
                      hover:text-[#683879]
                      xl:text-[15px]
                    "
                  >
                    {item.label}

                    <ChevronDown
                      size={15}
                      strokeWidth={2}
                      className="
                        text-[#F58232]
                        transition-transform duration-300
                        group-hover:rotate-180
                        group-focus-within:rotate-180
                      "
                    />

                    {/* HOVER UNDERLINE */}

                    <span
                      className="
                        absolute bottom-[17px] left-0
                        h-[2px] w-0 rounded-full
                        bg-[#F58232]
                        transition-all duration-300
                        group-hover:w-full
                        group-focus-within:w-full
                      "
                    />
                  </button>
                ) : (
                  <NavigationLink item={item} />
                )}

                {/* DESKTOP DROPDOWN */}

                {item.children && (
                  <div
                    className="
                      invisible absolute left-0 top-full z-50
                      w-[250px] translate-y-3
                      rounded-2xl border border-[#683879]/10
                      bg-white p-2
                      opacity-0 shadow-[0_16px_45px_rgba(45,20,55,0.13)]
                      transition-all duration-300

                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100

                      group-focus-within:visible
                      group-focus-within:translate-y-0
                      group-focus-within:opacity-100
                    "
                  >
                    {/* DROPDOWN TOP DESIGN */}

                    <div className="flex items-center gap-2 px-3 pb-2 pt-3">
                      <span className="h-[3px] w-8 rounded-full bg-[#F58232]" />
                      <span className="h-[3px] w-4 rounded-full bg-[#683879]/25" />
                    </div>

                    {/* DROPDOWN ITEMS */}

                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="
                          group/link flex items-center
                          justify-between gap-3
                          rounded-xl px-4 py-3

                          font-serif text-[13px] font-medium
                          text-[#51465A]

                          transition-all duration-200

                          hover:bg-[#F8F3FA]
                          hover:pl-5
                          hover:text-[#683879]

                          focus-visible:bg-[#F8F3FA]
                          focus-visible:outline-none
                        "
                      >
                        <span>{child.label}</span>

                        <ArrowUpRight
                          size={15}
                          className="
                            shrink-0 text-[#F58232]
                            opacity-0
                            transition-all duration-200
                            group-hover/link:translate-x-0.5
                            group-hover/link:-translate-y-0.5
                            group-hover/link:opacity-100
                          "
                        />
                      </Link>
                    ))}

                    {/* DROPDOWN BOTTOM */}

                    <div className="mx-3 mt-2 h-px bg-[#683879]/10" />

                    <div className="px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A69AAE]">
                      Cyboard School
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* APPLY NOW BUTTON */}

          <div className="hidden shrink-0 lg:block">
            <Link
              to="/#admissions"
              className="
                group inline-flex items-center gap-2
                rounded-full bg-[#F58232]
                px-5 py-3

                font-serif text-[13px] font-bold
                tracking-wide text-white

                shadow-[0_5px_16px_rgba(245,130,50,0.20)]

                transition-all duration-300

                hover:-translate-y-1
                hover:bg-[#E87325]
                hover:shadow-[0_9px_22px_rgba(245,130,50,0.30)]

                xl:px-6 xl:text-[14px]
              "
            >
              Apply Now
              <ArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => {
              setMobileOpen((previous) => !previous);
              setMobileDropdown(null);
            }}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-[#683879]/15
              bg-white text-[#683879]
              shadow-sm

              transition-all duration-300

              hover:border-[#683879]
              hover:bg-[#683879]
              hover:text-white

              lg:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -70, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 70, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* BRAND BOTTOM LINE */}

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#683879]/[0.06]">
          <motion.div
            className="h-full w-1/4 rounded-r-full bg-gradient-to-r from-[#F58232] to-[#683879]"
            animate={{ x: ["0%", "300%", "0%"] }}
            transition={{
              duration: 9,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      {/* =====================================
          MOBILE NAVIGATION
      ====================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              absolute left-0 top-full z-50
              max-h-[85vh] w-full overflow-y-auto
              border-t border-[#683879]/10
              bg-white px-5 pb-6
              shadow-[0_18px_35px_rgba(45,20,55,0.12)]
              lg:hidden
            "
          >
            <div className="mx-auto max-w-2xl">
              <nav className="divide-y divide-[#683879]/10">
                {navigation.map((item) => (
                  <motion.div key={item.label} variants={mobileItemVariants}>
                    {item.children ? (
                      <div>
                        {/* MOBILE DROPDOWN BUTTON */}

                        <button
                          type="button"
                          aria-expanded={mobileDropdown === item.label}
                          onClick={() =>
                            setMobileDropdown((current) =>
                              current === item.label ? null : item.label,
                            )
                          }
                          className="
                            flex w-full items-center
                            justify-between py-4
                            text-left font-serif
                            text-[15px] font-semibold
                            text-[#51465A]
                            transition-colors duration-300
                            hover:text-[#683879]
                          "
                        >
                          {item.label}

                          <ChevronDown
                            size={18}
                            className={`
                              text-[#F58232]
                              transition-transform duration-300
                              ${
                                mobileDropdown === item.label
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>

                        {/* MOBILE DROPDOWN CONTENT */}

                        <AnimatePresence>
                          {mobileDropdown === item.label && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div
                                className="
                                  mb-3 ml-2 rounded-xl
                                  border border-[#683879]/[0.08]
                                  bg-gradient-to-br
                                  from-[#FCFAFD] to-[#F7F1FA]
                                  p-2
                                "
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.to}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileDropdown(null);
                                    }}
                                    className="
                                      flex items-center
                                      justify-between
                                      rounded-lg px-4 py-3
                                      font-serif text-[13px]
                                      font-medium text-[#62556B]

                                      transition-all duration-200

                                      hover:bg-white
                                      hover:pl-5
                                      hover:text-[#683879]
                                    "
                                  >
                                    {child.label}

                                    <ArrowUpRight
                                      size={14}
                                      className="text-[#F58232]"
                                    />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavigationLink item={item} mobile />
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* MOBILE APPLY BUTTON */}

              <Link
                to="/#admissions"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileDropdown(null);
                }}
                className="
                  mt-5 flex w-full items-center
                  justify-center gap-2
                  rounded-xl bg-[#F58232]
                  px-6 py-3.5

                  font-serif text-[14px]
                  font-bold text-white

                  shadow-md shadow-[#F58232]/20
                  transition-all duration-300

                  hover:bg-[#E87325]
                "
              >
                <GraduationCap size={19} />
                Apply Now
                <ArrowUpRight size={17} />
              </Link>

              {/* MOBILE FOOTER */}

              <p
                className="
                  mt-5 text-center
                  font-serif text-[11px]
                  tracking-wide text-[#A69AAE]
                "
              >
                Empowering Young Minds with Cyboard School
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
