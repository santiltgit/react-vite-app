import React, { useState } from "react";
import { useProductos } from "../fetch/api.jsx";

function Body() {
  const { productos, loading } = useProductos();
  const [modal, setModal] = useState({ abierto: false, articulo: null, cantidad: 1 });

  // Simula un precio si no existe en el producto
  const getPrecio = (art) => art.price || Math.floor(Math.random() * 1000) + 100;

  // Función para agregar al carrito
  const addToCart = (art, cantidad) => {
    const precio = getPrecio(art);
    const item = {
      id: art.id,
      name: art.title || art.name,
      imageUrl: art.image || art.imageUrl,
      price: precio,
      cantidad,
      total: precio * cantidad,
    };
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const idx = cart.findIndex(i => i.id === item.id);
    if (idx >= 0) {
      cart[idx].cantidad += cantidad;
      cart[idx].total = cart[idx].cantidad * cart[idx].price;
    } else {
      cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <main id='game' className="freak-app-bg" style={{ padding: '2em 0', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none' }}>
      <h2 className="freak-title">Artículos Freak Destacados</h2>
      {loading ? (
        <p style={{ color: '#fff' }}>Cargando productos...</p>
      ) : (
        <div style={{ display: 'flex', gap: '2em', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2em' }}>
          {productos
            .filter(art => art.image || art.imageUrl)
            .slice(0, 24)
            .map(art => (
              <div key={art.id} className="freak-card">
                <img
                  src={art.image || art.imageUrl}
                  alt={art.title || art.name}
                  className="freak-card-img"
                  onError={e => { e.target.src = "https://via.placeholder.com/223x310?text=Sin+Imagen"; }}
                />
                <h3 style={{ color: '#ffb3f6' }}>{art.title || art.name}</h3>
                <p style={{ fontSize: '1em', margin: '0.5em 0 1em 0' }}>{art.description || art.text}</p>
                <div style={{ margin: '0.5em 0', fontWeight: 'bold', color: '#ffe066' }}>
                  Precio: ${getPrecio(art)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
                  <button
                    onClick={() => setModal({ abierto: true, articulo: art, cantidad: 1 })}
                    className="freak-btn"
                  >
                    Ver más detalles
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Modal para aumentar/disminuir cantidad y ver precio total */}
      {modal.abierto && (
        <div className="freak-modal-bg">
          <div className="freak-modal">
            <button onClick={() => setModal({ abierto: false, articulo: null, cantidad: 1 })}
              className="freak-modal-close">×</button>
            <img src={modal.articulo.image || modal.articulo.imageUrl} alt={modal.articulo.title || modal.articulo.name} className="freak-modal-img" />
            <h3 style={{ color: '#ff00cc' }}>{modal.articulo.title || modal.articulo.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#333', margin: '0.5em 0' }}>{modal.articulo.setName || ""} {modal.articulo.rarity ? `· ${modal.articulo.rarity}` : ""}</p>
            <p style={{ fontSize: '1em', margin: '0.5em 0 1em 0', color: '#444' }}>{modal.articulo.description || modal.articulo.text || "Sin descripción"}</p>
            <div style={{ margin: '1em 0', fontWeight: 'bold', color: '#333' }}>
              Precio unitario: ${getPrecio(modal.articulo)}
            </div>
            <div className="freak-modal-qty">
              <button onClick={() => setModal(m => ({ ...m, cantidad: Math.max(1, m.cantidad - 1) }))}
                className="freak-modal-btn">-</button>
              <span style={{ fontSize: 20 }}>{modal.cantidad}</span>
              <button onClick={() => setModal(m => ({ ...m, cantidad: m.cantidad + 1 }))}
                className="freak-modal-btn freak-plus">+</button>
            </div>
            <div style={{ marginBottom: 16, fontWeight: 'bold', color: '#333' }}>
              Total: ${getPrecio(modal.articulo) * modal.cantidad}
            </div>
            <button
              onClick={() => {
                addToCart(modal.articulo, modal.cantidad);
                setModal({ abierto: false, articulo: null, cantidad: 1 });
              }}
              className="freak-btn"
              style={{ fontSize: 18, marginBottom: 10 }}
            >
              Agregar al carrito
            </button>
            <button
              onClick={() => setModal({ abierto: false, articulo: null, cantidad: 1 })}
              className="freak-btn"
              style={{ fontSize: 18, background: "#eee", color: "#333" }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Body;