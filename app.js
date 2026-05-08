import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, MapPin, Lock, Fingerprint, Accessibility, 
  MessageCircle, ShieldAlert, CheckCircle2, Phone, 
  Activity, BarChart3, Navigation, AlertOctagon 
} from 'lucide-react';

export default function AliviaApp() {
  const [view, setView] = useState('auth'); // auth, token, route, ballot, dashboard, success
  const [dni, setDni] = useState('');
  const [token, setToken] = useState('');
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [isAssistantActive, setIsAssistantActive] = useState(true);

  // Simulación de datos de Dashboard Nacional
  const stats = { votantes: "14,201,392", avance: "68.4%", alertas: "12" };

  const handleLogin = () => {
    if (dni.length === 8) {
      setToken(Math.floor(100000 + Math.random() * 900000).toString());
      setView('token');
    }
  };

  const triggerSOS = () => {
    setIsSOSActive(true);
    // En una app real, aquí se enviaría la coordenada GPS a las autoridades
    alert("🚨 ALERTA SOS ENVIADA: Notificando irregularidad a observadores internacionales y policía nacional.");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans pb-24">
      
      {/* Banner de Integridad y SOS */}
      <div className={`w-full py-2 px-4 text-[10px] font-black text-center uppercase tracking-widest transition-colors ${isSOSActive ? 'bg-red-600 animate-pulse' : 'bg-indigo-600'}`}>
        {isSOSActive ? "SISTEMA EN ESTADO DE EMERGENCIA - SOS ACTIVO" : "Red Blockchain Alivia: Protegiendo la Democracia"}
      </div>

      <header className="p-5 border-b border-white/5 bg-black/80 backdrop-blur-lg sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <ShieldCheck className="text-white" />
          </div>
          <h1 className="font-black text-2xl tracking-tighter italic">ALIVIA</h1>
        </div>
        <div className="flex gap-3">
          <button onClick={triggerSOS} className="p-2 bg-red-600/20 border border-red-500/50 rounded-full text-red-500 animate-pulse">
            <Phone size={20} />
          </button>
          <button onClick={() => setView('dashboard')} className="p-2 bg-slate-900 border border-slate-700 rounded-full text-indigo-400">
            <BarChart3 size={20} />
          </button>
        </div>
      </header>

      <main className="p-4 max-w-2xl mx-auto space-y-6">
        
        {/* Agente Qawi con Voz y Asistencia */}
        {isAssistantActive && (
          <div className="bg-indigo-950/30 border border-indigo-500/30 p-5 rounded-[2rem] flex gap-4 shadow-2xl">
            <div className="shrink-0 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <MessageCircle className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-indigo-400 uppercase mb-1">Qawi Assistant</p>
              <p className="text-sm font-medium">
                {view === 'auth' && "Hola, ingresa tu DNI. Si ves algo sospechoso, presiona el botón rojo SOS."}
                {view === 'dashboard' && "Este es el mapa en tiempo real. Comparamos los votos registrados en blockchain vs. los reportes oficiales."}
                {view === 'token' && "Tu token dinámico es único. Evita que hackers suplanten tu identidad."}
              </p>
            </div>
          </div>
        )}

        {/* Lógica de Vistas */}
        {view === 'auth' && (
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[3rem] text-center space-y-6">
            <Lock className="mx-auto text-indigo-500" size={48} />
            <h2 className="text-xl font-black">Validación Ciudadana</h2>
            <input 
              type="text" maxLength={8} value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="DNI"
              className="w-full bg-black border-2 border-slate-800 rounded-2xl py-5 text-center text-3xl font-mono focus:border-indigo-500 outline-none"
            />
            <button onClick={handleLogin} className="w-full bg-white text-black py-5 rounded-2xl font-black">INGRESAR</button>
          </div>
        )}

        {view === 'dashboard' && (
          <div className="space-y-4 animate-in fade-in">
            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6">
              <h3 className="font-black text-indigo-400 mb-4 flex items-center gap-2"><Activity size={18}/> MAPA ELECTORAL EN VIVO</h3>
              <div className="h-64 bg-slate-800 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
                <p className="relative z-10 font-bold text-slate-500">[Mapa Interactivo de Votación Nacional]</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-black p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold">VOTOS BLOCKCHAIN</p>
                  <p className="text-2xl font-black text-emerald-400">{stats.votantes}</p>
                </div>
                <div className="bg-black p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold">PARTICIPACIÓN</p>
                  <p className="text-2xl font-black text-blue-400">{stats.avance}</p>
                </div>
              </div>
            </div>
            <button onClick={() => setView('auth')} className="w-full bg-slate-800 py-4 rounded-2xl font-black text-xs">VOLVER AL INICIO</button>
          </div>
        )}

        {view === 'token' && (
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] text-center space-y-6">
            <Fingerprint className="mx-auto text-amber-500" size={48} />
            <h2 className="text-2xl font-black text-amber-400">MFA Dinámico Activo</h2>
            <div className="bg-black p-6 rounded-2xl border-2 border-dashed border-amber-500/50">
              <p className="text-5xl font-black tracking-widest font-mono">{token}</p>
            </div>
            <button onClick={() => setView('dashboard')} className="w-full bg-white text-black py-5 rounded-2xl font-black">CONFIRMAR ACCESO</button>
          </div>
        )}
      </main>

      {/* Barra de Estado inferior */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg">
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-full flex justify-between shadow-2xl items-center">
          <div className="text-center">
            <p className="text-[8px] text-slate-500 font-bold">SEGURIDAD</p>
            <p className="text-[10px] font-black text-emerald-500">GRADO MILITAR</p>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <p className="text-[8px] text-slate-500 font-bold">NODOS</p>
            <p className="text-[10px] font-black text-blue-500">12,492 ACTIVOS</p>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <p className="text-[8px] text-slate-500 font-bold">ALERTAS SOS</p>
            <p className="text-[10px] font-black text-red-500">{stats.alertas} REPORTADAS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
