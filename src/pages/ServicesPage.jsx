// import React, { useEffect, useRef, useLayoutEffect } from "react";
// import { Link } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// gsap.registerPlugin(ScrollTrigger);

// const SplitText = ({ text, className }) => {
//   return (
//     <span className={`inline-block overflow-hidden ${className}`}>
//       {text.split("").map((char, i) => (
//         <span
//           key={i}
//           className="reveal-char inline-block translate-y-[120%] rotate-10 opacity-0"
//           style={{ paddingRight: char === " " ? "0.2em" : "0" }}
//         >
//           {char}
//         </span>
//       ))}
//     </span>
//   );
// };

// export default function ServicesPage() {
//   const wrapperRef = useRef(null);

//   useLayoutEffect(() => {
//     if (!wrapperRef.current) return;

//     // Lenis Smooth Scroll
//     const lenis = new Lenis({
//       duration: 1.4,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       orientation: "vertical",
//       gestureOrientation: "vertical",
//       smoothWheel: true,
//     });
//     lenis.on("scroll", ScrollTrigger.update);
//     const gsapLenisRaf = (time) => lenis.raf(time * 1000);
//     gsap.ticker.add(gsapLenisRaf);
//     gsap.ticker.lagSmoothing(0);

//     // Hero Animation
//     const tlHero = gsap.timeline();
//     tlHero
//       .to(
//         ".reveal-char",
//         {
//           y: "0%",
//           rotate: 0,
//           opacity: 1,
//           duration: 1.4,
//           stagger: 0.025,
//           ease: "power4.out",
//         },
//         0.2,
//       )
//       .fromTo(
//         ".hero-fade",
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         1,
//       );

//     // Image Reveals
//     gsap.utils.toArray(".reveal-img").forEach((card) => {
//       gsap.fromTo(
//         card,
//         { clipPath: "inset(100% 0 0 0)", scale: 1.05 },
//         {
//           clipPath: "inset(0% 0 0 0)",
//           scale: 1,
//           duration: 1.5,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 90%",
//             toggleActions: "play none none none",
//           },
//         },
//       );
//     });

//     // Glass Card Animations
//     gsap.utils.toArray(".glass-card").forEach((card) => {
//       gsap.fromTo(
//         card,
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//         },
//       );
//     });

//     return () => {
//       gsap.ticker.remove(gsapLenisRaf);
//       lenis.destroy();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div ref={wrapperRef} style={{ paddingTop: "100px" }}>
//       {/* --- HERO SECTION --- */}
//       <section
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "10rem 3rem 4rem",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* Ambient Glow Orb */}
//         <div
//           style={{
//             position: "absolute",
//             top: "20%",
//             right: "10%",
//             width: "40vw",
//             height: "40vw",
//             background:
//               "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
//             filter: "blur(80px)",
//             zIndex: 0,
//             pointerEvents: "none",
//           }}
//         />

//         <div
//           style={{
//             maxWidth: "120rem",
//             margin: "0 auto",
//             width: "100%",
//             zIndex: 1,
//             position: "relative",
//           }}
//         >
//           <div style={{ marginBottom: "3rem" }} className="hero-fade">
//             <div
//               style={{
//                 fontFamily: "Satoshi",
//                 fontWeight: 700,
//                 letterSpacing: "0.2em",
//                 textTransform: "uppercase",
//                 color: "var(--accent)",
//               }}
//             >
//               Our Expertise
//             </div>
//           </div>

