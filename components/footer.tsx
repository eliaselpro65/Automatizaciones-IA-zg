import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold">AI</span>
              </div>
              <span className="text-xl font-bold">AutomateIA</span>
            </div>
            <p className="text-slate-400 text-sm text-pretty">
              Transformamos la comunicación empresarial con inteligencia artificial de última generación.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Automatización de Mensajes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Automatización de Llamadas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Automatización de Emails
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Consultoría IA
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carreras
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:soporte@automateia.com" className="hover:text-primary transition-colors">
                  soporte@automateia.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+34900123456" className="hover:text-primary transition-colors">
                  +34 900 123 456
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2025 AutomateIA. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
