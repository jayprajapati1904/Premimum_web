// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import gsap from "gsap";

// export default function Header({ theme, toggleTheme }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeMenuIndex, setActiveMenuIndex] = useState(-1);
//   const menuRef = useRef(null);

//   const menuItems = [
//     {
//       name: "Services",
//       path: "/services",
//       desc: "Premium Digital Solutions",
//       color: "#ff6b6b",
//     },
//     {
//       name: "Portfolio",
//       path: "/portfolio",
//       desc: "Award-Winning Work",
//       color: "#4ecdc4",
//     },
//     {
//       name: "Studio",
//       path: "/studio",
//       desc: "Creative Team",
//       color: "#ffd93d",
//     },
//     {
//       name: "Contact",
//       path: "/contact",
//       desc: "Let's Build",
//       color: "#a8edea",
//     },
//   ];

//   // --- MENU ANIMATION ---
//   useEffect(() => {
//     if (menuOpen) {
//       gsap.to(menuRef.current, {
//         clipPath: "inset(0% 0% 0% 0%)",
//         duration: 0.9,
//         ease: "expo.inOut",
//       });
//       gsap.fromTo(
//         ".menu-link",
//         { y: 120, opacity: 0, rotateZ: 8 },
//         {
//           y: 0,
//           opacity: 1,
//           rotateZ: 0,
//           duration: 1,
//           stagger: 0.12,
//           ease: "power4.out",
//           delay: 0.3,
//         },
//       );
//     } else {
//       gsap.to(menuRef.current, {
//         clipPath: "inset(0% 0% 100% 0%)",
//         duration: 0.9,
//         ease: "expo.inOut",
//       });
//     }
//   }, [menuOpen]);

//   return (
//     <>
//       {/* --- MOBILE RESPONSIVE OVERRIDES --- */}
//       <style>{`
//         @media (max-width: 768px) {
//           .menu-grid {
//             grid-template-columns: 1fr !important;
//             gap: 2rem !important;
//             height: auto !important;
//             align-items: flex-start !important;
//             margin-top: 2rem !important;
//           }
//           .menu-left-nav {
//             gap: 1.5rem !important;
//           }
//           .menu-preview-section {
//             display: none !important; /* Hides hover images on mobile */
//           }
//           .menu-link-main {
//             font-size: 3.2rem !important; /* Scale down giant text */
//             line-height: 1 !important;
//           }
//           .menu-link-desc {
//             font-size: 0.75rem !important;
//             margin-bottom: 0.4rem !important;
//           }
//           .header-controls {
//             gap: 0.5rem !important;
//           }
//           .btn-pill {
//             padding: 0.6rem 1.2rem !important;
//             font-size: 0.7rem !important;
//           }
//         }
//       `}</style>

//       {/* --- PREMIUM FULLSCREEN MENU --- */}
//       <div
//         ref={menuRef}
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 1000,
//           background:
//             "linear-gradient(135deg, var(--bg) 0%, rgba(20,20,25,0.95) 50%, rgba(25,25,35,0.9) 100%)",
//           padding: "8rem clamp(1.25rem, 4vw, 4rem) 3rem",
//           display: "flex",
//           clipPath: "inset(0 0 100% 0)",
//           backdropFilter: "blur(30px)",
//           WebkitBackdropFilter: "blur(30px)",
//           border: "1px solid rgba(255,77,0,0.1)",
//         }}
//       >
//         {/* --- X CLOSE ICON (Added to leave menu) --- */}
//         <button
//           className="hover-trigger"
//           onClick={() => setMenuOpen(false)}
//           style={{
//             position: "absolute",
//             top: "clamp(1rem, 2.2vw, 1.5rem)",
//             right: "clamp(1.25rem, 4vw, 3rem)",
//             background: "transparent",
//             border: "1px solid rgba(255,255,255,0.2)",
//             color: "white",
//             width: "40px",
//             height: "40px",
//             borderRadius: "50%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//             zIndex: 1010,
//           }}
//           aria-label="Close Menu"
//         >
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="18" y1="6" x2="6" y2="18"></line>
//             <line x1="6" y1="6" x2="18" y2="18"></line>
//           </svg>
//         </button>

