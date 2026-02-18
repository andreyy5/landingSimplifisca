import { Check, ArrowRight, Sparkles } from "lucide-react";
import Title from "./Title";
import { motion } from "framer-motion";

export default function Pricing() {
  const features = [
    "Emissão de NFE simplificada",
    "Implantação gratuita",
    "Controle de clientes e fornecedores",
    "Gestão de produtos e estoque",
    "Controle financeiro e fluxo de caixa",
    "Emissão de Ordens de Serviço",
    "Adequação ao regime tributário",
    "Suporte a atualizações contínuas",
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0D3F48]/10 border-t border-[#23A5A9]/10">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Comece Agora"
          heading="Teste grátis por 7 dias, sem compromisso"
          description="Experimente todas as funcionalidades do Simplifisca gratuitamente. Não pedimos cartão de crédito."
        />

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
            }}
            className="relative"
          >
            {/* Glow externo */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#23A5A9]/20 to-[#0D3F48]/20 blur-xl pointer-events-none" />

            <div className="relative p-8 rounded-3xl border-2 border-[#23A5A9]/40 bg-gradient-to-br from-[#0D3F48]/50 to-[#0F1B2B]/70 backdrop-blur shadow-2xl shadow-[#23A5A9]/10 overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#23A5A9]/6 to-transparent animate-shimmer" />

              {/* Badge de destaque */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#0D3F48] to-[#23A5A9] rounded-full text-sm font-bold flex items-center gap-2 text-[#EEF3F3] whitespace-nowrap">
                <Sparkles className="size-4" />
                Plano Mensal
              </div>

              <div className="relative z-10 mt-4">
                {/* Preço */}
                <div className="text-center mb-6">
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-[#EEF3F3]">R$ 129,90</span>
                    <span className="text-lg text-[#606D7C] mb-2">/ mês</span>
                  </div>
                  <p className="text-[#EEF3F3]/70">
                    Gestão completa do seu negócio
                  </p>
                </div>

                {/* Destaque do teste grátis */}
                <div className="p-4 rounded-xl bg-[#23A5A9]/10 border border-[#23A5A9]/30 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-bold text-[#EEF3F3]">7 dias grátis</span>
                  </div>
                  <p className="text-sm text-[#EEF3F3]/65 text-center">
                    Teste todas as funcionalidades sem compromisso
                  </p>
                </div>

                {/* Features em 2 colunas */}
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  {features.map((feat, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.03 }}
                      className="flex items-start gap-2 text-sm text-[#EEF3F3]/80"
                    >
                      <Check className="w-4 h-4 text-[#23A5A9] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://app.simplifisca.com.br/cadastro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-base font-bold bg-gradient-to-br from-[#23A5A9] to-[#0D3F48] text-[#EEF3F3] hover:opacity-90 hover:shadow-lg hover:shadow-[#23A5A9]/30 active:scale-95 transition-all w-full"
                >
                  Começar teste grátis
                  <ArrowRight className="size-5" />
                </a>

                <p className="text-xs text-[#606D7C] text-center mt-4">
                  Sem cartão de crédito • Cancelamento automático após o teste grátis
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}