import React, { useState } from 'react';
import QawiAssistant from './components/QawiAssistant';
import VotingMap from './components/VotingMap';
import DashboardRealTime from './components/DashboardRealTime';
import BlockchainReceipt from './components/BlockchainReceipt';
import { Lock, Fingerprint, LogOut, ShieldCheck } from 'lucide-react';

function App() {
  const [view, setView] = useState('auth');
  const [dni, setDni] = useState('');
  const [isSosActive, setIsSosActive] = useState(false);

  const stats = { votos: "15,402,192", participacion: "68.4%" };

  const handleAuth = () => { if (dni.length === 8) setView('voto'); };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isSosActive ? 'bg-red-950' : 'bg-[#020617]'} text-slate-100 p-4 pb-20`}>
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-indigo-500" />
          <h1 className="font-black text-xl italic">ALIVIA</h1>
        </div>
        {view !== 'auth' && <button onClick={() => setView('auth')} className="text-slate-500"><LogOut size={20}/></button>}
      </header>

      <main className="max-w-md mx-auto space-y-6">
        <QawiAssistant 
          isSosActive={isSosActive}
          onSos={() => setIsSosActive(!isSosActive)}
          message={view === 'auth' ? "Hola Valeria, ingresa tu DNI para validar tu identidad en el nodo nacional." : "Recuerda que tu voto es secreto y está protegido por Blockchain."}
        />

        {view === 'auth' ? (
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] space-y-6">
            <Lock className="mx-auto text-indigo-500" size={48} />
            <input 
              type="text" maxLength={8} value={dni}
              onChange={(e) => setDni(e.target.value.replace(/\D/g, ''))}
              placeholder="DNI"
              className="w-full bg-black border-2 border-slate-800 rounded-2xl py-5 text-center text-3xl font-mono focus:border-indigo-500 outline-none"
            />
            <button onClick={handleAuth} className="w-full bg-indigo-600 py-5 rounded-2xl font-black shadow-lg shadow-indigo-600/20">AUTENTICAR</button>
          </div>
        ) : (
          <div className="space-y-6">
            <VotingMap destination="U. Nacional de Ingeniería - Mesa 042" />
            <DashboardRealTime stats={stats} />
            <BlockchainReceipt hash="0XF5B3921A772B5CC4E01B721A772B5CC4E01B" timestamp="08/05/2026 01:15 AM" />
          </div>
        )}
      </main>

      {isSosActive && (
        <div className="fixed top-10 left-4 right-4 bg-red-600 p-4 rounded-2xl text-center animate-bounce z-50">
          <p className="font-black text-white">🚨 ALERTA SOS: AUTORIDADES NOTIFICADAS</p>
        </div>
      )}
    </div>
  );
}

export default App;
