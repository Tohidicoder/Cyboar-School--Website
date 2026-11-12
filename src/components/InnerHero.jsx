import { motion } from "framer-motion";

export default function InnerHero({
title, subtitle, image, imageAlt = "", imagePosition = "center",badges = [], children,
}) {
const hasImage = Boolean(image);

return (
<section className="relative overflow-hidden bg-[linear-gradient(135deg,#0F3D2E,#165C42)] px-4 pb-32 pt-20 text-white">
<motion.div
className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-gold/25 blur-3xl"
animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>
<motion.div
className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/10 blur-3xl"
animate={{ y: [0, -30, 0] }}
transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
/>
  <div
    className={
      hasImage
        ? "relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2"
        : "relative mx-auto max-w-3xl text-center"
    }
  >
    {/* متن */}
    <div className={hasImage ? "text-center md:text-left" : ""}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-base leading-relaxed text-white/80"
        >
          {subtitle}
        </motion.p>
      )}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      )}
    </div>

    {/* عکس */}
    {hasImage && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto w-full max-w-md"
      >
        {/* قاب طلایی پشت عکس */}
        <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-brand-gold" />
        {/* دایره‌ی تزئینی */}
        <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-brand-gold" />

       <img
        src={image}
        alt={imageAlt}
        style={{ objectPosition: imagePosition }}
        className="relative aspect-square w-full rounded-[2rem] object-cover shadow-2xl"
      />

        {/* کارت‌های شناور */}
        {badges.slice(0, 2).map((b, i) => (
          <motion.div
            key={b.label}
            animate={{ y: [0, i === 0 ? -10 : 10, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute hidden rounded-xl bg-white px-4 py-3 text-brand-dark shadow-xl sm:block ${
              i === 0 ? "-left-8 bottom-12" : "-right-6 top-10"
            }`}
          >
            <div className="font-serif text-xl font-bold leading-none">{b.value}</div>
            <div className="mt-1 text-[11px] font-medium text-gray-500">{b.label}</div>
          </motion.div>
        ))}
      </motion.div>
    )}
  </div>
</section>
  );
}

