import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Footer from './footer/footer.jsx'
import Header from './headear/headear.jsx';
import Slider from './slider/slider.jsx';
import Body from './body/body.jsx'
import { ProductosProvider } from './fetch/api.jsx';
import Cart from './shopcart/cart.jsx';

function MainApp() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />
      <Slider />
      <ProductosProvider>
        <Body />
      </ProductosProvider>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)