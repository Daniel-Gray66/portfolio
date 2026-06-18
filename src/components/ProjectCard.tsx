"use client";
import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  tagline: string;
  accentColor: string;
  tags: string[];
  detail: string;
  github: string;
  live: string | null;
}

type TagStyle = { bg: string; text: string; border: string };

const TAG_COLORS: Record<string, TagStyle> = {
  Java:          { bg: "#EBF3FD", text: "#1A5FA8", border: "#C5DCF5" },
  "Spring Boot": { bg: "#EBF3FD", text: "#1A5FA8", border: "#C5DCF5" },
  Kotlin:        { bg: "#EBF3FD", text: "#1A5FA8", border: "#C5DCF5" },
  Android:       { bg: "#EBF3FD", text: "#1A5FA8", border: "#C5DCF5" },
  Python:        { bg: "#FEF0EB", text: "#C0440A", border: "#FAD2C3" },
  FastAPI:       { bg: "#FEF0EB", text: "#C0440A", border: "#FAD2C3" },
  YOLO:          { bg: "#FEF0EB", text: "#C0440A", border: "#FAD2C3" },
  PyTorch:       { bg: "#FEF0EB", text: "#C0440A", border: "#FAD2C3" },
  React:         { bg: "#F0EBFE", text: "#6B3EA8", border: "#D5C7FA" },
  Supabase:      { bg: "#E8F7F4", text: "#1A7A5E", border: "#B5DFD6" },
  PostgreSQL:    { bg: "#E8F7F4", text: "#1A7A5E", border: "#B5DFD6" },
  Redis:         { bg: "#E8F7F4", text: "#1A7A5E", border: "#B5DFD6" },
  MediaPipe:     { bg: "#EBF7ED", text: "#1F7A2F", border: "#B8DFC0" },
};

const DEFAULT_TAG: TagStyle = { bg: "#F5F5F5", text: "#555555", border: "#DDDDDD" };

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isOpen || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: cy * -5, y: cx * 5 });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const showGithub = project.github && project.github !== "#";
  const showLive = project.live && project.live !== "#";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        y: hovered && !isOpen ? -3 : 0,
        boxShadow: hovered || isOpen
          ? "0 8px 24px rgba(24,95,165,0.1)"
          : "0 1px 4px rgba(0,0,0,0.05)",
        borderColor: hovered || isOpen ? "#185FA5" : "rgba(0,0,0,0.1)",
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      style={{
        borderRadius: "12px",
        border: "1px solid rgba(0,0,0,0.1)",
        background: "var(--surface)",
        padding: "1.125rem",
        cursor: "pointer",
        transformStyle: "preserve-3d",
        perspective: "800px",
        willChange: "transform",
        userSelect: "none",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Accent bar */}
      <div
        style={{
          width: "32px",
          height: "3px",
          borderRadius: "2px",
          background: project.accentColor,
          marginBottom: "14px",
        }}
      />

      {/* Title */}
      <div
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "var(--text-primary)",
          marginBottom: "4px",
        }}
      >
        {project.title}
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "13px",
          color: "var(--text-secondary)",
          marginBottom: "14px",
          lineHeight: 1.4,
        }}
      >
        {project.tagline}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
        {project.tags.map((tag) => {
          const c = TAG_COLORS[tag] ?? DEFAULT_TAG;
          return (
            <span
              key={tag}
              style={{
                fontSize: "11px",
                padding: "2px 8px",
                borderRadius: "20px",
                background: c.bg,
                color: c.text,
                border: `1px solid ${c.border}`,
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          );
        })}
      </div>

      {/* Footer row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "12px",
            color: "var(--accent-mid)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            fontWeight: 500,
            padding: 0,
          }}
        >
          Details
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
            ↓
          </motion.span>
        </button>

        <div style={{ display: "flex", gap: "8px" }} onClick={(e) => e.stopPropagation()}>
          {showGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <GitHubIcon />
            </a>
          )}
          {showLive && (
            <a
              href={project.live!}
              target="_blank"
              rel="noopener noreferrer"
              title="Live demo"
              style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                borderTop: "1px solid var(--border)",
                marginTop: "12px",
                paddingTop: "12px",
                fontSize: "13px",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
              }}
            >
              {project.detail}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
