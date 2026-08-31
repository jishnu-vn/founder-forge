import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Embedded Systems & RTOS Fundamentals",
    issuer: "Self-paced / Hands-on ESP32 Projects",
    year: "2025",
  },
  {
    title: "C / C++ Programming",
    issuer: "Coursework & Practice Certification",
    year: "2024",
  },
  {
    title: "Python for Problem Solving",
    issuer: "Online Certification",
    year: "2024",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle">Credentials and continuous learning.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="glass-card glow-border p-6 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Award size={20} />
            </div>
            <h3 className="font-semibold font-display text-foreground">{cert.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
            <span className="text-xs text-primary font-medium mt-3 inline-block">{cert.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
