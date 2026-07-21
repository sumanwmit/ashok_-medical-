import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  MapPin, Phone, MessageCircle, Mail, Clock, HelpCircle, 
  Send, AlertCircle, CheckCircle, ShieldAlert, Award
} from 'lucide-react';

export default function Contact() {
  const { openOrderModal } = useApp();
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('Medicine Availability');
  const [formMsg, setFormMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API or client submission
    setFormSubmitted(true);
    setFormName('');
    setFormPhone('');
    setFormMsg('');
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  const emergencyContacts = [
    { title: 'Emergency Call Line', value: '+91 9504172110', action: 'tel:9504172110', type: 'Phone' },
    { title: 'Emergency WhatsApp Line', value: '+91 9504172110', action: 'https://wa.me/919504172110', type: 'WhatsApp' }
  ];

  const businessHours = [
    { day: 'Monday', hours: '8:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 10:00 PM' }
  ];

  return (
    <div className="py-12 sm:py-16 bg-white dark:bg-slate-950 animate-fade-in text-slate-800 dark:text-slate-200 font-sans" id="contact-page-container">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-semibold uppercase text-[#0A8F6A] tracking-widest bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 px-3 py-1.5 rounded-full inline-block">
          Get In Touch Live
        </span>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight leading-tight uppercase">
          Contact Ashok Medical Hall
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
          Need critical medicine info? Call, text, or visit our retail store at Kali Mandir More, Belaganj.
        </p>
      </div>

      {/* Primary Contact Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Business Info & Hours (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Store Card Info */}
            <div className="bg-slate-50/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-xl space-y-6">
              <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-5 bg-[#0A8F6A] rounded-full"></span>
                <span>Business Information</span>
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 dark:bg-green-950/50 text-[#0A8F6A] mt-0.5 shrink-0 rounded-lg border border-green-100 dark:border-green-900/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Store Address</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Nh 83, Pg Rd, near Kali Mandir More, Belaganj, Gaya, Bihar 804403
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 dark:bg-green-950/50 text-[#0A8F6A] mt-0.5 shrink-0 rounded-lg border border-green-100 dark:border-green-900/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Phone Support</h4>
                    <a href="tel:9504172110" className="text-xs text-[#0A8F6A] font-bold hover:underline mt-1 block">
                      +91 9504172110
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 dark:bg-green-950/50 text-[#0A8F6A] mt-0.5 shrink-0 rounded-lg border border-green-100 dark:border-green-900/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Email Communications</h4>
                    <a href="mailto:contact@ashokmedicalhall.com" className="text-xs text-slate-500 hover:underline mt-1 block">
                      contact@ashokmedicalhall.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Button Row */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/50 flex flex-wrap gap-2">
                <a
                  href="tel:9504172110"
                  className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-2 px-3.5 rounded-full text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
                  id="contact-call-btn"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => openOrderModal()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3.5 rounded-full text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
                  id="contact-whatsapp-btn"
                >
                  <MessageCircle className="w-3 h-3 fill-white" />
                  <span>WhatsApp Chat</span>
                </button>
                <a
                  href="https://maps.google.com/?q=Ashok+Medical+Hall+Belaganj+Gaya+Bihar+804403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-900 dark:text-white font-bold py-2 px-3.5 rounded-full text-[11px] flex items-center gap-1.5 transition-colors border border-slate-200 dark:border-slate-700"
                  id="contact-directions-btn"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-slate-50/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-xl">
              <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#0A8F6A]" />
                <span>Store Working Hours</span>
              </h3>
              <div className="space-y-2 text-xs" id="working-hours-list">
                {businessHours.map((bh) => (
                  <div key={bh.day} className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <span className="font-semibold text-slate-600 dark:text-slate-300">{bh.day}</span>
                    <span className="font-mono font-bold text-[#0A8F6A]">{bh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#0A8F6A] rounded-full"></span>
                <span>Quick Inquiry Form</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Fill the online card below to send a direct stock query. Our registered pharmacist responds within 30 minutes.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center" id="inquiry-success-message">
                  <CheckCircle className="w-12 h-12 text-[#0A8F6A] mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Form Dispatched</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed">
                    Thank you! Your stock inquiry has been logged successfully. We are matching this against our Belaganj shelf database and will SMS/Call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4" id="contact-inquiry-form">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1" htmlFor="inquiry-name">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-name"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Write your name"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] outline-none text-xs text-slate-900 dark:text-white placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1" htmlFor="inquiry-phone">
                      Your Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="inquiry-phone"
                      required
                      pattern="[6-9][0-9]{9}"
                      title="Please write a valid 10-digit phone number"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="10-digit phone number"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] outline-none text-xs text-slate-900 dark:text-white placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1" htmlFor="inquiry-subject">
                      Inquiry Category
                    </label>
                    <select
                      id="inquiry-subject"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] outline-none text-xs text-slate-900 dark:text-white"
                    >
                      <option value="Medicine Availability">Medicine Availability Check</option>
                      <option value="Baby Care Products">Baby Food & Care Products</option>
                      <option value="Bulk Order for Clinics">Bulk Order for Clinic/Hospital</option>
                      <option value="Home Delivery Options">Home Delivery Eligibility</option>
                      <option value="Other Queries">General Health Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1" htmlFor="inquiry-message">
                      Specify Medicines / Questions <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      required
                      rows={4}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="List name of medicines with tablet/bottle counts"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0A8F6A]/50 focus:border-[#0A8F6A] outline-none text-xs text-slate-900 dark:text-white resize-none placeholder-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0A8F6A] hover:bg-[#087a5a] text-white py-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
                    id="submit-inquiry-btn"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Secure Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* EMERGENCY CONTACT SECTION (HIGHLY VISUAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16" id="emergency-contact-banner">
        <div className="bg-rose-50/50 dark:bg-rose-950/15 border border-rose-200 dark:border-rose-900/40 p-6 sm:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 rounded-lg shrink-0 border border-rose-200 dark:border-rose-900/30">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-rose-900 dark:text-rose-200 uppercase tracking-wide">Emergency Medicine Procurement Corridor</h3>
              <p className="text-xs text-rose-700 dark:text-rose-300 mt-1 max-w-xl leading-relaxed">
                Urgent life-saving pharmaceutical supplies needed due to a highway mishap or hospital emergency? We are open daily and keep critical cold-chain stocks accessible. Call our direct hotline immediately.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:9504172110"
              className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-full text-center transition-colors shadow-sm"
            >
              Emergency Call: +91 9504172110
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Full-Width Integration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="google-maps-integration-container">
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm bg-slate-50 h-96 relative">
          <iframe
            title="Ashok Medical Hall Full Map View"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.155455928822!2d84.9754877!3d25.0292797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cc81223594eb%3A0xc68297d0c3eb1a05!2sAshok%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
