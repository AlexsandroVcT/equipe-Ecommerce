import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Produtos page="login" />}>
          <Route path="carrinho" element={<h2>Carrinho de compras</h2>} />
        </Route>
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}