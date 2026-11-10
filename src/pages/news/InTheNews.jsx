import { motion } from "motion/react";
import { ExternalLink, Newspaper } from "lucide-react";
import NewsLayout from "./NewsLayout";
export default function InTheNews() {
  return (
    <NewsLayout
      title="Cyboard in the news"
      description="News coverage and media mentions connected with Cyboard School. This page is prepared for verified publications and press links."
    >
      <section className="container-site section-space">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-purple-100 bg-white p-8 text-center shadow-sm sm:p-12"
        >
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#f8f3fa] text-[#713e83]">
            <Newspaper size={32} />
          </span>
          <h2 className="mt-6 text-2xl font-extrabold text-[#28232d]">
            Media mentions
          </h2>
          <p className="mt-4 leading-8 text-gray-600">
            No verified press clippings were included in the ZIP file. Add each
            media item only after confirming its publication name, headline,
            date and original URL.
          </p>
          <a
            href="https://cyboardschool.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-bold text-[#713e83] hover:text-[#f48735]"
          >
            Visit Cyboard School <ExternalLink size={16} />
          </a>
        </motion.div>
      </section>
    </NewsLayout>
  );
}