//           <h1
//             style={{
//               fontSize: "clamp(4.5rem, 13vw, 16rem)",
//               lineHeight: 0.85,
//               letterSpacing: "-0.03em",
//             }}
//           >
//             <div>
//               <SplitText text="We Design" />
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="Digital" className="text-stroke" />
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="Excellence." />
//             </div>
//           </h1>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               marginTop: "6rem",
//             }}
//           >
//             <p
//               className="hero-fade"
//               style={{
//                 maxWidth: "450px",
//                 fontSize: "1.2rem",
//                 lineHeight: 1.6,
//                 color: "var(--fg-alt)",
//               }}
//             >
//               Our comprehensive suite of digital services covers everything from
//               strategy to execution, ensuring your brand stands out in a
//               competitive landscape.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- SERVICES GRID --- */}
//       <section
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <h2
//           style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "6rem" }}
//         >
//           What We <span className="text-stroke">Offer</span>
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "3rem",
//           }}
//         >
//           {[
//             {
//               title: "Web Design",
//               desc: "Beautiful, pixel-perfect interfaces that engage users",
//               icon: "🎨",
//             },
//             {
//               title: "Web Development",
//               desc: "Robust, scalable solutions built with modern tech",
//               icon: "⚡",
//             },
//             {
//               title: "Brand Identity",
//               desc: "Logo, colors, and visual language that resonate",
//               icon: "✨",
//             },
//             {
//               title: "UI/UX Design",
//               desc: "User-centered design that converts",
//               icon: "🎯",
//             },
//             {
//               title: "Motion Design",
//               desc: "Cinematic animations that captivate",
//               icon: "🎬",
//             },
//             {
//               title: "Consulting",
//               desc: "Strategic guidance for digital transformation",
//               icon: "💡",
//             },
//             {
//               title: "3D & WebGL",
//               desc: "Immersive interactive experiences with Three.js",
//               icon: "🌐",
//             },
//             {
//               title: "Strategy & Discovery",
//               desc: "Research-driven digital roadmaps for success",
//               icon: "🧭",
//             },
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="glass-panel glass-card hover-trigger"
//               style={{
//                 padding: "3rem",
//                 position: "relative",
//                 minHeight: "300px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
//                 {service.icon}
//               </div>
//               <h3
//                 style={{
//                   fontSize: "1.8rem",
//                   marginBottom: "1rem",
//                   fontFamily: "'Clash Display', sans-serif",
//                 }}
//               >
//                 {service.title}
//               </h3>
//               <p
//                 style={{
//                   color: "var(--fg-alt)",
//                   fontSize: "1rem",
//                   lineHeight: 1.6,
//                 }}
//               >
//                 {service.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- PROCESS SECTION --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "clamp(3rem, 6vw, 6rem)",
//               marginBottom: "8rem",
//               textAlign: "center",
//             }}
//           >
//             Our <span className="text-stroke">Process</span>
//           </h2>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//               gap: "2rem",
//             }}
//           >
//             {[
//               {
//                 num: "01",
//                 title: "Discovery",
//                 desc: "Understanding your goals",
//               },
//               {
//                 num: "02",
//                 title: "Strategy",
//                 desc: "Crafting the perfect approach",
//               },
//               {
//                 num: "03",
//                 title: "Design",
//                 desc: "Creating beautiful solutions",
//               },
//               { num: "04", title: "Launch", desc: "Going live with impact" },
//             ].map((step, i) => (
//               <div
//                 key={i}
//                 className="glass-panel glass-card hover-trigger"
//                 style={{ padding: "2.5rem", textAlign: "center" }}
//               >
//                 <div
//                   style={{
//                     fontSize: "3rem",
//                     color: "var(--accent)",
//                     fontWeight: 700,
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   {step.num}
//                 </div>
//                 <h3
//                   style={{
//                     fontSize: "1.5rem",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {step.title}
//                 </h3>
//                 <p style={{ color: "var(--fg-alt)" }}>{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CTA SECTION --- */}
//       <section
//         style={{
//           padding: "15rem 3rem",
//           textAlign: "center",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: "-50%",
//             right: "-20%",
//             width: "80vw",
//             height: "80vw",
//             background:
//               "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
//             filter: "blur(100px)",
//             zIndex: 0,
//           }}
//         />

