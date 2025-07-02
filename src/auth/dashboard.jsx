import React, { useState } from 'react';
import Header from '../headear/headear.jsx';
import LoginForm from './LoginForm.jsx';

function Dashboard() {
  const [user, setUser] = useState(null);

  // Simulación de login: LoginForm debe llamar a onLogin(userData) al autenticar
  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Header onCartClick={() => {}} />
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div style={{ padding: '2em', textAlign: 'center' }}>
          <h2>Bienvenido, {user.username || user.email || 'usuario'}!</h2>
          <button onClick={handleLogout} style={{marginTop:20, padding:'0.5em 2em', borderRadius:8, background:'#ff00cc', color:'#fff', border:'none', fontWeight:'bold', cursor:'pointer'}}>Cerrar sesión</button>
        </div>
      )}
    </>
  );
}

export default Dashboard;
