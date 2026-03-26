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

// export default function HomePage() {
//   const wrapperRef = useRef(null);

//   const getIndustryColorHex = (value) => {
//     const key = String(value || "").toLowerCase();
//     const map = {
//       // Case studies
//       saas: "#ff6b6b",
//       retail: "#4ecdc4",
//       luxury: "#ffd93d",

//       // Insights categories
//       design: "#ff6b6b",
//       development: "#4ecdc4",
//       strategy: "#ffd93d",
//     };
//     return map[key] || "#ff4d00";
//   };

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
//         ".hero-image-pill",
//         { scale: 0, rotateZ: 20 },
//         {
//           scale: 1,
//           rotateZ: 0,
//           duration: 1.8,
//           ease: "expo.out",
//         },
//         0.6,
//       )
//       .fromTo(
//         ".hero-orb",
//         { scale: 0, opacity: 0 },
//         {
//           scale: 1,
//           opacity: 0.6,
//           duration: 2.5,
//           ease: "power2.out",
//         },
//         0.4,
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
//       )
//       .fromTo(
//         ".float-elem",
//         { opacity: 0 },
//         {
//           opacity: 1,
//           duration: 0.8,
//           ease: "power2.out",
//         },
//         1.2,
//       );

//     // Scrub Text Animation
//     gsap.to(".scrub-text", {
//       backgroundPositionX: "0%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".scrub-section",
//         scrub: 1,
//         start: "top 85%",
//         end: "bottom 50%",
//       },
//     });

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

//     // Process Steps
//     gsap.utils.toArray(".process-step").forEach((step) => {
//       gsap.fromTo(
//         step,
//         { opacity: 0, x: -30 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: step,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//         },
//       );
//     });

//     // Parallax Effect
//     gsap.to(".parallax-img", {
//       yPercent: 20,
//       scale: 1.1,
//       ease: "none",
//       scrollTrigger: { trigger: ".parallax-section", scrub: true },
//     });

//     // Glass Cards
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
//           className="hero-orb"
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
//           <div
//             className="hero-fade"
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               marginBottom: "3rem",
//             }}
//           >
//             <div
//               style={{
//                 fontFamily: "Satoshi",
//                 fontWeight: 700,
//                 letterSpacing: "0.2em",
//                 textTransform: "uppercase",
//                 color: "var(--accent)",
//               }}
//             >
//               Innovative Creative Studio
//             </div>
//             <div
//               className="spin-badge float-elem"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 border: "1px dashed var(--stroke)",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "0.7rem",
//                 textTransform: "uppercase",
//                 letterSpacing: "0.1em",
//                 textAlign: "center",
//                 padding: "1rem",
//               }}
//             >
//               Available For Projects
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
//               <SplitText text="Design Your" />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "2rem",
//                 marginTop: "1rem",
//               }}
//             >
//               <SplitText text="Future" className="text-stroke" />
//               <div
//                 className="hero-image-pill img-wrap"
//                 style={{
//                   width: "clamp(120px, 20vw, 350px)",
//                   height: "clamp(70px, 12vw, 160px)",
//                   borderRadius: "200px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"
//                   alt="Studio"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="Today." />
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
//               We build Awwwards-winning websites and craft premium brand
//               identities that dominate the digital space.
//             </p>
//             <div className="hero-fade">
//               <button
//                 className="magnetic-btn hover-trigger"
//                 style={{
//                   padding: "1rem 2.5rem",
//                   borderRadius: "100px",
//                   background: "var(--accent)",
//                   color: "white",
//                   border: "none",
//                   fontWeight: 700,
//                   cursor: "pointer",
//                 }}
//               >
//                 Explore Work ↗
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- METRICS STRIP --- */}
//       <section
//         style={{
//           borderTop: "1px solid var(--border)",
//           borderBottom: "1px solid var(--border)",
//           background: "var(--bg-alt)",
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             maxWidth: "120rem",
//             margin: "0 auto",
//           }}
//         >
//           {[
//             { metric: "40+", label: "Projects Delivered" },
//             { metric: "12+", label: "Brands Scaled" },
//             { metric: "98%", label: "Client Retention" },
//             { metric: "3x", label: "Faster Web Perf." },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               style={{
//                 padding: "3rem",
//                 borderRight: "1px solid var(--border)",
//                 textAlign: "center",
//               }}
//             >
//               <h3
//                 className="font-heading"
//                 style={{ fontSize: "3rem", color: "var(--accent)" }}
//               >
//                 {stat.metric}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "0.9rem",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.1em",
//                   color: "var(--fg-alt)",
//                   marginTop: "0.5rem",
//                 }}
//               >
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- ABOUT SCRUB --- */}
//       <section
//         className="scrub-section"
//         style={{
//           padding: "12rem 3rem",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <h2
//           className="scrub-text font-heading"
//           style={{
//             fontSize: "clamp(2.5rem, 5vw, 6rem)",
//             lineHeight: 1.1,
//             maxWidth: "1400px",
//             textAlign: "center",
//             textTransform: "none",
//           }}
//         >
//           We engineer high-performance digital experiences that merge{" "}
//           <span style={{ fontStyle: "italic" }}>luxury aesthetics</span> with
//           flawless code architecture.
//         </h2>
//       </section>

