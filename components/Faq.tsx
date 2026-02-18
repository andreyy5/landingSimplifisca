import { Shield, Zap, HeadphonesIcon, TrendingUp } from 'lucide-react';
import Title from './Title';
import { motion } from 'framer-motion';

export default function Faq() {
    const reasons = [
        {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: 'Rápido e Eficiente',
            description: 'Emita notas fiscais em segundos e automatize processos repetitivos.',
            glow: 'bg-yellow-400/10',
            border: 'hover:border-yellow-400/30',
        },
        {
            icon: <Shield className="w-8 h-8 text-[#23A5A9]" />,
            title: '100% Seguro',
            description: 'Dados criptografados e backups automáticos para total segurança.',
            glow: 'bg-[#23A5A9]/10',
            border: 'hover:border-[#23A5A9]/30',
        },
        {
            icon: <HeadphonesIcon className="w-8 h-8 text-emerald-400" />,
            title: 'Suporte Dedicado',
            description: 'Nossa equipe está pronta para te ajudar sempre que precisar.',
            glow: 'bg-emerald-400/10',
            border: 'hover:border-emerald-400/30',
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-[#23A5A9]" />,
            title: 'Sempre Atualizado',
            description: 'Atualizações automáticas conforme mudanças na legislação fiscal.',
            glow: 'bg-[#23A5A9]/10',
            border: 'hover:border-[#23A5A9]/30',
        }
    ];

    return (
        <section id="faq" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Diferenciais"
                    heading="Por que escolher o Simplifisca?"
                    description="Tecnologia, segurança e suporte que fazem a diferença no seu dia a dia."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            className={`text-center p-6 rounded-2xl bg-[#0D3F48]/15 border border-[#23A5A9]/10 ${reason.border} hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}
                        >
                            {/* Glow individual por card */}
                            <div className={`absolute inset-0 ${reason.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                            <div className="relative z-10">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#0F1B2B]/60 flex items-center justify-center border border-[#23A5A9]/15">
                                    {reason.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-[#EEF3F3]">{reason.title}</h3>
                                <p className="text-sm text-[#606D7C] leading-relaxed">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}