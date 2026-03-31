"use client";

import { motion } from "framer-motion";
import { Dices } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-x-clip">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-card to-transparent" />


      <motion.div
        className="relative z-10 flex flex-col items-center gap-7 max-w-4xl w-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-card bg-surface/60 text-muted-text text-sm tracking-wide"
          style={{ fontFamily: "var(--font-cormorant-var)", fontWeight: 500, fontSize: "0.95rem" }}
        >
          <Dices className="w-3.5 h-3.5 text-blue-bright shrink-0" />
          <span>Платформа для DnD</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-cinzel font-bold leading-[1.08] tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 8.5vw, 6rem)" }}
        >
          <span className="text-hero-gradient block pt-1 pb-2">
            Найди свой мир.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-foreground/75"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 400, letterSpacing: "0.01em" }}
        >
          Создавай миры, а не правила
        </motion.p>

        {/* Ornamental divider */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 opacity-40">
          <div className="w-12 h-px bg-gold/60" />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="2" fill="#c9a84c" />
            <circle cx="7" cy="7" r="5.5" stroke="#c9a84c" strokeWidth="0.6" />
          </svg>
          <div className="w-12 h-px bg-gold/60" />
        </motion.div>


{/* Coming soon indicator */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 mt-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold-warm/70 animate-pulse" />
          <span
            className="text-muted-text tracking-widest uppercase"
            style={{ fontSize: "0.95rem" }}
          >
            Запуск в <span style={{ fontFamily: "var(--font-cinzel-var)" }}>2026</span>
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-gold-warm/70 animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/30 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
