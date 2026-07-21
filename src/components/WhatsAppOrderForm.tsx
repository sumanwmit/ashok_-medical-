import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Send, Phone, FileText, CheckCircle, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppOrderForm() {
  const { isOrderModalOpen, closeOrderModal, prefilledMedicineName } = useApp();
  
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicine, setMedicine] = useState('');
  const [hasPrescription, setHasPrescription] = useState('No');
  const [message, setMessage] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('Immediate (Same Day)');
  const [fileName, setFileName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (isOrderModalOpen) {
      setMedicine(prefilledMedicineName || '');
      setFormSubmitted(false);
    }
  }, [isOrderModalOpen, prefilledMedicineName]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setHasPrescription('Yes');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedText = `Hello Ashok Medical Hall!
*Medicine Order Request*
-----------------------------
*Customer Name:* ${name}
*Phone:* ${mobile}
*Email:* ${email || 'Not Provided'}
*Address:* ${address}
*Medicine Required:* ${medicine}
*Prescription Attached:* ${hasPrescription === 'Yes' ? 'Yes (Will show on delivery/WhatsApp)' : 'No'}
*Preferred Delivery Time:* ${deliveryTime}
*Notes/Message:* ${message || 'None'}
-----------------------------
Please confirm the availability and estimated total price.`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/919504172110?text=${encodedText}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
    setTimeout(() => {
      closeOrderModal();
    }, 2000);
  };

  if (!isOrderModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          id="whatsapp-order-form-container"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-medical-teal to-blue-700 text-white">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <h2 className="text-xl font-display font-semibold">Order Medicines via WhatsApp</h2>
            </div>
            <button
              onClick={closeOrderModal}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close"
              id="close-order-modal-btn"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Form Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" id="order-success-screen">
                <CheckCircle className="w-16 h-16 text-medical-teal mb-4 animate-bounce" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Redirecting to WhatsApp...</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your formatted medicine order list has been prepared. Please click 'Send' in WhatsApp to dispatch your order directly to Ashok Medical Hall!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="medicine-order-form">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="order-name">
                    Customer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="order-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-medical-teal/50 focus:border-medical-teal outline-none transition-all text-gray-900 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="order-mobile">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="order-mobile"
                      required
                      pattern="[6-9][0-9]{9}"
                      title="Please enter a valid 10-digit mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="10-digit number"
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-medical-teal/50 focus:border-medical-teal outline-none transition-all text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="order-email">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="order-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-medical-teal/50 focus:border-medical-teal outline-none transition-all text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="order-address">
                    Full Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="order-address"
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Flat/House No., Street/Area, Belaganj, Gaya, Bihar (include landmarks)"
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-medical-teal/50 focus:border-medical-teal outline-none transition-all text-gray-900 dark:text-white resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="order-medicines">
                    Medicines Required <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="order-medicines"
                    required
                    rows={2}
                    value={medicine}
                    onChange={(e) => setMedicine(e.target.value)}
                    placeholder="Example: Calpol 650mg - 2 strips, Volini Gel - 1 pack"
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-medical-teal/50 focus:border-medical-teal outline-none transition-all text-gray-900 dark:text-white resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Upload Prescription?
                    </label>
                    <div className="flex items-center space-x-4 mt-1">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="prescription"
                          value="Yes"
                          checked={hasPrescription === 'Yes'}
                          onChange={() => setHasPrescription('Yes')}
                          className="text-medical-teal focus:ring-medical-teal"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="prescription"
                          value="No"
                          checked={hasPrescription === 'No'}
                          onChange={() => {
                            setHasPrescription('No');
                            setFileName('');
                          }}
                          className="text-medical-teal focus:ring-medical-teal"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="delivery-time">
                      Preferred Delivery
                    </label>
                    <select
                      id="delivery-time"
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-medical-teal/50 focus:border-medical-teal outline-none transition-all text-gray-900 dark:text-white"
                    >
                      <option value="Immediate (Same Day)">Immediate (Same Day)</option>
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8 AM - 12 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4:00 PM - 8:00 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                {hasPrescription === 'Yes' && (
                  <div className="p-3 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 flex flex-col items-center justify-center text-center">
                    <input
                      type="file"
                      id="prescription-file-upload"
                      accept="image/*,application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="prescription-file-upload"
                      className="cursor-pointer flex flex-col items-center justify-center text-medical-teal hover:text-teal-600 transition-colors"
                    >
                      <Upload className="w-8 h-8 mb-1" />
                      <span className="text-sm font-medium">Click to select photo or PDF</span>
                      <span className="text-xs text-gray-400 mt-0.5">Maximum size: 10MB</span>
                    </label>
                    {fileName && (
                      <div className="mt-2 flex items-center space-x-1 bg-teal-50 dark:bg-teal-900/30 px-3 py-1 rounded-full text-xs text-medical-teal">
                        <FileText className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[200px]">{fileName}</span>
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="order-notes">
                    Additional Instructions / Message
                  </label>
                  <textarea
                    id="order-notes"
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter any other details (e.g. tablet count, substitute preference)"
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-medical-teal/50 focus:border-medical-teal outline-none transition-all text-gray-900 dark:text-white resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-medical-teal hover:bg-teal-700 active:scale-[0.98] text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-lg shadow-medical-teal/20 transition-all cursor-pointer"
                    id="send-whatsapp-order-btn"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </button>
                  <a
                    href="tel:9504172110"
                    className="sm:w-1/3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 border border-gray-200 dark:border-gray-700 transition-colors"
                    id="call-now-order-btn"
                  >
                    <Phone className="w-4 h-4 text-medical-teal" />
                    <span>Call Now</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
