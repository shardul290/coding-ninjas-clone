import React, { useState, useRef } from 'react';
import { Quote, Star, ArrowUpRight, MessageCircle, BookOpen, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- MASTER TESTIMONIAL DATA (All content sets merged) ---
const masterTestimonialData = {
    "Non tech to tech": [
        {
            name: "Twisam", role: "Full Stack Developer",
            review: "From optometrist to IT pro, thanks to Coding Ninjas. Their lessons help me excel in projects. CN transformed my journey, giving me clarity and optimization skills!",
            img: "https://files.codingninjas.com/nttot_twisampati-33030.png",
            company: "Cogent e Private ltd", companyLogo: "https://files.codingninjas.com/cogent_nttot_2023-32980.png"
        },
    ],
    "Service to product": [ // <--- NEW DATA SET
        {
            name: "Annu", role: "SDE - 1",
            review: "A friend recommended Coding Ninjas' JAVA course in my first year. It was amazing. The basics I learned still benefit me. The faculty brilliantly simplified complex concepts.",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&q=80", 
            company: "Apple",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Apple_logo_black.svg"
        },
        {
            name: "Ayush Jaiswal", role: "Software Engineer",
            review: "My journey with Coding Ninjas has been long and rewarding. In college, their expert guidance helped me build a strong foundation and prepare for placements.",
            img: "https://images.unsplash.com/photo-1507003211169-0a6dd7228f7d?w=80&h=80&fit=crop&q=80", 
            company: "Google",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Google_2016_logo.svg"
        },
        {
            name: "Supratik. De", role: "Senior Software Engineer",
            review: "Coding Ninjas brought two pivotal changes to my career: I transitioned to a Product-based company as a Senior Software Engineer, and my confidence in DSA skills soared.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&q=80", 
            company: "Freshworks",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Freshworks_Logo.svg/100px-Freshworks_Logo.svg.png"
        },
    ],
    "Tier 2/3 colleges": [
        {
            name: "Durgesh Chaubey", role: "SDE - 1",
            review: "Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from top institutions like Stanford and IIT.",
            img: "https://files.codingninjas.com/nt-to-t_durgesh-33026.png",
            company: "Master Card", companyLogo: "https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
        },
    ],
    "Job Bootcamp": [], 
    "Upskilling Courses": [], 
};


// Learning Model Data (For Section 3)
const steps = [
    { title: "Learn", desc: "Experience seamless learning with problem solving modules, leaderboard and awards.", icon: BookOpen, color: "text-[#FA7328]", bg: "bg-[#FA7328]/10" },
    { title: "Excel", desc: "Track your skill level and make meaningful progress for you to grow.", icon: TrendingUp, color: "text-[#28A745]", bg: "bg-[#28A745]/10" },
    { title: "Standout", desc: "Standout to recruiters, showcase ratings, get feedback and interview insights.", icon: Award, color: "text-[#007BFF]", bg: "bg-[#007BFF]/10" },
];


// --- Testimonial Card Component (Opacity based on scroll) ---
const TestimonialCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 0.9", "end 0.2"]
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <motion.div 
            ref={cardRef}
            style={{ opacity }}
            className="bg-[#111] p-6 rounded-[24px] border border-[#222] relative group min-w-[300px] flex flex-col justify-between"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index * 0.15 }}
        >
            <div className="absolute inset-0 opacity-10 p-6">
                <MessageCircle size={100} className="text-[#FA7328] rotate-12" />
            </div>

            <div className="flex items-center gap-4 mb-4 z-10">
                <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FA7328]"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/FA7328/FFFFFF?text=P"; }}
                />
                <div>
                    <h3 className="text-white font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
            </div>

            <p className="text-gray-300 text-[15px] leading-relaxed mb-6 flex-1 z-10">
                "{item.review}"
            </p>

            <div className="mt-auto border-t border-[#222] pt-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    Post <ArrowRight size={16} /> Coding Ninjas
                </div>
                <img 
                    src={item.companyLogo} 
                    alt={item.company} 
                    className="h-6 object-contain mix-blend-lighten opacity-80"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x24/111/FA7328?text=LOGO"; }}
                />
            </div>
        </motion.div>
    );
};


