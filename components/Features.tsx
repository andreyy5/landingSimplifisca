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
            icon: <FileText className="w-6 h-6 text-indigo-400" />,
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
            icon: <CheckCircle className="w-6 h-6 text-green-400" />,
            title: 'Manifestação do Destinatário',
            desc: 'Realize a manifestação de notas fiscais recebidas (Ciência, Confirmação, Desconhecimento ou Não Realizada) de forma simplificada.',
            featured: true
        },
        {
            icon: <Receipt className="w-6 h-6 text-cyan-400" />,
            title: 'NFS-e (Notas de Serviço)',
            desc: 'Emita notas fiscais de serviço eletrônicas de acordo com as regras nacionais, tudo integrado em uma única plataforma.',
            featured: false
        },
        {
            icon: <Package className="w-6 h-6 text-purple-400" />,
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
            icon: <Users className="w-6 h-6 text-blue-400" />,
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
            icon: <ShoppingCart className="w-6 h-6 text-pink-400" />,
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
            icon: <FileCheck className="w-6 h-6 text-teal-400" />,
            title: 'Conformidade Fiscal',
            desc: 'Sistema sempre atualizado conforme legislação tributária.',
            featured: false
        },
        {
            icon: <Clock className="w-6 h-6 text-indigo-400" />,
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

                {/* Cards em destaque - NFe features */}
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
                                    card.classList.add("transition", "duration-300", "hover:border-indigo-500/50", "hover:-translate-y-2", "hover:shadow-lg", "hover:shadow-indigo-500/20");
                                }
                            }}
                            className="rounded-2xl p-6 bg-gradient-to-br from-indigo-950/40 to-purple-950/20 border-2 border-indigo-500/30 relative overflow-hidden"
                        >
                            {/* Efeito de brilho */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent" />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 border border-indigo-500/30">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
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
                                    card.classList.add("transition", "duration-300", "hover:border-white/20", "hover:-translate-y-1");
                                }
                            }}
                            className="rounded-2xl p-6 bg-white/3 border border-white/8"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}