import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            ¿Listo para Transformar tu Comunicación?
          </h2>
          <p className="text-lg text-white/90 mb-8 text-pretty">
            Agenda una demo gratuita y descubre cómo la IA puede revolucionar la forma en que tu empresa se comunica con
            sus clientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Solicitar Demo Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary"
            >
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
