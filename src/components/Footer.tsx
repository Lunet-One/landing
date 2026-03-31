import { Moon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-card py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <Moon className="w-3.5 h-3.5 text-blue-bright/60" />
          <span className="font-cinzel text-sm font-bold text-gold/80 tracking-wider">
            LUNET
          </span>
        </div>
        <p className="text-muted-text text-xs">© 2026 LUnet · lunet.one</p>
        <p className="text-muted-text/60 text-xs">
          Сделано для русскоязычного DnD сообщества
        </p>
      </div>
    </footer>
  );
}
