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

// export default function ContactPage() {
//   const wrapperRef = useRef(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

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

//     // Form Animations
//     gsap.utils.toArray(".form-group").forEach((group, index) => {
//       gsap.fromTo(
//         group,
//         { opacity: 0, y: 30, scale: 0.98 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           delay: 0.1 * index,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: group,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//         },
//       );
//     });

//     // Contact Info Animations
//     gsap.utils.toArray(".contact-info-item").forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         { opacity: 0, x: -40 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1,
//           delay: 0.15 * index,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: item,
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     gsap.to(".form-submit-btn", { scale: 0.95, duration: 0.2 });
//     setTimeout(() => {
//       gsap.to(".form-submit-btn", { scale: 1, duration: 0.2 });
//       setSubmitted(true);
//       gsap.fromTo(
//         ".success-message",
//         { opacity: 0, scale: 0.8 },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           ease: "back.out",
//         },
//       );
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormData({ name: "", email: "", message: "" });
//       }, 3000);
//     }, 200);
//   };

//   return (
//     <div ref={wrapperRef} style={{ paddingTop: "100px" }}>
//       {/* --- MOBILE RESPONSIVE OVERRIDES --- */}
//       <style>{`
//         @media (max-width: 768px) {
//           .hero-section {
//             min-height: auto !important; /* Fixes massive gap below hero */
//             padding: 4rem 1.5rem 2rem !important;
//             justify-content: flex-start !important;
//           }
//           .hero-bottom-flex {
//             margin-top: 3rem !important;
//             flex-direction: column !important;
//             align-items: flex-start !important;
//           }
//           /* This class squashes the 12rem/15rem massive gaps on mobile */
//           .section-padding {
//             padding: 5rem 1.5rem !important;
//           }
//           .contact-grid {
//             gap: 3rem !important; /* Reduces the 6rem gap between form and info */
//           }
//           .newsletter-box {
//             padding: 2.5rem 1.5rem !important; /* Shrinks the giant red box padding */
//           }
//           .newsletter-form {
//             flex-direction: column !important; /* Stacks input and button on mobile */
//           }
//         }
//       `}</style>

//       {/* --- HERO SECTION --- */}
//       <section
//         className="hero-section"
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "1rem 3rem 4rem",
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
//               Get in Touch
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
//               <SplitText text="Let's" />
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="Talk" className="text-stroke" />
//             </div>
//             <div style={{ marginTop: "1rem" }}>
//               <SplitText text="Today." />
//             </div>
//           </h1>

//           <div
//             className="hero-bottom-flex"
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
//               Have a project in mind? We'd love to hear about it. Reach out and
//               let's discuss how we can work together to bring your vision to
//               life.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <section
//         className="section-padding"
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <div
//           className="contact-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//             gap: "6rem",
//             alignItems: "start",
//           }}
//         >
//           {/* Contact Form */}
//           <div>
//             <h2
//               style={{
//                 fontSize: "2.5rem",
//                 marginBottom: "3rem",
//                 fontFamily: "'Clash Display', sans-serif",
//               }}
//             >
//               Send us a message
//             </h2>

//             <form onSubmit={handleSubmit}>
//               {/* Name Input */}
//               <div className="form-group" style={{ marginBottom: "2rem" }}>
//                 <label
//                   style={{
//                     display: "block",
//                     fontSize: "0.9rem",
//                     fontWeight: 600,
//                     marginBottom: "0.8rem",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.1em",
//                     color: "var(--fg)",
//                   }}
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "1rem",
//                     border: "1px solid var(--border)",
//                     borderRadius: "8px",
//                     background: "var(--input-bg)",
//                     color: "var(--fg)",
//                     fontFamily: "Satoshi",
//                     fontSize: "1rem",
//                     transition: "all 0.3s ease",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => {
//                     gsap.to(e.target, {
//                       borderColor: "var(--accent)",
//                       duration: 0.3,
//                     });
//                   }}
//                   onBlur={(e) => {
//                     gsap.to(e.target, {
//                       borderColor: "var(--border)",
//                       duration: 0.3,
//                     });
//                   }}
//                   placeholder="Your name"
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="form-group" style={{ marginBottom: "2rem" }}>
//                 <label
//                   style={{
//                     display: "block",
//                     fontSize: "0.9rem",
//                     fontWeight: 600,
//                     marginBottom: "0.8rem",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.1em",
//                     color: "var(--fg)",
//                   }}
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "1rem",
//                     border: "1px solid var(--border)",
//                     borderRadius: "8px",
//                     background: "var(--input-bg)",
//                     color: "var(--fg)",
//                     fontFamily: "Satoshi",
//                     fontSize: "1rem",
//                     transition: "all 0.3s ease",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => {
//                     gsap.to(e.target, {
//                       borderColor: "var(--accent)",
//                       duration: 0.3,
//                     });
//                   }}
//                   onBlur={(e) => {
//                     gsap.to(e.target, {
//                       borderColor: "var(--border)",
//                       duration: 0.3,
//                     });
//                   }}
//                   placeholder="your@email.com"
//                 />
//               </div>

