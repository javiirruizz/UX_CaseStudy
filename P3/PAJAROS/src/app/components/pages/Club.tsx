import { useNavigate } from "react-router";
import { Gift, Coffee, Star, ShoppingBag, ChevronRight, Award, Zap, Users } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1731346701303-fc50d846613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjB3b29kJTIwcGxhbnRzfGVufDF8fHx8MTc3NzgzNDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080";

const benefits = [
  {
    icon: Coffee,
    title: "Café gratis",
    desc: "Un café gratis cada 10 visitas. Elige el que más te guste.",
  },
  {
    icon: Gift,
    title: "Descuentos exclusivos",
    desc: "Hasta un 20% de descuento en toda la carta como miembro.",
  },
  {
    icon: Star,
    title: "Acceso anticipado",
    desc: "Sé el primero en probar nuevas recetas y propuestas de temporada.",
  },
  {
    icon: ShoppingBag,
    title: "Recomendaciones",
    desc: "Sugerencias personalizadas basadas en tus preferencias de sabor.",
  },
];

const levels = [
  { name: "Bronce", points: 0, color: "#C09060", perks: ["5% descuento", "Café gratis cada 10 visitas"] },
  { name: "Plata", points: 300, color: "#A0A8B0", perks: ["10% descuento", "Café gratis cada 8 visitas", "Prioridad reserva"] },
  { name: "Oro", points: 600, color: "#D4A840", perks: ["20% descuento", "Café gratis cada 6 visitas", "Eventos VIP", "Bebida cumpleaños"] },
];

const transactions = [
  { date: "02 May 2026", desc: "Latte Pajaritos + Croissant", points: "+15 pts", type: "earn" },
  { date: "30 Apr 2026", desc: "Espresso solo", points: "+5 pts", type: "earn" },
  { date: "28 Apr 2026", desc: "Café gratis canjeado", points: "–50 pts", type: "spend" },
  { date: "25 Apr 2026", desc: "Visita diaria", points: "+10 pts", type: "earn" },
  { date: "22 Apr 2026", desc: "Brunch completo", points: "+25 pts", type: "earn" },
];

