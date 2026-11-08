import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left font-semibold text-brand-dark"
      >
        {q}
        <span className="ml-4 text-xl text-brand-gold">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pb-5 text-sm leading-relaxed text-gray-600"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqList({ items }) {
  return <div>{items.map((f) => <FaqItem key={f.q} {...f} />)}</div>;
}