//               {/* Message Textarea */}
//               <div className="form-group" style={{ marginBottom: "2rem" }}>
//                 <label
//                   style={{
//                     display: "block",
//                     fontSize: "0.9rem",
//                     fontWeight: 600,
//                     marginBottom: "0.8rem",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.1em",
//                     color: "var(--fg)",
//                   }}
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="6"
//                   style={{
//                     width: "100%",
//                     padding: "1rem",
//                     border: "1px solid var(--border)",
//                     borderRadius: "8px",
//                     background: "var(--input-bg)",
//                     color: "var(--fg)",
//                     fontFamily: "Satoshi",
//                     fontSize: "1rem",
//                     transition: "all 0.3s ease",
//                     outline: "none",
//                     resize: "vertical",
//                   }}
//                   onFocus={(e) => {
//                     gsap.to(e.target, {
//                       borderColor: "var(--accent)",
//                       duration: 0.3,
//                     });
//                   }}
//                   onBlur={(e) => {
//                     gsap.to(e.target, {
//                       borderColor: "var(--border)",
//                       duration: 0.3,
//                     });
//                   }}
//                   placeholder="Tell us about your project..."
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="form-submit-btn magnetic-btn hover-trigger"
//                 style={{
//                   display: "inline-flex",
//                   padding: "1rem 2.5rem",
//                   borderRadius: "100px",
//                   background: "var(--accent)",
//                   color: "white",
//                   fontWeight: 700,
//                   letterSpacing: "0.05em",
//                   textTransform: "uppercase",
//                   fontSize: "0.85rem",
//                   border: "none",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 Send Message
//               </button>

//               {/* Success Message */}
//               {submitted && (
//                 <div
//                   className="success-message"
//                   style={{
//                     marginTop: "2rem",
//                     padding: "1.5rem",
//                     borderRadius: "8px",
//                     background: "var(--accent)20",
//                     color: "var(--accent)",
//                     textAlign: "center",
//                     fontWeight: 600,
//                   }}
//                 >
//                   ✓ Message sent successfully!
//                 </div>
//               )}
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h2
//               style={{
//                 fontSize: "2.5rem",
//                 marginBottom: "3rem",
//                 fontFamily: "'Clash Display', sans-serif",
//               }}
//             >
//               Other ways to reach us
//             </h2>

