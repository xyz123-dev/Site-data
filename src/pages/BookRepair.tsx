import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, ChevronRight, Monitor, Smartphone, Gamepad2, Tablet } from 'lucide-react';

export default function BookRepair() {
  const [step, setStep] = useState(1);
  const [device, setDevice] = useState<string | null>(null);

  const deviceTypes = [
    { id: 'phone', label: 'Phone', icon: <Smartphone className="w-8 h-8" /> },
    { id: 'computer', label: 'Computer', icon: <Monitor className="w-8 h-8" /> },
    { id: 'console', label: 'Console', icon: <Gamepad2 className="w-8 h-8" /> },
    { id: 'tablet', label: 'Tablet', icon: <Tablet className="w-8 h-8" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24 min-h-[80vh] flex flex-col justify-center">
      <div className="text-center mb-16">
        <h3 className="text-[#a855f7] text-sm font-bold tracking-widest uppercase mb-4">Appointments</h3>
        <h1 className="text-4xl font-bold mb-6">Book a Repair</h1>
        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <span className={`flex items-center gap-2 ${step >= 1 ? 'text-white' : 'text-gray-500'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#8b5cf6] text-white' : 'bg-gray-800'}`}>1</span>
            Device
          </span>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className={`flex items-center gap-2 ${step >= 2 ? 'text-white' : 'text-gray-500'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#8b5cf6] text-white' : 'bg-gray-800'}`}>2</span>
            Details
          </span>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className={`flex items-center gap-2 ${step >= 3 ? 'text-white' : 'text-gray-500'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-[#8b5cf6] text-white' : 'bg-gray-800'}`}>3</span>
            Schedule
          </span>
        </div>
      </div>

      <div className="bg-[#100E14] border border-white/5 p-8 md:p-12 rounded-3xl">
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-center">What needs fixing?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {deviceTypes.map((d) => (
                <button 
                  key={d.id}
                  onClick={() => setDevice(d.id)}
                  className={`p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 ${device === d.id ? 'bg-[#8b5cf6]/20 border border-[#8b5cf6]/50 text-white' : 'bg-[#15121b] border border-white/5 text-gray-400 hover:bg-[#1a1722] hover:text-white'}`}
                >
                  <div className={device === d.id ? 'text-[#a855f7]' : ''}>{d.icon}</div>
                  <span className="font-semibold">{d.label}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-end pt-8">
              <button 
                onClick={() => setStep(2)}
                disabled={!device}
                className="bg-[#8b5cf6] disabled:bg-gray-800 disabled:text-gray-500 hover:bg-[#7c3aed] transition-colors text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2"
              >
                Next Step <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <h2 className="text-2xl font-bold text-center mb-8">Device Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Brand / Maker</label>
                <input type="text" className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]" placeholder="e.g. Apple, Samsung, Sony" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Model</label>
                <input type="text" className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]" placeholder="e.g. iPhone 13 Pro, PS5" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">What's wrong with it?</label>
              <textarea rows={4} className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] resize-none" placeholder="Screen is cracked, won't charge, etc..." />
            </div>

            <div className="flex justify-between pt-8 border-t border-white/10">
              <button 
                onClick={() => setStep(1)}
                className="text-gray-400 hover:text-white transition-colors px-6 py-3 font-medium"
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                className="bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2"
              >
                Next Step <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <h2 className="text-2xl font-bold text-center mb-2">When should we expect you?</h2>
            <p className="text-gray-400 text-center mb-8">We accept walk-ins, but an appointment guarantees zero wait time.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Select Date</label>
                <div className="relative">
                  <CalendarIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" className="w-full bg-[#15121b] border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#a855f7] [color-scheme:dark]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Preferred Time block</label>
                <select className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] appearance-none">
                  <option>Morning (10am - 12pm)</option>
                  <option>Afternoon (12pm - 4pm)</option>
                  <option>Evening (4pm - 7pm)</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-[#a855f7] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-purple-100">Booking an appointment holds your spot in line. Payment is only collected after diagnostics and repair completion.</p>
            </div>

            <div className="flex justify-between pt-8 border-t border-white/10">
              <button 
                onClick={() => setStep(2)}
                className="text-gray-400 hover:text-white transition-colors px-6 py-3 font-medium"
              >
                Back
              </button>
              <button 
                onClick={() => {
                  alert("Demo: Appointment booked successfully!");
                  setStep(1);
                  setDevice(null);
                }}
                className="bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
