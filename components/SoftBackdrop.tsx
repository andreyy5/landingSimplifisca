export default function SoftBackdrop() {
    return (
        <div className="fixed inset-0 -z-1 pointer-events-none">
            {/* Glow principal teal no topo */}
            <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[980px] h-[460px] bg-gradient-to-tr from-[#0D3F48]/50 to-transparent rounded-full blur-3xl" />
            {/* Glow secundário teal accent canto inferior direito */}
            <div className="absolute right-12 bottom-10 w-[420px] h-[220px] bg-gradient-to-bl from-[#23A5A9]/20 to-transparent rounded-full blur-2xl" />
            {/* Glow sutil canto inferior esquerdo para profundidade */}
            <div className="absolute -left-20 bottom-1/3 w-[300px] h-[300px] bg-gradient-to-tr from-[#0F1B2B]/80 to-transparent rounded-full blur-3xl" />
        </div>
    );
}