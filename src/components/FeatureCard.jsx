import { motion } from "framer-motion";

export default function FeatureCard({ badge, title, children }) {
return (
<motion.div
whileHover={{ y: -10 }}
transition={{ type: "spring", stiffness: 260, damping: 18 }}
className="group relative h-full overflow-hidden rounded-3xl border border-brand/10 bg-white p-8 shadow-[0_10px_30px_-12px_rgba(15,61,46,0.15)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(15,61,46,0.45)]"
>

<div className="absolute inset-0 translate-y-full bg-[linear-gradient(160deg,#165C42,#0F3D2E)] transition-transform duration-500 ease-out group-hover:translate-y-0" />
  {/* درخشش طلایی گوشه */}
  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-gold/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-gold/30" />

  {/* شماره‌ی کم‌رنگ پشت کارت */}
  {typeof badge === "number" && (
    <span className="pointer-events-none absolute right-6 top-3 select-none font-serif text-7xl font-bold text-brand-dark/5 transition-colors duration-500 group-hover:text-white/10">
      {String(badge).padStart(2, "0")}
    </span>
  )}

  <div className="relative">
    {badge && (
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#E3A82B,#F3C85C)] font-serif text-xl font-bold text-brand-dark shadow-lg shadow-brand-gold/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        {badge}
      </span>
    )}

    <h3 className="mt-6 font-serif text-xl font-semibold text-brand-dark transition-colors duration-500 group-hover:text-white">
      {title}
    </h3>

    {/* خط طلایی که روی hover بلندتر می‌شود */}
    <span className="mt-3 block h-1 w-10 rounded-full bg-brand-gold transition-all duration-500 group-hover:w-20" />

    <div className="mt-4 text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/85">
      {children}
    </div>
  </div>
</motion.div>
);
}