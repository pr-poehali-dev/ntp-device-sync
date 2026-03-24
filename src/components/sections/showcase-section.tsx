import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseImages = [
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/e2c60096-852f-4648-9d92-fe47dfc02aac.jpg",
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/f36b45e7-921d-4596-bd94-21ea4ed203f9.jpg",
  "https://cdn.poehali.dev/projects/aaf18bea-74d1-4b76-b386-c01e5633c9ea/files/e2c9c119-1538-415b-a2ea-7072c3da766c.jpg",
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Биография
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-6">
              Алёна Ежова — <em className="italic">топ-мастер Москвы</em>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Алёна Анатольевна Ежова — один из ведущих мастеров ногтевого сервиса Москвы с многолетним опытом и безупречной репутацией.
              </p>
              <p>
                Её работы отличают точность линий, внимание к деталям и глубокое понимание потребностей каждой клиентки. Алёна постоянно совершенствует своё мастерство, проходя обучение у лучших специалистов отрасли.
              </p>
              <p>
                В своей практике она использует только сертифицированные материалы премиум-класса, которые гарантируют долговечный результат и безопасность.
              </p>
            </div>
            <motion.a
              href="#booking"
              className="inline-block mt-8 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium hover:bg-primary/90 transition-colors text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-clickable
            >
              Записаться к Алёне
            </motion.a>
          </motion.div>

          <motion.div
            className="relative h-[400px] rounded-xl overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={showcaseImages[2]}
              alt="Алёна Ежова — топ-мастер"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Галерея работ
        </motion.p>

        <div id="gallery" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={src}
                alt={`Работа ${i + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
