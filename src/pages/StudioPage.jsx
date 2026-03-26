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

// export default function StudioPage() {
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

//     // Team Card Animations
//     gsap.utils.toArray(".team-card").forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         { opacity: 0, y: 60, rotateY: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           rotateY: 0,
//           duration: 1.2,
//           delay: 0.15 * index,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 75%",
//             toggleActions: "play none none none",
//           },
//         },
//       );
//     });

//     // Image Reveals
//     gsap.utils.toArray(".studio-img").forEach((img) => {
//       gsap.fromTo(
//         img,
//         { clipPath: "inset(50% 0)", opacity: 0.5 },
//         {
//           clipPath: "inset(0% 0)",
//           opacity: 1,
//           duration: 2,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: img,
//             start: "top 80%",
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

//   const teamMembers = [
//     { name: "Alex Johnson", role: "Lead Design", color: "#ff6b6b" },
//     { name: "Sarah Chen", role: "Creative Director", color: "#4ecdc4" },
//     { name: "Marcus Lee", role: "Lead Developer", color: "#ffd93d" },
//     { name: "Emma Blake", role: "Strategy Lead", color: "#a8edea" },
//     { name: "David Park", role: "Motion Designer", color: "#ff8c42" },
//     { name: "Nina Laurent", role: "UI/UX Specialist", color: "#b19cd9" },
//     { name: "Liam Carter", role: "3D Artist", color: "#ff9ff3" },
//     { name: "Sophia Reyes", role: "Frontend Engineer", color: "#54a0ff" },
//   ];

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
//               Meet Our Team
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
//               <SplitText text="Creative" />
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="Minds" className="text-stroke" />
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="United." />
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
//               Our multidisciplinary team brings together world-class designers,
//               developers, and strategists united by a passion for excellence.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- TEAM GRID --- */}
//       <section
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "3rem",
//           }}
//         >
//           {teamMembers.map((member, i) => (
//             <div
//               key={i}
//               className="team-card glass-panel glass-card hover-trigger"
//               style={{
//                 padding: "0",
//                 overflow: "hidden",
//                 position: "relative",
//                 minHeight: "380px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-end",
//                 cursor: "pointer",
//               }}
//             >
//               {/* Gradient Background */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background: `linear-gradient(135deg, ${member.color}20 0%, ${member.color}05 100%)`,
//                   zIndex: 1,
//                 }}
//               />

//               {/* Avatar Placeholder */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   height: "50%",
//                   background: `linear-gradient(180deg, ${member.color} 0%, ${member.color}80 100%)`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "4rem",
//                   fontWeight: 900,
//                   color: "rgba(255,255,255,0.3)",
//                   zIndex: 2,
//                 }}
//               >
//                 {member.name.charAt(0)}
//               </div>