//             <div
//               style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
//             >
//               {[
//                 {
//                   title: "Email",
//                   value: "hello@prism.studio",
//                   icon: "📧",
//                 },
//                 {
//                   title: "Phone",
//                   value: "+1 (555) 123-4567",
//                   icon: "📱",
//                 },
//                 {
//                   title: "Office",
//                   value: "San Francisco, CA 94102",
//                   icon: "📍",
//                 },
//                 {
//                   title: "Hours",
//                   value: "Mon - Fri, 9AM - 6PM PST",
//                   icon: "⏰",
//                 },
//               ].map((contact, i) => (
//                 <div
//                   key={i}
//                   className="contact-info-item glass-panel glass-card hover-trigger"
//                   style={{ padding: "2rem" }}
//                 >
//                   <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
//                     {contact.icon}
//                   </div>
//                   <h3
//                     style={{
//                       fontSize: "1rem",
//                       fontWeight: 600,
//                       textTransform: "uppercase",
//                       letterSpacing: "0.1em",
//                       marginBottom: "0.5rem",
//                       color: "var(--fg-alt)",
//                     }}
//                   >
//                     {contact.title}
//                   </h3>
//                   <p
//                     style={{
//                       fontSize: "1.3rem",
//                       fontFamily: "'Clash Display', sans-serif",
//                     }}
//                   >
//                     {contact.value}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div
//               style={{
//                 marginTop: "4rem",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <p
//                 style={{
//                   textTransform: "uppercase",
//                   letterSpacing: "0.1em",
//                   fontWeight: 600,
//                   marginBottom: "1.5rem",
//                   color: "var(--fg-alt)",
//                 }}
//               >
//                 Follow Us
//               </p>
//               <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
//                 {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map(
//                   (social, i) => (
//                     <a
//                       key={i}
//                       href="#"
//                       style={{
//                         color: "var(--fg-alt)",
//                         textDecoration: "none",
//                         fontSize: "0.9rem",
//                         fontWeight: 600,
//                         transition: "color 0.3s ease",
//                       }}
//                       onMouseEnter={(e) => {
//                         gsap.to(e.target, {
//                           color: "var(--accent)",
//                           duration: 0.3,
//                         });
//                       }}
//                       onMouseLeave={(e) => {
//                         gsap.to(e.target, {
//                           color: "var(--fg-alt)",
//                           duration: 0.3,
//                         });
//                       }}
//                     >
//                       {social}
//                     </a>
//                   ),
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- ALTERNATIVE CONTACT METHODS --- */}
//       <section
//         className="section-padding"
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
//           Multiple Ways to <span className="text-stroke">Connect</span>
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "2rem",
//           }}
//         >
//           {[
//             {
//               icon: "📧",
//               title: "Email",
//               desc: "hello@prismstudio.com",
//               detail: "Response within 24 hours",
//             },
//             {
//               icon: "📞",
//               title: "Phone",
//               desc: "+1 (555) 123-4567",
//               detail: "Mon-Fri, 9am-6pm EST",
//             },
//             {
//               icon: "💬",
//               title: "Live Chat",
//               desc: "Chat with our team",
//               detail: "Monday - Friday available",
//             },
//             {
//               icon: "📅",
//               title: "Schedule Call",
//               desc: "Book a 30-min call",
//               detail: "Available this week",
//             },
//           ].map((method, i) => (
//             <div
//               key={i}
//               className="stagger-card glass-panel glass-card"
//               style={{
//                 padding: "2.5rem",
//                 textAlign: "center",
//                 borderRadius: "1.5rem",
//               }}
//             >
//               <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>
//                 {method.icon}
//               </p>
//               <h3
//                 style={{
//                   fontSize: "1.2rem",
//                   marginBottom: "0.5rem",
//                   fontFamily: "'Clash Display', sans-serif",
//                 }}
//               >
//                 {method.title}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   fontWeight: 600,
//                   marginBottom: "0.5rem",
//                 }}
//               >
//                 {method.desc}
//               </p>
//               <p style={{ fontSize: "0.9rem", color: "var(--accent)" }}>
//                 {method.detail}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- OFFICE LOCATIONS --- */}
//       <section
//         className="section-padding"
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <h2
//           style={{
//             fontSize: "clamp(3rem, 6vw, 6rem)",
//             marginBottom: "6rem",
//             textAlign: "center",
//           }}
//         >
//           Visit Our <span className="text-stroke">Studios</span>
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "3rem",
//           }}
//         >
//           {[
//             {
//               city: "New York",
//               address: "123 Design Ave, NY 10001",
//               phone: "+1 (212) 555-0100",
//               hours: "9am - 6pm EST",
//               image:
//                 "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800",
//             },
//             {
//               city: "San Francisco",
//               address: "456 Creative St, SF 94105",
//               phone: "+1 (415) 555-0200",
//               hours: "9am - 5pm PST",
//               image:
//                 "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
//             },
//             {
//               city: "London",
//               address: "789 Innovation Rd, London EC1R",
//               phone: "+44 (20) 7555-0300",
//               hours: "9am - 6pm GMT",
//               image:
//                 "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800",
//             },
//           ].map((office, i) => (
//             <div
//               key={i}
//               className="stagger-card"
//               style={{ borderRadius: "1.5rem", overflow: "hidden" }}
//             >
//               <div
//                 style={{
//                   height: "300px",
//                   overflow: "hidden",
//                   borderRadius: "1.5rem 1.5rem 0 0",
//                 }}
//               >
//                 <img
//                   src={office.image}
//                   alt={office.city}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//               <div
//                 className="glass-panel glass-card"
//                 style={{ padding: "2.5rem", borderRadius: "0" }}
//               >
//                 <h3
//                   style={{
//                     fontSize: "1.5rem",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {office.city}
//                 </h3>
//                 <p
//                   style={{
//                     color: "var(--fg-alt)",
//                     marginBottom: "1rem",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   {office.address}
//                 </p>
//                 <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
//                   <strong>Phone:</strong> {office.phone}
//                 </p>
//                 <p style={{ fontSize: "0.9rem", color: "var(--accent)" }}>
//                   <strong>Hours:</strong> {office.hours}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- RESOURCE LIBRARY --- */}
//       <section
//         className="section-padding"
//         style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
//       >
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "clamp(3rem, 6vw, 6rem)",
//               marginBottom: "2rem",
//               textAlign: "center",
//             }}
//           >
//             Free <span className="text-stroke">Resources</span>
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "var(--fg-alt)",
//               marginBottom: "6rem",
//               textAlign: "center",
//             }}
//           >
//             Download our guides and templates to accelerate your digital
//             projects
//           </p>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//               gap: "2rem",
//             }}
//           >
//             {[
//               {
//                 icon: "📋",
//                 title: "Web Design Checklist",
//                 desc: "Complete checklist for web design projects",
//                 download: "PDF, 2.4 MB",
//               },
//               {
//                 icon: "🎨",
//                 title: "Brand Guidelines Template",
//                 desc: "Comprehensive brand identity template",
//                 download: "Figma, Editable",
//               },
//               {
//                 icon: "📊",
//                 title: "ROI Calculator",
//                 desc: "Calculate potential digital transformation ROI",
//                 download: "Excel, Interactive",
//               },
//               {
//                 icon: "🚀",
//                 title: "Growth Strategy Guide",
//                 desc: "Proven framework for digital growth",
//                 download: "PDF, 5.2 MB",
//               },
//             ].map((resource, i) => (
//               <div
//                 key={i}
//                 className="stagger-card glass-panel glass-card"
//                 style={{
//                   padding: "2.5rem",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                   borderRadius: "1.5rem",
//                 }}
//               >
//                 <p style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
//                   {resource.icon}
//                 </p>
//                 <h3
//                   style={{
//                     fontSize: "1.1rem",
//                     marginBottom: "0.8rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {resource.title}
//                 </h3>
//                 <p
//                   style={{
//                     color: "var(--fg-alt)",
//                     fontSize: "0.95rem",
//                     marginBottom: "1.5rem",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   {resource.desc}
//                 </p>
//                 <p
//                   style={{
//                     fontSize: "0.85rem",
//                     color: "var(--accent)",
//                     fontWeight: 600,
//                   }}
//                 >
//                   ↓ {resource.download}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- NEWSLETTER SIGNUP --- */}
//       <section
//         className="section-padding"
//         style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
//       >
//         <div
//           className="newsletter-box"
//           style={{
//             background:
//               "linear-gradient(135deg, var(--accent) 0%, rgba(255,77,0,0.8) 100%)",
//             borderRadius: "2rem",
//             padding: "4rem",
//             textAlign: "center",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "clamp(2rem, 6vw, 4rem)",
//               color: "white",
//               marginBottom: "1rem",
//               lineHeight: 0.9,
//             }}
//           >
//             Stay Updated With Our Latest Insights
//           </h2>
//           <p
//             style={{
//               fontSize: "1.1rem",
//               color: "rgba(255,255,255,0.9)",
//               marginBottom: "3rem",
//             }}
//           >
//             Get weekly tips on design, development, and digital strategy
//             delivered to your inbox.
//           </p>
//           <div
//             className="newsletter-form"
//             style={{
//               display: "flex",
//               gap: "1rem",
//               maxWidth: "500px",
//               margin: "0 auto",
//             }}
//           >
//             <input
//               type="email"
//               placeholder="your@email.com"
//               style={{
//                 flex: 1,
//                 padding: "1rem 1.5rem",
//                 borderRadius: "100px",
//                 border: "none",
//                 fontSize: "1rem",
//                 background: "rgba(255,255,255,0.2)",
//                 color: "white",
//               }}
//             />
//             <button
//               style={{
//                 padding: "1rem 2rem",
//                 borderRadius: "100px",
//                 background: "white",
//                 color: "var(--accent)",
//                 fontWeight: 700,
//                 textTransform: "uppercase",
//                 border: "none",
//                 cursor: "pointer",
//                 fontSize: "0.85rem",
//               }}
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* --- FAQ SECTION --- */}
//       <section
//         className="section-padding"
//         style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
//       >
//         <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "clamp(2.5rem, 5vw, 4rem)",
//               marginBottom: "6rem",
//               textAlign: "center",
//             }}
//           >
//             Frequently Asked <span className="text-stroke">Questions</span>
//           </h2>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//               gap: "2rem",
//             }}
//           >
//             {[
//               {
//                 q: "What is your typical project timeline?",
//                 a: "Most projects take 4-12 weeks depending on complexity and scope. We provide detailed timelines after discovery.",
//               },
//               {
//                 q: "Do you offer retainer services?",
//                 a: "Yes, we offer flexible retainer packages for ongoing support, maintenance, and strategy consultation.",
//               },
//               {
//                 q: "What's your design process?",
//                 a: "We follow a collaborative process: Discovery → Strategy → Design → Development → Launch → Support.",
//               },
//               {
//                 q: "Can you work with existing teams?",
//                 a: "Absolutely! We integrate seamlessly with existing development and UX teams.",
//               },
//               {
//                 q: "Do you sign NDAs?",
//                 a: "Yes, we're happy to sign NDAs or work under your confidentiality agreements.",
//               },
//               {
//                 q: "What technologies do you specialize in?",
//                 a: "We work with React, Next.js, Node.js, TypeScript, Tailwind CSS, and more based on project needs.",
//               },
//               {
//                 q: "What industries do you serve?",
//                 a: "We work with SaaS & Technology, E-commerce, Healthcare, Finance, Media, Hospitality, Education, Manufacturing, and Real Estate.",
//               },
//               {
//                 q: "How do you measure project success?",
//                 a: "Success = Performance metrics + User engagement + Business goals achieved + Client satisfaction. We track all four.",
//               },
//             ].map((faq, i) => (
//               <div
//                 key={i}
//                 className="glass-panel glass-card hover-trigger"
//                 style={{ padding: "2rem" }}
//               >
//                 <h3
//                   style={{
//                     fontSize: "1.2rem",
//                     marginBottom: "1rem",
//                     fontFamily: "'Clash Display', sans-serif",
//                   }}
//                 >
//                   {faq.q}
//                 </h3>
//                 <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
//                   {faq.a}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PAGE NAVIGATION --- */}
//       <section
//         className="section-padding"
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
//           </div>
//         </div>
//       </section>

