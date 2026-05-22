import { useState } from 'react'
import { useAppStore } from '../store/appStore'

function PercorsoManager({ type }) {
  const { percorsiPubblici, percorsiPrivati, tappe, createPrivatePercorso } = useAppStore()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    accessCode: '',
    tappe: []
  })

  const handleAddTappa = () => {
    setFormData({
      ...formData,
      tappe: [...formData.tappe, { tappaId: 1, randomize: false }]
    })
  }

  const handleSubmit = () => {
    if (type === 'private') {
      createPrivatePercorso({
        name: formData.name,
        accessCode: formData.accessCode,
        tappe: formData.tappe,
        isPrivate: true
      })
    }
    setShowForm(false)
    setFormData({ name: '', accessCode: '', tappe: [] })
  }

  const percorsi = type === 'private' ? percorsiPrivati : percorsiPubblici

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Percorsi {type === 'private' ? 'Privati 🔒' : 'Pubblici'}</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-6 py-2 rounded font-bold hover:bg-blue-600"
        >
          + Crea Nuovo
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-bold mb-4">Crea Nuovo Percorso</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Nome Percorso</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded p-3"
              placeholder="Es. Festa Giovanni"
            />
          </div>

          {type === 'private' && (
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Codice di Accesso</label>
              <input
                type="text"
                value={formData.accessCode}
                onChange={(e) => setFormData({ ...formData, accessCode: e.target.value })}
                className="w-full border border-gray-300 rounded p-3"
                placeholder="Es. festa_giovanni_2025"
              />
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Tappe ({formData.tappe.length})</label>
            {formData.tappe.map((t, idx) => (
              <div key={idx} className="flex gap-4 mb-3 bg-gray-50 p-3 rounded">
                <select
                  value={t.tappaId}
                  onChange={(e) => {
                    const newTappe = [...formData.tappe]
                    newTappe[idx].tappaId = parseInt(e.target.value)
                    setFormData({ ...formData, tappe: newTappe })
                  }}
                  className="flex-1 border border-gray-300 rounded p-2"
                >
                  {tappe.map(tappa => (
                    <option key={tappa.id} value={tappa.id}>
                      {tappa.name}
                    </option>
                  ))}
                </select>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={t.randomize}
                    onChange={(e) => {
                      const newTappe = [...formData.tappe]
                      newTappe[idx].randomize = e.target.checked
                      setFormData({ ...formData, tappe: newTappe })
                    }}
                  />
                  <span className="text-sm">Random</span>
                </label>
              </div>
            ))}
            <button
              onClick={handleAddTappa}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded font-bold hover:bg-gray-400"
            >
              + Aggiungi Tappa
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600"
            >
              Crea Percorso
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
        {percorsi.length === 0 ? (
          <p className="text-gray-600 text-center py-8">Nessun percorso creato</p>
        ) : (
          percorsi.map(percorso => (
            <div key={percorso.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{percorso.name}</h3>
                {type === 'private' && (
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-bold">
                    {percorso.accessCode}
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-sm">Tappe: {percorso.tappe.length}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default PercorsoManager