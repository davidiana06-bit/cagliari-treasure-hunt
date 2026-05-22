import { useState } from 'react'
import { useAppStore } from '../store/appStore'
import PercorsoManager from '../components/PercorsoManager'
import TappaManager from '../components/TappaManager'

function AdminPanel({ onBack }) {
  const [activeTab, setActiveTab] = useState('percorsi')
  const { tappe, percorsiPubblici, percorsiPrivati } = useAppStore()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-hero text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">🛠️ Pannello Admin</h1>
        <p className="text-sm opacity-90">Gestisci tappe, percorsi e cacce</p>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 flex">
          <button
            onClick={() => setActiveTab('tappe')}
            className={`px-6 py-4 font-bold border-b-2 transition ${
              activeTab === 'tappe'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            📍 Tappe ({tappe.length})
          </button>
          <button
            onClick={() => setActiveTab('percorsi')}
            className={`px-6 py-4 font-bold border-b-2 transition ${
              activeTab === 'percorsi'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            🗺️ Percorsi
          </button>
          <button
            onClick={() => setActiveTab('privati')}
            className={`px-6 py-4 font-bold border-b-2 transition ${
              activeTab === 'privati'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            🔒 Privati ({percorsiPrivati.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6">
        {activeTab === 'tappe' && <TappaManager />}
        {activeTab === 'percorsi' && <PercorsoManager type="public" />}
        {activeTab === 'privati' && <PercorsoManager type="private" />}
      </div>

      {/* Back Button */}
      <div className="fixed bottom-6 left-6">
        <button
          onClick={onBack}
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-110"
        >
          ← Torna Home
        </button>
      </div>
    </div>
  )
}

export default AdminPanel