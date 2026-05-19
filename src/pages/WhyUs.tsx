import React from 'react';
import { Award, Gem, ShieldCheck, Clock, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Technicians",
      description: "Our team isn't just self-taught. We hold industry-standard certifications ensuring your device is handled by verified professionals."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lightning Fast Turnaround",
      description: "Most phone screen and battery replacements are completed in under an hour. We minimize your downtime."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "90-Day Warranty",
      description: "We stand confidently behind our work. If a replaced part fails due to a defect within 90 days, we'll fix it for free."
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Premium Parts Only",
      description: "We strictly refuse to use sub-par knockoff parts. You receive OEM or the highest-tier aftermarket parts available."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "You'll know exactly what you'll pay before we start working. No hidden fees, no surprise up-charges."
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Data Privacy Guaranteed",
      description: "We employ strict data security protocols. Your photos, messages, and accounts remain entirely confidential."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h3 className="text-[#a855f7] text-sm font-bold tracking-widest uppercase mb-4">Why Choose Us</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">The Inky Shaman Difference</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We know you have options when it comes to repair. Here's why the local community trusts us with their most essential devices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, idx) => (
          <div key={idx} className="bg-[#100E14] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-[#a855f7]">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20 p-12 rounded-3xl grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div className="pt-8 md:pt-0">
          <div className="text-5xl font-bold text-white mb-2">10k+</div>
          <p className="text-purple-400 font-medium">Repairs Completed</p>
        </div>
        <div className="pt-8 md:pt-0">
          <div className="text-5xl font-bold text-white mb-2">4.9</div>
          <p className="text-purple-400 font-medium">Average Rating</p>
        </div>
        <div className="pt-8 md:pt-0">
          <div className="text-5xl font-bold text-white mb-2">5</div>
          <p className="text-purple-400 font-medium">Years in Business</p>
        </div>
      </div>
    </div>
  );
}
