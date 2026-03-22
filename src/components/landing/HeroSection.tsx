import { useState, useEffect, useRef } from "react";
import batteryHero from "@/assets/battery-hero.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoMarca from "@/assets/logo.png";

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

export { useInView };

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-dot-bg">
      {/* Radial glow behind product */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, hsl(199 89% 48% / 0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, hsl(173 58% 50% / 0.08) 0%, transparent 70%)" }}
        />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center gap-2">
          <img src={logoMarca} alt="Logótipo OceanShield" className="h-10 w-auto" />
          <span className="font-bold text-lg tracking-tight text-foreground">OceanShield</span>
          <span className="font-light text-lg text-muted-foreground">Batteries</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#solution" className="hover:text-foreground transition-colors">Solução</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Benefícios</a>
          <a href="#specs" className="hover:text-foreground transition-colors">Especificações</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contato</a>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-200"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Falar com Vendas
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className={`space-y-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyan-500/30 text-xs font-medium text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Inovação B2B · Setor Portuário e Energia
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              A Energia que{" "}
              <span className="gradient-text">Desafia o Mar.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Soluções de armazenamento de energia em Lítio de alta performance para o setor de óleo e gás, portos e indústrias. Nossa inovação em polímero garante <span className="text-cyan-400">resistência máxima à maresia e ao calor</span>, reduzindo drasticamente seus custos de manutenção.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-btn text-navy font-bold text-base px-8 py-6 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-[0_0_30px_hsl(199_89%_48%/0.4)] hover:shadow-[0_0_50px_hsl(199_89%_48%/0.6)]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Reservar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/60 text-muted-foreground hover:text-foreground hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-200 text-base px-8 py-6 rounded-xl"
                onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Especificações Técnicas
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-border/40">
              {[
                { value: "↓ Custos", label: "Menor Manutenção Anual" },
                { value: "Máxima", label: "Resistência Térmica e Maresia" },
                { value: "100%", label: "Segurança no Transporte" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Battery Image */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: "radial-gradient(ellipse, hsl(199 89% 48% / 0.15) 0%, transparent 65%)" }}
            />
            <img
              src={batteryHero}
              alt="OceanShield LYP Battery with Aerospace Polymer Casing"
              className="relative z-10 w-full max-w-lg animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  );
};

export default HeroSection;
