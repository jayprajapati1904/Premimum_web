// import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
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

// export default function PortfolioPage() {
//   const wrapperRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const update = () => setIsMobile(window.innerWidth <= 720);
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

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

//     // Portfolio Item Stagger
//     gsap.utils.toArray(".portfolio-item").forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         { opacity: 0, y: 40, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           delay: 0.1 * index,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: item,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//         },
//       );
//     });

//     // Image Clip Reveals
//     gsap.utils.toArray(".portfolio-img").forEach((img) => {
//       gsap.fromTo(
//         img,
//         { clipPath: "inset(100% 0 0 0)" },
//         {
//           clipPath: "inset(0% 0 0 0)",
//           duration: 1.8,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: img,
//             start: "top 75%",
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
//               Case Studies
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
//               <SplitText text="Work We're" />
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="Proud" className="text-stroke" />
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="To Show." />
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
//               Our portfolio showcases transformative digital projects that have
//               helped brands grow, engage, and succeed in their markets.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- PORTFOLIO GRID --- */}
//       <section
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
//             gap: "4rem",
//             gridAutoRows: "auto",
//           }}
//         >
//           {[
//             {
//               title: "TechFlow Digital",
//               category: "Web Platform",
//               span: "1",
//               color: "#ff6b6b",
//             },
//             {
//               title: "Aurora Creative",
//               category: "Brand Identity",
//               span: "1",
//               color: "#4ecdc4",
//             },
//             {
//               title: "Luna Retail Redesign",
//               category: "E-Commerce",
//               span: "2",
//               color: "#ffd93d",
//             },
//             {
//               title: "Velocity Studio",
//               category: "Motion Design",
//               span: "1",
//               color: "#a8edea",
//             },
//             {
//               title: "Nexus Analytics",
//               category: "SaaS Product",
//               span: "1",
//               color: "#ff6b6b",
//             },
//           ].map((project, i) => (
//             <div
//               key={i}
//               className="portfolio-item glass-panel glass-card hover-trigger"
//               style={{
//                 gridColumn: `span ${isMobile ? 1 : project.span}`,
//                 minHeight: Number(project.span) === 2 ? "500px" : "350px",
//                 padding: "0",
//                 overflow: "hidden",
//                 position: "relative",
//                 cursor: "pointer",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-end",
//               }}
//             >
//               {/* Gradient Background */}
//               <div
//                 className="portfolio-img"
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
//                   zIndex: 1,
//                 }}
//               />

//               {/* Pattern Overlay */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//                   zIndex: 2,
//                 }}
//               />

//               {/* Content */}
//               <div style={{ padding: "3rem", position: "relative", zIndex: 3 }}>
//                 <p
//                   style={{
//                     color: "var(--accent)",
//                     fontSize: "0.85rem",
//                     letterSpacing: "0.1em",
//                     textTransform: "uppercase",
//                     marginBottom: "1rem",
//                     fontWeight: 600,
//                   }}
//                 >
//                   {project.category}
//                 </p>
//                 <h3
//                   style={{
//                     fontSize: "2rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                     marginBottom: "0",
//                   }}
//                 >
//                   {project.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- STATS SECTION --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "clamp(3rem, 6vw, 6rem)",
//               marginBottom: "8rem",
//               textAlign: "center",
//             }}
//           >
//             By The <span className="text-stroke">Numbers</span>
//           </h2>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//               gap: "3rem",
//             }}
//           >
//             {[
//               { stat: "150+", label: "Projects Completed" },
//               { stat: "500M+", label: "Users Impacted" },
//               { stat: "98%", label: "Client Satisfaction" },
//               { stat: "12+", label: "Years Experience" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="glass-panel glass-card hover-trigger"
//                 style={{ padding: "3rem", textAlign: "center" }}
//               >
//                 <div
//                   style={{
//                     fontSize: "3.5rem",
//                     fontWeight: 900,
//                     color: "var(--accent)",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   {item.stat}
//                 </div>
//                 <p style={{ color: "var(--fg-alt)", fontSize: "1.1rem" }}>
//                   {item.label}
//                 </p>
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
//             left: "-20%",
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
//             Your Story Awaits
//           </p>
//           <h2
//             style={{
//               fontSize: "clamp(2rem, 8vw, 5rem)",
//               lineHeight: 0.9,
//               marginBottom: "2rem",
//             }}
//           >
//             Let's create something extraordinary together
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
//             Start Our Next Project
//           </button>
//         </div>
//       </section>

