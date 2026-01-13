import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FinalSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <motion.div
          className="mb-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["💕", "✨", "💕"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-5xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, i % 2 === 0 ? 10 : -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-black mb-6 text-gradient-love"
        >
          Grazie per questi
          <br />6 mesi incredibili
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Non vedo l'ora di scrivere altri messaggi insieme,
          <br />
          di altri "mimi" e di altri "ti amo" 💗
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring" }}
          className="inline-flex items-center gap-3 gradient-love px-8 py-4 rounded-full glow-coral"
        >
          <Heart className="w-6 h-6 fill-primary-foreground text-primary-foreground" />
          <span className="text-xl font-bold text-primary-foreground">Ti amo, mimi</span>
          <Heart className="w-6 h-6 fill-primary-foreground text-primary-foreground" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-muted-foreground text-sm"
        >
          Con amore, per sempre ♾️
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinalSection;
