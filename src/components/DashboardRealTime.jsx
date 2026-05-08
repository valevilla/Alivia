import React from 'react';
import { Activity, Users, Globe } from 'lucide-react';

const DashboardRealTime = ({ stats }) => (
  <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-[2.5rem] space-y-4">
    <h3 className="font-black text-sm italic flex items-center gap-2 text-indigo-400">
      <Activity size={16} /> MONITOR ELECTORAL NACIONAL
    </h3>
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-black/50 p-4 rounded-2xl border border-white/5">
        <Users size={14} className="text-slate-500 mb-1" />
        <p className="text-[8px] text-slate-500 font-bold uppercase">Votos Blockchain</p>
        <p className="text-lg font-black text-white">{stats.votos}</p>
      </div>
      <div className="bg-black/50 p-4 rounded-2xl border border-white/5">
        <Globe size={14} className="text-slate-500 mb-1" />
        <p className="text-[8px] text-slate-500 font-bold uppercase">Participación</p>
        <p className="text-lg font-black text-emerald-500">{stats.participacion}</p>
      </div>
    </div>
    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
      <div className="h-full bg-indigo-500" style={{ width: stats.participacion }}></div>
    </div>
  </div>
);

export default DashboardRealTime;
