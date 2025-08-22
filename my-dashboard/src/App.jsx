import { React, useState } from 'react';
import DashboardCard1 from './components/Cards1';
import Sidebar from './components/Sidebar';
import './App.css'

function App() {
  const [activeScreen, setActiveScreen] = useState("cards1");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar on the left */}
      <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeScreen === "cards1" && <DashboardCard1 />}
        {activeScreen === "cards2" && (
          <div className="flex items-center justify-center h-full text-gray-500">
            (Cards 2 will be implemented here)
          </div>
        )}
      </div>
    </div>
  )
}

export default App
