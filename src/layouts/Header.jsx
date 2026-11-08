import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-brand-dark text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-serif text-xl font-bold">
          Cyboard <span className="text-brand-gold">School</span>
        </Link>
        <div className="flex gap-5 text-sm">
          <Link to="/what-we-do" className="hover:text-brand-gold">What We Do</Link>
          <Link to="/accreditation" className="hover:text-brand-gold">Accreditation</Link>
          <Link to="/cyboard-leadership" className="hover:text-brand-gold">Leadership</Link>
        </div>
      </nav>
    </header>
  );
}