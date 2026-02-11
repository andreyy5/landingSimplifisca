import { Shield, Zap, HeadphonesIcon, TrendingUp } from 'lucide-react';
import Title from './Title';
import { motion } from 'framer-motion';

export default function Faq() {
    const reasons = [
        {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: 'Rápido e Eficiente',
            description: 'Emita notas fiscais em segundos e automatize processos repetitivos.'
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-400" />,
            title: '100% Seguro',
            description: 'Dados criptografados e backups automáticos para total segurança.'
        },
        {
            icon: <HeadphonesIcon className="w-8 h-8 text-green-400" />,
            title: 'Suporte Dedicado',
            description: 'Nossa equipe está pronta para te ajudar sempre que precisar.'
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
            title: 'Sempre Atualizado',
            description: 'Atualizações automáticas conforme mudanças na legislação fiscal.'
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
                            className="text-center p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                {reason.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-white">{reason.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}