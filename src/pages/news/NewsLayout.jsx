import { motion } from "motion/react";
import { ArrowUpRight, Newspaper } from "lucide-react";
export default function NewsLayout({ eyebrow = "NEWS & MEDIA", title, description, children }) {
  return <>
    <section className="relative overflow-hidden bg-[#f8f3fa] py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#f48735]/15 blur-3xl"/>
      <div className="container-site relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#713e83] shadow-sm"><Newspaper size={14}/>{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-black leading-tight text-[#28232d] sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#706a75]">{description}</p>
          <a href="https://cyboardschool.com/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#713e83] hover:text-[#f48735]">Visit official Cyboard website <ArrowUpRight size={16}/></a>
        </motion.div>
      </div>
    </section>
    {children}
  </>;
}
