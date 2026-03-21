import { useInView } from "./HeroSection";
import { AlertTriangle, ShieldCheck } from "lucide-react";

const ProblemSolutionSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="solution" ref={ref} className="py-24 relative overflow-hidden">
      <div className="container">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">Por que OceanShield?</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            O Problema. A Solução.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Problem Card */}
          <div
            className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{
              background: "linear-gradient(135deg, hsl(215 28% 10%), hsl(215 28% 13%))",
              border: "1px solid hsl(0 72% 50% / 0.2)",
            }}
          >
            {/* Red tinted noise overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top left, hsl(0 72% 50% / 0.1) 0%, transparent 60%)" }}
            />
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">O Problema</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight">
                O Inimigo Metálico
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                A maresia causa <span className="text-red-400 font-semibold">corrosão galvânica e pites no aço e alumínio</span>, gerando vazamento de eletrólitos e falhas críticas em sistemas de energia embarcada.
              </p>

              <div className="space-y-3">
                {[
                  "Corrosão galvânica progressiva",
                  "Vazamento de eletrólitos",
                  "Falha estrutural da carcaça",
                  "Alto custo de manutenção",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div
            className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{
              background: "linear-gradient(135deg, hsl(215 28% 10%), hsl(215 28% 13%))",
              border: "1px solid hsl(199 89% 48% / 0.35)",
              boxShadow: "0 0 40px hsl(199 89% 48% / 0.1), inset 0 0 40px hsl(173 58% 50% / 0.03)",
            }}
          >
            {/* Cyan tinted glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top right, hsl(199 89% 48% / 0.1) 0%, transparent 60%)" }}
            />
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "hsl(199 89% 48% / 0.15)", border: "1px solid hsl(199 89% 48% / 0.4)" }}
                >
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">A Solução</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight">
                A Evolução em Polímero
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                Substituímos o metal por <span className="text-cyan-400 font-semibold">compostos aeroespaciais de alta performance</span>. Sem reação com o sal. Sem corrosão. Desempenho máximo em qualquer ambiente marítimo.
              </p>

              <div className="space-y-3">
                {[
                  "Imunidade total à corrosão galvânica",
                  "Invólucro de polímero aeroespacial",
                  "15% de redução de peso total",
                  "Vida útil 3x maior que metal",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
