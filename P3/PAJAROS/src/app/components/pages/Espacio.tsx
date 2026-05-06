import { useNavigate } from "react-router";
import { Wifi, Zap, Coffee, Users, Clock, MapPin, Accessibility } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1731346701303-fc50d846613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjB3b29kJTIwcGxhbnRzfGVufDF8fHx8MTc3NzgzNDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const SPACE1_IMG = "https://images.unsplash.com/photo-1658148901083-890a6bdde5c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBjYWZlJTIwd29ya2luZyUyMHdvb2QlMjBwbGFudHN8ZW58MXx8fHwxNzc3ODM0NzU5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const SPACE2_IMG = "https://images.unsplash.com/photo-1647774469542-d8df9c2e23cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29mZmVlJTIwc2hvcCUyMGxhcHRvcCUyMGRheWxpZ2h0fGVufDF8fHx8MTc3NzgzNDc1OXww&ixlib=rb-4.1.0&q=80&w=1080";
const SPACE3_IMG = "https://images.unsplash.com/photo-1485878344847-7c1d692a8c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBjb2ZmZWUlMjBzaG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NzgzNDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080";

const features = [
  { icon: Wifi, title: "Wifi Ultra-rápido", desc: "500 Mbps simétricos para trabajar sin interrupciones." },
  { icon: Zap, title: "Enchufes en cada mesa", desc: "Todas nuestras mesas disponen de toma de corriente." },
  { icon: Coffee, title: "Café de especialidad", desc: "Granos de origen único tostados en pequeños lotes." },
  { icon: Users, title: "Comunidad activa", desc: "Eventos, networking y una comunidad de creativos." },
  { icon: Clock, title: "Horario extendido", desc: "Abrimos de lunes a viernes de 8:00 a 20:00." },
  { icon: MapPin, title: "Centro de Granada", desc: "En el corazón de la ciudad, bien conectados." },
];

export function Espacio() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFEFC6]">
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[480px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Interior Los Pajaritos Granada"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[#C6A68E] uppercase tracking-widest text-xs mb-4">Granada · Centro</p>
          <h1 className="text-white uppercase leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "0.05em" }}>
            Nuestro Espacio<br />en Granada
          </h1>
          <p className="text-[#C6A68E] text-sm mt-4 max-w-md">
            Un lugar donde el café de calidad se une al trabajo creativo en el corazón de la ciudad.
          </p>
        </div>
      </section>

      {/* ESPACIO ADAPTADO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#87986A] uppercase tracking-widest text-xs mb-4">Sobre nosotros</p>
            <h2 className="text-[#212121] uppercase leading-tight mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700 }}>
              Un espacio vivo<br />adaptado a ti
            </h2>
            <p className="text-[#4A5D6B] text-sm leading-relaxed mb-4">
              Los Pajaritos es un refugio acogedor en Granada. Cada rincón de nuestro local está pensado para que te sientas cómodo, productivo e inspirado, garantizando un entorno inclusivo para todos.
            </p>
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white border border-[#C6A68E]/30 px-3 py-1.5 rounded-sm">
                <Accessibility size={15} className="text-[#4A5D6B]" />
                <span className="text-xs text-[#4A5D6B] uppercase tracking-wide">Acceso Total</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-[#C6A68E]/30 px-3 py-1.5 rounded-sm">
                <Users size={15} className="text-[#4A5D6B]" />
                <span className="text-xs text-[#4A5D6B] uppercase tracking-wide">Aseos Universales</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-white p-4 text-center border border-[#C6A68E]/30 rounded-sm">
                <p className="text-[#212121] text-2xl" style={{ fontWeight: 700 }}>20</p>
                <p className="text-[#87986A] text-xs uppercase tracking-wide mt-1">Plazas</p>
              </div>
              <div className="bg-white p-4 text-center border border-[#C6A68E]/30 rounded-sm">
                <p className="text-[#212121] text-2xl" style={{ fontWeight: 700 }}>+1000</p>
                <p className="text-[#87986A] text-xs uppercase tracking-wide mt-1">VALORACIONES</p>
              </div>
              <div className="bg-white p-4 text-center border border-[#C6A68E]/30 rounded-sm">
                <p className="text-[#212121] text-2xl" style={{ fontWeight: 700 }}>500mb</p>
                <p className="text-[#87986A] text-xs uppercase tracking-wide mt-1">Wifi</p>
              </div>
              <div className="bg-white p-4 text-center border border-[#C6A68E]/30 rounded-sm">
                <p className="text-[#212121] text-2xl" style={{ fontWeight: 700 }}>5★</p>
                <p className="text-[#87986A] text-xs uppercase tracking-wide mt-1">Google</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={SPACE1_IMG}
              alt="Espacio de trabajo Los Pajaritos"
              className="w-full h-[480px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#87986A] uppercase tracking-widest text-xs mb-3">Lo que ofrecemos</p>
            <h2 className="text-[#212121] uppercase" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "0.06em" }}>
              Todo lo que necesitas
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 bg-[#FFEFC6] flex items-center justify-center mx-auto mb-4 rounded-full border border-[#C6A68E]/30">
                  <Icon size={20} className="text-[#5D3A24]" />
                </div>
                <h3 className="text-[#212121] text-sm mb-2" style={{ fontWeight: 600 }}>{title}</h3>
                <p className="text-[#4A5D6B] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#87986A] uppercase tracking-widest text-xs mb-3">Galería</p>
            <h2 className="text-[#212121] uppercase" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em" }}>
              Descubre cada rincón
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-72 md:h-auto overflow-hidden rounded-lg">
              <img src={HERO_IMG} alt="Los Pajaritos interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-44 overflow-hidden rounded-lg">
                <img src={SPACE2_IMG} alt="Zona de trabajo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="h-44 overflow-hidden rounded-lg">
                <img src={SPACE3_IMG} alt="Ambiente Los Pajaritos" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + CTA */}
      <section className="bg-[#5D3A24] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#FFEFC6] uppercase tracking-widest text-xs mb-4 opacity-80">Cómo llegar</p>
            <h2 className="text-white uppercase mb-4" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
              Encuéntranos en el centro de Granada
            </h2>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-[#FFEFC6] shrink-0 opacity-80" />
                <p className="text-[#FFEFC6] text-sm opacity-90">Calle Recogidas, 22 · 18005 Granada</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={15} className="text-[#FFEFC6] shrink-0 opacity-80" />
                <p className="text-[#FFEFC6] text-sm opacity-90">Lun – Vie: 8:00 – 20:00 · Sáb – Dom: 9:00 – 18:00</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/pedido")}
              className="bg-white text-[#5D3A24] px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-[#FFEFC6] transition-colors rounded-sm"
            >
              Hacer un pedido
            </button>
          </div>
          <div className="bg-[#4A5D6B] h-64 flex items-center justify-center rounded-lg shadow-lg">
            <div className="text-center">
              <MapPin size={32} className="text-[#FFEFC6] mx-auto mb-3" />
              <p className="text-[#FFEFC6] text-sm uppercase tracking-wide">Calle Recogidas, 22</p>
              <p className="text-[#FFEFC6] text-xs mt-1 opacity-70">Granada, España</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
