import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Monitor,
  Gamepad2,
  Tablet,
  Award,
  Gem,
  ShieldCheck,
  Quote,
  Star,
  Calendar
} from 'lucide-react';
import heroImage from '../assets/images/regenerated_image_1779196678126.png';
import aboutImage from '../assets/images/regenerated_image_1779196680644.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 z-0"></div>
        
        <div className="z-10 flex flex-col items-start space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20">
            <Zap className="w-3.5 h-3.5 text-[#a855f7] fill-[#a855f7]" />
            <span className="text-xs font-bold text-[#a855f7] tracking-wider uppercase">Fast. Reliable. Local.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            We Fix Tech<br />
            So You Can <span className="text-[#a855f7]">Live.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            Expert repairs for phones, computers, and consoles. 
            Quality work. Honest pricing. Done right the first time.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/book" className="flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white px-7 py-3.5 rounded-md font-medium group">
              Book a Repair <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="flex items-center gap-2 bg-transparent border border-gray-600 hover:border-gray-400 hover:text-white transition-colors text-gray-300 px-7 py-3.5 rounded-md font-medium group">
              Our Services <ArrowRight className="w-4 h-4 ml-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-1 transition-all" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#a855f7]" /> Same Day Service
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#a855f7]" /> 90 Day Warranty
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#a855f7]" /> Satisfaction Guaranteed
            </div>
          </div>
        </div>

        {/* Hero Image - Exploded iPhone */}
        <div className="relative w-full aspect-square md:aspect-[4/5] z-10 lg:ml-auto">
           <img 
             src={heroImage} 
             alt="Deconstructed iPhone internals"
             className="w-full h-full object-contain relative z-20 scale-125 lg:scale-[1.35] lg:-translate-y-12 lg:translate-x-12 origin-top-right"
           />
           {/* The glowing circle line around the phone from the design */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-white/5 pointer-events-none z-10"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 text-center">
        <h3 className="text-[#a855f7] text-xs font-bold tracking-widest uppercase mb-4">Services</h3>
        <h2 className="text-4xl font-bold mb-16">We Repair What You Rely On</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <Link to="/services" className="bg-[#100E14] border border-white/5 rounded-2xl p-8 hover:bg-[#15121b] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-[#a855f7] border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Smartphone className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-semibold mb-3 w-full">Phone Repair</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Screens, batteries, charging ports & more.
            </p>
            <span className="text-[#a855f7] flex items-center gap-1 font-medium text-sm group-hover:text-purple-400">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link to="/services" className="bg-[#100E14] border border-white/5 rounded-2xl p-8 hover:bg-[#15121b] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-[#a855f7] border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Monitor className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-semibold mb-3 w-full">Computer Repair</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Hardware, software, virus removal & upgrades.
            </p>
            <span className="text-[#a855f7] flex items-center gap-1 font-medium text-sm group-hover:text-purple-400">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link to="/services" className="bg-[#100E14] border border-white/5 rounded-2xl p-8 hover:bg-[#15121b] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-[#a855f7] border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-semibold mb-3 w-full">Console Repair</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              PlayStation, Xbox, Nintendo repairs & maintenance.
            </p>
            <span className="text-[#a855f7] flex items-center gap-1 font-medium text-sm group-hover:text-purple-400">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link to="/services" className="bg-[#100E14] border border-white/5 rounded-2xl p-8 hover:bg-[#15121b] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-[#a855f7] border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Tablet className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-semibold mb-3 w-full">Tablet Repair</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Screens, batteries, performance issues & more.
            </p>
            <span className="text-[#a855f7] flex items-center gap-1 font-medium text-sm group-hover:text-purple-400">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
           <img 
             src={aboutImage} 
             alt="Tech repair workspace" 
             className="w-full h-full object-cover object-center"
           />
        </div>
        
        <div className="flex flex-col items-start">
          <h3 className="text-[#a855f7] text-xs font-bold tracking-widest uppercase mb-4">About Us</h3>
          <h2 className="text-4xl font-bold mb-6">Your Local Tech<br/>Repair Experts</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            At Inky Shaman, we combine expert skills with a commitment to honest service. We treat your tech like our own.
          </p>

          <div className="space-y-8 mb-10 w-full">
            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <Award className="w-6 h-6 text-[#a855f7]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Experienced Technicians</h4>
                <p className="text-gray-400 text-sm mt-1">Skilled. Certified. Constantly learning.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <Gem className="w-6 h-6 text-[#a855f7]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Honest Pricing</h4>
                <p className="text-gray-400 text-sm mt-1">No hidden fees. No upsells.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#a855f7]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Built on Trust</h4>
                <p className="text-gray-400 text-sm mt-1">We stand behind our work.</p>
              </div>
            </div>
          </div>

          <Link to="/about" className="text-[#a855f7] flex items-center gap-2 text-base font-medium hover:text-purple-400 transition-colors group">
            Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 text-center">
        <h3 className="text-[#a855f7] text-xs font-bold tracking-widest uppercase mb-4">What Our Customers Say</h3>
        <h2 className="text-4xl font-bold mb-16">Trusted by Our Community</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Testimonial 1 */}
          <div className="bg-[#100E14] border border-white/5 rounded-2xl p-8">
            <Quote className="w-8 h-8 text-[#a855f7] fill-[#a855f7] mb-6" />
            <p className="text-gray-300 text-lg mb-8 leading-relaxed h-[80px]">
              Fixed my phone in under an hour. Great price and amazing service!
            </p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?u=jessica" alt="Jessica M." className="w-12 h-12 rounded-full border border-white/10" />
              <div>
                <h4 className="text-white font-medium text-sm">Jessica M.</h4>
                <div className="flex gap-1 mt-1 text-[#a855f7]">
                  <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#100E14] border border-white/5 rounded-2xl p-8">
            <Quote className="w-8 h-8 text-[#a855f7] fill-[#a855f7] mb-6" />
            <p className="text-gray-300 text-lg mb-8 leading-relaxed h-[80px]">
              My laptop runs like new again. Highly recommend Inky Shaman!
            </p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?u=david" alt="David R." className="w-12 h-12 rounded-full border border-white/10" />
              <div>
                <h4 className="text-white font-medium text-sm">David R.</h4>
                <div className="flex gap-1 mt-1 text-[#a855f7]">
                  <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#100E14] border border-white/5 rounded-2xl p-8">
            <Quote className="w-8 h-8 text-[#a855f7] fill-[#a855f7] mb-6" />
            <p className="text-gray-300 text-lg mb-8 leading-relaxed h-[80px]">
              Professional, fast, and friendly. I won't go anywhere else.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah T." className="w-12 h-12 rounded-full border border-white/10" />
              <div>
                <h4 className="text-white font-medium text-sm">Sarah T.</h4>
                <div className="flex gap-1 mt-1 text-[#a855f7]">
                  <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 mb-24">
        <div className="bg-[#150f1f]/80 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 w-full relative overflow-hidden">
          {/* Decorative glow inside banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full pointer-events-none -mr-32 -mt-32"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#8b5cf6] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Your Tech Fixed?</h3>
              <p className="text-gray-400 max-w-md">Book online or walk in today. We provide same-day diagnostics and transparent quotes.</p>
            </div>
          </div>
          <Link to="/book" className="bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white px-8 py-4 rounded-md font-medium flex items-center gap-2 whitespace-nowrap flex-shrink-0 relative z-10 group">
            Book a Repair <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
