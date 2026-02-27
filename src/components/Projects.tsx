import { motion } from "framer-motion";
import { ExternalLink, Cpu } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Real-Time RTOS using ESP32",
    description:
      "Designed and implemented a lightweight real-time operating system on ESP32 microcontroller demonstrating task scheduling, multitasking, and embedded system control.",
    tags: ["C", "ESP32", "RTOS", "Embedded Systems"],
    icon: Cpu,
    details:
      "This project focused on building a custom RTOS from scratch on the ESP32 platform. Key features include preemptive task scheduling, inter-task communication via message queues, mutex-based resource management, and real-time execution guarantees. The system was optimized for minimal memory footprint and maximum performance, demonstrating deep understanding of embedded system constraints.",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">What I've been building.</p>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass-card glow-border p-8 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setActiveProject(activeProject === i ? null : i)}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <project.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold font-display text-foreground">{project.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {activeProject === i && (
                  <motion.div
                    className="mt-6 pt-6 border-t border-border"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-foreground/80 leading-relaxed">{project.details}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
