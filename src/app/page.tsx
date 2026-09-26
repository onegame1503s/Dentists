"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight, Star, Shield, Activity, Clock, CheckCircle2, ChevronRight } from "lucide-react";

export default function MSDentalClinicalLight() {
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* --- CLINICAL TOP INFO BAR --- */}
      <div className="w-full bg-[#0A192F] text-slate-300 py-2.5 px-6 md:px-12 text-xs font-medium flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-400" /> D2/191, Jeevan Park, Janakpuri, New Delhi</span>
          <span className="hidden md:flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-blue-400" /> Mon - Sat: 10:00 AM - 8:30 PM</span>
        </div>
        <a href="tel:+919811668657" className="flex items-center gap-2 text-white font-bold hover:text-blue-300 transition-colors">
          <Phone className="w-3.5 h-3.5 text-blue-400" /> +91 98116 68657
        </a>
      </div>

      {/* --- CLEAN FLOATING NAV --- */}
      <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 md:px-12 py-4 flex justify-between items-center z-50">
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-extrabold text-[#0A192F] tracking-tight">M.S. Dental World</span>
          <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">Multi-Specialty Clinic</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-600 uppercase tracking-wider">
          <span className="hover:text-blue-600 transition-colors cursor-pointer">The Clinic</span>
          <span className="hover:text-blue-600 transition-colors cursor-pointer">Expertise</span>
          <span className="hover:text-blue-600 transition-colors cursor-pointer">Reviews</span>
        </div>

        <a href="tel:+919811668657" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all">
          Book Visit
        </a>
      </nav>

      {/* --- CLEAN BRIGHT HERO SECTION --- */}
      <section className="relative w-full py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            626+ Five-Star Google Reviews
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Advanced dental care.<br/>
            <span className="text-blue-600">Zero anxiety.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg font-medium">
            Serving Janakpuri for over 20 years with ethical diagnostics, painless procedures, and lasting family smiles led by Dr. Madan Mohan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="tel:+919811668657" className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg hover:bg-slate-800 transition-all text-center">
              Schedule Consultation
            </a>
            <div className="flex items-center justify-center gap-3 px-4 py-2">
              <div className="flex -space-x-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-xs font-bold text-slate-700">Verified Local Trust</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white">
            <img 
              src="/clinic-hero.jpg" 
              alt="M.S. Dental World" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" }}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">
              20+
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Experience</p>
              <p className="text-sm font-extrabold text-slate-900">Years in Janakpuri</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- DOCTOR PROFILE SECTION (Clean White) --- */}
      <section className="w-full bg-white py-24 px-6 md:px-12 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-5/12 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-slate-50 relative">
            <img 
              src="/doctor.jpg" 
              alt="Dr. Madan Mohan" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop" }}
            />
          </div>

          <div className="w-full md:w-7/12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">Chief Dental Surgeon</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Dr. Madan Mohan
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              "We treat patients like family, not numbers on a spreadsheet. Ethical diagnosis and patient comfort come before everything else."
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              With over two decades of practice in West Delhi, Dr. Mohan has built M.S. Dental World on absolute transparency. You will never be recommended a procedure you don't need—just honest, expert dental care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Permanent Implants
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Pain-Free Root Canals
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Transparent Pricing
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Strict Sterilization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID: STANDARD OF CARE (Light Mode Luxury) --- */}
      <section className="w-full py-28 px-6 md:px-12 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block">Clinical Excellence</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">The Standard Of Care.</h2>
            </div>
            <p className="text-slate-600 max-w-sm text-sm font-medium">A pristine, modern environment designed around patient comfort and absolute clinical safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[620px]">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative bg-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 ${service.span}`}
              >
                {service.img && (
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" 
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="relative z-10 mt-auto pt-16">
                  <h3 className={`font-bold text-slate-900 tracking-tight mb-2 ${service.span.includes('col-span-2') ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{service.title}</h3>
                  <p className="text-slate-600 text-sm font-medium">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AUTHORITY FLEX: REVIEWS TICKER --- */}
      <section className="w-full bg-[#0A192F] text-white py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">Patient Trust</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">The Highest Rated <br/><span className="text-slate-400">In West Delhi.</span></h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter">
              626<span className="text-blue-500">+</span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Verified 5-Star Reviews</span>
          </div>
        </div>

        {/* Infinite Scrolling Track */}
        <div className="relative w-full flex overflow-hidden py-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 w-max px-6"
          >
            {scrollingReviews.map((review, i) => (
              <div key={i} className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 p-8 rounded-3xl shrink-0 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-sm block">{review.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Google Patient</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CLEAN PROFESSIONAL FOOTER --- */}
      <footer className="w-full bg-white text-slate-900 py-16 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h3 className="text-2xl font-extrabold text-[#0A192F] mb-4">M.S. Dental World</h3>
            <p className="text-slate-500 text-sm max-w-sm mb-6">D2/191, Jeevan Park, Pankha Rd, Janakpuri, New Delhi - 110059</p>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-600" /> +91 98116 68657</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <a href="tel:+919811668657" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all mb-4">
              Call Clinic Now
            </a>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Prototype Engineered by Tapecut Studios
            </span>
          </div>
        </div>
      </footer>

    </main>
  );
}