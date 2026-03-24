import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Стрижка и укладка",
    category: "Стрижки",
    image: "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/9efe5d42-b911-45c9-a9a4-ea0773805673.jpg",
    price: "от 4 000 ₽",
  },
  {
    title: "Окрашивание и балаяж",
    category: "Колористика",
    image: "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/29fa05b5-0157-4bd7-b518-691a0df85052.jpg",
    price: "от 8 000 ₽",
  },
  {
    title: "Кератиновое выпрямление",
    category: "Уход",
    image: "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/a43b01a4-0a53-4bc9-be0b-1bde4fac8609.jpg",
    price: "от 10 000 ₽",
  },
  {
    title: "Свадебная причёска",
    category: "Причёски",
    image: "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/29fa05b5-0157-4bd7-b518-691a0df85052.jpg",
    price: "от 6 000 ₽",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="services" className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Услуги и цены
        </motion.p>

        <div className="divide-y divide-border">
          {services.map((service, i) => (
            <motion.a
              key={i}
              href="#booking"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{service.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors hidden md:block">
                  {service.price}
                </span>
                <Icon name="ArrowRight" size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[280px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={services[hoveredIndex].image}
                alt={services[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
