'use client';

import { motion } from 'framer-motion';
import {
  Instagram,
  Mail,
  Phone,
} from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-b from-[#0D3F48]/20 to-[#0F1B2B]/40 border-t border-[#23A5A9]/15 pt-16 text-[#EEF3F3]/70"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#23A5A9]/15">

          {/* Logo + descrição */}
          <div className="lg:col-span-2">
            <img src="/logoSimplifisca.png" alt="Simplifisca" className="h-10 mb-6" />
            <p className="text-sm leading-relaxed text-[#606D7C] max-w-md">
              Simplifisca é a solução completa para gestão fiscal e empresarial.
              Emita NFe, NFCe e NFS-e com rapidez, segurança e conformidade fiscal,
              além de controlar todo o seu negócio em um só lugar.
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/simplifisca.erp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0D3F48]/30 border border-[#23A5A9]/15 flex items-center justify-center hover:bg-[#23A5A9]/15 hover:border-[#23A5A9]/40 transition-all"
              >
                <Instagram size={18} className="text-[#EEF3F3]/70" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-[#EEF3F3] font-semibold mb-4 text-lg">Seções</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/#', label: 'Início' },
                { href: '/#features', label: 'Funcionalidades' },
                { href: '/#pricing', label: 'Planos' },
                { href: '/#faq', label: 'Diferenciais' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#23A5A9] transition flex items-center gap-2 text-[#606D7C]"
                  >
                    <span className="text-[#23A5A9]/50">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-[#EEF3F3] font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:gestao@simplifisca.com.br"
                  className="flex items-start gap-3 hover:text-[#23A5A9] transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0D3F48]/30 border border-[#23A5A9]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#23A5A9]/15 group-hover:border-[#23A5A9]/35 transition">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[#606D7C] text-xs mb-1">E-mail</p>
                    <p className="text-[#EEF3F3]">gestao@simplifisca.com.br</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5599984428630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#23A5A9] transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0D3F48]/30 border border-[#23A5A9]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[#606D7C] text-xs mb-1">WhatsApp</p>
                    <p className="text-[#EEF3F3]">(99) 98442-8630</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 text-sm text-[#606D7C]">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="text-[#EEF3F3] font-semibold">Simplifisca</span>. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-[#23A5A9] transition">Política de Privacidade</a>
            <span className="text-[#23A5A9]/30">•</span>
            <a href="#" className="hover:text-[#23A5A9] transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}