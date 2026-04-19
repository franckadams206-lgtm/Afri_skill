import { Play, ChevronRight, Clock, HelpCircle, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function Dashboard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.main 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-md mx-auto px-6 pt-6 pb-32 space-y-10"
    >
      {/* Greeting Section */}
      <motion.section variants={item} className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#191c1d] leading-tight font-display">
          Hello, Kwame!<br />Keep growing.
        </h1>
        <p className="text-gray-500 font-medium text-sm">Your career journey is 45% ahead of your peers.</p>
      </motion.section>

      {/* Continue Learning - Hero Card */}
      <motion.section variants={item} className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Continue Learning</h2>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-4 w-2/3">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider rounded-full">
                Active Module
              </span>
              <h3 className="text-xl font-bold text-[#191c1d]">Digital Marketing 101</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-primary">65%</span>
                </div>
                <div className="h-2 w-full bg-primary-fixed rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full" 
                  />
                </div>
              </div>
            </div>
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </div>
          <button className="mt-6 w-full cta-gradient text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
            Resume Lesson
            <Play className="w-4 h-4 fill-current" />
          </button>
        </div>
      </motion.section>

      {/* AI Assistant Banner */}
      <motion.section 
        variants={item}
        whileHover={{ scale: 1.02 }}
        className="bg-primary/5 rounded-3xl p-6 flex items-center justify-between cursor-pointer border border-primary/10"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
            <SparklesIcon />
          </div>
          <div>
            <h4 className="font-bold text-[#191c1d]">Afriskill AI</h4>
            <p className="text-xs text-gray-500">Ready to quiz you on today's module.</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-primary" />
      </motion.section>

      {/* Recommended For You */}
      <motion.section variants={item} className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Recommended for You</h2>
          <button className="text-primary text-xs font-bold underline underline-offset-4">View all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6 pb-2">
          {RECOMMENDED_COURSES.map((course, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="min-w-[240px] bg-white rounded-3xl p-4 space-y-3 shadow-sm border border-gray-50"
            >
              <div className="h-32 w-full rounded-2xl bg-gray-100 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <span className={cn("text-[10px] font-bold uppercase", course.tagColor)}>
                  {course.tag}
                </span>
                <h4 className="text-base font-bold leading-tight">{course.title}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium pt-1">
                  <Clock className="w-3 h-3" />
                  {course.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Revisions */}
      <motion.section variants={item} className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Quick Revisions</h2>
        <div className="grid grid-cols-1 gap-4">
          {REVISIONS.map((rev, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-3xl flex items-center gap-4 hover:bg-gray-100 transition-colors">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", rev.iconBg)}>
               <rev.icon className={cn("w-7 h-7", rev.iconColor)} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#191c1d]">{rev.title}</h4>
                <p className="text-xs text-gray-500">{rev.subtitle}</p>
              </div>
              <button className="bg-white h-10 px-4 rounded-xl text-primary font-bold text-xs shadow-sm hover:bg-primary hover:text-white transition-colors">
                {rev.buttonText}
              </button>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RECOMMENDED_COURSES = [
  {
    title: "Data Analytics Foundation",
    tag: "Education",
    tagColor: "text-green-600",
    duration: "12 hours",
    image: "https://picsum.photos/seed/analytics/400/300"
  },
  {
    title: "Agile Project Leadership",
    tag: "Professional",
    tagColor: "text-violet-600",
    duration: "8 hours",
    image: "https://picsum.photos/seed/agile/400/300"
  }
];

const REVISIONS = [
  {
    title: "Intro to SEO Quiz",
    subtitle: "Due tomorrow • 15 questions",
    buttonText: "Start",
    icon: HelpCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-700"
  },
  {
    title: "Market Research Study",
    subtitle: "Exam prep • Flashcards ready",
    buttonText: "Open",
    icon: FileText,
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary"
  }
];
