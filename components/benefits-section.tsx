import { Clock, TrendingUp, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Ahorra Tiempo Valioso",
    description: "Reduce hasta un 80% el tiempo dedicado a tareas repetitivas de comunicación",
  },
  {
    icon: Users,
    title: "Atención 24/7",
    description: "Tus clientes reciben respuestas inmediatas en cualquier momento del día",
  },
  {
    icon: TrendingUp,
    title: "Aumenta tus Ventas",
    description: "Convierte más leads en clientes con seguimiento automatizado e inteligente",
  },
  {
    icon: Zap,
    title: "Implementación Rápida",
    description: "Comienza a automatizar en días, no en meses. Sin complicaciones técnicas",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Por Qué Elegir Nuestra Automatización?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Beneficios reales que impactan directamente en tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
