import { motion } from "motion/react";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import NewsLayout from "./NewsLayout";
export default function Awards() {
  return (
    <NewsLayout
      title="Awards & recognition"
      description="A space to highlight the milestones, recognitions and achievements officially associated with Cyboard School."
    >
      <section className="container-site section-space">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-purple-100 bg-white p-8 text-center shadow-sm sm:p-12"
        >
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#f8f3fa] text-[#713e83]">
            <Award size={32} />
          </span>
          <h2 className="mt-6 text-2xl font-extrabold text-[#28232d]">
            Recognition details are being verified
          </h2>
          <p className="mt-4 leading-8 text-gray-600">
            The project brief includes an Awards page, but the supplied project
            files do not contain verified award names, dates or certificates. To
            avoid publishing incorrect claims, this page is ready for the
            school's approved award details.
          </p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            <div className="rounded-2xl bg-[#f8f3fa] p-5">
              <ShieldCheck className="text-[#713e83]" />
              <h3 className="mt-3 font-bold">Verified award title</h3>
              <p className="mt-1 text-sm text-gray-600">
                Add the official name and awarding organization.
              </p>
            </div>
            <div className="rounded-2xl bg-[#fff5ed] p-5">
              <Sparkles className="text-[#f48735]" />
              <h3 className="mt-3 font-bold">Year & certificate</h3>
              <p className="mt-1 text-sm text-gray-600">
                Add the confirmed year and approved image.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </NewsLayout>
  );
}