//       {/* --- DETAILED CASE STUDIES --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "1rem" }}
//           >
//             Deep Dive Into Our <span className="text-stroke">Case Studies</span>
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "var(--fg-alt)",
//               marginBottom: "6rem",
//             }}
//           >
//             See how we've transformed businesses across industries
//           </p>

//           {[
//             {
//               title: "TechFlow Platform Redesign",
//               industry: "SaaS / Technology",
//               image:
//                 "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
//               challenge:
//                 "Complex enterprise platform with poor user experience causing 40% churn rate",
//               solution:
//                 "Complete UX overhaul with user research, intuitive workflows, and modern design system",
//               results: { churn: "-40%", engagement: "+65%", nps: "72" },
//               tags: ["UX Design", "Development", "User Research"],
//             },
//             {
//               title: "Aurora E-commerce Platform",
//               industry: "E-commerce / Retail",
//               image:
//                 "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
//               challenge:
//                 "Outdated e-commerce site with 3.2% conversion rate and poor mobile experience",
//               solution:
//                 "Complete platform rebuild with performance optimization, modern checkout, mobile-first design",
//               results: { conversion: "+156%", mobile: "+89%", speed: "-62%" },
//               tags: ["Web Development", "E-commerce", "Performance"],
//             },
//             {
//               title: "Luna Branding & Digital Ecosystem",
//               industry: "Luxury / Lifestyle",
//               image:
//                 "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200",
//               challenge:
//                 "Luxury brand needed cohesive identity across web, app, and print materials",
//               solution:
//                 "Complete brand identity system with design guidelines applied across all digital platforms",
//               results: {
//                 brand: "Cohesion",
//                 awareness: "+140%",
//                 leads: "+210%",
//               },
//               tags: ["Branding", "Design Systems", "Digital Strategy"],
//             },
//           ].map((study, i) => (
//             <div
//               key={i}
//               className="stagger-card"
//               style={{ marginBottom: i === 2 ? "0" : "8rem" }}
//             >
//               <div
//                 style={{
//                   position: "relative",
//                   marginBottom: "4rem",
//                   borderRadius: "2rem",
//                   overflow: "hidden",
//                   height: "500px",
//                 }}
//               >
//                 <img
//                   src={study.image}
//                   alt={study.title}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//                 <div
//                   style={{ position: "absolute", top: "2rem", left: "2rem" }}
//                 >
//                   <span
//                     style={{
//                       fontSize: "0.8rem",
//                       fontWeight: 700,
//                       textTransform: "uppercase",
//                       letterSpacing: "0.2em",
//                       color: "var(--accent)",
//                     }}
//                   >
//                     {study.industry}
//                   </span>
//                 </div>
//               </div>

