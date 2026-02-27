import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">Let's build something great together.</p>
      </motion.div>

      <div className="max-w-lg space-y-5">
        <motion.a
          href="mailto:jishnukunhiraman66@gmail.com"
          className="glass-card p-6 flex items-center gap-4 group hover:border-primary/40 transition-colors block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-foreground text-sm">jishnukunhiraman66@gmail.com</p>
          </div>
        </motion.a>

        <motion.div
          className="glass-card p-6 flex items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-foreground text-sm">Kozhikode, Kerala, India – 673517</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
