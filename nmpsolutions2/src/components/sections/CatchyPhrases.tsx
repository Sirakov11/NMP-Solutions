import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function CatchyPhrases() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-blue-50/50 dark:to-blue-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground leading-tight">
            You want to enlarge your business? <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              We make it happen.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-lg border border-border/50"
          >
            <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h4 className="text-xl font-bold font-display mb-2">Your competitors are online. Are you?</h4>
              <p className="text-muted-foreground">Don't let potential clients go to the competition. Establish a dominant digital presence today.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-lg border border-border/50"
          >
            <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h4 className="text-xl font-bold font-display mb-2">Turn visitors into customers</h4>
              <p className="text-muted-foreground">With seamless booking and instant AI chat responses, we convert your traffic into tangible revenue.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
