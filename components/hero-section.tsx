import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Tecnología de Inteligencia Artificial
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            Automatiza tus mensajes, llamadas y correos con <span className="text-primary">IA</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty max-w-2xl mx-auto">
            Transforma la comunicación de tu empresa con inteligencia artificial. Ahorra tiempo, ofrece atención 24/7 y
            aumenta tus ventas mientras tu equipo se enfoca en lo que realmente importa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground text-base px-8">
              Solicitar Demo Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              Ver Cómo Funciona
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Atención continua</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">80%</div>
              <div className="text-sm text-muted-foreground mt-1">Ahorro de tiempo</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground mt-1">Más conversiones</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
    </section>
  )
}
