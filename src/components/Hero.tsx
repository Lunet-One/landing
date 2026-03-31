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
        className="relative z-10 flex flex-col items-center gap-6 max-w-4xl w-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-card bg-surface/60 text-muted-text text-sm"
        >
          <Dices className="w-3.5 h-3.5 text-blue-bright" />
          <span>Платформа для DnD</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-cinzel font-bold leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 8vw, 5.5rem)" }}
        >
          <span
            className="text-hero-gradient"
            style={{ padding: "0.05em 0.15em", margin: "0 -0.15em", display: "block" }}
          >
            Твой мир.
            <br />
            Твои приключения.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-foreground/80 font-medium"
        >
          Создавай миры, а не правила
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-sm text-muted-text tracking-widest uppercase"
        >
          Создавай&nbsp;&nbsp;·&nbsp;&nbsp;Делись&nbsp;&nbsp;·&nbsp;&nbsp;Играй
        </motion.p>

        {/* Coming soon indicator */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 mt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
          <span className="text-muted-text text-xs tracking-widest uppercase font-medium">
            Запуск в 2026
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-border-card/60 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
