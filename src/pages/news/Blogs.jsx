import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import NewsLayout from "./NewsLayout";
import { articles } from "./newsData";
export default function Blogs() {
  return (
    <NewsLayout
      title="Ideas, insights & school updates"
      description="Explore educational articles and practical guides for parents and learners. Article summaries are provided here; use the official links to read the complete original publications."
    >
      <section className="container-site section-space">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm hover:shadow-xl"
            >
              <Link
                to={`/blogs/${article.slug}`}
                className="block h-56 overflow-hidden bg-[#f8f3fa]"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-[#f8f3fa] px-3 py-1.5 font-bold text-[#713e83]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <CalendarDays size={13} />
                    {article.date}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold leading-7 text-[#28232d] group-hover:text-[#713e83]">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {article.excerpt}
                </p>
                <Link
                  to={`/blogs/${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#713e83]"
                >
                  Read article <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </NewsLayout>
  );
}
