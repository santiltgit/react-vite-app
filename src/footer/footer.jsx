import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '2em', marginTop: '2em'}}>
          <div style={{flex: 1}}>
            <h2>GameFreak Shop</h2>
            <p>Explora los mejores juegos y ofertas exclusivas.</p>
            <p style={{fontSize: '1em', margin: '1em 0 0.5em 0', color: '#fff', fontWeight: 'bold'}}>
              Dirección: Av. Siempre Viva 742, Springfield
            </p>
            <div style={{display: 'flex', gap: '1em', marginBottom: '1em'}}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" style={{color:'#4267B2', fontSize:'2em'}}>
                <i className="fab fa-facebook-square"></i> {/* Facebook icon */}
                <span style={{display:'none'}}>Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" style={{color:'#1DA1F2', fontSize:'2em'}}>
                <i className="fab fa-twitter-square"></i> {/* Twitter icon */}
                <span style={{display:'none'}}>Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" style={{color:'#E1306C', fontSize:'2em'}}>
                <i className="fab fa-instagram"></i> {/* Instagram icon */}
                <span style={{display:'none'}}>Instagram</span>
              </a>
            </div>
            <p style={{fontSize: '0.95em', color: '#bbb'}}>
              &copy; {new Date().getFullYear()} GameFreak Shop. Todos los derechos reservados.
            </p>
          </div>
          <div style={{width: '500px', maxWidth: '100%'}}>
            <iframe
              title="Ubicación GameFreak Shop"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353159047!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0f7b1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1ses!2sar!4v1684871234567!5m2!1ses!2sar"
              width="100%"
              height="220"
              style={{border:0, borderRadius: '1em'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
