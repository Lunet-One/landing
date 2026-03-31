"use client";

import { Moon } from "lucide-react";

// Deterministic star positions using seeded LCG — SSR and client always match
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = Math.imul(s, 1664525) + 1013904223;
    return (s >>> 0) / 4294967296;
  };
}

const rand = lcg(137);
const STARS = Array.from({ length: 160 }, () => ({
  x: rand() * 100,
  y: rand() * 100,
  r: 0.3 + rand() * 1.2,
  o: 0.08 + rand() * 0.5,
}));

export default function SpaceBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Moon */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: "-40px",
          animation: "moonFloat 6s ease-in-out infinite",
        }}
      >
        <Moon
          style={{
            width: "340px",
            height: "340px",
            color: "rgba(212,168,67,0.16)",
            filter: "drop-shadow(0 0 50px rgba(212,168,67,0.1))",
          }}
          strokeWidth={0.35}
        />
      </div>

      <style>{`
        @keyframes moonFloat {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>

      {/* Deep vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(4, 6, 14, 0.7) 100%)",
        }}
      />

      {/* Nebula blobs */}
      <div
        className="absolute rounded-full"
        style={{
          width: "800px",
          height: "600px",
          left: "-10%",
          top: "0%",
          background:
            "radial-gradient(ellipse, rgba(55, 20, 120, 0.22) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          right: "-8%",
          top: "10%",
          background:
            "radial-gradient(ellipse, rgba(20, 50, 180, 0.18) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "400px",
          left: "30%",
          bottom: "5%",
          background:
            "radial-gradient(ellipse, rgba(10, 60, 150, 0.15) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "350px",
          height: "350px",
          left: "15%",
          top: "55%",
          background:
            "radial-gradient(ellipse, rgba(80, 20, 110, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Warm amber hint top-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "300px",
          height: "200px",
          right: "20%",
          top: "70%",
          background:
            "radial-gradient(ellipse, rgba(180, 120, 20, 0.07) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Stars */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
          </filter>
        </defs>

        {/* Grain overlay rect */}
        <rect
          width="100%"
          height="100%"
          fill="white"
          opacity="0.028"
          filter="url(#grain-filter)"
        />

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
