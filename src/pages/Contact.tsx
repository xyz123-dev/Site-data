import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h3 className="text-[#a855f7] text-sm font-bold tracking-widest uppercase mb-4">Contact Us</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">We're Here to Help</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Have a question about a repair? Want a quote for a unique device? Drop us a line or swing by the store.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-full bg-[#100E14] border border-white/5 flex items-center justify-center flex-shrink-0 text-[#a855f7]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400">123 Tech Avenue, Suite B<br/>Silicon Valley, CA 94000</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-full bg-[#100E14] border border-white/5 flex items-center justify-center flex-shrink-0 text-[#a855f7]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-400">(555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-1">Available during store hours.</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-full bg-[#100E14] border border-white/5 flex items-center justify-center flex-shrink-0 text-[#a855f7]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400">hello@inkyshaman.com</p>
              <p className="text-sm text-gray-500 mt-1">We try to reply within 24 hours.</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-full bg-[#100E14] border border-white/5 flex items-center justify-center flex-shrink-0 text-[#a855f7]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Store Hours</h3>
              <div className="text-gray-400 grid grid-cols-2 gap-x-8 gap-y-2 max-w-xs">
                <span>Monday - Friday:</span> <span className="text-right">9am - 7pm</span>
                <span>Saturday:</span> <span className="text-right">10am - 5pm</span>
                <span>Sunday:</span> <span className="text-right">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#100E14] border border-white/5 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">First Name</label>
                <input type="text" className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Last Name</label>
                <input type="text" className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <input type="email" className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] transition-colors" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Device Issue</label>
              <select className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] transition-colors appearance-none">
                <option>Phone Repair</option>
                <option>Computer / Laptop Repair</option>
                <option>Console Repair</option>
                <option>Tablet Repair</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea rows={4} className="w-full bg-[#15121b] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] transition-colors resize-none" placeholder="Please describe the issue..." />
            </div>

            <button type="submit" className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white py-4 rounded-lg font-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
