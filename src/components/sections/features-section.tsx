import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function NailShapeAnimation() {
  const [shape, setShape] = useState(0)
  const shapes = [
    "rounded-full",
    "rounded-[40%_40%_50%_50%]",
    "rounded-[30%_30%_40%_40%]",
  ]
  const labels = ["Овал", "Миндаль", "Квадрат"]

  useEffect(() => {
    const interval = setInterval(() => {
      setShape((prev) => (prev + 1) % shapes.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <motion.div
        className={`w-12 h-20 bg-primary/40 border-2 border-primary/60 ${shapes[shape]}`}
        animate={{ borderRadius: shape === 0 ? "50%" : shape === 1 ? "40% 40% 50% 50%" : "20%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="text-sm text-muted-foreground">{labels[shape]}</span>
    </div>
  )
}

function ColorsAnimation() {
  const [color, setColor] = useState(0)
  const colors = [
    "bg-[#3d1f0d]",
    "bg-[#c4a882]",
    "bg-[#f0e6d3]",
  ]
  const names = ["Эспрессо", "Латте", "Капучино"]

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => (prev + 1) % colors.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="flex gap-3">
        {colors.map((c, i) => (
          <motion.div
            key={i}
            className={`w-8 h-8 rounded-full ${c} border border-border`}
            animate={{ scale: i === color ? 1.4 : 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{names[color]}</span>
    </div>
  )
}

function BookingIndicator() {
  const [step, setStep] = useState(0)
  const steps = ["Выберите дату", "Выберите время", "Готово! ✓"]

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
          Почему выбирают Алёну
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
              <NailShapeAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Любая форма</h3>
              <p className="text-muted-foreground text-sm mt-1">Овал, миндаль, квадрат — идеальная форма для ваших рук.</p>
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
              <h3 className="font-serif text-xl text-foreground">Богатая палитра</h3>
              <p className="text-muted-foreground text-sm mt-1">Сотни оттенков — от нежных нюдов до насыщенных тонов.</p>
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
              <p className="text-muted-foreground text-sm mt-1">Запишитесь в удобное время — без звонков и ожидания.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
