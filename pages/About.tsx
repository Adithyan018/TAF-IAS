import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-primary py-24">
        <div className="absolute inset-0 overflow-hidden">
           <img src="https://picsum.photos/1920/600?random=10" alt="Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            About TAF IAS Academy
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Dedicated to creating the next generation of civil servants who are ethical, efficient, and effective.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-tl-3xl -z-10"></div>
              <img src="https://picsum.photos/800/600?random=11" alt="Classroom" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary hidden md:block">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-slate-500 font-medium">Years of Experience</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Legacy of Excellence</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 2010, TAF IAS Academy began with a humble mission: to make quality civil services coaching accessible to aspirants from all walks of life. Over the past decade, we have evolved into a premier institution known for our rigorous academic standards and student-centric approach.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We believe that every aspirant has the potential to succeed if given the right guidance. Our unique pedagogy combines conceptual clarity with analytical thinking, preparing students not just for exams, but for the challenges of administration.
            </p>
            <div className="flex gap-4">
               <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg border border-slate-100 min-w-[100px]">
                 <Shield className="text-secondary w-8 h-8 mb-2" />
                 <span className="font-bold text-slate-800">Integrity</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg border border-slate-100 min-w-[100px]">
                 <Target className="text-secondary w-8 h-8 mb-2" />
                 <span className="font-bold text-slate-800">Focus</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg border border-slate-100 min-w-[100px]">
                 <Award className="text-secondary w-8 h-8 mb-2" />
                 <span className="font-bold text-slate-800">Success</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-50 p-10 rounded-2xl border-t-4 border-primary shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower aspirants with knowledge, skills, and the right attitude required to crack competitive examinations and serve the nation with distinction. We strive to provide a conducive learning environment that fosters critical thinking and holistic development.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-2xl border-t-4 border-secondary shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted and preferred destination for civil services preparation in India, recognized for producing officers who are not only intellectually competent but also morally upright and socially responsible.
            </p>
          </div>
        </div>

        {/* Director Message */}
        <div className="bg-blue-900 rounded-3xl overflow-hidden text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 h-full min-h-[300px]">
              <img src="https://picsum.photos/600/800?random=12" alt="Director" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-8 p-10 md:p-16 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold mb-1">Dr. S. Ramesh</h3>
                <p className="text-secondary font-medium uppercase tracking-wider text-sm">Founder & Director</p>
              </div>
              <blockquote className="text-lg md:text-xl font-light italic opacity-90 mb-8 leading-relaxed">
                "Success in Civil Services is not just about hard work; it's about smart work, consistency, and the courage to pursue your dreams against all odds. At TAF IAS Academy, we promise to walk this path with you, every step of the way."
              </blockquote>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 w-auto opacity-70 filter invert" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};