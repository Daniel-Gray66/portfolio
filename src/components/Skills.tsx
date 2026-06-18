"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const SKILLS = [
  "Java / Spring Boot",
  "Python / FastAPI",
  "Kotlin / Android",
  "React",
  "PostgreSQL / Supabase",
  "PyTorch / YOLO",
  "Docker",
  "REST APIs",
  "Computer Vision",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" style={{ marginBottom: "4rem" }}>
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
          Skills &amp; Tools
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.045, duration: 0.28, ease: "easeOut" }}
              whileHover={{
                borderColor: "#185FA5",
                backgroundColor: "#E6F1FB",
                color: "#185FA5",
                y: -2,
              }}
              style={{
                padding: "7px 14px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                fontSize: "13px",
                color: "var(--text-secondary)",
                cursor: "default",
                fontWeight: 400,
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
