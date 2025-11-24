import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Calendar, BookOpen } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "UPSC Civil Services - PCM",
    category: "UPSC",
    duration: "12 Months",
    mode: "Online / Offline",
    description: "Our flagship program covering Prelims, Mains, and Interview preparation comprehensively.",
    features: [
      "1000+ Hours of Live Classes",
      "Printed Study Material",
      "Daily Current Affairs Analysis",
      "Weekly Prelims & Mains Tests",
      "CSAT Special Classes"
    ],
    image: "https://picsum.photos/600/400?random=20"
  },
  {
    id: 2,
    title: "TNPSC Group I Integrated",
    category: "TNPSC",
    duration: "10 Months",
    mode: "Offline",
    description: "Specialized coaching for Group I services with focus on Tamil Nadu history and administration.",
    features: [
      "Bilingual Classes (Tamil/English)",
      "Unit 8 & 9 Special Focus",
      "State Board Book Analysis",
      "Mentorship Program",
      "Mock Interviews"
    ],
    image: "https://picsum.photos/600/400?random=21"
  },
  {
    id: 3,
    title: "TNPSC Group II/IIA",
    category: "TNPSC",
    duration: "6 Months",
    mode: "Online / Offline",
    description: "Targeted preparation for Group II services with emphasis on General English/Tamil and GS.",
    features: [
      "Shortcut Math Techniques",
      "Language Paper Focus",
      "Weekend Batches Available",
      "50+ Full Length Tests",
      "Revision Classes"
    ],
    image: "https://picsum.photos/600/400?random=22"
  },
  {
    id: 4,
    title: "Banking Success Pro",
    category: "Banking",
    duration: "4 Months",
    mode: "Online / Offline",
    description: "Intensive training for IBPS PO, Clerk, SBI and RRB exams with speed enhancement drills.",
    features: [
      "Speed Maths & Vedix Maths",
      "Daily Online Tests",
      "Banking Awareness",
      "Computer Knowledge",
      "Interview Guidance"
    ],
    image: "https://picsum.photos/600/400?random=23"
  },
  {
    id: 5,
    title: "SSC CGL / CHSL",
    category: "SSC",
    duration: "5 Months",
    mode: "Online",
    description: "Master Central Govt exams with our expert faculty for Quantitative Aptitude and Reasoning.",
    features: [
      "Advanced Math Tricks",
      "English Vocabulary Building",
      "Previous Year Q&A Discussion",
      "Tier I & II Coverage",
      "Typing Test Guidance"
    ],
    image: "https://picsum.photos/600/400?random=24"
  },
  {
    id: 6,
    title: "Weekend Foundation Batch",
    category: "Special",
    duration: "18 Months",
    mode: "Offline (Sundays)",
    description: "Designed for working professionals and college students who want to start early.",
    features: [
      "Flexible Timings",
      "Recorded Backup Classes",
      "Current Affairs Digest",
      "Personalized Strategy",
      "Long-term Mentorship"
    ],
    image: "https://picsum.photos/600/400?random=25"
  }
];

export const Courses: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Courses</h1>
        <p className="text-slate-400 max-w-2xl mx-auto px-4">
          Choose from our wide range of meticulously designed courses tailored to meet the specific needs of different competitive examinations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {course.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4">
                   <div className="flex items-center"><Clock size={14} className="mr-1" /> {course.duration}</div>
                   <div className="flex items-center"><BookOpen size={14} className="mr-1" /> {course.mode}</div>
                </div>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {course.description}
                </p>
                
                <div className="mb-6 bg-slate-50 p-4 rounded-lg">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {course.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <Check size={16} className="text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md">
                  View Details & Fee
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};