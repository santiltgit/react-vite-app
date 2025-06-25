import React from 'react';

function Header({ onCartClick }) {
  return (
    <header className="freak-header">
      <h1 className="freak-header-title">GameFreak Shop</h1>
      <nav className="freak-header-nav">
        <a href="#">Inicio</a>
        <a href="#game">Juegos</a>
        <a href="#">Ofertas</a>
        <a href="#footer">Contacto</a>
        <button
          className="cart-header-btn"
          onClick={onCartClick}
          aria-label="Ver carrito"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginLeft: 16,
            display: "flex",
            alignItems: "center"
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#ff00cc">
            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm1.83-3.41l1.72-7.45A1 1 0 0 0 19.56 6H6.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 17.37 5.48 19 7 19h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.74-1.04z"/>
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;