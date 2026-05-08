import React from 'react';
import { MessageCircle, Phone, AlertTriangle } from 'lucide-react';

const QawiAssistant = ({ message, onSos, isSosActive }) => (
  <div className={`p-5 rounded-[2.5rem] border transition-all duration-500 flex gap-4 shadow-xl ${isSosActive ? 'bg-red-900/20 border-red-500' : 'bg-indigo-900/10 border-indigo-500/20'}`}>
    <div className="relative shrink-0">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center animate-pulse ${isSosActive ? 'bg-red-600' : 'bg-indigo-600'}`}>
        <MessageCircle className="text-white" />
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <span className={`text-[10px] font-black uppercase tracking-widest ${isSosActive ? 'text-red-400' : 'text-indigo-400'}`}>Qawi: IA de Supervivencia</span>
        <button onClick={onSos} className="p-2 bg-red-600/20 rounded-full text-red-500 hover:bg-red-600 hover:text-white transition-all">
          <Phone size={16} />
        </button>
      </div>
      <p className="text-sm font-medium italic leading-snug text-slate-200">"{message}"</p>
    </div>
  </div>
);

export default QawiAssistant;
