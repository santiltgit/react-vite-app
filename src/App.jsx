import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="freak-app-bg">
      <div className="freak-logo-bar">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo freak-spin" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react freak-glow" alt="React logo" />
        </a>
      </div>
      <h1 className="freak-title">GameFreak Universe</h1>
      <div className="freak-card">
        <button className="freak-btn" onClick={() => setCount((count) => count + 1)}>
          ¡Cuenta freak: {count}!
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>
      <p className="freak-read-the-docs">
        Haz clic en los logos para saber más sobre Vite y React
      </p>
    </div>
  )
}

export default App
