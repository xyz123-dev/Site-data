import React from 'react';
import { Smartphone, Monitor, Gamepad2, Tablet, Keyboard, Cpu, Battery, Disc } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: "Phone Repair",
      icon: <Smartphone className="w-10 h-10" />,
      description: "Fast and reliable repairs for all major smartphone brands.",
      services: ["Screen Replacement", "Battery Replacement", "Charging Port Repair", "Water Damage Recovery", "Camera Repair", "Speaker & Mic Repair"]
    },
    {
      title: "Computer Repair",
      icon: <Monitor className="w-10 h-10" />,
      description: "Comprehensive solutions for broken PC and Mac systems.",
      services: ["Virus & Malware Removal", "Hardware Upgrades", "OS Installation", "Data Recovery", "Motherboard Repair", "Screen Replacement"]
    },
    {
      title: "Console Repair",
      icon: <Gamepad2 className="w-10 h-10" />,
      description: "Get back in the game fast with expert console servicing.",
      services: ["HDMI Port Replacement", "Overheating Fixes", "Disc Drive Repair", "Controller Drift Fix", "Hard Drive Upgrades", "Power Supply Repair"]
    },
    {
      title: "Tablet Repair",
      icon: <Tablet className="w-10 h-10" />,
      description: "iPad and Android tablet repairs to keep your portable devices going.",
      services: ["Glass Digitizer Replacement", "Battery Replacement", "Charging Issue Fix", "Button Repair", "Camera Replacement", "Logic Board Repair"]
    }
  ];

  const addons = [
    { name: "Custom PC Builds", icon: <Cpu />, desc: "Tailored rigs for gaming or productivity." },
    { name: "Keyboard Deep Cleaning", icon: <Keyboard />, desc: "Make your mechanical keyboards feel new." },
    { name: "Battery Health Checks", icon: <Battery />, desc: "Free diagnostics on your device's stamina." },
    { name: "Data Transfer", icon: <Disc />, desc: "Securely move files to your new device." },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h3 className="text-[#a855f7] text-sm font-bold tracking-widest uppercase mb-4">Our Services</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Repairs for All Your Devices</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          From shattered screens to stubborn software, our certified technicians have the tools and experience to bring your tech back to life.
        </p>
      </div>

      <div className="space-y-12 mb-24">
        {serviceCategories.map((category, index) => (
          <div key={index} className="bg-[#100E14] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-10 hover:border-purple-500/20 transition-colors">
            <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start group">
              <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-[#a855f7] border border-purple-500/20 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
              <p className="text-gray-400 leading-relaxed">{category.description}</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.services.map((service, sIndex) => (
                <div key={sIndex} className="bg-[#15121b] p-5 rounded-xl border border-white/5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
                  <span className="text-gray-200 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Specialized Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {addons.map((addon, i) => (
          <div key={i} className="bg-[#100E14] border border-white/5 rounded-2xl p-6 hover:bg-[#15121b] transition-colors flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-[#a855f7]">
              {addon.icon}
            </div>
            <h4 className="text-lg font-semibold mb-2">{addon.name}</h4>
            <p className="text-gray-400 text-sm">{addon.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
