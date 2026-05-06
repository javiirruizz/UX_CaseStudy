import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus } from "lucide-react";

const ESPRESSO_IMG = "https://images.unsplash.com/photo-1673846685646-675aca3b2d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBibGFjayUyMGFtZXJpY2FubyUyMG92ZXJoZWFkJTIwZmxhdCUyMGxheXxlbnwxfHx8fDE3Nzc4MzI4Mjl8MA&ixlib=rb-4.1.0&q=80&w=400";
const LATTE_IMG = "https://images.unsplash.com/photo-1623086923609-594e98bb0bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGxhdHRlJTIwY3VwfGVufDF8fHx8MTc3NzgzMjgyMnww&ixlib=rb-4.1.0&q=80&w=400";
const CAPPUCCINO_IMG = "https://images.unsplash.com/photo-1730652183583-aa1508f0ce33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwd2hpdGUlMjBjYXBwdWNjaW5vJTIwY29mZmVlJTIwYXJ0fGVufDF8fHx8MTc3NzgzMjgyNXww&ixlib=rb-4.1.0&q=80&w=400";
const CROISSANT_IMG = "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBhcnRpc2FuJTIwYmFrZXJ5fGVufDF8fHx8MTc3NzgzMjgyMnww&ixlib=rb-4.1.0&q=80&w=400";
const AVOCADO_IMG = "https://images.unsplash.com/photo-1593903971086-da1ad90da20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicnVuY2glMjBmb29kfGVufDF8fHx8MTc3NzgzMjgyMnww&ixlib=rb-4.1.0&q=80&w=400";
const SANDWICH_IMG = "https://images.unsplash.com/photo-1768295982112-4582e969ad06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGJhZ2VsJTIwYnJ1bmNoJTIwY2FmZXxlbnwxfHx8fDE3Nzc4MzI4MjV8MA&ixlib=rb-4.1.0&q=80&w=400";

const cafes = [
  { id: 1, name: "Espresso", desc: "Café puro de origen único", price: "2.00", img: ESPRESSO_IMG },
  { id: 2, name: "Cortado", desc: "Espresso con poca leche", price: "2.50", img: LATTE_IMG },
  { id: 3, name: "Solo largo", desc: "Americano largo suave", price: "2.20", img: ESPRESSO_IMG },
  { id: 4, name: "Latte Pajaritos", desc: "Espresso con leche cremosa", price: "4.00", img: LATTE_IMG },
  { id: 5, name: "Flat White", desc: "Doble espresso y microespuma", price: "3.80", img: CAPPUCCINO_IMG },
  { id: 6, name: "Cappuccino", desc: "Espresso, leche y espuma", price: "3.50", img: CAPPUCCINO_IMG },
];

const dulces = [
  { id: 7, name: "Torta de queso", desc: "Cheesecake cremoso al horno", price: "4.50", img: CROISSANT_IMG },
  { id: 8, name: "Croissant de almendra", desc: "Croissant artesanal relleno", price: "3.80", img: CROISSANT_IMG },
  { id: 9, name: "Brownie", desc: "Brownie de chocolate belga", price: "3.50", img: CROISSANT_IMG },
];

const brunch = [
  { id: 10, name: "Tostada de aguacate", desc: "Pan de masa madre, aguacate y semillas", price: "7.50", img: AVOCADO_IMG },
  { id: 11, name: "Huevos Benedict", desc: "Huevos escalfados con salsa holandesa", price: "8.90", img: SANDWICH_IMG },
  { id: 12, name: "Bol de granola", desc: "Granola artesanal, yogur y fruta fresca", price: "6.50", img: AVOCADO_IMG },
];

type Item = { id: number; name: string; desc: string; price: string; img: string };

function MenuCard({ item, onAdd }: { item: Item; onAdd: () => void }) {
  return (
    <div className="group bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-44 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-[#1C1A16] text-sm" style={{ fontWeight: 600 }}>{item.name}</h3>
          <span className="text-[#1C1A16] text-sm ml-2 shrink-0">{item.price}€</span>
        </div>
        <p className="text-[#9C8B78] text-xs mb-3 leading-relaxed">{item.desc}</p>
        <button
          onClick={onAdd}
          className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-[#6B6257] hover:text-[#1C1A16] transition-colors border border-[#E0D9CF] px-3 py-1.5 hover:border-[#1C1A16]"
        >
          <Plus size={12} /> Añadir
        </button>
      </div>
    </div>
  );
}

export function Carta() {
  const navigate = useNavigate();
  const [added, setAdded] = useState<number[]>([]);

  const handleAdd = (id: number) => {
    setAdded((prev) => [...prev, id]);
    setTimeout(() => setAdded((prev) => prev.filter((i) => i !== id)), 1200);
  };

  return (
    <div className="bg-[#F7F3EE]">
      {/* Title */}
      <div className="border-b border-[#E0D9CF] bg-white py-14 px-6 text-center">
        <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-3">Menú completo</p>
        <h1 className="text-[#1C1A16] uppercase tracking-wider" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "0.1em" }}>
          La Carta
        </h1>
        <p className="text-[#9C8B78] text-sm mt-3 max-w-md mx-auto">
          Todos nuestros productos están elaborados con ingredientes de primera calidad y café de especialidad.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-14 z-40 bg-[#F7F3EE] border-b border-[#E0D9CF]">
        <div className="max-w-7xl mx-auto px-6 flex gap-0 overflow-x-auto">
          {["Nuestros Cafés", "Dulces Artesanales", "Brunch y Más"].map((tab, i) => (
            <a
              key={tab}
              href={`#section-${i}`}
              className="px-5 py-4 text-xs uppercase tracking-widest text-[#6B6257] hover:text-[#1C1A16] transition-colors border-b-2 border-transparent hover:border-[#1C1A16] whitespace-nowrap"
            >
              {tab}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* NUESTROS CAFÉS */}
        <section id="section-0">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-2">Origen único</p>
              <h2 className="text-[#1C1A16] uppercase" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                Nuestros Cafés
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cafes.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={() => handleAdd(item.id)} />
            ))}
          </div>
        </section>

        <div className="border-t border-[#E0D9CF]" />

        {/* DULCES */}
        <section id="section-1">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-2">Horneado diario</p>
              <h2 className="text-[#1C1A16] uppercase" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                Dulces Artesanales
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dulces.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={() => handleAdd(item.id)} />
            ))}
          </div>
        </section>

        <div className="border-t border-[#E0D9CF]" />

        {/* BRUNCH */}
        <section id="section-2">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#9C8B78] uppercase tracking-widest text-xs mb-2">De 9:00 a 13:00</p>
              <h2 className="text-[#1C1A16] uppercase" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                Platos de Brunch y Más
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {brunch.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={() => handleAdd(item.id)} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#1C1A16] p-10 text-center">
          <p className="text-[#A09688] uppercase tracking-widest text-xs mb-3">¿Tienes prisa?</p>
          <h3 className="text-white uppercase mb-4" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
            Realiza tu pedido<br />online
          </h3>
          <button
            onClick={() => navigate("/pedido")}
            className="bg-white text-[#1C1A16] px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-[#F7F3EE] transition-colors"
          >
            Ir a tu pedido
          </button>
        </div>
      </div>
    </div>
  );
}
