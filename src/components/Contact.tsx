"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const CONTACTS = [
  { label: "Email", href: "mailto:danielmgray925@gmail.com", Icon: EmailIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/daniel-graycs", Icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/Daniel-Gray66", Icon: GitHubIcon },
];

export default function Contact() {
  return (
    <section id="contact" style={{ marginBottom: "6rem" }}>
      <SectionReveal>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            marginBottom: "1.25rem",
          }}
        >
          Contact
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {CONTACTS.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{
                borderColor: "#185FA5",
                backgroundColor: "#E6F1FB",
                color: "#185FA5",
                y: -2,
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "9px 18px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                fontSize: "14px",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              <Icon />
              {label}
            </motion.a>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
