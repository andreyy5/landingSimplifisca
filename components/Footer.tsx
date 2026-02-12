'use client';

import { motion } from 'framer-motion';
import {
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-b from-white/3 to-white/8 border-t border-white/10 pt-16 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Logo + descrição */}
          <div className="lg:col-span-2">
            <img src="/" alt="Simplifisca" className="h-10 mb-6" />
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
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
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Seções</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/#" className="hover:text-indigo-400 transition flex items-center gap-2">
                  → Início
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-indigo-400 transition flex items-center gap-2">
                  → Funcionalidades
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-indigo-400 transition flex items-center gap-2">
                  → Planos
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-indigo-400 transition flex items-center gap-2">
                  → Diferenciais
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="mailto:gestao@simplifisca.com.br"
                  className="flex items-start gap-3 hover:text-indigo-400 transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">E-mail</p>
                    <p className="text-white">gestao@simplifisca.com.br</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5599984428630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-indigo-400 transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/10 group-hover:border-green-500/30 transition">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">WhatsApp</p>
                    <p className="text-white">(99) 98442-8630</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Simplifisca</span>. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}