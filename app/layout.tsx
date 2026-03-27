import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoftBackdrop from "@/components/SoftBackdrop";
import LenisScroll from "@/components/lenis";
import { Metadata } from "next";
import Script from "next/script";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
});

const BASE_URL = "https://www.simplifisca.com.br";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: {
        default: "Simplifisca | Sistema de Gestão Fiscal e Empresarial",
        template: "%s | Simplifisca",
    },
    description:
        "Simplifisca é o sistema completo para emissão de NFe, NFCe e NFS-e. Controle estoque, financeiro e ordens de serviço em um só lugar. Teste grátis por 7 dias, sem cartão de crédito.",
    keywords: [
        // Produto
        "sistema de gestão fiscal",
        "sistema fiscal",
        "sistema gestão",
        "controle fiscal",
        "sefaz",
        "contador",
        "dinheiro",
        "emissão de NFe",
        "emissão fiscal",
        "emissão de NFS-e",
        "sistema ERP",
        "ERP para pequenas empresas",
        "software fiscal",
        "nota fiscal eletrônica",
        "cancelamento de nota fiscal",
        "manifestação do destinatário",
        "nota fiscal gratis",
        "ERP grátis",
        "controle grátis",
        "Emitir nota fiscal grátis",
        "manifesto NFE",
        // Funcionalidades
        "controle de estoque",
        "controle financeiro",
        "gestão de clientes",
        "ordens de serviço",
        "fluxo de caixa",
        "controle",
        "Emissão de nota fiscal",
        "Emissão de NFe",
        // Local (Maranhão / Balsas)
        "sistema fiscal Maranhão",
        "ERP Balsas MA",
        "software gestão empresarial Maranhão",
        "nota fiscal eletrônica Maranhão",
        "sistema fiscal Balsas",
        "sistema fiscal Brasil",
        "sistema fiscal Brazil",
        "Emissão de NFe Maranhão",
        // Marca
        "Simplifisca",
        "simplifisca.com.br",
    ],
    authors: [{ name: "Simplifisca", url: BASE_URL }],
    creator: "Simplifisca",
    publisher: "Simplifisca",
    category: "Software",

    // Canonical + alternates
    alternates: {
        canonical: BASE_URL,
        languages: {
            "pt-BR": BASE_URL,
        },
    },

    // Open Graph — preview bonito no WhatsApp, Facebook, LinkedIn
    openGraph: {
        title: "Simplifisca | Sistema de Gestão Fiscal e Empresarial",
        description:
            "Emita NFe, NFCe e NFS-e com rapidez e segurança. Controle estoque, financeiro e ordens de serviço. Teste grátis por 7 dias!",
        url: BASE_URL,
        siteName: "Simplifisca",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: `${BASE_URL}/og-image.png`, // Crie uma imagem 1200x630px com a logo
                width: 1200,
                height: 630,
                alt: "Simplifisca — Sistema de Gestão Fiscal e Empresarial",
            },
        ],
    },

    // Twitter / X card
    twitter: {
        card: "summary_large_image",
        title: "Simplifisca | Sistema de Gestão Fiscal e Empresarial",
        description:
            "Emita NFe, NFCe e NFS-e. Controle estoque, financeiro e OS. Teste grátis 7 dias!",
        images: [`${BASE_URL}/og-image.png`],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Após verificar no Search Console, descomente e cole seu código:
    // verification: {
    //     google: "SEU_CODIGO_AQUI",
    // },
};

// JSON-LD Schema.org — rich snippets no Google
function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            // Organização
            {
                "@type": "Organization",
                "@id": `${BASE_URL}/#organization`,
                name: "Simplifisca",
                url: BASE_URL,
                logo: {
                    "@type": "ImageObject",
                    url: `${BASE_URL}/logoSimplifisca.png`,
                },
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+55-99-98442-8630",
                    contactType: "customer support",
                    availableLanguage: "Portuguese",
                    areaServed: "BR",
                },
                sameAs: [
                    "https://instagram.com/simplifisca.erp",
                    "https://wa.me/5599984428630",
                ],
            },

            {
                "@type": "SoftwareApplication",
                "@id": `${BASE_URL}/#software`,
                name: "Simplifisca",
                url: BASE_URL,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description:
                    "Sistema completo para emissão de NFe, NFCe e NFS-e, controle de estoque, financeiro e ordens de serviço.",
                offers: {
                    "@type": "Offer",
                    price: "129.90",
                    priceCurrency: "BRL",
                    description: "Plano Mensal — acesso completo a todas as funcionalidades",
                    seller: {
                        "@type": "Organization",
                        name: "Simplifisca",
                    },
                },
                featureList: [
                    "Emissão de NFe e NFCe",
                    "Emissão de NFS-e",
                    "Cancelamento de notas fiscais",
                    "Manifestação do destinatário",
                    "Controle de estoque",
                    "Controle financeiro",
                    "Gestão de clientes e fornecedores",
                    "Ordens de serviço",
                ],
            },
            // WebSite
            {
                "@type": "WebSite",
                "@id": `${BASE_URL}/#website`,
                url: BASE_URL,
                name: "Simplifisca",
                description: "Sistema de Gestão Fiscal e Empresarial",
                publisher: {
                    "@id": `${BASE_URL}/#organization`,
                },
                inLanguage: "pt-BR",
            },
            // LocalBusiness — SEO local (Balsas / Maranhão)
            {
                "@type": "LocalBusiness",
                "@id": `${BASE_URL}/#localbusiness`,
                name: "Simplifisca",
                url: BASE_URL,
                telephone: "+55-99-98442-8630",
                email: "gestao@simplifisca.com.br",
                description:
                    "Sistema de gestão fiscal e empresarial para emissão de NFe, NFCe e NFS-e no Maranhão.",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Balsas",
                    addressRegion: "MA",
                    addressCountry: "BR",
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: -7.5322,
                    longitude: -46.0356,
                },
                areaServed: {
                    "@type": "State",
                    name: "Maranhão",
                },
                priceRange: "R$129,90/mês",
                sameAs: [
                    "https://instagram.com/simplifisca.erp",
                ],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={outfit.variable}>

<Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-WLN3JQS7');`,
                    }}
                />

                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WLN3JQS7"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>

                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17975268120"
                    strategy="afterInteractive"
                />
                <Script id="google-ads-gtag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-17975268120');
                    `}
                </Script>

                <JsonLd />
                <SoftBackdrop />
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
