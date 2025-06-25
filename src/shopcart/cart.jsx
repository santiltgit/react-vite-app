import React, { useState, useEffect } from "react";

export default function Cart({ open, onClose }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(items);
  }, [open]);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + (item.price * item.cantidad), 0);

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", "[]");
  };

  if (!open) return null;

  return (
    <div className="cart-modal-bg" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <button className="cart-close" onClick={onClose}>×</button>
        <h2 className="cart-title">Carrito de compras</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Tu carrito está vacío.</p>
        ) : (
          <div>
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <div className="cart-name">{item.name}</div>
                  <div className="cart-qty">Cantidad: {item.cantidad}</div>
                  <div className="cart-price">${item.price} c/u</div>
                  <div className="cart-total">Total: ${item.price * item.cantidad}</div>
                  <button className="cart-remove" onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </div>
            ))}
            <div className="cart-grand-total">
              <b>Total a pagar: ${getTotal()}</b>
            </div>
            <button
              className="cart-remove"
              style={{ marginTop: 16, width: "100%" }}
              onClick={clearCart}
            >
              Eliminar todo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}