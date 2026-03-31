"use client";

// Deterministic star positions using seeded LCG — SSR and client always match
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = Math.imul(s, 1664525) + 1013904223;
    return (s >>> 0) / 4294967296;
  };
}

const rand = lcg(137);
const STARS = Array.from({ length: 110 }, () => ({
  x: rand() * 100,
  y: rand() * 100,
  r: 0.4 + rand() * 1.1,
  o: 0.12 + rand() * 0.55,
}));

export default function SpaceBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Nebula blobs */}
      <div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "500px",
          left: "-8%",
          top: "5%",
          background:
            "radial-gradient(ellipse, rgba(55, 30, 130, 0.28) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          right: "-5%",
          top: "15%",
          background:
            "radial-gradient(ellipse, rgba(25, 55, 190, 0.22) 0%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "350px",
          left: "35%",
          bottom: "10%",
          background:
            "radial-gradient(ellipse, rgba(15, 70, 160, 0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "300px",
          height: "300px",
          left: "20%",
          top: "60%",
          background:
            "radial-gradient(ellipse, rgba(70, 20, 120, 0.14) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Stars */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {STARS.map((star, i) => (
          <circle
            key={i}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.r}
            fill="white"
            fillOpacity={star.o}
          />
        ))}
      </svg>
    </div>
  );
}
