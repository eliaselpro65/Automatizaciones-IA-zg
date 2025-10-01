import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">AI</span>
          </div>
          <span className="text-xl font-bold text-foreground">AutomateIA</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#beneficios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Beneficios
          </a>
          <a href="#testimonios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Testimonios
          </a>
          <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex bg-primary hover:bg-accent text-primary-foreground">
            Solicitar Demo
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