//       {/* --- SERVICES BENTO --- */}
//       <section
//         style={{
//           padding: "5rem 3rem 10rem",
//           maxWidth: "120rem",
//           margin: "0 auto",
//         }}
//       >
//         <h2
//           style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "4rem" }}
//         >
//           Our <span className="text-stroke">Capabilities</span>
//         </h2>
//         <div
//           className="bento-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(12, 1fr)",
//             gap: "1.5rem",
//           }}
//         >
//           <div
//             className="glass-panel glass-card hover-trigger reveal-img"
//             style={{
//               gridColumn: "span 8",
//               padding: "4rem",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               minHeight: "400px",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <div style={{ position: "relative", zIndex: 1 }}>
//               <h3 className="font-heading" style={{ fontSize: "3rem" }}>
//                 Digital Platforms
//               </h3>
//               <p
//                 style={{
//                   color: "var(--fg-alt)",
//                   maxWidth: "400px",
//                   fontSize: "1.1rem",
//                   marginTop: "1rem",
//                 }}
//               >
//                 Immersive, WebGL-powered websites built on Next.js designed to
//                 win awards and convert users.
//               </p>
//             </div>
//           </div>
//           <div
//             className="glass-panel glass-card hover-trigger"
//             style={{
//               gridColumn: "span 4",
//               padding: "3rem",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               minHeight: "200px",
//             }}
//           >
//             <h3 className="font-heading" style={{ fontSize: "2rem" }}>
//               Brand Strategy
//             </h3>
//             <p style={{ color: "var(--fg-alt)" }}>
//               Positioning & Visual Identity
//             </p>
//           </div>
//           <div
//             className="glass-panel glass-card hover-trigger"
//             style={{
//               gridColumn: "span 4",
//               padding: "3rem",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               minHeight: "300px",
//             }}
//           >
//             <h3 className="font-heading" style={{ fontSize: "2rem" }}>
//               Creative Dev
//             </h3>
//             <p style={{ color: "var(--fg-alt)" }}>GSAP, Three.js, React</p>
//           </div>
//           <div
//             className="glass-panel glass-card hover-trigger"
//             style={{
//               gridColumn: "span 8",
//               padding: "3rem",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               background:
//                 "linear-gradient(135deg, rgba(255,77,0,0.1) 0%, transparent 100%)",
//               minHeight: "300px",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <div style={{ position: "relative", zIndex: 1 }}>
//               <h3
//                 className="font-heading"
//                 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
//               >
//                 Motion Systems
//               </h3>
//               <p style={{ color: "var(--fg-alt)" }}>
//                 Cinematic interactions & UX choreography.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- STUDIO SECTION --- */}
//       <section style={{ padding: "10rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               marginBottom: "4rem",
//             }}
//           >
//             <h2 style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: 0.9 }}>
//               Inside
//               <br />
//               <span className="text-stroke">The Studio</span>
//             </h2>
//             <p
//               style={{
//                 fontSize: "1.2rem",
//                 color: "var(--fg-alt)",
//                 maxWidth: "400px",
//               }}
//             >
//               A glimpse into our creative environments where digital magic
//               happens.
//             </p>
//           </div>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(12, 1fr)",
//               gap: "2rem",
//             }}
//           >
//             <div
//               className="img-wrap reveal-img"
//               style={{
//                 gridColumn: "span 8",
//                 height: "80vh",
//                 borderRadius: "1.5rem",
//                 overflow: "hidden",
//               }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000"
//                 alt="Studio"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </div>
//             <div
//               style={{
//                 gridColumn: "span 4",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "2rem",
//               }}
//             >
//               <div
//                 className="img-wrap reveal-img"
//                 style={{
//                   height: "calc(40vh - 1rem)",
//                   borderRadius: "1.5rem",
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000"
//                   alt="Design"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div
//                 className="img-wrap reveal-img"
//                 style={{
//                   height: "calc(40vh - 1rem)",
//                   borderRadius: "1.5rem",
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000"
//                   alt="Engineering"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROCESS TIMELINE --- */}
//       <section
//         style={{ padding: "12rem 3rem", maxWidth: "90rem", margin: "0 auto" }}
//       >
//         <h2
//           style={{
//             fontSize: "clamp(3rem, 6vw, 6rem)",
//             marginBottom: "8rem",
//             textAlign: "center",
//           }}
//         >
//           How We <span className="text-stroke">Work</span>
//         </h2>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//             gap: "4rem",
//             alignItems: "start",
//           }}
//         >
//           <div
//             style={{
//               borderLeft: "2px solid var(--border)",
//               paddingLeft: "4rem",
//               position: "relative",
//             }}
//           >
//             {[
//               {
//                 num: "01",
//                 title: "Discovery",
//                 desc: "We dive deep into your brand, dissecting your goals, audience, and market to formulate a ruthless digital strategy.",
//               },
//               {
//                 num: "02",
//                 title: "Art Direction",
//                 desc: "Our award-winning designers craft pixel-perfect, luxurious interfaces that command attention and drive conversion.",
//               },
//               {
//                 num: "03",
//                 title: "Creative Coding",
//                 desc: "Using Next.js, GSAP, and WebGL, we engineer lightning-fast architectures that bring static designs to life.",
//               },
//             ].map((step, i) => (
//               <div
//                 key={i}
//                 className="process-step hover-trigger"
//                 style={{
//                   marginBottom: i === 2 ? "0" : "8rem",
//                   position: "relative",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     left: "-4.35rem",
//                     top: "0",
//                     width: "12px",
//                     height: "12px",
//                     background: "var(--accent)",
//                     borderRadius: "50%",
//                     boxShadow:
//                       "0 0 25px var(--accent), inset 0 0 15px rgba(255,77,0,0.5)",
//                     zIndex: 1,
//                   }}
//                 />
//                 <div
//                   style={{
//                     fontFamily: "Satoshi",
//                     color: "var(--accent)",
//                     fontWeight: 700,
//                     fontSize: "1.2rem",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   {step.num}
//                 </div>
//                 <h3
//                   className="font-heading"
//                   style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
//                 >
//                   {step.title}
//                 </h3>
//                 <p
//                   style={{
//                     color: "var(--fg-alt)",
//                     lineHeight: 1.8,
//                     fontSize: "1rem",
//                     maxWidth: "400px",
//                   }}
//                 >
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div
//             style={{
//               position: "sticky",
//               top: "200px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "2rem",
//             }}
//           >
//             {[
//               "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
//               "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
//               "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
//             ].map((img, i) => (
//               <div
//                 key={i}
//                 className="reveal-img img-wrap"
//                 style={{
//                   height: "300px",
//                   borderRadius: "1.5rem",
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src={img}
//                   alt={`Process Step ${i + 1}`}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PARALLAX --- */}
//       <section
//         className="parallax-section"
//         style={{
//           height: "90vh",
//           position: "relative",
//           overflow: "hidden",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           className="parallax-img"
//           style={{
//             position: "absolute",
//             top: "-20%",
//             left: 0,
//             width: "100%",
//             height: "140%",
//             background:
//               "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2500') center/cover",
//             filter: "brightness(0.4)",
//           }}
//         />
//         <h2
//           style={{
//             zIndex: 1,
//             fontSize: "clamp(5rem, 15vw, 15rem)",
//             color: "#fff",
//             mixBlendMode: "overlay",
//           }}
//         >
//           Immersive.
//         </h2>
//       </section>

//       {/* --- WORKS --- */}
//       <section
//         id="works"
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-end",
//             marginBottom: "6rem",
//           }}
//         >
//           <h2 style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: 0.9 }}>
//             Selected <br />
//             <span className="text-stroke">Works</span>
//           </h2>
//         </div>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(12, 1fr)",
//             gap: "4rem 2rem",
//           }}
//         >
//           {[
//             {
//               img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1500",
//               title: "Aura Platform",
//               cat: "E-Commerce",
//               span: 12,
//             },
//             {
//               img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1500",
//               title: "Neon Architect",
//               cat: "Web Design",
//               span: 6,
//             },
//             {
//               img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1500",
//               title: "Vertex Dynamics",
//               cat: "Branding",
//               span: 6,
//             },
//           ].map((work, i) => (
//             <div
//               key={i}
//               className="hover-trigger"
//               style={{ gridColumn: `span ${work.span}` }}
//             >
//               <div
//                 className="img-wrap reveal-img"
//                 style={{
//                   height: work.span === 12 ? "80vh" : "60vh",
//                   position: "relative",
//                   overflow: "hidden",
//                   borderRadius: "1.5rem",
//                 }}
//               >
//                 <img
//                   src={work.img}
//                   alt={work.title}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginTop: "2rem",
//                 }}
//               >
//                 <h3 style={{ fontSize: "2.5rem" }}>{work.title}</h3>
//                 <p
//                   style={{
//                     fontFamily: "Satoshi",
//                     color: "var(--fg-alt)",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.1em",
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   {work.cat}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- TESTIMONIALS --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "6rem" }}
//           >
//             What Our <span className="text-stroke">Clients Say</span>
//           </h2>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//               gap: "3rem",
//             }}
//           >
//             {[
//               {
//                 client: "TechFlow Inc",
//                 project: "E-Commerce Platform",
//                 result: "240% Sales Growth",
//               },
//               {
//                 client: "Creative Agency Co",
//                 project: "Brand Identity",
//                 result: "500K+ Impressions",
//               },
//               {
//                 client: "Innovation Hub",
//                 project: "Mobile App",
//                 result: "4.8/5 Rating",
//               },
//             ].map((case_study, i) => (
//               <div
//                 key={i}
//                 className="glass-panel glass-card hover-trigger"
//                 style={{
//                   padding: "3rem",
//                   position: "relative",
//                   overflow: "hidden",
//                 }}
//               >
//                 <div style={{ position: "relative", zIndex: 1 }}>
//                   <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
//                     {case_study.client}
//                   </h3>
//                   <p style={{ color: "var(--fg-alt)", marginBottom: "1rem" }}>
//                     Project: {case_study.project}
//                   </p>
//                   <div
//                     style={{
//                       fontSize: "2.5rem",
//                       color: "var(--accent)",
//                       fontWeight: 700,
//                       marginTop: "1.5rem",
//                     }}
//                   >
//                     {case_study.result}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- TEAM --- */}
//       <section style={{ padding: "12rem 3rem" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               marginBottom: "6rem",
//             }}
//           >
//             <h2 style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 0.9 }}>
//               Meet Our <br />
//               <span className="text-stroke">Experts</span>
//             </h2>
//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 color: "var(--fg-alt)",
//                 maxWidth: "400px",
//               }}
//             >
//               A collective of passionate designers, developers, and strategists
//               dedicated to excellence.
//             </p>
//           </div>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//               gap: "3rem",
//             }}
//           >
//             {[
//               {
//                 name: "Alex Chen",
//                 role: "Creative Director",
//                 img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
//               },
//               {
//                 name: "Sam Rodriguez",
//                 role: "Lead Developer",
//                 img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
//               },
//               {
//                 name: "Jordan Blake",
//                 role: "UX/UI Specialist",
//                 img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
//               },
//               {
//                 name: "Casey Anderson",
//                 role: "Strategy Lead",
//                 img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
//               },
//             ].map((member, i) => (
//               <div
//                 key={i}
//                 className="img-wrap reveal-img hover-trigger"
//                 style={{
//                   overflow: "hidden",
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 <div
//                   style={{
//                     height: "300px",
//                     width: "100%",
//                     overflow: "hidden",
//                     borderRadius: "1.5rem",
//                   }}
//                 >
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       scale: 1.05,
//                     }}
//                   />
//                 </div>
//                 <div style={{ padding: "1.5rem" }}>
//                   <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
//                     {member.name}
//                   </h3>
//                   <p
//                     style={{
//                       color: "var(--accent)",
//                       fontWeight: 600,
//                       fontSize: "0.9rem",
//                     }}
//                   >
//                     {member.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- TECH STACK --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "clamp(3rem, 6vw, 6rem)",
//               marginBottom: "6rem",
//               textAlign: "center",
//             }}
//           >
//             Powered By <span className="text-stroke">Latest Tech</span>
//           </h2>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//               gap: "2rem",
//             }}
//           >
//             {[
//               "React",
//               "Next.js",
//               "TypeScript",
//               "GSAP",
//               "WebGL",
//               "Tailwind",
//               "Node.js",
//               "Three.js",
//               "Figma",
//               "GraphQL",
//               "Framer Motion",
//               "Prisma",
//             ].map((tech, i) => (
//               <div
//                 key={i}
//                 className="glass-panel glass-card hover-trigger"
//                 style={{
//                   padding: "2.5rem",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   minHeight: "150px",
//                   textAlign: "center",
//                 }}
//               >
//                 <h3 className="font-heading" style={{ fontSize: "1.3rem" }}>
//                   {tech}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CLIENT LOGOS / TRUST SECTION --- */}
//       <section
//         style={{
//           padding: "8rem 3rem",
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
//               marginBottom: "3rem",
//             }}
//           >
//             Trusted by industry leaders
//           </p>
//           <div
//             style={{
//               display: "grid",
//               gap: "2rem",
//               alignItems: "center",
//             }}
//             className="home-grid-3"
//           >
//             {[
//               "TechFlow",
//               "Aurora Digital",
//               "Luna Media",
//               "Velocity Co",
//               "Prism Labs",
//               "Nexus Pro",
//             ].map((client, i) => (
//               <div
//                 key={i}
//                 className="stagger-card"
//                 style={{
//                   padding: "1.5rem",
//                   fontSize: "1.2rem",
//                   fontWeight: 700,
//                   opacity: 0.7,
//                   transition: "opacity 0.3s",
//                 }}
//               >
//                 {client}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- DETAILED METRICS SECTION --- */}
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
//           By The <span className="text-stroke">Numbers</span>
//         </h2>
//         <p
//           style={{
//             fontSize: "1.2rem",
//             color: "var(--fg-alt)",
//             marginBottom: "6rem",
//             textAlign: "center",
//             maxWidth: "600px",
//             margin: "0 auto 6rem",
//           }}
//         >
//           We measure success through real impact and measurable results for our
//           partners
//         </p>

