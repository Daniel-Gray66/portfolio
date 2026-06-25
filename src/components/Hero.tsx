"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section style={{ paddingTop: "7rem", paddingBottom: "3rem", position: "relative", overflow: "hidden" }}>
      {/* Ambient gradient behind hero text */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(24,95,165,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div variants={container} initial="hidden" animate="show">
        {/* Eyebrow */}
        <motion.div
          variants={item}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
        >
          <div style={{ height: "1px", width: "32px", background: "var(--accent-mid)" }} />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "var(--accent-mid)",
              fontWeight: 500,
            }}
          >
            Software Engineer
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={item}
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 500,
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: "1.125rem",
          }}
        >
          Building things
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>that actually ship.</em>
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={item}
          style={{
            fontSize: "1.0625rem",
            color: "var(--text-secondary)",
            maxWidth: "500px",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          CS grad from Cal State East Bay. I build backend systems, mobile apps, and AI-powered
          tools — currently open to full-time roles in the Bay Area.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href="/assets/Daniel_Gray_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "9px 20px",
              borderRadius: "8px",
              background: "var(--accent)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid transparent",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1550A2";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="15" y2="17" />
            </svg>
            Resume
          </a>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "9px 20px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s, color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.background = "var(--accent-light)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
