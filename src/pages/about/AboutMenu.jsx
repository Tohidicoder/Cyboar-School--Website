import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { aboutLinks } from "../../data/aboutLinks";

const flatten = (items) =>
items.flatMap((i) => [i.to, ...(i.children ? flatten(i.children) : [])]).filter(Boolean);
const allPaths = flatten(aboutLinks);

/* ---------- دسکتاپ: dropdown با زیرمنوی تو در تو ---------- */
export function AboutDropdown() {
const [open, setOpen] = useState(false);
const { pathname } = useLocation();
useEffect(() => setOpen(false), [pathname]);
const active = allPaths.includes(pathname);

return (
<div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
  <button
    className={`flex items-center gap-1 text-sm font-medium transition hover:text-brand-gold ${active ? "text-brand-gold" : ""}`}
  >
    About <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
  </button>

  <AnimatePresence>
    {open && (
      <motion.ul
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.15 }}
        className="absolute left-0 top-full z-50 w-64 rounded-2xl bg-white py-2 text-brand-dark shadow-2xl"
      >
        {aboutLinks.map((item) => (
          <li key={item.label} className="group/sub relative">
            {item.to ? (
              <Link to={item.to} className="flex items-center justify-between px-5 py-2.5 text-sm transition hover:bg-brand-light hover:text-brand">
                {item.label}
                {item.children && <ChevronRight className="h-4 w-4" />}
              </Link>
            ) : (
              <span className="flex cursor-default items-center justify-between px-5 py-2.5 text-sm transition hover:bg-brand-light">
                {item.label}
                <ChevronRight className="h-4 w-4" />
              </span>
            )}

            {item.children && (
              <ul className="invisible absolute left-full top-0 w-60 rounded-2xl bg-white py-2 opacity-0 shadow-2xl transition group-hover/sub:visible group-hover/sub:opacity-100">
                {item.children.map((c) => (
                  <li key={c.to}>
                    <Link to={c.to} className="block px-5 py-2.5 text-sm transition hover:bg-brand-light hover:text-brand">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>
);
}

/* ---------- موبایل: آکاردئون ---------- */
function MobileItem({ item, onNavigate }) {
const [open, setOpen] = useState(false);

if (!item.children) {
return (
<Link to={item.to} onClick={onNavigate} className="block py-2.5 text-sm">
{item.label}
</Link>
);
}

return (
<div>
<div className="flex items-center justify-between">
{item.to ? (
<Link to={item.to} onClick={onNavigate} className="py-2.5 text-sm">{item.label}</Link>
) : (
<span className="py-2.5 text-sm">{item.label}</span>
)}
<button onClick={() => setOpen(!open)} aria-label="Toggle submenu" className="p-2">
<ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
</button>
</div>
<AnimatePresence initial={false}>
{open && (
<motion.div
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
className="overflow-hidden border-l-2 border-brand-gold/50 pl-4"
>
{item.children.map((c) => (
<Link key={c.to} to={c.to} onClick={onNavigate} className="block py-2 text-sm text-white/80">
{c.label}
</Link>
))}
</motion.div>
)}
</AnimatePresence>
</div>
);
}

export function AboutMobileMenu({ onNavigate }) {
const [open, setOpen] = useState(false);
return (
<div>
<button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-2.5 text-sm font-medium">
About <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
</button>
{open && (
 <div className="pl-3">
{aboutLinks.map((item) => (
<MobileItem key={item.label} item={item} onNavigate={onNavigate} />
))}
</div>
)}
</div>
);
}