import SectionReveal from "./SectionReveal";

const ABOUT = [
  {
    label: "Education",
    value: "B.S. Computer Science · Cal State East Bay, Dec 2025",
  },
  {
    label: "Location",
    value: "Pleasanton, CA · Open to Bay Area + remote",
  },
  {
    label: "Background",
    value:
      "Backend, AI/ML, Android — from underwater robotics research to production mobile apps",
  },
  {
    label: "Outside work",
    value: "~1800-rated chess player. Built my own analytics tools for it.",
  },
];

export default function About() {
  return (
    <section id="about" style={{ marginBottom: "4rem" }}>
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
          About
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
          }}
          className="about-grid"
        >
          {ABOUT.map((item) => (
            <div
              key={item.label}
              style={{
                background: "var(--surface)",
                borderRadius: "12px",
                padding: "1rem 1.125rem",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.75px",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginBottom: "5px",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--text-primary)",
                  lineHeight: 1.5,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
