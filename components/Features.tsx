import { useRef } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import { 
    FileText, 
    Trash2, 
    CheckCircle, 
    Package, 
    DollarSign, 
    Users, 
    Wrench, 
    BarChart3,
    ShoppingCart,
    Receipt,
    FileCheck,
    Clock
} from 'lucide-react';

export default function Features() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    const featuresData = [
        {
            icon: <FileText className="w-6 h-6 text-[#23A5A9]" />,
            title: 'Emissão de NFe e NFSe',
            desc: 'Emita notas fiscais eletrônicas (NFe) e notas de serviço (NFS-e) de forma rápida e fácil, com total conformidade fiscal e integração automática com os sistemas da SEFAZ.',
            featured: true
        },
        {
            icon: <Trash2 className="w-6 h-6 text-red-400" />,
            title: 'Cancelamento de Notas',
            desc: 'Cancele NFe e NFSe de forma rápida e segura, com total conformidade com a legislação fiscal vigente.',
            featured: true
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-[#23A5A9]" />,
            title: 'Manifestação do Destinatário',
            desc: 'Realize a manifestação de notas fiscais recebidas (Ciência, Confirmação, Desconhecimento ou Não Realizada) de forma simplificada.',
            featured: true
        },
        {
            icon: <Receipt className="w-6 h-6 text-[#23A5A9]" />,
            title: 'NFS-e (Notas de Serviço)',
            desc: 'Emita notas fiscais de serviço eletrônicas de acordo com as regras nacionais, tudo integrado em uma única plataforma.',
            featured: false
        },
        {
            icon: <Package className="w-6 h-6 text-[#EEF3F3]/60" />,
            title: 'Gestão de Estoque',
            desc: 'Controle completo de produtos, entrada e saída de mercadorias, inventário e movimentações em tempo real.',
            featured: false
        },
        {
            icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
            title: 'Controle Financeiro',
            desc: 'Gerencie entrada e saída de caixa, receitas e despesas e tenha relatórios financeiros detalhados.',
            featured: false
        },
        {
            icon: <Users className="w-6 h-6 text-[#23A5A9]" />,
            title: 'Gestão de Clientes',
            desc: 'Cadastro completo de clientes e fornecedores com histórico de compras, vendas e relacionamento comercial.',
            featured: false
        },
        {
            icon: <Wrench className="w-6 h-6 text-orange-400" />,
            title: 'Ordens de Serviço',
            desc: 'Crie e gerencie ordens de serviço com acompanhamento de status, prazos e controle de execução.',
            featured: false
        },
        {
            icon: <ShoppingCart className="w-6 h-6 text-[#EEF3F3]/60" />,
            title: 'Gestão de Vendas',
            desc: 'Emita orçamentos, pedidos de venda e converta em notas fiscais com apenas alguns cliques.',
            featured: false
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-yellow-400" />,
            title: 'Relatórios Gerenciais',
            desc: 'Dashboards e relatórios completos para tomada de decisão estratégica do seu negócio.',
            featured: false
        },
        {
            icon: <FileCheck className="w-6 h-6 text-[#23A5A9]" />,
            title: 'Conformidade Fiscal',
            desc: 'Sistema sempre atualizado conforme legislação tributária.',
            featured: false
        },
        {
            icon: <Clock className="w-6 h-6 text-[#23A5A9]" />,
            title: 'Suporte Contínuo',
            desc: 'Atualizações automáticas e suporte técnico para garantir que seu sistema esteja sempre funcionando perfeitamente.',
            featured: false
        }
    ];

    return (
        <section id="features" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Funcionalidades"
                    heading="Tudo que você precisa em um só lugar"
                    description="Sistema completo de gestão fiscal e empresarial com foco em emissão, cancelamento e manifestação de NFe, NFCe e NFS-e."
                />

                {/* Cards em destaque — NFe features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {featuresData.filter(f => f.featured).map((feature, i) => (
                        <motion.div
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            key={i}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add(
                                        "transition", "duration-300",
                                        "hover:border-[#23A5A9]/60",
                                        "hover:-translate-y-2",
                                        "hover:shadow-lg",
                                        "hover:shadow-[#23A5A9]/20"
                                    );
                                }
                            }}
                            className="rounded-2xl p-6 bg-gradient-to-br from-[#0D3F48]/50 to-[#0F1B2B]/60 border-2 border-[#23A5A9]/30 relative overflow-hidden"
                        >
                            {/* Efeito de brilho teal */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#23A5A9]/8 to-transparent" />

                            {/* Accent top-right glow */}
                            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-[#23A5A9]/15 blur-xl" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#23A5A9]/20 to-[#0D3F48]/40 flex items-center justify-center mb-4 border border-[#23A5A9]/30">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-[#EEF3F3]">{feature.title}</h3>
                                <p className="text-[#EEF3F3]/65 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Outras funcionalidades */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuresData.filter(f => !f.featured).map((feature, i) => (
                        <motion.div
                            ref={(el) => {
                                refs.current[i + 3] = el;
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.08 }}
                            key={i}
                            onAnimationComplete={() => {
                                const card = refs.current[i + 3];
                                if (card) {
                                    card.classList.add(
                                        "transition", "duration-300",
                                        "hover:border-[#23A5A9]/25",
                                        "hover:bg-[#0D3F48]/20",
                                        "hover:-translate-y-1"
                                    );
                                }
                            }}
                            className="rounded-2xl p-6 bg-[#0F1B2B]/40 border border-[#23A5A9]/10"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#0D3F48]/30 flex items-center justify-center mb-4 border border-[#23A5A9]/15">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-[#EEF3F3]">{feature.title}</h3>
                            <p className="text-[#606D7C] text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}