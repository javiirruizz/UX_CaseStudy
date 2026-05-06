import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Carta } from "./components/pages/Carta";
import { Pedido } from "./components/pages/Pedido";
import { Espacio } from "./components/pages/Espacio";
import { Club } from "./components/pages/Club";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "carta", Component: Carta },
      { path: "pedido", Component: Pedido },
      { path: "espacio", Component: Espacio },
      { path: "club", Component: Club },
    ],
  },
]);
