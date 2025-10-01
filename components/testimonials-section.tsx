import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Directora de Operaciones",
    company: "TechSolutions SA",
    content:
      "Desde que implementamos la automatización con IA, nuestro equipo de ventas ha triplicado su productividad. Las respuestas automáticas son tan naturales que nuestros clientes ni siquiera notan la diferencia.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "CEO",
    company: "Innovate Corp",
    content:
      "La automatización de llamadas ha sido un cambio radical. Ahora podemos atender a cientos de clientes simultáneamente sin perder la calidad del servicio. Nuestra tasa de conversión aumentó un 45%.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Gerente de Marketing",
    company: "Digital Growth",
    content:
      "El sistema de emails automatizados nos ha permitido personalizar la comunicación a escala. Hemos visto un incremento del 60% en la apertura de correos y un 35% más de conversiones.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Empresas que ya están transformando su comunicación con IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
