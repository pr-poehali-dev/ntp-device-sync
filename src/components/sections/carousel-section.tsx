import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/a43b01a4-0a53-4bc9-be0b-1bde4fac8609.jpg",
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/29fa05b5-0157-4bd7-b518-691a0df85052.jpg",
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/9efe5d42-b911-45c9-a9a4-ea0773805673.jpg",
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/a43b01a4-0a53-4bc9-be0b-1bde4fac8609.jpg",
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/29fa05b5-0157-4bd7-b518-691a0df85052.jpg",
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/9efe5d42-b911-45c9-a9a4-ea0773805673.jpg",
]

export function CarouselSection() {
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Каждая работа — маленький шедевр.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] h-[300px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src}
                alt={`Работа ${(i % portfolioItems.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
