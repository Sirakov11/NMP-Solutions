import { motion } from "framer-motion";
import { Globe, CalendarCheck, MessageSquareMore } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Custom Websites",
    description: "Professional, fast, and responsive websites tailored to your brand. We build digital storefronts that captivate and convert.",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    title: "Booking Systems",
    description: "Say goodbye to manual scheduling. Our seamless online booking systems allow your clients to schedule appointments 24/7.",
    icon: CalendarCheck,
    color: "from-indigo-500 to-blue-500",
    bgLight: "bg-indigo-50 dark:bg-indigo-950/20"
  },
  {
    title: "AI Chatbots",
    description: "Automate your customer support. Intelligent chatbots that answer queries, capture leads, and assist users around the clock.",
    icon: MessageSquareMore,
    color: "from-cyan-500 to-teal-400",
    bgLight: "bg-cyan-50 dark:bg-cyan-950/20"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            Everything you need to succeed online
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-border/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-card overflow-hidden group">
                <CardHeader className="pb-4 relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500`} />
                  
                  <div className={`w-14 h-14 rounded-2xl ${service.bgLight} flex items-center justify-center mb-4 relative z-10`}>
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
