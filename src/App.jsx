import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout.jsx";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/news/Blogs.jsx";
import BlogDetails from "./pages/news/BlogDetails.jsx";
import Awards from "./pages/news/Awards.jsx";
import InTheNews from "./pages/news/InTheNews.jsx";
import Admission from "./pages/Admission";

function NotFound() {
  return (
    <section className="container-site section-space text-center">
      <p className="mb-3 font-bold text-brand-orange">404</p>
      <h1 className="text-3xl font-extrabold text-brand-purple">
        Page not found
      </h1>
      <p className="mt-3 text-gray-600">
        The page may have moved or is not available yet.
      </p>
      <a className="brand-button mt-7" href="/">
        Back to Home
      </a>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/news" element={<InTheNews />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admission" element={<Admission />} />
      </Route>
    </Routes>
  );
}
