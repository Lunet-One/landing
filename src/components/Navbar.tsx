import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      {/* Top gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <nav className="max-w-6xl mx-auto px-6 h-15 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Moon className="w-4 h-4 text-gold/80" />
          <span className="font-cinzel text-base font-bold tracking-wider text-gold-gradient">
            LUNET
          </span>
        </div>

        <span
          className="text-xs font-medium px-3.5 py-1.5 rounded-full tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-cinzel-var)",
            fontSize: "0.6rem",
            background: "rgba(201, 168, 76, 0.07)",
            border: "1px solid rgba(201, 168, 76, 0.25)",
            color: "rgba(201, 168, 76, 0.8)",
          }}
        >
          Скоро
        </span>
      </nav>

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-border-card/60 to-transparent" />
    </header>
  );
}
