import React, { useEffect, useState } from "react";
import "./BannerOverlay.css";

const BannerOverlay = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowBanner(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="overlay">
      <div className="banner">
        <h2>👋Willkommen auf unserer Website!</h2>
        <p>
          Viel Spaß beim Entdecken der Inhalte – wir freuen uns, dass Sie hier
          sind. Die Navigation ist einfach, und Sie können Ihren Lieblingsfilm
          einfach zur Merkliste hinzufügen. Diese Seite verwendet Hooks wie
          useState, useEffects und useReducer. Sie können den Status bewerten,
          indem Sie einfach auf die Sterne klicken. Dies ist eine effiziente
          Website, die kein unnötiges erneutes Rendern verursacht. Sie ruft die
          API nach dreimaligem Eintippen in die Suche ab und bereinigt dann bei
          jeder Eingabe die Nebenwirkungen. Es gibt einen Hover-Effekt und Sie
          können mit der Eingabetaste zur Suche und zum Senden navigieren.Ich
          habe es von Grund auf selbst erstellt, aber die Idee stammt bereits
          aus einer anderen App. Ich hoffe, es gefällt Ihnen, da es hier keine
          Möglichkeit gibt, die Filme anzusehen. Hier finden Sie hilfreiche
          Informationen. Vielen Dank.
        </p>
        <button onClick={() => setShowBanner(false)}>Eingeben</button>
      </div>
    </div>
  );
};

export default BannerOverlay;