//               <h3
//                 style={{
//                   fontSize: "2.5rem",
//                   marginBottom: "2rem",
//                   fontFamily: "'Clash Display', sans-serif",
//                 }}
//               >
//                 {study.title}
//               </h3>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//                   gap: "3rem",
//                   marginBottom: "3rem",
//                 }}
//               >
//                 <div>
//                   <h4
//                     style={{
//                       color: "var(--accent)",
//                       fontSize: "0.9rem",
//                       fontWeight: 700,
//                       textTransform: "uppercase",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     Challenge
//                   </h4>
//                   <p style={{ lineHeight: 1.8, color: "var(--fg-alt)" }}>
//                     {study.challenge}
//                   </p>
//                 </div>
//                 <div>
//                   <h4
//                     style={{
//                       color: "var(--accent)",
//                       fontSize: "0.9rem",
//                       fontWeight: 700,
//                       textTransform: "uppercase",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     Solution
//                   </h4>
//                   <p style={{ lineHeight: 1.8, color: "var(--fg-alt)" }}>
//                     {study.solution}
//                   </p>
//                 </div>
//               </div>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//                   gap: "2rem",
//                   padding: "2rem",
//                   background: "var(--bg)",
//                   borderRadius: "1rem",
//                   marginBottom: "3rem",
//                 }}
//               >
//                 {Object.entries(study.results).map(([key, value]) => (
//                   <div key={key} style={{ textAlign: "center" }}>
//                     <p
//                       style={{
//                         fontSize: "2.2rem",
//                         fontWeight: 700,
//                         color: "var(--accent)",
//                         marginBottom: "0.5rem",
//                       }}
//                     >
//                       {value}
//                     </p>
//                     <p
//                       style={{
//                         fontSize: "0.9rem",
//                         textTransform: "capitalize",
//                         color: "var(--fg-alt)",
//                       }}
//                     >
//                       {key}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//                 {study.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     style={{
//                       padding: "0.75rem 1.5rem",
//                       background: "var(--bg)",
//                       borderRadius: "100px",
//                       fontSize: "0.9rem",
//                       fontWeight: 600,
//                     }}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- CLIENT TESTIMONIALS FOR WORK --- */}
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
//           Clients Share Their <span className="text-stroke">Experience</span>
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
//                 "The team delivered beyond expectations. Our conversion rates increased dramatically and the process was seamless.",
//               name: "James Park",
//               company: "TechFlow",
//             },
//             {
//               quote:
//                 "Not just a redesign, but a complete transformation of our business. Exceptional attention to detail.",
//               name: "Victoria Chen",
//               company: "Aurora",
//             },
//             {
//               quote:
//                 "They understood our brand vision immediately and executed flawlessly. Highly professional team.",
//               name: "Alex Morgan",
//               company: "Luna",
//             },
//             {
//               quote:
//                 "Best decision we made for our digital transformation. ROI was evident within weeks.",
//               name: "Sophia Roberts",
//               company: "Velocity",
//             },
//           ].map((testimonial, i) => (
//             <div
//               key={i}
//               className="stagger-card glass-panel glass-card"
//               style={{ padding: "3rem" }}
//             >
//               <div style={{ marginBottom: "2rem" }}>
//                 {[...Array(5)].map((_, idx) => (
//                   <span
//                     key={idx}
//                     style={{ color: "var(--accent)", fontSize: "1.2rem" }}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   lineHeight: 1.8,
//                   marginBottom: "2rem",
//                   color: "var(--fg)",
//                   fontStyle: "italic",
//                 }}
//               >
//                 "{testimonial.quote}"
//               </p>
//               <p style={{ fontWeight: 700 }}>{testimonial.name}</p>
//               <p style={{ color: "var(--accent)", fontSize: "0.9rem" }}>
//                 {testimonial.company}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- INDUSTRIES SERVED --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "clamp(3rem, 6vw, 6rem)",
//               marginBottom: "1rem",
//               textAlign: "center",
//             }}
//           >
//             Industries We <span className="text-stroke">Serve</span>
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "var(--fg-alt)",
//               marginBottom: "6rem",
//               textAlign: "center",
//             }}
//           >
//             From startups to enterprises, across sectors and geographies
//           </p>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//               gap: "2rem",
//             }}
//           >
//             {[
//               "SaaS & Technology",
//               "E-commerce & Retail",
//               "Healthcare",
//               "Finance & Banking",
//               "Media & Publishing",
//               "Hospitality",
//               "Education",
//               "Manufacturing",
//             ].map((industry, i) => (
//               <div
//                 key={i}
//                 className="stagger-card glass-panel glass-card"
//                 style={{
//                   padding: "3rem",
//                   textAlign: "center",
//                   borderRadius: "1.5rem",
//                   border: "1px solid rgba(255,77,0,0.2)",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: "1.3rem",
//                     fontWeight: 700,
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {industry}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PROCESS BREAKDOWN --- */}
//       <section
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <h2
//           style={{
//             fontSize: "clamp(3rem, 6vw, 6rem)",
//             marginBottom: "1rem",
//             textAlign: "center",
//           }}
//         >
//           Our <span className="text-stroke">Process</span>
//         </h2>

