import React, { useState, useEffect } from 'react';
import { themenDatenConfig } from './data';
import styles from './styles';
import { getBarometerColorClass, getErgebnisText, berechneErgebnis } from './utils';
import './App.css';

/**
 * Hauptkomponente für den "Brauche ich das wirklich"-Berater
 */
const App = () => {
  const [selectedThema, setSelectedThema] = useState("");
  const [currentFrage, setCurrentFrage] = useState(0);
  const [antworten, setAntworten] = useState({});
  const [ergebnis, setErgebnis] = useState(0);
  const [beratungAbgeschlossen, setBeratungAbgeschlossen] = useState(false);

  // Thema auswählen und Beratung zurücksetzen
  const handleThemaChange = (event) => {
    setSelectedThema(event.target.value);
    setCurrentFrage(0);
    setAntworten({});
    setErgebnis(0);
    setBeratungAbgeschlossen(false);
  };

  // Antwort speichern und zur nächsten Frage
  const handleAntwort = (wert, wichtung) => {
    const neueAntworten = { ...antworten, [currentFrage]: wert * wichtung };
    setAntworten(neueAntworten);
    
    const fragenAnzahl = themenDatenConfig[selectedThema].length;
    
    if (currentFrage < fragenAnzahl - 1) {
      setCurrentFrage(currentFrage + 1);
    } else {
      // Beratung abschließen
      setBeratungAbgeschlossen(true);
    }
  };

  // Ergebnis berechnen (live)
  useEffect(() => {
    if (selectedThema && themenDatenConfig[selectedThema]) {
      const neuesErgebnis = berechneErgebnis(antworten, themenDatenConfig[selectedThema]);
      setErgebnis(neuesErgebnis);
    }
  }, [antworten, selectedThema]);

  // App zurücksetzen
  const handleReset = () => {
    setCurrentFrage(0);
    setAntworten({});
    setErgebnis(0);
    setBeratungAbgeschlossen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Brauche ich das wirklich?</h1>
      
      {/* Thema auswählen */}
      <div className={styles.dropdownContainer}>
        <label className={styles.dropdownLabel}>Wähle eine Produktkategorie:</label>
        <select 
          className={styles.dropdownSelect} 
          value={selectedThema} 
          onChange={handleThemaChange}
        >
          <option value="">Bitte wählen</option>
          {Object.keys(themenDatenConfig).map(thema => (
            <option key={thema} value={thema}>{thema}</option>
          ))}
        </select>
      </div>
      
      {/* Dezente Fortschrittsanzeige */}
      {selectedThema && !beratungAbgeschlossen && (
        <div className={styles.progressContainer}>
          <div className={styles.progressTextContainer}>
            <span>Frage {currentFrage + 1} von {themenDatenConfig[selectedThema].length}</span>
            <span>{Math.round((currentFrage / themenDatenConfig[selectedThema].length) * 100)}%</span>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${(currentFrage / themenDatenConfig[selectedThema].length) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Fragen anzeigen */}
      {selectedThema && !beratungAbgeschlossen && themenDatenConfig[selectedThema] && (
        <div className={styles.questionContainer}>
          <h2 className={styles.questionHeading}>
            {themenDatenConfig[selectedThema][currentFrage].text}
          </h2>
          <p className={styles.questionExplanation}>
            {themenDatenConfig[selectedThema][currentFrage].erklaerung}
          </p>
          
          <div className={styles.optionsContainer}>
            {themenDatenConfig[selectedThema][currentFrage].scale.map((option, index) => (
              <button
                key={index}
                className={styles.optionButton}
                onClick={() => handleAntwort(
                  option.wert,
                  themenDatenConfig[selectedThema][currentFrage].wichtung
                )}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Live Barometer (immer sichtbar wenn Thema ausgewählt) */}
      {selectedThema && (
        <div className={styles.barometerContainer}>
          <div className={styles.barometerHeader}>
            <span className={styles.barometerLabel}>Kaufempfehlung</span>
            <span className={styles.barometerValue}>{Math.round(ergebnis)}%</span>
          </div>
          <div className={styles.barometerBar}>
            <div 
              className={`${styles.barometerFill} ${getBarometerColorClass(ergebnis)}`}
              style={{ width: `${ergebnis}%` }}
            ></div>
          </div>
          {!beratungAbgeschlossen ? (
            <p className={styles.barometerHint}>
              Beantworte alle Fragen für eine vollständige Auswertung.
            </p>
          ) : (
            <p className={styles.barometerResult}>{getErgebnisText(ergebnis)}</p>
          )}
        </div>
      )}
      
      {/* Ergebniszusammenfassung und Neustart-Button */}
      {beratungAbgeschlossen && (
        <div className={styles.resultContainer}>
          <h2 className={styles.resultHeading}>Beratung abgeschlossen</h2>
          
          <button
            className={styles.resetButton}
            onClick={handleReset}
          >
            Neu starten
          </button>
        </div>
      )}
    </div>
  );
};

export default App;