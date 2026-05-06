import { useNavigate } from "react-router";
import { ArrowRight, Wifi, Coffee, Zap, Users, Accessibility } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1731346701303-fc50d846613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjB3b29kJTIwcGxhbnRzfGVufDF8fHx8MTc3NzgzNDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const SPACE_IMAGE = "https://images.unsplash.com/photo-1777451441095-c7ef2f875929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBncmVlbiUyMHBsYW50cyUyMHdvb2QlMjBsaWdodHxlbnwxfHx8fDE3Nzc4MzQ3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const LAPTOP_IMAGE = "https://images.unsplash.com/photo-1775179424139-bd65d79c132e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3b3JraW5nJTIwY2FmZSUyMG5hdHVyYWwlMjBsaWdodCUyMGxhcHRvcHxlbnwxfHx8fDE3Nzc4MzQ3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Los Pajaritos café interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
          <p className="text-[#D4C4A8] uppercase tracking-widest text-xs mb-5">
            Granada · Café de Especialidad
          </p>
          <h1 className="text-white uppercase leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "0.02em" }}>
            Café de<br />Especialidad<br />y tu rincón<br />ideal para<br />trabajar
          </h1>
          <p className="text-[#C8B89A] text-sm max-w-sm mb-8 leading-relaxed">
            Disfruta de nuestros cafés de origen único, dulces artesanales y un espacio diseñado para que te sientas como en casa.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/carta")}
              className="bg-white text-[#1C1A16] px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-[#F7F3EE] transition-colors"
            >
              Ver la Carta
            </button>
            <button
              onClick={() => navigate("/pedido")}
              className="border border-white text-white px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Pedir Ahora <ArrowRight size={13} />
            </button>
            <button
              onClick={() => navigate("/espacio")}
              className="border border-white text-white px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
            >
              Reservar
            </button>
          </div>
        </div>
      </section>

      {/* ESPACIO SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-4">Nuestro espacio</p>
            <h2 className="text-[#1C1A16] uppercase leading-tight mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700 }}>
              Un espacio vivo<br />adaptado a ti
            </h2>
            <p className="text-[#6B6257] text-sm leading-relaxed mb-4 max-w-sm">
              Más que una cafetería, Los Pajaritos es un refugio acogedor con solo 20 plazas para garantizar tu tranquilidad.
            </p>
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 bg-[#EDE7DC] px-3 py-1.5 rounded-sm">
                <Accessibility size={15} className="text-[#6B6257]" />
                <span className="text-xs text-[#6B6257] uppercase tracking-wide">Acceso Total</span>
              </div>
              <div className="flex items-center gap-2 bg-[#EDE7DC] px-3 py-1.5 rounded-sm">
                <Users size={15} className="text-[#6B6257]" />
                <span className="text-xs text-[#6B6257] uppercase tracking-wide">Aseos Universales</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Wifi, label: "Wifi Rápido" },
                { icon: Coffee, label: "Café de Origen" },
                { icon: Zap, label: "Enchufes" },
                { icon: Users, label: "Comunidad" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EDE7DC] flex items-center justify-center">
                    <Icon size={15} className="text-[#6B6257]" />
                  </div>
                  <span className="text-xs text-[#6B6257] uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/espacio")}
              className="text-[#1C1A16] border-b border-[#1C1A16] pb-0.5 text-xs uppercase tracking-widest hover:text-[#6B6257] hover:border-[#6B6257] transition-colors flex items-center gap-2"
            >
              Conocer el espacio <ArrowRight size={13} />
            </button>
          </div>
          <div className="relative">
            <img
              src={SPACE_IMAGE}
              alt="Espacio de trabajo en Los Pajaritos"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#1C1A16] text-white px-6 py-4 hidden md:block">
              <p className="text-xs uppercase tracking-widest text-[#A09688] mb-1">Horario</p>
              <p className="text-sm">Lun – Vie: 8:00 – 20:00</p>
              <p className="text-sm">Sáb – Dom: 9:00 – 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* LAPTOP BANNER */}
      <section className="bg-[#EDE7DC] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={LAPTOP_IMAGE}
              alt="Trabajando en Los Pajaritos"
              className="w-full h-72 object-cover"
            />
          </div>
          <div>
            <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-3">Trabaja con nosotros</p>
            <h2 className="text-[#1C1A16] uppercase leading-tight mb-4" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontWeight: 700 }}>
              Tu oficina con<br />el mejor café
            </h2>
            <p className="text-[#6B6257] text-sm leading-relaxed mb-6 max-w-sm">
              Reserva tu mesa, disfruta de café ilimitado y trabaja en un ambiente acogedor que potencia tu productividad.
            </p>
            <button
              onClick={() => navigate("/espacio")}
              className="bg-[#1C1A16] text-white px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-[#3C3830] transition-colors"
            >
              Ver el espacio
            </button>
          </div>
        </div>
      </section>

      {/* CLUB SECTION */}
      <section className="bg-[#EDE7DC] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-4">Membership</p>
            <h2 className="text-[#1C1A16] uppercase leading-tight mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700 }}>
              Club Pajaritos
            </h2>
            <p className="text-[#6B6257] text-sm leading-relaxed mb-6 max-w-sm">
              Únete a nuestra comunidad y disfruta de descuentos exclusivos, café gratis al llegar a ciertos hitos y acceso anticipado a nuevas propuestas.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {["Descuentos exclusivos", "Café gratis", "Eventos VIP", "Puntos por visita"].map((b) => (
                <span key={b} className="border border-[#D4C4A8] text-[#6B6257] px-3 py-1 text-xs uppercase tracking-wide">
                  {b}
                </span>
              ))}
            </div>
            <button
              onClick={() => navigate("/club")}
              className="bg-[#1C1A16] text-white px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-[#3C3830] transition-colors"
            >
              Unirme al club
            </button>
          </div>

          {/* Membership Card */}
          <div className="flex justify-center md:justify-end">
            <div className="w-72 bg-[#1C1A16] p-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2C2820] rounded-full -translate-y-1/2 translate-x-1/2 opacity-40" />
              <p className="text-[#A09688] uppercase tracking-widest text-xs mb-1">Miembro</p>
              <p className="text-white text-lg mb-6" style={{ fontWeight: 600 }}>David García</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[#A09688] uppercase tracking-widest text-xs mb-1">Puntos</p>
                  <p className="text-white text-3xl" style={{ fontWeight: 700 }}>450</p>
                  <p className="text-[#A09688] text-xs">pts</p>
                </div>
                <div className="text-right">
                  <p className="text-[#A09688] uppercase tracking-widest text-xs mb-1">Nivel</p>
                  <p className="text-white text-sm uppercase tracking-wide">Plata</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between mb-1">
                  <span className="text-[#6B6257] text-xs">Siguiente nivel: Oro</span>
                  <span className="text-[#A09688] text-xs">450/600</span>
                </div>
                <div className="h-1 bg-[#2C2820] w-full">
                  <div className="h-1 bg-[#D4C4A8]" style={{ width: "75%" }} />
                </div>
              </div>
              <div className="mt-5 flex justify-between items-center">
                <p className="text-[#6B6257] text-xs uppercase tracking-widest">LOS PAJARITOS</p>
                <div className="w-8 h-8 rounded-full border border-[#2C2820] flex items-center justify-center">
                  <span className="text-[#A09688] text-xs">P</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