//         <div
//           style={{
//             maxWidth: "800px",
//             margin: "0 auto",
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "Satoshi",
//               color: "var(--accent)",
//               textTransform: "uppercase",
//               letterSpacing: "0.2em",
//               fontWeight: 700,
//               marginBottom: "2rem",
//             }}
//           >
//             Ready to start?
//           </p>
//           <h2
//             style={{
//               fontSize: "clamp(2rem, 8vw, 5rem)",
//               lineHeight: 0.9,
//               marginBottom: "2rem",
//             }}
//           >
//             Let's bring your vision to life
//           </h2>
//           <button
//             className="magnetic-btn hover-trigger"
//             style={{
//               display: "inline-flex",
//               padding: "1rem 2.5rem",
//               borderRadius: "100px",
//               background: "var(--fg)",
//               color: "var(--bg)",
//               fontWeight: 700,
//               letterSpacing: "0.05em",
//               textTransform: "uppercase",
//               fontSize: "0.85rem",
//             }}
//           >
//             Start Project
//           </button>
//         </div>
//       </section>

//       {/* --- DEEP DIVE: SERVICE DETAILS --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "6rem" }}
//           >
//             Let's Explore Each <span className="text-stroke">Service</span>
//           </h2>

//           {[
//             {
//               title: "🎨 Web Design & UX",
//               desc: "Beautiful interfaces backed by user research",
//               details:
//                 "Our design process starts with understanding your users, not just your brand. We conduct extensive research, create detailed wireframes, and validate designs through user testing.",
//               image:
//                 "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200",
//               benefits: [
//                 "User-centered design",
//                 "Accessibility compliance",
//                 "Design systems",
//                 "Component libraries",
//               ],
//             },
//             {
//               title: "⚡ Web Development",
//               desc: "Scalable, high-performance applications",
//               details:
//                 "We build with the latest technologies and best practices for performance, security, and maintainability. Every line of code is optimized for speed and scalability.",
//               image:
//                 "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
//               benefits: [
//                 "React & Next.js",
//                 "Performance optimization",
//                 "Security hardening",
//                 "SEO optimization",
//               ],
//             },
//             {
//               title: "✨ Brand Identity",
//               desc: "Cohesive visual systems that resonate",
//               details:
//                 "From logo design to comprehensive brand guidelines, we create visual identities that communicate your values and resonate with your target audience.",
//               image:
//                 "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
//               benefits: [
//                 "Logo design",
//                 "Color theory",
//                 "Typography systems",
//                 "Brand guidelines",
//               ],
//             },
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="stagger-card"
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//                 gap: "4rem",
//                 alignItems: "center",
//                 marginBottom: i === 2 ? "0" : "8rem",
//                 flexDirection: i % 2 === 1 ? "row-reverse" : "row",
//               }}
//             >
//               <div>
//                 <h3
//                   style={{
//                     fontSize: "2.5rem",
//                     marginBottom: "1.5rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {service.title}
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: "1.1rem",
//                     color: "var(--fg-alt)",
//                     lineHeight: 1.8,
//                     marginBottom: "2rem",
//                   }}
//                 >
//                   {service.details}
//                 </p>
//                 <div style={{ marginBottom: "0" }}>
//                   {service.benefits.map((benefit, idx) => (
//                     <p
//                       key={idx}
//                       style={{
//                         color: "var(--accent)",
//                         fontSize: "0.95rem",
//                         fontWeight: 600,
//                         marginBottom: "0.8rem",
//                       }}
//                     >
//                       ✓ {benefit}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//               <div
//                 className="reveal-img"
//                 style={{
//                   borderRadius: "1.5rem",
//                   overflow: "hidden",
//                   height: "400px",
//                 }}
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- TESTIMONIALS --- */}
//       <section
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <h2
//           style={{
//             fontSize: "clamp(3rem, 6vw, 6rem)",
//             marginBottom: "6rem",
//             textAlign: "center",
//           }}
//         >
//           What Our Clients <span className="text-stroke">Say</span>
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "2rem",
//           }}
//         >
//           {[
//             {
//               quote:
//                 "The services transformed our digital presence. Professional, thorough, and incredibly effective.",
//               name: "Sarah Chen",
//               role: "CEO TechFlow",
//             },
//             {
//               quote:
//                 "Best investment we've made. The team understood our vision immediately and delivered excellence.",
//               name: "Marcus Rodriguez",
//               role: "Founder Aurora",
//             },
//             {
//               quote:
//                 "Outstanding quality and professionalism. Highly recommended for any digital project.",
//               name: "Emma Johnson",
//               role: "Director Luna",
//             },
//           ].map((testimonial, i) => (
//             <div
//               key={i}
//               className="stagger-card glass-panel glass-card"
//               style={{ padding: "3rem" }}
//             >
//               <p
//                 style={{
//                   fontSize: "1.2rem",
//                   lineHeight: 1.8,
//                   marginBottom: "2rem",
//                   color: "var(--fg)",
//                 }}
//               >
//                 "{testimonial.quote}"
//               </p>
//               <p style={{ fontWeight: 700 }}>{testimonial.name}</p>
//               <p style={{ color: "var(--accent)", fontSize: "0.9rem" }}>
//                 {testimonial.role}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- FAQ --- */}
//       <section
//         style={{
//           padding: "12rem 3rem",
//           background: "var(--bg-alt)",
//           maxWidth: "120rem",
//           margin: "0 auto",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "clamp(3rem, 6vw, 6rem)",
//             marginBottom: "6rem",
//             textAlign: "center",
//           }}
//         >
//           Service <span className="text-stroke">FAQs</span>
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "2rem",
//           }}
//         >
//           {[
//             {
//               q: "Can you work with our existing team?",
//               a: "Absolutely! We integrate seamlessly with your team and follow your existing workflows and standards.",
//             },
//             {
//               q: "What's included in each service?",
//               a: "Each service includes multiple revision rounds, ongoing support, and documentation for future reference.",
//             },
//             {
//               q: "How do you handle rush projects?",
//               a: "We accommodate rush timelines with dedicated resources and adjusted scope to maintain quality.",
//             },
//             {
//               q: "Do you provide maintenance support?",
//               a: "Yes, we offer flexible support packages for ongoing optimization and updates.",
//             },
//           ].map((faq, i) => (
//             <div
//               key={i}
//               className="stagger-card glass-panel glass-card"
//               style={{ padding: "2.5rem" }}
//             >
//               <h3
//                 style={{
//                   fontSize: "1.1rem",
//                   marginBottom: "1rem",
//                   fontFamily: "'Clash Display', sans-serif",
//                 }}
//               >
//                 {faq.q}
//               </h3>
//               <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>{faq.a}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- PAGE NAVIGATION --- */}
//       <section
//         style={{
//           padding: "6rem 3rem",
//           background: "var(--bg-alt)",
//           textAlign: "center",
//         }}
//       >
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <p
//             style={{
//               color: "var(--accent)",
//               fontSize: "0.9rem",
//               fontWeight: 700,
//               textTransform: "uppercase",
//               letterSpacing: "0.2em",
//               marginBottom: "2rem",
//             }}
//           >
//             Explore More
//           </p>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//               gap: "2rem",
//             }}
//           >
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <button
//                 style={{
//                   width: "100%",
//                   padding: "1.2rem 2rem",
//                   borderRadius: "100px",
//                   background: "var(--fg)",
//                   color: "var(--bg)",
//                   fontWeight: 700,
//                   border: "none",
//                   cursor: "pointer",
//                   fontSize: "1rem",
//                   transition: "all 0.3s",
//                 }}
//               >
//                 Home
//               </button>
//             </Link>
//             <Link to="/portfolio" style={{ textDecoration: "none" }}>
//               <button
//                 style={{
//                   width: "100%",
//                   padding: "1.2rem 2rem",
//                   borderRadius: "100px",
//                   background: "var(--fg)",
//                   color: "var(--bg)",
//                   fontWeight: 700,
//                   border: "none",
//                   cursor: "pointer",
//                   fontSize: "1rem",
//                   transition: "all 0.3s",
//                 }}
//               >
//                 Portfolio
//               </button>
//             </Link>
//             <Link to="/studio" style={{ textDecoration: "none" }}>
//               <button
//                 style={{
//                   width: "100%",
//                   padding: "1.2rem 2rem",
//                   borderRadius: "100px",
//                   background: "var(--fg)",
//                   color: "var(--bg)",
//                   fontWeight: 700,
//                   border: "none",
//                   cursor: "pointer",
//                   fontSize: "1rem",
//                   transition: "all 0.3s",
//                 }}
//               >
//                 Studio
//               </button>
//             </Link>
//             <Link to="/contact" style={{ textDecoration: "none" }}>
//               <button
//                 style={{
//                   width: "100%",
//                   padding: "1.2rem 2rem",
//                   borderRadius: "100px",
//                   background: "var(--accent)",
//                   color: "white",
//                   fontWeight: 700,
//                   border: "none",
//                   cursor: "pointer",
//                   fontSize: "1rem",
//                   transition: "all 0.3s",
//                 }}
//               >
//                 Contact
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* --- FINAL CTA --- */}
//       <section
//         style={{
//           padding: "15rem 3rem",
//           textAlign: "center",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             bottom: "-30%",
//             left: "-10%",
//             width: "80vw",
//             height: "80vw",
//             background:
//               "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
//             filter: "blur(100px)",
//             zIndex: 0,
//           }}
//         />

