import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../pages/news/newsData";

export default function RecentBlogs() {
  return (
    <section className="relative overflow-hidden bg-[#f8f3fa] px-5 py-20 md:px-10 md:py-28 lg:px-20">
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#713e83]/10 blur-3xl" />
      <div className="container-site relative">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-widest text-[#713e83]">
              <BookOpen size={15} /> NEWS & MEDIA
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-[#28232d] sm:text-4xl lg:text-5xl">
              Stories, ideas &{" "}
              <span className="text-[#713e83]">latest insights</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#706a75]">
              Explore educational articles, parent guides and updates from
              Cyboard School.
            </p>
          </div>
          <Link
            to="/blogs"
            className="brand-button shrink-0 !px-6 !py-3 text-sm"
          >
            View all blogs <ArrowUpRight size={17} />
          </Link>
        </motion.div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <Link
                to={`/blogs/${article.slug}`}
                className="block h-56 overflow-hidden bg-white"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-[#f8f3fa] px-3 py-1.5 font-bold text-[#713e83]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <CalendarDays size={13} />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold leading-7 text-[#28232d] group-hover:text-[#713e83]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {article.excerpt}
                </p>
                <Link
                  to={`/blogs/${article.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#713e83]"
                >
                  Read more <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
