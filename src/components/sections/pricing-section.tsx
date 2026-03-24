import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Стрижка",
    price: "4 000",
    period: " ₽",
    description: "Авторская стрижка с укладкой",
    features: [
      "Консультация и разбор типажа",
      "Мытьё и уход за волосами",
      "Авторская стрижка",
      "Профессиональная укладка",
      "Финишный уход",
    ],
  },
  {
    name: "Полный образ",
    price: "16 000",
    period: " ₽",
    description: "Стрижка + окрашивание",
    features: [
      "Всё из тарифа Стрижка",
      "Балаяж или окрашивание",
      "Тонирование оттенка",
      "Кератиновая маска",
      "Скидка при повторе 10%",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Прозрачные цены</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Никаких скрытых доплат — только качество и забота.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${plan.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Популярный выбор
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-serif text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors text-center ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent/30 border border-border"
                }`}
              >
                Записаться
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
