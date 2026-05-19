import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { LogoIcon, DiscordIcon } from './Icons';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`relative hover:text-white transition-colors ${isActive(to) ? 'text-white after:absolute after:bottom-[-26px] after:left-0 after:h-[2px] after:w-full after:bg-white' : 'text-gray-300'}`}
    >
      {children}
    </Link>
  );

  return (
    <div className="min-h-screen bg-[#07050a] text-white font-sans overflow-x-hidden selection:bg-purple-500/30 flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#07050a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <LogoIcon />
            <span className="text-xl font-medium tracking-tight">
              Inky<span className="font-bold text-gray-100">Shaman</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/why-us">Why Us</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <Link to="/book" className="bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white px-6 py-2.5 rounded-md font-medium text-sm inline-block text-center">
            Book a Repair
          </Link>
        </div>
      </nav>

      <main className="pt-20 flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <LogoIcon />
            <span className="text-xl font-medium tracking-tight text-white">
              Inky<span className="font-bold text-gray-100">Shaman</span>
            </span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/why-us" className="hover:text-white transition-colors">Why Us</Link>
            <Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><DiscordIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
