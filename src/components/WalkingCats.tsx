"use client";

type Color = { body: string; dark: string };

const COLORS: Color[] = [
  { body: "#E8834A", dark: "#C26B35" }, // orange
  { body: "#9B9B9B", dark: "#6E6E6E" }, // gray
  { body: "#4A4A4A", dark: "#2A2A2A" }, // black
  { body: "#D4A96A", dark: "#A8804A" }, // cream/tan
];

function CatSVG({ color, flipped }: { color: Color; flipped: boolean }) {
  const { body, dark } = color;
  return (
    <svg
      width="80"
      height="62"
      viewBox="0 0 80 62"
      style={{ transform: flipped ? "scaleX(-1)" : undefined, overflow: "visible" }}
    >
      {/* Tail — at the back (right side when facing right) */}
      <path
        className="cat-tail"
        d="M 63 38 Q 79 26 73 12"
        fill="none"
        stroke={body}
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Body */}
      <ellipse cx="46" cy="40" rx="21" ry="13" fill={body} />

      {/* Head — left side = front when walking right */}
      <circle cx="20" cy="23" r="15" fill={body} />

      {/* Left ear */}
      <polygon points="8,14 4,2 18,12" fill={body} />
      <polygon points="9,13 6,5 17,12" fill="#F4A7B9" />

      {/* Right ear */}
      <polygon points="27,12 31,1 37,11" fill={body} />
      <polygon points="28,12 31,3 35,11" fill="#F4A7B9" />

      {/* Eyes */}
      <ellipse cx="14" cy="22" rx="3" ry="3.5" fill="#1a1a1a" />
      <ellipse cx="26" cy="22" rx="3" ry="3.5" fill="#1a1a1a" />
      <circle cx="15.2" cy="20.5" r="1.1" fill="white" />
      <circle cx="27.2" cy="20.5" r="1.1" fill="white" />

      {/* Nose */}
      <polygon points="20,28 18,30 22,30" fill="#F4A7B9" />

      {/* Mouth */}
      <path
        d="M 18 30 Q 20 32 22 30"
        fill="none"
        stroke={dark}
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Whiskers — left (forward) */}
      <line x1="16" y1="27" x2="1"  y2="25" stroke={dark} strokeWidth="0.9" opacity="0.65" />
      <line x1="16" y1="29" x2="1"  y2="30" stroke={dark} strokeWidth="0.9" opacity="0.65" />

      {/* Whiskers — right (back) */}
      <line x1="24" y1="27" x2="37" y2="25" stroke={dark} strokeWidth="0.9" opacity="0.65" />
      <line x1="24" y1="29" x2="37" y2="30" stroke={dark} strokeWidth="0.9" opacity="0.65" />

      {/* Front legs */}
      <rect className="cat-leg-a" x="30" y="50" width="7" height="12" rx="3.5" fill={body} />
      <rect className="cat-leg-b" x="39" y="50" width="7" height="12" rx="3.5" fill={body} />

      {/* Back legs */}
      <rect className="cat-leg-b" x="52" y="50" width="7" height="12" rx="3.5" fill={body} />
      <rect className="cat-leg-a" x="61" y="50" width="7" height="12" rx="3.5" fill={body} />
    </svg>
  );
}

const CATS = [
  { id: 1, colorIdx: 0, dir: "right" as const, bottom: 50,  duration: 18, delay: -3  },
  { id: 2, colorIdx: 1, dir: "right" as const, bottom: 115, duration: 25, delay: -12 },
  { id: 3, colorIdx: 2, dir: "left"  as const, bottom: 70,  duration: 20, delay: -7  },
  { id: 4, colorIdx: 3, dir: "right" as const, bottom: 85,  duration: 22, delay: -17 },
];

export default function WalkingCats() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 30,
        overflow: "hidden",
      }}
    >
      {CATS.map((cat) => (
        <div
          key={cat.id}
          style={{
            position: "absolute",
            bottom: cat.bottom,
            animation: `${cat.dir === "right" ? "catWalkRight" : "catWalkLeft"} ${cat.duration}s linear ${cat.delay}s infinite`,
          }}
        >
          <div style={{ animation: "bodyBob 0.4s ease-in-out infinite" }}>
            <CatSVG color={COLORS[cat.colorIdx]} flipped={cat.dir === "right"} />
          </div>
        </div>
      ))}
    </div>
  );
}