//         <div
//           style={{
//             maxWidth: "900px",
//             margin: "0 auto",
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "clamp(2rem, 8vw, 5rem)",
//               lineHeight: 0.9,
//               marginBottom: "2rem",
//             }}
//           >
//             Ready to Take Your Services to the{" "}
//             <span className="text-stroke">Next Level</span>?
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "var(--fg-alt)",
//               marginBottom: "3rem",
//               lineHeight: 1.8,
//             }}
//           >
//             Let's discuss which services are right for your business and how we
//             can help you achieve your goals.
//           </p>
//           <button
//             className="magnetic-btn hover-trigger"
//             style={{
//               display: "inline-flex",
//               padding: "1rem 2.5rem",
//               borderRadius: "100px",
//               background: "var(--fg)",
//               color: "var(--bg)",
//               fontWeight: 700,
//               letterSpacing: "0.05em",
//               textTransform: "uppercase",
//               fontSize: "0.85rem",
//             }}
//           >
//             Schedule Discovery Call
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  Palette,
  Zap,
  Sparkles,
  Target,
  Clapperboard,
  Lightbulb,
  Box,
  Compass,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ text, className }) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="reveal-char inline-block translate-y-[120%] rotate-10 opacity-0"
          style={{ paddingRight: char === " " ? "0.2em" : "0" }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default function ServicesPage() {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const gsapLenisRaf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(gsapLenisRaf);
    gsap.ticker.lagSmoothing(0);

    // Hero Animation
    const tlHero = gsap.timeline();
    tlHero
      .to(
        ".reveal-char",
        {
          y: "0%",
          rotate: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.025,
          ease: "power4.out",
        },
        0.2,
      )
      .fromTo(
        ".hero-fade",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        },
        1,
      );

    // Image Reveals
    gsap.utils.toArray(".reveal-img").forEach((card) => {
      gsap.fromTo(
        card,
        { clipPath: "inset(100% 0 0 0)", scale: 1.05 },
        {
          clipPath: "inset(0% 0 0 0)",
          scale: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Glass Card Animations
    gsap.utils.toArray(".glass-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => {
      gsap.ticker.remove(gsapLenisRaf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ paddingTop: "100px" }}>
      {/* --- MOBILE RESPONSIVE OVERRIDES --- */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            /* Fixes the giant gap by removing the 100vh minimum height on mobile */
            min-height: auto !important; 
            padding: 8rem 1.5rem 4rem !important; 
            justify-content: flex-start !important;
          }
          .hero-bottom-flex {
            margin-top: 3rem !important; 
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .services-section {
            padding: 2rem 1.5rem !important; 
          }
          .responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          /* Added back the general section padding for the rest of the page */
          .section-padding { 
            padding: 6rem 1.5rem !important; 
          }

          /* Deep Dive Alternating Flex Fix */
          .deep-dive-card {
            flex-direction: column !important; /* Forces stacking instead of side-by-side */
            gap: 2rem !important;
            margin-bottom: 4rem !important;
          }
          .deep-dive-img {
            height: 300px !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section
        className="hero-section"
        style={{
          minHeight:
            "100vh" /* This stays for desktop, overridden by mobile CSS above */,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10rem 3rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Glow Orb */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "40vw",
            height: "40vw",
            background:
              "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
            filter: "blur(80px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "120rem",
            margin: "0 auto",
            width: "100%",
            zIndex: 1,
            position: "relative",
          }}
        >
          <div style={{ marginBottom: "3rem" }} className="hero-fade">
            <div
              style={{
                fontFamily: "Satoshi",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Our Expertise
            </div>
          </div>

          <h1
            style={{
              fontSize: "clamp(3.5rem, 13vw, 16rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.03em",
            }}
          >
            <div>
              <SplitText text="We Design" />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="Digital" className="text-stroke" />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="Excellence." />
            </div>
          </h1>

          <div
            className="hero-bottom-flex"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: "6rem",
            }}
          >
            <p
              className="hero-fade"
              style={{
                maxWidth: "450px",
                fontSize: "1.2rem",
                lineHeight: 1.6,
                color: "var(--fg-alt)",
              }}
            >
              Our comprehensive suite of digital services covers everything from
              strategy to execution, ensuring your brand stands out in a
              competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section
        className="services-section section-padding"
        style={{ padding: "1rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <h2
          style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "6rem" }}
        >
          What We <span className="text-stroke">Offer</span>
        </h2>

        <div
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}
        >
          {[
            {
              title: "Web Design",
              desc: "Beautiful, pixel-perfect interfaces that engage users",
              icon: <Palette size={48} strokeWidth={1.5} />,
              color: "#7c3aed", // Royal Purple
            },
            {
              title: "Web Development",
              desc: "Robust, scalable solutions built with modern tech",
              icon: <Zap size={48} strokeWidth={1.5} />,
              color: "#0284c7", // Ocean Blue
            },
            {
              title: "Brand Identity",
              desc: "Logo, colors, and visual language that resonate",
              icon: <Sparkles size={48} strokeWidth={1.5} />,
              color: "#db2777", // Hot Pink
            },
            {
              title: "UI/UX Design",
              desc: "User-centered design that converts",
              icon: <Target size={48} strokeWidth={1.5} />,
              color: "#e11d48", // Ruby Red
            },
            {
              title: "Motion Design",
              desc: "Cinematic animations that captivate",
              icon: <Clapperboard size={48} strokeWidth={1.5} />,
              color: "#ea580c", // Deep Orange
            },
            {
              title: "Consulting",
              desc: "Strategic guidance for digital transformation",
              icon: <Lightbulb size={48} strokeWidth={1.5} />,
              color: "#16a34a", // Forest Green
            },
            {
              title: "3D & WebGL",
              desc: "Immersive interactive experiences with Three.js",
              icon: <Box size={48} strokeWidth={1.5} />,
              color: "#4f46e5", // Indigo
            },
            {
              title: "Strategy & Discovery",
              desc: "Research-driven digital roadmaps for success",
              icon: <Compass size={48} strokeWidth={1.5} />,
              color: "#0f766e", // Deep Teal
            },
          ].map((service, i) => (
            <div
              key={i}
              className="hover-trigger"
              style={{
                padding: "3rem",
                position: "relative",
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: service.color,
                borderRadius: "1.5rem",
                color: "#ffffff",
                boxShadow: `0 10px 30px -10px ${service.color}60`,
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                  fontFamily: "'Clash Display', sans-serif",
                  color: "#ffffff",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              marginBottom: "8rem",
              textAlign: "center",
            }}
          >
            Our <span className="text-stroke">Process</span>
          </h2>

          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "Understanding your goals",
              },
              {
                num: "02",
                title: "Strategy",
                desc: "Crafting the perfect approach",
              },
              {
                num: "03",
                title: "Design",
                desc: "Creating beautiful solutions",
              },
              { num: "04", title: "Launch", desc: "Going live with impact" },
            ].map((step, i) => (
              <div
                key={i}
                className="glass-panel glass-card hover-trigger"
                style={{ padding: "2.5rem", textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    color: "var(--accent)",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "var(--fg-alt)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section
        className="cta-section"
        style={{
          padding: "15rem 3rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "80vw",
            height: "80vw",
            background:
              "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily: "Satoshi",
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 700,
              marginBottom: "2rem",
            }}
          >
            Ready to start?
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 8vw, 5rem)",
              lineHeight: 0.9,
              marginBottom: "2rem",
            }}
          >
            Let's bring your vision to life
          </h2>
          <button
            className="magnetic-btn hover-trigger"
            style={{
              display: "inline-flex",
              padding: "1rem 2.5rem",
              borderRadius: "100px",
              background: "var(--fg)",
              color: "var(--bg)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start Project
          </button>
        </div>
      </section>

      {/* --- DEEP DIVE: SERVICE DETAILS --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "6rem" }}
          >
            Let's Explore Each <span className="text-stroke">Service</span>
          </h2>

          {[
            {
              title: "🎨 Web Design & UX",
              desc: "Beautiful interfaces backed by user research",
              details:
                "Our design process starts with understanding your users, not just your brand. We conduct extensive research, create detailed wireframes, and validate designs through user testing.",
              image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200",
              benefits: [
                "User-centered design",
                "Accessibility compliance",
                "Design systems",
                "Component libraries",
              ],
            },
            {
              title: "⚡ Web Development",
              desc: "Scalable, high-performance applications",
              details:
                "We build with the latest technologies and best practices for performance, security, and maintainability. Every line of code is optimized for speed and scalability.",
              image:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
              benefits: [
                "React & Next.js",
                "Performance optimization",
                "Security hardening",
                "SEO optimization",
              ],
            },
            {
              title: "✨ Brand Identity",
              desc: "Cohesive visual systems that resonate",
              details:
                "From logo design to comprehensive brand guidelines, we create visual identities that communicate your values and resonate with your target audience.",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
              benefits: [
                "Logo design",
                "Color theory",
                "Typography systems",
                "Brand guidelines",
              ],
            },
          ].map((service, i) => (
            <div
              key={i}
              className="stagger-card deep-dive-card"
              style={{
                display: "flex",
                flexDirection: i % 2 === 1 ? "row-reverse" : "row",
                gap: "4rem",
                alignItems: "center",
                marginBottom: i === 2 ? "0" : "8rem",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: "1.5rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--fg-alt)",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  {service.details}
                </p>
                <div style={{ marginBottom: "0" }}>
                  {service.benefits.map((benefit, idx) => (
                    <p
                      key={idx}
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        marginBottom: "0.8rem",
                      }}
                    >
                      ✓ {benefit}
                    </p>
                  ))}
                </div>
              </div>
              <div
                className="reveal-img deep-dive-img"
                style={{
                  flex: 1,
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  height: "400px",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 6rem)",
            marginBottom: "6rem",
            textAlign: "center",
          }}
        >
          What Our Clients <span className="text-stroke">Say</span>
        </h2>

        <div
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              quote:
                "The services transformed our digital presence. Professional, thorough, and incredibly effective.",
              name: "Sarah Chen",
              role: "CEO TechFlow",
            },
            {
              quote:
                "Best investment we've made. The team understood our vision immediately and delivered excellence.",
              name: "Marcus Rodriguez",
              role: "Founder Aurora",
            },
            {
              quote:
                "Outstanding quality and professionalism. Highly recommended for any digital project.",
              name: "Emma Johnson",
              role: "Director Luna",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="stagger-card glass-panel glass-card"
              style={{ padding: "3rem" }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  color: "var(--fg)",
                }}
              >
                "{testimonial.quote}"
              </p>
              <p style={{ fontWeight: 700 }}>{testimonial.name}</p>
              <p style={{ color: "var(--accent)", fontSize: "0.9rem" }}>
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section
        className="section-padding"
        style={{
          padding: "12rem 3rem",
          background: "var(--bg-alt)",
          maxWidth: "120rem",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 6rem)",
            marginBottom: "6rem",
            textAlign: "center",
          }}
        >
          Service <span className="text-stroke">FAQs</span>
        </h2>

        <div
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              q: "Can you work with our existing team?",
              a: "Absolutely! We integrate seamlessly with your team and follow your existing workflows and standards.",
            },
            {
              q: "What's included in each service?",
              a: "Each service includes multiple revision rounds, ongoing support, and documentation for future reference.",
            },
            {
              q: "How do you handle rush projects?",
              a: "We accommodate rush timelines with dedicated resources and adjusted scope to maintain quality.",
            },
            {
              q: "Do you provide maintenance support?",
              a: "Yes, we offer flexible support packages for ongoing optimization and updates.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="stagger-card glass-panel glass-card"
              style={{ padding: "2.5rem" }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                {faq.q}
              </h3>
              <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PAGE NAVIGATION --- */}
      <section
        className="section-padding"
        style={{
          padding: "6rem 3rem",
          background: "var(--bg-alt)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <p
            style={{
              color: "var(--accent)",
              fontSize: "0.9rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "2rem",
            }}
          >
            Explore More
          </p>
          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "100%",
                  padding: "1.2rem 2rem",
                  borderRadius: "100px",
                  background: "var(--fg)",
                  color: "var(--bg)",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "all 0.3s",
                }}
              >
                Home
              </button>
            </Link>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "100%",
                  padding: "1.2rem 2rem",
                  borderRadius: "100px",
                  background: "var(--fg)",
                  color: "var(--bg)",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "all 0.3s",
                }}
              >
                Portfolio
              </button>
            </Link>
            <Link to="/studio" style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "100%",
                  padding: "1.2rem 2rem",
                  borderRadius: "100px",
                  background: "var(--fg)",
                  color: "var(--bg)",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "all 0.3s",
                }}
              >
                Studio
              </button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "100%",
                  padding: "1.2rem 2rem",
                  borderRadius: "100px",
                  background: "var(--accent)",
                  color: "white",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "all 0.3s",
                }}
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section
        className="cta-section"
        style={{
          padding: "15rem 3rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "80vw",
            height: "80vw",
            background:
              "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 8vw, 5rem)",
              lineHeight: 0.9,
              marginBottom: "2rem",
            }}
          >
            Ready to Take Your Services to the{" "}
            <span className="text-stroke">Next Level</span>?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--fg-alt)",
              marginBottom: "3rem",
              lineHeight: 1.8,
            }}
          >
            Let's discuss which services are right for your business and how we
            can help you achieve your goals.
          </p>
          <button
            className="magnetic-btn hover-trigger"
            style={{
              display: "inline-flex",
              padding: "1rem 2.5rem",
              borderRadius: "100px",
              background: "var(--fg)",
              color: "var(--bg)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Schedule Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
}
