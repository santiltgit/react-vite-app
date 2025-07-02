import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('john@mail.com');
  const [password, setPassword] = useState('changeme');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) throw new Error('Credenciales incorrectas');
      const data = await res.json();
      // data: { access_token, refresh_token }
      // Ahora obtenemos el usuario:
      const userRes = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: { Authorization: `Bearer ${data.access_token}` }
      });
      if (!userRes.ok) throw new Error('No se pudo obtener el usuario');
      const user = await userRes.json();
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        onLogin(user);
      }, 500); // Pequeña pausa para UX
    } catch (err) {
      setLoading(false);
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '2em auto', background: '#fff', borderRadius: 12, padding: '2em', boxShadow: '0 2px 16px #ff00cc33' }}>
      <h2 style={{ color: '#ff00cc', marginBottom: 20 }}>Iniciar sesión</h2>
      <div style={{ marginBottom: 16 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.7em', borderRadius: 6, border: '1px solid #ccc', marginBottom: 8 }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.7em', borderRadius: 6, border: '1px solid #ccc' }}
        />
      </div>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: 12 }}>¡Login exitoso! Redirigiendo...</div>}
      <button type="submit" disabled={loading} style={{ width: '100%', background: 'linear-gradient(90deg,#ff00cc,#3333ff)', color: '#fff', border: 'none', borderRadius: 6, padding: '0.7em', fontWeight: 'bold', fontSize: 16, cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}

export default LoginForm;
