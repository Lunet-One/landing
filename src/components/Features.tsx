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
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border-card" />
          <span className="font-cinzel text-xs text-muted-text tracking-widest uppercase">
            Возможности
          </span>
          <div className="flex-1 h-px bg-border-card" />
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
                className="group p-6 rounded-xl border border-border-card bg-surface hover:border-blue/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-5 group-hover:bg-blue/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-blue-bright" />
                </div>
                <h3 className="font-cinzel text-base font-bold text-silver mb-2 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
