import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "KlaroChess",
    tagline: "Chess analytics & repertoire platform",
    accentColor: "#378ADD",
    tags: ["Java", "Spring Boot", "React", "Supabase"],
    detail:
      "Spring Boot backend, React frontend, PostgreSQL via Supabase. Chess.com data ingestion, Stockfish engine integration, Google OAuth, and community repertoire sharing.",
    github: "#",
    live: null,
  },
  {
    title: "PoseTek",
    tagline: "Android sports performance app with AI pose analysis",
    accentColor: "#1D9E75",
    tags: ["Kotlin", "FastAPI", "MediaPipe", "Android"],
    detail:
      "Kotlin Android app with on-device MediaPipe pose estimation. Python/FastAPI backend on Railway. Real-time movement feedback for athletes.",
    github: "#",
    live: null,
  },
  {
    title: "BlueROV Vision",
    tagline: "Underwater robotics computer vision research",
    accentColor: "#D85A30",
    tags: ["PyTorch", "YOLO", "Python"],
    detail:
      "YOLO model trained for underwater object detection on a BlueROV2 platform. PyTorch pipeline with preprocessing optimized for low-visibility environments.",
    github: "#",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ marginBottom: "4rem" }}>
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
          Projects
        </div>
      </SectionReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "12px",
        }}
      >
        {PROJECTS.map((project, i) => (
          <SectionReveal key={project.title} delay={i * 0.1}>
            <ProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
