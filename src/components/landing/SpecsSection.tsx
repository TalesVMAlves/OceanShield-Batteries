import { useInView } from "./HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const specs = [
  {
    id: "salt-spray",
    title: "Teste de Névoa Salina (ASTM B117)",
    content:
      "A carcaça OceanShield foi submetida a 2.000 horas contínuas de névoa salina a 5% NaCl, 35°C. Resultado: zero pitting, zero delaminação, zero variação na resistência de isolamento (mantida acima de 500 MΩ). Carcaças de alumínio 5083 falharam com formação de pites após 240h.",
    badge: "2.000h · Zero Degradação",
  },
  {
    id: "chemistry",
    title: "Química LYP — Lítio-Ítrio-Fosfato",
    content:
      "A dopagem com Ítrio na estrutura olivina do fosfato de lítio reduz a resistência interna em ~18% comparada ao LiFePO4 convencional. Isso se traduz em menor geração de calor, maior eficiência coulômbica (>99,2%) e estabilidade de capacidade superior a 3.500 ciclos a 80% DoD.",
    badge: ">3.500 Ciclos · 80% DoD",
  },
  {
    id: "polymer",
    title: "Material da Carcaça — GFRP Aeroespacial",
    content:
      "A carcaça é fabricada em Glass Fiber Reinforced Polymer (GFRP) grau aeronáutico, com matriz de resina epóxi de alta temperatura. Resistência à tração: 180 MPa. Módulo de elasticidade: 12 GPa. Temperatura de serviço: -40°C a +85°C. Norma de referência: EN 2598 (aeroespacial).",
    badge: "180 MPa · -40°C a +85°C",
  },
  {
    id: "weight",
    title: "Redução de Peso — Análise Comparativa",
    content:
      "Sistema de 100Ah: Carcaça de aço inox 316L = 4,2 kg. Carcaça de alumínio 5083 = 2,8 kg. Carcaça OceanShield GFRP = 2,38 kg. Redução de 15,0% vs. alumínio e 43% vs. aço. Em embarcações de grande porte com múltiplos bancos de bateria, isso representa centenas de quilos de economia de peso abaixo da linha d'água.",
    badge: "15% vs. Alumínio · 43% vs. Aço",
  },
  {
    id: "certifications",
    title: "Certificações e Normas Aplicadas",
    content:
      "EN IEC 62619 (segurança de baterias secundárias de lítio). IEC 60068-2-11 (névoa salina). ISO 9227. DNV GL Rule for Batteries (homologação embarcada). ATEX Zone 2 (em desenvolvimento para Q4 2025).",
    badge: "DNV GL · IEC 62619",
  },
];

const highlights = [
  { label: "Tensão Nominal", value: "25,6 V (8S)" },
  { label: "Capacidade", value: "50–400 Ah" },
  { label: "Ciclos de Vida", value: "> 3.500 @ 80% DoD" },
  { label: "Temperatura de Operação", value: "-20°C a +65°C" },
  { label: "Grau de Proteção", value: "IP67 nativo" },
  { label: "Peso (100Ah / 25,6V)", value: "12,4 kg" },
  { label: "Comunicação", value: "CAN Bus · RS485 · BT" },
  { label: "BMS Integrado", value: "Ativo, multi-estágio" },
];

const SpecsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="specs" ref={ref} className="py-24 relative overflow-hidden">
      {/* Separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="container">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">Dados Técnicos</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Especificações <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Transparência total para engenheiros e integradores de sistemas.
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
