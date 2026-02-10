import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import { motion } from 'framer-motion';

export default function Hero() {

    const trustedUserImages = [
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50',
    ];

    const mainImageUrl = 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop';

    const galleryStripImages = [

    ];

    const trustedLogosText = [
        'Estoque',
        'NFE',
        'NFCE',
        'Financeiro',
        'Ordens de Serviço',
    ];

    return (
        <>
            <section id="home" className="relative z-10">
                <div className="max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="text-left">
                            <motion.a href="https://prebuiltui.com/tailwind-templates?ref=pixel-forge" className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                            >
                                <div className="flex -space-x-2">
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
                                </div>
                                <span className="text-xs text-gray-200/90">
                                    Chega de dor de cabeça na gestão da sua empresa, junte-se a nós!
                                </span>
                            </motion.a>

                            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                Simplifisca <br />
                                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                                    A inteligência que simplifica seu negócio
                                </span>
                            </motion.h1>

                            <motion.p className="text-gray-300 max-w-lg mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                            >
                                Combinamos tecnologia, segurança e inovação para oferecer soluções que impulsionam o crescimento do seu negócio.
                            </motion.p>

                            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                            >
<PrimaryButton 
  href="https://app.simplifisca.com.br/cadastro/"
  target="_blank"
  rel="noopener noreferrer"
  className="max-sm:w-full py-3 px-7"
>
  Vem conhecer
  <ArrowRightIcon className="size-4" />
</PrimaryButton>

                            </motion.div>

                            <motion.div className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <ZapIcon className="size-4 text-sky-500" />
                                    <div>
                                        <div>Emissão de NFE simplificada</div>
                                        <div className="text-xs text-gray-400">
                                                Emita notas fiscais em segundos
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block h-6 w-px bg-white/6" />

                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <CheckIcon className="size-4 text-cyan-500" />
                                    <div>
                                        <div>Controle todo o seu negócio</div>
                                        <div className="text-xs text-gray-400">
                                           Clientes, estoque, financeiro e mais
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: modern mockup card */}
                        <motion.div className="mx-auto w-full max-w-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
                        >
                            <motion.div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent">
                                <div className="relative aspect-16/10 bg-gray-900">
                                    <img
                                        src={mainImageUrl}
                                        alt="agency-work-preview"
                                        className="w-full h-full object-cover object-center"
                                    />

                                    <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-black/15 backdrop-blur-sm text-xs">
                                        Aqui atendemos a sua dor!
                                    </div>
                                </div>
                            </motion.div>

                            <div className="mt-4 flex gap-3 items-center justify-start">
                                {galleryStripImages.map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                                        className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
                                    >
                                        <img
                                            src={src}
                                            alt="project-thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                                <motion.div className="text-sm text-gray-400 ml-2 flex items-center gap-2"
                                    initial={{ y: 60, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                                >
                                    <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300" />

                                        <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                                    </div>
                                    Implantação rápida e gratuita
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* LOGO MARQUEE */}
            <motion.section className="border-y border-white/6 bg-white/1 max-md:mt-10"
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
};