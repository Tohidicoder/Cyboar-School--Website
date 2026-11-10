import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import NewsLayout from "./NewsLayout";
import { articles } from "./newsData";
export default function BlogDetails() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article)
    return (
      <NewsLayout
        title="Article not found"
        description="This article is not available in this preview yet."
      >
        <div className="container-site py-14">
          <Link to="/blogs" className="brand-button">
            Back to Blogs
          </Link>
        </div>
      </NewsLayout>
    );
  return (
    <NewsLayout
      eyebrow={article.category}
      title={article.title}
      description={article.excerpt}
    >
      <article className="container-site max-w-4xl py-14 sm:py-20">
        <img
          src={article.image}
          alt={article.title}
          className="max-h-[470px] w-full rounded-3xl object-cover shadow-lg"
        />
        <div className="mt-7 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} />
          {article.date}
        </div>
        <h2 className="mt-8 text-2xl font-extrabold text-[#713e83]">
          About this article
        </h2>
        <p className="mt-4 text-base leading-8 text-gray-600">
          This page is a short preview for the Cyboard School website project.
          The complete article and its full context remain on the original
          Cyboard School website. Open the official publication to read the
          complete content.
        </p>
        <a
          href={article.external}
          target="_blank"
          rel="noreferrer"
          className="brand-button mt-7"
        >
          Read full article on Cyboard <ExternalLink size={16} />
        </a>
        <div className="mt-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#713e83]"
          >
            <ArrowLeft size={16} /> Back to all blogs
          </Link>
        </div>
      </article>
    </NewsLayout>
  );
}