//               {/* Content */}
//               <div
//                 style={{ padding: "2.5rem", position: "relative", zIndex: 3 }}
//               >
//                 <p
//                   style={{
//                     color: "var(--accent)",
//                     fontSize: "0.8rem",
//                     letterSpacing: "0.1em",
//                     textTransform: "uppercase",
//                     marginBottom: "0.5rem",
//                     fontWeight: 600,
//                   }}
//                 >
//                   {member.role}
//                 </p>
//                 <h3
//                   style={{
//                     fontSize: "1.5rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   {member.name}
//                 </h3>
//                 <p
//                   style={{
//                     color: "var(--fg-alt)",
//                     fontSize: "0.9rem",
//                     lineHeight: 1.5,
//                   }}
//                 >
//                   Passionate about creating innovative digital experiences
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- VALUES SECTION --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "8rem" }}
//           >
//             Our <span className="text-stroke">Values</span>
//           </h2>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//               gap: "3rem",
//             }}
//           >
//             {[
//               {
//                 title: "Excellence",
//                 desc: "We pursue perfection in every project we undertake",
//               },
//               {
//                 title: "Innovation",
//                 desc: "Constantly exploring new ideas and technologies",
//               },
//               {
//                 title: "Collaboration",
//                 desc: "Working closely with clients as true partners",
//               },
//               {
//                 title: "Integrity",
//                 desc: "Building trust through transparency and honesty",
//               },
//             ].map((value, i) => (
//               <div
//                 key={i}
//                 className="glass-panel glass-card hover-trigger"
//                 style={{ padding: "3rem" }}
//               >
//                 <h3
//                   style={{
//                     fontSize: "1.8rem",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {value.title}
//                 </h3>
//                 <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
//                   {value.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- WORKSPACE SECTION --- */}
//       <section
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <h2
//           style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "6rem" }}
//         >
//           Our <span className="text-stroke">Workspace</span>
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//             gap: "3rem",
//           }}
//         >
//           {[
//             { title: "Design Studio", desc: "Where ideas come to life" },
//             { title: "Development Lab", desc: "Cutting-edge technology hub" },
//             {
//               title: "Collaboration Spaces",
//               desc: "Open areas for team creativity",
//             },
//             { title: "Innovation Zone", desc: "Experimentation and research" },
//             {
//               title: "Motion Capture Studio",
//               desc: "Creating cinematic animations",
//             },
//             {
//               title: "Client Experience Room",
//               desc: "Premium presentation space",
//             },
//           ].map((space, i) => (
//             <div
//               key={i}
//               className="studio-img glass-panel glass-card hover-trigger"
//               style={{
//                 padding: "3rem",
//                 minHeight: "250px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Gradient Background */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background: `linear-gradient(135deg, var(--accent)15 0%, var(--accent)05 100%)`,
//                   zIndex: 0,
//                 }}
//               />

