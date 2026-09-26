"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, ArrowUpRight, Star, Shield, Activity, Clock } from "lucide-react";

export default function MSDentalTapecutEdition() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const services = [
    { 
      title: "Modern Infrastructure", 
      desc: "Equipped with advanced diagnostic technology for absolute precision and safety.", 
      span: "md:col-span-2 md:row-span-2", 
      img: "/clinic-image-1.jpg" 
    },
    { 
      title: "Absolute Comfort", 
      desc: "Minimally invasive, pain-free approach to everyday dentistry.", 
      span: "md:col-span-1 md:row-span-1", 
      img: "/clinic-image-2.jpg" 
    },
    { 
      title: "Strict Hygiene", 
      desc: "International sterilization protocols for peace of mind.", 
      span: "md:col-span-1 md:row-span-1", 
      img: "/clinic-image-3.jpg" 
    },
    { 
      title: "Comprehensive Care", 
      desc: "From routine checkups to complete smile restorations under one roof.", 
      span: "md:col-span-2 md:row-span-1", 
      img: "/clinic-image-4.jpg" 
    },
  ];

  const reviews = [
    { name: "Geeta Bhatia", text: "M.S. Dental World have been helping me for the past 20 years. They have saved me from a lot of dental problems. Highly recommended." },
    { name: "K.K. Jha", text: "Dr. Madan Mohan Ji's care and treatment are excellent. The approach towards patients and courteous behavior are truly exemplary." },
    { name: "Anushka Bhatia", text: "The doctors are really nice and cooperative. They helped control my bleeding gums and have given my family the best treatments possible." },
    { name: "Suresh Kumar", text: "Very genuine doctor. He explained the whole implant process clearly and there was absolutely zero pain. Best in Janakpuri." },
    { name: "Priya Sharma", text: "The clinic is exceptionally clean and the staff is very professional. I got my root canal done in a single sitting without any discomfort." }
  ];

  const scrollingReviews = [...reviews, ...reviews, ...reviews];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020202] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* --- TAPECUT SIGNATURE NAV --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 mix-blend-difference"
      >
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-bold tracking-tight uppercase">M.S. Dental World</span>
          <span className="text-[9px] tracking-[0.3em] text-white/50 uppercase">Clinical Excellence</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-xs font-bold tracking-widest uppercase">
          <span className="hover:text-white/50 transition-colors cursor-pointer">The Clinic</span>
          <span className="hover:text-white/50 transition-colors cursor-pointer">Expertise</span>
        </div>

        <a href="tel:+919811668657" className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:scale-95 transition-transform duration-300">
          Book Visit <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </a>
      </motion.nav>

      {/* --- CINEMATIC FULL-COLOR HERO --- */}
      <section className="relative w-full h-screen flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: yHeroImage }} className="w-full h-full">
            <img 
              src="/clinic-hero.jpg" 
              alt="Clinic Hero" 
              className="w-full h-[120%] object-cover object-center opacity-60 brightness-90 saturate-[1.1]"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
        </div>

        <motion.div style={{ opacity: opacityHero }} className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-white">626+ Five-Star Google Reviews</span>
            </div>
            <h1 className="text-[12vw] md:text-[7vw] leading-[0.9] font-bold tracking-tighter uppercase">
              Precision. <br/>
              <span className="text-white/30">Mastery.</span>
            </h1>
          </div>

          <div className="max-w-sm pb-2">
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-medium">
              We engineer smiles that last a lifetime. Advanced implantology and ethical dental care in Janakpuri, led by Dr. Madan Mohan.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- THE TRANSITION (Dark to Clinical White) --- */}
      <section className="relative w-full bg-white text-black py-32 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[4rem] -mt-8 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          
          <div className="w-full md:w-5/12 h-[60vh] relative rounded-3xl overflow-hidden group shadow-2xl">
            <motion.div 
              initial={{ height: "100%" }}
              whileInView={{ height: "0%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 left-0 w-full bg-[#020202] z-10"
            />
            <img 
              src="/doctor.jpg" 
              alt="Dr. Madan Mohan" 
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop" }}
            />
          </div>

          <div className="w-full md:w-7/12 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-black/30 mb-8 border-l-2 border-black/30 pl-4">The Architect of Smiles</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Dr. Madan Mohan
            </h2>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-6 font-medium">
              For over two decades, M.S. Dental World has operated on a strict code: No hidden fees, no unnecessary procedures, and absolute clinical precision.
            </p>
            <p className="text-base text-black/50 leading-relaxed mb-12">
              Whether you need a complex full-mouth rehabilitation or a simple, painless root canal, our facility is equipped with state-of-the-art diagnostic tools to ensure every treatment is executed flawlessly.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-black/10">
              <div className="flex flex-col gap-2">
                <Shield className="w-5 h-5 text-black" />
                <span className="font-bold text-sm tracking-wide">Class-B Sterilization</span>
              </div>
              <div className="flex flex-col gap-2">
                <Activity className="w-5 h-5 text-black" />
                <span className="font-bold text-sm tracking-wide">Advanced Diagnostics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE FIXED CINEMATIC BENTO GRID --- */}
      <section className="w-full bg-[#080808] py-32 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4 block">Infrastructure & Standards</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">The Standard <br/> Of Care.</h2>
            </div>
            <p className="text-white/50 max-w-sm text-sm font-medium">A world-class environment designed around patient comfort, strict hygiene, and clinical excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`relative bg-[#111] rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden group cursor-pointer border border-white/10 shadow-2xl ${service.span}`}
              >
                {service.img && (
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700" 
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="relative z-10 mt-auto pt-16 text-white">
                  <h3 className={`font-bold tracking-tight mb-3 ${service.span.includes('col-span-2') ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>{service.title}</h3>
                  <p className="text-white/70 text-sm md:text-base font-medium max-w-md">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AUTHORITY FLEX (Reviews) --- */}
      <section className="w-full bg-[#020202] text-white pt-32 pb-16 overflow-hidden flex flex-col">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-6 block">The Verdict</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
              The Highest Rated <br/>
              <span className="text-white/30">In West Delhi.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="text-[100px] md:text-[120px] font-bold tracking-tighter leading-none text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              626<span className="text-[#007BFF]">+</span>
            </span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/60">Verified 5-Star Reviews</span>
          </div>
        </div>

        {/* INFINITE SCROLLING REVIEW TRACK */}
        <div className="relative w-full flex overflow-hidden py-10" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 w-max px-6"
          >
            {scrollingReviews.map((review, i) => (
              <div key={i} className="w-[320px] md:w-[450px] bg-white/5 border border-white/10 p-8 rounded-3xl shrink-0 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-grab active:cursor-grabbing">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 font-medium">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold tracking-wide text-sm">{review.name}</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#007BFF]">Google Reviewer</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-white text-black py-20 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[4rem] relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none uppercase">
              Initiate <br/> Consultation.
            </h2>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-black/50 mb-2">
              <MapPin className="w-4 h-4 text-black" /> D2/191, Jeevan Park, New Delhi
            </div>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-black/50">
              <Clock className="w-4 h-4 text-black" /> Mon-Sat: 10AM - 8:30PM
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
            <a href="tel:+919811668657" className="group flex items-center gap-4 bg-black text-white px-8 py-5 rounded-full font-bold tracking-widest uppercase hover:scale-95 transition-transform duration-300 mb-6 shadow-xl shadow-black/20">
              <Phone className="w-5 h-5" /> +91 98116 68657
            </a>
            <a href="mailto:lakshyathakur359@gmail.com" className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 hover:text-black border-b border-black/20 pb-1 transition-colors">
              lakshyathakur359@gmail.com
            </a>
          </div>

        </div>

        {/* PROTOTYPE BADGE */}
        <div className="max-w-7xl mx-auto w-full mt-20 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">
          <span>© {new Date().getFullYear()} M.S. Dental World</span>
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full animate-ping" />
            Prototype Engineered by Tapecut Studios
          </span>
        </div>
      </footer>

    </main>
  );
}