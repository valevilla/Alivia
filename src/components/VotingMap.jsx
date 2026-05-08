import React from 'react';
import { MapPin, Navigation, ShieldCheck } from 'lucide-react';

const VotingMap = ({ destination }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl">
    <div className="h-48 bg-slate-950 relative flex items-center justify-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <MapPin className="text-indigo-500 animate-bounce" size={40} />
      <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-white/5 flex items-center gap-3">
        <Navigation className="text-indigo-400" size={18} />
        <div className="text-left text-[11px]">
          <p className="text-slate-500 font-bold uppercase">Tu Local de Votación</p>
          <p className="text-white font-black truncate">{destination}</p>
        </div>
      </div>
    </div>
    <div className="p-4 flex justify-around text-center">
      <div>
        <p className="text-[8px] text-slate-500 font-black uppercase">Ruta</p>
        <p className="text-xs font-black text-emerald-500 flex items-center gap-1"><ShieldCheck size={12}/> Segura</p>
      </div>
      <div className="w-px h-6 bg-white/10"></div>
      <div>
        <p className="text-[8px] text-slate-500 font-black uppercase">Distancia</p>
        <p className="text-xs font-black">1.2 KM</p>
      </div>
    </div>
  </div>
);

export default VotingMap;
