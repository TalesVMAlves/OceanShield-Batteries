import { useInView } from "./HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(199 89% 48% / 0.4), transparent)" }}
      />
      <div
        className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(199 89% 48% / 0.07) 0%, transparent 70%)" }}
      />

      <div className="container relative">
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">Pré-Venda</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Pronto para modernizar seu{" "}
              <span className="gradient-text">sistema de energia?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fale com nosso time técnico de vendas. Avaliamos seu projeto e enviamos uma proposta personalizada.
            </p>
          </div>

          <div
            className="rounded-2xl p-8 md:p-10 glass"
            style={{ border: "1px solid hsl(199 89% 48% / 0.2)" }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nome Completo</label>
                  <Input
                    required
                    placeholder="João da Silva"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-cyan-500/60 focus:ring-cyan-500/20 transition-colors h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">E-mail Corporativo</label>
                  <Input
                    required
                    type="email"
                    placeholder="joao@empresa.com.br"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-cyan-500/60 focus:ring-cyan-500/20 transition-colors h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tamanho do Projeto</label>
                  <Input
                    placeholder="Ex: Embarcação 40ft · 2x 100Ah · 24V"
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-cyan-500/60 focus:ring-cyan-500/20 transition-colors h-11"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-btn text-navy font-bold text-base h-12 rounded-xl hover:opacity-90 hover:scale-[1.01] transition-all duration-200 shadow-[0_0_30px_hsl(199_89%_48%/0.35)] hover:shadow-[0_0_50px_hsl(199_89%_48%/0.5)]"
                >
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Sem spam. Respondemos em até 24h úteis.
                </p>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                  style={{ background: "hsl(199 89% 48% / 0.1)", border: "1px solid hsl(199 89% 48% / 0.3)" }}>
                  <CheckCircle2 className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-black text-foreground">Solicitação recebida!</h3>
                <p className="text-muted-foreground">
                  Obrigado, <span className="text-foreground font-medium">{form.name}</span>. Nossa equipe técnica entrará em contato pelo email <span className="text-cyan-400">{form.email}</span> em até 24h úteis.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