//               <div style={{ position: "relative", zIndex: 1 }}>
//                 <h3
//                   style={{
//                     fontSize: "1.8rem",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {space.title}
//                 </h3>
//                 <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
//                   {space.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- OUR STORY --- */}
//       <section
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//             gap: "6rem",
//             alignItems: "center",
//           }}
//         >
//           <div>
//             <h2
//               style={{
//                 fontSize: "clamp(2.5rem, 6vw, 5rem)",
//                 marginBottom: "2rem",
//                 lineHeight: 0.9,
//               }}
//             >
//               How Prism <span className="text-stroke">Started</span>
//             </h2>
//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 lineHeight: 1.8,
//                 color: "var(--fg-alt)",
//                 marginBottom: "2rem",
//               }}
//             >
//               Founded in 2018 by a collective of designers and developers, Prism
//               was born from a simple belief: great digital experiences should be
//               accessible to everyone.
//             </p>
//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 lineHeight: 1.8,
//                 color: "var(--fg-alt)",
//                 marginBottom: "2rem",
//               }}
//             >
//               What started as a small team in a cramped studio has grown into a
//               50-person creative powerhouse. But we've never lost sight of our
//               core mission: delivering transformative digital solutions.
//             </p>
//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 lineHeight: 1.8,
//                 color: "var(--fg-alt)",
//               }}
//             >
//               Today, we partner with Fortune 500 companies and ambitious
//               startups alike, bringing our unique blend of creativity, strategy,
//               and technical excellence to every project.
//             </p>
//           </div>
//           <div
//             className="reveal-img"
//             style={{
//               borderRadius: "2rem",
//               overflow: "hidden",
//               height: "500px",
//             }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
//               alt="Studio"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* --- COMPANY STATS --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//               gap: "3rem",
//             }}
//           >
//             {[
//               { number: "50+", label: "Creative Professionals" },
//               { number: "200+", label: "Projects Delivered" },
//               { number: "$15M+", label: "Client Investment Managed" },
//               { number: "6", label: "Years Building Excellence" },
//               { number: "45+", label: "Industry Awards Won" },
//               { number: "98%", label: "Client Satisfaction Rate" },
//               { number: "12", label: "Countries Served" },
//               { number: "100%", label: "On-Time Delivery" },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className="stagger-card"
//                 style={{ textAlign: "center", padding: "3rem" }}
//               >
//                 <p
//                   style={{
//                     fontSize: "3.5rem",
//                     fontWeight: 700,
//                     color: "var(--accent)",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {stat.number}
//                 </p>
//                 <p style={{ fontSize: "1.1rem", color: "var(--fg-alt)" }}>
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- EXTENDED TEAM BIOS --- */}
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
//           Meet the <span className="text-stroke">Minds</span> Behind the Magic
//         </h2>
//         <p
//           style={{
//             fontSize: "1.2rem",
//             color: "var(--fg-alt)",
//             marginBottom: "6rem",
//             textAlign: "center",
//           }}
//         >
//           Our diverse team brings over 150 years of combined creative experience
//         </p>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "3rem",
//           }}
//         >
//           {[
//             {
//               name: "Alex Rivera",
//               role: "Creative Director",
//               expertise: [
//                 "Design Strategy",
//                 "Brand Development",
//                 "Creative Direction",
//               ],
//               image:
//                 "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
//             },
//             {
//               name: "Jordan Chen",
//               role: "Lead Developer",
//               expertise: ["React", "Performance", "Architecture"],
//               image:
//                 "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
//             },
//             {
//               name: "Maya Patel",
//               role: "UX Lead",
//               expertise: ["User Research", "Accessibility", "UX Systems"],
//               image:
//                 "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
//             },
//             {
//               name: "Marcus Thompson",
//               role: "Strategy Lead",
//               expertise: ["Business Strategy", "Analytics", "Growth"],
//               image:
//                 "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
//             },
//           ].map((member, i) => (
//             <div
//               key={i}
//               className="stagger-card glass-panel glass-card"
//               style={{ overflow: "hidden", borderRadius: "1.5rem" }}
//             >
//               <div
//                 style={{
//                   height: "350px",
//                   overflow: "hidden",
//                   borderRadius: "1.5rem",
//                 }}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div style={{ padding: "2rem" }}>
//                 <h3
//                   style={{
//                     fontSize: "1.3rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                     marginBottom: "0.5rem",
//                   }}
//                 >
//                   {member.name}
//                 </h3>
//                 <p
//                   style={{
//                     color: "var(--accent)",
//                     fontSize: "0.9rem",
//                     fontWeight: 600,
//                     marginBottom: "1.5rem",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {member.role}
//                 </p>
//                 <div
//                   style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
//                 >
//                   {member.expertise.map((exp, idx) => (
//                     <span
//                       key={idx}
//                       style={{
//                         fontSize: "0.8rem",
//                         padding: "0.4rem 0.8rem",
//                         background: "var(--fg)",
//                         color: "var(--bg)",
//                         borderRadius: "100px",
//                       }}
//                     >
//                       {exp}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- STUDIO CULTURE --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "clamp(3rem, 6vw, 6rem)",
//               marginBottom: "6rem",
//               textAlign: "center",
//             }}
//           >
//             Our <span className="text-stroke">Culture</span>
//           </h2>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//               gap: "4rem",
//               alignItems: "center",
//               marginBottom: "8rem",
//             }}
//           >
//             <div
//               className="reveal-img"
//               style={{
//                 borderRadius: "2rem",
//                 overflow: "hidden",
//                 height: "450px",
//               }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
//                 alt="Collaborative workspace"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </div>
//             <div>
//               <h3
//                 style={{
//                   fontSize: "2rem",
//                   marginBottom: "2rem",
//                   fontFamily: "'Clash Display', sans-serif",
//                 }}
//               >
//                 Collaboration First
//               </h3>
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   lineHeight: 1.8,
//                   color: "var(--fg-alt)",
//                   marginBottom: "2rem",
//                 }}
//               >
//                 We believe the best ideas come from diverse perspectives working
//                 together. Our open-plan studio encourages constant collaboration
//                 and cross-functional teamwork.
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "1.5rem",
//                 }}
//               >
//                 {[
//                   "Daily standups and brainstorms",
//                   "Weekly creative workshops",
//                   "Monthly all-hands sessions",
//                 ].map((item, i) => (
//                   <p
//                     key={i}
//                     style={{
//                       fontSize: "1rem",
//                       fontWeight: 600,
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "1rem",
//                     }}
//                   >
//                     <span style={{ color: "var(--accent)" }}>✓</span> {item}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//               gap: "2rem",
//             }}
//           >
//             {[
//               {
//                 icon: "🎓",
//                 title: "Continuous Learning",
//                 desc: "Monthly training budgets and professional development stipends for all team members",
//               },
//               {
//                 icon: "🌍",
//                 title: "Global Perspective",
//                 desc: "Team members from 15+ countries bringing diverse perspectives and ideas",
//               },
//               {
//                 icon: "⚖️",
//                 title: "Work-Life Balance",
//                 desc: "Flexible hours, remote options, and 25 days PTO to recharge and refresh",
//               },
//               {
//                 icon: "🏆",
//                 title: "Recognition Culture",
//                 desc: "Celebrate wins big and small with monthly team recognition and bonuses",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="stagger-card glass-panel glass-card"
//                 style={{
//                   padding: "2.5rem",
//                   textAlign: "center",
//                   borderRadius: "1.5rem",
//                 }}
//               >
//                 <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>
//                   {item.icon}
//                 </p>
//                 <h3
//                   style={{
//                     fontSize: "1.2rem",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- AWARDS & RECOGNITION --- */}
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
//           Awards & <span className="text-stroke">Recognition</span>
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
//               year: "2025",
//               award: "Awwwards Site of the Day",
//               org: "Awwwards",
//             },
//             {
//               year: "2025",
//               award: "Agency of the Year",
//               org: "Webby Awards",
//             },

