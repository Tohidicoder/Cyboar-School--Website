// src/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream font-sans text-gray-800">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}