//       {/* --- FINAL CTA --- */}
//       <section
//         className="section-padding"
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
//             Let's Create Something{" "}
//             <span className="text-stroke">Extraordinary</span>
//           </h2>
//           <p
//             style={{
//               fontSize: "1.2rem",
//               color: "var(--fg-alt)",
//               marginBottom: "3rem",
//               lineHeight: 1.8,
//             }}
//           >
//             Every great project starts with a conversation. Let's talk about
//             yours.
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
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Start the Conversation
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

// --- IMPORT LUCIDE ICONS ---
import {
  Mail,
  Smartphone,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Calendar,
  ClipboardList,
  Palette,
  BarChart3,
  Rocket,
  Check,
  Download,
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

export default function ContactPage() {
  const wrapperRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

    // Form Animations
    gsap.utils.toArray(".form-group").forEach((group, index) => {
      gsap.fromTo(
        group,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.1 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Contact Info Animations
    gsap.utils.toArray(".contact-info-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.15 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    gsap.to(".form-submit-btn", { scale: 0.95, duration: 0.2 });
    setTimeout(() => {
      gsap.to(".form-submit-btn", { scale: 1, duration: 0.2 });
      setSubmitted(true);
      gsap.fromTo(
        ".success-message",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out",
        },
      );
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 200);
  };

  return (
    <div ref={wrapperRef} style={{ paddingTop: "100px" }}>
      {/* --- MOBILE RESPONSIVE OVERRIDES --- */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important; /* Fixes massive gap below hero */
            padding: 4rem 1.5rem 2rem !important;
            justify-content: flex-start !important;
          }
          .hero-bottom-flex {
            margin-top: 3rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          /* This class squashes the 12rem/15rem massive gaps on mobile */
          .section-padding {
            padding: 5rem 1.5rem !important;
          }
          .contact-grid {
            gap: 3rem !important; /* Reduces the 6rem gap between form and info */
          }
          .newsletter-box {
            padding: 2.5rem 1.5rem !important; /* Shrinks the giant red box padding */
          }
          .newsletter-form {
            flex-direction: column !important; /* Stacks input and button on mobile */
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
          padding: "1rem 3rem 4rem",
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
              Get in Touch
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
              <SplitText text="Let's" />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="Talk" className="text-stroke" />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SplitText text="Today." />
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
              Have a project in mind? We'd love to hear about it. Reach out and
              let's discuss how we can work together to bring your vision to
              life.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          {/* Contact Form */}
          <div>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "3rem",
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              Send us a message
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="form-group" style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--fg)",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    background: "var(--input-bg)",
                    color: "var(--fg)",
                    fontFamily: "Satoshi",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    gsap.to(e.target, {
                      borderColor: "var(--accent)",
                      duration: 0.3,
                    });
                  }}
                  onBlur={(e) => {
                    gsap.to(e.target, {
                      borderColor: "var(--border)",
                      duration: 0.3,
                    });
                  }}
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div className="form-group" style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--fg)",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    background: "var(--input-bg)",
                    color: "var(--fg)",
                    fontFamily: "Satoshi",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    gsap.to(e.target, {
                      borderColor: "var(--accent)",
                      duration: 0.3,
                    });
                  }}
                  onBlur={(e) => {
                    gsap.to(e.target, {
                      borderColor: "var(--border)",
                      duration: 0.3,
                    });
                  }}
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group" style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--fg)",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    background: "var(--input-bg)",
                    color: "var(--fg)",
                    fontFamily: "Satoshi",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    outline: "none",
                    resize: "vertical",
                  }}
                  onFocus={(e) => {
                    gsap.to(e.target, {
                      borderColor: "var(--accent)",
                      duration: 0.3,
                    });
                  }}
                  onBlur={(e) => {
                    gsap.to(e.target, {
                      borderColor: "var(--border)",
                      duration: 0.3,
                    });
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="form-submit-btn magnetic-btn hover-trigger"
                style={{
                  display: "inline-flex",
                  padding: "1rem 2.5rem",
                  borderRadius: "100px",
                  background: "var(--accent)",
                  color: "white",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div
                  className="success-message"
                  style={{
                    marginTop: "2rem",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    background: "var(--accent)20",
                    color: "var(--accent)",
                    textAlign: "center",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Check size={20} strokeWidth={2.5} /> Message sent
                  successfully!
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "3rem",
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              Other ways to reach us
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            >
              {[
                {
                  title: "Email",
                  value: "hello@prism.studio",
                  icon: <Mail size={32} strokeWidth={1.5} />,
                },
                {
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                  icon: <Smartphone size={32} strokeWidth={1.5} />,
                },
                {
                  title: "Office",
                  value: "San Francisco, CA 94102",
                  icon: <MapPin size={32} strokeWidth={1.5} />,
                },
                {
                  title: "Hours",
                  value: "Mon - Fri, 9AM - 6PM PST",
                  icon: <Clock size={32} strokeWidth={1.5} />,
                },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="contact-info-item glass-panel glass-card hover-trigger"
                  style={{ padding: "2rem" }}
                >
                  <div style={{ marginBottom: "1rem", color: "var(--fg)" }}>
                    {contact.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.5rem",
                      color: "var(--fg-alt)",
                    }}
                  >
                    {contact.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      fontFamily: "'Clash Display', sans-serif",
                    }}
                  >
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div
              style={{
                marginTop: "4rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  marginBottom: "1.5rem",
                  color: "var(--fg-alt)",
                }}
              >
                Follow Us
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map(
                  (social, i) => (
                    <a
                      key={i}
                      href="#"
                      style={{
                        color: "var(--fg-alt)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        gsap.to(e.target, {
                          color: "var(--accent)",
                          duration: 0.3,
                        });
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.target, {
                          color: "var(--fg-alt)",
                          duration: 0.3,
                        });
                      }}
                    >
                      {social}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ALTERNATIVE CONTACT METHODS --- */}
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
          Multiple Ways to <span className="text-stroke">Connect</span>
        </h2>

        <div
          className="responsive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              icon: <Mail size={48} strokeWidth={1.5} />,
              title: "Email",
              desc: "hello@prismstudio.com",
              detail: "Response within 24 hours",
              color: "#0ea5e9", // Sky Blue
            },
            {
              icon: <Phone size={48} strokeWidth={1.5} />,
              title: "Phone",
              desc: "+1 (555) 123-4567",
              detail: "Mon-Fri, 9am-6pm EST",
              color: "#10b981", // Emerald Green
            },
            {
              icon: <MessageSquare size={48} strokeWidth={1.5} />,
              title: "Live Chat",
              desc: "Chat with our team",
              detail: "Monday - Friday available",
              color: "#f97316", // Bright Orange
            },
            {
              icon: <Calendar size={48} strokeWidth={1.5} />,
              title: "Schedule Call",
              desc: "Book a 30-min call",
              detail: "Available this week",
              color: "#8b5cf6", // Violet
            },
          ].map((method, i) => (
            <div
              key={i}
              className="stagger-card hover-trigger"
              style={{
                padding: "2.5rem",
                textAlign: "center",
                borderRadius: "1.5rem",
                background: method.color,
                color: "#ffffff",
                boxShadow: `0 10px 30px -10px ${method.color}60`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Perfectly centered icon wrapper */}
              <div
                style={{
                  marginBottom: "1rem",
                  color: "#ffffff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {method.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "0.5rem",
                  fontFamily: "'Clash Display', sans-serif",
                  color: "#ffffff",
                }}
              >
                {method.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "rgba(255, 255, 255, 0.95)",
                }}
              >
                {method.desc}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
              >
                {method.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- OFFICE LOCATIONS --- */}
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
          Visit Our <span className="text-stroke">Studios</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}
        >
          {[
            {
              city: "New York",
              address: "123 Design Ave, NY 10001",
              phone: "+1 (212) 555-0100",
              hours: "9am - 6pm EST",
              image:
                "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800",
            },
            {
              city: "San Francisco",
              address: "456 Creative St, SF 94105",
              phone: "+1 (415) 555-0200",
              hours: "9am - 5pm PST",
              image:
                "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
            },
            {
              city: "London",
              address: "789 Innovation Rd, London EC1R",
              phone: "+44 (20) 7555-0300",
              hours: "9am - 6pm GMT",
              image:
                "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800",
            },
          ].map((office, i) => (
            <div
              key={i}
              className="stagger-card"
              style={{ borderRadius: "1.5rem", overflow: "hidden" }}
            >
              <div
                style={{
                  height: "300px",
                  overflow: "hidden",
                  borderRadius: "1.5rem 1.5rem 0 0",
                }}
              >
                <img
                  src={office.image}
                  alt={office.city}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="glass-panel glass-card"
                style={{ padding: "2.5rem", borderRadius: "0" }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {office.city}
                </h3>
                <p
                  style={{
                    color: "var(--fg-alt)",
                    marginBottom: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {office.address}
                </p>
                <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  <strong>Phone:</strong> {office.phone}
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--accent)" }}>
                  <strong>Hours:</strong> {office.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- RESOURCE LIBRARY --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Free <span className="text-stroke">Resources</span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--fg-alt)",
              marginBottom: "6rem",
              textAlign: "center",
            }}
          >
            Download our guides and templates to accelerate your digital
            projects
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: <ClipboardList size={40} strokeWidth={1.5} />,
                title: "Web Design Checklist",
                desc: "Complete checklist for web design projects",
                download: "PDF, 2.4 MB",
              },
              {
                icon: <Palette size={40} strokeWidth={1.5} />,
                title: "Brand Guidelines Template",
                desc: "Comprehensive brand identity template",
                download: "Figma, Editable",
              },
              {
                icon: <BarChart3 size={40} strokeWidth={1.5} />,
                title: "ROI Calculator",
                desc: "Calculate potential digital transformation ROI",
                download: "Excel, Interactive",
              },
              {
                icon: <Rocket size={40} strokeWidth={1.5} />,
                title: "Growth Strategy Guide",
                desc: "Proven framework for digital growth",
                download: "PDF, 5.2 MB",
              },
            ].map((resource, i) => (
              <div
                key={i}
                className="stagger-card glass-panel glass-card"
                style={{
                  padding: "2.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  borderRadius: "1.5rem",
                }}
              >
                <div style={{ marginBottom: "1rem", color: "var(--fg)" }}>
                  {resource.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.8rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {resource.title}
                </h3>
                <p
                  style={{
                    color: "var(--fg-alt)",
                    fontSize: "0.95rem",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  {resource.desc}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--accent)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Download size={14} strokeWidth={2} /> {resource.download}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SIGNUP --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", maxWidth: "120rem", margin: "0 auto" }}
      >
        <div
          className="newsletter-box"
          style={{
            background:
              "linear-gradient(135deg, var(--accent) 0%, rgba(255,77,0,0.8) 100%)",
            borderRadius: "2rem",
            padding: "4rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              color: "white",
              marginBottom: "1rem",
              lineHeight: 0.9,
            }}
          >
            Stay Updated With Our Latest Insights
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "3rem",
            }}
          >
            Get weekly tips on design, development, and digital strategy
            delivered to your inbox.
          </p>
          <div
            className="newsletter-form"
            style={{
              display: "flex",
              gap: "1rem",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "1rem 1.5rem",
                borderRadius: "100px",
                border: "none",
                fontSize: "1rem",
                background: "rgba(255,255,255,0.2)",
                color: "white",
              }}
            />
            <button
              style={{
                padding: "1rem 2rem",
                borderRadius: "100px",
                background: "white",
                color: "var(--accent)",
                fontWeight: 700,
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section
        className="section-padding"
        style={{ padding: "12rem 3rem", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              marginBottom: "6rem",
              textAlign: "center",
            }}
          >
            Frequently Asked <span className="text-stroke">Questions</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                q: "What is your typical project timeline?",
                a: "Most projects take 4-12 weeks depending on complexity and scope. We provide detailed timelines after discovery.",
              },
              {
                q: "Do you offer retainer services?",
                a: "Yes, we offer flexible retainer packages for ongoing support, maintenance, and strategy consultation.",
              },
              {
                q: "What's your design process?",
                a: "We follow a collaborative process: Discovery → Strategy → Design → Development → Launch → Support.",
              },
              {
                q: "Can you work with existing teams?",
                a: "Absolutely! We integrate seamlessly with existing development and UX teams.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Yes, we're happy to sign NDAs or work under your confidentiality agreements.",
              },
              {
                q: "What technologies do you specialize in?",
                a: "We work with React, Next.js, Node.js, TypeScript, Tailwind CSS, and more based on project needs.",
              },
              {
                q: "What industries do you serve?",
                a: "We work with SaaS & Technology, E-commerce, Healthcare, Finance, Media, Hospitality, Education, Manufacturing, and Real Estate.",
              },
              {
                q: "How do you measure project success?",
                a: "Success = Performance metrics + User engagement + Business goals achieved + Client satisfaction. We track all four.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="glass-panel glass-card hover-trigger"
                style={{ padding: "2rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: "var(--fg-alt)", lineHeight: 1.6 }}>
                  {faq.a}
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
            Let's Create Something{" "}
            <span className="text-stroke">Extraordinary</span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--fg-alt)",
              marginBottom: "3rem",
              lineHeight: 1.8,
            }}
          >
            Every great project starts with a conversation. Let's talk about
            yours.
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
            Start the Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
