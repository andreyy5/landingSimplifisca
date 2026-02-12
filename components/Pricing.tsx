import { Check, ArrowRight, Sparkles } from "lucide-react";
import { PrimaryButton } from "./Buttons";
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
    <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
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
            <div className="relative p-8 rounded-3xl border-2 border-indigo-500/50 bg-gradient-to-br from-indigo-950/60 to-purple-950/40 backdrop-blur shadow-2xl overflow-hidden">
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />

              {/* Badge de destaque */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-sm font-bold flex items-center gap-2">
                <Sparkles className="size-4" />
                Plano Mensal
              </div>

              <div className="relative z-10 mt-4">
                {/* Preço */}
                <div className="text-center mb-6">
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-5xl font-extrabold">R$ 129,90</span>
                    <span className="text-lg text-gray-400 mb-2">/ mês</span>
                  </div>
                  <p className="text-gray-300">
                    Gestão completa do seu negócio
                  </p>
                </div>

                {/* Destaque do teste grátis */}
                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {/* <Sparkles className="size-5 text-yellow-400" /> */}
                    <span className="font-bold text-white">7 dias grátis</span>
                  </div>
                  <p className="text-sm text-gray-300 text-center">
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
                      className="flex items-start gap-2 text-sm text-gray-200"
                    >
                      <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}

                <a
                  href="https://app.simplifisca.com.br/cadastro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-base font-bold bg-gradient-to-br from-indigo-500 to-indigo-600 hover:opacity-90 active:scale-95 transition-all w-full"
                >
                  Começar teste grátis
                  <ArrowRight className="size-5" />
                </a>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Sem cartão de crédito • Cancelamento automático após o teste
                  grátis
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
