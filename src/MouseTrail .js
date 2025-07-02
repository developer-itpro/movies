import { useEffect, useRef, useState } from "react";
import "./MouseTrail.css";

const MouseGlowCursor = () => {
  const glowRef = useRef();
  const [rgbGlow, setRgbGlow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const firstSwitch = setTimeout(() => setRgbGlow(true), 10000);
    const cycle = setInterval(() => {
      setRgbGlow((prev) => !prev);
    }, 15000);

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }, 30000);

    let x = 0,
      y = 0;
    let mouseX = 0,
      mouseY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      x += (mouseX - x) * 0.05;
      y += (mouseY - y) * 0.05;

      if (glowRef.current) {
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      clearTimeout(firstSwitch);
      clearTimeout(messageTimer);
      clearInterval(cycle);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className={`glow-cursor ${rgbGlow ? "rgb-glow" : ""}`}
      />
      {showMessage && (
        <div
          className="glow-message"
          style={{
            left: glowRef.current?.style.left,
            top: glowRef.current?.style.top,
          }}
        >
          Hallo ich bin <span className="matrix-name">Boban</span>
        </div>
      )}
    </>
  );
};

export default MouseGlowCursor;