//             {
//               year: "2024",
//               award: "Best Creative Agency",
//               org: "Digital Awards Summit",
//             },
//             {
//               year: "2024",
//               award: "Innovation Excellence",
//               org: "Tech Leaders Conference",
//             },
//             {
//               year: "2023",
//               award: "Design Team of the Year",
//               org: "Creative Excellence Awards",
//             },
//             {
//               year: "2023",
//               award: "Best Client Experience",
//               org: "Industry Recognition Awards",
//             },
//             {
//               year: "2023",
//               award: "Top 10 Agencies Nationwide",
//               org: "Business Monthly",
//             },
//             {
//               year: "2022",
//               award: "Emerging Creative Leader",
//               org: "Young Creatives Forum",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="stagger-card glass-panel glass-card"
//               style={{ padding: "2rem", borderLeft: "4px solid var(--accent)" }}
//             >
//               <p
//                 style={{
//                   color: "var(--accent)",
//                   fontSize: "0.8rem",
//                   fontWeight: 700,
//                   textTransform: "uppercase",
//                   marginBottom: "0.5rem",
//                 }}
//               >
//                 {item.year}
//               </p>
//               <p
//                 style={{
//                   fontSize: "1.1rem",
//                   fontWeight: 600,
//                   marginBottom: "0.5rem",
//                 }}
//               >
//                 {item.award}
//               </p>
//               <p style={{ color: "var(--fg-alt)", fontSize: "0.9rem" }}>
//                 {item.org}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- CAREERS SECTION --- */}
//       <section style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}>
//         <div
//           style={{ maxWidth: "120rem", margin: "0 auto", textAlign: "center" }}
//         >
//           <h2
//             style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "2rem" }}
//           >
//             Join Us & Make an <span className="text-stroke">Impact</span>
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "var(--fg-alt)",
//               marginBottom: "4rem",
//               maxWidth: "700px",
//               margin: "0 auto 4rem",
//             }}
//           >
//             We're always looking for talented individuals who share our passion
//             for excellence and innovation.
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
//             View Open Positions
//           </button>
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
//             Join Our Journey
//           </p>
//           <h2
//             style={{
//               fontSize: "clamp(2rem, 8vw, 5rem)",
//               lineHeight: 0.9,
//               marginBottom: "2rem",
//             }}
//           >
//             Work with a team that cares about your success
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
//             Contact Us
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
import { GraduationCap, Globe, Scale, Trophy } from "lucide-react";

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

