import { motion } from "framer-motion";
import StatCard from "./StatCard";

const stats = [
  { number: "115+", label: 'Volte che abbiamo scritto "mimi" o "mimimi"', emoji: "🥺", gradient: "love" as const },
  { number: "27.377", label: "Messaggi totali scambiati", emoji: "💬", gradient: "sunset" as const },
  { number: "350+", label: "Buonanotte sussurrate (entrambi)", emoji: "🌙", gradient: "warm" as const },
  { number: "320+", label: "Buongiorno per iniziare la giornata", emoji: "☀️", gradient: "love" as const },
  { number: "Tu: 47", label: 'Chi ha scritto "scusa" più volte? (Io: 31)', emoji: "🙈", gradient: "sunset" as const },
  { number: "892+", label: 'Volte che ci siamo detti "ti amo"', emoji: "💗", gradient: "love" as const },
  { number: "850+", label: "Foto e video condivisi", emoji: "📸", gradient: "sunset" as const },
  { number: "1.500+", label: '"Ahaha/Hahaha" e risate scritte', emoji: "😂", gradient: "warm" as const },
  { number: "amore", label: "La parola più usata (dopo i nomi)", emoji: "💕", gradient: "love" as const },
  { number: "201", label: "Giorni di chat insieme", emoji: "📅", gradient: "sunset" as const },
  { number: "00:00-02:00", label: "Ora più attiva per chattare", emoji: "🦉", gradient: "warm" as const },
  { number: "∞", label: "Volte che ci siamo preoccupati l'uno per l'altra", emoji: "🤗", gradient: "love" as const },
  { number: "42+", label: '"Cicci" usato come nomignolo', emoji: "🥰", gradient: "sunset" as const },
  { number: "7+", label: "Giorni consecutivi passati insieme", emoji: "🏠", gradient: "warm" as const },
  { number: "Taiga", label: "Gatto più nominato", emoji: "🐱", gradient: "love" as const },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-gradient-sunset"
        >
          Le Nostre Statistiche
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto"
        >
          201 giorni di conversazioni, condensati in numeri che raccontano la nostra storia
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              emoji={stat.emoji}
              gradient={stat.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
