import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAppStore = create(
  persist(
    (set, get) => ({
      // Tappe
      tappe: [
        { id: 1, name: 'Bastione di Saint Remy', lat: 39.2160, lng: 9.1147, photos: [] },
        { id: 2, name: 'Piazza Yenne', lat: 39.2253, lng: 9.1232, photos: [] },
        { id: 3, name: 'Torre dell\'Elefante', lat: 39.2230, lng: 9.1240, photos: [] },
        { id: 4, name: 'Santuario di Bonaria', lat: 39.2053, lng: 9.1120, photos: [] },
        { id: 5, name: 'Parco Monte Urpinu', lat: 39.1980, lng: 9.0980, photos: [] },
        { id: 6, name: 'Anfiteatro Romano', lat: 39.2160, lng: 9.1180, photos: [] },
        { id: 7, name: 'Museo Archeologico', lat: 39.2150, lng: 9.1190, photos: [] },
        { id: 8, name: 'Cattedrale di Cagliari', lat: 39.2220, lng: 9.1210, photos: [] },
        { id: 9, name: 'Giardini Pubblici', lat: 39.2280, lng: 9.1260, photos: [] },
        { id: 10, name: 'Marina di Cagliari', lat: 39.2310, lng: 9.1320, photos: [] },
      ],

      // Percorsi pubblici
      percorsiPubblici: [
        {
          id: 'p_1',
          name: 'Centro Storico',
          isPrivate: false,
          tappe: [
            { id: 1, tappaId: 1, randomize: false },
            { id: 2, tappaId: 2, randomize: false },
            { id: 3, tappaId: 3, randomize: false },
            { id: 4, tappaId: 8, randomize: false },
            { id: 5, tappaId: 9, randomize: false },
          ]
        },
        {
          id: 'p_2',
          name: 'Paesaggistico',
          isPrivate: false,
          tappe: [
            { id: 1, tappaId: 5, randomize: false },
            { id: 2, tappaId: 4, randomize: false },
            { id: 3, tappaId: 10, randomize: false },
            { id: 4, tappaId: 9, randomize: false },
            { id: 5, tappaId: 1, randomize: false },
          ]
        },
      ],

      // Percorsi privati
      percorsiPrivati: [],

      // Cacce create
      cacce: [],

      // Aggiungi tappa
      addTappa: (tappa) => set((state) => ({
        tappe: [...state.tappe, { ...tappa, id: Math.max(...state.tappe.map(t => t.id), 0) + 1 }]
      })),

      // Aggiungi foto a tappa
      addPhotoToTappa: (tappaId, photo) => set((state) => ({
        tappe: state.tappe.map(t =>
          t.id === tappaId ? { ...t, photos: [...(t.photos || []), photo] } : t
        )
      })),

      // Crea percorso privato
      createPrivatePercorso: (percorso) => set((state) => ({
        percorsiPrivati: [...state.percorsiPrivati, { ...percorso, id: 'p_' + Date.now() }]
      })),

      // Crea caccia
      createCaccia: (caccia) => set((state) => ({
        cacce: [...state.cacce, { ...caccia, id: 'c_' + Date.now() }]
      })),

      // Aggiungi foto a caccia
      addPhotoToCaccia: (cacciaId, photo) => set((state) => ({
        cacce: state.cacce.map(c =>
          c.id === cacciaId ? { ...c, photos: [...(c.photos || []), photo] } : c
        )
      })),

      // Load data (mock)
      loadData: () => {},

      // Save data
      saveData: () => {},
    }),
    {
      name: 'cagliari-treasure-hunt-store',
    }
  )
)

export { useAppStore }