// --- MAIN COMPONENT ---
const TestimonialsAndTrusted = () => {
    
    const tags = ["Non tech to tech", "Service to product", "Tier 2/3 colleges", "Job Bootcamp", "Upskilling Courses"];
    const containerRef = useRef(null);
    
    // State to track active filter (Default to Non tech to tech)
    const [activeTag, setActiveTag] = useState('Non tech to tech'); 
    
    // Get currently active data
    const activeTestimonials = masterTestimonialData[activeTag] || [];

    // Scroll progress for the vertical line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"] 
    });

    // Solid Line Fill (Animated)
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    return (
        <div className="bg-[#050505] text-white font-sans relative">
            
            {/* --- FIX: DOTTED LINE (Static Background) --- */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] z-10"
              style={{
                marginLeft: 'calc(50vw - 600px)', // Align to the content's left edge
                borderLeft: '2px dashed #333'
              }}
            ></div>

            {/* --- FIX: ANIMATED GRADIENT BORDER (Solid Line Fill) --- */}
            <motion.div 
              style={{
                marginLeft: 'calc(50vw - 600px)', // Align to the content's left edge
                background: 'linear-gradient(to bottom, #FA7328, #E83E8C, #6F42C1)',
                height: lineHeight // Animated height
              }}
              className="absolute top-0 bottom-0 w-[4px] z-20 origin-top"
            ></motion.div>
            
            
            {/* --- Content Wrapper --- */}
            <div className="max-w-[1200px] mx-auto px-4 py-20 relative z-30" ref={containerRef}>

                {/* ================= SECTION 1: SUCCESS STORIES (FILTERABLE) ================= */}
                <div className="mb-24">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-3 rounded-md shadow-lg">
                               <Quote size={24} className="text-black" />
                            </div>
                            <h2 className="text-[36px] font-bold">Stories from people like you</h2>
                        </div>
                        <a href="#" className="text-[#FA7328] font-bold flex items-center gap-1 hover:underline">
                            Read all success stories <ArrowUpRight size={18} />
                        </a>
                    </div>

                    {/* Filter Pills (Clicking these changes content below) */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {tags.map((tag) => (
                            <button 
                                key={tag} 
                                onClick={() => setActiveTag(tag)} // State change handler
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                                    activeTag === tag
                                    ? 'bg-white text-black border-white font-bold' // Active Style
                                    : 'bg-[#151515] text-gray-400 border-[#222] hover:border-[#444]' // Inactive Style
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Testimonial Cards Slider (DATA RENDERING) */}
                    <div className="grid md:grid-cols-3 gap-8 overflow-x-auto pb-4">
                        {/* Key force kiya hai taaki React ko pata chale ki content badal gaya hai, isse animation smooth rahega */}
                        {activeTestimonials.map((item, index) => (
                            <TestimonialCard key={item.name + activeTag} item={item} index={index} />
                        ))}
                    </div>
                </div>

                {/* ================= SECTION 2: TRUSTED BY LEARNERS (RATINGS) ================= */}
                <div className="mt-20 pt-16 border-t border-[#222] relative">
                    <h2 className="text-[32px] font-bold text-center mb-4">Trusted by learners</h2>
                    <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-12">
                        1,00,000+ Coding Ninjas alumni from 1,100+ companies & 4,400+ colleges working in top product companies
                    </p>

                    {/* Ratings Grid */}
                    <div className="flex justify-center flex-wrap gap-10">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <span className="text-2xl font-bold">4.9</span>
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                            </div>
                            <p className="text-gray-300">700+ reviews</p>
                            <span className="text-sm text-blue-400">Facebook</span>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <span className="text-2xl font-bold">4.7</span>
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                            </div>
                            <p className="text-gray-300">2300+ reviews</p>
                            <span className="text-sm text-red-400">Google</span>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <span className="text-2xl font-bold">4.8</span>
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                            </div>
                            <p className="text-gray-300">Course rating</p>
                            <span className="text-sm text-orange-400">Coding Ninjas</span>
                        </div>
                    </div>
                </div>
                
                
                {/* ================= SECTION 3: LEARNING MODEL (FINAL) ================= */}

                <div className="mt-40 pt-10">
                    <h2 className="text-[36px] font-bold text-center mb-16">
                        A 3-stage learning model to turn you into a <span className="text-[#FA7328]">Coding Ninja</span>
                    </h2>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#111] p-8 rounded-[24px] border border-[#222] shadow-2xl flex flex-col items-center text-center"
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${step.bg} ${step.color}`}>
                                    <step.icon size={28} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-base">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TestimonialsAndTrusted;