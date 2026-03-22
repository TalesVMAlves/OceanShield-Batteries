import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import logoMarca from "@/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoMarca} alt="Logótipo OceanShield" className="h-10 w-auto" />
              <span className="font-bold text-lg text-foreground">OceanShield Batteries</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Sistemas de energia LYP com invólucro aeroespacial para ambientes marinhos extremos.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-border/50 hover:border-cyan-500/50 flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-all duration-200 hover:bg-cyan-500/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Produto</h4>
            {["Tecnologia LYP", "Especificações", "Certificações", "Comparativo"].map((link) => (
              <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Empresa</h4>
            {["Sobre Nós", "Blog Técnico", "Distribuidores", "Contato B2B"].map((link) => (
              <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div
          className="pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
        >
          <span>© {year} OceanShield Batteries. Todos os direitos reservados.</span>
          <span className="flex items-center gap-1.5">
            Desenvolvido com{" "}
            <span className="text-cyan-400 font-semibold">Tecnologia TRIZ</span>
            {" "}· Política de Privacidade · Termos de Uso
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
