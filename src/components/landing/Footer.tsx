import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Tiktok } from "../ui/tiktok";
import logoMarca from "@/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

const socialLinks = [
  { 
    Icon: Instagram, 
    url: "https://www.instagram.com/oceanshieldbattery" 
  },
  { 
    Icon: Tiktok, 
    url: "https://www.tiktok.com/@oceanshield01?is_from_webapp=1&sender_device=pc" 
  },
  { 
    Icon: Youtube, 
    url: "https://www.youtube.com/channel/UCHCAEibU0Hv6tfUM1KB64MA" 
  },
  { 
    Icon: Mail, 
    url: "mailto:oceanshieldbatery@gmail.com" 
  }
];

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
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target={url.startsWith('mailto') ? "_self" : "_blank"}
                  rel={url.startsWith('mailto') ? "" : "noopener noreferrer"}
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
