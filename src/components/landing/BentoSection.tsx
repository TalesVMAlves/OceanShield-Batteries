import { useInView } from "./HeroSection";
import { Shield, Thermometer, Truck, Wrench } from "lucide-react";

const bentoItems = [
  {
    id: "zero-corrosion",
    icon: Shield,
    tag: "Durabilidade Extrema",
    title: "Resistência Superior à Maresia",
    description:
      "Desenvolvido especificamente para o setor portuário e offshore. Nosso revestimento polimérico inovador não sofre erosão ou degradação química em ambientes com alta concentração de névoa salina.",
    accent: "cyan",
    colSpan: "md:col-span-2",
    large: true,
  },
  {
    id: "heat-resistance",
    icon: Thermometer,
    tag: "Estabilidade",
    title: "Alta Resistência ao Calor",
    description:
      "Estrutura polimérica projetada para dissipar calor eficientemente, mantendo a integridade da bateria mesmo nas condições térmicas mais severas do setor de energia.",
    accent: "teal",
    colSpan: "md:col-span-1",
    large: false,
  },
  {
    id: "transport-safety",
    icon: Truck,
    tag: "Logística Segura",
    title: "Segurança no Transporte",
    description:
      "Superamos os desafios logísticos do Lítio. O invólucro absorve impactos e estabiliza a química interna, garantindo transporte rodoviário e marítimo 100% seguro para grandes volumes.",
    accent: "cyan",
    colSpan: "md:col-span-1",
    large: false,
  },
  {
    id: "business-model",
    icon: Wrench,
    tag: "Parceria Estratégica",
    title: "Fornecimento e Manutenção",
    description:
      "Atendemos médias e grandes empresas (CNPJ) com venda direta dimensionada para sua planta. Além do produto, oferecemos contratos de manutenção preventiva e corretiva para garantir o máximo desempenho e vida útil superior dos equipamentos.",
    accent: "teal",
    colSpan: "md:col-span-2",
    large: false,
  },
];

const accentMap = {
  cyan: {
    iconBg: "hsl(199 89% 48% / 0.12)",
    iconBorder: "hsl(199 89% 48% / 0.35)",
    iconColor: "text-cyan-400",
    tagColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/60",
    hoverShadow: "hover:shadow-[0_0_30px_hsl(199_89%_48%/0.15)]",
    dotBg: "bg-cyan-400",
  },
  teal: {
    iconBg: "hsl(173 58% 50% / 0.12)",
    iconBorder: "hsl(173 58% 50% / 0.35)",
    iconColor: "text-teal-400",
    tagColor: "text-teal-400",
    hoverBorder: "hover:border-teal-500/60",
    hoverShadow: "hover:shadow-[0_0_30px_hsl(173_58%_50%/0.15)]",
    dotBg: "bg-teal-400",
  },
};

const BentoSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="benefits" ref={ref} className="py-24 relative">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(199 89% 48% / 0.05) 0%, transparent 70%)" }}
      />

      <div className="container relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">Vantagem Competitiva</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Engenhado para{" "}
            <span className="gradient-text">Superar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {bentoItems.map((item, i) => {
            const acc = accentMap[item.accent as keyof typeof accentMap];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`
                  group relative rounded-2xl p-6 md:p-8 cursor-default
                  transition-all duration-300 ease-out
                  border border-border/50
                  ${acc.hoverBorder} ${acc.hoverShadow}
                  hover:scale-[1.015]
                  ${item.colSpan}
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
                style={{
                  background: "hsl(215 28% 9%)",
                  transitionDelay: `${150 + i * 100}ms`,
                }}
              >
                {/* Subtle inner glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${
                      item.accent === "cyan"
                        ? "hsl(199 89% 48% / 0.06)"
                        : "hsl(173 58% 50% / 0.06)"
                    } 0%, transparent 60%)`,
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: acc.iconBg, border: `1px solid ${acc.iconBorder}` }}
                    >
                      <Icon className={`h-5 w-5 ${acc.iconColor}`} />
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${acc.tagColor} opacity-70`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`font-black text-foreground mb-3 ${item.large ? "text-2xl md:text-3xl" : "text-xl"}`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
