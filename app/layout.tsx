import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoftBackdrop from "@/components/SoftBackdrop";
import LenisScroll from "@/components/lenis";
import { Metadata } from "next";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Simplifisca",
        template: "%s | Simplifisca",
    },
    description:
        "Simplifisca é a solução completa para gestão fiscal e empresarial. Emita NFe, NFCe e NFS-e com rapidez, segurança e conformidade fiscal, além de controlar todo o seu negócio em um só lugar.",
    keywords: [
        "Simplifisca",
        "gestão fiscal",
        "emissão de NFe",
        "NFCe",
        "NFS-e",
        "ERP",
        "sistema de gestão empresarial",
        "controle de estoque",
        "controle financeiro",
        "ordens de serviço",
        "SEFAZ",
    ],
    authors: [{ name: "Simplifisca" }],
    creator: "Simplifisca",
    publisher: "Simplifisca",

    openGraph: {
        title: "Simplifisca – Gestão Fiscal e Empresarial Simplificada",
        description:
            "Emita NFe, NFCe e NFS-e com rapidez e segurança. Controle estoque, financeiro e ordens de serviço em um só lugar.",
        siteName: "Simplifisca",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Simplifisca – Gestão Fiscal Simplificada",
        description:
            "Solução completa para gestão fiscal e empresarial. Emita notas fiscais e controle seu negócio com facilidade.",
        creator: "@simplifisca",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={outfit.variable}>
                <SoftBackdrop />
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}