//         <div
//           style={{
//             display: "grid",
//             gap: "3rem",
//           }}
//           className="home-grid-3"
//         >
//           {[
//             {
//               number: "200+",
//               label: "Projects Delivered",
//               desc: "From concept to launch",
//             },
//             {
//               number: "$150M+",
//               label: "Client Revenue Generated",
//               desc: "Through digital transformation",
//             },
//             {
//               number: "98%",
//               label: "Client Satisfaction",
//               desc: "Across all industries",
//             },
//             {
//               number: "45+",
//               label: "Awards & Recognition",
//               desc: "Industry-leading excellence",
//             },
//             {
//               number: "50+",
//               label: "Creative Professionals",
//               desc: "Passionate about your success",
//             },
//             {
//               number: "15+",
//               label: "Years Experience",
//               desc: "Combined team expertise",
//             },
//           ].map((metric, i) => (
//             <div
//               key={i}
//               className="stagger-card glass-panel glass-card"
//               style={{
//                 padding: "3rem",
//                 textAlign: "center",
//                 borderRadius: "1.5rem",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "3.5rem",
//                   fontWeight: 700,
//                   color: "var(--accent)",
//                   marginBottom: "1rem",
//                   fontFamily: "'Clash Display', sans-serif",
//                 }}
//               >
//                 {metric.number}
//               </p>
//               <p
//                 style={{
//                   fontSize: "1.2rem",
//                   fontWeight: 600,
//                   marginBottom: "0.8rem",
//                 }}
//               >
//                 {metric.label}
//               </p>
//               <p style={{ color: "var(--fg-alt)", fontSize: "0.95rem" }}>
//                 {metric.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- WHO WE ARE --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div
//           style={{
//             maxWidth: "120rem",
//             margin: "0 auto",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//             gap: "6rem",
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="reveal-img"
//             style={{
//               borderRadius: "2rem",
//               overflow: "hidden",
//               height: "450px",
//             }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
//               alt="About Us"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <h2
//               style={{
//                 fontSize: "clamp(2.5rem, 6vw, 5rem)",
//                 marginBottom: "2rem",
//                 lineHeight: 0.9,
//               }}
//             >
//               Who We <span className="text-stroke">Are</span>
//             </h2>
//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 lineHeight: 1.8,
//                 color: "var(--fg-alt)",
//                 marginBottom: "2rem",
//               }}
//             >
//               Prism is a creative studio specializing in digital transformation
//               for ambitious brands. We combine strategic thinking with
//               exceptional design and cutting-edge development.
//             </p>
//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 lineHeight: 1.8,
//                 color: "var(--fg-alt)",
//                 marginBottom: "2rem",
//               }}
//             >
//               Since 2018, we've helped over 200 companies reimagine their
//               digital presence. Our team of 50+ designers, developers, and
//               strategists work daily to create experiences that drive real
//               business results.
//             </p>
//             <div style={{ display: "flex", gap: "2rem" }}>
//               <button
//                 style={{
//                   padding: "0.8rem 2rem",
//                   borderRadius: "100px",
//                   background: "var(--accent)",
//                   color: "white",
//                   fontWeight: 700,
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 Learn More
//               </button>
//               <button
//                 style={{
//                   padding: "0.8rem 2rem",
//                   borderRadius: "100px",
//                   background: "transparent",
//                   color: "var(--fg)",
//                   fontWeight: 700,
//                   border: "2px solid var(--fg)",
//                   cursor: "pointer",
//                 }}
//               >
//                 Our Work
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURED CASE STUDIES --- */}
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
//           Featured <span className="text-stroke">Case Studies</span>
//         </h2>
//         <p
//           style={{
//             fontSize: "1.2rem",
//             color: "var(--fg-alt)",
//             marginBottom: "6rem",
//             textAlign: "center",
//           }}
//         >
//           See how we've transformed businesses across industries
//         </p>

//         <div
//           style={{
//             display: "grid",
//             gap: "3rem",
//           }}
//           className="home-grid-3"
//         >
//           {[
//             {
//               title: "TechFlow Platform Redesign",
//               image:
//                 "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
//               results: "+156% conversion",
//               industry: "SaaS",
//             },
//             {
//               title: "Aurora E-commerce Transformation",
//               image:
//                 "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
//               results: "+210% sales",
//               industry: "Retail",
//             },
//             {
//               title: "Luna Brand Ecosystem",
//               image:
//                 "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
//               results: "+140% awareness",
//               industry: "Luxury",
//             },
//           ].map((study, i) => (
//             <div
//               key={i}
//               className="home-card hover-trigger"
//               style={{
//                 cursor: "pointer",
//               }}
//             >
//               <div className="home-card-media" style={{ height: "300px" }}>
//                 <img
//                   src={study.image}
//                   alt={study.title}
//                   style={{ width: "100%", height: "100%" }}
//                 />

