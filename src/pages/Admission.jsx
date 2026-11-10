import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  User,
  Mail,
  Phone,
  BookOpen,
  Globe,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  FileCheck,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Start Your Inquiry",
    description:
      "Share your interest with our admissions team and tell us a little about your child's educational needs.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Personalized Guidance",
    description:
      "Learn about our curriculum, online classes, teaching approach, and learning environment.",
    icon: User,
  },
  {
    number: "03",
    title: "Complete Your Application",
    description:
      "Provide the required student and parent information to begin the admission application.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Application Review",
    description:
      "The admissions team reviews the submitted information and guides you through the next steps.",
    icon: FileCheck,
  },
  {
    number: "05",
    title: "Welcome to Cyboard",
    description:
      "After acceptance and completion of the required formalities, your child's learning journey begins.",
    icon: GraduationCap,
  },
];

export default function Admission() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FCF9FD]">
      {/* =====================================
          HERO
      ===================================== */}

      <section className="relative overflow-hidden bg-[#683879] px-5 pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F58232]/20 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-purple-100 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200">
                <Sparkles size={16} />
                ADMISSIONS ARE OPEN
              </span>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Begin Your Child's
                <span className="mt-2 block text-[#F58232]">
                  Journey with Cyboard
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-purple-100 md:text-lg">
                Every great learning journey starts with one step. Apply to
                Cyboard School and discover an engaging, flexible, and
                personalized online education experience.
              </p>

              <div className="mt-9 flex flex-wrap gap-5 text-sm font-medium text-white">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#F58232]" />
                  Personalized Learning
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#F58232]" />
                  Expert Teachers
                </span>
              </div>
            </motion.div>

            {/* HERO SIDE CARD */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="rounded-[30px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F58232] text-white shadow-lg">
                  <GraduationCap size={34} />
                </div>

                <h2 className="mt-7 text-2xl font-bold text-white">
                  A Brighter Future Starts Here
                </h2>

                <p className="mt-3 text-sm leading-7 text-purple-100">
                  Give your child the opportunity to learn, grow, explore, and
                  achieve their full potential.
                </p>

                <div className="mt-7 space-y-4 border-t border-white/15 pt-6">
                  {[
                    "Flexible online education",
                    "Experienced teaching team",
                    "Personalized learning support",
                    "Interactive digital classrooms",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-[#F58232]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================
          APPLICATION FORM
      ===================================== */}

      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[#683879]/10 px-5 py-2 text-sm font-bold text-[#683879]">
              APPLICATION FORM
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#302638] sm:text-4xl">
              Apply for Admission
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Complete the form below to express your interest in joining
              Cyboard School.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[28px] border border-[#683879]/10 bg-white p-6 shadow-[0_15px_60px_rgba(70,40,80,0.07)] sm:p-10 lg:p-12"
          >
            {submitted ? (
              <div className="py-14 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={42} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-[#302638]">
                  Thank You for Your Interest!
                </h3>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500">
                  Your application form has passed the frontend validation.
                  Connect the form to your backend to securely receive and
                  process applications.
                </p>

                <Link
                  to="/"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#683879] px-8 py-4 font-bold text-white transition hover:bg-[#542c63]"
                >
                  Back to Home
                  <ArrowRight size={18} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* PARENT INFORMATION */}

                <div>
                  <div className="mb-7 flex items-center gap-3 border-b border-[#683879]/10 pb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#683879]/10 text-[#683879]">
                      <User size={22} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#302638]">
                        Parent / Guardian Information
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        Tell us how we can contact you.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#302638]">
                        Parent Full Name *
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="Enter parent name"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#302638]">
                        Email Address *
                      </label>

                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#967C9D]"
                        />

                        <input
                          required
                          type="email"
                          placeholder="Enter email address"
                          className="form-input pl-11"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#302638]">
                        Phone Number *
                      </label>

                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#967C9D]"
                        />

                        <input
                          required
                          type="tel"
                          placeholder="Enter phone number"
                          className="form-input pl-11"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#302638]">
                        Country *
                      </label>

                      <div className="relative">
                        <Globe
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#967C9D]"
                        />

                        <input
                          required
                          type="text"
                          placeholder="Enter your country"
                          className="form-input pl-11"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* STUDENT INFORMATION */}

                <div>
                  <div className="mb-7 flex items-center gap-3 border-b border-[#683879]/10 pb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F58232]/10 text-[#F58232]">
                      <GraduationCap size={23} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#302638]">
                        Student Information
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        Tell us about your child.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#302638]">
                        Student Full Name *
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="Enter student name"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#302638]">
                        Date of Birth *
                      </label>

                      <input required type="date" className="form-input" />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#302638]">
                        Grade Applying For *
                      </label>

                      <div className="relative">
                        <BookOpen
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#967C9D]"
                        />

                        <select
                          required
                          defaultValue=""
                          className="form-input appearance-none pl-11"
                        >
                          <option value="" disabled>
                            Select grade
                          </option>
                          <option>Pre-Nursery</option>
                          <option>Nursery</option>
                          <option>LKG</option>
                          <option>UKG</option>
                          <option>Grade 1</option>
                          <option>Grade 2</option>
                          <option>Grade 3</option>
                          <option>Grade 4</option>
                          <option>Grade 5</option>
                          <option>Grade 6</option>
                          <option>Grade 7</option>
                          <option>Grade 8</option>
                          <option>Grade 9</option>
                          <option>Grade 10</option>
                          <option>Grade 11</option>
                          <option>Grade 12</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#302638]">
                        Previous School
                      </label>

                      <input
                        type="text"
                        placeholder="Previous school name"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* ADDITIONAL MESSAGE */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#302638]">
                    Additional Information
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Tell us anything else we should know about your child's educational needs..."
                    className="form-input resize-none"
                  />
                </div>

                {/* TERMS */}

                <label className="flex items-start gap-3 text-sm leading-6 text-gray-500">
                  <input
                    required
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-[#683879]"
                  />
                  <span>
                    I confirm that the information provided is accurate and I
                    agree to be contacted regarding this admission inquiry.
                  </span>
                </label>

                {/* SUBMIT */}

                <motion.button
                  type="submit"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#F58232] px-8 py-4 font-bold text-white shadow-lg shadow-orange-900/10 transition hover:bg-[#e66e20]"
                >
                  Submit Application
                  <ArrowRight size={20} />
                </motion.button>

                <p className="text-center text-xs leading-6 text-gray-400">
                  Our admissions team can guide you through the next steps after
                  your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================
          ADMISSION PROCESS
      ===================================== */}

      <section className="bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#F58232]/10 px-5 py-2 text-sm font-bold text-[#D66A20]">
              SIMPLE & TRANSPARENT
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#302638] sm:text-4xl">
              Your Admission Journey
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              We make the admission journey simple and supportive, guiding
              families through every step.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -7 }}
                  className="relative rounded-[24px] border border-[#683879]/10 bg-[#FCF9FD] p-6 transition-shadow hover:shadow-xl hover:shadow-purple-900/5"
                >
                  <span className="text-3xl font-extrabold text-[#683879]/15">
                    {step.number}
                  </span>

                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#683879]/10 text-[#683879]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-base font-extrabold text-[#302638]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="px-5 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#683879] px-6 py-14 text-center md:px-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F58232]/20 blur-3xl" />

          <div className="relative z-10">
            <ShieldCheck size={40} className="mx-auto text-[#F58232]" />

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Have Questions About Admission?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-purple-100 sm:text-base">
              We are here to help you understand the admission process and find
              the right learning journey for your child.
            </p>

            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F58232] px-8 py-4 font-bold text-white transition hover:bg-[#e66e20]"
            >
              Contact Our Team
              <ArrowRight size={19} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
