import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Have questions about our courses or admissions? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="bg-slate-900 text-white p-10 lg:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Location</h4>
                    <p className="text-slate-400 text-sm mt-1">123, Education Lane, Anna Nagar,<br />Chennai, Tamil Nadu 600040</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone Number</h4>
                    <p className="text-slate-400 text-sm mt-1">+91 98765 43210</p>
                    <p className="text-slate-400 text-sm">+91 44 2626 2626</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Mail className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Address</h4>
                    <p className="text-slate-400 text-sm mt-1">info@tafiasacademy.in</p>
                    <p className="text-slate-400 text-sm">admissions@tafiasacademy.in</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Clock className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Office Hours</h4>
                    <p className="text-slate-400 text-sm mt-1">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-slate-400 text-sm">Sun: 10:00 AM - 2:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
               <div className="w-full h-48 bg-slate-800 rounded-lg overflow-hidden relative">
                 <img src="https://picsum.photos/600/400?random=map" alt="Map Placeholder" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity" />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">View on Google Maps</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:w-3/5">
             <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                   <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                 </div>
                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                   <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                 </div>
               </div>
               
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                 <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
               </div>
               
               <div>
                 <label htmlFor="course" className="block text-sm font-medium text-slate-700 mb-2">Interested Course</label>
                 <select id="course" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Select a course</option>
                    <option value="upsc">UPSC Civil Services</option>
                    <option value="tnpsc">TNPSC Group I/II</option>
                    <option value="banking">Banking & SSC</option>
                    <option value="other">Other</option>
                 </select>
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                 <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
               >
                 <Send size={18} className="mr-2" />
                 Send Message
               </motion.button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};