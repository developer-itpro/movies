import React, { useEffect, useState, useRef } from "react";
import "./WaveEffect.css";

const WaveEffect = () => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    const startWave = () => {
      setVisible(true);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 1000); // Effect lasts 1s
    };

    startWave(); // Start immediately

    const interval = setInterval(startWave, 5000); // Repeat every 5s

    const stopAfter = setTimeout(() => {
      clearInterval(interval); // Stop triggering waves after 20s
    }, 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
      clearTimeout(stopAfter);
    };
  }, []);

  return (
    <div className={`wave-overlay ${visible ? "visible" : ""}`}>
      <div className="wave wave-a" />
      <div className="wave wave-b" />
    </div>
  );
};

export default WaveEffect;
