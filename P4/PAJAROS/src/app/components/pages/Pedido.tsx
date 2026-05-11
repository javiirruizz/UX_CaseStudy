import { useState } from "react";
import { Plus, Minus, X, ShoppingBag, Clock, MapPin } from "lucide-react";

const ESPRESSO_IMG = "https://images.unsplash.com/photo-1673846685646-675aca3b2d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBibGFjayUyMGFtZXJpY2FubyUyMG92ZXJoZWFkJTIwZmxhdCUyMGxheXxlbnwxfHx8fDE3Nzc4MzI4Mjl8MA&ixlib=rb-4.1.0&q=80&w=600";
const LATTE_IMG = "https://images.unsplash.com/photo-1623086923609-594e98bb0bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGxhdHRlJTIwY3VwfGVufDF8fHx8MTc3NzgzMjgyMnww&ixlib=rb-4.1.0&q=80&w=600";
const CAPPUCCINO_IMG = "https://images.unsplash.com/photo-1730652183583-aa1508f0ce33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwd2hpdGUlMjBjYXBwdWNjaW5vJTIwY29mZmVlJTIwYXJ0fGVufDF8fHx8MTc3NzgzMjgyNXww&ixlib=rb-4.1.0&q=80&w=600";
const CROISSANT_IMG = "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBhcnRpc2FuJTIwYmFrZXJ5fGVufDF8fHx8MTc3NzgzMjgyMnww&ixlib=rb-4.1.0&q=80&w=600";
const AVOCADO_IMG = "https://images.unsplash.com/photo-1593903971086-da1ad90da20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicnVuY2glMjBmb29kfGVufDF8fHx8MTc3NzgzMjgyMnww&ixlib=rb-4.1.0&q=80&w=600";
const SANDWICH_IMG = "https://images.unsplash.com/photo-1768295982112-4582e969ad06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGJhZ2VsJTIwYnJ1bmNoJTIwY2FmZXxlbnwxfHx8fDE3Nzc4MzI4MjV8MA&ixlib=rb-4.1.0&q=80&w=600";

type Category = "todos" | "cafes" | "dulces" | "brunch";

const allProducts = [
  { id: 1, name: "Espresso Simple", desc: "Café intenso y corto con notas a chocolate y frutos rojos.", category: "cafes" as Category, price: 2.20, img: ESPRESSO_IMG },
  { id: 2, name: "Cortado", desc: "Espresso con una pequeña cantidad de leche vaporizada.", category: "cafes" as Category, price: 2.50, img: LATTE_IMG },
  { id: 3, name: "Latte Pajarito", desc: "Una proporción ideal de café, leche y un toque de nuestra receta secreta.", category: "cafes" as Category, price: 4.50, img: LATTE_IMG },
  { id: 4, name: "Flat White", desc: "Doble espresso con leche finamente texturizada y sedosa.", category: "cafes" as Category, price: 3.80, img: CAPPUCCINO_IMG },
  { id: 5, name: "Cappuccino", desc: "Partes iguales de espresso, leche y nuestra textura cremosa.", category: "cafes" as Category, price: 4.00, img: CAPPUCCINO_IMG },
  { id: 6, name: "Americano", desc: "Espresso rebajado con agua caliente para alargar el disfrute.", category: "cafes" as Category, price: 3.00, img: ESPRESSO_IMG },
  { id: 7, name: "Torta de queso", desc: "Nuestra clásica tarta de queso horneada, muy cremosa.", category: "dulces" as Category, price: 4.50, img: CROISSANT_IMG },
  { id: 8, name: "Croissant de almendra", desc: "Recién horneado, relleno de crema de almendras y crujiente.", category: "dulces" as Category, price: 3.80, img: CROISSANT_IMG },
  { id: 9, name: "Brownie", desc: "Chocolate intenso con nueces, perfecto para acompañar tu café.", category: "dulces" as Category, price: 3.50, img: CROISSANT_IMG },
  { id: 10, name: "Tostada de aguacate", desc: "Pan de masa madre, aguacate machacado, sésamo y lima.", category: "brunch" as Category, price: 7.50, img: AVOCADO_IMG },
  { id: 11, name: "Huevos Benedict", desc: "Dos huevos poché sobre brioche con salsa holandesa.", category: "brunch" as Category, price: 8.90, img: SANDWICH_IMG },
  { id: 12, name: "Bol de granola", desc: "Yogur, granola casera, miel y fruta fresca de temporada.", category: "brunch" as Category, price: 6.50, img: AVOCADO_IMG },
];

type CartItem = { id: number; name: string; price: number; qty: number; img: string };

