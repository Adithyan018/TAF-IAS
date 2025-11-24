import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Book, Users, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/1920/1080?random=1"
            alt="Academy Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 bg-secondary/20 border border-secondary/40 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-secondary font-semibold text-sm tracking-wide uppercase">Admissions Open 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Shape Your Future with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                  Excellence & Integrity
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                Join India's premier institute for Civil Services preparation. We don't just teach; we mentor the leaders of tomorrow with a proven strategy and personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="px-8 py-4 bg-secondary hover:bg-amber-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold transition-all flex items-center justify-center">
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose TAF IAS?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Our holistic approach combines traditional teaching methods with modern technology to ensure comprehensive preparation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Expert Faculty",
                desc: "Learn from retired bureaucrats and subject matter experts with decades of experience."
              },
              {
                icon: <Book className="w-10 h-10 text-primary" />,
                title: "Comprehensive Material",
                desc: "Curated study materials updated regularly to match the evolving exam patterns."
              },
              {
                icon: <Target className="w-10 h-10 text-primary" />,
                title: "Personalized Mentorship",
                desc: "One-on-one guidance to identify strengths and work on weaknesses effectively."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "2000+", label: "Successful Candidates" },
              { number: "50+", label: "Expert Faculty" },
              { number: "100%", label: "Dedication" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-blue-100 uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Our Programs</h2>
              <div className="w-20 h-1 bg-secondary mt-4 rounded-full"></div>
            </div>
            <Link to="/courses" className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors">
              View All Courses <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Course Card 1 */}
             <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src="https://picsum.photos/600/400?random=2" alt="UPSC" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-xs font-bold text-primary bg-blue-50 inline-block px-3 py-1 rounded-full mb-3">Civil Services</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">UPSC Foundation</h3>
                  <p className="text-slate-600 text-sm mb-4">Comprehensive coverage of Prelims and Mains with integrated test series.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-slate-500"><CheckCircle size={16} className="text-green-500 mr-2" /> 12 Months Duration</li>
                    <li className="flex items-center text-sm text-slate-500"><CheckCircle size={16} className="text-green-500 mr-2" /> Offline & Online</li>
                  </ul>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Starts June 15</span>
                  <Link to="/courses" className="text-secondary font-semibold text-sm hover:underline">Details</Link>
                </div>
             </div>

             {/* Course Card 2 */}
             <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src="https://picsum.photos/600/400?random=3" alt="TNPSC" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-xs font-bold text-green-700 bg-green-50 inline-block px-3 py-1 rounded-full mb-3">State Services</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">TNPSC Group I & II</h3>
                  <p className="text-slate-600 text-sm mb-4">Focused preparation for Tamil Nadu Public Service Commission exams.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-slate-500"><CheckCircle size={16} className="text-green-500 mr-2" /> 6-8 Months Duration</li>
                    <li className="flex items-center text-sm text-slate-500"><CheckCircle size={16} className="text-green-500 mr-2" /> Bilingual Material</li>
                  </ul>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Starts July 01</span>
                  <Link to="/courses" className="text-secondary font-semibold text-sm hover:underline">Details</Link>
                </div>
             </div>

             {/* Course Card 3 */}
             <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src="https://picsum.photos/600/400?random=4" alt="Banking" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-xs font-bold text-purple-700 bg-purple-50 inline-block px-3 py-1 rounded-full mb-3">Banking</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">IBPS & SBI PO</h3>
                  <p className="text-slate-600 text-sm mb-4">Intensive coaching for banking sector jobs with speed math techniques.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-slate-500"><CheckCircle size={16} className="text-green-500 mr-2" /> 4 Months Duration</li>
                    <li className="flex items-center text-sm text-slate-500"><CheckCircle size={16} className="text-green-500 mr-2" /> Daily Mock Tests</li>
                  </ul>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Starts Weekly</span>
                  <Link to="/courses" className="text-secondary font-semibold text-sm hover:underline">Details</Link>
                </div>
             </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/courses" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors border border-primary px-6 py-3 rounded-lg">
              View All Courses <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Take the first step towards your dream career. Schedule a free counseling session with our experts today.
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-secondary hover:text-white transition-all transform hover:scale-105">
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};