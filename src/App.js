import React, { useState } from 'react';
import './App.css';

function App() {
  const [showNew, setShowNew] = useState(true);  // Zustand für die Anzeige der Karten

  // Text, der immer angezeigt wird (Allgemeiner Projekttext)
  const generalText = (
    <div>
      <h2>Über das Projekt</h2>
      <p>
        Auf unserer Website kann man die Anzahl der Firmenneugründungen und -auflösungen in den jeweiligen Gemeinden des Kanton Freiburg sehen. 
        Die Daten werden auf einer interaktiven Karte dargestellt, bei der man über die gewünschten Gemeinden hovern kann und so die Daten angezeigt bekommt.
      </p>
      <p>
        Wir dachten, dass dieses Projekt spannend sein könnte, da man sonst nicht sehr viel Einsicht bekommt, wie viele Firmen überhaupt existieren. 
        Darüber hinaus haben wir uns spezifisch für den Kanton Freiburg entschieden, weil wir dafür direkt die passenden Daten gefunden haben.
      </p>
    </div>
  );

  // Dynamischer Text für jede Karte
  const newCompaniesText = (
    <div>
      <h3>Neue Firmen im Kanton Freiburg</h3>
      <p>
        Diese Karte zeigt die Anzahl der **Firmengründungen** in den verschiedenen Gemeinden des Kantons Freiburg. 
        Eine höhere Zahl zeigt an, dass in dieser Gemeinde mehr Unternehmen gegründet wurden. 
        Über die Marker auf der Karte kann man mehr über die genauen Zahlen in den jeweiligen Gemeinden erfahren.
      </p>
    </div>
  );

  const closedCompaniesText = (
    <div>
      <h3>Geschlossene Firmen im Kanton Freiburg</h3>
      <p>
        Diese Karte zeigt die Anzahl der **geschlossenen Firmen** in den verschiedenen Gemeinden des Kantons Freiburg. 
        Eine höhere Zahl zeigt an, dass mehr Unternehmen in dieser Gemeinde geschlossen wurden. 
        Über die Marker auf der Karte kann man mehr über die genauen Zahlen in den jeweiligen Gemeinden erfahren.
      </p>
    </div>
  );

  return (
    <div className="App">
      <h1>Interaktive Karten der Firmengründungen und -auflösungen im Kanton Freiburg</h1>
      
      {generalText}  {/* Der allgemeine Text, der immer angezeigt wird */}
      
      <button onClick={() => setShowNew(true)}>
        Zeige neue Firmen
      </button>
      <button onClick={() => setShowNew(false)}>
        Zeige geschlossene Firmen
      </button>

      <div>
        {showNew ? (
          <div>
            {newCompaniesText}
            <iframe
              src="/karte_neue_firmen.html"  // Die HTML-Datei für neue Firmen
              width="100%"
              height="600px"
              style={{ border: "none" }}
              title="Neue Firmen"
            />
          </div>
        ) : (
          <div>
            {closedCompaniesText}
            <iframe
              src="/karte_geschlossene_firmen.html"  // Die HTML-Datei für geschlossene Firmen
              width="100%"
              height="600px"
              style={{ border: "none" }}
              title="Geschlossene Firmen"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
