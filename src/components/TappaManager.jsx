import { useState } from 'react'
import { useAppStore } from '../store/appStore'

function TappaManager() {
  const { tappe, addTappa } = useAppStore()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    lat: '',
    lng: ''
  })

  const handleSubmit = () => {
    if (formData.name && formData.lat && formData.lng) {
      addTappa({
        name: formData.name,
        lat: parseFloat(formData.lat),
        lng: parseFloat(formData.lng),
        photos: []
      })
      setFormData({ name: '', lat: '', lng: '' })
      setShowForm(false)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tappe</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-6 py-2 rounded font-bold hover:bg-blue-600"
        >
          + Nuova Tappa
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-bold mb-4">Crea Nuova Tappa</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Nome Tappa</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded p-3"
              placeholder="Es. Bastione di Saint Remy"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-bold mb-2">Latitudine</label>
              <input
                type="number"
                step="0.0001"
                value={formData.lat}
                onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
                className="w-full border border-gray-300 rounded p-3"
                placeholder="39.2160"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Longitudine</label>
              <input
                type="number"
                step="0.0001"
                value={formData.lng}
                onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
                className="w-full border border-gray-300 rounded p-3"
                placeholder="9.1147"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600"
            >
              Crea Tappa
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="flex-1 bg-gray-400 text-white py-2 rounded font-bold hover:bg-gray-500"
            >
              Annulla
            </button>
          </div>
        </div>
      )}

      {/* List */}
      <div className="grid gap-4">
        {tappe.map((tappa, idx) => (
          <div key={tappa.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">#{idx + 1} {tappa.name}</h3>
                <p className="text-gray-600 text-sm">📍 {tappa.lat}, {tappa.lng}</p>
                <p className="text-gray-600 text-sm">📸 {tappa.photos?.length || 0} foto</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Modifica
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TappaManager