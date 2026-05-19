import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Jessica M.",
      image: "https://i.pravatar.cc/150?u=jessica",
      text: "Fixed my phone in under an hour. Great price and amazing service! The technician was incredibly polite and explained exactly what the issue was before charging me anything.",
      stars: 5
    },
    {
      name: "David R.",
      image: "https://i.pravatar.cc/150?u=david",
      text: "My laptop runs like new again. Highly recommend Inky Shaman! They upgraded my old hard drive to an SSD and cleaned out years of dust. It's night and day difference.",
      stars: 5
    },
    {
      name: "Sarah T.",
      image: "https://i.pravatar.cc/150?u=sarah",
      text: "Professional, fast, and friendly. I won't go anywhere else. Dropped my iPad on concrete, they replaced the screen perfectly. No color distortion or touch issues.",
      stars: 5
    },
    {
      name: "Michael K.",
      image: "https://i.pravatar.cc/150?u=michael",
      text: "Brought in my PS5 that was overheating and shutting off randomly. They opened it up, replaced the liquid metal, and it hasn't crashed once since. Top tier repair shop.",
      stars: 5
    },
    {
      name: "Olivia B.",
      image: "https://i.pravatar.cc/150?u=olivia",
      text: "I thought I lost years of photos when my phone went into a bootloop. The team here managed to recover everything and flash the software to get it working again. Life savers!",
      stars: 5
    },
    {
      name: "James L.",
      image: "https://i.pravatar.cc/150?u=james",
      text: "Very transparent pricing. Another shop quoted me $250 for a motherboard repair, Inky Shaman diagnosed it as a faulty charging port flex cable for way less.",
      stars: 4
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h3 className="text-[#a855f7] text-sm font-bold tracking-widest uppercase mb-4">Testimonials</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hear From Our Community</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We treat every repair as an opportunity to build a long-term customer. See what people are saying about their repair experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#100E14] border border-white/5 rounded-2xl p-8 flex flex-col">
            <Quote className="w-8 h-8 text-[#a855f7] fill-[#a855f7] mb-6 inline-block" />
            <p className="text-gray-300 text-lg mb-8 leading-relaxed flex-grow">
              "{review.text}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border border-white/10" />
              <div>
                <h4 className="text-white font-medium text-sm">{review.name}</h4>
                <div className="flex gap-1 mt-1 text-[#a855f7]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < review.stars ? 'fill-current' : 'text-gray-600'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
