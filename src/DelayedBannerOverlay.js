import React, { useEffect, useState } from "react";
import "./BannerOverlay.css"; // continue reusing the same stylesheet

const DelayedBannerOverlay = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasSeenDelayedBanner = localStorage.getItem("hasSeenDelayedBanner");

    console.log("Has visited?", hasSeenDelayedBanner); // ✅ check if localStorage is interfering

    if (!hasSeenDelayedBanner) {
      const randomDelay = Math.floor(Math.random() * 10000) + 10000;
      console.log(`Banner will appear after ${randomDelay}ms`); // ✅ confirm delay
      const timer = setTimeout(() => {
        console.log("Banner displayed ✅");
        setShowBanner(true);
        localStorage.setItem("hasSeenDelayedBanner", "true");
      }, randomDelay);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="overlay">
      <div className="banner">
        <button className="close-btn" onClick={() => setShowBanner(false)}>
          ×
        </button>
        <h2>🎉 Hallo!</h2>
        <p>
          Mein Name ist Boban, ich bin ein gut ausgebildeter React-Entwickler
          und habe 2020 Zertifizierungen in MTA Javascript und MTA HTML und CSS
          erlangt. Seitdem habe ich Javascript sehr gut gelernt, ES6+, dann kam
          React und es war eine große Herausforderung für mich. Und es gefällt
          mir. Hooks, State, Fiber, Rendering, Commit, wie es das Schicksal
          verursacht, Babel.Virtual DOM, ok, es ist nur ein einfaches Objekt :)
          .JS-Prototypen, OOP, Leaflet, Interaktion über Node.js mit dem
          Betriebssystem. Bugs, Console.log. CSS-Styling. Ich denke, ich bin
          bereit. Außerdem habe ich mehr als 20 Jahre Erfahrung in IT und Web.
          Aber jetzt möchte ich als React-Entwickler arbeiten und mich
          verbessern. Vite, Abhängigkeiten und mehr. React Native, Electron.
          Supabase, Firebase. Ich verbessere mich täglich. Nachdem ich von
          einigen Entwicklern getestet wurde, sagten sie, ich hätte eine gute
          Grundlage für eine Bewerbung. Also dachte ich mir: Okay, vielleicht
          ist es jetzt an der Zeit. Ich habe vier Jahre lang in Deutschland auf
          einen IT-Job als IT-Spezialist für Windows Server und Powershell
          gewartet, und die ganze Zeit hing mein Herz an React, Javascript und
          der Erstellung von Animationen mit JS und CSS. Außerdem kenne ich
          Typescript, sodass wir sicher tippen können. Ich würde auch gerne im
          Team arbeiten. Github und sicherer Code. Ich kann mehr schreiben, aber
          nachdem Sie mich getestet haben, können wir weiterreden. Ich bin ein
          fleißiger Arbeiter. Danke.
        </p>
      </div>
    </div>
  );
};

export default DelayedBannerOverlay;