export function Club() {
  const navigate = useNavigate();
  const currentPoints = 450;
  const nextLevelPoints = 600;
  const progress = (currentPoints / nextLevelPoints) * 100;

  return (
    <div className="bg-[#F7F3EE]">
      {/* Hero / Welcome */}
      <section className="relative min-h-[50vh] overflow-hidden flex items-center">
        <img
          src={HERO_BG}
          alt="Club Pajaritos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#D4C4A8] uppercase tracking-widest text-xs mb-3">Miembro Plata</p>
            <h1 className="text-white uppercase leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}>
              ¡Bienvenido<br />de nuevo,<br />David García!
            </h1>
            <p className="text-[#C8B89A] text-sm max-w-sm mb-6">
              Tienes <strong className="text-white">450 puntos</strong> acumulados. Te faltan 150 pts para alcanzar el nivel Oro.
            </p>
            <button
              onClick={() => navigate("/pedido")}
              className="bg-white text-[#1C1A16] px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-[#F7F3EE] transition-colors flex items-center gap-2"
            >
              Hacer un pedido <ChevronRight size={13} />
            </button>
          </div>

          {/* Membership Card */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 bg-[#1C1A16] p-7 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#2C2820] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2C2820] rounded-full translate-y-1/2 -translate-x-1/2 opacity-40" />
              <div className="relative">
                <div className="flex justify-between items-start mb-8">
                  <p className="text-white tracking-[0.2em] uppercase text-sm" style={{ fontWeight: 600 }}>LOS PAJARITOS</p>
                  <Award size={20} className="text-[#A09688]" />
                </div>
                <p className="text-[#A09688] text-xs uppercase tracking-widest mb-1">Titular</p>
                <p className="text-white text-xl mb-1" style={{ fontWeight: 600 }}>David García</p>
                <p className="text-[#A09688] text-xs uppercase tracking-wide mb-6">Miembro desde Ene 2025</p>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-[#A09688] text-xs uppercase tracking-widest mb-1">Puntos</p>
                    <p className="text-white text-4xl" style={{ fontWeight: 700 }}>450</p>
                    <p className="text-[#A09688] text-xs uppercase tracking-wide">pts acumulados</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#A09688] text-xs uppercase tracking-widest mb-1">Nivel</p>
                    <p className="text-[#A0A8B0] text-lg uppercase tracking-wide" style={{ fontWeight: 600 }}>Plata</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[#6B6257] text-xs">Plata</span>
                    <span className="text-[#6B6257] text-xs">Oro</span>
                  </div>
                  <div className="h-1.5 bg-[#3C3830] w-full rounded-full">
                    <div
                      className="h-1.5 bg-gradient-to-r from-[#A0A8B0] to-[#D4A840] rounded-full transition-all duration-700"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-[#6B6257] text-xs mt-1.5 text-right">450 / 600 pts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-3">Por ser miembro</p>
            <h2 className="text-[#1C1A16] uppercase" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "0.06em" }}>
              Beneficios de miembro
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 bg-[#EDE7DC] flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#6B6257]" />
                </div>
                <h3 className="text-[#1C1A16] text-sm mb-2" style={{ fontWeight: 600 }}>{title}</h3>
                <p className="text-[#9C8B78] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESS + CARD SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-3">Tu progreso</p>
            <h2 className="text-[#1C1A16] uppercase" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em" }}>
              Tu tarjeta y progreso Club Pajaritos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {levels.map((level, i) => {
              const isCurrent = level.name === "Plata";
              return (
                <div
                  key={level.name}
                  className={`p-6 border-2 relative ${isCurrent ? "border-[#A0A8B0] bg-[#1C1A16]" : "border-[#E0D9CF] bg-white"}`}
                >
                  {isCurrent && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A0A8B0] text-white text-xs px-3 py-0.5 uppercase tracking-wide">
                      Tu nivel actual
                    </span>
                  )}
                  <div
                    className="w-10 h-10 rounded-full mb-4 flex items-center justify-center"
                    style={{ backgroundColor: level.color + "30" }}
                  >
                    <Award size={18} style={{ color: level.color }} />
                  </div>
                  <h3
                    className={`text-lg uppercase mb-1 ${isCurrent ? "text-white" : "text-[#1C1A16]"}`}
                    style={{ fontWeight: 700, color: isCurrent ? "white" : undefined }}
                  >
                    {level.name}
                  </h3>
                  <p className={`text-xs mb-4 ${isCurrent ? "text-[#A09688]" : "text-[#9C8B78]"}`}>
                    Desde {level.points} pts
                  </p>
                  <ul className="space-y-1.5">
                    {level.perks.map((perk) => (
                      <li key={perk} className={`text-xs flex items-center gap-2 ${isCurrent ? "text-[#A09688]" : "text-[#6B6257]"}`}>
                        <span style={{ color: level.color }}>✓</span> {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Transaction history */}
          <div className="bg-white p-6">
            <h3 className="text-[#1C1A16] uppercase text-sm mb-6" style={{ fontWeight: 600, letterSpacing: "0.06em" }}>
              Historial de puntos
            </h3>
            <div className="space-y-0">
              {transactions.map((t, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-4 ${
                    i < transactions.length - 1 ? "border-b border-[#E0D9CF]" : ""
                  }`}
                >
                  <div>
                    <p className="text-[#1C1A16] text-sm">{t.desc}</p>
                    <p className="text-[#9C8B78] text-xs mt-0.5">{t.date}</p>
                  </div>
                  <span
                    className={`text-sm px-2 py-0.5 ${
                      t.type === "earn"
                        ? "text-green-700 bg-green-50"
                        : "text-red-700 bg-red-50"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {t.points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#EDE7DC] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-3">Fácil y rápido</p>
            <h2 className="text-[#1C1A16] uppercase" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em" }}>
              ¿Cómo funciona?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { step: "01", icon: Users, title: "Únete gratis", desc: "Regístrate en segundos y recibe tu tarjeta de miembro digital." },
              { step: "02", icon: Zap, title: "Acumula puntos", desc: "Gana puntos con cada compra. ¡Cuanto más visitas, más puntos!" },
              { step: "03", icon: Gift, title: "Canjea premios", desc: "Usa tus puntos para conseguir cafés gratis y descuentos exclusivos." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="flex flex-col items-center">
                <p className="text-[#C0B0A0] text-4xl mb-4" style={{ fontWeight: 700 }}>{step}</p>
                <div className="w-12 h-12 bg-[#1C1A16] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-[#1C1A16] text-sm mb-2" style={{ fontWeight: 600 }}>{title}</h3>
                <p className="text-[#9C8B78] text-xs leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/pedido")}
              className="bg-[#1C1A16] text-white px-8 py-3 uppercase tracking-widest text-xs hover:bg-[#3C3830] transition-colors"
            >
              Empezar a ganar puntos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
