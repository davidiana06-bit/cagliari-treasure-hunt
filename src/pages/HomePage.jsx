import { useState } from 'react'
import logo from '/logo.png'

function HomePage({ onGameStart, onAdminAccess }) {
  const [pressCount, setPressCount] = useState(0)
  const [pressTimer, setPressTimer] = useState(null)
  const [showPinModal, setShowPinModal] = useState(false)
  const [pinInput, setPinInput] = useState('')

  const handleLogoPressStart = () => {
    setPressCount(1)
    const timer = setTimeout(() => {
      setPressCount(0)
    }, 500)
    setPressTimer(timer)
  }

  const handleLogoPressEnd = () => {
    if (pressTimer) clearTimeout(pressTimer)
    if (pressCount === 1) {
      setPressCount(prev => prev + 1)
      if (pressCount + 1 >= 3) {
        setShowPinModal(true)
        setPressCount(0)
      }
    }
  }

  const handlePinSubmit = () => {
    if (pinInput === '9069') {
      setShowPinModal(false)
      setPinInput('')
      onAdminAccess()
    } else {
      alert('❌ PIN non corretto!')
      setPinInput('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div 
        className="mb-8 cursor-pointer transform transition-transform hover:scale-105 select-none"
        onMouseDown={handleLogoPressStart}
        onMouseUp={handleLogoPressEnd}
        onTouchStart={handleLogoPressStart}
        onTouchEnd={handleLogoPressEnd}
        draggable="false"
      >
        <img 
          src={logo} 
          alt="Cagliari Treasure Hunt" 
          className="w-32 h-32 drop-shadow-lg"
          draggable="false"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-hero bg-clip-text text-transparent">
        🧭 CAGLIARI QUEST
      </h1>
      <p className="text-gray-600 text-center mb-8 max-w-sm">
        Caccia al tesoro interattiva con codice QR
      </p>

      {/* Main Buttons */}
      <div className="w-full max-w-sm space-y-4">
        <button
          onClick={onGameStart}
          className="w-full bg-gradient-hero text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105"
        >
          🎮 Crea una nuova caccia
        </button>

        <button
          onClick={() => alert('Inserisci il codice invito ricevuto dal creatore della caccia')}
          className="w-full bg-blue-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105"
        >
          🔗 Hai già un codice?
        </button>

        <button
          onClick={() => alert('Regolamento della caccia al tesoro...')}
          className="w-full bg-gray-400 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105"
        >
          📋 Regolamento
        </button>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-12 text-center">
        © 2025 Cagliari Treasure Hunt • v1.0.0
      </p>

      {/* PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">🔐 Accesso Admin</h2>
            <p className="text-gray-600 text-center mb-4">Inserisci il PIN</p>
            <input
              type="password"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePinSubmit()}
              placeholder="Inserisci PIN"
              className="w-full border border-gray-300 rounded p-3 mb-4 text-center text-2xl tracking-widest"
              autoFocus
              maxLength="4"
            />
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowPinModal(false)
                  setPinInput('')
                }}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-2 rounded hover:bg-gray-400"
              >
                Annulla
              </button>
              <button
                onClick={handlePinSubmit}
                className="flex-1 bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
              >
                Accedi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage