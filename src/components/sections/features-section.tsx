import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function HairStyleAnimation() {
  const [style, setStyle] = useState(0)
  const styles = ["Боб", "Каре", "Каскад"]
  const shapes = [
    "rounded-t-full rounded-b-[30%]",
    "rounded-t-[40%] rounded-b-[20%]",
    "rounded-t-[60%] rounded-b-[50%]",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStyle((prev) => (prev + 1) % styles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <motion.div
        className={`w-16 h-24 bg-primary/40 border-2 border-primary/60 ${shapes[style]}`}
        animate={{ borderRadius: style === 0 ? "50% 50% 30% 30%" : style === 1 ? "40% 40% 20% 20%" : "60% 60% 50% 50%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="text-sm text-muted-foreground">{styles[style]}</span>
    </div>
  )
}

function ColorsAnimation() {
  const [color, setColor] = useState(0)
  const colors = [
    "bg-[#1a0a00]",
    "bg-[#3d1f0d]",
    "bg-[#7b4a2d]",
    "bg-[#c4a882]",
    "bg-[#d4b896]",
    "bg-[#e8d5b7]",
    "bg-[#f5deb3]",
    "bg-[#faf0e6]",
  ]
  const names = ["Чёрный шоколад", "Шоколад", "Каштан", "Балаяж", "Карамель", "Тоффи", "Блонд", "Платина"]

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => (prev + 1) % colors.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="flex gap-2 flex-wrap justify-center">
        {colors.map((c, i) => (
          <motion.div
            key={i}
            className={`rounded-full ${c} border border-border`}
            animate={{ scale: i === color ? 1.5 : 1, width: i === color ? 36 : 24, height: i === color ? 36 : 24 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{names[color]}</span>
    </div>
  )
}

function BookingIndicator() {
  const [step, setStep] = useState(0)
  const steps = ["Выберите услугу", "Выберите время", "Готово! ✓"]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <motion.div
        key={step}
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-base font-medium text-foreground">{steps[step]}</span>
      </motion.div>
      <div className="flex gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${i <= step ? "bg-primary" : "bg-foreground/15"}`}
          />
        ))}
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Почему выбирают меня
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <HairStyleAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Любая стрижка</h3>
              <p className="text-muted-foreground text-sm mt-1">Боб, каре, каскад — идеальная форма для вашего лица.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <ColorsAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Колористика</h3>
              <p className="text-muted-foreground text-sm mt-1">Балаяж, омбре, мелирование — цвет, который живёт.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <BookingIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Онлайн-запись</h3>
              <p className="text-muted-foreground text-sm mt-1">Запись сразу через мастера, заранее вы можете выбрать образ и обсудить его с мастером.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}