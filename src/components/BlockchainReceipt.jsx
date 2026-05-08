import React from 'react';
import { ShieldCheck, Copy } from 'lucide-react';

const BlockchainReceipt = ({ hash, timestamp }) => (
  <div className="bg-black/40 border border-emerald-500/20 p-6 rounded-[2.5rem] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
    <p className="text-emerald-500 font-black text-[10px] uppercase mb-4 flex items-center gap-2">
      <ShieldCheck size={14} /> Recibo de Integridad
    </p>
    <div className="font-mono text-[10px] space-y-2">
      <p className="flex justify-between"><span className="text-slate-500">FECHA:</span> <span className="text-white">{timestamp}</span></p>
      <p className="text-slate-500">HASH DE BLOQUE:</p>
      <p className="text-emerald-400 break-all leading-tight bg-emerald-950/20 p-2 rounded-lg border border-emerald-500/10 uppercase">
        {hash}
      </p>
    </div>
  </div>
);

export default BlockchainReceipt;
