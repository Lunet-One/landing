"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, MessageSquare } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const features = [
  {
    icon: Users,
    title: "Найди свою группу",
    description:
      "Ищи игроков и мастеров рядом с тобой или онлайн. Фильтры по системе, времени, формату и опыту.",
  },
  {
    icon: BookOpen,
    title: "Веди свои кампании",
    description:
      "Инструменты для ведения заметок, сессий, персонажей и сюжетов. Всё в одном месте.",
  },
  {
    icon: MessageSquare,
    title: "Будь частью сообщества",
    description:
      "Форумы, ивенты и живое общение с DnD-сообществом. Делись опытом, находи вдохновение.",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-6">
      {/* Separator */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-5">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border-card" />
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-gold/50" />
            <span
              className="text-muted-text tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-cinzel-var)", fontSize: "0.85rem" }}
            >
              Возможности
            </span>
            <div className="w-1 h-1 rounded-full bg-gold/50" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border-card" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group relative p-px rounded-2xl transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(201,168,76,0.35) 0%, rgba(40,55,100,0.5) 40%, rgba(51,102,238,0.2) 100%)",
                  boxShadow: "0 0 0 0 transparent",
                }}
              >
                {/* Card inner */}
                <div
                  className="relative rounded-2xl p-7 h-full transition-colors duration-500"
                  style={{
                    background:
                      "linear-gradient(160deg, #121b30 0%, #0d1422 100%)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(51,102,238,0.2) 0%, rgba(201,168,76,0.08) 100%)",
                      border: "1px solid rgba(102,170,255,0.2)",
                      boxShadow: "0 0 16px rgba(51,102,238,0.12)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-blue-bright" />
                  </div>

                  <h3
                    className="text-foreground mb-3"
                    style={{ fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.25, letterSpacing: "0.01em" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(140,152,180,0.8)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
