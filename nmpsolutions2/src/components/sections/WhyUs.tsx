import { motion } from "framer-motion";
import { Zap, Tag, Users, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We respect your time. Get your project launched quickly without compromising on quality."
  },
  {
    icon: Tag,
    title: "Affordable Prices",
    description: "Premium digital solutions that fit your budget. High ROI without the agency price tag."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated developers and designers who understand modern web standards and business needs."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "We are always here for you. Continuous maintenance and support after your site goes live."
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0A1A2F] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight"
            >
              Why Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NMP Solutions?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-100/70 text-lg mb-8"
            >
              We don't just build websites; we build business tools. Our focus is on creating digital experiences that drive growth, streamline operations, and elevate your brand.
            </motion.p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold mb-2 font-display">{feature.title}</h4>
                <p className="text-blue-100/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
