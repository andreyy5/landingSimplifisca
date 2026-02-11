import {
  ArrowRightIcon,
  PlayIcon,
  ZapIcon,
  CheckIcon,
  SparklesIcon,
} from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { motion } from "framer-motion";

export default function Hero() {
  const trustedUserImages = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50",
  ];

  const mainImageUrl =
    "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop";

  const galleryStripImages = [];

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
        <div className="max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <motion.a
                // href="app.simplifisca.com.br/"
                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
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
                {/* <div className="flex -space-x-2">
                  {trustedUserImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Client ${i + 1}`}
                      className="size-6 rounded-full border border-black/50"
                      width={40}
                      height={40}
                    />
                  ))}
                </div> */}
                <span className="text-xs text-gray-200/90">
                  Chega de dor de cabeça na gestão da sua empresa, junte-se a
                  nós!
                </span>
              </motion.a>

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
                Simplifisca <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                  Controle de notas fiscais de forma simplificada!
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 max-w-lg mb-8"
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
                className="relative p-5 rounded-2xl border-2 border-indigo-500/50 bg-gradient-to-br from-indigo-950/50 to-purple-950/30 backdrop-blur mb-8 overflow-hidden"
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <SparklesIcon className="size-5 text-blue-400" />
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      Ta esperando o quê?
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Teste GRÁTIS por 7 dias
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Experimente todos os recursos sem compromisso. NÃO precisa
                    de cartão de crédito!
                  </p>
                  <div className="flex items-center gap-2 text-xs text-indigo-300">
                    <CheckIcon className="size-4" />
                    <span>Acesso completo</span>
                  </div>
                </div>
              </motion.div>

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
                  href="https://app.simplifisca.com.br/cadastro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-sm:w-full py-3 px-7"
                >
                  Começar teste grátis
                  <ArrowRightIcon className="size-4" />
                </PrimaryButton>
              </motion.div>
            </div>

            {/* Right: imagem + cards abaixo */}
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
              <motion.div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent mb-6">
                <div className="relative aspect-16/10 bg-gray-900">
                  <img
                    src={mainImageUrl}
                    alt="agency-work-preview"
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-black/15 backdrop-blur-sm text-xs">
                    Aqui atendemos a sua dor!
                  </div>

                  <div className="absolute right-4 top-4 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-lg animate-pulse">
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
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                  <ZapIcon className="size-5 text-sky-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Gestão completa de NFe
                    </div>
                    <div className="text-xs text-gray-400">
                      Emissão, cancelamento e manifestação
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                  <CheckIcon className="size-5 text-cyan-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Sistema de gestão completo
                    </div>
                    <div className="text-xs text-gray-400">
                      Estoque, financeiro e ordens de serviço
                    </div>
                  </div>
                </div>

                {/* Mensagem de implantação */}
                {/* <div className="text-sm text-gray-400 flex items-center justify-start gap-2 pt-2">
                  <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300" />
                    <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                  </div>
                  Implantação rápida e gratuita
                </div> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <motion.section
        className="border-y border-white/6 bg-white/1 max-md:mt-10"
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
                  className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide transition-colors"
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