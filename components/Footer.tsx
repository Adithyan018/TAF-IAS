import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              TAF <span className="text-secondary">IAS</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are dedicated to shaping the future leaders of our nation through rigorous training, expert guidance, and a commitment to excellence in civil services preparation.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-slate-400 hover:text-white hover:bg-primary/20 p-2 rounded-full transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:bg-primary/20 p-2 rounded-full transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:bg-primary/20 p-2 rounded-full transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:bg-primary/20 p-2 rounded-full transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Academy', path: '/about' },
                { name: 'Our Courses', path: '/courses' },
                { name: 'Success Stories', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-secondary text-sm flex items-center group transition-colors">
                    <ChevronRight size={14} className="mr-2 text-slate-600 group-hover:text-secondary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Our Courses</h4>
            <ul className="space-y-3">
              {[
                'UPSC Civil Services',
                'TNPSC Group I & II',
                'Banking & SSC',
                'Police Exams',
                'Mock Interview'
              ].map((course) => (
                <li key={course}>
                  <Link to="/courses" className="text-slate-400 hover:text-secondary text-sm flex items-center group transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-secondary transition-colors"></div>
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  123, Education Lane, Anna Nagar,<br />Chennai, Tamil Nadu 600040
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-secondary mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-secondary mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">info@tafiasacademy.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} TAF IAS Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};