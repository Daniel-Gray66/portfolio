"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_LINKS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.04)" : "none",
      }}
    >
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "56px" }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--text-primary)",
              fontFamily: "inherit",
              letterSpacing: "-0.3px",
            }}
          >
            Daniel Gray
          </button>

          <nav style={{ display: "flex", gap: "24px" }} className="hidden-mobile">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontFamily: "inherit",
                  fontWeight: active === id ? 500 : 400,
                  color: active === id ? "var(--accent)" : "var(--text-secondary)",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
