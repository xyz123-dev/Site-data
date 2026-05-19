import React from 'react';
import aboutImage from '../assets/images/regenerated_image_1779196680644.png';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h3 className="text-[#a855f7] text-sm font-bold tracking-widest uppercase mb-4">Our Story</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Born from a Passion for Tech</h1>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Inky Shaman started in a small garage with a single soldering iron and a commitment to fixing what others threw away. We saw too many people abandoning perfectly good electronics due to expensive repairs or lack of local expertise.
            </p>
            <p>
              Today, we operate a state-of-the-art repair lab, but our mission remains the same: provide honest, high-quality, and affordable repairs to keep your technology running and out of landfills.
            </p>
            <p>
              Our name comes from our belief in the "magic" of electronics repair. While tech can seem mystical and confusing, our expert technicians—our tech shamans—understand the ink and silicon that power your modern life.
            </p>
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 ring-1 ring-white/5">
           <img 
             src={aboutImage} 
             alt="Tech repair workspace" 
             className="w-full h-full object-cover object-center"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#07050a] via-transparent to-transparent opacity-80"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#100E14] border border-white/5 p-8 rounded-2xl">
          <Target className="w-10 h-10 text-[#a855f7] mb-6" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
          <p className="text-gray-400">To demystify tech repair, providing transparent, reliable solutions that extend device lifespan.</p>
        </div>
        <div className="bg-[#100E14] border border-white/5 p-8 rounded-2xl">
          <Users className="w-10 h-10 text-[#a855f7] mb-6" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
          <p className="text-gray-400">We pride ourselves on being a trusted local partner for individuals and small businesses alike.</p>
        </div>
        <div className="bg-[#100E14] border border-white/5 p-8 rounded-2xl">
          <Zap className="w-10 h-10 text-[#a855f7] mb-6" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
          <p className="text-gray-400">Technology evolves fast, and so do we. We train constantly on the latest device architectures.</p>
        </div>
        <div className="bg-[#100E14] border border-white/5 p-8 rounded-2xl">
          <ShieldCheck className="w-10 h-10 text-[#a855f7] mb-6" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-white mb-3">Quality Guaranteed</h3>
          <p className="text-gray-400">Every repair is backed by rigorous testing and premium replacement parts.</p>
        </div>
      </div>
    </div>
  );
}