//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "1.2rem",
//                     right: "1.2rem",
//                     background: `${getIndustryColorHex(study.industry)}22`,
//                     color: getIndustryColorHex(study.industry),
//                     padding: "0.55rem 0.95rem",
//                     borderRadius: "999px",
//                     fontSize: "0.75rem",
//                     fontWeight: 900,
//                     letterSpacing: "0.12em",
//                     textTransform: "uppercase",
//                     border: `1px solid ${getIndustryColorHex(study.industry)}33`,
//                     backdropFilter: "blur(10px)",
//                     WebkitBackdropFilter: "blur(10px)",
//                   }}
//                 >
//                   {study.industry}
//                 </div>

//                 <div className="home-card-overlay">
//                   <h3
//                     className="home-card-title"
//                     style={{ marginTop: 0, fontSize: "1.2rem" }}
//                   >
//                     {study.title}
//                   </h3>
//                   <p
//                     style={{
//                       marginTop: "0.75rem",
//                       fontSize: "0.95rem",
//                       fontWeight: 900,
//                       color: getIndustryColorHex(study.industry),
//                     }}
//                   >
//                     {study.results}
//                   </p>
//                 </div>
//               </div>
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
//               marginBottom: "6rem",
//               textAlign: "center",
//             }}
//           >
//             Industries We <span className="text-stroke">Serve</span>
//           </h2>

//           <div
//             style={{
//               display: "grid",
//               gap: "2rem",
//               alignItems: "stretch",
//             }}
//             className="home-grid-3"
//           >
//             {[
//               "SaaS & Technology",
//               "E-commerce & Retail",
//               "Healthcare",
//               "Finance & Banking",
//               "Media & Publishing",
//               "Hospitality & Travel",
//               "Education",
//               "Manufacturing",
//               "Real Estate & Construction",
//             ].map((industry, i) => (
//               <div
//                 key={i}
//                 className="home-eq-card home-industry-card stagger-card glass-panel glass-card"
//                 style={{
//                   padding: "2.5rem",
//                   textAlign: "center",
//                   borderRadius: "1.5rem",
//                   cursor: "pointer",
//                   transition: "all 0.3s",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: "1.2rem",
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

//       {/* --- EXTENDED TESTIMONIALS --- */}
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
//           What Our <span className="text-stroke">Clients Say</span>
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gap: "2rem",
//             alignItems: "stretch",
//           }}
//           className="home-grid-3"
//         >
//           {[
//             {
//               quote:
//                 "Prism completely transformed our digital presence. The results exceeded our expectations.",
//               name: "Sarah Chen",
//               role: "CEO",
//               company: "TechFlow",
//             },
//             {
//               quote:
//                 "Working with this team was effortless. They understood our vision immediately and delivered excellence.",
//               name: "Marcus Rodriguez",
//               role: "Founder",
//               company: "Aurora",
//             },
//             {
//               quote:
//                 "Outstanding quality at every step. Professional, creative, and results-oriented.",
//               name: "Emma Johnson",
//               role: "Marketing Director",
//               company: "Luna",
//             },
//             {
//               quote:
//                 "Best investment we made this year. Our conversion rates tripled.",
//               name: "James Park",
//               role: "CTO",
//               company: "Velocity",
//             },
//             {
//               quote:
//                 "Transformed our digital presence overnight. Awwwards-level quality at lightning speed.",
//               name: "Sarah Chen",
//               role: "Head of Marketing",
//               company: "NovaTech",
//             },
//             {
//               quote:
//                 "Their brutalist designs with flawless performance set us apart from every competitor.",
//               name: "Michael Ortiz",
//               role: "Founder & CEO",
//               company: "Quantum Labs",
//             },
//           ].map((testimonial, i) => (
//             <div
//               key={i}
//               className="home-eq-card home-testimonial-card stagger-card glass-panel glass-card"
//               style={{ padding: "2.5rem", borderRadius: "1.5rem" }}
//             >
//               <div style={{ marginBottom: "1.5rem" }}>
//                 {[...Array(5)].map((_, idx) => (
//                   <span
//                     key={idx}
//                     style={{
//                       color: "var(--accent)",
//                       fontSize: "1.1rem",
//                       marginRight: "0.3rem",
//                     }}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   lineHeight: 1.8,
//                   marginBottom: "1.5rem",
//                   color: "var(--fg)",
//                   fontStyle: "italic",
//                 }}
//               >
//                 "{testimonial.quote}"
//               </p>
//               <p style={{ fontWeight: 700 }}>{testimonial.name}</p>
//               <p style={{ fontSize: "0.9rem", color: "var(--accent)" }}>
//                 {testimonial.role} at {testimonial.company}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- BLOG/INSIGHTS --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "clamp(3rem, 6vw, 6rem)",
//               marginBottom: "1rem",
//               textAlign: "center",
//             }}
//           >
//             Latest <span className="text-stroke">Insights</span>
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "var(--fg-alt)",
//               marginBottom: "6rem",
//               textAlign: "center",
//             }}
//           >
//             Industry trends, tips, and best practices from our team
//           </p>

//           <div
//             style={{
//               display: "grid",
//               gap: "2rem",
//             }}
//             className="home-grid-3"
//           >
//             {[
//               {
//                 title: "The Future of Web Design in 2024",
//                 category: "Design",
//                 date: "Mar 15, 2024",
//                 image:
//                   "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600",
//               },
//               {
//                 title: "Building High-Performance React Applications",
//                 category: "Development",
//                 date: "Mar 10, 2024",
//                 image:
//                   "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
//               },
//               {
//                 title: "Converting Users: The Power of Great UX",
//                 category: "Strategy",
//                 date: "Mar 5, 2024",
//                 image:
//                   "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
//               },
//             ].map((post, i) => (
//               <div
//                 key={i}
//                 className="home-card hover-trigger"
//                 style={{
//                   cursor: "pointer",
//                 }}
//               >
//                 <div className="home-card-media" style={{ height: "250px" }}>
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   />
//                   <div className="home-card-overlay">
//                     <span
//                       className="home-card-kicker"
//                       style={{
//                         background: `${getIndustryColorHex(post.category)}22`,
//                         color: getIndustryColorHex(post.category),
//                       }}
//                     >
//                       {post.category}
//                     </span>
//                     <h3 className="home-card-title">{post.title}</h3>
//                     <p className="home-card-meta">{post.date}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FAQ --- */}
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
//           Frequently Asked <span className="text-stroke">Questions</span>
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gap: "2rem",
//             alignItems: "stretch",
//           }}
//           className="home-grid-3"
//         >
//           {[
//             {
//               q: "How do you start a project?",
//               a: "We begin with a comprehensive discovery phase where we learn about your business, goals, and target audience.",
//             },
//             {
//               q: "What is your typical timeline?",
//               a: "Projects typically range from 8-16 weeks depending on scope. We provide detailed timelines during proposal phase.",
//             },
//             {
//               q: "Do you offer support after launch?",
//               a: "Yes, we offer flexible support packages for ongoing optimization, updates, and enhancements.",
//             },
//             {
//               q: "What technologies do you use?",
//               a: "We work with React, Next.js, Node.js, TypeScript, Tailwind CSS, and other modern technologies based on project needs.",
//             },
//             {
//               q: "What services do you offer?",
//               a: "We specialize in Awwwards-winning websites, premium brand identities, WebGL experiences, creative coding, UI/UX design, and full-stack development.",
//             },
//             {
//               q: "How long does a typical project take?",
//               a: "Discovery & strategy: 2-4 weeks. Design & prototyping: 4-6 weeks. Development & refinement: 6-10 weeks. Total timeline varies by project complexity.",
//             },
//           ].map((faq, i) => (
//             <div
//               key={i}
//               className="home-eq-card home-faq-card stagger-card glass-panel glass-card"
//               style={{ padding: "2.5rem", borderRadius: "1.5rem" }}
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
//               gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
//               gap: "2rem",
//             }}
//           >
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
//                 Our Services
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
//             bottom: "-50%",
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
//             Let's Build Something Epic Together
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
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Start Project
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