//         <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
//           <div
//             className="menu-grid"
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//               gap: "8rem",
//               height: "75vh",
//               alignItems: "center",
//             }}
//           >
//             {/* Left Navigation */}
//             <div
//               className="menu-left-nav"
//               style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
//             >
//               {menuItems.map((item, i) => (
//                 <div
//                   key={i}
//                   className="menu-link"
//                   onMouseEnter={() => setActiveMenuIndex(i)}
//                   onMouseLeave={() => setActiveMenuIndex(-1)}
//                   style={{
//                     transform:
//                       activeMenuIndex === i
//                         ? "translateX(30px)"
//                         : "translateX(0)",
//                     transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
//                   }}
//                 >
//                   <div
//                     className="menu-link-desc"
//                     style={{
//                       fontSize: "0.85rem",
//                       color: item.color,
//                       fontWeight: 700,
//                       marginBottom: "0.8rem",
//                       textTransform: "uppercase",
//                       letterSpacing: "0.2em",
//                     }}
//                   >
//                     0{i + 1} — {item.desc}
//                   </div>
//                   <Link
//                     to={item.path}
//                     className="hover-trigger menu-link-main"
//                     onClick={() => setMenuOpen(false)}
//                     style={{
//                       display: "block",
//                       fontSize: "4.5rem",
//                       lineHeight: 0.85,
//                       color: "var(--fg)",
//                       textDecoration: "none",
//                       fontFamily: "'Clash Display', sans-serif",
//                       fontWeight: 700,
//                       background: `linear-gradient(to right, var(--fg) 50%, ${item.color} 100%)`,
//                       backgroundClip: "text",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor:
//                         activeMenuIndex === i ? "transparent" : "var(--fg)",
//                       transition: "all 0.5s ease",
//                     }}
//                   >
//                     {item.name}
//                   </Link>
//                 </div>
//               ))}
//             </div>

//             {/* Right Preview */}
//             <div className="menu-preview-section">
//               <div
//                 style={{
//                   position: "relative",
//                   height: "450px",
//                   marginBottom: "2rem",
//                 }}
//               >
//                 {[
//                   {
//                     img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
//                     desc: "Modern Digital Solutions",
//                   },
//                   {
//                     img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
//                     desc: "Award-Winning Creative Work",
//                   },
//                   {
//                     img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
//                     desc: "Talented Team",
//                   },
//                   {
//                     img: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?q=80&w=800",
//                     desc: "Let's Start Your Project",
//                   },
//                 ].map((preview, idx) => (
//                   <div
//                     key={idx}
//                     style={{
//                       position: "absolute",
//                       inset: 0,
//                       borderRadius: "2rem",
//                       overflow: "hidden",
//                       opacity: activeMenuIndex === idx ? 1 : 0,
//                       pointerEvents: activeMenuIndex === idx ? "auto" : "none",
//                       transition: "opacity 0.6s ease",
//                       border: "1px solid rgba(255,77,0,0.2)",
//                       boxShadow:
//                         activeMenuIndex === idx
//                           ? "0 40px 100px rgba(255,77,0,0.2)"
//                           : "none",
//                     }}
//                   >
//                     <img
//                       src={preview.img}
//                       alt={preview.desc}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         scale: activeMenuIndex === idx ? 1 : 1.15,
//                         transition: "scale 0.8s ease",
//                       }}
//                     />
//                     <div
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         background:
//                           "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 50%)",
//                         opacity: activeMenuIndex === idx ? 1 : 0,
//                         transition: "opacity 0.6s ease",
//                       }}
//                     />
//                     <div
//                       style={{
//                         position: "absolute",
//                         bottom: "2rem",
//                         left: "2rem",
//                         right: "2rem",
//                         color: "#fff",
//                         opacity: activeMenuIndex === idx ? 1 : 0,
//                         transform:
//                           activeMenuIndex === idx
//                             ? "translateY(0)"
//                             : "translateY(20px)",
//                         transition: "all 0.6s ease",
//                       }}
//                     >
//                       <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>
//                         {preview.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div
//                 style={{
//                   padding: "2rem",
//                   background: "rgba(255,77,0,0.08)",
//                   borderRadius: "1.5rem",
//                   border: "1px solid rgba(255,77,0,0.15)",
//                   backdropFilter: "blur(10px)",
//                 }}
//               >
//                 <p
//                   style={{
//                     color: "var(--fg-alt)",
//                     fontSize: "0.95rem",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   From concept to launch, we create premium digital experiences
//                   that captivate and convert.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- HEADER --- */}
//       <header
//         style={{
//           position: "fixed",
//           top: 0,
//           width: "100%",
//           padding: "clamp(1rem, 2.2vw, 1.5rem) clamp(1.25rem, 4vw, 3rem)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           zIndex: 900,
//           background: "var(--nav-bg)",
//           backdropFilter: "blur(12px)",
//           WebkitBackdropFilter: "blur(12px)",
//           borderBottom: "1px solid var(--border)",
//         }}
//       >
//         <Link
//           to="/"
//           style={{
//             fontSize: "2rem",
//             color: "var(--fg)",
//             textDecoration: "none",
//             fontFamily: "'Clash Display', sans-serif",
//             fontWeight: 700,
//             background: "linear-gradient(to right, var(--fg), var(--accent))",
//             backgroundClip: "text",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//           className="hover-trigger"
//         >
//           Prism
//           <span
//             style={{
//               color: "var(--accent)",
//               WebkitTextFillColor: "var(--accent)",
//             }}
//           >
//             .
//           </span>
//         </Link>

