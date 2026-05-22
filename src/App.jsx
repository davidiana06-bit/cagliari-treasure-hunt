import { useState, useEffect } from 'react'
import { useAppStore } from './store/appStore'
import HomePage from './pages/HomePage'
import AdminPanel from './pages/AdminPanel'
import GameFlow from './pages/GameFlow'
import GalleryPage from './pages/GalleryPage'

function App() {
  const [screen, setScreen] = useState('home')
  const [adminMode, setAdminMode] = useState(false)
  const { loadData } = useAppStore()

  useEffect(() => {
    loadData()
  }, [])

  const handleAdminAccess = () => {
    setAdminMode(true)
    setScreen('admin')
  }

  const handleBackHome = () => {
    setScreen('home')
    setAdminMode(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {screen === 'home' && (
        <HomePage 
          onGameStart={() => setScreen('game')}
          onAdminAccess={handleAdminAccess}
        />
      )}
      {screen === 'admin' && (
        <AdminPanel onBack={handleBackHome} />
      )}
      {screen === 'game' && (
        <GameFlow 
          onBack={() => setScreen('home')}
          onGallery={() => setScreen('gallery')}
        />
      )}
      {screen === 'gallery' && (
        <GalleryPage onBack={() => setScreen('home')} />
      )}
    </div>
  )
}

export default App