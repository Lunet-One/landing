import { Moon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-12 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(51,102,238,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-card to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">

        {/* Logo block */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Moon className="w-5 h-5 text-gold/60" />
            <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-gold-gradient">
              LUNET
            </span>
          </div>
          <p
            className="text-muted-text text-center"
            style={{ fontSize: "1rem", fontWeight: 500, maxWidth: "320px", lineHeight: 1.6 }}
          >
            Платформа для русскоязычного DnD сообщества
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border-card" />
          <div className="w-1 h-1 rounded-full bg-gold/30" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border-card" />
        </div>

        {/* Bottom row */}
        <p className="text-muted-text/50" style={{ fontSize: "0.85rem" }}>
          © 2026 LUnet · Все права защищены
        </p>
      </div>
    </footer>
  );
}