//         <div
//           className="header-controls"
//           style={{ display: "flex", gap: "1rem", alignItems: "center" }}
//         >
//           <button
//             className="btn-pill hover-trigger"
//             onClick={toggleTheme}
//             style={{
//               background: "transparent",
//               border: "1px solid var(--border)",
//               color: "var(--fg)",
//               padding: "0.8rem 2rem",
//               borderRadius: "100px",
//               cursor:
//                 "pointer" /* Changed to pointer so it's clickable on mobile */,
//               fontWeight: 700,
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               fontSize: "0.75rem",
//             }}
//           >
//             {theme === "dark" ? "Light" : "Dark"}
//           </button>
//           <button
//             className="btn-pill hover-trigger"
//             onClick={() =>
//               setMenuOpen(true)
//             } /* Changed from toggle to strictly opening */
//             style={{
//               background: "transparent",
//               border: "1px solid var(--border)",
//               color: "var(--fg)",
//               padding: "0.8rem 2rem",
//               borderRadius: "100px",
//               cursor: "pointer" /* Changed to pointer */,
//               fontWeight: 700,
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               fontSize: "0.75rem",
//             }}
//           >
//             Menu
//           </button>
//         </div>
//       </header>
//     </>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(-1);
  const menuRef = useRef(null);

  const menuItems = [
    {
      name: "Services",
      path: "/services",
      desc: "Premium Digital Solutions",
      color: "#ff6b6b",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      desc: "Award-Winning Work",
      color: "#4ecdc4",
    },
    {
      name: "Studio",
      path: "/studio",
      desc: "Creative Team",
      color: "#ffd93d",
    },
    {
      name: "Contact",
      path: "/contact",
      desc: "Let's Build",
      color: "#a8edea",
    },
  ];

  // --- MENU ANIMATION ---
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.9,
        ease: "expo.inOut",
      });
      gsap.fromTo(
        ".menu-link",
        { y: 120, opacity: 0, rotateZ: 8 },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.3,
        },
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.9,
        ease: "expo.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* --- MOBILE RESPONSIVE OVERRIDES --- */}
      <style>{`
        @media (max-width: 768px) {
          .menu-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            height: auto !important;
            align-items: flex-start !important;
            margin-top: 2rem !important;
          }
          .menu-left-nav {
            gap: 1.5rem !important;
          }
          .menu-preview-section {
            display: none !important; /* Hides hover images on mobile */
          }
          .menu-link-main {
            font-size: 3.2rem !important; /* Scale down giant text */
            line-height: 1 !important;
          }
          .menu-link-desc {
            font-size: 0.75rem !important;
            margin-bottom: 0.4rem !important;
          }
          .header-controls {
            gap: 0.5rem !important;
          }
          .btn-pill {
            padding: 0.6rem 1.2rem !important;
            font-size: 0.7rem !important;
          }
        }
      `}</style>

      {/* --- PREMIUM FULLSCREEN MENU --- */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          /* Dynamically swap background based on Light/Dark theme */
          background:
            theme === "dark"
              ? "linear-gradient(135deg, var(--bg) 0%, rgba(20,20,25,0.98) 50%, rgba(25,25,35,0.95) 100%)"
              : "linear-gradient(135deg, var(--bg) 0%, rgba(245,245,250,0.98) 50%, rgba(255,255,255,0.95) 100%)",
          padding: "8rem clamp(1.25rem, 4vw, 4rem) 3rem",
          display: "flex",
          clipPath: "inset(0 0 100% 0)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          border: "1px solid var(--border)",
        }}
      >
        {/* --- X CLOSE ICON --- */}
        <button
          className="hover-trigger"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "clamp(1rem, 2.2vw, 1.5rem)",
            right: "clamp(1.25rem, 4vw, 3rem)",
            background: "transparent",
            /* Uses CSS variables so it adapts to Light/Dark automatically */
            border: "1px solid var(--border)",
            color: "var(--fg)",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 1010,
          }}
          aria-label="Close Menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
          <div
            className="menu-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "8rem",
              height: "75vh",
              alignItems: "center",
            }}
          >
            {/* Left Navigation */}
            <div
              className="menu-left-nav"
              style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            >
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  className="menu-link"
                  onMouseEnter={() => setActiveMenuIndex(i)}
                  onMouseLeave={() => setActiveMenuIndex(-1)}
                  style={{
                    transform:
                      activeMenuIndex === i
                        ? "translateX(30px)"
                        : "translateX(0)",
                    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                >
                  <div
                    className="menu-link-desc"
                    style={{
                      fontSize: "0.85rem",
                      color: item.color,
                      fontWeight: 700,
                      marginBottom: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                    }}
                  >
                    0{i + 1} — {item.desc}
                  </div>
                  <Link
                    to={item.path}
                    className="hover-trigger menu-link-main"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "4.5rem",
                      lineHeight: 0.85,
                      color: "var(--fg)",
                      textDecoration: "none",
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 700,
                      background: `linear-gradient(to right, var(--fg) 50%, ${item.color} 100%)`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor:
                        activeMenuIndex === i ? "transparent" : "var(--fg)",
                      transition: "all 0.5s ease",
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Preview */}
            <div className="menu-preview-section">
              <div
                style={{
                  position: "relative",
                  height: "450px",
                  marginBottom: "2rem",
                }}
              >
                {[
                  {
                    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
                    desc: "Modern Digital Solutions",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
                    desc: "Award-Winning Creative Work",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
                    desc: "Talented Team",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=800",
                    desc: "Let's Start Your Project",
                  },
                ].map((preview, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "2rem",
                      overflow: "hidden",
                      opacity: activeMenuIndex === idx ? 1 : 0,
                      pointerEvents: activeMenuIndex === idx ? "auto" : "none",
                      transition: "opacity 0.6s ease",
                      border: "1px solid rgba(255,77,0,0.2)",
                      boxShadow:
                        activeMenuIndex === idx
                          ? "0 40px 100px rgba(255,77,0,0.2)"
                          : "none",
                    }}
                  >
                    <img
                      src={preview.img}
                      alt={preview.desc}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        scale: activeMenuIndex === idx ? 1 : 1.15,
                        transition: "scale 0.8s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 50%)",
                        opacity: activeMenuIndex === idx ? 1 : 0,
                        transition: "opacity 0.6s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "2rem",
                        left: "2rem",
                        right: "2rem",
                        color: "#fff",
                        opacity: activeMenuIndex === idx ? 1 : 0,
                        transform:
                          activeMenuIndex === idx
                            ? "translateY(0)"
                            : "translateY(20px)",
                        transition: "all 0.6s ease",
                      }}
                    >
                      <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                        {preview.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  padding: "2rem",
                  background: "rgba(255,77,0,0.08)",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255,77,0,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p
                  style={{
                    color: "var(--fg-alt)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  From concept to launch, we create premium digital experiences
                  that captivate and convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- HEADER --- */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "clamp(1rem, 2.2vw, 1.5rem) clamp(1.25rem, 4vw, 3rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 900,
          background: "var(--nav-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "2rem",
            color: "var(--fg)",
            textDecoration: "none",
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            background: "linear-gradient(to right, var(--fg), var(--accent))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="hover-trigger"
        >
          Prism
          <span
            style={{
              color: "var(--accent)",
              WebkitTextFillColor: "var(--accent)",
            }}
          >
            .
          </span>
        </Link>

        <div
          className="header-controls"
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <button
            className="btn-pill hover-trigger"
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--fg)",
              padding: "0.8rem 2rem",
              borderRadius: "100px",
              cursor: "pointer",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.75rem",
            }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            className="btn-pill hover-trigger"
            onClick={() => setMenuOpen(true)}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--fg)",
              padding: "0.8rem 2rem",
              borderRadius: "100px",
              cursor: "pointer",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.75rem",
            }}
          >
            Menu
          </button>
        </div>
      </header>
    </>
  );
}
