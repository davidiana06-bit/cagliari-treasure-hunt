function GalleryPage({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📸 Gallery</h1>
        <p className="text-gray-600">Componente Gallery - In fase di sviluppo</p>
        
        <button
          onClick={onBack}
          className="mt-8 w-full bg-blue-500 text-white py-3 rounded font-bold"
        >
          ← Torna Home
        </button>
      </div>
    </div>
  )
}

export default GalleryPage