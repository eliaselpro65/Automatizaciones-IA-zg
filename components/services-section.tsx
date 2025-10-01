import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Phone, Mail } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    title: "Automatización de Mensajes",
    description:
      "Responde automáticamente a WhatsApp, SMS y chats en tiempo real. Nuestra IA entiende el contexto y mantiene conversaciones naturales con tus clientes.",
    features: ["WhatsApp Business", "SMS inteligentes", "Chat en vivo", "Respuestas personalizadas"],
  },
  {
    icon: Phone,
    title: "Automatización de Llamadas",
    description:
      "Gestiona llamadas entrantes y salientes con voces naturales. Agenda citas, califica leads y brinda información sin intervención humana.",
    features: ["Voz natural", "Agenda automática", "Calificación de leads", "Disponibilidad 24/7"],
  },
  {
    icon: Mail,
    title: "Automatización de Emails",
    description:
      "Envía correos personalizados, responde consultas y gestiona tu bandeja de entrada. Segmenta audiencias y optimiza tus campañas con IA.",
    features: ["Respuestas inteligentes", "Segmentación avanzada", "Campañas automatizadas", "Análisis predictivo"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Nuestros Servicios de Automatización
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluciones completas de IA para transformar cada canal de comunicación de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
