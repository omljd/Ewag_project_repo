import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Process", to: "/process" },
  { label: "Work", to: "/work" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-full border px-2 py-2 transition-all duration-500 ${
            scrolled
              ? "border-ink/10 bg-paper/90 text-ink backdrop-blur-xl shadow-card"
              : "border-paper/15 bg-ink/40 text-paper backdrop-blur-md"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-2">
            <span className={`grid h-9 w-9 place-items-center rounded-xl font-display font-bold transition-colors ${
              scrolled ? "bg-ink text-paper" : "bg-brand text-brand-foreground"
            }`}>
              E
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              EWAG<span className="text-brand">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? `${active ? "bg-ink text-paper" : "text-ink/70 hover:bg-paper-muted hover:text-ink"}`
                      : `${active ? "bg-paper text-ink" : "text-paper/80 hover:bg-paper/10 hover:text-paper"}`
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://wa.me/8766910241"
              target="_blank"
              rel="noreferrer"
              className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
                scrolled
                  ? "border-ink/10 text-ink hover:bg-ink hover:text-paper"
                  : "border-paper/20 text-paper hover:bg-paper hover:text-ink"
              }`}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-brand py-2.5 text-sm">
              Book Consultation
            </Link>
          </div>

          <button
            className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${
              scrolled ? "border-ink/10 text-ink" : "border-paper/20 text-paper"
            }`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl border border-ink/10 bg-paper p-4 shadow-card md:hidden">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink/80 hover:bg-paper-muted"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-brand mt-2">
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