export default function HomePage() {
  const wrapperRef = useRef(null);

  const getIndustryColorHex = (value) => {
    const key = String(value || "").toLowerCase();
    const map = {
      // Case studies
      saas: "#ff6b6b",
      retail: "#4ecdc4",
      luxury: "#ffd93d",

      // Insights categories
      design: "#ff6b6b",
      development: "#4ecdc4",
      strategy: "#ffd93d",
    };
    return map[key] || "#ff4d00";
  };
  const getCaseTitleColor = (value) => {
    const key = String(value || "").toLowerCase();

    const map = {
      saas: "#9ecbff", // soft premium blue
      retail: "#ffd6a5", // warm champagne
      luxury: "#e7c6ff", // soft lavender
    };

    return map[key] || "#ffffff";
  };
  const getInsightTitleColor = (value) => {
    const key = String(value || "").toLowerCase();

    const map = {
      design: "#8ec5ff",
      development: "#ffcf99",
      strategy: "#d9b8ff",
    };

    return "#f5f5f5";
  };

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
        ".hero-image-pill",
        { scale: 0, rotateZ: 20 },
        {
          scale: 1,
          rotateZ: 0,
          duration: 1.8,
          ease: "expo.out",
        },
        0.6,
      )
      .fromTo(
        ".hero-orb",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.6,
          duration: 2.5,
          ease: "power2.out",
        },
        0.4,
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
      )
      .fromTo(
        ".float-elem",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        1.2,
      );

    // Scrub Text Animation
    gsap.to(".scrub-text", {
      backgroundPositionX: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: ".scrub-section",
        scrub: 1,
        start: "top 85%",
        end: "bottom 50%",
      },
    });

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

    // Process Steps
    gsap.utils.toArray(".process-step").forEach((step) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Parallax Effect
    gsap.to(".parallax-img", {
      yPercent: 20,
      scale: 1.1,
      ease: "none",
      scrollTrigger: { trigger: ".parallax-section", scrub: true },
    });

    // Glass Cards
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
      {/* --- RESPONSIVE CSS OVERRIDES --- */}
      <style>{`
        @media (max-width: 1024px) {
          .bento-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          .bento-card {
            width: 100% !important;
            min-height: auto !important;
          }
        }
        @media (max-width: 768px) {
          .section-padding { padding: 6rem 1.5rem !important; }
          .hero-section { padding: 8rem 1.5rem 3rem !important; }
          
          /* Flex Layout Resets */
          .flex-row-to-col {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem;
          }
          
          /* Hero Adjustments */
          .hero-title-flex { flex-wrap: wrap; }
          .hero-image-pill { width: 100% !important; height: 90px !important; margin-top: 1rem; }
          .hero-orb { width: 80vw !important; height: 80vw !important; top: 5% !important; right: -10% !important; }
          
          /* Studio Grid Reset */
          .studio-grid { display: flex !important; flex-direction: column !important; }
          .studio-img-main { height: 50vh !important; }
          .studio-img-sub { height: 30vh !important; }
          
          /* Works Grid Reset */
          .works-grid { display: flex !important; flex-direction: column !important; }
          .work-item-img { height: 45vh !important; }
          
          /* Process Section */
          .process-wrapper { display: flex !important; flex-direction: column !important; }
          .process-sticky-imgs { display: none !important; }
          .process-step { border-left: 2px solid var(--border) !important; padding-left: 2rem !important; margin-bottom: 3.5rem !important; }
          .process-dot { left: -2.35rem !important; }
          
          /* Metrics Grid Adjustments */
          .metric-strip-grid { grid-template-columns: 1fr 1fr !important; }
          .metric-item { border-right: none !important; border-bottom: 1px solid var(--border); padding: 2rem 1rem !important; }
          .metric-item:nth-child(even) { border-left: 1px solid var(--border); }
          .metric-item:last-child { border-bottom: none; grid-column: span 2; border-left: none; }
          
          /* About Split Reset */
          .about-split { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-img { height: 350px !important; }
          
          /* Universal Grid Reset */
          .mobile-col-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* --- HERO SECTION --- */}
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
        {/* --- MOBILE RESPONSIVE OVERRIDES --- */}
        <style>{`
          @media (max-width: 768px) {
            .hero-section {
              padding: 6rem 1.5rem 3rem !important;
              justify-content: flex-start !important;
            }
            .hero-top-bar {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 1.5rem !important;
              margin-bottom: 2rem !important;
            }
            .hero-heading {
              /* Pushing the font size up on mobile forces the "DESIGN YO" break */
              font-size: clamp(5rem, 21vw, 8rem) !important; 
              line-height: 0.9 !important;
            }
            .hero-title-flex {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0 !important;
              width: 100%;
            }
            .hero-image-pill {
              width: 100% !important;
              max-width: none !important;
              height: 100px !important;
              margin: 1.5rem 0 0.5rem 0 !important;
            }

            @media (max-width: 768px) {
  .hero-image-pill {
    display: none !important;
  }
}
            .hero-bottom-bar {
              flex-direction: column !important;
              align-items: flex-start !important;
              margin-top: 4rem !important;
              gap: 2rem !important;
            }
          }
        `}</style>

        {/* Ambient Glow Orb */}
        <div
          className="hero-orb"
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
          {/* TOP BAR */}
          <div
            className="hero-fade hero-top-bar"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                fontFamily: "Satoshi",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Innovative Creative Studio
            </div>
            <div
              className="spin-badge float-elem"
              style={{
                width: "100px",
                height: "100px",
                border: "1px dashed var(--stroke)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              Available For Projects
            </div>
          </div>

          {/* MAIN HEADING */}
          <h1
            className="hero-heading"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 16rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.03em",
            }}
          >
            <div>
              <SplitText text="Design Your" />
            </div>
            <div
              className="hero-title-flex"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginTop: "1rem",
              }}
            >
              <SplitText text="Future" className="text-stroke" />
              <div
                className="hero-image-pill img-wrap"
                style={{
                  width: "clamp(120px, 20vw, 350px)",
                  height: "clamp(70px, 12vw, 160px)",
                  borderRadius: "200px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"
                  alt="Studio"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="Today." />
            </div>
          </h1>

          {/* BOTTOM TEXT & BUTTON */}
          <div
            className="hero-bottom-bar"
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
              We build Awwwards-winning websites and craft premium brand
              identities that dominate the digital space.
            </p>
            <div className="hero-fade">
              <button
                className="magnetic-btn hover-trigger"
                style={{
                  padding: "1rem 2.5rem",
                  borderRadius: "100px",
                  background: "var(--accent)",
                  color: "white",
                  border: "none",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Explore Work ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- METRICS STRIP --- */}
      {/* --- METRICS STRIP --- */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-alt)",
        }}
      >
        {/* --- MOBILE RESPONSIVE OVERRIDES FOR METRICS --- */}
        <style>{`
          @media (max-width: 768px) {
            .metric-strip-grid {
              /* Force a strict 2-column grid */
              grid-template-columns: 1fr 1fr !important; 
            }
            .metric-item {
              padding: 2.5rem 1rem !important;
              /* Reset all desktop inline borders first */
              border-right: none !important; 
              border-bottom: 1px solid var(--border) !important;
              grid-column: auto !important; /* Fixes the stretching */
            }
            /* Add right border ONLY to the left column (1st and 3rd items) */
            .metric-item:nth-child(odd) {
              border-right: 1px solid var(--border) !important;
            }
            /* Remove bottom border for the bottom row (3rd and 4th items) */
            .metric-item:nth-child(n+3) {
              border-bottom: none !important;
            }
          }
        `}</style>

        <div
          className="metric-strip-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            maxWidth: "120rem",
            margin: "0 auto",
          }}
        >
          {[
            { metric: "40+", label: "Projects Delivered" },
            { metric: "12+", label: "Brands Scaled" },
            { metric: "98%", label: "Client Retention" },
            { metric: "3x", label: "Faster Web Perf." },
          ].map((stat, i) => (
            <div
              key={i}
              className="metric-item"
              style={{
                padding: "3rem",
                borderRight: i !== 3 ? "1px solid var(--border)" : "none",
                textAlign: "center",
              }}
            >
              <h3
                className="font-heading"
                style={{ fontSize: "3rem", color: "var(--accent)" }}
              >
                {stat.metric}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--fg-alt)",
                  marginTop: "0.5rem",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SCRUB --- */}
      <section
        className="scrub-section section-padding"
        style={{
          padding: "12rem 3rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2
          className="scrub-text font-heading"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 6rem)",
            lineHeight: 1.1,
            maxWidth: "1400px",
            textAlign: "center",
            textTransform: "none",
          }}
        >
          We engineer high-performance digital experiences that merge{" "}
          <span style={{ fontStyle: "italic" }}>luxury aesthetics</span> with
          flawless code architecture.
        </h2>
      </section>

      {/* --- SERVICES BENTO --- */}
      {/* --- SERVICES BENTO --- */}
      <section
        className="section-padding"
        style={{
          padding: "5rem 3rem 10rem",
          maxWidth: "120rem",
          margin: "0 auto",
        }}
      >
        <h2
          style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "4rem" }}
        >
          Our <span className="text-stroke">Capabilities</span>
        </h2>
        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
          }}
        >
          {/* Card 1: Vibrant Light Blue */}
          <div
            className="hover-trigger reveal-img bento-card"
            style={{
              gridColumn: "span 8",
              padding: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "400px",
              position: "relative",
              overflow: "hidden",
              background: "#0ea5e9" /* Sky Blue */,
              borderRadius: "1.5rem",
              color: "#ffffff",
              boxShadow: "0 10px 30px -10px rgba(14, 165, 233, 0.3)",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                className="font-heading"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff" }}
              >
                Digital Platforms
              </h3>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  maxWidth: "400px",
                  fontSize: "1.1rem",
                  marginTop: "1rem",
                }}
              >
                Immersive, WebGL-powered websites built on Next.js designed to
                win awards and convert users.
              </p>
            </div>
          </div>

          {/* Card 2: Vibrant Orange */}
          <div
            className="hover-trigger bento-card"
            style={{
              gridColumn: "span 4",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "200px",
              background: "#f97316" /* Bright Orange */,
              borderRadius: "1.5rem",
              color: "#ffffff",
              boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.3)",
            }}
          >
            <h3
              className="font-heading"
              style={{ fontSize: "2rem", color: "#ffffff" }}
            >
              Brand Strategy
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              Positioning & Visual Identity
            </p>
          </div>

          {/* Card 3: Vibrant Green */}
          <div
            className="hover-trigger bento-card"
            style={{
              gridColumn: "span 4",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "300px",
              background: "#10b981" /* Emerald Green */,
              borderRadius: "1.5rem",
              color: "#ffffff",
              boxShadow: "0 10px 30px -10px rgba(16, 185, 129, 0.3)",
            }}
          >
            <h3
              className="font-heading"
              style={{ fontSize: "2rem", color: "#ffffff" }}
            >
              Creative Dev
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              GSAP, Three.js, React
            </p>
          </div>

          {/* Card 4: Vibrant Violet/Purple */}
          <div
            className="hover-trigger bento-card"
            style={{
              gridColumn: "span 8",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#8b5cf6" /* Violet */,
              minHeight: "300px",
              position: "relative",
              overflow: "hidden",
              borderRadius: "1.5rem",
              color: "#ffffff",
              boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.3)",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                className="font-heading"
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  color: "#ffffff",
                }}
              >
                Motion Systems
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                Cinematic interactions & UX choreography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STUDIO SECTION --- */}
      <section
        className="section-padding"
        style={{ padding: "10rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <div
            className="flex-row-to-col"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "4rem",
            }}
          >
            <h2 style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: 0.9 }}>
              Inside
              <br />
              <span className="text-stroke">The Studio</span>
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--fg-alt)",
                maxWidth: "400px",
              }}
            >
              A glimpse into our creative environments where digital magic
              happens.
            </p>
          </div>

          <div
            className="studio-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "2rem",
            }}
          >
            <div
              className="img-wrap reveal-img studio-img-main"
              style={{
                gridColumn: "span 8",
                height: "80vh",
                borderRadius: "1.5rem",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000"
                alt="Studio"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                gridColumn: "span 4",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <div
                className="img-wrap reveal-img studio-img-sub"
                style={{
                  height: "calc(40vh - 1rem)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000"
                  alt="Design"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="img-wrap reveal-img studio-img-sub"
                style={{
                  height: "calc(40vh - 1rem)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000"
                  alt="Engineering"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE --- */}
      {/* <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "90rem", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 6rem)",
            marginBottom: "8rem",
            textAlign: "center",
          }}
        >
          How We <span className="text-stroke">Work</span>
        </h2>
        <div
          className="process-wrapper"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div
            style={{
              borderLeft: "2px solid var(--border)",
              paddingLeft: "4rem",
              position: "relative",
            }}
          >
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We dive deep into your brand, dissecting your goals, audience, and market to formulate a ruthless digital strategy.",
              },
              {
                num: "02",
                title: "Art Direction",
                desc: "Our award-winning designers craft pixel-perfect, luxurious interfaces that command attention and drive conversion.",
              },
              {
                num: "03",
                title: "Creative Coding",
                desc: "Using Next.js, GSAP, and WebGL, we engineer lightning-fast architectures that bring static designs to life.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="process-step hover-trigger"
                style={{
                  marginBottom: i === 2 ? "0" : "8rem",
                  position: "relative",
                }}
              >
                <div
                  className="process-dot"
                  style={{
                    position: "absolute",
                    left: "-4.35rem",
                    top: "0",
                    width: "12px",
                    height: "12px",
                    background: "var(--accent)",
                    borderRadius: "50%",
                    boxShadow:
                      "0 0 25px var(--accent), inset 0 0 15px rgba(255,77,0,0.5)",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    fontFamily: "Satoshi",
                    color: "var(--accent)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-heading"
                  style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--fg-alt)",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    maxWidth: "400px",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="process-sticky-imgs"
            style={{
              position: "sticky",
              top: "200px",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {[
              "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
              "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
            ].map((img, i) => (
              <div
                key={i}
                className="reveal-img img-wrap"
                style={{
                  height: "300px",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img}
                  alt={`Process Step ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* --- PROCESS TIMELINE --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "90rem", margin: "0 auto" }}
      >
        {/* --- MOBILE RESPONSIVE OVERRIDES FOR PROCESS --- */}
        <style>{`
          @media (max-width: 768px) {
            .process-timeline-parent {
              padding-left: 2rem !important; /* Bring the single line closer to text */
            }
            .process-step {
              margin-bottom: 4rem !important;
              border-left: none !important; /* Removes the double line bug! */
            }
            .process-dot {
              left: -2.35rem !important; /* Aligns the dot perfectly on the single line */
            }
          }
        `}</style>

        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 6rem)",
            marginBottom: "8rem",
            textAlign: "center",
          }}
        >
          How We <span className="text-stroke">Work</span>
        </h2>
        <div
          className="process-wrapper"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div
            className="process-timeline-parent"
            style={{
              borderLeft:
                "2px solid var(--border)" /* THIS is the only line we keep */,
              paddingLeft: "4rem",
              position: "relative",
            }}
          >
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We dive deep into your brand, dissecting your goals, audience, and market to formulate a ruthless digital strategy.",
              },
              {
                num: "02",
                title: "Art Direction",
                desc: "Our award-winning designers craft pixel-perfect, luxurious interfaces that command attention and drive conversion.",
              },
              {
                num: "03",
                title: "Creative Coding",
                desc: "Using Next.js, GSAP, and WebGL, we engineer lightning-fast architectures that bring static designs to life.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="process-step hover-trigger"
                style={{
                  marginBottom: i === 2 ? "0" : "8rem",
                  position: "relative",
                }}
              >
                <div
                  className="process-dot"
                  style={{
                    position: "absolute",
                    left: "-4.35rem",
                    top: "0",
                    width: "12px",
                    height: "12px",
                    background: "var(--accent)",
                    borderRadius: "50%",
                    boxShadow:
                      "0 0 25px var(--accent), inset 0 0 15px rgba(255,77,0,0.5)",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    fontFamily: "Satoshi",
                    color: "var(--accent)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-heading"
                  style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--fg-alt)",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    maxWidth: "400px",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="process-sticky-imgs"
            style={{
              position: "sticky",
              top: "200px",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {[
              "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
              "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
            ].map((img, i) => (
              <div
                key={i}
                className="reveal-img img-wrap"
                style={{
                  height: "300px",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img}
                  alt={`Process Step ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARALLAX --- */}
      <section
        className="parallax-section"
        style={{
          height: "90vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="parallax-img"
          style={{
            position: "absolute",
            top: "-20%",
            left: 0,
            width: "100%",
            height: "140%",
            background:
              "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2500') center/cover",
            filter: "brightness(0.4)",
          }}
        />
        <h2
          style={{
            zIndex: 1,
            fontSize: "clamp(4rem, 15vw, 15rem)",
            color: "#fff",
            mixBlendMode: "overlay",
          }}
        >
          Immersive.
        </h2>
      </section>

      {/* --- WORKS --- */}
      <section
        id="works"
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <div
          className="flex-row-to-col"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "6rem",
          }}
        >
          <h2 style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: 0.9 }}>
            Selected <br />
            <span className="text-stroke">Works</span>
          </h2>
        </div>

        <div
          className="works-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "4rem 2rem",
          }}
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1500",
              title: "Aura Platform",
              cat: "E-Commerce",
              span: 12,
            },
            {
              img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1500",
              title: "Neon Architect",
              cat: "Web Design",
              span: 6,
            },
            {
              img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1500",
              title: "Vertex Dynamics",
              cat: "Branding",
              span: 6,
            },
          ].map((work, i) => (
            <div
              key={i}
              className="hover-trigger work-item"
              style={{ gridColumn: `span ${work.span}` }}
            >
              <div
                className="img-wrap reveal-img work-item-img"
                style={{
                  height: work.span === 12 ? "80vh" : "40vh",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1.5rem",
                }}
              >
                <img
                  src={work.img}
                  alt={work.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <h3 style={{ fontSize: "2.5rem" }}>{work.title}</h3>
                <p
                  style={{
                    fontFamily: "Satoshi",
                    color: "var(--fg-alt)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontSize: "0.9rem",
                  }}
                >
                  {work.cat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "6rem" }}
          >
            What Our <span className="text-stroke">Clients Say</span>
          </h2>
          <div
            className="mobile-col-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
            }}
          >
            {[
              {
                client: "TechFlow Inc",
                project: "E-Commerce Platform",
                result: "240% Sales Growth",
              },
              {
                client: "Creative Agency Co",
                project: "Brand Identity",
                result: "500K+ Impressions",
              },
              {
                client: "Innovation Hub",
                project: "Mobile App",
                result: "4.8/5 Rating",
              },
            ].map((case_study, i) => (
              <div
                key={i}
                className="glass-panel glass-card hover-trigger"
                style={{
                  padding: "3rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    {case_study.client}
                  </h3>
                  <p style={{ color: "var(--fg-alt)", marginBottom: "1rem" }}>
                    Project: {case_study.project}
                  </p>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      color: "var(--accent)",
                      fontWeight: 700,
                      marginTop: "1.5rem",
                    }}
                  >
                    {case_study.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM --- */}
      <section className="section-padding" style={{ padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <div
            className="flex-row-to-col"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "6rem",
            }}
          >
            <h2 style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 0.9 }}>
              Meet Our <br />
              <span className="text-stroke">Experts</span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--fg-alt)",
                maxWidth: "400px",
              }}
            >
              A collective of passionate designers, developers, and strategists
              dedicated to excellence.
            </p>
          </div>
          <div
            className="mobile-col-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
            }}
          >
            {[
              {
                name: "Alex Chen",
                role: "Creative Director",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
              },
              {
                name: "Sam Rodriguez",
                role: "Lead Developer",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
              },
              {
                name: "Jordan Blake",
                role: "UX/UI Specialist",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
              },
              {
                name: "Casey Anderson",
                role: "Strategy Lead",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="img-wrap reveal-img hover-trigger"
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "1.5rem",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      scale: 1.05,
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                    {member.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--accent)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              marginBottom: "6rem",
              textAlign: "center",
            }}
          >
            Powered By <span className="text-stroke">Latest Tech</span>
          </h2>
          <div
            className="mobile-col-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "GSAP",
              "WebGL",
              "Tailwind",
              "Node.js",
              "Three.js",
              "Figma",
              "GraphQL",
              "Framer Motion",
              "Prisma",
            ].map((tech, i) => (
              <div
                key={i}
                className="glass-panel glass-card hover-trigger"
                style={{
                  padding: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "150px",
                  textAlign: "center",
                }}
              >
                <h3 className="font-heading" style={{ fontSize: "1.3rem" }}>
                  {tech}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT LOGOS / TRUST SECTION --- */}
      <section
        className="section-padding"
        style={{
          padding: "8rem 3rem",
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
              marginBottom: "3rem",
            }}
          >
            Trusted by industry leaders
          </p>
          <div
            style={{
              display: "grid",
              gap: "2rem",
              alignItems: "center",
            }}
            className="home-grid-3 mobile-col-grid"
          >
            {[
              "TechFlow",
              "Aurora Digital",
              "Luna Media",
              "Velocity Co",
              "Prism Labs",
              "Nexus Pro",
            ].map((client, i) => (
              <div
                key={i}
                className="stagger-card"
                style={{
                  padding: "1.5rem",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  opacity: 0.7,
                  transition: "opacity 0.3s",
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAILED METRICS SECTION --- */}
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
          By The <span className="text-stroke">Numbers</span>
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--fg-alt)",
            marginBottom: "6rem",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 6rem",
          }}
        >
          We measure success through real impact and measurable results for our
          partners
        </p>

        <div
          style={{
            display: "grid",
            gap: "3rem",
          }}
          className="home-grid-3 mobile-col-grid"
        >
          {[
            {
              number: "200+",
              label: "Projects Delivered",
              desc: "From concept to launch",
            },
            {
              number: "$150M+",
              label: "Client Revenue Generated",
              desc: "Through digital transformation",
            },
            {
              number: "98%",
              label: "Client Satisfaction",
              desc: "Across all industries",
            },
            {
              number: "45+",
              label: "Awards & Recognition",
              desc: "Industry-leading excellence",
            },
            {
              number: "50+",
              label: "Creative Professionals",
              desc: "Passionate about your success",
            },
            {
              number: "15+",
              label: "Years Experience",
              desc: "Combined team expertise",
            },
          ].map((metric, i) => (
            <div
              key={i}
              className="stagger-card glass-panel glass-card"
              style={{
                padding: "3rem",
                textAlign: "center",
                borderRadius: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  marginBottom: "1rem",
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                {metric.number}
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "0.8rem",
                }}
              >
                {metric.label}
              </p>
              <p style={{ color: "var(--fg-alt)", fontSize: "0.95rem" }}>
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHO WE ARE --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div
          className="about-split"
          style={{
            maxWidth: "120rem",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          <div
            className="reveal-img about-img"
            style={{
              borderRadius: "2rem",
              overflow: "hidden",
              height: "450px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
              alt="About Us"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                marginBottom: "2rem",
                lineHeight: 0.9,
              }}
            >
              Who We <span className="text-stroke">Are</span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--fg-alt)",
                marginBottom: "2rem",
              }}
            >
              Prism is a creative studio specializing in digital transformation
              for ambitious brands. We combine strategic thinking with
              exceptional design and cutting-edge development.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--fg-alt)",
                marginBottom: "2rem",
              }}
            >
              Since 2018, we've helped over 200 companies reimagine their
              digital presence. Our team of 50+ designers, developers, and
              strategists work daily to create experiences that drive real
              business results.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "0.8rem 2rem",
                  borderRadius: "100px",
                  background: "var(--accent)",
                  color: "white",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
              <button
                style={{
                  padding: "0.8rem 2rem",
                  borderRadius: "100px",
                  background: "transparent",
                  color: "var(--fg)",
                  fontWeight: 700,
                  border: "2px solid var(--fg)",
                  cursor: "pointer",
                }}
              >
                Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED CASE STUDIES --- */}
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
          Featured <span className="text-stroke">Case Studies</span>
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--fg-alt)",
            marginBottom: "6rem",
            textAlign: "center",
          }}
        >
          See how we've transformed businesses across industries
        </p>

        <div
          style={{
            display: "grid",
            gap: "3rem",
          }}
          className="home-grid-3 mobile-col-grid"
        >
          {[
            {
              title: "TechFlow Platform Redesign",
              image:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
              results: "+156% conversion",
              industry: "SaaS",
            },
            {
              title: "Aurora E-commerce Transformation",
              image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
              results: "+210% sales",
              industry: "Retail",
            },
            {
              title: "Luna Brand Ecosystem",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
              results: "+140% awareness",
              industry: "Luxury",
            },
          ].map((study, i) => (
            <div
              key={i}
              className="home-card hover-trigger"
              style={{
                cursor: "pointer",
              }}
            >
              <div
                className="home-card-media"
                style={{ height: "300px", position: "relative" }}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "1.2rem",
                    right: "1.2rem",
                    background: `${getIndustryColorHex(study.industry)}22`,
                    color: getIndustryColorHex(study.industry),
                    padding: "0.55rem 0.95rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    border: `1px solid ${getIndustryColorHex(study.industry)}33`,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {study.industry}
                </div>

                <div className="home-card-overlay">
                  <h3
                    className="home-card-title"
                    style={{
                      marginTop: 0,
                      fontSize: "1.2rem",
                      color: getCaseTitleColor(study.industry),
                    }}
                  >
                    {study.title}
                  </h3>
                  <p
                    style={{
                      marginTop: "0.75rem",
                      fontSize: "0.95rem",
                      fontWeight: 900,
                      color: getIndustryColorHex(study.industry),
                    }}
                  >
                    {study.results}
                  </p>
                </div>
              </div>
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
              marginBottom: "6rem",
              textAlign: "center",
            }}
          >
            Industries We <span className="text-stroke">Serve</span>
          </h2>

          <div
            style={{
              display: "grid",
              gap: "2rem",
              alignItems: "stretch",
            }}
            className="home-grid-3 mobile-col-grid"
          >
            {[
              "SaaS & Technology",
              "E-commerce & Retail",
              "Healthcare",
              "Finance & Banking",
              "Media & Publishing",
              "Hospitality & Travel",
              "Education",
              "Manufacturing",
              "Real Estate & Construction",
            ].map((industry, i) => (
              <div
                key={i}
                className="home-eq-card home-industry-card stagger-card glass-panel glass-card"
                style={{
                  padding: "2.5rem",
                  textAlign: "center",
                  borderRadius: "1.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
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

      {/* --- EXTENDED TESTIMONIALS --- */}
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
          What Our <span className="text-stroke">Clients Say</span>
        </h2>

        <div
          style={{
            display: "grid",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="home-grid-3 mobile-col-grid"
        >
          {[
            {
              quote:
                "Prism completely transformed our digital presence. The results exceeded our expectations.",
              name: "Sarah Chen",
              role: "CEO",
              company: "TechFlow",
            },
            {
              quote:
                "Working with this team was effortless. They understood our vision immediately and delivered excellence.",
              name: "Marcus Rodriguez",
              role: "Founder",
              company: "Aurora",
            },
            {
              quote:
                "Outstanding quality at every step. Professional, creative, and results-oriented.",
              name: "Emma Johnson",
              role: "Marketing Director",
              company: "Luna",
            },
            {
              quote:
                "Best investment we made this year. Our conversion rates tripled.",
              name: "James Park",
              role: "CTO",
              company: "Velocity",
            },
            {
              quote:
                "Transformed our digital presence overnight. Awwwards-level quality at lightning speed.",
              name: "Sarah Chen",
              role: "Head of Marketing",
              company: "NovaTech",
            },
            {
              quote:
                "Their brutalist designs with flawless performance set us apart from every competitor.",
              name: "Michael Ortiz",
              role: "Founder & CEO",
              company: "Quantum Labs",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="home-eq-card home-testimonial-card stagger-card glass-panel glass-card"
              style={{ padding: "2.5rem", borderRadius: "1.5rem" }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                {[...Array(5)].map((_, idx) => (
                  <span
                    key={idx}
                    style={{
                      color: "var(--accent)",
                      fontSize: "1.1rem",
                      marginRight: "0.3rem",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  color: "var(--fg)",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.quote}"
              </p>
              <p style={{ fontWeight: 700 }}>{testimonial.name}</p>
              <p style={{ fontSize: "0.9rem", color: "var(--accent)" }}>
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BLOG/INSIGHTS --- */}
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
            Latest <span className="text-stroke">Insights</span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--fg-alt)",
              marginBottom: "6rem",
              textAlign: "center",
            }}
          >
            Industry trends, tips, and best practices from our team
          </p>

          <div
            style={{
              display: "grid",
              gap: "2rem",
            }}
            className="home-grid-3 mobile-col-grid"
          >
            {[
              {
                title: "The Future of Web Design in 2024",
                category: "Design",
                date: "Mar 15, 2024",
                image:
                  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600",
              },
              {
                title: "Building High-Performance React Applications",
                category: "Development",
                date: "Mar 10, 2024",
                image:
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
              },
              {
                title: "Converting Users: The Power of Great UX",
                category: "Strategy",
                date: "Mar 5, 2024",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="home-card hover-trigger"
                style={{
                  cursor: "pointer",
                }}
              >
                <div
                  className="home-card-media"
                  style={{ height: "250px", position: "relative" }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="home-card-overlay">
                    <span
                      className="home-card-kicker"
                      style={{
                        background: `${getIndustryColorHex(post.category)}22`,
                        color: getIndustryColorHex(post.category),
                      }}
                    >
                      {post.category}
                    </span>
                    <h3
                      className="home-card-title"
                      style={{
                        color: getInsightTitleColor(post.category),
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="home-card-meta"
                      style={{
                        color: getInsightTitleColor(post.category),
                      }}
                    >
                      {post.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
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
          Frequently Asked <span className="text-stroke">Questions</span>
        </h2>

        <div
          style={{
            display: "grid",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="home-grid-3 mobile-col-grid"
        >
          {[
            {
              q: "How do you start a project?",
              a: "We begin with a comprehensive discovery phase where we learn about your business, goals, and target audience.",
            },
            {
              q: "What is your typical timeline?",
              a: "Projects typically range from 8-16 weeks depending on scope. We provide detailed timelines during proposal phase.",
            },
            {
              q: "Do you offer support after launch?",
              a: "Yes, we offer flexible support packages for ongoing optimization, updates, and enhancements.",
            },
            {
              q: "What technologies do you use?",
              a: "We work with React, Next.js, Node.js, TypeScript, Tailwind CSS, and other modern technologies based on project needs.",
            },
            {
              q: "What services do you offer?",
              a: "We specialize in Awwwards-winning websites, premium brand identities, WebGL experiences, creative coding, UI/UX design, and full-stack development.",
            },
            {
              q: "How long does a typical project take?",
              a: "Discovery & strategy: 2-4 weeks. Design & prototyping: 4-6 weeks. Development & refinement: 6-10 weeks. Total timeline varies by project complexity.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="home-eq-card home-faq-card stagger-card glass-panel glass-card"
              style={{ padding: "2.5rem", borderRadius: "1.5rem" }}
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
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "2rem",
            }}
          >
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
                Our Services
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
        className="section-padding"
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
            bottom: "-50%",
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
            Let's Build Something Epic Together
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
    </div>
  );
}
