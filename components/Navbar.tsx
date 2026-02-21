"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { PrimaryButton } from "./Buttons";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function TechLink({ name, href }: { name: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-200"
    >
      {/* corner brackets */}
      <span
        className={`absolute -left-3 top-0 text-cyan-400 text-xs transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"
        }`}
        aria-hidden
      >
        [
      </span>
      <span
        className={`absolute -right-3 top-0 text-cyan-400 text-xs transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
        }`}
        aria-hidden
      >
        ]
      </span>

      {name}
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/#" },
    { name: "Funcionalidades", href: "/#features" },
    { name: "Comece agora", href: "/#pricing" },
    { name: "Por que nos escolher?", href: "/#faq" },
  ];

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3">
        <a href="/#">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <TechLink key={link.name} name={link.name} href={link.href} />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <PrimaryButton className="max-sm:text-xs hidden sm:inline-block">
            Fale conosco!
          </PrimaryButton>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <MenuIcon className="size-6" />
        </button>
      </div>

      <div
        className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
            {link.name}
          </a>
        ))}

        <button
          onClick={() => setIsOpen(false)}
          className="font-medium text-gray-300 hover:text-white transition"
        >
          Sign in
        </button>
        <PrimaryButton onClick={() => setIsOpen(false)}>
          Get Started
        </PrimaryButton>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
        >
          <XIcon />
        </button>
      </div>
    </motion.nav>
  );
}