export default function StudioPage() {
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

    // Team Card Animations
    gsap.utils.toArray(".team-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateY: 20 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1.2,
          delay: 0.15 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Image Reveals
    gsap.utils.toArray(".studio-img").forEach((img) => {
      gsap.fromTo(
        img,
        { clipPath: "inset(50% 0)", opacity: 0.5 },
        {
          clipPath: "inset(0% 0)",
          opacity: 1,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
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

  const teamMembers = [
    { name: "Alex Johnson", role: "Lead Design", color: "#ff6b6b" },
    { name: "Sarah Chen", role: "Creative Director", color: "#4ecdc4" },
    { name: "Marcus Lee", role: "Lead Developer", color: "#ffd93d" },
    { name: "Emma Blake", role: "Strategy Lead", color: "#a8edea" },
    { name: "David Park", role: "Motion Designer", color: "#ff8c42" },
    { name: "Nina Laurent", role: "UI/UX Specialist", color: "#b19cd9" },
    { name: "Liam Carter", role: "3D Artist", color: "#ff9ff3" },
    { name: "Sophia Reyes", role: "Frontend Engineer", color: "#54a0ff" },
  ];

  return (
    <div ref={wrapperRef} style={{ paddingTop: "100px" }}>
      {/* --- MOBILE RESPONSIVE OVERRIDES --- */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important; /* Fixes massive gap below hero */
            padding: 6rem 1.5rem 4rem !important;
            justify-content: flex-start !important;
          }
          .hero-bottom-flex {
            margin-top: 3rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          /* Squashes the 12rem massive gaps on mobile */
          .section-padding {
            padding: 5rem 1.5rem !important;
          }
          .cta-section {
            padding: 8rem 1.5rem !important;
          }
          /* Forces all multi-column layouts into a single, neat column */
          .responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
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
              Meet Our Team
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
              <SplitText text="Creative" />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="Minds" className="text-stroke" />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="United." />
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
              Our multidisciplinary team brings together world-class designers,
              developers, and strategists united by a passion for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* --- TEAM GRID --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <div
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="team-card glass-panel glass-card hover-trigger"
              style={{
                padding: "0",
                overflow: "hidden",
                position: "relative",
                minHeight: "380px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
            >
              {/* Gradient Background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${member.color}20 0%, ${member.color}05 100%)`,
                  zIndex: 1,
                }}
              />

              {/* Avatar Placeholder */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: `linear-gradient(180deg, ${member.color} 0%, ${member.color}80 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.3)",
                  zIndex: 2,
                }}
              >
                {member.name.charAt(0)}
              </div>

              {/* Content */}
              <div
                style={{ padding: "2.5rem", position: "relative", zIndex: 3 }}
              >
                <p
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  {member.role}
                </p>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "'Clash Display', sans-serif",
                    marginBottom: "1rem",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    color: "var(--fg-alt)",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  Passionate about creating innovative digital experiences
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "8rem" }}
          >
            Our <span className="text-stroke">Values</span>
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
                title: "Excellence",
                desc: "We pursue perfection in every project we undertake",
              },
              {
                title: "Innovation",
                desc: "Constantly exploring new ideas and technologies",
              },
              {
                title: "Collaboration",
                desc: "Working closely with clients as true partners",
              },
              {
                title: "Integrity",
                desc: "Building trust through transparency and honesty",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="glass-panel glass-card hover-trigger"
                style={{ padding: "3rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {value.title}
                </h3>
                <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORKSPACE SECTION --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <h2
          style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "6rem" }}
        >
          Our <span className="text-stroke">Workspace</span>
        </h2>

        <div
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
          }}
        >
          {[
            { title: "Design Studio", desc: "Where ideas come to life" },
            { title: "Development Lab", desc: "Cutting-edge technology hub" },
            {
              title: "Collaboration Spaces",
              desc: "Open areas for team creativity",
            },
            { title: "Innovation Zone", desc: "Experimentation and research" },
            {
              title: "Motion Capture Studio",
              desc: "Creating cinematic animations",
            },
            {
              title: "Client Experience Room",
              desc: "Premium presentation space",
            },
          ].map((space, i) => (
            <div
              key={i}
              className="studio-img glass-panel glass-card hover-trigger"
              style={{
                padding: "3rem",
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Gradient Background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, var(--accent)15 0%, var(--accent)05 100%)`,
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {space.title}
                </h3>
                <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
                  {space.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <div
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                marginBottom: "2rem",
                lineHeight: 0.9,
              }}
            >
              How Prism <span className="text-stroke">Started</span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--fg-alt)",
                marginBottom: "2rem",
              }}
            >
              Founded in 2018 by a collective of designers and developers, Prism
              was born from a simple belief: great digital experiences should be
              accessible to everyone.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--fg-alt)",
                marginBottom: "2rem",
              }}
            >
              What started as a small team in a cramped studio has grown into a
              50-person creative powerhouse. But we've never lost sight of our
              core mission: delivering transformative digital solutions.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--fg-alt)",
              }}
            >
              Today, we partner with Fortune 500 companies and ambitious
              startups alike, bringing our unique blend of creativity, strategy,
              and technical excellence to every project.
            </p>
          </div>
          <div
            className="reveal-img"
            style={{
              borderRadius: "2rem",
              overflow: "hidden",
              height: "500px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
              alt="Studio"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* --- COMPANY STATS --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "3rem",
            }}
          >
            {[
              { number: "50+", label: "Creative Professionals" },
              { number: "200+", label: "Projects Delivered" },
              { number: "$15M+", label: "Client Investment Managed" },
              { number: "6", label: "Years Building Excellence" },
              { number: "45+", label: "Industry Awards Won" },
              { number: "98%", label: "Client Satisfaction Rate" },
              { number: "12", label: "Countries Served" },
              { number: "100%", label: "On-Time Delivery" },
            ].map((stat, i) => (
              <div
                key={i}
                className="stagger-card"
                style={{ textAlign: "center", padding: "3rem" }}
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
                  {stat.number}
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--fg-alt)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXTENDED TEAM BIOS --- */}
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
          Meet the <span className="text-stroke">Minds</span> Behind the Magic
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--fg-alt)",
            marginBottom: "6rem",
            textAlign: "center",
          }}
        >
          Our diverse team brings over 150 years of combined creative experience
        </p>

        <div
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          {[
            {
              name: "Alex Rivera",
              role: "Creative Director",
              expertise: [
                "Design Strategy",
                "Brand Development",
                "Creative Direction",
              ],
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
            },
            {
              name: "Jordan Chen",
              role: "Lead Developer",
              expertise: ["React", "Performance", "Architecture"],
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
            },
            {
              name: "Maya Patel",
              role: "UX Lead",
              expertise: ["User Research", "Accessibility", "UX Systems"],
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
            },
            {
              name: "Marcus Thompson",
              role: "Strategy Lead",
              expertise: ["Business Strategy", "Analytics", "Growth"],
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="stagger-card glass-panel glass-card"
              style={{ overflow: "hidden", borderRadius: "1.5rem" }}
            >
              <div
                style={{
                  height: "350px",
                  overflow: "hidden",
                  borderRadius: "1.5rem",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontFamily: "'Clash Display', sans-serif",
                    marginBottom: "0.5rem",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  {member.role}
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {member.expertise.map((exp, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.4rem 0.8rem",
                        background: "var(--fg)",
                        color: "var(--bg)",
                        borderRadius: "100px",
                      }}
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STUDIO CULTURE --- */}
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
            Our <span className="text-stroke">Culture</span>
          </h2>

          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
              marginBottom: "8rem",
            }}
          >
            <div
              className="reveal-img"
              style={{
                borderRadius: "2rem",
                overflow: "hidden",
                height: "450px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                alt="Collaborative workspace"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "2rem",
                  marginBottom: "2rem",
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                Collaboration First
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "var(--fg-alt)",
                  marginBottom: "2rem",
                }}
              >
                We believe the best ideas come from diverse perspectives working
                together. Our open-plan studio encourages constant collaboration
                and cross-functional teamwork.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {[
                  "Daily standups and brainstorms",
                  "Weekly creative workshops",
                  "Monthly all-hands sessions",
                ].map((item, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>✓</span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

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
                icon: <GraduationCap size={48} strokeWidth={1.5} />,
                title: "Continuous Learning",
                desc: "Monthly training budgets and professional development stipends for all team members",
                color: "#0ea5e9", // Sky Blue
              },
              {
                icon: <Globe size={48} strokeWidth={1.5} />,
                title: "Global Perspective",
                desc: "Team members from 15+ countries bringing diverse perspectives and ideas",
                color: "#10b981", // Emerald Green
              },
              {
                icon: <Scale size={48} strokeWidth={1.5} />,
                title: "Work-Life Balance",
                desc: "Flexible hours, remote options, and 25 days PTO to recharge and refresh",
                color: "#8b5cf6", // Violet
              },
              {
                icon: <Trophy size={48} strokeWidth={1.5} />,
                title: "Recognition Culture",
                desc: "Celebrate wins big and small with monthly team recognition and bonuses",
                color: "#f59e0b", // Amber
              },
            ].map((item, i) => (
              <div
                key={i}
                className="stagger-card hover-trigger"
                style={{
                  padding: "2.5rem",
                  textAlign: "center",
                  borderRadius: "1.5rem",
                  background: item.color,
                  color: "#ffffff",
                  boxShadow: `0 10px 30px -10px ${item.color}60`,
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                    fontFamily: "'Clash Display', sans-serif",
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AWARDS & RECOGNITION --- */}
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
          Awards & <span className="text-stroke">Recognition</span>
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
              year: "2025",
              award: "Awwwards Site of the Day",
              org: "Awwwards",
            },
            {
              year: "2025",
              award: "Agency of the Year",
              org: "Webby Awards",
            },

            {
              year: "2024",
              award: "Best Creative Agency",
              org: "Digital Awards Summit",
            },
            {
              year: "2024",
              award: "Innovation Excellence",
              org: "Tech Leaders Conference",
            },
            {
              year: "2023",
              award: "Design Team of the Year",
              org: "Creative Excellence Awards",
            },
            {
              year: "2023",
              award: "Best Client Experience",
              org: "Industry Recognition Awards",
            },
            {
              year: "2023",
              award: "Top 10 Agencies Nationwide",
              org: "Business Monthly",
            },
            {
              year: "2022",
              award: "Emerging Creative Leader",
              org: "Young Creatives Forum",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="stagger-card glass-panel glass-card"
              style={{ padding: "2rem", borderLeft: "4px solid var(--accent)" }}
            >
              <p
                style={{
                  color: "var(--accent)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                {item.year}
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {item.award}
              </p>
              <p style={{ color: "var(--fg-alt)", fontSize: "0.9rem" }}>
                {item.org}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CAREERS SECTION --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div
          style={{ maxWidth: "120rem", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "2rem" }}
          >
            Join Us & Make an <span className="text-stroke">Impact</span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--fg-alt)",
              marginBottom: "4rem",
              maxWidth: "700px",
              margin: "0 auto 4rem",
            }}
          >
            We're always looking for talented individuals who share our passion
            for excellence and innovation.
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
            View Open Positions
          </button>
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
            Join Our Journey
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 8vw, 5rem)",
              lineHeight: 0.9,
              marginBottom: "2rem",
            }}
          >
            Work with a team that cares about your success
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
            }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
