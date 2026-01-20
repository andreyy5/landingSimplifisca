'use client';

import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="bg-white/6 border-t border-white/6 pt-10 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 py-10 border-b border-white/10">

          {/* Logo + descrição */}
          <div className="max-w-sm">
            <img src="/" alt="Simplifisca" className="h-8" />
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Simplifisca é uma solução moderna para emissão de Nota Fiscal
              Eletrônica, ajudando empresas a emitir NF-e com rapidez,
              segurança e conformidade fiscal.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition">Planos</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> suporte@simplifisca.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> (99) 99999-9999
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Simplifisca. Todos os direitos reservados.
          </p>

          {/* Redes sociais */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
