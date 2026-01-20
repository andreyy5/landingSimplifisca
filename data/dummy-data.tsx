import { BoldIcon, BoxIcon, PaperclipIcon, PartyPopperIcon, UploadIcon, VideoIcon, ZapIcon, CurrencyIcon, BusIcon, FileScanIcon, DollarSignIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <BoxIcon className="w-6 h-6" />,
        title: 'Controle de estoque',
        desc: 'Controle e monitore seu inventário em tempo real, tendo acesso a informações detalhadas sobre seus produtos.'
    },
    {
        icon: <FileScanIcon className="w-6 h-6" />, 
        title: 'Emissão de notas fiscais',
        desc: 'Gerencie a emissão de notas fiscais de forma simplificada e integrada, tendo controle delas em todos os locais.' // Descrição ajustada
    },
    {
        icon: <DollarSignIcon className="w-6 h-6" />, // Ajustado para ícone de finanças
        title: 'Controle financeiro',
        desc: 'Mantenha o controle financeiro da sua empresa com interface facilitada, e com relatórios que realmente apoiam a decisão.' // Descrição ajustada
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Mensal',
        price: 'R$ 129,90',
        desc: '',
        credits: 'mês',
        features: [
            'Implantação gratuita',
            'Emissão de NFE simplificada',
            'Controle de clientes e fornecedores',
            'Gestão de produtos e estoque',
            'Controle financeiro e fluxo de caixa',
            'Emissão de Ordens de Serviço',
            'Adequação ao regime tributário',
            'Suporte a atualizações contínuas'
        ]
    },
    {
        id: 'pro',
        name: 'Trimestral',
        price: 'R$ 349,90',
        desc: '',
        credits: 'por 3 meses',
        features: [
            'Implantação gratuita',
            'Emissão de NFE simplificada',
            'Controle de clientes e fornecedores',
            'Gestão de produtos e estoque',
            'Controle financeiro e fluxo de caixa',
            'Emissão de Ordens de Serviço',
            'Adequação ao regime tributário',
            'Suporte a atualizações contínuas'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Anual',
        price: 'R$ 1299,90',
        desc: '',
        credits: 'por 12 meses',
        features: [
            'Implantação gratuita',
            'Emissão de NFE simplificada',
            'Controle de clientes e fornecedores',
            'Gestão de produtos e estoque',
            'Controle financeiro e fluxo de caixa',
            'Emissão de Ordens de Serviço',
            'Adequação ao regime tributário',
            'Suporte a atualizações contínuas'
        ]
    }
];

export const faqData = [
    {
        question: 'Posso acessar o Simplifisca NFe pelo celular ou tablet?',
        answer: 'Sim, o Simplifisca NFe é uma plataforma baseada na web, o que significa que você pode acessá-la de qualquer dispositivo com conexão à internet, incluindo celulares e tablets.'
    },
    {
        question: 'O sistema armazena minhas notas fiscais com segurança?',
        answer: 'Sim, a segurança dos seus dados é nossa prioridade. Utilizamos criptografia avançada e medidas de segurança rigorosas para garantir que suas notas fiscais e informações estejam protegidas contra acessos não autorizados.'
    },
    {
        question: 'O sistema atende empresas do Simples Nacional?',
        answer: 'Sim, o Simplifisca NFe é totalmente compatível com as exigências do Simples Nacional, facilitando a emissão de notas fiscais eletrônicas para empresas enquadradas nesse regime tributário.'
    },
    {
        question: 'O Simplifisca NFe funciona em todos os estados do Brasil?',
        answer: 'Sim. O Simplifisca NFe é compatível com todas as legislações fiscais estaduais, garantindo que você possa emitir notas fiscais eletrônicas em qualquer estado do Brasil.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "#" },
            { name: "Services", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];