import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  X,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  Headphones,
} from "lucide-react";

export default function AdmissionCTA() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeModal = () => {
    setIsContactOpen(false);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ADMISSION CTA */}

      <section
        id="admissions"
        className="bg-white px-5 py-16 md:px-10 md:py-20 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#683879] px-6 py-16 text-center shadow-xl shadow-purple-900/10 md:px-16 md:py-20"
        >
          {/* BACKGROUND DECORATIONS */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F58232]/20 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute right-[15%] top-12 text-[#F58232]/70">
            <Sparkles size={30} />
          </div>

          {/* CONTENT */}

          <div className="relative z-10 mx-auto max-w-3xl">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white"
            >
              <GraduationCap size={36} />
            </motion.div>

            <span className="mb-5 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-orange-200">
              ADMISSIONS ARE OPEN
            </span>

            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Give Your Child a Brighter Future with Cyboard
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-purple-100 md:text-lg">
              Start your child's learning journey with flexible online
              education, dedicated teachers, and an engaging digital learning
              environment. Join Cyboard and discover a better way to learn.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* APPLY NOW */}

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/admission"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F58232] px-8 py-4 font-bold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-[#e66e20] sm:w-auto"
                >
                  Apply Now
                  <ArrowRight size={19} />
                </Link>
              </motion.div>

              {/* CONTACT US */}

              <motion.button
                type="button"
                onClick={() => setIsContactOpen(true)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-white px-8 py-4 font-semibold text-[#683879] transition-colors hover:bg-purple-50 sm:w-auto"
              >
                Contact Us
                <Headphones size={19} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT MODAL */}

      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#21142B]/65 px-4 py-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative my-auto w-full max-w-xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
            >
              {/* MODAL HEADER */}

              <div className="relative overflow-hidden bg-[#683879] px-7 pb-9 pt-8 sm:px-10">
                <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#F58232]/20 blur-2xl" />

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close contact form"
                  className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:rotate-90 hover:bg-white/20"
                >
                  <X size={21} />
                </button>

                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Headphones size={29} />
                  </div>

                  <span className="text-xs font-bold tracking-[2px] text-orange-200">
                    WE ARE HERE TO HELP
                  </span>

                  <h2
                    id="contact-modal-title"
                    className="mt-3 text-2xl font-extrabold text-white sm:text-3xl"
                  >
                    Let's Talk About Your Child's Future
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-7 text-purple-100">
                    Have questions about admissions or online learning? Send us
                    a message. Our team will be happy to help.
                  </p>
                </div>
              </div>

              {/* MODAL BODY */}

              <div className="px-6 py-8 sm:px-10">
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <Send size={30} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-[#302638]">
                      Thank You!
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      Your form has been completed. Connect the form to an email
                      service or backend to receive messages.
                    </p>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-7 rounded-full bg-[#683879] px-8 py-3 font-bold text-white hover:bg-[#542c63]"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-7 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F58232]/10 text-[#F58232]">
                        <MessageSquare size={20} />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#302638]">
                          Send Us a Message
                        </h3>
                        <p className="text-xs text-gray-500">
                          We'd love to hear from you.
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[#302638]">
                          Your Name
                        </label>

                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#967C9D]"
                          />

                          <input
                            type="text"
                            required
                            placeholder="Enter your full name"
                            className="w-full rounded-xl border border-[#683879]/10 bg-[#FCF9FD] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#683879] focus:ring-2 focus:ring-[#683879]/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[#302638]">
                          Email Address
                        </label>

                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#967C9D]"
                          />

                          <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            className="w-full rounded-xl border border-[#683879]/10 bg-[#FCF9FD] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#683879] focus:ring-2 focus:ring-[#683879]/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[#302638]">
                          Phone Number
                        </label>

                        <div className="relative">
                          <Phone
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#967C9D]"
                          />

                          <input
                            type="tel"
                            required
                            placeholder="Enter your phone number"
                            className="w-full rounded-xl border border-[#683879]/10 bg-[#FCF9FD] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#683879] focus:ring-2 focus:ring-[#683879]/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[#302638]">
                          Your Message
                        </label>

                        <textarea
                          required
                          rows={4}
                          placeholder="How can we help you?"
                          className="w-full resize-none rounded-xl border border-[#683879]/10 bg-[#FCF9FD] px-4 py-3.5 text-sm outline-none transition focus:border-[#683879] focus:ring-2 focus:ring-[#683879]/10"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F58232] py-4 font-bold text-white shadow-lg shadow-orange-900/10 transition-colors hover:bg-[#e66e20]"
                      >
                        Send Message
                        <ArrowRight size={19} />
                      </motion.button>
                    </form>

                    <p className="mt-5 text-center text-xs leading-6 text-gray-400">
                      Thank you for your interest in Cyboard School.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
