function GameFlow({ onBack, onGallery }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🎮 Game Flow</h1>
        <p className="text-gray-600">Componente Game Flow - In fase di sviluppo</p>
        
        <div className="mt-8 space-y-4">
          <button
            onClick={onBack}
            className="w-full bg-blue-500 text-white py-3 rounded font-bold"
          >
            ← Torna Home
          </button>
          <button
            onClick={onGallery}
            className="w-full bg-green-500 text-white py-3 rounded font-bold"
          >
            📸 Vai a Gallery
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameFlow