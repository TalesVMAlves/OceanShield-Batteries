import { useInView } from "./HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

// 1. Substitua os 'specs' detalhados
const specs = [
  {
    id: "salt-spray",
    title: "Engenharia de Materiais Antierosão",
    content:
      "A matriz polimérica selecionada para a carcaça possui propriedades inerentes de resistência a cloretos. O projeto estrutural foi desenvolvido com a meta de superar os testes de névoa salina (ASTM B117) tradicionais, eliminando o risco de pitting (corrosão alveolar) comum em gabinetes de alumínio naval.",
    badge: "Imunidade Projetada",
  },
  {
    id: "chemistry",
    title: "Química de Alta Estabilidade Térmica",
    content:
      "Baseando-se em células de Lítio avançadas, o sistema é arquitetado para manter uma eficiência térmica superior. A integração do invólucro polimérico com a gestão de calor interna visa garantir uma operação segura mesmo em ambientes com altas temperaturas (comuns em painéis expostos ao sol em portos e plataformas).",
    badge: "Segurança Térmica",
  },
  {
    id: "polymer",
    title: "Invólucro de Grau Industrial",
    content:
      "Substituímos os metais pesados por polímeros compostos de alta performance estrutural. Os materiais base do nosso invólucro são capazes de suportar altas tensões mecânicas e choques térmicos extremos sem delaminação, mantendo a integridade das células internas.",
    badge: "Alta Resistência Mecânica",
  },
  {
    id: "weight",
    title: "Otimização de Peso e Logística",
    content:
      "Com a substituição do aço e do alumínio estrutural por compostos polimétricos leves, projetamos uma redução drástica no peso final do banco de baterias. Isso facilita não apenas a instalação em campo (muitas vezes reduzindo a necessidade de maquinário pesado de içamento), mas otimiza os custos e a segurança do transporte logístico.",
    badge: "Design Ultra-Leve",
  },
  {
    id: "certifications",
    title: "Roadmap de Certificações (Compliance)",
    content:
      "Nossos equipamentos estão sendo projetados do zero para atender e exceder os requisitos das principais normas da indústria: EN IEC 62619 (segurança de baterias), testes de névoa salina (ISO 9227) e adequações futuras para atmosferas explosivas (Zone 2).",
    badge: "Arquitetura Normatizada",
  },
];

// 2. Substitua os Highlights (Deixe apenas características conceituais e operacionais, sem cravar números sensíveis)
const highlights = [
  { label: "Tecnologia Base", value: "Lítio de Alta Performance" },
  { label: "Material da Carcaça", value: "Polímero Composto" },
  { label: "Resistência à Maresia", value: "Imunidade Total" },
  { label: "Foco Térmico", value: "Alta Dissipação" },
  { label: "Grau de Proteção Alvo", value: "IP67 / IP65" },
  { label: "Vantagem de Peso", value: "Mais leve que Aço/Alumínio" },
  { label: "Integração", value: "Compatível com BMS Padrão" },
  { label: "Manutenção", value: "Design de Baixa Intervenção" },
];

const SpecsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="specs" ref={ref} className="py-24 relative overflow-hidden">
      {/* Separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="container">
        {/* 3. Atualize o cabeçalho para focar no PROJETO */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">Parâmetros de Projeto</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Metas de <span className="gradient-text">Engenharia</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Nossa arquitetura foi desenhada desde o primeiro dia para resolver os gargalos térmicos e corrosivos da infraestrutura pesada.
          </p>
        </div>

        {/* Quick Specs Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl p-4 border border-border/50 hover:border-cyan-500/30 transition-colors duration-200"
              style={{ background: "hsl(215 28% 9%)" }}
            >
              <div className="text-xs text-muted-foreground mb-1">{h.label}</div>
              <div className="text-sm font-bold text-foreground">{h.value}</div>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {specs.map((spec) => (
              <AccordionItem
                key={spec.id}
                value={spec.id}
                className="rounded-xl overflow-hidden border border-border/50 hover:border-cyan-500/30 transition-colors duration-200 px-0"
                style={{ background: "hsl(215 28% 9%)" }}
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <span className="font-semibold text-foreground group-hover:text-cyan-300 transition-colors">
                      {spec.title}
                    </span>
                    <span className="hidden md:inline-block ml-auto mr-4 text-xs px-2.5 py-1 rounded-full font-medium text-cyan-400 flex-shrink-0"
                      style={{ background: "hsl(199 89% 48% / 0.1)", border: "1px solid hsl(199 89% 48% / 0.25)" }}>
                      {spec.badge}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0">
                  <div className="pl-8 text-muted-foreground leading-relaxed text-sm">
                    {spec.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;