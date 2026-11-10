import { useState } from "react";


const input =
"w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30";

export default function ConsultationForm({
id,
title = "Book a Consultation",
text,
button = "Book a Consultation",
extended = false, 
student = false,
maxClass = 12,

}) {
const classes = ["Nursery", "KG", ...Array.from({ length: maxClass }, (_, i) => String(i + 1))];
const [sent, setSent] = useState(false);

const onSubmit = (e) => {
e.preventDefault();
const data = Object.fromEntries(new FormData(e.currentTarget));
console.log("Consultation request:", data); // TODO: connect to the backend / API
setSent(true);
};

return (
<div id={id} className="rounded-3xl bg-white p-8 shadow-xl">
<h3 className="font-serif text-2xl font-bold text-brand-dark">{title}</h3>
{text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
  {sent ? (
    <p className="mt-6 rounded-xl bg-brand-light p-5 text-sm font-semibold text-brand-dark">
      ✓ Thank you! A counsellor will contact you soon.
    </p>
  ) : (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
      <input name="parent" required placeholder="Parent's Name *" className={input} />
      {(extended || student) && <input name="student" required placeholder="Student's Name *" className={input} />}
      <input name="email" type="email" required placeholder="Email Address *" className={input} />
      <input name="phone" type="tel" required placeholder="Phone *" className={input} />
     {!extended && !student && <input name="altPhone" type="tel" placeholder="Alternative Number" className={input} />}
      {extended && <input name="city" required placeholder="City *" className={input} />}
      {extended && <input name="state" required placeholder="State/Province *" className={input} />}
      <select name="class" required defaultValue="" className={`${input} sm:col-span-2`}>
        <option value="" disabled>Applying for Class *</option>
        {classes.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <button
        type="submit"
        className="rounded-full bg-brand-gold px-8 py-3 text-xs font-semibold uppercase tracking-wide text-brand-dark transition hover:brightness-110 sm:col-span-2"
      >
        {button} →
      </button>
      <p className="text-center text-xs text-gray-500 sm:col-span-2">
        🔒 100% Confidential • Zero Obligation. This is a request for guidance, not an admission application.
      </p>
    </form>
  )}
</div>
);
}