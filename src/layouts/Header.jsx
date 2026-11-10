import { Link } from "react-router-dom";
import { AboutDropdown } from "../pages/about/AboutMenu";

export default function Header() {
  return (
    <header className="relative z-40 bg-brand-dark text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-serif text-xl font-bold">
          Cyboard <span className="text-brand-gold">School</span>
        </Link>
        <div className="flex items-center gap-6">
          <AboutDropdown />
        </div>
      </nav>
    </header>
  );
}