//         <div style={{ position: "relative" }}>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//               gap: "3rem",
//               position: "relative",
//               zIndex: 1,
//             }}
//           >
//             {[
//               {
//                 step: "01",
//                 title: "Discovery",
//                 desc: "Research, interviews, analysis of your business and market",
//               },
//               {
//                 step: "02",
//                 title: "Strategy",
//                 desc: "Define goals, roadmap, and detailed project requirements",
//               },
//               {
//                 step: "03",
//                 title: "Design",
//                 desc: "Create prototypes, wireframes, and high-fidelity mockups",
//               },
//               {
//                 step: "04",
//                 title: "Development",
//                 desc: "Build with best practices, testing, and optimization",
//               },
//               {
//                 step: "05",
//                 title: "Launch",
//                 desc: "Deploy, monitor, and optimize for peak performance",
//               },
//               {
//                 step: "06",
//                 title: "Support",
//                 desc: "Ongoing updates, improvements, and client success",
//               },
//             ].map((proc, i) => (
//               <div
//                 key={i}
//                 className="stagger-card"
//                 style={{ textAlign: "center" }}
//               >
//                 <p
//                   style={{
//                     fontSize: "3rem",
//                     fontWeight: 700,
//                     color: "var(--accent)",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {proc.step}
//                 </p>
//                 <h3
//                   style={{
//                     fontSize: "1.3rem",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {proc.title}
//                 </h3>
//                 <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
//                   {proc.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
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
//             <Link to="/services" style={{ textDecoration: "none" }}>
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
//                 Services
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

//       {/* --- FINAL ENHANCED CTA --- */}
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
//             Ready to Create Your Next Success{" "}
//             <span className="text-stroke">Story</span>?
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "var(--fg-alt)",
//               marginBottom: "3rem",
//               lineHeight: 1.8,
//             }}
//           >
//             Let's explore how our portfolio expertise can elevate your brand and
//             drive measurable results.
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
//             Begin Your Project
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

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

