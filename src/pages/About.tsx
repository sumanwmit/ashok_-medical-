import React from 'react';
import { ShieldCheck, Heart, Award, Sparkles, BookOpen, Clock, HeartPulse, UserCheck, Star } from 'lucide-react';

export default function About() {
  const timelineEvents = [
    {
      year: '2005',
      title: 'Foundation Stone',
      desc: 'Ashok Medical Hall started as a humble local chemist in Belaganj, Gaya with a pledge to sell only 100% genuine medications.'
    },
    {
      year: '2012',
      title: 'Cold-Chain Expansion',
      desc: 'Installed heavy-duty refrigeration and backup generators to stock life-saving critical oncology, diabetes insulin and tetanus vaccines.'
    },
    {
      year: '2019',
      title: 'Digital Order Dispatch',
      desc: 'Launched quick tele-ordering and catalog service to support elderly residents in nearby village sectors across Gaya, Bihar.'
    },
    {
      year: '2026',
      title: 'Modern Retail Portal',
      desc: 'Upgraded to a hybrid digitized pharmacy with live web inventory access, helping highway travelers on NH 83 check stock instantly.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-white dark:bg-slate-950 animate-fade-in text-slate-800 dark:text-slate-200 font-sans" id="about-page-container">
      
      {/* Decorative Top Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-semibold uppercase text-[#0A8F6A] tracking-widest bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1.5 rounded-full inline-block">
          Since 2005 • Gaya District
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight leading-tight uppercase">
          About Ashok Medical Hall
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
          The story of healthcare excellence, dedication, and clinical transparency in Gaya, Bihar.
        </p>
      </div>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-sans font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0A8F6A]" />
              <span>Our Business Story</span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Founded in 2005 by senior healthcare entrepreneur <strong>Mr. Ashok Kumar</strong>, Ashok Medical Hall was established to address a critical vacuum in the Belaganj-Gaya highway corridor: the lack of verified, high-quality pharmaceutical supplies.
              </p>
              <p>
                In the early 2000s, rural patients in Bihar often had to travel more than 30 kilometers to Gaya city center just to purchase essential asthma inhalers or clean surgical cotton. Ashok Medical Hall changed that dynamic permanently. By working directly with certified medical manufacturers, we made critical healthcare items locally accessible.
              </p>
              <p>
                Today, our store at Kali Mandir More on National Highway 83 is a trusted anchor. We serve not just local families, but also long-distance travelers, emergency roadside cases, and local healthcare clinics.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl blur-lg opacity-40"></div>
            <img
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
              alt="Verified pharmaceutical shelves and healthcare boxes"
              className="relative rounded-xl w-full h-80 object-cover shadow-md border border-slate-200 dark:border-slate-800"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 mb-20 border-t border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 bg-green-50 dark:bg-green-950/40 text-[#0A8F6A] rounded-lg flex items-center justify-center mb-6 border border-green-100 dark:border-green-900/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To supply 100% genuine medicines, baby products, and critical-care healthcare devices to the people of Belaganj and Gaya highway travelers with absolute clinical integrity, speed, and standard pricing.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 bg-green-50 dark:bg-green-950/40 text-[#0A8F6A] rounded-lg flex items-center justify-center mb-6 border border-green-100 dark:border-green-900/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To become Bihar’s leading trusted rural-digital healthcare partner, bridging the gap between urban pharmaceutical logistics and rural patient care.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 bg-green-50 dark:bg-green-950/40 text-[#0A8F6A] rounded-lg flex items-center justify-center mb-6 border border-green-100 dark:border-green-900/30">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Our Core Values</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  <strong>Ethics First:</strong> Zero support for duplicate drugs. <strong>Patient Advocacy:</strong> Helpful counsel on generic alternatives. <strong>Availability:</strong> Ensuring life-saving medications never go out of stock.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Business Timeline / Journey */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" id="about-timeline">
        <h2 className="text-xl font-sans font-bold text-slate-900 dark:text-white mb-10 text-center flex items-center justify-center gap-2">
          <Clock className="w-5 h-5 text-[#0A8F6A]" />
          <span>Our Journey Timeline</span>
        </h2>
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-8">
          {timelineEvents.map((evt) => (
            <div key={evt.year} className="relative pl-8 sm:pl-10">
              {/* Timeline dot */}
              <span className="absolute -left-3 top-1.5 w-6 h-6 bg-white dark:bg-slate-950 border-4 border-[#0A8F6A] rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#0A8F6A] rounded-full"></span>
              </span>
              <div>
                <span className="text-xs font-bold text-[#0A8F6A] bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-2.5 py-1 rounded-full">
                  {evt.year}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2 leading-tight">
                  {evt.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Owner Message & Store Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
                alt="Pharmacist Mr. Ashok Kumar"
                className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <h3 className="font-bold text-base text-slate-900 dark:text-white mt-4">Mr. Ashok Kumar</h3>
              <p className="text-[10px] text-[#0A8F6A] font-bold uppercase tracking-wider">Chief Pharmacist & Founder</p>
              <div className="flex items-center gap-0.5 text-amber-500 mt-1.5 text-xs">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-lg font-sans font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <UserCheck className="w-5 h-5 text-[#0A8F6A]" />
                <span>Founder's Message to Our Patients</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base italic">
                "For over 20 years, Ashok Medical Hall has operated with a simple, non-negotiable philosophy: We treat our customers as our own family members. When someone enters our store looking for a critical fever syrup or asthma inhaler, we know they are in a state of distress. Our responsibility is to provide prompt, compassionate, and 100% genuine medical assistance with valid batch tracing. We will continue to expand our digital integrations so that nobody in the Gaya-Belaganj highway sector faces delay in medicine availability."
              </p>
              <div className="pt-2 text-right">
                <span className="block font-bold text-slate-900 dark:text-white text-sm">Ashok Kumar</span>
                <span className="block text-xs text-slate-500">Reg. Pharmacist Lic: BR-GAY-72110</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
