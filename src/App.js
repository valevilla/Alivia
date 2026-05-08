import React, { useState } from 'react';
// Importación de componentes desde sus respectivas carpetas
import QawiAssistant from './components/QawiAssistant';
import VotingMap from './components/VotingMap';
import DashboardRealTime from './components/DashboardRealTime';
import BlockchainReceipt from './components/BlockchainReceipt';
import './index.css';

function App() {
  const [isSosActive, setIsSosActive] = useState(false);
  const [view, setView] = useState('main'); // Control de navegación interna

  // Datos de ejemplo para las visualizaciones
  const electionStats = { votos: "15,402,192", participacion: "68.4%" };

  return (
    <div className={`min-h-screen transition-all duration-700 ${isSosActive ? 'bg-red-950' : 'bg-[#020617]'} text-white p-4 pb-24`}>
      
      {/* Header Fijo */}
      <header className="max-w-md mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="font-black text-xs">A</span>
          </div>
          <h1 className="font-black italic tracking-tighter text-xl">ALIVIA</h1>
        </div>
        <div className="status-badge bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-bold">
          NODO ACTIVO
        </div>
      </header>

      <main className="max-w-md mx-auto space-y-6">
        
        {/* Componente 1: IA Qawi (Carpeta /components) */}
        <QawiAssistant 
          isSosActive={isSosActive}
          onSos={() => setIsSosActive(!isSosActive)}
          message={isSosActive ? "ALERTA SOS: Protocolo de seguridad activado. Grabando audio y enviando GPS." : "Bienvenida Valeria. Tu ruta al local de votación es segura hoy."}
        />

        {/* Componente 2: Mapa y GPS (Carpeta /components) */}
        <VotingMap destination="Centro de Votación UNI - Puerta 3" />

        {/* Componente 3: Dashboard en tiempo real (Carpeta /components) */}
        <DashboardRealTime stats={electionStats} />

        {/* Componente 4: Blockchain (Carpeta /components) */}
        <BlockchainReceipt 
          hash="0x71C7656EC7AB88B098DEFB751B7401B5F6D8976F" 
          timestamp="08 Mayo 2026 - 01:55 AM" 
        />

      </main>

      {/* Barra de navegación inferior tipo "Mobile App" */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-black/80 backdrop-blur-2xl border border-white/10 p-2 rounded-full flex justify-around shadow-2xl">
        <button className="p-4 text-indigo-500"><span className="block w-2 h-2 bg-indigo-500 rounded-full mx-auto mb-1"></span></button>
        <button className="p-4 text-slate-500 hover:text-white transition-colors">📊</button>
        <button className="p-4 text-slate-500 hover:text-white transition-colors">👤</button>
      </nav>
    </div>
  );
}

export default App;
