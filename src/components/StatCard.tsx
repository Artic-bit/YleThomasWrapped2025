import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  number: string | number;
  label: string;
  icon?: ReactNode;
  emoji?: string;
  gradient?: "love" | "sunset" | "warm";
  delay?: number;
}

const StatCard = ({ number, label, icon, emoji, gradient = "love", delay = 0 }: StatCardProps) => {
  const gradientClasses = {
    love: "gradient-love",
    sunset: "gradient-sunset",
    warm: "gradient-warm",
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl p-8 ${gradientClasses[gradient]} glow-primary`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="relative z-10">
        {emoji && (
          <motion.span 
            className="text-5xl block mb-4"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
          >
            {emoji}
          </motion.span>
        )}
        {icon && <div className="mb-4">{icon}</div>}
        <motion.h3 
          className="text-6xl md:text-7xl font-black text-primary-foreground mb-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          {number}
        </motion.h3>
        <p className="text-lg md:text-xl text-primary-foreground/90 font-medium">
          {label}
        </p>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-lg" />
    </motion.div>
  );
};

export default StatCard;