export function Pedido() {
  const [mode, setMode] = useState<"recoger" | "envio">("recoger");
  const [category, setCategory] = useState<Category>("todos");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [confirmed, setConfirmed] = useState(false);

  const filtered = category === "todos" ? allProducts : allProducts.filter((p) => p.category === category);

  const addToCart = (product: (typeof allProducts)[0]) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1, img: product.img }];
    });
  };

  const changeQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = mode === "envio" ? subtotal + 1.5 : subtotal;

  const categories: { label: string; value: Category }[] = [
    { label: "Todos", value: "todos" },
    { label: "Cafés", value: "cafes" },
    { label: "Bollería", value: "dulces" },
    { label: "Brunch", value: "brunch" },
  ];

  return (
    <div className="bg-[#FFEFC6] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[#C6A68E]/30 py-10 px-6 text-center">
        <p className="text-[#87986A] uppercase tracking-widest text-xs mb-2">Online</p>
        <h1 className="text-[#212121] uppercase tracking-wide" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700 }}>
          Tu Pedido Rápido y Fácil
        </h1>
        <p className="text-[#4A5D6B] text-sm mt-2">Recoge en local o recíbelo donde quieras</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT: Product list */}
        <div className="lg:col-span-2">
          {/* Mode toggle */}
          <div className="bg-white p-1 flex mb-6 w-fit rounded-lg shadow-sm border border-[#C6A68E]/20">
            <button
              onClick={() => setMode("recoger")}
              className={`flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest transition-colors rounded-md ${
                mode === "recoger" ? "bg-[#5D3A24] text-white" : "text-[#4A5D6B] hover:text-[#212121]"
              }`}
            >
              <MapPin size={13} /> Recoger en local
            </button>
            <button
              onClick={() => setMode("envio")}
              className={`flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest transition-colors rounded-md ${
                mode === "envio" ? "bg-[#5D3A24] text-white" : "text-[#4A5D6B] hover:text-[#212121]"
              }`}
            >
              <Clock size={13} /> Envío a domicilio
            </button>
          </div>

          {mode === "recoger" && (
            <div className="bg-white border border-[#C6A68E]/30 rounded-lg px-4 py-3 mb-8 flex items-center gap-3">
              <MapPin size={15} className="text-[#87986A] shrink-0" />
              <div>
                <p className="text-xs text-[#212121]" style={{ fontWeight: 600 }}>Calle Recogidas, 22 · Granada</p>
                <p className="text-xs text-[#4A5D6B]">Tiempo estimado: 10-15 min</p>
              </div>
            </div>
          )}

          {/* Category filter */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setCategory(value)}
                className={`px-5 py-1.5 text-xs uppercase tracking-wider transition-colors border rounded-full ${
                  category === value
                    ? "bg-[#5D3A24] text-white border-[#5D3A24]"
                    : "bg-[#4A5D6B]/10 border-[#4A5D6B]/20 text-[#212121] hover:bg-[#4A5D6B]/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.map((p) => {
              const cartItem = cart.find((i) => i.id === p.id);
              return (
                <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#C6A68E]/30 flex flex-col hover:shadow-md transition-shadow">
                  <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[#212121] text-sm mb-1" style={{ fontWeight: 600 }}>{p.name}</h3>
                    <p className="text-[#87986A] text-xs leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-[#5D3A24] text-sm" style={{ fontWeight: 600 }}>€{p.price.toFixed(2)}</p>
                      
                      {cartItem ? (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => changeQty(p.id, -1)}
                            className="w-7 h-7 rounded-full border border-[#C6A68E]/50 flex items-center justify-center hover:bg-[#FFEFC6] transition-colors text-[#5D3A24]"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-4 text-center text-[#212121]" style={{ fontWeight: 600 }}>{cartItem.qty}</span>
                          <button
                            onClick={() => changeQty(p.id, 1)}
                            className="w-7 h-7 rounded-full bg-[#5D3A24] text-white flex items-center justify-center hover:bg-[#4A2F1D] transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(p)}
                          className="w-8 h-8 rounded-full bg-[#5D3A24] text-white flex items-center justify-center hover:bg-[#4A2F1D] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Cart */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-[#C6A68E]/30 overflow-hidden sticky top-8">
            <div className="p-6 border-b border-[#C6A68E]/20 bg-[#FFEFC6]/50">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-[#5D3A24]" />
                <h2 className="text-[#212121] uppercase tracking-widest text-xs" style={{ fontWeight: 700 }}>
                  Tu pedido
                </h2>
                {cart.length > 0 && (
                  <span className="ml-auto bg-[#5D3A24] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-medium">
                    {cart.reduce((s, i) => s + i.qty, 0)}
                  </span>
                )}
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="p-10 text-center">
                <ShoppingBag size={36} className="text-[#C6A68E]/50 mx-auto mb-4" />
                <p className="text-[#87986A] text-xs uppercase tracking-wide">Tu carrito está vacío</p>
                <p className="text-[#4A5D6B] text-xs mt-2">Añade productos de la carta para empezar</p>
              </div>
            ) : (
              <>
                <div className="p-5 space-y-4 max-h-[50vh] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.img} alt={item.name} className="w-12 h-12 rounded-md object-cover shrink-0 border border-[#C6A68E]/20" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[#212121] text-xs truncate" style={{ fontWeight: 600 }}>{item.name}</p>
                        <p className="text-[#87986A] text-xs mt-0.5">{item.qty} × €{item.price.toFixed(2)}</p>
                      </div>
                      <p className="text-[#212121] text-sm shrink-0" style={{ fontWeight: 500 }}>€{(item.price * item.qty).toFixed(2)}</p>
                      <button onClick={() => changeQty(item.id, -item.qty)} className="text-[#C6A68E] hover:text-[#5D3A24] transition-colors p-1">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-5 border-t border-[#C6A68E]/20 space-y-3 bg-gray-50/50">
                  <div className="flex justify-between text-sm text-[#4A5D6B]">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  {mode === "envio" && (
                    <div className="flex justify-between text-sm text-[#4A5D6B]">
                      <span>Envío</span>
                      <span>€1.50</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base border-t border-[#C6A68E]/20 pt-3 mt-1">
                    <span className="text-[#212121] uppercase tracking-wide" style={{ fontWeight: 700 }}>Total</span>
                    <span className="text-[#5D3A24]" style={{ fontWeight: 700 }}>€{total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="p-5 pt-0 bg-gray-50/50">
                  {confirmed ? (
                    <div className="bg-[#87986A]/20 text-[#87986A] text-center py-3.5 rounded-lg text-xs uppercase tracking-widest font-semibold border border-[#87986A]/30">
                      ¡Pedido confirmado! ✓
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmed(true)}
                      className="w-full rounded-lg bg-[#5D3A24] text-white py-3.5 uppercase tracking-widest text-xs hover:bg-[#4A2F1D] transition-colors shadow-sm"
                    >
                      Confirmar pedido
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
