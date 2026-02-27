import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "B.Tech Computer Science Engineering",
    period: "Current",
    detail: "CGPA: 8.41",
    active: true,
  },
  {
    title: "Class 12 (Higher Secondary)",
    period: "Completed",
    detail: "Score: 81.2%",
    active: false,
  },
  {
    title: "Class 10 (Secondary)",
    period: "Completed",
    detail: "Score: 76.2%",
    active: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">My academic journey.</p>
      </motion.div>

      <div className="relative max-w-2xl">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}>
                <GraduationCap size={20} />
              </div>

              <div className="glass-card p-5 flex-1">
                <span className="text-xs text-primary font-medium">{item.period}</span>
                <h3 className="font-semibold font-display text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