export default function PortfolioPage() {
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 720);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

    // Portfolio Item Stagger
    gsap.utils.toArray(".portfolio-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.1 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Image Clip Reveals
    gsap.utils.toArray(".portfolio-img").forEach((img) => {
      gsap.fromTo(
        img,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: img,
            start: "top 75%",
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
            min-height: auto !important; /* Removes giant gap below hero */
            padding: 6rem 1.5rem 3rem !important;
            justify-content: flex-start !important;
          }
          .hero-bottom-flex {
            margin-top: 3rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          /* Overrides all the massive 12rem paddings */
          .section-padding {
            padding: 5rem 1.5rem !important;
          }
          .cta-section {
            padding: 8rem 1.5rem !important;
          }
          /* Standardizes grid columns on mobile */
          .responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          /* Portfolio specific tweaks */
          .portfolio-main-grid {
            gap: 2rem !important;
          }
          /* Case study specific tweaks */
          .case-study-margin {
            margin-bottom: 4rem !important; /* Reduces 8rem margin */
          }
          .case-study-img-wrapper {
            height: 300px !important;
            margin-bottom: 2rem !important;
          }
          .case-study-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1.5rem !important;
            margin-bottom: 2rem !important;
          }
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
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
              Case Studies
            </div>
          </div>

          <h1
            style={{
              fontSize: "clamp(4.5rem, 13vw, 16rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.03em",
            }}
          >
            <div>
              <SplitText text="Work We're" />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="Proud" className="text-stroke" />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="To Show." />
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
              Our portfolio showcases transformative digital projects that have
              helped brands grow, engage, and succeed in their markets.
            </p>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO GRID --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <div
          className="portfolio-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "4rem",
            gridAutoRows: "auto",
          }}
        >
          {[
            {
              title: "TechFlow Digital",
              category: "Web Platform",
              span: "1",
              color: "#ff6b6b",
            },
            {
              title: "Aurora Creative",
              category: "Brand Identity",
              span: "1",
              color: "#4ecdc4",
            },
            {
              title: "Luna Retail Redesign",
              category: "E-Commerce",
              span: "2",
              color: "#ffd93d",
            },
            {
              title: "Velocity Studio",
              category: "Motion Design",
              span: "1",
              color: "#a8edea",
            },
            {
              title: "Nexus Analytics",
              category: "SaaS Product",
              span: "1",
              color: "#ff6b6b",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="portfolio-item glass-panel glass-card hover-trigger"
              style={{
                gridColumn: `span ${isMobile ? 1 : project.span}`,
                minHeight:
                  Number(project.span) === 2 && !isMobile ? "500px" : "350px",
                padding: "0",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {/* Gradient Background */}
              <div
                className="portfolio-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                  zIndex: 1,
                }}
              />

              {/* Pattern Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  zIndex: 2,
                }}
              />

              {/* Content */}
              <div style={{ padding: "3rem", position: "relative", zIndex: 3 }}>
                <p
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {project.category}
                </p>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontFamily: "'Clash Display', sans-serif",
                    marginBottom: "0",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STATS SECTION --- */}
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
            By The <span className="text-stroke">Numbers</span>
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
              { stat: "150+", label: "Projects Completed" },
              { stat: "500M+", label: "Users Impacted" },
              { stat: "98%", label: "Client Satisfaction" },
              { stat: "12+", label: "Years Experience" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-panel glass-card hover-trigger"
                style={{ padding: "3rem", textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    color: "var(--accent)",
                    marginBottom: "1rem",
                  }}
                >
                  {item.stat}
                </div>
                <p style={{ color: "var(--fg-alt)", fontSize: "1.1rem" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAILED CASE STUDIES --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "1rem" }}
          >
            Deep Dive Into Our <span className="text-stroke">Case Studies</span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--fg-alt)",
              marginBottom: "6rem",
            }}
          >
            See how we've transformed businesses across industries
          </p>

          {[
            {
              title: "TechFlow Platform Redesign",
              industry: "SaaS / Technology",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
              challenge:
                "Complex enterprise platform with poor user experience causing 40% churn rate",
              solution:
                "Complete UX overhaul with user research, intuitive workflows, and modern design system",
              results: { churn: "-40%", engagement: "+65%", nps: "72" },
              tags: ["UX Design", "Development", "User Research"],
            },
            {
              title: "Aurora E-commerce Platform",
              industry: "E-commerce / Retail",
              image:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
              challenge:
                "Outdated e-commerce site with 3.2% conversion rate and poor mobile experience",
              solution:
                "Complete platform rebuild with performance optimization, modern checkout, mobile-first design",
              results: { conversion: "+156%", mobile: "+89%", speed: "-62%" },
              tags: ["Web Development", "E-commerce", "Performance"],
            },
            {
              title: "Luna Branding & Digital Ecosystem",
              industry: "Luxury / Lifestyle",
              image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200",
              challenge:
                "Luxury brand needed cohesive identity across web, app, and print materials",
              solution:
                "Complete brand identity system with design guidelines applied across all digital platforms",
              results: {
                brand: "Cohesion",
                awareness: "+140%",
                leads: "+210%",
              },
              tags: ["Branding", "Design Systems", "Digital Strategy"],
            },
          ].map((study, i) => (
            <div
              key={i}
              className="stagger-card case-study-margin"
              style={{ marginBottom: i === 2 ? "0" : "8rem" }}
            >
              <div
                className="case-study-img-wrapper"
                style={{
                  position: "relative",
                  marginBottom: "4rem",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  height: "500px",
                }}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{ position: "absolute", top: "2rem", left: "2rem" }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "var(--accent)",
                      background: "rgba(0,0,0,0.6)",
                      padding: "0.5rem 1rem",
                      borderRadius: "100px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {study.industry}
                  </span>
                </div>
              </div>

              <h3
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "2rem",
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                {study.title}
              </h3>

              <div
                className="responsive-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "3rem",
                  marginBottom: "3rem",
                }}
              >
                <div>
                  <h4
                    style={{
                      color: "var(--accent)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      marginBottom: "1rem",
                    }}
                  >
                    Challenge
                  </h4>
                  <p style={{ lineHeight: 1.8, color: "var(--fg-alt)" }}>
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      color: "var(--accent)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      marginBottom: "1rem",
                    }}
                  >
                    Solution
                  </h4>
                  <p style={{ lineHeight: 1.8, color: "var(--fg-alt)" }}>
                    {study.solution}
                  </p>
                </div>
              </div>

              <div
                className="case-study-stats-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "2rem",
                  padding: "2rem",
                  background: "var(--bg)",
                  borderRadius: "1rem",
                  marginBottom: "3rem",
                }}
              >
                {Object.entries(study.results).map(([key, value]) => (
                  <div key={key} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "2.2rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {value}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        textTransform: "capitalize",
                        color: "var(--fg-alt)",
                      }}
                    >
                      {key}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {study.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "0.75rem 1.5rem",
                      background: "var(--bg)",
                      borderRadius: "100px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CLIENT TESTIMONIALS FOR WORK --- */}
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
          Clients Share Their <span className="text-stroke">Experience</span>
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
                "The team delivered beyond expectations. Our conversion rates increased dramatically and the process was seamless.",
              name: "James Park",
              company: "TechFlow",
            },
            {
              quote:
                "Not just a redesign, but a complete transformation of our business. Exceptional attention to detail.",
              name: "Victoria Chen",
              company: "Aurora",
            },
            {
              quote:
                "They understood our brand vision immediately and executed flawlessly. Highly professional team.",
              name: "Alex Morgan",
              company: "Luna",
            },
            {
              quote:
                "Best decision we made for our digital transformation. ROI was evident within weeks.",
              name: "Sophia Roberts",
              company: "Velocity",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="stagger-card glass-panel glass-card"
              style={{ padding: "3rem" }}
            >
              <div style={{ marginBottom: "2rem" }}>
                {[...Array(5)].map((_, idx) => (
                  <span
                    key={idx}
                    style={{
                      color: "var(--accent)",
                      fontSize: "1.2rem",
                      marginRight: "2px",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  color: "var(--fg)",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.quote}"
              </p>
              <p style={{ fontWeight: 700 }}>{testimonial.name}</p>
              <p style={{ color: "var(--accent)", fontSize: "0.9rem" }}>
                {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- INDUSTRIES SERVED --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Industries We <span className="text-stroke">Serve</span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--fg-alt)",
              marginBottom: "6rem",
              textAlign: "center",
            }}
          >
            From startups to enterprises, across sectors and geographies
          </p>

          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              "SaaS & Technology",
              "E-commerce & Retail",
              "Healthcare",
              "Finance & Banking",
              "Media & Publishing",
              "Hospitality",
              "Education",
              "Manufacturing",
            ].map((industry, i) => (
              <div
                key={i}
                className="stagger-card glass-panel glass-card"
                style={{
                  padding: "3rem",
                  textAlign: "center",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255,77,0,0.2)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS BREAKDOWN --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 6rem)",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Our <span className="text-stroke">Process</span>
        </h2>

        <div style={{ position: "relative" }}>
          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Research, interviews, analysis of your business and market",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Define goals, roadmap, and detailed project requirements",
              },
              {
                step: "03",
                title: "Design",
                desc: "Create prototypes, wireframes, and high-fidelity mockups",
              },
              {
                step: "04",
                title: "Development",
                desc: "Build with best practices, testing, and optimization",
              },
              {
                step: "05",
                title: "Launch",
                desc: "Deploy, monitor, and optimize for peak performance",
              },
              {
                step: "06",
                title: "Support",
                desc: "Ongoing updates, improvements, and client success",
              },
            ].map((proc, i) => (
              <div
                key={i}
                className="stagger-card"
                style={{ textAlign: "center" }}
              >
                <p
                  style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    marginBottom: "1rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {proc.step}
                </p>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "1rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {proc.title}
                </h3>
                <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
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
            <Link to="/services" style={{ textDecoration: "none" }}>
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
                Services
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

      {/* --- FINAL ENHANCED CTA --- */}
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
            Ready to Create Your Next Success{" "}
            <span className="text-stroke">Story</span>?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--fg-alt)",
              marginBottom: "3rem",
              lineHeight: 1.8,
            }}
          >
            Let's explore how our portfolio expertise can elevate your brand and
            drive measurable results.
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
            }}
          >
            Begin Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
