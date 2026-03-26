// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer
//       style={{
//         padding: "10rem clamp(1.25rem, 4vw, 3rem) 4rem",
//         textAlign: "center",
//         borderTop: "1px solid var(--border)",
//         position: "relative",
//         overflow: "hidden",
//         background: "var(--bg-alt)",
//       }}
//     >
//       {/* Ambient Glow Orb */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-20%",
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: "60vw",
//           height: "60vw",
//           background:
//             "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
//           filter: "blur(100px)",
//           zIndex: -1,
//         }}
//       />

//       <p
//         style={{
//           fontFamily: "Satoshi",
//           color: "var(--fg-alt)",
//           textTransform: "uppercase",
//           letterSpacing: "0.2em",
//           fontWeight: 700,
//         }}
//       >
//         Ready to elevate your brand?
//       </p>

//       <h2
//         style={{
//           fontSize: "clamp(3rem, 10vw, 8rem)",
//           lineHeight: 0.8,
//           margin: "2rem 0",
//           color: "transparent",
//           WebkitTextStroke: "1.5px var(--stroke)",
//           textStroke: "1.5px var(--stroke)",
//           transition: "all 0.4s ease",
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.color = "var(--fg)";
//           e.target.style.WebkitTextStrokeColor = "transparent";
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.color = "transparent";
//           e.target.style.WebkitTextStrokeColor = "var(--stroke)";
//         }}
//         className="hover-trigger"
//       >
//         Let's Talk.
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-end",
//           borderTop: "1px solid var(--border)",
//           paddingTop: "3rem",
//           textAlign: "left",
//           marginTop: "6rem",
//           maxWidth: "120rem",
//           margin: "6rem auto 0",
//         }}
//       >
//         <div>
//           <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
//             Prism<span style={{ color: "var(--accent)" }}>.</span>
//           </h2>
//           <p style={{ color: "var(--fg-alt)", fontSize: "0.9rem" }}>
//             © 2026 Prism Studio. All rights reserved.
//           </p>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             gap: "3rem",
//             fontFamily: "Satoshi",
//             fontWeight: 700,
//             textTransform: "uppercase",
//             fontSize: "0.9rem",
//             letterSpacing: "0.05em",
//           }}
//         >
//           {["Instagram", "Twitter", "LinkedIn", "Awwwards"].map((link, i) => (
//             <a
//               key={i}
//               href="#/"
//               className="hover-trigger"
//               style={{
//                 color: "var(--fg)",
//                 textDecoration: "none",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.color = "var(--accent)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.color = "var(--fg)";
//               }}
//             >
//               {link}
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        padding:
          "clamp(5rem, 10vw, 10rem) clamp(1rem, 4vw, 3rem) clamp(2rem, 4vw, 4rem)",
        textAlign: "center",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(circle at 50% 100%, rgba(54, 124, 255, 0.08) 0%, transparent 38%),
          radial-gradient(circle at 20% 20%, rgba(0, 153, 255, 0.035) 0%, transparent 32%),
          radial-gradient(circle at 80% 15%, rgba(100, 180, 255, 0.03) 0%, transparent 28%),
          var(--bg-alt)
        `,
      }}
    >
      {/* Soft Blue Glow Orb */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(280px, 60vw, 900px)",
          height: "clamp(280px, 60vw, 900px)",
          background:
            "radial-gradient(circle, rgba(61, 140, 255, 0.10) 0%, rgba(61, 140, 255, 0.04) 28%, transparent 65%)",
          filter: "blur(clamp(80px, 10vw, 130px))",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Extra soft side ambient */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "clamp(220px, 35vw, 500px)",
          height: "clamp(220px, 35vw, 500px)",
          background:
            "radial-gradient(circle, rgba(80, 170, 255, 0.045) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "0%",
          right: "-8%",
          width: "clamp(200px, 30vw, 420px)",
          height: "clamp(200px, 30vw, 420px)",
          background:
            "radial-gradient(circle, rgba(120, 190, 255, 0.035) 0%, transparent 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Top Text */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "Satoshi",
            color: "var(--fg-alt)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 700,
            fontSize: "clamp(0.7rem, 1vw, 0.9rem)",
          }}
        >
          Ready to elevate your brand?
        </p>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 10vw, 8rem)",
            lineHeight: 0.85,
            margin: "clamp(1.5rem, 3vw, 2rem) 0",
            color: "transparent",
            WebkitTextStroke: "1.5px var(--stroke)",
            textStroke: "1.5px var(--stroke)",
            transition: "all 0.4s ease",
            wordBreak: "break-word",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "var(--fg)";
            e.target.style.WebkitTextStrokeColor = "transparent";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "transparent";
            e.target.style.WebkitTextStrokeColor = "var(--stroke)";
          }}
          className="hover-trigger"
        >
          Let&apos;s Talk.
        </h2>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          borderTop: "1px solid var(--border)",
          paddingTop: "clamp(2rem, 4vw, 3rem)",
          textAlign: "left",
          maxWidth: "120rem",
          margin: "clamp(3rem, 6vw, 6rem) auto 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Brand */}
        <div style={{ flex: "1 1 250px" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2rem)",
              marginBottom: "1rem",
            }}
          >
            Prism<span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p
            style={{
              color: "var(--fg-alt)",
              fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
              lineHeight: 1.7,
            }}
          >
            © 2026 Prism Studio. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "clamp(1rem, 3vw, 3rem)",
            fontFamily: "Satoshi",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "clamp(0.78rem, 1vw, 0.9rem)",
            letterSpacing: "0.05em",
            flex: "1 1 300px",
          }}
        >
          {["Instagram", "Twitter", "LinkedIn", "Awwwards"].map((link, i) => (
            <a
              key={i}
              href="#/"
              className="hover-trigger"
              style={{
                color: "var(--fg)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#6eb8ff";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--fg)";
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
