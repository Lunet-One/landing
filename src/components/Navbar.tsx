import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-card/50 bg-background/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-blue-bright" />
          <span className="font-cinzel text-base font-bold text-gold tracking-wider">
            LUNET
          </span>
          <span className="text-muted-text text-sm">.one</span>
        </div>

        <span className="text-xs font-medium px-3 py-1 rounded-full border border-blue/40 text-blue-bright tracking-wide">
          Скоро
        </span>
      </nav>
    </header>
  );
}
