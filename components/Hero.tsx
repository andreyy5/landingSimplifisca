import {
  ArrowRightIcon,
  ZapIcon,
  CheckIcon,
  SparklesIcon,
} from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleConversion = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17975268120/FuQMCPnUv_4bEJimo_tC",
      value: 1.0,
      currency: "BRL",
      transaction_id: "",
      event_callback: () => {
        window.location.href = url;
      },
    });
  } else {
    window.location.href = url;
  }
};
  const mainImageUrl =
    "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop";

  const trustedLogosText = [
    "Estoque",
    "NFE",
    "NFCE",
    "Financeiro",
    "Ordens de Serviço",
  ];

  return (
    <>
      <section id="home" className="relative z-10">
        {/* Glow de fundo teal */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#23A5A9]/10 blur-3xl" />
          <div className="absolute top-1/2 -right-20 h-72 w-72 rounded-full bg-[#0D3F48]/30 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              {/* Badge */}
              <motion.a
                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-[#23A5A9]/10 border border-[#23A5A9]/20 mb-6 justify-start"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                }}
              >
                <span className="size-2 rounded-full bg-[#23A5A9] animate-pulse" />
                <span className="text-xs text-[#EEF3F3]/80">
                  Chega de dor de cabeça na gestão da sua empresa, junte-se a
                  nós!
                </span>
              </motion.a>

              {/* Heading */}
              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                <Image
                  src="/logoSimplifisca.png"
                  alt="Simplifisca"
                  width={240}
                  height={80}
                  priority
                />

                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#23A5A9] to-[#EEF3F3]">
                  Controle de notas fiscais de forma simplificada!
                </span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                className="text-[#606D7C] max-w-lg mb-8 text-[#EEF3F3]/70"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.2,
                }}
              >
                Combinamos tecnologia, segurança e inovação para oferecer
                soluções que impulsionam o crescimento do seu negócio.
              </motion.p>

              {/* Card de teste grátis */}
              <motion.div
                className="relative p-5 rounded-2xl border-2 border-[#23A5A9]/40 bg-gradient-to-br from-[#0D3F48]/50 to-[#0F1B2B]/60 backdrop-blur mb-8 overflow-hidden"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.25,
                }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#23A5A9]/8 to-transparent animate-shimmer" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <SparklesIcon className="size-5 text-[#23A5A9]" />
                    <span className="text-xs font-bold text-[#23A5A9] uppercase tracking-wider">
                      Ta esperando o quê?
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#EEF3F3] mb-2">
                    Teste GRÁTIS por 7 dias
                  </h3>
                  <p className="text-sm text-[#EEF3F3]/70 mb-3">
                    Experimente todos os recursos sem compromisso. NÃO precisa
                    de cartão de crédito!
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#23A5A9]">
                    <CheckIcon className="size-4" />
                    <span>Acesso completo</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.3,
                }}
              >
<PrimaryButton
  href="#"
  onClick={(e) => {
    e.preventDefault();
    handleConversion("https://app.simplifisca.com.br/cadastro/");
  }}
  className="max-sm:w-full py-3 px-7"
>
  Começar teste grátis
  <ArrowRightIcon className="size-4" />
</PrimaryButton>
              </motion.div>
            </div>

            {/* Right: imagem + cards */}
            <motion.div
              className="mx-auto w-full max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.5,
              }}
            >
              {/* Imagem */}
              <motion.div className="rounded-3xl overflow-hidden border border-[#23A5A9]/15 shadow-2xl shadow-[#23A5A9]/10 bg-gradient-to-b from-[#0D3F48]/50 to-transparent mb-6">
                <div className="relative aspect-[16/10] bg-[#0F1B2B]">
                  <img
                    src={mainImageUrl}
                    alt="agency-work-preview"
                    className="w-full h-full object-cover object-center opacity-90"
                  />

                  <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-[#0F1B2B]/70 backdrop-blur-sm text-xs text-[#EEF3F3]/80 border border-[#23A5A9]/20">
                    Aqui atendemos a sua dor!
                  </div>

                  <div className="absolute right-4 top-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#0D3F48] to-[#23A5A9] text-white text-xs font-bold shadow-lg animate-pulse">
                    7 dias grátis
                  </div>
                </div>
              </motion.div>

              {/* Cards abaixo da imagem */}
              <motion.div
                className="space-y-3"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.6,
                }}
              >
                {/* Card 1 */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0D3F48]/20 border border-[#23A5A9]/15 hover:bg-[#0D3F48]/30 hover:border-[#23A5A9]/30 transition-colors">
                  <ZapIcon className="size-5 text-[#23A5A9] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-[#EEF3F3]">
                      Gestão completa de NFe
                    </div>
                    <div className="text-xs text-[#606D7C]">
                      Emissão, cancelamento e manifestação
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0D3F48]/20 border border-[#23A5A9]/15 hover:bg-[#0D3F48]/30 hover:border-[#23A5A9]/30 transition-colors">
                  <CheckIcon className="size-5 text-[#23A5A9] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-[#EEF3F3]">
                      Sistema de gestão completo
                    </div>
                    <div className="text-xs text-[#606D7C]">
                      Estoque, financeiro e ordens de serviço
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <motion.section
        className="border-y border-[#23A5A9]/15 bg-[#0D3F48]/10 max-md:mt-10"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full overflow-hidden py-6">
            <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
              {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                <span
                  key={i}
                  className="mx-6 text-sm md:text-base font-semibold text-[#606D7C] hover:text-[#23A5A9] tracking-wide transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
