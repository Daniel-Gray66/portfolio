"use client";
import { motion } from "framer-motion";

export default function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.4 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 14px",
        borderRadius: "20px",
        border: "1px solid rgba(59,109,17,0.2)",
        background: "rgba(59,109,17,0.05)",
        marginBottom: "3.5rem",
        fontSize: "13px",
        color: "#3B6D11",
        userSelect: "none",
      }}
    >
      <span style={{ position: "relative", display: "inline-flex", width: "8px", height: "8px", flexShrink: 0 }}>
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "#3B6D11",
            animation: "pulse-ring 2s ease-out infinite",
          }}
        />
        <span
          style={{
            position: "relative",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#3B6D11",
            animation: "pulse-dot 2s ease-in-out infinite",
          }}
        />
      </span>
      Available for full-time roles — Pleasanton / Bay Area or remote
    </motion.div>
  );
}
