import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function CTA() {
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
  return (
    <section className="py-20 2xl:pb-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-3xl bg-gradient-to-b from-[#0D3F48]/40 to-[#0F1B2B]/60 border border-[#23A5A9]/25 p-12 md:p-16 text-center relative overflow-hidden">
          
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />

          {/* Glow teal no topo */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-[#23A5A9]/15 blur-3xl pointer-events-none" />

          {/* Borda teal sutil na base */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#23A5A9]/40 to-transparent" />

          <div className="relative z-10">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23A5A9]/10 border border-[#23A5A9]/20 mb-6"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
              <span className="size-2 rounded-full bg-[#23A5A9] animate-pulse" />
              <span className="text-xs text-[#23A5A9] font-medium tracking-wide">
                Comece hoje mesmo
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-4xl font-semibold mb-6 text-[#EEF3F3]"
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
              Pronto(a) para{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#23A5A9] to-[#EEF3F3]">
                revolucionar
              </span>{" "}
              a gestão da sua empresa?
            </motion.h2>

            <motion.p
              className="max-sm:text-sm text-[#606D7C] mb-10 max-w-xl mx-auto"
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
              Fale com nossa equipe e descubra como o Simplifisca pode
              transformar a gestão do seu negócio com soluções simples,
              eficientes e simplificadas.
            </motion.p>

            <motion.div
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Botão primário */}
<a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    handleConversion("https://app.simplifisca.com.br/cadastro/");
  }}
  className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium bg-gradient-to-br from-[#23A5A9] to-[#0D3F48] text-[#EEF3F3] hover:opacity-90 hover:shadow-lg hover:shadow-[#23A5A9]/30 active:scale-95 transition-all"
>
  Acesse nosso sistema! <ArrowRightIcon size={18} />
</a>

              {/* Botão ghost */}
              <a
                href="https://wa.me/5599984428630"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-[#23A5A9]/25 bg-[#0D3F48]/20 text-[#EEF3F3]/80 hover:bg-[#0D3F48]/40 hover:border-[#23A5A9]/40 backdrop-blur-sm active:scale-95 transition"
              >
                Falar com suporte
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
