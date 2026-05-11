import { Outlet, NavLink, useNavigate } from "react-router";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "INICIO", to: "/" },
    { label: "CARTA", to: "/carta" },
    { label: "TU PEDIDO", to: "/pedido" },
    { label: "ESPACIO", to: "/espacio" },
    { label: "CLUB", to: "/club" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EE]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F7F3EE] border-b border-[#E0D9CF]">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-[#1C1A16] tracking-[0.2em] uppercase text-sm"
            style={{ fontWeight: 600 }}
          >
            LOS PAJARITOS
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-xs tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-[#1C1A16] border-b border-[#1C1A16] pb-0.5"
                      : "text-[#6B6257] hover:text-[#1C1A16]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-[#6B6257] hover:text-[#1C1A16] transition-colors">
              <Search size={17} />
            </button>
            <button
              className="text-[#6B6257] hover:text-[#1C1A16] transition-colors"
              onClick={() => navigate("/club")}
            >
              <User size={17} />
            </button>
            <button
              className="text-[#6B6257] hover:text-[#1C1A16] transition-colors"
              onClick={() => navigate("/pedido")}
            >
              <ShoppingBag size={17} />
            </button>
            <button
              className="md:hidden text-[#6B6257] hover:text-[#1C1A16]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#F7F3EE] border-t border-[#E0D9CF] px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-xs tracking-widest uppercase ${
                    isActive ? "text-[#1C1A16]" : "text-[#6B6257]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1A16] text-[#A09688] pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <p className="text-white tracking-[0.2em] uppercase text-sm mb-4" style={{ fontWeight: 600 }}>
                LOS PAJARITOS
              </p>
              <p className="text-xs leading-relaxed">
                Café de especialidad y espacio de trabajo en el corazón de Granada.
              </p>
            </div>
            <div>
              <p className="text-white uppercase tracking-wider text-xs mb-4">Visítanos</p>
              <p className="text-xs leading-relaxed">
                Calle Recogidas, 22<br />
                18005 Granada<br />
                España
              </p>
              <p className="text-xs mt-3">Lun – Vie: 8:00 – 20:00</p>
              <p className="text-xs">Sáb – Dom: 9:00 – 18:00</p>
            </div>
            <div>
              <p className="text-white uppercase tracking-wider text-xs mb-4">Explora</p>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="text-xs hover:text-white transition-colors"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white uppercase tracking-wider text-xs mb-4">Contacto</p>
              <p className="text-xs">hola@lospajaritos.es</p>
              <p className="text-xs mt-1">+34 958 123 456</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-xs hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-xs hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2C2820] pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs">© 2026 Los Pajaritos. Todos los derechos reservados.</p>
            <p className="text-xs">Hecho con ♥ en Granada</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
