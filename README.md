# 🧭 Cagliari Treasure Hunt

Caccia al tesoro interattiva con codice QR e foto

## 📋 Caratteristiche

✅ **Modalità Admin** - Crea percorsi personalizzati
✅ **Percorsi Privati** - Con codice di accesso esclusivo
✅ **QR Code Scanner** - Scansiona QR code alle tappe
✅ **Foto** - Scatta foto alle tappe
✅ **Calcolo Tempo** - Bonus e malus automatici
✅ **Gallery Finale** - Rivedi tutte le foto
✅ **Offline Support** - Funziona senza internet
✅ **PWA** - Installa come app mobile

## 🚀 Installazione Locale

```bash
# Clone il repository
git clone https://github.com/davidiana06-bit/cagliari-treasure-hunt.git
cd cagliari-treasure-hunt

# Installa dipendenze
npm install

# Avvia in sviluppo
npm run dev

# Build per produzione
npm run build
```

## 🌐 Deploy su Netlify

### Metodo 1: Connect GitHub (Consigliato)

1. Vai su https://netlify.com
2. Clicca **"New site from Git"**
3. Seleziona **GitHub**
4. Scegli il repository **cagliari-treasure-hunt**
5. Netlify rileverà automaticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Clicca **"Deploy"**
7. Fatto! 🎉

### Metodo 2: Drag & Drop

1. Esegui build locale:
   ```bash
   npm run build
   ```
2. Vai su https://app.netlify.com/drop
3. Trascina la cartella `dist` nel browser
4. Fatto! 🎉

## 🔐 Accesso Admin

- **PIN**: `9069`
- **Come accedere**: Long press (3 volte) il logo nella home

## 📱 Installazione come App

### iOS (Safari)
1. Apri l'app in Safari
2. Clicca il bottone **Condividi**
3. Seleziona **Aggiungi alla schermata Home**

### Android (Chrome)
1. Apri l'app in Chrome
2. Clicca il menu (⋮)
3. Seleziona **Installa app** o **Aggiungi alla schermata Home**

## 🛠️ Struttura del Progetto

```
├── src/
│   ├── components/     # Componenti React
│   ├── pages/          # Pagine principali
│   ├── store/          # Zustand store (state management)
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utility functions
│   ├── App.jsx         # App principale
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind CSS
├── public/
│   ├── logo.png        # Logo app
│   ├── manifest.json   # PWA manifest
│   └── index.html      # HTML template
├── package.json        # Dipendenze
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS config
└── netlify.toml        # Netlify configuration
```

## 🎮 Come Usare

### Creare un Percorso Privato (Admin)

1. Accedi con PIN 9069
2. Vai a **🔒 Privati**
3. Clicca **+ Crea Nuovo**
4. Compila:
   - Nome percorso (es. "Festa Giovanni")
   - Codice accesso (es. "festa_giovanni_2025")
   - Seleziona tappe e specifica se randomiche o uguali
5. Clicca **Crea Percorso**
6. Condividi il codice con il gruppo

### Giocare con un Percorso Privato (Giocatore)

1. Home → **Crea una nuova caccia**
2. Compila il form
3. Dove scegli il percorso, clicca **[Inserisci codice privato]**
4. Inserisci il codice ricevuto (es. "festa_giovanni_2025")
5. Sblocca e seleziona il percorso
6. Crea la caccia
7. Scansiona i QR code alle tappe
8. Scatta foto
9. Finisci la caccia
10. Visualizza gallery finale

## 📊 Calcolo Tempo

- **Tempo Base**: Calcolato sulla distanza
- **Bonus**: +5 minuti per foto nitida
- **Malus**: -10 minuti per errore QR code
- **Finale**: Tempo base + bonus - malus

## 🔒 Percorsi Personalizzabili

Per ogni tappa puoi scegliere:
- **✅ UGUALE**: Stessa tappa nello stesso ordine per tutte le squadre
- **🔀 RANDOMICA**: Ordine diverso per ogni squadra

Esempio:
```
Tappa 1: Bastione         → ✅ UGUALE
Tappa 2: Piazza Yenne     → 🔀 RANDOMICA
Tappa 3: Torre Elefante   → 🔀 RANDOMICA
Tappa 4: Santuario        → ✅ UGUALE
Tappa 5: Parco Urpinu     → 🔀 RANDOMICA
Tappa 6: Anfiteatro       → ✅ UGUALE ← Come vuoi tu!
```

Team Alpha vedrà: [1, 2, 3, 4, 5, 6, ...]
Team Beta vedrà: [1, 3, 2, 4, 7, 6, ...]

## 🌐 Variabili d'Ambiente

Crea un file `.env.local` (copia da `.env.example`):

```env
VITE_API_URL=https://api.example.com
VITE_ADMIN_PIN=9069
VITE_ENABLE_PWA=true
```

## 🐛 Troubleshooting

### L'app non si apre su Netlify
- Verifica che il build abbia creato la cartella `dist`
- Controlla il file `netlify.toml` sia presente

### PWA non funziona
- Verifica il file `manifest.json` in `public/`
- Assicurati di usare HTTPS (Netlify lo fa automaticamente)

### QR Code non scansiona
- Dai permesso alla fotocamera
- Prova con migliore illuminazione
- Assicurati che il QR code sia nitido

## 📞 Supporto

Per problemi, apri un Issue su GitHub:
https://github.com/davidiana06-bit/cagliari-treasure-hunt/issues

## 📜 Licenza

MIT License - Vedi il file LICENSE per dettagli

---

**Made with ❤️ for Cagliari**